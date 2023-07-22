import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './leyout/Main.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './page/home/Home'
import Collage from './page/collage/Collage'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/collage',
        element: <Collage></Collage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
