import{r as e,j as s,L as l}from"./index-8f3f92da.js";import{d}from"./firebase-560709da.js";function c(){const[o,a]=e.useState([]);return e.useEffect(()=>{d.collection("tutorials").where("approved","==",!0).get().then(t=>{const i=[];t.forEach(r=>{i.push({id:r.id,...r.data()})}),a(i)})},[]),s.jsxs("div",{children:[s.jsx("h1",{children:"Tutorial List"}),s.jsx("ul",{children:o.map(t=>s.jsx("li",{children:s.jsx(l,{to:`/tutorial/${t.id}`,children:t.title})},t.id))})]})}export{c as default};