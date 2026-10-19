export type LifecycleState = ':Experimentacion' | ':Mutacion' | ':Challenger' | ':Victory';

export interface SongSection {
  id: string;
  tag: string;
  name: string;
  startTime: string;
  endTime: string;
  startSec: number;
  endSec: number;
  bpm: number;
  keyCenter: string;
  instruments: string[];
  description: string;
  strudelCode: string;
}

export interface TrackVariation {
  id: string;
  name: string;
  lifecycle: LifecycleState;
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
  lifecycle: LifecycleState;
  duration: string;
  summary: string;
  publicNotes: string[];
  variations: TrackVariation[];
  sections?: SongSection[];
  masterCompiledStrudelCode?: string;
  humanApproval: HumanApproval;
}
