import{N as c,bs as d,P as m,T as f,R as a,c as s,S as p,aQ as t,Z as r}from"./index.3c7869e1.js";import{V}from"./VContainer.64861989.js";import{c as h,V as g}from"./VCard.28f18870.js";import{V as _}from"./VCardText.4efe58ee.js";const D={props:{userData:Object}},w=Object.assign(D,{__name:"UserProfileView",setup(e){const n=c();return d(n,email,password).then(l=>{const u=l.user;firebase.firestore().collection("users").doc(u.uid).get().then(o=>{const i=o.data();this.$router.push({name:"user-profile",params:{userData:i}})})}),(l,u)=>(m(),f(V,null,{default:a(()=>[s(g,null,{default:a(()=>[s(h,null,{default:a(()=>[p(t(e.userData.displayName),1)]),_:1}),s(_,null,{default:a(()=>[r("p",null,"Email: "+t(e.userData.email),1),r("p",null,"Age: "+t(e.userData.age),1),r("p",null,"Gender: "+t(e.userData.gender),1)]),_:1})]),_:1})]),_:1}))}});export{w as default};
