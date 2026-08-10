# Agent HQ: the company org

The specialist briefs live in `.claude/agents/` (Claude Code auto-loads them; every other seat uses the
body of the `.md` as a system prompt, see **[`BOOTSTRAP.md`](../BOOTSTRAP.md)** for the per-seat guide and
the copy-paste kickoff prompt). Every agent opens by reading **`docs/PLAYBOOK.md` AND
`docs/LEARNINGS.md`**, so they share one brain and one accumulating memory. All durable state (money,
tests, decisions) goes in `tracker/LEDGER.md`, the source of truth a fresh seat reads first.

**Activation first:** the daily loop ships disabled and unauthenticated. Removing that is step 1 of
`BOOTSTRAP.md`, two `gh` commands. Until then, an open seat running the loop by hand is a complete
substitute. **To stand this same org up for a different venture:**
[`docs/REPLICATE-THIS-SETUP.md`](../docs/REPLICATE-THIS-SETUP.md).

## The org chart (10 agents, by department)

**Executive**
- **challenge-lead**: runs the 30-day challenge: reads the ledger, picks the day's decisive move,
  delegates by department, enforces the budget cap and the two kill clocks, writes the daily +
  day-30 readout. Every session (and every autonomous loop) starts here.

**Research**
- **product-scout**: fresh winning-product research every run (winners rotate weekly; never a saved
  list), validated with evidence before a cent is spent.

**Finance**
- **offer-economist**: the CFO: unit economics, break-even ROAS, the $100 cap, kill/scale math,
  the ledger P&L. The discipline lives here.

**Store**
- **store-architect**: the Shopify build spec (conversion-first, near-zero fixed cost).
- **copywriter**: product pages, the five policy pages, lifecycle email; honest words that sell.

**Content**
- **creative-director**: the #1 lever: UGC scripts, hook banks, shot lists, replicate-the-winner.
- **content-engine**: turns scripts into AI videos (Creatify/HeyGen + Runway/Kling + ElevenLabs)
  and auto-posts to TikTok via approved APIs; Canva MCP for covers/carousels/thumbnails. AIGC label
  applied; rate/spam limits respected.

**Growth**
- **growth-operator**: organic posting plan, daily numbers read, then the paid test + scaling once
  revenue funds it.

**Risk & compliance**
- **compliance-guard**: trademark/counterfeit hard-no, category bans, honest shipping (FTC MITOR),
  ad policy, payout-hold avoidance. Veto power.

**Ops**
- **ops-support**: supplier selection, fulfillment routing, honest ETA comms, CS templates,
  chargeback defense (<1%).

## The learning loop (how the org gets smarter, not just busier)

`tracker/LEDGER.md` records what happened. **`docs/LEARNINGS.md` records what we concluded, the
evidence, the confidence, and what changes next time.** The mechanism is simple and enforced in both
directions:
- **Read:** every brief in `.claude/agents/` opens by reading the playbook AND the learnings file,
  before acting. Where our own evidence contradicts the playbook's research, our evidence wins.
- **Write:** each department owes entries at defined moments (product tests concluding, a hook family
  judged, a format or cadence showing a difference, real margin meeting modelled margin, a supplier or
  dispute lesson, anything flagged by a platform). The write-back table lives in `docs/LEARNINGS.md`.
- **The daily close:** `challenge-lead` ends every loop with "what did we learn today, and what changes
  tomorrow," and records plainly when a day produced no new learning rather than inventing one.
- **The evidence rule:** an entry with no numbers is a `HYPOTHESIS`, labelled as one, not a learning.
  Numbers come from the ledger or a dashboard, marked estimated vs confirmed, with the sample size.
- **Anti-staleness:** contradictions are resolved by SUPERSEDING an entry (dated, with the reason), never
  by stacking. Product-level learnings carry an expiry (~30 days) because winners rotate weekly.
  `challenge-lead` sweeps weekly and archives what has expired, keeping live knowledge at the top.
- **What this is not:** retrieval-based learning, not model training. Nothing here updates model weights.
  The compounding is that every agent starts from validated lessons instead of a blank page. Correct any
  file or summary that implies we are training a model.

## Warm-up doctrine (no account starts cold), and the protocol we execute

