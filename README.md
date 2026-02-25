# Misbahur Rahman — Portfolio

A minimal, production-ready portfolio built with **React + Vite**.

## Tech Stack

- React 18
- Vite 5
- CSS Modules (zero UI libraries)
- Google Fonts (DM Serif Display + DM Sans)

## Project Structure

```
portfolio/
├── index.html                  # Entry HTML + SEO meta tags
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css          # CSS variables, resets, animations
    ├── components/
    │   ├── Navbar.jsx / .module.css
    │   ├── Button.jsx / .module.css
    │   ├── Section.jsx / .module.css
    │   ├── ProjectCard.jsx / .module.css
    │   └── Footer.jsx / .module.css
    └── sections/
        ├── Hero.jsx / .module.css
        ├── About.jsx / .module.css
        ├── Projects.jsx / .module.css
        └── Contact.jsx / .module.css
```

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## Build for Production

```bash
npm run build
# Output is in /dist — ready to upload anywhere
```

## Deploy to Vercel

**Option A — Vercel CLI (recommended)**

```bash
npm install -g vercel
vercel
# Follow the prompts — framework auto-detected as Vite
```

**Option B — GitHub Integration**

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Framework: **Vite** (auto-detected)
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy** ✅

## Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add New Site → Import from Git
3. Build Command: `npm run build`
4. Publish Directory: `dist`
5. Click **Deploy** ✅

Or drag-and-drop the `dist/` folder directly into Netlify's dashboard.

## Customization

- **Colors**: Edit CSS variables in `src/styles/global.css`
- **Projects**: Edit the `projects` array in `src/sections/Projects.jsx`
- **Skills**: Edit the `skills` object in `src/sections/About.jsx`
- **Contact links**: Edit the `contacts` array in `src/sections/Contact.jsx`
- **GitHub links**: Update your actual repo URLs in `Projects.jsx`
