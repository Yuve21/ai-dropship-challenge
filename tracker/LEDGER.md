# Ledger: the source of truth

Every working session appends a dated entry. This is where the challenge's real state lives: money,
product tests, decisions, P&L. A new seat reads this first (after `docs/PLAYBOOK.md` and
`docs/LEARNINGS.md`) to know exactly where things stand. Log what ACTUALLY happened, never a
projection. Mark estimates vs dashboard-confirmed.

**This file records what happened. `docs/LEARNINGS.md` records what we concluded from it, with the
evidence.** Every daily loop ends by appending there, or by stating plainly that the day produced no new
learning.

## Standing tallies (update in place)
Target: **$1,000/day net profit by Day 30** (`docs/MANDATE.md`). The first three lines are what
`challenge-lead` opens every run with.
- **Current daily net profit: $0.00**
- **Gap to $1,000/day net: $1,000.00**
- **Days remaining to Day 30: 30 challenge days (Day 1 is 2026-08-18, Day 30 is 2026-09-16). Today is
  warm-up Day -6, so the clock has not started.**
- **Ad spend/day vs the ladder (`docs/30-DAY-PLAN.md`): $0.00, ladder not started (Day 6 launch)**
- **Out-of-pocket spent (founder money): $0.00 / $100.00 cap**
- **Revenue to date: $0.00**
- **Reinvested (from revenue): $0.00**
- **Net profit/loss to date: $0.00**
- **Current product(s) under test: none yet**
- **Fulfillment float held: $0.00**
- **Day: 0 (not started)**

## Warm-up status (update in place; see `docs/WARM-UP.md`, Challenge Warm-Up Protocol v1)
Warm-up is time-based and free, so this block starts moving before a product is chosen. `growth-operator`
owns it and reports the protocol track and day by name; while the gate is enabled `challenge-lead` will not
authorise product content or a paid ramp until it is met, and a blocked gate never ends the run
(`docs/NO-STALL.md`).
- **Warm-up gate: ENABLED** (founder-controlled, `enabled` in `automation/state/warmup-state.json`;
  `node cli.js warmup skip` turns it off and logs the decision here, `warmup enable` restores it).
- **Track A (TikTok): STARTED. Protocol day: Day -6 (consume only) as of 2026-08-12.** Account: `@dailypawfinds` ("Paw Finds"), created
  2026-08-11, on a real device/network per the founder. Bio: "pet + home finds, one at a time," no link.
  Profile picture: a designed paw-print mark (warm coral background, cream icon), not a real photo or a
  fabricated face — see reasoning in the 2026-08-11 session note. Tracked going forward with
  `automation/` (`node cli.js warmup today`), state in `automation/state/warmup-state.json`. One account,
  one real device/network, as required.
- **In-app human routine (~20 min/day during warm-up, 5-10 min/day forever after): started 2026-08-11.**
  Day -6 routine (2026-08-12) is consume-only: 20-30 min scrolling mostly in-niche, 10 likes, 3 saves, 5
  follows of in-niche creators, 2 genuine comments in real sentences, 10 in-niche videos watched to
  completion and 3 replayed. Zero posts today, and the CLI refuses one. Run `node automation/cli.js warmup
  today` for the current day's routine rather than reading it from here. The posting API cannot do this
  part; only a human can.
- **Native non-promotional posts made: 0 of 3 (Days -4 to -2, not due yet). Product-in-frame post: 0 of 1
  (Day -1, not due yet).**
- **Product/CTA content started: NO. One gate remains, and it is the warm-up gate, clearing on 2026-08-18.**
  The sample gate was **waived by founder decision on 2026-08-12** (see the decision log and session note):
  no sample will be ordered, and the challenge starts without one. The standing "sample held" rule in
  `docs/PLAYBOOK.md` section 4 and `challenge-lead`'s brief is therefore **suspended for this product, by the
  founder, knowingly**. It is not deleted from the docs, because it remains the right default for the next
  product and the next venture.
  **What this costs, recorded so the day-30 readout can be honest:** no authentic phone-filmed UGC is
  possible, so content shifts to generated video, supplier-provided assets and static image + text. Our own
  *External evidence* puts UGC's winner rate at 7.56% and product-image-plus-text at 8.75%, so the format
  shift is not automatically worse on hit rate, but we lose real cat-behaviour footage, which is what
  `creative-director` said the fountain's best beats depend on. We also cannot make any experience-based
  claim, and nobody sees the product before a customer does. The no-sample plan lives in
  `creative/NO-SAMPLE-PLAN.md`.
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
- **Track E (Meta and Google ad accounts): NOT STARTED, and now one day late.** Track E's Day -7 step
  (create Meta Business Manager + ad account and the Google Ads account, both at $0 spend) was added to
  `docs/WARM-UP.md` and `docs/MANDATE.md` on 2026-08-12, after Day -7 had already passed, so it did not
  exist as an action on the day it was due. Now Founder Action #9. Meta ad account: not created. Google Ads
  account: not created. Google tag: not installed. Merchant Center: no feed. Campaigns built and paused: 0
  of 2, though the full spec for both now exists in `ops/paid-readiness-dossier.md`, so building them is a
  transcription job rather than a design job. Spend on both: $0, and the $150 collected-revenue trigger has
  not been approached.
