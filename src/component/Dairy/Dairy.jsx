import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgDairy from "../../assets/dairy-banner.jpg"
const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Dairy & Egg" bgImg={bgDairy} category={["Dairy"]}/>
    </div>
  )
}

export default Dairy
