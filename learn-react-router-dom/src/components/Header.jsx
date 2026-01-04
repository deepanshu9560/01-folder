import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="navbar flex justify-between py-5 px-10 bg-amber-400">
        <h2 className='text-2xl font-medium'>Deepanshu</h2>
        <ul className='flex gap-x-10 font-medium text-xl'>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Story</a></li> */}
           <li><NavLink to="/" end>Home</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Header
