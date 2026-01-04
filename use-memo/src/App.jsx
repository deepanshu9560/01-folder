import React, { useMemo } from 'react'

const App = () => {
  const [count, setCount] = React.useState(0);

  // isse heavy calculation state change pe firse chalegi niche vale method se nahi 
  // const total = heavyCalculation();

  // useMemo = result ko yaad rakhna dubara re-render se bachana for optimization
  const total = useMemo(() => { 
  return heavyCalculation();
}, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Total: {total}</p>
    </>
  );
}
function heavyCalculation() {
  console.log("Heavy calculation chal rahi hai");
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return sum;
}

export default App
