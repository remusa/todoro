import React, { MouseEvent } from 'react'

export const NewItemFormContainer = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className='w-full max-w-6xl flex flex-col items-start'>{children}</div>
}

export const NewItemButton = ({
  onClick,
  children,
}: React.PropsWithChildren<{ onClick(e: MouseEvent): void }>) => {
  return (
    <button
      className='py-3 px-4 text-center text-gray-100s border-0 bg-green-400 rounded shadow-none'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const NewItemInput = ({
  value,
  onChange,
}: React.PropsWithChildren<{ value: string; onChange(e: any): void }>) => {
  return (
    <input
      className='w-full mb-2 py-2 px-4 border-0 rounded shadow-md'
      type='text'
      value={value}
      onChange={onChange}
    />
  )
}

interface AddItemButtonProps {
  dark?: boolean
  onClick(e: MouseEvent): void
}

export const AddItemButton = ({
  dark = false,
  onClick,
}: React.PropsWithChildren<AddItemButtonProps>) => {
  const isDark = dark ? 'text-gray-900' : 'text-gray-100'

  return (
    <button
      onClick={onClick}
      className={`py-3 px-4 text-gray-100 ${isDark} border-0 cursor-pointer rounded-md hover:bg-gray-400 transition-colors duration-100 ease-in`}
    ></button>
  )
}
