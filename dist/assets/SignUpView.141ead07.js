import{r as p,P as w,T as b,R as t,c as e,Z as s,S as n,J as k,y as i,x as _,V as v,b8 as f,b7 as C,bn as P,N as g,a0 as h,bo as S,bp as T}from"./index.3c7869e1.js";import{_ as U}from"./m-5.7bcc62f1.js";import{V as j}from"./VContainer.64861989.js";import{a as r,V as c}from"./VRow.626ad208.js";import{V as y}from"./VHover.76edd3d6.js";import{V as B}from"./VForm.81443d4b.js";import{V as F}from"./VCheckbox.da0bff6f.js";const I={class:"text-center text-h4 font-weight-bold"},N=s("span",{class:"text-yellow"}," Up ",-1),z=s("p",{class:"my-2 text-center text-h6 text-grey-darken-2"}," Create your new account ",-1),A=s("p",{class:"text-grey-darken-4 font-bold text-subtitle-2 text-center"}," _____ .\uFF61. .\uFF61. _____ ",-1),E=s("h1",{class:"my-2 text-center text-body-2 text-grey-darken-1 font-weight-bold"}," _____ .\uFF61. or use your Email for registeration .\uFF61. _____ ",-1),W={class:"d-sm-flex justify-space-between"},G={class:"my-4 text-center text-h6 text-grey-darken-1 secondry-title"},R={data:()=>({fieldType:"password",checkbox:!1}),methods:{switchField(){this.fieldType=this.fieldType==="password"?"text":"password"}}},D=Object.assign(R,{__name:"SignUpView",setup(H){const d=p(""),u=p(""),x=()=>{P(g(),d.value,u.value).then(l=>{console.log(l),console.log("Successfully registered!"),h.push("/")}).catch(l=>{console.log(l.code),alert(l.message)})},V=()=>{const l=new S;T(g(),l).then(o=>{console.log(o.user),h.push("/")}).catch(o=>{console.log(o.code)})};return(l,o)=>(w(),b(j,null,{default:t(()=>[e(c,{align:"center",justify:"center"},{default:t(()=>[e(r,{cols:"12",lg:"12",sm:"12"},{default:t(()=>[s("h1",I,[n(" Sign "),N,s("sup",null,[e(k,{class:"text-h6",size:"small",icon:"mdi-checkbox-multiple-marked-outline"})])]),z,A]),_:1})]),_:1}),e(c,{align:"center",justify:"center"},{default:t(()=>[e(r,{cols:"12",lg:"12",sm:"12",align:"center"},{default:t(()=>[e(y,null,{default:t(({isHovering:a,props:m})=>[e(i,_(m,{color:a?"yellow":void 0,variant:"outlined",icon:"mdi-google",class:"my-2",onClick:V}),null,16,["color"])]),_:1}),e(y,null,{default:t(({isHovering:a,props:m})=>[e(i,_(m,{color:a?"yellow":void 0,variant:"outlined",icon:"mdi-facebook",class:"my-2 mx-4"}),null,16,["color"])]),_:1}),E]),_:1})]),_:1}),e(c,{align:"center",justify:"center"},{default:t(()=>[e(r,{cols:"12",lg:"4",sm:"4",class:"mr-10"},{default:t(()=>[e(v,{src:U,alt:"m-1",contain:""})]),_:1}),e(r,{cols:"12",lg:"5",sm:"6",align:"center"},{default:t(()=>[e(B,null,{default:t(()=>[e(f,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=a=>d.value=a),variant:"outlined",color:"yellow-darken-1",type:"email",class:"px-3 pb-2",label:"Email","prepend-inner-icon":"mdi-email"},null,8,["modelValue"]),e(f,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=a=>u.value=a),variant:"outlined",color:"yellow-darken-1",class:"px-3 py-2",label:"Password","prepend-inner-icon":"mdi-lock",type:l.fieldType},null,8,["modelValue","type"]),e(F,{modelValue:l.checkbox,"onUpdate:modelValue":o[2]||(o[2]=a=>l.checkbox=a),label:"Show Password",value:"Show Password",class:"",onClick:C(l.switchField,["stop"])},null,8,["modelValue","onClick"]),s("div",W,[e(i,{variant:"tonal",class:"mb-3 text-capitalize",to:"/"},{default:t(()=>[n(" Cancel ")]),_:1}),e(i,{elevation:"0",class:"mb-3 ml-4 text-capitalize bg-yellow",onClick:x},{default:t(()=>[n(" Sign Up ")]),_:1})])]),_:1})]),_:1})]),_:1}),e(c,{align:"center",justify:"center"},{default:t(()=>[e(r,{cols:"12",lg:"12",sm:"12",align:"center"},{default:t(()=>[s("p",G,[n(" Your have account? "),e(i,{variant:"text",to:"/login",class:"font-weight-bold text-black text-decoration-underline"},{default:t(()=>[n(" Login ")]),_:1})])]),_:1})]),_:1})]),_:1}))}});export{D as default};