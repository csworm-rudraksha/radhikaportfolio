# Radhika Agarwal — Portfolio 🌿

> Full-Stack Developer & AI Engineer · GL Bajaj Institute of Technology & Management · CSE Batch 2028

A personal portfolio built with **React + Vite + Tailwind CSS v4** — warm beige/cream/brown theme, custom cursor, skills ticker, interactive project cards, and scroll-reveal animations.

---

## ✨ Features

- Custom animated cursor
- Sticky navbar with scroll spy
- Infinite skills ticker (pauses on hover)
- Horizontal project slider with expand-on-click cards
- Achievements grid, certifications, GFG club events
- Contact form that opens mail client
- Scroll reveal animations + grain texture

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Fonts | Playfair Display + DM Sans |
| Deployment | Vercel |

---

## 🚀 Getting Started

```bash
npm install
npm run dev
# → http://localhost:5173
```

```bash
npm run build    # production build
```

---

## 📁 Project Structure

```
src/
├── App.jsx
├── main.jsx
├── styles/index.css
├── assets/data/portfolio.js   ← all your content lives here
├── components/
│   ├── Cursor.jsx
│   ├── Navbar.jsx
│   ├── SkillsTicker.jsx
│   └── useReveal.js
└── sections/
    ├── Hero.jsx
    ├── Projects.jsx
    ├── Achievements.jsx
    ├── Certifications.jsx
    ├── ClubEvents.jsx
    └── Contact.jsx
```

---

## ✏️ Updating Content

Everything is in **one file** — `src/assets/data/portfolio.js`.

Update your name, links, projects, achievements, skills, and club events there. No need to touch any component file.

To add club event photos — drop images in `public/events/` and set `photo: '/events/filename.jpg'` in the event object.

---

## 🎨 Theme Colors

Edit the `@theme {}` block in `src/styles/index.css`:

```css
@theme {
  --color-bg:    #f5f0e8;
  --color-brown: #3d2b1f;
  --color-gold:  #c49a3c;
  /* and so on... */
}
```

---

## 🌐 Deploy on Vercel

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Click Deploy — live at `yourname.vercel.app` ✅

Auto-deploys on every `git push`.

---

## 📬 Contact

**Radhika Agarwal** · radhikaag18@gmail.com

*Built with curiosity · Deployed with ambition* 🌿
