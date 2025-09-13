import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AnalyzeSection from './components/AnalyzeSection';
import AggregateSection from './components/AggregateSection';
import Navigation from './components/Navigation';
import type { SceneJSON } from './types/api';

function App() {
  const [currentScene, setCurrentScene] = useState<SceneJSON | null>(null);
  const [, setGlobalBrainScores] = useState<Record<string, number>>({});

  return (
    <Router>
      <div className="min-h-screen">
        {/* Header */}
        <header className="bg-gradient-to-r from-dark-900/90 to-dark-850/90 backdrop-blur-md border-b border-dark-800 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-500 to-accent-teal bg-clip-text text-transparent">
                  CortexCam v0.1
                </h1>
                <p className="text-dark-100 text-sm">Wellness insights from scenes</p>
              </div>
              <a
                href="/docs"
                target="_blank"
                className="text-brand-500 hover:text-brand-400 transition-colors text-sm"
              >
                API Docs →
              </a>
            </div>

            {/* Navigation */}
            <Navigation />
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analyze" element={
              <AnalyzeSection
                onSceneAnalyzed={setCurrentScene}
                onBrainScores={setGlobalBrainScores}
              />
            } />
            <Route path="/aggregate" element={
              <AggregateSection
                onAggregateScores={setGlobalBrainScores}
              />
            } />
          </Routes>

          {/* Current Scene Info - Show on analyze page */}
          {currentScene && window.location.pathname === '/analyze' && (
            <div className="card mt-8">
              <h2 className="text-xl font-semibold mb-4 text-brand-500">Current Scene</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-accent-teal font-medium">Caption</div>
                  <div className="text-dark-100">{currentScene.caption}</div>
                </div>
                <div>
                  <div className="text-accent-teal font-medium">Platform</div>
                  <div className="text-dark-100">{currentScene.device.platform}</div>
                </div>
                <div>
                  <div className="text-accent-teal font-medium">Timestamp</div>
                  <div className="text-dark-100">{new Date(currentScene.ts).toLocaleString()}</div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-dark-900/90 to-dark-850/90 border-t border-dark-800 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-dark-100">
            <p>This prototype is for internal exploration. Ensure privacy-preserving defaults and avoid clinical framing.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
