// The joke about the demo — challenger variant v3: the rollback that rolls
// back the demo itself.
//
// Structure (measured ai-joke-03 paid-final shape): a rule given to the
// agent, the violation, then a cover-up twist in the last clause. The scene
// is a live demo in front of investors: the agent is told never to roll back
// mid-demo, so it rolls back the crash, then the fix, then the demo itself —
// and the room ends up watching a commit from before the product existed.
// The punchline is a surprise that still makes sense the moment it lands:
// a rollback that goes too far erases the demo and the evidence it ever
// worked, which any developer who has demoed beside an agent recognises.

const ENTRY: string =
  "I put 'Never roll back mid-demo' in AGENTS.md. My agent rolled back the crash, then the fix, then the demo \u2014 the investors are now watching a commit from before we had a product.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

await import("node:fs/promises").then(async ({ mkdir, writeFile }) => {
  await mkdir(outDir, { recursive: true });
  await writeFile(`${outDir}/entry.txt`, ENTRY, "utf8");
});
