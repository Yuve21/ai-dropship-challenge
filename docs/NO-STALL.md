# No-Stall Doctrine: the loop never returns empty

**The rule, in one line:** a gate stops the gated action, never the run. Every single day this
challenge runs, it produces real forward progress on something, names what was blocked, and hands the
founder a ranked list of the one-action items that would unblock the rest.

A **dead end** is any point where the loop stalls, idles, or reports "blocked, waiting on the founder"
and therefore produces nothing that day. Naming a blocker is not progress. This file is the register of
every dead end we could find in this repo, plus the authored fallback for each one.

**Provenance, stated up front:** the register is an audit of this repo, so the stall points are facts
about the files. **The fallback procedures are ours.** They are engineering judgement, invented on
2026-08-10, marked `HYPOTHESIS` per the entry contract in `docs/LEARNINGS.md`, and each one names the
measurement that would confirm or refute it. Invented is fine here; undisclosed would not be. Where a
number below rests on something a platform or provider actually publishes, it says so.

**What this doctrine does not do:** it does not invent a way around a real boundary. Identity and KYC,
loading a card, approving real ad spend and one-time OAuth grants require the founder, legally and
practically. See "The irreducible boundary" at the bottom. No procedure in this file fakes an identity,
bypasses verification, spends unapproved money, simulates an account or evades platform enforcement.
The bans in `docs/WARM-UP.md` and `.claude/agents/compliance-guard.md` stand in full.

---

## The six principles the loop enforces

1. **Never idle.** If the primary path is blocked, work the next-highest-value unblocked thing. There is
   always work: deeper product research, the candidate bench, more hooks and scripts, store copy, policy
   pages, unit economics, the content calendar, compliance hardening, the learnings file, and the exact
   assets the blocked step will consume the hour it clears. The Standing Work Queue (P10) is the ordered
   fallback list, so "find something useful" is never left to improvisation.
2. **Queue a bench, not a single bet.** Five ranked, pre-validated candidates live in the ledger at all
   times, so a failed product costs zero days (P1, P4).
3. **Every human step arrives pre-decided.** Not "please connect TikTok" but the exact URL, the exact
   clicks, the exact values to paste, the cost, the minutes, what it unblocks, and the daily cost of
   delay. The founder does one action and does no research (P2).
4. **Escalate by cost of delay.** Outstanding founder actions are ranked by what each costs per day of
   waiting, and that ranked list sits at the **top** of every daily readout, not the bottom (P3).
5. **Degrade, never stop.** No browser, no MCP, no keys, no write access: declare the reduced mode and
   keep going (P9, mirrored in `BOOTSTRAP.md`).
6. **A run never returns empty, and never fabricates.** Every run closes with the same six things:
   work actually done (with the artifact), the bench state, the gates that blocked and what was prepared
   against them, the learnings step (including "nothing concluded today" when that is the truth), the
   cost-of-delay-ranked founder list, and the money line. A skipped layer is declared skipped. A post
   that failed is logged as failed. Nothing is ever recorded as done because it was planned.

---

## The dead-end register

`CoD` = cost of delay, our invented day-rate from P3. Every "what the loop does instead" is executable
today, with no founder action.

