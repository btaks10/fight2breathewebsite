'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container, SectionHeading, Button } from '@/components/ui';

const platforms = [
  {
    name: 'Apple Podcasts',
    href: '#',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c4.988 0 9.054 4.066 9.054 9.054 0 1.39-.403 2.706-.972 3.906-.144.376-.504.648-.936.648-.576 0-1.044-.468-1.044-1.044 0-.144.036-.324.108-.504.432-.936.684-1.944.684-3.006 0-3.78-3.06-6.84-6.84-6.84-3.78 0-6.84 3.06-6.84 6.84 0 1.062.252 2.07.684 3.006.072.18.108.36.108.504 0 .576-.468 1.044-1.044 1.044-.432 0-.792-.272-.936-.648-.569-1.2-.972-2.516-.972-3.906-.054-4.988 4.012-9.054 8.946-9.054z" />
      </svg>
    ),
  },
  {
    name: 'Spotify',
    href: '#',
    color: 'bg-green-500',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02z" />
      </svg>
    ),
  },
  {
    name: 'Amazon Music',
    href: '#',
    color: 'bg-blue-500',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.44-2.186 1.44-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.683zm3.186 7.705a.659.659 0 01-.75.069c-1.053-.875-1.241-1.281-1.818-2.113-1.738 1.773-2.969 2.303-5.222 2.303-2.666 0-4.745-1.645-4.745-4.937 0-2.571 1.393-4.322 3.378-5.178 1.72-.753 4.122-.888 5.959-1.095v-.409c0-.753.058-1.643-.383-2.293-.384-.578-1.121-.816-1.774-.816-1.205 0-2.277.618-2.54 1.898-.054.284-.261.564-.547.578l-3.065-.33c-.257-.057-.543-.266-.47-.659C5.77 1.979 8.79.75 11.507.75c1.392 0 3.21.369 4.307 1.423 1.392 1.303 1.259 3.043 1.259 4.933v4.468c0 1.342.557 1.932 1.08 2.654.183.26.224.571-.009.763-.582.487-1.617 1.391-2.186 1.899l-.814-.095z" />
      </svg>
    ),
  },
  {
    name: 'Transistor',
    href: '#',
    color: 'bg-indigo-500',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    name: 'Pocket Casts',
    href: '#',
    color: 'bg-red-500',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 3.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17z" />
      </svg>
    ),
  },
  {
    name: 'Podcast Addict',
    href: '#',
    color: 'bg-orange-500',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
];

const episodes = [
  {
    id: 1,
    number: 'Episode 24',
    title: 'The Gift of Life: Stories from Transplant Recipients',
    description:
      'In this emotional episode, we hear from fellow transplant recipients about their journeys, the gratitude they feel, and how they honor their donors every day.',
    duration: '45 min',
    date: 'Jan 15, 2026',
  },
  {
    id: 2,
    number: 'Episode 23',
    title: 'CF and Mental Health: Breaking the Stigma',
    description:
      'We dive deep into the mental health challenges that come with chronic illness and share strategies for maintaining emotional wellness.',
    duration: '38 min',
    date: 'Jan 8, 2026',
  },
  {
    id: 3,
    number: 'Episode 22',
    title: 'Caregivers Corner: The Unsung Heroes',
    description:
      'A special tribute to the parents, partners, and friends who stand beside CF warriors every step of the way.',
    duration: '42 min',
    date: 'Jan 1, 2026',
  },
  {
    id: 4,
    number: 'Episode 21',
    title: 'New Year, New Lungs: Reflections on 2025',
    description:
      'Looking back on a year of challenges, victories, and everything in between. Plus, our hopes for the CF community in 2026.',
    duration: '50 min',
    date: 'Dec 25, 2025',
  },
  {
    id: 5,
    number: 'Episode 20',
    title: 'The Science of Hope: CF Research Updates',
    description:
      'We speak with researchers about the latest breakthroughs in CF treatment and what the future holds for our community.',
    duration: '55 min',
    date: 'Dec 18, 2025',
  },
];

export default function PodcastPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-semibold uppercase tracking-wider">
                The Official Podcast
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  mt-4 mb-6">
                Our Fight to Breathe
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Real stories, raw emotions, and resilient spirits. Join us every
                week as we explore life with Cystic Fibrosis and celebrate the
                warriors who never stop fighting.
              </p>

              {/* Platform Buttons */}
              <div className="flex flex-wrap gap-3">
                {platforms.slice(0, 3).map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${platform.color} text-white px-4 py-2 rounded-full font-medium flex items-center gap-2`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {platform.icon}
                    <span className="hidden sm:inline">{platform.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/podcast-cover.svg"
                  alt="Our Fight to Breathe Podcast"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Elements */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* All Platforms */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-center mb-8">Listen on Your Favorite Platform</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-muted rounded-xl hover:bg-soft-gray transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`${platform.color} text-white p-3 rounded-xl`}>
                  {platform.icon}
                </div>
                <span className="font-medium text-foreground text-sm text-center">
                  {platform.name}
                </span>
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* Episodes List */}
      <section className="py-24 bg-warm-white">
        <Container>
          <SectionHeading
            title="Latest Episodes"
            subtitle="Catch up on our most recent conversations"
          />

          <div className="space-y-6 mt-12">
            {episodes.map((episode, index) => (
              <motion.article
                key={episode.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                  {/* Episode Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="text-primary font-semibold">{episode.number}</span>
                      <span>{episode.date}</span>
                      <span>{episode.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold  text-foreground mb-2">
                      {episode.title}
                    </h3>
                    <p className="text-muted-foreground">{episode.description}</p>
                  </div>

                  {/* Play Button */}
                  <div className="flex items-center">
                    <motion.button
                      className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button href="#" variant="secondary">
              View All Episodes
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* About the Podcast */}
      <section className="py-24 bg-white">
        <Container size="md">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              title="About the Show"
              subtitle="Why we started this podcast"
            />

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Our Fight to Breathe was born from a simple idea: nobody should
                feel alone in their CF journey. Every week, we bring you stories
                that inspire, inform, and connect our community.
              </p>
              <p>
                From interviews with fellow CF warriors and their families to
                conversations with researchers and healthcare professionals, we
                cover every aspect of life with Cystic Fibrosis.
              </p>
              <p>
                Whether youre a CF warrior, a caregiver, or someone who wants to
                learn more about our community, this podcast is for you.
              </p>
            </div>

            <div className="mt-12">
              <Button href="/connect" variant="primary">
                Share Your Story
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
