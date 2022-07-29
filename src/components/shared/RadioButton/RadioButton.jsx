import React from 'react'
import './radio-button.scss'

const RadioButton = ({value, name, children}) => {
  return (
    <label className='custom'>
      <input type="radio" value={value} name={name} />
      {children}
    </label>
  )
}

export default RadioButton
