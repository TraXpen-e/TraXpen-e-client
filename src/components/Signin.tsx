import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import tw from 'twin.macro'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

import { Input, Button, SpinButton, Checkbox } from '@components'
import { usePostRequest } from '@hooks'
import { EMAIL_REGEX } from '@constants'
import { IFormValue } from '@interfaces'
import { Anchor } from '../../styles/style'
import 'react-toastify/dist/ReactToastify.css'

export const Signin = () => {
  const router = useRouter()

  let loginSuccess = () => {
    toast.success('Login Successful', toastifyStyle as any)
  }

  let loginError = () =>
    toast.error('Invalid email or password', toastifyStyle as any)

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IFormValue>()
  const { postRequest, error, loading, data } = usePostRequest()

  const userLogin = async (postData: IFormValue) => {
    await postRequest('users/login', postData)
    const token = await data?.token

    if (error) {
      loginError()
    }

    if (token && !error) {
      document.cookie = `token=${token}`
      loginSuccess()
      router.push('/')
    }
  }
  return (
    <>
      <Form
        className='flex flex-col items-center'
        onSubmit={handleSubmit(userLogin)}
      >
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

        <FormFootnote className='flex justify-between w-64 mb-5'>
          <Checkbox name='rememberMe' label='Remember Me' />
          <Anchor href='#'>Forgot Password?</Anchor>
        </FormFootnote>
        {loading ? (
          <SpinButton text='Signing in' />
        ) : (
          <Button green={true} rounded={true} text='Sign In' />
        )}
      </Form>
      <ToastContainer />
    </>
  )
}

export const Form = tw.form`flex flex-col items-center`
const FormFootnote = tw.div`flex justify-between w-64 mb-5`

export const toastifyStyle = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
}
