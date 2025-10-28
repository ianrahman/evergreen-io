import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header', () => {
  it('renders the company wordmark', () => {
    render(Header);
    expect(screen.getByText('EVERGREEN LABS')).toBeTruthy();
  });

  it('exposes primary navigation links', () => {
    render(Header);
    const items = ['Welcome', 'Services', 'Work', 'Resources', 'Contact'];
    items.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeTruthy();
    });
  });

  it('displays the evergreen logo image', () => {
    render(Header);
    const logo = screen.getByRole('img', { name: /evergreen labs logo/i });
    expect(logo.getAttribute('src')).toContain('tree-64.png');
    expect(logo.getAttribute('srcset')).toContain('tree-128.png');
  });
});
