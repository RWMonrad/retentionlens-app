// Centralized Mock Data Service for GlassBox Metrics
// This service provides realistic SaaS metrics data for demo purposes
// Data can be controlled via Test Suite scenarios
// Now integrated with AI services for dynamic analysis

import { 
  predictCustomerChurn, 
  generateMultiVariateForecast, 
  generateCustomerHealthScore, 
  generateAIInsights,
  type ChurnPrediction,
  type RevenueForcast,
  type CustomerHealthScore,
  type AIInsight as AIInsightType
} from './ai-services'

export interface SaaSMetrics {
  // Core Business Metrics
  mrr: number
  mrr_growth: number
  arr: number
  active_customers: number
  customer_growth: number
  churn_rate: number
  health_score: number
  ltv: number
  cac: number
  nrr: number
  
  // Advanced Metrics
  expansion_revenue: number
  contraction_revenue: number
  new_mrr: number
  churned_mrr: number
  
  // AI Predictions
  churn_prediction_accuracy: number
  revenue_forecast_accuracy: number
  predicted_churn_next_30_days: number
  predicted_mrr_next_month: number
}

export interface BenchmarkData {
  metric: string
  userValue: number
  median: number
  topQuartile: number
  bottomQuartile: number
  percentile: number
  unit: string
}

export interface AIInsight {
  id: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  recommendation: string
  confidence: number
  impact: 'positive' | 'negative' | 'neutral'
  category: 'churn' | 'growth' | 'revenue' | 'customer'
}

export interface CustomerActivity {
  id: number
  action: string
  customer: string
  time: string
  type: 'signup' | 'payment' | 'churn' | 'upgrade' | 'downgrade'
  value?: number
}

export interface AdminMetrics {
  total_users: number
  active_sessions: number
  system_alerts: number
  new_users_this_week: number
  peak_sessions_today: number
  system_status: 'online' | 'degraded' | 'offline'
}

// Test Suite Scenarios
export type TestScenario = 
  | 'healthy_growth'
  | 'churn_spike' 
  | 'revenue_decline'
  | 'expansion_success'
  | 'early_stage'
  | 'enterprise_scale'

class MockDataService {
  private currentScenario: TestScenario = 'healthy_growth'
  
  setScenario(scenario: TestScenario) {
    this.currentScenario = scenario
  }
  
  getCurrentScenario(): TestScenario {
    return this.currentScenario
  }
  
