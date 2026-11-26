import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Ex-002 Evaluation Studio
        </h1>
        <p className="text-gray-300 mb-6">
          Project files and integrity verified. React + TypeScript + Vite environment is fully functional and ready for development.
        </p>
        <div className="flex items-center justify-between bg-gray-900 p-4 rounded-lg mb-6 border border-gray-700">
          <span className="text-gray-400">Counter Value:</span>
          <span className="text-2xl font-mono font-bold text-blue-400">{count}</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setCount(c => c + 1)}
            className="flex-1 bg-blue-600 hover:bg-blue-500 transition-colors py-2 px-4 rounded-lg font-medium shadow"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg font-medium"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
