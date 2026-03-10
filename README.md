# Open Job Spec Website

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

The documentation website for [Open Job Spec](https://openjobspec.org), built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [pnpm](https://pnpm.io/)

### Install dependencies

```bash
pnpm install
```

### Start the dev server

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`.

### Build for production

```bash
pnpm build
```

The static output is written to `dist/`.

### Preview the production build

```bash
pnpm preview
```

## Project structure

```
website/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── assets/          # Processed assets (images optimized by Astro)
│   ├── components/      # Custom Astro components
│   ├── content/
│   │   └── docs/        # MDX documentation pages
│   │       ├── getting-started/
│   │       ├── spec/
│   │       ├── guides/
│   │       ├── reference/
│   │       ├── ecosystem/
│   │       └── governance/
│   └── styles/          # Custom CSS
├── astro.config.mjs     # Astro + Starlight configuration
├── package.json
└── tsconfig.json
```

## Adding content

All documentation pages are MDX files in `src/content/docs/`. Each file needs frontmatter with at least `title` and `description`:

```mdx
---
title: Page Title
description: A short description for SEO and link previews.
---

Page content here.
```

The sidebar is configured in `astro.config.mjs` under the Starlight `sidebar` option.

