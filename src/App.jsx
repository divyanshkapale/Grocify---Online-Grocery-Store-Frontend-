import React from 'react'
import Home from './component/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './component/Fruits/Fruits'
import Dairy from './component/Dairy/Dairy'
import Seafood from './component/Seafood.jsx/Seafood'
import AllProduct from './component/AllProduct/AllProduct'
import Navbar from './component/Navbar/Navbar'
import Layout from './component/Layout/Layout'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
      path:"/",
      element:<Home/>
    },
    {
      path:"/fruits",
      element:<Fruits/>
    },
    {
      path:"/dairy",
      element:<Dairy/>
    },
    {
      path:"/seafood",
      element:<Seafood/>
    }
    ,
    {
     path:'/allProduct',
     element:<AllProduct/> 
    }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
