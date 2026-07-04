import type { Localized } from "@/lib/i18n/config";

export interface ProjectLink {
  /** Localized label; the URL itself is language-agnostic. */
  label: Localized;
  url: string;
}

export interface ApproachBlock {
  heading: Localized;
  points: Localized[];
}

export interface ProjectStat {
  /** Numeric target — counts up from 0 on scroll into view. Not localized. */
  value: number;
  label: Localized;
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
  note: Localized;
}

export interface Project {
  /** Stable identifier shared across languages — drives the route. */
  slug: string;
  title: Localized;
  oneLiner: Localized;
  featured: boolean;
  /** Clearly-invented placeholder entry vs. real work. */
  invented?: boolean;
  /** The language the project/report itself is written in. */
  mainLanguage?: "English" | "Polish";
  techStack: string[];
  /** Public path to a hero image/screenshot; optional placeholder. */
  heroImage?: string;

  overview: Localized;
  /** Headline metrics — rendered as animated counters. Optional. */
  stats?: ProjectStat[];
  approach: ApproachBlock[];
  results: Localized[];
  links: ProjectLink[];
  demo: ProjectDemo;
}

export interface ExperienceEntry {
  role: Localized;
  company: Localized;
  period: Localized;
  description: Localized;
  invented?: boolean;
}

export interface EducationAward {
  label: Localized;
  meta: Localized;
}

export interface EducationEntry {
  title: Localized;
  institution: Localized;
  /** Year ranges read the same in both languages, so this stays plain. */
  period: string;
  detail?: Localized;
  highlight?: boolean;
  /** A distinction tied to this entry — e.g. a thesis award under a degree. */
  award?: EducationAward;
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}
