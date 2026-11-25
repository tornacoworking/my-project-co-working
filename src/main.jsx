import { StrictMode, startTransition } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// Pre-rendered routes ship real HTML, so React attaches to it; any other route (or the dev server, where #root only
// holds the <!--app-html--> placeholder comment) renders from scratch.
if (container.firstElementChild) {
  // A transition makes hydration time-sliced and interruptible, so the page stays responsive while React attaches.
  startTransition(() => {
    hydrateRoot(container, app)
  })
} else {
  createRoot(container).render(app)
}
