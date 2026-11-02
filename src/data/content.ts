export const restaurant = {
  name: "DubaiLevant Restaurant",
  shortName: "DubaiLevant",
  phoneDisplay: "(942) 880-9595",
  phoneHref: "tel:+19428809595",
  addressLine: "4750 Yonge St",
  cityLine: "North York, ON M2N 0J6",
  addressFull: "4750 Yonge St, North York, ON M2N 0J6",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=4750+Yonge+St,+North+York,+ON+M2N+0J6",
  mapsReviews:
    "https://www.google.com/maps/search/?api=1&query=DubaiLevant+Restaurant+4750+Yonge+St+North+York",
  price: "$10–20",
  priceDetail: "per person",
  reviewCount: 260,
  closes: "9 p.m.",
  takeoutEnds: "8:30 p.m.",
  /**
   * No online ordering link was supplied.
   * Replace null with the restaurant's ordering URL when it exists.
   * Until then, pickup and delivery actions call the restaurant.
   */
  orderingUrl: null as string | null,
}

export const nav = [
  { href: "#story", id: "story", label: "Our Story" },
  { href: "#menu", id: "menu", label: "Menu" },
  { href: "#gallery", id: "gallery", label: "Gallery" },
  { href: "#visit", id: "visit", label: "Contact" },
] as const

export const menu = [
  {
    id: "kebabs",
    name: "Kebabs",
    note: "House signatures",
    items: [
      {
        name: "Beef Koobideh",
        detail: "A signature beef kebab.",
      },
      {
        name: "Chicken Saffron",
        detail: "A signature chicken kebab.",
      },
      {
        name: "Beef Chenjeh",
        detail: "A signature beef kebab.",
      },
    ],
  },
  {
    id: "rice",
    name: "Rice",
    note: "Fresh daily · names to come",
    items: [
      {
        name: "Freshly prepared rice",
        detail:
          "Rice is part of the daily kitchen. Named rice dishes will be added when the restaurant sends its menu.",
      },
    ],
  },
  {
    id: "kitchen",
    name: "From the kitchen",
    note: "List to come",
    items: [
      {
        name: "Homemade dishes",
        detail:
          "The kitchen prepares food in house. The full list will be added when the owner supplies it.",
      },
    ],
  },
] as const

export const reviews = [
  {
    name: "Forough Ghayedi",
    quote: "The food is packed with flavor, perfectly cooked, and served fresh.",
  },
  {
    name: "Daniel Xun Lin",
    quote: "Had shared beef (large) and chicken (regular) kebabs with my partner.",
  },
  {
    name: "Ma Breats",
    quote: "The mix plate of chicken breast and kebab is great value for the portion.",
  },
] as const
