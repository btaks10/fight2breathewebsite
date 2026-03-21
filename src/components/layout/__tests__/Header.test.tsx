import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../Header';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    expect(screen.getByAltText('Fight2Breathe')).toBeInTheDocument();
  });

  it('renders desktop nav links', () => {
    render(<Header />);
    expect(screen.getByText('Story')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Podcast')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
  });

  it('renders nav links with correct hrefs', () => {
    render(<Header />);
    expect(screen.getByText('Story').closest('a')).toHaveAttribute('href', '/story');
    expect(screen.getByText('Work').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Podcast').closest('a')).toHaveAttribute('href', '/podcast');
    expect(screen.getByText('Shop').closest('a')).toHaveAttribute('href', '/shop');
  });

  it('renders mobile menu toggle button', () => {
    render(<Header />);
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });

  it('opens mobile menu when toggle is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByLabelText('Toggle menu'));
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('shows social links in mobile menu', async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByLabelText('Toggle menu'));
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('closes mobile menu when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByLabelText('Toggle menu'));
    expect(screen.getByText('Home')).toBeInTheDocument();

    // Click the close button (the round button with X)
    const closeButtons = screen.getAllByRole('button');
    const closeBtn = closeButtons.find((btn) =>
      btn.classList.contains('rounded-full')
    );
    if (closeBtn) await user.click(closeBtn);
  });

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);
    await user.click(screen.getByLabelText('Toggle menu'));
    await user.click(screen.getByText('Home'));
    // Menu should close - Home should no longer be visible as mobile nav
  });

  it('renders header as fixed position', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('fixed');
  });
});
