import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Chakra_Petch } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/custom-cursor';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const chakra = Chakra_Petch({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-chakra' });

export const metadata: Metadata = {
  title: 'Muse Consultancy Services',
  description: 'Technology consulting and software development company',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body className={`${jakarta.variable} ${chakra.variable} font-sans bg-[#050505] text-[#F5F5F5] antialiased`} suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

