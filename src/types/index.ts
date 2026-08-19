export interface RSVPFormData {
  fullName: string;
  guestCount: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface InvitationData {
  groomName: string;
  brideName: string;
  date: string;
  time: string;
  location: string;
  locationUrl: string;
  googleSheetsUrl: string;
  googleSheetGeustBookUrl: string;
}

export type AnimationState = 'splash' | 'revealing' | 'revealed';

export interface RSVPResponse {
  success: boolean;
  message?: string;
}
