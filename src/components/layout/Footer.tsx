'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Fight2Breathe</h3>
            <p className="text-gray-400">Every breath is worth fighting for.</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/fight2breathe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@fight2breathe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              TikTok
            </a>
            <Link
              href="/podcast"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Podcast
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Fight2Breathe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
