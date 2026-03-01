---

# jobsdone.team — Automation Blueprint

> This document is a complete handoff guide for automating the marketing, sales, and growth engine for jobsdone.team. A developer or VA can pick this up and implement it end-to-end without any prior context.

---

## Overview

The goal is a self-running system that:
1. Publishes content across X and Meta on a schedule
2. Sends cold outreach emails automatically
3. Tracks leads and customers in a simple CRM
4. Alerts the team when a lead converts or takes action
5. Requires zero daily input once set up

---

## Stack (all free tiers available)

| Tool | Purpose | Cost |
|------|---------|------|
| Make.com (or n8n) | Automation backbone — connects everything | Free / $9mo |
| Airtable | CRM + content calendar database | Free |
| Buffer or Publer | X + Meta scheduling | Free / $12mo |
| Instantly.ai or Lemlist | Cold email sequences | $37/mo |
| Stripe | Payments + subscription management | 2.9% + 30c |
| Notion (optional) | Team wiki / SOPs | Free |
| Zapier (fallback) | If Make.com hits limits | Free / $20mo |

---

## Module 1 — Content Publishing

### What it does
Automatically publishes the 30-day content calendar to X and Meta without manual posting.

### Setup Steps
1. Add all posts from `CONTENT-CALENDAR.md` into Airtable (one row per post)
   - Fields: `Platform`, `Date`, `Copy`, `Image?`, `Status`, `Week`, `Theme`
2. Connect Airtable → Buffer via Make.com
   - Trigger: When `Status` = "Approved" AND `Date` = today
   - Action: Post to X and/or Facebook Page via Buffer
3. Set Buffer to auto-publish at optimal times:
   - X: 8am, 12pm, 6pm EST
   - Facebook: 9am, 3pm EST
   - Instagram: 11am, 7pm EST
4. After publishing, Make.com sets `Status` = "Published" in Airtable

### Maintenance
- Refill Airtable every 30 days with next month's content
- Review performance weekly in Buffer analytics
- Archive low-performers, double down on high-performers

### Cost: ~$0-12/mo (Buffer free tier covers up to 3 channels)

---

## Module 2 — Cold Email Outreach

### What it does
Automatically finds local businesses with weak/no online presence and sends a personalized cold email sequence.

### Lead Source Options (pick one to start)
- **Manual**: Export from Google Maps using PhantomBuster ($0 to start)
- **Semi-auto**: Apollo.io free tier — search by industry + city, export 50/day
- **Full auto**: Clay.com — enriches leads automatically (pricier, worth it at scale)

### Email Sequence (3 emails, 4 days apart)
Load these into Instantly.ai or Lemlist:

**Email 1 — Day 0 (from EMAIL.md template)**
Subject: `{Business Name} — your online presence is costing you jobs`
Body: Use the cold email template from EMAIL.md verbatim. Personalize {Business Name}, {City}, {Industry}.

**Email 2 — Day 4 (follow-up)**
Subject: `Re: {Business Name} — quick follow up`
Body:
```
Hey {First Name},

Just wanted to bump this up — did you get a chance to look at jobsdone.team?

We've had a few {Industry} businesses in {City} sign up this week. Takes about 10 minutes to get set up.

Happy to answer any questions — just reply here.

— Dutch
```

**Email 3 — Day 8 (last touch)**
Subject: `Last one from me, {First Name}`
Body:
```
Hey {First Name},

Won't keep bugging you. If the timing isn't right, totally understand.

If you ever want to get your business showing up online without hiring someone or doing it yourself — jobsdone.team is there when you're ready.

Takes 10 minutes. No contract.

— Dutch
```

### Setup Steps
1. Export 50-100 leads from Apollo.io (filter: local service businesses, no website)
2. Upload to Instantly.ai
3. Map fields: First Name, Business Name, City, Industry
4. Load all 3 email templates with merge tags
5. Set sending schedule: 20 emails/day, Mon-Fri, 8am-11am local time
6. Connect Instantly → Airtable via Make.com: when reply received → create new Lead record

### Maintenance
- Refill lead list weekly (50-100 new leads)
- Pause any email with <20% open rate, rewrite subject line
- Move replied leads to "Interested" stage in Airtable manually or via automation

### Cost: ~$37/mo (Instantly.ai starter)

---

## Module 3 — Lead Tracking CRM

### What it does
Single Airtable base that tracks every lead from first touch to paying customer.

### Airtable Schema

**Table: Leads**
| Field | Type | Notes |
|-------|------|-------|
| Business Name | Text | |
| Contact Name | Text | |
| Email | Email | |
| Phone | Phone | |
| City | Text | |
| Industry | Single select | Plumber, Electrician, Landscaper, etc. |
| Source | Single select | Cold Email, X, Meta, Referral, Organic |
| Stage | Single select | New → Contacted → Replied → Trial → Paid → Churned |
| Notes | Long text | |
| Created | Date | Auto |
| Last Touch | Date | Update manually or via automation |

