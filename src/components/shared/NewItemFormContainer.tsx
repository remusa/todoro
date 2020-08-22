import React from 'react'

export const NewItemFormContainer = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className='flex-grow-0 flex flex-col items-start'>{children}</div>
}
