import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Gather } from "./components/Gather"
import { Hero } from "./components/Hero"
import { Intro } from "./components/Intro"
import { Menu } from "./components/Menu"
import { Nav } from "./components/Nav"
import { Order } from "./components/Order"
import { Reviews } from "./components/Reviews"
import { Signatures } from "./components/Signatures"
import { Visit } from "./components/Visit"
import { restaurant } from "./data/content"

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  servesCuisine: ["Persian", "Middle Eastern"],
  priceRange: restaurant.price,
  telephone: "+1-942-880-9595",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4750 Yonge St",
    addressLocality: "North York",
    addressRegion: "ON",
    postalCode: "M2N 0J6",
    addressCountry: "CA",
  },
  hasMap: restaurant.mapsDirections,
}

export default function App() {
  return (
    <>
      <a className="skip" href="#story">
        Skip to content
      </a>
      <Nav />
      <main id="top">
        <Hero />
        <Intro />
        <Signatures />
        <Menu />
        <Gather />
        <Gallery />
        <Reviews />
        <Order />
        <Visit />
      </main>
      <Footer />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </>
  )
}
