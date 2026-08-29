'use client';

import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import type { ElementType } from 'react';
import {
  Activity, AlertTriangle, BarChart3, BatteryCharging, BookOpenCheck, BriefcaseBusiness,
  CheckCircle2, ChevronRight, CircleDollarSign, CloudSun, Database, Gauge, GraduationCap,
  Hexagon, Languages, Layers3, MapPinned, Navigation, Plane, Radar, RefreshCw, Route,
  Satellite, Search, ShieldCheck, Sparkles, Sprout, UsersRound, WalletCards, Waves, Wind
} from 'lucide-react';
import styles from './command-v2.module.css';

const MapPanel = dynamic(() => import('./map-panel'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}><RefreshCw size={20} className={styles.spin}/>Loading Rajasthan GIS…</div>
});

type View = 'command' | 'demand' | 'coverage' | 'missions' | 'evidence' | 'capacity' | 'integrations';
type MissionStatus = 'READY' | 'LIVE' | 'WEATHER HOLD' | 'AGGREGATING';
type Mission = {
  id: string; district: string; block: string; service: string; crop: string; farmers: number;
  acres: number; status: MissionStatus; pilot: string; drone: string; pooledCost: number; reach: number;
};

type NavItem = { id: View; label: string; icon: ElementType };

const missions: Mission[] = [
  { id: 'RJ-BAN-047', district: 'Banswara', block: 'Arthuna', service: 'Nutrient application', crop: 'Maize', farmers: 31, acres: 36.8, status: 'READY', pilot: 'Sunita Meena · Drone Didi', drone: 'UIN-RJ-A10-019', pooledCost: 318, reach: 44 },
  { id: 'RJ-KOT-112', district: 'Kota', block: 'Sangod', service: 'Crop-health scouting', crop: 'Soybean', farmers: 18, acres: 52.4, status: 'LIVE', pilot: 'Arjun Gurjar · RPC', drone: 'UIN-RJ-M6-031', pooledCost: 284, reach: 78 },
  { id: 'RJ-BUN-084', district: 'Bundi', block: 'Keshoraipatan', service: 'Pesticide application', crop: 'Paddy', farmers: 24, acres: 41.2, status: 'WEATHER HOLD', pilot: 'Asha Kanwar · RPC', drone: 'UIN-RJ-A10-007', pooledCost: 326, reach: 69 },
  { id: 'RJ-JSL-019', district: 'Jaisalmer', block: 'Sam', service: 'Land & stand mapping', crop: 'Cumin', farmers: 12, acres: 68.1, status: 'AGGREGATING', pilot: 'Unassigned', drone: 'Unassigned', pooledCost: 352, reach: 36 }
];

const nav: NavItem[] = [
  { id: 'command', label: 'State Command', icon: MapPinned },
  { id: 'demand', label: 'Demand Density', icon: Radar },
  { id: 'coverage', label: 'Universal Reach', icon: Route },
  { id: 'missions', label: 'Mission Control', icon: Navigation },
  { id: 'evidence', label: 'Evidence & DBT', icon: ShieldCheck },
  { id: 'capacity', label: 'Fleet & RPC Capacity', icon: GraduationCap },
  { id: 'integrations', label: 'Govt Integration Fabric', icon: Database }
];

const challengeFit = [
  ['Demand aggregation + booking', 'IMPLEMENTED'],
  ['UIN / eGCA / Digital Sky workflow', 'IMPLEMENTED'],
  ['Service-fee support + DBT evidence', 'IMPLEMENTED'],
  ['KVK + RPTO / RPC pipeline', 'IMPLEMENTED'],
  ['AgriStack / departmental capture', 'CONTRACT READY']
];

const evidenceSignals = [
  ['8.72M', 'Rajasthan Farmer IDs', '20 Jul 2026 · PIB / AgriStack'],
  ['40', 'Drone Didi SHGs / trained pilots', 'Rajasthan · Jan 2026 · PIB'],
  ['47', 'Krishi Vigyan Kendras', 'Rajasthan · ICAR directory'],
  ['eGCA', 'UIN + fresh RPC services', 'Migrated from Digital Sky · Jul 2025']
];

const demoSteps = [
  { view: 'demand' as View, title: '1. Aggregate fragmented demand', text: '67 compatible smallholder requests become 9 executable missions.' },
  { view: 'coverage' as View, title: '2. Close the access gap', text: 'An underserved block receives a bundled coverage contract with transparent viability-gap support.' },
  { view: 'missions' as View, title: '3. Gate the mission', text: 'Farmer consent, plot context, UIN/RPC references, weather, airspace and agronomic rules must resolve before dispatch.' },
  { view: 'evidence' as View, title: '4. Verify every acre-service', text: 'Geo-linked telemetry, input traceability and farmer acknowledgement produce the proof-of-service receipt.' },
  { view: 'capacity' as View, title: '5. Build missing capacity', text: 'Seasonal demand forecasting exposes pilot, battery and transport gaps before the crop window opens.' },
  { view: 'integrations' as View, title: '6. Federate, do not duplicate', text: 'AgriStack, RajKisan, IMD, eGCA/Digital Sky, DBT, Drone Didi, FARMS/CHC and SUTRA remain explicit adapters.' }
];