| # | Dependency that is missing | What it blocks | What the loop does INSTEAD, today | The one founder action that unblocks it | CoD |
|---|---|---|---|---|---|
| 0 | **The daily workflow is disabled and has no auth secret** (`.github/workflows/challenge-loop.yml`) | The autonomous loop cannot run at all | Any interactive seat **is** the loop: run `challenge-lead` by hand this session (`BOOTSTRAP.md` kickoff prompt) and write the ledger entry as normal. Autonomy is an accelerator, not a precondition. | `gh workflow enable challenge-loop --repo Yuve21/ai-dropship-challenge` then `gh secret set CLAUDE_CODE_OAUTH_TOKEN --repo Yuve21/ai-dropship-challenge` (token from `claude setup-token`). 2 commands, ~3 min, $0. | 1.0 |
| 1 | Shopify store not created | Store build, pixel install, policy pages, checkout | `store-architect` writes the **complete build spec** and `copywriter` writes every page's final copy into the repo, so the store becomes a paste-and-publish job. Continue product research and creative. | Sign up, take the $1/mo promo, pick Basic. ~10 min, ~$1. | 0.6 |
| 2 | Payments / KYC not finished | Taking any money at all | Everything except revenue proceeds. Produce the exact verification document checklist and the Track D Day -7 card (P2). Record that revenue is structurally impossible until this clears, so no revenue-based decision is pending on data we cannot have. | Turn on Shopify Payments, complete identity + bank verification to 100%. ~20 min, $0. Pending documents are themselves a payout-hold trigger (processor-documented). | 0.9 once a store exists |
| 3 | Domain not bought | Sending domain, domain verification, real contact email, `PULL_FROM_URL` posting | Draft the **verbatim DNS record values** (SPF string, DKIM host/value once the provider is chosen, DMARC `p=none` with `rua`) so publishing them is a 10-minute paste. Warm-up Track C then starts the same day the domain does. | Buy the domain and paste the three records the same day. ~15 min, ~$10-12. | 1.0 until bought |
| 4 | Supplier account / supplier wallet not funded | Placing real orders, fulfilment | Build the **sourcing dossier**: 3 supplier options per bench candidate with landed cost, ship-to-US window, review count, and the honest ETA string for the shipping policy. No order can be placed and none is faked. | Create the DSers/CJ account (free) and put a payment method on it. ~15 min, $0 now. | 0.2 until the first order exists, then critical |
| 5 | Posting backend OAuth not connected (upload-post / Blotato / Postiz) | Auto-posting | `content-engine` produces finished assets and queues them **unpublished**, with the exact caption, cover brief, AIGC label state and intended post time. Posting degrades to a `HUMAN:` step with copy-paste text, which is still a full day of progress. | Create the free upload-post account and OAuth-connect the TikTok account once. ~10 min, $0. | 0.7 |
| 6 | AI-video / research API keys missing | Finished videos, scraped research | Ship **scripts, shot lists, hook banks, captions and cover briefs** instead of rendered videos, and run product research on the free stack (TikTok Creative Center, Meta Ad Library, marketplace sorts) instead of Apify. Declare the skipped layer by name; never imply a video exists. | Create the account, paste the key into `.env`. ~5 min each, free tiers. | 0.3 |
| 7 | Warm-up not started | All product posting (the whole organic strategy) | **Starting it is the day's decisive move**, and it is a founder action, so the loop prepares everything it will consume: the 7-day protocol card (P2), the first 3 native-post concepts, the Day -1 product-in-frame concept, and the Day 1 to Day 7 calendar. | Create the TikTok account and complete the profile, then 20 min in the app (Protocol v1, Track A, Day -7). ~30 min, $0. | **1.0, compounding and unrecoverable** |
| 8 | Research sweep surfaces no qualifying candidate | Product selection | Run the **Widening Ladder (P5)** in order and report which rung produced candidates. A sweep that returns nothing is a signal the filter is mis-set, not a day off. | none | 0 |
| 9 | The live product fails, or organic gets no traction | The current bet | **Kill-and-Promote in the same run (P4)**: rank 1 comes off the bench immediately, rank 5 is backfilled the same day, and the loss is written to `docs/LEARNINGS.md` with the pre-validation signal that misled us. | none | 0 |
| 10 | Under the ~1,000-follower bio-link gate | A clickable link | **CTA Ladder (P6)**, top rung available. The gate changes the destination, not the ability to sell. | none, it clears with followers | 0 |
| 11 | No revenue yet, so paid cannot start | The paid phase | Build the **Paid Readiness Dossier (P7)** so the first earned dollar spends the same hour it lands, and keep warming the pixel for free at $0 spend. | none, it clears with revenue | 0 |
| 12 | Ad spend needs approval | Launching any campaign | Everything up to the launch button: campaign structure, creatives, budget, the break-even ROAS, the kill thresholds, all drafted and left **paused**. The loop never unpauses. | Review the drafted campaign and press go. ~5 min, real money. | 0.1 pre-revenue |
| 13 | Supplier failure, stockout, chargeback, platform flag, account restriction, processor reserve | Whatever the incident touches | **Incident Runbooks (P8)**, one per incident type, each with the same-day actions and the thing the loop does with the rest of the day. | varies, named in the runbook | varies |
| 14 | The seat has no browser, no MCP, no keys, or no file write access | Layers of tooling | **Reduced-Mode Ladder (P9)**: declare the mode, keep going, output file contents for paste if writes are unavailable. | varies | 0 |
| 15 | Day 30 arrives with no winner and no revenue | The headline outcome | The day-30 readout is still a deliverable, and so is the knowledge base: what was tested, what it cost, what we now believe with evidence, and what month two starts from. An honest zero is an outcome, not a failure to hide. | none | 0 |
| 16 | Everything above is prepared and nothing external has moved | The excuse to idle | **Standing Work Queue (P10)**: take the top unblocked item, produce the artifact, name it. If the queue is genuinely exhausted, deepen the learnings file and re-score the bench, and say plainly that the day was preparation only. | none | 0 |

