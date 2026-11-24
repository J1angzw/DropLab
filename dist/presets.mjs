import {defaults} from './core.mjs';
export const PRESET_VERSION='2026-11-05-v3';
const makePreset=(key,name,note,overrides={})=>({id:`droplab-preset-${overrides.geometry==='ff'?'2026-11-02-v2':'2026-11-02-v1'}-${key}`,name,note,sample:true,params:{...defaults,...overrides}});
export const PRESETS=[
makePreset('a','Small T-junction','60 × 30 µm main channel. Model screening passed; not experimentally validated.',{wc:60,wd:50,h:30,qc:1.5,qd:.3}),
makePreset('b','Reference T-junction','100 × 50 µm reference geometry. Model screening passed; not experimentally validated.'),
makePreset('c','Higher-frequency T-junction','80 × 40 µm main channel. A calculated example, not experimentally validated.',{wc:80,wd:60,h:40,qc:6,qd:1.5}),
makePreset('d','Larger-volume T-junction','150 × 75 µm main channel. A calculated example, not experimentally validated.',{wc:150,wd:100,h:75,qc:9,qd:3}),
makePreset('ff-a','Flow-focusing reference','Each continuous inlet: 3 µL/min, 100 µm wide. Reference point and exponent are illustrative, not measured; calibrate experimentally.',{geometry:'ff',wc:200,wd:60,h:50,qc:6,qd:1}),
makePreset('ff-b','Flow-focusing low flow','Each continuous inlet: 2 µL/min, 80 µm wide. Reference point and exponent are illustrative, not measured; calibrate experimentally.',{geometry:'ff',wc:160,wd:40,h:40,qc:4,qd:.5})];
export function mergePresets(records,selected,created=new Date().toISOString(),capacity=40,catalog=PRESETS){const ids=new Set(records.map(r=>r.id)),missing=catalog.filter(p=>!ids.has(p.id)),additions=missing.slice(0,Math.max(0,capacity-records.length)).map(p=>({...p,params:{...p.params},created})),merged=[...records,...additions],valid=new Set(merged.map(r=>r.id)),next=[...new Set(selected.filter(id=>valid.has(id)))].slice(0,4);for(const r of [...additions.filter(r=>r.params.geometry==='ff'),...additions.filter(r=>r.params.geometry!=='ff')])if(next.length<4)next.push(r.id);return {records:merged,selected:next,added:additions.length,remaining:missing.length-additions.length};}
