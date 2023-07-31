import{aO as f,a2 as p,P as l,T as m,R as r,c as t,b8 as b,bg as h,Q as n,Z as c,aQ as _,U as k,_ as w,aP as S,V as x,bh as v,S as V,y as L}from"./index.3c7869e1.js";import{u as T}from"./cart.a06dfbd9.js";import{f as F}from"./furnitureDetailes.6230694d.js";import{L as D}from"./LoadingSpinner.5660e143.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";import{V as d,a as o}from"./VRow.626ad208.js";import{V as i}from"./VSheet.f14568ee.js";import{V as B}from"./VCardText.4efe58ee.js";import{V as N}from"./VContainer.64861989.js";const R={components:{LoaddingSpinner:D},data:()=>({furnitures:[],LoaddingSpinner:!1,selectedChips:"",selectedCategory:null,allItems:"",itemsTitle:null,itemsColor:null,itemsCategory:null,searchValue:"",errorMsg:"No resulte found !"}),computed:{filteredFurnitures(){return this.searchValue!=""&&this.searchValue?this.furnitures.filter(e=>{var s;return(s=e.title)==null?void 0:s.toLowerCase().includes(this.searchValue.toLowerCase())}):this.itemsTitle?this.furnitures.filter(e=>e.title===this.itemsTitle):this.itemsColor?this.furnitures.filter(e=>e.color===this.itemsColor):this.itemsColor&&this.itemsCategory?this.furnitures.filter(e=>e.color===this.itemsColor&&e.category===this.itemsCategory):this.itemsCategory?this.furnitures.filter(e=>e.category===this.itemsCategory):this.furnitures}},created(){this.loadFurnitures()},methods:{async loadFurnitures(){this.LoaddingSpinner=!0;try{let e=await fetch("http://localhost:3001/furnitures");this.furnitures=await e.json(),this.LoaddingSpinner=!1,console.log(e)}catch(e){console.error("Loadding Field",e.code)}},highlightSearchResults(e){if(this.searchValue){const s=new RegExp(this.searchValue,"i");return e.replace(s,`<span class="highlightText">${this.searchValue}</span>`)}},...f(F,["showDetailes"]),...f(T,["addToCart"])}},U={key:0},$={key:1},j={key:0,class:"my-16 error-msg"},M={class:"text-h4 text-center text-grey-darken-1"},z=c("p",{class:"text-h4 text-center text-grey-darken-1"}," \u0CA5_\u0CA5 ",-1),E={class:"text-body-1 text-capitalize secondry-font"},H=["innerHTML"];function I(e,s,g,A,O,u){const y=p("LoaddingSpinner"),C=p("sapn");return l(),m(N,null,{default:r(()=>[t(d,null,{default:r(()=>[t(o,{cols:"12",lg:"12",sm:"12"},{default:r(()=>[t(b,{modelValue:e.searchValue,"onUpdate:modelValue":s[0]||(s[0]=a=>e.searchValue=a),clearable:"",variant:"outlined",color:"black",label:"Search...","append-inner-icon":"mdi-magnify"},null,8,["modelValue"])]),_:1})]),_:1}),t(d,{align:"center",justify:"center"},{default:r(()=>[t(o,{cols:"12",lg:"4",sm:"3"},{default:r(()=>[t(i,{class:""},{default:r(()=>[t(h,{variant:"outlined",clearable:"",label:"Type Furniture",modelValue:e.itemsTitle,"onUpdate:modelValue":s[1]||(s[1]=a=>e.itemsTitle=a),items:["chestefield","egg chair","mid-century","occasional","wingback","scalloped"],class:"rounded-circle"},null,8,["modelValue"])]),_:1})]),_:1}),t(o,{cols:"12",lg:"4",sm:"3"},{default:r(()=>[t(i,{class:""},{default:r(()=>[t(h,{variant:"outlined",clearable:"",label:"Color",modelValue:e.itemsColor,"onUpdate:modelValue":s[2]||(s[2]=a=>e.itemsColor=a),items:["red","green","blue","white","black","purple","yellow","silver","other"],class:"rounded-circle"},null,8,["modelValue"])]),_:1})]),_:1}),t(o,{cols:"12",lg:"4",sm:"3"},{default:r(()=>[t(i,{class:""},{default:r(()=>[t(h,{variant:"outlined",clearable:"",label:"Category",modelValue:e.itemsCategory,"onUpdate:modelValue":s[3]||(s[3]=a=>e.itemsCategory=a),items:["sofa","chair"],class:"rounded-circle"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e.LoaddingSpinner?(l(),n("div",U,[t(y)])):(l(),n("div",$,[t(d,{align:"center",justify:"center"},{default:r(()=>[e.searchValue&&!u.filteredFurnitures.length?(l(),n("div",j,[c("p",M,_(e.errorMsg),1),z])):k("",!0),(l(!0),n(w,null,S(u.filteredFurnitures,a=>(l(),m(o,{key:a.id,cols:"12",lg:"4",sm:"12",align:"center"},{default:r(()=>[t(i,{align:"center",class:"border px-3"},{default:r(()=>[t(i,{height:"200",class:"d-flex align-start"},{default:r(()=>[t(x,{src:a.thumbnail,"lazy-src":a.thumbnail,alt:"notFound",width:"200","aspect-ratio":"1",class:"bg-gry-lighten-2"},{placeholder:r(()=>[t(d,{class:"fill-height align-center justify-center ma-0"},{default:r(()=>[t(v,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:2},1032,["src","lazy-src"])]),_:2},1024),t(i,{class:"d-flex align-start mb-6 border",width:"200",height:"100"},{default:r(()=>[t(B,null,{default:r(()=>[t(C,{class:"mt-2 text-h6 font-weight-black text-center text-grey-darken-3"},{default:r(()=>[V(" $\u2022"+_(a.price),1)]),_:2},1024),c("h1",E,[c("span",{class:"text-center text-lowercase",innerHTML:u.highlightSearchResults(a.title)||a.title},null,8,H)])]),_:2},1024)]),_:2},1024),t(L,{class:"my-2 bg-black hover-btn",block:"",variant:"text","append-icon":"mdi-arrow-right",to:{name:"productDetailes",params:{id:a.id}},onClick:Z=>e.showDetailes(a)},{default:r(()=>[V(" detailes ")]),_:2},1032,["to","onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]))]),_:1})}const Q=P(R,[["render",I]]),re={__name:"ProductsView",setup(e){return(s,g)=>(l(),m(Q))}};export{re as default};
