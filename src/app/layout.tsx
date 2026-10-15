import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StepBar, NextStep } from '@/components/Guide';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Miabôh — Développement durable, RSE et normes pour les entreprises',
    template: '%s · Miabôh Durable',
  },
  description:
    'Comprendre le développement durable, la RSE, les ODD et les normes (ISO 26000, 14001, SA8000…), mettre en place une démarche dans son entreprise et s’entraîner avec plus de 700 questions classées par niveau.',
  keywords: ['développement durable', 'RSE', 'ISO 26000', 'ODD', 'Togo', 'entreprise', 'quiz'],
};

export const viewport: Viewport = {
  themeColor: '#0b2e22',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <Header />
        <StepBar />
        <main>{children}</main>
        <NextStep />
        <Footer />
      </body>
    </html>
  );
}
