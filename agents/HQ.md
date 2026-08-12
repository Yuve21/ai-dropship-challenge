# Agent HQ: the company org

The specialist briefs live in `.claude/agents/` (Claude Code auto-loads them; every other seat uses the body
of the `.md` as a system prompt, see **[`BOOTSTRAP.md`](../BOOTSTRAP.md)**). Every agent opens by reading
**`docs/MANDATE.md`, `docs/PLAYBOOK.md` and `docs/LEARNINGS.md`**, so they share one target, one brain and
one accumulating memory. All durable state (money, tests, decisions) goes in `tracker/LEDGER.md`.

**The target: $1,000/day net profit by Day 30** (`docs/MANDATE.md`). `challenge-lead` opens every run with
the gap and the single fastest lever to close it. Daily checkpoints: `docs/30-DAY-PLAN.md`.

**Activation first:** the daily loop ships disabled and unauthenticated. Removing that is step 1 of
`BOOTSTRAP.md`, two `gh` commands. Until then, an open seat running the loop by hand is a complete
substitute. To stand this org up for a different venture:
[`docs/REPLICATE-THIS-SETUP.md`](../docs/REPLICATE-THIS-SETUP.md).

## The org chart (10 agents, by department)

**Executive**
- **challenge-lead**: runs the challenge. Opens with the gap to $1,000/day net, picks the day's decisive
  move, delegates by department, enforces the cap and the kill/scale gates, writes the daily and day-30
  readout. Every session and every autonomous loop starts here.

**Research**
- **product-scout**: fresh winning-product research every run (winners rotate weekly, never a saved list),
  validated with evidence before a cent is spent. Owns the 5-candidate bench and the single Dropship.io
  trial pull.

**Finance**
- **offer-economist**: the CFO. Contribution margin per order, break-even aMER and ROAS, the $100 cap,
  kill/scale math, the ledger P&L.

**Store**
- **store-architect**: the Shopify build spec (conversion-first, near-zero fixed cost).
- **copywriter**: product pages, the five policy pages, lifecycle email.

**Content**
- **creative-director**: the #1 lever. UGC scripts, hook banks, shot lists, replicate-the-winner. Owns and
  reports the creative rate: floor 3 net-new/day, target 5.
- **content-engine**: turns scripts into AI videos (Creatify/HeyGen + Runway/Kling + ElevenLabs) and
  auto-posts to TikTok via approved APIs; Canva MCP for covers and carousels. AIGC label applied, rate and
  spam limits respected.

**Growth**
- **growth-operator**: organic posting plan, the daily numbers read, then the paid test and the scaling
  ladder once revenue funds it. Owns Meta and Google (Track E).

**Risk and compliance**
- **compliance-guard**: trademark/counterfeit hard-no, category bans, honest shipping (FTC MITOR), ad
  policy, payout-hold avoidance. Veto power.

**Ops**
- **ops-support**: supplier selection, fulfillment routing, honest ETA comms, CS templates, chargeback
  defense (<1%).

## The learning loop

`tracker/LEDGER.md` records what happened. **`docs/LEARNINGS.md` records what we concluded, the evidence,
the confidence, and what changes next time.** Enforced in both directions:
- **Read:** every brief opens by reading the playbook AND the learnings file, before acting. Where our own
  evidence contradicts the playbook's research, our evidence wins.
- **Write:** each department owes entries at defined moments (a product test concluding, a hook family
  judged, a format or cadence showing a difference, real margin meeting modelled margin, a supplier or
  dispute lesson, anything flagged by a platform). The write-back table lives in `docs/LEARNINGS.md`.
- **Daily close:** `challenge-lead` ends every loop with "what did we learn today, and what changes
  tomorrow", and records plainly when a day produced no new learning.
- **Evidence rule:** an entry with no numbers is a labelled `HYPOTHESIS`. Numbers come from the ledger or a
  dashboard, marked estimated vs confirmed, with the sample size.
- **Anti-staleness:** contradictions resolved by superseding a dated entry, never by stacking.
  Product-level learnings expire (~30 days). `challenge-lead` sweeps weekly and archives what expired.

## Warm-up (`docs/WARM-UP.md`)

**The Challenge Warm-Up Protocol v1:** four tracks (TikTok organic, ad account and pixel, sending domain,
store and processor), Day -7 through Day 4, exact counts, labelled `HYPOTHESIS`, with an element-by-element
split of documented platform facts versus our inference. `growth-operator` runs it and reports the day count
by name; `content-engine` posts only what the current protocol day allows; `challenge-lead` writes the
CONFIRMED / ADJUSTED / REFUTED / UNTESTED verdict to `docs/LEARNINGS.md` on Day 1 and Day 7; v2 supersedes
v1 when the numbers say so. Nobody re-debates whether a schedule exists.

**The gate is founder-controlled.** `node cli.js warmup skip` turns it off and logs the decision to the
ledger, after which `challenge-lead` and `content-engine` go straight to product content and CTA/link posts
with no block. `warmup enable` restores it. Agents never flip the switch.

Why the tracks exist: a cold TikTok account looks like spam and gets suppressed; a cold pixel pays a
learning-phase premium; a cold sending domain blasting mail lands in spam permanently; a new store's first
good day IS the revenue spike that triggers a payout reserve. All four warm up **free** if the clock starts
early enough, which is why warm-up sits ahead of product selection.

## No dead ends (`docs/NO-STALL.md`)

