import React from 'react'
import { useAppState } from '~context/AppState'
import AddNewItem from './AddNewItem'
import Card from './Card'

interface ColumnProps {
  text: string
  index: number
  id: string
}

const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState()

  return (
    <div className='flex-grow-0 w-64 w-96 mr-6 p-2 bg-gray-300 rounded shadow'>
      <h1 className='pt-2 pb-3 px-4 font-bold'>{text}</h1>

      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}

      <AddNewItem
        toggleButtonText='+ Add another card'
        onAdd={text => dispatch({ type: 'ADD_TASK', payload: { text, taskId: id } })}
        dark
      />
    </div>
  )
}

export default Column
