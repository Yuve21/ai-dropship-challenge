# Replicate this setup: standing up an agent operating system for any venture

This repo is one instance of a reusable pattern. The pattern is not "dropshipping" and it is not
"Claude". It is: **a small set of plain markdown files that give any LLM seat a shared brain, an
accumulating memory, named departments, a daily loop, a single source of truth, an autonomy layer, and a
portable way in.** It works for a dropshipping challenge, a SaaS launch, a research programme, a job
hunt, a renovation. The domain lives in the content; the machinery below is the same every time.

This document describes the pattern abstractly and uses this repo as the worked example, so you can copy
the shape without copying the subject.

**Scope:** this makes a team of agents consistent, honest and cumulative. It does not make them correct.
Every run starts from validated lessons instead of a blank page (see `docs/LEARNINGS.md`).

---

## The seven parts

### 1. One shared brain: hard rules and researched facts
**The pattern.** A single file every agent reads first. It holds what is true about the domain (research,
with sources), the non-negotiable constraints, the numeric thresholds, and the known failure modes. It is
outside knowledge, clearly labelled as such, and it is explicitly outranked by part 2.

**Here:** `docs/PLAYBOOK.md`. Base rates, product criteria, unit economics, kill and scale thresholds, the
compliance floor, and why the genre's public success stories are marketing rather than data. The rules that
can never bend get their own headed section, stated once, cross-referenced everywhere else
("Non-negotiable (account survival)"), with the money mechanics split out into `docs/BUDGET-RULES.md`.

**Rules that make it work:** cite sources; mark vendor claims as vendor claims; state which numbers are
starting rules to be recalibrated; keep it short enough that reading it every run is realistic. Write in
command voice: target, threshold, procedure. Prose that only restates how hard the domain is costs an agent
reading time and changes no decision.

### 2. An accumulating learnings file with a real entry contract
**The pattern.** The file that separates a team that gets smarter from one that just gets busier. It
records what you now believe, the evidence, the confidence and what changes because of it. It needs a
contract, or it degrades into a diary of vibes within a week.

**The contract, verbatim-copyable:**
- **Evidence or it is a hypothesis.** No numbers means it is filed as `HYPOTHESIS`, with the test that
  would settle it.
- **Numbers cite their source** (which dated ledger entry, which dashboard) and are marked **estimated**
  versus **confirmed**, with the sample size said out loud.
- **Every entry is falsifiable.** It states what observation would kill it. If nothing could disprove it,
  it does not belong.
- **Confidence is declared** on a fixed ladder: Low (n=1 or a single day), Medium (3+ instances or a full
  week, one channel), High (repeated, quantified, and it survived a deliberate re-test).
- **Supersede, never accumulate.** Two live entries may never contradict each other. Superseding means
  prepending `SUPERSEDED <date>: <why>`, moving the original to an archive section, and writing the
  replacement with a pointer back. Never delete; the history is how you avoid re-learning the same thing.
- **Fast-moving entries expire** with an `expires:` date, and expiry archives rather than deletes:
  extract the durable pattern before filing the specific away.
- **A period with no learning says so.** "No new learning today, N actions taken, no metric moved enough
  to conclude anything" is a correct entry. Inventing one to fill the slot is the single most likely way
  the file goes bad.
- **A test that could not fail is not evidence.**

**Here:** `docs/LEARNINGS.md`, plus a write-back table naming which department owes an entry at which
moment.

