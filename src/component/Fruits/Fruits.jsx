import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgFruits from "../../assets/fruits-banner.jpg"
const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" bgImg={bgFruits} category={["Fruits","Vegetables"]}/>
    </div>
  )
}

export default Fruits