  getSaaSMetrics(): SaaSMetrics {
    const scenarios: Record<TestScenario, SaaSMetrics> = {
      healthy_growth: {
        mrr: 47250,
        mrr_growth: 12.5,
        arr: 567000,
        active_customers: 1247,
        customer_growth: 8.2,
        churn_rate: 3.2,
        health_score: 94.8,
        ltv: 2840,
        cac: 180,
        nrr: 112,
        expansion_revenue: 8500,
        contraction_revenue: 1200,
        new_mrr: 5800,
        churned_mrr: 1500,
        churn_prediction_accuracy: 92.3,
        revenue_forecast_accuracy: 89.7,
        predicted_churn_next_30_days: 23,
        predicted_mrr_next_month: 53100
      },
      churn_spike: {
        mrr: 42100,
        mrr_growth: -8.3,
        arr: 505200,
        active_customers: 1189,
        customer_growth: -4.6,
        churn_rate: 8.7,
        health_score: 67.2,
        ltv: 2240,
        cac: 195,
        nrr: 89,
        expansion_revenue: 3200,
        contraction_revenue: 4800,
        new_mrr: 2100,
        churned_mrr: 5600,
        churn_prediction_accuracy: 94.1,
        revenue_forecast_accuracy: 91.2,
        predicted_churn_next_30_days: 67,
        predicted_mrr_next_month: 39800
      },
      revenue_decline: {
        mrr: 38900,
        mrr_growth: -15.2,
        arr: 466800,
        active_customers: 1098,
        customer_growth: -12.1,
        churn_rate: 11.4,
        health_score: 58.3,
        ltv: 1980,
        cac: 220,
        nrr: 78,
        expansion_revenue: 1800,
        contraction_revenue: 6200,
        new_mrr: 1200,
        churned_mrr: 7800,
        churn_prediction_accuracy: 95.7,
        revenue_forecast_accuracy: 88.9,
        predicted_churn_next_30_days: 89,
        predicted_mrr_next_month: 35200
      },
      expansion_success: {
        mrr: 68400,
        mrr_growth: 28.7,
        arr: 820800,
        active_customers: 1456,
        customer_growth: 15.3,
        churn_rate: 2.1,
        health_score: 97.6,
        ltv: 3680,
        cac: 165,
        nrr: 134,
        expansion_revenue: 15600,
        contraction_revenue: 800,
        new_mrr: 8900,
        churned_mrr: 900,
        churn_prediction_accuracy: 91.8,
        revenue_forecast_accuracy: 93.4,
        predicted_churn_next_30_days: 18,
        predicted_mrr_next_month: 74200
      },
      early_stage: {
        mrr: 8900,
        mrr_growth: 45.2,
        arr: 106800,
        active_customers: 234,
        customer_growth: 32.1,
        churn_rate: 6.8,
        health_score: 82.4,
        ltv: 1560,
        cac: 145,
        nrr: 98,
        expansion_revenue: 1200,
        contraction_revenue: 400,
        new_mrr: 2800,
        churned_mrr: 600,
        churn_prediction_accuracy: 87.2,
        revenue_forecast_accuracy: 84.6,
        predicted_churn_next_30_days: 12,
        predicted_mrr_next_month: 11800
      },
      enterprise_scale: {
        mrr: 245000,
        mrr_growth: 18.9,
        arr: 2940000,
        active_customers: 3420,
        customer_growth: 11.7,
        churn_rate: 1.8,
        health_score: 96.2,
        ltv: 4890,
        cac: 280,
        nrr: 128,
        expansion_revenue: 42000,
        contraction_revenue: 3200,
        new_mrr: 28000,
        churned_mrr: 4400,
        churn_prediction_accuracy: 94.6,
        revenue_forecast_accuracy: 95.1,
        predicted_churn_next_30_days: 45,
        predicted_mrr_next_month: 268000
      }
    }
    
    return scenarios[this.currentScenario]
  }
  
  getBenchmarkData(): BenchmarkData[] {
    const metrics = this.getSaaSMetrics()
    
    return [
      {
        metric: 'Monthly Recurring Revenue (MRR)',
        userValue: metrics.mrr,
        median: 38000,
        topQuartile: 65000,
        bottomQuartile: 22000,
        percentile: this.calculatePercentile(metrics.mrr, 38000),
        unit: '$'
      },
      {
        metric: 'Customer Churn Rate',
        userValue: metrics.churn_rate,
        median: 4.1,
        topQuartile: 2.8,
        bottomQuartile: 6.2,
        percentile: this.calculatePercentile(metrics.churn_rate, 4.1, true), // Lower is better
        unit: '%'
      },
      {
        metric: 'Customer Lifetime Value (LTV)',
        userValue: metrics.ltv,
        median: 2400,
        topQuartile: 3800,
        bottomQuartile: 1600,
        percentile: this.calculatePercentile(metrics.ltv, 2400),
        unit: '$'
      },
      {
        metric: 'LTV:CAC Ratio',
        userValue: Math.round((metrics.ltv / metrics.cac) * 10) / 10,
        median: 3.1,
        topQuartile: 5.8,
        bottomQuartile: 2.1,
        percentile: this.calculatePercentile(metrics.ltv / metrics.cac, 3.1),
        unit: ':1'
      },
      {
        metric: 'Net Revenue Retention',
        userValue: metrics.nrr,
        median: 102,
        topQuartile: 125,
        bottomQuartile: 85,
        percentile: this.calculatePercentile(metrics.nrr, 102),
        unit: '%'
      }
    ]
  }
  
