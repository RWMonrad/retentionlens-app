import { AccessLevel } from '../types/research';

export const accessLevels: AccessLevel[] = [
  {
    level: "Public Research",
    availability: "Open access",
    researchScope: "Quarterly market reports, industry benchmarks",
    timeline: "Standard publication schedule"
  },
  {
    level: "Registered User Research",
    availability: "Platform registration required",
    researchScope: "Extended research archives, detailed methodologies",
    timeline: "Immediate access to historical reports"
  },
  {
    level: "Professional Research",
    availability: "Platform subscription",
    researchScope: "Custom research, advanced analytics, direct analyst consultation",
    timeline: "Priority access and tailored analysis"
  }
];

export const distributionMethodology = [
  "Research publications are distributed through multiple channels to ensure broad industry accessibility while maintaining appropriate access controls for more detailed analytical content. Public research focuses on market-level insights and industry trends, while registered user content includes implementation-specific guidance and detailed methodological frameworks.",
  "Professional-level research access includes custom analysis capabilities, direct consultation with our research team, and priority access to emerging research findings before general publication."
];