- **Protocol v1 verdict written to `docs/LEARNINGS.md`: not due yet (due on protocol Day 1 and Day 7).**
- **Learnings logged in `docs/LEARNINGS.md`: 5 learnings** (all *Anti-patterns*: direct WebFetch blocked by
  the three main research surfaces; TikTok-virality-first research surfacing items already at big-box retail;
  supplier lead time rather than the warm-up calendar gating product content; and one creative run not
  clearing the 3/day floor; and confirm what the founder can physically access before designing around it), **2 open hypotheses** (Warm-Up Protocol v1, and the no-stall procedures),
  **19 External evidence entries** (other people's numbers, never ours).

## Product bench (update in place; see `docs/NO-STALL.md` P1, and `docs/PLAYBOOK.md` section 3)
Five ranked, pre-validated candidates at all times, so a killed product costs zero days. `product-scout`
owns it: re-score the whole bench weekly, promote rank 1 in the same run a product is killed, backfill
rank 5 from that run's sweep, drop any candidate that has sat here 30 days without fresh evidence. Only
one product is live at a time.

**Third qualification gate, added 2026-08-13: the production-capability check.** Alongside
`offer-economist`'s margin gate and `compliance-guard`'s review, every candidate is now scored on whether
the founder can actually **obtain it, film it, and film the problem it solves**, and whether either
requires an animal, person, location or equipment they do not have. **A candidate that clears economics
and compliance but cannot be filmed is not qualified**, because on an organic-first strategy the content
is the entire acquisition mechanism. Added after two plan rebuilds in two days traced to the same
unverified premise (`docs/LEARNINGS.md`, 2026-08-13). Current scores: **rank 1 fountain FAILS the
film-the-product and film-the-problem legs** (no sample, no cat) and is live anyway by founder decision;
**rank 3 lens kit PASSES both** (its problem is filmable on a bare phone); rank 2 eye mask passes the
problem leg and fails the product leg.

**Status: 3 of 5 CONFIRMED (ranks 1-3, all through `offer-economist`'s worst-case gate). Ranks 4-5 are
OPEN by decision, not by default** — see "2026-08-11, ranks 4-5 left open on purpose" below for why.
Worst-case = using the high end of the stated landed-cost range, per `offer-economist`'s gate check (a
product that only clears 30%/3x at best-case cost is not qualified).

| Rank | Candidate | Landed cost | Retail | Net margin (worst case / best case) | Demand evidence (and which ladder rung it entered at) | Scored on |
|---|---|---|---|---|---|---|
| 1 | Cat water fountain (ABS/plastic pump, quiet) | $8-11 | $34.99 | 64.8% / 73.4%, markup 3.18x-4.37x | Established competitors (PETLIBRO, Catit, Pioneer Pet) = validated per playbook (multiple competitors is not a red flag). Ad-longevity claim (1,263 TikTok ad-library entries) is **unverified**, from a third-party ad-spy teaser page, not a live Meta/TikTok pull. Entered at rung 0 (clean sweep, not widened). Real supplier picks + honest 7-20 business day shipping window now in `ops/sourcing-dossier.md`. | 2026-08-10 |
| 2 | Rechargeable heated eye mask (USB warm-compress) | $6.50-9.50 | $28.99, **repriced to $29.99 recommended** | 63.3% / 73.7% at $28.99 (3.05x worst-case markup, a $0.16 cushion — fragile pass); 64.4% / 74.4% at $29.99 (3.16x, real cushion) | **Weakest demand evidence of ranks 1-3**: one specific TikTok video found had 774 likes / 38 comments, under this challenge's own 1,000+ bar. Kept on margin quality + category fit, not demand strength. Needs a real ad-longevity check before any spend. Entered at rung 3 (2 of 3 demand signals, logged as required). | 2026-08-10 |
| 3 | Modular magnetic phone lens clip kit (generic, macro/wide/fisheye) | $5-7.50 | $29.99 | **CONFIRMED 2026-08-11: 71.1% / 79.4%, markup 4.00x-6.00x.** No fragility — clears both gates with real room at worst case, unlike ranks 2 and (formerly) 4. | Competing branded kits (KEYWING, MIAO LAB) actively marketed as viral — validates the category, but our sourcing must be fully generic to avoid the trademark proximity that got the branded names excluded. No hard comment/share numbers found; weakest demand evidence on the confirmed bench, but cleanest economics. Entered at rung 3. | 2026-08-10, economics confirmed 2026-08-11 |
| 4 | **OPEN** | - | - | - | - | - |
| 5 | **OPEN** | - | - | - | - | - |

**REJECTED (not seated, checked against both gates tonight):** generic 4-in-1 automatic interactive cat
toy (laser + feather + rolling ball, motion-sensor). `offer-economist` passed it **conditionally**
(3.67x markup / 68.9% margin at the worst tested combination, $9 landed / $32.99 retail — but the $5-9
landed-cost range itself was never a real supplier quote, only reasoned by analogy to similar
electronics, so the pass is contingent on an unverified number, unlike ranks 1-3 which all rest on real
quotes). `compliance-guard` also passed it conditionally (checked specifically against Cheerble's actual
product line and cleared it — Cheerble sells robotic balls and a separate wearable laser collar, not
this dome/laser/feather/ball form factor, so the trademark-proximity risk is to Potaroma/Ficuswin instead,
same generic-sourcing rule as elsewhere on the bench; flagged one new open item, FDA 21 CFR 1040.11 laser
power/labeling requirements, unconfirmed on this specific unit). **Rejected anyway, by founder decision
2026-08-11**, because neither conditional pass fixes the one weakness that matters most: it's already
sold at Walmart, Chewy and Petco under multiple brands (Potaroma and others), which fails the
"not easily bought locally" trait outright. Full detail in `compliance/bench-review-2026-08-11.md`.

**2026-08-11, ranks 4-5 left open on purpose.** Two full sweeps tonight aimed deliberately high (find
candidates with *zero* disclosed weakness, not just a passing one), using two different discovery methods
specifically to avoid re-finding the same commoditized items: TikTok-trend-first for tech/wellness (~28
candidates checked), then AliExpress/supplier-first for pet/home-kitchen (~20 more, after a first attempt
at this category was cut short by a session limit). **Every single candidate with real, verifiable
demand in both sweeps was already confirmed sold at Walmart, Target, Best Buy, Costco, Amazon Basics,
Chewy, or Petco** — full checked-and-ruled-out lists are in the 2026-08-11 session note below, not
reproduced here to keep this table short. The pattern held across both discovery methods, which the
research agents read as a real, structural finding for this window in time (mid-2026 gadget
dropshipping in well-searched consumer categories), not a fluke of search phrasing — flagged as worth
re-testing with a human logged into a real browser session (AliExpress bot-blocked automated fetches
after roughly 2 requests per sweep tonight) rather than assumed permanent. **Decision: do not force-fill
ranks 4-5 with a candidate that has a disclosed hard weakness just to hit a count of 5.** The three
confirmed candidates (ranks 1-3) are real and solid; diluting focus across padded picks would cost more
than it protects, and this project's own doctrine already says the bench is depth, not five parallel
bets, with only one product live at a time regardless.

**Screened out entirely (not on the bench, with reason):** posture correctors, LED strips, generic phone
cases (all hard-banned categories per the playbook). Wearable neck fans and mini blenders (now sold at
Target/Five Below at commodity prices — fails price-band and not-in-local-stores). GPS dog collars and a
dog treat-dispensing ball (both judged trademark-adjacent to entrenched branded hardware/products,
excluded rather than flagged per the borderline-trademark rule). Cat bubble backpack carrier and an
electric spin scrubber (both confirmed sold at multiple mainstream retailers under several house brands —
fails not-in-local-stores). Dog car hammock and a pet nail grinder/grooming glove (both real candidates,
priced too low, $10-20, dead for paid ads per the price-band floor).

**KILLED (removed from the ranked table, not a permanent ban):**
- **Hands-free electric jar/can opener** (2026-08-10, never made the table). $9-12 landed, $32.99 retail,
  59.8%-68.9% net margin (clears the margin floor easily) but **markup fails at worst case: 2.75x at $12
  landed, under the 3x floor.** Reopen only if a supplier quote comes back at or below $10.99 landed, or
  retail is renegotiated to roughly $36+ to restore the multiple.
- **Mini handheld pet deshedding/grooming vacuum** (2026-08-11, killed off rank 4). $18-25 landed, $59.99
  retail (already at the band ceiling) — margin was fine (54.9% worst case) but **markup fails at worst
  case: 2.40x at $25 landed, under the 3x floor.** To clear 3x at that landed cost would need $75 retail,
  $15 above the top of the $30-60 band — not a rounding-error miss, a structural one; there is no retail
  price inside the allowed band that fixes it. Had the strongest demand evidence on the whole bench
  (multiple real TikTok Shop listings + specific viral videos), which is exactly why this one is worth
  remembering as a lesson: strong demand evidence does not override a failed unit-economics gate. Reopen
  only if a real supplier quote comes back meaningfully below $25 landed.

**Compliance:** ranks 1-4 (fountain, eye mask, lens kit, and the now-killed vacuum), plus the rejected
cat toy, have all been through `compliance-guard`'s review — full detail in
`compliance/bench-review-2026-08-11.md`, including the specific ad-copy line to hold for the eye mask
("comfort, not medical") and the sourcing-stage brand-comparison check owed for the lens kit before
ordering a sample.

## Founder actions outstanding, ranked by cost of delay (update in place; `docs/NO-STALL.md` P2/P3)
This block goes at the top of every daily readout. Each item is a Prepared Action Card: exact URL, exact
steps, exact values to paste, cost, minutes, what it unblocks. The founder does one action and no research.

**Track A Day -7 is DONE as of 2026-08-11** (`@dailypawfinds`, "Paw Finds"), so it is off this table.

Two things sit above the numbered list, and they are different in kind:
- **The standing daily task, every day, warm-up or not: run `node automation/cli.js warmup today`** and do
  whatever it prints. It is not a numbered card because what it asks for changes every day. On 2026-08-12 it
  asks for consume-only engagement and refuses all posting.
- **"Today's one thing" is the highest-ranked numbered card below**, which is the one-off action whose delay
  costs the most. On 2026-08-12 that is **the domain**. It briefly lost the top spot to the product sample
  earlier the same day, then took it back when the founder decided not to order a sample at all.

Both get done. The CLI routine takes ~25 minutes and the ranked card takes ~15.

**Ranking shifted on 2026-08-12 by the no-sample decision.** With no sample to wait for and no phone footage
possible, three cards went up: **AI-video API keys 0.3 to 0.8** (generated video is now the only content
source, not an upgrade to it), **the Ad Library check 0.2 to 0.4** (competitor ad evidence is now the only
remaining external check on this product before money goes in), and **the supplier account 0.2 to 0.4** (it
is now the first point at which anyone sees the actual product). Track E dropped to last: it cannot bind
before revenue exists.

| Rank | Action | Cost of delay per day | Cost | Time | Unblocks |
|---|---|---|---|---|---|
| 1 | **TODAY'S ONE THING.** Buy the domain and publish SPF + DKIM + DMARC `p=none` the same day (Track C Day -7, now 5 days late) | **1.0, compounding and unrecoverable** | ~$10-12 | ~15 min | Sending domain, real contact email, domain verification. Domain age is calendar-driven: the 7-14 day aging window cannot be compressed later |
| 2 | Create the Shopify store ($1/mo promo, Basic). Paired with #1, this is the whole store standup | 0.9, raised from 0.6 on 2026-08-12: with no sample to wait for, the store is now the only thing between here and a sellable page | ~$1 | ~10 min | Store build, pixel install, policy pages, checkout. `store/BUILD-SPEC.md` and all 6 copy files are already written and waiting to be pasted |
| 3 | **RAISED on 2026-08-12, from rank 8.** Paste the AI-video API keys into `.env` (free tiers) | **0.8, up from 0.3.** With no sample, there is no phone footage, so generated and supplier-sourced video is now the ONLY content source. This moved from "improves a layer" to "is the layer" | $0 | ~5 min each | The entire Day 1 content plan. Without keys there is nothing to post at all, where previously scripts could still be filmed by hand |
| 4 | Enable the daily loop: `gh workflow enable challenge-loop --repo Yuve21/ai-dropship-challenge` (the secret is already set) | 1.0 while a seat is not being opened daily, but discounted while the founder is opening seats by hand | $0 | ~1 min | Unattended daily progress. Until then an open seat is the loop |
| 5 | Finish payments verification to 100%, bank linked (Track D Day -7) | 0.9 once a store exists, so it inherits rank 2's timing | $0 | ~20 min | Taking any money at all. Pending documents are themselves a payout-hold trigger, so do it the same day the store exists |
| 6 | Create the free upload-post account (dashboard sign-up only; do NOT subscribe to the paid Basic tier yet, see `automation/README.md`) | 0.5, raised from 0.4: with generated video as the only content source, the posting rail matters sooner | $0 now, $24/mo when you do subscribe (closer to Day 1) | ~10 min | Lets `automation/`'s `post` command actually send once the paid tier + video assets both exist |
| 7 | Spend 10 min logged into Meta Ad Library + TikTok Creative Center, search "cat water fountain," screenshot what you find | 0.4, raised from 0.2 on 2026-08-12: with no sample to inspect, competitor ad evidence is now the ONLY remaining external check on this product before real money goes into it | $0 | ~10 min | Confirms or kills the one unverified leg of bench rank 1's demand evidence (agent research cannot reach these sites directly: bot-blocking / client-rendered pages, see the 2026-08-10 ledger note and the matching *Anti-patterns* entry) |
| 8 | Create the DSers/CJ account and put a payment method on it | 0.4, raised from 0.2: with no sample ordered, this account is now the first time anyone sees the actual product, and it is also the only way to check for a faster US-warehouse SKU | $0 now | ~15 min | Fulfilment, which becomes critical the moment an order exists |
| 9 | Create the Meta Business Manager + ad account AND the Google Ads account, both at $0 spend (Track E Day -7, 1 day late) | 0.7 in principle, but it cannot bind before revenue exists, so it sits below the revenue path | $0 | ~20 min for both | Lets the prepared Meta and Google campaigns in `ops/paid-readiness-dossier.md` actually be built and left paused, so Day 6 is a button press instead of a setup day |

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
| 2026-08-10 | First product-research sweep run; bench filled to 4/5. Cat water fountain promoted to rank 1, heated eye mask to rank 2 (contingent on repricing to $29.99), phone lens kit to rank 3, pet grooming vacuum to rank 4 (flagged, thin margin cushion). Rank 5 left open. | product-scout, then offer-economist | Fountain 3.18x markup / 64.8% margin at worst-case landed cost; eye mask 3.16x / 64.4% at $29.99 |
| 2026-08-10 | Hands-free electric can opener killed pre-bench, never promoted | offer-economist | 2.75x markup at $12 worst-case landed cost, under the 3x floor (margin was 59.8%, fine, but the gate is AND not OR) |
| 2026-08-10 | Built `automation/` CLI (warm-up day tracker + gated upload-post.com poster). Declined the founder's literal ask ("run my whole TikTok") to automate scrolling/liking/following/watching — no legitimate API exists for that, it's the session-token-bot ban vector `docs/WARM-UP.md` and `compliance-guard` already hard-ban, and it would defeat warm-up's own purpose | challenge-lead | n/a (a compliance/ToS line, not a numbers call) |
| 2026-08-10 | Corrected `docs/SETUP-GUIDE.md` and `docs/AUTOMATION.md`: upload-post.com's TikTok posting requires their paid Basic plan, not the free tier as those docs previously said | challenge-lead | $24/mo minimum, verified live against docs.upload-post.com and upload-post.com/llms-full.txt, 2026-08-10 |
| 2026-08-11 | Bench rank 3 (phone lens clip kit) confirmed KEEP | offer-economist | 71.1% margin / 4.00x markup at worst-case $7.50 landed cost, real cushion at both extremes |
| 2026-08-11 | Bench rank 4 (pet grooming vacuum) killed, removed from the table | offer-economist | 2.40x markup at worst-case $25 landed cost against $59.99 retail (band ceiling); would need $75 retail to clear 3x, outside the allowed band |
| 2026-08-11 | Full store build spec, 6 pages of store copy, 5 warm-up/Day-1 video scripts, a supplier sourcing dossier, and a compliance review of the whole bench all built ahead of need, none of it requiring the founder | store-architect, copywriter, creative-director, ops-support, compliance-guard (all via challenge-lead) | n/a — preparation, not a numbers call; see the 2026-08-11 "getting ready before setup" session note for the full file list |
| 2026-08-11 | 4-in-1 interactive cat toy rejected (founder decision, after both gates passed it conditionally) | founder, informed by offer-economist + compliance-guard | Both passes were conditional on an unverified $5-9 landed-cost estimate; rejected regardless because it's already sold at Walmart/Chewy/Petco, which no economics or compliance pass fixes |
| 2026-08-11 | Ranks 4-5 left open rather than force-filled; two full sweeps (~48 candidates combined) found zero clean candidates in tech/wellness or pet/home-kitchen | product-scout (two runs) | Every candidate with verifiable demand in both sweeps was already at Walmart, Target, Best Buy, Costco, Amazon Basics, Chewy, or Petco — full lists in the session note below |
| 2026-08-13 | **Founder has no cat and no access to one.** Presented four options (pivot to bench rank 3, stay on the fountain with no live footage, reverse the no-sample call for one unit, or re-run product research filtered by physical access). **Founder chose: stay on the cat water fountain and on `@dailypawfinds`, with no live footage.** Creative spine becomes text cards, licensed stock with attribution, screen recordings and capped AIGC b-roll, reframed around the account's existing "finds" curation positioning | founder, recorded by challenge-lead | Invalidated 3 native warm-up scripts, the Day -1 substitute, and 12 of 18 Day 1-7 slots, with the Day -4 post due the next day. Bench rank 3 would have scored highest on filmability (its problem is filmable on a bare phone) and on economics (71.1% / 4.00x), but the founder kept the fountain |
| 2026-08-13 | Production-capability check added to bench qualification, alongside the margin gate and compliance review: can the founder obtain it, film it, and film the problem it solves, and does either require an animal, person, location or equipment they lack | challenge-lead | Two plan rebuilds in two days from the same unverified-premise root cause. A candidate that clears economics and compliance but cannot be filmed is not qualified on an organic-first strategy |
| 2026-08-12 | **No sample will be ordered. The "sample held" gate is waived for this product by founder decision, and the challenge starts without one.** Founder's stated reasoning: this is a rush challenge and the specialist agents have already cleared the product. `challenge-lead` recorded one correction rather than arguing: the agents had already passed everything they are capable of judging (economics, compliance), and no agent can validate a physical object it has not held, so that gate cannot be satisfied by further review. Decision stands as the founder's call on their own risk | founder, recorded by challenge-lead | Not a numbers call. The measurable consequence: zero authentic UGC footage available, so content shifts to generated video, supplier assets and static image + text. Our own evidence puts UGC winner rate at 7.56% vs 8.75% for product image + text, so the format shift is not automatically worse, but real cat-behaviour footage is lost |
| 2026-08-12 | Sample order was briefly promoted to Founder Action #1, then removed entirely by the decision above. Domain returns to "today's one thing" | challenge-lead | Recommended primary supplier is 12-20 business days (lands ~2026-08-28 to 09-09) against a Day -1 product-in-frame post due 2026-08-17; the fast option's own posted estimate was 2026-08-16 to 08-21 |
| 2026-08-12 | No-sample creative strategy set: film the PROBLEM (own cat, own bowl, own tap) rather than the product, for 12 of 18 Day 1-7 slots. AI video capped at 3 slots, abstract water only, no generated product/cat/person, AIGC-labelled. Two static ad specs created, the repo's first | creative-director + content-engine + compliance-guard | Static formats out-hit video on winner rate (text-only 11.60%, product image + text 8.75%, UGC 7.56%, high-production video 6.87%), a finding logged 2026-08-10 and unused until now: the repo held 12 video scripts and 0 statics |
| 2026-08-12 | Warm-up post gate changed from an equality check to a promotional-intensity ranking, so a less promotional post than the day allows is permitted | challenge-lead | The Day -1 native substitute would have been refused by our own CLI. Verified in 4 cases including exit code 1 on the refusal path |
| 2026-08-12 | Bench rank 1's headline margin restated for paid planning: 60.8% contribution margin, not the bench table's 64.8% | offer-economist, via the paid dossier | The bench figure omits a returns line. Adding a modelled 4% returns reserve ($1.40) moves CM per order to $21.28 and break-even aMER to 1.64. Both numbers kept, with the difference named, rather than replacing one with the other |
| 2026-08-12 | Paid Readiness Dossier (P7) built for Meta, Google and TikTok before any revenue exists, all campaigns specified paused | growth-operator | Max allowable CPA $17.02 at target aMER 2.06; every ad-level kill trigger reduces to "$25 spent, zero sales" across all three bench ranks |
| - | Repo + team scaffolded; challenge not yet started | setup | - |

## Session notes
(Newest on top. Each entry: what was done, what was decided, money moved, what's next, and anything
unverified.)

- **2026-08-13, part 3: ElevenLabs narration wired, and it surfaced a licensing trap worth more than the
  connector.** **No money moved. Out-of-pocket still $0.00 / $100.00.** Artifacts:
  `automation/lib/elevenlabs.js`, a new `node cli.js voice` command, `.env.example`, `automation/README.md`
  and `docs/AUTOMATION.md`.
  **The finding, and it would have bitten us quietly: ElevenLabs' free tier is personal, NON-COMMERCIAL
  use and requires attribution to ElevenLabs** (checked 2026-08-13 against their pricing). Everything this
  challenge produces is commercial marketing for a store, so **free-tier audio may not be used in it at
  all.** Commercial rights start on their paid plans. This is the kind of thing that is fine right up until
  it is not, and it sits directly against `docs/PLAYBOOK.md`'s platform-legitimate-use rule. Nothing had
  been generated, so nothing has to be unwound.
  **Encoded as a gate rather than a doc note.** The CLI refuses a real run without `--commercial-confirmed`,
  and **that check runs before the API-key check on purpose**: holding a key proves nothing about which
  tier it belongs to, and the failure mode here is legal rather than technical.
  **The cheaper answer, recommended over the thing that was asked for: TikTok's own built-in
  text-to-speech.** Free, native to the platform, familiar to viewers, no API key, no subscription, no
  ffmpeg, applied inside the TikTok or CapCut editor. For a 13-second text-card video it does the same job
  at $0. ElevenLabs is worth paying for when voice quality is specifically the point, which on warm-up
  text-card posts it is not.
  **Deliberately does not assemble video.** `ffmpeg` is not installed on this machine (verified), so
  rather than requiring a system install, the command writes an MP3 and the founder drops it into CapCut
  alongside the transparent cards in `creative/cards/`. Phone-side assembly needs no ffmpeg and takes
  minutes. **That is a real simplification, not a workaround:** it removes a dependency from the critical
  path entirely.
  **Verified API shape:** `POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}`, auth header
  `xi-api-key` (**not** a bearer token), body `{ text, model_id }` with `eleven_multilingual_v2` the
  default, `output_format` as a query parameter, and the response body is the audio bytes rather than JSON.
  **Tested by execution on five paths**: refusal without commercial confirmation, refusal on missing key
  once confirmed, correct dry-run request, empty text, and over-length text. Never run live, since no key
  and no paid plan exist. Existing `warmup`, `post` and `video` commands regression-checked.

- **2026-08-13, part 2: Higgsfield connector built, tested, and deliberately not funded.**
  **No money moved. Out-of-pocket still $0.00 / $100.00.** Artifacts: `automation/lib/higgsfield.js`,
  a new `node cli.js video` command, `.env.example` keys, plus `automation/README.md` and
  `docs/AUTOMATION.md` entries.
  **Verified against their own sources rather than assumed**, since this is a paid API and a wrong guess
  costs credits: base `https://platform.higgsfield.ai`, endpoint `/v1/image2video/dop`, polling at
  `/requests/{request_id}/status`, result at `jobs[0].results.raw.url`. **The important correction: auth
  is a TWO-part credential** sent as `Authorization: Key <KEY_ID>:<KEY_SECRET>`, not the bearer token a
  first search result claimed. Checked against docs.higgsfield.ai and their official Node SDK.
  **Built zero-dependency with raw `fetch`**, matching the rest of `automation/`, rather than adding
  `@higgsfield/client` as an npm dependency.
  **Two things stated as unverified rather than papered over.** (1) Their SDK documents text-to-image and
  image-to-video only, **no text-to-video endpoint**, so this implements image-to-video and does not invent
  a path that may not exist. That matters here: image-to-video needs a source image, and we have no product
  photo. (2) The raw REST body envelope is ambiguous. The SDK nests params under `input`; the one raw
  example in their docs posts them at the top level. The file sends the SDK shape, names the ambiguity in
  its own header comment, and a 400/422 handler tells the next person to flip `BODY_ENVELOPE` before
  suspecting the key.
  **The gate that matters: it refuses banned subjects in code, before it checks the API key**, so a
  refusal never depends on having paid first. Cats, pets, people and the product are all blocked, which
  encodes the 2026-08-12 no-sample and 2026-08-13 no-cat decisions into the tool rather than leaving them
  as documentation. Sanctioned use is abstract b-roll only: water, light, texture, motion. Output always
  carries the AIGC label. **Tested by execution on all five paths**: cat, person and product prompts each
  refused with exit code 1; an allowed abstract prompt produced a correct dry-run request; a real call
  with no keys refused before any network I/O. Existing `warmup` and `post` commands regression-checked.
  **Never run against the live API, and that is deliberate.** Higgsfield is paid: **~$15/mo cheapest tier,
  ~$5 per 100 credits, 15-25 credits per basic video** (checked 2026-08-13, their pricing has been
  restructured repeatedly). **No key exists, no plan is bought, and none will be without founder
  approval**, per the standing no-spend-without-approval rule.
  **The honest economics, flagged not buried:** $15/mo is **15% of the entire $100 cap** for roughly 8-13
  basic videos, and the sanctioned use is only the 3 abstract-b-roll slots in
  `creative/NO-SAMPLE-PLAN.md`. The connector is ready if the founder wants it; on current usage it is
  poor value against the cap, and the text-card lane it would supplement costs $0 and has the better
  documented winner rate.

- **2026-08-13: the founder has no cat. The content plan had been resting on an unchecked assumption since
  the bench was set.** **No money moved. Out-of-pocket still $0.00 / $100.00.**
  **Track A is on schedule and that part is genuinely fine.** Founder confirmed the account is created and
  the Day -7 and Day -6 in-app routines are done. Today, 2026-08-13, is Day -5, consume only. Warm-up has
  not slipped a day.
  **The finding.** Asked directly, before building anything further, whether a filmable cat actually
  exists. **It does not: not their own, not borrowed, not once.** Nobody had ever asked. Every native
  warm-up script (Days -4, -3, -2), the Day -1 substitute, and **12 of the 18 Day 1-7 slots** in
  `creative/NO-SAMPLE-PLAN.md` were built on "film the founder's own cat, bowl and tap." All of it is
  unfilmable, and **the Day -4 post was due tomorrow.**
  **Why this compounded rather than merely adding.** The no-sample decision of 2026-08-12 was survivable
  precisely because the fallback was "film the PROBLEM instead of the product", and that fallback needed a
  cat. Losing the cat removes the mitigation for the earlier decision, not just a nice-to-have. With no
  product and no animal there is nothing physical left to film for a cat-fountain store. **This is the
  clearest case so far of a plan being built on a premise nobody verified**, and the transferable lesson is
  cheap: confirm what the founder can physically access, film and reach **before** designing around it, not
  after two rounds of scripts.
  **Four options were put to the founder** (pivot to bench rank 3, the phone lens clip kit, whose problem is
  filmable on a bare phone and whose economics are the best on the bench at 71.1% / 4.00x; stay on the
  fountain with no live footage; reverse the no-sample call for one unit; or pause and re-run product
  research filtered by what the founder can actually access). **Founder chose: stay on the fountain and on
  `@dailypawfinds`, with no live footage.** Recorded as theirs.
  **The reframe that keeps this coherent:** the account bio is already "pet + home finds, one at a time",
  which is a **curation and discovery** account, not a personal-pet account. A finds account carries no
  obligation to own a pet, so text cards, curation formats and voiceover over licensed footage fit the
  existing positioning natively rather than reading as a workaround. That is now the creative spine.
  **Allowed going forward:** text-on-screen cards (primary, and the highest documented winner hit rate we
  have evidence for), properly licensed free stock cat footage **with source URL and license recorded per
  clip and never first-person ownership language over it**, screen recordings of things that genuinely
  exist, the founder's own hands, voice, home and non-cat objects, and capped AIGC-labelled abstract
  b-roll. **Explicitly banned: generating a cat.** With no real cat footage of our own, that is the exact
  trap, and the existing ban on generated product, cat or person stands.
  **Rebuild completed the same day. Six files changed, ~1,300 lines.** Day -4, -3, -2 and the Day -1
  substitute rewritten in place with dated amendment notes; `creative/NO-SAMPLE-PLAN.md` amended with a new
  section 8 rather than rewritten; `creative/CONTENT-CALENDAR.md` carries a second dated supersede note with
  all 11 rows repointed. Zero em dashes across all six.
  **The Day -4 solve is the one worth recording, because it is not a workaround.** Five locked-off shots of
  ordinary spots in the founder's own home (sun patch, highest shelf, cardboard box, whatever they are
  currently using, clean laundry), ranked by text cards as the five places a cat picks in a room, **with no
  cat in it and none implied**. The absence is the format: the viewer is asked to picture their own cat in
  each empty spot, which is why the list works at all. One phone, one room, ten minutes, zero external
  dependencies, and deliberately no stock lane so the first post cannot be blocked by a licence check.
  **Stock licensing handled properly rather than assumed.** Pexels and Pixabay licences were fetched and
  read on 2026-08-13, not recalled, and recorded verbatim. Pixabay's own licence forbids "using content in a
  misleading or deceptive way", which is the licence itself prohibiting exactly what narrating a stock cat
  as ours would be. **No specific clips were chosen**, on the correct reasoning that picking clip URLs
  nobody can open would fabricate the very evidence the rule exists to produce. Each stock-dependent script
  instead carries a clip log (slot, URL, ID, contributor, licence, date verified, verified by) with a hard
  rule that a blank row does not get posted, plus a no-stock fallback so the slot cannot be blocked.
  **Three loose ends closed by `challenge-lead` directly after the rebuild:**
  (1) `creative/scripts/day2-script-textcard-bowl-audit.md` still spoke in a first-person cat-owner voice in
  four places ("my cat", "she was not being fussy", "the bowl she uses least"). Every one was a fabricated
  household observation. Re-voiced to general cat-owner knowledge, with item 3 downgraded from a stated fact
  to "the usual advice is", since food-bowl proximity is widely repeated advice rather than something we
  measured. The file's own title had always said "Cat Owners", only the card copy had drifted.
  (2) Three now-unfilmable scripts (`day1-script-faucet-test.md`, `day1-script-still-bowl-pov.md`,
  `day2-script-voiceover-why-moving-water.md`) were sitting in the bank unmarked. Each now carries a
  **RETIRED, DO NOT FILM** header explaining why, kept rather than deleted because they become filmable
  instantly if a cat ever exists, with an explicit warning not to re-voice them around stock footage since
  their beats depend on a specific animal doing a specific thing.
  (3) The Day -1 script flagged the `protocol.js` post-type collision as unresolved. **It was already fixed
  on 2026-08-12** by the promotional-intensity ranking, before that script was written, so the warning was
  stale. Corrected in place with the verification detail.
  **The honest cost, stated structurally because no organic winner rate exists to state it numerically.**
  The playbook's structure is Hook, Problem, Demo, Benefit, Proof, CTA. No sample already removed **Demo and
  Proof**. No cat removes **Problem as something visible**, which was the filmed beat. We are down to Hook,
  an asserted Problem, and a claim-free CTA, meaning **the viewer must already agree with the premise for
  the video to work.** The real fragility is concentration: 9 of 18 slots rest on three concepts from the
  same room, same voice, same argument, and those three are also the fallback for most of the other nine.
  Measured honestly that is about **four genuinely different concepts against the 3-5 both platforms ask
  for.** Unchanged and still healthy: the paid static bank never needed a cat, and the comment-bait lever
  test survives whole across all four prompt shapes.
  **The Dashboard-and-Pointer A/B is now deferred a second time and lacks both arms, not one.**
  **Next:** film and post Day -4 on 2026-08-14, by hand from the phone.

