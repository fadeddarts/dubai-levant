import { menu, restaurant } from "../data/content"
import { Reveal } from "./Reveal"

export function Menu() {
  const orderHref = restaurant.orderingUrl ?? restaurant.phoneHref

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="wrap menu-layout">
        <Reveal className="menu-intro">
          <p className="eyebrow eyebrow-light">The menu</p>
          <h2 id="menu-title">What we can name today.</h2>
          <p>
            These are the dishes DubaiLevant has publicly described. Prices are
            not listed, because none were supplied. Guests report {restaurant.price}{" "}
            {restaurant.priceDetail}. Call to ask what is on today.
          </p>
          <p>
            Vegan dishes are listed among the restaurant’s service options. Ask
            the kitchen which plates are available.
          </p>
          <a className="btn btn-solid btn-on-dark" href={orderHref}>
            {restaurant.orderingUrl ? "Order online" : "Call to order"}
          </a>
        </Reveal>

        <div className="menu-board">
          {menu.map((group) => (
            <Reveal key={group.id} className="menu-group">
              <header>
                <h3>{group.name}</h3>
                <p>{group.note}</p>
              </header>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="dish">{item.name}</p>
                    <p>{item.detail}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
