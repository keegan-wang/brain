import MiniChart from './MiniChart';
import type { BrainRegionInfo } from '../data/brainRegions';

interface BrainRegionCardProps {
  region: BrainRegionInfo;
  usageData: Array<{time: string, value: number}>;
}

export default function BrainRegionCard({ region, usageData }: BrainRegionCardProps) {
  const currentUsage = usageData[usageData.length - 1]?.value || 0;

  // Safely calculate average and peak, providing default values for empty data
  const avgUsage = usageData.length > 0
    ? Math.round(usageData.reduce((sum, d) => sum + d.value, 0) / usageData.length)
    : 0;

  const peakUsage = usageData.length > 0
    ? Math.max(...usageData.map(d => d.value))
    : 0;

  const getUsageLevel = (value: number) => {
    if (value < 30) return { label: 'Low', color: 'text-red-400' };
    if (value < 60) return { label: 'Moderate', color: 'text-yellow-400' };
    return { label: 'High', color: 'text-green-400' };
  };

  const usageLevel = getUsageLevel(currentUsage);

  return (
    <div className="card hover:shadow-glow-teal transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-1 group-hover:text-accent-teal transition-colors">
            {region.name}
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <span className={`font-medium ${usageLevel.color}`}>
              {usageLevel.label}
            </span>
            <span className="text-dark-100">
              {currentUsage}% current
            </span>
          </div>
        </div>
        <div
          className="w-3 h-3 rounded-full opacity-80"
          style={{ backgroundColor: region.color }}
        />
      </div>

      {/* Chart */}
      <div className="mb-4">
        <MiniChart
          data={usageData}
          color={region.color}
          height={50}
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <div className="text-dark-100">7-day avg</div>
          <div className="font-medium text-white">{avgUsage}%</div>
        </div>
        <div>
          <div className="text-dark-100">Peak</div>
          <div className="font-medium text-white">
            {peakUsage}%
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="text-sm text-dark-100 leading-relaxed">
          {region.description}
        </p>
      </div>

      {/* Functions */}
      <div className="mb-4">
        <h4 className="text-xs font-medium text-accent-teal mb-2 uppercase tracking-wide">
          Key Functions
        </h4>
        <div className="flex flex-wrap gap-1">
          {region.functions.map(func => (
            <span
              key={func}
              className="text-xs bg-dark-850/60 text-dark-100 px-2 py-1 rounded-full"
            >
              {func}
            </span>
          ))}
        </div>
      </div>

      {/* Activation Tips */}
      <div>
        <h4 className="text-xs font-medium text-accent-pink mb-2 uppercase tracking-wide">
          How to Activate
        </h4>
        <div className="space-y-1">
          {region.activation.slice(0, 3).map(tip => (
            <div key={tip} className="text-xs text-dark-100 flex items-center">
              <span className="w-1 h-1 bg-accent-pink rounded-full mr-2 flex-shrink-0" />
              {tip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
