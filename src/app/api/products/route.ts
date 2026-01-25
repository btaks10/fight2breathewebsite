import { getProducts } from '@/lib/shopify';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if environment variables exist
    if (!process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || !process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
      console.error('Missing Shopify environment variables');
      return NextResponse.json([], { status: 200 });
    }

    const products = await getProducts();
    return NextResponse.json(products || []);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json([], { status: 200 }); // Return empty array instead of 500
  }
}
