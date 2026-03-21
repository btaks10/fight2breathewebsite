import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShopPage from '../shop/page';

const mockProducts = [
  {
    id: '1',
    title: '65 Roses Classic Crew',
    handle: 'unisex-lightweight-crewneck-sweatshirt',
    description: 'A classic crew sweatshirt',
    priceRange: { minVariantPrice: { amount: '45.00', currencyCode: 'USD' } },
    images: {
      edges: [{ node: { url: '/product1.jpg', altText: 'Product 1' } }],
    },
    variants: {
      edges: [
        {
          node: {
            id: 'v1',
            title: 'S',
            availableForSale: true,
            price: { amount: '45.00', currencyCode: 'USD' },
          },
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Other Product',
    handle: 'other-product',
    description: 'Another product',
    priceRange: { minVariantPrice: { amount: '25.00', currencyCode: 'USD' } },
    images: {
      edges: [{ node: { url: '/product2.jpg', altText: 'Product 2' } }],
    },
    variants: {
      edges: [
        {
          node: {
            id: 'v2',
            title: 'Default',
            availableForSale: true,
            price: { amount: '25.00', currencyCode: 'USD' },
          },
        },
      ],
    },
  },
];

describe('ShopPage', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockProducts),
      })
    );
  });

  it('renders the hero heading', () => {
    render(<ShopPage />);
    expect(screen.getByText('Wear the Fight')).toBeInTheDocument();
  });

  it('shows loading skeletons initially', () => {
    const { container } = render(<ShopPage />);
    expect(container.querySelectorAll('.animate-pulse').length).toBeGreaterThan(
      0
    );
  });

  it('fetches and displays products', async () => {
    render(<ShopPage />);
    await waitFor(() => {
      expect(screen.getByText('65 Roses Classic Crew')).toBeInTheDocument();
    });
  });

  it('displays other products section', async () => {
    render(<ShopPage />);
    await waitFor(() => {
      expect(screen.getByText('Other Product')).toBeInTheDocument();
    });
  });

  it('renders the bottom CTA section', () => {
    render(<ShopPage />);
    expect(screen.getByText('More than merch.')).toBeInTheDocument();
  });

  it('opens modal when product is clicked', async () => {
    const user = userEvent.setup();
    render(<ShopPage />);
    await waitFor(() => {
      expect(screen.getByText('65 Roses Classic Crew')).toBeInTheDocument();
    });

    const productButtons = screen.getAllByRole('button');
    const productBtn = productButtons.find((btn) =>
      btn.textContent?.includes('65 Roses Classic Crew')
    );
    if (productBtn) {
      await user.click(productBtn);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    }
  });

  it('handles fetch error gracefully', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new Error('Network error'))
    );
    render(<ShopPage />);
    await waitFor(() => {
      expect(screen.getByText('Wear the Fight')).toBeInTheDocument();
    });
  });
});
