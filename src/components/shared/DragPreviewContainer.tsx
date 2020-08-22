import styled from '@emotion/styled'

interface DragPreviewContainerProps {
  isHidden?: boolean
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
    opacity: ${props => (props.isHidden ? 0.3 : 1)};
    /* ${props => (props.isHidden ? 'opacity-25' : 'opacity-100')} */
  `

// export const DragPreviewContainer = ({
//   isHidden,
//   children,
// }: React.PropsWithChildren<DragPreviewContainerProps>) => {
//   const opacity = isHidden ? 'opacity-25' : 'opacity-100'

//   return <div className={`${opacity}`}>{children}</div>
// }
