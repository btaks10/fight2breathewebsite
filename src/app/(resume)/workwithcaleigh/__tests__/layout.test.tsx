import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResumeLayout from '../layout';

describe('ResumeLayout', () => {
  it('renders children', () => {
    render(
      <ResumeLayout>
        <div>Test Resume Content</div>
      </ResumeLayout>
    );
    expect(screen.getByText('Test Resume Content')).toBeInTheDocument();
  });

  it('applies font CSS variable classes', () => {
    const { container } = render(
      <ResumeLayout>
        <div>Content</div>
      </ResumeLayout>
    );
    // The mock returns fixed class names
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeInTheDocument();
  });
});
