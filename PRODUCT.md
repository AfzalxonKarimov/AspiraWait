# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

Web app first, mobile app later. The Aspira waitlist landing page is a static HTML/CSS/JS single file; the application itself is built with Next.js 16.3.0 / React 19 / Tailwind CSS / shadcn/ui and runs in the browser (sibling `Aspira/` scaffold).

## Stack

- **Waitlist landing page (this project):** plain HTML, CSS, and vanilla JS — no build step, deployable anywhere (GitHub Pages, Netlify, Vercel). `npx serve .` for local preview.
- **Application:** Next.js 16.3.0, React 19.2.8, Tailwind CSS, shadcn/ui, lucide-react, react-hook-form + zod, class-variance-authority + clsx + tailwind-merge.

## Users

- **Primary:** ambitious high-school students (roughly ages 15–18) aiming for top universities. They juggle 10+ apps (Notion, Google Calendar, ChatGPT, GitHub, LinkedIn, scholarship sites, Google Docs, Trello) and don't know what to do *next* — they know what they want to achieve but not the next concrete step.
- **Secondary:** undergraduates discovering internships, scholarships, and extracurriculars.
- **Long-term scope:** the product grows with a user from age 15 through their first job.

## Product Purpose

Aspira is an AI-powered platform that helps ambitious students figure out what to do next — not just organize their life, but decide their next move. Instead of answering questions, Aspira **decides** what you should do next based on your goals, progress, and real constraints (e.g., "I only have two hours today"). It replaces the chaos of juggling 10+ apps with a single AI-powered operating system that builds a living roadmap, recommends matched opportunities, tracks progress, and auto-generates portfolio/resume/LinkedIn artifacts from completed work.

Success is measured by the core loop that makes students say *"I can't believe this is free — I need to keep using it."*

## Positioning

> Instead of answering questions, Aspira **decides** what you should do next — and guides you there.

Other tools help you *organize*; Aspira helps you *decide*. The meaningfully different mechanism is a living, personalized roadmap that adapts to your progress and constraints, paired with an AI mentor that allocates your limited time to the highest-impact next step.

## Operating Context

- **Waitlist data collected:** email (required) + optional Telegram username. The Telegram username is used to invite interested users for early testing and send updates directly. No country, age, or dream university fields — kept minimal to reduce friction.
- **Near-term milestone:** collect interested users on the waitlist; email them when the app is ready or invite them for testing. (The "20–30 booked 15-minute calls" approach in aspira.md is **not** used — outreach is email + Telegram.)
- **Development roadmap:**
  - **V1 (target 2–4 weeks):** user profile creation, goal setting, AI-generated personalized roadmap, weekly task list.
  - **V2:** opportunity recommendations, portfolio builder, progress analytics.
  - **V3:** AI mentor with long-term memory, team matching, community features, calendar integration.

## Capabilities and Constraints

### Feature Set (current + planned)

**Onboarding / Profile**
- Goal: target university/program (e.g., "Stanford Computer Science").
- Country, subject, target university, current grades/SAT/IELTS, programming experience level, clubs & projects.
- The AI consumes this to build a personalized roadmap.

**Dashboard**
- Personalized living roadmap (auto-adjusts if you fall behind).
- Weekly task list (e.g., "Complete SAT Practice Test", "Finish AI Project").
- Upcoming deadlines surfaced by urgency (hackathon in 4 days, SAT in 18 days).
- Progress bar (e.g., 74%) toward the main goal.

**AI Mentor**
- Context-aware: knows your profile, goals, and progress — you don't re-explain.
- Time-boxed planning: "I only have two hours today" → allocates 1h SAT Math, 45m web project, 15m scholarship app.
- Daily suggestion: "I noticed your GitHub hasn't been updated in 9 days. Spend one hour finishing your authentication system."

**Opportunity Hub**
- Scholarships, olympiads, hackathons, internships, volunteer opportunities, summer programs.
- Recommended based on age, country, interests, experience, and portfolio.

**Portfolio Builder**
- When you complete something, Aspira auto-generates: portfolio entry, resume bullet, LinkedIn draft, GitHub README.
- Achievements are always organized and ready to showcase.

**Smart Roadmap**
- Living, AI-generated roadmap by month (Aug: Learn React → Sep: Build Portfolio → Oct: Enter Hackathon → …).
- Automatically re-sequences if you miss a month.

**Weekly Review (every Sunday)**
- Time tracking (study, coding, reading, applications submitted, projects completed).
- Recommendations ("spending less time coding than last month — increase by 3h next week").

**Constraints & undecided**
- Web-first tech direction: easier to build/iterate, shareable with one link, better for productivity tasks, more impressive for admissions. Mobile deferred to V2/V3 if web gains traction.
- V1 focus: nail one core loop students say "I can't believe this is free" about, then expand.
- Form backend: Supabase — waitlist data stored in a `waitlist` table with `email` (unique), `telegram_username`, and `created_at` columns. See `supabase-setup.md` for project creation and schema.
- aspira.app **not yet registered**; hello@aspira.app not yet functional.
- **No logo assets yet.** The gradient text logo in `index.html` is the temporary mark.
- Brand logo constraint (from ASPIRA.md): minimalist upward motif (stylized "A" forming an upward path). **Avoid** graduation caps and books.
- **Explicitly undecided:** exact V1 feature cut beyond the core four; form backend provider; pricing/monetization; mobile timeline.

## Brand Commitments

- **Name:** Aspira (from "aspire") — ambition, growth, aspiration.
- **Tagline:** "Turn ambition into action."
- **Scope:** not admissions-only — grows from high-school planning through university, internships, and first job.
- **Feel:** premium — a real product, not a school project.
- **Logo constraint:** minimalist upward motif; avoid graduation caps and books.
- **Tone:** friendly, aspirational, honest — an exciting "coming soon," not a polished corporate page; outcomes over feature lists.

## Evidence on Hand

- `aspira.md` (AspiraWait root) — waitlist strategy.
- `ASPIRA.md` (sibling `Aspira/`) — full product strategy: Onboarding, Dashboard, AI Mentor, Opportunity Hub, Portfolio Builder, Smart Roadmap, Weekly Review, Brand Positioning, V1–V3 roadmap.
- `index.html` (AspiraWait root) — the waitlist landing page (hero, value prop, form, benefits, how-it-works, success state).
- `Aspira/aspira/` (sibling) — Next.js app scaffold: onboarding flow, dashboard (roadmap view, weekly task list, milestone tracker, daily suggestion), AI roadmap API at `src/app/api/generate-roadmap/route.ts`, shadcn/ui.
- **Reference product:** the user shared `https://www.admitra.cloud/` as the quality and richness bar to align with — a clean, card-based SaaS look for an AI college-admissions OS (school matching, essay studio, operations dashboard, execution planning, readiness score, profile analysis, document vault, decision simulator). Use as a visual/capability model; do not assume feature parity without confirmation.

## Product Principles

1. **Decide, don't organize.** Aspira answers "What should I do next?" — allocating your limited time to the highest-impact action.
2. **Start small, prove the loop.** Build one thing students say "I can't believe this is free" about, then expand.
3. **Personalize to reality.** Guidance adapts to your goals, progress, and actual constraints (e.g., "I only have two hours today").
4. **Own the outcome.** Auto-generate portfolio/resume/LinkedIn artifacts from completed work.

## Accessibility & Inclusion

No product-specific accessibility requirement established yet. Omit as a target until a standard or user need is confirmed.