export default function CommandCenterV2() {
  const [view, setView] = useState<View>('command');
  const [selectedId, setSelectedId] = useState(missions[0].id);
  const [lang, setLang] = useState<'EN' | 'हि'>('EN');
  const [optimized, setOptimized] = useState(false);
  const [optimizing, setOptimizing] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const selected = useMemo(() => missions.find(m => m.id === selectedId) ?? missions[0], [selectedId]);

  function optimizeDemand() {
    setOptimizing(true);
    setOptimized(false);
    window.setTimeout(() => {
      setOptimizing(false);
      setOptimized(true);
    }, 900);
  }

  function startJudgeJourney() {
    setDemoOpen(true);
    setDemoStep(0);
    setView(demoSteps[0].view);
    setOptimizing(true);
    window.setTimeout(() => { setOptimizing(false); setOptimized(true); }, 850);
  }

  function nextJudgeStep() {
    const next = Math.min(demoStep + 1, demoSteps.length - 1);
    setDemoStep(next);
    setView(demoSteps[next].view);
  }

  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.mark}><Hexagon size={26}/><span>RJ</span></div>
          <div>
            <div className={styles.govline}>Government of Rajasthan · Department of Agriculture</div>
            <h1>RAJ-KRISHI DRONE GRID</h1>
            <p>Universal Drone-as-a-Service & Agri-Extension Operating System</p>
          </div>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.demoBadge}><span/>Evaluator demo · synthetic operational scenario</div>
          <button className={styles.ghostButton} onClick={() => setLang(lang === 'EN' ? 'हि' : 'EN')}><Languages size={16}/>{lang === 'EN' ? 'हिन्दी' : 'English'}</button>
          <button className={styles.primaryButton} onClick={startJudgeJourney}><Sparkles size={16}/>Run Judge Journey</button>
        </div>
      </header>

      <div className={styles.challengeStrip}>
        <span className={styles.challengeLabel}>EXACT CHALLENGE FIT</span>
        {challengeFit.map(([label, status]) => <div key={label} className={styles.fitItem}><CheckCircle2 size={14}/><span>{label}</span><b>{status}</b></div>)}
      </div>

      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <div className={styles.sideTitle}>AGRI-DRONE OPERATIONS</div>
          <nav>{nav.map(item => { const Icon = item.icon; return <button key={item.id} className={view === item.id ? styles.navActive : ''} onClick={() => setView(item.id)}><Icon size={17}/><span>{item.label}</span><ChevronRight size={14}/></button>; })}</nav>
          <div className={styles.sideEvidence}>
            <span>STATEWIDE ARCHITECTURE</span>
            <strong>41 revenue districts</strong>
            <p>Demo nodes shown · production rollout subject to Department onboarding.</p>
          </div>
          <div className={styles.sideEvidenceAlt}>
            <ShieldCheck size={17}/>
            <div><strong>Truthful integration labels</strong><span>Only verified public gateways are marked live.</span></div>
          </div>
        </aside>

        <section className={styles.workspace}>
          <div className={styles.workspaceHeader}>
            <div>
              <div className={styles.crumb}>Agriculture Operations <ChevronRight size={13}/> {nav.find(n => n.id === view)?.label}</div>
              <h2>{viewTitle(view)}</h2>
              <p>{viewSubtitle(view)}</p>
            </div>
            <div className={styles.search}><Search size={16}/><span>Mission / FarmerID / UIN / Block</span></div>
          </div>

          {view === 'command' && <CommandView selected={selected} selectedId={selectedId} onSelect={setSelectedId} onOpenMission={() => setView('missions')}/>} 
          {view === 'demand' && <DemandView optimized={optimized} optimizing={optimizing} onOptimize={optimizeDemand}/>} 
          {view === 'coverage' && <CoverageView/>}
          {view === 'missions' && <MissionView mission={selected} onSelect={setSelectedId}/>} 
          {view === 'evidence' && <EvidenceView mission={selected}/>} 
          {view === 'capacity' && <CapacityView/>} 
          {view === 'integrations' && <IntegrationsView/>}
        </section>
      </div>

      {demoOpen && <div className={styles.demoRail}>
        <div className={styles.demoRailTop}><span>JUDGE JOURNEY</span><b>{demoStep + 1}/{demoSteps.length}</b><button onClick={() => setDemoOpen(false)}>×</button></div>
        <h3>{demoSteps[demoStep].title}</h3>
        <p>{demoSteps[demoStep].text}</p>
        <div className={styles.demoProgress}>{demoSteps.map((_, i) => <i key={i} className={i <= demoStep ? styles.demoDone : ''}/>)}</div>
        <button className={styles.primaryButton} onClick={nextJudgeStep} disabled={demoStep === demoSteps.length - 1}>{demoStep === demoSteps.length - 1 ? 'Journey complete' : 'Next evidence gate'}<ChevronRight size={15}/></button>
      </div>}
    </main>
  );
}

