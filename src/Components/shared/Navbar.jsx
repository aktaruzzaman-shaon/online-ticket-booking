import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div>
        <div className="navbar">
          <ul className='flex flex-row space-x-3'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/information" >Information</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar