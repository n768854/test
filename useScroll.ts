import { useEffect, useState } from "react"
import throttle from "lodash.throttle"

export default function useScroll() {
  const [scrollLeft, setScrollLeft] = useState(0) as any

  const table = document.getElementById("table")

  useEffect(() => {
    table?.removeEventListener("scroll", handleScroll)
    table?.addEventListener("scroll", throttle(handleScroll, 400), {
      passive: true,
    })
    handleScroll()

    return () => {
      table?.removeEventListener("scroll", handleScroll)
    }
  }, [table])

  function handleScroll() {
    setScrollLeft(table?.scrollLeft)
  }

  return scrollLeft
}
