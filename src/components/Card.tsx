import styled from '@emotion/styled'
import React, { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { useAppState } from '~context/AppState'
import { CardDragItem } from '~utils/dragItem'
import { useItemDrag } from '~utils/useItemDrag'
import { DragPreviewContainer } from './shared/DragPreviewContainer'
import { isHidden } from '~utils/isHidden'

const CardContainer = styled(DragPreviewContainer)``

interface CardProps {
  id: string
  index: number
  text: string
  columnId: string
  isPreview?: boolean
}

const Card = ({ text, index, id, columnId, isPreview }: CardProps) => {
  const { state, dispatch } = useAppState()
  const ref = useRef<HTMLDivElement>(null)

  const { drag } = useItemDrag({ type: 'CARD', id, index, text, columnId })

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: CardDragItem) {
      if (item.id === id) {
        return
      }

      // Dragged item
      const dragIndex = item.index
      const sourceColumn = item.columnId
      // Hovered card
      const hoverIndex = index
      const targetColumn = columnId

      dispatch({
        type: 'MOVE_TASK',
        payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
      })

      item.index = hoverIndex
      item.columnId = targetColumn
    },
  })

  drag(drop(ref))

  const preview = isPreview ? 'w-72' : 'w-full'

  return (
    <CardContainer
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, 'CARD', id)}
      isPreview={isPreview}
      className={`${preview} mb-2 py-2 px-4 bg-gray-100 rounded-md shadow-md cursor-pointer`}
    >
      {text}
    </CardContainer>
  )
}

export default Card
