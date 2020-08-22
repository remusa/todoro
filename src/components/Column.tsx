import styled from '@emotion/styled'
import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { useAppState } from '~context/AppState'
import { DragItem } from '~utils/dragItem'
import { isHidden } from '~utils/isHidden'
import { useItemDrag } from '~utils/useItemDrag'
import AddNewItem from './AddNewItem'
import Card from './Card'
import { DragPreviewContainer } from './shared/DragPreviewContainer'

const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`

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
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, 'COLUMN', id)}
      className='flex-grow-0 w-72 min-h-96 mr-6 p-2 bg-gray-300 rounded shadow-md'
    >
      <h1 className='pt-1 pb-2 px-4 font-bold'>{text}</h1>

      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
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
