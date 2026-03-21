import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutPreview } from '../AboutPreview';

describe('AboutPreview', () => {
  it('renders the heading', () => {
    render(<AboutPreview />);
    expect(screen.getByText('Meet Caleigh')).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<AboutPreview />);
    expect(screen.getByText('Read Her Full Story')).toBeInTheDocument();
  });

  it('renders CTA button with link to /about', () => {
    render(<AboutPreview />);
    expect(
      screen.getByText('Read Her Full Story').closest('a')
    ).toHaveAttribute('href', '/about');
  });

  it('renders the image', () => {
    render(<AboutPreview />);
    expect(
      screen.getByAltText('Caleigh - Fight2Breathe Founder')
    ).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<AboutPreview />);
    expect(
      screen.getByText(/Living with Cystic Fibrosis since birth/)
    ).toBeInTheDocument();
  });
});
