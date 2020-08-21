import React from 'react'

interface Props {
  text: string
}

const Card = ({ text }: React.PropsWithChildren<Props>) => {
  return (
    <div className='w-full mb-2 py-2 px-4 bg-gray-100 rounded-sm shadow-md cursor-pointer'>
      {text}
    </div>
  )
}

export default Card
