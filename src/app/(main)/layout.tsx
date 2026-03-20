import { Header, Footer } from '@/components/layout';
import { AccessibilityWidget } from '@/components/AccessibilityWidget';
import { ColorBlindFilters } from '@/components/ColorBlindFilters';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ColorBlindFilters />
      <Header />
      <AccessibilityWidget />
      <main>{children}</main>
      <Footer />
    </>
  );
}
