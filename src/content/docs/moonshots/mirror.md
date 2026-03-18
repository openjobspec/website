---
title: "M4: Mirror"
description: Dual-run migration with automatic output comparison for safe backend transitions.
---

# M4: Mirror

## Overview

Mirror enables safe backend migrations by running jobs on both the old and new
backend simultaneously, comparing outputs, and automatically detecting divergences.

## Key Components

- **`ext_mirror` envelope key** — Dual-run configuration (RFC-0013)
- **Mirror controller** — Routes jobs to primary and shadow backends
- **Comparator** — Diffs outputs between backends
- **Traffic ramping** — Gradual traffic shift with automatic rollback on divergence
- **CTN integration** — Mirrored attestations for verified comparison

## Use Cases

- **Backend migration** — Move from Redis to Postgres with zero downtime
- **Version upgrades** — Validate new handler versions against production traffic
- **A/B testing** — Compare backend performance characteristics

## Status

RFC-0013 at Stage 2 (Draft). Mirror controller and comparator functional.
