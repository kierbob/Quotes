// Renders every quote from quotes.js onto the page.
// You shouldn't need to edit this file to add or change quotes.

(function () {
  const container = document.getElementById("quotes");
  if (!container || typeof QUOTES === "undefined") return;

  // Turn straight quotes into proper typographic ones for display.
  function typographic(text) {
    return text
      .replace(/(\w)'(\w)/g, "$1’$2")   // don't  → don’t
      .replace(/(^|\s)"/g, "$1“")       // opening "
      .replace(/"/g, "”")               // closing "
      .replace(/(^|\s)'/g, "$1‘")       // opening '
      .replace(/'/g, "’");              // closing '
  }

  // Newest first: the last quote in quotes.js is shown at the top.
  QUOTES.slice().reverse().forEach(function (quote, index) {
    if (index > 0) {
      const divider = document.createElement("div");
      divider.className = "divider";
      divider.setAttribute("aria-hidden", "true");
      divider.textContent = "⁂"; // ⁂
      container.appendChild(divider);
    }

    const article = document.createElement("article");
    article.className = "quote";

    if (quote.title) {
      const heading = document.createElement("h2");
      heading.className = "quote-title";
      heading.textContent = typographic(quote.title);
      article.appendChild(heading);
    }

    const body = document.createElement("div");
    body.className = "quote-body";
    (quote.paragraphs || []).forEach(function (text) {
      const p = document.createElement("p");
      p.textContent = typographic(text);
      body.appendChild(p);
    });
    article.appendChild(body);

    const author = document.createElement("p");
    author.className = "quote-author";
    author.textContent = "— " + (quote.author || "Bob");
    article.appendChild(author);

    if (quote.date) {
      const date = document.createElement("p");
      date.className = "quote-date";
      date.textContent = quote.date;
      article.appendChild(date);
    }

    container.appendChild(article);
  });

  // ---- View counter -------------------------------------------
  // Reads the total from GoatCounter and shows it top-right.
  // The site code comes from the <script data-goatcounter> tag in
  // index.html, so it only has to be set in one place. If the code
  // is still the placeholder, or the request fails, nothing is shown.
  const gc = document.querySelector("script[data-goatcounter]");
  const counter = document.getElementById("view-count");
  if (gc && counter && gc.dataset.goatcounter.indexOf("YOUR-CODE") === -1) {
    const base = gc.dataset.goatcounter.replace(/\/count\/?$/, "");
    fetch(base + "/counter/TOTAL.json")
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (data) {
        const n = parseInt(String(data.count).replace(/\D/g, ""), 10);
        if (isNaN(n)) return;
        counter.textContent = n.toLocaleString("en") + (n === 1 ? " view" : " views");
        counter.hidden = false;
      })
      .catch(function () { /* stay hidden */ });
  }
})();
