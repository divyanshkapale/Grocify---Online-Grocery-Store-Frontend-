import React from "react";

const Heading = (props) => {
  return (
    <div>
      <div className="w-fit mx-auto">
        <h2 className="text-5xl font-bold">
          <span className="text-orange-500">{props.highlight}</span>{" "}
          {props.heading}
        </h2>
        <div className="w-36 h-1 bg-orange-300 mt-5 ml-auto"></div>
      </div>
    </div>
  );
};

export default Heading;
