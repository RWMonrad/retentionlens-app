import Link from 'next/link'
import { Button } from '../../components/ui/button'
import Footer from '../../components/footer'

export default function AIFeaturesPage() {
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

      {/* Hero Section - Top Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              AI-Powered SaaS Analytics &<br />
              Predictive Intelligence
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl">
              Advanced machine learning algorithms for SaaS churn prediction, revenue forecasting, and customer lifetime value optimization with 90%+ accuracy rates. 
              Enterprise-grade artificial intelligence trained on 50,000+ SaaS companies delivering actionable business intelligence and automated insights. 
              Reduce customer acquisition costs and increase retention rates through data-driven predictive analytics and behavioral pattern recognition.
              Real-time anomaly detection and automated alert systems for proactive customer success management and revenue protection strategies.
              Seamless integration with existing CRM, billing, and analytics platforms enabling comprehensive business intelligence and strategic decision making.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Cards - Below Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="border-l-4 border-slate-900 pl-6">
              <div className="text-3xl font-bold text-slate-900 mb-2">90%+</div>
              <div className="text-slate-600">Churn Prediction Accuracy</div>
            </div>
            <div className="border-l-4 border-slate-900 pl-6">
              <div className="text-3xl font-bold text-slate-900 mb-2">$4.20</div>
              <div className="text-slate-600">ROI per $1 Invested</div>
            </div>
            <div className="border-l-4 border-slate-900 pl-6">
              <div className="text-3xl font-bold text-slate-900 mb-2">14 Hours</div>
              <div className="text-slate-600">Saved per Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-4" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Powered by machine learning algorithms trained on 50,000+ SaaS companies.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* Churn Prediction */}
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Churn Prediction</h3>
              <p className="text-lg text-slate-600 mb-6">90%+ accuracy with 14-day advance warning</p>
              
              <p className="text-slate-600 mb-6">
                Our AI analyzes user behavior patterns, engagement metrics, and billing history to predict 
                which customers are likely to churn with industry-leading accuracy.
              </p>

              <div className="space-y-3 mb-6">
                <div className="text-slate-700">• Identifies at-risk accounts 14 days before cancellation</div>
                <div className="text-slate-700">• Provides specific risk factors and intervention strategies</div>
                <div className="text-slate-700">• Integrates with your CRM for automated workflows</div>
              </div>

              <div className="bg-slate-50 p-6 border-l-4 border-slate-300">
                <div className="text-sm text-slate-600 mb-2">Example Output:</div>
                <div className="text-slate-900 font-medium italic">"Customer ABC Corp has 87% churn probability. Key factors: 40% usage decline, 2 missed payments. Recommended action: Immediate outreach with usage optimization session."</div>
              </div>
            </div>

            {/* Revenue Forecasting */}
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Revenue Forecasting</h3>
              <p className="text-lg text-slate-600 mb-6">Multi-variate AI predictions with confidence intervals</p>
              
              <p className="text-slate-600 mb-6">
                Advanced machine learning models analyze historical data, market trends, and customer behavior 
                to provide accurate revenue forecasts with confidence intervals.
              </p>

              <div className="space-y-3 mb-6">
                <div className="text-slate-700">• 12-month rolling forecasts with monthly updates</div>
                <div className="text-slate-700">• Scenario modeling for different growth strategies</div>
                <div className="text-slate-700">• Confidence intervals and risk assessments</div>
              </div>

              <div className="bg-slate-50 p-6 border-l-4 border-slate-300">
                <div className="text-sm text-slate-600 mb-2">Example Output:</div>
                <div className="text-slate-900 font-medium italic">"Q4 revenue forecast: $2.4M (±$180K, 85% confidence). Growth drivers: 15% expansion revenue, 8% new customer acquisition. Risk factors: seasonal churn increase."</div>
              </div>
            </div>

            {/* Customer Intelligence */}
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Customer Intelligence</h3>
              <p className="text-lg text-slate-600 mb-6">AI-powered segmentation and health scoring</p>
              
              <p className="text-slate-600 mb-6">
                Automatically segment customers based on behavior patterns, predict lifetime value, 
                and identify expansion opportunities with AI-driven customer intelligence.
              </p>

              <div className="space-y-3 mb-6">
                <div className="text-slate-700">• Dynamic customer health scores (0-100)</div>
                <div className="text-slate-700">• Behavioral segmentation and personas</div>
                <div className="text-slate-700">• Expansion opportunity identification</div>
              </div>

              <div className="bg-slate-50 p-6 border-l-4 border-slate-300">
                <div className="text-sm text-slate-600 mb-2">Example Output:</div>
                <div className="text-slate-900 font-medium italic">"Customer health score: 92/100. Segment: Power User. Expansion opportunity: 78% likely to upgrade to Enterprise tier within 60 days."</div>
              </div>
            </div>

            {/* Strategic Insights */}
            <div className="border-l-4 border-slate-900 pl-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Strategic Insights</h3>
              <p className="text-lg text-slate-600 mb-6">AI-generated business recommendations</p>
              
              <p className="text-slate-600 mb-6">
                Get actionable business insights generated by AI that analyzes your data patterns, 
                market trends, and industry benchmarks to recommend strategic actions.
              </p>

              <div className="space-y-3 mb-6">
                <div className="text-slate-700">• Weekly strategic recommendations</div>
                <div className="text-slate-700">• Market opportunity identification</div>
                <div className="text-slate-700">• Competitive positioning insights</div>
              </div>

              <div className="bg-slate-50 p-6 border-l-4 border-slate-300">
                <div className="text-sm text-slate-600 mb-2">Example Output:</div>
                <div className="text-slate-900 font-medium italic">"Recommendation: Focus on mid-market segment. 34% higher LTV, 22% lower CAC vs. SMB. Suggested action: Adjust pricing tiers and marketing messaging."</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI Technology Stack */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-xl text-slate-600">
              Built on enterprise-grade machine learning infrastructure with continuous model improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Enterprise AI Infrastructure</h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-slate-900 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Machine Learning Models</h4>
                  <p className="text-slate-600">
                    Ensemble models combining gradient boosting, neural networks, and time series analysis 
                    for maximum accuracy and reliability.
                  </p>
                </div>

                <div className="border-l-4 border-slate-900 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Continuous Learning</h4>
                  <p className="text-slate-600">
                    Models automatically retrain on new data to improve accuracy and adapt to 
                    changing market conditions and customer behaviors.
                  </p>
                </div>

                <div className="border-l-4 border-slate-900 pl-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Real-time Processing</h4>
                  <p className="text-slate-600">
                    Sub-second response times for AI predictions with real-time data processing 
                    and edge computing infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-slate-900">
              <h4 className="text-lg font-semibold text-slate-900 mb-6">Training Data Scale</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">SaaS Companies</span>
                  <span className="font-semibold text-slate-900">50,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Data Points</span>
                  <span className="font-semibold text-slate-900">2.5 Billion</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Model Updates</span>
                  <span className="font-semibold text-slate-900">Daily</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Prediction Accuracy</span>
                  <span className="font-semibold text-slate-900">90%+</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  Our AI models are trained on anonymized data from thousands of SaaS companies, 
                  ensuring predictions are based on real-world patterns and industry benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers for AI */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              AI Features by Plan
            </h2>
            <p className="text-xl text-slate-600">
              Choose the right level of AI-powered insights for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-slate-900 pl-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Growth Plan</h3>
                <div className="text-3xl font-bold text-slate-900">$59<span className="text-lg text-slate-600">/mo</span></div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="text-slate-700">• Churn prediction (90%+ accuracy)</div>
                <div className="text-slate-400">• Revenue forecasting (Enterprise only)</div>
                <div className="text-slate-400">• Customer intelligence (Enterprise only)</div>
                <div className="text-slate-400">• Strategic insights (Enterprise only)</div>
              </div>

              <Link href="/pricing">
                <Button variant="outline" className="w-full">
                  Start Growth Plan
                </Button>
              </Link>
            </div>

            <div className="border-l-4 border-slate-900 pl-8 bg-slate-50 p-6 -ml-2">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Enterprise Plan</h3>
                <div className="text-3xl font-bold text-slate-900">$229<span className="text-lg text-slate-600">/mo</span></div>
                <div className="text-sm text-slate-600 mt-1">Most Popular</div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="text-slate-700">• Churn prediction (90%+ accuracy)</div>
                <div className="text-slate-700">• Revenue forecasting</div>
                <div className="text-slate-700">• Customer intelligence</div>
                <div className="text-slate-700">• Strategic insights</div>
                <div className="text-slate-700">• White-label AI reports</div>
              </div>

              <Link href="/pricing">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                  Start Enterprise Plan
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/pricing" className="text-slate-600 hover:text-slate-900 font-medium">
              View all pricing plans →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Transform Your SaaS Analytics?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of SaaS companies using AI-powered insights to grow faster and reduce churn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/test-suite">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
                Try Test Suite
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3">
                View Pricing
              </Button>
            </Link>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            No credit card required • Test with real scenarios • Setup in under 5 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}

