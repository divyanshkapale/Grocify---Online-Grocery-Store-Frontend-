import React from 'react'
import Heading from '../heading/heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basket from "../../assets/basket-full-vegetables.png"
const Values = () => {
    const leftValue= value.slice(0,2).map((item)=>{
        return(
            <div key={item.id} className='flex flex-row-reverse items-center gap-7'>
                <div className=' flex bg-gradient-to-b from-orange-400 to-orange-500 h-15 w-15 rounded-full justify-center items-center text-3xl text-white'>
                    <span>{item.icon}</span>
                </div>
                <div>
                    <div  className='text-right'>
                        <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                        <p className='text-zinc-600 mt-2'>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })

    const rightValue= value.slice(2).map((item)=>{
        return(
            <div key={item.id} className='flex items-center gap-7' >
                <div className=' flex bg-gradient-to-b from-orange-400 to-orange-500 h-15 w-15 rounded-full justify-center items-center text-3xl text-white'>
                    <span>{item.icon}</span>
                </div>
                <div>
                    <div>
                        <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                        <p className='text-zinc-600 mt-2'>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <section className='max-w-[1400px] mx-auto px-10 py-20'>
        <div>
        <Heading highlight="Our" heading="Value"/>
        <div className='flex gap-5 mt-15'  >
            {/* left side */}
            <div className='min-h-100 flex flex-col justify-between'>
            {leftValue}
            </div>
            <div className='w-[50%]'>
                <img src={basket}/>
            </div>
            <div className='min-h-100 flex flex-col justify-between'>
                {rightValue}
            </div>
        </div>
        </div>
    </section>
  )
}

export default Values

const value=[
    {
        id:1,
        title:"Trust",
        para:"It is a long established fact that a reader will be distracted by the readable.",
        icon:<FaHeart />
    },
    {
        id:2,
        title:"Always Fresh",
        para:"It is a long established fact that a reader will be distracted by the readable.",
        icon:<FaLeaf />
    },
    {
        id:3,
        title:"Food Safety",
        para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon:<FaShieldAlt/>
    },
    {
        id:4,
        title:"100% Organic",
        para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon:<FaSeedling />
    }
]