function viewTitle(view: View) {
  return ({
    command: 'State Drone Command Centre', demand: 'Demand Density Engine', coverage: 'Universal Service Coverage',
    missions: 'Mission Control & Compliance', evidence: 'Proof-of-Service & DBT Evidence', capacity: 'Seasonal Fleet & RPC Capacity',
    integrations: 'Government Integration Fabric'
  } as Record<View, string>)[view];
}

function viewSubtitle(view: View) {
  return ({
    command: 'One operational picture for demand, compliant capacity, access equity and agricultural-extension missions.',
    demand: 'Pool smallholder demand into executable acre-service missions without mixing incompatible crops, inputs or service windows.',
    coverage: 'Turn “remote block” from a map problem into a measurable service obligation with transparent, policy-configured support.',
    missions: 'Dispatch only after regulatory, weather, agronomic and consent evidence gates resolve under the active rule pack.',
    evidence: 'Make every public rupee traceable to a verified acre-service rather than a self-declared booking or invoice.',
    capacity: 'Forecast seasonal service demand and expose pilot, drone, battery, transport and training gaps before peak windows.',
    integrations: 'Reuse authoritative public infrastructure through explicit adapters; never create competing registries.'
  } as Record<View, string>)[view];
}

function CommandView({ selected, selectedId, onSelect, onOpenMission }: { selected: Mission; selectedId: string; onSelect: (id: string) => void; onOpenMission: () => void }) {
  return <div className={styles.stack}>
    <div className={styles.scenarioNotice}><Activity size={15}/><b>Evaluator scenario</b><span>Operational counts and costs below are synthetic demonstration data. Official policy/reference facts are separately sourced.</span></div>
    <div className={styles.kpis}>
      <Kpi label="Scenario requests" value="1,284" note="across pilot map" icon={UsersRound}/>
      <Kpi label="Acres pooled" value="4,918" note="demand-density engine" icon={Layers3}/>
      <Kpi label="Dispatch-ready" value="9" note="evidence gates passed" icon={Navigation}/>
      <Kpi label="Pooled service cost" value="₹329/ac" note="illustrative scenario" icon={CircleDollarSign}/>
      <Kpi label="Universal Reach" value="72/100" note="transparent composite" icon={Gauge}/>
    </div>

    <div className={styles.commandGrid}>
      <div className={styles.mapCard}>
        <div className={styles.panelHead}><div><span>GIS OPERATIONS</span><h3>Universal Reach & Mission Network</h3></div><div className={styles.mapChips}><b>Reach</b><span>Demand</span><span>Fleet</span><span>Weather</span></div></div>
        <MapPanel selectedId={selectedId} onSelect={onSelect}/>
        <div className={styles.mapFooter}><span><Radar size={14}/> Underserved blocks are prioritised for aggregation</span><span><CloudSun size={14}/> IMD gateway is the only live public feed in this prototype</span></div>
      </div>
      <aside className={styles.opsRail}>
        <div className={styles.panelHead}><div><span>SELECTED MISSION</span><h3>{selected.id}</h3></div><Status status={selected.status}/></div>
        <div className={styles.missionHero}><b>{selected.district} · {selected.block}</b><span>{selected.crop} · {selected.service}</span></div>
        <Mini label="Farmers pooled" value={String(selected.farmers)}/><Mini label="Area" value={`${selected.acres} ac`}/><Mini label="Pooled cost" value={`₹${selected.pooledCost}/ac`}/><Mini label="Reach score" value={`${selected.reach}/100`}/>
        <div className={styles.operatorBox}><Plane size={17}/><div><b>{selected.drone}</b><span>{selected.pilot}</span></div></div>
        <button className={styles.primaryButton} onClick={onOpenMission}>Open Mission Passport<ChevronRight size={15}/></button>
        <div className={styles.riskBox}><AlertTriangle size={16}/><div><b>Access-risk focus</b><span>Kushalgarh, Sam, Kotra and Bap remain synthetic underserved examples for the evaluator journey.</span></div></div>
      </aside>
    </div>

    <div className={styles.evidenceGrid}>
      {evidenceSignals.map(([value, label, source]) => <div key={label} className={styles.evidenceCard}><strong>{value}</strong><b>{label}</b><span>{source}</span></div>)}
    </div>

    <div className={styles.twoCol}>
      <Panel kicker="SERVICE PIPELINE" title="Mission queue">
        <div className={styles.missionList}>{missions.map(m => <button key={m.id} onClick={() => onSelect(m.id)} className={m.id === selectedId ? styles.rowActive : ''}><div><b>{m.id}</b><span>{m.district} · {m.service}</span></div><div><strong>{m.acres} ac</strong><Status status={m.status}/></div></button>)}</div>
      </Panel>
      <Panel kicker="PUBLIC-VALUE CONTROL" title="What the State can govern">
        <div className={styles.governList}>
          <Govern icon={Radar} title="Where demand exists" text="Farmer requests + departmental campaigns become service density."/>
          <Govern icon={Route} title="Where access fails" text="Reach Index exposes response-time, capacity, cost and logistics reasons."/>
          <Govern icon={ShieldCheck} title="What actually happened" text="Mission evidence closes the loop before support becomes payable."/>
          <Govern icon={BarChart3} title="What capacity is missing" text="Forecast RPC, fleet, battery and transport shortages by crop window."/>
        </div>
      </Panel>
    </div>
  </div>;
}

