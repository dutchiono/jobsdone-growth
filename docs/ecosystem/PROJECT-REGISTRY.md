# Public portfolio registry: contract and curation policy
Status: proposed specification (2026-11-14). This document is not a declaration of production readiness.

Each public portfolio item should have:
```json
{
  "id": "jobs-done",
  "title": "Jobs Done",
  "category": "business-systems",
  "role": "owner-or-contributor-pending-verification",
  "summary": "Small-business web presence and operations",
  "evidence": [
    {"kind": "repository", "url": "https://github.com/dutchiono/jobsdone-web"},
    {"kind": "repository", "url": "https://github.com/dutchiono/jobsdone-growth"}
  ],
  "implementation_status": "needs-source-review",
  "deployment_status": "not-verified",
  "portfolio_visibility": "public",
  "customer_case_study": false,
  "sensitive": false,
  "last_reviewed": "2026-11-14"
}
```

Required rules:
- Distinguish **project / product / experiment / reference fork / documentation / client work / infrastructure**.
- Distinguish **concept, prototype, tested locally, deployed, active, retired** with evidence, not optimistic prose.
- Display the individual's role: conceived, designed, authored, contributed, forked, integrated, maintained.
- Public claims require traceable, publishable evidence. Planning documents are *strategy*, not case-study results.
- Private repos can contribute to internal capability assessment but should not be linked, quoted, or disclosed publicly without consent.
- Each case study needs a problem, contribution, solution, demonstration or artifact, status and optional verified outcome.
- Repositories are not the UI taxonomy. A single case study can cite multiple repos; a single repo can support multiple capabilities.

## Starter curated entries (review before publishing)
| ID | Public entry | Type | Evidence | Caveat |
| --- | --- | --- | --- | --- |
| jobs-done | Jobs Done | Business platform | dutchiono/jobsdone-web and jobsdone-growth | Check deployment and feature truth |
| m-jacob-hvac | M. Jacob HVAC | Marketing strategy under Jobs Done | dutchiono/m-jacob-hvac-marketing-strategy | No verified completed client website or metrics from source |
| ionoi-sites | ionoi-sites | Planned site-builder concept | dutchiono/ionoi-sites | README says major phases remain planned |
| bot-foundry | Bot Foundry | Bot generation application | dutchiono/bot-foundry | Confirm upstream provenance, tests, deployment |
| bushleague-lanes | Bushleague Hosting | Designer-lane infrastructure | dutchiono/bushleague-hosting | Confirm production topology and claims |
| tavernkeeper | TavernKeeper | Agent-driven interactive application | dutchiono/TavernKeeper | Confirm current live status and original contribution |
| family-tree | Family Tree | Interactive genealogy visualization | dutchiono/Egan-family-tree | Contains private family records; safe public demo needed |
| goodicecream | Good Ice Cream | Browser game | dutchiono/goodicecream | Test current deployment and contributions |
| feather | Feather | Trading UI / monitoring | dutchiono/feather | README states trading execution unimplemented |
| bnkr-nft-scaffold | BNKR NFT Scaffold | Web3 workflow research | dutchiono/BNKR-NFT-SCAFFOLD | README says not deployed |
| architects-and-agents | Architecture collection | System-design documentation | dutchiono/architects-and-agents | Evaluate duplications and provenance |

## UI filtering
Miono: products, client/business systems, AI/agents, dev tools, games, on-chain, infrastructure, experiments.
Jobs Done: websites, Google visibility, lead handling, CRM, automation, custom tools. Exclude speculative projects unrelated to service-business needs from its main conversion funnel.

The original project remains authoritative for source and commits. Registry is authoritative for **what may be claimed publicly**, not for code or production infrastructure.
