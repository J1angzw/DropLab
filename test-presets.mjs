import assert from 'node:assert/strict';
import {defaults,resultFor} from './dist/core.mjs';
import {PRESETS,PRESET_VERSION,mergePresets} from './dist/presets.mjs';
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-8,`${actual} differs from ${expected}`);
const expected=[[72,.1296,38.58024691358025],[400/3,2/3,50],[100,.32,78.125],[200,2.25,200/9]];
assert.equal(PRESETS.length,6);assert.equal(new Set(PRESETS.map(p=>p.id)).size,6);
PRESETS.slice(0,4).forEach((p,i)=>{const r=resultFor(p.params);assert.ok(r.valid&&r.eligible,p.name);assert.ok(r.ca<.01&&r.rec<1&&r.red<1);near(r.length,expected[i][0]);near(r.volume,expected[i][1]);near(r.frequency,expected[i][2]);assert.ok(p.sample&&p.note.includes('not experimentally validated'));});
const seeded=mergePresets([],[],'2026-11-02T00:00:00Z');assert.equal(seeded.added,6);assert.equal(seeded.selected.length,4);assert.equal(seeded.remaining,0);
const again=mergePresets(seeded.records,seeded.selected);assert.equal(again.added,0);assert.deepEqual(again.records,seeded.records);assert.deepEqual(again.selected,seeded.selected);
const mine={id:'my-design',name:'My candidate',params:{...defaults},note:'keep my note',sample:false};
const migrated=mergePresets([mine],['my-design']);assert.equal(migrated.records[0],mine);assert.equal(migrated.records.length,7);assert.equal(migrated.selected[0],'my-design');assert.equal(migrated.selected.length,4);
const full=Array.from({length:39},(_,i)=>({...mine,id:`mine-${i}`}));const limited=mergePresets(full,['mine-0']);assert.equal(limited.records.length,40);assert.equal(limited.added,1);assert.equal(limited.remaining,5);assert.deepEqual(limited.records.slice(0,39),full);
seeded.records[0].params.qc=2;assert.equal(PRESETS[0].params.qc,1.5,'workspace record must not mutate the catalog');
console.log(`PASS: ${PRESET_VERSION}; four model-eligible reference designs, known estimates, idempotent migration, existing records/selections, capacity and independent parameter snapshots.`);

const focusing=PRESETS.filter(p=>p.params.geometry==='ff');assert.equal(focusing.length,2);for(const p of focusing){const r=resultFor(p.params);assert.ok(r.valid&&r.ca<.01&&r.rec<1&&r.red<1);assert.equal(r.eligible,true);assert.equal(r.length,null);assert.ok(r.diameter>0&&r.volume>0&&r.frequency>0);assert.ok(p.note.includes('not measured'));}
near(resultFor(focusing[0].params).uc,10);near(resultFor(focusing[0].params).ca,.0025);near(resultFor(focusing[0].params).rec,.1266666666666667);
assert.ok(seeded.selected.some(id=>focusing.some(p=>p.id===id)),'new visitors must compare both geometries');
assert.ok(PRESETS.slice(0,4).every(p=>p.id.includes('2026-11-02-v1')),'retain original IDs');
const upgrade=mergePresets([mine,PRESETS[0]],['my-design'],undefined,40,focusing);assert.equal(upgrade.added,2);assert.equal(upgrade.records.length,4);assert.ok(!upgrade.records.some(r=>r.id===PRESETS[1].id),'do not resurrect deleted old presets during upgrade');
console.log('PASS: two flow-focusing inlet examples, no unsupported droplet predictions, mixed comparison, stable old IDs and non-destructive migration.');
