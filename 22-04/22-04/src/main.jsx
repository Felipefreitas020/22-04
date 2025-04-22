import { StrictMode } from "react";
import {createroot} from 'react-dom/client'
import App from './App.jsx'

  createroot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
