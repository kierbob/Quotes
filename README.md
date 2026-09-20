# Thoughts, in words.

A small personal book of quotes that lives on the internet.
Plain HTML, CSS and JavaScript. No build step, no dependencies to install.

## The files

| File        | What it is                                                             |
|-------------|------------------------------------------------------------------------|
| `quotes.js` | **All the quotes live here. This is the only file you edit day to day.** |
| `index.html`| The page itself. Holds the site title and subtitle.                    |
| `style.css` | How everything looks (colours, fonts, spacing).                        |
| `script.js` | Reads `quotes.js` and draws the quotes onto the page. Leave it alone.  |
| `favicon.svg` | The little icon in the browser tab.                                  |
| `.nojekyll` | Empty file that tells GitHub Pages to publish the files as they are.   |

To preview locally, just double‑click `index.html`. It opens in your browser.

---

## 1. Add a quote

Open `quotes.js`. Every quote is a block like this:

```js
  {
    title: "The Example",
    paragraphs: [
      "First paragraph...",
      "Second paragraph..."
    ],
    author: "Bob",
    date: "20 September 2026"
  },
```

To add one:

1. Copy an existing block (from `{` to `},`).
2. Paste it at the **bottom** of the list. The page shows quotes newest‑first, so the last one in the file appears at the top of the page.
3. Change the `title`, the `paragraphs`, the `date`, and (if needed) the `author`.
4. Save. Refresh the page. Done.

Things to watch:

- Each paragraph is its own line in quotes, separated by commas. A quote with one paragraph just has one line.
- Every block needs a comma after its closing `}` **except** the very last one (a trailing comma there is fine too, browsers don't mind).
- Don't put quotation marks around the quote text. The page styles it for you.
- If your text contains a double quote `"`, put a backslash before it: `\"like this\"`.
- Straight apostrophes (`don't`) are turned into curly ones (`don’t`) automatically, so type them however you like.
- If you leave out `author`, it defaults to "Bob".
- `date` is just text shown under the author line. Write it however you like ("20 September 2026", "Sept 2026", "2026"…) or leave it out and nothing is shown.

## 2. Edit a quote

Open `quotes.js`, find the quote (search for its title), change the text, save. That's it.

## 3. Remove a quote

Open `quotes.js`, delete the whole block from its `{` down to and including its `},`. Save.

## 4. Change the website title

Open `index.html`. The title appears in two places, both marked with a comment:

```html
<!-- The title shown in the browser tab -->
<title>Thoughts, in words.</title>
```

```html
<!-- The title shown at the top of the page -->
<h1>Thoughts, in words.</h1>
<p class="book-subtitle">A small book of quotes by Bob</p>
```

Change the text in both. The subtitle and the dedication line ("Thank you for reading.") under the `<h1>` can be edited or deleted too.

At the very bottom of `index.html` is the colophon line, `Set in EB Garamond · 2026–`. Change the year range there as the book grows (for example `2026–2028`).

Colours, sizes and spacing are at the very top of `style.css` under `:root` if you ever want to tune them. The site is dark by default; a comment there lists the values to swap in for a light, paper-coloured version.

## 5. Put it on GitHub Pages

Do this once:

1. Sign in to GitHub and create a new repository (for example `quotes`). Make it **Public**. Don't tick any of the "initialise with" boxes.
2. Upload the files. Easiest way: on the empty repo page click **uploading an existing file**, drag in `index.html`, `style.css`, `script.js`, `quotes.js`, `favicon.svg`, `.nojekyll` and `README.md`, then click **Commit changes**.
3. In the repository go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and `/ (root)` folder, and click **Save**.
5. Wait a minute or two, then refresh the Pages settings page. It will show your link, something like:

   `https://YOUR-USERNAME.github.io/quotes/`

That's the link for your Discord bio.

### Updating it later

Whenever you add or change quotes:

1. Open the repo on GitHub, click `quotes.js`, click the pencil icon (Edit), make your change, and click **Commit changes**.
   Or, if you edit the file on your computer, go to **Add file → Upload files** and drop the new `quotes.js` in to replace the old one.
2. GitHub Pages rebuilds automatically. The live site updates within a minute or so. If you still see the old version, do a hard refresh (Ctrl+Shift+R, or Cmd+Shift+R on a Mac).

If you're comfortable with git, it's just:

```bash
git add quotes.js
git commit -m "Add a quote"
git push
```

## 6. The view counter

The number in the top right comes from [GoatCounter](https://www.goatcounter.com), a free, privacy‑friendly counter (no cookies, no tracking of individuals). It also gives you a private dashboard with views per day.

One‑time setup:

1. Go to <https://www.goatcounter.com/signup> and create a free account. Pick a **code** — say `bobquotes`. Your dashboard will be at `https://bobquotes.goatcounter.com`.
2. In the GoatCounter dashboard go to **Settings → Site settings** and tick **"Allow adding visitor counts to your website"**, then save. (Without this the number can't be shown on the page.)
3. Open `index.html` and find this line near the top:

   ```html
   <script data-goatcounter="https://YOUR-CODE.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
   ```

   Replace `YOUR-CODE` with your code, e.g. `https://bobquotes.goatcounter.com/count`. Save and upload.

That's it. The counter is hidden until the code is set, and also hidden if GoatCounter ever can't be reached, so the page never shows a broken number. Views from your own computer while previewing locally are not counted.

To remove the counter entirely, delete that `<script>` line in `index.html`.

---

## Notes

- The quote font is [EB Garamond](https://fonts.google.com/specimen/EB+Garamond), loaded from Google Fonts. If it can't load (no internet, or you'd rather not use it), the page quietly falls back to a similar serif that's already on the reader's device. To remove it entirely, delete the three `<link ... fonts.g...>` lines in `index.html`.
- There is nothing else to maintain: no accounts, no build tools, no packages to update.
