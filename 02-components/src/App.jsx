import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <>
    <div className="card-wrapper"> 
       <Card user="Deepanshu" age={30} image="https://images.unsplash.com/photo-1763503834047-ac85c4105c0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
       <Card user="Gaurav" age={20} image="https://plus.unsplash.com/premium_photo-1733552252130-66b2a15f3e4d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
       <Card user="Deepanshu" age={24} image="https://images.unsplash.com/photo-1763503834047-ac85c4105c0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
       <Card user="Gaurav" age={18} image="https://plus.unsplash.com/premium_photo-1733552252130-66b2a15f3e4d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
       </div>   
    </>
  )
}

export default App

