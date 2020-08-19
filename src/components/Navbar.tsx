import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <header>
      <nav>
        <ul className='flex flex-col list-none justify-center align-center'>
          <li>
            <NavLink
              exact
              to='/'
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/profile'
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
