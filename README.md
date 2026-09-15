## Files
- `index.html` — onboarding page. "Create" mode generates a blank scanner (ID + QR) with
  no business info required. "Configure" mode (`index.html?id=...`) is where you fill in
  the business name, Google review link, and optionally customize the questions.
- `r.html` — the customer-facing questionnaire. Reads `?id=...` from the URL, fetches that
  business's config, and renders the form.
- `questions-default.js` — the default question/option/sentence bank, shared by both pages.
- `netlify/functions/save-config.js`, `get-config.js` — read/write a business's config to
  Netlify Blobs.
