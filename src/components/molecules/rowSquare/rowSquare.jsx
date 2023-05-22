import React from "react";
import OneSquare from "../../atoms/oneSquare/oneSquare";

const RowSquare = () => (
  <div className="row-square">
    <OneSquare num="4" text="Order a qourier" />
    <OneSquare num="1" text="Choose clothes" />
    <OneSquare num="2" text="Put it to bag" />
    <OneSquare num="3" text="Choose foundation" />
  </div>
);

export default RowSquare;
