import React from "react";
import grocery from "../../assets/grocery.png";
import Button from "../button/button";

const Hero = () => {
  return (
    <section className=" min-h-screen max-w-[1400px] mx-auto px-10 flex items-center pt-25">
      {/* hero Content */}
      <div className="flex-1">
        <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full">
          Export Best Quality...
        </span>
        <h1 className="text-7xl/20 font-bold tracking-wider mt-4">
          Tasty Organic <span className="text-orange-500">Fruits</span> &
          <span className="text-orange-500"> Veggies</span> In Your City
        </h1>
        <p className="text-lg text-zinc-500 mt-5 mb-10 max-w-[530px]">
          Bred for a high content of beneficial substances. Our products are all fresh and healthy.
        </p>
        <Button content="Shop Now"/>
      </div>
      {/* hero Image */}
      <div className="flex-1">
        <img src={grocery} alt="" />
      </div>
    </section>
  );
};

export default Hero;
