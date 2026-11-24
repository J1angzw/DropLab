import assert from 'node:assert/strict';
import {defaults,calculate,resistance,normalizeParams,SCREENING} from './dist/core.mjs';
import {diagramSvg} from './dist/diagram.mjs';
const near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),`${a} != ${b}`);
assert.equal(SCREENING.ca,.1);assert.equal(SCREENING.re,10);
const t={...defaults},ff={...defaults,geometry:'ff',wc:200,wd:60,qd:1};
// Independent targets from known volume and power-law ratios.
const dt=Math.cbrt(6*150*100*50/Math.PI);
const invT=calculate({...t,drive:'diameter',targetDiameter:dt,solveFor:'qd',qc:6,qd:NaN});assert.ok(invT.valid&&invT.eligible);near(invT.qd,3);near(invT.diameter,dt);
const reverseT=calculate({...t,drive:'diameter',targetDiameter:dt,solveFor:'qc',qd:3,qc:NaN});near(reverseT.qc,6);
const invF=calculate({...ff,drive:'diameter',targetDiameter:100,solveFor:'qd',qc:6});near(invF.qd,1.953125);near(invF.diameter,100);
const reverseF=calculate({...ff,drive:'diameter',targetDiameter:100,solveFor:'qc',qd:1.953125});near(reverseF.qc,6);
for(const p of [t,ff])for(const scale of [.2,1,4]){
 const flow=calculate({...p,qc:p.qc*scale,qd:p.qd*scale});assert.ok(flow.valid&&flow.eligible);
 for(const solveFor of ['qc','qd']){const inv=calculate({...p,qc:flow.qc,qd:flow.qd,drive:'diameter',solveFor,targetDiameter:flow.diameter});assert.ok(inv.valid);near(inv.qc,flow.qc);near(inv.qd,flow.qd);near(inv.targetResidual,0);}
 const pressure=calculate({...p,drive:'pressure',qc:NaN,qd:NaN,inletPc:flow.pc+2.3,inletPd:flow.pd+2.3,junctionP:2.3});assert.ok(pressure.valid);near(pressure.qc,flow.qc);near(pressure.qd,flow.qd);near(pressure.diameter,flow.diameter);near(pressure.frequency*pressure.volume*60/1000,pressure.qd);assert.ok(diagramSvg(p,pressure).includes(`Qc = ${pressure.qc.toLocaleString('en-US',{maximumFractionDigits:2,minimumFractionDigits:2})}`)||p.geometry==='ff');
 const old={...p};for(const k of ['drive','solveFor','targetDiameter','inletPc','inletPd','junctionP'])delete old[k];const migrated=calculate(old);assert.ok(migrated.valid);assert.equal(migrated.params.drive,'flow');near(migrated.qc,p.qc);
}
// Independent square-duct pressure check. FF has two identical branches in parallel.
const squareR=28.45415377*.005*.01/(50e-6)**4;
const pff=calculate({...ff,wc:100,wd:50,inletPc:1,inletPd:.2,junctionP:0,drive:'pressure'});
near(pff.qc,2*1000/squareR*60e9,1e-7);near(pff.qd,200/(squareR/5)*60e9,1e-7);
// Same inlet pressure, twice the resistance length => half the flow.
const p1=calculate({...t,drive:'pressure',inletPc:7,inletPd:1});const p2=calculate({...t,drive:'pressure',inletPc:7,inletPd:1,lc:20,ld:20});near(p2.qc,p1.qc/2);near(p2.qd,p1.qd/2);
for(const p of [t,ff]){
 const expanded=calculate({...p,muc:20,qd:5});assert.ok(expanded.valid&&expanded.eligible&&expanded.extended);assert.ok(expanded.warnings.some(w=>w.includes('Expanded-range')));
 const boundary=calculate({...p,muc:.1/(p.qc*1e-9/60/(p.wc*1e-6*p.h*1e-6))*(p.sigma*.001)*1000});assert.ok(boundary.ca>=.1-1e-15); // Floating representation at the bound is checked below with an epsilon.
 const outside=calculate({...p,muc:1000});assert.equal(outside.eligible,false);
 const low=calculate(p),rhoc=p.rhoc*10/low.rec;const below=calculate({...p,rhoc:Math.min(30000,rhoc*.999),qc:p.qc});if(rhoc<30000)assert.ok(below.eligible);
 const reHigh=calculate({...p,qd:100,mud:.1});assert.ok(reHigh.red>10);assert.equal(reHigh.eligible,false);
 for(const bad of [NaN,Infinity,-1,0])assert.equal(calculate({...p,drive:'diameter',targetDiameter:bad}).valid,false);
 assert.equal(calculate({...p,drive:'pressure',inletPc:1,inletPd:2,junctionP:1}).valid,false);
 assert.equal(calculate({...p,drive:'pressure',inletPc:3,inletPd:2,junctionP:2}).valid,false);
 assert.equal(calculate({...p,drive:'pressure',inletPc:NaN}).valid,false);
 assert.equal(calculate({...p,drive:'diameter',solveFor:'invalid'}).valid,false);
 assert.equal(calculate({...p,drive:'invalid'}).valid,false);
}
assert.equal(calculate({...t,drive:'diameter',targetDiameter:90}).valid,false);
assert.equal(calculate({...ff,drive:'diameter',targetDiameter:100000,ffExponent:.01}).valid,false);
const ffReBoundary=calculate({...ff,qc:30,rhoc:15000});near(ffReBoundary.rec,10);assert.equal(ffReBoundary.eligible,false);
const reBoundary=calculate({...t,qc:12,rhoc:18750});near(reBoundary.rec,10);assert.equal(reBoundary.eligible,false);
const caBelow=calculate({...t,muc:99.999});assert.ok(caBelow.eligible&&caBelow.extended);const caAbove=calculate({...t,muc:100.001});assert.equal(caAbove.eligible,false);
console.log('PASS: both inverse directions and geometries, pressure/flow round trips, independent FF parallel-branch factor, pressure reference and length trends, conservation, legacy migration, 10× screening limits, extrapolation flags and invalid targets/pressures.');
