'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShopifyProduct, getCheckoutUrl } from '@/lib/shopify';

interface ProductModalProps {
  product: ShopifyProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  // Reset selection when product changes
  useEffect(() => {
    setSelectedVariant(null);
  }, [product?.id]);

  if (!product) return null;

  const variants = product.variants.edges.map((e) => e.node);
  const image = product.images.edges[0]?.node;
  const hasMultipleVariants = variants.length > 1;
  const defaultVariant = variants[0];

  const currentVariant = selectedVariant
    ? variants.find((v) => v.id === selectedVariant)
    : defaultVariant;

  const handleBuyNow = () => {
    const variantId = selectedVariant || defaultVariant?.id;
    if (variantId) {
      window.location.href = getCheckoutUrl(variantId);
    }
  };

  const canBuy = !hasMultipleVariants || selectedVariant;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]">
              {/* Image */}
              <div className="relative aspect-square md:w-1/2 bg-gray-100 flex-shrink-0">
                {image && (
                  <Image
                    src={image.url}
                    alt={image.altText || product.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Details */}
              <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <h2 className="text-2xl font-bold text-gray-900 pr-8">
                  {product.title}
                </h2>

                <p className="text-xl text-gray-600 mt-2">
                  ${parseFloat(currentVariant?.price.amount || '0').toFixed(0)}
                </p>

                {product.description && (
                  <p className="text-gray-500 mt-4 text-sm line-clamp-3">
                    {product.description}
                  </p>
                )}

                {/* Size Selector */}
                {hasMultipleVariants && (
                  <div className="mt-6">
                    <label className="text-sm font-medium text-gray-900 block mb-3">
                      Select Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {variants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariant(variant.id)}
                          disabled={!variant.availableForSale}
                          className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                            selectedVariant === variant.id
                              ? 'border-purple-600 bg-purple-600 text-white'
                              : variant.availableForSale
                                ? 'border-gray-300 text-gray-900 hover:border-gray-400'
                                : 'border-gray-200 text-gray-300 cursor-not-allowed line-through'
                          }`}
                        >
                          {variant.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Buy Button */}
                <div className="mt-auto pt-6">
                  <button
                    onClick={handleBuyNow}
                    disabled={!canBuy}
                    className={`w-full py-3 px-6 rounded-full font-medium transition-colors ${
                      canBuy
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {hasMultipleVariants && !selectedVariant
                      ? 'Select a Size'
                      : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
