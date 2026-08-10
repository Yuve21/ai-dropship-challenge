# Ledger: the source of truth

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

## Warm-up status (update in place; see `docs/WARM-UP.md`, Challenge Warm-Up Protocol v1)
Warm-up is time-based and free, so this block starts moving before a product is chosen. `growth-operator`
owns it and reports the protocol track and day by name; `challenge-lead` will not authorise product
content or a paid ramp while a gate here is unmet, but a blocked gate never ends the run
(`docs/NO-STALL.md`).
- **Track A (TikTok): not started. Protocol day: not yet at Day -7.** Accounts created: none. Created on:
  n/a. One account per real device and real network.
- **In-app human routine (~20 min/day during warm-up, 5-10 min/day forever after): not started.** The
  posting API cannot do this; only a human can.
- **Native non-promotional posts made: 0 of 3 (Days -4 to -2). Product-in-frame post: 0 of 1 (Day -1).**
- **Product/CTA content started: NO (gated until Track A reaches Day 1).**
- **Per-post measurements being collected (views at 1h/24h/72h, watch time and completion, saves, shares,
  comments, profile taps, follower delta, "is the FYP serving the niche" y/n, any action block or
  warning): none yet, no posts exist.**
- **Track B (ad account and pixel): pixel/CAPI installed NO.** All four events firing: unverified.
  Organic events accumulated: 0 (pre-spend target 200 PageView / 20 AddToCart / 1 Purchase). Spend: $0.
- **Track C (domain): not purchased. Registered on: n/a. Age: 0 days.** SPF / DKIM / DMARC: not set.
  DMARC policy: n/a (starts at `p=none`). Header pass check: not run. Bulk email: none, and none planned
  in month one.
- **Track D (store and processor): Shopify Payments verification not started.** Pending documents are
  themselves a payout-hold trigger, so finish it the same day the store exists. Reserve notice: none.
  Payout schedule: n/a. Disputes: 0.
- **Protocol v1 verdict written to `docs/LEARNINGS.md`: not due yet (due on protocol Day 1 and Day 7).**
- **Learnings logged in `docs/LEARNINGS.md`: 2 entries (0 learnings, 2 open hypotheses: Warm-Up Protocol
  v1, and the no-stall procedures).**

## Product bench (update in place; see `docs/NO-STALL.md` P1, and `docs/PLAYBOOK.md` section 3)
Five ranked, pre-validated candidates at all times, so a killed product costs zero days. `product-scout`
owns it: re-score the whole bench weekly, promote rank 1 in the same run a product is killed, backfill
rank 5 from that run's sweep, drop any candidate that has sat here 30 days without fresh evidence. Only
one product is live at a time.

| Rank | Candidate | Landed cost | Retail | Net margin | Demand evidence (and which ladder rung it entered at) | Scored on |
|---|---|---|---|---|---|---|
| 1 | (empty, no research run yet) | - | - | - | - | - |
| 2 | (empty) | - | - | - | - | - |
| 3 | (empty) | - | - | - | - | - |
| 4 | (empty) | - | - | - | - | - |
| 5 | (empty) | - | - | - | - | - |

## Founder actions outstanding, ranked by cost of delay (update in place; `docs/NO-STALL.md` P2/P3)
This block goes at the top of every daily readout. Each item is a Prepared Action Card: exact URL, exact
steps, exact values to paste, cost, minutes, what it unblocks. The founder does one action and no research.

| Rank | Action | Cost of delay per day | Cost | Time | Unblocks |
|---|---|---|---|---|---|
| 1 | **Today's one thing:** start Warm-Up Protocol v1 Track A Day -7 (create the TikTok account on a real device, complete the profile, 20 min in the app, zero engagement day one) | **1.0, compounding and unrecoverable** | $0 | ~30 min | The entire organic strategy; every day of delay moves the whole calendar by a day |
| 2 | Buy the domain and publish SPF + DKIM + DMARC `p=none` the same day (Track C Day -7) | 1.0 until bought | ~$10-12 | ~15 min | Sending domain, real contact email, domain verification |
| 3 | Enable the daily loop: `gh workflow enable challenge-loop` then `gh secret set CLAUDE_CODE_OAUTH_TOKEN` (dead end zero) | 1.0 while a seat is not being opened daily | $0 | ~3 min | Unattended daily progress. Until then an open seat is the loop |
| 4 | Create the Shopify store ($1/mo promo, Basic) | 0.6 | ~$1 | ~10 min | Store build, pixel install, policy pages, checkout |
| 5 | Finish payments verification to 100%, bank linked (Track D Day -7) | 0.9 once a store exists | $0 | ~20 min | Taking any money at all |
| 6 | Create the free upload-post account and OAuth-connect TikTok once | 0.7 | $0 | ~10 min | Auto-posting; until then posting is a copy-paste human step |
| 7 | Create the DSers/CJ account and put a payment method on it | 0.2 until the first order | $0 now | ~15 min | Fulfilment (critical the moment an order exists) |
| 8 | Paste AI-video / research API keys into `.env` (free tiers) | 0.3 | $0 | ~5 min each | Rendered video and scraped research; scripts ship regardless |

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

