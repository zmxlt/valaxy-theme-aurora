import{d as h,u as k,y as q,o as r,a as p,F as N,B as w,M as L,I as g,g as v,C as y,z as T,D as M,c as S,S as b,i as l,L as D,r as F,f as A,w as $,K as V,e as z,N as Q}from"./app-e0df21d0.js";import{_ as R}from"./AuroraPostCollapse.vue_vue_type_script_setup_true_lang-6e6fb6f9.js";import{b as j,s as E,a as I,_ as K}from"./index-db455f76.js";const P={class:"tag-list"},W=["onClick"],G={class:"count"},H=h({__name:"AuroraTag",props:{tags:{}},setup(f){var t;const c=f,_=((t=k().value)==null?void 0:t.themeColors)||[],i=j(c.tags,_),u=q();function s(o){u.push({query:{tag:o}}),E(".post-collapse-container")}return(o,d)=>(r(),p("ul",P,[(r(!0),p(N,null,w(Array.from(c.tags).sort(),([n,a])=>{var e;return r(),p("li",{key:n.toString(),class:"tag",style:L((e=g(i).get(n))==null?void 0:e.style),onClick:C=>s(n.toString())},[v("span",null,y(n),1),v("span",G,"["+y(a.count)+"]",1)],12,W)}),128))]))}}),J={class:"tags"},O=h({__name:"AuroraTags",setup(f){const c=k(),m=T().name,_=I(c.value.menu,m),i=M(),u=q(),s=T(),t=S(()=>s.query.tag||""),o=b(),d=S(()=>i.postList.filter(e=>e.tags?typeof e.tags=="string"?e.tags===t.value:e.tags.includes(t.value):!1));function n(){const a=s.name;a&&u.push({name:a})}return(a,e)=>{const C=K,x=H,B=R;return r(),p("div",J,[l(C,{quote:g(_)},null,8,["quote"]),l(x,{tags:g(o)},null,8,["tags"]),l(B,{title:t.value,posts:d.value,back:n},null,8,["title","posts"])])}}}),Z=h({__name:"tags",setup(f){const m=D().value.comment||!1;return(_,i)=>{const u=O,s=F("router-view"),t=Q,o=V;return r(),A(o,null,{"main-content":$(()=>[l(u),l(s)]),"main-comment":$(()=>[g(m)?(r(),A(t,{key:0})):z("v-if",!0)]),_:1})}}});export{Z as default};
