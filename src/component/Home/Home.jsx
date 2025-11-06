import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/hero'
import Category from '../categeory/category'
import Values from '../values/values'
import Products from '../products/Products'
import Discount from '../discount/Discount'
import Process from '../process/process'
import Testimonials from '../Testimonials.jsx/Testimonials'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Category/>
      <Values/>
      <Products/>
      <Discount/>
      <Process/>
      <Testimonials/>
    </div>
  )
}

export default Home
