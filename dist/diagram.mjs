import {fmt} from './core.mjs';

// One physical scale for all transverse dimensions and the predicted droplet.
// Inlet lengths are broken/abbreviated; FF sphere panel is not a downstream channel.
export function diagramLayout(p,r){
  if(r.valid&&r.params)p=r.params;
  if(!r.valid)return null;
  const t=p.geometry==='t', mainUm=t?p.wc:Math.max(p.wd,p.wc/2), sideUm=t?p.wd:p.wc/2;
  const size=r.eligible?(t?r.length:r.diameter):0;
  const scale=Math.min(.65,90/Math.max(mainUm,sideUm),60/p.h,(t?260:130)/Math.max(size,1));
  const target=75/scale,base=10**Math.floor(Math.log10(target));
  const rulerUm=[1,2,5,10].map(n=>n*base).filter(n=>n<=target).at(-1)||base;
  return {t,scale,mainUm,sideUm,main:mainUm*scale,side:sideUm*scale,depth:p.h*scale,sizeUm:size,size:size*scale,rulerUm,ruler:rulerUm*scale};
}
const ink='#6b8561',line='#9bb494',fluid='#edf5eb',drop='#e5baa0';
const text=(x,y,s,extra='')=>`<text x="${x}" y="${y}" fill="${ink}" ${extra.includes('font-size=')?'':'font-size="11"'} ${extra}>${s}</text>`;
const dim=(x1,y1,x2,y2)=>`<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#ae967c" stroke-width="1"/><path d="M${x1} ${y1-4}V${y1+4}M${x2} ${y2-4}V${y2+4}" stroke="#ae967c"/>`;
export function diagramSvg(p,r){
  if(r.valid&&r.params)p=r.params;
  const g=diagramLayout(p,r);
  if(!g)return `<svg viewBox="0 0 640 340" role="img" aria-label="Invalid parameters; schematic cleared">${text(320,170,'Correct the parameters to update the schematic','text-anchor="middle"')}</svg>`;
  const {t,scale:s,main:w,side:v,depth:h}=g,x=220,y=150,l=30,edge=610,top=y-w/2,bottom=y+w/2;
  const defs=`<defs><marker id="flow-arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L6 3L0 6" fill="#7ca58c"/></marker></defs>`;
  const speed=u=>Math.min(8,Math.max(.3,50/Math.max(u,.01))).toFixed(3);
  const trace=(d,u,c='#7ca58c')=>`<path class="flow-trace" d="${d}" stroke="${c}" stroke-width="1.4" stroke-dasharray="5 5" marker-end="url(#flow-arrow)" style="animation-duration:${speed(u)}s"/>`;
  let structure='',droplets='',labels='';
  if(t){
    structure=`<path data-main-width-um="${p.wc}" data-main-width-px="${w}" data-side-width-px="${v}" d="M${l} ${top}H${x-v/2}V44H${x+v/2}V${top}H${edge}V${bottom}H${l}Z" fill="${fluid}" stroke="${line}" stroke-width="1.5"/>
      <path d="M${x-v*.28} 44H${x+v*.28}V${y-5}Q${x+v*.28} ${y+8} ${x+v*.5+15} ${y+8}" fill="none" stroke="${drop}" stroke-width="${Math.max(2,v*.45)}"/>
      ${trace(`M50 ${y}H${x-v/2-10}`,r.uc)}${trace(`M${x} 65V${top-10}`,r.ud,'#c28f75')}`;
    labels=text(35,top-17,`Qc = ${fmt(p.qc)} μL/min`)+text(x+v/2+14,60,`Qd = ${fmt(p.qd)} μL/min`)+text(35,bottom+23,`wc = ${fmt(p.wc,0)} μm`)+text(x,32,`wd = ${fmt(p.wd,0)} μm`,'text-anchor="middle"');
    if(r.eligible){const dx=320,dy=top;
      droplets=`<rect class="predicted-drop" data-size-kind="axial-length" data-size-um="${r.length}" data-size-px="${g.size}" x="${dx}" y="${dy}" width="${g.size}" height="${w}" rx="${Math.min(w/2,g.size/2)}" fill="${drop}" stroke="#c79879" stroke-width="1.2"/>
       ${dim(dx,bottom+15,dx+g.size,bottom+15)}${text(dx+g.size/2,bottom+34,`L ≈ ${fmt(r.length,1)} μm`,'text-anchor="middle"')}`;
    }else droplets=text(440,y+4,'No size estimate under these conditions','text-anchor="middle"');
  }else{
    // Symmetric inlet junction. No unprovided orifice/outlet dimensions are invented.
    structure=`<path data-main-width-um="${p.wd}" data-main-width-px="${p.wd*s}" data-side-width-px="${v}" d="M${l} ${y-p.wd*s/2}H${x-v/2}V44H${x+v/2}V${y-p.wd*s/2}H305V${y+p.wd*s/2}H${x+v/2}V245H${x-v/2}V${y+p.wd*s/2}H${l}Z" fill="${fluid}" stroke="${line}" stroke-width="1.5"/>
      <path d="M30 ${y}H275" stroke="${drop}" stroke-width="${Math.max(2,p.wd*s*.36)}"/>
      ${trace(`M45 ${y}H180`,r.ud,'#c28f75')}${trace(`M${x} 60V${y-p.wd*s/2-10}`,r.uc)}${trace(`M${x} 228V${y+p.wd*s/2+10}`,r.uc)}
      <path d="M327 70V240" stroke="#d9e3d0" stroke-dasharray="3 5"/>`;
    labels=text(30,y-p.wd*s/2-16,`Qd = ${fmt(p.qd)} μL/min`)+text(x+v/2+12,57,`Qc/2 = ${fmt(p.qc/2)} μL/min`)+text(x+v/2+12,239,`wc/2 = ${fmt(p.wc/2,0)} μm`)+text(30,y+p.wd*s/2+22,`wd = ${fmt(p.wd,0)} μm`);
    if(r.eligible){const cx=465,cy=145,rad=g.size/2;
      droplets=`<circle class="predicted-drop" data-size-kind="equivalent-sphere-diameter" data-size-um="${r.diameter}" data-size-px="${g.size}" cx="${cx}" cy="${cy}" r="${rad}" fill="${drop}" stroke="#c79879" stroke-width="1.2"/>
      ${dim(cx-rad,cy+rad+17,cx+rad,cy+rad+17)}${text(cx,cy+rad+36,`d_eq ≈ ${fmt(r.diameter,1)} μm`,'text-anchor="middle"')}`;
    }else droplets=text(465,145,'No size estimate under these conditions','text-anchor="middle"');
    labels+=text(465,55,'Equivalent-volume sphere','text-anchor="middle"')+text(465,232,'Unconfined; outlet shape not modeled','text-anchor="middle" font-size="10"');
  }
  const sectionW=(t?p.wc:p.wc/2)*s,sectionX=452;
  const section=`${text(448,264,t?'Main cross-section':'One continuous inlet cross-section')}<rect data-depth-um="${p.h}" data-depth-px="${h}" data-section-width-px="${sectionW}" x="${sectionX}" y="275" width="${sectionW}" height="${h}" fill="${fluid}" stroke="${line}"/><text x="${sectionX+sectionW+8}" y="${280+h/2}" fill="${ink}" font-size="10">h=${fmt(p.h,0)} μm</text>`;
  const ruler=`<path d="M30 294H${30+g.ruler}M30 290V298M${30+g.ruler} 290V298" stroke="${ink}" stroke-width="1.5"/>${text(30,315,`${fmt(g.rulerUm,0)} μm · same scale`)}${text(30,335,`Inlet lengths abbreviated：ℓc=${fmt(p.lc)} mm；ℓd=${fmt(p.ld)} mm`,'font-size="10"')}`;
  return `<svg viewBox="0 0 640 350" role="img" data-scale="${s}" aria-label="${t?'T-junction':'Flow focusing'} parameter-linked schematic, ${r.eligible?(t?'axial length '+fmt(r.length,1):'equivalent diameter '+fmt(r.diameter,1))+' µm':'size model unavailable'}. Cross-section shows depth.">${defs}${structure}${droplets}${labels}${section}${ruler}</svg>`;
}
