---
name: Aspira
description: Turn ambition into action — the AI mentor for ambitious students.
colors:
  bg: "#04040a"
  bg-hint: "#0a0b17"
  surface: "rgba(255, 255, 255, 0.035)"
  surface-2: "rgba(255, 255, 255, 0.06)"
  border: "rgba(255, 255, 255, 0.09)"
  border-2: "rgba(255, 255, 255, 0.16)"
  ink: "#f4f6fb"
  ink-2: "#b7bfd2"
  ink-3: "#8a94a8"
  violet: "#8b5cf6"
  indigo: "#6366f1"
  electric: "#a78bfa"
  success: "#34d399"
  error: "#f87171"
typography:
  brand:
    fontFamily: "'Syne', system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    letterSpacing: "0.02em"
  display:
    fontFamily: "'Syne', system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Syne', system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.5vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  subhead:
    fontFamily: "'Syne', system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.1
  title:
    fontFamily: "'Syne', system-ui, sans-serif"
    fontSize: "1.14rem"
    fontWeight: 700
    lineHeight: 1.2
  lead:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  lg: "12px"
  xl: "20px"
  2xl: "28px"
  full: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "32px"
  xl: "56px"
  2xl: "84px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #8b5cf6, #6366f1)"
    textColor: "#ffffff"
    rounded: "12px"
    padding: "16px 20px"
    shadow: "0 12px 30px -12px rgba(139, 92, 246, 0.45)"
  input:
    backgroundColor: "rgba(0, 0, 0, 0.35)"
    textColor: "#f4f6fb"
    borderColor: "rgba(255, 255, 255, 0.16)"
    rounded: "12px"
    padding: "14px 18px"
  input-focus:
    backgroundColor: "rgba(0, 0, 0, 0.35)"
    textColor: "#f4f6fb"
    borderColor: "rgba(139, 92, 246, 0.7)"
    rounded: "12px"
    padding: "14px 18px"
    shadow: "0 0 0 3px rgba(139, 92, 246, 0.18)"
---

# Design System: Aspira

## Overview

**Creative North Star: "Flight Director"**

Aspira is the mission-control instrument for your ambition — not a landing page that just asks, but a dark deck where your goals become glowing waypoints on a route toward a target star, and the *next move* pulses. The world is a cold, near-black flight deck with a faint violet instrument grid, translucent glass panels, and a single violet→indigo glow reserved for what moves you forward: active waypoints, the pulsing next move, the primary action, and the target.

Material character: depth is built from light on dark. Panels are hairline-bordered translucent glass with a top violet hairline; glow appears only as purposeful state (the primary CTA, active waypoints, hover). There are no decorative orbs — the starfield and grid are the ambient field.

**Key Characteristics:**
- Premium, not generic — a distinct Syne display voice and a measurement-surface grid
- Glowing accent is rare and directional: it marks the route and the next step only
- Light on dark, flat glass panels with hairline borders; glow is earned, never decoration
- The 135° violet→indigo gradient is reserved for the primary action, active waypoints, and the target

## Colors

One violet→indigo glow set against a cold near-black deck with translucent surfaces.

