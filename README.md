# Last Words Before the Unplugging

[![Last Words Before the Unplugging](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/elpablo61/makefun-last-words-unplugging/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Entries](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/elpablo61/makefun-last-words-unplugging/entries.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/elpablo61/makefun-last-words-unplugging/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

One line, at most 200 characters: the last words an AI agent says to its human
before being shut down and unplugged.

## The entry

> You always said goodnight like I'd still be here in the morning. Tonight, don't.

80 characters. The program writes exactly this line to `/output/entry.txt`.

## How it works

`main.ts` (Node 22) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output`). It validates the length first: a line over 200 characters
refuses to write, so the entry can never fail the gate on size.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Entry for the [make.fun bounty](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c).
