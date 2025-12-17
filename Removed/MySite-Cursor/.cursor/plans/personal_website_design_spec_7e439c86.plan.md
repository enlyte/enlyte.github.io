---
name: Personal Website Design Spec
overview: Create a comprehensive design specification for Stephen Moy's personal website, including site architecture, visual design language, detailed section breakdowns, interaction patterns, and implementation recommendations.
todos: []
---

# Personal Website Design Specification for Stephen Moy

## 1. Site Architecture & Sitemap

### Primary Structure

- **Home** (`/`) - Hero landing with quick overview and primary CTAs
- **About** (`/about`) - Story, timeline, and professional journey
- **Skills** (`/skills`) - Capability matrix organized by domain
- **Projects** (`/projects`) - Overview grid leading to individual case studies
  - **VidCutAI** (`/projects/vidcutai`) - Full case study
  - **Pro Transcribe** (`/projects/pro-transcribe`) - Case study
  - **Behavior Data Tracker** (`/projects/behavior-tracker`) - Legacy project showcase
  - **Homelab** (`/projects/homelab`) - Infrastructure deep-dive
- **Process** (`/process`) - Problem-solving methodology and psychology
- **Lab** (`/lab`) - Experiments and ongoing work
- **Personal** (`/personal`) - Non-work interests and humanizing content
- **Contact** (`/contact`) - Work opportunities and outreach

### Navigation Pattern

- **Primary Nav**: Horizontal top bar (sticky on scroll) with logo, main sections, and CTA button
- **Secondary Nav**: Optional sidebar for "Now" updates or quick links
- **Footer**: Links, social, and minimal site info

### Routing Strategy

- **Recommended**: Astro with React islands for interactive components
- **Alternative**: Next.js App Router with React Server Components
- **Hybrid Approach**: Single-page scroll with anchor navigation + separate detail pages for projects

---

## 2. Global Design Language

### Visual Keywords

- Clean, technical, considered, fast, confident, minimal but not sterile
- "Terminal + Studio" aesthetic: dark, focused, with purposeful color accents

### Color Palette

**Base Colors:**

- **Background**: Deep charcoal (`#0a0a0a` to `#111111`) with subtle texture
- **Surface**: Slightly lighter grays (`#1a1a1a` to `#252525`) for cards/sections
- **Text Primary**: Off-white (`#f5f5f5` to `#ffffff`)
- **Text Secondary**: Medium gray (`#888888` to `#aaaaaa`)
- **Text Muted**: Dark gray (`#555555` to `#666666`)

**Accent Colors** (by domain):

- **AI/Media Tools**: Electric blue (`#3b82f6` to `#60a5fa`) - VidCutAI, Pro Transcribe
- **Infrastructure**: Cyan/Teal (`#06b6d4` to `#22d3ee`) - Homelab, DevOps
- **UX/Product**: Purple (`#8b5cf6` to `#a78bfa`) - Process, Psychology
- **Legacy/Education**: Amber (`#f59e0b` to `#fbbf24`) - Behavior Tracker
- **Personal**: Soft green (`#10b981` to `#34d399`) - Non-work interests

**Interactive States:**

- **Hover**: Slight brightness increase + subtle scale/glow
- **Active/Focus**: Accent color border or background tint
- **Disabled**: Reduced opacity (40%)

### Typography

**Primary Font**: Modern sans-serif (recommendations):

- **Inter** (excellent readability, technical feel)
- **Satoshi** (geometric, clean)
- **Space Grotesk** (slightly playful but professional)

**Font Scale**:

- **Hero Headline**: 4rem - 5rem (64px - 80px) / 1.1 line-height
- **Section Headlines**: 2.5rem - 3rem (40px - 48px) / 1.2
- **Subheadings**: 1.5rem - 2rem (24px - 32px) / 1.3
- **Body**: 1rem - 1.125rem (16px - 18px) / 1.6
- **Small/Captions**: 0.875rem (14px) / 1.5

**Monospace Accent**: For technical elements

- **JetBrains Mono** or **Fira Code**
- Used for: code snippets, terminal outputs, file paths, technical labels

**Font Weights**:

- Regular (400) for body
- Medium (500) for emphasis
- Semibold (600) for headings
- Bold (700) sparingly for hero/CTAs

### Layout System

**Grid Structure**:

