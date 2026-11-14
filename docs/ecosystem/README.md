# Miono / Jobs Done Ecosystem: Consolidation Plan
Status: working architectural decision record (2026-11-14). No repos or deployments have been removed or migrated by this document.

## Purpose
Turn a distributed collection of experiments, products, forks, client-facing sites and infrastructure into a coherent, maintainable portfolio, without misrepresenting maturity, authorship, or delivery.

## Identity and product boundaries
- **Miono Studio / miono.live**: the developer's identity, engineering practice, full portfolio, research and products. A discovery surface, not solely a marketing agency.
- **Jobs Done / jobsdone.team**: customer-facing small-business outcomes. Sites, local SEO, conversion, customer intake, CRM, scheduling, follow-ups, AI agents, automations, dashboards, custom software and integrations. Main service/product funnel.
- **Other products**: remain independently branded and operated as appropriate. Miono can link to them as proof of capabilities.
- **Shared capabilities**: reusable packages and documented patterns, not a mandatory single monorepo.

## Immediate dispositions
| Existing repository | Target | Action | Status |
| --- | --- | --- | --- |
| dutchiono/ionoi-sites | Jobs Done website builder / templates concept | Audit all content, preserve distinctive docs/IP, port useful patterns, redirect or archive source only after verified migration | Planned, not executed |
| dutchiono/bot-foundry | Jobs Done automation/AI services; Miono engineering portfolio | Verify upstream and own modifications, reuse orchestration and bot-generation patterns through a service boundary; keep repository initially | Candidate integration |
| dutchiono/bushleague-hosting | Miono infrastructure platform, possible Jobs Done preview/deployment backend | Reuse isolated design lanes with tenancy, secrets, rollback review; keep independent | Candidate integration |
| dutchiono/jobsdone-web | Jobs Done public website | Redesign with outcomes-led navigation, portfolio, lead capture, service pages | Existing |
| dutchiono/jobsdone-growth | Jobs Done marketing/product strategy docs | Keep as planning source, link to technical architectural records | Existing |
| dutchiono/m-jacob-hvac-marketing-strategy | Jobs Done case-study research | Present as strategic work, **not** as proof of delivered site/client revenue without independent verification | Research |
| dutchiono/architects-and-agents | Reusable architecture documentation | Evaluate overlaps with platform capability catalog; do not flatten by name alone | Assess |

## Hard boundaries
1. Never expose private repositories, secrets, contact data, infrastructure configuration or client details publicly without explicit approval.
2. Do not portray forks or upstream projects as entirely original inventions. Verify provenance and the contributor's actual changes.
3. Do not publish asserted conversion results, active-client claims, or deployment status based solely on planning docs.
4. Do not delete or archive a repository before verifying its contents, commit history, consumers, deployments, domains and backup.
5. Do not merge codebases merely because they overlap in product language. Prefer stable APIs, packages or documented integrations.

## Proposed information architecture
### miono.live
Home: a direct statement of engineering range plus selected projects.
Work: filterable case studies (business systems, AI agents, interactive products, infrastructure, finance/Web3).
Capabilities: websites, full-stack platforms, APIs, automations, data visualization, deployment, AI and agents.
Labs: experimental work and published research, explicitly labeled.
About: individual developer and approach, with verification of selected contributions.
Contact: inquiry form and specific path for business websites to Jobs Done.

### jobsdone.team
Home: small businesses get found, win customers and spend less time on admin.
Services: website / SEO; lead intake, CRM and scheduling; workflow automation and AI; custom integrations.
Work: verified case studies, starting with Jobs Done itself and the M. Jacob HVAC marketing strategy as **research**.
How it works: discovery, build, launch, iterate.
Contact / consultation: functional intake, spam mitigation, clear privacy handling.
Optional product modules: site builder, content publishing, client portal and automation, based on actual shipped features.

## Architecture
Miono portfolio consumes a curated, manually reviewed **project registry**.
Jobs Done exposes a customer-facing catalog of **capabilities** and permitted **case studies**.
Both may use shared visual components and deployment infrastructure, but must have independent branding, domains, analytics and sales flows.
Bot Foundry should initially be a separate, constrained worker/service; tasks need authentication, approval gates, audit logs, quotas and isolation.
Bushleague lanes should remain non-production sandboxes and not silently inherit customer credentials.

## Deploy / ownership findings
- jobsdone-web uses Vite and a GitHub Actions deployment triggered by pushes to `master`.
- Its deploy workflow uses a server path `/var/www/jobsdone` and points `git remote set-url origin` to `https://github.com/jobsdoneteam/jobsdone-web.git`. Determine the canonical deployment repo and actual production checkout before modifying the workflow.
- bushleague-hosting documents lane domain pattern `{slug}.{product}.bushleague.xyz` and a provisioning checklist, including separate deploy secrets and explicit production isolation.
- The checked `drink-miono-live` README actually describes a distinct website (feesys.lol); do not assume it is the source of miono.live.

## Delivery phases
1. **Inventory**: canonical repo URL, owner, fork/provenance, licensing, status, stack, deployment, consumers, domains, sensitive-data risk, and confidence.
2. **Review**: inspect actual source files, manifests and CI, not only READMEs. Identify original work and live integrations. Resolve miono.live source repo.
3. **Design**: define a shared project schema and verified case study content for both websites.
4. **Migrate**: cherry-pick or reimplement specific `ionoi-sites` features in Jobs Done, testing each with an acceptance criterion.
5. **Integrate**: connect optional Bot Foundry workers and Bushleague preview deployment through explicit contracts.
6. **Launch**: preview, smoke test, accessibility, SEO, analytics, security, content review, domain and rollback verification.
7. **Clean up**: mark superseded repos read-only/archive only after migration and link preservation; consider deletion separately, never automatically.

## Exit criteria for ionoi-sites retirement
- [ ] Repository contents and revision history inventoried.
- [ ] Any relevant code, documentation and design patterns preserved with licensing and provenance.
- [ ] Useful features moved into Jobs Done and tested, or explicitly rejected with rationale.
- [ ] No active consumers, workflows, domains, or external links depend on the old repo.
- [ ] Replacement documentation and redirect/README established.
- [ ] Backup tag or archive exists and rollback is possible.
- [ ] Owner authorizes final archive or deletion separately.

## Next documentation artifacts
- A canonical machine-readable inventory with evidence links and confidence.
- A project-registry schema and curated v1 sample entries.
- Feature migration map for ionoi-sites.
- Interface contract for Bot Foundry and Bushleague.
- Actual deployment graph of miono.live and jobsdone.team.
