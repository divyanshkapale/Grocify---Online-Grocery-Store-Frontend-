import React from "react";
import Button from "../button/button";
import fruitSet from "../../assets/fresh-fruits.png"

const Discount = () => {
  return (
    <section className=" bg-zinc-100 bg-contain bg-no-repeat bg-right" style={{backgroundImage:`url(${fruitSet})`}}>
      <div className="max-w-[1400px] mx-auto px-10 py-20 flex">
        <span className="text-9xl text-orange-500 font-bold transform -rotate-90 h-fix self-center">20%</span>
        <div className="max-w-[700px]">
          <h3 className="text-7xl text-zinc-800 font-bold ">First Order Discount!</h3>
          <p className="text-zinc-600 my-5">
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your first purchase. Fast delivery
            and quality guaranteed.
          </p>
          <Button content="Get a Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
