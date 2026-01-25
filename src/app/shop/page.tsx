'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShopifyProduct, FEATURED_HANDLES } from '@/lib/shopify';
import { ProductModal } from '@/components/ProductModal';

export default function ShopPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<ShopifyProduct | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Separate featured from rest, preserving FEATURED_HANDLES order
  const featuredProducts = FEATURED_HANDLES.map((handle) =>
    products.find((p) => p.handle === handle)
  ).filter(Boolean) as ShopifyProduct[];
  const otherProducts = products.filter(
    (p) => !FEATURED_HANDLES.includes(p.handle)
  );

  const openModal = (product: ShopifyProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Wear the Fight
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-xl">
            Every piece starts a conversation. Every purchase supports the
            mission.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-12">
            Featured
          </h2>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-gray-200 rounded-2xl mb-6" />
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {featuredProducts.map((product) => {
                const image = product.images.edges[0]?.node;
                const price = parseFloat(
                  product.priceRange.minVariantPrice.amount
                );

                return (
                  <article key={product.id} className="group relative">
                    <button
                      onClick={() => openModal(product)}
                      className="block w-full text-left"
                    >
                      <div className="aspect-[3/4] relative bg-gray-100 rounded-2xl overflow-hidden mb-6">
                        {image && (
                          <Image
                            src={image.url}
                            alt={image.altText || product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {product.title}
                          </h3>
                          <p className="text-gray-500 mt-1">
                            ${price.toFixed(0)}
                          </p>
                        </div>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-gray-200" />
      </div>

      {/* All Products */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-12">
            All Products
          </h2>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-xl mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {otherProducts.map((product) => {
                const image = product.images.edges[0]?.node;
                const price = parseFloat(
                  product.priceRange.minVariantPrice.amount
                );

                return (
                  <article key={product.id} className="group">
                    <button
                      onClick={() => openModal(product)}
                      className="block w-full text-left"
                    >
                      <div className="aspect-square relative bg-gray-100 rounded-xl overflow-hidden mb-4">
                        {image && (
                          <Image
                            src={image.url}
                            alt={image.altText || product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        ${price.toFixed(0)}
                      </p>
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More than merch.
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Every purchase supports Fight2Breathe—building resources, community,
            and support for chronic illness patients and their families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/story"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              Read the Story
            </Link>
            <a
              href="https://instagram.com/fight2breathe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-700 text-white font-medium rounded-full hover:border-gray-500 transition-colors"
            >
              Follow @fight2breathe
            </a>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
}
