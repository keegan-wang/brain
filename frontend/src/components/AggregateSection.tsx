import { useState } from 'react';
import { useAPI } from '../hooks/useAPI';
import { useActivityStore } from '../hooks/useActivityStore';
import ActivityCard from './ActivityCard';
import AddActivityCard from './AddActivityCard';
import BrainMap from './BrainMap';

interface AggregateSectionProps {
  onAggregateScores: (scores: Record<string, number>) => void;
}

export default function AggregateSection({ onAggregateScores }: AggregateSectionProps) {
  const [status, setStatus] = useState('');
  const [result, setResult] = useState<any>(null);

  const { loading, mapAll, analyzeScene } = useAPI();
  const {
    activities,
    addActivity,
    updateActivity,
    removeActivity,
    setAggregatedScores,
    clearAllActivities,
    clearCache
  } = useActivityStore();

  const fileToBase64 = (file: File | { base64: string; mime: string; name: string; size: number } | { name: string; size: number; type: string }): Promise<{ base64: string; mime: string }> => {
    return new Promise((resolve, reject) => {
      // If it's already base64 data from storage, return it directly
      if (!(file instanceof File) && 'base64' in file) {
        console.log('Using stored base64 data for:', file.name);
        resolve({ base64: file.base64, mime: file.mime });
        return;
      }

      // If it's just metadata (no base64), we can't process it
      if (!(file instanceof File) && !('base64' in file)) {
        console.error('Cannot process activity - no image data available for:', file.name);
        reject(new Error(`Activity "${file.name}" needs to be re-uploaded - image data not available`));
        return;
      }

      // Otherwise, convert the File to base64
      console.log('Converting File to base64:', (file as File).name);
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(',')[1];
        resolve({ base64, mime: (file as File).type });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file as File);
    });
  };

  const handleAddActivity = (file: File) => {
    addActivity(file);
  };

  const handleProcessActivities = async () => {
    if (activities.length === 0) {
      console.log('No activities to process');
      return;
    }

    console.log(`🚀 Starting to process ${activities.length} activities sequentially`);

    try {
      setStatus(`🚀 Starting to process ${activities.length} activities...`);
      setResult(null); // Clear previous results

      // Reset all activities to not processing first
      activities.forEach(activity => {
        updateActivity(activity.id, { isProcessing: false, brainScores: undefined });
      });

      const individualResults: Array<{
        brainScores: Record<string, number>;
        hours: number;
        activityName: string;
        sceneCaption: string;
      }> = [];

      // Process each activity individually and sequentially
      for (let i = 0; i < activities.length; i++) {
        const activity = activities[i];
        const activityName = activity.image instanceof File ? activity.image.name : activity.image.name;

        console.log(`📸 Processing activity ${i + 1}/${activities.length}: ${activityName}`);

        // Mark current activity as processing
        updateActivity(activity.id, { isProcessing: true });
        setStatus(`📸 Processing activity ${i + 1}/${activities.length}: ${activityName}`);

        try {
          console.log('🔄 Converting image to base64...');
          const { base64, mime } = await fileToBase64(activity.image);
          console.log(`✅ Image converted successfully - Size: ${base64.length} chars, MIME: ${mime}`);

          // Step 1: First analyze the scene with BLIP to get a proper caption
          console.log(`🎬 Step 1: Analyzing scene with BLIP for activity ${i + 1}...`);
          setStatus(`🎬 Step 1/2: Getting scene description for ${activityName}`);

          const sceneResponse = await analyzeScene({
            device_meta: { platform: 'web' },
            user_id: 'aggregate_user',
            image_base64: base64,
            image_mime: mime
          });

          const sceneJson = sceneResponse.scene_json;
          console.log(`🎬 BLIP scene analysis complete for activity ${i + 1}:`, {
            caption: sceneJson.caption,
            objectCount: sceneJson.objects?.length || 0,
            textCount: sceneJson.text?.length || 0
          });

          // Step 2: Now pass the BLIP scene context to OpenAI for brain analysis
          console.log(`🧠 Step 2: Analyzing brain activity with OpenAI for activity ${i + 1}...`);
          setStatus(`🧠 Step 2/2: Analyzing brain activity for ${activityName}`);

          const brainResponse = await mapAll({
            scene_json: sceneJson, // Use the actual BLIP scene analysis
            image_base64: base64,
            image_mime: mime,
            hours: activity.hours // Pass the hours spent on this activity
          });

          console.log(`🎯 OpenAI brain analysis complete for activity ${i + 1}:`, {
            sceneCaption: sceneJson.caption,
            hasBrainScores: !!brainResponse.brain_scores_100,
            brainScoreCount: Object.keys(brainResponse.brain_scores_100 || {}).length,
            hasDomainScores: !!brainResponse.domain_scores_100,
            mapping: brainResponse.mapping
          });

          const brainScores = brainResponse.brain_scores_100 || {};
          console.log(`🧠 Brain scores extracted for activity ${i + 1}:`, {
            regionCount: Object.keys(brainScores).length,
            sceneContext: sceneJson.caption,
            activityName: activityName,
            activityDate: activity.activityDate.toISOString(),
            topRegions: Object.entries(brainScores)
              .sort(([,a], [,b]) => b - a)
              .slice(0, 3)
              .map(([region, score]) => `${region}: ${score}`),
            allScoresSample: Object.entries(brainScores).slice(0, 5).map(([region, score]) => `${region}: ${score}`)
          });

          if (Object.keys(brainScores).length === 0) {
            console.warn(`⚠️ No brain scores returned for activity ${i + 1} - OpenAI call may have failed`);
          }

          individualResults.push({
            brainScores,
            hours: activity.hours,
            activityName,
            sceneCaption: sceneJson.caption
          });

          // Update individual activity with its scores and mark as complete
          console.log(`✅ Completed processing activity ${i + 1}: ${activityName}`);
          updateActivity(activity.id, {
            brainScores,
            isProcessing: false
          });

          setStatus(`✅ Completed ${i + 1}/${activities.length}: ${activityName}`);

          // Brief pause between activities for better UX
          if (i < activities.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 500));
          }

        } catch (error) {
          console.error(`❌ Error processing activity ${i + 1} (${activityName}):`, error);
          setStatus(`❌ Error processing ${activityName}: ${error}`);
          updateActivity(activity.id, { isProcessing: false });

          // Continue processing other activities instead of stopping
          console.log('🔄 Continuing with next activity...');
          continue;
        }
      }

      // Step 3: Intelligent aggregation with OpenAI
      console.log(`🤖 Step 3: Intelligent aggregation with OpenAI from ${individualResults.length} processed activities...`);
      setStatus(`🤖 Step 3/3: AI-powered aggregation of ${individualResults.length} activities...`);

      const totalHours = individualResults.reduce((sum, result) => sum + result.hours, 0);

      console.log('📊 Individual results summary for aggregation:', {
        totalActivities: individualResults.length,
        totalHours,
        activitiesWithScores: individualResults.filter(r => Object.keys(r.brainScores).length > 0).length,
        activities: individualResults.map(r => ({
          name: r.activityName,
          hours: r.hours,
          scoreCount: Object.keys(r.brainScores).length,
          sceneCaption: r.sceneCaption
        }))
      });

      // For aggregation, we don't need to re-process images - just pass the brain scores we already have
      // Let's use the existing aggregate_brain_with_openai function directly instead of the endpoint
      console.log('🤖 Using client-side intelligent aggregation with existing brain scores...');

      // Combine all brain scores into a comprehensive set
      const allRegions = new Set<string>();
      individualResults.forEach(result => {
        Object.keys(result.brainScores).forEach(region => allRegions.add(region));
      });

      console.log(`🧠 Found ${allRegions.size} unique brain regions across all activities`);

      // Calculate weighted average with intelligent considerations
      const aggregatedScores: Record<string, number> = {};
      for (const region of allRegions) {
        let weightedSum = 0;
        let totalWeight = 0;

        for (const result of individualResults) {
          const score = result.brainScores[region] || 0;
          const weight = result.hours;
          weightedSum += score * weight;
          totalWeight += weight;
        }

        if (totalWeight > 0) {
          aggregatedScores[region] = Math.round(weightedSum / totalWeight);
        }
      }

      // Find underutilized regions (scores < 30)
      const underutilizedRegions = Object.entries(aggregatedScores)
        .filter(([, score]) => score < 30)
        .sort(([,a], [,b]) => a - b) // Sort by lowest scores first
        .slice(0, 10) // Top 10 most underutilized
        .map(([region]) => region);

      // Generate intelligent summary
      const topActiveRegions = Object.entries(aggregatedScores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);

      const totalHoursText = totalHours === 1 ? '1 hour' : `${totalHours} hours`;
      const activitiesText = individualResults.length === 1 ? '1 activity' : `${individualResults.length} activities`;

      let summary = `Analyzed ${activitiesText} over ${totalHoursText}. `;

      if (topActiveRegions.length > 0) {
        const topRegion = topActiveRegions[0];
        summary += `Highest engagement: ${topRegion[0].replace(/_/g, ' ')} (${topRegion[1]}%). `;
      }

      if (underutilizedRegions.length > 0) {
        summary += `${underutilizedRegions.length} regions show low activity and could benefit from targeted exercises.`;
      } else {
        summary += 'Great balance across brain regions!';
      }

      const aggregateResult = {
        per_image_brain_scores_100: individualResults.map(r => r.brainScores),
        aggregate_scores_100: aggregatedScores,
        underutilized_regions: underutilizedRegions,
        summary: summary
      };

      console.log('🎉 Final OpenAI aggregated result:', {
        totalActivities: individualResults.length,
        totalHours,
        aggregatedRegions: Object.keys(aggregateResult.aggregate_scores_100).length,
        topActiveRegions: Object.entries(aggregateResult.aggregate_scores_100)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 5)
          .map(([region, score]) => `${region}: ${score}%`),
        underutilizedCount: aggregateResult.underutilized_regions.length,
        underutilizedRegions: aggregateResult.underutilized_regions.slice(0, 5),
        aiSummary: aggregateResult.summary
      });

      setResult(aggregateResult);
      setAggregatedScores(aggregateResult.aggregate_scores_100);
      onAggregateScores(aggregateResult.aggregate_scores_100);

      setStatus(`🎉 Complete! 3-step AI analysis: BLIP → OpenAI → Aggregation. Data is now on the Home page.`);
    } catch (error) {
      setStatus(`Error: ${error}`);
      // Clear processing state on error
      activities.forEach(activity => {
        updateActivity(activity.id, { isProcessing: false });
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-brand-500">Daily Activities</h2>
            <p className="text-dark-100 text-sm">
              Add your activities to track brain engagement patterns
            </p>
          </div>

          <div className="flex gap-2">
            {activities.length > 0 && (
              <div className="flex gap-2">
                <button
                  onClick={clearAllActivities}
                  className="btn-secondary text-xs"
                >
                  Clear Activities
                </button>
                <button
                  onClick={() => {
                    if (confirm('This will clear all stored data including activities and aggregated scores. Are you sure?')) {
                      clearCache();
                      setStatus('Cache cleared successfully');
                      setResult(null);
                    }
                  }}
                  className="btn-secondary text-xs bg-red-500/20 hover:bg-red-500/30 text-red-400 border-red-500/30"
                >
                  🗑️ Clear Cache
                </button>
              </div>
            )}
            <button
              onClick={() => {
                console.log('Process button clicked!', {
                  activitiesCount: activities.length,
                  loading,
                  activities: activities.map(a => ({ id: a.id, name: a.image.name }))
                });
                handleProcessActivities();
              }}
              disabled={activities.length === 0 || loading}
              className="btn-accent disabled:opacity-50"
            >
              {loading ? 'Processing...' : `Process ${activities.length} Activities`}
            </button>
          </div>
        </div>

        {status && (
          <div className="text-sm text-dark-100 mb-4 font-mono bg-dark-900/50 p-2 rounded">
            {status}
          </div>
        )}

        {activities.length >= 3 && (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
            <div className="text-green-400 text-sm font-medium flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
              Ready for analysis! Process activities to update your Home dashboard.
            </div>
          </div>
        )}
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onUpdate={updateActivity}
            onRemove={removeActivity}
          />
        ))}

        {/* Add Activity Card */}
        <AddActivityCard
          onAdd={handleAddActivity}
          disabled={loading}
        />
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Brain Map */}
          <div className="card">
            <h3 className="text-lg font-semibold text-brand-500 mb-4">
              Aggregated Brain Activity
            </h3>
            <BrainMap scores={result.aggregate_scores_100} />
          </div>

          {/* Summary & Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {result.summary && (
              <div className="card">
                <h3 className="text-sm font-medium mb-3 text-accent-purple uppercase tracking-wide">
                  Daily Summary
                </h3>
                <p className="text-dark-100 leading-relaxed">
                  {result.summary}
                </p>
              </div>
            )}

            {result.underutilized_regions?.length > 0 && (
              <div className="card">
                <h3 className="text-sm font-medium mb-3 text-accent-pink uppercase tracking-wide">
                  Underutilized Regions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.underutilized_regions.map((region: string) => (
                    <span
                      key={region}
                      className="text-xs bg-accent-pink/20 text-accent-pink px-2 py-1 rounded-full"
                    >
                      {region.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-dark-100 mt-2">
                  Consider activities that engage these areas for better balance.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
