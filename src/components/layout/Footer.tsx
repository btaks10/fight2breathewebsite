'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#E5D0F7] py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#6B2D5C]">Fight2Breathe</h3>
            <p className="text-[#5D2751]">Every breath is worth fighting for.</p>
          </div>
          <div className="flex gap-6 flex-wrap">
            <a
              href="mailto:caleigh@fight2breathe.org"
              className="text-[#6B2D5C] hover:text-[#2A1A2E] transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.instagram.com/fight2breathe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B2D5C] hover:text-[#2A1A2E] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@fight2breathe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B2D5C] hover:text-[#2A1A2E] transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://www.linkedin.com/in/caleighhabert/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B2D5C] hover:text-[#2A1A2E] transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/podcast"
              className="text-[#6B2D5C] hover:text-[#2A1A2E] transition-colors"
            >
              Podcast
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#6B2D5C]/20 text-center text-[#6B2D5C]/60 text-sm">
          &copy; {new Date().getFullYear()} Fight2Breathe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
