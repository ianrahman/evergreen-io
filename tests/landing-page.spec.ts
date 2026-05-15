import { expect, type Page, test } from '@playwright/test';

const navLabels = ['Welcome', 'Services', 'Resources', 'Contact'];

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
    await expect(page.getByRole('heading', { name: 'Evergreen Labs' })).toBeVisible();
    await expect(
      page.getByText('Designing resilient products that grow with your business.'),
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
    await expect(page.getByRole('heading', { name: 'Evergreen Labs' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sustainable products from idea to launch' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Building for the long run' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Keep momentum between releases' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Let’s launch the next durable release together' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Tell us about your next release' })).toBeVisible();
  });

  test('shows hero motion affordances', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.hero-content')).toBeVisible();
    await expect(page.locator('.hero-logo')).toBeVisible();
    await expect(page.locator('.scroll-indicator')).toBeVisible();
  });

  test('keeps primary content visible across viewport sizes', async ({ page }) => {
    await page.goto('/');

    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.getByRole('heading', { name: 'Evergreen Labs' })).toBeVisible();

    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByRole('heading', { name: 'Evergreen Labs' })).toBeVisible();
    await expect(page.locator('header')).toBeVisible();
  });

  test('has working contact entry points', async ({ page }) => {
    await page.goto('/');

    await page.locator('#contact').scrollIntoViewIfNeeded();

    const emailLink = page.getByRole('link', { name: 'hello@evergreenlabs.io' });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:hello@evergreenlabs.io');
    await expect(page.getByRole('link', { name: 'Connect with us on LinkedIn' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send message' })).toBeVisible();
  });

  test('has proper heading hierarchy anchors', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h1')).toContainText('Evergreen Labs');
    await expect(page.locator('h2').first()).toContainText('Sustainable products from idea to launch');
    await expect(page.getByRole('heading', { name: 'Building for the long run' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Let’s launch the next durable release together' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Tell us about your next release' })).toBeVisible();
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

  test('has accessible images and social links', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const imageCount = await images.count();

    for (let index = 0; index < imageCount; index += 1) {
      const image = images.nth(index);
      const alt = await image.getAttribute('alt');
      const role = await image.getAttribute('role');

      expect(alt !== null || role === 'presentation').toBe(true);
    }

    const socialLinks = page.locator('.social-link');
    const socialLinkCount = await socialLinks.count();

    for (let index = 0; index < socialLinkCount; index += 1) {
      const link = socialLinks.nth(index);
      const ariaLabel = await link.getAttribute('aria-label');
      expect(ariaLabel).toBeTruthy();
    }
  });
});
