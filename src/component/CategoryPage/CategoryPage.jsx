import React from "react";
import product from "../productList/ProductList.js";
import Cards from "../cards/Cards";
import Banner from "../Banner/Banner.jsx";
const CategoryPage = ({ title,bgImg,category=[] }) => {
let filterItems=category.includes("ALL")?product:product.filter(items=>category.includes(items.category))

  const renderProduct = filterItems.map((product) => {
    return (
      <Cards image={product.image} title={product.name} price={product.price} />
    );
  });
  return (
    <div>
      <Banner title={title} bgImg={bgImg} />
      <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-1 grid-cols-4 py-20 gap-9">
        {renderProduct}
      </div>
    </div>
  );
};

export default CategoryPage;