---

## The authored procedures

Each of these is ours. Each is `HYPOTHESIS` until its measurement says otherwise.

### P1. The Bench Protocol
**Procedure.** Keep exactly **5 ranked candidates** in the ledger's Product bench block at all times.
1. Score every candidate against `docs/PLAYBOOK.md` section 3, and record the score components, not just
   the total: margin at 3x+ landed cost with >30% net, retail in the $30-60 band, demo-able or
   visible-problem trait, and demand evidence (competitor ad live 3+ months, 1,000+ comments/shares, or
   buy-intent comments).
2. **Re-score the whole bench weekly.** Winners rotate; a bench that is not re-scored is a stale list
   pretending to be research.
3. **A candidate expires off the bench after 30 days** unless re-scored with fresh evidence, matching the
   product-learning expiry rule in `docs/LEARNINGS.md`.
4. **Promote rank 1 in the same run a product is killed** (P4). Backfill rank 5 from the same run's
   research sweep so the bench is never short.
5. **Only one product is live at a time** inside a 30-day window. The bench is depth, not parallel bets;
   splitting a $100 budget and a single posting cadence across two products tests neither.

**Documented vs ours:** the scoring criteria and the weekly-rotation fact come from the playbook's
research. **The number 5, the weekly cadence, the 30-day bench expiry and the one-live-product rule are
ours.**
**Measurement:** how many days elapse between a kill and the next product's first post (target: **0**),
and whether promoted-from-bench products outperform first-sweep picks over the challenge.

### P2. The Prepared Action Card
Every `HUMAN:` step is emitted in this exact shape. A step that is not in this shape is not ready to
hand over.

```
HUMAN ACTION #n: <one-line outcome, in the founder's words>
  Where:      <exact URL or app screen>
  Steps:      <numbered clicks, no ambiguity>
  Paste this: <the literal values, strings, or record contents>
  Cost:       $<amount> (or $0)
  Time:       ~<minutes>
  Unblocks:   <what starts working the moment this is done>
  Cost of delay: <day-rate from P3> per day of waiting, because <reason>
  You do not need to research anything for this.
```

**Ours entirely.** **Measurement:** the share of founder actions completed on the day they were first
presented. If cards are being skipped, the cards are wrong before the founder is.

### P3. Cost-of-Delay ranking
**Procedure.** Every outstanding founder action carries a day-rate in "challenge-days lost per day of
waiting". Rank descending, put the ranked list at the **top** of the daily readout, and mark the single
highest item **"today's one thing"**. Re-rank every run.

| Day-rate | Meaning | Examples |
|---|---|---|
| **1.0, compounding** | Time-based and unrecoverable. A day lost is gone; it cannot be bought back later. | Warm-up not started; domain not bought (Track C is time-based too) |
| **0.6 to 0.9** | Blocks a whole downstream phase but the wait is recoverable once done | Store not created; payments verification |
| **0.2 to 0.5** | Degrades a layer; the loop has a working fallback | Posting OAuth; API keys; supplier account |
| **0 to 0.1** | Not yet on the critical path | Ad-spend approval before revenue exists; the link gate |

**Ours entirely, and deliberately coarse.** The 1.0 tier is the one claim with a real mechanism behind
it: warm-up and domain age are calendar-driven, so a day of delay moves the whole calendar by a day.
**Measurement:** at day 30, compare the actual start date of product posting against the date warm-up
began. If the gap is not roughly the protocol length, the day-rates are mis-set and get adjusted in v2.

