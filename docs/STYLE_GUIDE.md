# DHEPLab Design System

## Aesthetic Direction: "Editorial Science"

A design language that bridges academic rigor with magazine-quality presentation. The site should feel like reading a well-designed research journal — intellectual, precise, yet visually engaging.

**Core Principles:**
1. **Precision over decoration** — Every element serves a purpose
2. **Data as visual language** — Subtle nods to charts, networks, and statistical thinking
3. **Generous whitespace** — Let ideas breathe
4. **Editorial typography** — Headlines that command, body text that flows

---

## Color Palette

### Primary Colors

```css
:root {
  /* Carolina Blue - Primary accent */
  --color-carolina: #4B9CD3;
  --color-carolina-dark: #3A7CA5;
  --color-carolina-light: #7BB8E0;
  --color-carolina-pale: #E8F4FC;

  /* Navy - Deep authority */
  --color-navy: #13294B;
  --color-navy-light: #1E3A5F;

  /* Warm neutrals */
  --color-paper: #FAFAF8;
  --color-cream: #F5F4F0;
  --color-stone: #E8E6E1;

  /* Cool neutrals */
  --color-slate: #64748B;
  --color-charcoal: #334155;
  --color-ink: #1E293B;

  /* Semantic */
  --color-success: #059669;
  --color-warning: #D97706;
  --color-error: #DC2626;
}
```

### Color Usage

| Element | Color | Variable |
|---------|-------|----------|
| Primary CTA buttons | Carolina Blue | `--color-carolina` |
| Headlines (hero) | Navy | `--color-navy` |
| Body text | Charcoal | `--color-charcoal` |
| Subtle backgrounds | Paper/Cream | `--color-paper` |
| Links | Carolina Blue | `--color-carolina` |
| Hover states | Carolina Dark | `--color-carolina-dark` |

---

## Typography

### Font Stack

```css
:root {
  /* Display - for headlines and hero text */
  --font-display: 'Instrument Serif', Georgia, serif;

  /* Body - for readable content */
  --font-body: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Mono - for data, code, stats */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

**Why these fonts:**
- **Instrument Serif**: Contemporary serif with editorial gravitas, free from Google Fonts
- **Source Sans 3**: Adobe's open-source workhorse, highly readable, professional
- **JetBrains Mono**: For statistics, code snippets, and data displays

### Type Scale

```css
:root {
  --text-xs: 0.75rem;      /* 12px - Labels, captions */
  --text-sm: 0.875rem;     /* 14px - Secondary text */
  --text-base: 1rem;       /* 16px - Body text */
  --text-lg: 1.125rem;     /* 18px - Lead paragraphs */
  --text-xl: 1.25rem;      /* 20px - Subheadings */
  --text-2xl: 1.5rem;      /* 24px - Section titles */
  --text-3xl: 1.875rem;    /* 30px - Page titles */
  --text-4xl: 2.25rem;     /* 36px - Hero subheads */
  --text-5xl: 3rem;        /* 48px - Hero headlines */
  --text-6xl: 3.75rem;     /* 60px - Display */
}
```

### Heading Hierarchy

```css
h1 {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-navy);
}

h2 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--color-navy);
}

h3 {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-charcoal);
}

p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--color-charcoal);
}
```

---

## Spacing

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

---

## Layout

### Container Widths

```css
:root {
  --container-sm: 640px;   /* Narrow content */
  --container-md: 768px;   /* Blog posts */
  --container-lg: 1024px;  /* Standard pages */
  --container-xl: 1280px;  /* Wide layouts */
  --container-2xl: 1536px; /* Full-width sections */
}
```

### Grid System

12-column grid with responsive breakpoints:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* Responsive */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Components

### Buttons

```css
.btn-primary {
  background: var(--color-carolina);
  color: white;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-sm);
  padding: var(--space-3) var(--space-6);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--color-carolina-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(75, 156, 211, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--color-carolina);
  border: 1.5px solid var(--color-carolina);
  /* ...same padding/font as primary */
}

.btn-secondary:hover {
  background: var(--color-carolina-pale);
}
```

### Cards

```css
.card {
  background: white;
  border-radius: 8px;
  padding: var(--space-6);
  border: 1px solid var(--color-stone);
  transition: all 0.2s ease;
}

.card:hover {
  border-color: var(--color-carolina-light);
  box-shadow: 0 8px 24px rgba(19, 41, 75, 0.08);
  transform: translateY(-2px);
}

.card-featured {
  border-left: 3px solid var(--color-carolina);
}
```

### Navigation

```css
.nav {
  background: white;
  border-bottom: 1px solid var(--color-stone);
  padding: var(--space-4) 0;
}

.nav-link {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-charcoal);
  text-decoration: none;
  padding: var(--space-2) var(--space-4);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-carolina);
}

.nav-link.active {
  color: var(--color-carolina);
  border-bottom: 2px solid var(--color-carolina);
}
```

---

## Visual Elements

### Decorative Accents

**Stat blocks** — Display key metrics with monospace font:
```css
.stat {
  font-family: var(--font-mono);
  font-size: var(--text-4xl);
  font-weight: 500;
  color: var(--color-carolina);
}

.stat-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-slate);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

**Section dividers** — Subtle horizontal rules:
```css
.divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-stone) 20%,
    var(--color-stone) 80%,
    transparent
  );
  margin: var(--space-16) 0;
}
```

**Accent lines** — Carolina blue detail:
```css
.accent-line {
  width: 48px;
  height: 3px;
  background: var(--color-carolina);
  margin-bottom: var(--space-4);
}
```

---

## Motion

### Transitions

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}
```

### Animations

```css
/* Fade in on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease forwards;
}

/* Staggered delays */
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
```

---

## Page Templates

### Homepage Sections

1. **Hero** — Full-width, statement headline, single CTA
2. **Mission** — Centered text block with accent line
3. **Research Areas** — 3-column card grid
4. **Latest News** — Asymmetric layout (featured + list)
5. **Team Preview** — Avatar row with names
6. **Newsletter CTA** — Contrasting background block
7. **Footer** — Navigation + UNC affiliation

### Content Pages

- **Research**: Card grid with filtering
- **Team**: Photo grid with bios
- **Publications**: Sortable list with filters
- **Blog**: Magazine-style layout (featured + grid)
- **Contact**: Split layout (form + info)

---

## Responsive Breakpoints

```css
/* Mobile first */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## Assets

### Imagery Guidelines

- **Lab photography**: Warm, natural lighting, candid moments
- **Data visualizations**: Clean, Carolina Blue accent color
- **Icons**: Lucide or Phosphor icon sets (line style)
- **Illustrations**: Optional — abstract data/network patterns

### Logo Usage

- Primary: DHEPLab wordmark
- With: UNC Gillings lockup in footer
- Minimum clear space: Height of "D" on all sides

---

*Design System v1.0 — December 2024*
