import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage', () => {
  it('renders the hero heading', () => {
    render(<HomePage />);
    expect(
      screen.getByText('Breathing is a full-time job.')
    ).toBeInTheDocument();
  });

  it('renders the second hero line', () => {
    render(<HomePage />);
    expect(
      screen.getByText('It turned survival into purpose.')
    ).toBeInTheDocument();
  });

  it('renders the Meet Her section', () => {
    render(<HomePage />);
    expect(screen.getByText("I'm Caleigh")).toBeInTheDocument();
  });

  it('renders the pull quote', () => {
    render(<HomePage />);
    expect(
      screen.getByText(
        /I have been fighting my whole life and I'm not done yet/
      )
    ).toBeInTheDocument();
  });

  it('renders the Journey Timeline', () => {
    render(<HomePage />);
    expect(screen.getByText('The Journey')).toBeInTheDocument();
  });

  it('renders the podcast section', () => {
    render(<HomePage />);
    expect(screen.getByText('Our Fight to Breathe')).toBeInTheDocument();
  });

  it('renders the Join the Fight section', () => {
    render(<HomePage />);
    expect(screen.getByText('Join the Fight')).toBeInTheDocument();
  });

  it('renders Read My Full Story button', () => {
    render(<HomePage />);
    expect(screen.getByText('Read My Full Story')).toBeInTheDocument();
  });

  it('renders Visit Shop button', () => {
    render(<HomePage />);
    expect(screen.getByText('Visit Shop')).toBeInTheDocument();
  });

  it('renders the hero image', () => {
    render(<HomePage />);
    const images = screen.getAllByAltText('Caleigh');
    expect(images.length).toBeGreaterThan(0);
  });
});
