'use client'

import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { useState } from 'react'
import { X, ArrowLeft, ArrowRight, Download, Filter, BarChart, LineChart, PieChart } from 'lucide-react'

export default function Analytics() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 12 Months')
  const [selectedSegment, setSelectedSegment] = useState('All Customers')
  const [selectedDrillDown, setSelectedDrillDown] = useState<string | null>(null)
  const [showFullCohortAnalysis, setShowFullCohortAnalysis] = useState(false)
  const [selectedCohortMetric, setSelectedCohortMetric] = useState('revenue')
  const [selectedCohortView, setSelectedCohortView] = useState('table')

  const keyInsights = [
    {
      title: 'Churn Concentration',
      description: 'Most churn happens in months 2-3 after signup',
      impact: 'High Impact',
      recommendation: 'Focus onboarding improvements on 60-90 day mark'
    },
    {
      title: 'Expansion Opportunity', 
      description: 'Customers who survive month 6 show 85% expansion rate',
      impact: 'Medium Impact',
      recommendation: 'Target 6+ month customers for upselling campaigns'
    },
    {
      title: 'Seasonal Pattern',
      description: 'Q1 cohorts consistently outperform Q4 cohorts',
      impact: 'Medium Impact',
      recommendation: 'Analyze Q1 onboarding process for replication'
    }
  ]

  const drillDownOptions = [
    { 
      id: 'plan-type',
      label: 'By Plan Type', 
      description: 'Analyze metrics segmented by plan type' 
    },
    { 
      id: 'customer-size',
      label: 'By Customer Size', 
      description: 'Analyze metrics segmented by customer size' 
    },
    { 
      id: 'acquisition-channel',
      label: 'By Acquisition Channel', 
      description: 'Analyze metrics segmented by acquisition channel' 
    },
    { 
      id: 'geographic-region',
      label: 'By Geographic Region', 
      description: 'Analyze metrics segmented by geographic region' 
    }
  ]

  const drillDownData: Record<string, {
    title: string;
    segments: Array<{
      name: string;
      mrr: string;
      churn: string;
      expansion: string;
      customers: number;
    }>;
  }> = {
    'plan-type': {
      title: 'Analysis by Plan Type',
      segments: [
        { name: 'Enterprise', mrr: '$28,450', churn: '1.8%', expansion: '142%', customers: 23 },
        { name: 'Growth', mrr: '$15,200', churn: '3.1%', expansion: '118%', customers: 67 },
        { name: 'Starter', mrr: '$3,597', churn: '5.4%', expansion: '89%', customers: 156 }
      ]
    },
    'customer-size': {
      title: 'Analysis by Customer Size',
      segments: [
        { name: 'Large (100+ employees)', mrr: '$31,200', churn: '1.2%', expansion: '156%', customers: 18 },
        { name: 'Medium (25-99 employees)', mrr: '$12,800', churn: '2.8%', expansion: '124%', customers: 89 },
        { name: 'Small (1-24 employees)', mrr: '$3,247', churn: '4.9%', expansion: '95%', customers: 139 }
      ]
    },
    'acquisition-channel': {
      title: 'Analysis by Acquisition Channel',
      segments: [
        { name: 'Organic/SEO', mrr: '$18,900', churn: '2.1%', expansion: '128%', customers: 98 },
        { name: 'Paid Marketing', mrr: '$14,200', churn: '3.8%', expansion: '115%', customers: 76 },
        { name: 'Referrals', mrr: '$9,850', churn: '1.9%', expansion: '134%', customers: 45 },
        { name: 'Direct', mrr: '$4,297', churn: '4.2%', expansion: '102%', customers: 27 }
      ]
    },
    'geographic-region': {
      title: 'Analysis by Geographic Region',
      segments: [
        { name: 'North America', mrr: '$28,450', churn: '2.8%', expansion: '125%', customers: 142 },
        { name: 'Europe', mrr: '$13,200', churn: '3.1%', expansion: '118%', customers: 78 },
        { name: 'Asia Pacific', mrr: '$4,850', churn: '3.9%', expansion: '108%', customers: 21 },
        { name: 'Other', mrr: '$747', churn: '5.1%', expansion: '95%', customers: 5 }
      ]
    }
  }

  // Basic cohort data for the summary view
  const cohortData = [
    { cohort: '2024-Q1', month0: '100%', month1: '94%', month2: '89%', month3: '85%', month6: '82%', month12: '78%' },
    { cohort: '2023-Q4', month0: '100%', month1: '91%', month2: '84%', month3: '79%', month6: '75%', month12: '71%' },
    { cohort: '2023-Q3', month0: '100%', month1: '88%', month2: '81%', month3: '76%', month6: '72%', month12: '68%' }
  ]

  // Extended cohort data for the full analysis view
  const extendedCohortData: Record<string, Array<{
    cohort: string;
    month0: string;
    month1: string;
    month2: string;
    month3: string;
    month4: string;
    month5: string;
    month6: string;
    month7: string;
    month8: string;
    month9: string;
    month10: string;
    month11: string;
    month12: string;
    customers: number;
    totalRevenue?: string;
    activeUsers?: number;
    powerUsers?: number;
  }>> = {
    revenue: [
      { cohort: '2024-Q1', month0: '100%', month1: '94%', month2: '89%', month3: '85%', month4: '83%', month5: '82%', month6: '82%', month7: '81%', month8: '80%', month9: '79%', month10: '78%', month11: '78%', month12: '78%', customers: 342, totalRevenue: '$427,500' },
      { cohort: '2023-Q4', month0: '100%', month1: '91%', month2: '84%', month3: '79%', month4: '77%', month5: '76%', month6: '75%', month7: '74%', month8: '73%', month9: '72%', month10: '71%', month11: '71%', month12: '71%', customers: 298, totalRevenue: '$356,400' },
      { cohort: '2023-Q3', month0: '100%', month1: '88%', month2: '81%', month3: '76%', month4: '74%', month5: '73%', month6: '72%', month7: '71%', month8: '70%', month9: '69%', month10: '68%', month11: '68%', month12: '68%', customers: 276, totalRevenue: '$324,800' },
      { cohort: '2023-Q2', month0: '100%', month1: '87%', month2: '79%', month3: '74%', month4: '72%', month5: '70%', month6: '69%', month7: '68%', month8: '67%', month9: '66%', month10: '65%', month11: '65%', month12: '64%', customers: 254, totalRevenue: '$298,200' },
      { cohort: '2023-Q1', month0: '100%', month1: '92%', month2: '86%', month3: '82%', month4: '80%', month5: '79%', month6: '78%', month7: '77%', month8: '76%', month9: '75%', month10: '74%', month11: '74%', month12: '73%', customers: 231, totalRevenue: '$275,900' },
      { cohort: '2022-Q4', month0: '100%', month1: '89%', month2: '82%', month3: '77%', month4: '75%', month5: '73%', month6: '72%', month7: '71%', month8: '70%', month9: '69%', month10: '68%', month11: '67%', month12: '67%', customers: 215, totalRevenue: '$258,000' }
    ],
    users: [
      { cohort: '2024-Q1', month0: '100%', month1: '92%', month2: '85%', month3: '80%', month4: '78%', month5: '76%', month6: '75%', month7: '74%', month8: '73%', month9: '72%', month10: '71%', month11: '70%', month12: '70%', customers: 342, activeUsers: 239 },
      { cohort: '2023-Q4', month0: '100%', month1: '88%', month2: '80%', month3: '75%', month4: '72%', month5: '70%', month6: '68%', month7: '67%', month8: '66%', month9: '65%', month10: '64%', month11: '63%', month12: '63%', customers: 298, activeUsers: 188 },
      { cohort: '2023-Q3', month0: '100%', month1: '85%', month2: '76%', month3: '71%', month4: '68%', month5: '66%', month6: '64%', month7: '63%', month8: '62%', month9: '61%', month10: '60%', month11: '59%', month12: '59%', customers: 276, activeUsers: 163 },
      { cohort: '2023-Q2', month0: '100%', month1: '84%', month2: '74%', month3: '69%', month4: '66%', month5: '64%', month6: '62%', month7: '61%', month8: '60%', month9: '59%', month10: '58%', month11: '57%', month12: '57%', customers: 254, activeUsers: 145 },
      { cohort: '2023-Q1', month0: '100%', month1: '90%', month2: '82%', month3: '77%', month4: '74%', month5: '72%', month6: '70%', month7: '69%', month8: '68%', month9: '67%', month10: '66%', month11: '65%', month12: '65%', customers: 231, activeUsers: 150 },
      { cohort: '2022-Q4', month0: '100%', month1: '86%', month2: '77%', month3: '72%', month4: '69%', month5: '67%', month6: '65%', month7: '64%', month8: '63%', month9: '62%', month10: '61%', month11: '60%', month12: '60%', customers: 215, activeUsers: 129 }
    ],
    features: [
      { cohort: '2024-Q1', month0: '35%', month1: '48%', month2: '62%', month3: '71%', month4: '75%', month5: '78%', month6: '80%', month7: '81%', month8: '82%', month9: '83%', month10: '83%', month11: '84%', month12: '84%', customers: 342, powerUsers: 287 },
      { cohort: '2023-Q4', month0: '32%', month1: '45%', month2: '58%', month3: '67%', month4: '71%', month5: '74%', month6: '76%', month7: '77%', month8: '78%', month9: '79%', month10: '79%', month11: '80%', month12: '80%', customers: 298, powerUsers: 238 },
      { cohort: '2023-Q3', month0: '30%', month1: '42%', month2: '55%', month3: '64%', month4: '68%', month5: '71%', month6: '73%', month7: '74%', month8: '75%', month9: '76%', month10: '76%', month11: '77%', month12: '77%', customers: 276, powerUsers: 213 },
      { cohort: '2023-Q2', month0: '28%', month1: '40%', month2: '52%', month3: '61%', month4: '65%', month5: '68%', month6: '70%', month7: '71%', month8: '72%', month9: '73%', month10: '73%', month11: '74%', month12: '74%', customers: 254, powerUsers: 188 },
      { cohort: '2023-Q1', month0: '33%', month1: '46%', month2: '60%', month3: '69%', month4: '73%', month5: '76%', month6: '78%', month7: '79%', month8: '80%', month9: '81%', month10: '81%', month11: '82%', month12: '82%', customers: 231, powerUsers: 189 },
      { cohort: '2022-Q4', month0: '29%', month1: '41%', month2: '54%', month3: '63%', month4: '67%', month5: '70%', month6: '72%', month7: '73%', month8: '74%', month9: '75%', month10: '75%', month11: '76%', month12: '76%', customers: 215, powerUsers: 163 }
    ]
  }

  // Cohort analysis insights
  const cohortInsights = [
    {
      title: 'Q1 Cohort Superiority',
      description: 'Q1 cohorts consistently show 5-7% better retention than Q4 cohorts across all time periods.',
      recommendation: 'Analyze Q1 acquisition channels and onboarding processes for replication in other quarters.'
    },
    {
      title: 'Critical 90-Day Window',
      description: 'The steepest drop in retention occurs within the first 90 days (Month 0-3) across all cohorts.',
      recommendation: 'Focus customer success resources on the first 90 days to improve long-term retention.'
    },
    {
      title: 'Feature Adoption Correlation',
      description: 'Cohorts with >75% feature adoption by month 3 show 15% better revenue retention at month 12.',
      recommendation: 'Implement guided onboarding to accelerate feature adoption in the first 90 days.'
    },
    {
      title: 'Retention Stabilization',
      description: 'Retention rates tend to stabilize after month 6, with minimal decline through month 12.',
      recommendation: 'Customers who reach the 6-month mark are excellent candidates for expansion and upselling.'
    }
  ]

  // Helper function to get cell color based on value
  const getCellColor = (value: string | number) => {
    const numValue = parseFloat(String(value));
    if (numValue >= 90) return 'bg-green-100 text-green-800';
    if (numValue >= 80) return 'bg-green-50 text-green-700';
    if (numValue >= 70) return 'bg-yellow-50 text-yellow-700';
    if (numValue >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-50 text-red-700';
  }

  // Helper function to get metric title
  const getMetricTitle = (metric: string) => {
    switch(metric) {
      case 'revenue': return 'Revenue Retention';
      case 'users': return 'User Retention';
      case 'features': return 'Feature Adoption';
      default: return 'Revenue Retention';
    }
  }

  // Helper function to get metric description
  const getMetricDescription = (metric: string) => {
    switch(metric) {
      case 'revenue': 
        return 'Percentage of initial revenue retained from each cohort over time';
      case 'users': 
        return 'Percentage of initial users still active from each cohort over time';
      case 'features': 
        return 'Percentage of available features adopted by each cohort over time';
      default: 
        return 'Percentage of initial revenue retained from each cohort over time';
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600 mt-1">Understand why your metrics look the way they do</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="flex items-center space-x-2">
              <span>Export Analysis</span>
            </Button>
            <Button className="flex items-center space-x-2 bg-gray-900 hover:bg-gray-800">
              <span>Set Targets</span>
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex space-x-4">
          <select 
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
          >
            <option>Last 12 Months</option>
            <option>Last 6 Months</option>
            <option>Last 3 Months</option>
            <option>Year to Date</option>
          </select>
          <select 
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
          >
            <option>All Customers</option>
            <option>Enterprise</option>
            <option>Growth</option>
            <option>Starter</option>
          </select>
          <Button variant="outline" className="text-gray-700">
            Live Analysis
          </Button>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 border border-gray-200 rounded-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-normal text-gray-600">RpC</p>
                <p className="text-xl font-bold text-gray-900">$1,247</p>
                <p className="text-xs text-green-600 mt-1">↑ 12% vs last period</p>
              </div>
              <div className="h-6 w-6 text-gray-600">$</div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200 rounded-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Customer Lifetime</p>
                <p className="text-xl font-bold text-gray-900">18.3 mo</p>
                <p className="text-xs text-green-600 mt-1">↑ 8% vs last period</p>
              </div>
              <div className="h-6 w-6 text-gray-600">📅</div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200 rounded-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Expansion Rate</p>
                <p className="text-xl font-bold text-gray-900">118%</p>
                <p className="text-xs text-green-600 mt-1">↑ 3% vs last period</p>
              </div>
              <div className="h-6 w-6 text-gray-600">📈</div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200 rounded-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cohort Health</p>
                <p className="text-xl font-bold text-gray-900">94.2%</p>
                <p className="text-xs text-green-600 mt-1">↑ 2% vs last period</p>
              </div>
              <div className="h-6 w-6 text-gray-600">👥</div>
            </div>
          </Card>
        </div>

        {/* Key Insights */}
        <Card className="p-6 border border-gray-200 rounded-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
          <div className="space-y-6">
            {keyInsights.map((insight, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className={`w-1 h-24 ${
                    insight.impact === 'High Impact' ? 'bg-red-500' :
                    insight.impact === 'Medium Impact' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{insight.title}</h4>
                    <p className="text-gray-700 text-sm mt-1">{insight.description}</p>
                    <div className="bg-blue-50 border border-blue-200 rounded-sm p-3 mt-3">
                      <p className="text-blue-800 text-sm">
                        <span className="font-medium">Recommendation:</span> {insight.recommendation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Drill Down Analysis */}
        <Card className="p-6 rounded-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Drill Down Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {drillDownOptions.map((option, index) => (
              <div key={index} className="border border-gray-200 rounded-sm p-4">
                <h4 className="font-medium text-gray-900 mb-2">{option.label}</h4>
                <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedDrillDown(option.id)}
                  className={selectedDrillDown === option.id ? 'bg-gray-900 text-white' : ''}
                >
                  Analyze
                </Button>
              </div>
            ))}
          </div>

          {/* Drill Down Results */}
          {selectedDrillDown && drillDownData[selectedDrillDown] && (
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {drillDownData[selectedDrillDown].title}
                </h4>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedDrillDown(null)}
                >
                  Clear Analysis
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-gray-700 font-medium">Segment</th>
                      <th className="text-right py-3 text-gray-700 font-medium">MRR</th>
                      <th className="text-right py-3 text-gray-700 font-medium">Churn Rate</th>
                      <th className="text-right py-3 text-gray-700 font-medium">Expansion Rate</th>
                      <th className="text-right py-3 text-gray-700 font-medium">Customers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drillDownData[selectedDrillDown].segments.map((segment: {
                      name: string;
                      mrr: string;
                      churn: string;
                      expansion: string;
                      customers: number;
                    }, index: number) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 font-medium text-gray-900">{segment.name}</td>
                        <td className="py-3 text-right text-gray-900">{segment.mrr}</td>
                        <td className="py-3 text-right">
                          <span className={`${
                            parseFloat(segment.churn) < 3 ? 'text-green-600' : 
                            parseFloat(segment.churn) < 4 ? 'text-yellow-600' : 
                            'text-red-600'
                          }`}>
                            {segment.churn}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <span className={`${
                            parseFloat(segment.expansion) > 120 ? 'text-green-600' : 
                            parseFloat(segment.expansion) > 100 ? 'text-yellow-600' : 
                            'text-red-600'
                          }`}>
                            {segment.expansion}
                          </span>
                        </td>
                        <td className="py-3 text-right text-gray-900">{segment.customers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-sm">
                <p className="text-blue-800 text-sm">
                  <span className="font-medium">Insight:</span> This segmentation shows performance variations across different {selectedDrillDown.replace('-', ' ')} categories. Use this data to identify high-performing segments and optimization opportunities.
                </p>
              </div>
            </div>
          )}
        </Card>

        {/* Cohort Analysis */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Cohort Analysis</h3>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowFullCohortAnalysis(true)}
            >
              View Full Analysis
            </Button>
          </div>
          <p className="text-gray-600 text-sm mb-4">Revenue retention by customer cohort</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-gray-700">Cohort</th>
                  <th className="text-center py-2 text-gray-700">Month 0</th>
                  <th className="text-center py-2 text-gray-700">Month 1</th>
                  <th className="text-center py-2 text-gray-700">Month 2</th>
                  <th className="text-center py-2 text-gray-700">Month 3</th>
                  <th className="text-center py-2 text-gray-700">Month 6</th>
                  <th className="text-center py-2 text-gray-700">Month 12</th>
                </tr>
              </thead>
              <tbody>
                {cohortData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 font-medium text-gray-900">{row.cohort}</td>
                    <td className="text-center py-2 bg-green-50 text-green-700">{row.month0}</td>
                    <td className="text-center py-2 bg-green-50 text-green-700">{row.month1}</td>
                    <td className="text-center py-2 bg-green-50 text-green-700">{row.month2}</td>
                    <td className="text-center py-2 bg-green-50 text-green-700">{row.month3}</td>
                    <td className="text-center py-2 bg-green-50 text-green-700">{row.month6}</td>
                    <td className="text-center py-2 bg-green-50 text-green-700">{row.month12}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Full Cohort Analysis Modal */}
        {showFullCohortAnalysis && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-md w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Comprehensive Cohort Analysis</h2>
                  <p className="text-gray-600 mt-1">Detailed analysis of customer cohorts over time</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowFullCohortAnalysis(false)}
                  className="h-8 w-8 p-0 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto flex-grow">
                {/* Metric Selection */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-4">
                    <Button 
                      variant={selectedCohortMetric === 'revenue' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedCohortMetric('revenue')}
                      className={selectedCohortMetric === 'revenue' ? 'bg-gray-900' : ''}
                    >
                      Revenue Retention
                    </Button>
                    <Button 
                      variant={selectedCohortMetric === 'users' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedCohortMetric('users')}
                      className={selectedCohortMetric === 'users' ? 'bg-gray-900' : ''}
                    >
                      User Retention
                    </Button>
                    <Button 
                      variant={selectedCohortMetric === 'features' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedCohortMetric('features')}
                      className={selectedCohortMetric === 'features' ? 'bg-gray-900' : ''}
                    >
                      Feature Adoption
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant={selectedCohortView === 'table' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedCohortView('table')}
                      className={`p-2 ${selectedCohortView === 'table' ? 'bg-gray-900' : ''}`}
                    >
                      <BarChart className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={selectedCohortView === 'heatmap' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedCohortView('heatmap')}
                      className={`p-2 ${selectedCohortView === 'heatmap' ? 'bg-gray-900' : ''}`}
                    >
                      <PieChart className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={selectedCohortView === 'chart' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedCohortView('chart')}
                      className={`p-2 ${selectedCohortView === 'chart' ? 'bg-gray-900' : ''}`}
                    >
                      <LineChart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Metric Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">{getMetricTitle(selectedCohortMetric)}</h3>
                  <p className="text-gray-600 text-sm">{getMetricDescription(selectedCohortMetric)}</p>
                </div>

                {/* Cohort Data Table */}
                {selectedCohortView === 'table' && (
                  <div className="overflow-x-auto border border-gray-200 rounded-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left py-3 px-4 text-gray-700 font-medium">Cohort</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M0</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M1</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M2</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M3</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M4</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M5</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M6</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M7</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M8</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M9</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M10</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M11</th>
                          <th className="text-center py-3 px-2 text-gray-700 font-medium">M12</th>
                          <th className="text-right py-3 px-4 text-gray-700 font-medium">Customers</th>
                        </tr>
                      </thead>
                      <tbody>
                        {extendedCohortData[selectedCohortMetric].map((row: {
                          cohort: string;
                          month0: string;
                          month1: string;
                          month2: string;
                          month3: string;
                          month4: string;
                          month5: string;
                          month6: string;
                          month7: string;
                          month8: string;
                          month9: string;
                          month10: string;
                          month11: string;
                          month12: string;
                          customers: number;
                          totalRevenue?: string;
                          activeUsers?: number;
                          powerUsers?: number;
                        }, index: number) => (
                          <tr key={index} className="border-t border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-900">{row.cohort}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month0)}`}>{row.month0}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month1)}`}>{row.month1}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month2)}`}>{row.month2}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month3)}`}>{row.month3}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month4)}`}>{row.month4}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month5)}`}>{row.month5}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month6)}`}>{row.month6}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month7)}`}>{row.month7}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month8)}`}>{row.month8}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month9)}`}>{row.month9}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month10)}`}>{row.month10}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month11)}`}>{row.month11}</td>
                            <td className={`text-center py-3 px-2 ${getCellColor(row.month12)}`}>{row.month12}</td>
                            <td className="text-right py-3 px-4 text-gray-900">{row.customers}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Heatmap View */}
                {selectedCohortView === 'heatmap' && (
                  <div className="border border-gray-200 rounded-sm p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Cohort Heatmap</h3>
                      <p className="text-gray-600 text-sm">Visual representation of cohort performance over time</p>
                    </div>
                    <div className="grid grid-cols-14 gap-1">
                      <div className="font-medium text-gray-700 p-2">Cohort</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M0</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M1</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M2</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M3</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M4</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M5</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M6</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M7</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M8</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M9</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M10</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M11</div>
                      <div className="font-medium text-gray-700 p-2 text-center">M12</div>
                      
                      {extendedCohortData[selectedCohortMetric].map((row: {
                        cohort: string;
                        month0: string;
                        month1: string;
                        month2: string;
                        month3: string;
                        month4: string;
                        month5: string;
                        month6: string;
                        month7: string;
                        month8: string;
                        month9: string;
                        month10: string;
                        month11: string;
                        month12: string;
                        customers: number;
                        totalRevenue?: string;
                        activeUsers?: number;
                        powerUsers?: number;
                      }, rowIndex: number) => (
                        <>
                          <div key={`cohort-${rowIndex}`} className="font-medium text-gray-900 p-2">{row.cohort}</div>
                          <div key={`m0-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month0)}`}>{row.month0}</div>
                          <div key={`m1-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month1)}`}>{row.month1}</div>
                          <div key={`m2-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month2)}`}>{row.month2}</div>
                          <div key={`m3-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month3)}`}>{row.month3}</div>
                          <div key={`m4-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month4)}`}>{row.month4}</div>
                          <div key={`m5-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month5)}`}>{row.month5}</div>
                          <div key={`m6-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month6)}`}>{row.month6}</div>
                          <div key={`m7-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month7)}`}>{row.month7}</div>
                          <div key={`m8-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month8)}`}>{row.month8}</div>
                          <div key={`m9-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month9)}`}>{row.month9}</div>
                          <div key={`m10-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month10)}`}>{row.month10}</div>
                          <div key={`m11-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month11)}`}>{row.month11}</div>
                          <div key={`m12-${rowIndex}`} className={`p-2 text-center ${getCellColor(row.month12)}`}>{row.month12}</div>
                        </>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chart View */}
                {selectedCohortView === 'chart' && (
                  <div className="border border-gray-200 rounded-sm p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Cohort Retention Curves</h3>
                      <p className="text-gray-600 text-sm">Visualizing retention trends over time</p>
                    </div>
                    <div className="h-80 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="mb-4">
                          <LineChart className="h-12 w-12 mx-auto text-gray-400" />
                        </div>
                        <p>Interactive chart would be displayed here</p>
                        <p className="text-sm mt-2">Showing retention curves for all cohorts</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cohort Insights */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Cohort Insights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cohortInsights.map((insight, index) => (
                      <div key={index} className="border border-gray-200 rounded-sm p-4">
                        <h4 className="font-medium text-gray-900">{insight.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{insight.description}</p>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-gray-900 text-sm">
                            <span className="font-medium">Recommendation:</span> {insight.recommendation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Cohort Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-sm p-4">
                      <h4 className="font-medium text-gray-900">Average Lifetime Value</h4>
                      <div className="mt-2 flex items-end space-x-2">
                        <p className="text-2xl font-bold text-gray-900">$2,840</p>
                        <p className="text-sm text-green-600 pb-1">↑ 15.3% vs last period</p>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">Average revenue generated per customer over their lifetime</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-sm p-4">
                      <h4 className="font-medium text-gray-900">Payback Period</h4>
                      <div className="mt-2 flex items-end space-x-2">
                        <p className="text-2xl font-bold text-gray-900">4.2 months</p>
                        <p className="text-sm text-green-600 pb-1">↑ 8.7% vs last period</p>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">Average time to recover customer acquisition cost</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-sm p-4">
                      <h4 className="font-medium text-gray-900">Feature Adoption Rate</h4>
                      <div className="mt-2 flex items-end space-x-2">
                        <p className="text-2xl font-bold text-gray-900">76.4%</p>
                        <p className="text-sm text-green-600 pb-1">↑ 5.2% vs last period</p>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">Percentage of available features used by the average customer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-between items-center p-6 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  onClick={() => setShowFullCohortAnalysis(false)}
                >
                  Close
                </Button>
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Export Data</span>
                  </Button>
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                    Generate Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

