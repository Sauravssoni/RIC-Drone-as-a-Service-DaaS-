# RAJ-KRISHI DRONE GRID

> **Drone-as-a-Service (DaaS) Platform for Universal Agri-Extension Reach — Rajasthan Innovation Challenge 2026**

**RAJ-KRISHI DRONE GRID is a proposed statewide service-orchestration layer for agricultural drones.** It is not another “book a drone” marketplace and it does not replace RajKisan, AgriStack, DGCA systems, Drone Didi, CHCs, KVKs or private providers.

It connects those rails into one operational loop:

**need → consented plot context → demand density → coverage obligation → compliant capacity → mission → proof of service → support/settlement evidence → extension intelligence**

### Core thesis

India has already invested in drones, pilots, CHCs, Drone Didis, training institutions and digital public infrastructure. The next bottleneck is **universal utilisation**: making the right compliant drone service reachable by the right farmer, in the right agronomic/weather window, at an affordable pooled cost, with evidence that the service actually occurred.

---

## Why this is different

| Existing layer | What it already does | What RAJ-KRISHI adds |
|---|---|---|
| RajKisan / assisted channels | Farmer-facing agriculture services | Drone-service orchestration and mission lifecycle |
| FARMS / CHC | Machinery/custom-hiring discovery | Drone-specific demand density, compliance and evidence |
| NaMo Drone Didi | Scheme assets, pilots and programme MIS | Vendor-neutral universal demand and utilisation across provider classes |
| AgriStack | FarmerID, plot and crop registries | Service-execution references; no parallel farmer master |
| eGCA / Digital Sky | Regulatory services / airspace workflows | Mission evidence and compliance state machine; no fake approvals |
| IMD | Public weather/nowcast | Live mission-weather context |
| KVK / RPTO | Extension + regulated training | Demand-led RPC capacity planning |
| DBT / treasury | Public-money authority | Proof-of-service eligibility/evidence package |

**The product moat is orchestration, evidence and universal access — not drone hardware.**

---

# Exact challenge fit

The official challenge asks for:

1. **Demand aggregation and booking** → `Demand Density Engine`
2. **Digital Sky/UIN regulatory compliance** → `eGCA / Digital Sky Compliance Adapter + Mission Passport`
3. **Subsidised service fee through DBT** → `Policy-configured Service Support + Proof-of-Service Settlement Evidence`
4. **RPC training/certification with KVKs/RPTOs** → `Seasonal Capacity Digital Twin + KVK→RPTO→RPC Pipeline`
5. **AgriStack/department API integration for logs/application data** → `Consent-aware UFSI contracts + Mission Evidence Fabric`

The prototype makes each requirement visible and testable instead of leaving it as a roadmap bullet.

---

# Flagship capabilities

## 1. Demand Density Engine — optimise the acre-service, not the booking

Farmer requests are clustered only when **hard compatibility constraints** pass first:

- plot proximity;
- crop + crop stage;
- service/input compatibility;
- requested time window;
- weather window;
- drone capability;
- regulatory/agronomic rules;
- service economics.

Only then does the optimiser minimise dead kilometres and mobilisation cost.

The evaluator scenario demonstrates **67 fragmented requests → 9 executable missions**. Those counts/costs are synthetic demo data and are explicitly labelled as such.

## 2. Universal Service Coverage — the new public-service layer

A marketplace can tell Government that a remote block has low provider density. The Grid creates a mechanism to **close** the gap.

`Detect low-reach block → bundle compatible demand → call eligible capacity → apply Department-configured viability-gap support → pay only on verified acre-service`

The `Coverage Contract Engine` can compare eligible Drone Didi, FPO, CHC and private provider capacity without hard-coding subsidy policy. All demo support rates are illustrative.

## 3. Universal Reach Index

A reason-coded block score asks whether compliant service is actually reachable, not merely whether drones exist.

Dimensions can include:
- service availability;
- response-time feasibility;
- delivered affordability;
- RPC capacity;
- logistics/battery readiness;
- evidence reliability;
- small/marginal and remote/tribal coverage.

