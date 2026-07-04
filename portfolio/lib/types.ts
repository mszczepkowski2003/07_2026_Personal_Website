export interface ProjectLink {
  label: string;
  url: string;
}

export interface ApproachBlock {
  heading: string;
  points: string[];
}

export interface ProjectStat {
  /** Numeric target — counts up from 0 on scroll into view. */
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  /** Decimal places to display (e.g. 2 for an AUC of 0.94). */
  decimals?: number;
}

export interface ProjectDemo {
  status: "coming-soon" | "live";
  /** How the demo will be embedded once available. */
  kind: "iframe" | "component" | "none";
  /** Future API / hosted demo URL — consumed when status flips to "live". */
  endpoint?: string;
  /** Visible note shown in the styled placeholder slot. */
  note: string;
}

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  featured: boolean;
  /** Clearly-invented placeholder entry vs. real work. */
  invented?: boolean;
  mainLanguage?: "English" | "Polish";
  techStack: string[];
  /** Public path to a hero image/screenshot; optional placeholder. */
  heroImage?: string;

  overview: string;
  /** Headline metrics — rendered as animated counters. Optional. */
  stats?: ProjectStat[];
  approach: ApproachBlock[];
  results: string[];
  links: ProjectLink[];
  demo: ProjectDemo;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  invented?: boolean;
}

export interface EducationAward {
  label: string;
  meta: string;
}

export interface EducationEntry {
  title: string;
  institution: string;
  period: string;
  detail?: string;
  highlight?: boolean;
  /** A distinction tied to this entry — e.g. a thesis award under a degree. */
  award?: EducationAward;
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}
