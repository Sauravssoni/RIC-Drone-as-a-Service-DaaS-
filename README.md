# RAJ-KRISHI DRONE GRID

**Drone-as-a-Service (DaaS) Platform for Universal Agri-Extension Reach — Rajasthan Innovation Challenge 2026**

RAJ-KRISHI DRONE GRID is a proposed **state orchestration and service-execution layer** for agricultural drones in Rajasthan. It is deliberately not another generic drone-booking marketplace. It federates the public infrastructure that already exists — RajKisan, AgriStack, DGCA eGCA/Digital Sky workflows, IMD, FARMS/CHC, NaMo Drone Didi assets, KVKs/RPTOs and DBT — into one auditable operating system for demand aggregation, compliant dispatch, extension missions and proof-of-service settlement.

> **Core thesis:** India has created substantial drone assets, pilots, schemes and digital rails. The next bottleneck is universal utilisation and orchestration: getting the right compliant drone to the right verified plot, at the right agronomic/weather window, at an affordable pooled cost, with evidence that the public service was actually delivered.

## Challenge alignment

The Rajasthan Innovation Challenge asks for:

- demand aggregation and booking;
- Digital Sky/UIN regulatory-compliance workflows;
- subsidised service-fee models routed through DBT;
- a standardised RPC training/certification pipeline with KVKs and DGCA-empanelled RPTOs; and
- API-level integration with AgriStack/departmental portals for flight-log and application-data capture.

This repository implements the product concept around those requirements rather than treating them as roadmap bullets.

## Flagship capabilities

### 1. Demand Density Engine
Clusters small and marginal farmer requests into executable missions only when plot proximity, crop, crop stage, operation, agronomic rule-pack, time window, drone payload and weather are compatible. The objective is to reduce dead kilometres and mobilisation cost per acre.

### 2. Universal Reach Index
A block/district score measuring whether farmers can actually access compliant drone service — not merely whether drones exist. Dimensions include response time, cost/acre, RPC density, provider capacity, service diversity, weather-window reliability, asset utilisation, smallholder coverage and remote/tribal reach.

### 3. Mission Compliance Passport
Each mission carries a source-backed evidence chain: plot/consent, drone UIN reference, RPC credential reference, service type, crop/application rule, weather gate, airspace-verification evidence, operator declaration, telemetry and final service receipt. The prototype does **not** claim to issue DGCA approvals.

### 4. Agronomic Rule Engine
Deterministic, source-backed crop/application rules for pesticide/nutrient drone operations. Compliance is not delegated to a generative model. Current agriculture SOPs and CIB&RC protocols are treated as policy inputs.

### 5. Proof-of-Service DBT
Government support is released against evidence of service rather than a bare invoice: farmer request, verified plot, drone/pilot references, geo-track, acres actually covered, application record, weather snapshot, farmer acknowledgement and settlement hash.

### 6. RPC Capacity Planner
Forecasts next-season service-acre demand and identifies district/block pilot shortfalls. Candidates flow through KVK orientation, DGCA-authorised RPTO/RPC processes, agriculture-specific application training and supervised activation.

### 7. Extension Mission Exchange
Agriculture officers can launch scouting, crop-health, mapping, pest-surveillance or treatment campaigns. Drone capacity therefore becomes part of the **agri-extension network**, not only a spraying marketplace.

### 8. Fleet Passport + Predictive Availability
Tracks UIN references, payload class, provider, batteries, service history, insurance/AMC declarations, RPC availability, downtime and future service capacity.

### 9. Offline SUTRA ID Edge adapter
Optional edge node for remote camps/KVK/e-Mitra/field workflows: Hindi/voice-assisted service intake, consent/acknowledgement, plot/mission lookup and encrypted store-and-forward when connectivity is weak. The DaaS core remains usable without this hardware.

### 10. FarmGraph intelligence adapter
Optional intelligence layer for crop-risk/need detection and post-mission verification. The integration is explicitly labelled optional and is not represented as existing Government of Rajasthan infrastructure.

