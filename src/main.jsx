import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <Toaster />
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>
)
