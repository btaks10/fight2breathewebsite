import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainLayout from '../layout';

describe('MainLayout', () => {
  it('renders Header', () => {
    render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
    // Header renders logo
    expect(screen.getAllByAltText('Fight2Breathe').length).toBeGreaterThan(0);
  });

  it('renders Footer', () => {
    render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
    expect(
      screen.getByText('Every breath is worth fighting for.')
    ).toBeInTheDocument();
  });

  it('renders AccessibilityWidget', () => {
    render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
    expect(
      screen.getByLabelText('Accessibility Options (Alt + A)')
    ).toBeInTheDocument();
  });

  it('renders children in main element', () => {
    render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByRole('main')).toContainElement(
      screen.getByText('Test Content')
    );
  });

  it('renders ColorBlindFilters', () => {
    const { container } = render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    );
    expect(
      container.querySelector('#deuteranopia-filter')
    ).toBeInTheDocument();
  });
});