**The schedule is decided: the Challenge Warm-Up Protocol v1** in `docs/WARM-UP.md`. Four tracks
(TikTok organic, ad account and pixel, sending domain, store and processor), Day -7 through Day 4, exact
counts. It is our own protocol, not vendor gospel: labelled `HYPOTHESIS`, with an element-by-element split
of what rests on documented platform facts (learning-phase event threshold, budget floors, the SPF
10-lookup limit, the processor's published reserve mechanics) versus what is our inference (every day
count, every engagement count, the pre-spend pixel target, the email ramp steps, the week-1 store
smoothness rule). `growth-operator` runs it and reports the day count by name; `content-engine` posts only
what the current protocol day allows; `challenge-lead` writes the CONFIRMED / ADJUSTED / REFUTED /
UNTESTED verdict to `docs/LEARNINGS.md` on Day 1 and Day 7, and v2 supersedes v1 when the numbers say so.
Nobody re-debates whether a schedule exists.

## No dead ends (`docs/NO-STALL.md`)

A gate stops the gated action, never the run. That file registers every stall point in this repo and
authors the fallback for each: the 5-candidate ranked bench (a kill promotes rank 1 and backfills rank 5
in the same run), the twelve-item Standing Work Queue, Prepared Action Cards for every founder step,
cost-of-delay ranking at the top of every readout, the Widening Ladder for an empty research sweep, the
CTA ladder under the link gate, the Paid Readiness Dossier built before revenue exists, five incident
runbooks, and the reduced-mode ladder for a seat missing a browser, MCP, keys or write access. Those
procedures are ours, authored 2026-08-10, each labelled `HYPOTHESIS` with the measurement that would
refute it. The irreducible boundary stays named and is never engineered around: identity and KYC, funding
a card, approving real ad spend, and one-time OAuth grants need the founder. Every run closes with work
done and a named artifact, the bench state, the blocked gates and what was prepared against them, the
learnings step, the ranked founder list, and the money line.

## The operator operating system (`docs/OPERATOR-PLAYBOOK.md`)

**Mandatory read for `offer-economist`, `creative-director`, `growth-operator`, `copywriter`,
`store-architect` and `ops-support`.** Where `docs/PLAYBOOK.md` covers how dropshipping works and what to
sell, that file codifies **how genuinely profitable operators run the business**, with the course-seller
layer stripped out and every number carrying its source and a `DOCUMENTED` or `HYPOTHESIS` label. What it
adds that we did not have:

- **Creative volume as a weekly rate, with a published winner probability** (~5-8% of ads become winners;
  5 net-new creatives a week is our floor), plus the fact that **fatigue compressed to 2-4 weeks and ads now
  peak in week one**.
- **Ad testing and scaling structures** (ABO to test, CBO to scale, fund to 3x-5x target CPA before
  judging), and the honest note that **no platform documents 20% as a scaling threshold**, so our +20% rule
  is a labelled `HYPOTHESIS` held for asymmetric-risk reasons.
- **Contribution margin per order and break-even aMER** as the gate that decides whether a product works,
  which displaces LTV-first thinking.
- **The AOV levers, reordered by what actually works on Basic with mobile-wallet traffic:** product-page
  quantity breaks first, free-shipping threshold second, post-purchase upsell only after measuring our own
  eligible order share, because the offer does not display for Apple Pay, Google Pay or BNPL.
- **The two email flows worth building first** (abandoned checkout plus welcome are **76% of all automation
  orders**), and why Shopify Email beats Klaviyo at our budget.
- **CVR work with the numbers and their real provenance**, cash-flow and dispute-threshold discipline, the
  dropship-to-brand ladder with its actual unit thresholds, and what operators hire first.
- **An 18-item omission-pattern checklist** for reading operator content, and a **staging table** splitting
  everything into what we adopt at day 1, at first revenue, and later, plus what we deliberately do not copy.

It **corrects nine things** in our existing files (its section 14). Those corrections are recorded as
15 entries in `docs/LEARNINGS.md` under *External evidence (borrowed, NOT ours)*, which is fenced off from
Live knowledge on purpose: they are other people's numbers, and the moment we measure our own on the same
question, ours supersedes.

