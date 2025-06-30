import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="grow-0 shrink-0 flex flex-row justify-between bg-Gunmetal">
      <h3 className="text-xl py-3 px-4">Jayden Benston</h3>

      <nav className="grid grid-cols-3 items-center text-center mx-2">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/resume'>Resume</NavLink>
      </nav>
    </header>
  )
}

export default Header
