import React from 'react'
import Button from '../shared/Button/Button'
import './header.scss'
import Logo from '../../assets/Logo.svg'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className='header-wrap'>
          <img src={Logo} alt="" className="logo" />
          <div className="buttons">
            <Button>Users</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
