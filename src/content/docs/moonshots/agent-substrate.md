---
title: "M2: Agent Substrate"
description: First-class LLM agent workflow support with human-in-the-loop and tool orchestration.
---

# M2: Agent Substrate

## Overview

Agent Substrate extends OJS with first-class support for LLM agent workflows.
It adds agent-specific lifecycle states, tool orchestration, and human-in-the-loop
pause/resume semantics.

## Key Components

- **`ext_agent_v2` envelope key** — Agent workflow metadata (RFC-0011)
- **Agent lifecycle states** — `PAUSE_HUMAN`, `RESUME_HUMAN`, `FORK_AGENT`, `MERGE_AGENT`
- **Tool retry** — `TOOL_RETRY_ALTERNATE` for automatic fallback to alternative tools
- **Session management** — Long-running agent sessions with checkpoint/resume

## Use Cases

- **AI assistants** — Multi-step agent workflows with human approval gates
- **Autonomous agents** — Self-directed task execution with guardrails
- **Tool orchestration** — Coordinated tool calling with retry logic

## Status

RFC-0011 at Stage 2 (Draft). Go and JS SDK support complete.
