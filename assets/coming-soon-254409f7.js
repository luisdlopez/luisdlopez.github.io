import{r as p,u,R as d,B as _,d as h,e as x,j as n,T as v,c as y}from"./index-3fe872b9.js";import{A as g}from"./animated-list-324cfce6.js";var j=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,i=(t,r,e)=>r in t?j(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,w=(t,r)=>{for(var e in r||(r={}))l.call(r,e)&&i(t,e,r[e]);if(a)for(var e of a(r))m.call(r,e)&&i(t,e,r[e]);return t},O=(t,r)=>{var e={};for(var o in t)l.call(t,o)&&r.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&a)for(var o of a(t))r.indexOf(o)<0&&m.call(t,o)&&(e[o]=t[o]);return e};const P={w:0,h:0},c=p.forwardRef((t,r)=>{const e=u("Space",P,t),{w:o,h:s}=e,f=O(e,["w","h"]);return d.createElement(_,w({ref:r,w:o,miw:o,h:s,mih:s},f))});c.displayName="@mantine/core/Space";const S=y(t=>({root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}})),R=t=>{const{classes:r}=S(),{t:e}=h(["showcase"]),o=x();return n.jsxs("div",{className:r.root,children:[n.jsx(v,{align:"justify",children:e("coming-soon.intro")}),n.jsx(c,{h:"xl"}),n.jsx(g,{numberOfColumns:1,c:o.primaryColor,list:[e("coming-soon.animated-components"),e("coming-soon.nav-footer"),e("coming-soon.more")]})]})};export{R as ComingSoon,R as default};
