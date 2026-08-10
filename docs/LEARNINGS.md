# Learnings: the knowledge base that changes what we do next

The ledger records **what happened**. This file records **what we now believe, why, and what changes
because of it**. Every agent reads this file before acting and writes to it when a test concludes.
That is the entire mechanism by which this challenge gets smarter instead of just busier.

## What this is NOT (read this before anything else)

**This is retrieval-based learning, not model training.** Nothing in this repo updates any model's
weights. There is no fine-tuning, no gradient, no "training our AI on our data." The compounding comes
from one boring, real thing: every agent reads validated lessons before it acts, and writes validated
lessons after it acts, so the next decision starts from evidence instead of from a blank page.

If any file, brief, prompt or summary in this repo starts implying we are training a model, that is
wrong and it should be corrected on the spot. Overclaiming here is the same failure as reporting a
projection as a result.

Two honest limits of retrieval-based learning:
- It only works if the file is actually read. A stale or unread file compounds nothing.
- It only works if the entries are true. A confidently wrong entry is worse than an empty file, because
  every future agent inherits the error. Hence the evidence rule below.

---

## The rules

1. **Evidence, or it is a hypothesis.** An entry with no numbers behind it is not a learning. Label it
   `HYPOTHESIS` and file it under *Open hypotheses*, with the test that would settle it. Promoting a
   hypothesis to a learning requires real numbers.
2. **Numbers come from the ledger or a dashboard.** Cite where: which `tracker/LEDGER.md` dated entry,
   or which dashboard, and mark **estimated** vs **dashboard-confirmed**. Never a number from memory,
   never a number from a guru video or a case study. Competitor and vendor claims are context, not
   evidence.
3. **Every entry is falsifiable.** State what observation would prove it wrong. "Our audience prefers
   X" with no disconfirming condition is a vibe. If nothing could disprove it, it does not belong here.
4. **Confidence is declared, on this ladder:**
   - **Low** = n=1, a single day, or directional only. One video, one order, one session.
   - **Medium** = repeated across 3+ instances or a full week, in one channel.
   - **High** = repeated, quantified, and it held after a deliberate re-test that could have broken it.
   Say the sample size out loud. n=1 is never Medium.
5. **Supersede, never accumulate contradictions.** See the next section. Do not silently edit a wrong
   entry; mark it superseded and write the replacement.
6. **Product-level learnings expire.** Winners rotate weekly. Any entry about a specific product or a
   specific trend carries an `expires:` date (default 30 days). After that it is history, not guidance.
7. **A day with no learning says so.** "2026-xx-xx: no new learning today, N posts made, no metric
   moved enough to conclude anything" is a correct and useful entry. Inventing a lesson to fill the
   slot poisons the file. This is the single most likely way this file goes bad.
8. **A test that could not fail is not evidence.** If the outcome was guaranteed by the setup, say so
   and do not log a learning from it.

## The entry format (copy this)

```
### [YYYY-MM-DD] Short claim in one line
- **Claim:** what we now believe, stated so it could be wrong.
- **Evidence:** the actual numbers, with source (ledger entry date / dashboard) and estimated vs
  confirmed. Include sample size.
- **Confidence:** Low / Medium / High. What would raise it.
- **Falsified by:** the observation that would kill this claim.
- **So we now:** the concrete behaviour change. If nothing changes, say why it is still worth recording.
- **Expires:** YYYY-MM-DD (product/trend entries) or "no expiry (structural)".
- **Written by:** agent name.
```

## Superseding, expiry and contradiction (the anti-staleness rule)

Knowledge bases fail in two ways: they go stale, and they start disagreeing with themselves. Both are
handled the same way, visibly.

- **To supersede an entry:** leave the original text in place, prepend
  `SUPERSEDED YYYY-MM-DD: <one line on why>` to it, move it to *Superseded and expired* at the bottom,
  and write the new entry in the live section with a pointer back (`supersedes: [date] short claim`).
  Never delete. The history is how we avoid re-learning the same thing twice.
