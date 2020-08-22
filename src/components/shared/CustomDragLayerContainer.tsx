import React from 'react'
import styled from '@emotion/styled'

// TODO: remove unused comment
// export const CustomDragLayerContainer = styled.div`
//   height: 100%;
//   left: 0;
//   pointer-events: none;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 100;
// `

export const CustomDragLayerContainer = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className={`h-full left-0 pointer-events-none fixed top-0 w-full z-50`}>{children}</div>
  )
}
