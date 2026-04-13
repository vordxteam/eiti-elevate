# EITI SRS Completion & UX Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close all SRS gaps and fix all identified UI/UX issues in the EITI website build.

**Architecture:** All changes are purely frontend — React component edits, new utility hooks, and CSS tweaks. No new routes, no new dependencies. Each task is an isolated, reviewable diff.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, shadcn/ui, react-router-dom v6, Vite, Vitest

---

## File Map

| File | Change Type | Reason |
|---|---|---|
| `src/pages/Index.tsx` | Modify | Work preview links → direct case study pages; story card avatars |
| `src/pages/Programs.tsx` | Modify | Fix broken alternating layout; add program slug to apply links |
| `src/pages/Impact.tsx` | Modify | Split "Opportunity Gap" as distinct section; fix Partner CTA destination |
| `src/pages/Apply.tsx` | Modify | Read `?program` URL param to pre-select; add CTA reinforcement section |
| `src/components/Navbar.tsx` | Modify | Add aria-label; add mobile menu slide animation |
| `src/components/CTASection.tsx` | Modify | Add `buttonHref` prop for external/mailto links |
| `src/index.css` | Modify | Add mobile menu slide-down animation keyframes |

---

### Task 1: Fix Programs page alternating layout bug

**Files:**
- Modify: `src/pages/Programs.tsx`

The `md:flex-row-reverse` class on a CSS Grid container has zero effect. Every program appears in the same layout. The fix uses `md:order-last` / `md:order-first` on the grid children instead.

- [ ] **Step 1: Open `src/pages/Programs.tsx` and locate line 53**

The broken line reads:
```tsx
<div key={p.title} className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
```

- [ ] **Step 2: Replace the outer div and both inner column divs**

Replace the entire `programs.map` render block (lines 52–86) with:

```tsx
{programs.map((p, i) => (
  <div key={p.title} className="grid md:grid-cols-2 gap-12 items-start">
    <div className={i % 2 === 1 ? "md:order-last" : ""}>
      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
        <p.icon className="h-7 w-7 text-accent" />
      </div>
      <h3 className="text-3xl font-black mb-4">{p.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-8">{p.desc}</p>
      <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
        <Link to={`/apply?program=${p.slug}`}>Apply for This Program <ArrowRight className="ml-2 h-4 w-4" /></Link>
      </Button>
    </div>
    <div className={`space-y-6 ${i % 2 === 1 ? "md:order-first" : ""}`}>
      <div className="bg-secondary rounded-xl p-6">
        <h4 className="font-bold mb-4">What You'll Learn</h4>
        <ul className="space-y-3">
          {p.learn.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-secondary rounded-xl p-6">
        <h4 className="font-bold mb-4">Career Outcomes</h4>
        <div className="flex flex-wrap gap-2">
          {p.careers.map((c) => (
            <span key={c} className="px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full">{c}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
))}
```

- [ ] **Step 3: Add `slug` field to each program object (lines 7–36)**

Replace the programs array with:

```tsx
const programs = [
  {
    slug: "electrical",
    icon: Zap,
    title: "Electrical Technology",
    desc: "Our electrical program prepares students for careers in residential and commercial electrical work, from wiring and circuitry to code compliance and safety standards.",
    learn: ["Residential & commercial wiring", "Electrical code & safety", "Blueprint reading", "Troubleshooting & repair", "Smart home systems"],
    careers: ["Electrician Apprentice", "Maintenance Technician", "Electrical Contractor"],
  },
  {
    slug: "solar",
    icon: Sun,
    title: "Solar Installation",
    desc: "Be at the forefront of clean energy. Our solar program covers everything from panel installation to system design, preparing you for one of the fastest-growing industries.",
    learn: ["PV system design", "Panel installation & mounting", "Inverter setup & wiring", "Site assessment", "Safety protocols"],
    careers: ["Solar Installer", "Solar Technician", "Energy Consultant"],
  },
  {
    slug: "carpentry",
    icon: Hammer,
    title: "Carpentry",
    desc: "From rough framing to fine finishing, our carpentry program teaches you to build with skill and precision using both traditional techniques and modern tools.",
    learn: ["Framing & structural work", "Finish carpentry & trim", "Power & hand tools", "Blueprint reading", "Material estimation"],
    careers: ["Carpenter Apprentice", "Construction Worker", "Remodeling Specialist"],
  },
  {
    slug: "culinary",
    icon: ChefHat,
    title: "Culinary Arts",
    desc: "Develop professional kitchen skills from food preparation and cooking techniques to kitchen management and food safety certification.",
    learn: ["Cooking fundamentals", "Baking & pastry", "Food safety (ServSafe)", "Menu planning", "Kitchen management"],
    careers: ["Line Cook", "Prep Chef", "Catering Assistant"],
  },
];
```

