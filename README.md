# biojameskim - academic website

Made to be a minimal, single-page research site. No build step — just HTML, CSS, and vanilla JS. 

Feel free to fork this website for your personal use. Would appreicate minimal attribution, for the open-source community.

## Preview locally

Open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing

Almost everything you'll want to change lives in **`data.js`**.

| Want to change...              | Edit...                                    |
| ------------------------------ | ------------------------------------------ |
| Name, role, affiliation        | `data.js` → top of the `CV` object         |
| Bio paragraphs                 | `data.js` → `bio` (array of strings)       |
| Email/LinkedIn/Scholar/etc.    | `data.js` → `links`                        |
| Add a news item                | `data.js` → `news` (most recent first)     |
| Add a publication              | `data.js` → `publications`                 |
| Education / research / work    | `data.js` → corresponding array            |
| Teaching / service             | `data.js` → `teaching` / `service`         |
| Headshot                       | drop `photo.jpg` (or `.png` / `.webp`) in `assets/` |
| CV pdf                         | drop `cv.pdf` in `assets/`                 |
| Favicon (rendered as a circle) | drop `favicon.jpg` (or `.png` / `.webp`) in `assets/` |
| Footer year / last-updated     | `data.js` → `footer`                       |
| Accent color / font / spacing  | `styles.css` → `:root` at the top          |
| Page layout / how things render| `index.html`                               |

### Adding a new entry (example)

To add a publication, duplicate an existing object in `publications` and edit it:

```js
{
  title: "Some new paper",
  authors: "James J. Kim, Collaborator One, Collaborator Two, et al.",
  authorsShown: 2,  // optional — truncates authors after this many, with a
                     // "… and N more" toggle that expands inline on click
  venue: "NeurIPS '27",
  year: "2027",
  links: [                                  // optional; displayed in this order
    { label: "Paper", href: "https://example.com/paper" },
    { label: "Website", href: "https://example.com/project" },
    { label: "GitHub", href: "https://github.com/you/repo" },
    { label: "Press", href: "https://example.com/article" },
  ],
},
```

The `links` array is optional. Add any number of links with your own labels; they render below the venue in the order listed.

### Hiding a section

The News section auto-hides when `news` is an empty array (`news: []`).
To hide another section, remove or comment out its `<section>` block in `index.html`.

### Changing the accent color

In `styles.css`, replace the three `--accent*` lines under `:root`. Presets are listed in a comment right above them (indigo, rust, forest, plum, ink).

## Files

- `index.html` — page structure + render script
- `data.js` — all content (edit this for 99% of updates)
- `styles.css` — styles and design tokens
- `assets/` — drop your headshot (`photo.jpg`) and CV (`cv.pdf`) here
