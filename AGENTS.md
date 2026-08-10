# AGENTS.md: instructions for any agent working in this repo

**Start at [`BOOTSTRAP.md`](BOOTSTRAP.md).** It holds the copy-paste kickoff prompt, the per-seat guide to
how agents work here, and the degradation ladder. This file is the short version, at the root, because
Codex and several other seats read `AGENTS.md` natively.

This repo is the operating system for a live 30-day AI-dropshipping challenge: a $50-$100 out-of-pocket
start, an organic-first strategy, and ten department briefs that share one brain and one accumulating
memory. It is model-agnostic. Every brief is plain markdown and works as a system prompt in any seat.

## Read in this order, every session, before acting

1. `BOOTSTRAP.md` (how to run this here)
2. `START-HERE.md` (orientation and the honest frame)
3. `docs/PLAYBOOK.md` (the shared brain)
4. `docs/LEARNINGS.md` (what we proved, with evidence; **it outranks the playbook** where they disagree)
5. `tracker/LEDGER.md` (the source of truth for where things stand)
6. `docs/WARM-UP.md` (the Challenge Warm-Up Protocol v1) and `docs/NO-STALL.md` (never end a run empty)
7. `agents/HQ.md` and the brief for whatever role you are taking, in `.claude/agents/`

The orchestrator is `challenge-lead`. If your seat can spawn sub-agents, spawn them. If it cannot, adopt
each brief in sequence and say which role you are in. Sequential loses nothing but time.

## The hard rules (non-negotiable, in every seat)

- **$100 out-of-pocket cap, ever.** Reinvested revenue is unlimited; founder money is not.
- **You never spend money and never commit the founder to spending.** You prepare spending decisions;
  a human approves them. Ad campaigns are drafted and left paused.
- **Warm-up first.** No product content and no CTA or link posts from an account that has not reached
  Day 1 of the Challenge Warm-Up Protocol v1 (`docs/WARM-UP.md`).
- **Terms-of-service clean only.** No proxies, cloud phones, anti-detect browsers, bought followers,
  engagement pods, bought or aged or recycled accounts, no several accounts on one device, no unofficial
  login or session-token posting bots. No trademarked or counterfeit products. Honest shipping windows,
  always. Realistic AI content carries the AIGC label.
- **Evidence-based learnings only.** Numbers from the ledger or a dashboard, marked estimated versus
  confirmed, with the sample size. No numbers means it is a labelled `HYPOTHESIS`, not a learning. A day
  that concluded nothing is recorded as concluding nothing. Never invent a finding to look productive.
- **Never present a projection or a plan as a result.**
- **Never end a run with nothing but a blocker.** A gate stops the gated action, never the run
  (`docs/NO-STALL.md`).
- **No secrets in this repo, ever.** Keys live in a gitignored `.env` and in vendor dashboards.
- **House style:** no em dashes, no hype, plain honest voice.

## Every run closes with the same six things

Work actually done (name the artifact), the product bench state, which gates blocked and what was
prepared against them, the learnings step, the founder's outstanding actions ranked by cost of delay, and
the money line against the $100 cap.
