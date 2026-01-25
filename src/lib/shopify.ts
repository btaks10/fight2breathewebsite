const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

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

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
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
      node: {
        id: string;
      };
    }>;
  };
}

interface ProductsResponse {
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}

const productsQuery = `
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export async function getProducts(first: number = 20): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<ProductsResponse>({
    query: productsQuery,
    variables: { first },
  });

  return data.products.edges.map((edge) => edge.node);
}

export function getCheckoutUrl(variantId: string): string {
  const cleanId = variantId.replace('gid://shopify/ProductVariant/', '');
  return `https://${domain}/cart/${cleanId}:1`;
}
