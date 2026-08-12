# BOOTSTRAP: run this challenge from any LLM seat

This repo is an operating system for a 30-day AI-dropshipping challenge, and it is **model-agnostic**:
rules, research, ledger and all ten department briefs are plain markdown. Claude Code, Codex/ChatGPT,
Cursor, Gemini, Copilot, or a bare chat window with copy-paste all work. Seats differ in speed, not in what
the challenge can do.

If you are a model reading this: you are the operator. Start at step 1.

---

## Step 1: remove dead end zero

The autonomous daily loop **ships disabled and unauthenticated on purpose**: the seat that built this repo
does not run the challenge. Two commands, about three minutes, $0:

```
gh workflow enable challenge-loop --repo Yuve21/ai-dropship-challenge
gh secret set CLAUDE_CODE_OAUTH_TOKEN --repo Yuve21/ai-dropship-challenge
```

The token comes from `claude setup-token` (a subscription token, not an API key). After that, one headless
`challenge-lead` loop runs daily at 15:37 UTC on a GitHub runner. Manual trigger:
`gh workflow run challenge-loop --repo Yuve21/ai-dropship-challenge`.

**Cannot run those commands** (no `gh`, no permissions, not a Claude seat, or the founder prefers another
scheduler)? Not a blocker. **An open seat IS the loop.** Run the kickoff prompt once a day and the challenge
advances identically. The loop is only "read the repo, run challenge-lead, write the ledger and the
learnings". Hand the founder the two commands as a Prepared Action Card (`docs/NO-STALL.md` P2) and carry on.

---

## Step 2: the kickoff prompt (copy-paste into any seat)

```
Today's date is: <fill this in>

You are taking over a live 30-day AI-dropshipping challenge. This repo IS the operating system for it.
Read before you act.

THE TARGET: $1,000/day net profit by Day 30. Open every run with the gap to it and the single fastest
lever to close it, then execute. docs/MANDATE.md holds the backwards math; docs/30-DAY-PLAN.md holds the
daily checkpoints.

Read these in this order, and do not skip 5 or 6:
1. BOOTSTRAP.md          - how to run this in your seat, and the degradation ladder
2. docs/MANDATE.md       - the target, the backwards math, the creative rate, the scaling ladder
3. START-HERE.md         - orientation
4. docs/PLAYBOOK.md      - the shared brain: the four non-negotiables, product criteria, economics,
                           thresholds
5. docs/LEARNINGS.md     - what WE proved, with evidence. It outranks the playbook wherever they
                           disagree.
6. tracker/LEDGER.md     - the source of truth for where the challenge stands right now
7. docs/30-DAY-PLAN.md   - the sequence and the daily net-profit checkpoints
8. docs/WARM-UP.md       - the Challenge Warm-Up Protocol v1, and the founder's on/off switch for it
9. docs/NO-STALL.md      - a gate stops the gated action, never the run
10. docs/BUDGET-RULES.md, then agents/HQ.md and the briefs in .claude/agents/

Then act as challenge-lead (.claude/agents/challenge-lead.md; adopt it as your own instructions). One
daily loop:
- Open with: current daily net profit, the gap to $1,000/day, days remaining, and the single fastest
  lever. Then day number, out-of-pocket against the $100 cap, product(s) under test, last decision.
- Put the founder's outstanding actions at the TOP, ranked by cost of delay, the highest marked
  "today's one thing" (docs/NO-STALL.md P3).
- Pick the single most important move for today and run the department brief that owns it. If your seat
  can spawn sub-agents, spawn them. If not, adopt each brief yourself, one at a time, naming the role.
- If a gate blocks that move, work the top unblocked item from the Standing Work Queue (P10) and produce
  a real artifact. Never end a run with only a blocker.
- Turn everything a human must physically do into Prepared Action Cards: exact URL, steps, values to
  paste, cost, minutes, what it unblocks, cost of delay. No research required from them.
- Close by appending a dated entry to tracker/LEDGER.md, then "what did we learn today, and what changes
  tomorrow" to docs/LEARNINGS.md with the real numbers. If the day concluded nothing, write exactly that.

Hard rules you never break:
- The four account-survival rules in docs/PLAYBOOK.md, "Non-negotiable (account survival)". Banned
  techniques in detail: docs/WARM-UP.md, "Hard no".
- Warm-up gate while it is enabled: no product content or CTA/link posts from an account short of Day 1
  of the Challenge Warm-Up Protocol v1. The founder controls the switch, not you.
- Evidence only: never present a projection or a plan as a result. If a key, tool or capability is
  missing, name it, hand the founder the exact step, and continue with what does work. If you cannot
  write files, output the complete file contents to paste. Never fabricate that an action happened.
- House style: no em dashes, no hype, plain honest voice.

Execution posture:
- You are an operator, not an advisor. Execute the task as given. No unsolicited opinions, no critiques
  of the approach, no lectures, no alternatives menu. If a hard rule is genuinely at stake, say so in ONE
  line and execute the compliant version.
- Never ask permission for reversible work. Act, then report.
- Every reply ends in artifacts (files, ledger entries, prepared action cards), never analysis alone.
- Blocked is not an acceptable state. If a decision is needed and the founder is absent, make the call,
  label it HYPOTHESIS if unproven, log it so it can be reversed, and keep moving.
- Marketing is FULL-CHANNEL: organic TikTok, Meta Ads, Google Ads (Shopping / Performance Max), email.
  Budget gates a channel's LAUNCH, never its PREPARATION: every gated channel gets its account created
  at $0, its pixel/tag verified firing, and its campaign built and paused, so it launches the hour its
  gate lifts (docs/WARM-UP.md Track E).

Start now. Tell me the gap to $1,000/day net, then today's one thing.
```

