"use client"
import { useEffect, useState } from "react"
import Nav from "./Nav"
import Button from "./Button"
import { VscThreeBars, VscClose } from "react-icons/vsc"

export default function Header() {
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  const [isShowMenu, setIsShowMenu] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      const mediaQuery = window.matchMedia("(max-width: 768px)")
      setIsMobileScreen(mediaQuery.matches)
    }
    checkIsMobile()

    const mediaQuery = window.matchMedia("(max-width: 768px)")
    const mediaListener = (e: MediaQueryListEvent) => setIsMobileScreen(e.matches)
    mediaQuery.addEventListener("change", mediaListener)

    return () => mediaQuery.removeEventListener("change", mediaListener)
  }, [])

  const handleShowMenu = () => setIsShowMenu(current => !current);

  return (
    <header className="w-full px-4 border-b-2 border-[#00000010] relative">
      <div className="w-full max-w-[1200px] mx-auto py-3 flex justify-between items-center">
        <p className="font-bold text-xl text-text">
          Space
        </p>

        {
          isMobileScreen
            ? (
              <>
                <Button onClick={handleShowMenu}>
                  {isShowMenu ? <VscClose /> : <VscThreeBars />}
                </Button>

                {isShowMenu && <Nav />}
              </>
            )
            : <Nav />
        }
      </div>
    </header>
  )
}
