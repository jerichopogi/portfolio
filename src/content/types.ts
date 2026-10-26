export type SocialLink = {
  readonly label: string;
  readonly href: string;
  /** Shown in the footer's large link list when true. */
  readonly featured?: boolean;
};

export type Metric = {
  readonly value: string;
  readonly label: string;
};

export type CaseStudySection = {
  readonly heading: string;
  readonly body: readonly string[];
};

export type Project = {
  readonly slug: string;
  readonly name: string;
  /** Client or "Personal" / "NDA" when the name cannot be shared. */
  readonly client: string;
  readonly year: string;
  readonly role: string;
  readonly discipline: string;
  /** One line, used on the index. Lead with the outcome, not the tech. */
  readonly summary: string;
  readonly stack: readonly string[];
  readonly metrics: readonly Metric[];
  readonly features: readonly string[];
  readonly liveUrl?: string;
  readonly repoUrl?: string;
  /** Hue (0-360) driving the generated placeholder visual until real art lands. */
  readonly hue: number;
  readonly sections: readonly CaseStudySection[];
};

export type ExperienceEntry = {
  readonly period: string;
  readonly role: string;
  readonly org: string;
  readonly note: string;
};
