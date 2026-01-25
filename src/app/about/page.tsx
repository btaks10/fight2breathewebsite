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
    <div className="bg-gray-50 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-start gap-4 text-left hover:bg-gray-100 transition-colors"
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
              <div className="lg:sticky lg:top-32">
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
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Caleigh Haber-Takayama
                </h1>
                <p className="text-xl text-purple-600 font-medium mb-6">
                  Patient. Builder. Advocate. Chronic Badass.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I spent the first half of my life fighting to survive. Now
                  I&apos;m building the things I wish existed when I was in the
                  thick of it—resources, community, and a louder voice for
                  patients in rooms where decisions get made.
                </p>
              </div>

              {/* Role Cards */}
              <div className="space-y-4">
                {/* Fight2Breathe */}
                <RoleCard
                  icon="💜"
                  iconBg="bg-purple-100"
                  company="Fight2Breathe"
                  role="Founder & Director"
                  roleColor="text-purple-500"
                  summary="What started as a personal Instagram account became something bigger."
                >
                  <p className="text-gray-600 leading-relaxed">
                    Today, Fight2Breathe reaches over 100,000 people across platforms — patients, caregivers, and healthcare professionals looking for real information and real connection. I build resources, create content, and try to make the chronic illness experience a little less isolating.
                  </p>
                </RoleCard>

                {/* PRX (Patient Revolution) */}
                <RoleCard
                  icon="🔬"
                  iconBg="bg-blue-100"
                  company="PRX (Patient Revolution)"
                  role="Consultant"
                  roleColor="text-blue-500"
                  summary="Aligning external presence with internal mission."
                >
                  <p className="text-gray-600 leading-relaxed">
                    I worked with PRX to align their external presence with their internal mission. That meant auditing their marketing and social strategy, helping launch and manage an ambassador program, and creating educational content that actually sounds like people — not institutions. I write articles, blogs, and their newsletter to bring the mission closer to the people it serves.
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
                  <p className="text-gray-600 leading-relaxed">
                    What it&apos;s actually like to navigate the system, make treatment decisions, and live with the consequences. I bring the voice that&apos;s usually missing from the room — helping organizations understand what patients need, not just what they think patients need.
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
                  <p className="text-gray-600 leading-relaxed">
                    BreatheCon is a multi-day conference built by and for the CF community. I co-led a team of 20 to bring together 500+ attendees, coordinating with the Cystic Fibrosis Foundation to make sure the event reflected what the community actually needed — not just what looked good on paper.
                  </p>
                </RoleCard>

                {/* Speaking Engagements */}
                <RoleCard
                  icon="🎤"
                  iconBg="bg-amber-100"
                  company="Speaking"
                  role="Conferences & Events"
                  roleColor="text-amber-500"
                  summary="Sharing my story at hospitals, conferences, and foundations—not to inspire, but to translate what this life is actually like."
                >
                  <div className="space-y-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">🏥</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            UCLA Health
                          </h4>
                          <p className="text-gray-500 text-sm">
                            Patient Education Symposium
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            November 2018
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                        <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">🎗️</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Cystic Fibrosis Foundation
                          </h4>
                          <p className="text-gray-500 text-sm">
                            Beach, Brews & BBQ Gala
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            October 2018, 2019
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">🌐</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            BreatheCon
                          </h4>
                          <p className="text-gray-500 text-sm">
                            Virtual Conference Host
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            Committee Co-Chair
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </RoleCard>
              </div>

              {/* Work With Me CTA */}
              <div className="mt-16 p-8 bg-purple-900 rounded-3xl text-white">
                <h2 className="text-2xl font-bold mb-4">Work With Me</h2>
                <p className="text-purple-200 mb-6">
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
