import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const About = () => {   
  return (
    <div>
      <ul>
        <li>
          <Link to="child">Child</Link>
        </li>
      </ul>     
      <Outlet />
    </div>
  )
}

export default About
