import React from "react";
import Heading from "../heading/heading";
import FruitCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeafoodCat from "../../assets/meat-and-seafood.png";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      <div key={card.id} className="flex-1">
        <div className="w-full min-h-[30vh] -mb-10 relative">
          <img src={card.image} className="absolute bottom-0" />
        </div>
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h2 className="text-zinc-800 text-3xl font-bold">{card.title}</h2>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
           <Link to={card.address} className='bg-gradient-to-b from-orange-400 to-orange-500  text-white px-8 py-3 rounded-lg text-lg hover:scale-105 hover:to-orange-600' href="/fruits">See All</Link>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className=" max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop " heading="By Category" />
        <div className="flex gap-10 mt-15">
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitCat,
    address:"/fruits"
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
    address:"/dairy"

  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeafoodCat,
    address:"/seafood"
  },
];
