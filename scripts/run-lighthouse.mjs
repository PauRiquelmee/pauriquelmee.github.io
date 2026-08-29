import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { chromium } from "playwright";

const auditUrl = "http://127.0.0.1:4173/paula-riquelme-portfolio/";
const server = spawn(process.execPath, ["scripts/serve-out.mjs"], {
  cwd: process.cwd(),
  stdio: "ignore",
});

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(auditUrl);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
  throw new Error("The static preview did not become available.");
}

let chrome;

try {
  await waitForServer();
  chrome = await launch({
    chromePath: chromium.executablePath(),
    chromeFlags: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"],
  });

  const result = await lighthouse(auditUrl, {
    logLevel: "error",
    output: "json",
    port: chrome.port,
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });

  if (!result) throw new Error("Lighthouse did not produce a report.");

  const scores = Object.fromEntries(
    Object.entries(result.lhr.categories).map(([key, category]) => [
      key,
      Math.round((category.score ?? 0) * 100),
    ]),
  );

  await mkdir(".lighthouse", { recursive: true });
  await writeFile(".lighthouse/report.json", result.report);
  await writeFile(".lighthouse/summary.json", `${JSON.stringify(scores, null, 2)}\n`);
  console.log(JSON.stringify(scores, null, 2));

  const targets = {
    performance: 95,
    accessibility: 95,
    "best-practices": 95,
    seo: 100,
  };
  const missedTargets = Object.entries(targets).filter(
    ([category, target]) => scores[category] < target,
  );

  if (missedTargets.length > 0) {
    throw new Error(
      `Lighthouse targets missed: ${missedTargets
        .map(([category, target]) => `${category} below ${target}`)
        .join(", ")}`,
    );
  }
} finally {
  if (chrome) await chrome.kill();
  server.kill("SIGTERM");
}
