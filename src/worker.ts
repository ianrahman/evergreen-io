import type { Fetcher } from "@cloudflare/workers-types";

export interface Env {
  ASSETS: Fetcher;
}

const SPA_FALLBACK_PATH = "/index.html";

const shouldServeSpaFallback = (request: Request): boolean => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return false;
  }

  const { pathname } = new URL(request.url);
  if (pathname === "/" || pathname.endsWith("/")) {
    return true;
  }

  return !pathname.includes(".");
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || !shouldServeSpaFallback(request)) {
      return response;
    }

    const fallbackUrl = new URL(SPA_FALLBACK_PATH, request.url);
    return env.ASSETS.fetch(new Request(fallbackUrl.toString(), request));
  },
};
