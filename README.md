# Saibaba — Portfolio

A personal portfolio site for A. Saibaba, Senior UI/UX & AI Product Designer.
Built with React + Vite. Content lives in one place: `src/data/content.js`.

## Edit your content

Everything you'll want to change — name, links, project descriptions, stats,
certifications — is in `src/data/content.js`. No need to touch component
files unless you're changing layout.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy — GitHub + Netlify

**1. Push to GitHub**

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/saibaba-portfolio.git
git push -u origin main
```

(Create the empty repo on GitHub first at github.com/new — don't
initialize it with a README, or the push will conflict.)

**2. Connect to Netlify**

1. Go to app.netlify.com → Add new site → Import an existing project.
2. Choose GitHub, authorize, and select the `saibaba-portfolio` repo.
3. Build settings are already set via `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click Deploy. Netlify gives you a live URL in about a minute
   (something like `saibaba-portfolio.netlify.app`).
5. Every time you `git push`, Netlify rebuilds and redeploys automatically.

**3. Custom domain (optional)**

In Netlify: Site settings → Domain management → Add a domain. Point
your domain's DNS to Netlify following their on-screen instructions, or
buy one directly through Netlify.

## Structure

```
src/
  data/content.js      — all your text content, edit this first
  components/
    Nav.jsx             — header navigation
    Hero.jsx             — top section with name, tagline, tool pipeline
    Pipeline.jsx          — the animated "design to AI" signature graphic
    Work.jsx               — selected work / case studies
    Labs.jsx                — smaller side projects
    About.jsx                — bio, stats, certifications
    Contact.jsx                — footer with contact links
  App.jsx                       — page layout
  App.css                        — all styling
  index.css                       — design tokens (colors, fonts) + resets
```
