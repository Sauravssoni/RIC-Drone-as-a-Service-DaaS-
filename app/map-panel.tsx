'use client';
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline, useMap } from 'react-leaflet';
import { useEffect } from 'react';

const pts = [
  { id:'RJ-BAN-047', name:'Banswara · Arthuna', pos:[23.48,74.23] as [number,number], reach:44, status:'READY', acres:36.8 },
  { id:'RJ-KOT-112', name:'Kota · Sangod', pos:[24.92,76.29] as [number,number], reach:78, status:'LIVE', acres:52.4 },
  { id:'RJ-BUN-084', name:'Bundi · Keshoraipatan', pos:[25.29,75.94] as [number,number], reach:69, status:'WEATHER HOLD', acres:41.2 },
  { id:'RJ-JSL-019', name:'Jaisalmer · Sam', pos:[26.83,70.53] as [number,number], reach:36, status:'AGGREGATING', acres:68.1 },
  { id:'RJ-BIK-021', name:'Bikaner · Lunkaransar', pos:[28.49,73.75] as [number,number], reach:61, status:'READY', acres:44.0 },
  { id:'RJ-JAI-031', name:'Jaipur · Chomu', pos:[27.17,75.72] as [number,number], reach:86, status:'READY', acres:27.8 },
  { id:'RJ-UDR-017', name:'Udaipur · Kotra', pos:[24.37,73.08] as [number,number], reach:44, status:'AGGREGATING', acres:31.2 }
];

function Recenter({id}:{id:string}){ const map=useMap(); useEffect(()=>{const p=pts.find(x=>x.id===id); if(p) map.flyTo(p.pos,7.3,{duration:.7})},[id,map]); return null }

export default function MapPanel({selectedId,onSelect}:{selectedId:string,onSelect:(id:string)=>void}){
  return <div className="leaflet-shell"><MapContainer center={[26.6,73.8]} zoom={6} minZoom={5} maxZoom={12} scrollWheelZoom className="leaflet-map" zoomControl={false}>
    <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <Recenter id={selectedId}/>
    {pts.map(p=><CircleMarker key={p.id} center={p.pos} radius={selectedId===p.id?13:9} pathOptions={{color:selectedId===p.id?'#0b4f9c':'#ffffff',weight:selectedId===p.id?5:3,fillColor:p.reach<50?'#d5483c':p.reach<70?'#f0a42b':'#1d8d64',fillOpacity:1}} eventHandlers={{click:()=>onSelect(p.id)}}><Popup><div style={{fontFamily:'Arial',minWidth:180}}><strong>{p.name}</strong><br/>{p.id}<br/>{p.acres} acres · Reach {p.reach}/100<br/><b>{p.status}</b></div></Popup></CircleMarker>)}
    <Polyline positions={[[23.48,74.23],[24.92,76.29],[25.29,75.94]]} pathOptions={{color:'#2d6fb3',weight:2,dashArray:'6 8',opacity:.5}}/>
  </MapContainer><div className="map-legend"><span><i className="lg good"/> Reach ≥70</span><span><i className="lg warn"/> Reach 50–69</span><span><i className="lg bad"/> Reach &lt;50</span></div></div>
}
