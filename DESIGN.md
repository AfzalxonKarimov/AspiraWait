---
name: Aspira
description: Turn ambition into action — the AI mentor for ambitious students.
colors:
  primary: "#7c3aed"
  primary-deep: "#6d28d9"
  secondary: "#4f46e5"
  neutral-bg: "#f8fafc"
  neutral-surface: "#ffffff"
  neutral-text: "#0f172a"
  neutral-text-secondary: "#475569"
  neutral-text-muted: "#64748b"
  neutral-text-subtle: "#94a3b8"
  neutral-border: "#e2e8f0"
  success: "#10b981"
  window-red: "#ef4444"
  window-yellow: "#f59e0b"
  window-green: "#10b981"
typography:
  brand:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    letterSpacing: "-0.02em"
  display:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 1.1
  subhead:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.4
  title:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
  lead:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.05em"
  form-text:
    fontFamily: "'Figtree', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
rounded:
  lg: "1rem"
  xl: "1.25rem"
  2xl: "1.5rem"
  full: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  md-wide: "28px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "80px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #7c3aed, #4f46e5)"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "16px 20px"
  button-primary-hover:
    backgroundColor: "linear-gradient(135deg, #7c3aed, #4f46e5)"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "16px 20px"
  input:
    backgroundColor: "#ffffff"
    textColor: "#0f172a"
    borderColor: "#cbd5e1"
    rounded: "{rounded.lg}"
    padding: "14px 16px"
  input-focus:
    backgroundColor: "#ffffff"
    textColor: "#0f172a"
    borderColor: "#7c3aed"
    rounded: "{rounded.lg}"
    padding: "14px 16px"
---

# Design System: Aspira

## Overview

**Creative North Star: "The Momentum Compass"**

The system treats Aspira as a premium decision device for ambitious students. The compass lives in the upward violet→indigo gradient applied to **foreground** elements — the logo, the primary button, the step-number circles, the success check — and in the way every interaction propels the eye forward. The page is calm and uncluttered: a light neutral backdrop lets the white card surfaces and the violet accent carry all the directional motion. No decorative overlays; space and shadow provide the structure.

Material character: flat white surfaces at rest (cards, inputs, badge) that lift with structured shadow on hover and focus. Depth shows up only as state, never as decoration.

**Key Characteristics:**
- Premium, not school-project — generous spacing, restrained shadow, gradient accent used only on foreground brand elements
- Gradient direction is always 135° (violet → indigo), a single consistent light source for the "upward" motion
- Flat-at-rest / lift-on-state: surfaces are grounded until you touch them
- Calm, neutral backdrop — the violet-indigo gradient is reserved for the logo, buttons, and step markers; the canvas stays light

## Colors

One deep violet-indigo gradient accent set against a cool, restrained white-on-slate neutral stack. The accent carries all the forward motion; the neutrals provide a calm, premium stage.

