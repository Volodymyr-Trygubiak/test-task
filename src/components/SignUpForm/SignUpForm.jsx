import React, { useState, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { getPosition } from '../../api/auth.service'



import RadioButton from '../shared/RadioButton/RadioButton'
import Button from '../shared/Button/Button'
import Input, { FileInput } from '../shared/Input/Input'

import './sign-up-form.scss'


const SignUpForm = () => {
  const [raidoButtons, setRadioButtons] = useState([]);

  const { reset, control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position_id: '',
      photo: ''
    }
  })


  useEffect(() => {
    getPosition().then(res => setRadioButtons(res.positions))
  }, [])

  const onSubmit = (data, e) => {

    console.log(data);
    reset()
    e.target.reset()
  }
  return (
    <section id='form'>
      <h2 className='form-title'>Working with POST request</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>

        <Controller
          name='name'
          control={control}
          rules={{
            required: "Field is required",
            minLength: {
              value: 2,
              message: 'Your name should contain 2-60 characters',
            },
            maxLength: {
              value: 60,
              message: 'Your name should contain 2-60 characters'
            }
          }}
          render={({ field: { onChange, value } }) => (

            <Input
              placeholder='Your name'
              type='text'
              value={value}
              error={errors.name}
              onChange={(e) => onChange(e.target.value.trim())}
            />
          )}
        />

        <Controller
          name='email'
          control={control}
          rules={{
            required: "Field is required",
            minLength: {
              value: 2,
              message: 'Your name should contain 2-100 characters',
            },
            maxLength: {
              value: 100,
              message: 'Your name should contain 2-100 characters'
            },
            pattern: {
              // eslint-disable-next-line no-control-regex
              value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
              message: 'Email, must be a valid'
            }
          }}
          render={({ field: { onChange, value } }) => (

            <Input
              placeholder='Email'
              type='email'
              value={value}
              error={errors.email}
              onChange={e => onChange(e.target.value)}
            />
          )}
        />
        <Controller
          name='phone'
          control={control}
          rules={{
            required: "Field is required",
            pattern: {
              value: /^[+]{0,1}380([0-9]{9})$/,
              message: 'Number should start with code of Ukraine +380'
            }
          }}
          render={({ field: { onChange, value } }) => (

            <Input
              placeholder='Phone'
              type='tel'
              value={value}
              error={errors.phone}
              onChange={e => onChange(e.target.value)}
            />
          )}
        />

        <div className='radio-buttons'>
          <p className='position-select'>Select your position</p>
          {
            raidoButtons.map(({ id, name }) =>
              <Controller
                name='position_id'
                control={control}
                key={id}
                rules={{
                  required: 'Choose your position'
                }}
                render={({ field: { onChange, value } }) => (

                  <RadioButton
                    checked={value === id}
                    onChange={() => onChange(id)}
                  >
                    {name}
                  </RadioButton >
                )}
              />
            )
          }
          {errors.position_id && <div className='radio-buttons__error'>{errors?.position_id?.message}</div>}
        </div>

        <Controller
          name='photo'
          control={control}
          rules={{
            required: "Field is required",
            validate: {
              lessThen5MB: files => files?.size < 5000000 || 'Max size 5Mb',
              acceptFormats: files =>
                ['image/jpeg', 'image/jpg'].includes(files?.type) || 'Only JPG or JPEG format',
            }
          }}
          render={({ field: { onChange, value } }) => (
            <FileInput
              value={value}
              error={errors.photo}
              onChange={e => onChange(e.target.files[0])}
            />
          )}
        />
        <Button type='submit'>Sign up</Button>
      </form>
    </section>
  )
}

export default SignUpForm
