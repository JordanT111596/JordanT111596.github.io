# Jordan Triplett's React Portfolio

My personal portfolio, built with React, TypeScript, Vite, and Bootstrap. It has a short bio, my resume, links to my LinkedIn and GitHub, a contact form, and a portfolio of my work at Workday, Fluid Truck, and Union plus a few personal projects.

This site can be found at https://jordant111596.github.io/

## Running locally

Requires Node 24 (see `.nvmrc`; run `nvm use` if you use nvm).

```bash
npm install
npm start
```

## Checks

```bash
npm run lint           # ESLint + Prettier (npm run lint:fix to auto-fix)
npm run typecheck      # strict TypeScript compile check
npm run test:coverage  # Vitest unit tests; fails if coverage drops below 80%
npm run check          # all of the above
```

GitHub Actions runs `npm run check` and a build on every push and pull request to `develop`.

## Project layout

| Path                            | What lives there                                  |
| ------------------------------- | ------------------------------------------------- |
| `src/types.ts`                  | Shared types                                      |
| `src/data/`                     | Site content (projects, links)                    |
| `src/components/`, `src/pages/` | React components and pages                        |
| `src/utils/`                    | Small helpers, like building the contact email    |
| `src/tests/unit*.spec.ts(x)`    | Unit tests                                        |
| `public/`                       | Files copied as-is into the build (resume, icons) |

## Deploying

The `develop` branch holds the source code. GitHub Pages serves the built site from the `gh-pages` branch.

```bash
npm run deploy
```

This runs lint, the type check, and the tests, builds the app into `dist`, and pushes it to `gh-pages`. The build also copies `index.html` to `404.html`, so refreshing on a page like `/portfolio` still loads the app instead of a GitHub 404.

## Demo

![Image of React Portfolio Site](src/Assets/Images/React-Portfolio-Demo.gif?raw=true "Image of the Deployed React Portfolio")
