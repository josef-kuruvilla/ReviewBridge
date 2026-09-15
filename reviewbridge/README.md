# ReviewBridge — deployment notes

This version stores each business's details in **Netlify Blobs**, accessed through two
serverless functions (`netlify/functions/save-config.js` and `get-config.js`). That means
the simple drag-and-drop deploy you used before won't work anymore — Netlify Drop is
static-files-only and can't run functions. Use one of these instead:

## Option A — Connect a GitHub repo (recommended)
1. Push this whole folder to a new GitHub repository.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Leave the build command blank and set the publish directory to `.` (this is already
   set in `netlify.toml`). Netlify will install `@netlify/blobs` and deploy the functions
   automatically on every push.

## Option B — Netlify CLI
```
npm install -g netlify-cli
cd reviewbridge
netlify login
netlify init        # or: netlify link, if the site already exists
netlify deploy --prod
```
The CLI bundles the functions and dependencies for you — no manual `npm install` needed
beforehand.

## Files
- `index.html` — onboarding page. "Create" mode generates a blank scanner (ID + QR) with
  no business info required. "Configure" mode (`index.html?id=...`) is where you fill in
  the business name, Google review link, and optionally customize the questions.
- `r.html` — the customer-facing questionnaire. Reads `?id=...` from the URL, fetches that
  business's config, and renders the form.
- `questions-default.js` — the default question/option/sentence bank, shared by both pages.
- `netlify/functions/save-config.js`, `get-config.js` — read/write a business's config to
  Netlify Blobs.

## Testing locally
`netlify dev` runs the whole thing (static files + functions + Blobs emulation) on
`localhost` — much easier than manually checking after every deploy.

## Backward compatibility
Old links in the format `r.html?d=<base64>` (from before this version) still work — they
just won't have custom questions, since that data wasn't encoded in them.
