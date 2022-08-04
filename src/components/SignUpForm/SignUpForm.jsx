import React, { useState, useEffect } from 'react'
import { getPosition } from '../../api/auth.service'
import RadioButton from '../shared/RadioButton/RadioButton'
import Button from '../shared/Button/Button'
import Input, { FileInput } from '../shared/Input/Input'

import './sign-up-form.scss'

const SignUpForm = () => {
  const [raidoButtons, setRadioButtons] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position_id: 0,
    photo: ''
  })


  useEffect(() => {
    getPosition().then(res => setRadioButtons(res.positions))
  }, [])

  const addName = (e) => {
    setFormData({
      ...formData,
      name: e.target.value
    })
  }
  const addEmail = (e) => {
    setFormData({
      ...formData,
      email: e.target.value
    })
  }

  const addNumber = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value
    })
  }




  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      position_id: 0,
      photo: ''
    })
  }


  return (
    <section id='form'>
      <h2 className='form-title'>Working with POST request</h2>

      <form onSubmit={handleSubmit}>

        <Input
          id='name'
          placeholder='Your name'
          type='text'
          value={formData.name}
          onChange={addName} />

        <Input
          id='email'
          placeholder='Email'
          type='email'
          value={formData.email}
          onChange={addEmail} />

        <Input
          id='number'
          placeholder='Phone'
          type='tel'
          value={formData.phone}
          onChange={addNumber} />


        <div className='radio-buttons'>
          <p className='position-select'>Select your position</p>
          {
            raidoButtons.map(({ id, name }) =>
              <RadioButton
                key={id}
                // value={id}
                checked={formData.position_id === id}
                name='position'
                onChange={() => setFormData({ ...formData, position_id: id })}
              >
                {name}
              </RadioButton >
            )
          }
        </div>
        <FileInput value={formData.photo.name} onChange={e => setFormData({ ...formData, photo: e.target.files[0] })}>Upload</FileInput>

        <Button type='submit'>Sign up</Button>
      </form>
    </section>
  )
}

export default SignUpForm
