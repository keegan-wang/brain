import type { Activity } from '../types/activity';

interface ActivityCardProps {
  activity: Activity;
  onUpdate: (id: string, updates: Partial<Activity>) => void;
  onRemove: (id: string) => void;
}

export default function ActivityCard({ activity, onUpdate, onRemove }: ActivityCardProps) {

  const handleHoursChange = (hours: number) => {
    onUpdate(activity.id, { hours });
  };

  const handleActivityDateChange = (dateString: string) => {
    const activityDate = new Date(dateString);
    onUpdate(activity.id, { activityDate });
  };

  const handleActivityTimeChange = (timeString: string) => {
    onUpdate(activity.id, { activityTime: timeString });
  };

  return (
    <div className="card group relative">
      {/* Remove button */}
      <button
        onClick={() => onRemove(activity.id)}
        className="absolute top-2 right-2 w-6 h-6 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center text-sm"
      >
        ×
      </button>

      {/* Image */}
      <div className="aspect-video w-full rounded-lg overflow-hidden mb-4 bg-dark-900">
        <img
          src={activity.imageUrl}
          alt="Activity"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Processing overlay */}
      {activity.isProcessing && (
        <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full mx-auto mb-2" />
            <div className="text-sm text-brand-500 font-medium">🔬 Analyzing with AI...</div>
            <div className="text-xs text-dark-100 mt-1">BLIP + OpenAI brain analysis</div>
          </div>
        </div>
      )}

      {/* Completion indicator */}
      {!activity.isProcessing && activity.brainScores && Object.keys(activity.brainScores).length > 0 && (
        <div className="absolute top-2 left-2 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
          ✅ Analyzed
        </div>
      )}

      {/* Content */}
      <div className="space-y-3">
        {/* Activity Date and Time */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-medium text-accent-purple mb-1 uppercase tracking-wide">
              Date
            </label>
            <input
              type="date"
              value={activity.activityDate.toISOString().split('T')[0]}
              onChange={(e) => handleActivityDateChange(e.target.value)}
              className="input w-full text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-accent-purple mb-1 uppercase tracking-wide">
              Time
            </label>
            <input
              type="time"
              value={activity.activityTime}
              onChange={(e) => handleActivityTimeChange(e.target.value)}
              className="input w-full text-sm"
            />
          </div>
        </div>

        {/* Time input */}
        <div>
          <label className="block text-xs font-medium text-accent-teal mb-1 uppercase tracking-wide">
            Hours Spent
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              step="0.25"
              value={activity.hours}
              onChange={(e) => handleHoursChange(parseFloat(e.target.value) || 0)}
              className="input w-20 text-center"
            />
            <span className="text-sm text-dark-100">hours</span>
          </div>
        </div>

        {/* Filename */}
        <div>
          <label className="block text-xs font-medium text-accent-orange mb-1 uppercase tracking-wide">
            File
          </label>
          <div className="text-sm text-dark-100 truncate font-mono">
            {activity.image instanceof File ? activity.image.name : activity.image.name}
            {!(activity.image instanceof File) && !('base64' in activity.image) && (
              <span className="text-xs text-orange-400 ml-2">(metadata only)</span>
            )}
          </div>
        </div>

        {/* Timestamp */}
        <div>
          <label className="block text-xs font-medium text-accent-pink mb-1 uppercase tracking-wide">
            Added
          </label>
          <div className="text-sm text-dark-100">
            {activity.timestamp.toLocaleString()}
          </div>
        </div>

        {/* Brain scores preview */}
        {activity.brainScores && (
          <div>
            <label className="block text-xs font-medium text-accent-purple mb-1 uppercase tracking-wide">
              Top Active Regions
            </label>
            <div className="flex flex-wrap gap-1">
              {Object.entries(activity.brainScores)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 3)
                .map(([region, score]) => (
                  <span
                    key={region}
                    className="text-xs bg-accent-purple/20 text-accent-purple px-2 py-1 rounded-full"
                  >
                    {region.replace(/_/g, ' ').slice(0, 12)}... {score}%
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
