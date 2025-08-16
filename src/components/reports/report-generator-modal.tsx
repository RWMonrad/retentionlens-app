'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Checkbox } from '../ui/checkbox'
import { Loader2, Download, Eye } from 'lucide-react'

export type ReportTemplate = {
  id: string
  title: string
  description: string
  timeToGenerate: string
  sections: string[]
  defaultDateRange: string
}

export type ReportConfig = {
  title: string
  template: string
  dateRange: string
  includeExecutiveSummary: boolean
  includeRecommendations: boolean
  includeTrends: boolean
  includeComparisons: boolean
}

type ReportGeneratorModalProps = {
  isOpen: boolean
  onClose: () => void
  selectedTemplate?: ReportTemplate
  onGenerate: (config: ReportConfig) => Promise<void>
}

export function ReportGeneratorModal({
  isOpen,
  onClose,
  selectedTemplate,
  onGenerate
}: ReportGeneratorModalProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPreviewReady, setIsPreviewReady] = useState(false)
  const [activeView, setActiveView] = useState<'customize' | 'preview'>('customize')
  
  const [config, setConfig] = useState<ReportConfig>({
    title: selectedTemplate?.title || '',
    template: selectedTemplate?.id || '',
    dateRange: selectedTemplate?.defaultDateRange || 'last-30-days',
    includeExecutiveSummary: true,
    includeRecommendations: true,
    includeTrends: true,
    includeComparisons: true
  })

  const handleConfigChange = (field: keyof ReportConfig, value: any) => {
    setConfig(prev => ({ ...prev, [field]: value }))
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      await onGenerate(config)
      // Simulate preview generation
      setTimeout(() => {
        setIsPreviewReady(true)
        setActiveView('preview')
        setIsGenerating(false)
      }, 1500)
    } catch (error) {
      console.error('Error generating report:', error)
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    // In a real implementation, this would download the actual report
    const link = document.createElement('a')
    link.href = '/mock-report-preview.png'
    link.download = `${config.title.replace(/\s+/g, '-').toLowerCase()}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Generate Report: {selectedTemplate?.title || 'New Report'}</DialogTitle>
        </DialogHeader>

        {activeView === 'customize' ? (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Report Title</Label>
              <Input
                id="title"
                value={config.title}
                onChange={(e) => handleConfigChange('title', e.target.value)}
                placeholder="Enter report title"
              />
            </div>

            {!selectedTemplate && (
              <div className="space-y-2">
                <Label htmlFor="template">Template</Label>
                <Select
                  value={config.template}
                  onValueChange={(value) => handleConfigChange('template', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="board-report">Board Report</SelectItem>
                    <SelectItem value="investor-update">Investor Update</SelectItem>
                    <SelectItem value="team-update">Team Update</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="dateRange">Date Range</Label>
              <Select
                value={config.dateRange}
                onValueChange={(value) => handleConfigChange('dateRange', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-7-days">Last 7 days</SelectItem>
                  <SelectItem value="last-30-days">Last 30 days</SelectItem>
                  <SelectItem value="last-90-days">Last 90 days</SelectItem>
                  <SelectItem value="year-to-date">Year to date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 pt-2">
              <Label>Sections to Include</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="executiveSummary"
                    checked={config.includeExecutiveSummary}
                    onCheckedChange={(checked) => 
                      handleConfigChange('includeExecutiveSummary', checked === true)
                    }
                  />
                  <Label htmlFor="executiveSummary" className="font-normal">
                    Executive Summary
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="recommendations"
                    checked={config.includeRecommendations}
                    onCheckedChange={(checked) => 
                      handleConfigChange('includeRecommendations', checked === true)
                    }
                  />
                  <Label htmlFor="recommendations" className="font-normal">
                    Recommendations
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="trends"
                    checked={config.includeTrends}
                    onCheckedChange={(checked) => 
                      handleConfigChange('includeTrends', checked === true)
                    }
                  />
                  <Label htmlFor="trends" className="font-normal">
                    Trends Analysis
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="comparisons"
                    checked={config.includeComparisons}
                    onCheckedChange={(checked) => 
                      handleConfigChange('includeComparisons', checked === true)
                    }
                  />
                  <Label htmlFor="comparisons" className="font-normal">
                    Peer Comparisons
                  </Label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-4">
            {isPreviewReady ? (
              <div className="space-y-4">
                <div className="border rounded-sm p-2 bg-gray-50">
                  <img 
                    src="/mock-report-preview.png" 
                    alt="Report Preview" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-center text-sm text-gray-500">
                  This is a preview of your report. Click Download to save the final version.
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                <span className="ml-2 text-gray-500">Generating preview...</span>
              </div>
            )}
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isGenerating}>
            Cancel
          </Button>
          {activeView === 'customize' ? (
            <Button onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-4 w-4" />
                  Preview Report
                </>
              )}
            </Button>
          ) : (
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

