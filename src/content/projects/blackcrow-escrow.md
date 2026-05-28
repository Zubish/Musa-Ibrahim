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
cardDescription: "A transaction-protection app for buyer and seller workflows, with escrow links, OTP tracking, payment boundaries, wallet states, and withdrawal flow design."
role: "AI-assisted product builder and front-end workflow designer"
focus: "Trust-building UI, protected transaction flows, payment boundaries, wallet UX, and buyer/seller state clarity"
status: "Live MVP with static frontend screens, Node API routes, Postgres-ready persistence, and Vercel deployment support"
liveUrl: "https://black-crow-rosy.vercel.app"
repoUrl: "https://github.com/Zubish/BlackCrow"
inquirySubject: "BlackCrow Project Inquiry"
featured: false
order: 2
---

## Project overview

BlackCrow is an escrow web app for social-commerce transactions. It lets a buyer or seller create a protected transaction link, invite the other party, accept transaction terms, fund escrow, confirm delivery, release funds, and request payout to a local bank.

The project is available on GitHub at [Zubish/BlackCrow](https://github.com/Zubish/BlackCrow), with a live deployment at [black-crow-rosy.vercel.app](https://black-crow-rosy.vercel.app).

## Useful features

- One-off escrow links that can be created by either buyer or seller.
- Account signup, login, dashboard, activity, and wallet pages for returning users.
- Guest escrow tracking with email OTP access for safer link-based transactions.
- Payment initialization and verification boundaries with simulated payment support and Paystack-ready wiring.
- Seller wallet and withdrawal request flows for local bank payout handling.
- API routes for account, authentication, escrow actions, payments, wallet state, and internal payout settlement.

## Implementation focus

The application combines static frontend screens with a lightweight Node backend. The frontend keeps the transaction story direct and confidence-focused, while the backend supports escrow records, account state, payment boundaries, wallet movement, email access, and Postgres-ready persistence.

The strongest interface work is in the state transitions: both parties need to understand what has happened, what is waiting on them, and when money is protected, released, or ready for withdrawal.

## Why this piece matters

BlackCrow matters because escrow is mostly a state-clarity problem for the interface. The buyer and seller need to know who has accepted terms, whether payment has been initialized, when funds are protected, what happens after delivery, and how payout moves into a wallet or bank withdrawal flow. I used the project to practice making financial actions readable without hiding the risk behind decorative landing-page copy.
