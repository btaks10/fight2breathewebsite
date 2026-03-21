import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('shopify', () => {
  beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN', 'test-store.myshopify.com');
    vi.stubEnv('NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN', 'test-token');
    vi.unstubAllGlobals();
  });

  describe('FEATURED_HANDLES', () => {
    it('exports an array of 3 product handles', async () => {
      const { FEATURED_HANDLES } = await import('../shopify');
      expect(FEATURED_HANDLES).toHaveLength(3);
      expect(FEATURED_HANDLES).toContain('unisex-lightweight-crewneck-sweatshirt');
      expect(FEATURED_HANDLES).toContain('vintage-corduroy-cap-embroidery');
      expect(FEATURED_HANDLES).toContain('fight2breathe-caleighs-rose');
    });
  });

  describe('getCheckoutUrl', () => {
    it('strips GID prefix and returns cart URL', async () => {
      const { getCheckoutUrl } = await import('../shopify');
      const url = getCheckoutUrl('gid://shopify/ProductVariant/12345');
      expect(url).toBe('https://test-store.myshopify.com/cart/12345:1');
    });

    it('uses custom quantity', async () => {
      const { getCheckoutUrl } = await import('../shopify');
      const url = getCheckoutUrl('gid://shopify/ProductVariant/99', 3);
      expect(url).toBe('https://test-store.myshopify.com/cart/99:3');
    });

    it('handles numeric ID without prefix', async () => {
      const { getCheckoutUrl } = await import('../shopify');
      const url = getCheckoutUrl('12345');
      expect(url).toBe('https://test-store.myshopify.com/cart/12345:1');
    });
  });

  describe('getProducts', () => {
    it('returns products from Shopify API', async () => {
      const mockProducts = [
        {
          id: '1',
          title: 'Test Product',
          handle: 'test-product',
          description: 'A test product',
          productType: 'Apparel',
          tags: [],
          priceRange: { minVariantPrice: { amount: '25.00', currencyCode: 'USD' } },
          images: { edges: [] },
          variants: { edges: [] },
        },
      ];

      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          json: () =>
            Promise.resolve({
              data: { products: { edges: mockProducts.map((p) => ({ node: p })) } },
            }),
        })
      );

      const { getProducts } = await import('../shopify');
      const products = await getProducts();
      expect(products).toHaveLength(1);
      expect(products[0].title).toBe('Test Product');
    });

    it('filters out gift cards', async () => {
      const mockProducts = [
        {
          id: '1',
          title: 'Normal Product',
          handle: 'normal',
          description: '',
          priceRange: { minVariantPrice: { amount: '25.00', currencyCode: 'USD' } },
          images: { edges: [] },
          variants: { edges: [] },
        },
        {
          id: '2',
          title: 'Gift Card',
          handle: 'gift-card',
          description: '',
          productType: 'Gift Cards',
          priceRange: { minVariantPrice: { amount: '50.00', currencyCode: 'USD' } },
          images: { edges: [] },
          variants: { edges: [] },
        },
      ];

      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          json: () =>
            Promise.resolve({
              data: { products: { edges: mockProducts.map((p) => ({ node: p })) } },
            }),
        })
      );

      const { getProducts } = await import('../shopify');
      const products = await getProducts();
      expect(products).toHaveLength(1);
      expect(products[0].title).toBe('Normal Product');
    });

    it('returns empty array on error', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockRejectedValue(new Error('Network error'))
      );

      const { getProducts } = await import('../shopify');
      const products = await getProducts();
      expect(products).toEqual([]);
    });

    it('returns empty array when no data', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          json: () => Promise.resolve({ data: { products: null } }),
        })
      );

      const { getProducts } = await import('../shopify');
      const products = await getProducts();
      expect(products).toEqual([]);
    });
  });
});