- **Container**: Max-width 1280px, centered, with 24px padding on mobile, 48px on desktop
- **Grid**: 12-column system with 24px gutters
- **Sections**: Generous vertical spacing (80px - 120px between major sections)
- **Cards**: 16px - 24px internal padding, 1px subtle border, rounded corners (8px - 12px)

**Spacing Scale** (Tailwind-based):

- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px, 4xl: 96px

**Responsive Breakpoints**:

- Mobile: < 640px (single column, stacked)
- Tablet: 640px - 1024px (2-column grids where appropriate)
- Desktop: > 1024px (full grid, side-by-side layouts)

---

## 3. Section-by-Section Specifications

### 3.1 Home / Overview (`/`)

**Goal**: Immediate clarity on who Stephen is and what value he provides

**Content Structure**:

1. **Hero Section** (full viewport height, or ~90vh)

   - **Headline**: "Technical Founder building AI-powered media tools and systems that scale"
   - **Subheadline**: "Full-stack builder merging software, infrastructure, and UX to solve real problems"
   - **Intro Paragraph** (2-3 sentences):
     - Technical Founder of VidCutAI, former Sales Engineer, builder of intelligent tools
     - Works across Python, React, Docker, FFmpeg, and homelab infrastructure
     - Systems-oriented approach to product development

2. **Quick Stats Bar** (below hero)

   - Years building products: 10+
   - Current focus: VidCutAI / Nulite
   - Stack depth: Full-stack + Infra
   - Visual: Horizontal bar with icons/numbers

3. **Stack Preview** (icon bar)

   - Python, Flask, React, Remix, Tailwind, Docker, Nginx, MongoDB, FFmpeg, PySide6, pfSense
   - Hover tooltips showing context: "Used in VidCutAI backend" etc.

4. **Primary CTAs** (3 buttons)

   - "View Projects" → `/projects`
   - "How I Work" → `/process`
   - "Get in Touch" → `/contact`

**Visuals**:

- **Hero Background**: Subtle animated gradient or blurred UI elements (VidCutAI screenshots, code, diagrams)
- **Portrait**: Optional professional photo (right side or centered below text on mobile)
- **Parallax Effect**: Background moves slower than foreground on scroll

**Interactions**:

- **Entrance Animation**: 
  - Text fades in with slight upward motion (staggered: headline → subhead → paragraph → CTAs)
  - Duration: 800ms total, 100ms stagger
- **Stack Icons**: Hover reveals tooltip with context
- **Scroll Indicator**: Subtle down arrow or "scroll to explore" text

**Layout**:

```
[Container: max-w-1280px, centered]
  [Hero Section: min-h-[90vh], flex-col on mobile, flex-row on desktop]
    [Left: 60% width on desktop]
      Headline
      Subheadline
      Intro paragraph
      CTA buttons (horizontal on desktop, stacked on mobile)
    [Right: 40% width on desktop, full-width on mobile]
      Portrait image OR abstract background visual
  [Stats Bar: full-width, dark surface]
    [3-4 stat cards in row]
  [Stack Bar: full-width]
    [Icon grid: 8-12 icons with tooltips]
```

---

### 3.2 About (`/about`)

**Goal**: Tell Stephen's story as a builder and show professional evolution

**Content Structure**:

1. **Narrative Opening** (2-3 paragraphs)

   - Path from education tech → iOS founder → Sales Engineer → Technical Founder
   - Emphasis on evolution: helping others use tech → building the tools themselves
   - Systems thinking and product mindset throughout

2. **Timeline Component** (vertical or horizontal)

   - **2008-2013**: Technology Curriculum Manager, Guild for Human Services
     - Icon: Education/teaching
     - Detail: Managed tech curriculum, worked with special needs students
   - **2013-2017**: Founder / iOS Developer, Behavior Data Tracker
     - Icon: Mobile app / device
     - Detail: Built Swift/Objective-C app for behavior tracking in educational settings
   - **2017-2020**: Sales Engineer, Experian Data Quality
     - Icon: Enterprise/data building
     - Detail: Technical sales, customer-facing, communication skills
   - **2021-Present**: Founder / Lead Developer, Nulite / VidCutAI
     - Icon: AI/media/custom logo
     - Detail: AI-powered multicam podcast editor, full-stack product development

