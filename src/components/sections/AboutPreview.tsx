'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui';

export function AboutPreview() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-content">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-placeholder.svg"
                alt="Caleigh - Fight2Breathe Founder"
                fill
                className="object-cover"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-white/30 rounded-xl pointer-events-none" />
            </div>
            {/* Subtle floating accent - toned down */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-xl z-0"
              aria-hidden="true"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-section text-foreground mb-4">Meet Caleigh</h2>
            <p className="text-subsection text-muted-foreground mb-8">
              A story of resilience, hope, and the relentless fight for life
            </p>
            <div className="h-1 w-16 bg-accent rounded-full mb-8" />

            <div className="space-y-4 text-body text-muted-foreground max-w-xl">
              <p>
                Living with Cystic Fibrosis since birth, Caleigh has faced challenges
                that most people can&apos;t imagine. From countless hospital stays to
                a life-changing double lung transplant, her journey is one of
                extraordinary courage.
              </p>
              <p>
                Now, she&apos;s turned her experience into a mission: advocating for
                the CF community, raising awareness about organ donation, and proving
                that every breath is worth fighting for.
              </p>
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button href="/about" variant="dark">
                Read Her Full Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
