(this.webpackJsonptestapp=this.webpackJsonptestapp||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(12),n=a.n(s),i=(a(124),a(125),a(8)),l=(a(73),[{id:1,caseNo:"1222",caseStatus:"OPEN",createdDate:"02/05/2021 05:49:22 PM",subject:"Connection Issue"},{id:2,caseNo:"1151",caseStatus:"Team Assigned",createdDate:"02/04/2021 02:33:22 PM",subject:"Connection Issue"},{id:3,caseNo:"1149",caseStatus:"OPEN",createdDate:"02/01/2021 05:49:22 PM",subject:"Connection Issue"},{id:4,caseNo:"1132",caseStatus:"OPEN",createdDate:"01/22/2021 05:49:22 PM",subject:"Issue with Payment"},{id:5,caseNo:"1127",caseStatus:"OPEN",createdDate:"01/15/2021 05:49:22 PM",subject:"Issue with Payment"},{id:6,caseNo:"1120",caseStatus:"OPEN",createdDate:"01/16/2021 05:49:22 PM",subject:"Connection Issue"},{id:7,caseNo:"1114",caseStatus:"OPEN",createdDate:"02/05/2021 05:49:22 PM",subject:"Connection Issue"},{id:8,caseNo:"1234",caseStatus:"Team Assigned",createdDate:"02/05/2021 05:49:22 PM",subject:"Issue with Payment"},{id:9,caseNo:"1333",caseStatus:"Team Assigned",createdDate:"02/05/2021 05:49:22 PM",subject:"Issue with Payment"},{id:10,caseNo:"1444",caseStatus:"OPEN",createdDate:"02/05/2021 05:49:22 PM",subject:"Connection Issue"}]),u=[{field:"caseNo",headerName:"Case Number",flex:1,sortable:!1,disableColumnMenu:!0},{field:"caseStatus",headerName:"Case Status",flex:1,sortable:!1,disableColumnMenu:!0},{field:"createdDate",headerName:"Created Date",flex:1,filterable:!1,sortable:!1,disableColumnMenu:!0},{field:"subject",headerName:"Subject",flex:1,sortable:!1,disableColumnMenu:!0}],r=a(24),o=a(179),b=a(56),j=a(80),d=a(79),f=a(41),h=a(6),m=(Object(r.a)((function(e){return{container:{height:"100vh",padding:e.spacing(1)},filters:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"},formControl:{margin:e.spacing(1),width:"100%"}}})),a(180)),O=a(97),x=a(181),N=a(182),p=a(183),S=a(178),g=a(184),C=Object(r.a)((function(e){return{container:{height:"100vh",padding:e.spacing(1)},filters:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"},formControl:{margin:e.spacing(1),width:"100%"}}})),P=function(){var e=C(),t=Object(c.useState)(l),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),P=Object(i.a)(r,2),v=P[0],I=P[1],D=Object(c.useState)(""),M=Object(i.a)(D,2),w=M[0],y=M[1],E=Object(c.useState)(""),F=Object(i.a)(E,2),T=F[0],A=F[1];return console.log("caseNumberFilterValue : ".concat(v,",\n  caseStatusFilterValue : ").concat(w,",\n  caseSubjectFilterValue : ").concat(T,",")),Object(c.useEffect)((function(){v||w||T||n(l),!v||w||T||n(l.filter((function(e){if(e.caseNo===v)return e}))),v||!w||T||n(l.filter((function(e){if(e.caseStatus===w)return e}))),v||w||!T||n(l.filter((function(e){if(e.subject===T)return e}))),v&&w&&!T&&n(l.filter((function(e){if(e.caseNo===v&&e.caseStatus===w)return e}))),!v&&w&&T&&n(l.filter((function(e){if(e.caseStatus===w&&e.subject===T)return e}))),v&&!w&&T&&n(l.filter((function(e){if(e.caseNo===v&&e.subject===T)return e}))),v&&w&&T&&n(l.filter((function(e){if(e.caseNo===v&&e.caseStatus===w&&e.subject===T)return e})))}),[v,w,T]),console.log(s),Object(h.jsxs)(o.a,{className:e.container,children:[Object(h.jsxs)("div",{className:e.filters,children:[Object(h.jsxs)(b.a,{variant:"outlined",className:e.formControl,children:[Object(h.jsx)(j.a,{id:"case-number-select-input-label",children:"Case Number"}),Object(h.jsxs)(d.a,{labelId:"case-number-select-label",id:"case-number-select",value:v,onChange:function(e){return I(e.target.value)},label:"case-number",children:[Object(h.jsx)(f.a,{value:"",children:"Please Select..."}),l.map((function(e,t){return Object(h.jsx)(f.a,{value:e.caseNo,children:e.caseNo},t)}))]})]}),Object(h.jsxs)(b.a,{variant:"outlined",className:e.formControl,children:[Object(h.jsx)(j.a,{id:"case-status-select-input-label",children:"Case Status"}),Object(h.jsxs)(d.a,{labelId:"case-status-select-label",id:"case-status-select",value:w,onChange:function(e){return y(e.target.value)},label:"case-status",children:[Object(h.jsx)(f.a,{value:"",children:"Please Select..."}),l.map((function(e){return e.caseStatus})).filter((function(e,t,a){return a.indexOf(e)===t})).map((function(e,t){return Object(h.jsx)(f.a,{value:e,children:e},t)}))]})]}),Object(h.jsxs)(b.a,{variant:"outlined",className:e.formControl,children:[Object(h.jsx)(j.a,{id:"case-subject-select-input-label",children:"Case Subject"}),Object(h.jsxs)(d.a,{labelId:"case-subject-select-label",id:"case-subject-select",value:T,onChange:function(e){return A(e.target.value)},label:"case-subject",children:[Object(h.jsx)(f.a,{value:"",children:"Please Select..."}),l.map((function(e){return e.subject})).filter((function(e,t,a){return a.indexOf(e)===t})).map((function(e,t){return Object(h.jsx)(f.a,{value:e,children:e},t)}))]})]})]}),Object(h.jsx)(m.a,{component:O.a,children:Object(h.jsxs)(x.a,{className:e.table,"aria-label":"simple table",children:[Object(h.jsx)(N.a,{children:Object(h.jsx)(p.a,{children:u.map((function(e,t){return Object(h.jsx)(S.a,{children:e.headerName},t)}))})}),Object(h.jsx)(g.a,{children:null!==s&&s.map((function(e){return Object(h.jsxs)(p.a,{children:[Object(h.jsx)(S.a,{component:"th",scope:"row",children:e.caseNo}),Object(h.jsx)(S.a,{children:e.caseStatus}),Object(h.jsx)(S.a,{children:e.createdDate}),Object(h.jsx)(S.a,{children:e.subject})]},e.id)}))})]})})]})};var v=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(P,{})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,186)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};n.a.render(Object(h.jsx)(v,{}),document.getElementById("root")),I()}},[[131,1,2]]]);
//# sourceMappingURL=main.d0539f3d.chunk.js.map