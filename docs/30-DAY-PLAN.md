# The 30-Day Plan

Phased around the budget. `HUMAN:` marks a real-world action only the founder can do (open an
account, spend money, film a video, ship an order). Everything else the agent team produces. Adjust
dates to the real start; log every day in `tracker/LEDGER.md`.

## Phase 0a: Execute the Challenge Warm-Up Protocol v1 (starts before the product is chosen)
Goal: nothing that marketing depends on is brand new on the day marketing starts. **The schedule is not
an open question: run `docs/WARM-UP.md` -> "The Challenge Warm-Up Protocol v1", day by day, exactly as
written.** It is our own protocol, labelled `HYPOTHESIS`, and it gets confirmed, adjusted or refuted
against real numbers on Day 1 and Day 7. This phase costs $0 and is purely time-based, which is why it
goes before product selection: it does not need to know what the product is, and every day it is
delayed is a day that cannot be bought back later.

The protocol's four tracks, in one line each (the doc holds the exact counts):
- **Track A, TikTok:** `HUMAN:` Day -7 create ONE account per real device with a real email and phone
  and a fully completed profile, then 20 min of feed time with zero engagement; Days -6 and -5
  consume-only (20-30 min, 10 likes / 3 saves / 5 follows / 2 real comments); Days -4 to -2 one native
  non-promotional post per day (3 total, no product, no link, no CTA); Day -1 one post with the product
  incidentally in frame and still no pitch; Day 1 the real cadence starts at 2 posts/day, stepping to 3
  from Day 4. Add a week (start Day -14) if the account will carry Spark Ads. The recurring `HUMAN:`
  habit is ~20 min/day during warm-up and 5-10 min/day forever after; the posting API cannot do it.
- **Track B, ad account and pixel:** `AGENT:` install the pixel/CAPI Day -7 at **$0 spend** and confirm
  all four events actually fire, so the whole organic phase warms it for free. First spend only from
  earned revenue, at the platform minimum, then **no edits for 72h**, then +20% steps no more often than
  every 48h.
- **Track C, domain:** `HUMAN:` Day -7 buy it and publish SPF (under the 10-lookup limit) + DKIM 2048 +
  DMARC `p=none` the same day; Day -6 verify headers show all three passing. Transactional mail only,
  no bulk email in month one.
- **Track D, store and processor:** `HUMAN:` Day -7 finish payments verification to 100% the same day
  (pending documents are themselves a hold trigger); policy pages and branding live before money
  arrives; week 1 keeps revenue smooth, **one change at a time and at most one per 72h**, never a
  discount blast plus a price change plus a new SKU in the same week.

- **The gate:** no product content and no CTA/link posts until Track A has reached Day 1 (7 days of
  history, or 14 if it will carry Spark Ads, with 3 native posts plus 1 product-in-frame post behind
  it). `challenge-lead` enforces this. **The gate stops the gated action, never the run:** see
  `docs/NO-STALL.md` for what the loop does instead on a day when warm-up has not started.
- **The honest cost:** this pushes full product posting to roughly day 8, so the effective
  product-validation window inside the 30 days is shorter than 30 days. Record that in the ledger
  rather than comparing the result against an expectation the challenge never had. If the accounts can
  be created a week BEFORE Day 1, the week is recovered for about $12 and 20 minutes a day.

## Phase 0b: Foundation (Days 1-3, runs in parallel with warm-up)
Goal: a live store and 3-5 validated product candidates, near-zero spend.
- `product-scout`: surface 5-10 candidates from the free stack, score against the playbook criteria,
  hand the founder a ranked shortlist with demand evidence (ad longevity, comment sentiment).
- `offer-economist`: for the top 3, compute landed cost, retail price (3x+), net margin, break-even
  ROAS. Kill any under 30% margin now.
- `store-architect`: full Shopify store spec: theme (free Dawn), structure (start as a niche/general
  store to test cheaply), the product-page layout, the exact apps (DSers free, native reviews).
- `compliance-guard`: draft the 5 policy pages with honest shipping ETAs; supplier + product
  trademark check.
- `HUMAN:` open accounts (Shopify $1/mo promo, domain, DSers, TikTok x1-3, Stripe/Shopify Payments +
  PayPal); paste in the store spec + policy pages; order 1 product sample.

