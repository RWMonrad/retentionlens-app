'use client';

import { useState } from 'react';
import { ResearchCalendarItem } from '../../types/research';
import { Calendar, Clock, FileText, Users } from 'lucide-react';

interface ResearchCalendarProps {
  calendarItems: ResearchCalendarItem[];
  processText?: string[];
  className?: string;
}

function CalendarCard({ item, isActive }: { item: ResearchCalendarItem; isActive: boolean }) {
  return (
    <div className={`border rounded-lg p-6 transition-all duration-200 ${
      isActive 
        ? 'border-slate-400 bg-slate-50 shadow-md' 
        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
    }`}>
      <div className="space-y-4">
        {/* Quarter Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-normal text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
            {item.quarter}
          </h3>
          <Calendar className="h-5 w-5 text-slate-400" />
        </div>

        {/* Primary Focus */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">Primary Focus</span>
          </div>
          <p className="text-slate-900 font-medium">{item.primaryFocus}</p>
        </div>

        {/* Expected Publication */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">Expected Publication</span>
          </div>
          <p className="text-slate-600">{item.expectedPublication}</p>
        </div>

        {/* Scope */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">Research Scope</span>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{item.scope}</p>
        </div>
      </div>
    </div>
  );
}

function TimelineView({ calendarItems, activeQuarter }: { 
  calendarItems: ResearchCalendarItem[]; 
  activeQuarter: string;
}) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      
      <div className="space-y-8">
        {calendarItems.map((item, index) => (
          <div key={index} className="relative flex items-start space-x-6">
            {/* Timeline Dot */}
            <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
              item.quarter === activeQuarter
                ? 'bg-slate-100 border-slate-400'
                : 'bg-white border-gray-200'
            }`}>
              <Calendar className={`h-6 w-6 ${
                item.quarter === activeQuarter ? 'text-slate-600' : 'text-gray-400'
              }`} />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className={`p-6 rounded-lg border ${
                item.quarter === activeQuarter
                  ? 'border-slate-400 bg-slate-50'
                  : 'border-gray-200 bg-white'
              }`}>
                <h3 className="text-lg font-normal text-slate-900 mb-2" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
                  {item.quarter}: {item.primaryFocus}
                </h3>
                <p className="text-slate-600 text-sm mb-3">{item.scope}</p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span>Publication: {item.expectedPublication}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResearchCalendar({ 
  calendarItems, 
  processText = [],
  className = "" 
}: ResearchCalendarProps) {
  const [activeQuarter, setActiveQuarter] = useState(calendarItems[0]?.quarter || '');
  const [viewMode, setViewMode] = useState<'cards' | 'timeline'>('cards');

  return (
    <div className={`space-y-8 ${className}`}>
      {/* View Mode Toggle */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-normal text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
          Research Calendar
        </h3>
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('cards')}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              viewMode === 'cards'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cards
          </button>
          <button
            onClick={() => setViewMode('timeline')}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              viewMode === 'timeline'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Timeline
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'cards' ? (
        <>
          {/* Quarter Navigation */}
          <div className="flex flex-wrap gap-2">
            {calendarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveQuarter(item.quarter)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  activeQuarter === item.quarter
                    ? 'bg-slate-900 text-white'
                    : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                }`}
              >
                {item.quarter}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calendarItems.map((item, index) => (
              <CalendarCard
                key={index}
                item={item}
                isActive={item.quarter === activeQuarter}
              />
            ))}
          </div>
        </>
      ) : (
        <TimelineView calendarItems={calendarItems} activeQuarter={activeQuarter} />
      )}

      {/* Process Text */}
      {processText.length > 0 && (
        <div className="space-y-4 border-t border-gray-200 pt-8">
          <h4 className="text-lg font-medium text-slate-900" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
            Research Development Process
          </h4>
          {processText.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-slate-700 max-w-4xl">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

