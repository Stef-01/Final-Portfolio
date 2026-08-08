import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import './index.css'

// Calling card for anyone who opens the console.
console.log(
    '%cStefan Thottunkal%c\nCurious how this is built? React + Motion + Tailwind.\nSay hello: stefan01@stanford.edu',
    'font: 600 16px system-ui; padding: 6px 10px; background: #000; color: #fff; border-radius: 6px;',
    'font: 12px system-ui; color: #666;',
)

const rootElement = document.getElementById('root')
if (!rootElement) {
    throw new Error("Root element #root not found in index.html")
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
        <Analytics />
    </React.StrictMode>,
)
