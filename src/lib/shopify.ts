const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export const FEATURED_HANDLES = [
  'unisex-lightweight-crewneck-sweatshirt', // 65 Roses Classic Crew
  'vintage-corduroy-cap-embroidery', // Health is Hot cap
  'fight2breathe-caleighs-rose', // Fight2Breathe x Caleigh's Rose Hoodie
];

async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T> {
  const endpoint = `https://${domain}/api/2024-01/graphql.json`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();

  if (json.errors) {
    console.error('Shopify API errors:', json.errors);
    throw new Error('Failed to fetch from Shopify');
  }

  return json.data;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: {
    amount: string;
    currencyCode: string;
  };
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  productType?: string;
  tags?: string[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: ShopifyVariant;
    }>;
  };
}

const productsQuery = `
  query Products {
    products(first: 50) {
      edges {
        node {
          id
          title
          handle
          description
          productType
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 20) {
            edges {
              node {
                id
                title
                availableForSale
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function getProducts(): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{
    products: { edges: Array<{ node: ShopifyProduct }> };
  }>({
    query: productsQuery,
  });

  // Filter out gift cards
  return data.products.edges
    .map((edge) => edge.node)
    .filter(
      (product) =>
        !product.title.toLowerCase().includes('gift') &&
        !product.productType?.toLowerCase().includes('gift')
    );
}

export function getCheckoutUrl(variantId: string, quantity: number = 1): string {
  // Extract numeric ID from Shopify GID
  const numericId = variantId.replace('gid://shopify/ProductVariant/', '');
  return `https://${domain}/cart/${numericId}:${quantity}`;
}
