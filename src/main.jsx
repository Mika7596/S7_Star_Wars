import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App.jsx'
import { SWProvider } from './contexts/sw.context.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <SWProvider>
    <App />

    </SWProvider>
  //</StrictMode>,
)
