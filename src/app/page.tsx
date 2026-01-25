'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { JourneyTimeline } from '@/components/sections';

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
            Breathing is a full-time job. I&apos;ve been doing it for 34 years.
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
              I&apos;m Caleigh
            </h2>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                I was diagnosed with cystic fibrosis at birth. The year I was born, the median life expectancy was 18.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                I&apos;ve spent more time in hospitals than I can count. I&apos;ve had two double-lung transplants. I&apos;ve been told I wouldn&apos;t survive—five times.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                I&apos;m still here. And I started Fight2Breathe because no one should have to figure this out alone.
              </p>
            </div>

            <div className="mt-10">
              <Button href="/story" variant="dark" size="lg">
                Read My Full Story
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
            &ldquo;I have been fighting my whole life and I&apos;m not done yet.&rdquo;
          </p>
          <footer className="mt-8 text-purple-300 text-lg">— Caleigh</footer>
        </motion.blockquote>
      </section>

      {/* CHAPTER 3: The Journey - Sticky Scroll Timeline */}
      <JourneyTimeline />

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
              I started this podcast because the conversations I needed didn&apos;t exist. What it&apos;s actually like to wait for lungs. How to talk to your family when you&apos;re scared. The stuff no one tells you.
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

            {/* Platform Icons */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://podcasts.apple.com/podcast/our-fight-to-breathe-a-cystic-fibrosis-podcast/id1820255519"
                target="_blank"
                rel="noopener noreferrer"
                title="Apple Podcasts"
              >
                <Image src="/images/apple.jpeg" alt="Apple Podcasts" width={32} height={32} className="rounded-full w-8 h-8 object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              </a>
              <a
                href="https://open.spotify.com/show/3gDKmuPjRsLctJEmoJKjgO"
                target="_blank"
                rel="noopener noreferrer"
                title="Spotify"
              >
                <Image src="/images/spotify.jpeg" alt="Spotify" width={32} height={32} className="rounded-full w-8 h-8 object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              </a>
              <a
                href="https://music.amazon.com/podcasts/b38d9c40-a0d5-4449-8bb1-7c9ab5809db4/our-fight-to-breathe---a-cystic-fibrosis-podcast"
                target="_blank"
                rel="noopener noreferrer"
                title="Amazon Music"
              >
                <Image src="/images/amazon.jpeg" alt="Amazon Music" width={32} height={32} className="rounded-full w-8 h-8 object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              </a>
              <a
                href="https://pca.st/itunes/1820255519"
                target="_blank"
                rel="noopener noreferrer"
                title="Pocket Casts"
              >
                <Image src="/images/pocketcast.jpeg" alt="Pocket Casts" width={32} height={32} className="rounded-full w-8 h-8 object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              </a>
              <a
                href="https://podcastaddict.com/podcast/our-fight-to-breathe-a-cystic-fibrosis-podcast/5211464"
                target="_blank"
                rel="noopener noreferrer"
                title="Podcast Addict"
              >
                <Image src="/images/podcastaddict.jpeg" alt="Podcast Addict" width={32} height={32} className="rounded-full w-8 h-8 object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              </a>
              <a
                href="https://www.deezer.com/show/1001960731"
                target="_blank"
                rel="noopener noreferrer"
                title="Deezer"
              >
                <Image src="/images/deezer.jpeg" alt="Deezer" width={32} height={32} className="rounded-full w-8 h-8 object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              </a>
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
              <h3 className="text-2xl font-bold mb-4">Wear It</h3>
              <p className="text-gray-600 mb-6">
                Every shirt is a conversation starter. And sometimes that conversation saves someone.
              </p>
              <Button href="/shop" variant="dark">
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
              <h3 className="text-2xl font-bold text-white mb-4">Stay Close</h3>
              <p className="text-purple-200 mb-6">
                This is where I share the real stuff. The good days and the hard ones.
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
