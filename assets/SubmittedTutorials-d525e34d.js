import{r,j as s,L as o}from"./index-8f3f92da.js";import{d as l}from"./firebase-560709da.js";function c(){const[a,d]=r.useState([]);return r.useEffect(()=>{l.collection("tutorials").where("approved","==",!0).get().then(t=>{const e=[];t.forEach(i=>{e.push({id:i.id,...i.data()})}),d(e)})},[]),s.jsxs("div",{children:[s.jsx("h1",{children:"Submitted Tutorials"}),a.map(t=>s.jsx("div",{children:s.jsxs(o,{to:`/tutorial/${t.id}`,children:[s.jsx("h2",{children:t.title}),s.jsx("img",{src:t.thumbnail,alt:t.title})]})},t.id))]})}export{c as default};