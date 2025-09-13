import React, { useState } from 'react';
import { useAPI, useWebSocket } from '../hooks/useAPI';
import type { SceneJSON } from '../types/api';
import BrainMap from './BrainMap';
import Brain3D from './Brain3D';

interface AnalyzeSectionProps {
  onSceneAnalyzed: (scene: SceneJSON) => void;
  onBrainScores: (scores: Record<string, number>) => void;
}

export default function AnalyzeSection({ onSceneAnalyzed, onBrainScores }: AnalyzeSectionProps) {
  const [platform, setPlatform] = useState('ios');
  const [userId, setUserId] = useState('demo');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [scene, setScene] = useState<SceneJSON | null>(null);
  const [mapping, setMapping] = useState<any>(null);
  const [brainScores, setBrainScores] = useState<Record<string, number>>({});
  const [status, setStatus] = useState('');

  const { loading, analyzeScene, mapAll } = useAPI();
  const { connect, clearMessages } = useWebSocket(`ws://${location.host}/ws/analyze`);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreview(url);
    }
  };

  const fileToBase64 = (file: File): Promise<{ base64: string; mime: string }> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(',')[1];
        resolve({ base64, mime: file.type });
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAnalyze = async () => {
    if (!file) return;

    try {
      setStatus('Analyzing...');
      const { base64, mime } = await fileToBase64(file);

      const result = await analyzeScene({
        device_meta: { platform },
        user_id: userId,
        image_base64: base64,
        image_mime: mime,
      });

      setScene(result.scene_json);
      onSceneAnalyzed(result.scene_json);
      setStatus('Scene analyzed successfully');
    } catch (error) {
      setStatus(`Error: ${error}`);
    }
  };

  const handleGPTBrain = async () => {
    if (!scene || !file) return;

    try {
      setStatus('Processing with GPT...');
      const { base64, mime } = await fileToBase64(file);

      const result = await mapAll({
        scene_json: scene,
        image_base64: base64,
        image_mime: mime,
      });

      setMapping(result.mapping);
      setBrainScores(result.brain_scores_100);
      onBrainScores(result.brain_scores_100);
      setStatus('GPT processing complete');
    } catch (error) {
      setStatus(`Error: ${error}`);
    }
  };

  const handleStreamAnalyze = () => {
    if (!file) return;

    clearMessages();
    setStatus('Connecting...');

    const ws = connect((msg) => {
      if (msg.type === 'status') {
        setStatus(`[${msg.stage}] ${msg.detail}`);
      } else if (msg.type === 'result') {
        if (msg.scene_json) {
          setScene(msg.scene_json);
          onSceneAnalyzed(msg.scene_json);
        }
        if (msg.mapping) {
          setMapping(msg.mapping);
        }
        if (msg.brain_scores_100) {
          setBrainScores(msg.brain_scores_100);
          onBrainScores(msg.brain_scores_100);
        }
        setStatus('Stream analysis complete');
      } else if (msg.type === 'error') {
        setStatus(`Error: ${msg.message}`);
      }
    });

    ws.onopen = async () => {
      const { base64, mime } = await fileToBase64(file);
      ws.send(JSON.stringify({
        device_meta: { platform },
        user_id: userId,
        image_base64: base64,
        image_mime: mime,
      }));
    };
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-xl font-semibold mb-4 text-brand-500">Analyze Scene</h2>

        <div className="flex flex-wrap gap-4 mb-4">
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="input"
          >
            <option value="ios">iOS</option>
            <option value="android">Android</option>
            <option value="web">Web</option>
          </select>

          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="User ID"
            className="input"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="input"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={handleAnalyze}
            disabled={!file || loading}
            className="btn-primary disabled:opacity-50"
          >
            Analyze
          </button>
          <button
            onClick={handleStreamAnalyze}
            disabled={!file || loading}
            className="btn-secondary disabled:opacity-50"
          >
            Analyze (Stream)
          </button>
          <button
            onClick={handleGPTBrain}
            disabled={!scene || !file || loading}
            className="btn-accent disabled:opacity-50"
          >
            Process with GPT (Brain Scores)
          </button>
        </div>

        {preview && (
          <div className="mb-4">
            <img
              src={preview}
              alt="Preview"
              className="max-h-32 rounded-lg border border-dark-800 shadow-lg"
            />
          </div>
        )}

        {status && (
          <div className="text-sm text-dark-100 mb-4 font-mono bg-dark-900/50 p-2 rounded">
            {status}
          </div>
        )}

        {scene && (
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2 text-accent-teal">Scene JSON</h3>
            <pre className="text-xs bg-dark-900 border border-dark-800 rounded p-3 overflow-auto max-h-40">
              {JSON.stringify(scene, null, 2)}
            </pre>
          </div>
        )}

        {mapping && (
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2 text-accent-teal">Mapping</h3>
            <pre className="text-xs bg-dark-900 border border-dark-800 rounded p-3 overflow-auto max-h-40">
              {JSON.stringify(mapping, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {Object.keys(brainScores).length > 0 && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-6 text-brand-500">Brain Analysis Results</h2>

          {/* Brain Visualizations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* 2D Brain Map */}
            <div>
              <h3 className="text-sm font-medium mb-3 text-accent-pink">2D Brain Map</h3>
              <BrainMap scores={brainScores} />
            </div>

            {/* 3D Brain Model */}
            <div>
              <h3 className="text-sm font-medium mb-3 text-accent-pink">3D Brain Model</h3>
              <Brain3D brainData={brainScores} className="h-64" />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2 text-accent-pink">Brain Scores Data</h3>
            <pre className="text-xs bg-dark-900 border border-dark-800 rounded p-3 overflow-auto max-h-40">
              {JSON.stringify(brainScores, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
