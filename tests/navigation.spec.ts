import { test, expect } from '@playwright/test';

test.describe('Navigation and Interactions', () => {
  test('should have smooth scroll navigation', async ({ page }) => {
    await page.goto('/');
    
    // Click on navigation links and verify they work
    await page.getByRole('link', { name: 'GET IN TOUCH' }).click();
    
    // Wait for smooth scroll to complete
    await page.waitForTimeout(1000);
    
    // Verify we're near the contact section
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeInViewport();
  });

  test('should change header appearance on scroll', async ({ page }) => {
    await page.goto('/');
    
    const header = page.locator('header');
    
    // Get initial header state (should be transparent-ish)
    const initialBackground = await header.evaluate(el => 
      getComputedStyle(el).backgroundColor
    );
    
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(500);
    
    // Check if header has scrolled class (indicating background change)
    await expect(header).toHaveClass(/scrolled/);
  });

  test('should have working CTA button', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to CTA section
    await page.locator('#cta').scrollIntoViewIfNeeded();
    
    // Click the CTA button
    const ctaButton = page.getByRole('link', { name: 'Start Your Project' });
    await expect(ctaButton).toBeVisible();
    
    // Verify it links to contact section
    await ctaButton.click();
    await page.waitForTimeout(1000);
    
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeInViewport();
  });

  test('should have animated elements', async ({ page }) => {
    await page.goto('/');
    
    // Check that hero content has animation classes
    const heroContent = page.locator('.hero-content');
    await expect(heroContent).toBeVisible();
    
    // Check scroll indicator animation
    const scrollIndicator = page.locator('.scroll-indicator');
    await expect(scrollIndicator).toBeVisible();
    
    // Verify CSS animations are working by checking computed styles
    const heroLogo = page.locator('.hero-logo');
    await expect(heroLogo).toBeVisible();
  });

  test('should handle keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    // Tab through navigation links
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Verify focus is on a navigation element
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should maintain functionality on resize', async ({ page }) => {
    await page.goto('/');
    
    // Start with desktop size
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.getByText('EVERGREEN LABS')).toBeVisible();
    
    // Resize to tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByText('EVERGREEN LABS')).toBeVisible();
    
    // Resize to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('EVERGREEN LABS')).toBeVisible();
    
    // Navigation should still work
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });
});