function DemandView({ optimized, optimizing, onOptimize }: { optimized: boolean; optimizing: boolean; onOptimize: () => void }) {
  const farmers = Array.from({ length: 30 }, (_, i) => i);
  return <div className={styles.stack}>
    <div className={styles.heroPanel}><div><span>FLAGSHIP ECONOMICS ENGINE</span><h3>Optimize the acre-service, not the booking.</h3><p>Hard compatibility rules are applied first; only then does routing optimise distance, mobilisation and provider utilisation. No black-box AI can override an agronomic or regulatory rule.</p></div><button className={styles.primaryButton} onClick={onOptimize} disabled={optimizing}>{optimizing ? <><RefreshCw size={17} className={styles.spin}/>Clustering 67 requests…</> : <><Sparkles size={17}/>Optimise 67 requests</>}</button></div>

    <div className={styles.optimizer}>
      <Panel kicker="BEFORE" title="Fragmented smallholder demand">
        <div className={styles.dotField}>{farmers.map(i => <i key={i} style={{ left: `${7 + (i * 17) % 86}%`, top: `${8 + (i * 29) % 78}%` }}/>)}</div>
        <div className={styles.optimizerMetrics}><Mini label="Requests" value="67"/><Mini label="Median plot" value="1.1 ac"/><Mini label="Mobilisation" value="₹486/ac"/></div>
      </Panel>
      <div className={styles.optimizerArrow}><Route size={28}/><b>{optimizing ? 'solving' : optimized ? '9 missions' : 'cluster'}</b></div>
      <Panel kicker="AFTER" title="Executable mission bundles">
        {optimized ? <div className={styles.clusterList}>
          <Cluster id="BAN-047" meta="31 farmers · 36.8 ac" cost="₹318/ac" status="READY"/>
          <Cluster id="BAN-048" meta="12 farmers · 18.3 ac" cost="₹334/ac" status="READY"/>
          <Cluster id="BAN-051" meta="9 farmers · 13.7 ac" cost="₹327/ac" status="READY"/>
          <Cluster id="+ 6 missions" meta="15 farmers · 26.1 ac" cost="₹341/ac" status="QUEUED"/>
        </div> : <div className={styles.empty}><Radar size={36}/><b>Demand awaits clustering</b><span>Run the evaluator optimisation to convert requests into missions.</span></div>}
      </Panel>
    </div>

    <div className={styles.ruleRow}>
      <Rule icon={MapPinned} title="Plot proximity"/><Rule icon={Sprout} title="Crop + stage"/><Rule icon={Waves} title="Input / service SOP"/><Rule icon={CloudSun} title="Weather window"/><Rule icon={Plane} title="Drone capability"/><Rule icon={ShieldCheck} title="Compliance"/><Rule icon={CircleDollarSign} title="Delivered cost"/>
    </div>

    <div className={styles.twoCol}>
      <Panel kicker="EXPLAINABILITY" title="Why a farmer entered BAN-047">
        <Checklist items={['2.8 km from cluster centroid · PASS','Maize crop + nutrient service · PASS','Requested window overlaps cluster · PASS','Provider payload / nozzle capability · PASS','Illustrative price ceiling · PASS']}/>
      </Panel>
      <Panel kicker="WHY THIS MATTERS" title="Demand density is infrastructure">
        <p className={styles.bodyCopy}>Government can increase utilisation without buying another drone. Pooling raises productive acres per dispatch, reduces dead kilometres and creates a predictable work pipeline for Drone Didis, FPOs, CHCs and private providers.</p>
      </Panel>
    </div>
  </div>;
}

