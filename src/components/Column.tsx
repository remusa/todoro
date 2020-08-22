import React from 'react'
import { useAppState } from '~context/AppState'
import AddNewItem from './AddNewItem'
import Card from './Card'

interface ColumnProps {
  text: string
  index: number
}

const Column = ({ text, index, children }: React.PropsWithChildren<ColumnProps>) => {
  const { state } = useAppState()

  return (
    <div className='flex-grow-0 w-64 w-96 mr-6 p-2 bg-gray-300 rounded shadow'>
      <h1 className='pt-2 pb-3 px-4 font-bold'>{text}</h1>
      {children}

      {state.lists[index].tasks.map(task => (
        <Card key={task.id} text={task.text} />
      ))}

      <AddNewItem toggleButtonText='+ Add another task' onAdd={console.log} dark />
    </div>
  )
}

export default Column
