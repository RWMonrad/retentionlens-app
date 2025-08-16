import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { CheckCircle } from 'lucide-react'
import Footer from '../../components/footer'

export default function PricingPage() {
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

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h1 className="text-4xl md:text-5xl font-normal mb-6 text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              SaaS Analytics Pricing &<br />
              Enterprise Plans
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl">
              Transparent pricing for SaaS metrics tracking, churn prediction analytics, and revenue forecasting platforms designed for growing businesses. 
              Scalable enterprise plans with advanced business intelligence features, custom integrations, and dedicated account management support. 
              ROI-focused pricing models that deliver measurable value through improved customer retention and data-driven decision making.
              Flexible billing options with monthly and annual subscriptions, volume discounts, and custom enterprise agreements for large-scale implementations.
              No hidden fees or setup costs with comprehensive onboarding, training, and ongoing technical support included in all pricing tiers.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-white border-gray-200 hover:border-gray-300 p-6 rounded-xl flex flex-col group relative transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 min-h-[520px]">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-800 text-white text-xs px-3 py-2 rounded-sm shadow-lg whitespace-nowrap z-10">
                For teams &lt; $10k MRR - Basic analytics and churn monitoring
              </div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2 text-slate-900">Starter</h2>
                <p className="text-slate-600 text-sm mb-4">For teams &lt; $10k MRR</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">$0</span>
                  <span className="text-sm font-normal text-slate-600">/mo</span>
                </div>
              </div>
              <ul className="text-left space-y-2 mb-6 flex-grow text-sm">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">SaaS Churn Calculation</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Basic MRR Growth</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Basic Support</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Up to 1,000 active users</span></li>
              </ul>
              <Link href="/auth/register" className="mt-auto">
                <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200">
                  Get Started
                </Button>
              </Link>
            </Card>

            {/* Growth Plan */}
            <Card className="bg-white border-gray-200 hover:border-gray-300 p-6 rounded-xl flex flex-col group relative transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 min-h-[520px]">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-800 text-white text-xs px-3 py-2 rounded-sm shadow-lg whitespace-nowrap z-10">
                For scaling &lt; $50k MRR - Advanced analytics and predictive insights
              </div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2 text-slate-900">Growth</h2>
                <p className="text-slate-600 text-sm mb-4">For scaling &lt; $50k MRR</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">$59</span>
                  <span className="text-sm font-normal text-slate-600">/mo</span>
                </div>
              </div>
              <ul className="text-left space-y-2 mb-6 flex-grow text-sm">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Everything in Starter, plus:</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Predictive Analysis</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Real-time LTV Tracking</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Priority Chat Support</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Up to 10,000 active users</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Custom Integrations</span></li>
              </ul>
              <Link href="/auth/register" className="mt-auto">
                <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200">
                  Get Started
                </Button>
              </Link>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white border-gray-200 hover:border-gray-300 p-6 rounded-xl flex flex-col group relative transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 min-h-[520px]">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-800 text-white text-xs px-3 py-2 rounded-sm shadow-lg whitespace-nowrap z-10">
                For enterprises &gt; $50k MRR - Full analytics suite with dedicated support
              </div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2 text-slate-900">Enterprise</h2>
                <p className="text-slate-600 text-sm mb-4">For enterprises &gt; $50k MRR</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">$229</span>
                  <span className="text-sm font-normal text-slate-600">/mo</span>
                </div>
              </div>
              <ul className="text-left space-y-2 mb-6 flex-grow text-sm">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Everything in Growth, plus:</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Dedicated Account Manager</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">On-premise Deployment Options</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Advanced Security & Compliance</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Unlimited active users</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Custom Reporting & Analytics</span></li>
              </ul>
              <Link href="/contact" className="mt-auto">
                <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200">
                  Contact Sales
                </Button>
              </Link>
            </Card>

            {/* Custom Plan */}
            <Card className="bg-white border-gray-200 hover:border-gray-300 p-6 rounded-xl flex flex-col group relative transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 min-h-[520px]">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-800 text-white text-xs px-3 py-2 rounded-sm shadow-lg whitespace-nowrap z-10">
                For enterprises &gt; $500k MRR - Volume-based custom solutions
              </div>
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2 text-slate-900">Custom</h2>
                <p className="text-slate-600 text-sm mb-4">For companies &gt; $500k MRR</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">Quote</span>
                  <span className="text-sm font-normal text-slate-600">/mo</span>
                </div>
              </div>
              <ul className="text-left space-y-2 mb-6 flex-grow text-sm">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Everything in Enterprise, plus:</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Volume-based pricing discounts</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Custom feature development</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Dedicated infrastructure</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">24/7 phone support</span></li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" /> <span className="text-slate-700">Custom SLA agreements</span></li>
              </ul>
              <Link href="/contact" className="mt-auto">
                <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200">
                  Contact Sales
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Can I change my plan at any time?
              </h3>
              <p className="text-slate-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we&apos;ll prorate any billing adjustments.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What happens if I exceed my user limit?
              </h3>
              <p className="text-slate-600">
                We&apos;ll notify you when you&apos;re approaching your limit. You can either upgrade your plan or we&apos;ll automatically bill you for additional users at $5 per user per month.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Do you offer annual discounts?
              </h3>
              <p className="text-slate-600">
                Yes, we offer a 20% discount when you pay annually. This applies to all paid plans and can save you significant money over time.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-slate-600">
                Yes, all paid plans come with a 14-day free trial. No credit card required to start, and you can cancel anytime during the trial period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of SaaS companies already using GlassBox Metrics to grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 font-medium rounded-lg">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 font-medium rounded-lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}

