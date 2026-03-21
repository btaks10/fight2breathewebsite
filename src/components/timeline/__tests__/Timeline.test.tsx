import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Timeline } from '../Timeline';
import type { TimelineEvent } from '../Timeline';

const mockEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '2015',
    title: 'First Event',
    description: 'Description of first event',
    image: '/test-image.jpg',
  },
  {
    id: '2',
    year: '2018',
    title: 'Second Event',
    description: 'Description of second event',
    quote: 'A meaningful quote',
  },
  {
    id: '3',
    year: '2020',
    title: 'Third Event',
    description: 'Description of third event',
  },
];

describe('Timeline', () => {
  it('renders all timeline events', () => {
    render(<Timeline events={mockEvents} />);
    expect(screen.getByText('First Event')).toBeInTheDocument();
    expect(screen.getByText('Second Event')).toBeInTheDocument();
    expect(screen.getByText('Third Event')).toBeInTheDocument();
  });

  it('renders event years', () => {
    render(<Timeline events={mockEvents} />);
    expect(screen.getAllByText('2015')).toHaveLength(1);
    expect(screen.getByText('2018')).toBeInTheDocument();
    expect(screen.getByText('2020')).toBeInTheDocument();
  });

  it('renders event descriptions', () => {
    render(<Timeline events={mockEvents} />);
    expect(screen.getByText('Description of first event')).toBeInTheDocument();
    expect(screen.getByText('Description of second event')).toBeInTheDocument();
  });

  it('renders event image when provided', () => {
    render(<Timeline events={mockEvents} />);
    const img = screen.getByAltText('First Event');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-image.jpg');
  });

  it('renders blockquote when quote is provided', () => {
    render(<Timeline events={mockEvents} />);
    expect(screen.getByText(/A meaningful quote/)).toBeInTheDocument();
  });

  it('does not render blockquote when no quote', () => {
    render(<Timeline events={[mockEvents[0]]} />);
    const blockquotes = document.querySelectorAll('blockquote');
    expect(blockquotes).toHaveLength(0);
  });

  it('renders empty timeline', () => {
    const { container } = render(<Timeline events={[]} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
