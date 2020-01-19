(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{147:function(e,a,t){e.exports=t(286)},152:function(e,a,t){},157:function(e,a,t){},286:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),o=t.n(l),i=(t(152),t(67)),m=t(22),c=t(30),s=t(319),u=t(318),d=t(320),p=t(321),h=t(313),E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{color:"inherit",component:m.b,to:"/register"},"Register"),r.a.createElement(h.a,{color:"inherit",component:m.b,to:"/login"},"Login"))},g=t(317),b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{color:"inherit"},"Add Post"),r.a.createElement(h.a,{color:"inherit"},"Log Out"),r.a.createElement(g.a,{size:"medium",variant:"rount",color:"primary"},"SE"))},f=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0];a[1];return r.a.createElement(u.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,{to:"/",variant:"h6",color:"inherit",component:m.b,underline:"none"},"BlogApp"),t?r.a.createElement(b,null):r.a.createElement(E,null))))},v=t(288),y=function(){return r.a.createElement(v.a,{variant:"caption",align:"center",paragraph:!0},"\xa9 Webdeveloper Orbeen | All Rights Reserved")},w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(s.a,null,e.children),r.a.createElement(y,null))},F=(t(157),t(17)),P=t(20),N=t(323),L=Object(F.c)({mapPropsToValues:function(){return{firstName:"",lastName:"",email:"",password:"",confirmPassword:""}},validationSchema:P.object().shape({firstName:P.string().min(2,"First Name must be 2 character").max(5,"First Name only can be 5 character in highest").required("First Name is Required"),lastName:P.string().min(2,"First Name must be 2 character").max(5,"First Name only can be 5 character in highest").required("First Name is Required"),email:P.string().email("Must be a valid email").required("Email is required"),password:P.string().min(5,"Password must be at least 5 character ").max(11,"Password must be 11 caharacter in highest").required("Password is required"),confirmPassword:P.string().oneOf([P.ref("password"),null],"Password don't match").required("Confirm password is required")}),handleSubmit:function(e,a){a.resetForm;var t=a.setSubmitting;setTimeout((function(){console.log(e),t(!1)}),1e3)}})((function(e){var a=e.values,t=e.isSubmitting,n=e.handeBlur,l=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",component:"h2"},"Register"),r.a.createElement(F.b,{noValidate:!0},r.a.createElement(N.a,{type:"text",name:"firstName",label:"First Name",onBlur:n,onChange:l,value:a.firstName,fullWidth:!0}),r.a.createElement(F.a,{name:"firstName",component:"div"}),r.a.createElement(N.a,{type:"text",name:"lastName",label:"Last Name",onBlur:n,onChange:l,value:a.lastName,fullWidth:!0}),r.a.createElement(F.a,{name:"lastName",component:"div"}),r.a.createElement(N.a,{type:"text",name:"email",label:"Email",onBlur:n,onChange:l,value:a.email,fullWidth:!0}),r.a.createElement(F.a,{name:"email",component:"div"}),r.a.createElement(N.a,{type:"text",name:"password",label:"Password",onBlur:n,onChange:l,value:a.password,fullWidth:!0}),r.a.createElement(F.a,{name:"password",component:"div"}),r.a.createElement(N.a,{type:"text",name:"confirmPassword",label:"Confirm Password",onBlur:n,onChange:l,value:a.confirmPassword,fullWidth:!0}),r.a.createElement(F.a,{name:"confirmPassword",component:"div"}),r.a.createElement(h.a,{disabled:t,type:"submit",variant:"contained",color:"primary"},"Register")))})),q=Object(F.c)({mapPropsToValues:function(){return{email:"",password:""}},validationSchema:P.object().shape({email:P.string().email("Must be a valid email").required("Email is required"),password:P.string().min(5,"Password must be at least 5 character ").max(11,"Password must be 11 caharacter in highest").required("Password is required")}),handleSubmit:function(e,a){a.resetForm;var t=a.setSubmitting;setTimeout((function(){console.log(e),t(!1)}),1e3)}})((function(e){var a=e.values,t=e.isSubmitting,n=e.handeBlur,l=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",component:"h2"},"Login"),r.a.createElement(F.b,{noValidate:!0},r.a.createElement(N.a,{type:"email",name:"email",label:"Email",onBlur:n,onChange:l,value:a.email,fullWidth:!0}),r.a.createElement(F.a,{name:"email",component:"div"}),r.a.createElement(N.a,{type:"text",name:"password",label:"Password",onBlur:n,onChange:l,value:a.password,fullWidth:!0}),r.a.createElement(F.a,{name:"password",component:"div"}),r.a.createElement(h.a,{disabled:t,type:"submit",variant:"contained",color:"primary"},"Login")))})),x=function(){return r.a.createElement("p",null,"404: Not Found")},S=t(322),j=Object(c.f)((function(e){var a=e.posts,t=e.match.params.id,n=e.deletePost,l=e.history,o=a.find((function(e){return e.id===Number(t)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",component:"h3"},o.title),r.a.createElement("img",{src:"/img/".concat(o.img_url),alt:"my blog pic"}),r.a.createElement(v.a,{variant:"body2"},o.body),r.a.createElement(v.a,{variant:"caption",display:"block",align:"right"},"Writtern by Sayed"),r.a.createElement(h.a,{component:m.b,to:"/edit/".concat(o.id),variant:"contained",color:"primary"},"Edit"),r.a.createElement(h.a,{onClick:function(){return function(e){n(e),l.push("/")}(o.id)},variant:"contained",color:"primary"},"Delete"))})),C=function(){return r.a.createElement("h1",null,"Addpost")},B=function(){return r.a.createElement("h1",null,"EditPost")},O=t(287),W=function(e){var a=e.post;return console.log(a),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",component:"h3"},a.title),r.a.createElement(v.a,{variant:"body2"},a.body),r.a.createElement(h.a,{component:m.b,to:"/post/".concat(a.id),variant:"contained",color:"primary"},"Read More.."))},R=function(e){var a=e.posts;return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(O.a,{elevation:4,key:e.id},r.a.createElement(W,{post:e}))})))},k=function(e){var a=e.posts;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",component:"h3"},"Dashboard"),r.a.createElement(R,{posts:a}))},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"h5",component:"h2"},"Sidebar"),r.a.createElement("p",null,"All sidebar content goes here"))},T=function(e){var a=e.posts;return r.a.createElement(S.a,{container:!0,spacing:2},r.a.createElement(S.a,{item:!0,xs:8},r.a.createElement(k,{posts:a})),r.a.createElement(S.a,{item:!0,xs:4},r.a.createElement(A,null)))},V=[{id:1,title:"this title 1",body:"Lorem ipsum dolloer ahed Lorem ipsum dolloer ahedLorem ipsum dolloer ahedLorem ipsum dolloer ahed",img_url:"1.jpg"},{id:2,title:"this title 2",body:"Lorem ipsum dolloer ahed Lorem ipsum dolloer ahedLorem ipsum dolloer ahedLorem ipsum dolloer ahed",img_url:"2.jpg"},{id:3,title:"this title 3",body:"Lorem ipsum dolloer ahed Lorem ipsum dolloer ahedLorem ipsum dolloer ahedLorem ipsum dolloer ahed",img_url:"3.jpg"}];var _=function(){var e=Object(n.useState)(V),a=Object(i.a)(e,2),t=a[0],l=a[1],o=function(e){l(t.filter((function(a){return a.id!==e})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(w,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,render:function(){return r.a.createElement(T,{posts:t})}}),r.a.createElement(c.a,{path:"/add",component:C}),r.a.createElement(c.a,{path:"/edit/:id",component:B}),r.a.createElement(c.a,{path:"/post/:id",render:function(){return r.a.createElement(j,{posts:t,deletePost:o})}}),r.a.createElement(c.a,{path:"/register",component:L}),r.a.createElement(c.a,{path:"/login",component:q}),r.a.createElement(c.a,{component:x})))))};o.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.a8610284.chunk.js.map