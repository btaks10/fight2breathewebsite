import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PodcastSection } from '../PodcastSection';

describe('PodcastSection', () => {
  it('renders the section heading', () => {
    render(<PodcastSection />);
    expect(screen.getByText('Our Fight to Breathe')).toBeInTheDocument();
  });

  it('renders the latest episode card', () => {
    render(<PodcastSection />);
    expect(screen.getByText('Latest Episode')).toBeInTheDocument();
    expect(screen.getByText('Episode 24')).toBeInTheDocument();
  });

  it('renders platform links', () => {
    render(<PodcastSection />);
    expect(screen.getByText('Apple Podcasts')).toBeInTheDocument();
    expect(screen.getByText('Spotify')).toBeInTheDocument();
    expect(screen.getByText('Amazon')).toBeInTheDocument();
    expect(screen.getByText('Pocket Casts')).toBeInTheDocument();
  });

  it('renders the See All Episodes button', () => {
    render(<PodcastSection />);
    expect(screen.getByText('See All Episodes')).toBeInTheDocument();
  });

  it('renders podcast cover image', () => {
    render(<PodcastSection />);
    expect(
      screen.getByAltText('Our Fight to Breathe Podcast')
    ).toBeInTheDocument();
  });

  it('renders play button', () => {
    render(<PodcastSection />);
    expect(screen.getByLabelText('Play podcast')).toBeInTheDocument();
  });
});
