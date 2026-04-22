# assets

Drop files here and they'll be picked up automatically.

## Profile photo

Drop your headshot here as `photo.jpg` (or `photo.jpeg` / `photo.png` /
`photo.webp` — any of those names will be auto-detected).

- Square images look best (1:1 aspect ratio). It's rendered as a circle.
- If no matching file exists, the diagonal-stripe placeholder shows.
- To use a different filename, set an explicit path in `../data.js`,
  e.g. `photo: "assets/my-headshot.png"`.

## CV

Drop your CV at `cv.pdf`. The "cv" link in the hero link row points to
`assets/cv.pdf` (see `../data.js`). Replace the file anytime — the link
keeps working as long as the filename stays `cv.pdf`.

## Favicon

Drop a file named `favicon.jpg`, `favicon.jpeg`, `favicon.png`, or
`favicon.webp` — it's auto-detected and rendered through a canvas with
a circular clip, so a square source shows up round in the browser tab.
You can reuse your profile photo by copying it: `cp photo.jpg favicon.jpg`.
