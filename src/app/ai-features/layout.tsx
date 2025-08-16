import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Features - Advanced Machine Learning for SaaS Analytics',
  description: 'Discover RetentionLens\' 6 AI systems: 90%+ accuracy churn prediction, revenue forecasting, smart alerts, intelligent benchmarking, and real-time intelligence. $4.20 ROI per $1 invested.',
  keywords: [
    'AI SaaS analytics',
    'machine learning churn prediction',
    'predictive analytics engine',
    'smart alert system',
    'intelligent benchmarking',
    'revenue optimization AI',
    'real-time intelligence',
    'SaaS AI features',
    'automated insights',
    'AI-powered recommendations'
  ],
  openGraph: {
    title: 'AI Features - Advanced Machine Learning for SaaS Analytics',
    description: 'Discover RetentionLens\' 6 AI systems: 90%+ accuracy churn prediction, revenue forecasting, smart alerts, intelligent benchmarking, and real-time intelligence.',
    url: '/ai-features',
  },
  twitter: {
    title: 'AI Features - Advanced Machine Learning for SaaS Analytics',
    description: 'Discover RetentionLens\' 6 AI systems: 90%+ accuracy churn prediction, revenue forecasting, smart alerts, intelligent benchmarking, and real-time intelligence.',
  },
}

export default function AIFeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

