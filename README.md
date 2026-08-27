# Rahul Yadav — Portfolio

A personal portfolio website built with React + Vite + Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Where to edit things

All personal content lives in `src/data/` — edit these plain JS files, no
need to touch component code:

| File | What it controls |
|---|---|
| `src/data/profile.js` | Name, headline, about text, email, resume path, interests |
| `src/data/education.js` | Education timeline |
| `src/data/skills.js` | Skills grouped by category |
| `src/data/projects.js` | Project cards + links |
| `src/data/certificates.js` | Certificate cards + file paths |
| `src/data/social.js` | GitHub / LinkedIn / HackerRank / Kaggle / LeetCode links |

### Profile photo
Replace `public/profile/profile.jpg` with your own photo (same filename),
or update `photo` in `src/data/profile.js` to point elsewhere.

### Resume
Add your PDF to `public/resume/` as `YOUR_RESUME_FILE.pdf`, or update
`resumeUrl` in `src/data/profile.js`.

### Certificates
Certificate files already live in `public/certificates/`. To add or replace
one, drop the file in that folder and update the matching `file` path in
`src/data/certificates.js`.

### Kaggle / LeetCode / project links
Search for `YOUR_` in `src/data/` — every placeholder uses that prefix, so
it's easy to find what still needs filling in.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: Vite (auto-detected). Build command: `npm run build`.
   Output directory: `dist`.
4. Click **Deploy**.

Every push to your main branch will redeploy automatically.
