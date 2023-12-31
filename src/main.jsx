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
import MyCollage from './page/myCollage/MyCollage'
import PrivetRoute from './privetRoute/PrivetRoute'
import PopularCollageDetails from './page/home/PopularCollageDetails'
import UserProfile from './page/userProfile/UserProfile'

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
        loader: ({ params }) => fetch(`https://campus-wise-server-ptan01.vercel.app/collage/${params.id}`)
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      },
      {
        path: '/admission/:id',
        element: <Application></Application>,
        loader: ({ params }) => fetch(`https://campus-wise-server-ptan01.vercel.app/admissions/${params.id}`)
      },
      {
        path: '/my-collage',
        element: <PrivetRoute><MyCollage></MyCollage></PrivetRoute>
      },
      {
        path: '/popularCollageDetails/:id',
        element: <PrivetRoute><PopularCollageDetails></PopularCollageDetails></PrivetRoute>,
        loader: ({params}) => fetch(`https://campus-wise-server-ptan01.vercel.app/popularCollage/${params.id}`)
      },
      {
        path: '/userProfile',
        element: <UserProfile></UserProfile>
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
