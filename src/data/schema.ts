export interface TrackVariation {
  id: string;
  name: string;
  concept: string;
  tension: string;
  runtime: 'strudel';
  bpm: number | string;
  code: string;
  description: string;
}

export interface HumanApproval {
  approved: boolean;
  signoff: string;
  date: string;
  scope: string;
  notes?: string;
}

export interface Track {
  id: string;
  number: number;
  title: string;
  medium: string;
  status: 'candidate' | 'approved' | 'archived';
  duration: string;
  summary: string;
  publicNotes: string[];
  variations: TrackVariation[];
  humanApproval: HumanApproval;
}
