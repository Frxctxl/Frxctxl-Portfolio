import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"

import "./App.css"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
