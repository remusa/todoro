import React from 'react'

interface CardProps {
  text: string
  index: number
}

const Card = ({ text }: CardProps) => {
  return (
    <div className='w-full mb-2 py-2 px-4 bg-gray-100 rounded-sm shadow-md cursor-pointer'>
      {text}
    </div>
  )
}

export default Card
