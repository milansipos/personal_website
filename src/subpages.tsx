import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import './index.css'
import Impressum from './pages/Impressum.tsx'
import Privacy from './pages/Privacy.tsx'
import NotFound from './pages/NotFound.tsx'

// shared entry for the impressum, datenschutz and 404 pages, picked via <body data-page>
const pages = { impressum: <Impressum />, datenschutz: <Privacy />, '404': <NotFound /> }
const page = pages[document.body.dataset.page as keyof typeof pages] ?? <NotFound />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {page}
  </StrictMode>,
)