3. **Key Themes Section** (optional)

   - Working across education, accessibility, enterprise, and AI tools
   - Continuous learning and adaptation
   - Product-first mindset

**Visuals**:

- **Timeline**: Vertical line with nodes, or horizontal scrollable timeline
- **Icons**: Custom or consistent icon set for each phase
- **Optional Split View**: "Then vs Now" showing early classroom tech vs modern AI stack

**Interactions**:

- **Scroll Animation**: Timeline items fade in and slide up as they enter viewport
- **Hover States**: Reveal additional context or anecdotes ("What I learned here")
- **Click/Tap**: Expand to show more detail (optional modal or accordion)

**Layout**:

```
[Container]
  [Narrative Section: max-w-3xl, centered]
    Opening paragraphs
  [Timeline Section: full-width]
    [Vertical Timeline OR Horizontal Scrollable]
      [Timeline Item Component]
        Icon
        Date range
        Title
        Description
        [Expandable detail on hover/click]
```

---

### 3.3 Skills & Capabilities (`/skills`)

**Goal**: Show depth and breadth in an organized, scannable way

**Content Grouping** (5 capability buckets):

1. **Full-Stack & Product**

   - Python, Flask, React, Remix, Tailwind, TypeScript/JavaScript
   - Example: "Built VidCutAI desktop app with PySide6 and Flask backend"

2. **AI & Media Processing**

   - Whisper, diarization, FFmpeg, FCPXML, multicam, XML export logic
   - Example: "Implemented speaker diarization pipeline for automated angle selection"

3. **DevOps & Infrastructure**

   - Docker, Nginx, pfSense, Protectli, Raspberry Pi, GPU servers, SSL, routing, segmentation
   - Example: "Designed homelab network with VLAN segmentation and GPU inference nodes"

4. **UX & Desktop/Web UI**

   - PySide6, React components, Tailwind, responsive design, accessibility
   - Example: "Created intuitive angle configuration UI for VidCutAI"

5. **Communication & Sales Engineering**

   - Technical presentations, customer discovery, requirements gathering, documentation
   - Example: "Translated customer needs into technical specifications at Experian"

**Visual Format**:

- **Card Grid**: 3-column on desktop, 2-column on tablet, 1-column on mobile
- **Each Card Contains**:
  - Capability name (heading)
  - List of tools/technologies (tags or bullet list)
  - One-line example use case
  - Optional: "See in action" link to relevant project

**Alternative Visual**: Radial/Layered Diagram

- Core: Media Automation + AI
- Ring 1: Backend (Python, Flask, MongoDB)
- Ring 2: Frontend (React, PySide6, Tailwind)
- Ring 3: Infrastructure (Docker, Nginx, pfSense)
- Ring 4: Tools & Processes (FFmpeg, Whisper, logging, testing)

**Interactions**:

- **Filter System**: Buttons to filter by domain (AI, Infra, Frontend, Desktop, Media)
- **Hover Effect**: Card lifts slightly, reveals additional detail or project link
- **Staggered Entrance**: Cards fade in with 50ms delay between each

**Layout**:

```
[Container]
  [Section Header: centered]
    "Skills & Capabilities"
    Subheading
  [Filter Bar: horizontal, centered]
    [Filter buttons: All, AI, Infra, Frontend, Desktop, Media]
  [Card Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6]
    [Skill Card Component]
      Capability name
      Tools list (tags)
      Example use case
      [Optional: Project link]
```

---

### 3.4 Projects Overview (`/projects`)

**Goal**: Showcase real, shipped products with clear entry points to case studies

**Content Structure**:

- **Section Header**: "Projects" with subheading about real, shipped products
- **Project Grid**: 4 main projects as cards

**Project Cards** (each contains):

1. **VidCutAI**

   - Role: Founder / Lead Developer
   - Summary: "AI-driven multicam podcast editor with client-side processing"
   - Stack highlights: Python, PySide6, Flask, Docker, MongoDB, FFmpeg
   - Tags: Desktop app, AI/ML, Media processing, UX-heavy
   - CTA: "View case study" → `/projects/vidcutai`

2. **Pro Transcribe**

   - Role: Founder / Developer
   - Summary: "Web-based transcription and diarization tool"
   - Stack highlights: Flask, React/Remix, Tailwind
   - Tags: Web app, AI/ML, Workflow design
   - CTA: "View case study" → `/projects/pro-transcribe`

