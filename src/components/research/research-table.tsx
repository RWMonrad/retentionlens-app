'use client';

import { useState, useEffect } from 'react';
import { ResearchPublication } from '../../types/research';

interface ResearchTableProps {
  publications: ResearchPublication[];
  sortable?: boolean;
  className?: string;
}

export default function ResearchTable({ 
  publications, 
  sortable = true, 
  className = "" 
}: ResearchTableProps) {
  const [sortedPublications, setSortedPublications] = useState(publications);
  const [sortField, setSortField] = useState<keyof ResearchPublication>('releaseDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const sorted = [...publications].sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];
      
      // Handle date sorting
      if (sortField === 'releaseDate') {
        aValue = new Date(aValue as string).getTime();
        bValue = new Date(bValue as string).getTime();
      }
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    
    setSortedPublications(sorted);
  }, [publications, sortField, sortDirection]);

  const handleSort = (field: keyof ResearchPublication) => {
    if (!sortable) return;
    
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isMobile) {
    return (
      <div className={`space-y-4 ${className}`}>
        {sortedPublications.map((publication, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                {publication.publication}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-slate-700">Release Date:</span>
                  <p className="text-slate-600">{formatDate(publication.releaseDate)}</p>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Pages:</span>
                  <p className="text-slate-600">{publication.pages}</p>
                </div>
              </div>
              
              <div>
                <span className="font-medium text-slate-700 text-sm">Focus Area:</span>
                <p className="text-slate-600 text-sm">{publication.focusArea}</p>
              </div>
              
              <div>
                <span className="font-medium text-slate-700 text-sm">Key Findings:</span>
                <p className="text-slate-600 text-sm leading-relaxed">{publication.keyFindings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse border border-gray-200 bg-white">
        <thead>
          <tr className="bg-gray-50">
            <th 
              className={`border border-gray-200 px-6 py-4 text-left ${sortable ? 'cursor-pointer hover:bg-gray-100' : ''}`}
              onClick={() => handleSort('publication')}
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Publication
                </span>
                {sortable && sortField === 'publication' && (
                  <span className="text-slate-500">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </th>
            
            <th 
              className={`border border-gray-200 px-6 py-4 text-left ${sortable ? 'cursor-pointer hover:bg-gray-100' : ''}`}
              onClick={() => handleSort('releaseDate')}
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Release Date
                </span>
                {sortable && sortField === 'releaseDate' && (
                  <span className="text-slate-500">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </th>
            
            <th className="border border-gray-200 px-6 py-4 text-left">
              <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                Pages
              </span>
            </th>
            
            <th 
              className={`border border-gray-200 px-6 py-4 text-left ${sortable ? 'cursor-pointer hover:bg-gray-100' : ''}`}
              onClick={() => handleSort('focusArea')}
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Focus Area
                </span>
                {sortable && sortField === 'focusArea' && (
                  <span className="text-slate-500">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </th>
            
            <th className="border border-gray-200 px-6 py-4 text-left">
              <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                Key Findings
              </span>
            </th>
          </tr>
        </thead>
        
        <tbody>
          {sortedPublications.map((publication, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="border border-gray-200 px-6 py-4">
                <span className="font-medium text-slate-900">{publication.publication}</span>
              </td>
              
              <td className="border border-gray-200 px-6 py-4">
                <span className="text-slate-600">{formatDate(publication.releaseDate)}</span>
              </td>
              
              <td className="border border-gray-200 px-6 py-4">
                <span className="text-slate-600">{publication.pages}</span>
              </td>
              
              <td className="border border-gray-200 px-6 py-4">
                <span className="text-slate-600">{publication.focusArea}</span>
              </td>
              
              <td className="border border-gray-200 px-6 py-4">
                <span className="text-slate-600 text-sm leading-relaxed">{publication.keyFindings}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

