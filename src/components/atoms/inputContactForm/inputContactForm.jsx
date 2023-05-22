import React from "react";

const InputContactForm = ({
  labelText,
  placeholderText,
  type,
  handleInput,
  value,
}) => (
  <div className="div-form">
    <label className="div-form-label">{labelText}</label>
    <input
      value={value}
      onChange={(e) => handleInput(e.target.value)}
      className="contact-us-input"
      type={type}
      placeholder={placeholderText}
    />
  </div>
);

export default InputContactForm;
