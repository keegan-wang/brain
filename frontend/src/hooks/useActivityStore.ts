import { useState, useEffect, useCallback } from 'react';
import type { Activity, ActivityState } from '../types/activity';

const STORAGE_KEY = 'cortexcam-activities';

function loadFromStorage(): ActivityState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...parsed,
        activities: parsed.activities.map((activity: any) => ({
          ...activity,
          timestamp: new Date(activity.timestamp),
          activityDate: activity.activityDate ? new Date(activity.activityDate) : new Date(activity.timestamp),
          activityTime: activity.activityTime || '12:00', // Default to noon if not set
          // Restore imageUrl from base64 if it's stored data
          imageUrl: activity.image?.base64
            ? `data:${activity.image.mime};base64,${activity.image.base64}`
            : activity.imageUrl
        })),
        lastProcessed: parsed.lastProcessed ? new Date(parsed.lastProcessed) : null
      };
    }
  } catch (error) {
    console.error('Failed to load activities from storage:', error);
  }

  return {
    activities: [],
    aggregatedScores: {},
    lastProcessed: null
  };
}

// This function is no longer used since we don't store base64 in localStorage
// async function fileToBase64(file: File): Promise<{ base64: string; mime: string; name: string; size: number }> {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const result = reader.result as string;
//       const base64 = result.split(',')[1]; // Remove data:image/...;base64, prefix
//       resolve({
//         base64,
//         mime: file.type,
//         name: file.name,
//         size: file.size
//       });
//     };
//     reader.onerror = reject;
//     reader.readAsDataURL(file);
//   });
// }

async function saveToStorage(state: ActivityState) {
  try {
    // Don't store full base64 images - only store activity metadata
    const activitiesForStorage = state.activities.map((activity) => ({
      id: activity.id,
      hours: activity.hours,
      timestamp: activity.timestamp,
      activityDate: activity.activityDate,
      activityTime: activity.activityTime,
      brainScores: activity.brainScores,
      isProcessing: false, // Don't persist processing state
      // Don't store image data - it takes too much space
      image: {
        name: activity.image instanceof File ? activity.image.name : activity.image.name,
        size: activity.image instanceof File ? activity.image.size : activity.image.size,
        type: activity.image instanceof File ? activity.image.type : ('mime' in activity.image ? activity.image.mime : activity.image.type)
      },
      imageUrl: activity.imageUrl // Keep the object URL for display
    }));

    const stateForStorage = {
      ...state,
      activities: activitiesForStorage
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateForStorage));
    console.log(`💾 Saved ${activitiesForStorage.length} activities to localStorage (metadata only)`);
  } catch (error) {
    console.error('Failed to save activities to storage:', error);
    // If still failing due to quota, clear old data
    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      console.warn('🗑️ LocalStorage quota exceeded, clearing activities to free space');
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}