## Phase 1: Validate with organic (Days 4-14)
Goal: find a product that pulls organically. $0 acquisition.
- `creative-director`: 3-5 UGC video scripts per candidate (Hook/Problem/Demo/Benefit/Proof/CTA), a
  running bank of hook variants.
- `content-engine`: turn those scripts into 3-5 AI videos/day and **auto-post 2-3/day** to TikTok via
  the approved API/MCP (AIGC label applied, posts spaced). This is automated once the keys + OAuth are
  set (see SETUP-GUIDE). `HUMAN:` only funds the API keys and connects the account once.
- **Ramp the cadence, do not jump it** (`docs/WARM-UP.md`): if the account is still inside its warm-up
  window, the first posts here are native and non-promotional at 1/day, product appears in frame
  without a pitch around day 8-10, and only then does full product content run at 2-3/day. The human's
  daily in-app scroll/engage habit continues at 5-10 min/day for the life of the account; an account
  that only publishes looks like a bot.
- `growth-operator`: daily read of which videos/hooks are pulling (views, watch-time, comments,
  profile taps, link clicks); tells the founder what to post more of.
- **Commit, don't churn.** Because organic validation realistically takes weeks (not days), pick the
  ONE best pre-validated product (validated up front by competitor ad longevity + comment demand, not
  by your own week of posting) and commit the challenge to it. Judge *hooks* fast (swap weak ones);
  judge the *product* slowly. Only pivot to the backup candidate if ~2 weeks of strong posting volume
  across many hooks yields truly zero traction and zero buy-intent comments. Killing an organic
  product in a few days is the classic beginner mistake.
- First sales are likely to come from a video that pops. When they do: `ops-support` handles
  fulfillment via DSers and honest ETA comms.

## Phase 2: Prove the offer (Days 10-20, overlaps)
Goal: confirm the winning product + page actually convert, build the reinvestment float.
- `offer-economist`: watch store CVR (>2% target), AOV, margin on real orders; propose an order-bump
  or bundle to lift AOV.
- `copywriter` + `store-architect`: tighten the winning product page against real behavior.
- `creative-director`: double down on the hook family that worked; more variants.
- Reinvest early revenue into: more sample stock speed (US-warehouse SKU if available), then a first
  small paid test.

## Phase 3: Scale (Days 18-30)
Goal: turn a validated winner into repeatable revenue, funded by earned revenue only.
- `growth-operator`: Spark-Ad the proven-organic winner. Minimal paid: 1 campaign / 1 ad group / 3-5
  creatives / affordable daily budget; leave it 72h; judge on the playbook thresholds; scale winners
  <=20% at a time. **Ad-account warm-up applies** (`docs/WARM-UP.md`): the pixel should already carry
  organic event history, seed with a cheaper objective if it does not, and be honest that a first test
  at this budget will not exit Meta's learning phase, so it reads creative and CTR/CPC direction, not
  a true CPA.
- `offer-economist`: daily P&L, break-even ROAS discipline, kill any ad under threshold, reinvest
  profit not principal.
- `ops-support`: keep chargebacks < 1%, delivery honest, support fast (protects payouts).
- `compliance-guard`: as volume ramps, slow the spend curve to avoid processor reserves/bans.

## Every day, in every phase
The loop ends with **"what did we learn today, and what changes tomorrow"**, appended to
`docs/LEARNINGS.md` with the evidence behind it. A day that produced no new learning is recorded as
exactly that. See `docs/LEARNINGS.md` for the entry format and the evidence rule.

## Day-30 readout
`challenge-lead` writes the honest scorecard to the ledger: out-of-pocket spent (must be <= $100),
gross revenue, net profit/loss, the winning product (if any), what worked, what to do next. A found
winner + a turning flywheel is a win even if raw profit is modest; a clean "no winner, here's what we
learned and $X of the $100 is left" is an honest outcome, not a failure to hide. The readout also
states the effective posting window (30 days minus the warm-up), and the day-30 knowledge base in
`docs/LEARNINGS.md` is part of the deliverable: a validated set of lessons is the asset that carries
into month two even if the P&L does not.
