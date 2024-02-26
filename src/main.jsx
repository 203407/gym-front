import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Home from './pages/Home.jsx'

import {Provider} from 'react-redux'
import {store} from './components/auth/store.js'
import Profile from './pages/Profile.jsx'
import Calorias from './pages/Calorias.jsx'
import Rutinas from './pages/Rutinas.jsx'
import Culturistas  from './pages/Culturistas.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/calorias",
    element:<Calorias/>
  },
  {
    path:"/culturistas",
    element:<Culturistas/>
  },{
    path:"/rutinas",
    element:<Rutinas/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  

    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>


  </React.StrictMode>,
)
