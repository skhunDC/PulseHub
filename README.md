# PulseHub

Google Apps Script web app that puts company resources, real-time info, and quick tools in one place.

---

## ✨ Key Features
- **Live dashboard** — logo, current date/time (updates every second), and current weather.
- **Drag-and-resize frames** — reposition widgets via header; edges resize.
- **Quick edit mode** — double-click frame title/body to edit, then use toolbar buttons to insert or delete hyperlinks.
- **Accessible typography** — frame titles enlarged 50 % and centered for rapid scanning.
- **Zero-install front-end** — vanilla HTML/CSS/JS served by Google Apps Script (no build step).

---

## 📂 Repo Layout
| Path / File   | Purpose                                   |
|---------------|-------------------------------------------|
| `Code.gs`     | Server-side entry point & helper funcs    |
| `index.html`  | Main UI template (inlines CSS + JS)       |
| `*.html`      | Optional extra views/partials             |
| `*.js`        | Optional client scripts (auto-bundled)    |
| `AGENTS.md`   | Dev rules & contribution guide            |
| `README.md`   | What you’re reading now                   |

---

## 🚀 Quick Start

1. **Fork / clone**
   ```bash
   git clone https://github.com/<you>/pulsehub.git
   cd pulsehub
