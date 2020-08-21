import React from 'react'

interface Props {}

const Layout = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <>
      <main className='w-screen h-screen flex flex-row items-start p-5 text-base antialiased font-inter font-normal tracking-normal leading-normal normal-case text-gray-900 bg-blue-600'>
        {children}
      </main>
    </>
  )
}

export default Layout
