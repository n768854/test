import { useEffect, useState } from "react"

export default function useScroll() {
  const [scrollLeft, setScrollLeft] = useState(0) as any

  const table = document.getElementById("table")

  useEffect(() => {
    table?.removeEventListener("scroll", handleScroll)
    table?.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      table?.removeEventListener("scroll", handleScroll)
    }
  })

  function handleScroll() {
    setScrollLeft(table?.scrollLeft)
  }

  return scrollLeft
}
