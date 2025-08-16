'use client';

import { AccessLevel } from '../../types/research';
import { Lock, Users, Crown } from 'lucide-react';

interface AccessLevelsTableProps {
  accessLevels: AccessLevel[];
  explanationText?: string[];
  className?: string;
}

function AccessLevelIcon({ level }: { level: string }) {
  switch (level.toLowerCase()) {
    case 'public research':
      return <Users className="h-5 w-5 text-green-600" />;
    case 'registered user research':
      return <Lock className="h-5 w-5 text-blue-600" />;
    case 'professional research':
      return <Crown className="h-5 w-5 text-purple-600" />;
    default:
      return <Users className="h-5 w-5 text-gray-600" />;
  }
}

function AccessLevelBadge({ level }: { level: string }) {
  const getBadgeColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'public research':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'registered user research':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'professional research':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor(level)}`}>
      {level}
    </span>
  );
}

export default function AccessLevelsTable({ 
  accessLevels, 
  explanationText = [],
  className = "" 
}: AccessLevelsTableProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 bg-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Access Level
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Availability
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Research Scope
                </span>
              </th>
              <th className="border border-gray-200 px-6 py-4 text-left">
                <span className="font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  Timeline
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {accessLevels.map((level, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="border border-gray-200 px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <AccessLevelIcon level={level.level} />
                    <div>
                      <div className="font-medium text-slate-900">{level.level}</div>
                      <div className="mt-1">
                        <AccessLevelBadge level={level.level} />
                      </div>
                    </div>
                  </div>
                </td>
                
                <td className="border border-gray-200 px-6 py-4">
                  <span className="text-slate-600">{level.availability}</span>
                </td>
                
                <td className="border border-gray-200 px-6 py-4">
                  <span className="text-slate-600 text-sm leading-relaxed">{level.researchScope}</span>
                </td>
                
                <td className="border border-gray-200 px-6 py-4">
                  <span className="text-slate-600">{level.timeline}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Access Level Cards for Mobile */}
      <div className="md:hidden space-y-4">
        {accessLevels.map((level, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <AccessLevelIcon level={level.level} />
                <div>
                  <h3 className="font-medium text-slate-900">{level.level}</h3>
                  <AccessLevelBadge level={level.level} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div>
                  <span className="font-medium text-slate-700">Availability:</span>
                  <p className="text-slate-600">{level.availability}</p>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Research Scope:</span>
                  <p className="text-slate-600">{level.researchScope}</p>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Timeline:</span>
                  <p className="text-slate-600">{level.timeline}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
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

