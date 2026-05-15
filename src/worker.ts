import type { ExportedHandler, Fetcher } from "@cloudflare/workers-types";

export interface Env {
  ASSETS: Fetcher;
}

const SPA_FALLBACK_PATH = "/index.html";

type WorkerRequest = Parameters<NonNullable<ExportedHandler<Env>["fetch"]>>[0];

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

const worker = {
  async fetch(request, env) {
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
