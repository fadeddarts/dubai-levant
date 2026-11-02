import { useEffect, useId, useRef, useState } from "react"
import { gallery } from "../data/media"
import type { Photo } from "../data/media"
import { Reveal } from "./Reveal"

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const active: Photo | null = index === null ? null : gallery[index]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (index !== null && !dialog.open) dialog.showModal()
    if (index === null && dialog.open) dialog.close()
  }, [index])

  useEffect(() => {
    document.body.classList.toggle("lock", index !== null)
    return () => document.body.classList.remove("lock")
  }, [index])

  const step = (direction: number) => {
    setIndex((current) => {
      if (current === null) return current
      return (current + direction + gallery.length) % gallery.length
    })
  }

  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="wrap">
        <Reveal className="gallery-head">
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-title">Look closer.</h2>
          <p>
            Persian kebabs and rice, standing in until pictures from the
            restaurant are added. These are not photos of this dining room.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {gallery.map((photo, photoIndex) => (
            <figure key={photo.id} className={`gallery-item g${photoIndex + 1}`}>
              <button
                type="button"
                className="shot"
                onClick={() => setIndex(photoIndex)}
                aria-haspopup="dialog"
                aria-label={`View photograph: ${photo.caption}`}
              >
                <img
                  src={photo.src}
                  alt=""
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                />
              </button>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby={titleId}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setIndex(null)
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1)
          if (event.key === "ArrowLeft") step(-1)
        }}
      >
        {active ? (
          <div className="lightbox-inner">
            <img
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
            />
            <div className="lightbox-bar">
              <div>
                <p id={titleId}>{active.caption}</p>
              </div>
              <div className="lightbox-controls">
                <button type="button" onClick={() => step(-1)} aria-label="Previous photograph">
                  Prev
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next photograph">
                  Next
                </button>
                <button type="button" onClick={() => setIndex(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  )
}
