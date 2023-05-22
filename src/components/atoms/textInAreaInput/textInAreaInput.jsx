import React from 'react'

const TextAreaInput = ({ labelText, placeholderText, handleInput, value }) =>
  <div className='row-contact-us-label'>
    <label className='contact-us-label'>
      {labelText}
    </label>
    <textarea value={value} onChange={(e) => handleInput(e.target.value)} className='contact-us-text-area' placeholder={placeholderText} />
  </div>

export default TextAreaInput