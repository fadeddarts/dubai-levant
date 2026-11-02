import { restaurant } from "../data/content"
import { Reveal } from "./Reveal"

const paths = [
  {
    index: "01",
    title: "Pickup",
    text: `Call and ask for pickup. Takeout ends at ${restaurant.takeoutEnds}`,
  },
  {
    index: "02",
    title: "Delivery",
    text: "Call and ask for delivery. Online checkout is not connected on this site.",
  },
  {
    index: "03",
    title: "Call",
    text: restaurant.phoneDisplay,
  },
]

export function Order() {
  const href = restaurant.orderingUrl ?? restaurant.phoneHref
  const external = Boolean(restaurant.orderingUrl)

  return (
    <section className="order" id="order" aria-labelledby="order-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow eyebrow-light">Order</p>
          <h2 id="order-title">Call, and the kitchen will take it from there.</h2>
          <p className="order-lead">
            Pickup and delivery are both available.{" "}
            {external
              ? "Use the restaurant’s ordering page, or call."
              : "No ordering website was supplied, so this page uses the phone for both."}
          </p>
        </Reveal>
        <div className="order-grid">
          {paths.map((path) => (
            <Reveal key={path.title}>
              <a
                className="order-card"
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span>{path.index}</span>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