export function useActivityStore() {
  const [state, setState] = useState<ActivityState>(loadFromStorage);

  // Save to localStorage whenever state changes
  useEffect(() => {
    saveToStorage(state).catch(error => {
      console.error('Failed to save to storage:', error);
    });
  }, [state]);

  const addActivity = (file: File): Activity => {
    const now = new Date();
    const activity: Activity = {
      id: Date.now().toString(),
      image: file,
      imageUrl: URL.createObjectURL(file),
      hours: 1,
      timestamp: now, // When uploaded
      activityDate: new Date(), // Default to today, user can change
      activityTime: now.toTimeString().slice(0, 5), // Default to current time (HH:MM)
      isProcessing: false
    };

    setState(prev => ({
      ...prev,
      activities: [...prev.activities, activity]
    }));

    return activity;
  };

  const updateActivity = (id: string, updates: Partial<Activity>) => {
    setState(prev => ({
      ...prev,
      activities: prev.activities.map(activity =>
        activity.id === id ? { ...activity, ...updates } : activity
      )
    }));
  };

  const removeActivity = (id: string) => {
    setState(prev => ({
      ...prev,
      activities: prev.activities.filter(activity => activity.id !== id)
    }));
  };

  const setAggregatedScores = (scores: Record<string, number>) => {
    setState(prev => ({
      ...prev,
      aggregatedScores: scores,
      lastProcessed: new Date()
    }));
  };

  // Generate time-series data from actual processed activities only
  const getTimeSeriesData = useCallback((timeframe: 'day' | 'week' = 'day'): Record<string, Array<{time: string, value: number}>> => {
    const processedActivities = state.activities.filter(activity => activity.brainScores && Object.keys(activity.brainScores).length > 0);

    console.log('🔍 getTimeSeriesData called:', {
      timeframe,
      totalActivities: state.activities.length,
      processedActivities: processedActivities.length,
      activities: processedActivities.map(a => ({
        id: a.id,
        activityDate: a.activityDate.toISOString().split('T')[0],
        activityTime: a.activityTime,
        brainScoresCount: Object.keys(a.brainScores || {}).length
      }))
    });

    if (processedActivities.length === 0) {
      console.log('❌ No processed activities found');
      return {};
    }

    // Filter activities based on the selected timeframe
    const now = new Date();
    const today = now.toISOString().split('T')[0];

    console.log(`🕐 Current time info:`, {
      now: now.toISOString(),
      today,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    const filteredActivities = processedActivities.filter(activity => {
      if (timeframe === 'day') {
        // For day view, show the most recent day that has data (not necessarily today)
        const allDates = processedActivities.map(a => a.activityDate.toISOString().split('T')[0]);
        const uniqueDates = [...new Set(allDates)].sort();
        const mostRecentDate = uniqueDates[uniqueDates.length - 1];

        const activityDate = activity.activityDate.toISOString().split('T')[0];
        const matches = activityDate === mostRecentDate;
        console.log(`📅 Day filter: activity "${activityDate}" vs most recent "${mostRecentDate}" = ${matches}`);
        return matches;
      } else { // week
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const matches = activity.activityDate >= oneWeekAgo;
        console.log(`📅 Week filter: activity ${activity.activityDate.toISOString()} vs ${oneWeekAgo.toISOString()} = ${matches}`);
        return matches;
      }
    });

    console.log('🔍 After timeframe filtering:', {
      timeframe,
      filteredCount: filteredActivities.length,
      filtered: filteredActivities.map(a => ({
        activityDate: a.activityDate.toISOString().split('T')[0],
        activityTime: a.activityTime
      }))
    });

    if (filteredActivities.length === 0) {
      console.log('❌ No activities in selected timeframe');
      return {}; // No activities in the selected timeframe
    }

    // Generate time series based on actual activity dates and their brain scores
    const data: Record<string, Array<{time: string, value: number}>> = {};

    // Get all brain regions from all activities
    const allRegions = new Set<string>();
    filteredActivities.forEach(activity => {
      Object.keys(activity.brainScores || {}).forEach(region => allRegions.add(region));
    });

    // Create time series for each region based on actual activity dates and times
    allRegions.forEach(region => {
      data[region] = [];

      // Group activities by date and create chronological timeline
      const dateTimeActivities: Array<{
        datetime: string;
        score: number;
        hours: number;
      }> = [];

      filteredActivities.forEach(activity => {
        const dateKey = activity.activityDate.toISOString().split('T')[0];
        const timeKey = activity.activityTime;
        const datetimeKey = `${dateKey}T${timeKey}:00`;
        const score = activity.brainScores?.[region] || 0;

        dateTimeActivities.push({
          datetime: datetimeKey,
          score,
          hours: activity.hours
        });
      });

      // Sort by datetime and create time-based visualization data
      dateTimeActivities.sort((a, b) => a.datetime.localeCompare(b.datetime));

      if (timeframe === 'day') {
        // For day view, create hourly data points within the day
        const dayData: { [hour: string]: { totalScore: number; totalHours: number; count: number } } = {};

        dateTimeActivities.forEach(({ datetime, score, hours }) => {
          const hour = datetime.split('T')[1].split(':')[0];

          if (!dayData[hour]) {
            dayData[hour] = { totalScore: 0, totalHours: 0, count: 0 };
          }

          dayData[hour].totalScore += score * hours;
          dayData[hour].totalHours += hours;
          dayData[hour].count += 1;
        });

        // Create hourly data points
        Object.entries(dayData).forEach(([hour, hourData]) => {
          const avgScore = Math.round(hourData.totalScore / hourData.totalHours);
          data[region].push({
            time: `${hour}:00`,
            value: avgScore
          });
        });

        // If we have fewer than 3 data points, add some interpolated points for smoother curves
        if (data[region].length === 1) {
          const singlePoint = data[region][0];
          // Add points before and after for a smoother visualization
          data[region] = [
            { time: '00:00', value: Math.max(1, singlePoint.value - 10) },
            singlePoint,
            { time: '23:59', value: Math.max(1, singlePoint.value - 5) }
          ];
        } else if (data[region].length === 2) {
          // Add a middle point
          const [first, second] = data[region];
          const midValue = Math.round((first.value + second.value) / 2);
          data[region].splice(1, 0, { time: '12:00', value: midValue });
        }
      } else {
        // For week view, group by date as before
        dateTimeActivities.forEach(({ datetime, score, hours }) => {
          const dateOnly = datetime.split('T')[0];
          const existingEntry = data[region].find(entry => entry.time === dateOnly);

          if (existingEntry) {
            const currentWeight = existingEntry.value * (existingEntry as any).totalHours;
            const newWeight = score * hours;
            const totalHours = (existingEntry as any).totalHours + hours;
            existingEntry.value = Math.round((currentWeight + newWeight) / totalHours);
            (existingEntry as any).totalHours = totalHours;
          } else {
            data[region].push({
              time: dateOnly,
              value: Math.round(score),
              totalHours: hours
            } as any);
          }
        });
      }

      // Clean up the totalHours property used for calculation
      data[region].forEach(entry => {
        delete (entry as any).totalHours;
      });
    });

    console.log('📊 Generated time series from real activity dates:', {
      processedActivities: processedActivities.length,
      regions: allRegions.size,
      sampleData: Object.keys(data).slice(0, 3).map(region => ({
        region,
        dataPoints: data[region].length,
        dates: data[region].map(d => d.time)
      }))
    });

    return data;
  }, [state.activities, state.aggregatedScores]); // Recalculate when activities or scores change

  // Get hourly breakdown for a specific date
  const getHourlyBreakdown = useCallback((targetDate: string): Array<{
    hour: number;
    activities: Array<{
      id: string;
      name: string;
      time: string;
      hours: number;
      brainScores: Record<string, number>;
    }>;
    totalHours: number;
    avgBrainActivity: Record<string, number>;
  }> => {
    const processedActivities = state.activities.filter(activity =>
      activity.brainScores &&
      Object.keys(activity.brainScores).length > 0 &&
      activity.activityDate.toISOString().split('T')[0] === targetDate
    );

    const hourlyData: Record<number, any> = {};

    processedActivities.forEach(activity => {
      const hour = parseInt(activity.activityTime.split(':')[0], 10);

      if (!hourlyData[hour]) {
        hourlyData[hour] = {
          hour,
          activities: [],
          totalHours: 0,
          brainScoresSums: {},
          brainScoresCounts: {}
        };
      }

      const activityName = activity.image instanceof File ? activity.image.name : activity.image.name;

      hourlyData[hour].activities.push({
        id: activity.id,
        name: activityName,
        time: activity.activityTime,
        hours: activity.hours,
        brainScores: activity.brainScores || {}
      });

      hourlyData[hour].totalHours += activity.hours;

      // Accumulate brain scores for averaging
      Object.entries(activity.brainScores || {}).forEach(([region, score]) => {
        hourlyData[hour].brainScoresSums[region] = (hourlyData[hour].brainScoresSums[region] || 0) + score;
        hourlyData[hour].brainScoresCounts[region] = (hourlyData[hour].brainScoresCounts[region] || 0) + 1;
      });
    });

    // Calculate averages and format data
    return Object.values(hourlyData).map((hourData: any) => ({
      hour: hourData.hour,
      activities: hourData.activities,
      totalHours: hourData.totalHours,
      avgBrainActivity: Object.fromEntries(
        Object.entries(hourData.brainScoresSums).map(([region, sum]: [string, any]) => [
          region,
          Math.round(sum / hourData.brainScoresCounts[region])
        ])
      )
    })).sort((a, b) => a.hour - b.hour);
  }, [state.activities]);

  const clearAllActivities = () => {
    setState({
      activities: [],
      aggregatedScores: {},
      lastProcessed: null
    });
  };

  const clearCache = () => {
    // Clear localStorage
    localStorage.removeItem(STORAGE_KEY);
    console.log('🗑️ Cleared localStorage cache');

    // Reset state
    setState({
      activities: [],
      aggregatedScores: {},
      lastProcessed: null
    });

    // Clear any object URLs to free memory
    state.activities.forEach(activity => {
      if (activity.imageUrl && activity.imageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(activity.imageUrl);
      }
    });

    console.log('✅ Cache cleared successfully');
  };

  return {
    activities: state.activities,
    aggregatedScores: state.aggregatedScores,
    lastProcessed: state.lastProcessed,
    // The dashboard has enough data if at least one activity has been successfully processed.
    hasEnoughData: state.activities.some(activity => activity.brainScores && Object.keys(activity.brainScores).length > 0),
    addActivity,
    updateActivity,
    removeActivity,
    setAggregatedScores,
    getTimeSeriesData,
    getHourlyBreakdown,
    clearAllActivities,
    clearCache
  };
}
