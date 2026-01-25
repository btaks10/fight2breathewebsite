const TRANSISTOR_API_KEY = process.env.TRANSISTOR_API_KEY!;
const TRANSISTOR_SHOW_ID = process.env.TRANSISTOR_SHOW_ID!;

export interface TransistorEpisode {
  id: string;
  title: string;
  summary: string;
  description: string;
  published_at: string;
  duration: number;
  audio_url: string;
  share_url: string;
  image_url: string;
}

export async function getEpisodes(
  limit: number = 10
): Promise<TransistorEpisode[]> {
  const response = await fetch(
    `https://api.transistor.fm/v1/episodes?show_id=${TRANSISTOR_SHOW_ID}&pagination[per]=${limit}`,
    {
      headers: {
        'x-api-key': TRANSISTOR_API_KEY,
      },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    console.error('Transistor API error:', response.status);
    return [];
  }

  const data = await response.json();
  return data.data.map((ep: Record<string, unknown>) => ({
    id: ep.id,
    title: (ep.attributes as Record<string, unknown>).title,
    summary: (ep.attributes as Record<string, unknown>).summary || '',
    description: (ep.attributes as Record<string, unknown>).description || '',
    published_at: (ep.attributes as Record<string, unknown>).published_at,
    duration: (ep.attributes as Record<string, unknown>).duration,
    audio_url: (ep.attributes as Record<string, unknown>).audio_url,
    share_url: (ep.attributes as Record<string, unknown>).share_url,
    image_url: (ep.attributes as Record<string, unknown>).image_url,
  }));
}

export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  return `${mins} min`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