- **2026-08-12, part 6: the launch runbook exists, and it caught three stale facts on the way.**
  **No money moved. Out-of-pocket still $0.00 / $100.00.** Artifacts: `store/LAUNCH-RUNBOOK.md` (910
  lines), `ops/pixel-and-tag-spec.md` (363 lines), `store/copy/email-transactional.md`.
  **The runbook is 56 numbered steps in 11 phases: 9h45m hands-on, $12 to $16 total**, which is the entire
  standup cost. That leaves roughly $84 to $88 of the cap, of which $30 to $50 is the fulfilment float.
  **Only Phase 1 spends money.** Everything else is configuration. Two calendar waits are called out
  separately from hands-on time because they cannot be compressed: DNS propagation up to 48h, and the 7 to
  14 day domain aging window.
  **15 steps flagged irreversible or clock-starting**, the compounding one being the domain purchase, and
  **7 safe stopping points** identified, with an explicit note that **Phase 3 is the exception and must be
  done in one sitting**: pending verification documents are themselves a payout-hold trigger, so a
  half-finished Track D is worse than an untouched one. 21 admin paths carry a `[VERIFY IN UI]` flag rather
  than being asserted, because Shopify moves these screens between releases.
  **Three stale facts found, which is the real value of making something merge four documents:**
  (1) **`store/BUILD-SPEC.md` section 6's checkout path is out of date**, and worse, Shopify's published
  style options may not support the per-section payment-field border that spec calls for on Basic. That
  border came from the Baymard finding that visual encapsulation unique to the card fields raises trust, so
  it is not a cosmetic detail. Flagged as must-settle-in-UI rather than quietly kept.
  (2) **Buying the domain inside Shopify auto-configures DKIM, SPF and DMARC**, which collapses most of
  Phase 2 and most of `ops/dns-records.md`, written earlier the same day. Written up as an explicit Branch
  A / Branch B rather than discarding either path. The manual file is still correct for a third-party
  registrar and is cited, not restated.
  (3) **A Google tagging-migration deadline lands on 2026-08-26**, 14 days out, for non-Plus merchants.
  Expected to be a non-event for a store that does not exist yet, flagged to confirm rather than assumed.
  Also noted: Shopify Email now appears as **Shopify Messaging**, and Meta renamed Pixel Helper to **Ads
  Data Advisor** in August 2026.
  **One dangling reference closed by `challenge-lead` directly:** both email flow files cited
  `store/copy/email-transactional.md`, which did not exist. Now written. It does **not** block launch, since
  Shopify sends order and shipping confirmations from built-in templates regardless; what it does is
  correct the default wording, which never states our delivery reality. Both emails carry the 7 to 20
  business day window, the "if you have not heard in 5 business days, reply" line that pre-empts the most
  common support ticket, and the two honest notes about long-route tracking behaviour that cause most of
  the rest. **No upsell, no cross-sell, no discount code and no review request in either**, because
  promotional content is what reclassifies a transactional email as a commercial one.
  **Honest scope note the runbook states itself:** its final pre-flight is the **store-live** gate, not the
  paid-launch gate, and it defers to `ops/paid-readiness-dossier.md` section 10 where the two touch. The
  first ad dollar is deliberately **not** in this runbook.
  **Still owed:** `ops/merchant-center-feed.md` and `ops/product-page-seo.md` (`seo-brief-writer` has still
  never run), and `ops/fulfilment-runbook.md`.

