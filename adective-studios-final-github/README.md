# Adective Studios Website

This folder contains the final multi-page static website, ready for GitHub Pages.

## Files

- `index.html` — homepage
- `about.html`, `services.html`, `work.html`, `process.html`, `contact.html` — website pages
- `styles.css` and `script.js` — shared styling and behavior
- `assets/` — logo and other site assets
- `.github/workflows/deploy.yml` — deploys to GitHub Pages when changes are committed to `main`

## Upload and publish

1. Upload the contents of this folder to the root of your GitHub repository. Keep `index.html` at the repository root. Include the hidden `.github` folder and its workflow file.
2. In the repository, open **Settings → Pages** and set the deployment source to **GitHub Actions**.
3. The workflow publishes the site after a commit to `main`.
4. Add your custom domain under **Settings → Pages**, then enter the DNS records GitHub provides at GoDaddy. Preserve MX and mail-related TXT records used by company email.

The video previews stream from the published Canva portfolio, so keep that portfolio publicly available.