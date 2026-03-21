import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Fighting for.*Every Breath/
    );
  });

  it('renders the description text', () => {
    render(<Hero />);
    expect(
      screen.getByText(/Meet Caleigh.*CF warrior/)
    ).toBeInTheDocument();
  });

  it('renders Meet Caleigh button', () => {
    render(<Hero />);
    expect(screen.getByText('Meet Caleigh')).toBeInTheDocument();
  });

  it('renders Listen to the Podcast button', () => {
    render(<Hero />);
    expect(screen.getByText('Listen to the Podcast')).toBeInTheDocument();
  });

  it('renders Meet Caleigh link to /about', () => {
    render(<Hero />);
    expect(screen.getByText('Meet Caleigh').closest('a')).toHaveAttribute(
      'href',
      '/about'
    );
  });

  it('renders Podcast link to /podcast', () => {
    render(<Hero />);
    expect(
      screen.getByText('Listen to the Podcast').closest('a')
    ).toHaveAttribute('href', '/podcast');
  });

  it('renders scroll indicator', () => {
    render(<Hero />);
    expect(screen.getByText('Scroll to explore')).toBeInTheDocument();
  });
});
