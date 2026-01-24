'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';

// Timeline data
const journeyItems = [
  {
    year: '1990',
    title: 'The Beginning',
    description: 'Born with Cystic Fibrosis. Diagnosed at birth. The fight began on day one.',
    image: '/images/journey-1.jpg',
  },
  {
    year: '2005',
    title: 'The Struggle',
    description: 'Hospital became a second home. But giving up was never an option.',
    image: '/images/journey-2.jpg',
  },
  {
    year: '2013',
    title: 'The Wait',
    description: 'Listed for transplant. Every day became a prayer for a second chance.',
    gradient: 'from-purple-600 to-purple-800',
  },
  {
    year: '2015',
    title: 'New Lungs',
    description: "First double-lung transplant. A stranger's gift of life.",
    image: '/images/journey-3.jpg',
  },
  {
    year: '2017',
    title: 'Love',
    description: 'Married. Proof that life continues, beautifully.',
    gradient: 'from-rose-400 to-rose-600',
  },
  {
    year: '2018',
    title: 'Again',
    description: 'Second transplant. Some fights you have to win twice.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    year: 'Now',
    title: 'The Mission',
    description: 'Advocate. Podcaster. Voice for the voiceless. The fight continues—for everyone.',
    image: '/images/journey-4.jpg',
  },
];

export default function HomePage() {
  return (
    <>
      {/* CHAPTER 1: First Breath (Hero) */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Full-bleed background image */}
        <Image
          src="/images/caleigh-hero.jpg"
          alt="Caleigh"
          fill
          className="object-cover"
          priority
        />

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content - positioned at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-white/80 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            Fight2Breathe
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Every breath is a battle I choose to fight.
          </h1>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6"
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
      </section>

      {/* CHAPTER 2: Meet Her */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Image - left side, bleeds to edge */}
        <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto lg:min-h-screen">
          <Image
            src="/images/caleigh-portrait.jpg"
            alt="Caleigh"
            fill
            className="object-cover"
          />
        </div>

        {/* Content - right side */}
        <div className="w-full lg:w-1/2 flex items-center p-8 md:p-16 lg:p-24 bg-white">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Meet Caleigh
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>Born with Cystic Fibrosis.</p>
              <p>Three decades of hospitals, treatments, and uncertainty.</p>
              <p>Two double-lung transplants.</p>
              <p>One mission: to fight for everyone who knows what it means to struggle for air.</p>
            </div>

            <div className="mt-10">
              <Button href="/about" variant="dark" size="lg">
                Read Her Full Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-24 md:py-32 lg:py-40 px-8 bg-purple-900">
        <motion.blockquote
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed">
            &ldquo;CF doesn&apos;t define me—it fuels me. Every challenge I&apos;ve faced has become a stepping stone to help others walking this same path.&rdquo;
          </p>
          <footer className="mt-8 text-purple-300 text-lg">— Caleigh</footer>
        </motion.blockquote>
      </section>

      {/* CHAPTER 3: The Journey (Timeline) */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A life measured not in years, but in fights won.
            </p>
          </motion.div>
        </div>

        {/* Timeline - horizontal scrolling on mobile, grid on desktop */}
        <div className="overflow-x-auto pb-8 scrollbar-hide">
          <div className="flex lg:grid lg:grid-cols-4 gap-6 px-8 min-w-max lg:min-w-0 max-w-7xl mx-auto">
            {journeyItems.map((item, index) => (
              <motion.div
                key={item.year}
                className="w-72 lg:w-auto flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 ${
                    item.gradient ? `bg-gradient-to-br ${item.gradient}` : ''
                  }`}
                >
                  {item.image ? (
                    <>
                      <Image
                        src={item.image}
                        alt={item.year}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-8xl font-bold">
                        {item.year}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl font-bold text-white">{item.year}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button href="/about" variant="secondary">
            See Full Timeline
          </Button>
        </motion.div>
      </section>

      {/* CHAPTER 4: Her Voice (Podcast) */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/podcast-moment.jpg"
            alt="Recording the podcast"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-purple-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 py-24">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-purple-300 text-sm font-medium tracking-widest uppercase mb-4">
              The Podcast
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Fight to Breathe
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Real stories from the CF community. The struggles. The victories.
              The moments that remind us why every breath matters.
            </p>

            {/* Latest episode teaser */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-purple-300 text-sm mb-2">Latest Episode</p>
              <h3 className="text-xl font-semibold text-white mb-2">
                The Gift of Life: Stories from Transplant Recipients
              </h3>
              <p className="text-white/70">
                Fellow transplant recipients share their journeys, their
                gratitude, and how they honor their donors every day.
              </p>
            </div>

            {/* Platform links */}
            <div className="flex flex-wrap gap-4">
              <Button
                href="https://podcasts.apple.com/podcast/our-fight-to-breathe-a-cystic-fibrosis-podcast/id1820255519"
                variant="primary"
                external
              >
                Listen on Apple Podcasts
              </Button>
              <Button
                href="https://open.spotify.com/show/3gDKmuPjRsLctJEmoJKjgO"
                variant="secondary"
                external
              >
                Listen on Spotify
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 5: Join the Fight */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Fight</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every purchase supports CF research. Every follow spreads awareness.
              Every action matters.
            </p>
          </motion.div>

          {/* Two options: Shop and Connect */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Shop */}
            <motion.div
              className="bg-gray-50 rounded-3xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Wear the Mission</h3>
              <p className="text-gray-600 mb-6">
                Every item supports the CF community.
              </p>
              <Button href="https://www.fight2breathe.org/collections/all" variant="dark" external>
                Visit Shop
              </Button>
            </motion.div>

            {/* Connect */}
            <motion.div
              className="bg-purple-900 rounded-3xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Stay Connected</h3>
              <p className="text-purple-200 mb-6">
                Follow the journey on Instagram.
              </p>
              <Button href="https://www.instagram.com/fight2breathe" variant="primary" external>
                @fight2breathe
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
