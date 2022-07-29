import React from 'react'
import Button from '../shared/Button/Button'

import './main.scss'

const Main = () => {
  return (
    <main>
      <div className='main-wrap'>
        <h1>Test assignment for front-end developer</h1>
        <p className='main-text'>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
        <Button>Sign Up</Button>
      </div>
    </main>
  )
}

export default Main
