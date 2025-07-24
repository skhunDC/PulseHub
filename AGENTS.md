# AGENTS.md — PulseHub

## Purpose  
Sets the ground rules for anyone working on **PulseHub**, a Google Apps Script web app that centralizes employee resources and realtime updates.

---

## 1. Repository Layout  
| Path / File               | What it contains | Notes |
|---------------------------|------------------|-------|
| `Code.gs`                 | Server-side logic, HTTP handlers, GAS utilities | Keep public functions first, private helpers below. |
| `index.html`              | Main UI template | Loads all CSS/JS via `<script>` / `<style>` tags or external files. |
| `*.html`, `*.js`          | Extra views or client scripts | Place in repo root; GAS bundles automatically. |
| `README.md`               | High-level project overview | Link out to this AGENTS.md. |
| `/.github/workflows/*`    | CI (e.g., gas-clasp-action) | Optional but recommended. |

---

## 2. Design Principles  
1. **User first** — clean layout, large touch targets, clear copy.  
2. **Fast** — aim for sub-100 ms client interactions; cache aggressively.  
3. **Minimal** — only ship assets actually used (remove dead CSS/JS).  
4. **Accessible** — contrast ≥ 4.5:1, ARIA labels, keyboard-only nav.  
5. **Single-responsibility** — keep each file focused; no monolithic scripts.

---

## 3. Development Workflow  
1. `npm i -g @google/clasp` (or use Docker image).  
2. `clasp login && clasp clone <scriptId>`  
3. Edit locally → `clasp push` → test in **Script Editor** “Deploy > Test deployments”.  
4. For live updates: `clasp push --watch`.  

### Hot-Reload Tip  
In `index.html` add:

```html
<script>
if (location.hostname === 'localhost') {
  new EventSource('/esbuild').addEventListener('change', () => location.reload());
}
</script>
```

---

## 4. Modern UI Guidelines
- Tailwind CSS powers the interface. When running locally the CDN build loads automatically; production uses a pre-compiled stylesheet. Keep custom CSS minimal (only for things like the resizer handle).
- Write markup mobile-first. Scale up with responsive utilities as needed.
- Frames should display English text with the Spanish translation underneath in a smaller font. Date, time and weather appear in English only.
- The employee dashboard is view-only. Editing frames requires Chrome and a verified developer email.