3. **Behavior Data Tracker**

   - Role: Founder / iOS Developer (Legacy)
   - Summary: "Special-needs behavior tracking app for educational environments"
   - Stack highlights: Swift, Objective-C, iOS
   - Tags: Mobile app, Legacy, UX for accessibility
   - CTA: "View project" → `/projects/behavior-tracker`

4. **Homelab Infrastructure**

   - Role: Architect / Operator
   - Summary: "GPU-powered private cloud for AI inference and media processing"
   - Stack highlights: pfSense, Protectli, QNAP, Ubuntu, Docker, GPU servers
   - Tags: Infrastructure, Networking, Security, Self-hosted
   - CTA: "Explore infrastructure" → `/projects/homelab`

**Visuals**:

- **Screenshots**: Product UI mockups or actual screenshots (placeholders initially)
- **Icons**: Project-specific icons or logos
- **Background**: Subtle gradient or pattern per project card

**Interactions**:

- **Staggered Entrance**: Cards fade in with delay
- **Hover Effect**: 
  - Card scales slightly (1.02x)
  - Tags animate in
  - Shadow/glow effect
- **Click**: Navigate to project detail page

**Layout**:

```
[Container]
  [Section Header]
    "Projects"
    Subheading
  [Project Grid: grid-cols-1 md:grid-cols-2, gap-8]
    [Project Card Component]
      [Image/Visual: aspect-ratio 16:9]
      [Content: padding]
        Project name
        Role badge
        Summary (1-2 lines)
        [Stack tags: horizontal flex]
        [Tags: horizontal flex, smaller]
        [CTA Button]
```

---

### 3.5 Project Detail: VidCutAI (`/projects/vidcutai`)

**Goal**: Demonstrate serious production-grade product architecture and execution

**Content Sections**:

1. **Hero & Problem Statement**

   - Headline: "VidCutAI: AI-Powered Multicam Podcast Editor"
   - Problem: Pain of manual multicam editing, time-consuming angle selection
   - Solution: Automated cuts, diarization-based angle selection, FCPXML export

2. **Architecture & Stack**

   - **Backend**: Python Flask services, MongoDB for state
   - **Desktop UI**: PySide6 (Qt) for native feel
   - **Infrastructure**: Dockerized components, Nginx reverse proxy
   - **Processing**: Client-side for privacy and speed
   - **Visual**: Architecture diagram showing component relationships

3. **Pipeline Flow** (scroll-triggered animation)

   - **Stage 1**: Audio/Video Ingestion
     - File upload, format detection
   - **Stage 2**: Conversion & Preprocessing
     - FFmpeg conversion, audio extraction
   - **Stage 3**: Transcription
     - Whisper API integration
   - **Stage 4**: Diarization
     - Speaker identification and segmentation
   - **Stage 5**: Angle Configuration
     - UI for mapping diarization IDs to user-facing names and placeholders
   - **Stage 6**: Cut Logic & Export
     - Jumpcut heuristics, FCPXML generation, organized export directories

4. **Key Features**

   - **Angle Configuration Window**: Visual mapping interface
   - **Global Speaker Editor**: Manage speaker identities across sessions
   - **Export Screen**: FCPXML export with organized directory structure
   - **Logging & Safeguards**: Error handling, long segment detection, speaker mapping validation

5. **Technical Depth**

   - Jumpcut logic and heuristics
   - Model handling and optimization
   - Logging and error handling patterns
   - Testability and maintainability

6. **Screens & UI**

   - Main dashboard screenshot
   - Angle configuration window
   - Global speaker editor
   - Export screen
   - (Use static screenshots initially, animated GIFs later)

**Visuals**:

- **Architecture Diagram**: Flowchart showing full pipeline (Mermaid or custom SVG)
- **Pipeline Visualization**: Animated scroll-telling (each stage highlights as user scrolls)
- **Screenshots**: Key UI screens with annotations
- **Code Snippets**: Optional, tasteful code examples (syntax-highlighted)

**Interactions**:

- **Scroll Animation**: Pipeline stages highlight sequentially as user scrolls
- **Hover on Diagram Nodes**: Show tooltips with component details
- **Screenshot Gallery**: Optional lightbox for viewing full-size screenshots
- **Expandable Sections**: Technical details can expand/collapse

**Layout**:

