import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Local fonts: Cinzel (weights 400, 600, 700)
import '@fontsource/cinzel/400.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/700.css';

// Local fonts: Plus Jakarta Sans (weights 300, 400, 500, 600, 700)
import '@fontsource/plus-jakarta-sans/300.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';

import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