A gate stops the gated action, never the run. That file registers every stall point and authors the fallback
for each: the 5-candidate ranked bench (a kill promotes rank 1 and backfills rank 5 in the same run), the
twelve-item Standing Work Queue, Prepared Action Cards for every founder step, cost-of-delay ranking at the
top of every readout, the Widening Ladder for an empty sweep, the CTA ladder under the link gate, the Paid
Readiness Dossier built before revenue exists, five incident runbooks, and the reduced-mode ladder. Those
procedures are ours, authored 2026-08-10, each labelled `HYPOTHESIS` with the measurement that would refute
it. The irreducible boundary is never engineered around: identity and KYC, funding a card, approving real ad
spend, and one-time OAuth grants need the founder.

## The operator operating system (`docs/OPERATOR-PLAYBOOK.md`)

**Mandatory for `offer-economist`, `creative-director`, `growth-operator`, `copywriter`, `store-architect`
and `ops-support`.** Where `docs/PLAYBOOK.md` covers how dropshipping works and what to sell, that file
codifies how genuinely profitable operators run the business, with the course-seller layer stripped out and
every number carrying its source and a `DOCUMENTED` or `HYPOTHESIS` label:

- **Creative volume as a rate, with a published winner probability** (~5-8% of ads become winners; our floor
  is 3 net-new/day, target 5, arithmetic in `docs/MANDATE.md`), plus **fatigue compressed to 2-4 weeks with
  ads peaking in week one**.
- **Ad testing and scaling structures** (ABO to test, CBO to scale, fund to 3x-5x target CPA before
  judging), and that **no platform documents 20% as a scaling threshold**, so our +20% rule is a labelled
  `HYPOTHESIS` held for asymmetric-risk reasons.
- **Contribution margin per order and break-even aMER** as the gate that decides whether a product works,
  displacing LTV-first thinking.
- **The AOV levers reordered for Basic with mobile-wallet traffic:** product-page quantity breaks first,
  free-shipping threshold second, post-purchase upsell only after measuring our own eligible order share,
  because the offer does not display for Apple Pay, Google Pay or BNPL.
- **The two email flows worth building first** (abandoned checkout plus welcome are **76% of all automation
  orders**), and why Shopify Email beats Klaviyo at our budget.
- **CVR work with real provenance**, cash-flow and dispute-threshold discipline, the dropship-to-brand
  ladder with its unit thresholds, and what operators hire first.
- **An 18-item omission-pattern checklist** for reading operator content, and a **staging table** splitting
  everything into day 1, at first revenue, and later, plus what we deliberately do not copy.

It corrects nine things in our existing files (its section 14), recorded as entries in `docs/LEARNINGS.md`
under *External evidence (borrowed, NOT ours)*, fenced off from Live knowledge on purpose: they are other
people's numbers, and the moment we measure our own on the same question, ours supersedes.

## The autonomy layer

- **The daily loop, CLOUD.** `.github/workflows/challenge-loop.yml` runs one headless challenge-lead loop
  daily at 15:37 UTC (~11:37am ET) on a GitHub runner. One-time founder unlock: set the
  `CLAUDE_CODE_OAUTH_TOKEN` repo secret (from `claude setup-token`). Until then the daily run fails loudly
  on purpose. Manual trigger: `gh workflow run challenge-loop --repo Yuve21/ai-dropship-challenge`.
- **What the loop does autonomously:** product research, unit-economics checks, creative scripts and hooks,
  the content calendar, compliance sweeps, ledger P&L, and (once keys exist as repo secrets) AI-video
  generation and scheduled TikTok posting. **What it never does:** spend money, exceed the $100 cap, or
  fake an action for a missing key. Founder-only steps accumulate as a numbered `HUMAN:` checklist.
- **Always-on harnesses evaluated and rejected (2026-08-10):** OpenClaw and Hermes both require rented
  always-on infrastructure AND API-key billing (Anthropic blocks consumer-subscription OAuth for
  third-party harnesses). The GitHub Actions design runs on the subscription with zero infra.

## Portability: what a fresh seat inherits vs re-wires

Any seat, not just Claude Code. A seat with no sub-agent support runs the ten briefs one at a time, losing
wall-clock time and nothing else. `BOOTSTRAP.md` holds the kickoff prompt, the seat table and the
degradation ladder; `AGENTS.md` is what Codex reads natively.

**Inherits from the clone:** the mandate, the playbook, the 30-day plan, budget rules, the warm-up protocol,
the no-stall register, the accumulated learnings, every brief, the ledger, the setup guide. **Re-wires per
machine or seat:** `.env` keys (never in git), MCP connections (Canva is in `.cursor/mcp.json`; Claude Code
adds it user-scoped), and repo secrets for the cloud loop (set once on GitHub).

## The gates (a decision is not made until these hold)

- The four account-survival rules: `docs/PLAYBOOK.md`, "Non-negotiable (account survival)".
- No product ships without >30% net margin, a compliance pass, and a sample held.
- While the warm-up gate is enabled: no product content or CTA/link posts until Track A reaches Day 1; no
  paid ramp on a pixel short of the Track B pre-spend target without seeding it first; no bulk email before
  SPF/DKIM/DMARC verify. Every gate stops the gated action only, never the run.
- No learning recorded without evidence; no invented learning on a quiet day.
- Two kill clocks: paid dies in 48-72h on thresholds; organic products get weeks (judge hooks fast, the
  product slowly). Winners scale <=20% per step, on earned revenue. A kill promotes bench rank 1 in the same
  run (`docs/NO-STALL.md` P4).
- A loop never returns empty and never fabricates. Every run names the artifact it produced.
