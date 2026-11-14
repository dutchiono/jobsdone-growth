# Miono ecosystem — complete accessible GitHub inventory
Date: 2026-11-14

**Scope:** 135 accessible GitHub repositories (21 private), across dutchiono, milady-ai. This is the full result of the connected GitHub repository search, not a claim to encompass additional unconnected repositories or non-GitHub assets.

## Rules
1. Each of the 135 repositories has a row in `repository-inventory.csv`. Rows represent full owner/repository identity; duplicated names across owners are distinct.
2. Grouping is **provisional based on name and metadata only** until source inspection. Do not equate a repository to a finished product or an original work.
3. Every repository requires a disposition. Default `Assess` is a pending decision, not a recommendation to delete.
4. Never disclose private contents in public Miono or Jobs Done website content without permission.
5. Never archive/delete until origin, consumers, deployment, license, replacement and backup are checked.

## Distribution (provisional)
- AI / agents / tooling: 49
- Unclassified / general: 35
- Web3 / finance / markets: 18
- Games / interactive / creative: 15
- Infrastructure / developer platform: 10
- Web / communication / business systems: 4
- Business products / customer growth: 4

## Catalog work queue
Work the complete CSV by grouped batches, not by interesting individual repos:
1. **Identify identity/deploy:** miono.live's real source and hosting; canonical jobsdone.team source and jobsdoneteam mirror.
2. **Business products:** Jobs Done, M. Jacob strategy, ionoi-sites, website and marketing systems.
3. **Infra/hosting:** Bushleague, dotcache, cloud, deployment, site builders, proxy and gateway.
4. **Agents:** Bot Foundry, system architect repos, plugin family, Eliza/Milady, AI assistants.
5. **Interactive:** games, visualizers, family tree and creative tools.
6. **Finance/Web3:** wallets, trading dashboards, market simulations, token-related projects. Separate high-risk and experimental claims.
7. **Remaining:** personally owned, miscellaneous, low-data repos and upstream mirrors.

## Decisions to make for every row
`retain-product`, `retain-platform`, `retain-reference`, `integrate-package`, `consolidate-docs`, `archive-after-migration`, `delete-after-separate-approval`, `needs-investigation`.

## Review checklist per repository
- Origin (created vs forked), authorship/contribution and licensing
- Functionality verified by source code, tests and reproducible build
- Relationships: dependencies, callers, sibling repos, domains and shared infra
- Public/private classification, credentials and customer-data risk
- Current active/stale status, canonical owner, website visibility
- Explicit end-state and migration or retention criteria

## Important finding
The requested approximately 160 repos do not all appear in current connected search: **135** accessible repository IDs returned. The remainder should be logged as a scope gap, not silently assumed complete.

## Priorities
- **Miono Studio:** umbrella portfolio, curated evidence-driven project registry.
- **Jobs Done:** customer-facing product; small business websites, SEO, CRO, CRM, automation, custom software.
- **ionoi-sites:** planned consolidation into Jobs Done after preserving content; no immediate deletion.
- **Bot Foundry:** assessed integration and standalone tool.
- **Bushleague:** shared deployment layer with separate tenant boundaries and rollback.
