import{r as B,l as w,q as P,L as q,a3 as Y,a4 as Z,a5 as ne,g as F,a as oe,b as le,d as ue,m as ie,e as U,a6 as j,k as G,h as re,f as $,t as X,i as se,a7 as ce,j as ve,a8 as de,v as me,w as fe,a9 as he,aa as ge,ab as ye,n as we,u as J,c as k,x as be,ac as Se,_ as ke}from"./index.3c7869e1.js";import{m as Ee,u as Me,a as pe,c as Te}from"./VMain.99dfcc35.js";function xe(e){let{rootEl:s,isSticky:i,layoutItemStyles:u}=e;const a=B(!1),t=B(0),d=w(()=>{const m=typeof a.value=="boolean"?"top":a.value;return[i.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[m]:P(t.value)}:{top:u.value.top}]});q(()=>{Y(i,m=>{m?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),Z(()=>{document.removeEventListener("scroll",b)});let h=0;function b(){var g;const m=h>window.scrollY?"up":"down",o=s.value.getBoundingClientRect(),c=parseFloat((g=u.value.top)!=null?g:0),v=window.scrollY-Math.max(0,t.value-c),f=o.height+Math.max(t.value,c)-window.scrollY-window.innerHeight;o.height<window.innerHeight-c?(a.value="top",t.value=c):m==="up"&&a.value==="bottom"||m==="down"&&a.value==="top"?(t.value=window.scrollY+o.top,a.value=!0):m==="down"&&f<=0?(t.value=0,a.value="bottom"):m==="up"&&v<=0&&(t.value=o.top+v,a.value="top"),h=window.scrollY}return{isStuck:a,stickyStyles:d}}const Be=100,Ce=20;function A(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function z(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let i=e.length-1;i>0;i--){if(e[i].t===e[i-1].t)continue;const u=A(s),a=(e[i].d-e[i-1].d)/(e[i].t-e[i-1].t);s+=(a-u)*Math.abs(a),i===e.length-1&&(s*=.5)}return A(s)*1e3}function Ve(){const e={};function s(a){Array.from(a.changedTouches).forEach(t=>{var h;((h=e[t.identifier])!=null?h:e[t.identifier]=new ne(Ce)).push([a.timeStamp,t])})}function i(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function u(a){var m;const t=(m=e[a])==null?void 0:m.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const d=t[0],h=[],b=[];for(const o of t){if(d[0]-o[0]>Be)break;h.push({t:o[0],d:o[1].clientX}),b.push({t:o[0],d:o[1].clientY})}return{x:z(h),y:z(b),get direction(){const{x:o,y:c}=this,[v,f]=[Math.abs(o),Math.abs(c)];return v>f&&o>=0?"right":v>f&&o<=0?"left":f>v&&c>=0?"down":f>v&&c<=0?"up":Re()}}}return{addMovement:s,endTouch:i,getVelocity:u}}function Re(){throw new Error}function He(e){let{isActive:s,isTemporary:i,width:u,touchless:a,position:t}=e;q(()=>{window.addEventListener("touchstart",T,{passive:!0}),window.addEventListener("touchmove",C,{passive:!1}),window.addEventListener("touchend",x,{passive:!0})}),Z(()=>{window.removeEventListener("touchstart",T),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",x)});const d=w(()=>["left","right"].includes(t.value)),{addMovement:h,endTouch:b,getVelocity:m}=Ve();let o=!1;const c=B(!1),v=B(0),f=B(0);let g;function H(n,l){return(t.value==="left"?n:t.value==="right"?document.documentElement.clientWidth-n:t.value==="top"?n:t.value==="bottom"?document.documentElement.clientHeight-n:R())-(l?u.value:0)}function L(n){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const r=t.value==="left"?(n-f.value)/u.value:t.value==="right"?(document.documentElement.clientWidth-n-f.value)/u.value:t.value==="top"?(n-f.value)/u.value:t.value==="bottom"?(document.documentElement.clientHeight-n-f.value)/u.value:R();return l?Math.max(0,Math.min(1,r)):r}function T(n){if(a.value)return;const l=n.changedTouches[0].clientX,r=n.changedTouches[0].clientY,y=25,M=t.value==="left"?l<y:t.value==="right"?l>document.documentElement.clientWidth-y:t.value==="top"?r<y:t.value==="bottom"?r>document.documentElement.clientHeight-y:R(),p=s.value&&(t.value==="left"?l<u.value:t.value==="right"?l>document.documentElement.clientWidth-u.value:t.value==="top"?r<u.value:t.value==="bottom"?r>document.documentElement.clientHeight-u.value:R());(M||p||s.value&&i.value)&&(o=!0,g=[l,r],f.value=H(d.value?l:r,s.value),v.value=L(d.value?l:r),b(n),h(n))}function C(n){const l=n.changedTouches[0].clientX,r=n.changedTouches[0].clientY;if(o){if(!n.cancelable){o=!1;return}const M=Math.abs(l-g[0]),p=Math.abs(r-g[1]);(d.value?M>p&&M>3:p>M&&p>3)?(c.value=!0,o=!1):(d.value?p:M)>3&&(o=!1)}if(!c.value)return;n.preventDefault(),h(n);const y=L(d.value?l:r,!1);v.value=Math.max(0,Math.min(1,y)),y>1?f.value=H(d.value?l:r,!0):y<0&&(f.value=H(d.value?l:r,!1))}function x(n){if(o=!1,!c.value)return;h(n),c.value=!1;const l=m(n.changedTouches[0].identifier),r=Math.abs(l.x),y=Math.abs(l.y);(d.value?r>y&&r>400:y>r&&y>3)?s.value=l.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||R()):s.value=v.value>.5}const E=w(()=>c.value?{transform:t.value==="left"?`translateX(calc(-100% + ${v.value*u.value}px))`:t.value==="right"?`translateX(calc(100% - ${v.value*u.value}px))`:t.value==="top"?`translateY(calc(-100% + ${v.value*u.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${v.value*u.value}px))`:R(),transition:"none"}:void 0);return{isDragging:c,dragProgress:v,dragStyles:E}}function R(){throw new Error}const Le=["start","end","left","right","top","bottom"],_e=F()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Le.includes(e)},sticky:Boolean,...oe(),...le(),...Ee(),...ue(),...ie({tag:"nav"}),...U()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:i,emit:u,slots:a}=s;const{isRtl:t}=j(),{themeClasses:d}=G(e),{borderClasses:h}=re(e),{backgroundColorClasses:b,backgroundColorStyles:m}=$(X(e,"color")),{elevationClasses:o}=se(e),{mobile:c}=ce(),{roundedClasses:v}=ve(e),f=de(),g=me(e,"modelValue",null,S=>!!S),{ssrBootStyles:H}=fe(),L=B(),T=B(!1),C=w(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),x=w(()=>he(e.location,t.value)),E=w(()=>!e.permanent&&(c.value||e.temporary)),n=w(()=>e.sticky&&!E.value&&x.value!=="bottom");e.expandOnHover&&e.rail!=null&&Y(T,S=>u("update:rail",!S)),e.disableResizeWatcher||Y(E,S=>!e.permanent&&ge(()=>g.value=!S)),!e.disableRouteWatcher&&f&&Y(f.currentRoute,()=>E.value&&(g.value=!1)),Y(()=>e.permanent,S=>{S&&(g.value=!0)}),ye(()=>{e.modelValue!=null||E.value||(g.value=e.permanent||!c.value)});const{isDragging:l,dragProgress:r,dragStyles:y}=He({isActive:g,isTemporary:E,width:C,touchless:X(e,"touchless"),position:x}),M=w(()=>{const S=E.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):C.value;return l.value?S*r.value:S}),{layoutItemStyles:p,layoutRect:V,layoutItemScrimStyles:K}=Me({id:e.name,order:w(()=>parseInt(e.order,10)),position:x,layoutSize:M,elementSize:C,active:w(()=>g.value||l.value),disableTransitions:w(()=>l.value),absolute:w(()=>e.absolute||n.value&&typeof _.value!="string")}),{isStuck:_,stickyStyles:Q}=xe({rootEl:L,isSticky:n,layoutItemStyles:p}),I=$(w(()=>typeof e.scrim=="string"?e.scrim:null)),ee=w(()=>({...l.value?{opacity:r.value*.2,transition:"none"}:void 0,...V.value?{left:P(V.value.left),right:P(V.value.right),top:P(V.value.top),bottom:P(V.value.bottom)}:void 0,...K.value}));we({VList:{bgColor:"transparent"}});function te(){T.value=!0}function ae(){T.value=!1}return J(()=>{const S=a.image||e.image;return k(ke,null,[k(e.tag,be({ref:L,onMouseenter:te,onMouseleave:ae,class:["v-navigation-drawer",`v-navigation-drawer--${x.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":E.value,"v-navigation-drawer--active":g.value,"v-navigation-drawer--sticky":n.value},d.value,b.value,h.value,o.value,v.value],style:[m.value,p.value,y.value,H.value,Q.value]},i),{default:()=>{var N,W,D,O;return[S&&k("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(N=a.image)==null?void 0:N.call(a,{image:e.image}):k("img",{src:e.image,alt:""},null)]),a.prepend&&k("div",{class:"v-navigation-drawer__prepend"},[(W=a.prepend)==null?void 0:W.call(a)]),k("div",{class:"v-navigation-drawer__content"},[(D=a.default)==null?void 0:D.call(a)]),a.append&&k("div",{class:"v-navigation-drawer__append"},[(O=a.append)==null?void 0:O.call(a)])]}}),k(Se,{name:"fade-transition"},{default:()=>[E.value&&(l.value||g.value)&&!!e.scrim&&k("div",{class:["v-navigation-drawer__scrim",I.backgroundColorClasses.value],style:[ee.value,I.backgroundColorStyles.value],onClick:()=>g.value=!1},null)]})])}),{isStuck:_}}});const Ie=F()({name:"VApp",props:{...pe({fullHeight:!0}),...U()},setup(e,s){let{slots:i}=s;const u=G(e),{layoutClasses:a,layoutStyles:t,getLayoutItem:d,items:h,layoutRef:b}=Te(e),{rtlClasses:m}=j();return J(()=>{var o;return k("div",{ref:b,class:["v-application",u.themeClasses.value,a.value,m.value],style:t.value},[k("div",{class:"v-application__wrap"},[(o=i.default)==null?void 0:o.call(i)])])}),{getLayoutItem:d,items:h,theme:u}}});export{_e as V,Ie as a};
