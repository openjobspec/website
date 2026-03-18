---
title: OJS Labs
description: Forward-looking R&D exploring the future of background job processing.
---

# 🔬 OJS Labs

![labs](https://img.shields.io/badge/OJS-Labs-blueviolet)

OJS Labs is where we prototype the **next generation** of job processing.
These features are separate from the core release train — they don't affect
SDK stability, backend conformance, or the spec.

> **The core is what you deploy today. Labs is what you demo at a conference next year.**

## Active Labs Projects

| ID | Name | Status | Description |
|----|------|--------|-------------|
| M1 | [Verifiable Compute](./verifiable-compute) | Prototype | Cryptographic attestation of job execution |
| M2 | [Agent Substrate](./agent-substrate) | Prototype | First-class LLM agent workflow support |
| M3 | [WASI Workers](./wasi-workers) | Prototype | WebAssembly-based portable workers |
| M4 | [Mirror](./mirror) | Prototype | Dual-run migration with automatic comparison |
| M5 | [CTN](./ctn) | Prototype | Compute Trust Network for verified execution |
| M6 | [Replay Studio](./replay-studio) | Prototype | Visual debugger and shadow replay engine |

## Design Principles

1. **Opt-in** — Moonshot features are extensions; core OJS works without them
2. **Spec-first** — Each moonshot has an RFC defining its envelope keys
3. **Backend-agnostic** — Features work across all 7 reference backends
4. **SDK-complete** — Every moonshot ships recorder/client support in all 9 SDKs
