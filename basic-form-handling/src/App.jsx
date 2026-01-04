import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState('');
  function sumData(e) {
    e.preventDefault();  
    setNum('');
  }
  return (
    <div>
      <form action="" onSubmit={sumData}>
        <input type="text" name="" id="" onChange={(e)=>setNum(e.target.value)} value={num} />
        <button>submit</button>
        <h1>User is typing {num}</h1>
      </form>
    </div>
  )
}

export default App
