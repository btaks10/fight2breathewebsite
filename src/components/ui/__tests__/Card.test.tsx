import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, ProductCard, InstagramCard } from '../Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Card className="custom">Content</Card>);
    expect(container.firstChild).toHaveClass('custom');
  });

  it('renders without children', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toBeInTheDocument();
  });
});

describe('ProductCard', () => {
  const defaultProps = {
    image: '/test-product.jpg',
    title: 'Test Product',
    price: '$25',
    href: 'https://shop.test/product',
  };

  it('renders product title', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('renders product price', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText('$25')).toBeInTheDocument();
  });

  it('renders as an external link', () => {
    render(<ProductCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://shop.test/product');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders product image', () => {
    render(<ProductCard {...defaultProps} />);
    const img = screen.getByAltText('Test Product');
    expect(img).toBeInTheDocument();
  });

  it('renders without price', () => {
    const { price: _, ...propsWithoutPrice } = defaultProps;
    render(<ProductCard {...propsWithoutPrice} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});

describe('InstagramCard', () => {
  const defaultProps = {
    image: '/ig-post.jpg',
    href: 'https://instagram.com/fight2breathe',
  };

  it('renders as an external link', () => {
    render(<InstagramCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://instagram.com/fight2breathe');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders Instagram post image', () => {
    render(<InstagramCard {...defaultProps} />);
    expect(screen.getByAltText('Instagram post')).toBeInTheDocument();
  });
});
