import { MethodologySection, DataSource } from '../types/research';

export const methodologyData: MethodologySection = {
  methodologyText: [
    "Our research methodology is grounded in rigorous data science principles and enterprise-grade privacy standards. All analysis is conducted on anonymized, aggregated datasets collected from production SaaS environments, ensuring both statistical validity and complete privacy protection for participating organizations.",
    "Data collection encompasses customer behavior patterns, journey analytics, platform utilization metrics, and business outcome measurements across diverse industry verticals and company scales. Our analytical framework applies advanced statistical methods, machine learning algorithms, and longitudinal analysis techniques to identify meaningful patterns and predictive indicators."
  ],
  dataSources: [
    {
      category: "Customer Journey Data",
      collectionMethod: "Automated platform integration",
      sampleSize: "50,000+ companies",
      validationProcess: "Cross-platform validation, statistical significance testing"
    },
    {
      category: "Behavioral Analytics",
      collectionMethod: "Real-time event tracking",
      sampleSize: "15M+ user sessions",
      validationProcess: "Anomaly detection, pattern consistency verification"
    },
    {
      category: "Business Metrics",
      collectionMethod: "CRM and billing system integration",
      sampleSize: "8,000+ SaaS companies",
      validationProcess: "Financial reporting validation, growth correlation analysis"
    },
    {
      category: "Platform Usage",
      collectionMethod: "Feature adoption tracking",
      sampleSize: "25,000+ implementations",
      validationProcess: "Usage pattern analysis, effectiveness measurement"
    }
  ],
  qualityFramework: [
    "Research quality is maintained through multi-layered validation processes including statistical significance testing, cross-platform data verification, and longitudinal consistency analysis.",
    "All findings undergo peer review and are validated against known industry benchmarks before publication."
  ]
};