```
[Container: max-w-5xl]
  [Hero Section]
    Project name
    Problem statement
    Solution overview
  [Architecture Section]
    Stack list
    Architecture diagram (interactive)
  [Pipeline Section: full-width, scroll-triggered]
    [Pipeline Stage Component] (repeated 6x)
      Stage number/icon
      Stage name
      Description
      [Visual: diagram node or UI mockup]
  [Features Section]
    [Feature Grid: 2-column]
      Feature card with screenshot
  [Technical Section: collapsible]
    Deep-dive content
  [Screens Gallery]
    [Screenshot grid: 2-column]
```

---

### 3.6 Project Detail: Pro Transcribe (`/projects/pro-transcribe`)

**Goal**: Show web app capabilities and multi-step workflow design

**Content Structure**:

1. **Hero**

   - Project name and tagline
   - Problem: Need for reliable transcription/diarization with simple workflow

2. **Stack**

   - Flask backend, React/Remix frontend, Tailwind UI

3. **Workflow** (3-step visual)

   - **Step 1**: Upload audio file
   - **Step 2**: Processing queue with status tracking
   - **Step 3**: Results and export options (SRT, text, JSON)

4. **Features**

   - Account/authentication
   - Admin insights
   - Multiple export formats
   - Job history

**Visuals**:

- **Workflow Mockup**: Side-by-side or sequential UI mockups
- **Comparison**: Raw waveform vs labeled transcript (optional)

**Interactions**:

- **Interactive Demo**: Click to simulate upload → watch status bar animate through stages
- **Hover on Steps**: Highlight corresponding UI element

**Layout**:

```
[Container: max-w-4xl]
  [Hero]
  [Stack Section]
  [Workflow Section]
    [3-step visual: horizontal on desktop, vertical on mobile]
      Step 1: Upload
      Step 2: Processing
      Step 3: Results
  [Features Grid]
  [Interactive Demo Section: optional]
    Simulated upload flow
```

---

### 3.7 Project Detail: Behavior Data Tracker (`/projects/behavior-tracker`)

**Goal**: Show long-term product thinking and UX for special-needs contexts

**Content Structure**:

1. **Context**: Built for special-needs behavior tracking in educational settings
2. **Tech**: Swift/Objective-C, iOS native
3. **Impact**: Used in educational environments, improved data capture
4. **Timeline**: Place in Stephen's journey (2013-2017)

**Visuals**:

- **Mobile UI Mockups**: Timeline view, behavior logs, charts
- **Timeline Integration**: Show how this fits into overall career path

**Layout**:

```
[Container: max-w-3xl]
  [Hero]
  [Context Section]
  [Tech Stack]
  [Impact Section]
  [UI Mockups: mobile frames]
  [Timeline Connection]
```

---

### 3.8 Homelab & Infrastructure (`/projects/homelab`)

**Goal**: Communicate serious infrastructure design and operations capability

**Content Structure**:

1. **Overview**: GPU-powered private cloud for AI inference and media processing
2. **Components**:

   - pfSense on Protectli (firewall/router)
   - QNAP NAS (storage)
   - Ubuntu servers with GPU inference nodes
   - Raspberry Pi (various services)
   - Eero (Wi-Fi)
   - Segmented networks (VLANs)

3. **Use Cases**:

   - Supports VidCutAI processing
   - Hosts experiments and prototypes
   - Private cloud for personal projects

4. **Technical Details**:

   - Network segmentation and security
   - GPU allocation and optimization
   - Continuous experimentation

**Visuals**:

- **Network Diagram**: 
  - Core firewall/router → switches → VLANs → servers → storage → Wi-Fi
  - Interactive: hover on nodes shows details
- **Hardware Photos**: Rack setup, Protectli box, NAS, GPU rig (placeholders initially)

**Interactions**:

- **Interactive Diagram**: Hover on nodes reveals tooltips
  - "This GPU node runs model inference for VidCutAI"
  - "This VLAN isolates IoT devices"
- **Click to Expand**: Show more detail about specific components

**Layout**:

```
[Container: max-w-6xl]
  [Hero]
  [Overview Section]
  [Network Diagram: full-width, interactive]
    [Diagram Component: SVG or canvas-based]
  [Components Grid: 2-column]
    Component cards with photos/icons
  [Use Cases Section]
  [Technical Details: collapsible]
```

