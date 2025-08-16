'use client'

import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { useState } from 'react'

const benchmarkData = [
  {
    metric: 'Monthly Churn Rate',
    yourValue: '3.2%',
    percentile: '75th',
    median: '4.1%',
    top10: '1.8%',
    status: 'good'
  },
  {
    metric: 'Net Revenue Retention',
    yourValue: '108%',
    percentile: '60th',
    median: '112%',
    top10: '125%',
    status: 'average'
  },
  {
    metric: 'Customer Acquisition Cost',
    yourValue: '$1,247',
    percentile: '45th',
    median: '$1,180',
    top10: '$890',
    status: 'needs-improvement'
  },
  {
    metric: 'LTV:CAC Ratio',
    yourValue: '2.8:1',
    percentile: '40th',
    median: '3.2:1',
    top10: '4.5:1',
    status: 'needs-improvement'
  },
  {
    metric: 'Gross Revenue Retention',
    yourValue: '94.2%',
    percentile: '80th',
    median: '91.5%',
    top10: '97.1%',
    status: 'good'
  },
  {
    metric: 'Time to Value',
    yourValue: '14 days',
    percentile: '65th',
    median: '18 days',
    top10: '7 days',
    status: 'average'
  }
]

const peerCompanies = [
  { name: 'TechFlow Solutions', arr: '$2.4M', employees: '25-50', vertical: 'DevTools' },
  { name: 'DataSync Pro', arr: '$1.8M', employees: '10-25', vertical: 'Analytics' },
  { name: 'CloudMetrics Inc', arr: '$3.2M', employees: '50-100', vertical: 'Infrastructure' },
  { name: 'StartupMetrics', arr: '$890K', employees: '10-25', vertical: 'Analytics' },
  { name: 'ScaleOps', arr: '$2.1M', employees: '25-50', vertical: 'DevTools' }
]

export default function Benchmarking() {
  const [selectedMetric, setSelectedMetric] = useState('all')
  const [selectedVertical, setSelectedVertical] = useState('all')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'text-green-600'
      case 'average':
        return 'text-blue-600'
      case 'needs-improvement':
        return 'text-orange-600'
      default:
        return 'text-slate-600'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-50'
      case 'average':
        return 'bg-blue-50'
      case 'needs-improvement':
        return 'bg-orange-50'
      default:
        return 'bg-slate-50'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Benchmarking</h1>
            <p className="text-slate-600">Compare your metrics against industry peers</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="text-slate-700 border-slate-300">
              Export Report
            </Button>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">
              Update Filters
            </Button>
          </div>
        </div>

        {/* Filter Section */}
        <Card className="p-6 border border-slate-200 rounded-sm">
          <h3 className="font-normal text-slate-900 mb-4">Peer Group Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-normal text-slate-700 mb-2">ARR Range</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm">
                <option>$1M - $5M</option>
                <option>$500K - $2M</option>
                <option>$2M - $10M</option>
                <option>$5M - $20M</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-normal text-slate-700 mb-2">Company Size</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm">
                <option>10-50 employees</option>
                <option>1-10 employees</option>
                <option>50-100 employees</option>
                <option>100+ employees</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-normal text-slate-700 mb-2">Vertical</label>
              <select 
                value={selectedVertical}
                onChange={(e) => setSelectedVertical(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
              >
                <option value="all">All Verticals</option>
                <option value="devtools">DevTools</option>
                <option value="analytics">Analytics</option>
                <option value="infrastructure">Infrastructure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-normal text-slate-700 mb-2">Funding Stage</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm">
                <option>Seed to Series A</option>
                <option>Bootstrap</option>
                <option>Series A+</option>
                <option>All Stages</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Benchmark Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 border border-slate-200 rounded-sm">
            <h3 className="font-normal text-slate-900 mb-4">Your Performance vs Peers</h3>
            <div className="space-y-4">
              {benchmarkData.map((item, index) => (
                <div key={index} className={`p-4 rounded-sm border-l-4 ${
                  item.status === 'good' ? 'border-green-500 bg-white' :
                  item.status === 'average' ? 'border-yellow-500 bg-white' :
                  item.status === 'needs-improvement' ? 'border-red-500 bg-white' :
                  'border-gray-500 bg-white'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-normal text-slate-900">{item.metric}</h4>
                    <span className="text-sm font-normal text-slate-900">
                      {item.percentile} percentile
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-slate-600">Your Value</div>
                      <div className="font-normal text-slate-900">{item.yourValue}</div>
                    </div>
                    <div>
                      <div className="text-slate-600">Peer Median</div>
                      <div className="font-normal text-slate-900">{item.median}</div>
                    </div>
                    <div>
                      <div className="text-slate-600">Top 10%</div>
                      <div className="font-normal text-slate-900">{item.top10}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border border-slate-200 rounded-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Your Peer Group ({peerCompanies.length} companies)</h3>
            <div className="space-y-3">
              {peerCompanies.map((company, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-sm">
                  <div>
                    <div className="font-medium text-slate-900">{company.name}</div>
                    <div className="text-sm text-slate-600">{company.vertical}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-slate-900">{company.arr}</div>
                    <div className="text-xs text-slate-600">{company.employees}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Showing companies with similar ARR, size, and business model. 
                <Button variant="link" className="p-0 h-auto text-slate-900 underline ml-1">
                  Adjust filters
                </Button>
              </p>
            </div>
          </Card>
        </div>

        {/* Key Insights */}
        <Card className="p-6 border border-slate-200 rounded-sm">
          <h3 className="font-semibold text-slate-900 mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium text-slate-900 mb-2">Strong Performance</h4>
              <p className="text-slate-700 text-sm mb-2">
                Your churn rate of 3.2% is in the 75th percentile, significantly better than the peer median of 4.1%.
              </p>
              <p className="text-slate-600 text-xs">
                Recommendation: Document your retention strategies to maintain this advantage.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-medium text-slate-900 mb-2">Improvement Opportunity</h4>
              <p className="text-slate-700 text-sm mb-2">
                Your LTV:CAC ratio of 2.8:1 is below the peer median of 3.2:1.
              </p>
              <p className="text-slate-600 text-xs">
                Recommendation: Focus on increasing customer lifetime value or reducing acquisition costs.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}

