import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'RetentionLens - AI-Powered SaaS Analytics Platform',
    template: '%s | RetentionLens'
  },
  description: 'AI-powered SaaS analytics platform with 90%+ accuracy churn prediction, revenue forecasting, and real-time benchmarking against 50,000+ companies. Reduce churn by 22% and increase revenue growth by 34%.',
  keywords: [
    'SaaS analytics',
    'AI churn prediction',
    'machine learning revenue forecasting',
    'SaaS benchmarking',
    'predictive analytics',
    'customer lifetime value',
    'SaaS metrics',
    'business intelligence',
    'AI-powered analytics',
    'real-time SaaS insights'
  ],
  authors: [{ name: 'RetentionLens' }],
  creator: 'RetentionLens',
  publisher: 'RetentionLens',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'RetentionLens - AI-Powered SaaS Analytics Platform',
    description: 'AI-powered SaaS analytics platform with 90%+ accuracy churn prediction, revenue forecasting, and real-time benchmarking against 50,000+ companies.',
    url: 'https://retentionlens.com',
    siteName: 'RetentionLens',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RetentionLens - AI-Powered SaaS Analytics Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RetentionLens - AI-Powered SaaS Analytics Platform',
    description: 'AI-powered SaaS analytics platform with 90%+ accuracy churn prediction, revenue forecasting, and real-time benchmarking.',
    creator: '@retentionlens',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fonts/samsung-sans.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
          {children}
          <Toaster position="top-right" />
      </body>
    </html>
  );
}
