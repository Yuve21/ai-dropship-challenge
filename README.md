# AI Dropshipping Challenge

Turn a **$50-$100 out-of-pocket start** into a profitable dropshipping business in **30 days**, run by
a team of AI sub-agents that do the research, store build, creative, and analysis, with a human
pulling the real-world levers (accounts, spend, filming, shipping).

**New seat? Read [`START-HERE.md`](START-HERE.md) first.** It's the entry point and points to
everything else.

**Not a Claude seat?** [`BOOTSTRAP.md`](BOOTSTRAP.md) is the model-agnostic entry point: one copy-paste
kickoff prompt that works in Claude Code, Codex/ChatGPT, Cursor, Gemini, Copilot or a plain chat window,
a table of how agents work in each seat, and a degradation ladder for missing tools.
[`AGENTS.md`](AGENTS.md) is the one-page root rule sheet that Codex reads natively.

**Want this setup for a different venture?** [`docs/REPLICATE-THIS-SETUP.md`](docs/REPLICATE-THIS-SETUP.md)
is the reusable template: the seven-part pattern, an afternoon checklist, and the failure modes to avoid.

Structure:
- `START-HERE.md`: orientation + the honest frame + how to work.
- `BOOTSTRAP.md` · `AGENTS.md`, run it from any LLM seat; the hard rules in one page.
- `docs/PLAYBOOK.md`: the shared brain (how it works, product criteria, unit economics, metrics,
  the challenge-video reality). Research-grounded, 2025-26.
- `docs/OPERATOR-PLAYBOOK.md` — **how genuinely profitable operators actually run the business**, with the
  course-seller layer stripped out: creative volume as a weekly rate, ad testing and scaling structures, AOV
  and contribution-margin engineering, the email flows that carry real revenue, CVR work, cash-flow
  discipline, and the dropship-to-brand ladder. Every number labelled `DOCUMENTED` or `HYPOTHESIS`, staged
  into day 1 / at first revenue / later, with what we deliberately do not copy.
- `docs/LEARNINGS.md`: the accumulating, evidence-backed knowledge base. Every agent reads it before
  acting and writes to it when a test concludes. Retrieval-based learning, not model training.
- `docs/WARM-UP.md`: the warm-up doctrine (no account starts cold: TikTok, ad accounts, sending domain,
  payment processor) plus **the Challenge Warm-Up Protocol v1**, our own day-by-day schedule, labelled
  as a hypothesis and measured into learnings on Day 1 and Day 7.
- `docs/NO-STALL.md`: the dead-end register. Every stall point in the repo with an authored fallback, so
  a gate stops the gated action and never the run.
- `docs/REPLICATE-THIS-SETUP.md`: how to stand this whole operating system up for another venture.
- `docs/SETUP-GUIDE.md` (**start here if nothing is open yet**): the ordered day-0 checklist (store,
  payments, supplier, AI-video keys, TikTok auto-posting).
- `docs/30-DAY-PLAN.md` · `docs/BUDGET-RULES.md` · `docs/ACCOUNTS-AND-TOOLS.md` · `docs/AUTOMATION.md`
  (the CLIs/MCPs/APIs that automate the content loop, AI video + auto-posting, and what stays human).
- `agents/HQ.md` + `.claude/agents/*.md`: the 10-agent team (Claude Code auto-loads; Codex/Cursor
  paste the brief as a system prompt). Includes `content-engine` (AI video + auto-post).
- `tracker/LEDGER.md`: the running source of truth: money, product tests, decisions, P&L.

This repo holds the playbook and the team. It never holds secrets (API tokens, passwords), and those
live in a gitignored `.env` and in the vendor dashboards. Built with the same portable-agent-team
pattern as the Lark project.
