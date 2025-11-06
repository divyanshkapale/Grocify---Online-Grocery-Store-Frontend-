import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage.jsx'
import bgSeaFood from "../../assets/seafood-banner.jpg"
const Seafood = () => {
  return (
    <div>
        <CategoryPage title="Meat & SeaFood" bgImg={bgSeaFood} category={['SeaFood',"Meat"]}/>
    </div>
  )
}

export default Seafood
