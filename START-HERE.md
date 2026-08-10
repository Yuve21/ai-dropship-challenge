# START HERE — the AI Dropshipping Challenge (read this first)

You are a fresh Claude seat picking up a live, 30-day AI-dropshipping challenge. This file orients
you; everything it points to is in this repo, so you become useful without re-learning what earlier
sessions already worked out. Read the three files below in order, then act.

## The mission (one paragraph)
Turn a **$50-$100 out-of-pocket start** into a significantly profitable dropshipping business within
**30 days**, using a team of specialized sub-agents (in `.claude/agents/`) to compress the
research -> build -> creative -> test -> analyze loop and enforce brutal discipline. Out-of-pocket
is capped at **$100 total, ever**; once revenue comes in it gets reinvested, but only the first
$50-$100 comes from the founder's pocket. See `docs/BUDGET-RULES.md` for the exact money rules.

## The honest frame (do not skip — it shapes every decision)
- **~80-90% of dropshipping stores fail.** "Thousands in 30 days off $100" happens, but for a small
  minority, usually people with prior skill or a viral organic video. On a $100 cap, month one buys
  **data and a shot**, not guaranteed profit. Your job is to maximize the shot, not to pretend.
- **$100 is a TEST budget, not a scale budget.** It cannot properly run paid ads. So the strategy is
  **organic-first** (free TikTok/UGC volume) to validate a product, then reinvest *earned* revenue
  into paid scaling. This is the single most important strategic choice and it's non-negotiable on
  this budget.
- **Creative (short video) is the #1 lever now**, above targeting and even product. Volume of hooks
  wins.
- **The content loop is automated; a human still funds + approves.** Per the founder's direction the
  team GENERATES the AI videos and AUTO-POSTS them to TikTok (approved APIs/MCPs, see
  `docs/AUTOMATION.md`), so no hand-filming or manual posting. What still needs the human: one-time
  account creation + OAuth connects + KYC, funding the APIs/supplier, and **launching ad spend**. Mark
  those as `HUMAN:` steps, copy-paste-ready. Honest caveats stay visible: AI video converts below real
  UGC (a volume engine), realistic AI needs the AIGC label, and API posts may take a reach haircut.
- **Day zero:** the founder has nothing open yet. `docs/SETUP-GUIDE.md` is the ordered checklist to
  stand everything up (store, payments, supplier, AI-video keys, TikTok posting). Point them there
  first.

## Read these three, in order
1. `docs/PLAYBOOK.md` — the shared brain: how this works, winning-product criteria, unit economics,
   the metrics + kill/scale thresholds, the failure modes. Research-grounded (2025-26).
2. `docs/30-DAY-PLAN.md` — the day-by-day plan, phased around the budget.
3. `docs/BUDGET-RULES.md` — the money discipline (the $100 cap, reinvestment, cash-flow float).

Then skim `docs/ACCOUNTS-AND-TOOLS.md` (what the human must sign up for), `docs/AUTOMATION.md` (the
CLIs/MCPs/APIs that automate the maximum, and the hard line of what stays human), and `agents/HQ.md`
(the team roster and how to run each agent).

## How to work
- **The orchestrator is `challenge-lead`.** In Claude Code, launch it with the Task tool ("run the
  challenge-lead: it's day 1"). In Codex/Cursor, paste `.claude/agents/challenge-lead.md` as the
  system prompt. It runs the daily loop and delegates to the specialists.
- **The challenge also runs ITSELF daily — but it ships DORMANT.** The daily workflow
  (`.github/workflows/challenge-loop.yml`) is **disabled on purpose**: the founder's Lark seat built
  this repo but does not run the challenge. ACTIVATION IS THIS SEAT'S FIRST JOB, two commands:
  1. `gh workflow enable challenge-loop --repo Yuve21/ai-dropship-challenge`
  2. `gh secret set CLAUDE_CODE_OAUTH_TOKEN --repo Yuve21/ai-dropship-challenge` (founder pastes the
     token from `claude setup-token`)
  Then it executes one challenge-lead loop daily at ~11:37am ET on a GitHub runner (research,
  creative, analysis, ledger readout — never spending). See the autonomy section of `agents/HQ.md`.
- **Everything is logged in `tracker/LEDGER.md`** — money in/out, every product tested, every
  kill/scale decision, running P&L. Update it every working session; it is the source of truth for
  where the challenge stands. A new seat reads it to know exactly where things are.
- **Measure, don't guess.** Thresholds in the playbook are starting rules; recalibrate against the
  real account numbers once data exists. Say plainly what is unverified.
- **Discipline is the product.** Kill losers in 48-72h. Protect margin. Reinvest only earned revenue.
  Never spend past the $100 out-of-pocket cap.

## What NOT to do
- Never sell trademarked/branded/counterfeit products (instant ban + legal risk).
- Never hide long shipping times (FTC + TikTok require honest delivery windows).
- Never exceed the $100 out-of-pocket cap; if the plan needs more, it must come from revenue.
- Never make health/medical/income claims in ads (account-ban bait).
- Never present a projection as a result. Log what actually happened.
