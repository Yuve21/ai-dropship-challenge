# The challenge CLI

What this is: the parts of the AI-dropshipping challenge that are legitimately automatable, wired
into two commands. What this is NOT: a bot that scrolls, likes, follows, watches, or comments on
your real TikTok account. There's no legitimate API for that, and doing it via session-token
automation is the exact ban vector `docs/WARM-UP.md` and the `compliance-guard` brief both call a
hard no. That part of the challenge stays a real human, by design, not because of a tooling gap.

## Setup

No `npm install` needed — everything here uses Node's built-in `fetch`/`FormData`/`fs` (Node 18.17+,
you have Node 24). Just:

```
cd automation
cp .env.example .env
```

Fill in `.env` only when you actually have an upload-post.com API key. You don't need one to use
`warmup`, and you can use `post --dry-run` to test the posting flow before paying for anything.

## `warmup` — the daily "read the dashboard" command

```
node cli.js warmup start --handle @pawfinds        # once, the day you create the TikTok account
node cli.js warmup today                            # every day: what to do, what's allowed
node cli.js warmup hold --hours 48 --reason "..."    # if an action block/warning appears
```

`warmup today` tells you the current Challenge Warm-Up Protocol v1 day, the human routine for
today (scroll time, engagement targets), and exactly how many posts (if any) are authorized and of
what type. It will not let `post` (below) post something the current day doesn't allow — that gate
is enforced in code, not just in the docs, specifically so an automated run can't accidentally jump
the cadence.

## `post` — approved posting via upload-post.com

```
node cli.js post --video ./clip.mp4 --title "caption here" --type native --profile pawfinds
```

`--type` must be one of `native`, `product-in-frame`, or `product`, matching what the current
protocol day allows (see `lib/protocol.js`, transcribed from `docs/WARM-UP.md`). The command
refuses to post if:
- today's protocol day doesn't allow that type,
- you're already at today's post cap,
- a hold is active (`warmup hold`), or
- warm-up hasn't been started yet (`warmup start`).

Use `--dry-run` to see exactly what would be sent without spending an upload-post.com call or
needing a paid plan yet.

**Cost note (verified 2026-08-10, corrected from what `docs/SETUP-GUIDE.md` used to say):**
upload-post.com's TikTok posting is Basic-tier-and-up only, **$24/mo minimum**, not free. Since no
posting is authorized until Track A reaches Day 1 anyway (about a week after account creation),
there's no reason to pay for this before then — it would just be $24 sitting idle against the
$100 lifetime cap. Subscribe a day or two before Day 1 arrives, not on Day -7.

## State

`state/warmup-state.json` holds the account start date, any active hold, and the post log. It's
committed to git on purpose (like `tracker/LEDGER.md`) — it's operational state, not a secret, and
this keeps it in sync if you work from more than one machine. `.env` (the actual API key) is
gitignored and never leaves this machine.

## What this doesn't do yet

- No video generation is wired (no Creatify/HeyGen/Runway/ElevenLabs keys in `.env` yet, see
  `docs/SETUP-GUIDE.md` section C) — `post` needs a finished video file to already exist.
- No automatic trigger for `warmup today` — run it yourself once a day, or wire it to a scheduled
  task if you want a reminder. It does not run inside the GitHub Actions daily loop
  (`.github/workflows/challenge-loop.yml`); that loop runs `challenge-lead`, which is a separate
  layer from this CLI.
- upload-post.com's docs don't publish a confirmed "check post status by publish_id" endpoint, so
  `lib/uploadPost.js` doesn't guess one. If you need it, check
  `https://docs.upload-post.com/openapi.json` yourself before relying on it.
