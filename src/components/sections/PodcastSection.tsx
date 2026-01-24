'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button, Container, SectionHeading } from '../ui';

const platforms = [
  {
    name: 'Apple Podcasts',
    href: '#',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c4.988 0 9.054 4.066 9.054 9.054 0 1.39-.403 2.706-.972 3.906-.144.376-.504.648-.936.648-.576 0-1.044-.468-1.044-1.044 0-.144.036-.324.108-.504.432-.936.684-1.944.684-3.006 0-3.78-3.06-6.84-6.84-6.84-3.78 0-6.84 3.06-6.84 6.84 0 1.062.252 2.07.684 3.006.072.18.108.36.108.504 0 .576-.468 1.044-1.044 1.044-.432 0-.792-.272-.936-.648-.569-1.2-.972-2.516-.972-3.906-.054-4.988 4.012-9.054 8.946-9.054zm0 3.78a5.274 5.274 0 015.274 5.274c0 1.116-.36 2.16-.936 3.024-.18.288-.504.468-.864.468-.576 0-1.044-.468-1.044-1.044 0-.18.036-.324.144-.504.324-.54.54-1.188.54-1.944a3.114 3.114 0 00-3.114-3.114 3.114 3.114 0 00-3.114 3.114c0 .756.216 1.404.54 1.944.108.18.144.324.144.504 0 .576-.468 1.044-1.044 1.044-.36 0-.684-.18-.864-.468a5.274 5.274 0 01-.936-3.024 5.274 5.274 0 015.274-5.274zm0 3.78a1.494 1.494 0 011.494 1.494c0 .648-.468 1.224-1.08 1.404v4.716c0 .324-.144.576-.414.756-.144.072-.288.108-.468.108-.18 0-.324-.036-.468-.108-.27-.18-.414-.432-.414-.756v-4.716a1.494 1.494 0 01-1.08-1.404 1.494 1.494 0 011.494-1.494h.936z" />
      </svg>
    ),
  },
  {
    name: 'Spotify',
    href: '#',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: 'Amazon Music',
    href: '#',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.44-2.186 1.44-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.683zm3.186 7.705a.659.659 0 01-.75.069c-1.053-.875-1.241-1.281-1.818-2.113-1.738 1.773-2.969 2.303-5.222 2.303-2.666 0-4.745-1.645-4.745-4.937 0-2.571 1.393-4.322 3.378-5.178 1.72-.753 4.122-.888 5.959-1.095v-.409c0-.753.058-1.643-.383-2.293-.384-.578-1.121-.816-1.774-.816-1.205 0-2.277.618-2.54 1.898-.054.284-.261.564-.547.578l-3.065-.33c-.257-.057-.543-.266-.47-.659C5.77 1.979 8.79.75 11.507.75c1.392 0 3.21.369 4.307 1.423 1.392 1.303 1.259 3.043 1.259 4.933v4.468c0 1.342.557 1.932 1.08 2.654.183.26.224.571-.009.763-.582.487-1.617 1.391-2.186 1.899l-.814-.095zM21.893 20.4c-2.729 2.015-6.689 3.09-10.103 3.09-4.78 0-9.082-1.769-12.335-4.714-.256-.231-.027-.547.28-.367 3.513 2.041 7.858 3.27 12.343 3.27 3.027 0 6.357-.626 9.421-1.927.462-.196.849.303.394.648z" />
      </svg>
    ),
  },
  {
    name: 'Pocket Casts',
    href: '#',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 3.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm0 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
      </svg>
    ),
  },
];

export function PodcastSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/10">
      <Container>
        <SectionHeading
          title="Our Fight to Breathe"
          subtitle="The podcast where we share stories of hope, resilience, and the CF community"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Podcast Cover */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
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
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                <svg
                  className="w-8 h-8 text-primary ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Podcast Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-serif text-foreground mb-4">
              Latest Episode
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
              <span className="text-sm text-muted-foreground">Episode 24</span>
              <h4 className="text-xl font-semibold text-foreground mt-1 mb-2">
                The Gift of Life: Stories from Transplant Recipients
              </h4>
              <p className="text-muted-foreground">
                In this emotional episode, we hear from fellow transplant recipients
                about their journeys, the gratitude they feel, and how they honor
                their donors every day.
              </p>
            </div>

            <h4 className="text-lg font-semibold text-foreground mb-4">
              Listen on your favorite platform
            </h4>
            <div className="flex flex-wrap gap-4 mb-8">
              {platforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label={platform.name}
                >
                  {platform.icon}
                  <span className="font-medium">{platform.name}</span>
                </motion.a>
              ))}
            </div>

            <Button href="/podcast" variant="primary">
              See All Episodes
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
