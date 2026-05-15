import { expect, type Page, test } from '@playwright/test';

const navLabels = ['Welcome', 'Work Model', 'Principles', 'Contact'];

const openMobileMenuIfNeeded = async (page: Page) => {
  const toggle = page.getByRole('button', { name: 'Toggle navigation' });
  if ((await toggle.isVisible()) && (await toggle.getAttribute('aria-expanded')) !== 'true') {
    await toggle.click();
  }
};

test.describe('Evergreen Labs Landing Page', () => {
  test('loads the homepage successfully', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Evergreen Labs/i);
    await expect(
      page.getByRole('heading', {
        name: 'A fractional product team for software that needs to keep moving.',
      }),
    ).toBeVisible();
  });

  test('exposes the current navigation header', async ({ page }) => {
    await page.goto('/');

    const header = page.locator('header');
    await expect(header).toBeVisible();
    await expect(header.getByRole('img', { name: 'Evergreen Labs logo' })).toBeVisible();
    await expect(header.getByText('EVERGREEN LABS', { exact: true })).toBeVisible();

    await openMobileMenuIfNeeded(page);
    for (const label of navLabels) {
      await expect(header.getByRole('link', { name: label })).toBeVisible();
    }
  });

  test('displays the main sections', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#welcome')).toBeVisible();
    await expect(
      page.getByRole('heading', {
        name: 'A fractional product team for software that needs to keep moving.',
      }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'A small product team without the permanent overhead.' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'How the work stays useful after launch.' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Send the context. We will make the next move clear.' })).toBeVisible();
  });

  test('shows primary hero actions', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.hero-content')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Start a conversation' })).toHaveAttribute(
      'href',
      '/contact-email?subject=Project%20conversation',
    );
    await expect(page.getByRole('link', { name: 'See the work model' })).toHaveAttribute('href', '#work-model');
  });

  test('keeps primary content visible across viewport sizes', async ({ page }) => {
    await page.goto('/');

    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(
      page.getByRole('heading', {
        name: 'A fractional product team for software that needs to keep moving.',
      }),
    ).toBeVisible();

    await page.setViewportSize({ width: 375, height: 667 });
    await expect(
      page.getByRole('heading', {
        name: 'A fractional product team for software that needs to keep moving.',
      }),
    ).toBeVisible();
    await expect(page.locator('header')).toBeVisible();
  });

  test('has working contact entry points', async ({ page }) => {
    await page.goto('/');

    await page.locator('#contact').scrollIntoViewIfNeeded();

    const emailLink = page.getByRole('link', { name: 'Email Evergreen Labs' });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', '/contact-email?subject=Project%20conversation');
    await expect(page.getByRole('button', { name: 'Send message' })).toHaveCount(0);
  });

  test('has proper heading hierarchy anchors', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h1')).toContainText('A fractional product team');
    await expect(page.locator('h2').first()).toContainText('A small product team');
    await expect(page.getByRole('heading', { name: 'How the work stays useful after launch.' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Send the context. We will make the next move clear.' })).toBeVisible();
  });

  test('loads without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(consoleErrors).toHaveLength(0);
  });

  test('has accessible images', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const imageCount = await images.count();

    for (let index = 0; index < imageCount; index += 1) {
      const image = images.nth(index);
      const alt = await image.getAttribute('alt');
      const role = await image.getAttribute('role');

      expect(alt !== null || role === 'presentation').toBe(true);
    }
  });
});
