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
})();
