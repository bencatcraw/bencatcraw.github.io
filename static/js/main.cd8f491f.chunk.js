(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(7),s=a(1),i=a(0);const n=Object(s.createContext)(),r=e=>{let{children:t}=e;const[a,c]=Object(s.useState)("light");Object(s.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");c(e.matches?"dark":"light"),e.addEventListener("change",(e=>{c(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(n.Provider,{value:[{themeName:a,toggleTheme:()=>{const e="dark"===a?"light":"dark";localStorage.setItem("themeName",e),c(e)}}],children:t})},l={homepage:"https://bencatcraw.github.io",title:"BC."},o={name:"Ben Crawford",role:"Game Developer",description:"",resume:"https://example.com",social:{linkedin:"https://linkedin.com/in/bencatcraw/",github:"https://github.com/bencatcraw"}},h=[{name:"HAVEN ProjecTable",description:"A collaborative project between LAVA and HSEO focused on visualization of climate and energy data.",stack:["Unity","C#","ArcGIS"],sourceCode:"https://github.com/bencatcraw/HSEOHAVENTABLE",livePreview:"https://www.youtube.com/watch?v=U9C2qxI-Weg"},{name:"Cookie & Cream VR Cafe",description:"Cookie & Cream is a coop VR cooking game where the players play as cats. This game was created for ICS 486.",stack:["Unity","VR","Quest 3"],sourceCode:"https://github.com/bencatcraw/VRCATCAFE",livePreview:"https://drive.google.com/file/d/1qqZUKlRQVLEvvm8Fp6iyKTJQVUmy5ujA/view"},{name:"Life Before Death",description:"Life Before Death is a walking simulator/escape room game focused on interactive storytelling, diverse puzzles, and high quality graphics.",stack:["Unreal Engine 5","Blueprints","Quixel"],livePreview:"https://bcc394.wixsite.com/lifebeforedeath"},{name:"homebound",description:"homebound is a astmospheric puzzle platformer about a lonely astronaut and fluffy new friend. homebound is available for free on Steam.",stack:["Unity","Steam","Pixel Art"],livePreview:"https://store.steampowered.com/app/2568870/homebound/"},{name:"Mars Mech Mission",description:"A tower defense game about a lone dwarf who has to defend his space base from robotic crabs and scorpions. This game was created for the ICS 369.",stack:["Unity","C#"],sourceCode:"https://github.com/bencatcraw/I3T4/",livePreview:"https://bencatcraw.itch.io/mmm/"},{name:"AR Souveneir",description:'This project was created for my AR/VR Development class. The task was to create an interactable virtual souveneir that is tracked in real time on a surface such as this "merge cube"',stack:["Unity","AR"],sourceCode:"https://github.com/bencatcraw/ARCube",livePreview:"https://drive.google.com/file/d/1fqUwz0IlJJDpctqnZcUi0ydNmsvN8gkQ/view?usp=sharing"},{name:"Untitled Mech Game",description:"This game was created for the MechJam III game jam by the UH Manoa Game Dev Club. The game is about a mech that can switch between earth, water, and fire abilities that let it solve puzzles to progress through the levels.",stack:["Unity","C#"],livePreview:"https://bencatcraw.itch.io/untitled-mech-game"},{name:"Hawaii Healthcare Dashboard",description:"A dashboard that allows users to search for healthcare facilities and filter them by name, services, insurance, island, and facility type. Created for Hawaii Annual Code Challenge 2023",stack:["Meteor","React","MongoDB"],sourceCode:"https://github.com/bencatcraw/HACC2023"},{name:"Happening @ Manoa",description:"An application for members of the UH Manoa community to see what events are going on in their community as well as search for events that aligns with their interests.",stack:["Meteor","React","MongoDB"],sourceCode:"https://github.com/happeningatmanoa/happeningatmanoa",livePreview:"https://happeningatmanoa.github.io/"},{name:"CreateX Horror Experience",description:"This is a horror experience created using the CreateX lab at UH West Oahu. CreateX is an array of projectors that project videos and applications onto the walls and floors of the room to create immersive experiences.",stack:["Unity","CreateX","3D Projection"],sourceCode:"https://github.com/bencatcraw/VRARCREATEX3",livePreview:"https://drive.google.com/file/d/1HSnV7SnfJoOdOeAte26IjJ3HBAsbNIlA/view"}],j=["Unity","Unreal Engine","C#","Java","C++","HTML","CSS","JavaScript","TypeScript","React","Git"],m="bcc@hawaii.edu";var b=a(13),d=a.n(b),u=a(11),p=a.n(u),v=a(15),f=a.n(v),O=a(14),g=a.n(O);a(25);var x=()=>{const[{themeName:e,toggleTheme:t}]=Object(s.useContext)(n),[a,c]=Object(s.useState)(!1),r=()=>c(!a);return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:a?"flex":null},className:"nav__list",children:[h.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:r,className:"link link--nav",children:"Projects"})}):null,j.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:r,className:"link link--nav",children:"Skills"})}):null,m?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:r,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(i.jsx)(p.a,{}):Object(i.jsx)(d.a,{})}),Object(i.jsx)("button",{type:"button",onClick:r,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:a?Object(i.jsx)(g.a,{}):Object(i.jsx)(f.a,{})})]})};a(29);var w=()=>{const{homepage:e,title:t}=l;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(x,{})]})},k=a(8),C=a.n(k),N=a(16),_=a.n(N);a(30);var y=()=>{const{name:e,role:t,description:a,resume:c,social:s}=o;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:a&&a}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(C.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(_.a,{})})]})]})]})},A=a(6),S=a.n(A),E=a(17),U=a.n(E);a(32);var P=e=>{let{project:t}=e;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(i.jsx)("li",{className:"project__stack-item",children:e},S()())))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(C.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(U.a,{})})]})};a(33);var T=()=>h.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:h.map((e=>Object(i.jsx)(P,{project:e},S()())))})]}):null;a(34);var H=()=>j.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:j.map((e=>Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},S()())))})]}):null,R=a(18),I=a.n(R);a(35);var M=()=>{const[e,t]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top","aria-label":"top",children:Object(i.jsx)(I.a,{fontSize:"large"})})}):null};a(36);var V=()=>m?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:`mailto:${m}`,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;a(37);var B=()=>Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/rjshkhr/cleanfolio",className:"link footer__link",children:"Portfolio Template"})});a(38);var D=()=>{const[{themeName:e}]=Object(s.useContext)(n);return Object(i.jsxs)("div",{id:"top",className:`${e} app`,children:[Object(i.jsx)(w,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(y,{}),Object(i.jsx)(T,{}),Object(i.jsx)(H,{}),Object(i.jsx)(V,{})]}),Object(i.jsx)(M,{}),Object(i.jsx)(B,{})]})};a(39);Object(c.render)(Object(i.jsx)(r,{children:Object(i.jsx)(D,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.cd8f491f.chunk.js.map