**Table: Content Calendar**
(Mirror of CONTENT-CALENDAR.md — one row per post)

**Table: Customers**
| Field | Type | Notes |
|-------|------|-------|
| Business Name | Text | |
| Plan | Single select | Starter $49 / Pro $99 / DFY $199 |
| MRR | Currency | |
| Start Date | Date | |
| Stripe Customer ID | Text | |
| Status | Single select | Active / Paused / Churned |

### Automation Rules (set inside Airtable)
- When Stage changes to "Paid" → send Slack/email notification to team
- When Stage = "Replied" for 3+ days with no update → send reminder to team
- When Status = "Churned" → log churn reason, trigger win-back email

### Cost: Free (Airtable free tier = 1,000 rows, enough for first 6 months)

---

## Module 4 — Payment & Onboarding

### What it does
When someone signs up and pays, they get onboarded automatically with no manual work.

### Setup Steps
1. Create 3 Stripe products: Starter $49/mo, Pro $99/mo, DFY $199/mo
2. Create Stripe Payment Links for each (no code required)
3. Add links to jobsdone.team pricing page
4. Set up Stripe webhook → Make.com:
   - Trigger: `checkout.session.completed`
   - Actions:
     a. Add customer to Airtable Customers table
     b. Send welcome email via Gmail (template below)
     c. Send Slack/Discord alert to team: "New customer: {Business Name} on {Plan}"
     d. Create onboarding task in Airtable or Notion

### Welcome Email Template
```
Subject: Welcome to Jobs Done — you're all set

Hey {First Name},

You're in. Here's what happens next:

1. We'll have your website and profiles live within 24 hours
2. You'll get a confirmation email with your login and links
3. After that, we handle the rest — posting, updating, keeping it fresh

Any questions, just reply to this email.

Welcome aboard.

— The Jobs Done Team
jobsdone.team
```

### Cost: Free (Stripe + Make.com free tier handles this)

---

## Module 5 — Reporting & Alerts

### What it does
Weekly summary of what's working sent to the team automatically. No dashboards to check.

### Setup Steps
1. Create a Make.com scenario triggered every Monday at 8am:
   - Pull last 7 days of data from:
     - Buffer: impressions, clicks, top post
     - Airtable: new leads added, stage changes, new customers
     - Stripe: new MRR, total MRR
   - Format into a simple summary
   - Send via Gmail to team

### Weekly Report Format
```
Jobs Done — Weekly Pulse ({Date})

REVENUE
- New customers this week: X
- New MRR: $X
- Total MRR: $X

LEADS
- New leads added: X
- Replies received: X
- Trials started: X

CONTENT
- Posts published: X
- Top performing post: [copy] — X impressions
- Lowest performer: [copy] — pause or rewrite

ACTION ITEMS
- [auto-generated based on thresholds]
```

### Cost: Free

---

## Implementation Order

Do these in order. Each module builds on the last.

| Week | Task |
|------|------|
| Week 1 | Set up Airtable (Leads + Content tables). Load CONTENT-CALENDAR.md into it. Connect Buffer. First posts go live. |
| Week 1 | Set up Stripe products and payment links. Add to website. |
| Week 2 | Set up Instantly.ai. Pull first 100 leads from Apollo. Launch cold email sequence. |
| Week 2 | Connect Stripe webhook → Make.com → Airtable + welcome email. |
| Week 3 | Connect Instantly replies → Airtable via Make.com. |
| Week 3 | Build weekly pulse report automation in Make.com. |
| Week 4 | Review first month. Kill what isn't working. Scale what is. |

---

## Cost Summary

| Item | Monthly Cost |
|------|-------------|
| Buffer (free tier) | $0 |
| Airtable (free tier) | $0 |
| Make.com (free tier) | $0 |
| Instantly.ai | $37 |
| Apollo.io (free tier) | $0 |
| Stripe | 2.9% + 30c per transaction |
| **Total to start** | **~$37/mo** |

Scale to paid tiers only when free limits are hit.

---

## Handoff Checklist

Before handing this to a developer or VA, make sure you have:

- [ ] jobsdone.team login credentials (for them to update pricing)
- [ ] Access to dutchiono GitHub account (to pull this repo)
- [ ] Stripe account created under your business email
- [ ] Domain email set up (e.g. hello@jobsdone.team) for cold outreach
- [ ] Buffer account created and X + Facebook Page connected
- [ ] Airtable account created
- [ ] Make.com account created
- [ ] Budget approved: ~$37/mo to start

---

## Questions / Decisions Still Open

Open a GitHub Issue for each of these:

1. Who owns cold email responses — human or auto-reply?
2. What is the DFY ($199) scope exactly — how many posts/week, who writes them?
3. Do we offer a free trial? If so, how long and what limits?
4. What industries are we targeting first — plumbers, landscapers, electricians?
5. Is there a referral program? What's the incentive?

---

*Last updated: Feb 2026 — jobsdone.team*