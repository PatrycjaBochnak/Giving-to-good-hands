import React from 'react'

const InputContactFormEmail = ({ labelText, placeholderText, type }) =>
  <div className='di-form'>
    <label className='contact-us-label'>
      {labelText}
    </label>
    <input className='contact-us-input' type={type} placeholder={placeholderText} />
  </div>

export default InputContactFormEmail