'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/story', label: 'Story' },
  { href: '/about', label: 'Work' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/shop', label: 'Shop' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between p-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/F2B-logo-black.png"
            alt="Fight2Breathe"
            width={120}
            height={120}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-white" />

            {/* Menu content */}
            <div className="relative h-full flex flex-col px-6 py-8">
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between mb-12">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="/images/F2B-logo-black.png"
                    alt="Fight2Breathe"
                    width={150}
                    height={150}
                    className="h-14 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation links - centered and large */}
              <nav className="flex-1 flex flex-col justify-center">
                <div className="space-y-6">
                  {[
                    { href: '/', label: 'Home' },
                    ...navLinks,
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-3xl font-semibold text-gray-900 hover:text-[#E060C0] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Footer with social links */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.instagram.com/fight2breathe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/caleighhabert/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
