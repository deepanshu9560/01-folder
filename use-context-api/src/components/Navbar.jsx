import { useContext } from "react"
import { ThemeChange } from "./ChangeColor";

const Navbar = () => {
    const [theme,setTheme] = useContext(ThemeChange);    
  return (
    <>
    <nav className={`navbar ${theme.toLowerCase()}`}>
        <h1>Deepanshu</h1>
        <ul>
            <li className="lightBtn" onClick={(e)=> e.target.innerText === "Light Mode"?setTheme('Dark') : setTheme('Light')}>{theme} Mode</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
