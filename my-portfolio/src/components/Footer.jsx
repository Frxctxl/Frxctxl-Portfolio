import logo from "../assets/github-mark-white.svg"
function Footer() {
  return (
    <footer className="grow-0 py-4 flex justify-around shrink-0 bg-Gunmetal text-white">
      <h1 className="self-center">804-718-1041</h1>
      <a href="https://www.github.com/Frxctxl">
        <img src={logo} alt="" className="size-9 self-center" />
      </a>
    </footer>
  )
}

export default Footer
