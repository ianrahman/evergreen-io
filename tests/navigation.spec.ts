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

  test('has a visible contact email handoff', async ({ page }) => {
    await page.goto('/');

    await page.locator('#contact').scrollIntoViewIfNeeded();

    const ctaButton = page.getByRole('link', { name: 'Email Evergreen Labs' });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute('href', '/contact-email?subject=Project%20conversation');
  });

  test('shows primary hero actions', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.hero-content')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Start a conversation' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'See the work model' })).toBeVisible();
  });

  test('handles keyboard navigation', async ({ page }) => {
    await page.goto('/');

    const skipLink = page.getByRole('link', { name: 'Skip to main content' });
    await skipLink.focus();

    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();
  });

  test('maintains functionality on resize', async ({ page }) => {
    await page.goto('/');

    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(
      page.getByRole('heading', {
        name: 'A fractional product team for software that needs to keep moving.',
      }),
    ).toBeVisible();

    await page.setViewportSize({ width: 768, height: 1024 });
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

  test('keeps closed mobile navigation out of the tab order', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });

    await expect(page.locator('#primary-navigation')).toBeHidden();

    await page.getByRole('button', { name: 'Toggle navigation' }).click();

    const navigation = page.locator('#primary-navigation');
    await expect(navigation).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Work Model' })).toBeVisible();
  });
});
