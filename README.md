# Evergreen Labs Website

Public Svelte site for Evergreen Labs, deployed through a Cloudflare Worker and
static assets.

## Installation

To install dependencies:

```bash
bun install
```

## Development

To run the development server:

```bash
bun run dev
```

## Contact Email Gate

The public site links to `/contact-email?subject=Project%20conversation` instead
of embedding the contact email in the Svelte bundle. The Cloudflare Worker reads
the destination from `CONTACT_EMAIL` and returns a noindex, no-store mailto
handoff page.

For local Cloudflare Worker testing, create an untracked `.dev.vars` file:

```bash
CONTACT_EMAIL=contact@example.invalid
```

For staging and production, configure `CONTACT_EMAIL` as a Cloudflare Worker
environment variable. Do not commit `.dev.vars` or other local env files.

## Building

To build for production:

```bash
bun run build
```

The build outputs static assets plus `dist/_worker.js`.

## Testing

To run tests:

```bash
bun run test
```

The normal validation lanes are:

```bash
bun run check
bun run test
bun run test:e2e
bun run build
```

## Project Structure

```
evergreen-io/
├── src/
│   ├── lib/          # Reusable components and utilities
│   ├── tests/        # Test files
│   ├── app.d.ts      # TypeScript definitions
│   ├── App.svelte    # Root Svelte component
│   ├── main.ts       # Application entry point
│   └── app.css       # Global styles
├── public/           # Static assets
│   └── index.html    # HTML template
└── package.json      # Project dependencies and scripts
```

This project uses [Bun](https://bun.sh) as the JavaScript runtime and package manager, and [Svelte](https://svelte.dev) as the frontend framework.
