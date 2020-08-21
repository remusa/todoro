import React from 'react'

interface Props {
  text: string
}

const Column = ({ text, children }: React.PropsWithChildren<Props>) => {
  return (
    <div className='flex-grow-0 w-64 w-96 mr-6 p-2 bg-gray-300 rounded shadow'>
      <h1 className='pt-2 pb-3 px-4 font-bold'>{text}</h1>
      {children}
    </div>
  )
}

export default Column
