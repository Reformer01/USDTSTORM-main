# USDTSTORM Frontend

Static marketing site and dashboard for the STORMGAIN investment platform. The project is a collection of HTML pages with shared assets (Bootstrap, Slick slider, custom scripts) plus a PHP helper for contact form submissions.

## Getting Started

1. Install PHP 8+ (for the contact endpoint) and any static file server of your choice.
2. Serve the project root. Example with PHP:
   ```bash
   php -S localhost:8080
   ```
3. Visit `http://localhost:8080/index.html` for the marketing pages or `http://localhost:8080/db/dashboard/index.html` for the dashboard template.

## API Settings

The front-end communicates with the hosted backend defined in `api.js`. Update `API_URL` there if you deploy your own API.

## Contact Form

- Submissions post to `contact.php`, which logs the message to `storage/contact-messages.log` and attempts to forward it to `support@usdtstormgain.com`.
- Ensure the server has write permission to the `storage` directory and that `mail()` (or an alternative transport) is configured.

## Development Notes

- `assets/js/main.js` contains shared UI behavior (menus, sliders, popups, Google Translate).
- Dashboard pages in `db/dashboard` now load AmCharts assets directly from the CDN; make sure outbound network access is allowed in your hosting environment.

## Contributing

Please open a pull request describing the changes. Keep edits self-contained and avoid reformatting unrelated sections to ease reviews.

