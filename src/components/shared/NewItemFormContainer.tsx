import React from 'react'

export const NewItemFormContainer = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className='w-full max-w-6xl flex flex-col items-start'>{children}</div>
}
