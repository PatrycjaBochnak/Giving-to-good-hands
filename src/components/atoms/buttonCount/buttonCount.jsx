/* eslint-disable react/prop-types */
import React from "react";

const ButtonCount = ({ el, hiddenListFormStepHandle }) => (
  <button
    value={el}
    onClick={(e) => hiddenListFormStepHandle(e)}
    className="list-button"
    key={el}
  >
    {el}
  </button>
);
export default ButtonCount;
