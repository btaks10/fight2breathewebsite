import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />);
    expect(screen.getByText('Fight2Breathe')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<Footer />);
    expect(
      screen.getByText('Every breath is worth fighting for.')
    ).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Footer />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Podcast')).toBeInTheDocument();
  });

  it('renders email link with mailto href', () => {
    render(<Footer />);
    expect(screen.getByText('Email').closest('a')).toHaveAttribute(
      'href',
      'mailto:caleigh@fight2breathe.org'
    );
  });

  it('renders external links with target blank', () => {
    render(<Footer />);
    const instagram = screen.getByText('Instagram').closest('a');
    expect(instagram).toHaveAttribute('target', '_blank');
    expect(instagram).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders Podcast as internal link', () => {
    render(<Footer />);
    expect(screen.getByText('Podcast').closest('a')).toHaveAttribute(
      'href',
      '/podcast'
    );
  });

  it('renders copyright with current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${year}`))
    ).toBeInTheDocument();
  });

  it('renders in a footer element', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
