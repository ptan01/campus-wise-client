import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './leyout/Main.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './page/home/Home'
import Collage from './page/collage/Collage'
import Details from './page/details/Details'
import SearchDataProvider from './provider/searchDataProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/collage',
        element: <Collage></Collage>
      },
      {
        path: '/collage/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/collage/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchDataProvider>
      <RouterProvider router={router}></RouterProvider>
    </SearchDataProvider>
  </React.StrictMode>,
)
