import{c as r,v as T,r as y,u as B,R as D,B as k,a as E,j as t,m as h,l as H,d as N,T as P,f as L,L as z,w as A,A as M,F as V,x as F,o as G}from"./index-501d9989.js";import{S as W}from"./single-column-5b601bd8.js";import{h as q,G as J,B as K,L as C,S as Q}from"./lautaro-andreani-xkBaqlcqeb4-unsplash-d631f23f.js";import{T as I}from"./Title-20e8a6af.js";import{H as U}from"./Highlight-9256b14e.js";var X=r((e,{radius:o,shadow:s})=>({root:{outline:0,WebkitTapHighlightColor:"transparent",display:"block",textDecoration:"none",color:e.colorScheme==="dark"?e.colors.dark[0]:e.black,backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.white,boxSizing:"border-box",borderRadius:e.fn.radius(o),boxShadow:e.shadows[s]||s||"none","&[data-with-border]":{border:`${T(1)} solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3]}`}}}));const Y=X;var Z=Object.defineProperty,g=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,b=(e,o,s)=>o in e?Z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,ee=(e,o)=>{for(var s in o||(o={}))_.call(o,s)&&b(e,s,o[s]);if(g)for(var s of g(o))O.call(o,s)&&b(e,s,o[s]);return e},se=(e,o)=>{var s={};for(var a in e)_.call(e,a)&&o.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&g)for(var a of g(e))o.indexOf(a)<0&&O.call(e,a)&&(s[a]=e[a]);return s};const oe={},R=y.forwardRef((e,o)=>{const s=B("Paper",oe,e),{className:a,children:i,radius:l,withBorder:w,shadow:c,unstyled:p,variant:n}=s,u=se(s,["className","children","radius","withBorder","shadow","unstyled","variant"]),{classes:d,cx:x}=Y({radius:l,shadow:c},{name:"Paper",unstyled:p,variant:n});return D.createElement(k,ee({className:x(d.root,a),"data-with-border":w||void 0,ref:o},u),i)});R.displayName="@mantine/core/Paper";const te=E(R),ae=[{id:"animated-components",title:"projects.0.title",type:"primary",link:"fully-extensible-component-design",overview:"projects.0.overview",image:q,category:["tags.ui","tags.component-design","tags.react","tags.mantine"]}],re=r((e,o)=>({root:{position:"relative",width:"100%",height:"100%",overflow:"hidden","*:not(:first-of-type)":{zIndex:1}},image:{position:"absolute",inset:"0 0 0 0",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:o?"100% auto":"cover",...o&&{backgroundColor:"#393a3fff"}}})),ne=e=>{const{classes:o}=re(e.isGif),[s,a]=y.useState(!1);return t.jsxs(h.div,{className:H(o.root,e.className),onHoverStart:()=>a(!0),onHoverEnd:()=>a(!1),children:[t.jsx(h.div,{className:o.image,style:{backgroundImage:`url(${e.image})`},animate:{transform:s?"scale(1.2) rotate(-1deg)":"scale(1) rotate(0)"}}),e.children]})},ie=r((e,o)=>{const s=e.colorScheme==="dark";return{root:{position:"relative",display:"flex",flexDirection:"column-reverse",alignItems:"center",":not(:nth-of-type(1))":{marginTop:e.spacing.lg}},overviewPlaceholder:{position:"relative",width:"100%"},imagePlaceholder:{position:"relative",width:"100%",height:350},overview:{position:"relative",width:"95%",top:-15,left:"5%",backgroundColor:s?e.colors.dark[6]:e.white,display:"flex",flexDirection:"column",justifyContent:"center",gap:e.spacing.md,zIndex:1},image:{width:"95% !important",border:`2px solid ${s?e.white:e.black}`,borderRadius:"255px 15px 225px 15px/15px 225px 15px 255px",overflow:"hidden"}}}),le=e=>{const{classes:o}=ie(e.alignment),{t:s}=N("showcase");return t.jsxs("div",{className:o.root,children:[t.jsx("div",{className:o.overviewPlaceholder,children:t.jsxs(te,{shadow:"sm",p:"xl",className:o.overview,withBorder:!0,children:[t.jsx(J,{position:"right",spacing:"xs",children:e.category.map((a,i)=>t.jsx(K,{size:"sm",radius:"md",children:s(a)},i))}),t.jsx(I,{children:s(e.title)}),t.jsx(P,{children:t.jsx(U,{highlight:["designed from scratch"],highlightColor:"yellow",highlightStyles:{padding:".3rem .2rem"},children:s(e.overview)})}),t.jsx(L,{component:z,to:e.link,variant:"outline",size:"md",children:s("links.view")})]})}),t.jsx("div",{className:o.imagePlaceholder,children:t.jsx(ne,{className:o.image,image:e.image})})]})},ce=r((e,o)=>({root:{},listContainer:{display:"flex",flexDirection:"row",gap:e.spacing.xl},list:{}})),de={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.175,staggerDirection:1}}},me={hidden:{opacity:0},show:{opacity:1}},he=h(C.Item),ge=e=>{const{classNames:o,styles:s,unstyled:a,className:i,list:l,icon:w,numberOfColumns:c=2,...p}=e,{classes:n,cx:u}=ce({},{name:"animated-list",classNames:o,styles:s,unstyled:a}),d=y.useRef(null),x=A(d),j=Math.ceil(l.length/c),$=[...Array(c)].map((S,f)=>{const m=f*j,v=m+j;return l.slice(m,v)});return t.jsx(M,{children:t.jsx(k,{component:"div",ref:d,className:u(n.root,e.className),...p,children:x&&t.jsx(h.div,{className:n.listContainer,variants:de,initial:"hidden",animate:"show",children:$.map((S,f)=>t.jsx(C,{className:n.list,spacing:"xs",size:"md",center:!0,c:e.c,icon:e.icon??t.jsx(V,{icon:F}),children:S.map((m,v)=>t.jsx(he,{variants:me,ta:"justify",children:m},v))},f))})})})},pe=r(e=>({root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:`calc(${e.spacing.xl} * 2)`}})),ue=e=>{const{classes:o}=pe(),{t:s}=N(["showcase"]),a=G();return t.jsxs("div",{className:o.root,children:[t.jsx(I,{order:2,mb:"xl",children:s("coming-soon.title")}),t.jsx(P,{align:"justify",children:s("coming-soon.intro")}),t.jsx(Q,{h:"xl"}),t.jsx(ge,{numberOfColumns:1,c:a.primaryColor,list:[s("coming-soon.animated-components"),s("coming-soon.nav-footer"),s("coming-soon.more")]})]})},xe=r(e=>({root:{}})),Se=()=>{const{classes:e}=xe(),o=ae.filter(s=>s.type==="primary");return t.jsxs(W,{title:"Showcase",children:[t.jsx("div",{className:e.root,children:o.map((s,a)=>t.jsx(le,{...s,alignment:a%2?"right":"left"},a))}),t.jsx(ue,{})]})};export{Se as Showcase,Se as default};