### Primary
- **Deep Amethyst** (#7c3aed): the violet gradient stop, the single source of brand motion — logo, step-number circles, submit button, success check.
- **Royal Indigo** (#4f46e5): the indigo gradient stop; pairs with Deep Amethyst as the 135° gradient on all gradient elements. Royal Plum (#6d28d9) and Studio Indigo (#4338ca) exist for hover/active depth but aren't used standalone.

### Neutral
- **Charcoal Slate** (#0f172a): body text, hero headline, card titles.
- **Graphite** (#334159): the waitlist badge text.
- **Mist** (#64748b): secondary text, subtitles, body copy on cards.
- **Fog** (#94a3b8): placeholder text, form-hint muted text.
- **Mist-line** (#e2e8f0): borders on cards, inputs, and the badge.
- **Cool Mist** (#f8fafc): page background.
- **Surface White** (#ffffff): cards, inputs, badge — all raised planes.

### Named Rules
**The One Voice Rule.** The violet-indigo gradient is the only accent on the page. It appears on ≤10% of any given screen. Its rarity is the point — it marks the path the eye should follow.
**The Premium Restraint Rule.** Every surface starts flat and white. Color is earned through interaction, never decoration.
**The Forward Direction Rule.** Every gradient runs 135° (violet → indigo). A reversed or rotated gradient is a different accent and must not appear.

## Typography

**Display Font:** 'Figtree' (with system-stack fallback)
**Body Font:** 'Figtree' (same stack)
**Character:** Figtree gives a clean, slightly warm, high-performance feel with tight headline tracking and generous body leading. The stack is deliberately unified.

### Hierarchy
- **Brand** (800, 1.75rem / 28px, -0.02em): the Aspira logotype.
- **Display** (800, clamp(2.25rem, 6vw, 4rem) / 36→64px, 1.1, -0.03em): hero headline only.
- **Headline** (800, 2rem / 32px, 1.1): section titles like "What Aspira gives you".
- **Subhead** (700, 1.5rem / 24px, 1.4): waitlist-card and success titles; section h2 on mobile.
- **Title** (700, 1.125rem / 18px, 1.4): card and step headings.
- **Lead** (400, 1.25rem / 20px, 1.7): hero subhead; the step-number numeral.
- **Body** (400, 1rem / 16px, 1.6): paragraph copy, footer, button text.
- **Small** (600 small / 400 regular, 0.875rem / 14px, 0.05em when uppercase): the hero badge, tagline, form hints, footers.
- **Form-text** (400, 0.9375rem / 15px): inputs, selects, nav links.

### Named Rules
**The Tight Headline Rule.** Headlines use negative letter-spacing (-0.02 to -0.03em) at weights 700–800; body text is loose (1.6–1.7 leading) to stay airy on a crowded topic.

## Layout

A 1200px max-width container (padding 0 24px) centers all content. The hero is text-centered; the feature grid uses `auto-fit` `minmax 260px`; how-it-works steps use `auto-fit` `minmax 240px`. Vertical rhythm is 8px-based (8, 16, 24, 32, 48, 64, 80) with 20px reserved for form-group gutters. The waitlist card is pinned centered directly below the hero.

Breakpoints: tablet ≤768px (hero padding 24/48, card padding 24, form row becomes column, section h2 drops to subhead); mobile ≤480px (card margin 0 8px).

## Elevation & Depth

Flat-at-rest, lift-on-state. Surfaces (cards, inputs, the badge) sit flat at `shadow-sm` at rest; on hover they rise to `shadow-lg` with a 2–4px translate. The waitlist card uses `shadow-xl` permanently as the page's focal plane. There are **no decorative background orbs** — the backdrop is the calm Cool Mist gradient and all motion is purposeful state feedback. The submit button gains an accent glow on hover; focused inputs get a 4px violet focus ring.

### Shadow Vocabulary
- **Surface-rest** (`0 1px 2px rgba(0,0,0,0.04)`): the badge at rest.
- **Surface-lift** (`0 4px 6px -1px rgba(0,0,0,0.06), 0 2px 4px -2px rgba(0,0,0,0.06)`): step-number circle.
- **Surface-hover** (`0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.08)`): cards/badge on hover.
- **Surface-floating** (`0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.08)`): the waitlist card.
- **Accent-glow** (`0 10px 25px rgba(124,58,237,0.35)`): submit button hover.
- **Focus-ring** (`0 0 0 4px rgba(124,58,237,0.12)`): focused inputs/selects.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, focus, elevation).

## Shapes

Corners come in four tiers from one radius scale: `full` (pill badge), `2xl` / 24px (waitlist card), `xl` / 20px (benefit cards), `lg` / 16px (inputs, submit button). Circles are 50% border-radius (step-number, success check, the 8px status dot). The only non-rectilinear shape is the pill badge.

## Components

### Buttons
- **Shape:** gently rounded, 16px radius.
- **Primary (submit):** full-width, gradient background (135° Deep Amethyst → Royal Indigo), white text, body-size / 600, padding 16px 20px. On hover: rises 1px + accent glow. On press: drops back. Disabled: 0.6 opacity, flat, no shadow.
- **Hover / Focus:** hover lifts + violet glow. *(No secondary, ghost, or tertiary variants exist in this build.)*

### Inputs / Fields
- **Style:** 1.5px border (Mist-line / #cbd5e1), 16px radius, 14px 16px padding, white fill, form-text size.
- **Focus:** border shifts to Deep Amethyst + 4px violet focus ring (no native outline).
- **Placeholder:** Fog (#94a3b8).
- **Select:** same as input, plus an inline chevron at right 12px center, 18px.

### Card / Waitlist Card
- **Corner Style:** 24px. **Background:** Surface White. **Shadow:** `shadow-xl`. **Border:** 1px Mist-line. **Padding:** 32px.

### Benefit Card
- **Corner Style:** 20px. **Background:** Surface White. **Shadow:** `shadow-sm` at rest → `shadow-lg` on hover. **Border:** 1px Mist-line. **Padding:** 32px.

### Pill Badge (hero badge)
- **Style:** white fill, 1px Mist-line border, 999px radius, 8px 18px padding, small / 600 Graphite text, uppercase. Hover: translateY(-1px).
- **Status dot:** 8px circle in success/emerald (#10b981) as an inline element.

### Step Number
- **Shape:** 48px circle, gradient (135° violet → indigo), lead / 700 white numeral. **Shadow:** Surface-lift at rest.

## Do's and Don'ts

### Do:
- **Do** use the violet→indigo 135° gradient as the single accent on foreground brand elements (logo, buttons, step-number circles, success check); reuse it verbatim.
- **Do** keep surfaces flat and white at rest and lift them only on hover/focus — the shadow change is the feedback.
- **Do** keep the hero headline tracked tight (-0.03em) at weight 800 with body text loose at 1.6–1.7 leading.
- **Do** use the 8px-based spacing rhythm (8, 16, 24, 32, 48, 64, 80); reserve 20px for form-group gutters.
- **Do** keep the backdrop calm (Cool Mist) so the white card surfaces carry the focal weight.

### Don't:
- **Don't** use decorative background overlays — the backdrop is a calm light gradient; ornamental elements (e.g., large blurred orbs) compete with the content.
- **Don't** introduce a second accent color — the violet-indigo gradient is the only brand accent.
- **Don't** add borders to decorative elements — borders exist only on cards, inputs, and the badge as structural frames.
- **Don't** use a flat solid button background — the gradient is the submit button's defining trait.
- **Don't** put shadows on surfaces at rest — cards float only on hover.
- **Don't** round form fields beyond 16px or cards beyond 24px — the radius scale is intentional and bounded.