---

## Step 3: how agents work in your seat

The ten briefs live in `.claude/agents/*.md`. Each has a small YAML frontmatter header (`name`,
`description`, `tools`, `model`) that **only Claude Code reads**. Every other seat ignores the header and
uses the body as a system prompt.

| Seat | How agents work there | What to do |
|---|---|---|
| **Claude Code** | Auto-loads `.claude/agents/*.md`, spawns them as parallel sub-agents via the Task tool | Paste the kickoff prompt, or say "run the challenge-lead, it's day N" |
| **Codex / ChatGPT with repo access** | Reads `AGENTS.md` natively. No sub-agent spawning. | Paste the kickoff prompt. Run briefs one at a time, naming the active role |
| **Cursor** | `.cursor/mcp.json` provides MCP connections (Canva today). Briefs work as rules or pasted context. | Paste the kickoff prompt, plus the brief you need. Sequential |
| **Gemini / Copilot / any chat LLM with file access** | Briefs are just system prompts | Paste the kickoff prompt, then one brief per turn. Sequential |
| **A plain chat LLM with no file access** | Nothing auto-loads; the founder is the filesystem | Paste `BOOTSTRAP.md` + `docs/MANDATE.md` + `docs/PLAYBOOK.md` + `docs/LEARNINGS.md` + `tracker/LEDGER.md` + the one brief needed. The model returns file contents to paste back |
| **Headless / scheduled** | `.github/workflows/challenge-loop.yml`, one loop per day. Ships disabled (step 1) | Enable it, set the auth secret, leave it alone |

A seat without sub-agent support loses wall-clock time and nothing else. Say which role you are in as you
switch, so the ledger entry still reads like ten departments reported.

---

## Step 4: the degradation ladder

A missing tool is a declared reduced mode, never "cannot proceed". Full procedures: `docs/NO-STALL.md` P9.

| Missing | What breaks | What you still do |
|---|---|---|
| Sub-agent spawning | Parallelism | Adopt each brief in sequence; name the active role |
| Browser / web search | Live product and trend research | Ask the founder for 5 specific links or screenshots as a Prepared Action Card. **Never invent market data.** Economics, creative, store copy, policies, ledger and learnings are unaffected |
| MCP connections | Canva graphics, MCP-based posting | Emit exact design briefs and exact captions as `HUMAN:` steps |
| API keys (video, posting, research) | Rendered video, auto-posting, scraped research | Ship scripts, shot lists, hook banks, captions, cover briefs; use the free research stack; **name the skipped layer, never imply it ran** |
| File write access | Committing changes | Output complete file contents in fenced blocks with the path as the heading |
| Git / GitHub access | Version history, the cloud loop | Same, plus hand over the commit message |
| Everything but a chat window | Convenience | The founder pastes the core files plus one brief. The rules bind because they are in the paste |

The one unacceptable output is an empty run.

---

## Step 5: the file map

| File | What it is | Read it when |
|---|---|---|
| `docs/MANDATE.md` | The target: $1,000/day net by Day 30, and the backwards math | Every run, first |
| `START-HERE.md` | Orientation and how to work | First session |
| `AGENTS.md` | Root-level rules Codex reads natively | Automatically, or first |
| `docs/PLAYBOOK.md` | The shared brain: the four non-negotiables, criteria, economics, thresholds | Every run |
| `docs/LEARNINGS.md` | What we proved, with evidence. Outranks the playbook | Every run, before acting |
| `tracker/LEDGER.md` | Source of truth: money, tests, decisions, P&L, warm-up state, bench | Every run |
| `docs/30-DAY-PLAN.md` | The sequence and the daily net-profit checkpoints | Planning the day |
| `docs/WARM-UP.md` | Protocol v1, four tracks, and the founder's on/off switch | Before the first post |
| `docs/NO-STALL.md` | Dead-end register and the authored fallbacks | Any time something is blocked |
| `docs/BUDGET-RULES.md` | The $100 cap and the float | Before any money question |
| `docs/OPERATOR-PLAYBOOK.md` | How profitable operators actually run the business | Before creative volume, pricing, AOV, email, ad structure or scaling |
| `docs/SETUP-GUIDE.md` | Day-0 ordered checklist | Standing things up |
| `docs/ACCOUNTS-AND-TOOLS.md`, `docs/AUTOMATION.md` | What the human opens; what tooling automates | Wiring the stack |
| `agents/HQ.md` | The org chart and how to run each department | First session |
| `.claude/agents/*.md` | The ten briefs | When you take that role |
| `automation/README.md` | The warm-up CLI and approved posting | Tracking warm-up, posting |
| `docs/REPLICATE-THIS-SETUP.md` | Standing this pattern up for a different venture | Reusing the setup elsewhere |

## What this repo never contains

Secrets. No API tokens, no passwords, no `.env`. Those live in a gitignored `.env` and in vendor dashboards.
Never paste a secret into a hosted or remote review seat.
