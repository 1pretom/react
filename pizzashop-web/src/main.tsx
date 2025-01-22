import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { enableMSW } from './api/mocks'
import { App } from './App'

enableMSW().then(() => {
  ReactDom.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
