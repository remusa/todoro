import React from 'react'

interface CardProps {
  text: string
}

const Card = ({ text }: React.PropsWithChildren<CardProps>) => {
  return (
    <div className='w-full mb-2 py-2 px-4 bg-gray-100 rounded-sm shadow-md cursor-pointer'>
      {text}
    </div>
  )
}

export default Card
