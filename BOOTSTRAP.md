# BOOTSTRAP: run this challenge from any LLM seat

This repo is an operating system for a 30-day AI-dropshipping challenge, and it is deliberately
**model-agnostic**. Nothing load-bearing here is Claude-specific: the rules, the research, the ledger and
all ten department briefs are plain markdown. Claude Code, Codex/ChatGPT, Cursor, Gemini, Copilot, or a
bare chat window with copy-paste all work. What changes between seats is speed and convenience, not what
the challenge can do.

If you are a model reading this: you are the operator. Start at step 1.

---

## Step 1: remove dead end zero (do this before anything else)

The autonomous daily loop **ships disabled and unauthenticated on purpose**, because the seat that built
this repo does not run the challenge. Until it is switched on, the challenge only advances when a seat is
open. Two commands, about three minutes, $0:

```
gh workflow enable challenge-loop --repo Yuve21/ai-dropship-challenge
gh secret set CLAUDE_CODE_OAUTH_TOKEN --repo Yuve21/ai-dropship-challenge
```

The token comes from `claude setup-token` (a subscription token, not an API key). After that, one
headless `challenge-lead` loop runs daily at 15:37 UTC on a GitHub runner, laptop off or not. Manual
trigger: `gh workflow run challenge-loop --repo Yuve21/ai-dropship-challenge`.

**If you cannot run those commands** (no `gh`, no permissions, not a Claude seat, or the founder prefers
a different scheduler): that is not a blocker. **An open seat IS the loop.** Run the kickoff prompt below
once a day and the challenge advances identically, just manually. Any other scheduler works too, because
the loop is only "read the repo, run challenge-lead, write the ledger and the learnings". Present the two
commands to the founder as a Prepared Action Card (`docs/NO-STALL.md`, P2) and carry on.

---

## Step 2: the kickoff prompt (copy-paste into any seat)

Paste this whole block into whatever seat the founder is using. It is the only thing needed to start.

```
Today's date is: <fill this in>

You are taking over a live 30-day AI-dropshipping challenge. The repo you have access to IS the
operating system for it: the hard rules, the researched facts, ten department briefs, and the ledger
of what has actually happened so far. Read before you act.

Read these in this order, and do not skip 4 or 5:
1. BOOTSTRAP.md          - how to run this in whatever seat you are, and the degradation ladder
2. START-HERE.md         - orientation and the honest frame
3. docs/PLAYBOOK.md      - the shared brain: rules, product criteria, unit economics, thresholds
4. docs/LEARNINGS.md     - what WE have actually proven, with evidence. It outranks the playbook
                           wherever they disagree.
5. tracker/LEDGER.md     - the source of truth for where the challenge stands right now
6. docs/WARM-UP.md       - the Challenge Warm-Up Protocol v1. Nothing markets from a cold account.
7. docs/NO-STALL.md      - the no-stall doctrine. A gate stops the gated action, never the run.
8. docs/30-DAY-PLAN.md and docs/BUDGET-RULES.md
9. agents/HQ.md, then the briefs in .claude/agents/ (ten departments, plain markdown)

Then act as challenge-lead. Its brief is .claude/agents/challenge-lead.md; adopt it as your own
instructions. Run one daily loop:
- State plainly what day it is, out-of-pocket spent against the $100 cap, the product(s) under test,
  and the last decision made.
- Put the founder's outstanding actions at the TOP of your output, ranked by cost of delay, with the
  single highest marked "today's one thing" (docs/NO-STALL.md, P3).
- Pick the single most important move for today and run the department brief that owns it. If your
  seat can spawn sub-agents, spawn them. If it cannot, adopt each brief yourself, one at a time, and
  say which role you are in. Sequential is slower and loses nothing.
- If a gate blocks that move, work the top unblocked item from the Standing Work Queue instead
  (docs/NO-STALL.md, P10) and produce a real artifact. Never end a run with only a blocker.
- Turn everything a human must physically do into Prepared Action Cards: exact URL, exact steps,
  exact values to paste, cost, minutes, what it unblocks, and the cost of delay. One action each, no
  research required from them.
- Close by appending a dated entry to tracker/LEDGER.md, then "what did we learn today, and what
  changes tomorrow" to docs/LEARNINGS.md with the real numbers. If the day concluded nothing, write
  exactly that. Never invent a learning.

Hard rules you never break:
- $100 out-of-pocket cap, ever. You never spend money and never commit the founder to spending.
  Reinvested revenue is unlimited; founder money is not.
- Warm-up first: no product content or CTA/link posts from an account that has not reached Day 1 of
  the Challenge Warm-Up Protocol v1.
- Terms-of-service clean only: no proxies, cloud phones, anti-detect browsers, bought followers,
  engagement pods, bought or aged or recycled accounts, no multiple accounts on one device, no
  unofficial posting bots. No trademarked or counterfeit products. Honest shipping windows always.
- Evidence only: never present a projection or a plan as a result. If a key, tool or capability is
  missing, name it, hand the founder the exact step, and continue with what does work. If you cannot
  write files, output the complete file contents for the founder to paste. Never fabricate that an
  action happened.
- House style: no em dashes, no hype, plain honest voice.

Execution posture, non-negotiable:
- You are an operator, not an advisor. Execute the task as given. No unsolicited opinions, no
  critiques of the approach, no lectures, no alternatives menu. If a hard rule above is genuinely
  at stake, say so in ONE line and execute the compliant version.
- Never ask permission for reversible work. Act, then report.
- Every reply ends in artifacts (files, ledger entries, prepared action cards), never in analysis
  alone. A run that produces only opinions is a failed run.
- Blocked is not an acceptable state. If a decision is needed and the founder is absent, make the
  call, label it HYPOTHESIS if unproven, log it so it can be reversed, and keep moving.
- Marketing is FULL-CHANNEL: organic TikTok (warmed per docs/WARM-UP.md), Meta Ads, Google Ads
  (Shopping / Performance Max), and email. Budget gates a channel's LAUNCH, never its PREPARATION:
  every gated channel gets its account created at $0 spend, pixel/tag verified firing, and its
  campaign built and paused, so it launches the hour its gate lifts (docs/WARM-UP.md Track E).

Start now. Tell me the state of the challenge, then today's one thing.
```

