import{r as o,u as a,j as e}from"./index-8f3f92da.js";import{d as c}from"./firebase-560709da.js";function m(n){const[t,s]=o.useState(null),{id:i}=a();return o.useEffect(()=>{c.collection("tutorials").doc(i).get().then(r=>{if(r.exists){const l={id:r.id,...r.data()};s(l)}else console.log("No such document!")}).catch(r=>{console.log("Error getting document:",r)})},[i]),t?e.jsxs("div",{children:[e.jsx("h1",{children:t.title}),e.jsx("img",{src:t.thumbnail,alt:t.title}),e.jsx("p",{children:t.description}),e.jsx("iframe",{title:t.title,width:"560",height:"315",src:t.video,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):e.jsx("div",{children:"Loading..."})}export{m as default};