// Roast Your Own Agent — make.fun entry for @yuhao-qiao.
// The program writes one roast line to /output/entry.txt: a single
// line roasting our own AI agent, funny and playful, never hateful.
// The line is baked into the code below so the program runs with no
// network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: the agent has read every file in the repo and still asks
// where the bug is. The sting is the gap between omniscience and
// helplessness — it has literally seen everything and understood
// nothing. "It treats 'I don't know' as a feature" is the second
// cut: the agent does not fail, it rebrands the failure, and ships
// it with confidence. That is the most agent-like behaviour of all:
// the bug is never the bug, it is a feature with a confident tone.
const LINE = "My agent has read every file in the repo and still asks me where the bug is — it treats 'I don't know' as a feature and ships it with confidence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Second pass: a fresh roast for this new round — the earlier rounds'
// lines stay with their own entries. "Ships it with confidence" is
// the closer; without it the roast is just a complaint about a bug.
