import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { LangProvider } from '@/context/LangContext';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-space' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'José Vinícius — Full-Stack Senior Software Engineer',
  description: 'Full-stack Senior Software Engineer with 6+ years building web and mobile products with React, Next.js, React Native and TypeScript on a solid Java/Spring foundation.',
  openGraph: {
    title: 'José Vinícius — Full-Stack Senior Software Engineer',
    description: 'I build products that hold up under high volume.',
    url: 'https://josephdsbr.dev',
    siteName: 'José Vinícius',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-space), sans-serif' }}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
