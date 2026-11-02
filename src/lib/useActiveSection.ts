import { useEffect, useState } from "react"

export function useActiveSection(ids: readonly string[]) {
  const key = ids.join("|")
  const [active, setActive] = useState("")

  useEffect(() => {
    const list = key.split("|")
    const elements = list
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.2, 0.45] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return active
}
