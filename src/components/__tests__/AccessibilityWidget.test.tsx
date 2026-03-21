import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AccessibilityWidget } from '../AccessibilityWidget';

describe('AccessibilityWidget', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    document.documentElement.style.fontSize = '';
    document.documentElement.className = '';
    document.documentElement.dataset.colorblind = '';
  });

  it('renders the accessibility button', () => {
    render(<AccessibilityWidget />);
    expect(
      screen.getByLabelText('Accessibility Options (Alt + A)')
    ).toBeInTheDocument();
  });

  it('opens panel when button is clicked', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes panel when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.click(screen.getByLabelText('Close'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('toggles panel with Alt+A keyboard shortcut', async () => {
    render(<AccessibilityWidget />);
    await act(async () => {
      window.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'a', altKey: true })
      );
    });
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await act(async () => {
      window.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'a', altKey: true })
      );
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes panel with Escape key', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await act(async () => {
      window.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'Escape' })
      );
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders text size buttons', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    expect(screen.getByText('Small')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Large')).toBeInTheDocument();
    expect(screen.getByText('XL')).toBeInTheDocument();
  });

  it('renders toggle switches', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    expect(screen.getByText('High Contrast')).toBeInTheDocument();
    expect(screen.getByText('Reduced Motion')).toBeInTheDocument();
    expect(screen.getByText('Dyslexia-Friendly Font')).toBeInTheDocument();
  });

  it('renders color vision select', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    expect(screen.getByText('Color Vision')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Default')).toBeInTheDocument();
  });

  it('persists settings to localStorage', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    await user.click(screen.getByText('Large'));

    expect(localStorage.setItem).toHaveBeenCalled();
    // Find the last call with 'accessibilitySettings' key
    const calls = vi.mocked(localStorage.setItem).mock.calls.filter(
      (call) => call[0] === 'accessibilitySettings'
    );
    expect(calls.length).toBeGreaterThan(0);
    const lastCall = calls[calls.length - 1];
    const saved = JSON.parse(lastCall[1]);
    expect(saved.textSize).toBe('large');
  });

  it('renders Read Page button', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    expect(screen.getByText('Read Page')).toBeInTheDocument();
  });

  it('renders speed control buttons', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    expect(screen.getByText('0.5x')).toBeInTheDocument();
    expect(screen.getByText('1x')).toBeInTheDocument();
    expect(screen.getByText('1.5x')).toBeInTheDocument();
    expect(screen.getByText('2x')).toBeInTheDocument();
  });

  it('renders reset button', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    expect(screen.getByText('Reset to Defaults')).toBeInTheDocument();
  });

  it('renders keyboard hint', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));
    expect(screen.getByText('Press Alt + A to toggle this panel')).toBeInTheDocument();
  });

  it('toggles high contrast', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));

    const highContrastSwitch = screen.getByRole('switch', { name: /high contrast/i });
    expect(highContrastSwitch).toHaveAttribute('aria-checked', 'false');
    await user.click(highContrastSwitch);
    expect(highContrastSwitch).toHaveAttribute('aria-checked', 'true');
  });

  it('toggles reduced motion', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));

    const switch_ = screen.getByRole('switch', { name: /reduced motion/i });
    expect(switch_).toHaveAttribute('aria-checked', 'false');
    await user.click(switch_);
    expect(switch_).toHaveAttribute('aria-checked', 'true');
  });

  it('toggles dyslexia font', async () => {
    const user = userEvent.setup();
    render(<AccessibilityWidget />);
    await user.click(screen.getByLabelText('Accessibility Options (Alt + A)'));

    const switch_ = screen.getByRole('switch', { name: /dyslexia/i });
    expect(switch_).toHaveAttribute('aria-checked', 'false');
    await user.click(switch_);
    expect(switch_).toHaveAttribute('aria-checked', 'true');
  });
});
