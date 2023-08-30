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
import OneService from './pages/oneService/index.jsx'
import Banking from './pages/banking/index.jsx'
import Calls from './pages/calls/index.jsx'
import Shopping from './pages/shopping/index.jsx'
import Delivery from './pages/delivery/index.jsx'
import Driving from './pages/driving/index.jsx'
import Writing from './pages/writing/index.jsx'
import Projects from './pages/projects.jsx'
import Auth from './auth/index.jsx'
import { AuthProvider } from './context/authContext'
import HelpPage from './pages/help/index.jsx'
import NewHome from './pages/newHome/index.jsx'
import Sajili from './pages/sajili/index.jsx'
import NewAssignee from './pages/newAssignee/index.jsx'








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
    path: '/oneService',
    element: <OneService/>
  },
  {
    path: '/login',
    element: <Auth/>
  },
  {
    path: '/banking',
    element: <Banking/>
  },
  {
    path: '/calls',
    element: <Calls/>
  },
  {
    path: '/shopping',
    element: <Shopping/>
  },
  {
    path: '/delivery',
    element: <Delivery/>
  },
  {
    path: '/driving',
    element: <Driving/>
  },
  {
    path: '/shopping',
    element: <Shopping/>
  },
  {
    path: '/writing',
    element: <Writing/>
  },
  {
    path: 'projects',
    element: <Projects/>
  },
  {
    path: 'help',
    element: <HelpPage/>
  },
  {
    path: 'newhome',
    element: <NewHome/>
  },
  {
    path: 'sajili',
    element: <Sajili/>
  },
  {
    path: 'newAssignee',
    element: <NewAssignee/>
  }





  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={routes}></RouterProvider>
     </AuthProvider>
  </React.StrictMode>,
)
