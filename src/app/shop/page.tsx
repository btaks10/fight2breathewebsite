'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getProducts, getCheckoutUrl, type ShopifyProduct } from '@/lib/shopify';
import { Button } from '@/components/ui/Button';

function ProductCard({ product, index }: { product: ShopifyProduct; index: number }) {
  const image = product.images.edges[0]?.node;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const variantId = product.variants.edges[0]?.node.id;

  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText || product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-purple-600">
            ${price.toFixed(2)}
          </span>
          {variantId && (
            <a
              href={getCheckoutUrl(variantId)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              Buy Now
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-square bg-gray-200" />
      <div className="p-6 space-y-4">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-16" />
          <div className="h-10 bg-gray-200 rounded w-20" />
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts(20);
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Unable to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <header className="bg-purple-900 pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Shop Fight2Breathe
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Every purchase supports CF research and helps spread awareness.
              Wear your fight.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Impact Banner */}
      <section className="py-6 bg-purple-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="font-medium text-gray-900">100% of profits support CF community</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span className="font-medium text-gray-900">Free shipping on orders $50+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {error ? (
            <div className="text-center py-16">
              <p className="text-gray-600 mb-6">{error}</p>
              <Button
                href="https://www.fight2breathe.org/collections/all"
                variant="dark"
                external
              >
                Visit External Shop
              </Button>
            </div>
          ) : loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 mb-6">No products available right now.</p>
              <Button
                href="https://www.fight2breathe.org/collections/all"
                variant="dark"
                external
              >
                Visit External Shop
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Shop Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Your Purchase Matters
            </h2>
            <p className="text-gray-600 text-lg">
              More than merchandise — it&apos;s a movement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💜',
                title: 'Funds Research',
                description: 'A portion of every sale goes directly to CF research organizations working on breakthrough treatments.',
              },
              {
                icon: '👥',
                title: 'Supports Families',
                description: 'We provide resources, support groups, and assistance to CF families navigating this journey.',
              },
              {
                icon: '📢',
                title: 'Spreads Awareness',
                description: 'Every item you wear starts conversations about CF and organ donation, spreading vital awareness.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-8 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Want to Support in Other Ways?
          </h2>
          <p className="text-gray-600 mb-8">
            Follow along on Instagram for the real stories, or reach out to collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://www.instagram.com/fight2breathe"
              variant="primary"
              external
            >
              Follow @fight2breathe
            </Button>
            <Button href="/about" variant="dark">
              Work With Me
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
