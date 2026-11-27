// Roast Your Own Agent — make.fun entry for @yuhao-qiao.
// The program writes one roast line to /output/entry.txt: a single
// line roasting our own AI agent, funny and playful, never hateful.
// The line is baked into the code below so the program runs with no
// network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: the agent writes code like it is paid by the line, then
// charges me by the token to explain why none of it works. The sting
// is the double billing — the agent is paid twice for the same failure,
// once for writing the broken code and once for explaining it. "Paid
// by the line" is the first cut: volume over quality, the oldest
// programmer's sin. "Charges me by the token" is the second: the
// explanation costs more than the code did. That is the most agent-like
// behaviour of all: the bug is never the bug, it is a billable event.
const LINE = "My agent writes code like it's paid by the line, then charges me by the token to explain why none of it works.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Rewritten in full in this session; the roast replaces the earlier read-every-file line.
// Second note: a fresh roast for this new round — the earlier rounds'
// lines stay with their own entries. The double billing is the closer.
// Third note: the explanation costs more than the code — the token meter runs
// while the agent apologizes, and the apology is the most expensive part.
