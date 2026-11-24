import assert from 'node:assert/strict';
import {gradientDefaults as d,calculateGradient as calc,GRADIENT_PRESETS} from './dist/gradient.mjs';
import {resistance} from './dist/core.mjs';
const near=(a,b,t=1e-8)=>assert.ok(Math.abs(a-b)<t*Math.max(1,Math.abs(b)),`${a} != ${b}`);
for(const x of GRADIENT_PRESETS){const r=calc(structuredClone(x.params));assert.ok(r.valid,x.name);near(r.conservation.flow,0);near(r.conservation.solute,0);assert.ok(r.outlets.every(o=>o.c>=-1e-9&&o.c<=1+1e-9));assert.ok(r.mixing>=0&&r.mixing<=1);}
for(const n of [2,3,6,12]){const r=calc({...d,n});near(r.conservation.flow,0);near(r.conservation.solute,0);r.outlets.forEach((o,i)=>near(o.c+r.outlets.at(-i-1).c,1));}
const tree=calc(d),fast=calc({...d,qa:6,qb:6});near(fast.pressure,tree.pressure*2);near(fast.residence,tree.residence/2);assert.ok(fast.mixing<tree.mixing);tree.outlets.forEach((o,i)=>near(o.c,fast.outlets[i].c));
const uneven=calc({...d,qa:20,qb:1,n:8});near(uneven.conservation.solute,0);near(uneven.mean,20/21);
const co={...d,type:'coflow',diffusion:425},r=calc(co),fine=calc(co,240);near(r.mean,.5609515151515151);near(r.conservation.solute,0);assert.ok(r.outlet.every(c=>c>=.083&&c<=.77));assert.ok(Math.max(...r.outlets.map((o,i)=>Math.abs(o.c-fine.outlets[i].c)))<.005);
const mixed=calc({...co,concentrations:[.4,.4,.4,.4,.4,.4]});for(const c of mixed.outlet)near(c,.4);near(mixed.mixing,1);assert.ok(calc({...co,flows:co.flows.map(v=>v/4)}).mixing>r.mixing);assert.ok(calc({...co,chamberWidth:1000}).mixing>r.mixing);
for(const n of [3,7,11])near(calc({...co,n}).outlets.reduce((s,o)=>s+o.flow*o.c,0),r.mean*r.total);
const bank=GRADIENT_PRESETS[3].params,b=calc(bank);assert.ok(b.feasible);near(b.rmse,0);near(b.stock+b.diluent,b.total);for(const o of b.outlets){const R=resistance(.001,1,50e-6,50e-6),qa=o.la===null?0:b.head*1000/(R*o.la*.001)*60e9;near(qa,o.qa);near((o.qa*bank.ca+o.qb*bank.cb)/o.flow,o.target);}
assert.equal(calc({...bank,pressure:.001}).valid,false);assert.equal(calc({...co,flows:[0,0,0,0,0,0]}).valid,false);assert.equal(calc({...d,n:2.2}).valid,false);assert.equal(calc({...bank,custom:'1,0'}).valid,false);assert.equal(calc({...d,h:NaN}).valid,false);
console.log('PASS: hydraulic/solute conservation, symmetry and scaling; conservative diffusion, bounds, uniform solution and resolution convergence; inverse resistance forward checks and input validation.');
