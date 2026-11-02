import { nav, restaurant } from "../data/content"

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">DubaiLevant</p>
          <p>Family-owned Persian and Middle Eastern kitchen in North York.</p>
          <p>
            {restaurant.addressFull}
            <br />
            <a href={restaurant.phoneHref}>{restaurant.phoneDisplay}</a>
          </p>
        </div>
        <nav aria-label="Footer">
          <a href="#top">Home</a>
          {nav.map((item) => (
            <a key={item.id} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#order">Order</a>
          <a href={restaurant.mapsReviews} target="_blank" rel="noreferrer">
            Google reviews
          </a>
        </nav>
        <div>
          <p className="footer-label">Hours</p>
          <p>
            Closes {restaurant.closes} Takeout ends {restaurant.takeoutEnds} Weekly
            hours to be confirmed.
          </p>
          <a className="btn btn-solid btn-on-dark" href="#order">
            Order by phone
          </a>
        </div>
      </div>

      <p className="wrap photo-note">
        Food photographs by Amin, Atheist, Vathlu, طاها حجتی, and Nasser-sadeghi,
        cropped for the web,{" "}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">
          CC BY-SA
        </a>{" "}
        via Wikimedia Commons.
      </p>
    </footer>
  )
}
