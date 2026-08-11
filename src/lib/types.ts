export type OpportunityType = 'conference' | 'special_issue' | 'workshop';
export type Scope = 'core' | 'adjacent';
export type DeadlineStatus = 'active' | 'superseded' | 'cancelled';
export type DeadlinePrecision = 'datetime' | 'date';

export interface Deadline {
  id: string;
  type: string;
  label: string;
  datetime: string;
  precision?: DeadlinePrecision;
  timezone?: string | null;
  status: DeadlineStatus;
  primary?: boolean;
  url?: string;
  note?: string | null;
}

export interface OpportunityData {
  title: string;
  short_name?: string;
  type: OpportunityType;
  series?: string;
  year: number;
  description: string;
  scope: Scope;
  topics: string[];
  website: string;
  submission_url?: string;
  sources: Array<{ label: string; url: string; kind: string }>;
  last_verified: string;
  deadlines: Deadline[];
  event?: { start: string; end: string };
  location?: {
    mode: 'in_person' | 'virtual' | 'hybrid';
    city?: string;
    country?: string;
    country_code?: string;
    venue?: string;
    latitude?: number;
    longitude?: number;
  };
  journal?: { name: string; short_name?: string; publisher?: string };
  guest_editors?: Array<{ name: string; affiliation?: string }>;
  organizations?: string[];
  tracks?: string[];
  rankings?: Record<string, string>;
  parent?: { name: string; url: string };
}

export interface Topic {
  id: string;
  label: string;
  group: 'core' | 'adjacent';
}

export interface DerivedOpportunity {
  id: string;
  filePath?: string;
  raw: OpportunityData;
  nextDeadline: Deadline | null;
  nextDeadlineTimestamp: number | null;
  submissionStatus: 'open' | 'closed' | 'tbd';
  urgency: 'critical' | 'urgent' | 'soon' | 'near' | 'normal' | null;
  verificationStatus: 'verified' | 'aging' | 'stale';
}
