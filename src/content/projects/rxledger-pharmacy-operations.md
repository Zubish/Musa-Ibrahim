---
title: "RxLedger Pharmacy Operations"
type: "Pharmacy SaaS"
eyebrow: "Featured case study"
description: "A pharmacy operations platform for branch inventory, FEFO expiry control, POS workflows, staff roles, and audit-ready records."
image: "/img/rxledger-showcase.png"
alt: "RxLedger landing page showing pharmacy operations dashboard preview"
tags:
  - "React"
  - "TypeScript"
  - "Vite"
  - "Pharmacy SaaS"
  - "Inventory UX"
cardTags:
  - "SaaS app"
  - "Inventory"
  - "Healthcare"
cardDescription: "A pharmacy workspace for inventory, FEFO expiry control, POS checkout, staff roles, and audit trails."
role: "Frontend developer, Pharmacy Technician, and AI-assisted product builder"
focus: "Pharmacy inventory UX, FEFO expiry control, POS checkout, staff permissions, patient history, reports, and audit trails"
status: "Live product build with landing page, authenticated app shell, serverless API routes, and Vercel deployment workflow"
liveUrl: "https://rxledger.vercel.app"
repoUrl: "https://github.com/Zubish/RxLedger"
inquirySubject: "RxLedger Project Inquiry"
featured: true
order: 1
---

## Project overview

RxLedger is a pharmacy operations platform for community pharmacies, hospital dispensaries, and multi-branch medicine retailers. It helps pharmacy teams manage medicines and products by branch, batch, expiry date, barcode, supplier, NAFDAC number, stock movement history, pricing logic, patient purchase history, and staff accountability.

This is the featured case study because it connects my Pharmacy Technician background with my frontend and product-building skills. The project is available on GitHub at [Zubish/RxLedger](https://github.com/Zubish/RxLedger), with a live deployment at [rxledger.vercel.app](https://rxledger.vercel.app).

## User pain points

- Pharmacy teams often rely on notebooks, memory, or disconnected spreadsheets to know what is in stock.
- Expiring batches can sit unnoticed until they become losses.
- Counter staff need quick POS flows without losing batch, price, or receipt context.
- Branch managers need to know which outlet holds stock and who performed each stock action.
- Owners need records that can support reconciliation, staff accountability, and repeat patient follow-up.

## Product solution

RxLedger turns pharmacy operations into a structured workspace. Stock records are tied to branch, batch, expiry, supplier, and movement history. FEFO logic helps teams dispense the earliest safe batch first. POS checkout keeps sales, receipts, staff activity, and patient history connected instead of treating them as separate tasks.

## Key features

- Branch-aware inventory for single-site and multi-branch pharmacy groups.
- FEFO stock control for first-expiry-first-out dispensing and expiry waste reduction.
- POS checkout with carts, saved prices, receipts, sale history, and staff-linked transactions.
- Goods receiving with supplier, invoice, batch, expiry, quantity, unit cost, markup, and selling price validation.
- Role-based access for admins, branch managers, pharmacists, inventory officers, cashiers, and viewers.
- Patient history and refill follow-up support based on real purchase activity.
- Reports for stock on hand, movement ledger, expiry risk, reorder needs, supplier activity, CSV export, and print/PDF workflows.
- Audit trails for create, update, login, password reset, stock posting, and security-sensitive actions.

## Implementation focus

The application is built with React, TypeScript, Vite, Vercel serverless API routes, and a Postgres-backed data model. The interface separates the public landing page from the authenticated workspace, so the product story can stay clear while the operational app remains dense, calm, and task-focused.

The frontend challenge is information density. I designed around clear branch context, compact tables, visible stock alerts, actionable dashboard cards, and controls that support repeated daily work at the counter, in the store, and across branches.

## Why this piece matters

RxLedger gives recruiters the clearest proof of my direction: I can take pharmacy knowledge, turn it into a usable product flow, and build the frontend around the work people actually do. It shows how I think through real operational pressure, not just visual presentation.
