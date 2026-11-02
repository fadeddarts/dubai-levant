import { restaurant } from "../data/content"
import { Reveal } from "./Reveal"

export function Visit() {
  return (
    <section className="visit" id="visit" aria-labelledby="visit-title">
      <div className="wrap visit-grid">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 id="visit-title">{restaurant.addressLine}</h2>
          <p className="visit-city">{restaurant.cityLine}</p>
          <a className="visit-phone" href={restaurant.phoneHref}>
            {restaurant.phoneDisplay}
          </a>
          <div className="visit-actions">
            <a className="btn btn-solid" href={restaurant.mapsDirections} target="_blank" rel="noreferrer">
              Directions
            </a>
            <a className="btn btn-line" href={restaurant.mapsReviews} target="_blank" rel="noreferrer">
              Google reviews
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <dl className="facts">
            <div>
              <dt>Hours</dt>
              <dd>
                Closes {restaurant.closes} Takeout ends {restaurant.takeoutEnds} A full
                weekly schedule has not been confirmed — call before you visit.
              </dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>
                {restaurant.price} {restaurant.priceDetail}
              </dd>
            </div>
            <div>
              <dt>Service</dt>
              <dd>Dine-in, pickup, and delivery. Vegan dishes are listed among the service options.</dd>
            </div>
            <div>
              <dt>Reviews</dt>
              <dd>{restaurant.reviewCount} Google reviews</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
