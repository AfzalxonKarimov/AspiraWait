# Aspira Waitlist

> **Turn ambition into action.**

The waitlist landing page for Aspira — the AI mentor for ambitious students.

## What is Aspira?

Ambitious students juggle 10+ apps: Notion, Google Calendar, ChatGPT, GitHub,
LinkedIn, scholarship sites, Google Docs, Trello — and still don't know **what to do next**.

Aspira replaces that chaos with a single AI-powered OS that **decides** your next
move based on your goals, your progress, and your real constraints (like "I only have
2 hours today").

## This Page

A single `index.html` file — no build tools, no dependencies. Deploy anywhere:

- **GitHub Pages:** Push to `gh-pages` branch
- **Netlify:** Drag & drop the folder
- **Vercel:** Import the repo (zero config for static)

## Supabase Setup

The waitlist form submits to [Supabase](https://supabase.com). Follow these steps:

1. **Create a project** at [supabase.com](https://supabase.com) → "New project"
2. **Get credentials** from Project Settings → API (copy the URL and anon key)
3. **Create the table** by running the SQL in [`supabase-setup.md`](./supabase-setup.md) in the SQL Editor
4. **Store credentials** in a `.env` file:

```bash
cp .env.example .env
# Edit .env and paste your credentials:
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

`index.html` reads these variables automatically when deployed behind a build step
(Vite, Webpack, Next.js). For the plain-HTML approach, the values are also used as
direct fallbacks — paste your credentials into the `SUPABASE_URL` / `SUPABASE_ANON_KEY`
constants at the bottom of `index.html` if you're serving it without a build step.

## Running Locally

```bash
npx serve .
# or just open index.html in your browser
```

## What the form collects

| Field               | Type     | Purpose                                    |
|---------------------|----------|---------------------------------------------|
| Email               | Required | Notify you when Aspira launches             |
| Telegram username   | Optional | Invite you for early testing and updates    |

Data is stored in a Supabase `waitlist` table with a unique constraint on email, so duplicate signups are rejected gracefully.

## Next Steps

1. Deploy this page and start collecting emails
2. Reach out to early signups via email and Telegram for early testing
3. Build the MVP based on what you learn

See [`aspira.md`](./aspira.md) for the full product strategy.
