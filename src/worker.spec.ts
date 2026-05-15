import { describe, expect, it, vi } from "vitest";
import worker, { type Env } from "./worker";

type WorkerFetchRequest = Parameters<typeof worker.fetch>[0];

const createRequest = (url: string, init?: RequestInit): WorkerFetchRequest =>
  new Request(url, init) as unknown as WorkerFetchRequest;

const createEnv = (response = new Response("not found", { status: 404 })): Env => ({
  ASSETS: {
    fetch: vi.fn().mockResolvedValue(response),
  } as unknown as Env["ASSETS"],
  CONTACT_EMAIL: "contact@example.invalid",
});

describe("worker", () => {
  it("serves a noindex contact email handoff when configured", async () => {
    const env = createEnv();
    const response = await worker.fetch(
      createRequest("https://evergreenlabs.io/contact-email?subject=Project%20conversation"),
      env,
    );

    const body = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    expect(response.headers.get("X-Robots-Tag")).toBe("noindex, nofollow");
    expect(body).toContain("mailto:contact@example.invalid?subject=Project%20conversation");
    expect(body).toContain("<meta name=\"robots\" content=\"noindex, nofollow\">");
    expect(body).toContain("Back to Evergreen Labs");
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
  });

  it("serves the contact email handoff for trailing slash requests", async () => {
    const env = createEnv();
    const response = await worker.fetch(
      createRequest("https://evergreenlabs.io/contact-email/"),
      env,
    );

    const body = await response.text();

    expect(response.status).toBe(200);
    expect(body).toContain("mailto:contact@example.invalid?subject=Project%20conversation");
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
  });

  it("returns a noindex unavailable page when contact email is missing", async () => {
    const env = { ...createEnv(), CONTACT_EMAIL: undefined };
    const response = await worker.fetch(
      createRequest("https://evergreenlabs.io/contact-email"),
      env,
    );

    const body = await response.text();

    expect(response.status).toBe(503);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    expect(response.headers.get("X-Robots-Tag")).toBe("noindex, nofollow");
    expect(body).toContain("Contact is unavailable");
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
  });

  it("rejects non-GET contact email requests", async () => {
    const env = createEnv();
    const response = await worker.fetch(
      createRequest("https://evergreenlabs.io/contact-email", { method: "POST" }),
      env,
    );

    expect(response.status).toBe(405);
    expect(response.headers.get("Allow")).toBe("GET");
    expect(response.headers.get("X-Robots-Tag")).toBe("noindex, nofollow");
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
  });

  it("preserves SPA fallback behavior for navigational routes", async () => {
    const env = createEnv(new Response("asset missing", { status: 404 }));

    await worker.fetch(
      createRequest("https://evergreenlabs.io/operating-manual"),
      env,
    );

    expect(env.ASSETS.fetch).toHaveBeenCalledTimes(2);
    expect(env.ASSETS.fetch).toHaveBeenLastCalledWith(
      new URL("/index.html", "https://evergreenlabs.io/operating-manual"),
      expect.objectContaining({ method: "GET" }),
    );
  });
});
