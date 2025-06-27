import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/index.tsx'
import { ThemeProvider } from './provider/ThemeProvider.tsx'
import { Provider } from 'react-redux'
import store from './redux/store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <RouterProvider router={router} >
    </RouterProvider>
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
