import Link from 'next/link'
import { Button } from '../../components/ui/button'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Global Header - Light mode version */}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/trust" className="inline-flex items-center space-x-2 mb-6 text-slate-600 hover:text-slate-900">
              <span className="text-sm">← Back to Trust & Security</span>
            </Link>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-600 mb-6">
              At GlassBox Metrics, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our SaaS analytics platform.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Personal Information</h3>
                <p className="text-slate-600">
                  We collect information you provide directly to us, such as when you create an account, contact us, or use our services. 
                  This may include your name, email address, company information, and payment details.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Usage Data</h3>
                <p className="text-slate-600">
                  We automatically collect certain information about your use of our platform, including log data, 
                  device information, and analytics data to improve our services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Business Data</h3>
                <p className="text-slate-600">
                  We process the business metrics and analytics data you upload to our platform to provide our services. 
                  This data remains under your control and ownership.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600">Provide, maintain, and improve our services</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600">Process transactions and send related information</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600">Send technical notices, updates, and support messages</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600">Respond to your comments, questions, and customer service requests</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600">Monitor and analyze trends, usage, and activities</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-600 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600">AES-256 encryption for data at rest</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600">TLS 1.3 encryption for data in transit</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600">Regular security audits and penetration testing</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600">SOC 2 Type II compliance</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">GDPR Compliance</h2>
            <p className="text-slate-600 mb-6">
              If you are located in the European Economic Area (EEA), you have certain rights under the General Data Protection Regulation (GDPR):
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600"><strong>Right of access:</strong> You can request copies of your personal data</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600"><strong>Right of rectification:</strong> You can request correction of inaccurate data</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600"><strong>Right to erasure:</strong> You can request deletion of your personal data</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                <p className="text-slate-600"><strong>Right to data portability:</strong> You can request transfer of your data</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="space-y-2">
                <p className="text-slate-700"><strong>Email:</strong> privacy@glassboxmetrics.com</p>
                <p className="text-slate-700"><strong>Address:</strong> GlassBox Metrics, Inc.</p>
                <p className="text-slate-700">123 Analytics Street, Data City, DC 12345</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/trust">
                <Button variant="outline" className="border-slate-600 text-slate-600 hover:bg-slate-50">
                  Back to Trust & Security
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

