import { lazy, Suspense, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
const App = lazy(() => import('./App.tsx'));
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <App />
    </Suspense>
  </StrictMode>
);
