---
title: "M6: Replay Studio"
description: Visual debugger and shadow replay engine for recorded job executions.
---

# M6: Replay Studio

## Overview

Replay Studio provides a visual debugger for OJS job executions. SDK recorders
capture execution traces that can be replayed, stepped through, and compared
against current code to detect behavioural changes.

## Key Components

- **`ext_sourcemap` envelope key** — Source code provenance (RFC-0014)
- **SDK recorders** — Execution capture in all 9 SDKs (Go, JS, Python, Java, Rust, Ruby, .NET, PHP, WASM)
- **Studio UI** — React-based execution timeline, source viewer, replay controls
- **Shadow replay engine** — Re-executes traces and diffs outputs
- **Champion/Challenger** — Automatic promotion/rollback based on metrics
- **IDE integration** — VS Code extension and JetBrains plugin
- **Failure prediction** — Online logistic regression to flag likely-to-fail jobs

## Use Cases

- **Post-mortem debugging** — Step through failed job executions
- **Regression detection** — Shadow replay against new code to find behavioral changes
- **Safe deployments** — Champion/challenger traffic splitting with auto-rollback
- **Proactive alerting** — Predict failures before they happen

## Status

M6 P1 prototype. Studio UI shell with demo data. All 9 SDK recorders implemented.
Shadow replay engine, champion/challenger controller, and failure predictor functional.
