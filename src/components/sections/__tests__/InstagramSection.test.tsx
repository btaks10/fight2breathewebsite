import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InstagramSection } from '../InstagramSection';

describe('InstagramSection', () => {
  it('renders the section heading', () => {
    render(<InstagramSection />);
    expect(screen.getByText('Follow the Journey')).toBeInTheDocument();
  });

  it('renders 6 Instagram post links', () => {
    render(<InstagramSection />);
    const links = screen.getAllByRole('link');
    const igLinks = links.filter(
      (link) => link.getAttribute('href') === 'https://www.instagram.com/fight2breathe'
    );
    // 6 posts + 1 CTA button = 7 links to instagram
    expect(igLinks.length).toBe(7);
  });

  it('renders Instagram post images', () => {
    render(<InstagramSection />);
    const images = screen.getAllByAltText('Instagram post');
    expect(images).toHaveLength(6);
  });

  it('renders the @fight2breathe CTA', () => {
    render(<InstagramSection />);
    expect(screen.getByText('@fight2breathe')).toBeInTheDocument();
  });

  it('Instagram links open in new tab', () => {
    render(<InstagramSection />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      if (link.getAttribute('href')?.includes('instagram')) {
        expect(link).toHaveAttribute('target', '_blank');
      }
    });
  });
});
