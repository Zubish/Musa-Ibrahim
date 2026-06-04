---
title: "BlackCrow Escrow"
type: "Escrow fintech"
eyebrow: "Escrow workflow case study"
description: "A social-commerce escrow platform that helps buyers and sellers create protected transaction links, verify access, track delivery, release funds, and manage wallet withdrawals."
image: "/img/blackcrow-showcase.png"
alt: "BlackCrow escrow landing page showing protected transaction messaging and trust metrics"
tags:
  - "JavaScript"
  - "Node.js"
  - "Postgres"
  - "Escrow UX"
  - "Fintech"
cardTags:
  - "Escrow"
  - "Fintech"
  - "Trust UX"
cardDescription: "A transaction-protection app for buyer and seller workflows, with escrow links, OTP access, payment boundaries, wallet states, and withdrawal handling."
role: "Frontend developer intern candidate and AI-assisted workflow designer"
focus: "Escrow UX, buyer/seller state clarity, payment boundaries, guest access, wallet movement, and withdrawal requests"
status: "Live MVP with static frontend screens, Node API routes, Neon/Postgres persistence, and Vercel deployment support"
liveUrl: "https://black-crow-rosy.vercel.app"
repoUrl: "https://github.com/Zubish/BlackCrow"
inquirySubject: "BlackCrow Project Inquiry"
featured: false
order: 2
---

## Project overview

BlackCrow is an escrow web app for social-commerce transactions. A buyer or seller can create a protected transaction link, invite the other party, accept terms, fund escrow, confirm delivery, release funds, and request payout to a local bank.

The project is available on GitHub at [Zubish/BlackCrow](https://github.com/Zubish/BlackCrow), with a live deployment at [black-crow-rosy.vercel.app](https://black-crow-rosy.vercel.app).

## User pain points

- Social-commerce buyers often send money before they have strong delivery assurance.
- Sellers need confidence that funds exist before releasing goods.
- Guest users may not want a full account before checking one transaction.
- Both parties need to understand which step is waiting: terms, payment, delivery, release, wallet credit, or withdrawal.
- Financial flows need clear boundaries between simulated/demo payment behavior and production provider wiring.

## Product solution

BlackCrow treats escrow as a state-clarity problem. The interface is built around the transaction timeline so both sides can see what has happened, what is still pending, and when funds move from buyer payment to protected escrow, seller wallet, and eventual withdrawal.

## Key features

- One-off escrow links that can be created by either buyer or seller.
- Guest escrow tracking with email OTP access for safer link-based transactions.
- Account signup, login, dashboard, activity, wallet, and withdrawal pages for returning users.
- Escrow action flow for terms acceptance, payment confirmation, delivery marking, and fund release.
- Payment initialization and verification boundaries with simulated payment support and Paystack-ready wiring.
- Seller wallet states and withdrawal request handling for local bank payout workflows.
- API routes for account, authentication, escrow actions, payments, wallet state, and internal payout settlement.

## Implementation focus

The application combines static frontend screens with a lightweight Node backend. The frontend keeps the transaction story direct and confidence-focused, while the backend supports escrow records, account state, payment boundaries, wallet movement, email access, and Neon/Postgres persistence.

The strongest interface work is in the state transitions. A recruiter can inspect how the product separates guest tracking, account dashboards, payment initialization, escrow actions, and withdrawal requests instead of collapsing everything into one vague "payment" moment.

## Why this piece matters

BlackCrow shows that I can design for trust-sensitive flows where copy, state labels, and next actions matter. It is a strong companion to RxLedger because it proves I can apply workflow thinking outside HealthTech into fintech-style product behavior.
