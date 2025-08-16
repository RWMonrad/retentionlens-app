import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Insights - AI-Powered SaaS Industry Benchmarking',
  description: 'Access AI-generated market insights from 50,000+ SaaS companies. Get industry benchmarks, churn analysis, pricing strategies, and growth metrics 14 days ahead of major analysts.',
  keywords: [
    'SaaS market insights',
    'industry benchmarking',
    'SaaS benchmarks',
    'churn analysis',
    'pricing strategy',
    'SaaS growth metrics',
    'market research',
    'competitive analysis',
    'SaaS industry reports',
    'AI market analysis'
  ],
  openGraph: {
    title: 'Market Insights - AI-Powered SaaS Industry Benchmarking',
    description: 'Access AI-generated market insights from 50,000+ SaaS companies. Get industry benchmarks 14 days ahead of major analysts.',
    url: '/market-insights',
  },
  twitter: {
    title: 'Market Insights - AI-Powered SaaS Industry Benchmarking',
    description: 'Access AI-generated market insights from 50,000+ SaaS companies. Get industry benchmarks 14 days ahead of major analysts.',
  },
}

export default function MarketInsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

