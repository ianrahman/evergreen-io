import type { ExportedHandler, Fetcher } from "@cloudflare/workers-types";

export interface Env {
  ASSETS: Fetcher;
  CONTACT_EMAIL?: string;
}

const SPA_FALLBACK_PATH = "/index.html";
const CONTACT_EMAIL_PATH = "/contact-email";
const DEFAULT_CONTACT_SUBJECT = "Project conversation";
const NO_INDEX_HEADERS = {
  "Cache-Control": "no-store",
  "Content-Type": "text/html; charset=utf-8",
  "X-Robots-Tag": "noindex, nofollow",
};

type WorkerRequest = Parameters<NonNullable<ExportedHandler<Env>["fetch"]>>[0];
type WorkerResponse = Awaited<ReturnType<Fetcher["fetch"]>>;

const createWorkerResponse = (
  body: BodyInit | null,
  init?: ResponseInit,
): WorkerResponse => new Response(body, init) as unknown as WorkerResponse;

const shouldServeSpaFallback = (request: WorkerRequest): boolean => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return false;
  }

  const { pathname } = new URL(request.url);
  if (pathname === "/" || pathname.endsWith("/")) {
    return true;
  }

  return !pathname.includes(".");
};

const escapeHtml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const createContactEmailResponse = (
  request: WorkerRequest,
  env: Env,
): WorkerResponse => {
  const { searchParams } = new URL(request.url);
  const contactEmail = env.CONTACT_EMAIL?.trim();

  if (!contactEmail) {
    return createWorkerResponse(
      `<!doctype html><html lang="en"><head><meta name="robots" content="noindex, nofollow"><title>Contact unavailable</title></head><body><main><h1>Contact is unavailable</h1><p>Email contact is not configured for this environment.</p></main></body></html>`,
      {
        status: 503,
        headers: NO_INDEX_HEADERS,
      },
    );
  }

  const subject = searchParams.get("subject")?.trim() || DEFAULT_CONTACT_SUBJECT;
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
  const escapedMailto = escapeHtml(mailto);
  const escapedEmail = escapeHtml(contactEmail);

  return createWorkerResponse(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Email Evergreen Labs</title>
    <script>window.location.href = ${JSON.stringify(mailto)};</script>
  </head>
  <body>
    <main>
      <h1>Email Evergreen Labs</h1>
      <p>Your email app should open automatically.</p>
      <p><a href="${escapedMailto}">Open an email to ${escapedEmail}</a></p>
    </main>
  </body>
</html>`,
    {
      headers: NO_INDEX_HEADERS,
    },
  );
};

const worker = {
  async fetch(request, env): Promise<WorkerResponse> {
    const { pathname } = new URL(request.url);
    if (pathname === CONTACT_EMAIL_PATH) {
      if (request.method !== "GET") {
        return createWorkerResponse("Method not allowed", {
          status: 405,
          headers: {
            Allow: "GET",
            "Cache-Control": "no-store",
            "X-Robots-Tag": "noindex, nofollow",
          },
        });
      }

      return createContactEmailResponse(request, env);
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || !shouldServeSpaFallback(request)) {
      return response;
    }

    // Preserve navigational request metadata while mapping SPA routes to the app shell.
    const fallbackUrl = new URL(SPA_FALLBACK_PATH, request.url);
    return env.ASSETS.fetch(fallbackUrl, {
      headers: request.headers,
      method: request.method,
    });
  },
} satisfies ExportedHandler<Env>;

export default worker;
