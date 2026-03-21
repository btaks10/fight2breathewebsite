import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MailtoTag } from '../MailtoTag';

describe('MailtoTag', () => {
  it('renders the label text', () => {
    render(
      <MailtoTag
        label="Brand Partnerships"
        subject="Test Subject"
        body="Test body"
      />
    );
    expect(screen.getByText('Brand Partnerships')).toBeInTheDocument();
  });

  it('constructs correct mailto href', () => {
    render(
      <MailtoTag
        label="Speaking"
        subject="Speaking Inquiry"
        body="Hello there"
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      `mailto:caleigh@fight2breathe.org?subject=${encodeURIComponent('Speaking Inquiry')}&body=${encodeURIComponent('Hello there')}`
    );
  });

  it('encodes special characters in subject and body', () => {
    render(
      <MailtoTag
        label="Test"
        subject="Subject & More"
        body="Body with spaces & symbols!"
      />
    );
    const link = screen.getByRole('link');
    const href = link.getAttribute('href')!;
    expect(href).toContain(encodeURIComponent('Subject & More'));
    expect(href).toContain(encodeURIComponent('Body with spaces & symbols!'));
  });

  it('applies r-tag class', () => {
    render(
      <MailtoTag label="Test" subject="Sub" body="Body" />
    );
    expect(screen.getByRole('link')).toHaveClass('r-tag');
  });

  it('renders as an anchor element', () => {
    render(
      <MailtoTag label="Contact" subject="Sub" body="Body" />
    );
    expect(screen.getByRole('link').tagName).toBe('A');
  });
});
