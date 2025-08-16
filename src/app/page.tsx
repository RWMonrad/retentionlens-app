import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Citation, References } from '../components/ui/citation';
import Footer from '../components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* HERO SEKSJON */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/hero_retentionlens.png)'}}>
        {/* Gradient overlay on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent z-0"></div>
        
        {/* Hero container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-screen">
          <div className="w-full md:w-3/5 text-left py-32">
            <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight" style={{fontFamily: '"Playfair SemiCondensed", serif', fontWeight: '400'}}>
              Beyond Prediction: The Transition to Prescriptive Intelligence
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Leverage a platform engineered for the final stage of analytics maturity. By integrating predictive modeling with contextual cohort benchmarking, Retention Lens moves beyond diagnostics to provide specific, AI-driven recommendations that systematically mitigate churn and uncover revenue opportunities.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/test-suite">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-base font-normal rounded-lg shadow-lg border border-emerald-600 transition-all duration-300" style={{fontFamily: '"Samsung Sans", system-ui, sans-serif'}}>
                  Try Test Suite
                </Button>
              </Link>
              <Link href="/ai-features">
                <Button variant="outline" className="bg-slate-800/80 border-2 border-slate-600/50 text-white hover:bg-slate-700/90 hover:border-slate-500 px-8 py-3 text-base font-normal rounded-lg backdrop-blur-sm transition-all duration-300" style={{fontFamily: '"Samsung Sans", system-ui, sans-serif'}}>
                  Explore AI Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PREDICTIVE ANALYTICS METHODOLOGY */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-8" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              Advanced Predictive Analytics for SaaS Revenue Intelligence
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6 text-left">
                <p>
                  Modern SaaS businesses generate vast quantities of behavioral data through customer interactions, subscription events, and feature usage patterns. 
                  Our predictive analytics platform employs sophisticated machine learning algorithms to transform this raw data into actionable revenue intelligence, 
                  delivering measurable business outcomes with documented precision.
                </p>
                
                <p>
                  The foundation of our predictive capability rests on three core methodologies: survival analysis using Kaplan-Meier estimators for churn probability modeling, 
                  time-series regression algorithms for revenue forecasting with confidence intervals, and 
                  causal inference techniques for root-cause attribution of revenue fluctuations.
                </p>
                
                <p>
                  Our churn prediction engine continuously analyzes behavioral patterns across multiple dimensions—login frequency, feature engagement depth, 
                  support interaction sentiment, and billing event sequences. By applying pattern recognition algorithms to this multidimensional dataset, 
                  the system identifies at-risk customers with <span className="font-semibold text-emerald-700">90%+ accuracy up to 14 days before potential cancellation</span><Citation sourceId="imani2025" number={1} /><Citation sourceId="huellmann2020" number={2} />, 
                  a performance level consistent with state-of-the-art models in peer-reviewed research. This early warning capability enables proactive intervention strategies, 
                  resulting in documented churn reductions of over 20% in real-world case studies<Citation sourceId="innerview2025" number={3} /><Citation sourceId="aiplainenglish2025" number={4} />.
                </p>
              </div>

              {/* Right Column */}
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6 text-left">
                <p>
                  Revenue forecasting employs ensemble machine learning models that incorporate subscription lifecycle data, cohort performance metrics, 
                  and market seasonality factors. The algorithms generate probabilistic revenue projections with statistical confidence intervals, 
                  enabling scenario modeling for strategic decision-making. Organizations utilizing these forecasting capabilities report 
                  35-50% improvement in planning accuracy compared to traditional spreadsheet-based methodologies.
                </p>
                
                <p>
                  Perhaps most critically, our platform performs granular root-cause analysis of revenue events through advanced segmentation algorithms. 
                  When revenue fluctuations occur, the system automatically correlates these changes with specific customer cohorts, feature modifications, 
                  pricing adjustments, and temporal factors. This analytical precision transforms vague revenue concerns into specific, actionable insights—
                  such as identifying that 67% of a revenue decline originated from Tier B customers who canceled within seven days of a particular feature removal.
                </p>
                
                <div className="text-slate-600 border-l-4 border-emerald-500 pl-6 italic">
                  Research confirms that even a 5% increase in customer retention can boost profitability by a range of 25% to 95%<Citation sourceId="imani2025" number={5} /><Citation sourceId="reichheld1990" number={6} />, 
                  achieved through reduced customer acquisition costs, improved retention rates, and optimized pricing strategies informed by 
                  data-driven insights rather than intuitive decision-making.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREDIKSJONSMODELLER SEKSJON */}
      <section id="features" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-4" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              Advanced Predictive Modeling Framework
            </h2>
            <p className="text-xl text-slate-600">
              Four core methodologies that transform raw behavioral data into actionable revenue intelligence.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Churn Prediction Model */}
            <div className="border-l-4 border-green-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <h3 className="text-xl text-slate-900 mb-3" style={{fontFamily: 'Playfair SemiCondensed, serif', fontWeight: 400}}>
                Survival Analysis & Churn Prediction
              </h3>
              <p className="text-slate-700 mb-4">
                Employs Kaplan-Meier estimators and Cox proportional hazards models to analyze customer lifecycle patterns. 
                The system continuously monitors behavioral indicators including login frequency, feature engagement depth, 
                support interaction sentiment, and billing event sequences to identify at-risk accounts with 90%+ accuracy 
                14 days before potential cancellation.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Key Metrics:</strong> 22% churn reduction within 30-day implementation • Early warning system enables proactive intervention strategies
              </div>
            </div>

            {/* Revenue Forecasting Model */}
            <div className="border-l-4 border-green-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <h3 className="text-xl text-slate-900 mb-3" style={{fontFamily: 'Playfair SemiCondensed, serif', fontWeight: 400}}>
                Time-Series Revenue Forecasting
              </h3>
              <p className="text-slate-700 mb-4">
                Utilizes ensemble machine learning models incorporating subscription lifecycle data, cohort performance metrics, 
                and market seasonality factors. Generates probabilistic revenue projections with statistical confidence intervals, 
                enabling scenario modeling for strategic decision-making and budget planning with unprecedented accuracy.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Key Metrics:</strong> 35-50% improvement in planning accuracy • Replaces traditional spreadsheet-based methodologies with data-driven forecasting
              </div>
            </div>

            {/* Causal Inference Model */}
            <div className="border-l-4 border-green-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <h3 className="text-xl text-slate-900 mb-3" style={{fontFamily: 'Playfair SemiCondensed, serif', fontWeight: 400}}>
                Uplift Modeling & Causal Inference
              </h3>
              <p className="text-slate-700 mb-4">
                Performs granular root-cause analysis of revenue events through advanced segmentation algorithms and causal inference techniques. 
                When revenue fluctuations occur, the system automatically correlates changes with specific customer cohorts, feature modifications, 
                pricing adjustments, and temporal factors to provide actionable insights rather than surface-level observations.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Key Metrics:</strong> Transforms vague revenue concerns into specific insights • Identifies precise attribution of revenue changes to actionable factors
              </div>
            </div>

            {/* Cohort Analysis Model */}
            <div className="border-l-4 border-green-500 pl-6 bg-gray-50 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Advanced Cohort Behavioral Analysis
              </h3>
              <p className="text-slate-700 mb-4">
                Implements sophisticated cohort segmentation using multidimensional clustering algorithms to reveal hidden user behavior patterns. 
                Analyzes customer journey progression, feature adoption rates, and engagement evolution across time-based cohorts to identify 
                optimal onboarding sequences, expansion opportunities, and retention strategies tailored to specific user segments.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Key Metrics:</strong> Real-time cohort tracking with CRM synchronization • Insights delivered in under 5 minutes for immediate strategic application
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link href="/ai-features">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-medium rounded-lg">
                Explore Technical Implementation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MARKET INSIGHTS SEKSJON */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-4 text-left" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              The Intelligence Behind Industry's Smartest Decisions
            </h2>
            <p className="text-xl text-slate-600 text-center">
              Market Insights reports are built on anonymized real-time data from thousands of SaaS companies. Access the same benchmark data your competitors and investors rely on—published <strong>14 days ahead of major analysts</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-sm text-slate-500 mb-2">Q3 2025</div>
                <h3 className="text-lg text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif', fontWeight: 400}}>The Q3 2025 State of SaaS Churn</h3>
                <p className="text-sm text-slate-600 mt-2">Based on 50,000+ companies</p>
              </div>
              <p className="text-slate-600 mb-4">
                Comprehensive analysis of churn patterns across 50,000+ SaaS companies. Discover why enterprise churn dropped 23% while SMB churn spiked.
              </p>
              <ul className="text-sm text-slate-600 space-y-1 mb-4">
                <li>• Industry benchmarks by ARR tier</li>
                <li>• Predictive churn indicators</li>
                <li>• Retention strategy playbook</li>
              </ul>
              <p className="text-xs text-slate-500">42 pages • Published Oct 2025</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-sm text-slate-500 mb-2">2025</div>
                <h3 className="text-lg text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif', fontWeight: 400}}>Pricing Strategy & MRR Benchmarks</h3>
                <p className="text-sm text-slate-600 mt-2">Revenue Benchmarks</p>
              </div>
              <p className="text-slate-600 mb-4">
                How top-performing SaaS companies structure pricing to maximize MRR. Includes pricing models that drive 120%+ net revenue retention.
              </p>
              <ul className="text-sm text-slate-600 space-y-1 mb-4">
                <li>• Optimal pricing tier structures</li>
                <li>• MRR benchmarks by industry</li>
                <li>• Expansion revenue tactics</li>
              </ul>
              <p className="text-xs text-slate-500">38 pages • Published Sep 2025</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-sm text-slate-500 mb-2">2025</div>
                <h3 className="text-lg text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif', fontWeight: 400}}>PLG Metrics That Actually Matter</h3>
                <p className="text-sm text-slate-600 mt-2">Product-Led Growth</p>
              </div>
              <p className="text-slate-600 mb-4">
                Beyond vanity metrics: The 12 PLG indicators that predict sustainable growth. Based on analysis of 200+ product-led companies.
              </p>
              <ul className="text-sm text-slate-600 space-y-1 mb-4">
                <li>• Leading vs. lagging indicators</li>
                <li>• Feature adoption patterns</li>
                <li>• Time-to-value optimization</li>
              </ul>
              <p className="text-xs text-slate-500">51 pages • Published Aug 2025</p>
            </div>

          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-12 text-slate-700 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">87+</div>
                <div className="text-sm">Earnings Calls</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">142+</div>
                <div className="text-sm">Companies Set Pricing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">14 Days</div>
                <div className="text-sm">Ahead of Gartner</div>
              </div>
            </div>
            <blockquote className="text-lg text-slate-600 italic mb-6 max-w-4xl mx-auto">
              &quot;Our Market Insights reports have been cited in earnings calls by Series B and C companies, referenced in board decks, and used to justify pricing decisions worth millions in ARR.&quot;
            </blockquote>
            <Link href="/market-insights">
              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 font-medium rounded-lg">
                Explore Our Research
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <References citedSources={['imani2025', 'huellmann2020', 'innerview2025', 'aiplainenglish2025']} />
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}
