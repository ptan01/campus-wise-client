import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './leyout/Main.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './page/home/Home'
import Collage from './page/collage/Collage'
import Details from './page/details/Details'
import SearchDataProvider from './provider/searchDataProvider'
import Admission from './page/admission/Admission'
import Application from './page/appllication/Application'
import Login from './login&registerPage/Login'
import Register from './login&registerPage/Register'
import AuthProvider from './provider/AuthProvider'

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
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      },
      {
        path: '/admission/:id',
        element: <Application></Application>,
        loader: ({ params }) => fetch(`http://localhost:5000/admissions/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SearchDataProvider>
        <RouterProvider router={router}></RouterProvider>
      </SearchDataProvider>
    </AuthProvider>
  </React.StrictMode>,
)