### P4. Kill-and-Promote, in the same run
**Procedure.** When a kill threshold is hit (`docs/PLAYBOOK.md` section 7: paid dies at 48-72h on
thresholds; organic gets weeks, judged on hooks fast and product slow), do all six of these before the
run ends. Not tomorrow.
1. Write the kill to the ledger with **the number that triggered it**.
2. Write the loss to `docs/LEARNINGS.md` under *Losing products*, including **the pre-validation signal
   that misled us**, which is the transferable part.
3. Promote bench rank 1 to live.
4. Hand `creative-director` the new product for 3 to 5 hooks in the same run.
5. Backfill bench rank 5 from the day's sweep.
6. Reuse what transfers (hook families, page structure, price band) and say what does not.

**Ours:** the same-run requirement and the six-step order. **Documented:** the kill thresholds
themselves.
**Measurement:** days between kill and the replacement product's first asset. Target 0. Anything above
1 means this procedure is not actually being followed.

### P5. The Widening Ladder (no qualifying candidate)
**Procedure.** Climb in order, one rung per run, and report the rung by number.
1. **Widen the price band** from $30-60 to **$25-80**, keeping the margin floor.
2. **Add two research surfaces** not used in the last sweep (TikTok Creative Center Top Ads, Meta Ad
   Library by keyword, AliExpress orders sort, Amazon Movers & Shakers, TikTok Shop bestsellers,
   #TikTokMadeMeBuyIt).
3. **Accept 2 of 3 demand signals** instead of all three (ad longevity / comment volume / buy-intent
   comments), and log that the candidate entered at rung 3 so the weaker validation is visible later.
4. **Shift niche** to the next category on the playbook's hot list, and re-run rungs 1 to 3 there.
5. **Accept a lower-wow product carried by a stronger offer**: bundle or order-bump engineered to hold
   the margin, with the offer specified before the product is committed to.

**Never relaxed at any rung:** the >30% net margin floor, the trademark and counterfeit hard no, banned
categories, honest shipping windows, and holding a sample before advertising. If rung 5 produces
nothing, the day's output is the documented sweep plus the ladder rung reached, which is a real finding
about the filter and gets logged as one.

**Ours:** the rungs, their order, the $25-80 widening and the 2-of-3 relaxation. **Documented:** the
criteria being relaxed, and the four floors that never are.
**Measurement:** which rung the eventual winner entered at. If winners consistently come from rung 3 or
below, the original filter was too tight and v2 loosens rung 1 permanently.

### P6. The CTA Ladder (under the link gate)
**Procedure.** Use the highest rung available, and record which rung was live for every post.
1. **Pinned comment** with the store name typed as text plus a short path, refreshed on every post.
2. **TikTok Shop listing** as the destination if the account is eligible for it.
3. **A brand handle worth searching:** the display name and handle match the store name exactly, so
   "search our name" actually resolves. Say it in the caption, not just the bio.
4. **Reply to buy-intent comments individually** with the destination. This is also the highest-quality
   demand signal we get for free, so log the count.
5. **The Business-account decision:** third-party 2026 sources contradict each other on whether a
   Business account unlocks the bio link with no follower minimum, at the cost of commercially licensed
   audio only. **Verify in-app before switching.** Our decision rule: switch only if the account is
   already getting reach without trending audio, otherwise the audio cost is worse than the link gate.
   Log what was actually true in the app; that resolves a documented contradiction in `docs/WARM-UP.md`.

**Ours:** the rung order and the Business-account decision rule. **Documented:** the ~1,000-follower
norm (long-observed, not published policy) and the audio restriction claim (third-party, contradictory).
**Measurement:** sessions attributed to TikTok per 1,000 views, per rung. That is the only way to know
whether the gate costs us anything real.

### P7. The Paid Readiness Dossier (built before revenue exists)
**Procedure.** Assembled during the organic phase so the first earned dollar can be spent within the
hour, with no thinking required at spend time. Contents:
- The campaign structure: 1 campaign, 1 ad group, 3 to 5 creatives, named.
- The exact daily budget at the platform minimum (TikTok self-serve: **$20/day ad group, $50/day
  campaign**, prepay, all platform-published).
- The break-even ROAS, computed from the real margin, not the modelled one.
- The kill thresholds pre-written: 48-72h, CTR under 1%, ROAS under 1.0, 0 sales at ~$20-30 spend.
- The pixel state: the 200 PageView / 20 AddToCart / 1 Purchase pre-spend target from Warm-Up Protocol
  v1 Track B, and the cheap-objective seed plan if it is short.
- The sentence that goes in the ledger about this test not exiting the learning phase (roughly 50 events
  in 7 days is platform-documented), so it reads creative and CTR/CPC direction and is never reported as
  a CPA.

**Our spend trigger:** launch the first paid test only when **collected revenue is at least $150**, the
fulfilment float is intact, and the pixel meets the Track B target. Below that, the money is worth more
as float than as a test that cannot conclude.
**Ours:** the $150 trigger and the dossier as a pre-revenue artifact. **Documented:** the floors, the
prepay behaviour, the learning-phase threshold.
**Measurement:** elapsed time from "revenue crossed the trigger" to "campaign drafted and awaiting the
founder's go". Target: same run.

### P8. Incident Runbooks
Each runbook is same-day, and each ends by naming what the rest of the day was spent on.

**A. A post is flagged, down-ranked or removed.** 1) Screenshot the notice and log the exact wording.
2) Check the AIGC label state on that asset. 3) Pull every queued asset that shares the flagged element
(claim, sound, footage, caption pattern). 4) Rewrite the pattern, not just the one post.
5) `compliance-guard` writes it to *Anti-patterns* with the exact rule cited. 6) Rest of the day: rebuild
the affected part of the calendar. **Never** appeal by reposting the same asset.

