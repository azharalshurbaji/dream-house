import{g as P,aX as C,bl as g,bq as I,aZ as A,aJ as y,l as B,u as F,a_ as _,a$ as $,br as t,c as o,x as a,b4 as R}from"./index.3c7869e1.js";const N=P()({name:"VCheckbox",inheritAttrs:!1,props:{...C(),...g(I(),["inline"])},emits:{"update:focused":e=>!0},setup(e,r){let{attrs:c,slots:s}=r;const{isFocused:u,focus:n,blur:i}=A(e),l=y(),d=B(()=>e.id||`checkbox-${l}`);return F(()=>{const[b,p]=_(c),[m,q]=$(e),[f,D]=t.filterProps(e);return o(R,a({class:"v-checkbox"},b,m,{id:d.value,focused:u.value}),{...s,default:k=>{let{id:x,messagesId:h,isDisabled:V,isReadonly:v}=k;return o(t,a(f,{id:x.value,"aria-describedby":h.value,disabled:V.value,readonly:v.value},p,{onFocus:n,onBlur:i}),s)}})}),{}}});export{N as V};
