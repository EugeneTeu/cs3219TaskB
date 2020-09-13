(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{162:function(e,t,a){e.exports=a(313)},167:function(e,t,a){},168:function(e,t,a){},313:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),s=(a(167),a(168),a(315)),u=a(316),i=a(320),o=a(23),m=a.n(o),p=a(37),E=a(45),d=a(321),h=a(318),f=a(319),b=a(111),g=function(e){var t=e.quote;return l.a.createElement("div",{style:{minHeight:"3vh"}},l.a.createElement("p",null,"Id: ",t._id),l.a.createElement("p",null,"Title: ",t.title))},v=function(){var e=Object(n.useState)({_id:"null",title:"empty",_v:0}),t=Object(E.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,l,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.title,e.next=3,fetch("/quotes/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:a})});case 3:return n=e.sent,e.next=6,n.json();case 6:l=e.sent,c=l.message,s=l.data,d.a.success({message:c}),r(s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"This endpoint creates a quote"),l.a.createElement(h.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{onFinish:function(e){var t=e.title;c({title:t})},onFinishFailed:function(e){d.a.error({message:"Title is required! Please fill up the input"})}}),l.a.createElement(h.a.Item,{style:{color:"white !important"},label:"Quote Title",name:"title",rules:[{required:!0,message:"Please input title of quote!"}]},l.a.createElement(f.a,null)),l.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit")),l.a.createElement(s.a,null),l.a.createElement("div",{style:{minHeight:"5vh",marginTop:"20px",paddingBottom:"20px"}},l.a.createElement("h3",null,"Response from API:"),l.a.createElement(g,{quote:a})))},y=a(317),j={labelCol:{span:8},wrapperCol:{span:16}},T=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({_id:"null",title:"empty",_v:0}),u=Object(E.a)(c,2),i=u[0],o=u[1],v=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,l,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.prev=1,e.next=4,fetch("/quotes/"+a,{method:"GET",headers:{"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:l=e.sent,r=l.message,c=l.data,d.a.success({message:r}),o(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),d.a.error({message:e.t0.message});case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),T=Object(n.useCallback)(Object(p.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/quotes",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,a.message,n=a.data,r(n);case 9:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){T()}),[T]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"This endpoint returns a single quote from the api"),l.a.createElement("p",null,"Please ensure the input is exactly the id, else it will fail"),l.a.createElement(h.a,Object.assign({},j,{onFinish:function(e){var t=e.id;v({id:t})},onFinishFailed:function(e){d.a.error({message:"ID is required! Please fill up the input"})}}),l.a.createElement(h.a.Item,{style:{color:"white !important"},label:"ID of Quote",name:"id",rules:[{required:!0,message:"Please input ID of quote!"}]},l.a.createElement(f.a,null)),l.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit")),l.a.createElement(s.a,null),l.a.createElement("h3",null,"Response from API:"),l.a.createElement(g,{quote:i}),l.a.createElement(b.a,{onClick:T}," Refresh Endpoint"),l.a.createElement("h3",null,"Request any of the following IDs:"),l.a.createElement(s.a,null),l.a.createElement("div",{style:{minHeight:"5vh",marginTop:"20px",paddingBottom:"20px"}},l.a.createElement("div",null,0===a.length?l.a.createElement("p",null,"There is no quotes currently in the Database"):l.a.createElement(y.b,null,a.map((function(e,t){return l.a.createElement(y.b.Item,{key:t},l.a.createElement("p",null,"Id: ",e._id))}))))))},x=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,l,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/quotes",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,l=n.message,c=n.data,console.log(c),d.a.success({message:l}),r(c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"This endpoint returns a list of quotes from the api"),l.a.createElement(b.a,{type:"primary",onClick:c},"Get List"),l.a.createElement("div",{style:{minHeight:"5vh",marginTop:"20px",paddingBottom:"20px"}},l.a.createElement("h3",null,"Response from API:"),0===a.length?l.a.createElement("p",null,"There is no quotes currently requested / currently in the database"):l.a.createElement(y.b,null,a.map((function(e){return l.a.createElement(y.b.Item,{key:e._id},l.a.createElement(g,{quote:e}))})))))},q={labelCol:{span:8},wrapperCol:{span:16}},w=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,l,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,n=t.title,e.prev=1,e.next=4,fetch("/quotes/"+a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n})});case 4:return l=e.sent,e.next=7,l.json();case 7:r=e.sent,c=r.message,d.a.success({message:c}),u(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),d.a.error({message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),u=Object(n.useCallback)(Object(p.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/quotes",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,a.message,n=a.data,r(n);case 9:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){u()}),[u]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"This endpoint enables edit of each quote's title"),l.a.createElement("p",null,"Input the id of the quote and the new title you want to edit it to"),l.a.createElement(h.a,Object.assign({},q,{onFinish:function(e){var t=e.id,a=e.title;c({id:t,title:a})},onFinishFailed:function(e){d.a.error({message:"Check ID and Title are filled properly"})}}),l.a.createElement(h.a.Item,{style:{color:"white !important"},label:"ID of Quote",name:"id",rules:[{required:!0,message:"Please input ID of quote!"}]},l.a.createElement(f.a,null)),l.a.createElement(h.a.Item,{style:{color:"white !important"},label:"Quote Title",name:"title",rules:[{required:!0,message:"Please input title of quote!"}]},l.a.createElement(f.a,null)),l.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit")),l.a.createElement(s.a,null),l.a.createElement(b.a,{onClick:u}," Refresh Endpoint"),l.a.createElement("div",{style:{minHeight:"5vh",marginTop:"20px",paddingBottom:"20px"}},0===a.length?l.a.createElement("p",null,"There is no quotes in the database"):l.a.createElement(y.b,null,a.map((function(e){return l.a.createElement(y.b.Item,{key:e._id},l.a.createElement(g,{quote:e}))})))))},O=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,l,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,e.prev=1,e.next=4,fetch("/quotes/"+a,{method:"DELETE",headers:{"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:l=e.sent,r=l.message,d.a.success({message:r}),s(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),d.a.error({message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),s=Object(n.useCallback)(Object(p.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/quotes",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,a.message,n=a.data,r(n);case 9:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){s()}),[s]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"This endpoint returns a list of quotes from the api"),l.a.createElement(b.a,{onClick:s}," Refresh Endpoint"),l.a.createElement("div",{style:{minHeight:"5vh",marginTop:"20px",paddingBottom:"20px"}},l.a.createElement("h3",null,"Response from API:"),0===a.length?l.a.createElement("p",null,"There is no quotes currently in the database"):l.a.createElement(y.b,null,a.map((function(e){return l.a.createElement(y.b.Item,{key:e._id},l.a.createElement("div",null,l.a.createElement(g,{quote:e}),l.a.createElement(b.a,{danger:!0,onClick:function(t){return c({id:e._id})}},"Delete!")))})))))},k=a(157),C=a.n(k),I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("br",null),l.a.createElement("div",{className:"App-logo"},l.a.createElement(i.a,{style:{fontSize:"20vh"}})),l.a.createElement("br",null),"CS3219 Task B",l.a.createElement("br",null),"Eugene Teu",l.a.createElement("br",null),"Welcome to my API playground",l.a.createElement("br",null),"Built with React and Antd"),l.a.createElement("div",{className:"background"},l.a.createElement("h1",null,"Information"),l.a.createElement(s.a,null),l.a.createElement("p",null,"This api will return quotes"),l.a.createElement("p",null,"The structure of each Quote is as follows:"),l.a.createElement(u.a,null,l.a.createElement(C.a,{title:"Quote"}),l.a.createElement("br",null),l.a.createElement("p",null,"Each Quote contains title and _id"),l.a.createElement("p",null,"Each Card is uniquely identified by their _id"),l.a.createElement("p",null,"_id is assigned automatically by the databse (mongodb Atlas)")),l.a.createElement("br",null),l.a.createElement("h1",null,"Playground"),l.a.createElement(s.a,null),l.a.createElement(u.a,null,l.a.createElement("h2",null,"Create Quotes"),l.a.createElement(s.a,null),l.a.createElement("div",{className:"api-module"},l.a.createElement(v,null))),l.a.createElement(s.a,null),l.a.createElement(u.a,null,l.a.createElement("h2",null,"Get Quotes"),l.a.createElement(s.a,null),l.a.createElement("div",{className:"api-module"},l.a.createElement(x,null))),l.a.createElement(s.a,null),l.a.createElement(u.a,null,l.a.createElement("h2",null,"Get Quotes Detail"),l.a.createElement(s.a,null),l.a.createElement("div",{className:"api-module"},l.a.createElement(T,null))),l.a.createElement(s.a,null),l.a.createElement(u.a,null,l.a.createElement("h2",null,"Update Quote"),l.a.createElement(s.a,null),l.a.createElement("div",{className:"api-module"},l.a.createElement(w,null))),l.a.createElement(s.a,null),l.a.createElement(u.a,null,l.a.createElement("h2",null,"Delete Quotes"),l.a.createElement(s.a,null),l.a.createElement("div",{className:"api-module"},l.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[162,1,2]]]);
//# sourceMappingURL=main.9b5f932a.chunk.js.map