### 3. Department briefs as plain markdown
**The pattern.** One file per role, each a self-contained system prompt. Every brief opens by reading
parts 1 and 2, and closes with an explicit write-back duty: which section of the learnings file it owes
entries to, and at what moment. Keep them plain markdown so they are portable; any seat-specific header
(Claude Code's YAML frontmatter, for instance) must be safely ignorable by every other seat.

**Here:** ten briefs in `.claude/agents/`, grouped by department in `agents/HQ.md`: executive, research,
finance, store, content, growth, risk, ops. Rough sizing that has worked: 40 to 70 lines each. Long
enough to encode judgement, short enough that a seat with no sub-agent support can hold several in
context at once.

**The two failure modes to design against:** a brief that only reports (never concludes), and a brief
that claims a capability the seat does not have.

### 4. One orchestrator with a daily loop that closes on learning
**The pattern.** A single agent that sequences the others rather than doing their work. Its loop is
fixed: read the source of truth, state where things stand, pick **one** decisive move, delegate it,
apply the gates, write the ledger entry, and close with "what did we learn, and what changes next time".
The closing step is the part everyone skips and the part that makes the whole thing compound.

**Here:** `.claude/agents/challenge-lead.md`, plus a weekly maintenance sweep of the learnings file
(expiry, contradictions, archiving) that keeps live knowledge at the top.

**Design note:** the orchestrator owns the gates. Gates are what stop an eager agent from doing the
irreversible thing early. Give each gate a name, so a blocked run can say which one blocked it.

### 5. A ledger as the single source of truth
**The pattern.** One append-only-ish file with standing tallies at the top and dated entries below.
Money, decisions, tests, and the state of anything time-based. A fresh seat reads it first and knows
exactly where things stand without asking. The rule that keeps it honest: log what actually happened,
never a projection, and mark estimated versus confirmed.

**Here:** `tracker/LEDGER.md`, with standing tallies (out-of-pocket against the cap, revenue, P&L), a
warm-up status block, a ranked product bench, money line items, product tests, a decision log, and dated
session notes newest-first.

**Keep the ledger and the learnings file separate.** The ledger is what happened; the learnings file is
what it means. Merging them produces a document that is too long to read and too vague to act on.

### 6. An autonomy layer, with the human-only boundary named
**The pattern.** A scheduled headless run of the orchestrator, so the loop advances without anyone
opening a seat. Alongside it, an explicit list of what the loop will never do, and a plain statement of
what genuinely requires a human. Naming the boundary is what separates a credible system from a
"fully autonomous" claim that falls apart on contact.

**Here:** `.github/workflows/challenge-loop.yml`, one daily headless run on a GitHub runner, funded by a
subscription token in a repo secret rather than rented infrastructure. It never spends money, never
exceeds the cap, and never fakes an action for a missing key: it accumulates the founder's steps as a
checklist instead. The irreducible boundary (identity and KYC, funding a card, approving spend, one-time
OAuth grants) is stated in `docs/NO-STALL.md`.

**Ship it disabled if the seat that builds it is not the seat that runs it,** and make enabling it step 1
of the bootstrap. A dormant loop that everyone assumes is running is worse than no loop.

### 7. A portable bootstrap so any seat can pick it up
**The pattern.** One root file with a copy-paste kickoff prompt, a table of how agents work per seat, and
a degradation ladder for missing tools. Plus a root `AGENTS.md`, which several seats read natively, that
restates the hard rules in under a page.

**Here:** `BOOTSTRAP.md` and `AGENTS.md`.

**The degradation ladder is the underrated part.** For each missing capability (sub-agents, browser, MCP,
API keys, file writes, git, everything), say what actually breaks and what the seat still does. A missing
tool must never read as "cannot proceed"; it reads as a declared reduced mode.

### Bonus part: the no-stall register
Once the seven parts exist, sweep the whole thing for places where the loop can stall and author a
fallback for each. This is `docs/NO-STALL.md` here. The discipline: for every dependency, write what is
blocked, what the loop does instead **today**, the one concrete founder action that unblocks it, and the
cost of each day of delay. Rank outstanding human actions by cost of delay and put that list at the top
of every readout.

---

## The afternoon checklist

Roughly three to four hours for someone who knows the domain. Do it in this order; each step feeds the
next.

1. **Write the constraint file first** (30 min). The one or two rules that can never bend: the budget
   cap, the legal line, the deadline. Everything else negotiates around these.
2. **Write the shared brain** (60 min). Research the domain honestly, including the parts that make the
   goal look hard. Cite sources. Mark vendor claims. Put the numeric thresholds in a section you can
   point at later.
3. **Create the learnings file with the contract but no content** (20 min). Copy the eight contract rules
   from part 2. Leave every section empty and say in the file that it is deliberately empty. Do not seed
   it with internet wisdom; that belongs in the brain file, labelled as research.
4. **Create the ledger** (15 min). Standing tallies at the top, one dated entry recording that the thing
   has not started.
5. **Write the briefs** (60 min). Name the departments a real company would have for this venture. Each
   brief: read the brain and the learnings first, do this specific job, output in this specific shape,
   write back to that specific learnings section at that specific moment.
6. **Write the orchestrator** (30 min). The fixed daily loop and the named gates. Make the last step of
   the loop the learnings close, and say explicitly that a day with nothing learned is recorded as such.
7. **Write the bootstrap** (30 min). Kickoff prompt, seat table, degradation ladder. Test it by pasting
   it into a seat that is not the one you built in. If that seat asks a question the files should have
   answered, fix the files.
8. **Add the autonomy layer** (30 min). A scheduled run of the orchestrator, plus the never-does list.
   Ship it disabled if you are not the one running it.
9. **Sweep for dead ends** (30 min). Every dependency, every "blocked on", every "wait for". Author the
   fallback for each. Rank by cost of delay.
10. **Do one real run before you trust it.** Then fix whatever the run exposed. It will expose something.

---

## Failure modes to avoid

**Stale docs that contradict each other.** Two files disagree, agents pick whichever they read last, and
confidence in all of it drops. Prevention: one owner file per fact, cross-reference rather than restate,
a scheduled staleness sweep in the orchestrator's loop, and superseding as the only legal way to change a
recorded conclusion. When you do change something, update the index line and the pointing files in the
same pass, not later.

**Agents that record but never learn.** A perfectly maintained ledger and an empty learnings file means
you built a diary. Prevention: make the write-back a named duty in every brief, with the section and the
trigger moment; make the orchestrator's final loop step the learnings close; and check the ratio of
entries to elapsed days during the weekly sweep.

**Claiming a capability the code does not have.** The single most damaging one, because it silently turns
a plan into a fictional result. "The system posts automatically" when no OAuth grant exists. "The loop
runs daily" when the workflow is disabled. Prevention: state the dormant or missing state in the same
sentence as the capability, make "never fake an action for a missing key, declare it skipped" an explicit
rule, and verify by execution rather than by reading before claiming anything works.

**Manufactured findings to look productive.** An agent asked "what did we learn today" will produce
something, and if the day was quiet that something will be invented. A confidently wrong entry is worse
than an empty file, because every future run inherits it. Prevention: make "no learning today" an
explicitly correct and expected output, require a falsification condition on every entry, and require the
sample size in the text so n=1 cannot masquerade as a pattern.

**A loop that returns a blocker instead of work.** Prevention: the no-stall register, a standing work
queue ordered in advance, and a rule that every run names the artifact it produced.

**Over-engineering the machinery instead of running the venture.** Seven markdown files and a scheduled
job. If you find yourself building tooling for the tooling, stop and do one real run.

---

## Mapping table: pattern to this repo

| Pattern part | This repo |
|---|---|
| Target file, the number every run is measured against | `docs/MANDATE.md` ($1,000/day net by Day 30, with the backwards math) |
| Constraint file | `docs/BUDGET-RULES.md` (the $100 out-of-pocket cap) |
| Non-negotiables, stated once and cross-referenced | `docs/PLAYBOOK.md`, "Non-negotiable (account survival)" |
| Shared brain | `docs/PLAYBOOK.md` |
| Founder-controlled switch on a house protocol | `automation/` (`warmup skip` / `warmup enable`), documented in `docs/WARM-UP.md` |
| Learnings with entry contract | `docs/LEARNINGS.md` |
| Department briefs | `.claude/agents/*.md` (ten), rostered in `agents/HQ.md` |
| Orchestrator with daily loop | `.claude/agents/challenge-lead.md` |
| Source of truth | `tracker/LEDGER.md` |
| Autonomy layer | `.github/workflows/challenge-loop.yml` (ships disabled) |
| Portable bootstrap | `BOOTSTRAP.md` and `AGENTS.md` |
| No-stall register | `docs/NO-STALL.md` |
| Domain-specific protocol authored in-house | `docs/WARM-UP.md`, the Challenge Warm-Up Protocol v1 |
| Orientation | `START-HERE.md` |

One more habit worth copying: when the research honestly says "no authoritative answer exists", **author
your own protocol anyway**, label it a hypothesis, say which parts rest on documented facts and which are
your inference, name the measurement that would refute it, and let the first real run turn it into
knowledge. An open question that blocks execution is a dead end. A dated, falsifiable house protocol is an
asset. That is what `docs/WARM-UP.md` does, and it is the most reusable idea in this repo.
