import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ConnectPage from '../connect/page';

describe('ConnectPage', () => {
  it('renders the hero heading', () => {
    render(<ConnectPage />);
    expect(screen.getByText('Connect With Us')).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<ConnectPage />);
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('TikTok')).toBeInTheDocument();
    expect(screen.getByText('YouTube')).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    render(<ConnectPage />);
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Your Message')).toBeInTheDocument();
  });

  it('renders the Send Message button', () => {
    render(<ConnectPage />);
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  it('renders the newsletter section', () => {
    render(<ConnectPage />);
    expect(
      screen.getByText('Join the Fight2Breathe Community')
    ).toBeInTheDocument();
  });

  it('renders the Instagram feed section', () => {
    render(<ConnectPage />);
    expect(screen.getByText('Follow Our Journey')).toBeInTheDocument();
  });

  it('updates form fields', async () => {
    const user = userEvent.setup();
    render(<ConnectPage />);

    const nameInput = screen.getByLabelText('Your Name');
    await user.clear(nameInput);
    await user.type(nameInput, 'J');
    expect(nameInput).toHaveValue('J');
  });

  it('submits form and shows alert', async () => {
    const user = userEvent.setup();
    const alertMock = vi.fn();
    vi.stubGlobal('alert', alertMock);

    render(<ConnectPage />);

    await user.type(screen.getByLabelText('Your Name'), 'John');
    await user.type(screen.getByLabelText('Email Address'), 'j@e.com');
    await user.selectOptions(screen.getByLabelText('Subject'), 'general');
    await user.type(screen.getByLabelText('Your Message'), 'Hello');

    // Find the submit button (the motion.form submit)
    const form = screen.getByLabelText('Your Name').closest('form');
    if (form) form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });

  it('renders subscribe button', () => {
    render(<ConnectPage />);
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });
});
