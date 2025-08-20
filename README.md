# Info Site – Vite + React + TypeScript

A fast, modern information site built with Vite, React 19, TypeScript, TailwindCSS v4, and modular SCSS.

## 🚀 Features

-   React 19 + Vite 7 (instant dev, optimized builds)
-   TypeScript (strict) with path aliases (`@/*`, `@pages/*`, `@layouts/*`, `@routes/*`)
-   TailwindCSS v4 + SCSS Modules (component-scoped styles)
-   Clean structure with pages, layouts, sections, and UI components
-   Jest + React Testing Library setup with JSDOM
-   SEO files (`public/robots.txt`, `public/sitemap.xml`) and meta in `index.html`

## 🛠️ Tech Stack

-   Framework: React 19 + Vite 7
-   Language: TypeScript
-   Styling: TailwindCSS v4 + SCSS Modules
-   Testing: Jest 30 + RTL + jest-dom
-   Linting: ESLint 9

## 📁 Project Structure

```
info-site/
├── public/                 # Static files (icons, robots.txt, sitemap, env config)
│   └── c.js                # window.envConfig at runtime (optional)
├── src/
│   ├── pages/
│   │   └── home/           # Home page
│   ├── layouts/
│   │   └── main-layout/    # App shell (Header/Footer)
│   ├── routes/             # Central routes (lazy-loaded)
│   ├── components/
│   │   ├── common/         # Header/Footer
│   │   ├── sections/       # Hero, Services, etc.
│   │   └── ui/             # Button, Input, Card, ...
│   ├── styles/
│   │   ├── tailwind.scss   # Tailwind v4 entry
│   │   └── globals.scss    # Global CSS only
│   ├── tests/
│   │   └── setup/
│   │       └── jest.setup.js  # Jest env setup (JSDOM, polyfills)
│   ├── types/              # Global and feature types
│   ├── utils/              # Utilities and test-utils
│   ├── App.tsx             # App routes with BrowserRouter
│   └── main.tsx            # Vite entry (mounts React root)
├── index.html              # Vite HTML entry (SEO/meta)
├── tailwind.config.ts      # Tailwind v4 config
├── jest.config.ts          # Jest config (maps setup file and aliases)
├── tsconfig.json           # TS config (paths, strict)
└── package.json
```

## ⚙️ Getting Started

Requirements:

-   Node.js ≥ 20.9.0
-   Yarn (recommended)

Install and run:

```bash
yarn install
yarn dev
```

Open http://localhost:5173 (Vite default) in your browser.

## 🧪 Testing

-   Setup file: `src/tests/setup/jest.setup.js` (referenced in `jest.config.ts` via `setupFilesAfterEnv`)
-   Run tests:

```bash
yarn test             # run once
yarn test-watch       # watch mode
yarn test-coverage    # with coverage
yarn test-ci          # CI-friendly
```

Tests follow Arrange → Act → Assert. Use `@/utils/test-utils` for rendering.

## 🧭 Path Aliases

Configured in `tsconfig.json`:

```json
{
    "paths": {
        "@/*": ["./src/*"],
        "@pages/*": ["./src/pages/*"],
        "@layouts/*": ["./src/layouts/*"],
        "@routes/*": ["./src/routes/*"]
    }
}
```

## 🧰 Scripts

```bash
yarn dev             # start Vite dev server
yarn build           # build for production
yarn start           # preview build locally
yarn lint            # run ESLint
yarn test            # run tests
yarn test-watch      # run tests in watch mode
yarn test-coverage   # run tests with coverage
yarn test-ci         # run tests in CI
```

## 🌐 Runtime Config & Sentry

-   Optional runtime env: define `window.envConfig` in `public/c.js`
-   Sentry is initialized in `sentry.client.config.ts` when `window.envConfig.sentry` exists

## 🧩 Styling Guidelines

-   Use Tailwind utility classes primarily
-   Use SCSS Modules per-component (`component-name.module.scss`)
-   Keep `globals.scss` minimal (variables, base, scrollbar, print)

## 🔍 SEO

-   Set meta tags in `index.html`
-   `public/robots.txt` and `public/sitemap.xml` included

## 📄 License

MIT
