'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui';

const instagramPosts = [
  { id: 1, image: '/images/instagram-1.svg', href: 'https://www.instagram.com/fight2breathe' },
  { id: 2, image: '/images/instagram-2.svg', href: 'https://www.instagram.com/fight2breathe' },
  { id: 3, image: '/images/instagram-3.svg', href: 'https://www.instagram.com/fight2breathe' },
  { id: 4, image: '/images/instagram-4.svg', href: 'https://www.instagram.com/fight2breathe' },
  { id: 5, image: '/images/instagram-5.svg', href: 'https://www.instagram.com/fight2breathe' },
  { id: 6, image: '/images/instagram-6.svg', href: 'https://www.instagram.com/fight2breathe' },
];

export function InstagramSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-section text-foreground mb-4">Follow the Journey</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community on Instagram for daily updates, behind-the-scenes moments, and inspiration
          </p>
          <div className="mt-6 h-1 w-20 bg-accent rounded-full mx-auto" />
        </div>

        {/* Instagram Grid - let images be the visual interest */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            href="https://www.instagram.com/fight2breathe"
            external
            variant="dark"
            className="inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
            </svg>
            @fight2breathe
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
