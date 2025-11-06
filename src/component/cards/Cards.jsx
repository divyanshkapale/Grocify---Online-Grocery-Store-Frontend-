import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../button/button";

const Cards = ({image,title,price}) => {
  return (
    // cardIcons
    <div className="bg-zinc-100 p-5 mt-5">
      <div className="flex justify-between">
        <span className="text-3xl text-zinc-300 px-3">
          <FaHeart />
        </span>
        <button className="bg-gradient-to-b from-orange-400 to-orange-500  text-white px-4 py-3 rounded-lg text-xl mx-3">
          <FaPlus />
        </button>
      </div>
      {/* Card Image */}
        <div className="w-full h-50">
            <img className="w-full h-full object-contain" src={image}/>
        </div>
      {/* card Content */}
      <div className="text-center">
        <h3 className="text-2xl font-bold ">{title}</h3>
        <p className="text-2xl font-bold mt-4 mb-2">${price}</p>
        <Button content="Shop Now"/>
      </div>
    </div>
  );
};

export default Cards;