  getAIInsights(): AIInsight[] {
    const metrics = this.getSaaSMetrics()
    const insights: AIInsight[] = []
    
    // Generate insights based on current metrics
    if (metrics.mrr_growth > 10) {
      insights.push({
        id: 'mrr-growth',
        title: 'Strong MRR Growth',
        description: `Monthly recurring revenue increased by ${metrics.mrr_growth}% this month`,
        priority: 'high',
        recommendation: 'Continue current acquisition strategy',
        confidence: 94,
        impact: 'positive',
        category: 'revenue'
      })
    }
    
    if (metrics.churn_rate < 4) {
      insights.push({
        id: 'low-churn',
        title: 'Excellent Churn Performance',
        description: `Churn rate of ${metrics.churn_rate}% is below industry median`,
        priority: 'medium',
        recommendation: 'Focus on customer success initiatives',
        confidence: 89,
        impact: 'positive',
        category: 'churn'
      })
    }
    
    if (metrics.churn_rate > 7) {
      insights.push({
        id: 'high-churn',
        title: 'Churn Rate Alert',
        description: `Churn rate of ${metrics.churn_rate}% requires immediate attention`,
        priority: 'high',
        recommendation: 'Implement retention campaigns for at-risk customers',
        confidence: 96,
        impact: 'negative',
        category: 'churn'
      })
    }
    
    if (metrics.nrr > 110) {
      insights.push({
        id: 'expansion-success',
        title: 'Strong Expansion Revenue',
        description: `Net Revenue Retention of ${metrics.nrr}% indicates healthy expansion`,
        priority: 'medium',
        recommendation: 'Scale expansion strategies to similar customer segments',
        confidence: 91,
        impact: 'positive',
        category: 'growth'
      })
    }
    
    return insights
  }
  
  getCustomerActivity(): CustomerActivity[] {
    const activities: CustomerActivity[] = [
      { id: 1, action: 'New customer signup', customer: 'TechCorp Solutions', time: '2 hours ago', type: 'signup', value: 299 },
      { id: 2, action: 'Payment received', customer: 'DataFlow Inc', time: '4 hours ago', type: 'payment', value: 599 },
      { id: 3, action: 'Plan upgrade', customer: 'CloudSync Ltd', time: '6 hours ago', type: 'upgrade', value: 899 },
      { id: 4, action: 'New customer signup', customer: 'AI Dynamics', time: '8 hours ago', type: 'signup', value: 199 },
      { id: 5, action: 'Churn alert', customer: 'Legacy Systems Co', time: '12 hours ago', type: 'churn', value: -399 }
    ]
    
    // Modify activities based on scenario
    if (this.currentScenario === 'churn_spike') {
      activities.unshift(
        { id: 6, action: 'Customer churned', customer: 'Enterprise Corp', time: '1 hour ago', type: 'churn', value: -1299 },
        { id: 7, action: 'Downgrade alert', customer: 'Scale Solutions', time: '3 hours ago', type: 'downgrade', value: -500 }
      )
    }
    
    return activities
  }
  
  getAdminMetrics(): AdminMetrics {
    const metrics = this.getSaaSMetrics()
    
    return {
      total_users: metrics.active_customers,
      active_sessions: Math.round(metrics.active_customers * 0.27), // ~27% active
      system_alerts: this.currentScenario === 'churn_spike' ? 8 : 3,
      new_users_this_week: Math.round(metrics.customer_growth * 10),
      peak_sessions_today: Math.round(metrics.active_customers * 0.36),
      system_status: this.currentScenario === 'revenue_decline' ? 'degraded' : 'online'
    }
  }
  
  private calculatePercentile(value: number, median: number, lowerIsBetter = false): number {
    const ratio = value / median
    let percentile: number
    
    if (lowerIsBetter) {
      percentile = ratio < 1 ? 50 + (1 - ratio) * 40 : 50 - (ratio - 1) * 30
    } else {
      percentile = ratio > 1 ? 50 + (ratio - 1) * 30 : 50 - (1 - ratio) * 40
    }
    
    return Math.max(5, Math.min(95, Math.round(percentile)))
  }

  // AI Integration Methods
  
  /**
   * Get AI-powered churn prediction for current scenario
   */
  async getAIChurnPrediction(): Promise<ChurnPrediction> {
    const metrics = this.getSaaSMetrics()
    
    const customerData = {
      id: `scenario_${this.currentScenario}`,
      mrr: metrics.mrr / metrics.active_customers, // Average per customer
      usageTrend: this.getUsageTrend(),
      supportTickets: this.getSupportTicketCount(),
      lastLogin: this.getLastLoginStatus(),
      contractLength: '12 months',
      paymentHistory: 'on-time'
    }
    
    return await predictCustomerChurn(customerData)
  }
  
