import React, { createContext, useState } from "react";
export const ThemeChange = createContext();
const ChangeColor = (props) => {  
  let [theme, setTheme] = useState("Light");
  return (
    <>
      <ThemeChange.Provider value={[theme,setTheme]}>
        {props.children}
      </ThemeChange.Provider>
    </>
  );
};

export default ChangeColor;
