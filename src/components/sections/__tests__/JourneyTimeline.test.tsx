import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { JourneyTimeline } from '../JourneyTimeline';

describe('JourneyTimeline', () => {
  it('renders the section heading', () => {
    render(<JourneyTimeline />);
    expect(screen.getByText('The Journey')).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<JourneyTimeline />);
    expect(
      screen.getByText('A life measured not in years, but in fights won.')
    ).toBeInTheDocument();
  });

  it('renders all milestone years', () => {
    render(<JourneyTimeline />);
    expect(screen.getByText('1990')).toBeInTheDocument();
    expect(screen.getByText('2005')).toBeInTheDocument();
    expect(screen.getByText('2013')).toBeInTheDocument();
    expect(screen.getByText('2015')).toBeInTheDocument();
    expect(screen.getByText('2017')).toBeInTheDocument();
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.getByText('Now')).toBeInTheDocument();
  });

  it('renders milestone titles', () => {
    render(<JourneyTimeline />);
    expect(screen.getByText('The Beginning')).toBeInTheDocument();
    expect(screen.getByText('The Mission')).toBeInTheDocument();
  });

  it('renders the CTA button on the last milestone', () => {
    render(<JourneyTimeline />);
    expect(
      screen.getByText("See What I'm Building Now")
    ).toBeInTheDocument();
  });

  it('renders milestone images', () => {
    render(<JourneyTimeline />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });
});
