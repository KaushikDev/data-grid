(this.webpackJsonptestapp=this.webpackJsonptestapp||[]).push([[0],{70:function(e,t,a){},71:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(10),i=a.n(n),l=(a(70),a(71),a(29)),r=a(20),u=[{id:1,caseNo:"1222",caseStatus:"OPEN",createdDate:"02/05/2021 05:49:22 PM",subject:"Connection Issue"},{id:2,caseNo:"1151",caseStatus:"Team Assigned",createdDate:"02/04/2021 02:33:22 PM",subject:"Connection Issue"},{id:3,caseNo:"1149",caseStatus:"OPEN",createdDate:"02/01/2021 05:49:22 PM",subject:"Connection Issue"},{id:4,caseNo:"1132",caseStatus:"OPEN",createdDate:"01/22/2021 05:49:22 PM",subject:"Issue with Payment"},{id:5,caseNo:"1127",caseStatus:"OPEN",createdDate:"01/15/2021 05:49:22 PM",subject:"Issue with Payment"},{id:6,caseNo:"1120",caseStatus:"OPEN",createdDate:"01/16/2021 05:49:22 PM",subject:"Connection Issue"},{id:7,caseNo:"1114",caseStatus:"OPEN",createdDate:"02/05/2021 05:49:22 PM",subject:"Connection Issue"},{id:8,caseNo:"1234",caseStatus:"Team Assigned",createdDate:"02/05/2021 05:49:22 PM",subject:"Issue with Payment"},{id:9,caseNo:"1333",caseStatus:"Team Assigned",createdDate:"02/05/2021 05:49:22 PM",subject:"Issue with Payment"},{id:10,caseNo:"1444",caseStatus:"OPEN",createdDate:"02/05/2021 05:49:22 PM",subject:"Connection Issue"},{id:11,caseNo:"1454",caseStatus:"In Progress",createdDate:"02/05/2021 05:49:22 PM",subject:"Other Issue"}],o=[{field:"caseNo",headerName:"Case Number",flex:1,sortable:!1,disableColumnMenu:!0},{field:"caseStatus",headerName:"Case Status",flex:1,sortable:!1,disableColumnMenu:!0},{field:"createdDate",headerName:"Created Date",flex:1,filterable:!1,sortable:!1,disableColumnMenu:!0},{field:"subject",headerName:"Subject",flex:1,sortable:!1,disableColumnMenu:!0}],j=a(114),b=a(117),d=a(119),f=a(120),O=a(131),h=a(129),x=a(133),m=a(122),g=a(121),p=a(123),N=a(124),P=a(125),S=a(126),C=a(127),v=a(128),M=a(130),I=a(53),D=a.n(I),w=a(55),E=a.n(w),y=a(54),k=a.n(y),F=a(52),A=a.n(F),T=a(5),L=Object(j.a)((function(e){return{container:{height:"100vh",padding:e.spacing(1)},filters:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"},formControl:{margin:e.spacing(1),width:"100%"},tablePagination:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function V(e){var t=L(),a=Object(r.a)(),c=e.count,s=e.page,n=e.rowsPerPage,i=e.onChangePage;return Object(T.jsxs)("div",{className:t.tablePagination,children:[Object(T.jsx)(b.a,{onClick:function(e){i(e,0)},disabled:0===s,"aria-label":"first page",children:"rtl"===a.direction?Object(T.jsx)(A.a,{}):Object(T.jsx)(D.a,{})}),Object(T.jsx)(b.a,{onClick:function(e){i(e,s-1)},disabled:0===s,"aria-label":"previous page",children:"rtl"===a.direction?Object(T.jsx)(k.a,{}):Object(T.jsx)(E.a,{})}),Object(T.jsx)(b.a,{onClick:function(e){i(e,s+1)},disabled:s>=Math.ceil(c/n)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(T.jsx)(E.a,{}):Object(T.jsx)(k.a,{})}),Object(T.jsx)(b.a,{onClick:function(e){i(e,Math.max(0,Math.ceil(c/n)-1))},disabled:s>=Math.ceil(c/n)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(T.jsx)(D.a,{}):Object(T.jsx)(A.a,{})})]})}var B=function(){var e=L(),t=Object(c.useState)(u),a=Object(l.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)(""),j=Object(l.a)(r,2),b=j[0],I=j[1],D=Object(c.useState)(""),w=Object(l.a)(D,2),E=w[0],y=w[1],k=Object(c.useState)(""),F=Object(l.a)(k,2),A=F[0],B=F[1],J=s.a.useState(0),R=Object(l.a)(J,2),q=R[0],z=R[1],G=s.a.useState(5),H=Object(l.a)(G,2),K=H[0],Q=H[1];Math.min(K,u.length-q*K);return console.log("caseNumberFilterValue : ".concat(b,",\n  caseStatusFilterValue : ").concat(E,",\n  caseSubjectFilterValue : ").concat(A,",")),Object(c.useEffect)((function(){b||E||A||i(u),!b||E||A||i(u.filter((function(e){if(e.caseNo===b)return e}))),b||!E||A||i(u.filter((function(e){if(e.caseStatus===E)return e}))),b||E||!A||i(u.filter((function(e){if(e.subject===A)return e}))),b&&E&&!A&&i(u.filter((function(e){if(e.caseNo===b&&e.caseStatus===E)return e}))),!b&&E&&A&&i(u.filter((function(e){if(e.caseStatus===E&&e.subject===A)return e}))),b&&!E&&A&&i(u.filter((function(e){if(e.caseNo===b&&e.subject===A)return e}))),b&&E&&A&&i(u.filter((function(e){if(e.caseNo===b&&e.caseStatus===E&&e.subject===A)return e})))}),[b,E,A]),console.log(n),Object(T.jsxs)(d.a,{className:e.container,children:[Object(T.jsxs)("div",{className:e.filters,children:[Object(T.jsxs)(f.a,{variant:"outlined",className:e.formControl,children:[Object(T.jsx)(O.a,{id:"case-number-select-input-label",children:"Case Number"}),Object(T.jsxs)(h.a,{labelId:"case-number-select-label",id:"case-number-select",value:b,onChange:function(e){return I(e.target.value)},label:"case-number",children:[Object(T.jsx)(x.a,{value:"",children:"Please Select..."}),u.map((function(e,t){return Object(T.jsx)(x.a,{value:e.caseNo,children:e.caseNo},t)}))]})]}),Object(T.jsxs)(f.a,{variant:"outlined",className:e.formControl,children:[Object(T.jsx)(O.a,{id:"case-status-select-input-label",children:"Case Status"}),Object(T.jsxs)(h.a,{labelId:"case-status-select-label",id:"case-status-select",value:E,onChange:function(e){return y(e.target.value)},label:"case-status",children:[Object(T.jsx)(x.a,{value:"",children:"Please Select..."}),u.map((function(e){return e.caseStatus})).filter((function(e,t,a){return a.indexOf(e)===t})).map((function(e,t){return Object(T.jsx)(x.a,{value:e,children:e},t)}))]})]}),Object(T.jsxs)(f.a,{variant:"outlined",className:e.formControl,children:[Object(T.jsx)(O.a,{id:"case-subject-select-input-label",children:"Case Subject"}),Object(T.jsxs)(h.a,{labelId:"case-subject-select-label",id:"case-subject-select",value:A,onChange:function(e){return B(e.target.value)},label:"case-subject",children:[Object(T.jsx)(x.a,{value:"",children:"Please Select..."}),u.map((function(e){return e.subject})).filter((function(e,t,a){return a.indexOf(e)===t})).map((function(e,t){return Object(T.jsx)(x.a,{value:e,children:e},t)}))]})]})]}),Object(T.jsx)(m.a,{component:g.a,children:Object(T.jsxs)(p.a,{className:e.table,"aria-label":"simple table",children:[Object(T.jsx)(N.a,{children:Object(T.jsx)(P.a,{children:o.map((function(e,t){return Object(T.jsx)(S.a,{children:e.headerName},t)}))})}),Object(T.jsx)(C.a,{children:null!==n&&(K>0?n.slice(q*K,q*K+K):n).map((function(e){return Object(T.jsxs)(P.a,{children:[Object(T.jsx)(S.a,{component:"th",scope:"row",children:e.caseNo}),Object(T.jsx)(S.a,{children:e.caseStatus}),Object(T.jsx)(S.a,{children:e.createdDate}),Object(T.jsx)(S.a,{children:e.subject})]},e.id)}))}),Object(T.jsx)(v.a,{children:Object(T.jsx)(P.a,{children:Object(T.jsx)(M.a,{rowsPerPageOptions:[5,10,{label:"All",value:-1}],colSpan:5,count:u.length,rowsPerPage:K,page:q,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){z(t)},onChangeRowsPerPage:function(e){Q(parseInt(e.target.value,10)),z(0)},ActionsComponent:V})})})]})})]})};var J=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(B,{})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,134)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(T.jsx)(J,{}),document.getElementById("root")),R()}},[[77,1,2]]]);
//# sourceMappingURL=main.29e44501.chunk.js.map