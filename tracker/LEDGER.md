# Ledger — the source of truth

Every working session appends a dated entry. This is where the challenge's real state lives: money,
product tests, decisions, P&L. A new seat reads this first (after `docs/PLAYBOOK.md` and
`docs/LEARNINGS.md`) to know exactly where things stand. Log what ACTUALLY happened, never a
projection. Mark estimates vs dashboard-confirmed.

**This file records what happened. `docs/LEARNINGS.md` records what we concluded from it, with the
evidence.** Every daily loop ends by appending there, or by stating plainly that the day produced no new
learning.

## Standing tallies (update in place)
- **Out-of-pocket spent (founder money): $0.00 / $100.00 cap**
- **Revenue to date: $0.00**
- **Reinvested (from revenue): $0.00**
- **Net profit/loss to date: $0.00**
- **Current product(s) under test: none yet**
- **Fulfillment float held: $0.00**
- **Day: 0 (not started)**

## Warm-up status (update in place; see `docs/WARM-UP.md`)
Warm-up is time-based and free, so this block starts moving before a product is chosen. `growth-operator`
owns it; `challenge-lead` will not authorise product content or a paid ramp while a gate here is unmet.
- **TikTok account(s): none created. Created on: n/a. Warm-up day: 0 of 7 minimum (10-14 if it will
  carry Spark Ads).**
- **In-app human routine (~10-20 min/day scroll + engage): not started.** The posting API cannot do
  this; only a human can.
- **Native non-promotional posts made: 0 (2-5 needed before any product content).**
- **Product/CTA content started: NO (gated).**
- **Domain: not purchased. Registered on: n/a. Age: 0 days (7-14 wanted before any send).**
- **SPF / DKIM / DMARC: not set. DMARC policy: n/a (start at p=none).** Bulk email: none, and none
  planned in month one.
- **Pixel/CAPI installed: NO.** Organic events accumulated: 0. (Install on day 1 even with $0 spend, so
  the organic phase warms it for free.)
- **Shopify Payments verification: not started.** Pending documents are themselves a payout-hold
  trigger, so finish this on day 1.
- **Learnings logged in `docs/LEARNINGS.md`: 0 entries (0 learnings, 0 hypotheses).**

## Money log (line items)
| Date | In/Out | Founder or Revenue | Amount | What | Running out-of-pocket |
|---|---|---|---|---|---|
| - | - | - | - | (challenge not started) | $0.00 |

## Product tests
| Date | Product | Landed cost | Retail | Net margin | Break-even ROAS | Verdict | Why |
|---|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - | - |

## Decision log
| Date | Decision | Made by (agent) | The number behind it |
|---|---|---|---|
| - | Repo + team scaffolded; challenge not yet started | setup | - |

## Session notes
(Newest on top. Each entry: what was done, what was decided, money moved, what's next, and anything
unverified.)

- **2026-08-10, warm-up doctrine + the learning loop added.** Two new docs: `docs/WARM-UP.md` (no
  account starts cold: TikTok organic, ad accounts/pixel, sending domain, payment processor, with the
  documented-vs-vendor-folklore split stated) and `docs/LEARNINGS.md` (the evidence-backed knowledge
  base: dated falsifiable entries, declared confidence, supersede-not-accumulate, product learnings
  expire, no-evidence means labelled hypothesis, and a day with no learning is recorded as such).
  Warm-up is wired into the 30-day plan as **Phase 0a**, ahead of product selection, because it is
  time-based and free; the honest cost is that full product posting starts around day 8-10, so the
  effective validation window inside 30 days is shorter than 30 days. All ten agent briefs now open by
  reading the playbook AND the learnings file, and the relevant ones carry a write-back duty;
  `challenge-lead`'s loop gained a closing "what did we learn today, and what changes tomorrow" step
  plus a weekly staleness sweep. Warm-up status block added to the standing tallies above.
  **Documentation only: nothing created, nothing spent, no account opened, the GitHub workflow stays
  disabled.** Out-of-pocket still $0.00. Note for the next seat: this is retrieval-based learning, no
  model is being trained.

- **2026-08-10 — Autonomy layer added (ported from the Lark build).** Daily cloud loop
  (`.github/workflows/challenge-loop.yml`, 15:37 UTC) runs challenge-lead unattended: research,
  creative, analysis, ledger readout; never spends; HUMAN: steps accumulate here as a checklist.
  HQ reorganized by department; Canva MCP wired as the UGC/design connector; OpenClaw/Hermes
  evaluated and rejected (rented infra + API-key billing). **Shipped DORMANT by decision
  (2026-08-10): the workflow is disabled and the building seat (Lark) does not run this
  challenge.** Activation belongs to the seat that takes it over: `gh workflow enable
  challenge-loop` + set the `CLAUDE_CODE_OAUTH_TOKEN` repo secret (see START-HERE).
  Nothing spent; out-of-pocket still $0.00.

- **Setup** — Repo, playbook, 30-day plan, budget rules, automation stack, and the 10-agent team
  built. Not started. First action for a fresh seat: run `challenge-lead` ("it's day 1"), which will
  send `product-scout` to build the first shortlist. Nothing spent yet.