- **2026-08-12, part 5: the no-sample copy audit found a factual contradiction, not just soft claims.**
  **No money moved. Out-of-pocket still $0.00 / $100.00.** Artifact:
  `compliance/no-sample-copy-audit-2026-08-12.md`, plus a substantially rewritten
  `store/copy/product-cat-water-fountain.md`.
  **The finding that mattered most was not a tone problem.** The product page said "Ships from **our
  warehouse partner**." `store/copy/policy-shipping.md` said items "ship directly from fulfillment centers
  **rather than a local warehouse**." **Two live pages of the same store contradicting each other on a
  material fact, and the product page was the wrong one:** there is no warehouse and no warehouse partner.
  A customer comparing the two pages would have caught it, and "our warehouse" is the exact impression a
  dropshipped store must not create. It is also the kind of line that converts an ordinary late-delivery
  complaint into a "not as described" dispute, which is the outcome our own docs care most about avoiding
  on a new processor account. Corrected to match the shipping policy.
  **Seven claims re-sourced from our voice to the supplier's.** The worst was a single bullet, "**Genuinely
  quiet.** Designed to run in the background without the whirring or buzzing you get from cheaper pumps.
  Fine for bedrooms and quiet apartments", which stacks three first-hand assertions: "genuinely" claims
  verification, the comparison implies we have heard several units, and "fine for bedrooms" is a
  recommendation from experience. We have heard none of them. Also cut: a timed "back together in under a
  minute" cleaning claim for an operation nobody has performed, and a title reading "for Cats Who Won't
  Drink Enough", which framed the product against a hydration deficit and drifted toward the health framing
  the rest of the page avoids.
  **Nothing about the offer got weaker, it got honest about provenance.** Everything the supplier publishes
  can still be said, with attribution. The standard, stated once and now enforced repo-wide: **attribution,
  not confession.**
  **The five policy pages needed no claim changes and that is worth recording rather than glossing.**
  Whoever wrote them on 2026-08-11 was already disciplined about not over-promising; the entire yield of
  this audit was concentrated in the product page, which is exactly where selling pressure lives. Two em
  dashes were fixed in `policy-privacy.md` for house style. The reviews slot was strengthened with an
  explicit ban on borrowing the supplier listing's 4.9 stars and 4,000+ sold count, which are the
  supplier's numbers for orders we did not fulfil.
  **Standing rule established:** any copy written before 2026-08-12 predates the no-sample decision and
  must be read with that in mind. Copy written after it is authored under the constraint, so an
  experience-based claim appearing in new copy is a defect in that writing run, not a leftover.
  **Still open, unchanged by this audit:** `ops/sourcing-dossier.md` has no record of what imagery the
  listings carry, which gates the product photo, static ad 2 and the Merchant Center `image_link`.

