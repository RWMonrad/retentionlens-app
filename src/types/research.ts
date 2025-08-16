// Research Data Types for Market Insights Page

export interface ResearchPublication {
  publication: string;
  releaseDate: string;
  pages: number;
  focusArea: string;
  keyFindings: string;
}

export interface ResearchDescription {
  id: string;
  title: string;
  content: string[];
}

export interface DataSource {
  category: string;
  collectionMethod: string;
  sampleSize: string;
  validationProcess: string;
}

export interface BenchmarkCategory {
  category: string;
  measurementFramework: string;
  industryBaseline: string;
  topQuartilePerformance: string;
}

export interface ResearchCalendarItem {
  quarter: string;
  primaryFocus: string;
  expectedPublication: string;
  scope: string;
}

export interface AccessLevel {
  level: string;
  availability: string;
  researchScope: string;
  timeline: string;
}

export interface PlatformCapability {
  category: string;
  researchApplication: string;
  platformImplementation: string;
}

export interface ProfessionalService {
  category: string;
  scope: string;
  deliveryMethod: string;
  typicalEngagement: string;
}

export interface MethodologySection {
  methodologyText: string[];
  dataSources: DataSource[];
  qualityFramework: string[];
}

export interface IntroSection {
  heading: string;
  introText: string[];
  contextualProse: string[];
}