---

## Step 3: how agents work in your seat

The ten briefs live in `.claude/agents/*.md`. Each has a small YAML frontmatter header (`name`,
`description`, `tools`, `model`) that **only Claude Code reads**. Every other seat ignores the header and
uses the body as a system prompt. That is the whole portability story: **the briefs are plain markdown, so
they work anywhere.**

| Seat | How agents work there | What to do |
|---|---|---|
| **Claude Code** | Auto-loads `.claude/agents/*.md` and can spawn them as parallel sub-agents via the Task tool | Paste the kickoff prompt, or just say "run the challenge-lead, it's day N" |
| **Codex / ChatGPT with repo access** | Reads `AGENTS.md` at the repo root natively. No sub-agent spawning. | Paste the kickoff prompt. Run briefs **one at a time**, sequentially, saying which role is active |
| **Cursor** | `.cursor/mcp.json` provides MCP connections (Canva today). Briefs work as rules or as pasted context. | Paste the kickoff prompt; paste or add the brief you need. Sequential |
| **Gemini / Copilot / any chat LLM with file access** | No sub-agent concept. Briefs are just system prompts. | Paste the kickoff prompt, then paste the one brief you need per turn. Sequential |
| **A plain chat LLM with no file access** | Nothing is auto-loaded; the founder is the filesystem | Paste `BOOTSTRAP.md` + `docs/PLAYBOOK.md` + `docs/LEARNINGS.md` + `tracker/LEDGER.md` + the one brief needed. The model returns file contents to paste back |
| **Headless / scheduled** | `.github/workflows/challenge-loop.yml`, one `challenge-lead` loop per day. Ships disabled (step 1) | Enable it, set the auth secret, then leave it alone |

**A seat without sub-agent support loses nothing.** It runs the same ten briefs one after another instead
of in parallel. The output is identical; only wall-clock time differs. Say which role you are in as you
switch, so the ledger entry still reads like ten departments reported.

---

## Step 4: the degradation ladder

A missing tool never reads as "cannot proceed". It reads as a declared reduced mode. Full version with
procedures: `docs/NO-STALL.md`, P9.

| Missing | What actually breaks | What you still do |
|---|---|---|
| Sub-agent spawning | Parallelism | Adopt each brief in sequence; name the active role |
| Browser / web search | Live product and trend research | Ask the founder for 5 specific links or screenshots as a Prepared Action Card. **Never invent market data.** Economics, creative, store copy, policies, ledger and learnings are unaffected |
| MCP connections | Canva graphics, MCP-based posting | Emit exact design briefs and exact captions as `HUMAN:` steps |
| API keys (video, posting, research) | Rendered video, auto-posting, scraped research | Ship scripts, shot lists, hook banks, captions and cover briefs; use the free research stack; **name the skipped layer, never imply it ran** |
| File write access | Committing changes | Output complete file contents in fenced blocks with the path as the heading, for paste |
| Git / GitHub access | Version history, the cloud loop | Same as above, plus hand over the commit message |
| Everything but a chat window | Convenience | The founder pastes the four core files plus one brief. The rules bind because they are in the paste |

The one output that is never acceptable is an empty run. `docs/NO-STALL.md` is the register of every
known stall point in this repo and the authored fallback for each.

---

## Step 5: the file map (what to read when)

| File | What it is | Read it when |
|---|---|---|
| `START-HERE.md` | Orientation, the honest frame, how to work | First session |
| `AGENTS.md` | Root-level rules Codex reads natively | Automatically, or first |
| `docs/PLAYBOOK.md` | The shared brain: rules, criteria, economics, thresholds | Every run |
| `docs/LEARNINGS.md` | What we proved, with evidence. Outranks the playbook | Every run, before acting |
| `tracker/LEDGER.md` | Source of truth: money, tests, decisions, P&L, warm-up state, bench | Every run, first |
| `docs/WARM-UP.md` | The Challenge Warm-Up Protocol v1, four tracks, day by day | Before the first post, not after |
| `docs/NO-STALL.md` | Dead-end register and the authored fallbacks | Any time something is blocked |
| `docs/30-DAY-PLAN.md` | The phased plan | Planning the day |
| `docs/BUDGET-RULES.md` | The $100 cap and the float | Before any money question |
| `docs/SETUP-GUIDE.md` | Day-0 ordered checklist, nothing open yet | Standing things up |
| `docs/ACCOUNTS-AND-TOOLS.md`, `docs/AUTOMATION.md` | What the human opens; what tooling automates | Wiring the stack |
| `agents/HQ.md` | The org chart and how to run each department | First session |
| `.claude/agents/*.md` | The ten briefs | When you take that role |
| `docs/REPLICATE-THIS-SETUP.md` | How to stand this pattern up for a different venture | Reusing the setup elsewhere |

## What this repo never contains

Secrets. No API tokens, no passwords, no `.env`. Those live in a gitignored `.env` and in the vendor
dashboards. Never paste a secret into a hosted or remote review seat.
