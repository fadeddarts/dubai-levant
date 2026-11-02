import { restaurant } from "../data/content"
import { Reveal } from "./Reveal"

export function Intro() {
  return (
    <section className="intro" id="story" aria-labelledby="story-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Our story</p>
          <h2 id="story-title">
            A family kitchen
            <br />
            on Yonge Street.
          </h2>
        </Reveal>
        <div className="intro-grid">
          <Reveal delay={0.08}>
            <p className="intro-lead">
              DubaiLevant is a family-owned restaurant in North York, cooking
              authentic Persian and Middle Eastern food.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p>
              The kitchen’s own description puts premium kebabs at the centre —
              Beef Koobideh, Chicken Saffron, and Beef Chenjeh — with freshly
              prepared rice and homemade dishes beside them.
            </p>
            <p>
              It is an everyday table, listed at {restaurant.price}{" "}
              {restaurant.priceDetail}, with dine-in, pickup, and delivery. The
              welcome is the point: food made to be shared, served with warmth.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
