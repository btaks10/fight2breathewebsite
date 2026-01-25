import { getProducts } from '@/lib/shopify';
import { NextResponse } from 'next/server';

export async function GET() {
  // Check if env vars are configured
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !token) {
    console.error('Shopify env vars missing:', { domain: !!domain, token: !!token });
    return NextResponse.json(
      { error: 'Shopify configuration missing' },
      { status: 500 }
    );
  }

  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
