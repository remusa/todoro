import React from 'react'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <main className='w-screen h-screen flex flex-row items-start p-5 text-base antialiased font-inter font-normal tracking-normal leading-normal normal-case text-gray-900 bg-blue-600'>
        {children}
      </main>
    </>
  )
}

export default Layout
