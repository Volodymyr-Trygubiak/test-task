import React from 'react'
import './button.scss'

const Button = ({ className, onClick, children, type }) => {
  return (
    <button type={type} className={className ? `btn ${className}` : 'btn'} onClick={onClick ? () => onClick() : null} >
      {children}
    </button>
  )
}

export default Button
