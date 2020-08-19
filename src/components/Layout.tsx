import React from 'react'
import Navbar from './Navbar'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='min-h-screen w-screen h-screen text-base antialiased font-inter font-normal tracking-normal leading-normal normal-case text-gray-900 bg-color-100'>
      <Navbar />

      <main className='flex-grow flex flex-col justify-center items-center py-6 px-8'>
        {children}
      </main>
    </div>
  )
}

export default Layout
