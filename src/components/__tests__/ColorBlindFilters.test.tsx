import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ColorBlindFilters } from '../ColorBlindFilters';

describe('ColorBlindFilters', () => {
  it('renders a hidden SVG element', () => {
    const { container } = render(<ColorBlindFilters />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders deuteranopia filter', () => {
    const { container } = render(<ColorBlindFilters />);
    expect(container.querySelector('#deuteranopia-filter')).toBeInTheDocument();
  });

  it('renders protanopia filter', () => {
    const { container } = render(<ColorBlindFilters />);
    expect(container.querySelector('#protanopia-filter')).toBeInTheDocument();
  });

  it('renders tritanopia filter', () => {
    const { container } = render(<ColorBlindFilters />);
    expect(container.querySelector('#tritanopia-filter')).toBeInTheDocument();
  });

  it('all filters contain feColorMatrix elements', () => {
    const { container } = render(<ColorBlindFilters />);
    const matrices = container.querySelectorAll('feColorMatrix');
    expect(matrices).toHaveLength(3);
  });

  it('all filters use matrix type', () => {
    const { container } = render(<ColorBlindFilters />);
    const matrices = container.querySelectorAll('feColorMatrix');
    matrices.forEach((matrix) => {
      expect(matrix).toHaveAttribute('type', 'matrix');
    });
  });
});
