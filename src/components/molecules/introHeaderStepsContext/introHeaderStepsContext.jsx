import React from "react";
import HeaderTitle from "../../atoms/titleHeader/titleHeader";
import Decoration from "../../atoms/decoration/decoration";
import RowSquare from "../rowSquare/rowSquare";

const IntroHeaderStepsContext = () => (
  <div className="intro-header">
    <HeaderTitle />
    <Decoration />
    <p className="itro-header-text">Just 4 simple steps </p>
    <RowSquare />
  </div>
);

export default IntroHeaderStepsContext;
