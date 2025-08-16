'use client';

import { useState } from 'react';
import { BenchmarkCategory } from '../../types/research';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface BenchmarkingTableProps {
  benchmarks: BenchmarkCategory[];
  explanationText?: string[];
  className?: string;
}

function PerformanceIndicator({ baseline, topQuartile }: { baseline: string; topQuartile: string }) {
  // Simple visual indicator for performance levels
  return (
    <div className="flex items-center space-x-2">
      <div className="flex space-x-1">
        <div className="w-3 h-3 bg-yellow-400 rounded-full" title="Industry Baseline"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full" title="Top Quartile"></div>
      </div>
    </div>
  );
}

function ExpandableRow({ 
  benchmark, 
  isExpanded, 
  onToggle 
}: { 
  benchmark: BenchmarkCategory; 
  isExpanded: boolean; 
  onToggle: () => void; 
}) {
  return (
    <>
      <tr className="hover:bg-gray-50 transition-colors">
        <td className="border border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-900">{benchmark.category}</span>
            <button
              onClick={onToggle}
              className="ml-2 p-1 hover:bg-gray-100 rounded"
            >
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-slate-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-500" />
              )}
            </button>
          </div>
        </td>
        
        <td className="border border-gray-200 px-6 py-4">
          <span className="text-slate-600">{benchmark.measurementFramework}</span>
        </td>
        
        <td className="border border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-3">
            <span className="text-slate-600">{benchmark.industryBaseline}</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full" title="Industry Baseline"></div>
          </div>
        </td>
        
        <td className="border border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-3">
            <span className="text-slate-600">{benchmark.topQuartilePerformance}</span>
            <div className="w-2 h-2 bg-green-500 rounded-full" title="Top Quartile Performance"></div>
          </div>
        </td>
      </tr>
      
      {isExpanded && (
        <tr className="bg-gray-50">
          <td colSpan={4} className="border border-gray-200 px-6 py-4">
            <div className="space-y-3">
              <h4 className="font-medium text-slate-900">Detailed Analysis</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                This benchmark category measures {benchmark.category.toLowerCase()} using our {benchmark.measurementFramework.toLowerCase()}. 
                Organizations typically perform at {benchmark.industryBaseline.toLowerCase()}, while top-performing companies achieve {benchmark.topQuartilePerformance.toLowerCase()}.
              </p>
              <div className="flex items-center space-x-4 text-xs text-slate-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Industry Baseline</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Top Quartile Performance</span>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default function BenchmarkingTable({ 
  benchmarks, 
  explanationText = [],
  className = "" 
}: BenchmarkingTableProps) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (index: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 bg-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Benchmark Category
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Measurement Framework
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Industry Baseline
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Top Quartile Performance
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {benchmarks.map((benchmark, index) => (
              <ExpandableRow
                key={index}
                benchmark={benchmark}
                isExpanded={expandedRows.has(index)}
                onToggle={() => toggleRow(index)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 text-sm text-slate-600 bg-gray-50 py-3 px-4 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <span>Industry Baseline Performance</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span>Top Quartile Performance</span>
        </div>
      </div>

      {/* Explanation Text */}
      {explanationText.length > 0 && (
        <div className="space-y-4">
          {explanationText.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-slate-700 max-w-4xl">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