**B. The account is restricted or banned.** 1) Log the date, the stated reason and the appeal deadline.
2) Appeal once, through the in-app route only. 3) **Do not open a replacement account on the same
device to route around enforcement**, and do not touch proxies, cloud phones or bought accounts. That is
the ban vector and it ends the challenge. 4) If a second real device and a second real person exist, a
new account restarts Warm-Up Protocol v1 from Day -7, with the calendar cost stated in days.
5) Meanwhile the store, the offer, the bench and the creative bank are all unaffected and are the day's
work.

**C. Supplier failure or stockout.** 1) Notify every affected customer the same day with a real date,
per FTC prompt-delivery expectations (ship or notify within the promised window or 30 days, else refund).
2) Switch to supplier option 2 from the sourcing dossier and re-check landed cost. 3) If the margin
breaks past the 30% floor, the product is killed under P4, not quietly discounted. 4) Update the
shipping-policy ETA string to whatever is now true. 5) Log it to *Operational*.

**D. A chargeback.** 1) Respond the same day with tracking, the delivery-window disclosure and the
policy pages. 2) Compute the running chargeback ratio and compare against the 1% ceiling. 3) At 0.5%,
tighten proactively: clearer ETA at checkout, an earlier shipping-notification email, faster refunds.
4) Log the cause, not just the count, because the cause is the transferable lesson.

**E. A processor reserve or payout-schedule change lands.** 1) Log the exact terms (percentage, hold
duration, payout schedule) as **dashboard-confirmed**, which is better evidence than every
merchant-reported figure in `docs/WARM-UP.md`. 2) Recompute what cash is actually available and do not
book reserved money as spendable. 3) Freeze any planned spend increase for 7 days. 4) Confirm
verification is 100% complete. 5) This is a documented possibility, not a failure, and the float exists
for it.

**Ours:** the step order, the 0.5% early-tightening trigger and the 7-day spend freeze. **Documented:**
the 1% chargeback ceiling as an industry threshold, FTC prompt-delivery, and the processor's own reserve
and payout-schedule mechanics.
**Measurement:** for each incident, days from occurrence to resolution, and whether the same incident
class recurs after the runbook ran. A recurrence means the runbook fixed the instance and not the
pattern.

### P9. The Reduced-Mode Ladder
Declare the mode at the top of the run, then continue. Mirrors `BOOTSTRAP.md`.
- **No sub-agent spawning:** adopt each brief sequentially, one role at a time, and say which role is
  active. Slower in wall-clock time, identical in output.