- **2026-08-10, we stopped hedging: an executable protocol, a no-stall doctrine, and portability to any
  seat.** Three things shipped, all documentation.
  **(1) The Challenge Warm-Up Protocol v1** (`docs/WARM-UP.md`): the research finding stays (no official
  TikTok warm-up formula exists, every published schedule is vendor marketing), and on top of it we
  authored our own concrete schedule, four tracks, Day -7 to Day 4, exact counts. TikTok: create on a real
  device Day -7 with zero engagement, consume-only Days -6 and -5, one native non-promotional post per day
  Days -4 to -2, product-in-frame Day -1, then 2 posts/day from Day 1 and 3 from Day 4. Pixel installed at
  $0 spend from Day -7 with a 200/20/1 pre-spend target; domain authenticated the day it is bought; store
  verification finished the same day, week 1 kept smooth at one change per 72h. Labelled `HYPOTHESIS`,
  with an element-by-element split of documented platform fact versus our inference, and a Day 1 / Day 7
  CONFIRMED / ADJUSTED / REFUTED verdict due in `docs/LEARNINGS.md`. Bans untouched: no proxies, cloud
  phones, anti-detect browsers, bought followers, pods or recycled accounts.
  **(2) `docs/NO-STALL.md`**, a 17-row dead-end register with an authored fallback for every stall point
  found in an audit of this repo, plus ten procedures we invented for them (the 5-candidate bench,
  kill-and-promote in the same run, the Widening Ladder, the CTA ladder, the Paid Readiness Dossier with a
  $150 spend trigger, five incident runbooks, the reduced-mode ladder, the twelve-item Standing Work
  Queue, Prepared Action Cards, and cost-of-delay day-rates). All labelled `HYPOTHESIS` with the
  measurement that would refute each. `challenge-lead` can no longer end a run with only a blocker.
  **(3) Portability:** `BOOTSTRAP.md` (one kickoff prompt for any LLM seat, a seat-by-seat agent table, a
  degradation ladder), root `AGENTS.md` for Codex, and `docs/REPLICATE-THIS-SETUP.md` (the seven-part
  pattern for reusing this operating system on another venture).
  Also added here: the Product bench block and the cost-of-delay-ranked founder action list above.
  **Documentation only: nothing created, nothing spent, no account opened, the GitHub workflow is still
  DISABLED and was deliberately not enabled by this seat.** Out-of-pocket still $0.00.

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

- **2026-08-10, Autonomy layer added (ported from the Lark build).** Daily cloud loop
  (`.github/workflows/challenge-loop.yml`, 15:37 UTC) runs challenge-lead unattended: research,
  creative, analysis, ledger readout; never spends; HUMAN: steps accumulate here as a checklist.
  HQ reorganized by department; Canva MCP wired as the UGC/design connector; OpenClaw/Hermes
  evaluated and rejected (rented infra + API-key billing). **Shipped DORMANT by decision
  (2026-08-10): the workflow is disabled and the building seat (Lark) does not run this
  challenge.** Activation belongs to the seat that takes it over: `gh workflow enable
  challenge-loop` + set the `CLAUDE_CODE_OAUTH_TOKEN` repo secret (see START-HERE).
  Nothing spent; out-of-pocket still $0.00.

- **Setup**, Repo, playbook, 30-day plan, budget rules, automation stack, and the 10-agent team
  built. Not started. First action for a fresh seat: run `challenge-lead` ("it's day 1"), which will
  send `product-scout` to build the first shortlist. Nothing spent yet.
