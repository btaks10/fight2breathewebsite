'use client';

export function MailtoTag({
  label,
  subject,
  body,
}: {
  label: string;
  subject: string;
  body: string;
}) {
  const href = `mailto:caleigh@fight2breathe.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a href={href} className="r-tag">
      {label}
    </a>
  );
}
