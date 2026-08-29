# Governance & Authority Matrix — MVP Prototype

RAJ-KRISHI DRONE GRID is a **service-orchestration MVP**, not a replacement for statutory or identity authorities. Production integration is contingent on Department approval, credentials, security review and applicable law/policy.

| Decision / data | Authoritative owner | Grid may do | Grid must not do | MVP posture |
|---|---|---|---|---|
| Rajasthan SSO identity | Government of Rajasthan SSO | receive authorised session / role claims in production | simulate a production login or store real passwords | `DEMO_ONLY` |
| Jan Aadhaar / Aadhaar-backed member authentication | Rajasthan Jan Aadhaar Authority / authorised Aadhaar ecosystem | receive minimum approved identity result/reference | collect real Aadhaar in evaluator demo, perform unauthorised authentication | `DEMO_ONLY` |
| FarmerID / farmland plot / crop | State AgriStack registries | reference consented authorised records | create a parallel farmer truth master | `CONTRACT_DEFINED` |
| Drone UIN / RPC / RPTO status | DGCA eGCA / applicable DGCA systems | retain validated references/evidence | issue or alter a credential | `AUTH_REQUIRED` |
| Airspace / flight compliance | DGCA / applicable aviation authority and operator | record authoritative check/evidence | autonomously grant regulatory permission | `AUTH_REQUIRED` |
| Agricultural application rule | competent agriculture / pesticide / programme authority | execute versioned deterministic rules | invent dosage/permission or waive a blocked rule via AI | `RULE_PACK` |
| IMD weather | India Meteorological Department | consume public gateway / timestamp evidence | claim a forecast as flight permission | `LIVE_PUBLIC` |
| Scheme/service support policy | Government Department / finance authority | evaluate an approved policy configuration | invent statutory entitlement | `SIMULATED_POLICY` |
| DBT / treasury release | Government finance rail | prepare evidence/reconciliation payload | directly release public money without authorised integration | `SIMULATED` |
| Mission orchestration | Department-configured RAJ-KRISHI Grid | cluster, schedule, dispatch-state, verify and measure | bypass mandatory gates | `MVP_FUNCTIONAL` |
| Provider commercial offer | empanelled provider + Government procurement policy | compare compliant offers / SLA | fabricate a provider contract | `DEMO_SCENARIO` |
| AI / FarmGraph advisory | optional intelligence layer | prioritise, explain, forecast, detect anomalies | make statutory/chemical-treatment/public-money decisions | `OPTIONAL_AI` |
| SUTRA ID Edge | optional field channel | offline intake/evidence/acknowledgement | become the source identity or regulatory authority | `OPTIONAL_EDGE` |

## Data minimisation

Production design preference:
1. store external identifiers/references rather than duplicate source records;
2. retain only mission-required farmer/service data;
3. role + purpose-limit access;
4. version every policy/rule decision;
5. hash/sign evidence bundles where feasible;
6. maintain retention/deletion schedules per Department policy;
7. keep analytics aggregated whenever person-level data is unnecessary.

## AI control boundary

**AI can recommend; rules and authorised humans decide.**

Allowed: demand forecasting, route suggestions, anomaly detection, evidence summarisation, explanation, image-risk prioritisation.

Not allowed without explicit authorised workflow: credential issuance, airspace permission, statutory eligibility, pesticide/application authorisation, DBT release, autonomous adverse farmer decisions.
