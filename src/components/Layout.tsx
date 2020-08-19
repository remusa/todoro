import React from 'react'
import Navbar from './Navbar'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='h-screen w-screen p-10 text-base antialiased font-inter font-normal tracking-normal leading-normal normal-case text-gray-900 bg-color-100'>
      <Navbar />

      {children}
    </div>
  )
}

export default Layout
