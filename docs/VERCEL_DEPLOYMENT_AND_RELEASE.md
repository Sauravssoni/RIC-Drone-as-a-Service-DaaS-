# Vercel Deployment & Release Runbook — MVP Prototype

## Target
Deploy the **MVP prototype** as a public evaluator URL while preserving the explicit disclaimer that it is not a Government production portal.

## Repository configuration already prepared
- Next.js App Router.
- Next.js `15.5.24` Maintenance LTS security release.
- Node `22.x` engine.
- `vercel.json` with Next.js build command, Mumbai (`bom1`) region preference and baseline headers.
- `/api/imd` server route with graceful fallback.
- TypeScript + production-build CI workflow.

## Vercel project settings
1. Import `Sauravssoni/RIC-Drone-as-a-Service-DaaS-`.
2. Framework: **Next.js**.
3. Production branch: `main` **only after PR #1 passes release gates and is merged**.
4. Build command: `npm run build`.
5. Install command: `npm install --no-audit --no-fund`.
6. Node: respect `22.x` from `package.json`.
7. Do not add fake Government API secrets.

## Environment variables
The current evaluator MVP intentionally requires **no privileged Government credentials**.

If future authorised adapters are added, use Vercel encrypted environment variables and separate Preview vs Production credentials. Never commit credentials.

## Required pre-deploy gate
Run locally / in an executing CI runner:

```bash
npm install --no-audit --no-fund
npm run check
npm run build
```

Then browser-test:
1. `/` splash → login.
2. Evaluator access.
3. dummy Government SSO access.
4. dummy Jan Aadhaar assisted access.
5. State Command map markers.
6. Run Judge Journey end-to-end.
7. Universal Reach / Coverage Contract.
8. Mission Passport.
9. Proof-of-Service / DBT evidence.
10. Fleet/RPC Capacity.
11. Extension Campaigns module.
12. Programme & Finance module.
13. Integration Fabric.
14. `/api/imd` returns JSON and the UI shows live/fallback truthfully.
15. mobile viewport 390×844; laptop 1440×900; 1920×1080.
16. browser console: zero uncaught errors.

## Post-deploy gate
- open public URL in incognito;
- verify OpenStreetMap tiles load;
- verify no mixed-content / CSP error;
- confirm all demo labels remain visible;
- confirm no real Aadhaar/Jan Aadhaar/SSO credential prompt can be mistaken for production;
- confirm public URL in README / submission form matches production deployment;
- save final screenshots and demo video from the deployed build.

## Security note
`Permissions-Policy` currently disables camera, microphone and geolocation for this web evaluator deployment because those capabilities are not required by the central dashboard. A future authorised field PWA/SUTRA companion should have its own reviewed permissions instead of weakening the command-centre policy globally.

## Release discipline
Do not merge/deploy because the UI “looks ready”. Release only when:
- build gate passes on the current SHA;
- browser runbook passes;
- documents/README use the same name, budget and MVP terminology;
- PR review has no unresolved current-code P0/P1 issue;
- deployment URL is verified.