---

### 3.9 Process & Psychology (`/process`)

**Goal**: Show how Stephen thinks and solves problems

**Content Structure** (4-5 phases):

1. **How I Approach a New Problem**

   - Zoom out to systems view before fixing details
   - Map dependencies and relationships
   - Identify leverage points

2. **Research and Validation**

   - Gather context from multiple sources
   - Validate assumptions with experiments
   - Use logging and data over intuition

3. **System Mapping and Architecture**

   - Create visual maps of systems
   - Document decision points
   - Build tools to offload mental load (scripts, docs, mapping files)

4. **Decision-Making and Trade-offs**

   - Explicitly consider trade-offs
   - Document reasoning
   - Iterate based on feedback

5. **Execution and Iteration**

   - Build incrementally
   - Test assumptions continuously
   - Refine based on real usage

**Visual Format**:

- **Split Layout**: 
  - Left: Short paragraphs describing each phase
  - Right: Supporting visuals (diagrams, sticky-note style lists, whiteboard illustrations)
- **Stepper Component**: Click each phase to change description and visual

**Interactions**:

- **Stepper Navigation**: Click phase → content updates with animation
- **Mental Model Diagram**: Layers information as you progress through phases
- **Scroll Trigger**: Phases can also advance on scroll

**Layout**:

```
[Container: max-w-5xl]
  [Section Header]
  [Process Stepper: horizontal tabs on desktop, vertical on mobile]
    Phase 1: Approach
    Phase 2: Research
    Phase 3: Mapping
    Phase 4: Decisions
    Phase 5: Execution
  [Content Area: split layout]
    [Left: 60%]
      Phase description
      Key points (bullet list)
    [Right: 40%]
      Supporting visual (diagram, illustration)
  [Mental Model Diagram: full-width, animated]
    Shows how phases connect
```

---

### 3.10 Non-Work / Personal (`/personal`)

**Goal**: Humanize Stephen, show personality without overwhelming technical focus

**Content Structure** (3-4 tiles):

1. **Sugar Gliders** (Lego and Cella)

   - Short text about their personalities
   - Idea about turning them into a story or animated project
   - Photo or illustration

2. **Music / Audio Gear**

   - Shure SM7B, Avalon V5, Maschine, Traktor
   - Interest in audio production and DJing
   - Photo of studio setup or gear

3. **Events / Creative Projects**

   - Rune Soirée or other creative events
   - Experience design interests

4. **Optional: Other Interests**

   - Homelab as hobby (if not covered in projects)
   - Media consumption, learning

**Visuals**:

- **Photos or Illustrations**: Tasteful, not overly personal
- **Cards/Tiles Layout**: Each interest gets a card with image and short text

**Layout**:

```
[Container: max-w-4xl]
  [Section Header: "Beyond Work"]
  [Interest Grid: grid-cols-1 md:grid-cols-2, gap-6]
    [Interest Card Component]
      [Image: aspect-ratio 4:3]
      Title
      Short description (1-2 sentences)
```

---

### 3.11 Contact / Work With Me (`/contact`)

**Goal**: Make it easy and inviting to reach out

**Content Structure**:

1. **Opening Text**

   - What kinds of opportunities Stephen is open to
   - Topics: AI for media, full-stack systems, infra-heavy tools, creative tech
   - Tone: Inviting but clear about focus areas

2. **Contact Form**

   - Fields: Name, Email, Message (required)
   - Optional checkboxes: Consulting, Collaboration, Full-time role, Other
   - Submit button with loading state

3. **Direct Contact**

   - Email address (mailto link)
   - Links: GitHub, LinkedIn

4. **Response Expectations**

   - "I typically respond within 24-48 hours"

**UX**:

- **Form Validation**: Client-side validation with clear error messages
- **Success State**: Confirmation message after submission
- **Accessibility**: Proper labels, ARIA attributes, keyboard navigation

**Layout**:

```
[Container: max-w-2xl]
  [Section Header]
  [Opening Text: centered]
  [Contact Form: centered, max-w-lg]
    Form fields
    Checkboxes (optional)
    Submit button
  [Direct Contact Section: centered]
    Email link
    Social links (GitHub, LinkedIn)
  [Response Note: small text, centered]
```

---

## 4. Animations & Interaction Technologies

### Recommended Libraries

