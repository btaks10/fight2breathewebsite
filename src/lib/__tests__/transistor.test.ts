import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('transistor', () => {
  beforeEach(() => {
    vi.stubEnv('TRANSISTOR_API_KEY', 'test-api-key');
    vi.stubEnv('TRANSISTOR_SHOW_ID', 'test-show-id');
    vi.unstubAllGlobals();
  });

  describe('formatDuration', () => {
    it('converts seconds to minutes', async () => {
      const { formatDuration } = await import('../transistor');
      expect(formatDuration(3600)).toBe('60 min');
      expect(formatDuration(1800)).toBe('30 min');
      expect(formatDuration(90)).toBe('1 min');
      expect(formatDuration(0)).toBe('0 min');
    });

    it('floors partial minutes', async () => {
      const { formatDuration } = await import('../transistor');
      expect(formatDuration(150)).toBe('2 min');
    });
  });

  describe('formatDate', () => {
    it('formats date string to readable format', async () => {
      const { formatDate } = await import('../transistor');
      const result = formatDate('2025-01-15T00:00:00Z');
      expect(result).toBe('Jan 15, 2025');
    });

    it('handles different date formats', async () => {
      const { formatDate } = await import('../transistor');
      const result = formatDate('2024-12-25');
      expect(result).toBe('Dec 25, 2024');
    });
  });

  describe('getEpisodes', () => {
    it('fetches and maps episodes', async () => {
      const mockData = {
        data: [
          {
            id: '1',
            attributes: {
              title: 'Episode 1',
              summary: 'Summary',
              description: 'Description',
              published_at: '2025-01-01',
              duration: 1800,
              audio_url: 'https://audio.test/1.mp3',
              share_url: 'https://share.test/1',
              image_url: 'https://img.test/1.jpg',
            },
          },
        ],
      };

      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          ok: true,
          json: () => Promise.resolve(mockData),
        })
      );

      const { getEpisodes } = await import('../transistor');
      const episodes = await getEpisodes(10);
      expect(episodes).toHaveLength(1);
      expect(episodes[0].title).toBe('Episode 1');
      expect(episodes[0].duration).toBe(1800);
    });

    it('returns empty array on API error', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          ok: false,
          status: 500,
        })
      );

      const { getEpisodes } = await import('../transistor');
      const episodes = await getEpisodes();
      expect(episodes).toEqual([]);
    });

    it('uses default limit of 10', async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          ok: true,
          json: () => Promise.resolve({ data: [] }),
        })
      );

      const { getEpisodes } = await import('../transistor');
      await getEpisodes();
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('pagination[per]=10'),
        expect.any(Object)
      );
    });
  });
});
