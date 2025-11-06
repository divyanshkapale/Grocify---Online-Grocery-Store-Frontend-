import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import All from "../../assets/all-banner.jpg"
const AllProduct = () => {
  return (
    <div>
    <CategoryPage title="All Product" bgImg={All} category={["ALL"]}/>
    </div>
  )
}

export default AllProduct