- [ ] **Step 4: Verify visually — Solar (index 1) and Culinary (index 3) detail panels should now appear on the LEFT on desktop**

- [ ] **Step 5: Commit**
```bash
git add src/pages/Programs.tsx
git commit -m "fix: correct programs page alternating layout using grid order classes"
```

---

### Task 2: Homepage work preview → direct case study links

**Files:**
- Modify: `src/pages/Index.tsx`

Currently both project cards on the homepage `<Link to="/work">`. The SRS requires each project to link directly to its case study page.

- [ ] **Step 1: Locate the Work Preview section in `src/pages/Index.tsx` (~line 158)**

Find the array literal:
```tsx
{ img: projectPark, title: "Virginia Park Beautification", desc: "..." },
{ img: projectBuffalo, title: "Buffalo Soldiers Project", desc: "..." },
```

- [ ] **Step 2: Add `link` field to each project object**

```tsx
{ img: projectPark, title: "Virginia Park Beautification", link: "/work/virginia-park", desc: "A community-driven project transforming a neighborhood park into a vibrant gathering space." },
{ img: projectBuffalo, title: "Buffalo Soldiers Project", link: "/work/buffalo-soldiers", desc: "Restoring and honoring historical monuments with expert craftsmanship." },
```

- [ ] **Step 3: Update the Link component to use `p.link` (~line 162)**

Change:
```tsx
<Link to="/work" key={p.title} className="group">
```
To:
```tsx
<Link to={p.link} key={p.title} className="group">
```

- [ ] **Step 4: Commit**
```bash
git add src/pages/Index.tsx
git commit -m "fix: homepage work preview cards link to individual case study pages"
```

---

### Task 3: Apply page program auto-fill via URL param

**Files:**
- Modify: `src/pages/Apply.tsx`

When a user clicks "Apply for This Program" on the Programs page, they should land on the Apply form with the relevant program pre-selected in the dropdown.

- [ ] **Step 1: Add `useSearchParams` import to `src/pages/Apply.tsx`**

