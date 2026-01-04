import { useContext } from "react"
import { ThemeChange } from "./ChangeColor"

const PageLevel = () => {
    const [theme] = useContext(ThemeChange);    
  return (
    <div className={`bodyInner ${theme === "Light"?"dark":"light"}`}>
      <h1>{theme} mode</h1>
    </div>
  )
}

export default PageLevel