- **Two live entries may never contradict each other.** If a new finding conflicts with a live entry,
  resolving it is part of writing it: either supersede the old one, or narrow both ("true on TikTok
  organic, not true in paid") so they no longer collide. Leaving both standing is a defect.
- **Expiry is not deletion.** An expired product learning moves to *Superseded and expired* with
  `EXPIRED YYYY-MM-DD` and stays readable. "This product won in August" remains a useful data point
  about *why* it won (price band, hook shape, audience) even after the product itself is dead. Extract
  the durable pattern into the right section before archiving the specific.
- **What expires fast vs slow:** specific products and trends expire in ~30 days. Hook formulas,
  pricing/AOV findings and channel tactics expire slowly (re-check quarterly). Operational lessons
  (supplier reliability, shipping reality) and anti-patterns rarely expire.
- **Weekly maintenance:** `challenge-lead` sweeps this file once a week, checks expiry dates, resolves
  any contradictions, and moves dead entries down to the archive. Live sections stay at the top so
  agents read current knowledge first.

---

# Live knowledge

**Status: empty. The challenge has not started (see `tracker/LEDGER.md`, out-of-pocket $0.00).**
Every section below is deliberately blank. Do not seed it with plausible-sounding dropshipping wisdom
from the internet; that belongs in `docs/PLAYBOOK.md` as research, clearly marked as such. This file
only holds things **we** observed with **our own** numbers.

## Winning products
What won, and **why** it won: price band, landed cost and margin, hook style that carried it, audience
it landed with, and which pre-validation signal actually predicted the win.

*(no entries yet)*

## Losing products
What lost and why, so it is not retried. Include the pre-validation signal that misled us, because that
is the transferable lesson. Note the expiry: a product that lost in a bad week is not banned forever,
but re-testing it needs a stated reason.

*(no entries yet)*

## Hooks and creative
Which hook formulas actually pulled, with the numbers (watch-through, saves, shares, comments, profile
taps, and any sales attributable). Hook family, not just individual videos. Also: which AI-video
formats read as AI and cost conversion.

*(no entries yet)*

## Channels and tactics
What beat what, with numbers. Posting cadence, posting time, caption style, cover/thumbnail effects,
TikTok Shop vs pinned-comment CTA, API posting vs anything else, warm-up outcomes, organic vs the first
paid test.

*(no entries yet)*

## Pricing and AOV
Price points tested, conversion at each, bundle and order-bump results, real net margin vs modelled net
margin, break-even ROAS as computed vs as experienced.

*(no entries yet)*

## Operational
Supplier reliability, real shipping times vs promised, defect and return rates, support ticket volume
and causes, dispute/chargeback reality, processor behaviour (payout timing, reserves if any).

*(no entries yet)*

## Anti-patterns
Things **proven** not to work here, with the evidence. This section is the most valuable one over time
because it stops repeated spending of attention. An anti-pattern needs the same evidence standard as
anything else; a bad feeling is a hypothesis.

*(no entries yet)*

---

# Open hypotheses (untested, NOT learnings)

Labelled guesses waiting on evidence, each with the test that would settle it. Anything moved out of
here into the live sections must arrive with numbers.

*(no entries yet)*

---

# Superseded and expired (archive, keep readable)

*(no entries yet)*

---

# Who writes what

Reading this file is mandatory for every agent in `.claude/agents/`, at the start of every run, before
acting. Writing is owed at these moments:

| Agent | Writes a learning when | Into |
|---|---|---|
| `product-scout` | a product test concludes (win or lose), and whether its pre-validation evidence predicted the outcome | Winning / Losing products |
| `offer-economist` | modelled economics meet reality: real margin, real break-even, price/bundle test results, and every kill/scale call with its number | Pricing and AOV, Anti-patterns |
| `creative-director` | a hook family has enough posts to judge | Hooks and creative |
| `content-engine` | a video format, tool or posting cadence shows a measurable difference (including AI tells and API posting effects) | Hooks and creative, Channels and tactics |
| `growth-operator` | the daily numbers support a conclusion about a channel, cadence, CTA route or warm-up outcome | Channels and tactics |
| `ops-support` | a supplier, shipping window, support pattern or dispute teaches something durable | Operational |
| `compliance-guard` | something gets flagged, rejected or blocked, or a rule turns out to differ from what we assumed | Anti-patterns |
| `store-architect`, `copywriter` | a page, layout or copy change moves CVR or ticket volume measurably | Pricing and AOV, Channels and tactics |
| `challenge-lead` | daily, as the last step of the loop, including plainly recording days that produced nothing | any section, plus the weekly maintenance sweep |

**No agent writes a learning it cannot evidence.** The correct output in that case is a `HYPOTHESIS`
entry, or nothing at all.
