# Dead Parrot Law: CI gate sandbox

A small mock website for building and testing a security gate in CI. Nothing in
here is real: the firm, the people and the content are made up.

## Stack
- [Astro](https://astro.build) with the Node adapter (server output)
- [Bun](https://bun.sh) for installing and running

## Run it
With Bun:
```bash
bun install
bun run dev        # http://localhost:4321, live reload
bun run build && bun run start
```

With Docker (this is what CI should use):
```bash
docker build -t ci-gate-sandbox .
docker run --rm -p 4321:4321 ci-gate-sandbox
```

## Pages
| Path | What it is |
|---|---|
| `/` | Home |
| `/about` | About the firm |
| `/contact` | Contact form, posts to `/api/contact` |

Security headers are set in `src/middleware.ts`.
