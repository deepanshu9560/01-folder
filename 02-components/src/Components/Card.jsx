import React from 'react'

const Card = (props) => {
  return (
    <>    
      <div className="card">
        <img src={props.image} alt="" />
        <h2>{props.user} ,{props.age}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, expedita!</p>
      </div>
    </>
  )
}

export default Card