**Framer Motion** (Primary):

- Page transitions
- Staggered card/section entrances
- Scroll-based animations (`useScroll`, `useTransform`)
- Hover effects and micro-interactions

**GSAP** (Optional, for complex timelines):

- Complex SVG animations
- Scroll-triggered sequences
- Advanced easing and timelines

**Lottie** (Optional, for micro-animations):

- Small icon animations
- Loading states
- Decorative elements

### Animation Patterns

**Entrance Animations**:

- Fade in + slight upward motion (translateY: 20px → 0)
- Duration: 400-600ms
- Stagger: 50-100ms between items

**Scroll Animations**:

- Use Intersection Observer API
- Trigger animations when elements enter viewport
- Respect `prefers-reduced-motion`

**Hover Effects**:

- Subtle scale (1.02x - 1.05x)
- Brightness increase or glow
- Smooth transitions (200-300ms)

**Page Transitions**:

- Fade between pages (200-300ms)
- Optional: Slide or scale effects for project detail pages

### Performance Considerations

- Use `will-change` sparingly
- Prefer CSS transforms over layout changes
- Lazy load images and heavy components
- Debounce scroll handlers

---

## 5. Implementation Notes

### Component Structure

**Recommended Framework**: Astro with React islands

**Component Hierarchy**:

```
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
      Navigation.tsx
    sections/
      HeroSection.tsx
      TimelineSection.tsx
      SkillsGrid.tsx
      ProjectCard.tsx
      ProjectCaseStudy.tsx
      ProcessStepper.tsx
      PersonalGrid.tsx
      ContactForm.tsx
    ui/
      Button.tsx
      Card.tsx
      Tag.tsx
      Icon.tsx
    animations/
      FadeIn.tsx
      StaggerContainer.tsx
      ScrollReveal.tsx
  layouts/
    BaseLayout.astro
    ProjectLayout.astro
  pages/
    index.astro (Home)
    about.astro
    skills.astro
    projects/
      index.astro
      vidcutai.astro
      pro-transcribe.astro
      behavior-tracker.astro
      homelab.astro
    process.astro
    lab.astro
    personal.astro
    contact.astro
  styles/
    global.css (Tailwind imports)
    tokens.css (CSS variables for colors)
```

### Design System Patterns

**Reusable Components**:

- `<Card>`: Base card with consistent padding, border, rounded corners
- `<Section>`: Section wrapper with max-width, padding, spacing
- `<Button>`: Primary, secondary, ghost variants
- `<Tag>`: Small badge for skills, stack items, project tags
- `<Icon>`: Consistent icon component with size variants

**Layout Patterns**:

- `<Container>`: Max-width wrapper with responsive padding
- `<Grid>`: Responsive grid with consistent gaps
- `<SplitLayout>`: Left/right content split for desktop

**Motion Variants** (Framer Motion):

- `fadeInUp`: Standard entrance animation
- `staggerContainer`: Container for staggered children
- `hoverLift`: Hover effect for cards
- `scrollReveal`: Scroll-triggered reveal

### State Management

- Minimal state needed (mostly UI state)
- Use React hooks for form state, filters, stepper navigation
- Consider Zustand or Context API if state grows

### Content Management

- **Option 1**: Markdown/MDX files for project content
- **Option 2**: JSON files for structured data (projects, skills, timeline)
- **Option 3**: Headless CMS (Contentful, Sanity) if content updates frequently

### Routing Strategy

- Astro file-based routing
- Support both multi-page and anchor navigation
- Use `<a>` tags for internal navigation (Astro handles prefetching)

---

## 6. Asset Checklist

### Required Assets

**Photography**:

- [ ] Professional headshot/portrait (desk setting preferred)
- [ ] Workspace/desk photo
- [ ] Homelab hardware photos (rack, Protectli, NAS, GPU setup)
- [ ] Sugar glider photos (Lego and Cella)

**Screenshots**:

- [ ] VidCutAI: Main dashboard
- [ ] VidCutAI: Angle configuration window
- [ ] VidCutAI: Global speaker editor
- [ ] VidCutAI: Export screen
- [ ] Pro Transcribe: Upload interface
- [ ] Pro Transcribe: Processing queue
- [ ] Pro Transcribe: Results/export screen
- [ ] Behavior Data Tracker: Mobile UI screens (if available)

