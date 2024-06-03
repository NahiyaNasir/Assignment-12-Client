import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routs/Routs'
import {
  
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider

} from '@tanstack/react-query'

const queryClient = new QueryClient()
import AuthProvider from './Components/AuthProvider/AuthProbider';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<QueryClientProvider client={queryClient} >
<AuthProvider>
<RouterProvider router={router} />
<ToastContainer></ToastContainer>
</AuthProvider>
</QueryClientProvider>
  </React.StrictMode>,
)
