/**
 * The Traveler — Jump Timeline & Notes Type Definitions
 * Based on Joseph Eckert's novel "The Traveler"
 */

export interface TimeJump {
  jump: number;
  days: number;
  days_formatted: string;
  converted: string;
  arrival_date: string;
  cum_days: number;
  cum_formatted: string;
  milestone?: string;
}

export interface UserNotesStore {
  [jumpNumber: number]: string;
}

export interface ExportNotesPayload {
  title: string;
  startDate: string;
  exportDate: string;
  currentJump: number;
  notes: UserNotesStore;
}

export type ViewMode = 'table' | 'cards';

export interface AppState {
  currentJump: number;
  spoilerShield: boolean;
  viewMode: ViewMode;
  notes: UserNotesStore;
}
