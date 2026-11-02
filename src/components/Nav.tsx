import { useEffect, useRef, useState } from "react"
import { nav, restaurant } from "../data/content"
import { useActiveSection } from "../lib/useActiveSection"

const sectionIds = nav.map((item) => item.id)

function Mark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 27V15.2C5 7.2 27 7.2 27 15.2V27" />
      <path d="M11 27V17.2C11 12.4 21 12.4 21 17.2V27" />
    </svg>
  )
}

export function Nav() {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("lock", open)
    const main = document.querySelector("main")
    const footer = document.querySelector("footer")
    main?.toggleAttribute("inert", open)
    footer?.toggleAttribute("inert", open)
    return () => {
      document.body.classList.remove("lock")
      main?.removeAttribute("inert")
      footer?.removeAttribute("inert")
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const first = panel?.querySelector<HTMLElement>("a, button")
    first?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        return
      }
      if (event.key !== "Tab" || !panel) return
      const items = [...panel.querySelectorAll<HTMLElement>("a, button")]
      if (items.length === 0) return
      const firstItem = items[0]
      const lastItem = items[items.length - 1]
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }

    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  useEffect(() => {
    if (wasOpen.current && !open) toggleRef.current?.focus()
    wasOpen.current = open
  }, [open])

  useEffect(() => {
    const media = window.matchMedia("(min-width: 980px)")
    const close = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener("change", close)
    return () => media.removeEventListener("change", close)
  }, [])

  return (
    <header className={scrolled ? "nav is-scrolled" : "nav"}>
      <a className="brand" href="#top">
        <Mark />
        <span>
          <span className="brand-name">DubaiLevant</span>
          <span className="brand-meta">North York</span>
        </span>
      </a>

      <nav className="desk-nav" aria-label="Primary">
        {nav.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-current={active === item.id ? "true" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-end">
        <a className="nav-phone" href={restaurant.phoneHref}>
          {restaurant.phoneDisplay}
        </a>
        <a className="btn btn-solid" href="#order">
          Order
        </a>
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="nav-bars" data-open={open} aria-hidden="true" />
        </button>
      </div>

      <div
        ref={panelRef}
        id="mobile-nav"
        className={open ? "nav-panel is-open" : "nav-panel"}
        aria-hidden={open ? undefined : true}
        inert={open ? undefined : true}
      >
        <nav aria-label="Mobile">
          <a href="#top" onClick={() => setOpen(false)}>
            Home
          </a>
          {nav.map((item) => (
            <a key={item.id} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#order" onClick={() => setOpen(false)}>
            Order
          </a>
          <a href={restaurant.phoneHref}>{restaurant.phoneDisplay}</a>
        </nav>
      </div>
    </header>
  )
}
