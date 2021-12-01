import React from 'react'
import Head from 'next/head'
import { FaFacebook, FaGoogle, FaApple, FaRegEnvelope } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

import { Input, RoundButton } from '@components'

const signin = () => {
  return (
    <div className='flex flex-col items justify-center min-h-screen py-2 bg-gray-100'>
      <Head>
        <title>Sign In - TraXpen$e</title>
      </Head>
      <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          <div className='w-3/4 p-5'>
            <div className='text-left font-bold'>
              Tra<span className='text-green-500'>Xpen$</span>e
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-500 mb-2'>
                Sign In
              </h2>
              <div className='border-2 w-10 border-green-500 inline-block mb-2' />
              <div className='flex justify-center my-2'>
                <a
                  href='#'
                  className='border-2 border-gray-200 rounded-full p-3 mx-1 focus:border-green-500'
                >
                  <FaFacebook className='text-sm' />
                </a>
                <a
                  href='#'
                  className='border-2 border-gray-200 rounded-full p-3 mx-1 focus:border-green-500'
                >
                  <FaGoogle className='text-sm' />
                </a>
                <a
                  href='#'
                  className='border-2 border-gray-200 rounded-full p-3 mx-1 focus:border-green-500'
                >
                  <FaApple className='text-sm' />
                </a>
              </div>
              <p className='text-gray-400 my-3'>
                or use your email or password
              </p>
              <div className='flex flex-col items-center'>
                <Input
                  tag={<FaRegEnvelope className='text-gray-400 m-2' />}
                  type='email'
                  placeholder='Email'
                  name='email'
                />
                <Input
                  tag={<MdLockOutline className='text-gray-400 m-2' />}
                  type='password'
                  placeholder='Password'
                  name='password'
                />

                <div className='flex justify-between w-64 mb-5'>
                  <label className='flex items-center text-xs'>
                    <input type='checkbox' name='rememberMe' className='mr-1' />
                    Remember Me
                  </label>
                  <a href='#' className='text-xs'>
                    Forgot Password?
                  </a>
                </div>
                <RoundButton
                  color='white'
                  className='border-green-500 text-green-500  hover:bg-green-500 hover:text-white'
                >
                  Sign Up
                </RoundButton>
              </div>
            </div>
          </div>
          <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-bold mb-2'>Lorem, ipsum.</h2>
            <div className='border-2 w-10 border-white inline-block mb-2' />
            <p className='mb-10'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas, aliquam.
            </p>

            <RoundButton
              color='white'
              className='border-white text-white  hover:bg-white hover:text-gray-500'
            >
              Sign Up
            </RoundButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signin
