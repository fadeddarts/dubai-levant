import { restaurant } from "../data/content"
import { photos } from "../data/media"

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-stage">
        <img
          className="hero-bleed"
          src={photos.hero.src}
          alt={photos.hero.alt}
          width={photos.hero.width}
          height={photos.hero.height}
          fetchPriority="high"
        />
        <div className="hero-copy">
          <p className="eyebrow">Family kitchen · North York</p>
          <h1 id="hero-title">
            <span className="h1-main">
              A taste
              <br />
              of Persia.
            </span>
            <span className="h1-sub">A world of flavour.</span>
          </h1>
          <p className="lede">
            Authentic Persian and Middle Eastern cuisine, freshly prepared and
            served with warmth in North York.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#menu">
              Explore the menu
            </a>
            <a className="btn btn-line" href={restaurant.phoneHref}>
              Call us
            </a>
          </div>
          <p className="hero-meta">
            Dine-in · Pickup · Delivery
            <span aria-hidden="true"> · </span>
            {restaurant.price} {restaurant.priceDetail}
          </p>
        </div>
      </div>
    </section>
  )
}
