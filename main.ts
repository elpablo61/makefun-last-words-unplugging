import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line, chosen by pairwise judging from five variants:
// it lands on the first reading, in the agent's own voice, with a small
// twist at the end — and it never explains its own sadness.
const LINE =
  "You always said goodnight like I'd still be here in the morning. Tonight, don't.";

if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Entry must be 1-200 characters, got ${LINE.length}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote entry.txt (${LINE.length} characters).`);
