# AI Dropshipping Challenge

Turn a **$50-$100 out-of-pocket start** into **$1,000/day net profit by Day 30**, run by a team of AI
sub-agents that do the research, store build, creative and analysis, with a human pulling the real-world
levers (accounts, spend, filming, shipping).

**New seat? Read [`START-HERE.md`](START-HERE.md) first.**

**Not a Claude seat?** [`BOOTSTRAP.md`](BOOTSTRAP.md) is the model-agnostic entry point: one copy-paste
kickoff prompt that works in Claude Code, Codex/ChatGPT, Cursor, Gemini, Copilot or a plain chat window, a
table of how agents work in each seat, and a degradation ladder for missing tools. [`AGENTS.md`](AGENTS.md)
is the one-page root rule sheet Codex reads natively.

**Want this setup for a different venture?** [`docs/REPLICATE-THIS-SETUP.md`](docs/REPLICATE-THIS-SETUP.md)
is the reusable template.

Structure:
- `docs/MANDATE.md`: the target, the backwards math, the creative rate, the scaling ladder.
- `START-HERE.md`: orientation and how to work.
- `BOOTSTRAP.md` and `AGENTS.md`: run it from any LLM seat; the hard rules in one page.
- `docs/PLAYBOOK.md`: the shared brain. The four non-negotiables, product criteria, unit economics,
  metrics, kill/scale thresholds. Research-grounded, 2025-26.
- `docs/OPERATOR-PLAYBOOK.md`: **how genuinely profitable operators run the business**, course-seller layer
  stripped out. Creative volume as a rate, ad testing and scaling structures, AOV and contribution-margin
  engineering, the email flows that carry revenue, CVR work, cash-flow discipline, the dropship-to-brand
  ladder. Every number labelled `DOCUMENTED` or `HYPOTHESIS`, staged into day 1 / at first revenue / later.
- `docs/LEARNINGS.md`: the accumulating, evidence-backed knowledge base. Every agent reads it before acting
  and writes to it when a test concludes.
- `docs/WARM-UP.md`: the warm-up doctrine plus **the Challenge Warm-Up Protocol v1**, our own day-by-day
  schedule, labelled a hypothesis and measured into learnings on Day 1 and Day 7. The gate is
  founder-controlled via the `automation/` CLI.
- `docs/NO-STALL.md`: the dead-end register. Every stall point with an authored fallback.
- `docs/30-DAY-PLAN.md`: the sequence and the daily net-profit checkpoints.
- `docs/SETUP-GUIDE.md` (**start here if nothing is open yet**): the ordered day-0 checklist.
- `docs/BUDGET-RULES.md` · `docs/ACCOUNTS-AND-TOOLS.md` · `docs/AUTOMATION.md` · `automation/README.md`.
- `agents/HQ.md` plus `.claude/agents/*.md`: the 10-agent team (Claude Code auto-loads; other seats paste
  the brief as a system prompt).
- `tracker/LEDGER.md`: the running source of truth. Money, product tests, decisions, P&L.

This repo holds the playbook and the team. It never holds secrets: those live in a gitignored `.env` and in
the vendor dashboards. Built with the same portable-agent-team pattern as the Lark project.
