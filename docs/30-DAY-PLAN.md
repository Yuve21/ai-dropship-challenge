# The 30-Day Plan

Phased around the budget. `HUMAN:` marks a real-world action only the founder can do (open an
account, spend money, film a video, ship an order). Everything else the agent team produces. Adjust
dates to the real start; log every day in `tracker/LEDGER.md`.

## Phase 0a: Warm-up starts FIRST (day 0, before the product is chosen)
Goal: nothing that marketing depends on is brand new on the day marketing starts. Read
`docs/WARM-UP.md`. This phase costs $0 and is purely time-based, which is why it goes before product
selection: it does not need to know what the product is, and every day it is delayed is a day that
cannot be bought back later.
- `HUMAN:` **create the TikTok account(s) now** (1-3), complete the profiles, and start the daily
  in-app routine: 20-30 min of in-niche scrolling, then light genuine engagement from day 2-3. This is
  a real recurring human step of ~10-20 min/day. The posting API does not warm an account.
- `HUMAN:` **buy the domain now and put SPF/DKIM/DMARC in on the same day** (DMARC at `p=none` first).
  The domain then ages 7-14 days for free while the store is built. No bulk email in month one.
- `HUMAN:` **finish Shopify Payments verification immediately**, not when traffic arrives. Pending
  documents are themselves a payout-hold trigger.
- `AGENT:` install the pixel/CAPI on the store on day 1 even though nothing is being spent, so organic
  traffic and the first organic orders become free pixel history before any paid test.
- **The gate:** no product content and no CTA/link posts until the warm-up window in `docs/WARM-UP.md`
  is met (7 days floor, 10-14 if the account will later carry Spark Ads), and 2-5 native
  non-promotional posts have gone out first. `challenge-lead` enforces this and names the blocking gate.
- **The honest cost:** this pushes full product posting to roughly day 8-10, so the effective
  product-validation window inside the 30 days is shorter than 30 days. Record that in the ledger
  rather than comparing the result against an expectation the challenge never had. If the accounts can
  be created a week BEFORE Day 1, the week is recovered for about $12 and 20 minutes a day.

## Phase 0b: Foundation (Days 1-3, runs in parallel with warm-up)
Goal: a live store and 3-5 validated product candidates, near-zero spend.
- `product-scout`: surface 5-10 candidates from the free stack, score against the playbook criteria,
  hand the founder a ranked shortlist with demand evidence (ad longevity, comment sentiment).
- `offer-economist`: for the top 3, compute landed cost, retail price (3x+), net margin, break-even
  ROAS. Kill any under 30% margin now.
- `store-architect`: full Shopify store spec — theme (free Dawn), structure (start as a niche/general
  store to test cheaply), the product-page layout, the exact apps (DSers free, native reviews).
- `compliance-guard`: draft the 5 policy pages with honest shipping ETAs; supplier + product
  trademark check.
- `HUMAN:` open accounts (Shopify $1/mo promo, domain, DSers, TikTok x1-3, Stripe/Shopify Payments +
  PayPal); paste in the store spec + policy pages; order 1 product sample.

## Phase 1 — Validate with organic (Days 4-14)
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

## Phase 2 — Prove the offer (Days 10-20, overlaps)
Goal: confirm the winning product + page actually convert, build the reinvestment float.
- `offer-economist`: watch store CVR (>2% target), AOV, margin on real orders; propose an order-bump
  or bundle to lift AOV.
- `copywriter` + `store-architect`: tighten the winning product page against real behavior.
- `creative-director`: double down on the hook family that worked; more variants.
- Reinvest early revenue into: more sample stock speed (US-warehouse SKU if available), then a first
  small paid test.

## Phase 3 — Scale (Days 18-30)
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
