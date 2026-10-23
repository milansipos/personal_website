import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import './index.css'
import Impressum from './pages/Impressum.tsx'
import Privacy from './pages/Privacy.tsx'

// shared entry for /impressum/ and /datenschutz/, the page is picked via <body data-page>
const page = document.body.dataset.page === 'impressum' ? <Impressum /> : <Privacy />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {page}
  </StrictMode>,
)
