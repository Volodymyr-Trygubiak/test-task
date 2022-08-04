import React from 'react'
import './user-card.scss'

const UserCard = ({ photo, name, position, email, phone }) => {

  const shortString = (str) => {
    if (str.length > 35) return `${str.slice(0,28)}...`
    return str
  }

  return (
    <div className='user-card'>
      <img src={photo} alt={name} className="user-image" />
      <p className='user-name'>{name}</p>
      <p className='user-position'>{position}</p>
      <p className='user-email'>{shortString(email)}</p>
      <p className='user-phone'>{phone}</p>
    </div>
  )
}

export default UserCard