## Existing infrastructure we enhance — not replace

| System | Role | Prototype posture |
|---|---|---|
| RajKisan / Jan Aadhaar / e-Mitra | Farmer access, scheme workflow, assisted channel, state digital rails | `ADAPTER_READY` |
| AgriStack / State Farmer Registry | Farmer, geo-referenced plot and crop context | `CONTRACT_DEFINED` / authorization dependent |
| DGCA eGCA / Digital Sky | UIN, RPC/RPTO regulatory services and airspace workflow | `AUTH_REQUIRED` |
| IMD public APIs | District nowcast, warnings and weather-window context | `LIVE_PUBLIC` |
| FARMS / CHC | Existing farm-machinery/custom-hiring provider capacity | `FEDERATION_READY` |
| NaMo Drone Didi MIS | Drone/pilot/service tracking for scheme assets | `FEDERATION_READY` |
| Central/state DBT rails | Benefit/service-fee settlement | `SIMULATED` / contract defined |
| SUTRA ID Edge | Offline/voice field channel | `OPTIONAL_EDGE` |
| FarmGraph | Crop-risk decision intelligence | `OPTIONAL_AI` |

## Why the orchestration layer is needed

Evidence from ICAR-NIAP's 2025 Drone Didi policy brief shows the utilisation problem clearly. In its Uttar Pradesh survey, a Drone Didi covered **158.2 acres on average in the studied Kharif season and 31.5 acres/month**; low utilisation was linked to low demand, technical/EV issues and operational constraints. The brief also identified battery limitations, rural connectivity, adverse weather, fragmented holdings, smallholder affordability, weak complaint systems and lack of crop-specific application knowledge as recurring constraints.

Meanwhile, the NaMo Drone Didi programme expects supported units to operate at a much higher annual acreage scale, and the Centre has built a Drone Portal for operation tracking, pilot training/certification management and dashboards. RAJ-KRISHI DRONE GRID therefore focuses on **universal multi-provider demand density, state extension orchestration and evidence-backed service delivery**, not duplicating that MIS.

## Rajasthan-specific public rails

- Rajasthan's RajKisan Sathi portal was designed as a single-window agriculture portal and already describes integration with e-Mitra, Jan Aadhaar, PM-KISAN, e-Dharti and DBT/e-sign/geo-verification workflows.
- ICAR lists **47 KVKs in Rajasthan** under ATARI Zone-II, Jodhpur, creating a natural extension/training mesh.
- SKRAU Bikaner publicly lists a DGCA-authorised RPTO in 2026, illustrating an in-state RPC training anchor.
- PIB reported **40 Rajasthan SHGs** in the state-wise NaMo Drone Didi/LFC drone distribution and pilot-training table as of January 2026. This is a scheme baseline, not the total Rajasthan drone fleet.

## Judge demo

1. A smallholder service request is created for a Banswara maize plot.
2. The plot/crop context is shown as AgriStack-compatible synthetic demo data.
3. The Demand Density Engine identifies nearby compatible demand.
4. `67 requests → 9 executable missions` animation runs.
5. Per-acre mobilisation cost falls in the illustrative demo scenario.
6. IMD weather gate is evaluated.
7. Crop/application SOP rule-pack is evaluated deterministically.
8. Drone UIN + RPC references are shown in the compliance passport.
9. A Drone Didi/provider is dispatched.
10. Simulated telemetry completes the mission.
11. Proof-of-service receipt is created and hashed.
12. An illustrative DBT/service-fee support calculation is reconciled.
13. The underserved block's Universal Reach Index improves.

## Design principles

- Professional Government of Rajasthan blue/white visual language.
- GIS first: state map is the primary operations surface.
- Dense operational terminology, not startup-marketing cards.
- Hindi/English interaction entry point.
- Animated splash, loading and mission-state transitions.
- Demo data is clearly marked; no fake government API connections.
- Deterministic authority/compliance rules; AI only for advisory intelligence where appropriate.
- Privacy by design: minimum data, role-based access, consent, purpose limitation, encryption and auditable service receipts.