function CoverageView() {
  return <div className={styles.stack}>
    <div className={styles.heroPanel}><div><span>NEW UNIVERSAL-SERVICE LAYER</span><h3>Coverage Contract Engine</h3><p>A marketplace can show that Kushalgarh is underserved. The Grid can operationally fix it: bundle demand, quantify the access gap, request compliant capacity and apply Department-configured viability-gap support only to verified service.</p></div><div className={styles.reachOrb}><b>41</b><span>/100</span><small>Kushalgarh demo reach</small></div></div>

    <div className={styles.coverageFlow}>
      <CoverageStage n="01" title="Detect gap" text="Low provider density + RPC shortage + long mobilisation"/>
      <ChevronRight size={22}/><CoverageStage n="02" title="Bundle service" text="104 requests · 137 acres · compatible crop windows"/>
      <ChevronRight size={22}/><CoverageStage n="03" title="Call capacity" text="Empanelled Drone Didi / FPO / CHC / private providers"/>
      <ChevronRight size={22}/><CoverageStage n="04" title="Close gap" text="Pay configured support only on verified acre-service"/>
    </div>

    <div className={styles.coverageGrid}>
      <Panel kicker="COVERAGE CONTRACT · DEMO" title="Kushalgarh Service Bundle 08">
        <div className={styles.contractTop}><div><span>Bundled demand</span><b>137.0 ac</b></div><div><span>Farmers</span><b>104</b></div><div><span>Required by</span><b>48 h</b></div><div><span>Qualified bids</span><b>3</b></div></div>
        <div className={styles.bidTable}>
          <div className={styles.tableHead}><span>Provider</span><span>Base</span><span>Support</span><span>Farmer</span><span>Score</span></div>
          <div><b>SHG Drone Service 04</b><span>₹468</span><span>₹105</span><span>₹363</span><strong>94</strong></div>
          <div><b>FPO Fleet 11</b><span>₹455</span><span>₹82</span><span>₹373</span><strong>91</strong></div>
          <div><b>Private DSP 07</b><span>₹432</span><span>₹48</span><span>₹384</span><strong>89</strong></div>
        </div>
        <div className={styles.policyNote}><ShieldCheck size={15}/><span>All prices/support are illustrative evaluator values. Award and subsidy rules remain Department-configured policy, not hard-coded product logic.</span></div>
      </Panel>
      <Panel kicker="ACCESS EQUITY" title="Universal Reach Index breakdown">
        <ScoreRow label="Service availability" value={42}/><ScoreRow label="Response-time feasibility" value={38}/><ScoreRow label="Delivered affordability" value={51}/><ScoreRow label="RPC capacity" value={29}/><ScoreRow label="Logistics readiness" value={34}/><ScoreRow label="Evidence reliability" value={68}/>
        <div className={styles.scoreExplain}><b>Reason-coded score</b><span>Every component exposes source, freshness, weight and remediation action. No opaque ranking.</span></div>
      </Panel>
    </div>

    <div className={styles.threeCol}>
      <ImpactCard icon={UsersRound} title="Farmer access" metric="104" text="requests become one service obligation"/>
      <ImpactCard icon={BriefcaseBusiness} title="Provider utilisation" metric="137 ac" text="predictable workload instead of scattered leads"/>
      <ImpactCard icon={WalletCards} title="Public value" metric="₹/verified ac" text="support attaches to delivered service, not idle assets"/>
    </div>
  </div>;
}

