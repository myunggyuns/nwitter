(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),s=n(31),i=n.n(s),o=n(8),u=n(21),l=n(6),j=n(33),b=n(9),d=n.n(b),p=n(16),f=n(54),h=n(23);n(40),n(42),n(52);h.a.initializeApp({apiKey:"AIzaSyDyWdGA_dcrMx6rYjjdEhsX4H-mydHqOeA",authDomain:"nwitter-ca9b4.firebaseapp.com",databaseURL:"https://nwitter-ca9b4.firebaseio.com",projectId:"nwitter-ca9b4",storageBucket:"nwitter-ca9b4.appspot.com",messagingSenderId:"478465497697",appId:"1:478465497697:web:27f366f80395376ae36820"});var O=h.a,m=h.a.auth(),x=h.a.firestore(),v=h.a.storage(),g=n(11),y=n(18),w=function(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(o.a)(n,2),s=r[0],i=r[1],u=Object(c.useState)(""),l=Object(o.a)(u,2),j=l[0],b=l[1],h=function(){var e=Object(p.a)(d.a.mark((function e(n){var a,c,r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==s){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===j){e.next=12;break}return c=v.ref().child("".concat(t.uid,"/").concat(Object(f.a)())),e.next=8,c.putString(j,"data_url");case 8:return r=e.sent,e.next=11,r.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:s,createdat:Date.now(),creatorId:t.uid,attachmentURL:a},e.next=15,x.collection("nweets").add(o);case 15:i(""),b("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("form",{onSubmit:h,className:"factoryForm",children:[Object(a.jsxs)("div",{className:"factoryInput__container",children:[Object(a.jsx)("input",{className:"factoryInput__input",type:"text",placeholder:"What's your mind?",maxLength:120,value:s,onChange:function(e){var t=e.target.value;i(t)}}),Object(a.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(a.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(a.jsx)("span",{children:"Add photos"}),Object(a.jsx)(g.a,{icon:y.b})]}),Object(a.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;b(t)},n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(a.jsxs)("div",{className:"factoryForm__attachment",children:[Object(a.jsx)("img",{src:j,style:{backgroundImage:j},alt:""}),Object(a.jsxs)("div",{className:"factoryForm__clear",onClick:function(){b("")},children:[Object(a.jsx)("span",{children:"Remove"}),Object(a.jsx)(g.a,{icon:y.c})]})]})]})},N=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(c.useState)(t.text),j=Object(o.a)(l,2),b=j[0],f=j[1],h=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delet this nweet?")){e.next=6;break}return e.next=4,x.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,v.refFromURL(t.attachmentURL).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){u(!i)};return Object(a.jsx)("div",{className:"nweet",children:i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.doc("nweets/".concat(t.id)).update({text:b}),u(!1)},className:"container nweetEdit",children:[Object(a.jsx)("input",{type:"text",value:b,placeholder:"What is your mind?",required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;f(t)},className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(a.jsx)("span",{onClick:O,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:t.text}),t.attachmentURL&&Object(a.jsx)("img",{src:t.attachmentURL,alt:""}),n&&Object(a.jsxs)("div",{className:"nweet__actions",children:[Object(a.jsx)("span",{onClick:h,children:Object(a.jsx)(g.a,{icon:y.d})}),Object(a.jsx)("span",{onClick:O,children:Object(a.jsx)(g.a,{icon:y.a})})]})]})})},S=function(e){var t=e.userObj,n=Object(c.useState)([]),r=Object(o.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){x.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(w,{userObj:t}),Object(a.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(a.jsx)(N,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},I=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(c.useState)(!0),b=Object(o.a)(j,2),f=b[0],h=b[1],O=Object(c.useState)(""),x=Object(o.a)(O,2),v=x[0],g=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&l(a)},w=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!f){e.next=7;break}return e.next=5,m.createUserWithEmailAndPassword(n,u);case 5:e.next=9;break;case 7:return e.next=9,m.signInWithEmailAndPassword(n,u);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),g(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:w,className:"container",children:[Object(a.jsx)("input",{type:"email",placeholder:"email",name:"email",value:n,onChange:y,className:"authInput"}),Object(a.jsx)("input",{onChange:y,type:"password",placeholder:"password",name:"password",value:u,className:"authInput"}),Object(a.jsx)("input",{type:"submit",value:f?"Create Account":"Sign In",className:"authInput authSubmit"}),v&&Object(a.jsx)("span",{className:"error",children:v})]}),Object(a.jsx)("span",{onClick:function(){h((function(e){return!e}))},className:"authSwitch",children:f?"Sign In":"Create Account"})]})},k=n(22),C=function(){var e=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new O.auth.GoogleAuthProvider:"github"===n&&(a=new O.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"authContainer",children:[Object(a.jsx)(g.a,{icon:k.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(a.jsx)(I,{}),Object(a.jsxs)("div",{className:"authBtns",children:[Object(a.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(a.jsx)(g.a,{icon:k.b})]}),Object(a.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(a.jsx)(g.a,{icon:k.a})]})]})]})},F=function(e){var t=e.userObj;return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(a.jsx)(g.a,{icon:k.c,color:"#04AAFF",size:"2x"})})}),Object(a.jsx)("li",{children:Object(a.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(a.jsx)(g.a,{icon:y.e,color:"#04AAFF",size:"2x"}),Object(a.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},A=function(e){var t=e.userObj,n=e.refreshUser,r=Object(l.f)(),s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],j=i[1],b=function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("nweets").where("creatorId","==",t.uid).orderBy("createdat").get();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){b()}),[]);var f=function(){var e=Object(p.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===u){e.next=6;break}return e.next=4,t.updateProfile({displayName:u});case 4:n(),j("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:f,className:"profileForm",children:[Object(a.jsx)("input",{className:"formInput",autoFocus:!0,type:"text",placeholder:"displayName",onChange:function(e){var t=e.target.value;j(t)},value:u||""}),Object(a.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(a.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),r.push("/")},children:"Log Out"})]})})},U=function(e){var t=e.isLoggedIn,n=e.userObj,c=e.refreshUser;return Object(a.jsxs)(u.a,{children:[t&&Object(a.jsx)(F,{userObj:n}),Object(a.jsx)(l.c,{children:t?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(S,{userObj:n})}),Object(a.jsx)(l.a,{path:"/profile",children:Object(a.jsx)(A,{userObj:n,refreshUser:c})})]})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(C,{})})})})]})};var _=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(a.jsx)("div",{children:n?Object(a.jsx)(U,{refreshUser:function(){var e=m.currentUser;l({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initialization"})};n(50);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.e74102e0.chunk.js.map