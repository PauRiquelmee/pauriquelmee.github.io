import { writeFile } from "node:fs/promises";

await writeFile("out/.nojekyll", "");
console.log("Created out/.nojekyll.");
