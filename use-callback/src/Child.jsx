
import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button className="btnChild" onClick={onClick}>Child Button</button>;
});

export default Child;
