---
title: "i-Go-rent"
type: "Rental marketplace"
eyebrow: "Rental trust workflow case study"
description: "A Lagos rental marketplace for verified gear, booking dates, deposits, virtual escrow, vendor trust, and logistics coordination."
image: "/img/igorent-showcase.png"
alt: "i-Go-rent landing page showing verified rentals, escrow confidence, and a professional sound system listing"
tags:
  - "Next.js"
  - "TypeScript"
  - "Neon Postgres"
  - "Flutterwave"
  - "Rental UX"
cardTags:
  - "Marketplace"
  - "Escrow"
  - "Verification"
cardDescription: "A Lagos rental marketplace with verified listings, booking flow, deposits, escrow states, reviews, and logistics options."
role: "Frontend developer intern and AI-assisted marketplace builder"
focus: "Marketplace UX, rental booking, virtual escrow, host verification, deposits, dispute handling, logistics, and trust signals"
status: "Live Next.js production build connected to GitHub and Vercel, with database-backed marketplace flows"
liveUrl: "https://i-go-rent-72cn.vercel.app"
repoUrl: "https://github.com/Zubish/i-Go-rent"
inquirySubject: "i-Go-rent Project Inquiry"
featured: false
order: 3
---

## Project overview

i-Go-rent is a peer-to-peer rental marketplace for Lagos renters, vendors, and logistics partners. The product helps people rent event equipment, creator gear, transport, and other high-value items with more confidence by combining verified vendors, booking dates, deposits, virtual escrow, return inspection, reviews, and optional logistics.

The project is available on GitHub at [Zubish/i-Go-rent](https://github.com/Zubish/i-Go-rent), with a live deployment at [i-go-rent-72cn.vercel.app](https://i-go-rent-72cn.vercel.app).

## User pain points

- Renters need confidence that a vendor and item are real before paying.
- Vendors need protection against damage, late return, or non-payment.
- High-value rentals often require deposits, but users need to understand when that money is held, released, refunded, or disputed.
- Lagos rentals may involve pickup, dispatch, or third-party logistics, so the product needs room for delivery coordination.
- Marketplaces need visible trust signals: verified badges, reviews, host tiers, booking status, and dispute paths.

## Product solution

i-Go-rent frames rental as a trust workflow instead of a simple listing grid. Users can browse categories, inspect verified listings, choose rental dates, pay rental fees and deposits into escrow, track booking status, and rely on return inspection before funds settle. Hosts can progress through identity verification tiers, while logistics and dispute handling sit close to the booking journey.

## Key features

- Marketplace categories for events, transport, gear, accommodation, machines, grills, boats, and more.
- Featured listing cards with location, daily rental price, vendor verification, and booking CTA.
- Booking model with renter, host, listing, date range, number of days, price per day, total price, and booking status.
- Virtual escrow records for held, released, refunded, partially released, and disputed funds.
- Payment records and Flutterwave integration boundaries for rental payments.
- Identity verification model for NIN, driver's license, international passport, BVN, and CAC.
- Host verification tiers for trusted host, verified host, and business host states.
- Reviews, ratings, dispute evidence, notifications, and logistics-oriented product paths.

## Implementation focus

The active build uses Next.js, TypeScript, React, shadcn/Radix-style UI components, Neon/Postgres data modeling, Vercel deployment, and Flutterwave payment boundaries. The local codebase includes database schema design for users, identity verification, host tiers, listings, bookings, escrow transactions, payments, reviews, disputes, and notifications.

The frontend challenge is making the rental process feel inspectable. Renters and vendors need to understand which action comes next, what money is being held, what verification means, and how the product handles return, release, refund, or dispute states.

## Why this piece matters

i-Go-rent strengthens the portfolio because it adds a marketplace product with a different kind of trust problem from BlackCrow. It shows that I can reason through two-sided marketplaces, booking logic, identity verification, escrow states, and logistics-aware user journeys.
