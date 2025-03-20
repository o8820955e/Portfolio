import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Add hover effect that follows cursor
document.addEventListener('DOMContentLoaded', () => {
  const handleMouseMove = (e: MouseEvent) => {
    document.querySelectorAll('.hover-glow').forEach((el) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (
        x >= 0 && 
        y >= 0 && 
        x <= rect.width && 
        y <= rect.height
      ) {
        const percentX = Math.round((x / rect.width) * 100);
        const percentY = Math.round((y / rect.height) * 100);
        
        el.setAttribute('style', `--x: ${percentX}%; --y: ${percentY}%`);
      }
    });
  };

  document.addEventListener('mousemove', handleMouseMove);
});
