# Repository Guidelines

This repository contains the code for **PulseHub**, a Google Apps Script web app that centralizes employee resources and realtime updates.

## Structure
- All Google Apps Script files live in the repository root.
- Use `Code.gs` for server-side scripts and `index.html` for the main UI. Additional HTML or JavaScript files can also be placed in the root as needed.

## Design Requirements
- Base all colors and style elements on the company logo located at:
  `https://www.dublincleaners.com/wp-content/uploads/2025/06/LogosHQ.png`.
- The header must include:
  - The company logo on the far left (width `150px`).
  - A large centered title **"PulseHub"**.
  - A short subtitle describing the page's purpose.
  - The current date and time updated every second.
  - The current weather in Fahrenheit fetched from a free API (e.g. `api.open-meteo.com`).
- Align the title, subtitle, date/time, and weather vertically in the center of the header.
- Style the header background using a horizontal gradient with the three primary colors from the logo from left to right.

## Development Tips
- Use `HtmlService` in `Code.gs` to serve the `index.html` template.
- Use client‑side JavaScript to update the date/time every second and periodically refresh the weather data.
- Keep the design simple and impressive.

