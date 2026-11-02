# DubaiLevant Restaurant

Editorial website for DubaiLevant, a family-owned Persian and Middle Eastern restaurant at 4750 Yonge Street, North York.

Live site: https://fadeddarts.github.io/dubai-levant/

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5178.

## What to edit

Business facts, the menu, and the published reviews live in `src/data/content.ts`.

- Set `orderingUrl` when the restaurant has an ordering link. Until then, pickup and delivery call `(942) 880-9595`.
- Replace the hours note when a weekly schedule is confirmed. The site only states what was supplied: the restaurant closes at 9 p.m., and takeout ends at 8:30 p.m.
- Do not add prices, ingredients, or dishes that the restaurant has not confirmed.

Photographs and their credits live in `src/data/media.ts`. The full licence record is `IMAGE-LICENSES.md`. Current images are licensed culinary references, not photos of this restaurant. Swap in DubaiLevant’s own pictures when they are available.
