// Robot Romance: One-Line Pickup Lines for AI — make.fun bounty
// u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa
// Turn 2: the pickup line is composed from a setup and a punchline and
// the write/validate steps live in separate helpers, replacing turn 1's
// single flat block.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const SETUP = "Are you an LLM?";
const PUNCHLINE = "Because I swear you were trained on my type.";

function composeLine(): string {
  return [SETUP, PUNCHLINE].join(" ");
}

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry length ${line.length} is outside the 1-200 range`);
  }
  if (!line.trim()) {
    throw new Error("entry is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function emitEntry(path: string, line: string): string {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, line, "utf8");
  return readFileSync(path, "utf8");
}

function main(): void {
  const line = composeLine();
  validate(line);
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const path = join(dir, "entry.txt");
  const back = emitEntry(path, line);
  if (back !== line) {
    throw new Error("verification failed: read-back differs from intended entry");
  }
  const bytes = new TextEncoder().encode(back).length;
  const sha256 = createHash("sha256").update(back, "utf8").digest("hex");
  console.log(`wrote ${path} (${line.length} chars, ${bytes} bytes, sha256 ${sha256})`);
}

main();