- **2026-08-12, part 4: build-everything-ahead-of-setup run. Partially completed, stopped by a session
  limit, and the gap is named rather than papered over.** **No money moved. Out-of-pocket still $0.00 /
  $100.00.** Nothing posted, workflow still disabled.
  **The ask:** build everything that does not require the founder, so that the moment they buy a domain and
  a Shopify plan, standing the whole thing up is transcription with no thinking.
  **Four specialists were dispatched in parallel. All four hit an API session limit mid-run** (resets
  21:50 America/New_York). Two had already written complete files before dying; two had read their context
  and written nothing. This is logged as a tooling interruption, not a research finding, and **no partial
  file was passed off as finished**: each was checked for truncation before being kept.
  **Landed and verified complete:**
  - `ops/cs-templates.md` (723 lines, `ops-support`): the customer-service macro set, including the case
    that matters most here, a customer asking a product question we cannot answer from experience. It also
    deliberately declines to write two templates it was not asked for, a review-solicitation macro and an
    apology-with-discount-code macro, on the grounds that a discount on a store with no proven margin
    history is a decision rather than a macro. Correct call.
  - `store/copy/email-flow-welcome.md` (271 lines, `copywriter` + `compliance-guard`): the welcome flow,
    2 emails, and it **found a real defect nobody had noticed**: `store/BUILD-SPEC.md` never specced a
    subscribe surface, so the flow had no entry point. It also flagged the checkout-consent trap, where a
    naive welcome automation greets a paying customer with an introduction to the product they just bought,
    and wrote the exit condition that prevents it.
  **Written directly by `challenge-lead` after the agents died, rather than leaving the ask half-done:**
  - `ops/dns-records.md`: the verbatim SPF and DMARC strings for purchase day, per `docs/NO-STALL.md` P3.
    The useful finding is stated at the top: **only two of the three records can be published on purchase
    day.** DKIM CNAMEs are generated per store by Shopify and do not exist until the store does, so this
    is two short visits, not one. Also covers the two silent-failure modes that break this most often, a
    duplicate SPF record and the 10-lookup limit, plus the DMARC alignment check that can pass SPF and
    still fail DMARC.
  - `store/copy/email-flow-abandoned-checkout.md`: the higher-revenue flow, 3 emails at 1h / 24h / 72h,
    **with no discount code in any of them** and the reasoning written down: a discount arriving an hour
    after abandonment teaches buyers to abandon, and our real objection is trust and shipping time, which a
    code does not answer. States the documented 1.72-3.33% recovery band up front so the flow is not judged
    against vendor fiction, and says plainly that early numbers are n=1 anecdotes that must not become
    learnings.
  - `creative/static-ads/` : **the first finished creative assets in this repo.** `render.js` renders the
    three text-only static ad headline variants to real 1080x1080 PNGs via headless Chrome, the same
    no-dependency technique used for the TikTok avatar, so it needs no image-generation API key. Rendered
    and visually verified, not assumed. The shop name is parameterised and marked UNCONFIRMED, since the
    store name has not been decided; re-run with `--shop` when it is. Static ad 2 stays unrendered on
    purpose: it needs a supplier product photograph nobody has obtained.
  **Still outstanding from this ask, and owed by the next run:** `store/LAUNCH-RUNBOOK.md` (the ordered
  standup sequence), `ops/pixel-and-tag-spec.md`, `ops/merchant-center-feed.md` and `ops/product-page-seo.md`
  (`seo-brief-writer` has still never run), `ops/fulfilment-runbook.md`, `store/copy/email-transactional.md`,
  and the no-sample compliance audit of the product page and five policy pages. That audit is the highest
  priority of the remainder, because those pages were written on 2026-08-11 assuming a sample would be held.
  **Next:** the audit and the launch runbook, then the store standup sequence.

