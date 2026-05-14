# Portfolio Website - Musa Ibrahim

This portfolio is built with Astro and now uses content collections for both project case studies and writing pieces.

## Structure

- `src/pages/index.astro` - homepage layout and section rendering.
- `src/pages/projects/[slug].astro` - dynamic case-study page template.
- `src/pages/writing/[slug].astro` - dynamic writing page template.
- `src/content/projects/` - project case studies written as Markdown files.
- `src/content/writing/` - writing posts written as Markdown files.
- `src/content.config.ts` - schemas for project and writing content.
- `src/styles/styles.css` - shared styling across the site.

## How to add a new case study

1. Create a new Markdown file in `src/content/projects/`.
2. Add frontmatter using the same shape as the existing project files:

```md
---
title: "Project Name"
type: "Landing page"
eyebrow: "Case study"
description: "Short summary for the project page hero."
image: "/img/project-image.jpg"
alt: "Project preview"
tags:
  - "Astro"
  - "CSS"
  - "UX"
cardTags:
  - "Layout"
  - "Performance"
  - "UI"
cardDescription: "Short summary used on the homepage card."
role: "Front-end developer"
focus: "Main area of focus"
status: "Live project"
inquirySubject: "Project Inquiry"
featured: false
order: 4
---

## The goal

Explain the problem or objective.

## The approach

Explain what you built and why.

## Why this piece matters

Explain the result, lesson, or strength it demonstrates.
```

3. Save the file. Astro will automatically create a page at `/projects/your-file-name`.
4. If you want it to show first on the homepage, set `featured: true` and give it the lowest `order`.

## How to add a new writing post

1. Create a new Markdown file in `src/content/writing/`.
2. Use frontmatter like this:

```md
---
title: "Post title"
type: "UI Notes"
description: "Short summary shown on the homepage and article hero."
metaDescription: "SEO description for the article."
theme: "Main idea"
order: 5
---

Write the article content here in Markdown.
```

3. Save the file and Astro will create a page at `/writing/your-file-name`.

## Notes

- Images should live in `public/img/` and be referenced with paths like `/img/example.jpg`.
- `order` controls display order on the homepage.
- The homepage counts case studies and writing posts automatically from the content collections.
- You no longer need to hardcode project or article objects in JavaScript to publish new entries.
