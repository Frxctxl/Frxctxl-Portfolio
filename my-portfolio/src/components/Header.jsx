import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>Jayden Benston</h1>

      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Me</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        <NavLink to='/contact'>Contact Me</NavLink>
        <NavLink to='/resume'>Resume</NavLink>
      </nav>
    </header>
  )
}

export default Header
