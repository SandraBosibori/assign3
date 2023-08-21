import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Services from './pages/services/index.jsx'
import Assignees from './pages/assignees/index.jsx'
import Wallet from './pages/wallet/index.jsx'
import History from './pages/history/index.jsx'
import TodoApp from './pages/todoApp/index.jsx'
import Authen from './pages/authen/index.jsx'






const routes= createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/services',
    element: <Services/>
  },
  {
    path: '/assignees',
    element: <Assignees/>
  },
  {
    path: '/wallet',
    element: <Wallet/>
  },
  {
    path: '/history',
    element: <History/>
  },
  {
    path: '/todo',
    element: <TodoApp/>
  },
  {
    path: '/authen',
    element: <Authen/>
  },



  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
