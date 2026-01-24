'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button, Container, SectionHeading } from '../ui';

// Placeholder products - link to real Shopify store
const products = [
  {
    id: 1,
    name: 'Fight2Breathe Classic Tee',
    price: '$28.00',
    image: '/images/product-1.svg',
    href: 'https://www.fight2breathe.org/collections/all',
  },
  {
    id: 2,
    name: 'Purple Warrior Hoodie',
    price: '$48.00',
    image: '/images/product-2.svg',
    href: 'https://www.fight2breathe.org/collections/all',
  },
  {
    id: 3,
    name: 'Every Breath Counts Bracelet',
    price: '$12.00',
    image: '/images/product-3.svg',
    href: 'https://www.fight2breathe.org/collections/all',
  },
  {
    id: 4,
    name: 'CF Awareness Sticker Pack',
    price: '$8.00',
    image: '/images/product-4.svg',
    href: 'https://www.fight2breathe.org/collections/all',
  },
];

export function ShopPreview() {
  return (
    <section className="py-24 bg-warm-white">
      <Container>
        <SectionHeading
          title="Support the Mission"
          subtitle="Every purchase helps fund CF research and support programs for the community"
        />

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-accent-dark font-bold mt-1">{product.price}</p>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Shop CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            href="https://www.fight2breathe.org/collections/all"
            external
            variant="primary"
          >
            Visit Full Shop
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
