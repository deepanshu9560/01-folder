import React from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = React.useState(0);

  // const handleClick = (e) => {
  //   console.log("Clicked");
  //   console.log(e.target);
  // };

  // jb hume function child component main bhejna ho toh re-render se bachne ke liye usecallback use karte hai
  const handleClick = React.useCallback(() => {
    console.log("Clicked");
  }, []);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+{count}</button>
      <Child onClick={handleClick} />
    </>
  );
};

export default App;

// 🔥 FINAL MASTER CHEAT SHEET (ye yaad rakhna)
// useCallback → function yaad rakho (same reference)
// useMemo     → value yaad rakho (heavy calculation)
// useRef      → value yaad rakho (no re-render)
// useEffect   → side effects
