import React from 'react'

export const RoundButton = (props: any) => {
  const { children, className } = props
  return (
    <button
      className={`${className} border-2 rounded-full px-12 py-2 inline-block font-semibold`}
    >
      {children}
    </button>
  )
}
