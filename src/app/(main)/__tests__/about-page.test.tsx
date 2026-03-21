import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from '../about/page';

describe('AboutPage', () => {
  it('renders the page heading', () => {
    render(<AboutPage />);
    expect(
      screen.getByText('Caleigh Haber-Takayama')
    ).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<AboutPage />);
    expect(
      screen.getByText('Patient. Builder. Advocate. Chronic Badass.')
    ).toBeInTheDocument();
  });

  it('renders all role cards', () => {
    render(<AboutPage />);
    expect(screen.getByText('Fight2Breathe')).toBeInTheDocument();
    expect(screen.getByText('pRxTrialPort')).toBeInTheDocument();
    expect(screen.getByText('Patient Consulting')).toBeInTheDocument();
    expect(screen.getByText('BreatheCon')).toBeInTheDocument();
    expect(screen.getByText('Podcast')).toBeInTheDocument();
    expect(screen.getByText('Speaking')).toBeInTheDocument();
    expect(screen.getByText('Awards')).toBeInTheDocument();
  });

  it('renders the Work With Me section', () => {
    render(<AboutPage />);
    expect(screen.getByText('Work With Me')).toBeInTheDocument();
  });

  it('renders Get in Touch button', () => {
    render(<AboutPage />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('renders Follow Along button', () => {
    render(<AboutPage />);
    expect(screen.getByText('Follow Along')).toBeInTheDocument();
  });

  it('renders the portrait image', () => {
    render(<AboutPage />);
    expect(
      screen.getByAltText('Caleigh Haber-Takayama')
    ).toBeInTheDocument();
  });
});
