(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4369)}])},3481:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(5893),r=n(7348),o=n.n(r),s=n(5368),a=n(6447),c=n(6860),l=function(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})})},u=function(e){let{title:t,image:n,date:r,location:u,id:d}=e,h=new Date(r).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),m=u.replace(", ","\n");return(0,i.jsxs)("li",{className:o().item,children:[(0,i.jsx)("img",{src:"/"+n,alt:t}),(0,i.jsxs)("div",{className:o().content,children:[(0,i.jsxs)("div",{className:o().summary,children:[(0,i.jsx)("h2",{children:t}),(0,i.jsxs)("div",{className:o().date,children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)("time",{children:h})]}),(0,i.jsxs)("div",{className:o().address,children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)("address",{children:m})]})]}),(0,i.jsx)("div",{className:o().actions,children:(0,i.jsxs)(s.Z,{link:"/events/".concat(d),children:[(0,i.jsx)("span",{children:"Explore event"}),(0,i.jsx)("span",{className:o().icon,children:(0,i.jsx)(l,{})})]})})]})]})},d=n(5508),h=n.n(d),m=function(e){let{items:t}=e;return(0,i.jsx)("ul",{className:h().list,children:t.map(e=>(0,i.jsx)(u,{id:e.id,title:e.title,location:e.location,date:e.date,image:e.image},e.id))})}},6860:function(e,t,n){"use strict";var i=n(5893);t.Z=function(){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}},6447:function(e,t,n){"use strict";var i=n(5893);t.Z=function(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}},5368:function(e,t,n){"use strict";var i=n(5893),r=n(1664),o=n.n(r),s=n(9932),a=n.n(s);t.Z=function(e){return e.link?(0,i.jsx)(o(),{href:e.link,className:a().btn,children:e.children}):(0,i.jsx)("button",{className:a().btn,onClick:e.onClick,children:e.children})}},7397:function(e,t,n){"use strict";n.d(t,{IP:function(){return o},N6:function(){return r},Y:function(){return a},nk:function(){return s}});let i=[{id:"e1",title:"Programming for everyone",description:"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",location:"Somestreet 25, 12345 San Somewhereo",date:"2021-05-12",image:"images/coding-event.jpg",isFeatured:!1},{id:"e2",title:"Networking for introverts",description:"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",location:"New Wall Street 5, 98765 New Work",date:"2021-05-30",image:"images/introvert-event.jpg",isFeatured:!0},{id:"e3",title:"Networking for extroverts",description:"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",location:"My Street 12, 10115 Broke City",date:"2022-04-10",image:"images/extrovert-event.jpg",isFeatured:!0}];function r(){return i.filter(e=>e.isFeatured)}function o(){return i}function s(e){let{year:t,month:n}=e;return i.filter(e=>{let i=new Date(e.date);return i.getFullYear()===t&&i.getMonth()===n-1})}function a(e){return i.find(t=>t.id===e)}},4369:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(3481),o=n(7397);t.default=function(){let e=(0,o.N6)();return(0,i.jsx)("div",{children:(0,i.jsx)(r.Z,{items:e})})}},7348:function(e){e.exports={item:"event-item_item__fVtqa",content:"event-item_content__SQSF9",date:"event-item_date__4WZ_m",address:"event-item_address__tF6LM",actions:"event-item_actions__FMKJ9",icon:"event-item_icon__Dun0S"}},5508:function(e){e.exports={list:"event-list_list__cHFCu"}},9932:function(e){e.exports={btn:"button_btn__O_wkr"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);