**Diagrams**:

- [ ] VidCutAI architecture diagram (component relationships)
- [ ] VidCutAI pipeline flowchart (6 stages)
- [ ] Homelab network diagram (firewall → switches → VLANs → servers)
- [ ] Process/psychology mental model diagram

**Icons & Graphics**:

- [ ] Logo or wordmark (optional, for header)
- [ ] Project icons/logos (VidCutAI, Pro Transcribe)
- [ ] Skill/technology icons (Python, React, Docker, etc.)
- [ ] Timeline icons (education, app, enterprise, AI)

**Placeholders** (for initial build):

- [ ] Generic headshot placeholder
- [ ] UI mockup placeholders
- [ ] Diagram placeholders
- [ ] Hardware photo placeholders

### Asset Specifications

**Images**:

- Format: WebP with JPG fallback
- Sizes: Multiple sizes for responsive images (srcset)
- Optimization: Compress for web (aim for <200KB per image)

**Screenshots**:

- Consistent framing and styling
- Consider adding subtle borders or shadows
- Optional: Annotations or callouts for key features

**Diagrams**:

- Vector format preferred (SVG)
- Tools: Figma, Excalidraw, Mermaid, or draw.io
- Style: Consistent with site aesthetic (dark theme, accent colors)

---

## 7. Content Style Guidelines

### Tone & Voice

- **Clear**: Direct, no jargon without explanation
- **Confident**: Assertive but not arrogant
- **Technically Literate**: Uses correct terminology
- **No Hype**: Avoid buzzwords, focus on specifics
- **Personal but Professional**: Shows personality without oversharing

### Writing Principles

- **Specifics over Buzzwords**: "Implemented speaker diarization pipeline" not "leveraged AI"
- **Outcomes over Features**: "Reduced editing time by 80%" not "has automated cutting"
- **Flows over Vague Statements**: Describe the process, not just the result
- **Short Paragraphs**: 2-3 sentences max
- **Scannable Subheadings**: Clear hierarchy, descriptive headings

### Content Format

- **Headlines**: Action-oriented, benefit-focused
- **Body Text**: Conversational but precise
- **Lists**: Use bullet points for scannability
- **Code/Technical Terms**: Use monospace font, explain when needed

---

## 8. Responsive Behavior

### Mobile (< 640px)

- Single column layouts
- Stacked navigation (hamburger menu)
- Reduced font sizes (scale down by ~20%)
- Touch-friendly targets (min 44x44px)
- Simplified animations

### Tablet (640px - 1024px)

- 2-column grids where appropriate
- Horizontal navigation
- Moderate font sizes
- Full animation support

### Desktop (> 1024px)

- Full grid layouts (3-4 columns)
- Side-by-side content splits
- Hover states active
- Full animation suite

### Accessibility

- **Keyboard Navigation**: All interactive elements focusable
- **Screen Readers**: Proper ARIA labels, semantic HTML
- **Color Contrast**: WCAG AA minimum (4.5:1 for text)
- **Motion**: Respect `prefers-reduced-motion`
- **Focus Indicators**: Visible focus states

---

## 9. Next Steps After Design Approval

1. **Set up project structure** (Astro/Next.js, Tailwind, Framer Motion)
2. **Create design system tokens** (colors, typography, spacing)
3. **Build base components** (Card, Button, Section, etc.)
4. **Implement layout components** (Header, Footer, Navigation)
5. **Build section components** one by one (Hero, Timeline, Skills, etc.)
6. **Create project detail pages** with case study content
7. **Add animations and interactions**
8. **Optimize for performance** (images, code splitting, lazy loading)
9. **Test responsive behavior** across devices
10. **Gather and integrate assets** (replace placeholders)
11. **Content review and refinement**
12. **Accessibility audit**
13. **Deploy and iterate**

---

## 10. Optional Future Enhancements

- **Blog/Notes Section**: Technical writing, process insights
- **"Now" Page**: Current focus, active projects, recent updates
- **Speaking/Teaching**: If Stephen does talks or workshops
- **Design Systems Page**: Showcase design philosophy and patterns
- **Interactive Demos**: Embedded VidCutAI or Pro Transcribe demos
- **Dark/Light Mode Toggle**: If light mode is desired
- **Search Functionality**: For projects, skills, or blog content
- **RSS Feed**: For blog/notes if added