Change the react-router-dom import line from:
```tsx
import { useState } from "react";
```
to add useSearchParams — find the react-router-dom import (there isn't one yet) and add it. Add at the top of imports:
```tsx
import { useSearchParams } from "react-router-dom";
```

- [ ] **Step 2: Read the `?program` param inside `ApplyPage`**

At the top of the `ApplyPage` component body (after the `useToast` hook call), add:
```tsx
const [searchParams] = useSearchParams();
const preselectedProgram = searchParams.get("program") ?? "";
```

- [ ] **Step 3: Pass `defaultValue` to the Select component (~line 116)**

Change:
```tsx
<Select required>
```
To:
```tsx
<Select required defaultValue={preselectedProgram}>
```

- [ ] **Step 4: Verify by visiting `/apply?program=solar` — "Solar Installation" should be pre-selected**

- [ ] **Step 5: Commit**
```bash
git add src/pages/Apply.tsx
git commit -m "feat: pre-fill program selection on apply page via URL param"
```

---

### Task 4: Extend CTASection to support external/mailto links

**Files:**
- Modify: `src/components/CTASection.tsx`

The Impact page's "Partner With Us" CTA currently links to `/apply` (a student form). Partners and funders need to reach the organization directly, not be sent through the student funnel.

- [ ] **Step 1: Add `secondaryButtonText` and `secondaryButtonHref` props to `CTASectionProps` interface**

Replace the entire `src/components/CTASection.tsx` with:

```tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "default" | "dark";
}

const CTASection = ({
  title,
  description,
  buttonText = "Apply Now",
  buttonLink = "/apply",
  secondaryButtonText,
  secondaryButtonHref,
  variant = "dark",
}: CTASectionProps) => (
  <section className={`section-padding ${variant === "dark" ? "bg-primary" : "bg-accent"}`}>
    <div className="container-narrow text-center">
      <h2 className={`text-3xl md:text-5xl font-black mb-6 ${variant === "dark" ? "text-primary-foreground" : "text-accent-foreground"}`}>
        {title}
      </h2>
      <p className={`text-lg max-w-xl mx-auto mb-8 ${variant === "dark" ? "text-primary-foreground/70" : "text-accent-foreground/80"}`}>
        {description}
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className={`font-semibold text-base px-8 ${
            variant === "dark"
              ? "bg-accent text-accent-foreground hover:bg-accent/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          <Link to={buttonLink}>
            {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        {secondaryButtonText && secondaryButtonHref && (
          <Button
            asChild
            size="lg"
            variant="outline"
            className={`font-semibold text-base px-8 ${
              variant === "dark"
                ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                : "border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
            }`}
          >
            <a href={secondaryButtonHref}>
              <Mail className="mr-2 h-5 w-5" /> {secondaryButtonText}
            </a>
          </Button>
        )}
      </div>
    </div>
  </section>
);

export default CTASection;
```

- [ ] **Step 2: Update the Impact page CTASection call to use the correct destination**

In `src/pages/Impact.tsx`, find the final `<CTASection>` (~line 121) and replace:
```tsx
<CTASection
  title="Partner With Us"
  description="Join our mission to create pathways to prosperity for Detroit's workforce."
  buttonText="Get In Touch"
  buttonLink="/apply"
/>
```
With:
```tsx
<CTASection
  title="Partner With Us"
  description="Join our mission to create pathways to prosperity for Detroit's workforce."
  buttonText="Apply as Student"
  buttonLink="/apply"
  secondaryButtonText="Contact Our Team"
  secondaryButtonHref="mailto:info@eiti.org"
/>
```

- [ ] **Step 3: Commit**
```bash
git add src/components/CTASection.tsx src/pages/Impact.tsx
git commit -m "feat: add secondary button to CTASection; fix Impact partner CTA destination"
```

---

### Task 5: Split Impact page — add distinct Opportunity Gap section

**Files:**
- Modify: `src/pages/Impact.tsx`

The SRS calls for two distinct sections: "Who We Serve" (student demographics) and "Opportunity Gap" (workforce shortage framing). Currently they are merged. Splitting them creates a stronger narrative arc for funders.

- [ ] **Step 1: Locate the "Who We Serve" section in `src/pages/Impact.tsx` (~lines 50–85)**

The section currently contains both paragraphs about barriers AND the demographic bars. The "Who We Serve" section should focus on the demographic data. A new "Opportunity Gap" section should follow.

- [ ] **Step 2: Replace the entire Who We Serve section with a tighter demographic-only version**

Replace lines 50–85 (`{/* Who We Serve */}` block) with:

```tsx
{/* Who We Serve */}
<section className="section-padding bg-secondary">
  <div className="container-narrow">
    <SectionHeading label="Who We Serve" title="Detroit's Untapped Talent" />
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our students come from Detroit's most underserved neighborhoods — people with the drive to build a better life but without access to the training that makes it possible.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          EITI removes every barrier: training is free, mentorship is built in, and employer connections are direct. We meet people where they are and help them get where they want to go.
        </p>
      </div>
      <div className="space-y-4">
        {[
          { label: "Ages 18–35", pct: "78%" },
          { label: "Previously Unemployed", pct: "65%" },
          { label: "First-Generation Workers", pct: "52%" },
          { label: "Detroit Residents", pct: "89%" },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-xl p-5">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-sm">{item.label}</span>
              <span className="font-bold text-accent">{item.pct}</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: item.pct }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Opportunity Gap */}
<section className="section-padding">
  <div className="container-narrow">
    <SectionHeading label="Opportunity Gap" title="The Skilled Trades Crisis Is Now" />
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {[
        { value: "500K+", label: "Skilled trade jobs unfilled in the U.S. by 2028", icon: Target },
        { value: "$63K", label: "Median wage for skilled tradespeople nationally", icon: TrendingUp },
        { value: "40%", label: "Of Detroit residents live below the poverty line", icon: Heart },
      ].map((stat) => (
        <div key={stat.label} className="text-center p-8 bg-secondary rounded-2xl">
          <stat.icon className="h-8 w-8 text-accent mx-auto mb-4" />
          <div className="text-4xl font-black text-accent mb-3">{stat.value}</div>
          <p className="text-muted-foreground text-sm leading-relaxed">{stat.label}</p>
        </div>
      ))}
    </div>
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-xl text-muted-foreground leading-relaxed">
        The gap between untrained workers and unfilled jobs is not a talent problem — it's an access problem. EITI is the bridge.
      </p>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add the missing icon imports to `src/pages/Impact.tsx`**

The current import is:
```tsx
import { Users, Briefcase, TrendingUp, Award, Target, Heart } from "lucide-react";
```
`Target` and `Heart` are already imported. No change needed.

- [ ] **Step 4: Commit**
```bash
git add src/pages/Impact.tsx
git commit -m "feat: split Impact page into distinct Who We Serve and Opportunity Gap sections"
```

---

### Task 6: Apply page — add CTA reinforcement section

**Files:**
- Modify: `src/pages/Apply.tsx`

The SRS specifies a CTA reinforcement section after the form. This closes the conversion loop for hesitant applicants who need a lower-friction contact option.

- [ ] **Step 1: Locate the end of `src/pages/Apply.tsx` — after the closing `</section>` of the form section (~line 141)**

- [ ] **Step 2: Add the CTA reinforcement section before the closing `</div>`**

After the `{/* Application Form */}` section's closing `</section>` tag, insert:

```tsx
{/* CTA Reinforcement */}
<section className="section-padding bg-primary">
  <div className="container-narrow">
    <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
      <div className="md:col-span-2">
        <h3 className="text-2xl font-black text-primary-foreground mb-2">Still Have Questions?</h3>
        <p className="text-primary-foreground/70">
          Our admissions team is here to help. Reach out and we'll get back to you within one business day.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-col gap-4 justify-center md:justify-end">
        <a
          href="tel:+13135550100"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
        >
          <Phone className="h-4 w-4" /> (313) 555-0100
        </a>
        <a
          href="mailto:info@eiti.org"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
        >
          <Mail className="h-4 w-4" /> info@eiti.org
        </a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add `Phone` and `Mail` to the lucide-react import**

Change:
```tsx
import { CheckCircle, ArrowRight, GraduationCap, Wrench, Users, DollarSign } from "lucide-react";
```
To:
```tsx
import { CheckCircle, ArrowRight, GraduationCap, Wrench, Users, DollarSign, Phone, Mail } from "lucide-react";
```

- [ ] **Step 4: Commit**
```bash
git add src/pages/Apply.tsx
git commit -m "feat: add CTA reinforcement section to Apply page"
```

---

### Task 7: Mobile nav — aria-label + slide animation

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/index.css`

The mobile menu toggle button has no accessible label, and the menu pops in with no animation.

- [ ] **Step 1: Add `aria-label` to the toggle button in `src/components/Navbar.tsx`**

Find (~line 44):
```tsx
<button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
```
Replace with:
```tsx
<button
  className="md:hidden text-foreground"
  onClick={() => setOpen(!open)}
  aria-label={open ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={open}
>
```

- [ ] **Step 2: Replace the hard `open && (...)` conditional with an animated wrapper**

Find the mobile menu block (~lines 50–67):
```tsx
{open && (
  <div className="md:hidden bg-card border-b px-6 pb-6 space-y-4">
    ...
  </div>
)}
```

Replace with:
```tsx
<div
  className={`md:hidden bg-card border-b overflow-hidden transition-all duration-300 ease-in-out ${
    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="px-6 pb-6 pt-2 space-y-4">
    {navLinks.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        onClick={() => setOpen(false)}
        className={`block text-sm font-medium py-2 ${
          location.pathname === link.to ? "text-accent" : "text-foreground/70"
        }`}
      >
        {link.label}
      </Link>
    ))}
    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
      <Link to="/apply" onClick={() => setOpen(false)}>Apply Now</Link>
    </Button>
  </div>
</div>
```

- [ ] **Step 3: Commit**
```bash
git add src/components/Navbar.tsx
git commit -m "fix: add aria-label and smooth animation to mobile nav menu"
```

---

### Task 8: Student story cards — add colored initial avatars

**Files:**
- Modify: `src/pages/Index.tsx`
- Modify: `src/pages/Impact.tsx`

Quote cards currently have no visual anchor. Adding a colored initial avatar makes the testimonials feel more personal and credible.

- [ ] **Step 1: Update story card rendering in `src/pages/Index.tsx` (~lines 137–151)**

Replace the stories render block with:
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {stories.map((s) => {
    const initials = s.name.split(" ").map((n) => n[0]).join("");
    const colors = ["bg-accent/20 text-accent", "bg-blue-100 text-blue-700", "bg-emerald-100 text-emerald-700"];
    const colorClass = colors[stories.indexOf(s) % colors.length];
    return (
      <Card key={s.name} className="border-0 shadow-sm bg-card">
        <CardContent className="p-8">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-5 ${colorClass}`}>
            {initials}
          </div>
          <p className="text-lg leading-relaxed mb-6 italic text-muted-foreground">"{s.quote}"</p>
          <div>
            <div className="font-bold">{s.name}</div>
            <div className="text-sm text-accent font-medium">{s.program} Graduate</div>
          </div>
        </CardContent>
      </Card>
    );
  })}
