import{d as F,u as I,L as y,O as N,z as w,o as s,a as l,I as e,f,e as d,F as x,B as E,g as t,C as $,r as q,w as g,K as L,i as h,N as V}from"./app-e0df21d0.js";import{a as D,o as k,_ as Q}from"./index-db455f76.js";const b={class:"friends"},z={key:1,class:"friend-list"},K={class:"site-img"},M=["src"],O={class:"site-info"},R={class:"avatar"},S=["src"],T={class:"name"},U=["href"],W=F({__name:"AuroraFriends",setup(B){const n=I(),u=n.value.defaultFriendAvatarImage||"",v=n.value.defaultFriendBgImage||"",a=y(),o=typeof a.value.links=="string"?N(a.value.links):a.value.links,_=w().name,r=D(n.value.menu,_);return(p,i)=>{const C=Q;return s(),l("div",b,[e(r)?(s(),f(C,{key:0,quote:e(r)},null,8,["quote"])):d("v-if",!0),e(o)?(s(),l("ul",z,[(s(!0),l(x,null,E(e(o),(c,A)=>(s(),l("li",{key:A,class:"friend"},[t("div",K,[t("img",{src:c.siteImg,alt:"siteImg",onError:i[0]||(i[0]=m=>e(k)(m,e(v)))},null,40,M)]),t("div",O,[t("div",R,[t("img",{src:c.avatar,alt:"avatar",onError:i[1]||(i[1]=m=>e(k)(m,e(u)))},null,40,S)]),t("div",T,$(c.name),1)]),t("a",{href:c.siteUrl,target:"_blank",class:"site-link"},null,8,U)]))),128))])):d("v-if",!0)])}}}),H=F({__name:"friends",setup(B){const u=y().value.comment||!1;return(v,a)=>{const o=W,_=q("router-view"),r=V,p=L;return s(),f(p,null,{"main-content":g(()=>[h(o),h(_)]),"main-comment":g(()=>[e(u)?(s(),f(r,{key:0})):d("v-if",!0)]),_:1})}}});export{H as default};
