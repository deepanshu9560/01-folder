import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  return (
    <div>
      <div className="box">
        <h1>{num}</h1>
      </div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Descrease</button>
    </div>
  );
};

export default App;
