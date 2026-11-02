export type Photo = {
  id: string
  src: string
  width: number
  height: number
  alt: string
  caption: string
  creditId: string
}

export type Credit = {
  id: string
  filename: string
  title: string
  author: string
  source: string
  licence: string
  licenceUrl: string
  changes: string
}

const file = (name: string) => `${import.meta.env.BASE_URL}${name}`

export const photos = {
  hero: {
    id: "hero",
    src: file("images/hero.jpg"),
    width: 1234,
    height: 1500,
    alt: "Koobideh kebabs and tomatoes cooking over charcoal.",
    caption: "Koobideh on the grill",
    creditId: "amin-grill",
  },
  plate: {
    id: "plate",
    src: file("images/plate.jpg"),
    width: 2000,
    height: 1322,
    alt: "Two koobideh kebabs beside saffron-topped rice on a square plate.",
    caption: "Koobideh with saffron rice",
    creditId: "atheist-plate",
  },
  koobideh: {
    id: "koobideh",
    src: file("images/koobideh.jpg"),
    width: 1800,
    height: 957,
    alt: "A close view of koobideh on a patterned plate with grilled tomato.",
    caption: "Koobideh, close",
    creditId: "vathlu-bonab",
  },
  chicken: {
    id: "chicken",
    src: file("images/chicken.jpg"),
    width: 1400,
    height: 1369,
    alt: "Chicken kebabs and tomatoes over a charcoal grill.",
    caption: "Jujeh kabab on charcoal",
    creditId: "taha-jujeh",
  },
  mixed: {
    id: "mixed",
    src: file("images/mixed.jpg"),
    width: 1800,
    height: 1228,
    alt: "A plate of koobideh and grilled chicken with tomato.",
    caption: "Koobideh and grilled chicken",
    creditId: "nasser-nishapur",
  },
} as const satisfies Record<string, Photo>

export const gallery = [photos.plate, photos.chicken, photos.koobideh, photos.mixed]

export const credits: Credit[] = [
  {
    id: "amin-grill",
    filename: "hero.jpg",
    title: "Kabab koobideh bbq persian food",
    author: "Amin",
    source: "https://commons.wikimedia.org/wiki/File:Kabab_koobideh_bbq_persian_food.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    changes: "Downscaled and compressed for the web. No other retouching.",
  },
  {
    id: "atheist-plate",
    filename: "plate.jpg",
    title: "Koobideh DSC0005",
    author: "Atheist",
    source: "https://commons.wikimedia.org/wiki/File:Koobideh_DSC0005.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    changes: "Downscaled and compressed for the web. No other retouching.",
  },
  {
    id: "vathlu-bonab",
    filename: "koobideh.jpg",
    title: "Iranian Kabab Koobideh (Bonab style)",
    author: "Vathlu",
    source: "https://commons.wikimedia.org/wiki/File:Iranian_Kabab_Koobideh_(Bonab_style).jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    changes:
      "Downscaled and compressed for the web. The file page also notes a GFDL attribution. No other retouching.",
  },
  {
    id: "taha-jujeh",
    filename: "chicken.jpg",
    title: "Jujeh Kabab by Taha.7.13",
    author: "طاها حجتی",
    source: "https://commons.wikimedia.org/wiki/File:Jujeh_Kabab_by_Taha.7.13.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    changes: "Downscaled and compressed for the web. No other retouching.",
  },
  {
    id: "nasser-nishapur",
    filename: "mixed.jpg",
    title: "X20190802155122 IMG 0472",
    author: "Nasser-sadeghi",
    source: "https://commons.wikimedia.org/wiki/File:X20190802155122_IMG_0472.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    changes:
      "Cropped to remove a water bottle at the edge, then downscaled and compressed. No other retouching.",
  },
]
