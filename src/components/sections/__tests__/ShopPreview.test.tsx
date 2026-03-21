import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ShopPreview } from '../ShopPreview';

describe('ShopPreview', () => {
  it('renders the section heading', () => {
    render(<ShopPreview />);
    expect(screen.getByText('Support the Mission')).toBeInTheDocument();
  });

  it('renders product names', () => {
    render(<ShopPreview />);
    expect(screen.getByText('Fight2Breathe Classic Tee')).toBeInTheDocument();
    expect(screen.getByText('Purple Warrior Hoodie')).toBeInTheDocument();
    expect(screen.getByText('Every Breath Counts Bracelet')).toBeInTheDocument();
    expect(screen.getByText('CF Awareness Sticker Pack')).toBeInTheDocument();
  });

  it('renders product prices', () => {
    render(<ShopPreview />);
    expect(screen.getByText('$28.00')).toBeInTheDocument();
    expect(screen.getByText('$48.00')).toBeInTheDocument();
    expect(screen.getByText('$12.00')).toBeInTheDocument();
    expect(screen.getByText('$8.00')).toBeInTheDocument();
  });

  it('renders Visit Full Shop button', () => {
    render(<ShopPreview />);
    expect(screen.getByText('Visit Full Shop')).toBeInTheDocument();
  });

  it('renders product links as external', () => {
    render(<ShopPreview />);
    const links = screen.getAllByRole('link');
    const productLinks = links.filter((link) =>
      link.getAttribute('href')?.includes('fight2breathe.org')
    );
    expect(productLinks.length).toBeGreaterThan(0);
    productLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });
});
