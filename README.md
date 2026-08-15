# Prathamesh Umap — Portfolio Site

A single-page portfolio built from your résumé: hero, summary, skills, experience timeline,
education and contact — plus an animated biometric-login phone mockup as the visual centerpiece
(a nod to the banking apps you've shipped).

No build step. Pure HTML/CSS/JS — works straight on GitHub Pages.

## Files
```
index.html
style.css
script.js
assets/Prathamesh_Umap_Resume.pdf   ← linked from the "Download CV" buttons
```

## Deploy on GitHub Pages (free, ~2 minutes)

1. **Create a new repository** on GitHub, e.g. `prathamesh-umap-portfolio`.
   - Keep it **Public** (required for free GitHub Pages).
2. **Upload these files** to the repo root (keep the `assets/` folder as-is):
   - Easiest way: on the repo page, click **Add file → Upload files**, drag in
     `index.html`, `style.css`, `script.js`, and the `assets` folder, then **Commit changes**.
   - Or via git:
     ```bash
     git init
     git add .
     git commit -m "Portfolio site"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<repo-name>.git
     git push -u origin main
     ```
3. **Turn on Pages**: repo → **Settings → Pages**.
   - Under "Build and deployment", set **Source** to `Deploy from a branch`.
   - Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait ~1 minute, then refresh that Pages settings page — it will show your live URL:
   `https://<your-username>.github.io/<repo-name>/`

That's it — no npm install, no build command, nothing to configure.

## Customising

- **Colours / fonts**: all in the `:root` block at the top of `style.css`.
- **Copy**: edit text directly in `index.html` (sections are labelled with HTML comments).
- **Resume PDF**: swap the file in `assets/` (keep the same filename, or update the two
  `href="assets/..."` links in `index.html`).
- **Contact links**: update the `mailto:` and `tel:` links in the contact section if your
  email or number changes.
