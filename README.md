# Portfolio Website - Musa Ibrahim

This repository contains a static personal portfolio built with HTML, CSS, and JavaScript.

## Structure

- `index.html` - the redesigned homepage with featured work, skills, process, writing, collaboration fit, and contact sections.
- `styles.css` - shared styling for the homepage, project case studies, and writing pages.
- `script.js` - theme toggle, mobile navigation, active section tracking, reveal animations, footer year update, and contact-form validation.
- `projects/` - dedicated case-study pages for three featured projects.
- `writing/` - short writing pages that help show design thinking and front-end perspective.
- `img/` - local images used across the site.

## Current features

- Stronger homepage structure with a more personal hero and clearer calls to action.
- Featured project section and three supporting project cards.
- Separate project case-study pages ready for real links and outcomes.
- Skills, trust, process, writing, and contact sections.
- Honest concept case studies without unfinished demo or repository links.
- Collaboration-fit content that avoids invented testimonials.
- Light and dark theme toggle with persistence.
- Active navigation highlighting while scrolling.
- Respect for `prefers-reduced-motion`.
- Form validation with a direct `mailto:` handoff.
- SEO basics including description, Open Graph tags, Twitter card tags, favicon, and JSON-LD person data.

## Preview locally

Open `index.html` directly in a browser, or run a simple local server:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## What to update next

- Replace concept case-study copy with real client/product details when production work is available.
- Add live demo and GitHub links when they are ready.
- Add real testimonials or collaborator quotes after you have permission to publish them.
- Update the fallback email in `script.js` if needed.
- Add your resume file and switch the resume request link to a direct download when ready.
