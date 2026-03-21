import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => ({
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          order: vi.fn(() => ({
            data: [
              {
                id: '1',
                section: 'hero',
                image_url: '/hero.jpg',
                alt_text: 'Hero image',
                display_order: 1,
                created_at: '2024-01-01',
              },
            ],
            error: null,
            limit: vi.fn(() => ({
              single: vi.fn(() => ({
                data: {
                  id: '1',
                  section: 'hero',
                  image_url: '/hero.jpg',
                  alt_text: 'Hero image',
                  display_order: 1,
                  created_at: '2024-01-01',
                },
                error: null,
              })),
            })),
          })),
        })),
      })),
    })),
  })),
}));

describe('supabase', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getSectionImages', () => {
    it('returns images for a section', async () => {
      const { getSectionImages } = await import('../supabase');
      const images = await getSectionImages('hero');
      expect(images).toHaveLength(1);
      expect(images[0].section).toBe('hero');
    });
  });

  describe('getSectionImage', () => {
    it('returns a single image for a section', async () => {
      const { getSectionImage } = await import('../supabase');
      const image = await getSectionImage('hero');
      expect(image).not.toBeNull();
      expect(image?.image_url).toBe('/hero.jpg');
    });
  });

  describe('supabase client', () => {
    it('exports a supabase client', async () => {
      const { supabase } = await import('../supabase');
      expect(supabase).toBeDefined();
    });
  });
});
