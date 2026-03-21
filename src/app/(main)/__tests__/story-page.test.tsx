import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StoryPage from '../story/page';

describe('StoryPage', () => {
  it('renders the hero heading', () => {
    render(<StoryPage />);
    expect(
      screen.getByText(/I've been fighting/)
    ).toBeInTheDocument();
  });

  it('renders chapter years', () => {
    render(<StoryPage />);
    expect(screen.getAllByText('1990').length).toBeGreaterThan(0);
    expect(screen.getByText('2008')).toBeInTheDocument();
    expect(screen.getByText('2013')).toBeInTheDocument();
    expect(screen.getByText('2015')).toBeInTheDocument();
    expect(screen.getAllByText('2017').length).toBeGreaterThan(0);
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.getByText('Now')).toBeInTheDocument();
  });

  it('renders Understanding CF section', () => {
    render(<StoryPage />);
    expect(
      screen.getByText('Understanding Cystic Fibrosis')
    ).toBeInTheDocument();
  });

  it('renders the main pull quote', () => {
    render(<StoryPage />);
    expect(
      screen.getByText(
        /I have been fighting my whole life, and I'm not done yet/
      )
    ).toBeInTheDocument();
  });

  it('renders the CTA at the bottom', () => {
    render(<StoryPage />);
    expect(screen.getByText('View My Work')).toBeInTheDocument();
  });

  it('renders the View My Work link to /about', () => {
    render(<StoryPage />);
    expect(screen.getByText('View My Work').closest('a')).toHaveAttribute(
      'href',
      '/about'
    );
  });
});