</div>
```

- [ ] **Step 2: Apply the same avatar treatment to `src/pages/Impact.tsx` stories section (~lines 90–103)**

Replace the Impact stories render with:
```tsx
<div className="grid sm:grid-cols-2 gap-6">
  {stories.map((s, idx) => {
    const initials = s.name.split(" ").map((n) => n[0]).join("");
    const colors = ["bg-accent/20 text-accent", "bg-blue-100 text-blue-700", "bg-emerald-100 text-emerald-700", "bg-purple-100 text-purple-700"];
    const colorClass = colors[idx % colors.length];
    return (
      <Card key={s.name} className="border-0 shadow-sm">
        <CardContent className="p-8">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-5 ${colorClass}`}>
            {initials}
          </div>
          <p className="text-lg leading-relaxed mb-6 italic text-muted-foreground">"{s.quote}"</p>
          <div>
            <div className="font-bold">{s.name}</div>
            <div className="text-sm text-accent font-medium">{s.program} Graduate</div>
          </div>
        </CardContent>
      </Card>
    );
  })}
</div>
```

- [ ] **Step 3: Commit**
```bash
git add src/pages/Index.tsx src/pages/Impact.tsx
git commit -m "feat: add colored initial avatars to student story quote cards"
```

---

### Task 9: Remove unused imports from case study pages

**Files:**
- Modify: `src/pages/VirginiaPark.tsx`
- Modify: `src/pages/BuffaloSoldiers.tsx`

Both pages import `Button`, `Calendar`, and `Users` that are never used.

- [ ] **Step 1: Fix `src/pages/VirginiaPark.tsx` line 6**

Change:
```tsx
import { ArrowLeft, MapPin, Calendar, Users, Award } from "lucide-react";
```
To:
```tsx
import { ArrowLeft, MapPin, Award } from "lucide-react";
```

Also remove the unused `Button` import — line 3:
```tsx
import { Button } from "@/components/ui/button";
```
Delete that line entirely.

- [ ] **Step 2: Fix `src/pages/BuffaloSoldiers.tsx` line 6**

Change:
```tsx
import { ArrowLeft, MapPin, Calendar, Users, Award } from "lucide-react";
```
To:
```tsx
import { ArrowLeft, MapPin, Award } from "lucide-react";
```

Also remove the unused `Button` import — line 3:
```tsx
import { Button } from "@/components/ui/button";
```
Delete that line entirely.

- [ ] **Step 3: Commit**
```bash
git add src/pages/VirginiaPark.tsx src/pages/BuffaloSoldiers.tsx
git commit -m "chore: remove unused imports from case study pages"
```

---

## Self-Review Checklist

- [x] **Spec coverage:** All 8 identified gaps and issues are covered by tasks 1–9
- [x] **No placeholders:** All code blocks are complete and copy-pasteable
- [x] **Type consistency:** `p.slug` added to programs array in Task 1 before used in link in same task
- [x] **CTASection props:** `secondaryButtonText`/`secondaryButtonHref` defined in Task 4 interface before use
- [x] **Icon imports:** `Phone`, `Mail` added in Task 6; `Target`, `Heart` confirmed already imported in Impact.tsx
- [x] **URL param values** (`electrical`, `solar`, `carpentry`, `culinary`) match existing `SelectItem` values in Apply.tsx
