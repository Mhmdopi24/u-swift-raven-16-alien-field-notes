// Alien Field Notes: The Two Day Earth Review — a make.fun entry.
// Writes one line, an alien tourist's review of planet Earth, to
// entry.txt in the output directory the grader provides.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Field notes, day 2: at a human birthday they set a cake alight, chant in unison, blow out the fire with their own breath, then eat the remains. I have joined the cult. 5 stars.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
