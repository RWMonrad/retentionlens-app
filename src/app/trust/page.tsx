import Link from 'next/link'
import { Button } from '../../components/ui/button'
import Footer from '../../components/footer'

export default function TrustPage() {
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
              Enterprise Security &<br />
              Data Protection
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl">
              SOC 2 Type II certified security infrastructure with enterprise-grade data encryption and compliance frameworks for SaaS analytics platforms. 
              GDPR compliant data processing with ISO 27001 information security management ensuring complete privacy protection for business intelligence operations. 
              Zero-trust architecture with 99.9% uptime guarantee and comprehensive audit trails for regulatory compliance requirements.
              Advanced threat detection and monitoring systems with automated incident response and disaster recovery protocols for maximum data protection.
              Multi-layered security controls including end-to-end encryption, role-based access controls, and continuous vulnerability assessments for enterprise peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-4" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Built with security at the core, trusted by enterprises worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Data Encryption</h3>
              <p className="text-slate-600 text-sm">
                AES-256 encryption at rest and TLS 1.3 in transit for all data.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">SOC 2 Type II</h3>
              <p className="text-slate-600 text-sm">
                Independently audited and certified for security controls.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">GDPR Compliant</h3>
              <p className="text-slate-600 text-sm">
                Full compliance with European data protection regulations.
              </p>
            </div>

            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">ISO 27001</h3>
              <p className="text-slate-600 text-sm">
                International standard for information security management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-4" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              Compliance & Certifications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              We maintain the highest standards of compliance and security certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-slate-900 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">SOC 2 Type II</h3>
              <p className="text-slate-600 mb-4">
                Our SOC 2 Type II certification demonstrates our commitment to maintaining strict 
                information security policies and procedures.
              </p>
              <div className="space-y-2 text-sm text-slate-600 mb-6">
                <div>• Security controls audited</div>
                <div>• Annual compliance reviews</div>
                <div>• Third-party validated</div>
              </div>
              <a href="/documents/soc2-report.pdf" download="GlassBox-SOC2-Report.pdf">
                <Button variant="outline" className="w-full border-slate-600 text-slate-600 hover:bg-slate-50">
                  Download Report
                </Button>
              </a>
            </div>

            <div className="border-l-4 border-slate-900 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">GDPR Compliance</h3>
              <p className="text-slate-600 mb-4">
                Full compliance with the General Data Protection Regulation, ensuring 
                your European customers' data is protected.
              </p>
              <div className="space-y-2 text-sm text-slate-600 mb-6">
                <div>• Data minimization</div>
                <div>• Right to be forgotten</div>
                <div>• Data portability</div>
              </div>
              <Link href="/privacy">
                <Button variant="outline" className="w-full border-slate-600 text-slate-600 hover:bg-slate-50">
                  Privacy Policy
                </Button>
              </Link>
            </div>

            <div className="border-l-4 border-slate-900 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">ISO 27001</h3>
              <p className="text-slate-600 mb-4">
                Information security management system certified to international standards 
                for systematic security management.
              </p>
              <div className="space-y-2 text-sm text-slate-600 mb-6">
                <div>• Risk management</div>
                <div>• Continuous improvement</div>
                <div>• Global recognition</div>
              </div>
              <a href="/documents/iso27001-certificate.pdf" download="GlassBox-ISO27001-Certificate.pdf">
                <Button variant="outline" className="w-full border-slate-600 text-slate-600 hover:bg-slate-50">
                  Certificate
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Comprehensive security measures at every layer of our infrastructure.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Infrastructure Security</h3>
                <p className="text-slate-600 mb-6">
                  Our infrastructure is built on enterprise-grade cloud platforms with multiple layers 
                  of security controls, monitoring, and redundancy.
                </p>
                <div className="space-y-3">
                  <div className="text-slate-700">• Multi-region data replication</div>
                  <div className="text-slate-700">• 24/7 security monitoring</div>
                  <div className="text-slate-700">• Automated threat detection</div>
                  <div className="text-slate-700">• Regular security audits</div>
                </div>
              </div>
              <div className="border-l-4 border-slate-900 pl-8 bg-slate-50 p-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">99.9% Uptime</h4>
                <p className="text-slate-600">
                  Guaranteed availability with enterprise-grade infrastructure and monitoring.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="border-l-4 border-slate-900 pl-8 bg-slate-50 p-8 order-2 md:order-1">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Zero-Trust Architecture</h4>
                <p className="text-slate-600">
                  Every request is verified and authenticated before accessing any data or systems.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Data Protection</h3>
                <p className="text-slate-600 mb-6">
                  Your data is encrypted at rest and in transit, with strict access controls 
                  and comprehensive audit logging for all data access.
                </p>
                <div className="space-y-3">
                  <div className="text-slate-700">• AES-256 encryption at rest</div>
                  <div className="text-slate-700">• TLS 1.3 encryption in transit</div>
                  <div className="text-slate-700">• Role-based access controls</div>
                  <div className="text-slate-700">• Complete audit trails</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Our Privacy Commitment
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We believe privacy is a fundamental right. We never sell your data, and we're transparent 
            about how we collect, use, and protect your information.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Minimization</h3>
              <p className="text-slate-600">
                We only collect data that's necessary to provide our services and improve your experience.
              </p>
            </div>
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Transparent Practices</h3>
              <p className="text-slate-600">
                Clear, understandable privacy policies with no hidden data collection or sharing.
              </p>
            </div>
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Your Control</h3>
              <p className="text-slate-600">
                You have full control over your data with easy export, deletion, and privacy settings.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white mr-4">
              Read Privacy Policy
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-600 hover:bg-slate-50">
              Contact Security Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}

