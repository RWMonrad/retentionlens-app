import { ResearchPublication, ResearchDescription } from '../types/research';

export const researchPublications: ResearchPublication[] = [
  {
    publication: "The State of SaaS Analytics: Q3 2025",
    releaseDate: "October 15, 2025",
    pages: 31,
    focusArea: "Industry Benchmarking",
    keyFindings: "Customer analytics adoption increased 34% across mid-market segments. Behavioral analytics implementation correlated with 18% average churn reduction."
  },
  {
    publication: "GlassBoxing Methodology Standards",
    releaseDate: "July 12, 2025",
    pages: 24,
    focusArea: "Methodology Framework",
    keyFindings: "Comprehensive analysis establishing benchmarking standards for customer journey analytics across 15,000+ SaaS implementations."
  },
  {
    publication: "Customer Intelligence ROI Analysis",
    releaseDate: "April 8, 2025",
    pages: 45,
    focusArea: "Performance Metrics",
    keyFindings: "Annual review quantifying business impact of customer intelligence platforms, with focus on retention and expansion metrics."
  },
  {
    publication: "Platform Consolidation Trends",
    releaseDate: "January 15, 2025",
    pages: 28,
    focusArea: "Technology Adoption",
    keyFindings: "Analysis of enterprise preference shifts toward integrated analytics platforms over point solution architectures."
  }
];

export const researchDescriptions: ResearchDescription[] = [
  {
    id: "saas-analytics-q3-2025",
    title: "The State of SaaS Analytics: Q3 2025 Market Report",
    content: [
      "This quarterly analysis examines customer analytics adoption patterns across mid-market and enterprise SaaS companies, with particular focus on behavioral analytics implementation and its correlation with customer retention metrics. The report includes comprehensive benchmarking data from companies ranging from $1M to $100M+ ARR, segmented by industry vertical and growth stage.",
      "Key research findings include the identification of specific implementation patterns that correlate with improved customer lifetime value, the relationship between real-time monitoring capabilities and customer success team efficiency, and emerging trends in platform consolidation among Series B and later-stage companies."
    ]
  },
  {
    id: "glassboxing-methodology",
    title: "GlassBoxing Methodology: Industry Benchmarking Standards",
    content: [
      "This foundational research establishes standardized methodologies for what we define as \"GlassBoxing\" - comprehensive customer behavior visibility and analytics implementation. The report provides detailed frameworks for measuring analytics maturity, implementation effectiveness, and business impact across various SaaS business models.",
      "The methodology section includes specific metrics definitions, data collection standards, and analytical frameworks that enable consistent benchmarking across different platform implementations and business contexts."
    ]
  }
];

