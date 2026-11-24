import assert from 'node:assert/strict';
import {defaults,resultFor,resistance,limits,validate,inputIsActive} from './dist/core.mjs';
const close=(a,b,tolerance=1e-9)=>assert.ok(Math.abs(a-b)<=tolerance*Math.max(1,Math.abs(b)),`${a} != ${b}`);
const base=resultFor(defaults);
assert.equal(base.valid,true);assert.equal(base.eligible,true);
// Independent hand-derived unit and conservation checks for the reference example.
close(base.uc,20);close(base.ud,8.33333333333333);close(base.ca,.005);close(base.rec,.2533333333333333);close(base.red,.5128205128205128);
close(base.length,400/3);close(base.volume,2/3);close(base.frequency,50);close(base.diameter**3*Math.PI/6,base.volume*1e6);
close(base.frequency*base.volume*60/1000,defaults.qd);
// Square-duct analytical Poiseuille coefficient ~28.454; symmetric under side swap.
const square=resistance(.001,.01,50e-6,50e-6);close(square,28.45415377*.001*.01/(50e-6)**4,1e-7);
close(resistance(.005,.01,100e-6,50e-6),resistance(.005,.01,50e-6,100e-6));
close(resistance(.005,.02,100e-6,50e-6),2*resistance(.005,.01,100e-6,50e-6));
for(const [k,[min,max]] of Object.entries(limits)){if(!inputIsActive({...defaults,geometry:k.startsWith('ff')?'ff':'t'},k))continue;for(const v of [NaN,Infinity,0,-1,min/2,max*2,'5'])assert.equal(resultFor({...defaults,geometry:k.startsWith('ff')?'ff':'t',[k]:v}).valid,false,`${k} should reject ${v}`);}
for(const p of [{muc:100},{qc:600},{h:150},{wd:101},{wd:20},{qd:50}]){const r=resultFor({...defaults,...p});assert.equal(r.valid,true);assert.equal(r.eligible,false);for(const k of ['length','diameter','volume','frequency'])assert.equal(r[k],null);}
const ff=resultFor({...defaults,geometry:'ff'});close(ff.uc,20);close(ff.rec,.19);close(ff.pc,resistance(.005,.01,50e-6,50e-6)*(6e-9/60/2)/1000);
const q1=resultFor({...defaults,qd:1});assert.ok(q1.length<base.length);close(q1.length,100*(1+1/6));
const deeper=resultFor({...defaults,h:70});assert.ok(deeper.volume>base.volume);assert.ok(deeper.pc<base.pc);
assert.deepEqual(validate({...defaults,geometry:'bogus'}),{geometry:'Choose a valid chip geometry.'});
console.log('PASS: independent unit conversions, conservation, square-duct resistance, input bounds, model suppression, symmetric focusing, and parameter trends.');
