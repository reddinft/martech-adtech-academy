import { expect, test } from "@playwright/test";

test.describe("Academy core flows (BDD)", () => {
  test("Scenario: Learner opens first module from homepage", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Start module 1", exact: true }).click();
    await expect(page).toHaveURL(/\/module\/industry-map$/);
    await expect(page.getByRole("heading", { name: "Module 1: MarTech + AdTech Industry Map" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Harvard-style case" })).toBeVisible();
  });

  test("Scenario: Learner marks a module complete and state persists", async ({ page }) => {
    await page.goto("/module/industry-map");
    await page.getByRole("checkbox", { name: "Mark complete" }).click();
    await expect(page.getByText("Progress: 1/10")).toBeVisible();
    await expect(page.getByRole("status").filter({ hasText: /Module complete/ })).toBeVisible();
    await page.reload();
    await expect(page.getByRole("status").filter({ hasText: /Module complete/ })).toBeVisible();
    await expect(page.getByText("Progress: 1/10")).toBeVisible();
  });

  test("Scenario: Learner submits a checkpoint quiz", async ({ page }) => {
    await page.goto("/module/industry-map");
    const questions = page.locator(".quizBlock");
    const count = await questions.count();
    for (let i = 0; i < count; i++) {
      await questions.nth(i).locator(".optionRow").nth(0).click();
    }
    await page.getByRole("button", { name: "Submit answers" }).click();
    await expect(page.getByRole("status").filter({ hasText: /Passed|Review explanations above/ })).toBeVisible();
    await expect(
      page.getByText("Without shared taxonomy and ownership, metrics fragment and decisions become unreliable."),
    ).toBeVisible();
  });

  test("Scenario: Learner saves and restores a case memo", async ({ page }) => {
    await page.goto("/module/industry-map");
    const memo = page.locator("textarea.memoArea");
    const marker = "BDD memo persistence check";
    await memo.fill(marker);
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.getByRole("status").filter({ hasText: /Saved/ })).toBeVisible();
    await page.reload();
    await expect(page.locator("textarea.memoArea")).toHaveValue(marker);
  });

  test("Scenario: Learner can open onboarding from homepage CTA", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Start onboarding" }).click();
    await expect(page).toHaveURL(/\/onboarding$/);
    await expect(page.getByRole("heading", { name: "Module types and progression" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Why Harvard-style case studies accelerate learning" })).toBeVisible();
    await page.getByRole("link", { name: "Start Module 1" }).click();
    await expect(page).toHaveURL(/\/module\/industry-map$/);
  });

  test("Scenario: First-time learner sees onboarding prompt and can dismiss it", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "New learner recommended path" })).toBeVisible();
    await page.getByRole("button", { name: "Skip for now" }).click();
    await expect(page.getByRole("heading", { name: "New learner recommended path" })).toHaveCount(0);
    await page.reload();
    await expect(page.getByRole("heading", { name: "New learner recommended path" })).toHaveCount(0);
  });

  test("Scenario: First-time learner can start guided onboarding", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Start guided onboarding" }).click();
    await expect(page).toHaveURL(/\/onboarding$/);
    await expect(page.getByRole("heading", { name: "Module types and progression" })).toBeVisible();
    await page.getByRole("link", { name: "Start Module 1" }).click();
    await expect(page).toHaveURL(/\/module\/industry-map$/);
  });

  test("Scenario: Learner cannot submit quiz without selecting an answer", async ({ page }) => {
    await page.goto("/module/industry-map");
    const submit = page.getByRole("button", { name: "Submit answers" });
    await expect(submit).toBeDisabled();
    await page.locator(".optionRow").first().click();
    await expect(submit).toBeEnabled();
  });

  test("Scenario: Learner sees correct and incorrect indicators after submitting quiz", async ({ page }) => {
    await page.goto("/module/industry-map");
    const questions = page.locator(".quizBlock");
    const count = await questions.count();
    for (let i = 0; i < count; i++) {
      const options = questions.nth(i).locator(".optionRow");
      await options.nth(0).click();
    }
    await page.getByRole("button", { name: "Submit answers" }).click();
    await expect(page.getByRole("status")).toBeVisible();
    await expect(page.locator(".quizExplanation")).toHaveCount(4);
  });

  test("Scenario: Learner sees save confirmation after saving a case memo", async ({ page }) => {
    await page.goto("/module/industry-map");
    await page.getByRole("button", { name: "Save" }).click();
    await expect(page.getByRole("status").filter({ hasText: /Saved/ })).toBeVisible();
    await expect(page.getByRole("status").filter({ hasText: /Saved/ })).toHaveCount(0, { timeout: 3500 });
  });
});
