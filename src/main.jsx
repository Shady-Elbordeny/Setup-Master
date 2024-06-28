import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import TokenContextProvider from './Context/Token.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
<TokenContextProvider>
  <QueryClientProvider client={queryClient}>
  <App />
  <ToastContainer />

  </QueryClientProvider >

</TokenContextProvider>


)
