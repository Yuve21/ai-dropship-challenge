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
- **Track A (TikTok): STARTED. Protocol day: Day -7.** Account: `@dailypawfinds` ("Paw Finds"), created
  2026-08-11, on a real device/network per the founder. Bio: "pet + home finds, one at a time," no link.
  Profile picture: a designed paw-print mark (warm coral background, cream icon), not a real photo or a
  fabricated face — see reasoning in the 2026-08-11 session note. Tracked going forward with
  `automation/` (`node cli.js warmup today`), state in `automation/state/warmup-state.json`. One account,
  one real device/network, as required.
- **In-app human routine (~20 min/day during warm-up, 5-10 min/day forever after): started 2026-08-11.**
  Day -7 routine (profile setup + ~20 min scroll, zero engagement) is the founder's task today. The
  posting API cannot do this; only a human can.
- **Native non-promotional posts made: 0 of 3 (Days -4 to -2, not due yet). Product-in-frame post: 0 of 1
  (Day -1, not due yet).**
- **Product/CTA content started: NO (gated until Track A reaches Day 1, ~2026-08-18 if the cadence holds
  exactly as scheduled).**
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
- **Learnings logged in `docs/LEARNINGS.md`: 3 entries (1 learning, 2 open hypotheses: Warm-Up Protocol
  v1, and the no-stall procedures).**

## Product bench (update in place; see `docs/NO-STALL.md` P1, and `docs/PLAYBOOK.md` section 3)
Five ranked, pre-validated candidates at all times, so a killed product costs zero days. `product-scout`
owns it: re-score the whole bench weekly, promote rank 1 in the same run a product is killed, backfill
rank 5 from that run's sweep, drop any candidate that has sat here 30 days without fresh evidence. Only
one product is live at a time.

**Status: 3 of 5 CONFIRMED (ranks 1-3, all through `offer-economist`'s worst-case gate). Rank 4 is OPEN**
(the prior occupant, the grooming vacuum, was killed tonight, see below). **Rank 5 has one unvetted
candidate pending economics + compliance review, not yet seated as confirmed** — see "Pending candidate"
below. Backfill/vetting owed next `product-scout` + `offer-economist` run (`docs/NO-STALL.md` P10 item 2).
Worst-case = using the high end of the stated landed-cost range, per `offer-economist`'s gate check (a
product that only clears 30%/3x at best-case cost is not qualified).

| Rank | Candidate | Landed cost | Retail | Net margin (worst case / best case) | Demand evidence (and which ladder rung it entered at) | Scored on |
|---|---|---|---|---|---|---|
| 1 | Cat water fountain (ABS/plastic pump, quiet) | $8-11 | $34.99 | 64.8% / 73.4%, markup 3.18x-4.37x | Established competitors (PETLIBRO, Catit, Pioneer Pet) = validated per playbook (multiple competitors is not a red flag). Ad-longevity claim (1,263 TikTok ad-library entries) is **unverified**, from a third-party ad-spy teaser page, not a live Meta/TikTok pull. Entered at rung 0 (clean sweep, not widened). Real supplier picks + honest 7-20 business day shipping window now in `ops/sourcing-dossier.md`. | 2026-08-10 |
| 2 | Rechargeable heated eye mask (USB warm-compress) | $6.50-9.50 | $28.99, **repriced to $29.99 recommended** | 63.3% / 73.7% at $28.99 (3.05x worst-case markup, a $0.16 cushion — fragile pass); 64.4% / 74.4% at $29.99 (3.16x, real cushion) | **Weakest demand evidence of ranks 1-3**: one specific TikTok video found had 774 likes / 38 comments, under this challenge's own 1,000+ bar. Kept on margin quality + category fit, not demand strength. Needs a real ad-longevity check before any spend. Entered at rung 3 (2 of 3 demand signals, logged as required). | 2026-08-10 |
| 3 | Modular magnetic phone lens clip kit (generic, macro/wide/fisheye) | $5-7.50 | $29.99 | **CONFIRMED 2026-08-11: 71.1% / 79.4%, markup 4.00x-6.00x.** No fragility — clears both gates with real room at worst case, unlike ranks 2 and (formerly) 4. | Competing branded kits (KEYWING, MIAO LAB) actively marketed as viral — validates the category, but our sourcing must be fully generic to avoid the trademark proximity that got the branded names excluded. No hard comment/share numbers found; weakest demand evidence on the confirmed bench, but cleanest economics. Entered at rung 3. | 2026-08-10, economics confirmed 2026-08-11 |
| 4 | **OPEN** | - | - | - | - | - |
| 5 | **OPEN** | - | - | - | - | - |

