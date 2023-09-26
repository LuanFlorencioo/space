export default function Nav() {
  return (
    <nav className="w-screen h-max px-4 absolute z-50 left-0 top-[66px] bg-background border-b-2 border-[#00000010] md:w-max md:px-0 md:static md:bg-none md:border-none">
      <ul className="w-full py-7 flex flex-col items-center gap-7 font-bold text-base text-text md:w-max md:py-0 md:flex-row">
        <li>Home</li>
        <li>About</li>
        <li>FAQ</li>
        <li>Support</li>
      </ul>
    </nav>
  )
}
