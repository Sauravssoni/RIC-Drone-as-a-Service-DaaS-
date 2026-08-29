# 90-Day Pilot Acceptance Plan

## Pilot thesis

The pilot does **not** prove that drones can fly or spray. That is already established. It tests whether Rajasthan can operate a multi-provider, evidence-backed **universal agricultural drone service network** using existing regulated and subsidised capacity.

## Recommended operating archetypes

Final locations are Department-selected. The prototype uses three deliberately different archetypes:

1. **Tribal / fragmented holdings** — Banswara–Dungarpur type geography: test assisted intake, pooling economics, weak-connectivity resilience and universal-service coverage.
2. **High demand / crop concentration** — Kota–Bundi type geography: test clustering density, throughput, provider utilisation and service-window scheduling.
3. **Arid / logistics / training hub** — Bikaner–Jaisalmer type geography: test long mobilisation, weather constraints, battery staging, transport and RPC/RPTO capacity planning.

## Phase A — Days 0–30: Authority & orchestration

Deliverables:
- Department-approved domain model and pilot policy pack.
- RajKisan/assisted-intake adapter contract.
- AgriStack/UFSI consent + FarmerID/plot/crop reference contract.
- eGCA/Digital Sky evidence workflow contract.
- live IMD public weather gateway.
- provider / drone / RPC onboarding registry.
- Demand Density Engine v1.
- Universal Reach Index v1 with reason codes.
- application SOP / compliance rule-pack versioning.
- pilot source baseline and measurement protocol.

Exit gate:
- no production-authority system is represented as integrated without written/API access;
- all demo/sandbox/live statuses visible in the console;
- complete mission can be executed end-to-end with synthetic/sandbox records.

## Phase B — Days 31–60: Controlled field execution

Deliverables:
- authorised providers onboarded;
- farmer-assisted request journeys;
- mission clustering;
- compliance evidence collection;
- provider dispatch PWA;
- actual mission telemetry/evidence ingestion from participating equipment where available;
- farmer acknowledgement and grievance/exception capture;
- proof-of-service receipt;
- DBT/treasury settlement evidence export or approved sandbox contract;
- optional SUTRA offline field trial in a weak-connectivity workflow.

Exit gate:
- every completed pilot mission has a traceable evidence receipt;
- no settlement-ready record is created if required evidence is incomplete;
- all exceptions remain auditable and reviewable.

## Phase C — Days 61–90: Measurement & state-scale plan

Deliverables:
- before/after demand-density metrics;
- underserved-block coverage-gap closure report;
- provider/Drone Didi/FPO/CHC utilisation analysis;
- RPC, battery and transport capacity forecast;
- extension-campaign workflow;
- security/privacy review;
- operational runbook + incident response;
- state rollout and cost model;
- Department handover package.

## Proposed acceptance thresholds

These are **proposed pilot thresholds** to be jointly baselined at inception; they are not claimed current performance.

| Control | Proposed acceptance threshold |
|---|---|
| Integration truthfulness | 100% external integrations expose maturity + authority state |
| Pre-dispatch evidence | 100% dispatched pilot missions have mandatory gates resolved or approved exception recorded |
| Proof-of-service completeness | ≥95% completed missions produce a complete receipt without manual reconstruction |
| Settlement control | 100% unsupported/failed-evidence cases are held from `SETTLEMENT_READY` |
| Demand aggregation | Demonstrate measurable reduction in mobilisation ₹/acre versus unclustered pilot comparator |
| Access equity | At least one low-reach pilot block improves its Reach Index for traceable reasons |
| Capacity planning | Forecast identifies pilot-period RPC/fleet/battery/logistics shortage with action plan |
| Farmer recourse | 100% field journeys include acknowledgement + exception/grievance path |
| Auditability | 100% mission-state transitions retained with actor, time, source and version |
| Data minimisation | Registry references retained in preference to unnecessary duplication of authoritative datasets |

## Measurement rule

No “X% improvement” is accepted merely because the optimiser predicts it. The submission distinguishes:

- **model estimate** — predicted before execution;
- **pilot baseline** — measured comparator;
- **actual outcome** — observed field result;
- **public policy outcome** — accepted only after Department review.

This prevents synthetic-demo gains from becoming unsupported production claims.
