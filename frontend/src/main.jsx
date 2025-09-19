import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './contexts/UserProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import Cookies from "js-cookie"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
  // </StrictMode>
  ,
)
