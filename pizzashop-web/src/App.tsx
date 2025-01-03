import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/themes/theme-provider'

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme='system' storageKey='pizzashop-theme'>
        <Helmet titleTemplate='%s | pizza.shop' />
        <Toaster closeButton richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
