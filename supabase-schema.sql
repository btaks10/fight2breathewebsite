-- Supabase Schema for Fight2Breathe
-- Run this in your Supabase SQL editor to set up the database

-- Create site_images table for managing dynamic images
CREATE TABLE IF NOT EXISTS site_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section TEXT NOT NULL,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index on section for faster queries
CREATE INDEX IF NOT EXISTS idx_site_images_section ON site_images(section);

-- Enable Row Level Security
ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Allow public read access" ON site_images
  FOR SELECT
  USING (true);

-- Policy: Allow authenticated users to insert/update/delete (for admin)
CREATE POLICY "Allow authenticated users to manage images" ON site_images
  FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Create storage bucket for images (run in storage section)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true);

-- Sample data for initial setup
INSERT INTO site_images (section, image_url, alt_text, display_order) VALUES
  ('hero', '/images/hero-placeholder.jpg', 'Caleigh - Fight2Breathe Founder', 1),
  ('about', '/images/about-placeholder.jpg', 'About Caleigh', 1),
  ('timeline-1', '/images/timeline-1.jpg', 'Diagnosis Day', 1),
  ('timeline-2', '/images/timeline-2.jpg', 'First Surgery', 2),
  ('timeline-3', '/images/timeline-3.jpg', 'Transplant Journey', 3),
  ('timeline-4', '/images/timeline-4.jpg', 'Founding Fight2Breathe', 4),
  ('timeline-5', '/images/timeline-5.jpg', 'Podcast Launch', 5),
  ('podcast', '/images/podcast-cover.jpg', 'Our Fight to Breathe Podcast', 1);
