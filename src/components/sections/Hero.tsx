'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent" />

      {/* Subtle decorative blob - atmospheric, not attention-seeking */}
      <div
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-rose-400/5 rounded-full blur-3xl z-0"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container-content text-center py-20">
        <motion.div style={{ y, opacity }}>
          <motion.h1
            className="text-hero text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fighting for <span className="text-rose-300">Every Breath</span>
          </motion.h1>

          <motion.p
            className="text-body-lg text-white/90 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet Caleigh — CF warrior, transplant recipient, and fierce advocate
            for those who know the value of every breath. Together, we fight.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button href="/about" size="lg" variant="primary">
              Meet Caleigh
            </Button>
            <Button href="/podcast" size="lg" variant="secondary">
              Listen to the Podcast
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - more spacing from content */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-label mb-2">Scroll to explore</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
