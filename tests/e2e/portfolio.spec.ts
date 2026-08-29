import { expect, test } from "@playwright/test";

const productionPath = "/paula-riquelme-portfolio/";

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test("renders the English portfolio and primary navigation", async ({ page }) => {
  await expect(page).toHaveTitle(
    "Paula Riquelme | Product Lead & Product Designer",
  );
  await expect(
    page.getByRole("heading", {
      name: "I design products, bring them to market, and can build them too.",
    }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Woku" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Inpla" })).toBeVisible();
  await expect(page.getByText("USD 70,000", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("Puerto Coronel", { exact: false }).first()).toBeVisible();

  if ((await page.viewportSize())!.width >= 1088) {
    await page.getByRole("link", { name: "Experience", exact: true }).click();
    await expect(page).toHaveURL(/#experience$/);
    await expect(page.getByRole("heading", { name: "Experience" })).toBeInViewport();
  }

  await expect(page.locator('a[href="/en"], a[href="/es"]')).toHaveCount(0);
  await expect(page.getByText(/language selector/i)).toHaveCount(0);
});

test("supports accessible mobile navigation", async ({ page }) => {
  test.skip((await page.viewportSize())!.width >= 1088, "Mobile navigation only");

  const trigger = page.getByRole("button", { name: "Open navigation" });
  await trigger.click();
  await expect(page.getByRole("dialog", { name: "Navigation" })).toBeVisible();
  await expect(page.getByRole("link", { name: "English resume" })).toHaveAttribute(
    "download",
    "",
  );
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Navigation" })).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("opens honest project preview fallbacks and restores focus", async ({ page }) => {
  const trigger = page.getByRole("button", { name: "Live preview Woku" });
  await trigger.click();

  const dialog = page.getByRole("dialog", { name: "Woku live preview" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText(/prevents third-party embedding/)).toBeVisible();
  await expect(dialog.locator("iframe")).toHaveCount(0);
  await expect(dialog.getByRole("link", { name: "Open website for Woku" })).toHaveAttribute(
    "target",
    "_blank",
  );

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("serves the resume, static media, and production subpath", async ({ page }) => {
  expect(new URL(page.url()).pathname).toBe(productionPath);

  const resume = page.getByRole("link", {
    name: "Download Paula Riquelme's English resume as a PDF",
  });
  await expect(resume).toHaveAttribute(
    "href",
    `${productionPath}documents/paula-riquelme-resume-en.pdf`,
  );
  await expect(resume).toHaveAttribute("download", "");

  const assetUrls = await page
    .locator("img[src], script[src], link[rel='stylesheet'], link[rel='manifest']")
    .evaluateAll((elements) =>
      elements.map((element) => {
        const source = element.getAttribute("src") ?? element.getAttribute("href");
        return new URL(source!, window.location.href).toString();
      }),
    );

  for (const assetUrl of [...new Set(assetUrls)]) {
    expect(new URL(assetUrl).pathname).toMatch(/^\/paula-riquelme-portfolio\//);
    const response = await page.request.get(assetUrl);
    expect(response.status(), assetUrl).toBe(200);
  }

  const resumeResponse = await page.request.get(
    `${productionPath}documents/paula-riquelme-resume-en.pdf`,
  );
  expect(resumeResponse.status()).toBe(200);
  expect(resumeResponse.headers()["content-type"]).toContain("application/pdf");
});

test("keeps project, LinkedIn, recognition, and press links safe", async ({ page }) => {
  await expect(page.getByRole("link", { name: "Open website for Woku" })).toHaveAttribute(
    "rel",
    "noreferrer noopener",
  );
  await expect(
    page.getByRole("link", { name: "Open Paula Riquelme on LinkedIn in a new tab" }),
  ).toHaveAttribute("href", "https://www.linkedin.com/in/pauriquelme");
  await expect(
    page.getByRole("link", { name: "Best Undergraduate Paper | OPTIMA 2017" }),
  ).toHaveAttribute("target", "_blank");
  await expect(page.locator(".press-title")).toHaveCount(5);
  await expect(page.locator(".press-title").first()).toHaveAttribute(
    "rel",
    "noreferrer noopener",
  );
});

test("contains complete core resume content and English metadata", async ({ page }) => {
  for (const company of [
    "woku",
    "Inpla",
    "stow SpA",
    "Essbio",
    "Universidad de Concepción",
    "Orvita",
  ]) {
    await expect(page.getByText(company, { exact: true }).first()).toBeAttached();
  }

  await expect(page.locator('html[lang="en"]')).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://pauriquelmee.github.io/paula-riquelme-portfolio/",
  );
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
    "content",
    "en_US",
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
  expect(
    await page.locator('script[type="application/ld+json"]').textContent(),
  ).toContain("https://www.linkedin.com/in/pauriquelme");
});

test("keeps desktop metrics on one line and actions softly rounded", async ({
  page,
}) => {
  test.skip((await page.viewportSize())!.width < 1088, "Desktop layout only");

  const preProduct = page
    .locator('[data-project="inpla"] .project-metrics dd')
    .filter({ hasText: "Pre-product" });
  const lineCount = await preProduct.evaluate((element) => {
    const range = document.createRange();
    range.selectNodeContents(element);
    return range.getClientRects().length;
  });

  expect(lineCount).toBe(1);
  await expect(page.getByRole("link", { name: "View selected work" })).toHaveCSS(
    "border-radius",
    "12px",
  );
  await expect(page.getByRole("link", { name: "Contact", exact: true })).toHaveCSS(
    "border-radius",
    "12px",
  );
});

test("completes structural motion and removes spatial starts when requested", async ({
  page,
}) => {
  const media = page.locator('[data-project="woku"] .project-media');
  const initialTransform = await media.evaluate(
    (element) => getComputedStyle(element).transform,
  );
  expect(initialTransform).not.toBe("none");

  await media.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await expect(media).toHaveCSS("transform", "none");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  const reducedMedia = page.locator('[data-project="woku"] .project-media');
  expect(Number(await reducedMedia.evaluate((element) => getComputedStyle(element).opacity))).toBe(1);
  await expect(reducedMedia).toHaveCSS("transform", "none");
});
