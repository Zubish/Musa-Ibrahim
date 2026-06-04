---
title: "VisionEcho Live"
type: "Civic news platform"
eyebrow: "Civic reporting workflow case study"
description: "A civic newsroom app for eyewitness reports, live field evidence, reporter workflows, editor verification, comments, and sharing."
image: "/img/visionecho-showcase.png"
alt: "VisionEcho Live landing page showing civic newsroom headline and verification features"
tags:
  - "Next.js"
  - "TypeScript"
  - "Postgres"
  - "PWA"
  - "Civic UX"
cardTags:
  - "Newsroom"
  - "Verification"
  - "PWA"
cardDescription: "A civic reporting platform with live feeds, role dashboards, KYC review, editor queues, evidence capture, and shareable reports."
role: "Frontend developer intern and AI-assisted application designer"
focus: "Civic reporting UX, reporter verification, editor review, role-aware dashboards, mobile field capture, and PWA access"
status: "Live full-stack build with Next.js, API routes, PWA support, local seed data, and Neon/Postgres persistence"
liveUrl: "https://vision-echo.vercel.app"
repoUrl: "https://github.com/Zubish/vision-echo"
inquirySubject: "VisionEcho Project Inquiry"
featured: false
order: 4
---

## Project overview

VisionEcho Live is a civic news app for eyewitness reports, reporter stories, editor verification, comments, sharing, and mobile field use. It is designed around the idea that ordinary Nigerians should have a trusted way to document public life while reporters and editors help turn raw signals into verified civic news.

The project is available on GitHub at [Zubish/vision-echo](https://github.com/Zubish/vision-echo), with a live deployment at [vision-echo.vercel.app](https://vision-echo.vercel.app).

## User pain points

- Raw eyewitness posts can spread quickly without verification context.
- Reporters and editors need separate workflows for submission, review, and publishing.
- Civic reports need evidence handling for text, image, video, audio, and location-oriented context.
- Public users need to tell whether a story is raw, pending, verified, rejected, or tied to a reporter role.
- Field users need mobile-friendly access, offline fallback, and fast contribution paths.

## Product solution

VisionEcho separates public browsing from authenticated newsroom work. Public users can scan live reports by category and status, while reporters, editors, and admins work through dashboards that match their responsibilities. Verification labels, evidence pills, reporter profiles, and editor queues help the interface explain the trust level of each report.

## Key features

- Responsive live feed with category, status, and search filters.
- User registration, login, and role-specific dashboards for users, reporters, editors, and admins.
- First-admin bootstrap protection and admin role assignment.
- Reporter KYC submission, admin approval, and verified reporter application flow.
- Eyewitness and reporter report submission with text, image, video, audio preview, and location-oriented field evidence.
- Editor/admin queues for approving or rejecting submitted stories.
- Comments, reporter profiles, shareable report URLs, category pages, and report detail pages.
- PWA manifest, service worker, offline page, and mobile bottom dock for field-friendly access.

## Implementation focus

The active product build is a Next.js app with API routes, TypeScript models, validation, seed data, and database logic that can run locally or against Neon/Postgres. The interface balances public newsroom browsing with authenticated workflows for reporting, editing, role management, and verification.

The product challenge is separating raw eyewitness material from verified civic stories without slowing down mobile contribution. The frontend has to make source roles, review status, field evidence, and editor actions visible enough that users understand what they are reading or submitting.

## Why this piece matters

VisionEcho shows that I can build beyond landing pages into role-based application surfaces. It gives recruiters a way to assess my product thinking around permissions, moderation, verification, mobile contribution, and public information design.
