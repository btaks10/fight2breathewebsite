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
      'Born with Cystic Fibrosis. Diagnosed at birth. The fight began on day one.',
    image: '/images/journey-1.jpg',
    bgClass: 'bg-white',
  },
  {
    year: '2005',
    title: 'The Struggle',
    description:
      'Hospital became a second home. Countless treatments, endless uncertainty. But giving up was never an option.',
    image: '/images/journey-2.jpg',
    bgClass: 'bg-white',
  },
  {
    year: '2013',
    title: 'The Wait',
    description:
      'Listed for transplant. Every day became a prayer for a second chance at life.',
    image: null,
    bgClass: 'bg-purple-50',
  },
  {
    year: '2015',
    title: 'New Lungs',
    description:
      "First double-lung transplant. A stranger's final gift became her second chance at life.",
    image: '/images/journey-3.jpg',
    bgClass: 'bg-white',
  },
  {
    year: '2017',
    title: 'Love',
    description:
      "Married. Proof that life doesn't just continue after transplant—it flourishes.",
    image: null,
    bgClass: 'bg-rose-50',
  },
  {
    year: '2018',
    title: 'Again',
    description:
      'Second transplant. Some battles you have to win twice. She did.',
    image: '/images/journey-4.jpg',
    bgClass: 'bg-white',
  },
  {
    year: 'Now',
    title: 'The Mission',
    description:
      'Advocate. Podcaster. Voice for the voiceless. The fight continues—not just for herself, but for everyone.',
    image: '/images/caleigh-portrait.jpg',
    bgClass: 'bg-gradient-to-b from-gray-50 to-white',
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
        { threshold: 0.5 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Get current image, fallback to last valid image if current milestone has none
  const getCurrentImage = () => {
    const current = milestones[activeIndex];
    if (current?.image) return current.image;

    // Look backwards for the most recent image
    for (let i = activeIndex - 1; i >= 0; i--) {
      if (milestones[i]?.image) return milestones[i].image;
    }

    // Fallback to first image
    return milestones.find((m) => m.image)?.image || '/images/journey-1.jpg';
  };

  const currentImage = getCurrentImage();

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
              transition={{ duration: 0.5 }}
              className="relative h-full w-full"
            >
              {currentImage ? (
                <Image
                  src={currentImage}
                  alt="Caleigh's journey"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-purple-600 to-purple-900" />
              )}
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
              className={`min-h-[70vh] flex items-center px-8 md:px-16 py-16 ${milestone.bgClass}`}
            >
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                {/* Mobile image */}
                {milestone.image && (
                  <div className="lg:hidden w-full mb-8">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={milestone.image}
                        alt={milestone.year}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className="max-w-lg">
                  <span
                    className={`text-6xl md:text-8xl font-bold ${
                      milestone.year === '2017'
                        ? 'text-rose-200'
                        : 'text-purple-200'
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                  {milestone.showButton && (
                    <div className="mt-8">
                      <Button href="/about" variant="dark" size="lg">
                        Read Her Full Story
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