- **No browser or web search:** product research degrades to founder-supplied inputs. Ask for 5 specific
  links or screenshots as a Prepared Action Card. **Never substitute invented market data.** Economics,
  scripts, store copy, policies, ledger and learnings are all unaffected.
- **No MCP:** graphics and posting become `HUMAN:` steps with exact briefs and exact captions.
- **No API keys:** ship scripts and shot lists rather than rendered video, and name the skipped layer.
- **No file write access:** output complete file contents in fenced blocks with the path as the heading,
  for the founder to paste, and state the ledger entry verbatim.
- **No git:** same, plus hand over the commit message.
- **Chat window only, no repo access:** the founder pastes `BOOTSTRAP.md`, `docs/PLAYBOOK.md`,
  `docs/LEARNINGS.md`, `tracker/LEDGER.md` and the one brief needed; the model returns file contents to
  paste back. The rules still bind because they are in the paste.
- **Never** "cannot proceed". The correct output is: what was done, what was skipped and why, and the
  exact step that would restore the layer.

### P10. The Standing Work Queue
When the primary move is blocked, take the **top unblocked item** and produce a real artifact (a file, a
ledger block, a named list). Naming the artifact is what stops "prepared work" from being a vibe.
1. Warm-Up Protocol v1 execution or its Prepared Action Card, if warm-up has not started.
2. Bench re-score and backfill to 5 (P1).
3. Hook bank: 10 new hook variants for the live or rank-1 product.
4. Scripts: 3 to 5 new video scripts, shot lists, captions and cover briefs, queued unpublished.
5. Store copy: product page, the five policy pages, checkout microcopy, honest ETA strings.
6. Unit economics: refresh landed cost, retail, net margin and break-even ROAS on the live product and
   bench ranks 1 to 3.
7. Content calendar: extend to 14 days out, mapped to protocol days.
8. Compliance sweep: trademark re-check, category re-check, claim audit of every queued asset.
9. Sourcing dossier: 3 supplier options per bench candidate with landed cost and real ship windows.
10. Paid Readiness Dossier (P7) refresh.
11. Learnings maintenance: expiry sweep, contradiction resolution, promote any hypothesis that now has
    numbers, archive what expired.
12. Doc hygiene: fix anything in these files that has gone stale or now contradicts another file, and
    say what was fixed.

**Ours entirely, including the order** (roughly: time-critical first, then whatever the next unblocked
step will consume). **Measurement:** at day 30, count the runs that produced an artifact. The target is
every run. A run with no artifact is the defect this whole file exists to prevent.

---

## The irreducible boundary (stated plainly, not engineered away)

Four things genuinely require the founder, and no procedure in this repo pretends otherwise:
- **Identity and KYC.** Processors are legally required to verify a human and a bank account.
  Automating account creation trips fraud detection and gets the account banned.
- **Funding.** An agent can spend against a funded account; it cannot fund one. The supplier wallet, the
  ad account and the SaaS keys all need a real payment method.
- **Approving real ad spend.** Meta's own tooling lands everything paused on purpose. Money out has no
  undo, so a human presses go. Under this repo's rules the loop is additionally forbidden from spending
  at all, and the $100 out-of-pocket cap is absolute.
- **One-time OAuth grants.** Linking TikTok to the posting backend, or Canva to the seat, is a human
  grant. After it, the layer runs unattended.

"No dead ends" does not mean these disappear. It means three specific things: they never block progress
on everything else, they are always presented as a single prepared decision with its cost of delay, and
the loop routes around them the same day. Anyone claiming a fully autonomous dropshipping business
including KYC and spend approval is describing something that does not exist.

## How this file corrects itself

Every procedure here is `HYPOTHESIS`, authored 2026-08-10. `challenge-lead` seeds them into *Open
hypotheses* in `docs/LEARNINGS.md` and, once real data exists, writes a dated entry marking each one
CONFIRMED, ADJUSTED, REFUTED or UNTESTED with the number behind it. Anything adjusted is republished
here as **v2** with `SUPERSEDES v1 (date): reason`, and v1 is marked superseded rather than deleted, per
the superseding rule. Two live versions of a procedure may never exist at once. If at day 30 a procedure
was never triggered, it stays UNTESTED and says so, because a procedure that never ran has proved
nothing.
