export interface Activity {
  id: string;
  image: File | { base64: string; mime: string; name: string; size: number } | { name: string; size: number; type: string };
  imageUrl: string;
  hours: number;
  timestamp: Date; // When uploaded
  activityDate: Date; // When the activity actually happened (date)
  activityTime: string; // Time of day in HH:MM format (24-hour)
  brainScores?: Record<string, number>;
  isProcessing?: boolean;
}

export interface ActivityState {
  activities: Activity[];
  aggregatedScores: Record<string, number>;
  lastProcessed: Date | null;
}
