import React, { useState } from 'react'

const App = () => {
    let arr = [2,3,15];
    const [num, setNum] = useState(arr);
   function increment() {
    setNum(prev=> [...prev ,prev[0] + 5])
   }
  return (  
    <div>
      <h1>{num}</h1>
      <button onClick={increment}>Login</button>
    </div>
  )
}

export default App
