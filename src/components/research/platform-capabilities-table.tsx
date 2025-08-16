'use client';

import { PlatformCapability } from '../../types/research';
import { BarChart3, TrendingUp, Search, Target } from 'lucide-react';

interface PlatformCapabilitiesTableProps {
  capabilities: PlatformCapability[];
  integrationText?: string[];
  className?: string;
}

function CapabilityIcon({ category }: { category: string }) {
  switch (category.toLowerCase()) {
    case 'real-time benchmarking':
      return <BarChart3 className="h-5 w-5 text-blue-600" />;
    case 'predictive analytics':
      return <TrendingUp className="h-5 w-5 text-green-600" />;
    case 'custom research':
      return <Search className="h-5 w-5 text-purple-600" />;
    case 'competitive intelligence':
      return <Target className="h-5 w-5 text-orange-600" />;
    default:
      return <BarChart3 className="h-5 w-5 text-gray-600" />;
  }
}

export default function PlatformCapabilitiesTable({ 
  capabilities, 
  integrationText = [],
  className = "" 
}: PlatformCapabilitiesTableProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 bg-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Platform Capability
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Research Application
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Platform Implementation
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {capabilities.map((capability, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="border border-gray-200 px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <CapabilityIcon category={capability.category} />
                    <span className="font-medium text-slate-900">{capability.category}</span>
                  </div>
                </td>
                
                <td className="border border-gray-200 px-6 py-4">
                  <span className="text-slate-600">{capability.researchApplication}</span>
                </td>
                
                <td className="border border-gray-200 px-6 py-4">
                  <span className="text-slate-600 text-sm leading-relaxed">{capability.platformImplementation}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Capability Cards for Mobile */}
      <div className="md:hidden space-y-4">
        {capabilities.map((capability, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CapabilityIcon category={capability.category} />
                <h3 className="font-medium text-slate-900">{capability.category}</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-slate-700">Research Application:</span>
                  <p className="text-slate-600 mt-1">{capability.researchApplication}</p>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Platform Implementation:</span>
                  <p className="text-slate-600 mt-1">{capability.platformImplementation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Integration Text */}
      {integrationText.length > 0 && (
        <div className="space-y-4 border-t border-gray-200 pt-6">
          <h4 className="text-lg font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
            Platform Integration
          </h4>
          {integrationText.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-slate-700 max-w-4xl">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-medium text-slate-900 mb-2" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
              Ready to Access These Capabilities?
            </h4>
            <p className="text-slate-600">
              Explore our platform to see how these research-grade analytics can transform your business intelligence.
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
              Try Test Suite
            </button>
            <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

