import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WorkWithCaleigh from '../page';

describe('WorkWithCaleigh (Resume Page)', () => {
  it('renders the name heading', () => {
    render(<WorkWithCaleigh />);
    expect(screen.getByText(/Caleigh/)).toBeInTheDocument();
    expect(screen.getByText(/Haber-Takayama/)).toBeInTheDocument();
  });

  it('renders the title line', () => {
    const { container } = render(<WorkWithCaleigh />);
    const titleLine = container.querySelector('.r-title-line');
    expect(titleLine).toBeInTheDocument();
    expect(titleLine?.textContent).toContain('Patient Advocate');
  });

  it('renders contact links', () => {
    const { container } = render(<WorkWithCaleigh />);
    const contactRow = container.querySelector('.r-contact-row');
    expect(contactRow).toBeInTheDocument();
    expect(contactRow?.textContent).toContain('fight2breathe.org');
    expect(contactRow?.textContent).toContain('@Fight2Breathe');
    expect(contactRow?.textContent).toContain('caleigh@fight2breathe.org');
  });

  it('renders stats', () => {
    render(<WorkWithCaleigh />);
    expect(screen.getAllByText('71.9k').length).toBeGreaterThan(0);
    expect(screen.getAllByText('30+').length).toBeGreaterThan(0);
    expect(screen.getAllByText('10+').length).toBeGreaterThan(0);
  });

  it('renders health tags', () => {
    const { container } = render(<WorkWithCaleigh />);
    const healthTags = container.querySelector('.r-health-tags');
    expect(healthTags).toBeInTheDocument();
    expect(healthTags?.textContent).toContain('Cystic Fibrosis');
    expect(healthTags?.textContent).toContain('Rare Disease');
    expect(healthTags?.textContent).toContain('Diabetes');
  });

  it('renders the summary section', () => {
    render(<WorkWithCaleigh />);
    expect(
      screen.getByText(/Patient advocate and founder with 10\+ years/)
    ).toBeInTheDocument();
  });

  it('renders MailtoTag components', () => {
    render(<WorkWithCaleigh />);
    expect(screen.getByText('Brand Partnerships')).toBeInTheDocument();
    expect(screen.getByText('Speaking Engagement')).toBeInTheDocument();
    expect(screen.getByText('Patient Consulting')).toBeInTheDocument();
  });

  it('renders Experience section with details elements', () => {
    render(<WorkWithCaleigh />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
    const details = document.querySelectorAll('details.r-entry');
    expect(details.length).toBe(4);
  });

  it('renders experience entries', () => {
    render(<WorkWithCaleigh />);
    expect(screen.getByText(/Founder & CEO/)).toBeInTheDocument();
    expect(screen.getByText(/Community & Brand Strategy/)).toBeInTheDocument();
    expect(screen.getByText(/Public Speaker & Patient Advocate/)).toBeInTheDocument();
    expect(screen.getByText('Pastry Cook')).toBeInTheDocument();
  });

  it('renders Media & Press section', () => {
    render(<WorkWithCaleigh />);
    expect(screen.getByText(/Media & Press/)).toBeInTheDocument();
  });

  it('renders media table', () => {
    const { container } = render(<WorkWithCaleigh />);
    const table = container.querySelector('.r-media-table');
    expect(table).toBeInTheDocument();
    const rows = table?.querySelectorAll('tbody tr');
    expect(rows?.length).toBeGreaterThan(10);
  });

  it('renders Platform section in sidebar', () => {
    const { container } = render(<WorkWithCaleigh />);
    const sidebar = container.querySelector('.r-sidebar');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar?.textContent).toContain('Platform');
    expect(sidebar?.textContent).toContain('fight2breathe.org');
  });

  it('renders Expertise section', () => {
    const { container } = render(<WorkWithCaleigh />);
    const sidebar = container.querySelector('.r-sidebar');
    expect(sidebar?.textContent).toContain('Expertise');
    expect(sidebar?.textContent).toContain('Advocacy');
  });

  it('renders Recognition section', () => {
    render(<WorkWithCaleigh />);
    expect(screen.getByText('Recognition')).toBeInTheDocument();
    expect(screen.getByText('CFF Impact Grant recipient')).toBeInTheDocument();
    expect(screen.getByText('CFF Rose Award for Advocacy')).toBeInTheDocument();
  });

  it('renders Education section', () => {
    render(<WorkWithCaleigh />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText(/Culinary Arts/)).toBeInTheDocument();
  });

  it('renders the resume page wrapper', () => {
    const { container } = render(<WorkWithCaleigh />);
    expect(container.querySelector('.resume-page')).toBeInTheDocument();
  });
});
