import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GoogleOAuthProvider clientId='671063633619-9mljuqibgi5p150qum2nffo476ksdo56.apps.googleusercontent.com'>
     <App />
   </GoogleOAuthProvider>
  </StrictMode>
)
