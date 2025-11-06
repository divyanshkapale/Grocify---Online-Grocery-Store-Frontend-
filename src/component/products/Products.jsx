import React, { useState } from "react";
import Heading from "../heading/heading";
import products from "../productList/ProductList";
import Cards from "../cards/Cards";
import { Link } from "react-router-dom";
const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [ActiveTab, setActiveTab] = useState("All");
  let filteredItem=ActiveTab==="All"?products:products.filter((items)=>{
     return items.category===ActiveTab
  })

  const renderCards = filteredItem.slice(0, 8).map((product,index) => {
    return (
      <Cards key={index}
        image={product.image}
        title={product.name}
        price={product.price.toFixed(2)}
      />
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div>
          <Heading highlight="Our" heading="Product" />
        </div>
        {/* tabs */}
        <div className="flex gap-3 justify-center mt-10 ">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-5 py-2 text-lg cursor-pointer ${
                  ActiveTab === category
                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                    : "bg-zinc-100"
                } rounded-lg`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        {/* product Listing */}
        <div className="grid grid-cols-4 gap-9">{renderCards}</div>
        {/* button */}
        <div className="mt-15 mx-auto w-fit">
          <Link className='bg-gradient-to-b from-orange-400 to-orange-500  text-white px-8 py-3 rounded-lg text-lg hover:scale-105 hover:to-orange-600 mx-auto w-fix' to="/allProduct">View All</Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