**Pending candidate (found 2026-08-11, NOT yet a confirmed bench slot):** generic 4-in-1 automatic
interactive cat toy (laser + feather + rolling ball, motion-sensor). Estimated $5-9 landed, $32.99-34.99
suggested retail, scout's own math ~3.7x-6.6x markup / comfortably >30% margin — **not yet run through
`offer-economist`'s worst-case gate or through `compliance-guard`**, both owed next session before this
can be seated. Real risk already flagged by the scout: this category is now sold at Walmart, Chewy and
Petco (Potaroma brand and others), which fails the "not easily bought locally" trait outright — kept as a
candidate rather than screened out because it isn't priced to commodity-aisle levels ($20-35 comparable
listings, near our band) and the demand signal is a genuine multi-year, multi-brand category rather than a
one-off fad, but this is a real, disclosed weakness, not a clean pass. **Worth noting as a pattern, not
just about this candidate:** the scout flagged that nearly every well-known viral pet gadget from the last
two years it checked tonight (bubble backpack carrier, spin scrubber, treat-dispensing ball, pet stroller)
has since migrated onto mainstream pet-retailer shelves — a standing sourcing difficulty for this niche
worth keeping in mind on the next sweep, not a one-off finding.

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

**Compliance:** ranks 1-4 (fountain, eye mask, lens kit, and the now-killed vacuum) all passed
`compliance-guard`'s review as conditional PASSes, no hard blocks — full detail in
`compliance/bench-review-2026-08-11.md`, including the specific ad-copy line to hold for the eye mask
("comfort, not medical") and the sourcing-stage brand-comparison check owed for the lens kit before
ordering a sample. The pending cat-toy candidate has **not** been through this review yet.

## Founder actions outstanding, ranked by cost of delay (update in place; `docs/NO-STALL.md` P2/P3)
This block goes at the top of every daily readout. Each item is a Prepared Action Card: exact URL, exact
steps, exact values to paste, cost, minutes, what it unblocks. The founder does one action and no research.

**Track A Day -7 is DONE as of 2026-08-11** (`@dailypawfinds`, "Paw Finds") — removed from this table.
**Today's one thing now, and every day going forward: run `node automation/cli.js warmup today`** and do
whatever it says (today: ~20 min scrolling, zero engagement). That recurring daily task is tracked by
the CLI, not a numbered card here, since it changes what it asks for every day.

| Rank | Action | Cost of delay per day | Cost | Time | Unblocks |
|---|---|---|---|---|---|
| 1 | Buy the domain and publish SPF + DKIM + DMARC `p=none` the same day (Track C Day -7) | **1.0, compounding and unrecoverable** | ~$10-12 | ~15 min | Sending domain, real contact email, domain verification |
| 2 | Enable the daily loop: `gh workflow enable challenge-loop` then `gh secret set CLAUDE_CODE_OAUTH_TOKEN` (dead end zero) | 1.0 while a seat is not being opened daily | $0 | ~3 min | Unattended daily progress. Until then an open seat is the loop |
| 3 | Create the Shopify store ($1/mo promo, Basic) | 0.6 | ~$1 | ~10 min | Store build, pixel install, policy pages, checkout |
| 4 | Finish payments verification to 100%, bank linked (Track D Day -7) | 0.9 once a store exists | $0 | ~20 min | Taking any money at all |
| 5 | Create the free upload-post account (dashboard sign-up only; do NOT subscribe to the paid Basic tier yet, see automation/README.md) | 0.4, grows as Day 1 (~2026-08-18) approaches | $0 now, $24/mo when you do subscribe (closer to Day 1) | ~10 min | Lets `automation/`'s `post` command actually send once the paid tier + video assets both exist |
| 6 | Create the DSers/CJ account and put a payment method on it | 0.2 until the first order | $0 now | ~15 min | Fulfilment (critical the moment an order exists) |
| 7 | Paste AI-video / research API keys into `.env` (free tiers) | 0.3 | $0 | ~5 min each | Rendered video and scraped research; scripts ship regardless |
| 8 | Spend 10 min logged into Meta Ad Library + TikTok Creative Center, search "cat water fountain," screenshot what you find | 0.2, de-risks the #1 bench candidate before more effort goes into it | $0 | ~10 min | Confirms or kills the one unverified leg of bench rank 1's demand evidence (today's agent research could not reach these sites directly: bot-blocking / client-rendered pages, see 2026-08-10 ledger note) |

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
| - | Repo + team scaffolded; challenge not yet started | setup | - |

## Session notes
(Newest on top. Each entry: what was done, what was decided, money moved, what's next, and anything
unverified.)

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
  from a third-party ad-spy teaser page, not a live Meta/TikTok Ad Library pull — Founder Action Card #9
  above asks for a 10-minute logged-in check to close that gap before more work goes into this candidate.
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
