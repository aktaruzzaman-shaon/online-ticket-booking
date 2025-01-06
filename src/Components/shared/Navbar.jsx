import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-end border-b-4 ">
        <ul className='flex flex-row space-x-3 center'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/information" >Ticket Operation</NavLink>
          <NavLink to="/contact">Profile</NavLink>
          <NavLink to="/contact">Branch Locations</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/contact">FAQ</NavLink>
        </ul>
      </div>
    </>
  )
}

export default Navbar