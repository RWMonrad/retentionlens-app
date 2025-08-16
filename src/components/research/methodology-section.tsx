'use client';

import { MethodologySection as MethodologyData, DataSource } from '../../types/research';

interface MethodologySectionProps {
  data: MethodologyData;
  className?: string;
}

function DataSourcesTable({ dataSources }: { dataSources: DataSource[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200 bg-white">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-6 py-4 text-left">
              <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                Data Category
              </span>
            </th>
            <th className="border border-gray-200 px-6 py-4 text-left">
              <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                Collection Method
              </span>
            </th>
            <th className="border border-gray-200 px-6 py-4 text-left">
              <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                Sample Size
              </span>
            </th>
            <th className="border border-gray-200 px-6 py-4 text-left">
              <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                Validation Process
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSources.map((source, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="border border-gray-200 px-6 py-4">
                <span className="font-medium text-slate-900">{source.category}</span>
              </td>
              <td className="border border-gray-200 px-6 py-4">
                <span className="text-slate-600">{source.collectionMethod}</span>
              </td>
              <td className="border border-gray-200 px-6 py-4">
                <span className="text-slate-600 font-medium">{source.sampleSize}</span>
              </td>
              <td className="border border-gray-200 px-6 py-4">
                <span className="text-slate-600 text-sm leading-relaxed">{source.validationProcess}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MethodologySection({ data, className = "" }: MethodologySectionProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Methodology Text */}
      <div className="space-y-6">
        {data.methodologyText.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed text-slate-700 max-w-4xl">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Data Sources Table */}
      <div className="space-y-4">
        <h3 className="text-2xl font-normal text-slate-900 mb-4" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
          Data Sources & Validation
        </h3>
        <DataSourcesTable dataSources={data.dataSources} />
      </div>

      {/* Quality Assurance Framework */}
      <div className="space-y-4">
        <h3 className="text-2xl font-normal text-slate-900 mb-4" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
          Quality Assurance Framework
        </h3>
        <div className="border-l-4 border-slate-200 pl-6 space-y-4">
          {data.qualityFramework.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-slate-700 max-w-4xl">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

