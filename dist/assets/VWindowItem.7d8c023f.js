import{bb as X,p as W,m as M,e as P,g as Y,k as A,a6 as G,B as j,aT as O,r as T,l as h,a3 as F,c as m,y as I,u as H,G as _,aA as z,aK as D,aU as U,bc as q,aG as K,aV as J,w as Q,bd as Z,H as N,M as p,q as S,aa as ee}from"./index.3c7869e1.js";const te=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:i}=e,u=.5,s=16;e.offsetX=t-o,e.offsetY=i-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&i<n-s&&e.up(e),e.down&&i>n+s&&e.down(e))};function ne(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function oe(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),te(o)}function se(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function ie(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>ne(t,o),touchend:t=>oe(t,o),touchmove:t=>se(t,o)}}function ae(e,o){var d,v,c;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,i=(d=t==null?void 0:t.options)!=null?d:{passive:!0},u=(v=o.instance)==null?void 0:v.$.uid;if(!n||!u)return;const s=ie(o.value);n._touchHandlers=(c=n._touchHandlers)!=null?c:Object.create(null),n._touchHandlers[u]=s,X(s).forEach(g=>{n.addEventListener(g,s[g],i)})}function ue(e,o){var u,s;const t=(u=o.value)!=null&&u.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const i=t._touchHandlers[n];X(i).forEach(d=>{t.removeEventListener(d,i[d])}),delete t._touchHandlers[n]}const $={mounted:ae,unmounted:ue},ce=$,k=Symbol.for("vuetify:v-window"),L=Symbol.for("vuetify:v-window-group"),le=W({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...M(),...P()},"v-window"),ve=Y()({name:"VWindow",directives:{Touch:$},props:le(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=A(e),{isRtl:i}=G(),{t:u}=j(),s=O(e,L),d=T(),v=h(()=>i.value?!e.reverse:e.reverse),c=T(!1),g=h(()=>{const a=e.direction==="vertical"?"y":"x",f=(v.value?!c.value:c.value)?"-reverse":"";return`v-window-${a}${f}-transition`}),x=T(0),b=T(void 0),y=h(()=>s.items.value.findIndex(a=>s.selected.value.includes(a.id)));F(y,(a,r)=>{const f=s.items.value.length,w=f-1;f<=2?c.value=a<r:a===w&&r===0?c.value=!0:a===0&&r===w?c.value=!1:c.value=a<r}),D(k,{transition:g,isReversed:c,transitionCount:x,transitionHeight:b,rootRef:d});const l=h(()=>e.continuous||y.value!==0),B=h(()=>e.continuous||y.value!==s.items.value.length-1);function C(){l.value&&s.prev()}function E(){B.value&&s.next()}const R=h(()=>{const a=[],r={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${v.value?"right":"left"}`,onClick:s.prev,ariaLabel:u("$vuetify.carousel.prev")};a.push(l.value?t.prev?t.prev({props:r}):m(I,r,null):m("div",null,null));const f={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${v.value?"left":"right"}`,onClick:s.next,ariaLabel:u("$vuetify.carousel.next")};return a.push(B.value?t.next?t.next({props:f}):m(I,f,null):m("div",null,null)),a}),V=h(()=>e.touch===!1?e.touch:{...{left:()=>{v.value?C():E()},right:()=>{v.value?E():C()},start:r=>{let{originalEvent:f}=r;f.stopPropagation()}},...e.touch===!0?{}:e.touch});return H(()=>_(m(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value]},{default:()=>{var a,r;return[m("div",{class:"v-window__container",style:{height:b.value}},[(a=t.default)==null?void 0:a.call(t,{group:s}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[R.value])]),(r=t.additional)==null?void 0:r.call(t,{group:s})]}}),[[z("touch"),V.value]])),{group:s}}}),de=Y()({name:"VWindowItem",directives:{Touch:ce},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...U(),...q()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=K(k),i=J(e,L),{isBooted:u}=Q();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=T(!1),d=h(()=>n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function v(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function c(){var l;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=S((l=n.rootRef.value)==null?void 0:l.clientHeight)),n.transitionCount.value+=1)}function g(){v()}function x(l){!s.value||ee(()=>{!d.value||!s.value||!n||(n.transitionHeight.value=S(l.clientHeight))})}const b=h(()=>{const l=n.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof l!="string"?n.transition.value:l,onBeforeEnter:c,onAfterEnter:v,onEnterCancelled:g,onBeforeLeave:c,onAfterLeave:v,onLeaveCancelled:g,onEnter:x}:!1}),{hasContent:y}=Z(e,i.isSelected);return H(()=>m(p,{transition:b.value,disabled:!u.value},{default:()=>{var l;return[_(m("div",{class:["v-window-item",i.selectedClass.value]},[y.value&&((l=t.default)==null?void 0:l.call(t))]),[[N,i.isSelected.value]])]}})),{}}});export{ve as V,de as a,le as m};
