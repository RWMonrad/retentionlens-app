import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Kolonne 1: Selskap & Logo */}
          <div className="lg:col-span-1 space-y-3">
            <div className="flex items-center space-x-3">
              <img
                src="/logo_retentionlens.png"
                alt="RetentionLens"
                className="h-20 w-auto"
              />
            </div>
            
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-900">
                Advanced Predictive Analytics for SaaS Revenue Intelligence
              </p>
              <p className="text-xs text-gray-600">
                Predict customer churn 14 days early with 90%+ accuracy.
              </p>
            </div>

            {/* Sosiale medier ikoner */}
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/108630393/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img 
                  src="/linkedin-icon-new.png" 
                  alt="LinkedIn" 
                  className="w-6 h-6"
                />
              </a>
              <a 
                href="https://github.com/RWMonrad/retentionlens-app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img 
                  src="/github-icon.png" 
                  alt="GitHub" 
                  className="w-6 h-6"
                />
              </a>
              <a 
                href="https://reddit.com/user/retentionlens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <img 
                  src="/reddit-icon-new.png" 
                  alt="Reddit" 
                  className="w-6 h-6"
                />
              </a>

            </div>
          </div>

          {/* Kolonne 2: Products */}
          <div className="space-y-3">
            <h3 className="text-xs text-gray-900 uppercase tracking-wider" style={{fontFamily: 'Playfair SemiCondensed, serif', fontWeight: 400}}>
              Products
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/test-suite" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Test Suite
                </Link>
              </li>
              <li>
                <Link href="/ai-features" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  AI Features
                </Link>
              </li>
              <li>
                <Link href="/market-insights" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Developer Resources
                </a>
              </li>
              <li>
                <Link href="/trust" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Security & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolonne 3: Resources */}
          <div className="space-y-3">
            <h3 className="text-xs text-gray-900 uppercase tracking-wider" style={{fontFamily: 'Playfair SemiCondensed, serif', fontWeight: 400}}>
              Resources
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <Link href="/help" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Revenue Intelligence Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Status Page
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                  Webinars & Events
                </a>
              </li>
            </ul>
          </div>

          {/* Kolonne 4: Contact & Company - Side by side */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xs text-gray-900 uppercase tracking-wider" style={{fontFamily: 'Playfair SemiCondensed, serif', fontWeight: 400}}>
                Contact
              </h3>
              <ul className="space-y-1">
                <li>
                  <a 
                    href="mailto:support@retentionlens.com" 
                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    support@retentionlens.com
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:sales@retentionlens.com" 
                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    sales@retentionlens.com
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:research@retentionlens.com" 
                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    research@retentionlens.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs text-gray-900 uppercase tracking-wider" style={{fontFamily: 'Playfair SemiCondensed, serif', fontWeight: 400}}>
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nedre seksjon - Compliance på én linje */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
            <div>© 2025 RetentionLens. All rights reserved.</div>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <span>Made in EEC</span>
              <span>SOC 2 Type II Compliant</span>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

