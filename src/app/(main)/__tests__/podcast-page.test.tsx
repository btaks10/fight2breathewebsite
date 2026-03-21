import { describe, it, expect, vi } from 'vitest';

// Mock the transistor module before imports
vi.mock('@/lib/transistor', () => ({
  getEpisodes: vi.fn().mockResolvedValue([
    {
      id: '1',
      title: 'Episode 1: The Beginning',
      summary: '<p>A great episode</p>',
      description: 'Episode description',
      published_at: '2025-06-01T00:00:00Z',
      duration: 2700,
      audio_url: 'https://audio.test/1.mp3',
      share_url: 'https://share.test/1',
      image_url: 'https://img.test/1.jpg',
    },
    {
      id: '2',
      title: 'Episode 2: The Journey',
      summary: 'Another episode',
      description: 'Description 2',
      published_at: '2025-07-01T00:00:00Z',
      duration: 1800,
      audio_url: 'https://audio.test/2.mp3',
      share_url: 'https://share.test/2',
      image_url: 'https://img.test/2.jpg',
    },
  ]),
  formatDuration: vi.fn((s: number) => `${Math.floor(s / 60)} min`),
  formatDate: vi.fn((d: string) => {
    const date = new Date(d);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }),
}));

import { render, screen } from '@testing-library/react';

describe('PodcastPage', () => {
  it('renders the page heading', async () => {
    const PodcastPage = (await import('../podcast/page')).default;
    const page = await PodcastPage();
    render(page);
    expect(screen.getByText('Our Fight to Breathe')).toBeInTheDocument();
  });

  it('renders episodes', async () => {
    const PodcastPage = (await import('../podcast/page')).default;
    const page = await PodcastPage();
    render(page);
    expect(screen.getByText('Episode 1: The Beginning')).toBeInTheDocument();
    expect(screen.getByText('Episode 2: The Journey')).toBeInTheDocument();
  });

  it('renders platform links', async () => {
    const PodcastPage = (await import('../podcast/page')).default;
    const page = await PodcastPage();
    render(page);
    expect(screen.getByTitle('Apple Podcasts')).toBeInTheDocument();
    expect(screen.getByTitle('Spotify')).toBeInTheDocument();
  });

  it('renders episode duration', async () => {
    const PodcastPage = (await import('../podcast/page')).default;
    const page = await PodcastPage();
    render(page);
    expect(screen.getByText('45 min')).toBeInTheDocument();
  });

  it('renders Listen buttons', async () => {
    const PodcastPage = (await import('../podcast/page')).default;
    const page = await PodcastPage();
    render(page);
    const listenButtons = screen.getAllByText('Listen');
    expect(listenButtons.length).toBeGreaterThan(0);
  });
});
