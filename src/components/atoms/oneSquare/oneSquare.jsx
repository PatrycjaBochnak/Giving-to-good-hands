import React from "react";

const OneSquare = ({ num, text }) => (
  <div className="one-square">
    <div className="intro-one-square"></div>
    <h4 className="number">{num}</h4>
    <p className="text-one-square">{text}</p>
  </div>
);

export default OneSquare