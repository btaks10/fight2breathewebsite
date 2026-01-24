'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
  quote?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative py-12">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-soft-gray">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-accent"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Timeline Events */}
      <div className="space-y-16 md:space-y-24">
        {events.map((event, index) => (
          <TimelineItem key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

function TimelineItem({ event, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
        <motion.div
          className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
      </div>

      {/* Content */}
      <div
        className={`w-full md:w-1/2 pl-12 md:pl-0 ${
          isEven ? 'md:pr-16' : 'md:pl-16'
        }`}
      >
        <motion.div
          className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
            isEven ? 'md:mr-8' : 'md:ml-8'
          }`}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image */}
          {event.image && (
            <div className="relative aspect-video">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/90 text-sm font-medium bg-primary/80 px-3 py-1 rounded-full">
                  {event.year}
                </span>
              </div>
            </div>
          )}

          <div className="p-6">
            {!event.image && (
              <span className="text-primary font-bold text-lg">{event.year}</span>
            )}
            <h3 className="text-xl font-bold  text-foreground mt-1 mb-3">
              {event.title}
            </h3>
            <p className="text-muted-foreground">{event.description}</p>

            {/* Quote */}
            {event.quote && (
              <blockquote className="mt-4 pl-4 border-l-4 border-accent italic text-muted-foreground">
                &ldquo;{event.quote}&rdquo;
              </blockquote>
            )}
          </div>
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}
