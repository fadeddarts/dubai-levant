import { restaurant, reviews } from "../data/content"
import { Reveal } from "./Reveal"

export function Reviews() {
  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="wrap">
        <Reveal className="reviews-head">
          <p className="eyebrow eyebrow-light">Google reviews</p>
          <h2 id="reviews-title">
            <span className="reviews-count">{restaurant.reviewCount}</span>
            voices, in their words.
          </h2>
          <a className="text-link text-link-light" href={restaurant.mapsReviews} target="_blank" rel="noreferrer">
            Read the Google reviews
          </a>
        </Reveal>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.06}>
              <figure className={index === 1 ? "quote is-feature" : "quote"}>
                <blockquote>
                  <p>{review.quote}</p>
                </blockquote>
                <figcaption>{review.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
