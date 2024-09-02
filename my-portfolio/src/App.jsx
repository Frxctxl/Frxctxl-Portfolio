import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Header />
    </>
  )
}

export default App
