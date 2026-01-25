import { getProducts } from '@/lib/shopify';
import { NextResponse } from 'next/server';

export async function GET() {
  console.log('API route called');
  console.log('SHOPIFY_DOMAIN:', process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN);
  console.log('TOKEN exists:', !!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN);

  try {
    // Check if environment variables exist
    if (!process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || !process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
      console.error('Missing Shopify environment variables');
      return NextResponse.json([], { status: 200 });
    }

    const products = await getProducts();
    console.log('Products fetched:', products.length);
    return NextResponse.json(products || []);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json([], { status: 200 });
  }
}