## Architecture

```text
RajKisan / e-Mitra / SUTRA-assisted intake
                │
                ▼
      Demand + consent gateway
                │
      AgriStack plot/crop context
                │
                ▼
       Demand Density Engine
                │
   ┌────────────┼─────────────┐
   ▼            ▼             ▼
Mission       Weather      Agronomic
planner       (IMD)        rule packs
   │            │             │
   └────────────┼─────────────┘
                ▼
      Compliance Passport
      UIN/RPC/eGCA evidence
                │
                ▼
   Provider / Drone Didi / CHC
                │
                ▼
       Mission execution
 telemetry + geo-track + imagery
                │
                ▼
      Proof-of-service receipt
                │
        ┌───────┴────────┐
        ▼                ▼
 DBT settlement     Agri-extension /
 reconciliation     AgriStack record
```

## 90-day pilot

**Days 0–30 — Integration & orchestration:** RajKisan intake adapter, synthetic/state-approved farmer/plot contract, fleet/RPC registry, IMD, demand clustering, compliance engine, KVK/RPTO directory.

**Days 31–60 — Field execution:** onboard real authorised providers, provider PWA, offline acknowledgement, service evidence, three representative operational geographies, DBT sandbox/reconciliation.

**Days 61–90 — Measurement & scale:** utilisation optimisation, Reach Index before/after, RPC capacity forecast, district command centre, financial model and state-scale rollout plan.

Suggested evaluation geographies deliberately test different conditions: a tribal/fragmented-holding belt (Banswara/Dungarpur), a high-density crop/service belt (Kota/Bundi), and a training/arid operations hub (Bikaner/Jaisalmer), subject to department selection.

## Key success metrics

- request-to-executable-cluster rate;
- median booking-to-service time;
- median service ₹/acre and mobilisation ₹/acre;
- productive drone hours / acres per drone per month;
- small & marginal farmer share;
- tribal/remote block reach;
- RPC availability and forecast shortfall;
- mission pre-dispatch compliance pass rate;
- proof-of-service completeness;
- DBT reconciliation time and exception rate;
- Drone Didi/FPO/CHC asset utilisation;
- scouting/mapping/application acreage and extension response time.

## Evidence base / primary references

1. Rajasthan Innovation Challenge — Agriculture challenge list, Government of Rajasthan, 2026.
2. RajKisan Sathi — Department of Agriculture, Rajasthan: single-window architecture, e-Mitra/Jan Aadhaar/e-sign/DBT/geo-verification and planned/future integrations.
3. DGCA Public Notice dated 03 July 2025 — migration of drone regulatory services D-1 to D-5 from Digital Sky to eGCA, including UIN and fresh RPC services.
4. IMD public API reference — district nowcast and warning services.
5. PIB, 08 July 2025 — Central DBT Platform v2.0 and newly developed NaMo Drone Didi portal with drone-operation mapping/tracking, pilot training/certification and dashboard.
6. PIB, 13 February 2026 — state-wise Drone Didi/LFC distribution and pilot training; Rajasthan: 40.
7. ICAR-NIAP Policy Brief 65 (2025) — economics, utilisation and operational barriers in Drone Didi service delivery.
8. ICAR KVK network — Rajasthan: 47 KVKs under ATARI Zone-II Jodhpur.
9. PIB / DA&FW — agricultural-drone SOPs, crop-specific pesticide SOPs, CIB&RC protocols and SMAM support.
10. PIB, Digital Agriculture Mission / AgriStack — Farmer Registry, geo-referenced village maps and Crop Sown Registry as state-maintained foundational registries.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

---

**Prototype status:** submission-oriented functional demonstrator. Government integrations labelled `LIVE_PUBLIC`, `ADAPTER_READY`, `CONTRACT_DEFINED`, `AUTH_REQUIRED`, `SIMULATED`, or `OPTIONAL_*` according to what can truthfully be demonstrated without privileged government credentials.
