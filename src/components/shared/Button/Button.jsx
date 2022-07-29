import React from 'react'
import './button.scss'

const Button = ({ className, onClick, children }) => {
  return (
    <button className={className ? `btn ${className}` : 'btn'} onClick={onClick ? () => onClick() : null} >
      {children}
    </button>
  )
}

export default Button
