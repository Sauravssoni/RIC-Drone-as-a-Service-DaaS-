'use client';
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline, useMap } from 'react-leaflet';
import { useEffect } from 'react';

const missionPoints = [
  { id:'RJ-BAN-047', name:'Banswara · Arthuna', pos:[23.48,74.23] as [number,number], reach:44, status:'READY', acres:36.8 },
  { id:'RJ-KOT-112', name:'Kota · Sangod', pos:[24.92,76.29] as [number,number], reach:78, status:'LIVE', acres:52.4 },
  { id:'RJ-BUN-084', name:'Bundi · Keshoraipatan', pos:[25.29,75.94] as [number,number], reach:69, status:'WEATHER HOLD', acres:41.2 },
  { id:'RJ-JSL-019', name:'Jaisalmer · Sam', pos:[26.83,70.53] as [number,number], reach:36, status:'AGGREGATING', acres:68.1 }
];

const gapPoints = [
  { id:'GAP-KUS', name:'Kushalgarh · coverage gap', pos:[23.20,74.45] as [number,number], reach:41, reason:'RPC shortage + mobilisation distance' },
  { id:'GAP-KOTRA', name:'Kotra · coverage gap', pos:[24.37,73.08] as [number,number], reach:44, reason:'Low provider density + transport' },
  { id:'GAP-BAP', name:'Bap · coverage gap', pos:[27.37,72.35] as [number,number], reach:49, reason:'Distance + weather-window exposure' }
];

function Recenter({id}:{id:string}){
  const map=useMap();
  useEffect(()=>{
    const p=missionPoints.find(x=>x.id===id);
    if(p) map.flyTo(p.pos,7.3,{duration:.7});
  },[id,map]);
  return null;
}

export default function MapPanel({selectedId,onSelect}:{selectedId:string,onSelect:(id:string)=>void}){
  return <div className="leaflet-shell"><MapContainer center={[26.6,73.8]} zoom={6} minZoom={5} maxZoom={12} scrollWheelZoom className="leaflet-map" zoomControl={false}>
    <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <Recenter id={selectedId}/>
    {missionPoints.map(p=><CircleMarker key={p.id} center={p.pos} radius={selectedId===p.id?13:9} pathOptions={{color:selectedId===p.id?'#0b4f9c':'#ffffff',weight:selectedId===p.id?5:3,fillColor:p.reach<50?'#d5483c':p.reach<70?'#f0a42b':'#1d8d64',fillOpacity:1}} eventHandlers={{click:()=>onSelect(p.id)}}><Popup><div style={{fontFamily:'Arial',minWidth:190}}><strong>{p.name}</strong><br/>{p.id}<br/>{p.acres} acres · Reach {p.reach}/100<br/><b>{p.status}</b><br/><small>Selectable synthetic mission</small></div></Popup></CircleMarker>)}
    {gapPoints.map(p=><CircleMarker key={p.id} center={p.pos} radius={8} pathOptions={{color:'#8f2f28',weight:2,fillColor:'#fff3ef',fillOpacity:1,dashArray:'3 3'}}><Popup><div style={{fontFamily:'Arial',minWidth:205}}><strong>{p.name}</strong><br/>Reach {p.reach}/100<br/>{p.reason}<br/><small>Illustrative underserved-block marker · not a live mission</small></div></Popup></CircleMarker>)}
    <Polyline positions={[[23.48,74.23],[24.92,76.29],[25.29,75.94]]} pathOptions={{color:'#2d6fb3',weight:2,dashArray:'6 8',opacity:.45}}/>
  </MapContainer><div className="map-legend"><span><i className="lg good"/> Mission reach ≥70</span><span><i className="lg warn"/> Mission reach 50–69</span><span><i className="lg bad"/> Mission reach &lt;50</span><span><i style={{background:'#fff3ef',border:'1px dashed #8f2f28'}}/> Coverage gap</span></div></div>
}
