---
title: "M1: Verifiable Compute"
description: Cryptographic attestation binding job inputs and outputs to execution measurements.
---

# M1: Verifiable Compute

## Overview

Verifiable Compute adds cryptographic attestation to OJS job execution.
Every job produces a signed receipt proving that specific inputs produced
specific outputs in a measured runtime environment.

## Key Components

- **`ext_attest` envelope key** — Carries attestation documents in the job envelope (RFC-0010)
- **Codec Server plugins** — Signer and Attestor plugins for the OJS codec server
- **Receipt format** — Signed binding of `(job_id, args_hash, result_hash, runtime_measurement)`
- **CTN integration** — Receipts can be submitted to the Compute Trust Network (M5)

## Use Cases

- **Compliance** — Prove a regulated computation ran correctly
- **Audit trails** — Cryptographic evidence of job execution
- **Multi-party workflows** — Verify partner computations

## Status

RFC-0010 at Stage 2 (Draft). Codec server plugin prototype complete.
