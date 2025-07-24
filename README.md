# PulseHub

Google Apps Script web app that puts company resources, real-time info and quick tools in one place.

---

## ✨ Key Features
- **Live dashboard** — logo, current date/time, and current weather.
- **Drag-and-resize frames** — reposition widgets via header; edges resize.
- **Quick edit mode** — double-click frame title or body to edit and manage hyperlinks.
- **Tailwind UI** — modern look driven by Tailwind CSS utilities.
- **Bilingual frame labels** — frame headers show Spanish text under the English label. Date, time and weather are English only.
- **Developer Console** — Chrome-only, OAuth protected for listed emails.

---

## 📂 Repo Layout
| Path / File | Purpose |
|-------------|-------------------------------------------|
| `Code.gs`   | Server-side entry point & helper funcs    |
| `index.html`| Main UI template (loads Tailwind & JS)    |
| `*.html`    | Optional extra views/partials             |
| `*.js`      | Optional client scripts (auto-bundled)    |
| `AGENTS.md` | Dev rules & contribution guide            |
| `README.md` | What you’re reading now                   |

---

## 🚀 Quick Start
1. **Fork / clone**
   ```bash
   git clone https://github.com/<you>/pulsehub.git
   cd pulsehub
   ```
2. **Install dev deps for tests**
   ```bash
   npm install
   npm test
   ```
3. **Deploy**
   Use [clasp](https://github.com/google/clasp) to push `Code.gs` and `index.html` to Apps Script.

The app loads Tailwind from CDN when run locally and falls back to a pre-built stylesheet in production. Frame titles display Spanish translations beneath the English text while the date, time and weather appear only in English. Editing frames is restricted to Chrome users whose Google account matches one of the emails in `Code.gs`.
