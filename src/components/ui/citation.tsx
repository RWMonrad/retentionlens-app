'use client'

import React, { useState } from 'react'
import sourcesData from '../../data/research-sources.json'

interface CitationProps {
  sourceId: string
  number: number
}

interface CitationTooltipProps {
  source: any
  isVisible: boolean
  position: { x: number; y: number }
}

const CitationTooltip: React.FC<CitationTooltipProps> = ({ source, isVisible, position }) => {
  if (!isVisible || !source) return null

  return (
    <div 
      className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm"
      style={{ 
        left: position.x, 
        top: position.y - 10,
        transform: 'translateX(-50%)'
      }}
    >
      <div className="text-sm font-semibold text-slate-900 mb-1">
        {source.authors.join(', ')} ({source.year})
      </div>
      <div className="text-xs text-slate-600 mb-2">
        {source.title}
      </div>
      <div className="text-xs text-slate-500">
        {source.journal} • {source.type.replace('_', ' ')}
      </div>
      {source.key_findings && source.key_findings.length > 0 && (
        <div className="text-xs text-slate-600 mt-2 italic">
          "{source.key_findings[0]}"
        </div>
      )}
    </div>
  )
}

export const Citation: React.FC<CitationProps> = ({ sourceId, number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  const source = sourcesData.sources.find(s => s.id === sourceId)
  
  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = () => {
    if (source?.url) {
      window.open(source.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <sup
        className="text-emerald-600 hover:text-emerald-800 cursor-pointer transition-colors duration-200 font-medium"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ fontSize: '0.55em' }}
      >
        [{number}]
      </sup>
      <CitationTooltip 
        source={source} 
        isVisible={isHovered} 
        position={position} 
      />
    </>
  )
}

interface ReferencesProps {
  citedSources: string[]
}

export const References: React.FC<ReferencesProps> = ({ citedSources }) => {
  const citedSourcesData = citedSources
    .map(id => sourcesData.sources.find(s => s.id === id))
    .filter((source): source is NonNullable<typeof source> => source !== undefined)

  if (citedSourcesData.length === 0) return null

  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-slate-900 mb-6" style={{fontFamily: 'Playfair SemiCondensed, serif'}}>
        References
      </h3>
      <div className="space-y-3">
        {citedSourcesData.map((source, index) => (
          <div key={source.id} className="text-sm text-slate-600 leading-relaxed">
            <span className="font-medium text-emerald-600">[{index + 1}]</span>{' '}
            <span className="font-medium">{source.authors.join(', ')}</span> ({source.year}). 
            "{source.title}." <em>{source.journal}</em>.
            {source.doi && (
              <span> DOI: <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800">{source.doi}</a></span>
            )}
            {!source.doi && source.url && (
              <span> <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800">Available online</a></span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

