import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ScrollProvider } from './context'
import '../styles/main.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>,
)
