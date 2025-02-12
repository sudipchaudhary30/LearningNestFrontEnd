import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import App from './App';

// Create a root and render the app
const root = createRoot(document.getElementById('root'));
root.render(<App />);