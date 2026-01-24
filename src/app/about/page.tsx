'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container, SectionHeading, Button } from '@/components/ui';
import { Timeline, TimelineEvent } from '@/components/timeline';

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '1998',
    title: 'The Beginning',
    description:
      'Born with Cystic Fibrosis, Caleigh began her fight from day one. Her parents were told to prepare for a difficult journey, but they never gave up hope.',
    image: '/images/timeline-1.svg',
    quote: 'Every breath was a victory, even then.',
  },
  {
    id: '2',
    year: '2005',
    title: 'Growing Up CF',
    description:
      'School, hospital stays, treatments, and still finding joy in life. Caleigh learned early that life with CF meant fighting harder than most, but also appreciating every moment more.',
    image: '/images/timeline-2.svg',
  },
  {
    id: '3',
    year: '2012',
    title: 'The First Major Surgery',
    description:
      'At 14, Caleigh faced her first major surgical intervention. It was a turning point that showed her the strength she never knew she had.',
    image: '/images/timeline-3.svg',
    quote: 'I learned that strength isnt about not being scared. Its about being terrified and still showing up.',
  },
  {
    id: '4',
    year: '2018',
    title: 'The Call That Changed Everything',
    description:
      'After years on the transplant list, the call finally came. A generous donor gave Caleigh the gift of new lungs and a second chance at life.',
    image: '/images/timeline-4.svg',
    quote: 'Someone I never met saved my life. I carry their gift with me every single day.',
  },
  {
    id: '5',
    year: '2020',
    title: 'Founding Fight2Breathe',
    description:
      'With her new lungs and renewed purpose, Caleigh founded Fight2Breathe to advocate for the CF community and raise awareness about organ donation.',
    image: '/images/timeline-5.svg',
  },
  {
    id: '6',
    year: '2022',
    title: 'Launching "Our Fight to Breathe" Podcast',
    description:
      'The podcast launched to share stories of hope, resilience, and community. Each episode connects CF warriors and their families, creating a support network that spans the globe.',
    image: '/images/timeline-6.svg',
    quote: 'Every story shared is a life touched. Thats why we do this.',
  },
  {
    id: '7',
    year: 'Today',
    title: 'The Fight Continues',
    description:
      'Today, Caleigh continues to advocate, inspire, and fight for every breath. With your support, Fight2Breathe is making a difference in the lives of CF warriors everywhere.',
    image: '/images/timeline-7.svg',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-primary via-primary-light to-accent">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
                Meet Caleigh
              </h1>
              <p className="text-xl text-white/90 mb-4">
                CF Warrior. Transplant Recipient. Advocate.
              </p>
              <p className="text-white/80">
                My journey with Cystic Fibrosis started at birth, but it doesnt
                define me — it fuels me. Every challenge Ive faced has become a
                stepping stone to help others who walk this same path.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-hero.svg"
                  alt="Caleigh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years Fighting CF' },
              { number: '6', label: 'Years Post-Transplant' },
              { number: '100+', label: 'Podcast Episodes' },
              { number: '1000s', label: 'Lives Touched' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary font-serif">
                  {stat.number}
                </div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-warm-white">
        <Container>
          <SectionHeading
            title="My Journey"
            subtitle="A timeline of milestones, challenges, and victories in the fight for every breath"
          />

          <Timeline events={timelineEvents} />
        </Container>
      </section>

      {/* Mission Section */}
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
              title="The Mission"
              subtitle="Why I fight, and why your support matters"
            />

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Cystic Fibrosis affects over 30,000 people in the United States
                alone, and many more worldwide. Its a relentless disease that
                impacts every aspect of daily life. But within this community,
                Ive found incredible strength, resilience, and hope.
              </p>
              <p>
                Fight2Breathe exists to amplify these stories, to advocate for
                better treatments and research funding, and to support CF warriors
                and their families through every step of their journey.
              </p>
              <p>
                Through our podcast, merchandise, and community initiatives, were
                building a movement. A movement that says every breath matters,
                every voice counts, and together, we can make a difference.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/podcast" variant="primary">
                Listen to the Podcast
              </Button>
              <Button href="/connect" variant="outline">
                Join the Community
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
