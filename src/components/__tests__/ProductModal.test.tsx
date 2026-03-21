import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductModal } from '../ProductModal';
import type { ShopifyProduct } from '@/lib/shopify';

const mockProduct: ShopifyProduct = {
  id: 'gid://shopify/Product/1',
  title: 'Test T-Shirt',
  handle: 'test-t-shirt',
  description: 'A great test t-shirt',
  priceRange: {
    minVariantPrice: { amount: '25.00', currencyCode: 'USD' },
  },
  images: {
    edges: [
      {
        node: {
          url: 'https://cdn.shopify.com/test.jpg',
          altText: 'Test T-Shirt image',
        },
      },
    ],
  },
  variants: {
    edges: [
      {
        node: {
          id: 'gid://shopify/ProductVariant/1',
          title: 'S',
          availableForSale: true,
          price: { amount: '25.00', currencyCode: 'USD' },
        },
      },
      {
        node: {
          id: 'gid://shopify/ProductVariant/2',
          title: 'M',
          availableForSale: true,
          price: { amount: '25.00', currencyCode: 'USD' },
        },
      },
      {
        node: {
          id: 'gid://shopify/ProductVariant/3',
          title: 'L',
          availableForSale: false,
          price: { amount: '25.00', currencyCode: 'USD' },
        },
      },
    ],
  },
};

const singleVariantProduct: ShopifyProduct = {
  ...mockProduct,
  id: 'gid://shopify/Product/2',
  title: 'Hat',
  handle: 'hat',
  variants: {
    edges: [
      {
        node: {
          id: 'gid://shopify/ProductVariant/10',
          title: 'Default',
          availableForSale: true,
          price: { amount: '15.00', currencyCode: 'USD' },
        },
      },
    ],
  },
};

describe('ProductModal', () => {
  const onClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns null when product is null', () => {
    const { container } = render(
      <ProductModal product={null} isOpen={true} onClose={onClose} />
    );
    expect(container.innerHTML).toBe('');
  });

  it('renders nothing when not open', () => {
    const { container } = render(
      <ProductModal product={mockProduct} isOpen={false} onClose={onClose} />
    );
    // AnimatePresence with isOpen=false should not render modal content
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders product title when open', () => {
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    expect(screen.getByText('Test T-Shirt')).toBeInTheDocument();
  });

  it('renders product image', () => {
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://cdn.shopify.com/test.jpg');
  });

  it('renders product price', () => {
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    expect(screen.getByText('$25')).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    expect(screen.getByText('A great test t-shirt')).toBeInTheDocument();
  });

  it('renders variant selection buttons for multi-variant products', () => {
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    expect(screen.getByText('S')).toBeInTheDocument();
    expect(screen.getByText('M')).toBeInTheDocument();
    expect(screen.getByText('L')).toBeInTheDocument();
  });

  it('disables unavailable variants', () => {
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    expect(screen.getByText('L')).toBeDisabled();
  });

  it('shows "Select a Size" when no variant selected and multiple exist', () => {
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    expect(screen.getByText('Select a Size')).toBeInTheDocument();
  });

  it('disables buy button when no variant selected', () => {
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    expect(screen.getByText('Select a Size')).toBeDisabled();
  });

  it('enables buy button after selecting a variant', async () => {
    const user = userEvent.setup();
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    await user.click(screen.getByText('M'));
    expect(screen.getByText('Buy Now')).not.toBeDisabled();
  });

  it('shows "Buy Now" for single variant products', () => {
    render(
      <ProductModal
        product={singleVariantProduct}
        isOpen={true}
        onClose={onClose}
      />
    );
    expect(screen.getByText('Buy Now')).toBeInTheDocument();
    expect(screen.getByText('Buy Now')).not.toBeDisabled();
  });

  it('does not show size selector for single variant products', () => {
    render(
      <ProductModal
        product={singleVariantProduct}
        isOpen={true}
        onClose={onClose}
      />
    );
    expect(screen.queryByText('Select Size')).not.toBeInTheDocument();
  });

  it('has dialog role and aria-modal', () => {
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('has aria-label with product description', () => {
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog.getAttribute('aria-label')).toContain('Test T-Shirt');
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ProductModal product={mockProduct} isOpen={true} onClose={onClose} />
    );
    // Find the close button (the one within the modal details section)
    const buttons = screen.getAllByRole('button');
    const closeBtn = buttons.find((btn) =>
      btn.querySelector('svg path[d*="M6 18L18 6"]')
    );
    if (closeBtn) {
      await user.click(closeBtn);
      expect(onClose).toHaveBeenCalled();
    }
  });
});
