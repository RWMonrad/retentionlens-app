'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import Footer from '../../components/footer'
import { 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  Zap, 
  Building, 
  Play,
  Database,
  CheckCircle,
  Brain,
  FileText,
  DollarSign,
  ArrowRight
} from 'lucide-react'

export default function TestSuitePage() {
  const [currentScenario, setCurrentScenario] = useState('healthy_growth')
  
  const scenarios = [
    {
      id: 'healthy_growth',
      name: 'Healthy Growth',
      description: 'Strong MRR growth with low churn',
      icon: TrendingUp
    },
    {
      id: 'churn_spike',
      name: 'Churn Spike',
      description: 'High churn rate requiring attention',
      icon: AlertTriangle
    },
    {
      id: 'expansion_success',
      name: 'Expansion Success',
      description: 'Strong expansion revenue growth',
      icon: Zap
    },
    {
      id: 'early_stage',
      name: 'Early Stage',
      description: 'Startup with rapid growth',
      icon: Users
    },
    {
      id: 'enterprise_scale',
      name: 'Enterprise Scale',
      description: 'Large-scale enterprise metrics',
      icon: Building
    }
  ]

  const demoSteps = [
    {
      step: 1,
      title: "Data Integration Setup",
      duration: "2-3 minutes",
      description: "Configure connections to your existing business systems including Stripe, QuickBooks, and CRM platforms.",
      icon: Database
    },
    {
      step: 2,
      title: "Data Processing & Validation",
      duration: "1-2 minutes", 
      description: "Automated data ingestion, cleansing, and validation processes ensure analytical accuracy.",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "AI Analysis Engine",
      duration: "2-3 minutes",
      description: "Machine learning algorithms analyze patterns, predict churn risk, and identify revenue optimization opportunities.",
      icon: Brain
    },
    {
      step: 4,
      title: "Executive Dashboard & Reports",
      duration: "5-10 minutes",
      description: "Access comprehensive analytics, benchmarking data, and actionable insights through the management interface.",
      icon: FileText
    }
  ]

  const capabilities = [
    {
      title: "Predictive Churn Analytics",
      description: "Advanced machine learning models predict customer churn with 90%+ accuracy",
      impact: "ROI: $4.20 per $1 invested",
      icon: TrendingUp
    },
    {
      title: "Revenue Forecasting",
      description: "AI-powered revenue predictions with confidence intervals and scenario modeling",
      impact: "35-50% improvement in planning accuracy",
      icon: DollarSign
    },
    {
      title: "Customer Segmentation",
      description: "Behavioral clustering and lifetime value predictions for targeted strategies",
      impact: "20-35% increase in customer LTV",
      icon: Users
    }
  ]

  const handleDashboardDemo = () => {
    window.location.href = '/dashboard'
  }

  return (
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

      {/* Platform Demo Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              SaaS Analytics Platform<br />
              Demo & Trial
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl">
              Experience comprehensive SaaS metrics tracking and churn prediction analytics through our interactive platform demonstration. 
              Test advanced revenue forecasting, customer lifetime value calculations, and business intelligence dashboards with real-time data processing. 
              Evaluate enterprise-grade analytics capabilities before implementation with guided onboarding and technical integration support.
              Free trial access to predictive modeling tools, automated reporting systems, and customizable dashboard configurations for informed decision making.
              Risk-free evaluation period with full feature access, sample data sets, and dedicated demo support to assess platform fit for your business needs.
            </p>
          </div>

          {/* Demo Process Overview */}
          <div className="space-y-12 mb-20">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                Demo Process Overview
              </h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {demoSteps.map((step) => {
                const IconComponent = step.icon
                return (
                  <Card key={step.step} className="border-gray-200 rounded-sm">
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="text-lg font-bold text-gray-700">
                        Step {step.step}
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {step.duration}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Platform Capabilities */}
          <div className="space-y-12 mb-20">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                Platform Capabilities
              </h2>
              <p className="text-gray-600 max-w-3xl">
                Advanced analytics capabilities designed for SaaS businesses to optimize growth and reduce churn.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon
                return (
                  <Card key={index} className="border-gray-200 rounded-sm">
                    <CardHeader>
                      <div className="w-10 h-10 bg-gray-100 rounded-sm flex items-center justify-center mb-3">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {capability.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        {capability.description}
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-sm p-3">
                        <p className="text-green-800 font-medium text-sm">
                          {capability.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Interactive Demo Environment */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Interactive Demo Environment
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-gray-200 rounded-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-sm flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        Live Dashboard Demo
                      </CardTitle>
                      <CardDescription>
                        Explore real-time analytics with sample data
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Navigate through our complete dashboard interface with real SaaS metrics and interactive charts.
                  </p>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800" onClick={handleDashboardDemo}>
                    Launch Dashboard Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-200 rounded-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-sm flex items-center justify-center">
                      <Brain className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        AI Churn Predictor
                      </CardTitle>
                      <CardDescription>
                        Test our machine learning algorithms
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Experience our AI-powered churn prediction with real customer scenarios and see accuracy in action.
                  </p>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700">
                    Try AI Predictor
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Original Test Scenarios Section */}
      <section className="bg-gray-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Choose Your Test Scenario
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Select from different business scenarios to see how GlassBox Metrics adapts to your specific situation and provides relevant insights.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((scenario) => {
              const IconComponent = scenario.icon
              const isActive = currentScenario === scenario.id
              
              return (
                <Card 
                  key={scenario.id}
                  className={`cursor-pointer transition-all duration-200 rounded-sm ${
                    isActive 
                      ? 'border-emerald-500 bg-emerald-50' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                  onClick={() => setCurrentScenario(scenario.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-sm flex items-center justify-center mx-auto mb-3 ${
                      isActive ? 'bg-emerald-100' : 'bg-slate-100'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        isActive ? 'text-emerald-600' : 'text-slate-600'
                      }`} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {scenario.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm text-center">
                      {scenario.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
              <Play className="w-4 h-4 mr-2" />
              Start Test with {scenarios.find(s => s.id === currentScenario)?.name}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