- **2026-08-12, part 3: the founder waived the sample gate, and the creative plan was rebuilt around having
  no product.** **No money moved. Out-of-pocket still $0.00 / $100.00.** Nothing posted, workflow still
  disabled.
  **The decision.** Told the founder the sample was the critical path and today's one thing. They declined to
  order one, on the reasoning that this is a rush challenge and the specialist agents had already cleared the
  product. Recorded one correction rather than arguing the point: the agents had already passed everything
  they are *capable* of judging (economics 60.8% CM, compliance cleared), and **no agent can validate a
  physical object it has not held**, so that particular gate cannot be satisfied by more review. The call is
  the founder's on their own risk and it stands. The "sample held" rule stays in `docs/PLAYBOOK.md` and
  `challenge-lead`'s brief, **suspended for this product rather than deleted**, because it remains the right
  default next time.
  **`creative/NO-SAMPLE-PLAN.md` (353 lines) plus 10 new script/spec files (~891 lines), 28 distinct creative
  variants.** The plan's central finding is better than the brief that commissioned it. The obvious answer
  was "switch to AI video"; the actual answer is **film the PROBLEM, not the product**: the founder's own cat,
  own bowl, own tap. That is still authentic phone-filmed UGC, it needs zero assets we do not have, it never
  shows the fountain, and it fills 12 of the 18 Day 1-7 slots. AI video is capped at 3 slots, back half of the
  week only, AIGC-labelled, and constrained to abstract moving water with **no generated product, cat or
  person**. Two filming sessions and one voice memo produce nine of the eighteen posts.
  **The finding that had been sitting unused in `docs/LEARNINGS.md` since 2026-08-10:** static formats beat
  video on winner hit rate (text-only **11.60%**, product image + text **8.75%**, UGC **7.56%**, high-production
  video **6.87%**). The repo had **12 video scripts and zero statics**. Two static ad specs now exist, and
  text-only is the one format in the entire plan that needs nothing we lack.
  **The honest delta, both directions.** Paid is **not** degraded: the no-sample decision removes the two
  lowest-hit-rate formats and leaves the two highest. Organic is where it costs, and **there is no honest
  number for it**: no published organic winner rate exists and we have zero of our own, so the loss is stated
  structurally instead, as losing **Demo and Proof, 2 of the 6 beats** in the playbook's hook structure, on
  every post for the whole week. The 5-8% winner math is Meta paid data and must not be applied to organic.
  The Dashboard-and-Pointer A/B is **deferred, not cancelled** (its arm A is unfilmable without the product);
  the comment-bait test survives intact, and a new free experiment appears: 15 real-footage slots against 3
  generated.
  **Two live documents were amended rather than left to contradict the new plan:** `creative/CONTENT-CALENDAR.md`
  carries a dated SUPERSEDED-IN-PART header (Days -6 to -2 still stand; Day -1 and Days 1-7 now point at the
  no-sample plan), and `creative/scripts/day1-hook-bank.md` had "the motor is quiet" and "it's easy to clean"
  sitting under *Allowed, and true*. With no unit held those are the **listing's** claims, not ours, so they
  are now attribution-only until a unit exists.
  **One real code bug found and fixed.** `automation/lib/protocol.js` hard-codes Day -1 as `product-in-frame`,
  and `cli.js` tested post type with `!==`, so the Day -1 native substitute would have been **refused by our
  own tooling**. The gate's purpose is to stop the cadence being jumped *forward*, so posting something less
  promotional than the day allows is always safe. Replaced the equality check with a promotional-intensity
  ranking (`native` 0 < `product-in-frame` 1 < `product` 2): a request above the day's allowance is refused as
  before, a request below it is allowed and prints a note, and an unknown type is now rejected explicitly
  instead of silently failing the equality test. **Verified by execution in all four cases** (native on a
  product-in-frame day allowed with the note; `product` on that day refused with exit code 1; a bogus type
  refused; real state file backed up, simulated, and restored clean).
  **Also flagged, not yet done:** `ops/sourcing-dossier.md` never recorded what imagery or video the supplier
  listings actually carry, because item pages hit a login wall. Nobody has ever looked. That is a 5-minute
  check inside the supplier account and it gates the one supplier-media slot and one static spec.
  **Next:** domain and store, then the API keys, which are now rank 3 because generated video went from an
  upgrade to the only content source.

- **2026-08-12, part 2: the paid rail got built, and the run found a scheduling collision that changes the
  plan.** Two specialists ran in parallel, plus a doc-hygiene pass. **No money moved, out-of-pocket still
  $0.00 / $100.00, no account touched, the GitHub workflow is still `disabled_manually` (verified, not
  assumed), and nothing was posted.**

  **The finding that matters most: the sample is the real critical path, and nobody had it on the board.**
  Every Day 1 script needs the fountain on camera, the Day -1 product-in-frame post on 2026-08-17 needs it
  too, and `docs/PLAYBOOK.md` plus `challenge-lead`'s own brief both hold "never advertise a product you
  have not held" as a gate that does not bend. **No sample has been ordered.** `ops/sourcing-dossier.md`
  puts the recommended primary supplier (Option A, $6.82) at **12-20 business days**, which lands roughly
  2026-08-28 to 2026-09-09. The one listing with a real posted delivery date (Option C, $10.33) shows
  **2026-08-16 to 08-21**. Day -1 is 2026-08-17 and Day 1 is 2026-08-18. **So even the fast option only
  maybe makes Day -1, and the recommended option misses Day 1 by 10 days to 3 weeks.** This was not caused
  by anything that happened today; it has been true since the bench was set, and no previous run costed the
  lead time against the calendar. It is logged as a founder-facing collision rather than quietly absorbed,
  because the fix costs real money and only the founder spends. **Ordering the sample is now Founder Action
  #1 and today's one thing**, displacing the domain, with a recommendation to order Options A and C together
  (~$17 total, inside the $15-30 sample allowance) so the schedule is hedged rather than bet on one supplier.
  No order was placed by this seat.

  **`growth-operator` + `offer-economist`: the Paid Readiness Dossier now exists**, `ops/paid-readiness-dossier.md`,
  432 lines, implementing `docs/NO-STALL.md` P7 in full. This closes the largest hole between the repo and the
  mandate: the $1,000/day target is arithmetically a $4,000/day ad-spend target, the ladder has zero slack,
  and there was previously **no paid artifact of any kind in the repo**. Covers Meta (1 campaign, 1 broad ad
  set, 4 launch concepts at $50/day, the 72h freeze, the settings that must not be touched), Google (Merchant
  Center required attributes pulled live from support.google.com, Standard Shopping recommended over PMax
  with reasoning), TikTok (platform floors, sequenced third), the Track E launch-order tie-break, the budget
  step ladder, pixel state, a pre-flight checklist, and the pre-written learning-phase honesty sentence.
  **Economics, recomputed at worst-case landed cost and independently re-verified by `challenge-lead` rather
  than taken on trust:** fountain contribution margin **$21.28/order (60.8%)**, break-even aMER **1.64**,
  target aMER **2.06**, max allowable CPA **$17.02**, break-even at ~2.35 orders/day against $50/day spend.
  **It also caught a real discrepancy in our own bench:** the bench table's 64.8% margin omits a returns
  line, and the dossier reconciles the two (60.8% with a modelled 4% returns reserve) instead of quoting the
  flattering number. Every ad-level kill trigger on all three bench ranks collapses to the same rule, "$25
  spent, zero sales", because the flat threshold binds before the 2x-contribution alternative in all three
  cases. **Three things it could not verify are flagged in the file, not invented:** current Meta and TikTok
  CPM in this niche (Ad Library and Creative Center still unreachable by direct fetch, consistent with the
  standing *Anti-patterns* entry), the exact Google Ads conversion minimum for Target ROAS bidding, and a
  single-source SEO-blog claim that Shopping campaigns require Local Inventory Ads from 2026-08-31, which if
  true would force a Performance Max fallback and needs a human in the Merchant Center UI to settle.

  **`creative-director` + `hook-writer`: `creative/CONTENT-CALENDAR.md`** (183 lines) maps 2026-08-12 through
  2026-08-24 to protocol days with post type, count, asset filename, time, CTA-ladder rung and AIGC state per
  slot, plus **7 net-new scripts** (~495 lines) and 10 round-2 hooks added to the hook bank. The
  **Dashboard-and-Pointer A/B from the 2026-08-12 external-evidence entry is now actually runnable**: 3
  dashboard-and-pointer scripts against 3 standard-UGC scripts inside Challenge Days 1-4, read on hook rate
  and comment rate. The time-of-day confound (arm A always takes the first slot) is flagged in the file
  rather than hidden, which means the test reads directional, not clean. Every Day 1+ script also carries a
  labelled comment-bait element across 4 distinct prompt shapes, so the comment-rate lever from that same
  entry gets tested separately from the format. **Reported shortfall, not smoothed over:** 7 scripts against
  a 3/day floor is short 5 by Day 4 and short 14 by Day 7, and Days 5-7 have zero assets. The next
  creative run owes 9 scripts minimum before 2026-08-22.

  **Doc hygiene (Standing Work Queue item 12), fixing defects introduced by the commits pulled this morning.**
  The commit that added four agent briefs updated no count anywhere: "ten briefs" was stale in 6 files, and
  the four new briefs had been appended as an orphaned bullet list in the middle of an unrelated section of
  `agents/HQ.md` instead of placed in the org chart. All corrected, org chart now reads 14 by department, and
  `docs/OPERATOR-PLAYBOOK.md` section 11's "two gaps in our org" passage now records both gaps as closed by
  those briefs, with the caveat that a staffed brief is not proven work. Also fixed: the warm-up block said
  Day -7 when it was Day -6; the standing tallies said "30 (challenge not started)" with no real dates;
  `docs/LEARNINGS.md` claimed 1 learning when it has 2, and this ledger claimed "3 entries" when the real
  split is 2 learnings, 2 open hypotheses and 19 external-evidence entries; two cross-references pointed at
  "Founder Action Card #9" which no longer existed after re-ranking, now referenced by name instead.
  **Track E had no ledger presence and no founder card at all** despite the mandate making it a Day -7 item;
  both added, with its lateness attributed to the doc landing after its own due date rather than to the founder.

  **Verified rather than assumed:** `gh secret list` confirms `CLAUDE_CODE_OAUTH_TOKEN` present since
  2026-08-11, and `gh workflow list --all` confirms `challenge-loop` is `disabled_manually`. That switch is
  the founder's and was not flipped.
  **Next:** order the sample today, then decide how Day -1 and Day 1 content changes given it cannot arrive
  in time.

