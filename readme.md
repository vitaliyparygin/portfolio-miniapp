# Vitaliy AI Portfolio

A dark, responsive Telegram Mini App portfolio for **Vitaliy Parygin**, AI Backend Engineer. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and the Telegram WebApp SDK.

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
VITE_GITHUB_URL=https://github.com/vitaliyparygin
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
public/cv/Vitaliy_Parygin_CV.pdf
```

The Download CV buttons already point to this public path.

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
