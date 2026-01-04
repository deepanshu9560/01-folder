import React from 'react'
import { useNavigate } from 'react-router-dom';

const AboutMain = () => {
    let navigate = useNavigate();
  const pageChange = () => {
    navigate("/contact");   
  }
  return (
    <div>
       <h1 className='tp'>About</h1>
      <button onClick={pageChange}>Back</button>
    </div>
  )
}

export default AboutMain
