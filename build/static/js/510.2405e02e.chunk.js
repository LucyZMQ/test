"use strict";(self.webpackChunkmantis_react_ts=self.webpackChunkmantis_react_ts||[]).push([[510],{40875:function(e,n,t){var i=t(47313);n.Z=function(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){return function(){e.current=!1}}),[]),e}},59510:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var i=t(82937),r=t(62463),o=t(42669),s=t(15861),a=t(64687),c=t.n(a),l=t(58467),d=t(56352),x=t(35553),u=t(48569),f=t(73477),m=t(3463),h=t(79429),p=t(1229),g=t(40875),b=t(63946),Z=t(1129),j=t(936),v=t(46417),y=function(){var e=(0,g.Z)(),n=(0,d.I0)(),t=(0,l.s0)(),o=(0,j.Z)(),a=(0,p.Z)(),y=a.isLoggedIn,k=a.resetPassword;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(h.J9,{initialValues:{email:"",submit:null},validationSchema:m.Ry().shape({email:m.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var i=(0,s.Z)(c().mark((function i(r,o){var s,a,l;return c().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return s=o.setErrors,a=o.setStatus,l=o.setSubmitting,i.prev=1,i.next=4,k(r.email).then((function(){a({success:!0}),l(!1),n((0,Z.ss)({open:!0,message:"Check mail for reset password link",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){t(y?"/auth/check-mail":"/check-mail",{replace:!0})}),1500)}),(function(e){a({success:!1}),s({submit:e.message}),l(!1)}));case 4:i.next=10;break;case 6:i.prev=6,i.t0=i.catch(1),console.error(i.t0),e.current&&(a({success:!1}),s({submit:i.t0.message}),l(!1));case 10:case"end":return i.stop()}}),i,null,[[1,6]])})));return function(e,n){return i.apply(this,arguments)}}(),children:function(e){var n=e.errors,t=e.handleBlur,s=e.handleChange,a=e.handleSubmit,c=e.isSubmitting,l=e.touched,d=e.values;return(0,v.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,v.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,v.jsx)(i.ZP,{item:!0,xs:12,children:(0,v.jsxs)(r.Z,{spacing:1,children:[(0,v.jsx)(x.Z,{fullWidth:!0,error:Boolean(l.email&&n.email),id:"email-forgot",type:"email",value:d.email,name:"email",onBlur:t,onChange:s,placeholder:o.formatMessage({id:"emails"}),inputProps:{}}),l.email&&n.email&&(0,v.jsx)(u.Z,{error:!0,id:"helper-text-email-forgot",children:n.email})]})}),n.submit&&(0,v.jsx)(i.ZP,{item:!0,xs:12,children:(0,v.jsx)(u.Z,{error:!0,children:n.submit})}),(0,v.jsx)(i.ZP,{item:!0,xs:12,children:(0,v.jsx)(b.Z,{children:(0,v.jsx)(f.Z,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",style:{background:"#7132f5",borderRadius:"10px"},children:o.formatMessage({id:"send_email"})})})})]})})}})})},k=t(73414),w=function(){var e=(0,j.Z)();return(0,v.jsx)(k.Z,{children:(0,v.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,v.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,v.jsx)(r.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:(0,v.jsx)(o.Z,{variant:"h3",children:e.formatMessage({id:"forgot_password"})})}),(0,v.jsx)(o.Z,{variant:"h6",style:{color:"#8a8086",fontSize:"16px",marginTop:"10px"},children:e.formatMessage({id:"forgot_pass_mess"})})]}),(0,v.jsx)(i.ZP,{item:!0,xs:12,children:(0,v.jsx)(y,{})})]})})}},55911:function(e,n,t){var i=t(1413),r=t(45987),o=t(16157),s=t(63507),a=t(46417),c=["children"];n.Z=function(e){var n=e.children,t=(0,r.Z)(e,c);return(0,a.jsx)(s.Z,(0,i.Z)((0,i.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},t),{},{border:!1,boxShadow:!0,shadow:function(e){return e.customShadows.z1},children:(0,a.jsx)(o.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))}},73414:function(e,n,t){t.d(n,{Z:function(){return R}});var i=t(1413),r=t(29439),o=t(47313),s=t(2135),a=t(64164),c=t(73477),l=t(16157),d=t(82937),x=t(80859),u=t(61107),f=t(32415),m=t(31685),h=t(38498),p=t(81962),g=t(62463),b=t(42669),Z=t(18283),j=t(55911),v=t(936),y=t(58873),k=t(77658),w=t(86296);var S=t.p+"static/media/backIcon.e88d46f172171e1b1a7f4fa9370bffe4.svg",C=t(1229);var I=t.p+"static/media/contractIcon.91a8ad412f94ccfd230a220d9a38f464.svg",P=t(46417),z=(0,a.ZP)(c.Z)((function(e){e.theme;return{color:"#6c3cd0",boxShadow:"none",borderRadius:"15px",padding:"8px 15px",backgroundColor:"#e1ddfa","&:hover":{backgroundColor:"#d2c3fa",color:"#7e32f6"},"&:active":{backgroundColor:"#d2c3fa",color:"#7e32f6"},"&:after":{boxShadow:"none"}}})),R=function(e){var n=e.children,t=(0,v.Z)(),a=(0,w.Z)(),R=a.i18n,M=a.onChangeLocalization,_=(0,o.useState)("zh"==R?{local:"zh",text:"\u4e2d\u6587"}:{local:"en",text:"U.S.English"}),E=(0,r.Z)(_,2),D=E[0],L=E[1],W=[{local:"zh",text:"\u4e2d\u6587"},{local:"en",text:"U.S.English"}],F=(0,o.useRef)(null),T=(0,o.useState)(!1),U=(0,r.Z)(T,2),B=U[0],q=U[1],H=function(e){F.current&&F.current.contains(e.target)||q(!1)};function V(e){"Tab"===e.key?(e.preventDefault(),q(!1)):"Escape"===e.key&&q(!1)}console.log("i18n",R);var A=(0,C.Z)().isLoggedIn;return(0,P.jsx)(l.Z,{sx:{minHeight:"100vh",background:"#f6f5fa"},children:(0,P.jsx)(d.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{background:"#f6f5fa"},children:(0,P.jsxs)("div",{style:{width:"100%"},children:[(0,P.jsxs)(d.ZP,{item:!0,xs:12,sx:{ml:3,mt:3,display:"flex",justifyContent:"space-between",marginRight:"24px"},children:[(0,P.jsx)(Z.Z,{}),(0,P.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,P.jsxs)(l.Z,{children:[(0,P.jsx)(c.Z,{sx:{backgroundColor:"#ebeaf0",fontSize:"14px",padding:"7px 15px 6px 15px",color:"#6f6f6f",fontWeight:700,borderRadius:"100px","&:hover":{backgroundColor:"#ebeaf0",color:"#6f6f6f",boxShadow:"none"},"&::after":{boxShadow:"none"},"&:active":{backgroundColor:"#ebeaf0",color:"#6f6f6f",border:0,boxShadow:"none",zIndex:100,outline:"0px solid #fff"},"&:focus":{backgroundColor:"#ebeaf0",boxShadow:"none",color:"#6f6f6f",border:0,outline:"0px solid #fff"}},ref:F,id:"composition-button","aria-controls":B?"composition-menu":void 0,"aria-expanded":B?"true":void 0,"aria-haspopup":"true",onClick:function(){q((function(e){return!e}))},startIcon:(0,P.jsx)("img",{src:k.Z}),endIcon:(0,P.jsx)(y.Z,{style:{fontWeight:600,fontSize:"20px"}}),children:D.text}),(0,P.jsx)(x.Z,{sx:{zIndex:100},open:B,anchorEl:F.current,role:void 0,placement:"bottom-start",transition:!0,disablePortal:!0,children:function(e){var n=e.TransitionProps,t=e.placement;return(0,P.jsx)(u.Z,(0,i.Z)((0,i.Z)({},n),{},{style:{transformOrigin:"bottom-start"===t?"left top":"left bottom"},children:(0,P.jsx)(f.Z,{sx:{borderRadius:"8px",padding:"0px",marginTop:"10px",width:"130px",zIndex:100},children:(0,P.jsx)(m.Z,{onClickAway:H,children:(0,P.jsx)(h.Z,{autoFocusItem:B,id:"composition-menu","aria-labelledby":"composition-button",onKeyDown:V,sx:{padding:0},children:W.map((function(e){return(0,P.jsx)(p.Z,{sx:{padding:"12px 10px 12px 12px","&:hover":{backgroundColor:"#f6f6f6",color:"#6f6f6f"}},onClick:function(n){return function(e,n){M(e.local),L(e),H(n)}({local:e.local,text:e.text},n)},disableRipple:!0,children:(0,P.jsx)(g.Z,{direction:"row",spacing:"24px",sx:{alignItems:"center",justifyContent:"start"},children:(0,P.jsx)(l.Z,{sx:{fontSize:"16px",color:"#6F6F6F",fontWeight:600},children:e.text})},e.local)},e.local)}))})})})}))}})]}),(0,P.jsx)(z,{style:{borderRadius:"10px",marginLeft:"10px"},children:(0,P.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,P.jsx)("img",{src:I}),(0,P.jsx)("span",{style:{marginLeft:"8px"},children:t.formatMessage({id:"support"})})]})})]})]}),(0,P.jsx)(d.ZP,{item:!0,xs:12,children:(0,P.jsxs)(d.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 511px)",md:"calc(100vh - 511px)",display:"flex",flexDirection:"column"}},children:[(0,P.jsx)(b.Z,{component:s.rU,to:A?"/auth/login":"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:(0,P.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"460px"},children:[(0,P.jsx)("img",{src:S}),(0,P.jsx)("span",{style:{color:"#686b82",fontSize:"16px"},children:t.formatMessage({id:"back"})})]})}),(0,P.jsx)(d.ZP,{item:!0,children:(0,P.jsx)(j.Z,{style:{borderRadius:"20px",margin:"10px"},children:n})}),(0,P.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"425px"},children:[(0,P.jsx)(b.Z,{component:s.rU,to:"/",variant:"body1",sx:{textDecoration:"none",color:"#686b82"},children:t.formatMessage({id:"privacy"})}),(0,P.jsx)(b.Z,{component:s.rU,to:"/",variant:"body1",sx:{textDecoration:"none",marginLeft:"10px",color:"#686b82"},children:t.formatMessage({id:"terms"})})]})]})})]})})})}},77658:function(e,n,t){t(47313);n.Z=t.p+"static/media/localIcon.bfb68391b1466c561c69a726335ea38a.svg"}}]);