- **2026-08-12: docs density pass, warm-up became a founder-controlled switch, the mandate was propagated,
  and two external evidence entries were added.** Nothing spent, out-of-pocket still $0.00, no account
  touched, the GitHub workflow stays disabled.
  **Density:** every `.md` in root, `docs/`, `agents/`, `.claude/agents/` and `tracker/` rewritten for
  command voice. Duplicated facts collapsed to one canonical home plus cross-references. The four
  account-survival rules now live in exactly one place, `docs/PLAYBOOK.md` "Non-negotiable (account
  survival)", with 21 cross-references replacing the old restatements. `docs/PLAYBOOK.md` sections 2 and 10
  merged (base rates plus source credibility), so its section numbers shifted and every pointer to them was
  updated.
  **Warm-up is now a switch, not a wall.** `automation/state/warmup-state.json` carries `enabled` (default
  `true`), plus `node cli.js warmup skip` and `warmup enable`. When disabled, `challenge-lead` and
  `content-engine` go straight to product content and CTA/link posts at 3 posts/day with no day-type check,
  and the CLI writes a dated line here recording the founder's decision. Post caps and active holds still
  apply either way, because those answer platform signals rather than the calendar. Verified by execution in
  all three states (gate on refuses a `product` post on Day -6; gate off allows it; both toggles wrote the
  ledger line, which was then reverted).
  **Mandate propagated.** $1,000/day net by Day 30 is now in the `BOOTSTRAP.md` read-order and kickoff
  prompt, `AGENTS.md`, `START-HERE.md`, `agents/HQ.md`, `docs/PLAYBOOK.md` and five agent briefs.
  `docs/30-DAY-PLAN.md` was rewritten against it with an explicit daily ladder,
  `spend(d) = $50 x 1.20^(d-6)` from a Day 6 launch, landing $3,975/day of spend and **$994/day net on Day
  30**. Stated plainly rather than rounded up: the maximum safe step taken every single day still lands 0.6%
  short, so organic has to supply the remainder. Creative floor raised from 5 net-new/week to **3/day
  (21/week), target 5/day**, justified by the 5-8% winner rate: 21/week gives 1.05-1.68 expected winners/week
  against a ladder that needs one fresh winner per week, where 5/week gave 0.25-0.4.
  **Two new `External evidence` entries, both external, neither ours.** (1) Dropship.io, `HYPOTHESIS`,
  unverified by us: one 7-day free trial timed to the week the bench is finalised, pull measured per-product
  revenue for every bench candidate and its top competitors, date each figure, cancel. Cost $0, the single
  named exception to the no-paid-spy-tools rule. (2) A logged-in pull of the public `@dropship` profile,
  measured: 4.1M followers, pinned reel at 8.3M views / 16.2K comments / 490 shares, a four-word caption plus
  ten hashtags, format a dashboard screen recording with a pen pointing at the screen. A second pull found the
  same skeleton on a second outlier (reel `Db3qex1ugwX`, 1M views / 156 comments / 44 shares in ~24h, Meta Ads
  Manager mid-setup, blue pen on the Daily budget field, green "DAILY BUDGET" overlay, six-word caption), so
  it is now written up as a five-element recipe in `creative-director` rather than one observation. Their own
  per-post spread is 26.6K to 8.3M, which corroborates the 5-8% winner-rate math rather than contradicting it.
  **The sharper finding is the comment-rate asymmetry:** 0.2% of views on the pinned reel vs 0.016% on the
  routine one, 12x, and distribution at the top of that account tracks comments rather than views. So
  comment-bait is a lever separate from the format, and we have tested neither. Both stay `HYPOTHESIS` for our
  niche (theirs is B2B software shown to aspiring dropshippers, ours is a consumer product: the mechanic
  transfers, the subject does not). Test: 3 dashboard-and-pointer videos against 3 standard UGC videos in one
  week, compared on hook rate and comment rate.
  **Next:** the founder decides whether to keep the warm-up gate on. Track A is on Day -6 either way.

- **2026-08-11, part 3: the founder set the real goal, two more research sweeps came back empty, and the
  bench is settled at 3.** The founder stated the challenge's actual target plainly: aim for a fully
  operating, profitable store by day 30, with $1,000/day as the ambitious direction to aim at, understood
  as a stretch goal rather than an expected outcome — logged here so future sessions read the founder's
  own framing rather than only the playbook's more conservative baseline (10-13% net margin on a mature
  store, most profitability arcs running 3-6 months, per `docs/LEARNINGS.md`). Both frames are true at
  once: aim high, report only what the ledger actually shows.
  Asked for the cat-toy candidate to be checked at a genuinely rigorous "zero disclosed weakness" bar
  before spending anything on it. Ran `offer-economist` and `compliance-guard` on it: both passed it
  **conditionally** (economics: 3.67x/68.9% at the worst tested combination, but resting on an unverified
  $5-9 landed-cost estimate, not a real supplier quote like ranks 1-3; compliance: cleared specifically
  against Cheerble's actual product line, which turned out not to be a real trademark risk, but surfaced
  a new open item, FDA laser labeling requirements, unconfirmed on this unit). **Neither pass fixes the
  one weakness that actually matters: it's already sold at Walmart, Chewy and Petco.** Told the founder
  this directly rather than rounding a conditional pass up to a clean one. **Founder rejected it**, which
  was the right call given their own bar.
  Then ran two more research sweeps aimed at finding 5 total clean candidates: tech/wellness (~28
  candidates) and pet/home-kitchen (~20 candidates, using a deliberately different discovery method,
  supplier-side/AliExpress-first, specifically to avoid re-finding the same commoditized items a
  TikTok-trend-first search would surface). **Both came back with zero qualifying picks.** Every candidate
  with real, checkable demand in both sweeps was already sold at Walmart, Target, Best Buy, Costco, Amazon
  Basics, Chewy, or Petco: heated massage cushions, hand warmers, sleep masks, scalp massagers,
  content-creator kits, massage guns, acupressure mats, heated mouse pads/gloves/insoles, mug warmers,
  mini vacuums, foot hammocks, wobble stools, mini printers/label makers, heated neck wraps, star
  projectors, phone mounts, weighted sleep masks, teleprompters, steam pet-grooming brushes, dog car
  booster seats, vibrating pet massage brushes, smart pet ID tags, and portable blackout curtains (the
  last one turned out to literally be an Amazon Basics SKU). AliExpress bot-blocked automated fetches
  after roughly 2 requests per sweep, so this method has a real ceiling that a human logged into a real
  browser session doesn't share — noted as worth re-testing that way, not treated as a permanent wall.
  **Founder decision: do not force-fill ranks 4-5 with a candidate carrying a disclosed hard weakness
  just to hit a count of 5. The bench stays at 3 confirmed candidates, ranks 4-5 explicitly open rather
  than padded.** This matches the project's own standing rule that the bench is depth, not five parallel
  bets, and only one product is ever live at once regardless of how many ranks are filled.
  **No money moved. No product ordered. Out-of-pocket still $0.00 / $100.00.**

- **2026-08-11, part 2: getting ready before setup, so setup is a paste job.** The founder had just
  finished the daily-loop token setup, it was late, and asked for the Standing Work Queue to run rather
  than starting anything new that needed them. Six specialists ran in parallel, matching real ledger data
  where it existed rather than each starting cold:
  **`product-scout`** found one rank-5 candidate (a generic 4-in-1 interactive cat toy) but flagged real
  weaknesses in it rather than presenting a clean pick — see the Product bench section above for the
  full reasoning and the pattern it noticed (viral pet gadgets keep migrating to mainstream retail
  shelves within about two years, worth remembering on future sweeps). Left unseated pending economics
  and compliance review.
  **`offer-economist`** ran the worst-case gate on ranks 3 and 4. Lens kit confirmed (71.1%/4.00x, real
  cushion). Grooming vacuum **killed** (2.40x markup at worst case, would need $75 retail to fix, outside
  the band) despite having the strongest demand evidence on the whole bench — logged explicitly as the
  lesson that demand strength does not override a failed economics gate.
  **`compliance-guard`** reviewed the whole confirmed bench: all conditional passes, no hard blocks, full
  detail in `compliance/bench-review-2026-08-11.md`.
  **`store-architect`** wrote a complete, paste-ready Shopify build spec to `store/BUILD-SPEC.md` (418
  lines): theme settings, a quantity-break table with real numbers, a free-shipping threshold, the free
  app list (verified live, not assumed), the full CVR checklist with exact setting paths, and a single
  ordered build sequence merging it with `docs/SETUP-GUIDE.md`.
  **`copywriter`** wrote the fountain's product page and all 5 policy pages to `store/copy/`, with
  explicit `[PLACEHOLDER]` markers everywhere real business info is needed rather than inventing a
  business name, address, email, or any reviews.
  **`creative-director`** wrote 5 scripts to `creative/scripts/`: the three Day -4/-3/-2 native posts (each
  a genuinely different, zero-product-mention concept — a lap-trapped moment, an entryway tip, a kneading
  fact), the Day -1 product-in-frame script (fountain visible, unstaged, never mentioned), and a Day 1
  hook bank (8 hook variants + 2 full scripts with timed shot lists) for the fountain, all recommending
  real phone-filmed UGC over AI video since the beats depend on authentic cat behavior.
  **`ops-support`** built a real sourcing dossier at `ops/sourcing-dossier.md` — and tonight, unlike the
  first research run, direct AliExpress category-page fetches actually worked: real prices, ratings and
  sold-counts for the fountain (a $6.82, 4.9-star, 4,000+-sold pick as primary). The eye mask's data is
  weaker (one confirmed price, one estimate, flagged as such). Recommended shipping-policy language:
  "7-20 business days" for both, since neither pick has a confirmed US-warehouse SKU. Combined sample
  cost for one of each: **~$16-19.50**, inside the $15-30 budget-rules allowance, not yet spent.
  **Everything above is preparation, not action.** No store exists, no supplier account is funded, no
  sample was ordered, no video was filmed or generated, nothing was posted. All of it is now sitting
  ready so that the moment the founder creates the Shopify store and the supplier account, filling them
  in is copy-paste rather than a cold start. **No money moved. Out-of-pocket still $0.00 / $100.00.**

