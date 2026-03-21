import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the shopify module
vi.mock('@/lib/shopify', () => ({
  getProducts: vi.fn(),
}));

// Mock next/server
vi.mock('next/server', () => ({
  NextResponse: {
    json: vi.fn((body: unknown, init?: { status?: number }) => ({
      body,
      status: init?.status ?? 200,
      json: () => Promise.resolve(body),
    })),
  },
}));

describe('GET /api/products', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.unstubAllEnvs();
  });

  it('returns empty array when env vars are missing', async () => {
    vi.stubEnv('NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN', '');
    vi.stubEnv('NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN', '');

    const { GET } = await import('../route');
    const response = await GET();
    expect(response.body).toEqual([]);
  });

  it('returns products when env vars are set', async () => {
    vi.stubEnv('NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN', 'test.myshopify.com');
    vi.stubEnv('NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN', 'token');

    const { getProducts } = await import('@/lib/shopify');
    vi.mocked(getProducts).mockResolvedValue([
      {
        id: '1',
        title: 'Product',
        handle: 'product',
        description: '',
        priceRange: { minVariantPrice: { amount: '10', currencyCode: 'USD' } },
        images: { edges: [] },
        variants: { edges: [] },
      },
    ]);

    const { GET } = await import('../route');
    const response = await GET();
    expect(response.body).toHaveLength(1);
  });

  it('returns empty array on error', async () => {
    vi.stubEnv('NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN', 'test.myshopify.com');
    vi.stubEnv('NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN', 'token');

    const { getProducts } = await import('@/lib/shopify');
    vi.mocked(getProducts).mockRejectedValue(new Error('API Error'));

    const { GET } = await import('../route');
    const response = await GET();
    expect(response.body).toEqual([]);
  });
});
