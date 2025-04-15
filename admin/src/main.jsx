import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeProvider from './context/ThemeProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)

