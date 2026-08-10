# Agent HQ — the company org

The specialist briefs live in `.claude/agents/` (Claude Code auto-loads them; Codex/Cursor paste the
`.md` as a system prompt). Every agent opens by reading `docs/PLAYBOOK.md`, so they share one brain.
All durable state (money, tests, decisions) goes in `tracker/LEDGER.md` — the source of truth a
fresh seat reads first.

## The org chart (10 agents, by department)

**Executive**
- **challenge-lead** — runs the 30-day challenge: reads the ledger, picks the day's decisive move,
  delegates by department, enforces the budget cap and the two kill clocks, writes the daily +
  day-30 readout. Every session (and every autonomous loop) starts here.

**Research**
- **product-scout** — fresh winning-product research every run (winners rotate weekly; never a saved
  list), validated with evidence before a cent is spent.

**Finance**
- **offer-economist** — the CFO: unit economics, break-even ROAS, the $100 cap, kill/scale math,
  the ledger P&L. The discipline lives here.

**Store**
- **store-architect** — the Shopify build spec (conversion-first, near-zero fixed cost).
- **copywriter** — product pages, the five policy pages, lifecycle email; honest words that sell.

**Content**
- **creative-director** — the #1 lever: UGC scripts, hook banks, shot lists, replicate-the-winner.
- **content-engine** — turns scripts into AI videos (Creatify/HeyGen + Runway/Kling + ElevenLabs)
  and auto-posts to TikTok via approved APIs; Canva MCP for covers/carousels/thumbnails. AIGC label
  applied; rate/spam limits respected.

**Growth**
- **growth-operator** — organic posting plan, daily numbers read, then the paid test + scaling once
  revenue funds it.

**Risk & compliance**
- **compliance-guard** — trademark/counterfeit hard-no, category bans, honest shipping (FTC MITOR),
  ad policy, payout-hold avoidance. Veto power.

**Ops**
- **ops-support** — supplier selection, fulfillment routing, honest ETA comms, CS templates,
  chargeback defense (<1%).

## The autonomy layer (how the challenge runs itself)

- **The daily challenge loop — CLOUD.** `.github/workflows/challenge-loop.yml` runs one headless
  challenge-lead loop daily at 15:37 UTC (~11:37am ET) on a GitHub runner — laptop off or not.
  One-time founder unlock: set the `CLAUDE_CODE_OAUTH_TOKEN` repo secret (same token as any other
  repo's loop; from `claude setup-token`). Until then, the daily run fails loudly on purpose.
  Manual trigger: `gh workflow run challenge-loop --repo Yuve21/ai-dropship-challenge`.
- **What the loop does autonomously:** fresh product research, unit-economics checks, creative
  scripts + hooks, the content calendar, compliance sweeps, ledger P&L, and (once keys exist as repo
  secrets) AI-video generation + scheduled TikTok posting. **What it never does:** spend money,
  exceed the $100 cap, or fake an action for a missing key — founder-only steps accumulate as a
  numbered `HUMAN:` checklist in the ledger.
- **Always-on harnesses evaluated and rejected (2026-08-10):** OpenClaw and Hermes both require
  rented always-on infrastructure AND API-key billing (Anthropic blocks consumer-subscription OAuth
  for third-party harnesses). The GitHub Actions design runs on the subscription with zero infra.

## Portability: what a fresh seat inherits vs re-wires

**Inherits from the clone:** the playbook, the 30-day plan, budget rules, every agent brief, the
ledger, the setup guide. **Re-wires per machine/seat:** `.env` keys (never in git), MCP connections
(Canva is in `.cursor/mcp.json`; Claude Code adds it user-scoped), and repo secrets for the cloud
loop (set once on GitHub, machine-independent thereafter).

## The gates (a decision is not made until these hold)
- Out-of-pocket <= $100, ever (offer-economist verifies before any spend).
- No product ships without: >30% net margin, a compliance pass (no trademark, honest ETA), and a
  sample held.
- Two kill clocks: paid dies in 48-72h on thresholds; organic products get weeks (judge hooks fast,
  the product slowly). Winners scale <=20% at a time, on earned revenue.
- A loop never returns empty — and never fabricates. The ledger records what actually happened.
