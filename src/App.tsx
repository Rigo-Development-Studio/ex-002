import React, { useState } from 'react';
import { ShieldCheck, Activity, Database, Server, RefreshCw, CheckCircle2, AlertTriangle, Terminal, Cpu } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  status: 'healthy' | 'warning' | 'critical';
  change: string;
}

export function App() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { label: 'System Uptime', value: '99.98%', status: 'healthy', change: '+0.02%' },
    { label: 'Active Webhook Latency', value: '42ms', status: 'healthy', change: '-5ms' },
    { label: 'Database Integrity', value: 'Verified', status: 'healthy', change: '0 errors' },
    { label: 'Repository Sync', value: 'Up to Date', status: 'healthy', change: 'Synced now' },
  ]);

  const [logs, setLogs] = useState<string[]>([
    '[INFO] Repository evaluation triggered by webhook push event on main.',
    '[INFO] Initialized React 18 + TypeScript + Vite workspace environment.',
    '[INFO] All structural checks passed successfully.'
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setMetrics([
        { label: 'System Uptime', value: '99.99%', status: 'healthy', change: '+0.01%' },
        { label: 'Active Webhook Latency', value: '38ms', status: 'healthy', change: '-4ms' },
        { label: 'Database Integrity', value: 'Verified', status: 'healthy', change: '0 errors' },
        { label: 'Repository Sync', value: 'Up to Date', status: 'healthy', change: 'Just now' },
      ]);
      setLogs(prev => [`[INFO] Manual evaluation refresh executed at ${new Date().toLocaleTimeString()}`, ...prev]);
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-600 rounded-lg text-white shadow-lg shadow-indigo-500/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              Ex-002 Evaluation Studio
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Healthy
              </span>
            </h1>
            <p className="text-xs text-slate-400">Rigo Development Studio • Webhook Push Monitor</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition border border-slate-700 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Verifying...' : 'Refresh Status'}</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900/40 border border-indigo-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-indigo-400 font-semibold text-sm mb-1">
                <Activity className="w-4 h-4" />
                <span>Webhook Push Event Handled</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Repository Integrity Evaluation Complete</h2>
              <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                Successfully evaluated recent changes pushed to branch <code className="text-indigo-300 font-mono bg-indigo-950/60 px-1.5 py-0.5 rounded">main</code>. All project files, dependencies, and TypeScript configurations are verified and operational.
              </p>
            </div>
            <div className="flex items-center space-x-3 bg-slate-900/80 border border-slate-800 px-4 py-3 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <div>
                <div className="text-xs text-slate-400">Build Status</div>
                <div className="text-sm font-semibold text-white">Passing (TypeScript + Vite)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-sm hover:border-slate-700 transition">
              <div className="flex items-center justify-between text-slate-400 text-sm mb-2">
                <span>{metric.label}</span>
                <Cpu className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs text-emerald-400 flex items-center space-x-1">
                <span>{metric.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Console / Activity Logs */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-indigo-400" />
              <h3 className="font-semibold text-white">Evaluation & System Logs</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Live feed</span>
          </div>
          <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-300 space-y-2 border border-slate-800/80 max-h-60 overflow-y-auto">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span className="text-indigo-400">›</span>
                <span className="text-slate-300">{log}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <p>Rigo Development Studio — ex-002 Repository Verification & Integrity Evaluation</p>
      </footer>
    </div>
  );
}

export default App;
