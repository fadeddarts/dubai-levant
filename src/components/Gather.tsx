import { photos } from "../data/media"
import { Reveal } from "./Reveal"

export function Gather() {
  return (
    <section className="gather" id="gather" aria-labelledby="gather-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">The table</p>
          <h2 id="gather-title">
            Good food
            <br />
            brings people
            <br />
            <em>together.</em>
          </h2>
        </Reveal>
        <Reveal className="gather-photo" delay={0.06}>
          <img
            src={photos.mixed.src}
            alt={photos.mixed.alt}
            width={photos.mixed.width}
            height={photos.mixed.height}
            loading="lazy"
          />
          <p className="caption">{photos.mixed.caption}</p>
        </Reveal>
        <div className="gather-copy">
          <Reveal>
            <p>
              Guests write about flavour, freshness, and plates worth sharing.
              Beef and chicken kebabs land in the middle of the table. Rice
              comes with them. The cooking is meant to be generous without
              pretending to be a special-occasion room.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Come in, pick it up, or ask for delivery. DubaiLevant is a family
              restaurant in North York — a warm table on an ordinary evening.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
