import { photos } from "../data/media"
import { Reveal } from "./Reveal"

export function Signatures() {
  return (
    <section className="signatures" id="signatures" aria-labelledby="sig-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">The cooking</p>
          <h2 id="sig-title">Plates the kitchen is known for.</h2>
        </Reveal>

        <article className="sig">
          <Reveal className="sig-copy">
            <p className="sig-index">01</p>
            <h3>Beef Koobideh</h3>
            <p>A signature beef kebab.</p>
          </Reveal>
          <Reveal className="sig-figure" delay={0.08}>
            <img
              src={photos.koobideh.src}
              alt={photos.koobideh.alt}
              width={photos.koobideh.width}
              height={photos.koobideh.height}
              loading="lazy"
            />
            <p className="caption">{photos.koobideh.caption}</p>
          </Reveal>
        </article>

        <article className="sig sig-flip">
          <Reveal className="sig-figure" delay={0.05}>
            <div className="frame frame-chicken">
              <img
                src={photos.chicken.src}
                alt={photos.chicken.alt}
                width={photos.chicken.width}
                height={photos.chicken.height}
                loading="lazy"
              />
            </div>
            <p className="caption">{photos.chicken.caption}</p>
          </Reveal>
          <Reveal className="sig-copy">
            <p className="sig-index">02</p>
            <h3>Chicken Saffron</h3>
            <p>A signature chicken kebab.</p>
          </Reveal>
        </article>
      </div>

      <article className="chenjeh">
        <div className="wrap chenjeh-grid">
          <p className="sig-index">03</p>
          <div>
            <h3>
              Beef
              <br />
              <em>Chenjeh</em>
            </h3>
            <p>A signature beef kebab.</p>
            <p className="pending">A photograph from the kitchen will be added here.</p>
          </div>
        </div>
      </article>

      <div className="wrap">
        <article className="rice">
          <Reveal className="rice-copy">
            <p className="sig-index">04</p>
            <h3>Freshly prepared rice</h3>
            <p>
              Rice is cooked fresh, and the kitchen also prepares homemade
              dishes. Named plates beyond the kebabs will be listed when the
              owner sends the full menu.
            </p>
          </Reveal>
          <Reveal className="sig-figure" delay={0.08}>
            <img
              src={photos.plate.src}
              alt={photos.plate.alt}
              width={photos.plate.width}
              height={photos.plate.height}
              loading="lazy"
            />
            <p className="caption">{photos.plate.caption}</p>
          </Reveal>
        </article>
      </div>
    </section>
  )
}
