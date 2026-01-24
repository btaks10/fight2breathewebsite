'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui';

const platforms = [
  {
    name: 'Apple Podcasts',
    href: '#',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c4.988 0 9.054 4.066 9.054 9.054 0 1.39-.403 2.706-.972 3.906-.144.376-.504.648-.936.648-.576 0-1.044-.468-1.044-1.044 0-.144.036-.324.108-.504.432-.936.684-1.944.684-3.006 0-3.78-3.06-6.84-6.84-6.84-3.78 0-6.84 3.06-6.84 6.84 0 1.062.252 2.07.684 3.006.072.18.108.36.108.504 0 .576-.468 1.044-1.044 1.044-.432 0-.792-.272-.936-.648-.569-1.2-.972-2.516-.972-3.906-.054-4.988 4.012-9.054 8.946-9.054z" />
      </svg>
    ),
  },
  {
    name: 'Spotify',
    href: '#',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02z" />
      </svg>
    ),
  },
  {
    name: 'Amazon',
    href: '#',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.44-2.186 1.44-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.683z" />
      </svg>
    ),
  },
  {
    name: 'Pocket Casts',
    href: '#',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 3.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17z" />
      </svg>
    ),
  },
];

export function PodcastSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container-content">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-section text-foreground mb-4">Our Fight to Breathe</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            The podcast where we share stories of hope, resilience, and the CF community
          </p>
          <div className="mt-6 h-1 w-20 bg-accent rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Podcast Cover */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/podcast-cover.svg"
                alt="Our Fight to Breathe Podcast"
                fill
                className="object-cover"
              />
            </div>
            {/* Play Button Overlay */}
            <motion.button
              className="absolute inset-0 flex items-center justify-center group"
              whileHover={{ scale: 1.02 }}
              aria-label="Play podcast"
            >
              <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <svg
                  className="w-8 h-8 text-primary ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.button>
          </motion.div>

          {/* Podcast Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-subsection text-foreground mb-4">
              Latest Episode
            </h3>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8">
              <span className="text-label text-muted-foreground">Episode 24</span>
              <h4 className="text-subsection text-foreground mt-2 mb-3">
                The Gift of Life: Stories from Transplant Recipients
              </h4>
              <p className="text-body text-muted-foreground">
                In this emotional episode, we hear from fellow transplant recipients
                about their journeys, the gratitude they feel, and how they honor
                their donors every day.
              </p>
            </div>

            <h4 className="text-label text-foreground uppercase tracking-wider mb-4">
              Listen on your favorite platform
            </h4>
            <div className="flex flex-wrap gap-4 mb-10">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg shadow-md text-muted-foreground hover:text-primary hover:shadow-lg transition-all"
                  aria-label={platform.name}
                >
                  {platform.icon}
                  <span className="text-label">{platform.name}</span>
                </a>
              ))}
            </div>

            <Button href="/podcast" variant="dark">
              See All Episodes
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
