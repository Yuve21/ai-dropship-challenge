# The challenge CLI

The automatable parts of the challenge, in two commands. It is not a bot that scrolls, likes, follows,
watches or comments: no official API exposes those actions, and session-token automation is the ban
vector `docs/WARM-UP.md` and the `compliance-guard` brief both call a hard no. That part stays human by
design. Split table: `docs/WARM-UP.md`, "Automated vs not automated".

## Setup

No `npm install`: everything uses Node's built-in `fetch`/`FormData`/`fs` (Node 18.17+).

```
cd automation
cp .env.example .env
```

Fill `.env` only when you have an upload-post.com API key. `warmup` needs none, and `post --dry-run`
tests the posting flow without one.

## `warmup`: the daily dashboard, and the founder's switch

```
node cli.js warmup start --handle @pawfinds        # once, the day the TikTok account is created
node cli.js warmup today                           # every day: what to do, what's allowed
node cli.js warmup hold --hours 48 --reason "..."  # on an action block or warning
node cli.js warmup skip                            # FOUNDER ONLY: turn the gate off
node cli.js warmup enable                          # turn the gate back on (default)
```

`warmup today` prints the current Challenge Warm-Up Protocol v1 day, today's human routine and
engagement targets, and how many posts of what type are authorized.

**The gate is founder-controlled.** `enabled` in `state/warmup-state.json` defaults to `true`.
- **`enabled: true` (default):** `post` refuses anything the current protocol day does not allow. The
  gate is enforced in code, not only in the docs, so an automated run cannot jump the cadence.
- **`warmup skip` (`enabled: false`):** product content and CTA/link posts are allowed immediately at
  the steady-state cap of 3/day, with no day-type check. The command writes a dated line to
  `tracker/LEDGER.md` recording that warm-up was skipped by founder decision. Post caps and active
  holds still apply, because those answer platform signals rather than the calendar.
- `warmup enable` restores the gate and logs that decision too.

Agents never flip this switch. `challenge-lead` and `content-engine` read it and act accordingly.

## `post`: approved posting via upload-post.com

```
node cli.js post --video ./clip.mp4 --title "caption here" --type native --profile pawfinds
```

`--type` is `native`, `product-in-frame` or `product` (see `lib/protocol.js`, transcribed from
`docs/WARM-UP.md`). The command refuses if:
- the gate is on and today's protocol day does not allow that type,
- you are at today's post cap,
- a hold is active (`warmup hold`), or
- the gate is on and warm-up has not been started (`warmup start`).

`--dry-run` prints exactly what would be sent, no API call, no paid plan needed.

**Cost (verified 2026-08-10, corrects an older `docs/SETUP-GUIDE.md` claim):** upload-post.com TikTok
posting is Basic tier and up, **$24/mo minimum**, not free. Subscribe a day or two before posting
actually starts, not on Day -7, so it does not sit idle against the $100 cap.

## State

`state/warmup-state.json` holds the gate flag, the account start date, any active hold, and the post
log. Committed to git on purpose, like `tracker/LEDGER.md`: operational state, not a secret. `.env`
holds the API key and is gitignored.

## Not wired yet

- **Video generation.** No Creatify/HeyGen/Runway/ElevenLabs keys in `.env` (`docs/SETUP-GUIDE.md`
  section C), so `post` needs a finished video file to exist already.
- **A trigger for `warmup today`.** Run it daily by hand or wire a scheduled task. It does not run
  inside `.github/workflows/challenge-loop.yml`; that loop runs `challenge-lead`, a separate layer.
- **Post-status lookup.** upload-post.com publishes no confirmed "check by publish_id" endpoint, so
  `lib/uploadPost.js` does not guess one. Check `https://docs.upload-post.com/openapi.json` first.