Every factor exposes its source, weight, freshness and remediation reason. No opaque AI ranking.

## 4. Mission Compliance Passport

Every mission carries an auditable chain:

`consent + plot context → UIN reference → RPC reference → weather → airspace evidence → agronomic rule pack → provider declaration → execution → receipt`

The prototype does **not** claim to issue DGCA approvals.

## 5. Agronomic Application Passport

Deterministic source-backed rules bind crop/service context, application profile, input batch, nozzle/profile, weather limits and operator declaration to the mission.

**AI may explain a rule; it cannot waive it.**

## 6. Proof-of-Service + DBT evidence

Settlement readiness requires an atomic service receipt:

- consented FarmerID / plot references;
- authorised mission;
- UIN/RPC references;
- geo-track + actual treated/scouted area;
- input/application traceability where applicable;
- weather snapshot;
- exceptions;
- farmer acknowledgement;
- receipt digest / audit trail.

Government finance systems remain the settlement authority.

## 7. Seasonal Capacity Digital Twin

Forecast service-acre demand by crop window and compare it against productive capacity:

`RPC pilots + drones + payloads + battery sets + transport + maintenance + service hours`

This lets the Department train and stage capacity **before** farmers experience the shortage.

## 8. Extension Mission Exchange

The same operating grid supports Department/KVK campaigns for:
- crop-health scouting;
- pest surveillance;
- mapping;
- damage assessment;
- targeted application under authorised rules;
- post-intervention verification.

Drones become an **agri-extension network**, not only spray equipment.

## 9. SUTRA ID Edge — optional last-mile resilience

SUTRA ID Edge is an optional weak-connectivity field adapter for KVK/camp/extension workflows:

`Hindi/voice-assisted intake → FarmerID/plot ref → consent → mission manifest → acknowledgement → encrypted store-and-forward`

The central Grid remains usable without proprietary hardware.

## 10. FarmGraph — optional intelligence loop

FarmGraph can provide an optional crop-risk/need signal and post-mission analysis:

**Sense → Decide → Act → Verify → Learn**

It is clearly labelled optional and is not represented as Government of Rajasthan infrastructure.

---

# Current Rajasthan / Government evidence baseline

These are current public facts used to ground the proposal — **not** demo operating KPIs.

- **87,23,010 Rajasthan Farmer IDs** generated as of **20 July 2026** (PIB / AgriStack progress).
- **47 KVKs in Rajasthan** (ICAR ATARI Zone-II directory).
- **40 Rajasthan SHGs** in the reported NaMo Drone Didi drone-distribution / pilot-training table as of Jan 2026; this is a scheme baseline, not Rajasthan's total fleet.
- **274 DGCA-approved RPTOs nationally** reported July 2026.
- DGCA moved UIN and fresh RPC regulatory services from Digital Sky to **eGCA from July 2025**.
- IMD publishes official public district-nowcast/warning APIs.
- Government ADRTC evaluation has highlighted real operating constraints such as battery endurance and transport; among Drone Didis without utility vehicles in the cited study, **42.68% reported transportation difficulty**.

See [`docs/RESEARCH_EVIDENCE_REGISTER.md`](docs/RESEARCH_EVIDENCE_REGISTER.md).

---

# Integration truth matrix

| System | Prototype status | Authority principle |
|---|---|---|
| IMD public APIs | `LIVE_PUBLIC` | Public weather gateway |
| RajKisan / assisted channels | `ADAPTER_READY` | Department authority |
| AgriStack / UFSI | `CONTRACT_DEFINED` | State registry + consent |
| DGCA eGCA / Digital Sky | `AUTH_REQUIRED` | DGCA remains regulatory authority |
| DBT / treasury | `SIMULATED` | Government finance remains settlement authority |
| NaMo Drone Didi MIS | `FEDERATION_READY` | Subject to programme approval |
| FARMS / CHC | `FEDERATION_READY` | Existing capacity layer |
| SUTRA ID Edge | `OPTIONAL_EDGE` | Offline field channel |
| FarmGraph | `OPTIONAL_AI` | Advisory intelligence only |

