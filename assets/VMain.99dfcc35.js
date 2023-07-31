import{p as _,aG as E,l as i,r as B,aH as $,a1 as te,q as R,aI as q,L as oe,aJ as ae,aK as D,aL as ne,aM as se,a4 as le,aN as ue,g as ie,m as re,w as ce,u as ve,c as U}from"./index.3c7869e1.js";const V=Symbol.for("vuetify:layout"),X=Symbol.for("vuetify:layout-item"),Z=1e3,pe=_({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),ge=_({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function de(){const a=E(V);if(!a)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:a.getLayoutItem,mainRect:a.mainRect,mainStyles:a.mainStyles}}function Ie(a){var y;const r=E(V);if(!r)throw new Error("[Vuetify] Could not find injected layout");const n=(y=a.id)!=null?y:`layout-item-${ae()}`,c=q("useLayoutItem");D(X,{id:n});const s=B(!1);ne(()=>s.value=!0),se(()=>s.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:u}=r.register(c,{...a,active:i(()=>s.value?!1:a.active.value),id:n});return le(()=>r.unregister(n)),{layoutItemStyles:l,layoutRect:r.layoutRect,layoutItemScrimStyles:u}}const ye=(a,r,n,c)=>{let s={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...s}}];for(const u of a){const y=r.get(u),g=n.get(u),z=c.get(u);if(!y||!g||!z)continue;const I={...s,[y.value]:parseInt(s[y.value],10)+(z.value?parseInt(g.value,10):0)};l.push({id:u,layer:I}),s=I}return l};function be(a){const r=E(V,null),n=i(()=>r?r.rootZIndex.value-100:Z),c=B([]),s=$(new Map),l=$(new Map),u=$(new Map),y=$(new Map),g=$(new Map),{resizeRef:z,contentRect:I}=te(),F=i(()=>{var e;const t=new Map,v=(e=a.overlaps)!=null?e:[];for(const m of v.filter(o=>o.includes(":"))){const[o,d]=m.split(":");if(!c.value.includes(o)||!c.value.includes(d))continue;const p=s.get(o),S=s.get(d),L=l.get(o),M=l.get(d);!p||!S||!L||!M||(t.set(d,{position:p.value,amount:parseInt(L.value,10)}),t.set(o,{position:S.value,amount:-parseInt(M.value,10)}))}return t}),b=i(()=>{const t=[...new Set([...u.values()].map(e=>e.value))].sort((e,m)=>e-m),v=[];for(const e of t){const m=c.value.filter(o=>{var d;return((d=u.get(o))==null?void 0:d.value)===e});v.push(...m)}return ye(v,s,l,y)}),H=i(()=>!Array.from(g.values()).some(t=>t.value)),h=i(()=>b.value[b.value.length-1].layer),G=i(()=>({"--v-layout-left":R(h.value.left),"--v-layout-right":R(h.value.right),"--v-layout-top":R(h.value.top),"--v-layout-bottom":R(h.value.bottom),...H.value?void 0:{transition:"none"}})),x=i(()=>b.value.slice(1).map((t,v)=>{let{id:e}=t;const{layer:m}=b.value[v],o=l.get(e),d=s.get(e);return{id:e,...m,size:Number(o.value),position:d.value}})),N=t=>x.value.find(v=>v.id===t),C=q("createLayout"),T=B(!1);oe(()=>{T.value=!0}),D(V,{register:(t,v)=>{let{id:e,order:m,position:o,layoutSize:d,elementSize:p,active:S,disableTransitions:L,absolute:M}=v;u.set(e,m),s.set(e,o),l.set(e,d),y.set(e,S),L&&g.set(e,L);const K=ue(X,C==null?void 0:C.vnode).indexOf(t);K>-1?c.value.splice(K,0,e):c.value.push(e);const j=i(()=>x.value.findIndex(w=>w.id===e)),O=i(()=>n.value+b.value.length*2-j.value*2),Y=i(()=>{const w=o.value==="left"||o.value==="right",P=o.value==="right",ee=o.value==="bottom",k={[o.value]:0,zIndex:O.value,transform:`translate${w?"X":"Y"}(${(S.value?0:-110)*(P||ee?-1:1)}%)`,position:M.value||n.value!==Z?"absolute":"fixed",...H.value?void 0:{transition:"none"}};if(!T.value)return k;const f=x.value[j.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const A=F.value.get(e);return A&&(f[A.position]+=A.amount),{...k,height:w?`calc(100% - ${f.top}px - ${f.bottom}px)`:p.value?`${p.value}px`:void 0,left:P?void 0:`${f.left}px`,right:P?`${f.right}px`:void 0,top:o.value!=="bottom"?`${f.top}px`:void 0,bottom:o.value!=="top"?`${f.bottom}px`:void 0,width:w?p.value?`${p.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),Q=i(()=>({zIndex:O.value-1}));return{layoutItemStyles:Y,layoutItemScrimStyles:Q,zIndex:O}},unregister:t=>{u.delete(t),s.delete(t),l.delete(t),y.delete(t),g.delete(t),c.value=c.value.filter(v=>v!==t)},mainRect:h,mainStyles:G,getLayoutItem:N,items:x,layoutRect:I,rootZIndex:n});const J=i(()=>["v-layout",{"v-layout--full-height":a.fullHeight}]),W=i(()=>({zIndex:n.value,position:r?"relative":void 0,overflow:r?"hidden":void 0}));return{layoutClasses:J,layoutStyles:W,getLayoutItem:N,items:x,layoutRect:I,layoutRef:z}}const he=ie()({name:"VMain",props:{scrollable:Boolean,...re({tag:"main"})},setup(a,r){let{slots:n}=r;const{mainStyles:c}=de(),{ssrBootStyles:s}=ce();return ve(()=>U(a.tag,{class:["v-main",{"v-main--scrollable":a.scrollable}],style:[c.value,s.value]},{default:()=>{var l,u;return[a.scrollable?U("div",{class:"v-main__scroller"},[(l=n.default)==null?void 0:l.call(n)]):(u=n.default)==null?void 0:u.call(n)]}})),{}}});export{he as V,pe as a,be as c,ge as m,Ie as u};