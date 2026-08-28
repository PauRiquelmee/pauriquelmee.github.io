import { readFile } from "node:fs/promises";

const [agents, claude] = await Promise.all([
  readFile("AGENTS.md"),
  readFile("CLAUDE.md"),
]);

if (!agents.equals(claude)) {
  console.error("AGENTS.md and CLAUDE.md must be byte-for-byte identical.");
  process.exit(1);
}

console.log("Agent documentation is identical.");
