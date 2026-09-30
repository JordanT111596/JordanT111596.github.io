# Jordan Triplett's React Portfolio

My personal portfolio, built with React, TypeScript, and Bootstrap. It has a short bio, my resume, links to my LinkedIn and GitHub, a contact form, and a portfolio of my work at Workday, Fluid Truck, and Union plus a few personal projects.

This site can be found at https://jordant111596.github.io/

## Running locally

```bash
npm install
npm start
```

## Checks

```bash
npm run typecheck      # strict TypeScript compile check
npm run test:coverage  # unit tests; fails if coverage drops below 80%
```

Shared types live in `src/types.ts`, site content lives in `src/data/`, and unit tests live in `src/tests/unit*.spec.ts(x)`.

## Deploying

The `develop` branch holds the source code. GitHub Pages serves the built site from the `gh-pages` branch.

```bash
npm run deploy
```

This runs the type check and tests, builds the app, and pushes the `build` folder to `gh-pages`. The build also copies `index.html` to `404.html`, so refreshing on a page like `/portfolio` still loads the app instead of a GitHub 404.

## Demo

![Image of React Portfolio Site](src/Assets/Images/React-Portfolio-Demo.gif?raw=true "Image of the Deployed React Portfolio")