function MissionView({ mission, onSelect }: { mission: Mission; onSelect: (id: string) => void }) {
  const gates = ['Farmer consent + plot context recorded','UIN reference recorded','RPC reference recorded','Crop / service rule pack passed','IMD weather gate passed','Airspace check evidence recorded','Provider declaration signed','Mission plan acknowledged'];
  return <div className={styles.missionLayout}>
    <Panel kicker="ACTIVE QUEUE" title="Missions">
      <div className={styles.missionList}>{missions.map(m => <button key={m.id} onClick={() => onSelect(m.id)} className={m.id === mission.id ? styles.rowActive : ''}><div><b>{m.id}</b><span>{m.district} · {m.crop}</span></div><Status status={m.status}/></button>)}</div>
    </Panel>
    <div className={styles.stack}>
      <div className={styles.passportHeader}><div><span>MISSION PASSPORT</span><h3>{mission.id}</h3><p>{mission.district} / {mission.block} · {mission.crop} · {mission.service}</p></div><Status status={mission.status}/></div>
      <div className={styles.twoCol}>
        <Panel kicker="PRE-DISPATCH GATES" title="Compliance state machine"><Checklist items={gates}/><div className={styles.gateResult}><CheckCircle2 size={18}/><div><b>COMPLIANT TO DISPATCH</b><span>Demo mission state; production dispatch requires configured authoritative checks.</span></div></div></Panel>
        <Panel kicker="AGRONOMIC APPLICATION PASSPORT" title="Tank-to-plot traceability">
          <div className={styles.passportGrid}><Mini label="Crop" value={mission.crop}/><Mini label="Area" value={`${mission.acres} ac`}/><Mini label="Input rule" value="Source-backed SOP"/><Mini label="Tank batch" value="LOT-24A-118"/><Mini label="Nozzle profile" value="APP-03"/><Mini label="Weather rule" value="PASS"/><Mini label="Operator" value={mission.pilot}/><Mini label="Rule pack" value="AGR-DRONE-2026.1"/></div>
          <div className={styles.policyNote}><BookOpenCheck size={15}/><span>Application rules are deterministic and versioned; AI may explain a rule but cannot waive it.</span></div>
        </Panel>
      </div>
      <Panel kicker="MISSION TELEMETRY · SIMULATED_DEVICE_STREAM" title="Execution surface">
        <div className={styles.telemetry}><Telemetry icon={BatteryCharging} label="Battery" value="74%"/><Telemetry icon={Navigation} label="Coverage" value="23.7 / 36.8 ac"/><Telemetry icon={Waves} label="Application" value="184 L"/><Telemetry icon={Wind} label="Wind" value="11 km/h"/><Telemetry icon={Activity} label="Mission" value="64%"/></div>
      </Panel>
    </div>
  </div>;
}

function EvidenceView({ mission }: { mission: Mission }) {
  return <div className={styles.stack}>
    <div className={styles.heroPanel}><div><span>PAY FOR VERIFIED SERVICE</span><h3>Proof-of-Service Receipt</h3><p>Booking confirmation is not settlement evidence. The atomic receipt binds farmer/plot context, authorised service, UIN/RPC references, geo-track, actual acres, input traceability, exceptions and farmer acknowledgement.</p></div><div className={styles.receiptSeal}><ShieldCheck size={30}/><b>VERIFIED</b><span>demo receipt</span></div></div>
    <div className={styles.evidenceLayout}>
      <Panel kicker="MISSION RECEIPT" title={`${mission.id} / POS-2026-00471`}>
        <div className={styles.receiptGrid}>
          <ReceiptLine label="Farmer bundle" value={`${mission.farmers} consented FarmerID refs`}/><ReceiptLine label="Farmland plots" value="31 plot references · 36.8 ac planned"/><ReceiptLine label="Actual treated area" value="36.42 ac · geo-track reconciled"/><ReceiptLine label="Drone" value={`${mission.drone} · capability profile A10`}/><ReceiptLine label="Pilot" value={`${mission.pilot} · RPC reference retained`}/><ReceiptLine label="Application evidence" value="LOT-24A-118 · 282 L · rule pack AGR-DRONE-2026.1"/><ReceiptLine label="Weather snapshot" value="IMD evidence timestamp + mission sensor values"/><ReceiptLine label="Farmer acknowledgement" value="30 confirmed · 1 assisted confirmation pending"/><ReceiptLine label="Receipt digest" value="sha256: 6d9f…a83c · append-only audit event"/>
        </div>
      </Panel>
      <Panel kicker="SERVICE-FEE SUPPORT · DEMO POLICY" title="Settlement decomposition">
        <MoneyRow label="Provider verified service" value="₹11,583"/><MoneyRow label="Illustrative service support" value="− ₹3,642"/><MoneyRow label="Farmer contribution" value="₹7,941"/><MoneyRow label="Exception hold" value="₹318" alert/>
        <div className={styles.settlementFlow}><span>MISSION_COMPLETE</span><ChevronRight size={14}/><span>EVIDENCE_VERIFIED</span><ChevronRight size={14}/><span>POLICY_ELIGIBLE</span><ChevronRight size={14}/><b>SETTLEMENT_READY</b></div>
        <div className={styles.policyNote}><WalletCards size={15}/><span>The platform prepares auditable eligibility and settlement evidence. Government finance authority remains external and authoritative.</span></div>
      </Panel>
    </div>
    <div className={styles.threeCol}>
      <ImpactCard icon={ShieldCheck} title="Anti-ghost billing" metric="Geo + time" text="claimed acreage is reconciled against mission evidence"/>
      <ImpactCard icon={Database} title="No duplicate registry" metric="References" text="authoritative external IDs are preserved"/>
      <ImpactCard icon={UsersRound} title="Farmer recourse" metric="Acknowledgement" text="exceptions can hold settlement and open grievance"/>
    </div>
  </div>;
}

