import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import ExpandableSection from '../../components/ui/expandable-section';
import ResearchTable from '../../components/research/research-table';
import MethodologySection from '../../components/research/methodology-section';
import BenchmarkingTable from '../../components/research/benchmarking-table';
import ResearchCalendar from '../../components/research/research-calendar';
import AccessLevelsTable from '../../components/research/access-levels-table';
import PlatformCapabilitiesTable from '../../components/research/platform-capabilities-table';
import ProfessionalServicesTable from '../../components/research/professional-services-table';
import Footer from '../../components/footer';

// Data imports
import { researchPublications, researchDescriptions } from '../../data/research-publications';
import { methodologyData } from '../../data/methodology-data';
import { benchmarkingStandards, benchmarkingMethodology } from '../../data/benchmarking-standards';
import { researchCalendar, researchDevelopmentProcess } from '../../data/research-calendar';
import { accessLevels, distributionMethodology } from '../../data/access-levels';
import { platformCapabilities, platformIntegrationText } from '../../data/platform-capabilities';
import { professionalServices, professionalServicesFramework } from '../../data/professional-services';
import { introContent } from '../../data/intro-content';

export const metadata: Metadata = {
  title: 'Research & Market Intelligence | RetentionLens - SaaS Analytics Research Hub',
  description: 'Access cutting-edge SaaS analytics research, industry benchmarking standards, and predictive intelligence. Published research cited in earnings calls by Series B and C companies.',
  keywords: [
    'SaaS analytics research',
    'market intelligence',
    'customer churn prediction',
    'SaaS benchmarking',
    'predictive analytics research',
    'SaaS industry reports',
    'revenue intelligence',
    'SaaS metrics research',
    'customer analytics',
    'SaaS market trends'
  ],
  authors: [{ name: 'RetentionLens Research Team' }],
  creator: 'RetentionLens',
  publisher: 'RetentionLens',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://glassboxmetrics.com/market-insights',
    title: 'Research & Market Intelligence | GlassBox Metrics',
    description: 'Access cutting-edge SaaS analytics research, industry benchmarking standards, and predictive intelligence. Published research cited in earnings calls by Series B and C companies.',
    siteName: 'GlassBox Metrics',
    images: [
      {
        url: 'https://retentionlens.com/og-market-insights.jpg',
        width: 1200,
        height: 630,
        alt: 'RetentionLens Research & Market Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research & Market Intelligence | RetentionLens',
    description: 'Access cutting-edge SaaS analytics research, industry benchmarking standards, and predictive intelligence.',
    creator: '@retentionlens',
    images: ['https://retentionlens.com/og-market-insights.jpg'],
  },
  alternates: {
    canonical: 'https://retentionlens.com/market-insights',
  },
  category: 'Technology',
};

// Structured Data for Research Organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  "name": "RetentionLens Research Division",
  "url": "https://retentionlens.com/market-insights",
  "logo": "https://retentionlens.com/logo_retentionlens.png",
  "description": "Leading research organization specializing in SaaS analytics, customer churn prediction, and revenue intelligence.",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Scandinavia"
  },
  "sameAs": [
    "https://linkedin.com/company/retentionlens",
    "https://x.com/retentionlens",
    "https://github.com/retentionlens"
  ],
  "research": [
    {
      "@type": "ScholarlyArticle",
      "headline": "The State of SaaS Analytics: Q3 2025 Market Report",
      "datePublished": "2025-07-15",
      "author": {
        "@type": "Organization",
        "name": "GlassBox Metrics Research Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GlassBox Metrics"
      },
      "description": "Comprehensive analysis of SaaS analytics adoption, implementation patterns, and performance benchmarks across 8,000+ companies.",
      "keywords": "SaaS analytics, market research, benchmarking, customer intelligence"
    },
    {
      "@type": "ScholarlyArticle", 
      "headline": "Pricing Strategy & MRR Benchmarks: Enterprise SaaS Analysis",
      "datePublished": "2025-06-20",
      "author": {
        "@type": "Organization",
        "name": "GlassBox Metrics Research Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GlassBox Metrics"
      },
      "description": "In-depth analysis of pricing strategies, MRR growth patterns, and revenue optimization across enterprise SaaS companies.",
      "keywords": "SaaS pricing, MRR benchmarks, revenue optimization, enterprise SaaS"
    }
  ],
  "offers": [
    {
      "@type": "Service",
      "name": "Custom Research Development",
      "description": "Industry-specific or company-specific analytical studies",
      "provider": {
        "@type": "Organization",
        "name": "GlassBox Metrics"
      }
    },
    {
      "@type": "Service",
      "name": "Implementation Consulting", 
      "description": "Platform deployment and optimization guidance",
      "provider": {
        "@type": "Organization",
        "name": "GlassBox Metrics"
      }
    }
  ]
};

