import styled from '@emotion/styled'
import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { useAppState } from '~context/AppState'
import { DragItem } from '~utils/dragItem'
import { isHidden } from '~utils/isHidden'
import { useItemDrag } from '~utils/useItemDrag'
import Card from './Card'
import AddNewItem from './shared/AddNewItem'
import { DragPreviewContainer } from './shared/DragPreviewContainer'

const ColumnContainer = styled(DragPreviewContainer)``

interface ColumnProps {
  text: string
  index: number
  id: string
  isPreview?: boolean
}

const Column = ({ text, index, id, isPreview }: ColumnProps) => {
  const { state, dispatch } = useAppState()
  const ref = useRef<HTMLDivElement>(null)

  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text })

  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover(item: DragItem) {
      if (item.type === 'COLUMN') {
        const dragIndex = item.index
        const hoverIndex = index

        if (dragIndex === hoverIndex) {
          return
        }

        dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } })

        item.index = hoverIndex
      } else {
        const dragIndex = item.index
        const sourceColumn = item.columnId
        const hoverIndex = 0
        const targetColumn = id

        if (sourceColumn === targetColumn) {
          return
        }

        dispatch({
          type: 'MOVE_TASK',
          payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
        })

        item.index = hoverIndex
        item.columnId = targetColumn
      }
    },
  })

  drag(drop(ref))

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, 'COLUMN', id)}
      isPreview={isPreview}
      className='flex-grow-0 w-72 min-h-96 mr-6 p-2 bg-gray-300 rounded shadow-md'
    >
      <h1 className='pt-1 pb-2 px-4 font-bold'>{text}</h1>

      {state.lists[index].tasks.map((task, i) => (
        <Card key={task.id} text={task.text} index={i} id={task.id} columnId={id} />
      ))}

      <AddNewItem
        toggleButtonText='+ Add another card'
        onAdd={text => dispatch({ type: 'ADD_TASK', payload: { text, taskId: id } })}
        dark
      />
    </ColumnContainer>
  )
}

export default Column
