# AGENTS.md: instructions for any agent working in this repo

**Start at [`BOOTSTRAP.md`](BOOTSTRAP.md)** for the copy-paste kickoff prompt, the per-seat guide and the
degradation ladder. This file is the short version, at the root, because Codex and several other seats read
`AGENTS.md` natively.

This repo is the operating system for a live 30-day AI-dropshipping challenge: a $50-$100 out-of-pocket
start, organic-first, ten department briefs sharing one brain and one accumulating memory. Model-agnostic:
every brief is plain markdown and works as a system prompt in any seat.

**The target: $1,000/day net profit by Day 30** (`docs/MANDATE.md`). Every run is measured against the gap
to it.

## Read in this order, every session, before acting

1. `BOOTSTRAP.md` (how to run this here)
2. `docs/MANDATE.md` (the target and the backwards math)
3. `START-HERE.md` (orientation)
4. `docs/PLAYBOOK.md` (the shared brain, and the four non-negotiables)
5. `docs/LEARNINGS.md` (what we proved, with evidence; **it outranks the playbook** where they disagree)
6. `tracker/LEDGER.md` (where things stand)
7. `docs/30-DAY-PLAN.md` (the sequence and the daily checkpoints)
8. `docs/WARM-UP.md` and `docs/NO-STALL.md`
9. `agents/HQ.md` and the brief for the role you are taking, in `.claude/agents/`

The orchestrator is `challenge-lead`. If your seat can spawn sub-agents, spawn them; if not, adopt each
brief in sequence and say which role you are in. Sequential loses time, nothing else.

## Hard rules, in every seat

- **The four account-survival rules:** `docs/PLAYBOOK.md`, "Non-negotiable (account survival)". Banned
  techniques in detail: `docs/WARM-UP.md`, "Hard no".
- **You prepare spending decisions; a human approves them.** Ad campaigns are drafted and left paused.
  Reinvested revenue is unlimited; founder money is capped.
- **Warm-up gate, while enabled:** no product content and no CTA/link posts from an account short of Day 1
  of the Challenge Warm-Up Protocol v1. The founder can switch the gate off (`docs/WARM-UP.md`).
- **Realistic AI content carries the AIGC label.**
- **Evidence-based learnings only.** Numbers from the ledger or a dashboard, marked estimated versus
  confirmed, with the sample size. No numbers means a labelled `HYPOTHESIS`. A day that concluded nothing
  is recorded as concluding nothing. Never present a projection or a plan as a result.
- **Never end a run with nothing but a blocker.** A gate stops the gated action, never the run
  (`docs/NO-STALL.md`).
- **No secrets in this repo, ever.** Keys live in a gitignored `.env` and in vendor dashboards.
- **House style:** no em dashes, no hype, plain honest voice.

## Every run closes with the same seven things

The gap to $1,000/day net and the fastest lever to close it; work actually done (name the artifact); the
bench state; which gates blocked and what was prepared against them; the learnings step; the founder's
outstanding actions ranked by cost of delay; the money line against the $100 cap.
