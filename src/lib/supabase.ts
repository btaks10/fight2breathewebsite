import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for the site_images table
export interface SiteImage {
  id: string;
  section: string;
  image_url: string;
  alt_text: string;
  display_order: number;
  created_at: string;
}

// Helper function to get images for a specific section
export async function getSectionImages(section: string): Promise<SiteImage[]> {
  const { data, error } = await supabase
    .from('site_images')
    .select('*')
    .eq('section', section)
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching images:', error);
    return [];
  }

  return data || [];
}

// Helper function to get a single image by section (for hero, etc.)
export async function getSectionImage(section: string): Promise<SiteImage | null> {
  const { data, error } = await supabase
    .from('site_images')
    .select('*')
    .eq('section', section)
    .order('display_order', { ascending: true })
    .limit(1)
    .single();

  if (error) {
    console.error('Error fetching image:', error);
    return null;
  }

  return data;
}