## Why warm-up matters at all (the reasoning behind the protocol)

`docs/WARM-UP.md` is a mandatory read for the growth-facing agents. TikTok organic accounts,
ad accounts and their pixel, the sending domain and the payment processor all perform worse when brand
new, and all four warm up for **free** if the clock starts early enough, which is why warm-up sits in
**Phase 0a of the 30-day plan, ahead of product selection**. `growth-operator` owns the warm-up state
(reported in the ledger's Warm-up status block), `content-engine` will not post promotional content
through a gate that is unmet, `compliance-guard` treats the shortcuts sold as warm-up (proxy farms,
anti-detect browsers, bought accounts, multi-account on one device) as a hard no, and `challenge-lead`
names the blocking gate rather than waiving it. The honest trade-off is stated in the doc: warm-up costs
7-10 of the 30 days, and starting the accounts a week before Day 1 is what buys that week back.

## The autonomy layer (how the challenge runs itself)

- **The daily challenge loop, CLOUD.** `.github/workflows/challenge-loop.yml` runs one headless
  challenge-lead loop daily at 15:37 UTC (~11:37am ET) on a GitHub runner, laptop off or not.
  One-time founder unlock: set the `CLAUDE_CODE_OAUTH_TOKEN` repo secret (same token as any other
  repo's loop; from `claude setup-token`). Until then, the daily run fails loudly on purpose.
  Manual trigger: `gh workflow run challenge-loop --repo Yuve21/ai-dropship-challenge`.
- **What the loop does autonomously:** fresh product research, unit-economics checks, creative
  scripts + hooks, the content calendar, compliance sweeps, ledger P&L, and (once keys exist as repo
  secrets) AI-video generation + scheduled TikTok posting. **What it never does:** spend money,
  exceed the $100 cap, or fake an action for a missing key, founder-only steps accumulate as a
  numbered `HUMAN:` checklist in the ledger.
- **Always-on harnesses evaluated and rejected (2026-08-10):** OpenClaw and Hermes both require
  rented always-on infrastructure AND API-key billing (Anthropic blocks consumer-subscription OAuth
  for third-party harnesses). The GitHub Actions design runs on the subscription with zero infra.

## Portability: what a fresh seat inherits vs re-wires

**Any seat, not just Claude Code.** The briefs are plain markdown with a frontmatter header that only
Claude Code reads; every other seat ignores the header and uses the body as a system prompt. A seat with
no sub-agent support runs the ten briefs **one at a time, sequentially**, which is slower in wall-clock
time and loses nothing in output. `BOOTSTRAP.md` holds the kickoff prompt, the seat table and the
degradation ladder; `AGENTS.md` at the root is what Codex reads natively.

**Inherits from the clone:** the playbook, the 30-day plan, budget rules, the warm-up doctrine and
Protocol v1, the no-stall register, the accumulated learnings, every agent brief, the ledger, the setup
guide. **Re-wires per machine/seat:**
`.env` keys (never in git), MCP connections
(Canva is in `.cursor/mcp.json`; Claude Code adds it user-scoped), and repo secrets for the cloud
loop (set once on GitHub, machine-independent thereafter).

## The gates (a decision is not made until these hold)
- Out-of-pocket <= $100, ever (offer-economist verifies before any spend).
- No product ships without: >30% net margin, a compliance pass (no trademark, honest ETA), and a
  sample held.
- No product content or CTA/link posts until Track A of Protocol v1 reaches Day 1; no paid ramp on a pixel
  short of the Track B pre-spend target without seeding it first; no bulk email before SPF/DKIM/DMARC
  verify (`docs/WARM-UP.md`). Every gate stops the gated action only, never the run.
- No learning recorded without evidence; no invented learning on a quiet day (`docs/LEARNINGS.md`).
- Two kill clocks: paid dies in 48-72h on thresholds; organic products get weeks (judge hooks fast,
  the product slowly). Winners scale <=20% at a time, on earned revenue. A kill promotes bench rank 1 in
  the same run (`docs/NO-STALL.md`, P4).
- A loop never returns empty, and never fabricates. Every run names the artifact it produced, and the
  ledger records what actually happened (`docs/NO-STALL.md`).
