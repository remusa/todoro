export type ColumnDragItem = {
  type: 'COLUMN'
  id: string
  index: number
  text: string
}

export type CardDragItem = {
  type: 'CARD'
  id: string
  index: number
  text: string
  columnId: string
}

export type DragItem = ColumnDragItem | CardDragItem
