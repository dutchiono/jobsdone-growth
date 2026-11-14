# Consolidation / Integration Map
Date: 2026-11-14

## A. ionoi-sites → Jobs Done
Evidence: ionoi-sites README describes templates for coffee shops, restaurants, bike shops, services and retail, mobile/PWA support, a drag-and-drop builder, payments and deployment; it also marks the stack TBD and phases as unchecked. A root package.json was not found.

Feature decisions:
| Feature or idea | Target | Migration method | Evidence requirement |
| --- | --- | --- | --- |
| Industry templates | Jobs Done website offerings | Curate reusable designs after inspecting actual files | Responsive sample + accessibility check |
| Mobile-first / PWA | Jobs Done frontend baseline | Adopt as quality bar, not an assumed implementation | Lighthouse and device checks |
| Visual site builder | Optional Jobs Done product | Implement only when commercially justified | End-to-end edit/preview/publish test |
| Payments | Jobs Done integration layer | Keep provider-neutral; explicitly scope crypto rails | Secure checkout + refund + compliance checks |
| Custom domains/SSL | Infrastructure integration | Reuse hosting patterns after validation | Domain and cert smoke test |
| SEO/analytics | Jobs Done delivery package | Define measurable checklist | Crawlable markup, analytics consent, lead attribution |

Do not copy unverified feature claims directly to public sales pages. Do not delete `ionoi-sites` during planning.

## B. Bot Foundry → automation service
Evidence: README describes a Telegram bot generator using OpenCode with preflight, research, scaffold, enrich, review, readiness and ship phases. package.json contains Telegraf, OpenCode SDK, TypeScript/Vitest scripts.
Suggested boundary:
- Jobs Done intake creates an **approved automation request** with tenant/customer, scope, budget, credentials policy.
- A separate bot-builder worker receives a limited job specification; no production SSH or customer secrets by default.
- Each generated artifact is subject to static analysis, tests, permission review and manual approval before customer deployment.
- A release record tracks source revision, generated diff, test results, hosting and rollback.
- Reuse patterns selectively; verify whether repository is a fork and its license before attribution or commercialization.
Not in v1: unguarded self-rewriting bots with permanent production access.

## C. Bushleague Hosting → preview environments
Evidence: `docs/all-products.md`, `docs/lane-provisioning.md` and `docs/show-someone.md` specify individual subdomain lanes, per-lane deploy credentials and nginx mapping.
Suggested boundary:
- Jobs Done request → isolated preview lane → client review → separate approved production deploy.
- Do not reuse production data, wallets, customer APIs or broad SSH privileges in preview.
- Lane registry maps tenant/project to site revision, domain, owner, provision state, expiry and cost.
- Keep the Bushleague repository as platform/infrastructure; public Jobs Done customers need not see that internal branding.
- Verify wildcard TLS, tenant isolation, cleanup and rollback before adopting in a paid product.

## D. Canonical website repos and deployments
Jobs Done website currently lives in dutchiono/jobsdone-web; its workflow sets production server checkout origin to jobsdoneteam/jobsdone-web. Investigate whether that is intentionally canonical, a stale mirror, or broken. Avoid direct production pushes until confirmed.

Miono source is unresolved. The similarly named `drink-miono-live` README describes `feesys.lol`, not miono.live. Search deployment configurations, DNS records, site ownership and hosting before modifying the live site.

## E. Duplicate / sunset workflow
1. Confirm repository lineage, fork status and usage.
2. Select owner and canonical replacement.
3. Preserve LICENSE/NOTICE, git history and links.
4. Move code or document intentional nonmigration.
5. Run tests / verify production consumers and redirects.
6. Mark as superseded with a README; observe before archiving.
7. Archive only after review. Delete only by separate explicit decision.
