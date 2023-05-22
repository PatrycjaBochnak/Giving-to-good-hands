/* eslint-disable react/prop-types */
import React from "react";

const InputListForm = ({ inputName, arrowRotate, listFormStepHandle }) => (
  <div onClick={(e) => listFormStepHandle(e)} className="list-form-step">
    <p className="list-form-step-title">{inputName}</p>
    {arrowRotate !== false ? (
      <div className="arrow" />
    ) : (
      <div className="arrow-rotate" />
    )}
  </div>
);

export default InputListForm;
