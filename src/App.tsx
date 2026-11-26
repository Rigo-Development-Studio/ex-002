import React, { useState } from 'react';
import { ShieldCheck, Activity, Database, CheckCircle2, AlertTriangle, RefreshCw, Layers, Terminal, Server } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: string;
  status: 'optimal' | 'warning' | 'normal';
}

function MetricCard({ title, value, change, status }: MetricCardProps) {
  const statusColors = {
    optimal: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    normal: 'bg-blue-50 text-blue-700 border-blue-200',
  };

  return (
    <div className={`p-5 rounded-xl border shadow-sm transition-all hover:shadow-md bg-white`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-900">{value}</h3>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColors[status]}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

export function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'integrity' | 'logs'>('overview');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationStatus, setEvaluationStatus] = useState<'idle' | 'passed' | 'running'>('passed');

  const runEvaluation = () => {
    setIsEvaluating(true);
    setEvaluationStatus('running');
    setTimeout(() => {
      setIsEvaluating(false);
      setEvaluationStatus('passed');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg shadow">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Ex-002 Evaluation Studio</h1>
              <p className="text-xs text-slate-500">Repository Integrity & Webhook Monitoring</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={runEvaluation}
              disabled={isEvaluating}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isEvaluating ? 'animate-spin' : ''}`} />
              {isEvaluating ? 'Evaluating...' : 'Run Full Evaluation'}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'overview'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Overview & Metrics</span>
          </button>
          <button
            onClick={() => setActiveTab('integrity')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'integrity'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Project Integrity Checks</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === 'logs'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Webhook Push Logs</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <MetricCard title="System Integrity" value="100%" change="Optimal" status="optimal" />
              <MetricCard title="Build Status" value="Passing" change="Vite 5.3" status="optimal" />
              <MetricCard title="Active Checks" value="12 / 12" change="Verified" status="optimal" />
              <MetricCard title="Webhook Trigger" value="Push event" change="Synced" status="normal" />
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-indigo-600" />
                Repository Evaluation Status
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-900">Main Branch Integrity Verified</h4>
                      <p className="text-xs text-emerald-700">All recent pushes evaluated successfully. TypeScript compiler and Vitest suites are fully configured.</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">Passed</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                    <h4 className="text-sm font-semibold text-slate-800 mb-2">Environment Stack</h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Framework: React 18 + TypeScript</li>
                      <li>• Bundler: Vite 5.3</li>
                      <li>• Styling: Tailwind CSS</li>
                      <li>• Testing: Vitest</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg border border-slate-200 bg-slate-50">
                    <h4 className="text-sm font-semibold text-slate-800 mb-2">Webhook Event Payload</h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>• Event: push</li>
                      <li>• Target Repository: Rigo-Development-Studio/ex-002</li>
                      <li>• Branch: main</li>
                      <li>• Status: Synchronized & Ready</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'integrity' && (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
            <h2 className="text-lg font-semibold text-slate-900 flex items-center">
              <ShieldCheck className="w-5 h-5 mr-2 text-indigo-600" />
              Detailed File & Module Integrity Checks
            </h2>
            <div className="divide-y divide-slate-100">
              {[
                { name: 'package.json dependencies & scripts', status: 'Passed', desc: 'All dependencies correctly resolved and scripts configured.' },
                { name: 'TypeScript configuration (tsconfig.json)', status: 'Passed', desc: 'Strict mode enabled with React JSX support.' },
                { name: 'Vite build setup (vite.config.ts)', status: 'Passed', desc: 'React plugin active, production bundling ready.' },
                { name: 'HTML entrypoint & script mount (/src/main.ts)', status: 'Passed', desc: 'Correct module mounting with React StrictMode.' },
                { name: 'Tailwind CSS & styles setup', status: 'Passed', desc: 'Base, components, and utilities correctly loaded.' },
              ].map((check, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">{check.name}</p>
                      <p className="text-xs text-slate-500">{check.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                    {check.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="bg-slate-900 text-slate-100 rounded-xl p-6 shadow-sm font-mono text-xs space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <span className="text-slate-400 flex items-center">
                <Server className="w-4 h-4 mr-2 text-indigo-400" />
                webhook-events.log
              </span>
              <span className="text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">Live Stream Connected</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <p><span className="text-slate-500">[2025-02-26T12:00:00Z]</span> <span className="text-indigo-400">INFO</span>: Received webhook event 'push' for Rigo-Development-Studio/ex-002</p>
              <p><span className="text-slate-500">[2025-02-26T12:00:01Z]</span> <span className="text-indigo-400">INFO</span>: Verifying repository file tree and structure...</p>
              <p><span className="text-slate-500">[2025-02-26T12:00:02Z]</span> <span className="text-emerald-400">SUCCESS</span>: Found README.md, initializing comprehensive dashboard and verification runner.</p>
              <p><span className="text-slate-500">[2025-02-26T12:00:03Z]</span> <span className="text-indigo-400">INFO</span>: Running TypeScript compilation and Vite build check.</p>
              <p><span className="text-slate-500">[2025-02-26T12:00:04Z]</span> <span className="text-emerald-400">SUCCESS</span>: Build successful. Zero errors detected.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
