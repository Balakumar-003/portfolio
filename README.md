# Portfolio - BALAKUMAR S

This repository contains a simple, accessible static portfolio for Balakumar S (MLOps Enthusiast).

Files added:
- [index.html](index.html)
- [css/styles.css](css/styles.css)
- [js/main.js](js/main.js)
- [resume.pdf](resume.pdf)

To preview locally, open `index.html` in your browser or run a simple static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Replace `resume.pdf` with your real resume file to enable the download button.

This project was converted to a React + Vite application.

Run locally:

```bash
npm install
npm run dev
# then open the URL shown by Vite (usually http://localhost:5173)
```

Notes:
- `index.html` is now the Vite entry and the React app lives in `src/`.
- Styles are imported from `css/styles.css`.
- Replace `resume.pdf` with your real resume to enable the resume link.

Next steps: customize copy, add project thumbnails, or deploy to Vercel/GitHub Pages.
