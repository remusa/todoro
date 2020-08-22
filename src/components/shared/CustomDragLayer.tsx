import React from 'react'
import { useDragLayer } from 'react-dnd'
import Column from '~components/Column'

export const CustomDragLayerContainer: React.FC = () => {
  const { isDragging, item } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
  }))

  return isDragging ? (
    <CustomDragLayerContainer>
      <Column id={item.id} text={item.text} index={item.index} />
    </CustomDragLayerContainer>
  ) : null
}
