import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

export const Icons = (props: any) => {
  return (
    <IconDiv {...props}>
      {props.icons.map((Icon: any) => {
        return (
          <IconBorder href='#'>
            <Icon className='text-sm' />
          </IconBorder>
        )
      })}
    </IconDiv>
  )
}

interface IconProps {
  center?: boolean
}

const IconDiv = styled.div(({ center }: IconProps) => [
  center && tw`justify-center`,

  tw`flex  my-2`
])

const IconBorder = tw.a`border-2 border-gray-200 rounded-full p-3 mx-1 focus:border-green-500`
