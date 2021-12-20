import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/router'

import { FaRegEnvelope, FaUser } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

import { Input, Button, toastifyStyle, SpinButton, Form } from '@components'
import { usePostRequest } from '@hooks'
import { EMAIL_REGEX } from '@constants'
import { IFormValue } from '@interfaces'

import 'react-toastify/dist/ReactToastify.css'

export const Signup = () => {
  const router = useRouter()
  let registerSuccess = () => {
    toast.success('Register Successful', toastifyStyle as any)
  }

  let loginError = (msg: string) => toast.error(msg, toastifyStyle as any)

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IFormValue>()

  const { postRequest, error, loading } = usePostRequest()
  console.log('error', error)
  if (error) {
    loginError(error)
  }

  const userRegister = async (postData: IFormValue) => {
    await postRequest('signup', postData)
    if (!error) {
      registerSuccess()
      router.push('/signin')
    }
  }
  return (
    <>
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
          <Button green={true} rounded={true} text='Sign Up' />
        )}
      </Form>
      <ToastContainer />
    </>
  )
}