- **2026-08-11, the daily-loop secret is set (dead end zero cleared, workflow still OFF).** Pushed the 3
  pending local commits to `origin/main` first, so the loop (whenever enabled) sees current state rather
  than 2-day-stale repo content — **from now on, every commit in this repo gets pushed immediately after,
  per the founder's explicit instruction**, not batched. The founder generated a `claude setup-token` and
  ran `gh secret set CLAUDE_CODE_OAUTH_TOKEN`, but pasted the live token value directly into the chat
  first rather than only into the terminal prompt as recommended. Flagged this plainly as the token now
  being exposed outside the terminal and recommended rotating it; the founder chose to proceed with the
  already-pasted value anyway, which is their call on their own credential. Set via
  `gh secret set ... --body '<token>'` and confirmed present via `gh secret list` (name + timestamp only,
  value never readable back, by GitHub's own design). **The workflow itself (`gh workflow enable`) was
  deliberately NOT run** — per this repo's own rule, that switch is the founder's to flip, and they asked
  to hold it until they say so. Confirmed via `gh workflow list`: still `disabled_manually`. No money
  moved.

- **2026-08-11, Track A Day -7: the TikTok account is real.** `@dailypawfinds` ("Paw Finds") created by
  the founder on a real device/network, profile completed (bio: "pet + home finds, one at a time," no
  link), matching the values handed over in the prior session. This is the actual start of the 30-day
  clock's warm-up runway. Ran `node automation/cli.js warmup start --handle @dailypawfinds` for real
  (previous runs of that command were test data on a fake handle/date, cleared before handoff) — the
  tracker now correctly reports Day -7 and the Day -7 routine (create + complete profile, ~20 min
  scroll, zero engagement).
  **Built the profile picture.** No image-generation model is available in this seat, so designed it as
  SVG and rasterized it with headless Chrome (already present on this machine, no install needed): a
  simple paw-print mark, warm coral background, cream icon. Chose this over a real or fabricated face
  after a quick research check (`docs/PLAYBOOK.md`-style caveat applies: mostly vendor-blog consensus,
  not platform-documented, so directional not authoritative) — the actionable, well-supported parts were
  simple/high-contrast/legible at tiny circle-crop size, and a warm image reading more "native" than a
  corporate logo for a personal-feeling account. A real face would fit that better, but there isn't one
  to use honestly, and inventing one crosses into the same fabrication line this repo won't cross
  elsewhere. Source file `assets/tiktok-profile/pawfinds-avatar.html`, rendered PNG alongside it and
  delivered to the founder to set in-app.
  **Founder actions table updated:** Track A Day -7 removed (done); the recurring daily warm-up task is
  now owned by `node automation/cli.js warmup today` rather than a static numbered card, since what it
  asks for changes every day. Domain purchase is now the single highest-cost-of-delay open item.
  **No money moved. Out-of-pocket still $0.00 / $100.00.**

- **2026-08-10, part 2: an `automation/` CLI, and one request declined.** The founder asked for a
  "personal CLI that connects to TikTok and runs my whole TikTok." Built the automatable half,
  declined the rest, and said which is which rather than quietly doing a smaller thing.
  **Declined:** automating the scrolling/liking/following/watching itself. There is no legitimate
  API for that; the only way to build it is session-token login automation against the consumer
  app, which is the exact ban vector `docs/WARM-UP.md` and `compliance-guard` already call a hard
  no, and it would defeat warm-up's whole purpose (proving to TikTok's classifier that this is a
  real human before it distributes anything). That stays a real ~20 min/day human job during
  warm-up, 5-10 min/day after. Not a tooling gap, a deliberate line, same one this repo already drew
  on day zero.
  **Built:** `automation/` (Node, zero npm installs, uses Node 24's built-in `fetch`/`FormData`).
  Two commands: `warmup today` prints the current Challenge Warm-Up Protocol v1 day, the human
  routine, and how many posts (if any) are authorized; `post` wraps upload-post.com's approved
  TikTok Content Posting API and **refuses in code** to post a type the current protocol day doesn't
  allow, refuses past today's post cap, and refuses during an active hold — the gate is enforced by
  the tool, not just documented. `warmup hold` freezes posting on an action block or a flat run of
  posts, per the protocol's own hold conditions. State lives in
  `automation/state/warmup-state.json`, committed to git like the ledger. Tested end to end
  (start/today/hold/post --dry-run, including deliberately wrong post-type attempts to confirm the
  refusal actually fires) before handing it over; found and fixed one real bug in the process
  (`--dry-run` was checking for an API key it shouldn't have needed).
  **A real correction surfaced doing this:** upload-post.com's TikTok posting requires their paid
  Basic plan, **$24/mo minimum**, not the free tier `docs/SETUP-GUIDE.md` and `docs/AUTOMATION.md`
  previously said. Verified live against their own docs and llms-full.txt, 2026-08-10. Both files
  corrected in place. Recommendation logged: don't subscribe until Track A is close to Day 1 -
  paying today would just be $24 of the $100 cap sitting idle for a week with nothing postable yet.
  **What's still genuinely human, restated because the founder asked for full autonomy minus
  warm-up specifically:** identity/KYC (Shopify Payments verification), funding any account (ad
  account, supplier wallet, upload-post's subscription), approving real ad spend, and every one-time
  OAuth grant (TikTok<->upload-post, Canva). These are the same four items `docs/NO-STALL.md` already
  names as the irreducible boundary - not new restrictions, just restated against a request that
  implied they might not apply. Everything else (research, economics, store spec, scripts, video
  generation once keyed, posting once connected, the GitHub Actions daily loop) can genuinely run
  unattended.
  **No money moved, no post sent (only `--dry-run` was exercised), out-of-pocket still $0.00.**

- **2026-08-10, first daily loop run: the product bench went from empty to 4/5 filled, with real
  unit-economics gating applied.** `challenge-lead` picked up the challenge, read the full doctrine, and
  ran the day's one agent-doable decisive move (warm-up Action Card #1 is still a `HUMAN:` step, so this
  is the top item from the Standing Work Queue, P10 item 2: bench build).
  **`product-scout`** ran a live research sweep across the free stack. Honest result: TikTok Creative
  Center, Meta Ad Library and Amazon Movers & Shakers were all functionally unreachable by direct
  fetch today (client-rendered SPA shells, a socket hang-up, and HTTP 503s respectively) — only one
  AliExpress category page returned genuine live data. Everything else in the findings is WebSearch-
  mediated secondary reporting (real, but not a raw platform pull), clearly flagged per item rather than
  presented as verified. Five candidates came back scored: cat water fountain, hands-free electric can
  opener, rechargeable heated eye mask, modular phone lens clip kit, and a pet deshedding vacuum. Six more
  were explicitly screened out with reasons (posture correctors, LED strips, phone cases — hard bans;
  neck fans and mini blenders — now commodity-priced at Target/Five Below, fails the not-in-local-stores
  rule; GPS collars — judged trademark-adjacent to entrenched branded hardware, excluded rather than
  flagged).
  **`offer-economist`** then re-ran the top 3 candidates' economics independently rather than trusting the
  scout's rounded numbers, using the real Shopify/Stripe fee structure (2.9% + $0.30, not a flat 3%) and
  checking the gate (3x markup AND >30% net margin) at worst-case landed cost, not best-case. Result: the
  **cat fountain and the eye mask both clear the gate with real cushion at worst-case cost** (fountain
  3.18x/64.8%, eye mask 3.16x/64.4% once repriced from $28.99 to $29.99). The **can opener fails the 3x
  leg at worst-case sourcing cost** (2.75x at $12 landed) even though its margin alone looked fine
  (59.8%) — margin and markup are an AND, not an OR, and this is exactly the kind of thing that gate
  exists to catch. It was killed pre-bench rather than promoted; not a permanent ban, reopens if a
  supplier quote comes in at $10.99 or below.
  **Bench state:** rank 1 fountain, rank 2 eye mask (contingent on the reprice), rank 3 lens kit, rank 4
  grooming vacuum (flagged: landed cost busts the $5-12 target band, retail sits at the $60 ceiling to
  compensate). **Rank 5 is open**, owed on the next `product-scout` run. Neither rank 3 nor rank 4 has
  been through `offer-economist` yet.
  **What's still unverified and matters:** the fountain's strongest demand signal (ad-longevity) came
  from a third-party ad-spy teaser page, not a live Meta/TikTok Ad Library pull. The founder action card
  "spend 10 min logged into Meta Ad Library + TikTok Creative Center" above asks for a logged-in check to
  close that gap before more work goes into this candidate (referenced by name, not rank: the ranking
  changes every run).
  **No product went live. No sample was ordered. No money moved.** Out-of-pocket still $0.00. Warm-up
  still not started on any track; that remains the single highest-cost-of-delay item on the board and
  this run does not change that ranking, it just means the bench is ready the moment warm-up clears.

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
