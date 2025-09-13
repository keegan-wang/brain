import { useState, useEffect, useMemo } from 'react';
import BrainRegionCard from './BrainRegionCard';
import BrainMap from './BrainMap';
import Brain3D from './Brain3D';
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

  const totalBrainUsage = useMemo(() => {
    const values = Object.values(overallUsage);
    return values.reduce((sum, val) => sum + val, 0) / values.length || 0;
  }, [overallUsage]);

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
                <div className="text-sm text-dark-100">Overall Activity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-teal mb-1">
                  {Object.values(overallUsage).filter(v => v > 60).length}
                </div>
                <div className="text-sm text-dark-100">Highly Active Regions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-pink mb-1">
                  {Object.values(overallUsage).filter(v => v < 30).length}
                </div>
                <div className="text-sm text-dark-100">Underutilized Regions</div>
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

      {/* Tips Section */}
      <div className="card">
        <h2 className="text-xl font-semibold text-white mb-4">
          💡 Optimization Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-accent-teal mb-2">
              Boost Underutilized Regions
            </h3>
            <ul className="space-y-2 text-sm text-dark-100">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0" />
                Try memory games to activate your hippocampus
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0" />
                Practice mindfulness to engage your anterior cingulate
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0" />
                Learn a new skill to challenge your prefrontal cortex
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-accent-teal mb-2">
              Maintain Balance
            </h3>
            <ul className="space-y-2 text-sm text-dark-100">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0" />
                Mix cognitive and physical activities
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0" />
                Take breaks to prevent cognitive fatigue
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0" />
                Vary your daily activities for well-rounded engagement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
