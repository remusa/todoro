import React from 'react'
import AddNewItem from './AddNewItem'

interface ColumnProps {
  text: string
}

const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <div className='flex-grow-0 w-64 w-96 mr-6 p-2 bg-gray-300 rounded shadow'>
      <h1 className='pt-2 pb-3 px-4 font-bold'>{text}</h1>
      {children}

      <AddNewItem toggleButtonText='+ Add another task' onAdd={console.log} dark />
    </div>
  )
}

export default Column