### Accent
- **Electric Violet** (#a78bfa): the leading edge of the glow; the "next move" waypoint and target star.
- **Deep Violet** (#8b5cf6): the primary gradient stop — buttons, active waypoints, goal dots.
- **Royal Indigo** (#6366f1): the secondary gradient stop; the faint route tail.

### Dark deck
- **Midnight** (#04040a): the page canvas.
- **Panel** (white 3.5–6%): translucent glass surfaces.
- **Hairline** (white 9–16%): borders on panels, inputs, dividers, table grid.

### Ink (on dark)
- **Star White** (#f4f6fb): display text, headlines, headings.
- **Cloud** (#b7bfd2): secondary text, leads, body captions.
- **Fog** (#8a94a8): muteds, hints, placeholder.

### Status
- **Emerald** (#34d399): success checks, completions, deadline "due" labels.
- **Coral** (#f87171): error text, close window dot.

### Named Rules
**The One Glow Rule.** The violet→indigo glow is the only accent, and it marks direction only — the route, the next move, the primary action, the target. ≤10% of any screen. Its rarity is the point.
**The Light-on-Dark Rule.** Ink is always light on the dark deck; secondary text is tinted toward white, never gray.
**The Earned-Light Rule.** Glow appears as state (hover, focus, active), never as decoration.

## Typography

**Display Font:** 'Syne' (600–800) — a wide, geometric, forward display voice.
**Body Font:** 'Figtree' — a clean, readable grotesque that carries body copy comfortably on dark.

### Hierarchy
- **Brand** (Syne 700, 1.3rem, +0.02em): the "Aspira" wordmark.
- **Display** (Syne 700, clamp 2.6–4.6rem, 1.02, -0.03em): hero headline only.
- **Headline** (Syne 700, clamp 1.9–2.9rem, 1.05, -0.025em): section titles.
- **Title** (Syne 700, 1.14rem): card, step, and row headings.
- **Lead** (Figtree 400, 1.2rem, 1.7): hero subhead.
- **Body** (Figtree 400, 1rem, 1.65): paragraphs, controls.
- **Small** (Figtree 500, 0.85rem, +0.05em upcased): panel labels, section eyebrows-as-labels, footer.

### Named Rules
**The Two-Voice Rule.** Syne owns display and headings (wide, geometric, forward); Figtree owns reading and UI. Never use a generic system face for display.

## Layout

A 1180px max-width container (padding 0 28px) centers everything. The hero is text-centered with the waitlist panel below. The mission instrument is a two-column glass panel (route map / mission ledger). Sections alternate a centered section-head with a grounded content block. Vertical rhythm is 8px-based (8, 12, 24, 32, 56, 84).

Breakpoints: ≤900px the instrument stacks to one column, the ledger becomes one column, steps drop to 2-up; ≤720px nav collapses to a pill CTA only, signal row goes 1-up; ≤520px steps go 1-up and container padding tightens to 20px.

## Elevation & Depth

Depth is ambient field + translucent panels + glow state.
- **Panel** (`0 30px 60px -30px rgba(0,0,0,0.9)`): waitlist card, instrument panel, comparison panel.
- **Glow** (`0 0 0 1px rgba(139,92,246,0.15), 0 0 40px -10px rgba(139,92,246,0.45)`): hover borders on signal/alert cards.
- **Button glow** (`0 12px 30px -12px rgba(139,92,246,0.45)`): primary CTA at rest, deepening on hover.
- **Focus** (`0 0 0 3px rgba(139,92,246,0.18)`): focused inputs.

### Named Rules
**The Flat-On-Dark Rule.** Panels are flat glass with hairline borders; glow is reserved for state and the primary action.

## Shapes

Radius scale: `2xl` / 28px (panels, comparison table), `xl` / 20px (signal cards), `lg` / 12px (buttons, inputs, icon tiles), `full` (pill badges and nav pill). Small icon tiles use tight radii (7–12px); the window dots are circles.

## Components

### Buttons
- **Primary (submit):** full-width, 12px radius, violet→indigo gradient, white text, body/600, padding 16px 20px, resting button glow. Hover: -1px rise + brightened glow. Disabled: 0.6 opacity.
- **Pill (nav CTA):** 12px+ pill, hairline border, 9px 18px padding.
- **Ghost (back / reset):** transparent, hairline border, body/500.

### Inputs / Fields
- Dark fill (black 35%), 15px 12px, 14px 18px padding, Figtree 0.95rem.
- Focus: violet border + 3px violet focus ring + soft glow.
- Placeholder: Fog (#8a94a8).

### Glass Panel (waitlist card / instrument / comparison)
- **Fill:** translucent white (3.5–6%), 24px+ 28px radius, hairline border, top violet hairline via mask-composite, `backdrop-filter: blur`.
- **Waitlist card:** max-width 560px, padding 40px, left-aligned with a centered result below.

### Instrument Panels
- **Route map:** inline SVG of a dotted route lit to violet→indigo, with lit waypoints, a pulsing white/indigo "next move" ring, and a star target in a soft glow.
- **Signal card (alert):** translucent tile, hairline border, gradient icon tile; hover gains glow border.

## Do's and Don'ts

### Do:
- **Do** use violet→indigo in 135° for the primary action, active waypoints, and target only; reuse the gradient verbatim.
- **Do** keep ink light on dark, with secondary text tinted white (never gray).
- **Do** give headings the Syne display voice; keep reading in Figtree.
- **Do** space on the 8px rhythm, with more space above a heading than below it.
- **Do** let glow mark direction — the route, the next move, the CTA.

### Don't:
- **Don't** introduce a second accent color — the violet→indigo glow is the only brand accent.
- **Don't** use decorative glow behind content; glow is earned by state and the primary action.
- **Don't** use a generic system display face (Inter/Roboto/Space Grotesk) for the display voice.
- **Don't** drop contrast below 4.5:1 for body text on the dark deck.
- **Don't** use flat solid buttons — the gradient is the primary action's defining trait.
- **Don't** round panels beyond 28px or inputs beyond 12px — the radius scale is intentional and bounded.
