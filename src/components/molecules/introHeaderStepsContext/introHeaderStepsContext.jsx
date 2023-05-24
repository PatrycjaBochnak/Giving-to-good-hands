import React from "react";
import IntroHeaderTitle from "../../atoms/introHeaderTitle/introHeaderTitle";
import DecorationAsset from "../../atoms/decoration/decoration";
import RowSquare from "../rowSquare/rowSquare";

const IntroHeaderStepsContext = () => (
  <div className="intro-header">
    <IntroHeaderTitle />
    <DecorationAsset />
    <p className="itro-header-text">Just 4 simple steps </p>
    <RowSquare />
  </div>
);

export default IntroHeaderStepsContext;
