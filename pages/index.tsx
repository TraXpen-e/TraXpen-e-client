import Head from 'next/head'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col items justify-center min-h-screen py-2 bg-gray-100'>
      <Head>
        <title>TraXpen$e - Manage your expenses</title>
      </Head>
      <h1>Home Page</h1>
    </div>
  )
}
