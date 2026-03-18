---
title: "M3: WASI Workers"
description: WebAssembly-based portable workers that run anywhere — server, browser, edge, mobile.
---

# M3: WASI Workers

## Overview

WASI Workers enables job handlers compiled to WebAssembly to run across
any WASI-compatible host — servers, browsers, edge networks, and mobile devices.

## Key Components

- **`ext_runtime` envelope key** — Runtime capability requirements (RFC-0012)
- **Build CLI** — `ojs worker build` compiles Rust, TinyGo, and JS handlers to `.wasm`
- **Host runtimes** — Server (Wasmtime), browser (Web Worker), edge, iOS, Android
- **Artifact attestation** — SBOM generation and signing for built artifacts
- **Scheduler feedback** — Runtime-aware scheduling based on host capabilities

## Use Cases

- **Edge computing** — Run jobs close to users on CDN edge nodes
- **Browser workers** — Offload computation to the client browser
- **Portable handlers** — Write once, run on any platform

## Status

RFC-0012 at Stage 2 (Draft). Server host and build CLI functional.
Browser, iOS, and Android hosts in development.