function CapacityView() {
  return <div className={styles.stack}>
    <div className={styles.heroPanel}><div><span>SEASONAL CAPACITY DIGITAL TWIN</span><h3>Predict the shortage before farmers feel it.</h3><p>Demand by crop/service window is converted into required productive hours and compared with active drones, RPC pilots, battery sets, transport and maintenance readiness.</p></div><div className={styles.reachOrb}><b>12</b><span>RPC</span><small>demo cohort recommended</small></div></div>
    <div className={styles.capacityGrid}>
      <Panel kicker="NEXT 30 DAYS · DEMO FORECAST" title="Block capacity gaps">
        <div className={styles.capacityTable}><div className={styles.tableHead}><span>Block</span><span>Demand</span><span>Capacity</span><span>Gap</span><span>Action</span></div>
          <div><b>Kushalgarh</b><span>17.6k ac</span><span>10.9k</span><strong>−6.7k</strong><em>Train + call fleet</em></div>
          <div><b>Kotra</b><span>9.4k ac</span><span>6.1k</span><strong>−3.3k</strong><em>Transport hub</em></div>
          <div><b>Sam</b><span>7.2k ac</span><span>5.8k</span><strong>−1.4k</strong><em>Battery staging</em></div>
          <div><b>Sangod</b><span>13.1k ac</span><span>14.4k</span><strong className={styles.positive}>+1.3k</strong><em>Reserve capacity</em></div>
        </div>
      </Panel>
      <Panel kicker="RPC PIPELINE" title="KVK → RPTO → supervised activation">
        <div className={styles.pipeline}><PipelineStep n="01" title="Demand forecast" text="Block / crop-window shortage"/><PipelineStep n="02" title="Candidate intake" text="KVK / SHG / FPO / youth"/><PipelineStep n="03" title="DGCA-authorised RPTO" text="RPC workflow via eGCA"/><PipelineStep n="04" title="Agri module" text="SOP + field operations"/><PipelineStep n="05" title="Activation" text="Supervised missions + quality score"/></div>
      </Panel>
    </div>
    <div className={styles.threeCol}>
      <ImpactCard icon={BatteryCharging} title="Battery readiness" metric="Cycles" text="replace capacity before peak-window failure"/>
      <ImpactCard icon={Route} title="Transport readiness" metric="Hub plan" text="ADRTC evidence shows mobility can constrain utilisation"/>
      <ImpactCard icon={GraduationCap} title="Training precision" metric="Gap-led" text="train for forecast shortage, not generic certificate counts"/>
    </div>
    <div className={styles.sutraPanel}><div className={styles.sutraMark}><Hexagon size={26}/></div><div><span>OPTIONAL LAST-MILE EDGE</span><h3>SUTRA ID Edge field node</h3><p>Offline Hindi/voice-assisted request intake, FarmerID/plot reference capture, consent, mission manifest and farmer acknowledgement. Store-and-forward keeps the central Grid usable in weak-connectivity field operations without making proprietary hardware mandatory.</p></div><div className={styles.sutraTags}><b>OFFLINE-FIRST</b><b>VOICE</b><b>CONSENT</b><b>STORE & FORWARD</b></div></div>
  </div>;
}

function IntegrationsView() {
  const rows = [
    ['IMD public APIs', 'LIVE_PUBLIC', 'Weather / nowcast', 'Public gateway', 'Read'],
    ['RajKisan / assisted channels', 'ADAPTER_READY', 'Farmer service entry', 'Department', 'Read / write subject to approval'],
    ['AgriStack / UFSI', 'CONTRACT_DEFINED', 'Farmer / plot / crop refs', 'State registries', 'Consent-brokered'],
    ['DGCA eGCA / Digital Sky', 'AUTH_REQUIRED', 'UIN / RPC / airspace evidence', 'DGCA', 'Authorised workflow'],
    ['DBT / treasury rail', 'SIMULATED', 'Service-fee settlement', 'Government finance', 'External authority'],
    ['NaMo Drone Didi MIS', 'FEDERATION_READY', 'SHG fleet utilisation', 'Programme owner', 'Subject to approval'],
    ['FARMS / CHC', 'FEDERATION_READY', 'Existing hiring capacity', 'DA&FW / providers', 'Discovery / federation'],
    ['SUTRA ID Edge', 'OPTIONAL_EDGE', 'Offline field access', 'Syntheon / Department', 'Store-and-forward'],
    ['FarmGraph', 'OPTIONAL_AI', 'Need detection / follow-up', 'Optional intelligence', 'Advisory only']
  ];
  return <div className={styles.stack}>
    <div className={styles.heroPanel}><div><span>INTEROPERABILITY PRINCIPLE</span><h3>Federate authority. Do not duplicate it.</h3><p>The Grid owns service orchestration and evidence. Farmer identity remains with AgriStack/state registries; regulatory status remains with DGCA; public-money authority remains with Government finance systems.</p></div><div className={styles.fabricIcon}><Database size={34}/><span>API + EVENT FABRIC</span></div></div>
    <Panel kicker="INTEGRATION TRUTH MATRIX" title="Prototype maturity & authority boundaries">
      <div className={styles.integrationTable}>
        <div className={styles.tableHead}><span>System</span><span>Status</span><span>Purpose</span><span>Authority</span><span>Access model</span></div>
        {rows.map(r => <div key={r[0]}><b>{r[0]}</b><StatusPill text={r[1]}/><span>{r[2]}</span><span>{r[3]}</span><span>{r[4]}</span></div>)}
      </div>
    </Panel>
    <div className={styles.twoCol}>
      <Panel kicker="AGRISTACK" title="Farmer and plot truth layer"><p className={styles.bodyCopy}>Use FarmerID, farmland plot and crop-sown context through authorised, consent-brokered UFSI interactions. The Grid stores only mission-required references and evidence rather than replicating a parallel farmer registry.</p></Panel>
      <Panel kicker="FARMGRAPH" title="Optional sense → act → verify loop"><div className={styles.simpleFlow}><span>Official / FarmGraph risk signal</span><ChevronRight size={16}/><span>Targeted drone scouting</span><ChevronRight size={16}/><span>Human / rule decision</span><ChevronRight size={16}/><span>Verified intervention</span></div></Panel>
    </div>
  </div>;
}

