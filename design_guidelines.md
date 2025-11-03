# Design Guidelines: Fatima Mir - AI Engineer Portfolio

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern developer portfolios like Linear, Vercel, and GitHub's portfolio patterns. This portfolio demands a clean, professional aesthetic that communicates technical sophistication while maintaining excellent readability for project descriptions and technical content.

**Core Principle**: Bold typography hierarchy paired with generous whitespace creates focus on the impressive AI/ML work, while strategic asymmetry prevents generic portfolio patterns.

---

## Typography System

**Font Families**:
- Headings: 'Inter' (700, 800 weights) - clean, modern, technical
- Body: 'Inter' (400, 500 weights) - optimal for technical content readability
- Accent/Code: 'JetBrains Mono' (500 weight) - for technology tags and technical callouts

**Hierarchy**:
- Hero Name: text-6xl to text-7xl, font-bold
- Hero Subtitle: text-2xl to text-3xl, font-normal
- Section Headings: text-4xl to text-5xl, font-bold
- Subsection Titles: text-2xl to text-3xl, font-semibold
- Project Titles: text-xl to text-2xl, font-semibold
- Body Text: text-base to text-lg, font-normal, leading-relaxed
- Technical Tags: text-sm, font-medium, font-mono
- Small Print: text-sm, font-normal

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 (e.g., p-4, gap-8, py-20, mt-32)

**Container Strategy**:
- Max-width wrapper: max-w-7xl for main content sections
- Narrow content: max-w-4xl for text-heavy sections
- Full-bleed sections: w-full for hero and major transitions
- Consistent horizontal padding: px-6 (mobile) to px-8 (desktop)

**Vertical Rhythm**:
- Section padding: py-20 (mobile) to py-32 (desktop)
- Subsection spacing: mb-16 to mb-20
- Component gaps: gap-8 to gap-12
- Tight groupings: gap-4 to gap-6

---

## Page Structure & Sections

### 1. Hero Section (80-90vh)
**Layout**: Asymmetric two-column split on desktop, stacked on mobile
- Left column (60%): Name, title, brief summary (2-3 lines), primary CTA buttons
- Right column (40%): Professional headshot or abstract AI/tech visualization

**Image Specification**: 
- Portrait-oriented professional photo or AI-themed abstract visualization (neural network patterns, data flow graphics)
- Placement: Right side on desktop, above text on mobile
- Treatment: Subtle gradient overlay blending into background

**CTA Strategy**: 
- Primary: "View Projects" (scrolls to projects)
- Secondary: "Download CV" (PDF download)
- Tertiary: LinkedIn + GitHub icon links
- Button styling: Blurred background treatment when over image areas

### 2. Experience Timeline (Full-width section)
**Layout**: Vertical timeline with alternating left-right cards on desktop
- Timeline connector: Vertical line with node markers
- Each role: Card with company logo area, title, dates, bullet achievements
- Grid: Single column (mobile), alternating 2-column (desktop)

### 3. Projects Showcase (Hero section of portfolio)
**Layout**: Masonry-style grid avoiding cookie-cutter patterns
- Featured Project (AI Attorney): Full-width spotlight card with detailed breakdown
- Remaining projects: 2-column grid (desktop), single column (mobile)
- Each card includes: Project name, client/company, tech stack tags, key metrics/achievements, brief description

**Card Structure**:
- Header with project icon/emoji
- Tech tags in pill format using mono font
- Bullet points with quantifiable results
- Hover state: Subtle elevation change

### 4. Technical Skills Matrix
**Layout**: Multi-column categorized grid
- 4 categories (Core AI/ML, Backend & DevOps, ML/DS Tools, Version Control)
- Desktop: 2x2 grid, Tablet: 2 columns, Mobile: stacked
- Each category: Bold header + tag cloud of technologies
- Tags: Pill-shaped, varying sizes based on proficiency (visual weight, not literal size)

### 5. Education & Certifications
**Layout**: Compact single-column cards
- Degree card with university logo placeholder
- GPA, dates, location cleanly formatted
- Icon indicators for degree type

### 6. Contact Section
**Layout**: Two-column split (form + info)
- Left: Contact form (name, email, message fields)
- Right: Direct contact methods (email, phone, LinkedIn, GitHub with clickable links), location with map icon
- Desktop: Side-by-side, Mobile: Stacked with info first

### 7. Footer
**Content**: 
- Quick navigation links to all sections
- Social media icons (LinkedIn, GitHub, Email)
- "Built with [tech stack]" attribution
- Copyright notice

---

## Component Library

**Navigation Bar**:
- Fixed/sticky header on scroll
- Logo/name (left), nav links (center), CTA button (right)
- Mobile: Hamburger menu
- Desktop: Horizontal links with active state indicators

**Project Cards**:
- Structured card with consistent padding (p-6 to p-8)
- Icon/emoji at top
- Title with font-semibold
- Tag container with flex-wrap
- Description with leading-relaxed
- Subtle border treatment

**Technology Tags**:
- Pill shape (rounded-full)
- Monospace font
- Small padding (px-3 py-1)
- Displayed in horizontal wrapping rows (flex-wrap)

**Buttons**:
- Primary: Larger padding (px-6 py-3), font-medium
- Secondary: Bordered variant with hover state
- Icon buttons: Square/circular for social links
- Blurred background when over images

**Timeline Nodes**:
- Circular markers on vertical line
- Connecting line with consistent thickness
- Card containers for each experience

**Form Inputs**:
- Consistent height and padding
- Label above input field
- Focus state indicators
- Full-width on mobile, constrained on desktop

---

## Icons & Assets

**Icon Library**: Heroicons (via CDN) for consistent line-style icons
- Navigation: menu, x-mark, arrow-right
- Projects: rocket, beaker, chart-bar, cpu-chip
- Contact: envelope, phone, map-pin
- Social: Custom LinkedIn/GitHub SVG icons

**Images Section**:
1. **Hero Image**: Professional headshot or AI-themed abstract visual (portrait orientation, ~600x800px optimal)
   - Placement: Right column of hero on desktop, top on mobile
   - Style: Clean background or subtle gradient overlay

2. **Company Logos** (optional placeholders): Small circular or square logos for FireFly Tech, Funsol Technologies
   - Placement: Within experience timeline cards
   - Size: 48x48px to 64x64px

3. **Project Icons**: Emoji or simple icon representations for each project
   - Placement: Top of each project card
   - Purpose: Quick visual identification

---

## Animation & Interactions

**Minimal Motion Philosophy**: Use sparingly for polish, not decoration

**Approved Animations**:
- Smooth scroll behavior for anchor navigation
- Fade-in on scroll for project cards (subtle, single use)
- Hover elevations on cards (transform: translateY(-4px))
- Button hover states (built-in component behavior)
- Nav bar shadow on scroll

**Forbidden**: Parallax effects, continuous animations, scroll-triggered reveals on every section

---

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids, compact spacing)
- Desktop: > 1024px (full multi-column layouts, generous spacing)

**Mobile-Specific Adjustments**:
- Hero text: Reduce to text-4xl to text-5xl
- Section padding: py-12 to py-16 instead of py-20 to py-32
- All grids collapse to single column
- Navigation becomes hamburger menu
- Timeline becomes simple vertical stack