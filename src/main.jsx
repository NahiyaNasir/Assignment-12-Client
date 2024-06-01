import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routs/Routs'
import {
  
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Components/AuthProvider/AuthProbider';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
<ToastContainer></ToastContainer>
</AuthProvider>
  </React.StrictMode>,
)
