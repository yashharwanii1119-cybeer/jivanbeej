# Jivan Beej - Landing Page

A minimal, professional, and fully responsive landing page for `jivanbeej.com`.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` (comes with Node.js)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run locally:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the page.

## Building for Production

To create an optimized production build:
```bash
npm run build
```
This will generate a `dist` directory containing the final static files.

## Deploying to GitHub Pages

Since you want to use the custom domain `jivanbeej.com`, the project requires building the static files and pushing them to a GitHub repository, then configuring GitHub Pages.

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to your GitHub repository:**
   Create a new repository on GitHub (e.g., `jivanbeej-landing`) and push this code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

3. **Deploy the `dist` folder to GitHub Pages:**
   A simple way to deploy the `dist` folder to a `gh-pages` branch is to use the `gh-pages` npm package.
   
   Run:
   ```bash
   npx gh-pages -d dist
   ```
   *Note: Ensure you build (`npm run build`) before running this command.*

4. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub.
   - Navigate to the "Pages" section on the left sidebar.
   - Under "Build and deployment", ensure the source is set to "Deploy from a branch".
   - Select the branch where your static files are (usually `gh-pages` if you used the command above) and the root folder `/`.
   - Click "Save".

## Connecting the Custom Domain (`jivanbeej.com`)

1. **In GitHub Settings:**
   - In the "Pages" section of your repository settings, find the "Custom domain" field.
   - Enter `jivanbeej.com` and click "Save".
   - (This creates a `CNAME` file in the root of your publishing source. If you redeploy using `gh-pages`, you may need to add a `CNAME` file in your `public` folder containing `jivanbeej.com` to prevent it from being overwritten.)

2. **In your DNS Provider (Domain Registrar):**
   - Log in to the service where you bought `jivanbeej.com`.
   - Go to DNS settings / DNS management.
   - Add **A Records** pointing to GitHub's IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add a **CNAME Record** for `www`:
     - Name: `www`
     - Target: `YOUR_USERNAME.github.io`
   
   *Note: DNS changes can take a few minutes to up to 48 hours to propagate.*
   
3. **Enforce HTTPS:**
   - Back in your GitHub Pages settings, once the DNS check passes, check the "Enforce HTTPS" box.

## Project Structure

This project is built using React and Vite, kept extremely lightweight with zero unnecessary dependencies.

- `index.html`: Main HTML entry
- `src/App.jsx`: Main landing page component
- `src/index.css`: Global styles, dark mode, typography, and animations