**Nothing fake. Everything architected. Every authority boundary visible.**

---

# Judge journey

The UI includes a guided six-step evaluator journey:

1. aggregate fragmented demand;
2. close an underserved-block access gap;
3. gate a mission for compliance/agronomy/weather;
4. verify every acre-service and prepare settlement evidence;
5. forecast missing fleet/RPC/logistics capacity;
6. inspect the Government integration fabric.

Full script: [`docs/JUDGE_DEMO_RUNBOOK.md`](docs/JUDGE_DEMO_RUNBOOK.md)

---

# 90-day controlled pilot

### Days 0–30 — authority, contracts and orchestration
Policy packs, approved adapters, provider/RPC onboarding, IMD, clustering, Reach Index and synthetic/sandbox end-to-end mission.

### Days 31–60 — controlled field execution
Authorised providers, assisted farmer journeys, real field missions where approved, proof-of-service, settlement evidence and optional SUTRA weak-connectivity test.

### Days 61–90 — measurement and scale
Before/after economics, low-reach-block closure, provider utilisation, RPC/battery/logistics capacity forecast, security review and state rollout plan.

**No core pilot budget is reserved for buying a new fleet.** The pilot first tests whether suitable existing authorised public/private capacity can be activated more effectively.

Acceptance plan: [`docs/PILOT_ACCEPTANCE_PLAN.md`](docs/PILOT_ACCEPTANCE_PLAN.md)

---

# Indicative financial proposal

**₹74.80 lakh for a 90-day controlled pilot**, subject to Department scope/final procurement terms.

The ask is concentrated on:
- product/GIS/orchestration;
- demand + coverage optimisation;
- approved system adapters;
- compliance/agronomic rule packs;
- provider/field workflows;
- proof-of-service + audit;
- security/privacy;
- pilot operations, UAT, training and handover;
- measured scale plan.

The public-value unit is **₹ per verified acre-service**, not number of app downloads or number of drones purchased.

---

# Evaluation artefacts

- [`docs/EVALUATOR_SCORECARD.md`](docs/EVALUATOR_SCORECARD.md)
- [`docs/RESEARCH_EVIDENCE_REGISTER.md`](docs/RESEARCH_EVIDENCE_REGISTER.md)
- [`docs/JUDGE_DEMO_RUNBOOK.md`](docs/JUDGE_DEMO_RUNBOOK.md)
- [`docs/PILOT_ACCEPTANCE_PLAN.md`](docs/PILOT_ACCEPTANCE_PLAN.md)

---

# Architecture

```text
RajKisan / assisted channel / optional SUTRA
                    │
                    ▼
          consent + service request
                    │
        AgriStack FarmerID / plot / crop
                    │
                    ▼
          Demand Density Engine
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼
Universal Reach   IMD weather   Agronomic rules
& Coverage         context       + service policy
Contract              │             │
      └─────────────┬─┴─────────────┘
                    ▼
         Mission Compliance Passport
        eGCA / Digital Sky evidence
                    │
                    ▼
    Drone Didi / FPO / CHC / private DSP
                    │
                    ▼
            Mission execution
       geo-track + telemetry + evidence
                    │
                    ▼
          Proof-of-Service receipt
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
 settlement evidence        extension / outcome
 (DBT/treasury authority)    intelligence / AgriStack
```

---

# Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Build-validation status

The repository includes a GitHub Actions TypeScript + production-build gate. At the time of this submission revamp, the hosted Actions job is failing **before a runner starts** (`runner_id: 0`, no executed steps), so it must not be represented as a passing code build. The code remains on a feature branch / PR until a full build and browser journey are confirmed.

---

## Credibility rules

1. Demo operating numbers are labelled synthetic.
2. Live integrations are labelled live only when actually reachable/authorised.
3. AI cannot override regulatory, agronomic or public-money authority.
4. Demo subsidy/support values are illustrative; Department policy is authoritative.
5. Farmer/plot registries are referenced, not needlessly copied.
6. Yield/outcome improvements are measured, not promised.
7. Every public-value metric must trace to evidence.
