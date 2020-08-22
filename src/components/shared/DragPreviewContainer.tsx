import styled from '@emotion/styled'

interface DragPreviewContainerProps {
  isHidden?: boolean
  isPreview?: boolean
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${props => (props.isPreview ? 'rotate(5deg)' : undefined)};
  opacity: ${props => (props.isHidden ? 0.3 : 1)};
`

// export const DragPreviewContainer = ({
//   isHidden,
//   isPreview,
//   children,
// }: React.PropsWithChildren<DragPreviewContainerProps>) => {
//   const opacity = isHidden ? 'opacity-25' : 'opacity-100'
//   const transform = isPreview ? 'rotate(5deg)' : undefined

//   return <div className={`${opacity} ${transform}`}>{children}</div>
// }
