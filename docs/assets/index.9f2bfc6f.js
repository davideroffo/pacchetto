import{r as d,o as a,c as l,w as f,S as b,u as $,a as _,b as g,_ as m,d as k,e as y,f as E,g as R,h as p,i as x,j as A,k as w,I as L,l as S,m as O}from"./vendor.c21276c9.js";const P=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};P();const j={setup(c){return(r,n)=>{const t=d("router-view");return a(),l(t,null,{default:f(({Component:e})=>[(a(),l(b,{onResolve:$(_.hydrationDone)},{default:f(()=>[(a(),l(g(e),{key:r.$route.path}))]),_:2},1032,["onResolve"]))]),_:1})}}},C={props:{error:Object}};function H(c,r,n,t,e,o){return a(),k("h1",null,"Error Page")}var I=m(C,[["render",H]]);const B=null,D=null,N=[],q=[],T=[],W=[],z={},F={};var i={title:null,base:null,meta:[],link:[],style:[],script:[],htmlAttrs:{},bodyAttrs:{}},K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",title:B,base:D,meta:N,link:q,style:T,script:W,htmlAttrs:z,bodyAttrs:F,default:i});const M={components:{Error:I,Router:j},setup(){const c=_.useIsomorphic();return typeof i=="function"?y(i(c)):y(i!=null?i:K),E(r=>{c.$error=r}),{error:R(()=>c.$error)}}};function V(c,r,n,t,e,o){const s=d("Error"),u=d("Router");return t.error?(a(),l(s,{key:0,error:t.error},null,8,["error"])):(a(),l(u,{key:1}))}var G=m(M,[["render",V]]);const J="modulepreload",h={},Q="/",U=function(r,n){return!n||n.length===0?r():Promise.all(n.map(t=>{if(t=`${Q}${t}`,t in h)return;h[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":J,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e)return new Promise((u,v)=>{s.addEventListener("load",u),s.addEventListener("error",v)})})).then(()=>r())};var X=()=>p.getRoutes(p.hydrateRoutes({"/views/index.vue":()=>U(()=>import("./index.b8c67671.js"),["assets/index.b8c67671.js","assets/vendor.c21276c9.js","assets/vendor.ab6be687.css"])}));const Y=O;async function Z(c){const r=await X(),n=x(G),t=A(),e=w({history:Y(),routes:r});return e.beforeEach(p.createBeforeEachHandler(r)),n.use(e),n.use(t),n.use(L,{components:S}),{ctx:c,app:n,head:t,router:e,routes:r}}Z().then(async({app:c,router:r})=>{await r.isReady(),c.mount("#app")});
