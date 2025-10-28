import { test, expect } from '@playwright/test';

test.describe('Evergreen Labs Landing Page', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/');

    // Check that the page loads without errors
    await expect(page).toHaveTitle(/Evergreen Labs/i);

    // Verify the main heading is visible
    await expect(page.locator('h1')).toContainText('EVERGREEN LABS');

    // Check that the tagline is present
    await expect(page.getByText('Fresh code for the long run')).toBeVisible();
  });

  test('should have working navigation header', async ({ page }) => {
    await page.goto('/');

    // Check header is visible and fixed
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Verify logo is present
    await expect(header.locator('svg')).toBeVisible();
    await expect(header.getByText('EVERGREEN LABS')).toBeVisible();

    // Check navigation links
    await expect(header.getByRole('link', { name: 'WELCOME' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'GET IN TOUCH' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'BLOG' })).toBeVisible();
    await expect(header.getByRole('link', { name: 'RESOURCES' })).toBeVisible();
  });

  test('should display all main sections', async ({ page }) => {
    await page.goto('/');

    // Hero section
    await expect(page.locator('#welcome')).toBeVisible();
    await expect(page.getByText('EVERGREEN LABS')).toBeVisible();
    await expect(page.getByText('Fresh code for the long run')).toBeVisible();

    // Services section
    await expect(page.getByText('WE MAKE MOBILE APPS AND WEBSITES')).toBeVisible();

    // About section
    await expect(page.getByText('ABOUT US')).toBeVisible();
    await expect(page.getByText('WHO WE ARE')).toBeVisible();
    await expect(page.getByText('WHAT WE STAND FOR')).toBeVisible();

    // CTA section
    await expect(page.getByText('LET\'S MAKE SOMETHING AWESOME')).toBeVisible();

    // Contact section
    await expect(page.getByText('HOW CAN WE HELP?')).toBeVisible();
    await expect(page.getByRole('link', { name: 'GET IN TOUCH' })).toBeVisible();
  });

  test('should have working scroll animations', async ({ page }) => {
    await page.goto('/');

    // Check that scroll indicator is visible in hero section
    const scrollIndicator = page.locator('.scroll-indicator');
    await expect(scrollIndicator).toBeVisible();

    // Check scroll prompt section
    await expect(page.getByText('SCROLL DOWN')).toBeVisible();
  });

  test('should have responsive design', async ({ page }) => {
    await page.goto('/');

    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('h1')).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByText('EVERGREEN LABS')).toBeVisible();
  });

  test('should have working contact links', async ({ page }) => {
    await page.goto('/');

    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Check email link
    const emailLink = page.getByRole('link', { name: 'GET IN TOUCH' });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:hello@evergreenlabs.io');

    // Check social media links
    await expect(page.getByRole('link', { name: 'Follow us on Facebook' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Follow us on Twitter' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Connect with us on LinkedIn' })).toBeVisible();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    // Check main heading
    await expect(page.locator('h1')).toContainText('EVERGREEN LABS');

    // Check section headings
    await expect(page.locator('h2').first()).toContainText('WE MAKE MOBILE APPS AND WEBSITES');
    await expect(page.getByRole('heading', { name: 'ABOUT US' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'LET\'S MAKE SOMETHING AWESOME' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'HOW CAN WE HELP?' })).toBeVisible();
  });

  test('should load without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Check that there are no console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('should have accessible content', async ({ page }) => {
    await page.goto('/');

    // Check that images have alt text or are decorative
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const role = await img.getAttribute('role');

      // Images should either have alt text or be marked as decorative
      expect(alt !== null || role === 'presentation').toBe(true);
    }

    // Check that links have accessible names
    const socialLinks = page.locator('.social-link');
    const socialLinkCount = await socialLinks.count();

    for (let i = 0; i < socialLinkCount; i++) {
      const link = socialLinks.nth(i);
      const ariaLabel = await link.getAttribute('aria-label');
      expect(ariaLabel).toBeTruthy();
    }
  });
});
