import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Child from "./components/Child"
import AboutMain from "./components/AboutMain"

const App = () => {
  return (
    <>
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} >
      <Route index element={<AboutMain />} />
      <Route path="child" element={<Child />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
