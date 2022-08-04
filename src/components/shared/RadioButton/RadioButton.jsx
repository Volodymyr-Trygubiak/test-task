import React from 'react'
import './radio-button.scss'

const RadioButton = ({ checked, name, onChange, children }) => {
  return (
    <label className='custom'>
      <input type="radio"
        name={name}
        checked={checked}
        onChange={onChange} />
      {children}
    </label>
  )
}

export default RadioButton
