import Link from 'next/link'
import { Button } from '../../components/ui/button'
import Footer from '../../components/footer'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Global Header - Light mode version */}
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
            <h1 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              Support Center &<br />
              Documentation Hub
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl">
              Comprehensive technical documentation, implementation guides, and customer support resources for platform onboarding and troubleshooting. 
              Access step-by-step tutorials, API documentation, integration guides, and best practices for maximizing analytics platform performance. 
              Expert support team available for technical assistance, account management, and strategic consultation services.
              Advanced knowledge base with searchable articles, video tutorials, and community forums for peer-to-peer learning.
              24/7 technical support with guaranteed response times and dedicated account managers for enterprise customers.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mb-12">
            <input
              type="text"
              placeholder="Search for help articles, guides, and tutorials..."
              className="w-full px-4 py-4 border border-slate-200 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Getting Started */}
            <div className="border-l-4 border-slate-900 pl-0">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 ml-4">Getting Started</h3>
              <p className="text-slate-600 mb-6 ml-4">
                Learn the basics of GlassBox Metrics and set up your first dashboard in minutes.
              </p>
              <div className="space-y-3 ml-4">
                <Link href="/help/quick-setup-guide" className="block text-slate-700 hover:text-slate-900 hover:underline">• Quick Setup Guide</Link>
                <Link href="/help/creating-first-dashboard" className="block text-slate-700 hover:text-slate-900 hover:underline">• Creating Your First Dashboard</Link>
                <Link href="/help/connecting-data-sources" className="block text-slate-700 hover:text-slate-900 hover:underline">• Connecting Your Data Sources</Link>
              </div>
            </div>

            {/* Analytics & AI */}
            <div className="border-l-4 border-slate-900 pl-0">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 ml-4">Analytics & AI</h3>
              <p className="text-slate-600 mb-6 ml-4">
                Understanding your metrics, AI insights, and predictive analytics capabilities.
              </p>
              <div className="space-y-3 ml-4">
                <Link href="/help/churn-prediction-guide" className="block text-slate-700 hover:text-slate-900 hover:underline">• Churn Prediction Guide</Link>
                <Link href="/help/revenue-forecasting" className="block text-slate-700 hover:text-slate-900 hover:underline">• Revenue Forecasting</Link>
                <Link href="/help/understanding-ai-insights" className="block text-slate-700 hover:text-slate-900 hover:underline">• Understanding AI Insights</Link>
              </div>
            </div>

            {/* Benchmarking */}
            <div className="border-l-4 border-slate-900 pl-0">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 ml-4">Benchmarking</h3>
              <p className="text-slate-600 mb-6 ml-4">
                Compare your performance with industry peers and understand market trends.
              </p>
              <div className="space-y-3 ml-4">
                <Link href="/help/glass-box-benchmarking" className="block text-slate-700 hover:text-slate-900 hover:underline">• Glass Box Benchmarking</Link>
                <Link href="/help/industry-comparisons" className="block text-slate-700 hover:text-slate-900 hover:underline">• Industry Comparisons</Link>
                <Link href="/help/market-insights-reports" className="block text-slate-700 hover:text-slate-900 hover:underline">• Market Insights Reports</Link>
              </div>
            </div>

            {/* Reports & Exports */}
            <div className="border-l-4 border-slate-900 pl-0">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 ml-4">Reports & Exports</h3>
              <p className="text-slate-600 mb-6 ml-4">
                Generate custom reports, export data, and share insights with your team.
              </p>
              <div className="space-y-3 ml-4">
                <Link href="/help/creating-custom-reports" className="block text-slate-700 hover:text-slate-900 hover:underline">• Creating Custom Reports</Link>
                <Link href="/help/data-export-options" className="block text-slate-700 hover:text-slate-900 hover:underline">• Data Export Options</Link>
                <Link href="/help/sharing-collaboration" className="block text-slate-700 hover:text-slate-900 hover:underline">• Sharing & Collaboration</Link>
              </div>
            </div>

            {/* Security & Privacy */}
            <div className="border-l-4 border-slate-900 pl-0">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 ml-4">Security & Privacy</h3>
              <p className="text-slate-600 mb-6 ml-4">
                Account security, data protection, and compliance information.
              </p>
              <div className="space-y-3 ml-4">
                <Link href="/help/security-best-practices" className="block text-slate-700 hover:text-slate-900 hover:underline">• Security Best Practices</Link>
                <Link href="/help/privacy-data-protection" className="block text-slate-700 hover:text-slate-900 hover:underline">• Privacy & Data Protection</Link>
                <Link href="/help/compliance-certifications" className="block text-slate-700 hover:text-slate-900 hover:underline">• Compliance & Certifications</Link>
              </div>
            </div>

            {/* API & Integrations */}
            <div className="border-l-4 border-slate-900 pl-0">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 ml-4">API & Integrations</h3>
              <p className="text-slate-600 mb-6 ml-4">
                Developer resources, API documentation, and integration guides.
              </p>
              <div className="space-y-3 ml-4">
                <Link href="/help/api-documentation" className="block text-slate-700 hover:text-slate-900 hover:underline">• API Documentation</Link>
                <Link href="/help/integration-setup" className="block text-slate-700 hover:text-slate-900 hover:underline">• Integration Setup</Link>
                <Link href="/help/developer-resources" className="block text-slate-700 hover:text-slate-900 hover:underline">• Developer Resources</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Popular Articles</h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Most helpful guides and tutorials from our knowledge base.
            </p>
          </div>
          
          <div className="space-y-6">
            <Link href="/help/setup-first-dashboard" className="block border-l-4 border-slate-900 pl-0 py-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-4 text-sm text-slate-500 mb-2 ml-6">
                <span>5 min read</span>
                <span>★ 4.9</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 ml-6">
                How to Set Up Your First Dashboard in Under 5 Minutes
              </h3>
              <p className="text-slate-600 ml-6">
                A step-by-step guide to getting started with GlassBox Metrics and creating your first analytics dashboard.
              </p>
            </Link>

            <Link href="/help/churn-prediction-explained" className="block border-l-4 border-slate-900 pl-0 py-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-4 text-sm text-slate-500 mb-2 ml-6">
                <span>8 min read</span>
                <span>★ 4.8</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 ml-6">
                Understanding Churn Prediction: 90%+ Accuracy Explained
              </h3>
              <p className="text-slate-600 ml-6">
                Learn how our AI-powered churn prediction works and how to interpret the results for your business.
              </p>
            </Link>

            <Link href="/help/benchmarking-guide" className="block border-l-4 border-slate-900 pl-0 py-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-4 text-sm text-slate-500 mb-2 ml-6">
                <span>12 min read</span>
                <span>★ 4.7</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 ml-6">
                Glass Box Benchmarking: Compare Your SaaS Performance
              </h3>
              <p className="text-slate-600 ml-6">
                Discover how to use our transparent benchmarking feature to understand your performance against industry peers.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Still need help?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Our support team is here to help you succeed with GlassBox Metrics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-slate-900 pl-0 text-left">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 ml-4">Contact Support</h3>
              <p className="text-slate-600 mb-6 ml-4">
                Get help from our expert support team. Average response time: 2 hours.
              </p>
              <div className="ml-4">
                <Link href="/contact">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="border-l-4 border-slate-900 pl-0 text-left">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 ml-4">Schedule a Demo</h3>
              <p className="text-slate-600 mb-6 ml-4">
                Book a personalized demo with our team to see GlassBox Metrics in action.
              </p>
              <div className="ml-4">
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-slate-600 text-slate-600 hover:bg-slate-50">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}