export default function MarketInsights() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Link href="/">
                  <img
                    src="/logo_retentionlens.png"
                    alt="RetentionLens"
                    className="h-24 w-auto cursor-pointer"
                  />
                </Link>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/market-insights" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Market Insights</Link>
                <Link href="/test-suite" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Test Suite</Link>
                <Link href="/ai-features" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">AI Features</Link>
                <Link href="/trust" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Security</Link>
                <Link href="/help" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Support</Link>
                <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Pricing</Link>
                <Link href="/auth/login" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Sign In
                </Link>
                <Link href="/auth/register">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                Research & Market Intelligence
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl">
                {introContent.introText[0]}
              </p>
            </div>
          </div>
        </section>

        {/* Contextual Prose Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left max-w-4xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {introContent.contextualProse[0]}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {introContent.contextualProse[1]}
              </p>
            </div>
          </div>
        </section>

        {/* Published Research Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                Published Research
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl">
                Our research publications provide comprehensive analysis of SaaS analytics trends, customer behavior patterns, and industry benchmarking standards. Each report represents months of data collection and analysis across thousands of SaaS companies.
              </p>
            </div>
            
            <ResearchTable publications={researchPublications} />
            
            <div className="mt-12 space-y-6">
              <ExpandableSection
                title="The State of SaaS Analytics: Q3 2025 Market Report"
              >
                <div className="prose max-w-none">
                  {researchDescriptions[0].content.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ExpandableSection>
            </div>
          </div>
        </section>

        {/* Research Methodology Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                Research Methodology
              </h2>
            </div>
            
            <MethodologySection data={methodologyData} />
          </div>
        </section>

        {/* Industry Benchmarking Standards Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                Industry Benchmarking Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl">
                Our benchmarking framework establishes industry-standard performance indicators across key SaaS analytics dimensions, providing organizations with clear targets for operational excellence.
              </p>
            </div>
            
            <BenchmarkingTable benchmarks={benchmarkingStandards} />
            
            <div className="mt-12">
              <ExpandableSection
                title="GlassBoxing Methodology: Industry Benchmarking Standards"
              >
                <div className="prose max-w-none">
                  {benchmarkingMethodology.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ExpandableSection>
            </div>
          </div>
        </section>

        {/* Research Development Timeline Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                Research Development Timeline
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl">
                Our research development follows a structured quarterly timeline, ensuring continuous advancement of SaaS analytics knowledge and industry insights.
              </p>
            </div>
            
            <ResearchCalendar calendarItems={researchCalendar} />
            
            <div className="mt-12">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                  Research Development Process
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {researchDevelopmentProcess}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Access Levels Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                Research Access Levels
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl">
                Multiple access tiers ensuring broad industry accessibility while maintaining appropriate controls for detailed analytical content.
              </p>
            </div>
            
            <AccessLevelsTable accessLevels={accessLevels} />
            
            <div className="mt-12">
              <p className="text-gray-700 leading-relaxed">
                {distributionMethodology}
              </p>
            </div>
          </div>
        </section>

        {/* Platform Integration Capabilities Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                Platform Integration Capabilities
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl">
                Research-grade analytical methodologies applied in real-time through our platform infrastructure for strategic decision-making.
              </p>
            </div>
            
            <PlatformCapabilitiesTable capabilities={platformCapabilities} />
            
            <div className="mt-12">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                  Platform Integration
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {platformIntegrationText}
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Ready to Access These Capabilities?</h4>
                  <p className="text-gray-600 mb-4">
                    Explore our platform to see how these research-grade analytics can transform your business intelligence.
                  </p>
                  <div className="flex space-x-4">
                    <a href="/test-suite" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      Try Test Suite
                    </a>
                    <a href="/pricing" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      View Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Research Services Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                Professional Research Services
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl">
                Direct consultation, custom research development, and implementation support leveraging our extensive research methodology and industry benchmarking experience.
              </p>
            </div>
            
            <ProfessionalServicesTable services={professionalServices} />
            
            <div className="mt-12">
              <p className="text-gray-700 leading-relaxed mb-8">
                {professionalServicesFramework}
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair SemiCondensed, serif' }}>
                  Ready to Discuss Your Research Needs?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our research team is available to discuss custom research projects, implementation consulting, and strategic advisory services tailored to your organization's specific requirements.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="mailto:research@glassboxmetrics.com" className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Contact Research Team
                  </a>
                  <a href="/pricing" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

