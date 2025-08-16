import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { Menu } from 'lucide-react'

export default function AnalyticsDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* PROFESSIONELL HVIT HEADER - IDENTISK MED ANDRE SIDER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* PROFESSIONELL LOGO */}
            <Link href="/" className="flex items-center">
              <img
                src="/logo_glassboxmetrics.png"
                alt="GlassBox Metrics"
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
            
            {/* DISKRET DESKTOP NAVIGASJON */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/#features"
                className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                How It Works
              </a>
              <Link
                href="/market-insights"
                className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                Market Insights
              </Link>
              <Link
                href="/test-suite"
                className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                Test Suite
              </Link>
              <Link
                href="/demo"
                className="text-slate-900 font-semibold text-sm"
              >
                Analytics
              </Link>
              <Link
                href="/pricing"
                className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                Pricing
              </Link>
            </nav>
            
            {/* DISKRETE AUTH KNAPPER */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                Sign In
              </Link>
              <Link href="/auth/register">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-2 font-medium rounded-lg">
                  Get Started
                </Button>
              </Link>
            </div>
            
            {/* MOBILE MENU KNAPP */}
            <div className="md:hidden">
              <Button variant="outline" size="sm" className="border-slate-300">
                <Menu className="h-4 w-4 text-slate-700" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SEKSJON - FJERNET BADGE */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              GlassBox Metrics Platform Demo
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto">
              Experience the complete customer onboarding process and explore advanced analytics capabilities through our interactive demonstration environment.
            </p>
          </div>
        </div>
      </section>

      {/* DEMO PROCESS OVERVIEW - SUBTILT KORT */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Demo Process Overview
            </h2>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* STEG 1 */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-slate-700">1</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">Step 1: Data Integration Setup</h3>
                    <span className="text-sm text-slate-500">2-3 minutes</span>
                  </div>
                  <p className="text-slate-600">
                    Configure connections to your existing business systems including Stripe, QuickBooks, and CRM platforms.
                  </p>
                </div>
              </div>
              
              {/* STEG 2 */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-slate-700">2</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">Step 2: Data Processing & Validation</h3>
                    <span className="text-sm text-slate-500">1-2 minutes</span>
                  </div>
                  <p className="text-slate-600">
                    Automated data ingestion, cleansing, and validation processes ensure analytical accuracy.
                  </p>
                </div>
              </div>
              
              {/* STEG 3 */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-slate-700">3</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">Step 3: AI Analysis Engine</h3>
                    <span className="text-sm text-slate-500">2-3 minutes</span>
                  </div>
                  <p className="text-slate-600">
                    Machine learning algorithms analyze patterns, predict churn risk, and identify revenue optimization opportunities.
                  </p>
                </div>
              </div>
              
              {/* STEG 4 */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-slate-700">4</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">Step 4: Executive Dashboard & Reports</h3>
                    <span className="text-sm text-slate-500">5-10 minutes</span>
                  </div>
                  <p className="text-slate-600">
                    Access comprehensive analytics, benchmarking data, and actionable insights through the management interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM CAPABILITIES - SUBTILE KORT */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Platform Capabilities Demonstrated
            </h2>
          </div>
          
          <div className="space-y-12">
            {/* CAPABILITY 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Predictive Churn Analytics
                </h3>
                <p className="text-slate-600 mb-6">
                  Machine learning algorithms analyze customer behavior patterns, usage metrics, and engagement data to predict churn risk with 90%+ accuracy. The system identifies at-risk customers 30-60 days before churn occurs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Business Impact</h4>
                    <p className="text-slate-600">
                      Reduce churn by 25-40% through proactive intervention strategies. Average ROI: $4.20 for every $1 invested in retention.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Technical Methodology</h4>
                    <p className="text-slate-600">
                      Uses gradient boosting algorithms trained on behavioral signals, usage patterns, support ticket frequency, and payment history.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CAPABILITY 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Revenue Forecasting & Trend Analysis
                </h3>
                <p className="text-slate-600 mb-6">
                  Advanced time-series analysis and cohort modeling provide accurate revenue projections across multiple time horizons. Includes seasonal adjustments, growth trajectory analysis, and scenario planning capabilities.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Business Impact</h4>
                    <p className="text-slate-600">
                      Improve financial planning accuracy by 35-50%. Enable data-driven investment decisions and resource allocation strategies.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Technical Methodology</h4>
                    <p className="text-slate-600">
                      Combines ARIMA models, exponential smoothing, and ensemble methods for robust forecasting across different business cycles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CAPABILITY 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Customer Segmentation & LTV Optimization
                </h3>
                <p className="text-slate-600 mb-6">
                  Dynamic customer segmentation based on behavioral patterns, engagement levels, and revenue potential. Automated identification of high-value segments and personalized retention strategies.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Business Impact</h4>
                    <p className="text-slate-600">
                      Increase customer lifetime value by 20-35% through targeted engagement and upselling strategies. Optimize marketing spend allocation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Technical Methodology</h4>
                    <p className="text-slate-600">
                      Utilizes clustering algorithms (K-means, DBSCAN) combined with RFM analysis and behavioral scoring models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO SECTION */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interactive Demo Environment
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience our platform with real anonymized data from 50+ SaaS companies. Explore advanced analytics, predictive models, and actionable insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Live Dashboard Demo</h3>
              <p className="text-slate-300 mb-6">
                Explore our executive dashboard with real-time metrics, predictive analytics, and industry benchmarking data.
              </p>
              <Link href="/dashboard">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Launch Dashboard Demo
                </Button>
              </Link>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Churn Predictor Tool</h3>
              <p className="text-slate-300 mb-6">
                Test our machine learning models with sample customer data to see churn risk predictions in action.
              </p>
              <Link href="/analytics">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Try Churn Predictor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Transform Your SaaS Analytics?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join 500+ SaaS companies already using GlassBox Metrics to reduce churn, increase revenue, and optimize customer lifetime value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 font-medium rounded-lg">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 font-medium rounded-lg">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

