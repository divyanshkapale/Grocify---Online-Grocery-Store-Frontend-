import React from "react";
import Heading from "../heading/heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />,
  },
];

const Process = () => {
  const renderSteps = steps.map((item) => {
    return (
      <div
        key={item.id}
        className={`flex-1 ${item.id % 2 === 0 ? "-mt-100" : null}`}
      >
        <span className=" flex items-center content-center w-18 h-18 text-8xl text-white rounded-full  bg-zinc-800 outline-[3px] outline-offset-5 outline-zinc-800 outline-dashed mx-auto">
          {item.number}
        </span>
        <div className="flex items-center justify-center gap-x-5">
          <span className="flex w-15 h-15 text-3xl  justify-center items-center rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-white mt-10">
            {item.icon}
          </span>
          <div className="mt-10 flex-1">
            <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
            <p>{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] px-10 py-20 mx-auto">
        <div className="mr-auto w-fit">
          <Heading highlight="Our" heading="Process" />
        </div>
        <div className="flex items-center justify-center mt-20 pt-50">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;
