import { useState, useEffect, useMemo } from 'react';
import BrainRegionCard from './BrainRegionCard';
import BrainMap from './BrainMap';
import Brain3D from './Brain3D';
import MiniChart from './MiniChart';
import { useActivityStore } from '../hooks/useActivityStore';
import { BRAIN_REGIONS } from '../data/brainRegions';

export default function HomePage() {
  const [timeframe, setTimeframe] = useState<'day' | 'week'>('day');
  const [usageData, setUsageData] = useState<Record<string, Array<{time: string, value: number}>>>({});

  const { getTimeSeriesData, hasEnoughData, lastProcessed, clearCache } = useActivityStore();

  useEffect(() => {
    setUsageData(getTimeSeriesData(timeframe));
  }, [getTimeSeriesData, timeframe]); // Rerun when timeframe changes

  // Calculate overall brain usage for the main brain map - memoized to prevent recalculation
  const overallUsage = useMemo(() => {
    return Object.fromEntries(
      BRAIN_REGIONS.map(region => {
        const regionData = usageData[region.id] || [];
        const currentValue = regionData[regionData.length - 1]?.value || 0;
        return [region.id, currentValue];
      })
    );
  }, [usageData]);

  // Calculate daily average brain usage - memoized for performance
  const averageUsage = useMemo(() => {
    return Object.fromEntries(
      BRAIN_REGIONS.map(region => {
        const regionData = usageData[region.id] || [];
        if (regionData.length === 0) return [region.id, 0];

        const sum = regionData.reduce((acc, dataPoint) => acc + dataPoint.value, 0);
        const average = sum / regionData.length;
        return [region.id, average];
      })
    );
  }, [usageData]);

  const totalBrainUsage = useMemo(() => {
    const values = Object.values(averageUsage);
    return values.reduce((sum, val) => sum + val, 0) / values.length || 0;
  }, [averageUsage]);

  // Calculate overall brain activity over time for the main graph
  const overallActivityData = useMemo(() => {
    // Get all unique time points from any region
    const allTimes = new Set<string>();
    Object.values(usageData).forEach(regionData => {
      regionData.forEach(point => allTimes.add(point.time));
    });

    // Sort times chronologically
    const sortedTimes = Array.from(allTimes).sort();

    // For each time point, calculate the average across all brain regions
    return sortedTimes.map(time => {
      const valuesAtTime: number[] = [];

      BRAIN_REGIONS.forEach(region => {
        const regionData = usageData[region.id] || [];
        const dataPoint = regionData.find(d => d.time === time);
        if (dataPoint) {
          valuesAtTime.push(dataPoint.value);
        }
      });

      const averageValue = valuesAtTime.length > 0
        ? valuesAtTime.reduce((sum, val) => sum + val, 0) / valuesAtTime.length
        : 0;

      return {
        time,
        value: Math.round(averageValue)
      };
    });
  }, [usageData]);

  return (
    <div className="space-y-8">
      {/* Header & Brain Overview */}
      <div className="card">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-brand-500 to-accent-teal bg-clip-text text-transparent mb-2">
            Brain Activity Dashboard
          </h1>
          <p className="text-dark-100">
            {hasEnoughData
              ? `Track your cognitive engagement throughout the ${timeframe}`
              : 'Add activities in the Aggregate tab and process them to see your personalized brain data'
            }
          </p>
          {!hasEnoughData && (
            <div className="mt-3 text-sm text-accent-pink">
              Process at least one activity to see your brain activity data
            </div>
          )}
          {lastProcessed && (
            <div className="mt-2 text-xs text-dark-100">
              Last updated: {lastProcessed.toLocaleString()}
            </div>
          )}
          {hasEnoughData && (
            <div className="mt-4">
              <button
                onClick={() => {
                  if (confirm('This will clear all brain data and reset the dashboard. Are you sure?')) {
                    clearCache();
                  }
                }}
                className="btn-secondary text-xs bg-red-500/20 hover:bg-red-500/30 text-red-400 border-red-500/30"
              >
                🗑️ Reset Dashboard
              </button>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-dark-900 rounded-lg p-1">
            <button
              onClick={() => setTimeframe('day')}
              className={`px-4 py-2 rounded-md text-sm transition-all ${
                timeframe === 'day'
                  ? 'bg-brand-600 text-white'
                  : 'text-dark-100 hover:text-white'
              }`}
            >
              Latest Day
            </button>
            <button
              onClick={() => setTimeframe('week')}
              className={`px-4 py-2 rounded-md text-sm transition-all ${
                timeframe === 'week'
                  ? 'bg-brand-600 text-white'
                  : 'text-dark-100 hover:text-white'
              }`}
            >
              7 Days
            </button>
          </div>
        </div>

        {/* Overall Stats */}
        {hasEnoughData ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-500 mb-1">
                  {Math.round(totalBrainUsage)}%
                </div>
                <div className="text-sm text-dark-100">Average Daily Activity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-teal mb-1">
                  {Object.values(averageUsage).filter(v => v > 60).length}
                </div>
                <div className="text-sm text-dark-100">Highly Active Regions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-pink mb-1">
                  {Object.values(averageUsage).filter(v => v < 30).length}
                </div>
                <div className="text-sm text-dark-100">Underutilized Regions</div>
              </div>
            </div>

            {/* Overall Brain Activity Graph */}
            <div className="mb-8">
              <div className="bg-dark-900/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Overall Brain Activity Over Time</h3>
                  <div className="text-sm text-dark-100">
                    {timeframe === 'day' ? 'Latest Day' : '7 Days'}
                  </div>
                </div>

                {overallActivityData.length > 0 ? (
                  <div className="h-24">
                    <MiniChart
                      data={overallActivityData}
                      color="#22D3EE"
                      height={96}
                    />
                  </div>
                ) : (
                  <div className="h-24 flex items-center justify-center text-dark-100 text-sm">
                    No activity data available
                  </div>
                )}

                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-dark-100">Current</div>
                    <div className="font-medium text-white">
                      {overallActivityData[overallActivityData.length - 1]?.value || 0}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-dark-100">Average</div>
                    <div className="font-medium text-white">
                      {Math.round(totalBrainUsage)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-dark-100">Peak</div>
                    <div className="font-medium text-white">
                      {overallActivityData.length > 0
                        ? Math.max(...overallActivityData.map(d => d.value))
                        : 0}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brain Visualizations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* 2D Brain Map */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-white mb-4">2D Brain Map</h3>
                <div className="max-w-md">
                  <BrainMap scores={overallUsage} />
                </div>
              </div>

              {/* 3D Brain Model */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-white mb-4">3D Brain Model</h3>
                <Brain3D brainData={overallUsage} className="w-full" />
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-500 mb-4">
              <svg width="200" height="120" className="mx-auto opacity-30">
                <path d="M100 20 C140 20, 180 50, 180 80 C180 100, 140 110, 100 110 C60 110, 20 100, 20 80 C20 50, 60 20, 100 20 Z"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"/>
                <text x="100" y="70" textAnchor="middle" className="text-xs fill-current">Brain Map</text>
              </svg>
            </div>
            <p className="text-dark-100 text-sm">Brain visualization will appear here after processing activities</p>
          </div>
        )}
      </div>

      {/* Brain Regions Grid */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">
          Brain Region Details
        </h2>
        {hasEnoughData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAIN_REGIONS.map(region => (
              <BrainRegionCard
                key={region.id}
                region={region}
                usageData={usageData[region.id] || []}
              />
            ))}
          </div>
        ) : (
          <div className="card text-center py-12">
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold text-white mb-2">No Brain Data Yet</h3>
            <p className="text-dark-100 mb-6">
              Process activities in the Aggregate tab to see detailed brain region analysis
            </p>
            <div className="flex flex-col items-center gap-2 text-sm text-dark-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-pink rounded-full"></span>
                Add an activity image
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-teal rounded-full"></span>
                Click "Process X Activities"
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                Return here to see your brain activity
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Brain Usage Overview */}
      {hasEnoughData && (
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-4">
            🧠 Daily Average Brain Usage
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(() => {
              // Calculate top 3 and bottom 3 brain regions based on daily average
              const sortedRegions = BRAIN_REGIONS
                .map(region => ({
                  ...region,
                  usage: averageUsage[region.id] || 0
                }))
                .sort((a, b) => b.usage - a.usage);

              const topRegions = sortedRegions.slice(0, 3);
              const bottomRegions = sortedRegions.slice(-3).reverse();

              // Activity suggestions for underutilized regions
              const improvementSuggestions: Record<string, string[]> = {
                prefrontal_cortex: [
                  "Try complex problem-solving tasks",
                  "Practice decision-making exercises",
                  "Engage in strategic planning activities"
                ],
                hippocampus: [
                  "Play memory games",
                  "Learn new routes or places",
                  "Practice recall exercises"
                ],
                temporal_lobe: [
                  "Listen to music actively",
                  "Practice language learning",
                  "Engage in auditory processing tasks"
                ],
                parietal_lobe: [
                  "Do spatial puzzles",
                  "Practice hand-eye coordination",
                  "Engage in navigation tasks"
                ],
                occipital_lobe: [
                  "Practice visual attention exercises",
                  "Engage in art or design work",
                  "Do visual pattern recognition tasks"
                ],
                cerebellum: [
                  "Practice balance exercises",
                  "Learn dance or movement patterns",
                  "Engage in fine motor activities"
                ],
                brainstem: [
                  "Practice breathing exercises",
                  "Maintain regular sleep schedule",
                  "Engage in cardiovascular activities"
                ],
                motor_cortex: [
                  "Practice fine motor skills",
                  "Learn new physical movements",
                  "Engage in hands-on activities"
                ],
                somatosensory_cortex: [
                  "Practice tactile exercises",
                  "Engage in texture exploration",
                  "Try mindful touch activities"
                ],
                anterior_cingulate: [
                  "Practice mindfulness meditation",
                  "Engage in emotional regulation exercises",
                  "Try attention control tasks"
                ]
              };

              return (
                <>
                  {/* Most Used Regions */}
                  <div>
                    <h3 className="font-medium text-accent-teal mb-4 flex items-center">
                      <span className="text-lg mr-2">🔥</span>
                      Most Active Brain Regions
                    </h3>
                    <div className="space-y-3">
                      {topRegions.map((region, index) => (
                        <div key={region.id} className="flex items-center justify-between p-3 bg-dark-900/50 rounded-lg">
                          <div className="flex items-center">
                            <div className="text-lg mr-3">
                              {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                            </div>
                            <div>
                              <div className="font-medium text-white">{region.name}</div>
                              <div className="text-xs text-dark-100">{region.description}</div>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-accent-teal">
                            {Math.round(region.usage)}%
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="text-green-400 text-sm font-medium mb-1">Great job! 👏</div>
                      <div className="text-xs text-dark-100">
                        These regions show consistently high daily average engagement from your activities.
                      </div>
                    </div>
                  </div>

                  {/* Least Used Regions */}
                  <div>
                    <h3 className="font-medium text-accent-pink mb-4 flex items-center">
                      <span className="text-lg mr-2">💤</span>
                      Areas for Improvement
                    </h3>
                    <div className="space-y-3">
                      {bottomRegions.map((region, index) => (
                        <div key={region.id} className="p-3 bg-dark-900/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-accent-pink rounded-full mr-3"></div>
                              <div>
                                <div className="font-medium text-white">{region.name}</div>
                                <div className="text-xs text-dark-100">{region.description}</div>
                              </div>
                            </div>
                            <div className="text-lg font-bold text-accent-pink">
                              {Math.round(region.usage)}%
                            </div>
                          </div>
                          {/* Improvement suggestions */}
                          <div className="mt-2 pl-6">
                            <div className="text-xs text-dark-100 mb-1">Suggestions to engage this region:</div>
                            <ul className="text-xs text-dark-100 space-y-1">
                              {(improvementSuggestions[region.id] || [
                                "Try activities that challenge this brain area",
                                "Engage in varied cognitive exercises",
                                "Consider activities outside your comfort zone"
                              ]).map((suggestion, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-1 h-1 bg-accent-pink rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                  {suggestion}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="text-blue-400 text-sm font-medium mb-1">💡 Pro Tip</div>
                      <div className="text-xs text-dark-100">
                        These regions show lower daily average usage. Try incorporating activities that target them to achieve better cognitive balance.
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
