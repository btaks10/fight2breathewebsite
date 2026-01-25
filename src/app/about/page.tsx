'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface RoleCardProps {
  icon: string;
  iconBg: string;
  company: string;
  role: string;
  roleColor: string;
  summary: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function RoleCard({
  icon,
  iconBg,
  company,
  role,
  roleColor,
  summary,
  children,
  defaultOpen = false,
}: RoleCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="ombre-section rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-start gap-4 text-left hover:bg-white/50 transition-colors"
      >
        <div
          className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-xl">{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl font-bold text-gray-900">{company}</h3>
            <span className="text-gray-300">|</span>
            <p className={`${roleColor} font-medium`}>{role}</p>
          </div>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">{summary}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-gray-200">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-4 md:px-8 pt-32 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Tall Photo (sticky) */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-32 mt-8 md:mt-12">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/caleigh-portrait.jpg"
                    alt="Caleigh Haber-Takayama"
                    fill
                    className="object-cover object-[center_25%]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: CV Content */}
            <div className="lg:col-span-3">
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold ombre-text mb-4">
                  Caleigh Haber-Takayama
                </h1>
                <p className="text-xl ombre-text-horizontal font-medium mb-6">
                  Patient. Builder. Advocate. Chronic Badass.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I spent the first half of my life fighting to survive. Now I
                  build what I once needed most: resources, community, and a
                  stronger patient voice where decisions are made.
                </p>
              </div>

              {/* Role Cards */}
              <div className="space-y-4">
                {/* Fight2Breathe */}
                <RoleCard
                  icon="💗"
                  iconBg="ombre-bg"
                  company="Fight2Breathe"
                  role="Founder & Director"
                  roleColor="ombre-text-horizontal"
                  summary="What began as a personal effort to survive grew into a community."
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Today, Fight2Breathe reaches over 100,000 people across
                    platforms, connecting patients, caregivers, and healthcare
                    professionals who are looking for real information and real
                    connection. I build resources and create content to make the
                    chronic illness experience feel less isolating. My hope is
                    to help people feel informed, supported, and empowered to
                    make the decisions that are best for them.
                  </p>
                </RoleCard>

                {/* pRxEngage */}
                <RoleCard
                  icon="🔬"
                  iconBg="bg-blue-100"
                  company="pRxEngage"
                  role="Community & Brand Strategy | Consultant"
                  roleColor="text-blue-500"
                  summary="Helping their mission show up clearly for the people it's meant to serve."
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    I lead efforts focused on how we engage with patient and
                    community groups, helping design work rooted in empathy,
                    clarity, and real-world understanding. I bring lived
                    experience, strategic insight, and heart to my role at
                    pRxEngage, shaped by my own life with rare disease and
                    navigating complex care systems. My work centers on making
                    clinical trial information more human, accessible, and
                    grounded in the realities of people&apos;s lives.
                  </p>
                </RoleCard>

                {/* Patient Consulting */}
                <RoleCard
                  icon="🎯"
                  iconBg="bg-rose-100"
                  company="Patient Consulting"
                  role="Patient Consultant"
                  roleColor="text-rose-500"
                  summary="Pharmaceutical companies, hospitals, and health startups hire me to share the patient perspective."
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    My work includes advising on patient engagement and
                    experience design, reviewing study materials and messaging,
                    shaping education and content strategy, and supporting
                    programs that impact how people navigate care and clinical
                    research. I help teams understand what it actually feels
                    like to live with a condition, make treatment decisions, and
                    carry the long-term consequences—so decisions are informed
                    by real patient experience, not assumptions.
                  </p>
                </RoleCard>

                {/* BreatheCon */}
                <RoleCard
                  icon="🌐"
                  iconBg="bg-green-100"
                  company="BreatheCon"
                  role="Co-Organizer"
                  roleColor="text-green-500"
                  summary="A multi-day conference built by and for the CF community."
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    BreatheCon is a multi-day conference built by and for the CF
                    community. I co-led a team of 20 to bring together 500+
                    attendees, coordinating with the Cystic Fibrosis Foundation
                    to ensure the event reflected what the community truly
                    needed.
                  </p>
                </RoleCard>

                {/* Podcast */}
                <RoleCard
                  icon="🎧"
                  iconBg="bg-violet-100"
                  company="Podcast"
                  role="Host"
                  roleColor="text-violet-500"
                  summary="Hosting Our Fight to Breathe, a podcast centered on lived experience."
                >
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p>
                      I host Our Fight to Breathe, a podcast centered on lived
                      experience and the realities of navigating chronic and
                      rare disease. Through conversations with patients,
                      caregivers, clinicians, advocates, and industry leaders, I
                      amplify stories that are often overlooked but deeply
                      needed.
                    </p>
                    <p>
                      The podcast explores life with cystic fibrosis and
                      transplant, patient advocacy, and healthcare
                      decision-making, alongside what it means to live in a
                      world you weren&apos;t meant to survive in. My goal is to
                      offer clarity and connection through conversations that
                      help people feel less alone and more informed.
                    </p>
                  </div>
                </RoleCard>

                {/* Speaking Engagements */}
                <RoleCard
                  icon="🎤"
                  iconBg="bg-amber-100"
                  company="Speaking"
                  role="Conferences & Events"
                  roleColor="text-amber-500"
                  summary="I speak at hospitals, conferences, and foundation events to translate lived experience into understanding."
                >
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Organizations I&apos;ve spoken with:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                        Make a Wish Foundation
                      </span>
                      <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                        Global Genes
                      </span>
                      <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                        American Lung Association
                      </span>
                      <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                        CFRI
                      </span>
                    </div>
                  </div>
                </RoleCard>

                {/* Awards */}
                <RoleCard
                  icon="🏆"
                  iconBg="bg-yellow-100"
                  company="Awards"
                  role="Recognition"
                  roleColor="text-yellow-600"
                  summary="Recognized for contributions to the CF community."
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                      <span className="text-xl">🌹</span>
                      <p className="text-sm text-gray-700">
                        Recipient of the <strong>2017 CFF Rose Award</strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                      <span className="text-xl">⭐</span>
                      <p className="text-sm text-gray-700">
                        Recipient of the <strong>2024 CFF Impact Award</strong>
                      </p>
                    </div>
                  </div>
                </RoleCard>
              </div>

              {/* Work With Me CTA */}
              <div className="mt-16 p-8 ombre-bg rounded-3xl text-white">
                <h2 className="text-2xl font-bold mb-4">Work With Me</h2>
                <p className="text-white/80 mb-6">
                  I consult with healthcare companies, speak at events, and
                  advise on patient-centered content and strategy. If
                  you&apos;re building something for patients, I can help you
                  get it right.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    href="mailto:caleigh@fight2breathe.org"
                    variant="primary"
                    size="lg"
                  >
                    Get in Touch
                  </Button>
                  <Button
                    href="https://www.instagram.com/fight2breathe"
                    variant="secondary"
                    size="lg"
                    external
                  >
                    Follow Along
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
