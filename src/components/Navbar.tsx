import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

interface Props {}

const Navbar: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='flex items-center justify-between py-6 px-3 border-b-2 border-blue-500'>
      <div className=''>
        <NavLink
          exact
          to='/'
          className='block px-2 py-1 text-gray-100 font-semibold rounded hover:bg-teal-500'
          activeStyle={{
            color: 'red',
          }}
        >
          Home
        </NavLink>
      </div>

      <nav className='flex items-center justify-between '>
        <NavLink
          exact
          to='/profile'
          className='block px-2 py-1 text-gray-100 font-semibold rounded hover:bg-teal-500 sm:mt-0 sm:ml-2'
          activeStyle={{
            color: 'red',
          }}
        >
          Profile
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
