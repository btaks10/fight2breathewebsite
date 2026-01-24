'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container, SectionHeading, Button } from '@/components/ui';

const products = [
  {
    id: 1,
    name: 'Fight2Breathe Classic Tee',
    price: '$28.00',
    image: '/images/product-1.svg',
    href: 'https://www.fight2breathe.org/collections/all',
    category: 'Apparel',
  },
  {
    id: 2,
    name: 'Purple Warrior Hoodie',
    price: '$48.00',
    image: '/images/product-2.svg',
    href: 'https://www.fight2breathe.org/collections/all',
    category: 'Apparel',
  },
  {
    id: 3,
    name: 'Every Breath Counts Bracelet',
    price: '$12.00',
    image: '/images/product-3.svg',
    href: 'https://www.fight2breathe.org/collections/all',
    category: 'Accessories',
  },
  {
    id: 4,
    name: 'CF Awareness Sticker Pack',
    price: '$8.00',
    image: '/images/product-4.svg',
    href: 'https://www.fight2breathe.org/collections/all',
    category: 'Accessories',
  },
  {
    id: 5,
    name: 'Warrior Tank Top',
    price: '$24.00',
    image: '/images/product-5.svg',
    href: 'https://www.fight2breathe.org/collections/all',
    category: 'Apparel',
  },
  {
    id: 6,
    name: 'Fight2Breathe Mug',
    price: '$15.00',
    image: '/images/product-6.svg',
    href: 'https://www.fight2breathe.org/collections/all',
    category: 'Accessories',
  },
  {
    id: 7,
    name: 'Purple Ribbon Pin',
    price: '$6.00',
    image: '/images/product-7.svg',
    href: 'https://www.fight2breathe.org/collections/all',
    category: 'Accessories',
  },
  {
    id: 8,
    name: 'CF Warrior Long Sleeve',
    price: '$32.00',
    image: '/images/product-8.svg',
    href: 'https://www.fight2breathe.org/collections/all',
    category: 'Apparel',
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <Container>
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-6">
              Support the Mission
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Every purchase helps fund CF research, support programs, and spreads
              awareness. Wear your fight with pride.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Impact Banner */}
      <section className="py-8 bg-accent">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="font-semibold text-foreground">100% of profits support CF community</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span className="font-semibold text-foreground">Free shipping on orders $50+</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-warm-white">
        <Container>
          <SectionHeading
            title="Shop All Products"
            subtitle="High-quality merchandise that makes a difference"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-primary font-bold mt-2">{product.price}</p>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6">
              View our complete collection on our Shopify store
            </p>
            <Button
              href="https://www.fight2breathe.org/collections/all"
              external
              variant="primary"
              size="lg"
            >
              Visit Full Shop
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Why Shop With Us */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeading
            title="Why Your Purchase Matters"
            subtitle="More than merchandise — its a movement"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Funds Research',
                description:
                  'A portion of every sale goes directly to CF research organizations working on breakthrough treatments.',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Supports Families',
                description:
                  'We provide resources, support groups, and assistance to CF families navigating this journey.',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                ),
                title: 'Spreads Awareness',
                description:
                  'Every item you wear starts conversations about CF and organ donation, spreading vital awareness.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-8 bg-warm-white rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold  text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
