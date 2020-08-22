import React, { MouseEvent } from 'react'

export const NewItemButton = ({
  onClick,
  children,
}: React.PropsWithChildren<{ onClick(e: MouseEvent): void }>) => {
  return (
    <button
      className='w-full py-3 px-4 text-center text-gray-100s border-0 bg-green-400 rounded shadow-none'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
