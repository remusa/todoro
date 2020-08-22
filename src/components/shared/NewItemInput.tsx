import React, { RefObject } from 'react'

export const NewItemInput = ({
  value,
  onChange,
  inputRef,
}: React.PropsWithChildren<{
  value: string
  onChange(e: any): void
  inputRef: RefObject<HTMLInputElement>
}>) => {
  return (
    <input
      className='w-full mb-2 py-2 px-4 border-0 rounded shadow-md'
      type='text'
      ref={inputRef}
      value={value}
      onChange={onChange}
    />
  )
}
