# 🚀 Portfolio Mini App

A dark, responsive Telegram Mini App portfolio, AI Backend Engineer. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and the Telegram WebApp SDK.

![CI](https://github.com/vitaliyparygin/portfolio-miniapp/actions/workflows/ci.yml/badge.svg)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=vitaliy-parygin-portfolio)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)
![Telegram](https://img.shields.io/badge/Telegram-Mini%20App-26A5E4?logo=telegram)
![Tests](https://img.shields.io/badge/Tests-Vitest-6E9F18?logo=vitest)

## Run locally

```bash
npm install
npm run dev
```

To preview it inside Telegram locally, expose the Vite server through an HTTPS tunnel and configure that URL in BotFather as the bot's Mini App URL.

## Environment

Copy `.env.example` to `.env` and replace the placeholders:

```bash
VITE_TELEGRAM_USERNAME=your_telegram_username
VITE_GITHUB_URL=https://github.com/your
VITE_EMAIL=your@email.com
```

`VITE_TELEGRAM_USERNAME` is used for the Telegram contact button. The app still works outside Telegram; it only uses Telegram user data when the SDK is available.

## Run tests

```bash
npm run test:run
```
## CV

Place the real PDF at:

```
public/cv/cv.pdf
and replase data/portfolio.tsx::cv.download
```

The Download CV buttons already point to this public path.

## Your portfolio online for 5 minutes free

````
1.Fork

2.Replace

files:
public/favicon.ico
public/cv/resume.pdf
info:
src/data/*.ts

3.Deploy to Vercel

Done.
````


## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel detects Vite automatically. Use `npm run build` and `dist` if prompted.
4. Add the variables from `.env.example` in Vercel's environment settings.
5. Deploy and set the generated HTTPS URL as your Telegram bot's Mini App URL in BotFather.

The included `vercel.json` routes all paths to the single-page app.

## Ask my AI

The modal currently answers from a small prepared knowledge base in `src/App.tsx`.
Replace the `answer` function with a FastAPI endpoint when the RAG backend is ready.

### check pre-reliz
```
npm run check
npx eslint --init
npm run typecheck
npm run test:run
npm run build

```

## Live Demo

🌐 Web
https://vitaliy-parygin-portfolio.vercel.app

🤖 Telegram Mini App
https://t.me/vitaliys_assistant_bot/portfolio

📄 CV
https://vitaliy-parygin-portfolio.vercel.app/cv/Vitaliy_Parygin_CV.pdf

💻 GitHub
https://github.com/vitaliyparygin/portfolio-miniapp