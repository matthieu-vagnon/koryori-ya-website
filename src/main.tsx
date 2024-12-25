import { SpeedInsights } from '@vercel/speed-insights/react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TitleProvider from './contexts/TitleContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TitleProvider>
      <App />
      <SpeedInsights />
    </TitleProvider>
  </React.StrictMode>
)
