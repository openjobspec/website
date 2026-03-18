---
title: "M5: CTN (Compute Trust Network)"
description: Decentralized trust network for verified job execution across organizational boundaries.
---

# M5: CTN

## Overview

The Compute Trust Network (CTN) is a decentralized system for verifying job
execution across organizational boundaries. It builds on M1's attestation
to create a shared trust layer.

## Key Components

- **CTN node** — Lightweight verification node that validates and stores attestation receipts
- **Trust anchors** — Root-of-trust certificates for participating organizations
- **Receipt ledger** — Append-only log of verified execution receipts
- **Cross-org verification** — Verify partner job executions without trusting their infrastructure
- **Policy engine** — Configurable trust policies (accept/reject/audit)

## Use Cases

- **Supply chain** — Verify computation in multi-party supply chains
- **Regulatory compliance** — Auditable proof of execution for regulators
- **Federation** — Trusted job execution across organizational boundaries

## Status

RFC in development. CTN node prototype with in-memory ledger complete.
