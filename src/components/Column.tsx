import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { useAppState } from '~context/AppState'
import { DragItem } from '~utils/dragItem'
import { useItemDrag } from '~utils/useItemDrag'
import AddNewItem from './AddNewItem'
import Card from './Card'

interface ColumnProps {
  text: string
  index: number
  id: string
}

const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState()
  const ref = useRef<HTMLDivElement>(null)

  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text })

  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover(item: DragItem) {
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } })
      item.index = hoverIndex
    },
  })

  drag(drop(ref))

  return (
    <div ref={ref} className='flex-grow-0 w-64 w-72 mr-6 p-2 bg-gray-300 rounded shadow'>
      <h1 className='pt-1 pb-2 px-4 font-bold'>{text}</h1>

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
