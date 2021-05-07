(this.webpackJsonpdreamjournal=this.webpackJsonpdreamjournal||[]).push([[0],{45:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t),c.d(t,"API",(function(){return B}));var a=c(1),n=c.n(a),s=c(17),i=c.n(s),r=c(10),d=c(16),l=c(34),j=(c(45),c(13)),o=c(3),b=c(0),h=function(){return Object(b.jsx)("nav",{className:"nav",children:Object(b.jsxs)("ul",{className:"nav-list",children:[Object(b.jsx)(j.c,{to:"/",className:"nav-list-item",children:"Home"}),Object(b.jsx)(j.c,{to:"/dreams",className:"nav-list-item",children:"All Dreams"}),Object(b.jsx)(j.c,{to:"/add-dream",className:"nav-list-item",children:"Add A Dream"})]})})},m=c.p+"static/media/home.f5c9f331.png",u=function(){return Object(b.jsxs)("div",{className:"main-home",children:[Object(b.jsx)("h1",{children:"Dreams"}),Object(b.jsx)("div",{className:"main-home-text",children:Object(b.jsxs)("p",{children:["A dream is a succession of ",Object(b.jsx)("b",{children:"images, ideas, emotions, and sensations"})," that usually occur involuntarily in the mind during certain stages of sleep. The content and function of dreams are not fully understood, although they have been a topic of scientific, philosophical and religious interest throughout recorded history. Dream interpretation is the attempt at drawing meaning from dreams and searching for an underlying message. The scientific study of dreams is called ",Object(b.jsx)("b",{children:"oneirology"}),". The length of a dream can vary; they may last for a few seconds, or approximately 20\u201330 minutes."]})}),Object(b.jsx)("div",{className:"main-home-picture",children:Object(b.jsx)("img",{src:m})})]})},O=c(9),p=c.p+"static/media/alldreams.58278675.png",x=function(e){return Object(b.jsxs)("div",{className:"dream",children:[Object(b.jsx)(j.b,{to:"/dreams/".concat(e._id),children:Object(b.jsx)("h2",{children:e.title})}),Object(b.jsx)("p",{children:e.date})]})},f="GET_ALL_DREAMS_REQUEST",g="GET_ALL_DREAMS_SUCCESS",v="GET_ALL_DREAMS_FAILURE",y="ANY_DREAM_REQUEST",N="ANY_DREAM_REQUEST_RESULT",S=c(12),E=c.n(S),D=function(){return{type:y}},A=function(e){return{type:N,payload:e}},C=function(){return function(e){e({type:f}),E.a.get(B).then((function(t){var c=t.data;e({type:g,payload:c})})).catch((function(t){e(function(e){return{type:v,payload:e}}(t))}))}},_=c(5),T=Object(r.b)((function(e){return{dreams:e.data}}))((function(e){e.dreams;var t=Object(a.useState)("0"),c=Object(_.a)(t,2),n=(c[0],c[1]);return Object(b.jsxs)("div",{className:"search-dreams",children:[Object(b.jsx)("label",{htmlFor:"search",children:"Search dreams by type: "}),Object(b.jsxs)("select",{name:"type",id:"type",onChange:function(e){return n(e.target.value)},children:[Object(b.jsx)("option",{value:"0",children:"Search..."}),Object(b.jsx)("option",{value:"happy",children:"Happy"}),Object(b.jsx)("option",{value:"sad",children:"Sad"}),Object(b.jsx)("option",{value:"exciting",children:"Exciting"}),Object(b.jsx)("option",{value:"scary",children:"Scary"})]})]})})),k=Object(r.b)((function(e){return{dreams:e.data,loading:e.loading}}))((function(e){var t=e.dreams,c=e.loading,n=Object(r.c)();Object(a.useEffect)((function(){n(C())}),[]);return Object(b.jsxs)("div",{className:"main-all-dreams",children:[Object(b.jsx)("h1",{children:"List of Dreams"}),Object(b.jsx)("div",{className:"dream-details-buttons",children:Object(b.jsx)("button",{onClick:function(){n(D()),E.a.delete(B).then((function(e){n(A(e.data.message)),n(C())})).catch((function(e){n(A(e))}))},children:"Delete All Dreams"})}),Object(b.jsx)(T,{}),Object(b.jsx)("div",{className:"all-dreams",children:c?Object(b.jsx)("div",{className:"loading",children:"Loading..."}):0!=t.length?t.map((function(e){return Object(b.jsx)(x,Object(O.a)({},e),e._id)})):Object(b.jsx)("div",{className:"error",children:"Dream log empty"})}),Object(b.jsx)("div",{className:"main-home-picture",children:Object(b.jsx)("img",{src:p})})]})})),F=c.p+"static/media/adddreams.403ccaea.png",L=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(_.a)(s,2),d=i[0],l=i[1],j=Object(a.useState)(""),o=Object(_.a)(j,2),h=o[0],m=o[1],u=Object(a.useState)(""),O=Object(_.a)(u,2),p=O[0],x=O[1],f=Object(a.useState)(""),g=Object(_.a)(f,2),v=g[0],y=g[1],N=Object(r.c)();return Object(b.jsxs)("div",{className:"main-add-dream",children:[Object(b.jsx)("h1",{children:"Add A Dream"}),Object(b.jsxs)("div",{className:"all-dreams dream-form",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N(D());var t={title:c,description:d,date:h,type:p};E.a.post(B,t).then((function(e){y(e.data),N(A(e.data.message)),n(""),l(""),m(""),x("")})).catch((function(e){y("Request to the server failed :("),N(A(e))}))},children:[Object(b.jsxs)("div",{className:"form-items",children:[Object(b.jsx)("label",{htmlFor:"title",children:"Title"}),Object(b.jsx)("input",{type:"text",name:"title",id:"title",value:c,onChange:function(e){return n(e.target.value)},required:!0})]}),Object(b.jsxs)("div",{className:"form-items",children:[Object(b.jsx)("label",{htmlFor:"description",children:"Description"}),Object(b.jsx)("input",{type:"text",name:"description",id:"description",value:d,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(b.jsxs)("div",{className:"form-items",children:[Object(b.jsx)("label",{htmlFor:"date",children:"Date"}),Object(b.jsx)("input",{type:"date",name:"date",id:"date",value:h,onChange:function(e){return m(e.target.value)},required:!0})]}),Object(b.jsxs)("div",{className:"form-items",children:[Object(b.jsx)("label",{htmlFor:"type",children:"Type of dream"}),Object(b.jsxs)("select",{name:"type",id:"type",onChange:function(e){return x(e.target.value)},required:!0,children:[Object(b.jsx)("option",{value:"happy",children:"Happy"}),Object(b.jsx)("option",{value:"sad",children:"Sad"}),Object(b.jsx)("option",{value:"exciting",children:"Exciting"}),Object(b.jsx)("option",{value:"scary",children:"Scary"})]})]}),Object(b.jsx)("div",{className:"dream-details-buttons",children:Object(b.jsx)("button",{children:"Add a Dream"})})]}),Object(b.jsx)("div",{className:"message",children:v})]}),Object(b.jsx)("div",{className:"main-home-picture",children:Object(b.jsx)("img",{src:F})})]})},R=c.p+"static/media/adddream.5915c82a.png",w=function(){return Object(b.jsxs)("div",{className:"not-found",children:[Object(b.jsx)("h1",{children:"Not Found"}),Object(b.jsx)("div",{className:"main-home-picture",children:Object(b.jsx)("img",{src:R})})]})},M=c.p+"static/media/github.7c0dc29d.png",H=c.p+"static/media/linedin.b1bebb39.png",U=function(){return Object(b.jsxs)("footer",{className:"footer",children:[Object(b.jsxs)("div",{children:["Background picture taken from ",Object(b.jsx)("a",{href:"https://pngtree.com/so/pagedecorative",children:"pagedecorative - pngtree.com"})]}),Object(b.jsxs)("div",{children:["Home and AddADream picture taken from ",Object(b.jsx)("a",{href:"https://pngtree.com/so/ripped-paper",children:"ripped paper - pngtree.com"})]}),Object(b.jsxs)("div",{children:["AllDreams picture taken from ",Object(b.jsx)("a",{href:"https://pngtree.com/so/dream-catcher-clipart",children:"dream catcher - pngtree.com"})]}),Object(b.jsx)("b",{children:"Made by Kristina \xa9 2021"}),Object(b.jsxs)("div",{className:"social",children:[Object(b.jsx)("a",{href:"https://github.com/Kristina-11",children:Object(b.jsx)("img",{src:M})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/kristina91jovanovic11/",children:Object(b.jsx)("img",{src:H})})]})]})},q=c.p+"static/media/adreama.05459a24.png",I=Object(r.b)((function(e){return{dreams:e}}))((function(e){var t=e.dreams,c=Object(o.g)().id,n=t.loading,s=Object(a.useState)(!1),i=Object(_.a)(s,2),d=i[0],l=i[1],j=Object(a.useState)(""),h=Object(_.a)(j,2),m=h[0],u=h[1],O=Object(a.useState)(""),p=Object(_.a)(O,2),x=p[0],f=p[1],g=Object(a.useState)(""),v=Object(_.a)(g,2),y=v[0],N=v[1],S=Object(a.useState)(),T=Object(_.a)(S,2),k=T[0],F=T[1],L=Object(r.c)(),R=Object(o.f)();Object(a.useEffect)((function(){E.a.get(B+"/".concat(c)).then((function(e){u(e.data.title),f(e.data.description),N(e.data.date),F(e.data.type)})).catch((function(e){L(A(e))}))}),[]),Object(a.useEffect)((function(){L(C())}),[]);return Object(b.jsxs)("div",{className:"dream-details",children:[n?Object(b.jsx)("div",{className:"loading",children:"Loading..."}):d?Object(b.jsxs)("div",{className:"all-dreams dream-form",children:[Object(b.jsxs)("div",{className:"form-items",children:[Object(b.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(b.jsx)("input",{type:"text",placeholder:m,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-items",children:[Object(b.jsx)("label",{htmlFor:"date",children:"Date:"}),Object(b.jsx)("input",{type:"date",placeholder:y,onChange:function(e){N(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-items",children:[Object(b.jsx)("label",{htmlFor:"description",children:"Description"}),Object(b.jsx)("input",{type:"text",placeholder:x,onChange:function(e){return f(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-items",children:[Object(b.jsx)("p",{children:"Type of dream: "}),Object(b.jsxs)("select",{name:"type",id:"type",onChange:function(e){return F(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"Choose"}),Object(b.jsx)("option",{value:"0",children:"Happy"}),Object(b.jsx)("option",{value:"1",children:"Sad"}),Object(b.jsx)("option",{value:"2",children:"Exciting"}),Object(b.jsx)("option",{value:"3",children:"Scary"})]})]}),Object(b.jsx)("div",{className:"dream-details-buttons additional",children:Object(b.jsx)("button",{onClick:function(){return function(e){var t=parseInt(k),c={title:m,date:y,description:x,type:t};L(D()),E.a.patch(B+"/".concat(e),c).then((function(e){L(A(e.data.message)),l(!1),R.push("/dreams")})).catch((function(e){L(A(e))}))}(c)},children:"Done"})})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:m}),Object(b.jsx)("h3",{children:y}),Object(b.jsx)("div",{className:"dream-details-description",children:x}),Object(b.jsxs)("div",{className:"dream-details-type",children:[Object(b.jsx)("p",{children:"Type of dream: "}),function(e){switch(e){case 0:return"Happy";case 1:return"Sad";case 2:return"Exciting";case 3:return"Scary";default:return"Error"}}(k)]}),Object(b.jsxs)("div",{className:"dream-details-buttons additional",children:[Object(b.jsx)("button",{onClick:function(){l(!0)},children:"Edit"}),Object(b.jsx)("button",{onClick:function(){return function(e){L(D()),E.a.delete(B+"/".concat(e)).then((function(e){L(A(e.data.message)),R.push("/dreams")})).catch((function(e){console.log(e),L(A(e))}))}(c)},children:"Delete"})]})]}),Object(b.jsx)("div",{className:"message"}),Object(b.jsx)("div",{className:"main-home-picture details-picture",children:Object(b.jsx)("img",{src:q})})]})})),G=function(){return Object(b.jsx)(j.a,{basename:"/DreamJournal",children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(h,{}),Object(b.jsx)("main",{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(u,{})}),Object(b.jsx)(o.a,{path:"/dreams/:id",children:Object(b.jsx)(I,{})}),Object(b.jsx)(o.a,{path:"/dreams",children:Object(b.jsx)(k,{})}),Object(b.jsx)(o.a,{path:"/add-dream",children:Object(b.jsx)(L,{})}),Object(b.jsx)(o.a,{path:"*",children:Object(b.jsx)(w,{})})]})}),Object(b.jsx)(U,{})]})})},J={loading:!0,data:[],message:""},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case g:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,data:t.payload});case v:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,message:t.payload});case y:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case N:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,message:t.payload});default:return e}},B="https://dreamsapi.herokuapp.com/dreams",K=Object(d.c)(Q,Object(d.a)(l.a));i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(r.a,{store:K,children:Object(b.jsx)(G,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.60b4ceff.chunk.js.map