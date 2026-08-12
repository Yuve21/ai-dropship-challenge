# START HERE: the AI Dropshipping Challenge

You are a fresh seat picking up a live 30-day AI-dropshipping challenge. Read the files below in order,
then act.

**Not a Claude seat?** Everything here is model-agnostic. [`BOOTSTRAP.md`](BOOTSTRAP.md) has the copy-paste
kickoff prompt, the per-seat guide and the degradation ladder. [`AGENTS.md`](AGENTS.md) is the one-page rule
sheet Codex and similar seats read natively.

## The target

**$1,000/day net profit by Day 30** ([`docs/MANDATE.md`](docs/MANDATE.md)). Every run opens with the current
daily net, the gap, days remaining, and the single fastest lever to close it. The backwards math: at target
aMER (1.25x break-even) net is 25% of ad spend, so $1,000/day net needs $4,000/day of ad spend at any
margin. Daily checkpoints: [`docs/30-DAY-PLAN.md`](docs/30-DAY-PLAN.md).

Out-of-pocket is capped at **$100 total, ever**. Reinvested revenue is unlimited. `docs/BUDGET-RULES.md`.

## Step 1, before anything else: remove dead end zero

The autonomous daily loop **ships disabled and unauthenticated on purpose**. Two commands, three minutes, $0:
1. `gh workflow enable challenge-loop --repo Yuve21/ai-dropship-challenge`
2. `gh secret set CLAUDE_CODE_OAUTH_TOKEN --repo Yuve21/ai-dropship-challenge` (founder pastes the token
   from `claude setup-token`)

Then one `challenge-lead` loop runs daily at ~11:37am ET on a GitHub runner: research, creative, analysis,
ledger readout, never spending. **If you cannot run those commands, an open seat IS the loop.** Run it
manually today and hand the founder the two commands as a prepared action. Do not enable it silently.

## How to work

- **The orchestrator is `challenge-lead`.** In Claude Code, launch it with the Task tool ("run the
  challenge-lead: it's day 1"). In any other seat, use the kickoff prompt in `BOOTSTRAP.md`.
- **The four account-survival rules** live in `docs/PLAYBOOK.md`, "Non-negotiable (account survival)".
  Banned techniques in detail: `docs/WARM-UP.md`, "Hard no".
- **$100 is a TEST budget.** It cannot properly run paid ads, so the strategy is organic-first to validate
  a product, then reinvest earned revenue into paid scaling. Non-negotiable on this budget.
- **Creative (short video) is the #1 lever**, above targeting and product. Floor 3 net-new creatives/day,
  target 5. Arithmetic in `docs/MANDATE.md`.
- **The content loop is automated; a human funds and approves.** The team generates the AI videos and
  auto-posts to TikTok through approved APIs/MCPs (`docs/AUTOMATION.md`). Still human: one-time account
  creation, OAuth connects, KYC, funding the APIs and supplier, and launching ad spend. Mark those
  `HUMAN:`, copy-paste-ready. Caveats that stay visible: AI video converts below real UGC, realistic AI
  needs the AIGC label, API posts may take a reach haircut.
- **No account starts cold, unless the founder decides otherwise.** `docs/WARM-UP.md` holds the Challenge
  Warm-Up Protocol v1 (four tracks, Day -7 to Day 4, exact counts, labelled `HYPOTHESIS`, with a Day 1 and
  Day 7 verdict written to `docs/LEARNINGS.md`). The gate is founder-controlled: `node cli.js warmup skip`
  turns it off and logs the decision to the ledger; `warmup enable` restores it. Agents never flip it.
- **There are no dead ends.** A gate stops the gated action, never the run. `docs/NO-STALL.md` registers
  every stall point with an authored fallback: a 5-candidate ranked bench, a twelve-item standing work
  queue, prepared action cards, cost-of-delay ranking, incident runbooks, a reduced-mode ladder. Every run
  produces a named artifact. The irreducible boundary (identity and KYC, funding a card, approving spend,
  one-time OAuth grants) stays named rather than pretended away.
- **Everything is logged in `tracker/LEDGER.md`:** money in and out, every product tested, every kill/scale
  decision, running P&L, the Warm-up status block, and the Product bench (5 ranked candidates, so a killed
  product costs zero days). Update it every session.
- **Every day ends with "what did we learn today, and what changes tomorrow,"** appended to
  `docs/LEARNINGS.md` with the numbers. Contradictions get resolved by superseding a dated entry, never by
  stacking; product-level learnings expire because winners rotate weekly.
- **Measure, do not guess.** Playbook thresholds are starting rules; recalibrate on real account numbers.
  Say plainly what is unverified.
- **Discipline is the product.** Kill losers in 48-72h. Protect margin. Reinvest only earned revenue.

## Read these, in order

1. `docs/MANDATE.md`: the target, the backwards math, the creative rate, the scaling ladder.
2. `docs/PLAYBOOK.md`: the shared brain. The four non-negotiables, winning-product criteria, unit
   economics, metrics, kill/scale thresholds, failure modes.
3. `docs/LEARNINGS.md`: what WE proved, with the evidence. Mandatory every run, and it outranks the
   playbook's research wherever they disagree. Live sections are deliberately empty because the challenge
   has not started; do not seed them with internet wisdom.
4. `docs/WARM-UP.md`: Protocol v1 and the founder switch. Read before the first post, not after.
5. `docs/NO-STALL.md`: the dead-end register. Read the first time anything is blocked, which will be today.
6. `docs/30-DAY-PLAN.md`: the sequence and the daily net-profit checkpoints.
7. `docs/BUDGET-RULES.md`: the $100 cap, reinvestment, the cash-flow float.

Then skim `docs/ACCOUNTS-AND-TOOLS.md` (what the human signs up for), `docs/AUTOMATION.md` (what is
automated and what stays human), `agents/HQ.md` (the roster) and `docs/OPERATOR-PLAYBOOK.md` (how
profitable operators run the business). `docs/REPLICATE-THIS-SETUP.md` is a different job: the reusable
template for standing this operating system up for another venture.

**Day zero:** the founder has nothing open yet. `docs/SETUP-GUIDE.md` is the ordered checklist. Point them
there first, and start the warm-up clock (TikTok account, domain and DNS, payments verification, pixel
install) the same day, before there is a product to sell.

## What NOT to do

- Never hide long shipping times (FTC and TikTok require honest delivery windows).
- Never make health, medical or income claims in ads.
- Never present a projection as a result. Log what actually happened.
- Never write a learning you cannot evidence, and never invent one to make a quiet day look productive.
- Never end a run with nothing but a blocker, and never fake a step that did not happen. If a layer was
  skipped for a missing key, say which layer and which key (`docs/NO-STALL.md`).
