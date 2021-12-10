import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { FaRegEnvelope, FaUser } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

import { Input, Button, SpinButton, Form } from '@components'
import { usePostRequest } from '@hooks'
import { EMAIL_REGEX } from '@constants'
import { IFormValue } from '@interfaces'

export const Signup = () => {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IFormValue>()

  const { postRequest, error, loading } = usePostRequest()

  const userRegister = async (postData: IFormValue) => {
    await postRequest('signup', postData)
    router.push('/signin')
  }
  return (
    <Form
      className='flex flex-col items-center'
      onSubmit={handleSubmit(userRegister)}
    >
      <Input
        tag={<FaUser className='text-gray-400 m-2' />}
        type='text'
        placeholder='Username'
        {...register('username', { required: 'Username is required' })}
        error={errors.username?.message}
      />
      <Input
        tag={<FaRegEnvelope className='text-gray-400 m-2' />}
        type='email'
        placeholder='Email'
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Please enter a valid email'
          }
        })}
        error={errors.email?.message}
      />

      <Input
        tag={<MdLockOutline className='text-gray-400 m-2' />}
        type='password'
        placeholder='Password'
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
          }
        })}
        error={errors.password?.message}
      />

      {loading ? (
        <SpinButton text='Loading' />
      ) : (
        <Button green={true} rounded={true} text='Sign In' />
      )}
    </Form>
  )
}
