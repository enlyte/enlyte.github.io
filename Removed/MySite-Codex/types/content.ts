export type TimelineEntry = {
  period: string;
  role: string;
  company: string;
  summary: string;
  learnings: string;
};

export type CapabilityCategory = {
  name: string;
  description: string;
  tools: string[];
  example: string;
  tone?: "ai" | "infra" | "lab";
};

export type ProjectSummary = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  stack: string[];
  tags: string[];
  tone?: "ai" | "infra" | "lab";
  highlights: string[];
};

export type PipelineStage = {
  name: string;
  description: string;
  insight: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  artifacts: string[];
};

export type Experiment = {
  title: string;
  description: string;
  status: "Shipped" | "In Progress" | "Archived";
  tags: string[];
};

export type PersonalTile = {
  title: string;
  description: string;
  detail: string;
};
