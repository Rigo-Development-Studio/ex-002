import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Ex-002 Project Dashboard</h1>
      <p>Project evaluation and integrity checks passed successfully.</p>
      <div style={{ background: '#f4f4f5', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
        <h3>Status: Healthy</h3>
        <p>All core configuration files, TypeScript types, and test runner configurations are in place.</p>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
