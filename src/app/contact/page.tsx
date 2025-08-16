'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import {
  Mail,
  Phone,
  MapPin,
  Building,
  User,
  MessageSquare,
  ArrowLeft
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    plan: 'Enterprise',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <Link href="/">
                  <img
                    src="/logo_glassboxmetrics.png"
                    alt="GlassBox Metrics"
                    className="h-10 w-auto cursor-pointer"
                  />
                </Link>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/#features" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Features</Link>
                <Link href="/market-insights" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Market Insights</Link>
                <Link href="/test-suite" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Test Suite</Link>
                <Link href="/ai-features" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">AI Features</Link>
                <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Pricing</Link>
                <Link href="/help" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Help</Link>
                <Link href="/trust" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Trust</Link>
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
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                Thank you for your interest!
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                We've received your message and our sales team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/pricing">
                <Button variant="outline" className="mr-4">
                  Back to Pricing
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <img
                  src="/logo_glassboxmetrics.png"
                  alt="GlassBox Metrics"
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Features</Link>
              <Link href="/market-insights" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Market Insights</Link>
              <Link href="/test-suite" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Test Suite</Link>
              <Link href="/ai-features" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">AI Features</Link>
              <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Pricing</Link>
              <Link href="/help" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Help</Link>
              <Link href="/trust" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Trust</Link>
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
          <div className="text-center mb-16">
            <Link href="/pricing" className="inline-flex items-center space-x-2 mb-6 text-slate-600 hover:text-slate-900">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Pricing</span>
            </Link>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Contact Sales
            </h1>
            <p className="text-xl text-slate-600">
              Ready to scale your SaaS analytics? Let's discuss your Enterprise or Custom plan needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-4 w-4 text-slate-400" />
                        </div>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="pl-10"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Work Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-slate-400" />
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="pl-10"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-4 w-4 text-slate-400" />
                      </div>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        className="pl-10"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 text-slate-400" />
                      </div>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="pl-10"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-slate-700 mb-2">
                      Interested Plan
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      value={formData.plan}
                      onChange={handleInputChange}
                    >
                      <option value="Enterprise">Enterprise ($229/mo)</option>
                      <option value="Custom">Custom (Quote)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-4 w-4 text-slate-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full pl-10 pt-3 pb-3 pr-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Tell us about your needs, current MRR, team size, and any specific requirements..."
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Why Choose Enterprise?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Dedicated Account Manager</h3>
                      <p className="text-slate-600">Personal support from a dedicated customer success manager</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Advanced Security</h3>
                      <p className="text-slate-600">SOC 2 compliance, SSO, and advanced security features</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Custom Integrations</h3>
                      <p className="text-slate-600">Tailored integrations with your existing tech stack</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Priority Support</h3>
                      <p className="text-slate-600">24/7 priority support with guaranteed response times</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  What to Expect
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span className="text-slate-700">We'll respond within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span className="text-slate-700">Schedule a personalized demo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span className="text-slate-700">Discuss your specific requirements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <span className="text-slate-700">Receive a custom proposal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

