# Phyto Link Venture — marketing site

The public site at **https://phytolink-venture.com**. Next.js (App Router) +
React 19 + Tailwind, built with `output: 'standalone'` so it ships as a single
container.

Pages: home, `/chatbranch` (+ `/chatbranch/updates`), `/iot-system`, `/tools`
(+ `/tools/[slug]`), `/contact`, `/signup`, `/privacy`, `/terms`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
docker build -t phytolink-website .
```

## The ChatBranch live-chat widget

The chat bubble comes from one script tag in `src/app/layout.tsx`. It sits at the
**end of `<body>` with `defer`**, and both of those matter:

```tsx
<script
  src="https://chatbranch.phytolink-venture.com/api/widget.js"
  data-token="wgt_…"
  defer
/>
```

- `widget.js` mounts itself with `document.body.appendChild(...)` the moment it
  executes, and reads its own `data-token` off `document.currentScript`.
- **Do not use `async`.** React 19 treats `<script async src>` as a hoistable
  element and moves it into `<head>`, where on a warm cache it can execute before
  `<body>` exists — `document.body` is then `null`, the script throws, and there
  is no chat bubble at all. Intermittent and easy to miss.
- `defer` stays non-blocking, is not hoisted, and runs after parsing.

To check a build, the tag must appear *after* `</head>` in the served HTML:

```bash
curl -s https://phytolink-venture.com/ | grep -o '<script[^>]*widget\.js[^>]*>'
```

The token is a **public** widget token — it ships in the page by design and is
not a secret. The widget's appearance, greeting and AI behaviour are configured
in ChatBranch, not here.
