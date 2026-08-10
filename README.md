# AI Dropshipping Challenge

Turn a **$50-$100 out-of-pocket start** into a profitable dropshipping business in **30 days**, run by
a team of AI sub-agents that do the research, store build, creative, and analysis, with a human
pulling the real-world levers (accounts, spend, filming, shipping).

**New seat? Read [`START-HERE.md`](START-HERE.md) first.** It's the entry point and points to
everything else.

Structure:
- `START-HERE.md` — orientation + the honest frame + how to work.
- `docs/PLAYBOOK.md` — the shared brain (how it works, product criteria, unit economics, metrics,
  the challenge-video reality). Research-grounded, 2025-26.
- `docs/30-DAY-PLAN.md` · `docs/BUDGET-RULES.md` · `docs/ACCOUNTS-AND-TOOLS.md` · `docs/AUTOMATION.md`
- `agents/HQ.md` + `.claude/agents/*.md` — the sub-agent team (Claude Code auto-loads; Codex/Cursor
  paste the brief as a system prompt).
- `tracker/LEDGER.md` — the running source of truth: money, product tests, decisions, P&L.

This repo holds the playbook and the team. It never holds secrets (API tokens, passwords) — those
live in a gitignored `.env` and in the vendor dashboards. Built with the same portable-agent-team
pattern as the Lark project.
