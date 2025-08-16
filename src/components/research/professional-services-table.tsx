'use client';

import { ProfessionalService } from '../../types/research';
import { FileText, Settings, Users } from 'lucide-react';

interface ProfessionalServicesTableProps {
  services: ProfessionalService[];
  frameworkText?: string[];
  className?: string;
}

function ServiceIcon({ category }: { category: string }) {
  switch (category.toLowerCase()) {
    case 'custom research development':
      return <FileText className="h-5 w-5 text-blue-600" />;
    case 'implementation consulting':
      return <Settings className="h-5 w-5 text-green-600" />;
    case 'strategic advisory':
      return <Users className="h-5 w-5 text-purple-600" />;
    default:
      return <FileText className="h-5 w-5 text-gray-600" />;
  }
}

export default function ProfessionalServicesTable({ 
  services, 
  frameworkText = [],
  className = "" 
}: ProfessionalServicesTableProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 bg-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Service Category
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Scope
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Delivery Method
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Typical Engagement
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="border border-gray-200 px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <ServiceIcon category={service.category} />
                    <span className="font-medium text-slate-900">{service.category}</span>
                  </div>
                </td>
                
                <td className="border border-gray-200 px-6 py-4">
                  <span className="text-slate-600 text-sm leading-relaxed">{service.scope}</span>
                </td>
                
                <td className="border border-gray-200 px-6 py-4">
                  <span className="text-slate-600">{service.deliveryMethod}</span>
                </td>
                
                <td className="border border-gray-200 px-6 py-4">
                  <span className="text-slate-600 font-medium">{service.typicalEngagement}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Service Cards for Mobile */}
      <div className="md:hidden space-y-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <ServiceIcon category={service.category} />
                <h3 className="font-medium text-slate-900">{service.category}</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-slate-700">Scope:</span>
                  <p className="text-slate-600 mt-1">{service.scope}</p>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Delivery Method:</span>
                  <p className="text-slate-600 mt-1">{service.deliveryMethod}</p>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Typical Engagement:</span>
                  <p className="text-slate-600 mt-1 font-medium">{service.typicalEngagement}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Framework Text */}
      {frameworkText.length > 0 && (
        <div className="space-y-4">
          {frameworkText.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-slate-700 max-w-4xl">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Contact CTA */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <div className="text-center space-y-4">
          <h4 className="text-xl font-normal text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
            Ready to Discuss Your Research Needs?
          </h4>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our research team is available to discuss custom research projects, implementation consulting, 
            and strategic advisory services tailored to your organization's specific requirements.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
              Contact Research Team
            </button>
            <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

