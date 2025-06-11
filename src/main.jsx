import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App.jsx'
import { SWProvider } from './contexts/sw.context.jsx'
import { ActorsProvider } from './contexts/actors-card.context.jsx'
import { DisplayCastProvider } from './contexts/display-actors.context.jsx'
import { MoviesProvider } from './contexts/movies.context.jsx'
import { AuthProvider } from './contexts/auth.context.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <AuthProvider>
  <MoviesProvider>
    <SWProvider>
      <DisplayCastProvider>
      <ActorsProvider>
        <App />
      </ActorsProvider>
      </DisplayCastProvider>
    </SWProvider>
    </MoviesProvider>
    </AuthProvider>
  //</StrictMode>,
)
