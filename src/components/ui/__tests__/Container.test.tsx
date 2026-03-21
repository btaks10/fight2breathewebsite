import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container } from '../Container';

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Content</Container>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('defaults to lg size', () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstChild).toHaveClass('max-w-7xl');
  });

  it.each([
    ['sm', 'max-w-3xl'],
    ['md', 'max-w-5xl'],
    ['lg', 'max-w-7xl'],
    ['xl', 'max-w-[1400px]'],
    ['full', 'max-w-full'],
  ] as const)('renders %s size with class %s', (size, expectedClass) => {
    const { container } = render(<Container size={size}>Content</Container>);
    expect(container.firstChild).toHaveClass(expectedClass);
  });

  it('applies custom className', () => {
    const { container } = render(
      <Container className="custom-class">Content</Container>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('always has padding classes', () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstChild).toHaveClass('px-4');
    expect(container.firstChild).toHaveClass('mx-auto');
  });
});
