'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui';

const milestones = [
  {
    year: '1990',
    title: 'The Beginning',
    description:
      'Born with Cystic Fibrosis. Diagnosed at birth—which was rare back then. Most infants went undiagnosed and untreated. The median life expectancy that year was 18. When my parents found out that salty ocean air helped thin the mucus in my lungs, they moved us as close to the waves as possible.',
    image: '/images/journey-1990.jpg',
  },
  {
    year: '2005',
    title: 'The Struggle',
    description:
      'CF is progressive. My childhood was healthy, but my adult years told a different story. Hospital became my first home, my apartment became my second. I went years cycling through—admitted for two or three weeks, out for one, then back in. The nurses and doctors became my family. Every day I thought about getting my independence back.',
    image: '/images/journey-2005.jpg',
  },
  {
    year: '2013',
    title: 'The Wait',
    description:
      'At 22, my lung function dropped to 16%. I lost almost 30 pounds. I was living on supplemental oxygen and a feeding tube. My doctors told me a double-lung transplant was my only option for survival. I was listed, and then I waited. Waiting is its own kind of fight.',
    image: '/images/journey-2013.jpg',
  },
  {
    year: '2015',
    title: 'New Lungs',
    description:
      'October 20th. First double-lung transplant. I got some of my old routines back—walking to get coffee, going to farmers markets, caring for my dog. But transplant tested me too. An abscess in my left lung. Respiratory failure. A life flight. ECMO. A medically induced coma. I had to relearn how to hold my head up, swallow, walk, talk. Everything.',
    image: '/images/journey-2015.jpg',
  },
  {
    year: '2017',
    title: 'Love',
    description:
      "I went into organ rejection shortly after my one-year breathday. Within months I was back on oxygen, back on my feeding tube, unable to walk even a few feet. My lung function dropped to 14%. My center told me I wasn't a candidate for a redo. Their recommendation was palliative care. But in the middle of all that, I married my best friend, surrounded by 150 people who loved us.",
    image: '/images/journey-2017.jpg',
  },
  {
    year: '2018',
    title: 'Again',
    description:
      'My husband searched nationwide for any center that would take me. We packed everything and moved across California. UCLA gave me a chance when no one else would. After five and a half months living in the hospital, I received my second double-lung transplant on June 8th. When I woke up and took my first breath, I understood for the first time what breathing was actually supposed to feel like.',
    image: '/images/journey-2018.jpg',
  },
  {
    year: 'Now',
    title: 'The Mission',
    description:
      "I breathe deep now. Effortlessly. But I'll never forget the moments I struggled for oxygen, or the people who showed up when it mattered. I started Fight2Breathe because this fight shouldn't be figured out alone. The information, the support, the community—it should already exist. So I'm building it.",
    image: '/images/journey-now.jpg',
    showButton: true,
  },
];

export function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const milestonesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = milestonesRef.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.5,
          rootMargin: '-30% 0px -30% 0px',
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const currentImage = milestones[activeIndex]?.image;

  return (
    <section className="relative bg-gray-50">
      {/* Section Header */}
      <div className="py-24 text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Journey</h2>
          <p className="text-gray-600 text-xl max-w-xl mx-auto">
            A life measured not in years, but in fights won.
          </p>
        </motion.div>
      </div>

      {/* Sticky Scroll Container */}
      <div className="relative lg:flex">
        {/* Sticky Image Side */}
        <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative h-full w-full"
            >
              <Image
                src={currentImage}
                alt={`${milestones[activeIndex]?.year} - ${milestones[activeIndex]?.title}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scrolling Timeline Side */}
        <div className="lg:w-1/2">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              ref={(el) => {
                milestonesRef.current[index] = el;
              }}
              className="min-h-[70vh] flex items-center px-8 md:px-16 lg:px-20 py-16"
            >
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                {/* Mobile image */}
                <div className="lg:hidden w-full mb-8">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={milestone.image}
                      alt={`${milestone.year} - ${milestone.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="max-w-lg">
                  <span className="text-7xl md:text-8xl lg:text-9xl font-bold text-purple-200/70">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-6">
                    {milestone.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                  {milestone.showButton && (
                    <div className="mt-10">
                      <Button href="/about" variant="dark" size="lg">
                        See What I&apos;m Building Now
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
