import Image from 'next/image';
import { getEpisodes, formatDuration, formatDate } from '@/lib/transistor';

export const revalidate = 3600;

export default async function PodcastPage() {
  const episodes = await getEpisodes(12);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            {/* Podcast Cover */}
            <div className="w-64 md:w-80 flex-shrink-0">
              <Image
                src="/images/podcast-cover.png"
                alt="Our Fight to Breathe Podcast"
                width={320}
                height={320}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Fight to Breathe
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-lg">
                Real conversations about life with cystic fibrosis. The stuff no
                one tells you.
              </p>

              {/* Platform Icons */}
              <div className="flex items-center justify-center md:justify-start gap-5">
                <a
                  href="https://podcasts.apple.com/podcast/our-fight-to-breathe-a-cystic-fibrosis-podcast/id1820255519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  title="Listen on Apple Podcasts"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
                  </svg>
                </a>
                <a
                  href="https://open.spotify.com/show/3gDKmuPjRsLctJEmoJKjgO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  title="Listen on Spotify"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
                <a
                  href="https://music.amazon.com/podcasts/b38d9c40-a0d5-4449-8bb1-7c9ab5809db4/our-fight-to-breathe---a-cystic-fibrosis-podcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  title="Listen on Amazon Music"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-12">
            Latest Episodes
          </h2>

          {episodes.length > 0 ? (
            <div className="grid gap-6">
              {episodes.map((episode) => (
                <a
                  key={episode.id}
                  href={episode.share_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-6"
                >
                  {/* Episode Image */}
                  {episode.image_url && (
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={episode.image_url}
                        alt={episode.title}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}

                  {/* Episode Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-1">
                      {episode.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                      {episode.summary || episode.description}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                      <span>{formatDate(episode.published_at)}</span>
                      <span>•</span>
                      <span>{formatDuration(episode.duration)}</span>
                    </div>
                  </div>

                  {/* Play Icon */}
                  <div className="flex-shrink-0 self-center">
                    <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-5 h-5 ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                Episodes are loading from Transistor...
              </p>
              <a
                href="https://feeds.transistor.fm/our-fight-to-breathe-a-cystic-fibrosis-podcast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium hover:text-purple-700"
              >
                View episodes on Transistor
              </a>
            </div>
          )}

          {/* View All Link */}
          {episodes.length > 0 && (
            <div className="text-center mt-12">
              <a
                href="https://feeds.transistor.fm/our-fight-to-breathe-a-cystic-fibrosis-podcast"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700"
              >
                View all episodes
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
