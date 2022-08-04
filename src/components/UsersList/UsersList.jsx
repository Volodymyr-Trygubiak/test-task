import React from 'react'
import { useEffect } from 'react'
import { getUsers } from '../../api/auth.service'
import { useStateContext } from '../../context'
import UserCard from '../UserCard/UserCard'
import Button from '../shared/Button/Button'

import './users-list.scss'

const GegList = () => {
  const { state, dispatch } = useStateContext()

  useEffect(() => {
    getUsers().then(res => {

      console.log(res.users);
      dispatch({type: 'SET_USERS', payload: res.users});
    });
  }, [dispatch])

  return (
    <section id='users'>
      <div className='container'>
        <h2>Working with GET request</h2>
        <div className="user-list">
          {state.users.map((user) =>
            <UserCard key={user.id}
              photo={user.photo}
              name={user.name}
              position={user.position}
              email={user.email}
              phone={user.phone}
            />
          )}
        </div>
        <Button>Show more</Button>
      </div>
    </section>
  )
}

export default GegList
