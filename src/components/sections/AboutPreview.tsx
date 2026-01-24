'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button, Container, SectionHeading } from '../ui';

export function AboutPreview() {
  return (
    <section className="py-24 bg-warm-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            {/* Floating Accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionHeading
              title="Meet Caleigh"
              subtitle="A story of resilience, hope, and the relentless fight for life"
              centered={false}
            />

            <div className="space-y-4 text-muted-foreground">
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
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button href="/about" variant="primary">
                Read Her Full Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
