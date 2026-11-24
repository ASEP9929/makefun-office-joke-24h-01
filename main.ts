import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One-line office joke: a dead office plant that HR keeps watering
// because, technically, it is still on payroll. Dry, specific, absurd.
const LINE =
  "The office plant by my desk has been dead for six months, but HR keeps watering it because technically it's still on payroll.";

// Guard: the gate only accepts 1-200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and confirm the file is byte-identical to the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the joke line");
}
