import React, { MouseEvent } from 'react'

interface AddItemButtonProps {
  dark?: boolean | undefined
  onClick(e: MouseEvent): void
  value: string
}

export const AddItemButton = ({
  dark,
  onClick,
  value,
}: React.PropsWithChildren<AddItemButtonProps>) => {
  const isDark = dark ? 'w-full text-gray-900 text-gray-100 ' : 'w-72 bg-opacity-50'

  return (
    <button
      onClick={onClick}
      className={`${isDark} py-2 px-1 bg-gray-300 hover:bg-gray-400 border-0 cursor-pointer rounded-md transition-colors duration-100 ease-in`}
    >
      {value}
    </button>
  )
}
