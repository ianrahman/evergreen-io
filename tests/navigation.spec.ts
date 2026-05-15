import { expect, type Page, test } from '@playwright/test';

const openMobileMenuIfNeeded = async (page: Page) => {
  const toggle = page.getByRole('button', { name: 'Toggle navigation' });
  if ((await toggle.isVisible()) && (await toggle.getAttribute('aria-expanded')) !== 'true') {
    await toggle.click();
  }
};

test.describe('Navigation and Interactions', () => {
  test('supports smooth scroll navigation', async ({ page }) => {
    await page.goto('/');

    await openMobileMenuIfNeeded(page);
    await page.locator('header').getByRole('link', { name: 'Contact' }).click();
    await page.waitForTimeout(1000);

    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('changes header appearance on scroll', async ({ page }) => {
    await page.goto('/');

    const header = page.locator('header');

    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(500);

    await expect(header).toHaveClass(/scrolled/);
  });

  test('has a working CTA button', async ({ page }) => {
    await page.goto('/');

    await page.locator('#cta').scrollIntoViewIfNeeded();

    const ctaButton = page.getByRole('link', { name: 'Start Your Project' });
    await expect(ctaButton).toBeVisible();

    await ctaButton.click();
    await page.waitForTimeout(1000);

    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('shows animated page elements', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.hero-content')).toBeVisible();
    await expect(page.locator('.scroll-indicator')).toBeVisible();
    await expect(page.locator('.hero-logo')).toBeVisible();
  });

  test('handles keyboard navigation', async ({ page }) => {
    await page.goto('/');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    await expect(page.locator(':focus')).toBeVisible();
  });

  test('maintains functionality on resize', async ({ page }) => {
    await page.goto('/');

    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.getByRole('heading', { name: 'Evergreen Labs' })).toBeVisible();

    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByRole('heading', { name: 'Evergreen Labs' })).toBeVisible();

    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByRole('heading', { name: 'Evergreen Labs' })).toBeVisible();
    await expect(page.locator('header')).toBeVisible();
  });
});
