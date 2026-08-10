import { Metadata } from 'next';
import { AuthorityDashboard } from '@/components/authority-dashboard';

export const metadata: Metadata = {
  title: 'External Authority & Entity Dashboard | MuseCS Internal Governance',
  description: 'Internal administrative dashboard for monitoring entity consistency, external profile verification, AI discoverability, and technical SEO health.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true
    }
  }
};

export default function AuthorityPage() {
  return <AuthorityDashboard />;
}
