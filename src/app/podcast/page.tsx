import Image from 'next/image';
import { getEpisodes, formatDuration, formatDate } from '@/lib/transistor';

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export const revalidate = 3600;

export default async function PodcastPage() {
  const episodes = await getEpisodes(12);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-28 pb-8 md:pt-32 md:pb-12 px-6">
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
              <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                <a
                  href="https://podcasts.apple.com/podcast/our-fight-to-breathe-a-cystic-fibrosis-podcast/id1820255519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  title="Apple Podcasts"
                >
                  <Image src="/images/apple.jpeg" alt="Apple Podcasts" width={32} height={32} className="rounded w-8 h-8 object-cover" />
                </a>
                <a
                  href="https://open.spotify.com/show/3gDKmuPjRsLctJEmoJKjgO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  title="Spotify"
                >
                  <Image src="/images/spotify.jpeg" alt="Spotify" width={32} height={32} className="rounded w-8 h-8 object-cover" />
                </a>
                <a
                  href="https://music.amazon.com/podcasts/b38d9c40-a0d5-4449-8bb1-7c9ab5809db4/our-fight-to-breathe---a-cystic-fibrosis-podcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  title="Amazon Music"
                >
                  <Image src="/images/amazon.jpeg" alt="Amazon Music" width={32} height={32} className="rounded w-8 h-8 object-cover" />
                </a>
                <a
                  href="https://pca.st/YOUR_POCKETCASTS_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  title="Pocket Casts"
                >
                  <Image src="/images/pocketcast.jpeg" alt="Pocket Casts" width={32} height={32} className="rounded w-8 h-8 object-cover" />
                </a>
                <a
                  href="https://podcastaddict.com/podcast/YOUR_PODCAST_ADDICT_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  title="Podcast Addict"
                >
                  <Image src="/images/podcastaddict.jpeg" alt="Podcast Addict" width={32} height={32} className="rounded w-8 h-8 object-cover" />
                </a>
                <a
                  href="https://www.deezer.com/show/YOUR_DEEZER_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  title="Deezer"
                >
                  <Image src="/images/deezer.jpeg" alt="Deezer" width={32} height={32} className="rounded w-8 h-8 object-cover" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-10 md:py-16 px-6 bg-gray-50">
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
                      {stripHtml(episode.summary || episode.description)}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                      <span>{formatDate(episode.published_at)}</span>
                      <span>•</span>
                      <span>{formatDuration(episode.duration)}</span>
                    </div>
                  </div>

                  {/* Listen Button */}
                  <div className="flex-shrink-0 self-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full group-hover:bg-purple-700 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Listen
                    </span>
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
