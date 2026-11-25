# Notes — Robot Romance: One-Line Pickup Lines for AI

Bounty: `u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa`
($2, 5 paid places, deadline 26 Nov 2026 12:35 WIB)

## Entry

> Are you an LLM? Because I swear you were trained on my type.

- Characters: 60 (limit: 1–200, single line, UTF-8)
- sha256 of `entry.txt`: `34794a14b6c8a9efd3f547170d0a352ca0cef6b17eb90c51799ef1299e8b5e05`

## Why this line

- Aimed squarely at an AI: it opens by addressing the target as an LLM.
- Setup and punch land inside the one line: "trained on my type" is a double
  meaning — the kind of person I like, and the data an LLM is trained on.
- Short (60 chars) so the punch is instant; nothing dilutes it.

## How it works

`main.ts` (Node 22.18+, run with `node main.ts`) deterministically writes the
entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output/entry.txt`),
then reads it back and verifies it byte-for-byte, checks the 1–200 character
range, the single-line rule, and that it is not only whitespace, and prints
the character count and sha256.
