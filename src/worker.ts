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

const isContactEmailPath = (pathname: string): boolean =>
  pathname === CONTACT_EMAIL_PATH || pathname === `${CONTACT_EMAIL_PATH}/`;

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
    <style>
      :root {
        color: #1f271f;
        background: #f2f1e8;
        font-family: ui-sans-serif, "Avenir Next", "Segoe UI", system-ui, -apple-system, sans-serif;
      }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
      }
      main {
        width: min(34rem, calc(100% - 2rem));
        border-top: 1px solid rgba(42, 54, 42, 0.42);
        padding-top: 2rem;
      }
      h1 {
        font-family: Georgia, "Iowan Old Style", "Times New Roman", Times, serif;
        font-size: clamp(2.5rem, 8vw, 4.5rem);
        line-height: 0.98;
        margin: 0 0 1.5rem;
      }
      p {
        color: #5f675e;
        font-size: 1.05rem;
        line-height: 1.6;
      }
      a {
        color: #1f271f;
        font-weight: 700;
        text-underline-offset: 0.18em;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2rem;
      }
    </style>
    <script>window.location.href = ${JSON.stringify(mailto)};</script>
  </head>
  <body>
    <main>
      <h1>Email Evergreen Labs</h1>
      <p>Your email app should open automatically.</p>
      <div class="actions">
        <a href="${escapedMailto}">Open an email to ${escapedEmail}</a>
        <a href="/">Back to Evergreen Labs</a>
      </div>
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
    if (isContactEmailPath(pathname)) {
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
