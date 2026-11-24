import assert from 'node:assert/strict';
import {defaults,resultFor} from './dist/core.mjs';
import {diagramLayout,diagramSvg} from './dist/diagram.mjs';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);
const p={...defaults},r=resultFor(p),g=diagramLayout(p,r);
near(g.main,65);near(g.size,86.66666666666666);near(g.size/g.main,4/3);near(g.depth/g.main,.5);near(g.ruler/g.rulerUm,g.scale);
const wider={...p,wc:120},gw=diagramLayout(wider,resultFor(wider));assert.ok(gw.main>g.main);near(gw.size/gw.main,resultFor(wider).length/120);
const deeper={...p,h:70},gd=diagramLayout(deeper,resultFor(deeper));assert.ok(gd.depth>g.depth);
const more={...p,qd:3},gm=diagramLayout(more,resultFor(more));assert.ok(gm.size>g.size);
const ff={...defaults,geometry:'ff',qc:6,qd:1,wc:200,wd:60,h:50},rf=resultFor(ff),gf=diagramLayout(ff,rf);near(gf.size,52);near(gf.side,65);near(gf.depth,32.5);assert.ok(diagramSvg(ff,rf).includes('equivalent-sphere-diameter'));
const ff2={...ff,qd:2},gf2=diagramLayout(ff2,resultFor(ff2));assert.ok(gf2.size>gf.size);near(gf2.size/gf2.scale,resultFor(ff2).diameter);
const huge={...ff,ffDref:5000},gh=diagramLayout(huge,resultFor(huge));near(gh.size,130);near(gh.size/gh.scale,5000);assert.ok(!diagramSvg(huge,resultFor(huge)).includes('NaN'));
const bad=resultFor({...p,qc:0});assert.equal(diagramLayout(p,bad),null);assert.ok(!diagramSvg(p,bad).includes('predicted-drop'));
const suppressed=resultFor({...p,muc:100});assert.ok(!diagramSvg({...p,muc:100},suppressed).includes('class="predicted-drop"'));
for(const q of [p,ff,more,ff2]){const s=diagramSvg(q,resultFor(q));assert.ok(s.includes('class="predicted-drop"'));assert.ok(s.includes('data-depth-px'));assert.ok(s.includes('same scale'));}
console.log('PASS: physical length/diameter mapping, shared scale, width/depth/flow changes, large droplets without truncation, and invalid/model-disabled states.');
