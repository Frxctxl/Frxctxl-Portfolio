import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="grow-0 shrink-0 flex flex-row justify-between bg-Gunmetal">
      <h3 className="text-xl py-3 px-4">Jayden Benston</h3>

      <nav className="grid grid-cols-5 items-center text-center">
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
