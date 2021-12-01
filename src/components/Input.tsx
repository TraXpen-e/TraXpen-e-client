import React from 'react'

export const Input = (props: any) => {
  const { className, type, name, placeholder, tag } = props
  return (
    <div className='bg-gray-100 w-64 p-2 flex mb-3'>
      {tag && tag}
      <input
        className={`bg-gray-100 outline-none text-sm flex-1 ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}
