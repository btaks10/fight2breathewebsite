import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeading } from '../SectionHeading';

describe('SectionHeading', () => {
  it('renders the title', () => {
    render(<SectionHeading title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders title as h2', () => {
    render(<SectionHeading title="Test Title" />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Test Title'
    );
  });

  it('renders subtitle when provided', () => {
    render(<SectionHeading title="Title" subtitle="Subtitle text" />);
    expect(screen.getByText('Subtitle text')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    const { container } = render(<SectionHeading title="Title" />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs).toHaveLength(0);
  });

  it('renders centered by default', () => {
    const { container } = render(<SectionHeading title="Title" />);
    expect(container.firstChild).toHaveClass('text-center');
  });

  it('renders left-aligned when centered is false', () => {
    const { container } = render(
      <SectionHeading title="Title" centered={false} />
    );
    expect(container.firstChild).not.toHaveClass('text-center');
  });

  it('renders accent bar', () => {
    const { container } = render(<SectionHeading title="Title" />);
    const bar = container.querySelector('.bg-accent');
    expect(bar).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <SectionHeading title="Title" className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
