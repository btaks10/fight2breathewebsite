import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders as a button by default', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders as internal link when href provided', () => {
    render(<Button href="/about">About</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/about');
  });

  it('renders as external link when href and external provided', () => {
    render(
      <Button href="https://example.com" external>
        External
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('calls onClick handler', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  describe('variants', () => {
    it.each(['primary', 'secondary', 'ghost', 'dark', 'ombre'] as const)(
      'renders %s variant',
      (variant) => {
        render(<Button variant={variant}>Test</Button>);
        expect(screen.getByRole('button')).toBeInTheDocument();
      }
    );
  });

  describe('sizes', () => {
    it.each(['sm', 'default', 'lg'] as const)('renders %s size', (size) => {
      render(<Button size={size}>Test</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('sets button type', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('defaults to button type', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});
