'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight, BadgeIndianRupee, BarChart3, Building2, CheckCircle2, ChevronRight, CircleDollarSign,
  ClipboardCheck, CloudSun, Database, FileCheck2, Fingerprint, Gauge, GraduationCap, Headphones,
  Hexagon, Landmark, Languages, LockKeyhole, MapPinned, Network, Plane, Radar, Route, Satellite,
  ShieldCheck, Sparkles, Sprout, UsersRound, WalletCards, WifiOff, X
} from 'lucide-react';
import CommandCenterV2 from './command-v2';
import styles from './mvp-access.module.css';

type Role = 'EVALUATOR' | 'STATE_OFFICER' | 'DISTRICT_OFFICER' | 'KVK' | 'PROVIDER';
type AccessMode = 'evaluator' | 'sso' | 'janaadhaar';
type Module = 'operations' | 'extension' | 'programme';

const roleLabels: Record<Role, string> = {
  EVALUATOR: 'Evaluator / Demo Access',
  STATE_OFFICER: 'State Agriculture Operations',
  DISTRICT_OFFICER: 'District Agriculture Officer',
  KVK: 'KVK / Extension Officer',
  PROVIDER: 'Empanelled Service Provider'
};

export default function MvpAccess() {
  const [boot, setBoot] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [mode, setMode] = useState<AccessMode>('evaluator');
  const [role, setRole] = useState<Role>('EVALUATOR');
  const [module, setModule] = useState<Module>('operations');
  const [showDataNote, setShowDataNote] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setBoot(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const identity = useMemo(() => {
    if (mode === 'sso') return `DEMO-SSO · ${roleLabels[role]}`;
    if (mode === 'janaadhaar') return 'JAN AADHAAR DEMO · MASKED FAMILY REF';
    return roleLabels[role];
  }, [mode, role]);

  if (boot) return <Splash/>;
  if (!authenticated) return <Login mode={mode} setMode={setMode} role={role} setRole={setRole} onEnter={() => setAuthenticated(true)}/>;

  return <div className={styles.appFrame}>
    <div className={styles.prototypeBar}>
      <div><span className={styles.protoDot}/><b>MVP PROTOTYPE</b><span>Submission demonstrator · configurable for Department pilot</span></div>
      <div className={styles.utilityActions}>
        <button onClick={() => setShowDataNote(true)}><ShieldCheck size={14}/> Data & authority note</button>
        <button onClick={() => setAuthenticated(false)}><LockKeyhole size={14}/> Exit demo</button>
      </div>
    </div>

    <div className={styles.identityBar}>
      <div><Fingerprint size={16}/><span>Session</span><b>{identity}</b></div>
      <div className={styles.moduleSwitch}>
        <button className={module === 'operations' ? styles.moduleActive : ''} onClick={() => setModule('operations')}><MapPinned size={15}/> Operations</button>
        <button className={module === 'extension' ? styles.moduleActive : ''} onClick={() => setModule('extension')}><Satellite size={15}/> Extension Campaigns</button>
        <button className={module === 'programme' ? styles.moduleActive : ''} onClick={() => setModule('programme')}><Landmark size={15}/> Programme & Finance</button>
      </div>
      <span className={styles.authTruth}>SIMULATED AUTH · NO LIVE SSO / JAN AADHAAR CALL</span>
    </div>

    {module === 'operations' && <CommandCenterV2/>}
    {module === 'extension' && <ExtensionCampaigns/>}
    {module === 'programme' && <ProgrammeFinance/>}

    {showDataNote && <div className={styles.modalBackdrop} onClick={() => setShowDataNote(false)}>
      <section className={styles.dataModal} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={() => setShowDataNote(false)}><X size={18}/></button>
        <span className={styles.eyebrow}>MVP DATA GOVERNANCE</span>
        <h2>Authority stays with the authoritative system.</h2>
        <p>This prototype demonstrates service orchestration. It does not issue Farmer IDs, authenticate real Jan Aadhaar/Aadhaar identities, issue UIN/RPC credentials, grant airspace permission, determine statutory subsidy entitlement, or release Government funds.</p>
        <div className={styles.truthGrid}>
          <Truth title="Farmer / plot identity" owner="AgriStack / State registries" posture="CONTRACT_DEFINED"/>
          <Truth title="SSO / Jan Aadhaar" owner="Government of Rajasthan" posture="DEMO_ONLY"/>
          <Truth title="UIN / RPC / regulatory" owner="DGCA eGCA / Digital Sky" posture="AUTH_REQUIRED"/>
          <Truth title="Weather" owner="IMD public API" posture="LIVE_PUBLIC"/>
          <Truth title="DBT / treasury" owner="Government finance rail" posture="SIMULATED"/>
          <Truth title="Mission orchestration" owner="RAJ-KRISHI DRONE GRID" posture="MVP_FUNCTIONAL"/>
        </div>
        <div className={styles.modalFoot}><CheckCircle2 size={16}/><span>All operational counts, prices and mission records in the evaluator scenario are synthetic unless explicitly identified as sourced public facts.</span></div>
      </section>
    </div>}
  </div>;
}

function Splash() {
  return <main className={styles.splash}>
    <div className={styles.splashMark}><Hexagon size={54}/><span>RJ</span></div>
    <div className={styles.splashText}><span>SYNTHEON · RAJASTHAN INNOVATION CHALLENGE</span><h1>RAJ-KRISHI DRONE GRID</h1><p>Universal Drone-as-a-Service & Agri-Extension Operating System</p><b>MVP PROTOTYPE</b></div>
    <div className={styles.loader}><i/><i/><i/></div>
  </main>;
}

function Login({ mode, setMode, role, setRole, onEnter }: { mode: AccessMode; setMode: (m: AccessMode) => void; role: Role; setRole: (r: Role) => void; onEnter: () => void }) {
  return <main className={styles.loginPage}>
    <div className={styles.loginTop}><div className={styles.stateMark}><Hexagon size={28}/><b>राजस्थान</b></div><div><span>Government of Rajasthan · Department of Agriculture</span><strong>RAJ-KRISHI DRONE GRID</strong></div><em>MVP PROTOTYPE</em></div>
    <div className={styles.loginCanvas}>
      <section className={styles.loginIntro}>
        <span className={styles.eyebrow}>UNIVERSAL AGRI-EXTENSION REACH</span>
        <h1>One state operating layer for compliant agricultural drone service.</h1>
        <p>Aggregate smallholder demand, close remote-block coverage gaps, plan capacity, gate missions, verify acre-service and prepare auditable settlement evidence — while existing Government registries remain authoritative.</p>
        <div className={styles.introFlow}><span>DEMAND</span><ChevronRight/><span>REACH</span><ChevronRight/><span>COMPLY</span><ChevronRight/><span>SERVE</span><ChevronRight/><span>PROVE</span><ChevronRight/><span>PAY</span></div>
        <div className={styles.factRow}>
          <Fact value="8.72M" label="Rajasthan Farmer IDs" note="public reference · Jul 2026"/>
          <Fact value="47" label="KVKs" note="extension/training mesh"/>
          <Fact value="40" label="Drone Didi baseline" note="Rajasthan SHG table · Jan 2026"/>
        </div>
        <div className={styles.loginPrinciple}><ShieldCheck size={19}/><div><b>Evidence-first MVP</b><span>Live, synthetic, adapter-ready and authorization-required states are visually separated.</span></div></div>
      </section>

      <section className={styles.loginCard}>
        <div className={styles.cardHeader}><div><span>SECURE ACCESS</span><h2>Open the evaluator prototype</h2></div><LockKeyhole size={24}/></div>
        <div className={styles.accessTabs}>
          <button className={mode === 'evaluator' ? styles.accessActive : ''} onClick={() => setMode('evaluator')}><Sparkles size={15}/> Evaluator</button>
          <button className={mode === 'sso' ? styles.accessActive : ''} onClick={() => setMode('sso')}><Building2 size={15}/> Govt SSO</button>
          <button className={mode === 'janaadhaar' ? styles.accessActive : ''} onClick={() => setMode('janaadhaar')}><Fingerprint size={15}/> Jan Aadhaar</button>
        </div>

        {mode === 'evaluator' && <div className={styles.accessBody}>
          <label>Evaluator role</label>
          <select value={role} onChange={e => setRole(e.target.value as Role)}>{Object.entries(roleLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
          <div className={styles.demoInfo}><Radar size={17}/><div><b>Guided demo enabled</b><span>All mission, pricing and settlement values are synthetic evaluator data.</span></div></div>
        </div>}

        {mode === 'sso' && <div className={styles.accessBody}>
          <label>Digital Identity (SSO ID)</label><input value="DEMO-AGRI-OFFICER" readOnly/>
          <label>Password</label><input value="••••••••••" readOnly/>
          <label>Demo role</label><select value={role} onChange={e => setRole(e.target.value as Role)}>{Object.entries(roleLabels).filter(([k]) => k !== 'EVALUATOR').map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
          <div className={styles.warning}><ShieldCheck size={16}/><span>Visual simulation only. This MVP does not call Rajasthan SSO.</span></div>
        </div>}

        {mode === 'janaadhaar' && <div className={styles.accessBody}>
          <label>Jan Aadhaar family reference</label><input value="XXXXXX4321" readOnly/>
          <label>Member</label><input value="DEMO MEMBER · MASKED" readOnly/>
          <label>OTP</label><input value="••••••" readOnly/>
          <div className={styles.warning}><ShieldCheck size={16}/><span>Assisted farmer-journey mock only. No real Aadhaar/Jan Aadhaar data is entered, stored or authenticated.</span></div>
        </div>}

        <button className={styles.enterButton} onClick={onEnter}>Enter MVP Prototype <ArrowRight size={17}/></button>
        <div className={styles.loginFooter}><span><WifiOff size={14}/> SUTRA offline-assisted journey available inside prototype</span><span><Languages size={14}/> Hindi/voice field interaction planned for pilot customisation</span></div>
      </section>
    </div>
    <footer className={styles.govFooter}>Syntheon Tech Private Limited · Rajasthan Innovation Challenge 2026 · Submission demonstrator · Not an official Government production system</footer>
  </main>;
}

function ExtensionCampaigns() {
  const [stage, setStage] = useState(1);
  const stages = ['Signal received','Scouting mission','Human review','Authorised action','Follow-up','Closed'];
  return <main className={styles.modulePage}>
    <ModuleHeader icon={Satellite} kicker="AGRI-EXTENSION CAMPAIGN COMMAND" title="From field signal to verified extension response" subtitle="Scout first. Human/rule decision second. Treatment only when authorised. Every campaign closes with evidence."/>
    <div className={styles.moduleBody}>
      <div className={styles.moduleKpis}><MvpKpi icon={Radar} label="Active campaigns" value="6" note="synthetic demo"/><MvpKpi icon={MapPinned} label="Blocks under watch" value="14" note="demo scenario"/><MvpKpi icon={Plane} label="Scouting missions" value="22" note="planned + active"/><MvpKpi icon={ClipboardCheck} label="Human review queue" value="8" note="agronomist / officer"/></div>
      <section className={styles.campaignHero}>
        <div><span className={styles.eyebrow}>DEMO CAMPAIGN · BAN-FAW-06</span><h2>Fall Armyworm Rapid Response · Maize</h2><p>Banswara pilot scenario · farmer complaints + KVK/official signal → drone scouting → officer validation → authorised intervention → follow-up.</p></div>
        <div className={styles.campaignScore}><b>72%</b><span>scouting complete</span></div>
      </section>
      <div className={styles.campaignFlow}>{stages.map((s, i) => <button key={s} className={i <= stage ? styles.stageDone : ''} onClick={() => setStage(i)}><b>{String(i + 1).padStart(2,'0')}</b><span>{s}</span>{i < stages.length - 1 && <ChevronRight size={15}/>}</button>)}</div>
      <div className={styles.twoPanels}>
        <section className={styles.whitePanel}><span className={styles.panelKicker}>CAMPAIGN MAP · SCHEMATIC</span><h3>Targeted scouting, not blanket treatment</h3><div className={styles.campaignMap}><i className={styles.hotspot1}/><i className={styles.hotspot2}/><i className={styles.hotspot3}/><div className={styles.flightPath}/><span className={styles.mapLabel1}>Arthuna</span><span className={styles.mapLabel2}>Kushalgarh</span><span className={styles.mapLabel3}>Bagidora</span></div><div className={styles.legend}><span><i className={styles.redDot}/> priority scout</span><span><i className={styles.blueDot}/> queued plots</span><span><i className={styles.greenDot}/> reviewed</span></div></section>
        <section className={styles.whitePanel}><span className={styles.panelKicker}>DECISION CONTROL</span><h3>No autonomous chemical-treatment authority</h3><div className={styles.decisionList}><Decision icon={Satellite} title="AI / imagery" text="May detect anomalies, prioritise and explain."/><Decision icon={UsersRound} title="Human agronomist / officer" text="Reviews scouting evidence and recommendation."/><Decision icon={FileCheck2} title="Rule pack" text="Checks crop, product, application and weather conditions."/><Decision icon={ShieldCheck} title="Authorised mission" text="Only configured authority can move treatment to dispatch."/></div></section>
      </div>
      <section className={styles.whitePanel}><span className={styles.panelKicker}>SENSE → DECIDE → ACT → VERIFY → LEARN</span><h3>Optional FarmGraph + official signals</h3><div className={styles.longFlow}><FlowNode title="Official / farmer / FarmGraph signal" text="Need detection"/><ChevronRight/><FlowNode title="Drone scouting" text="Evidence collection"/><ChevronRight/><FlowNode title="Human + rule decision" text="Authority preserved"/><ChevronRight/><FlowNode title="Verified service" text="Mission execution"/><ChevronRight/><FlowNode title="Follow-up" text="Outcome learning"/></div></section>
    </div>
  </main>;
}

function ProgrammeFinance() {
  return <main className={styles.modulePage}>
    <ModuleHeader icon={Landmark} kicker="PROGRAMME OPERATIONS & COMMERCIAL MODEL" title="A service grid designed for public value, not farmer lock-in" subtitle="Reuse existing capacity first; procure verified service where needed; keep farmer data source-owned; make every rupee and SLA auditable."/>
    <div className={styles.moduleBody}>
      <div className={styles.moduleKpis}><MvpKpi icon={BadgeIndianRupee} label="90-day pilot" value="₹74.80L" note="indicative proposal"/><MvpKpi icon={Plane} label="Core drone purchase" value="₹0" note="reuse / mobilise capacity"/><MvpKpi icon={Gauge} label="Primary unit" value="₹ / verified acre" note="service economics"/><MvpKpi icon={Route} label="Scale target" value="State grid" note="post-pilot subject to approval"/></div>
      <div className={styles.twoPanels}>
        <section className={styles.whitePanel}><span className={styles.panelKicker}>PROPOSED 90-DAY JOINT PILOT</span><h3>Department-led operating compact</h3><div className={styles.roleMatrix}><RoleLine title="Department of Agriculture" text="Policy authority, pilot geography, approvals, credentials, acceptance and scale decision."/><RoleLine title="Syntheon" text="MVP platform, adapters, GIS, orchestration, security/UAT, evidence, PMO, training and handover."/><RoleLine title="KVK / Extension" text="Agronomic validation, mobilisation, campaign workflow, demonstrations and candidate funnel."/><RoleLine title="DGCA-authorised RPTO" text="RPC training/certification pathway and supervised activation."/><RoleLine title="Drone Didi / FPO / CHC / DSP" text="Authorised fleet, operators, maintenance, mission execution and telemetry."/><RoleLine title="e-Mitra / SUTRA-assisted field channel" text="Assisted access and weak-connectivity continuity where Department chooses."/></div></section>
        <section className={styles.whitePanel}><span className={styles.panelKicker}>SCHEME CONVERGENCE · SUBJECT TO POLICY REVIEW</span><h3>Enhance existing rails instead of creating a new silo</h3><div className={styles.schemeList}><Scheme name="SMAM / RKVY mechanisation" role="Asset, CHC, demonstration and mechanisation ecosystem; not assumed as automatic service-fee source."/><Scheme name="NaMo Drone Didi" role="Women-led service-provider capacity + existing scheme MIS; Grid can federate subject to approval."/><Scheme name="RajKisan / SSO / Jan Aadhaar" role="Familiar assisted access and state service-delivery rails; production integration requires authorisation."/><Scheme name="AgriStack / UFSI" role="Farmer/plot/crop references with consent; authoritative registries stay source-owned."/><Scheme name="KVK + RPTO" role="Extension, agronomic validation and gap-led RPC pipeline."/><Scheme name="IMD + eGCA / Digital Sky" role="Weather evidence + regulatory/airspace workflow under respective authorities."/></div></section>
      </div>
      <section className={styles.whitePanel}><span className={styles.panelKicker}>SYNTHEON REVENUE MODEL · GOVERNMENT / INSTITUTIONAL</span><h3>No sale of farmer personal data. No mandatory farmer subscription.</h3><div className={styles.revenueGrid}><Revenue title="Implementation & integration" value="One-time" text="Configuration, adapters, GIS, policy/rule packs, migration, security and UAT."/><Revenue title="Managed platform / O&M" value="Annual" text="Hosting, observability, SLA support, upgrades, security, training and analytics."/><Revenue title="Verified-service orchestration" value="Optional" text="Procurement-permitted fee tied to verified service volume/SLA — never hidden farmer data monetisation."/><Revenue title="Field edge / support" value="Optional" text="SUTRA nodes, device management, field enablement and support where weak connectivity justifies it."/><Revenue title="State-to-state deployment" value="Scale" text="UFSI-compatible configuration for other states without creating a national proprietary farmer registry."/></div></section>
      <section className={styles.whitePanel}><span className={styles.panelKicker}>WHY THIS MODEL MAXIMISES EFFECTIVENESS</span><div className={styles.outcomeGrid}><Outcome icon={UsersRound} title="Farmer" text="Affordable pooled service, assisted access, acknowledgement and grievance evidence."/><Outcome icon={Plane} title="Provider" text="Predictable mission density, higher utilisation and clearer payment evidence."/><Outcome icon={WalletCards} title="Government" text="Support can attach to verified service and underserved coverage rather than idle assets."/><Outcome icon={GraduationCap} title="RPC / youth" text="Training demand follows forecast capacity gaps, improving employability relevance."/><Outcome icon={Sprout} title="Extension system" text="Drones become a scouting, mapping and response endpoint — not only a spray machine."/><Outcome icon={Database} title="Digital public infrastructure" text="Existing registries and authorities gain a service-execution layer rather than another silo."/></div></section>
    </div>
  </main>;
}

function ModuleHeader({ icon: Icon, kicker, title, subtitle }: { icon: typeof Landmark; kicker: string; title: string; subtitle: string }) { return <header className={styles.moduleHeader}><div className={styles.moduleIcon}><Icon size={24}/></div><div><span>{kicker}</span><h1>{title}</h1><p>{subtitle}</p></div><b>MVP PROTOTYPE</b></header>; }
function Fact({ value, label, note }: { value: string; label: string; note: string }) { return <div><b>{value}</b><span>{label}</span><small>{note}</small></div>; }
function Truth({ title, owner, posture }: { title: string; owner: string; posture: string }) { return <div><b>{title}</b><span>{owner}</span><em>{posture}</em></div>; }
function MvpKpi({ icon: Icon, label, value, note }: { icon: typeof Gauge; label: string; value: string; note: string }) { return <div className={styles.mvpKpi}><Icon size={18}/><span>{label}</span><b>{value}</b><small>{note}</small></div>; }
function Decision({ icon: Icon, title, text }: { icon: typeof Satellite; title: string; text: string }) { return <div><Icon size={18}/><p><b>{title}</b><span>{text}</span></p></div>; }
function FlowNode({ title, text }: { title: string; text: string }) { return <div><b>{title}</b><span>{text}</span></div>; }
function RoleLine({ title, text }: { title: string; text: string }) { return <div><b>{title}</b><span>{text}</span></div>; }
function Scheme({ name, role }: { name: string; role: string }) { return <div><CheckCircle2 size={16}/><p><b>{name}</b><span>{role}</span></p></div>; }
function Revenue({ title, value, text }: { title: string; value: string; text: string }) { return <div><span>{title}</span><b>{value}</b><p>{text}</p></div>; }
function Outcome({ icon: Icon, title, text }: { icon: typeof UsersRound; title: string; text: string }) { return <div><Icon size={18}/><b>{title}</b><span>{text}</span></div>; }
