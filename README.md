# PulseHub

PulseHub is a Google Apps Script web app that centralizes company resources, live information, and quick actions in a single dashboard experience.

---

## ✨ Key Features
- **Live dashboard** — displays the company logo, current date/time, and live weather.
- **Drag-and-resize frames** — every widget can be repositioned via its header and resized from the edges thanks to jQuery UI.
- **Quick edit mode** — double-click a frame title or body to edit copy and manage hyperlinks in place.
- **Tailwind-powered UI** — Tailwind CSS utilities keep the layout modern and mobile-first with minimal custom CSS.
- **Bilingual frame labels** — English labels display primary; Spanish appears underneath in smaller type. Date, time, and weather remain English-only.
- **Developer console** — Chrome-only editing tools are unlocked for verified developer emails stored in the script.

---

## 🧱 Architecture Overview
- **Apps Script backend** — `Code.gs` exposes `doGet`, `getFrames`, `saveFrames`, and `isDevUser` for the client. Persisted frame layouts live in Script Properties under the key `frames` as JSON.
- **Client bundle** — `index.html` renders the interface, loads Tailwind via CDN when running locally, and swaps to a pre-compiled stylesheet for production.
- **State flow** — the browser fetches frames via `google.script.run.getFrames()`, mutates them client-side, and persists with `saveFrames(frames)` when edits are confirmed.

---

## 📂 Repo Layout
| Path / File | Purpose |
|-------------|-------------------------------------------|
| `Code.gs`   | Server-side entry point & helper funcs |
| `index.html`| Main UI template (Tailwind + UI logic) |
| `*.html`    | Optional extra views/partials |
| `*.js`      | Optional client scripts (auto-bundled) |
| `AGENTS.md` | Development conventions & workflow guide |
| `README.md` | Project overview (this file) |

---

## 🚀 Quick Start
1. **Clone the project**
   ```bash
   git clone https://github.com/<you>/pulsehub.git
   cd pulsehub
   ```
2. **Link to Apps Script**
   Install [clasp](https://github.com/google/clasp) if you have not already, authenticate, then clone your script project:
   ```bash
   npm install -g @google/clasp
   clasp login
   clasp clone <your-script-id>
   ```
3. **Push updates**
   Replace the generated `Code.gs` and `index.html` with the files from this repo, then:
   ```bash
   clasp push
   ```
4. **Test in Apps Script**
   Use **Deploy → Test deployments** to load the latest build. Editing frames requires Chrome and a Google account on the developer allowlist in `Code.gs`.

---

## 🔧 Configuration Notes
- **Developer allowlist** — update the `allowed` array in `isDevUser()` (`Code.gs`) to include additional editors.
- **Seed frames** — if no data exists in Script Properties, `getFrames()` returns an empty array. You can pre-load frames by setting the `frames` property in the Apps Script UI or by calling `saveFrames([...])` with sample data.
- **Local styling** — when running from `localhost`, Tailwind’s CDN build stays enabled for rapid iteration; production builds fall back to the static stylesheet defined in `index.html`.
- **Hot reload tip** — while developing locally, you can inject the EventSource snippet outlined in `AGENTS.md` to auto-refresh on asset changes.

---

## 🤝 Contributing
Please review `AGENTS.md` for code style and workflow expectations. Keep functions focused, respect the bilingual labeling convention, and remove unused CSS/JS to maintain performance.
