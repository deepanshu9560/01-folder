import React from 'react'
import { useRef } from 'react';

function App() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return <button onClick={increment}>+{countRef.current}</button>;
}

export default App
