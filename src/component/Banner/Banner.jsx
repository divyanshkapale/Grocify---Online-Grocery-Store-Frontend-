import React from 'react'

const Banner = ({title,bgImg}) => {
  return (
    <div className=' relative h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover ' style={{ backgroundImage: `url(${bgImg})`}}>
      <h2 className="text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10">{title}</h2>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner
