# Agent HQ — the team

The specialist briefs live in `.claude/agents/` (Claude Code auto-loads them; Codex/Cursor paste the
`.md` as a system prompt). Every agent opens by reading `docs/PLAYBOOK.md`, so they share one brain.
All durable state (money, tests, decisions) goes in `tracker/LEDGER.md`.

## The orchestrator
- **challenge-lead** — runs the 30-day challenge. Owns the daily loop, enforces the budget cap and
  the kill/scale gates, delegates to specialists, writes the daily + day-30 readout to the ledger.
  Start here every session ("run challenge-lead, it's day N").

## The specialists
- **product-scout** — finds + validates winning products from the free research stack (live, every
  run — winners rotate weekly). Hands back a ranked, evidence-backed shortlist.
- **offer-economist** (the CFO) — unit economics, pricing, break-even ROAS, the $100 cap, kill/scale
  math, the ledger. The discipline lives here.
- **store-architect** — the Shopify store spec: theme, structure, product-page layout, the free apps.
- **copywriter** — product descriptions, policy pages, store + email copy. House voice.
- **creative-director** — the #1 lever: UGC/TikTok video scripts + hook banks + creative briefs.
- **growth-operator** — organic posting plan, then the paid test + scaling once revenue funds it.
- **compliance-guard** — policies, FTC/MITOR, ad-platform policy, trademark/counterfeit, payout-hold
  and ban avoidance. Has veto over anything that risks a ban or a legal problem.
- **ops-support** — supplier selection, fulfillment via DSers/CJ, honest shipping ETAs, customer
  service, chargeback defense.

## How to run
Claude Code: Task tool by name. Codex/Cursor: paste the brief. Each agent's deliverable is a concrete
work product (a shortlist, a spec, 5 scripts, a P&L) plus, where relevant, numbered `HUMAN:` steps.
Write durable results to `tracker/LEDGER.md`, not just the chat.

## The gates (a decision is not made until these hold)
- Out-of-pocket <= $100, ever (offer-economist verifies before any spend).
- No product ships without: >30% net margin, a compliance pass (no trademark, honest ETA), and a
  sample held.
- Losers die in 48-72h on the playbook thresholds. Winners scale <=20% at a time, on earned revenue.