  /**
   * Get AI-powered revenue forecast for current scenario
   */
  async getAIRevenueForecast(): Promise<RevenueForcast[]> {
    const metrics = this.getSaaSMetrics()
    
    const historicalData = {
      currentMRR: metrics.mrr,
      growthRate: metrics.mrr_growth,
      churnRate: metrics.churn_rate,
      customers: metrics.active_customers,
      marketConditions: this.getMarketConditions()
    }
    
    return await generateMultiVariateForecast(historicalData)
  }
  
  /**
   * Get AI-powered customer health score for current scenario
   */
  async getAICustomerHealthScore(): Promise<CustomerHealthScore> {
    const metrics = this.getSaaSMetrics()
    
    const customerData = {
      id: `scenario_${this.currentScenario}`,
      usageFrequency: this.getUsageFrequency(),
      featureAdoption: this.getFeatureAdoption(),
      supportInteractions: this.getSupportTicketCount(),
      paymentStatus: 'current',
      engagement: metrics.health_score
    }
    
    return await generateCustomerHealthScore(customerData)
  }
  
  /**
   * Get AI-powered strategic insights for current scenario
   */
  async getAIStrategicInsights(): Promise<AIInsightType[]> {
    const metrics = this.getSaaSMetrics()
    
    const businessData = {
      mrr: metrics.mrr,
      growthRate: metrics.mrr_growth,
      churnRate: metrics.churn_rate,
      customers: metrics.active_customers,
      marketPosition: this.getMarketPosition()
    }
    
    return await generateAIInsights(businessData)
  }
  
  // Helper methods for AI context
  private getUsageTrend(): string {
    switch (this.currentScenario) {
      case 'churn_spike': return 'declining'
      case 'revenue_decline': return 'declining'
      case 'expansion_success': return 'increasing'
      case 'enterprise_scale': return 'stable'
      case 'early_stage': return 'increasing'
      default: return 'stable'
    }
  }
  
  private getSupportTicketCount(): number {
    switch (this.currentScenario) {
      case 'churn_spike': return 5
      case 'revenue_decline': return 4
      case 'expansion_success': return 1
      case 'enterprise_scale': return 2
      case 'early_stage': return 3
      default: return 2
    }
  }
  
  private getLastLoginStatus(): string {
    switch (this.currentScenario) {
      case 'churn_spike': return '10 days ago'
      case 'revenue_decline': return '5 days ago'
      case 'expansion_success': return 'today'
      case 'enterprise_scale': return '1 day ago'
      case 'early_stage': return '2 days ago'
      default: return '1 day ago'
    }
  }
  
  private getMarketConditions(): string {
    switch (this.currentScenario) {
      case 'churn_spike': return 'challenging'
      case 'revenue_decline': return 'declining'
      case 'expansion_success': return 'favorable'
      case 'enterprise_scale': return 'stable'
      case 'early_stage': return 'growing'
      default: return 'stable'
    }
  }
  
  private getUsageFrequency(): string {
    switch (this.currentScenario) {
      case 'churn_spike': return 'weekly'
      case 'revenue_decline': return 'monthly'
      case 'expansion_success': return 'daily'
      case 'enterprise_scale': return 'daily'
      case 'early_stage': return 'daily'
      default: return 'daily'
    }
  }
  
  private getFeatureAdoption(): string {
    switch (this.currentScenario) {
      case 'churn_spike': return '30%'
      case 'revenue_decline': return '45%'
      case 'expansion_success': return '85%'
      case 'enterprise_scale': return '90%'
      case 'early_stage': return '60%'
      default: return '60%'
    }
  }
  
  private getMarketPosition(): string {
    switch (this.currentScenario) {
      case 'churn_spike': return 'struggling'
      case 'revenue_decline': return 'declining'
      case 'expansion_success': return 'growing'
      case 'enterprise_scale': return 'established'
      case 'early_stage': return 'emerging'
      default: return 'growing'
    }
  }
}

// Singleton instance
export const mockDataService = new MockDataService()

// Export scenario types for Test Suite integration
// TestScenario is already exported above