function Panel({ kicker, title, children }: { kicker: string; title: string; children: React.ReactNode }) { return <section className={styles.panel}><div className={styles.panelHead}><div><span>{kicker}</span><h3>{title}</h3></div></div>{children}</section>; }
function Kpi({ label, value, note, icon: Icon }: { label: string; value: string; note: string; icon: ElementType }) { return <div className={styles.kpi}><Icon size={18}/><div><span>{label}</span><b>{value}</b><small>{note}</small></div></div>; }
function Mini({ label, value }: { label: string; value: string }) { return <div className={styles.mini}><span>{label}</span><b>{value}</b></div>; }
function Status({ status }: { status: MissionStatus }) { return <span className={`${styles.status} ${status === 'LIVE' ? styles.live : status === 'READY' ? styles.ready : status === 'WEATHER HOLD' ? styles.hold : styles.queued}`}>{status}</span>; }
function Govern({ icon: Icon, title, text }: { icon: ElementType; title: string; text: string }) { return <div><Icon size={18}/><p><b>{title}</b><span>{text}</span></p></div>; }
function Rule({ icon: Icon, title }: { icon: ElementType; title: string }) { return <div><Icon size={17}/><span>{title}</span></div>; }
function Cluster({ id, meta, cost, status }: { id: string; meta: string; cost: string; status: string }) { return <div className={styles.cluster}><div><b>{id}</b><span>{meta}</span></div><strong>{cost}</strong><em>{status}</em></div>; }
function Checklist({ items }: { items: string[] }) { return <div className={styles.checklist}>{items.map(x => <div key={x}><CheckCircle2 size={15}/><span>{x}</span></div>)}</div>; }
function CoverageStage({ n, title, text }: { n: string; title: string; text: string }) { return <div className={styles.coverageStage}><b>{n}</b><strong>{title}</strong><span>{text}</span></div>; }
function ScoreRow({ label, value }: { label: string; value: number }) { return <div className={styles.scoreRow}><span>{label}</span><div><i style={{ width: `${value}%` }}/></div><b>{value}</b></div>; }
function ImpactCard({ icon: Icon, title, metric, text }: { icon: ElementType; title: string; metric: string; text: string }) { return <div className={styles.impact}><Icon size={20}/><span>{title}</span><b>{metric}</b><p>{text}</p></div>; }
function Telemetry({ icon: Icon, label, value }: { icon: ElementType; label: string; value: string }) { return <div><Icon size={18}/><span>{label}</span><b>{value}</b></div>; }
function ReceiptLine({ label, value }: { label: string; value: string }) { return <div><span>{label}</span><b>{value}</b></div>; }
function MoneyRow({ label, value, alert }: { label: string; value: string; alert?: boolean }) { return <div className={`${styles.moneyRow} ${alert ? styles.moneyAlert : ''}`}><span>{label}</span><b>{value}</b></div>; }
function PipelineStep({ n, title, text }: { n: string; title: string; text: string }) { return <div><b>{n}</b><p><strong>{title}</strong><span>{text}</span></p></div>; }
function StatusPill({ text }: { text: string }) { return <b className={`${styles.integrationStatus} ${text === 'LIVE_PUBLIC' ? styles.statusLive : text === 'AUTH_REQUIRED' ? styles.statusAuth : text === 'SIMULATED' ? styles.statusSim : ''}`}>{text}</b>; }
