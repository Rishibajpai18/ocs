(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{6748:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/u/createPost",function(){return r(3020)}])},3020:function(e,t,r){"use strict";r.r(t);var n=r(4051),a=r.n(n),i=r(5893),s=r(7294),l=r(3747),c=r(1664),o=r.n(c),u=r(7623),d=r(3247),h=r(9008);function p(e,t,r,n,a,i,s){try{var l=e[i](s),c=l.value}catch(o){return void r(o)}l.done?t(c):Promise.resolve(c).then(n,a)}t.default=function(){var e=(0,s.useContext)(l.Z),t=e.user,r=e.setToast,n=(0,s.useState)("c"),c=n[0],x=n[1],v=(0,s.useState)(""),f=v[0],m=v[1],j=(0,s.useState)(""),b=j[0],g=j[1],y=(0,s.useState)("Public"),_=y[0],C=y[1],N=(0,s.useState)(!1),P=N[0],k=N[1],w=function(e){C(e.target.value)},T=function(){var e,t=(e=a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P){e.next=2;break}return e.abrupt("return");case 2:if(!u.I8.currentUser.emailVerified){e.next=20;break}if(!(f.length<5)){e.next=6;break}return r("Enter Proper Title","toastF"),e.abrupt("return");case 6:if(!(b.length<20)){e.next=9;break}return r("Try to provide some explaination in code","toastF"),e.abrupt("return");case 9:return k(!0),t=(0,d.JU)((0,d.hJ)(u.RZ,"CodePosts")),e.next=13,(0,d.pl)(t,{author:u.I8.currentUser.displayName,title:f,tag:c,code:b,posttype:_,date:(0,d.Bt)(),pid:t.id,uid:u.I8.currentUser.uid,queryTag:f.toLowerCase().split(" "),likes:0,likedBy:[]});case 13:k(!1),r("Post Created","toastS"),x(""),m(""),g(""),e.next=21;break;case 20:r("Please Verify your email first");case 21:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){p(i,n,a,s,l,"next",e)}function l(e){p(i,n,a,s,l,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.default,{children:(0,i.jsx)("title",{children:"CreatePost"})}),(0,i.jsx)("div",{className:"container",children:t?(0,i.jsxs)("div",{className:"creaePostCard flex_c",children:[(0,i.jsxs)("div",{className:"tag flex_c",children:[(0,i.jsx)("label",{htmlFor:"slug",children:"Tag"}),(0,i.jsxs)("select",{className:"cinput",value:c,onChange:function(e){return x(e.target.value)},children:[(0,i.jsx)("option",{value:"c",children:"C"}),(0,i.jsx)("option",{value:"python",children:"Python"}),(0,i.jsx)("option",{value:"c++",children:"C++"})]})]}),(0,i.jsxs)("div",{className:"tag flex_c",children:[(0,i.jsx)("label",{htmlFor:"title",children:"Title"}),(0,i.jsx)("input",{className:"cinput",type:"text",name:"title",id:"title",placeholder:"WAP to calculate sum of factors.",value:f,onChange:function(e){return m(e.target.value)}})]}),(0,i.jsxs)("div",{className:"codeBody flex_c",children:[(0,i.jsx)("label",{htmlFor:"orig_code",children:"Code"}),(0,i.jsx)("textarea",{className:"cinput",type:"text",name:"orig_code",id:"orig_code",placeholder:"Paste your code here",cols:"30",rows:"20",value:b,onChange:function(e){return g(e.target.value)}})]}),(0,i.jsxs)("div",{className:"public_private flex_c",children:[(0,i.jsxs)("div",{className:"pub mrb_1",children:[(0,i.jsx)("input",{type:"radio",id:"public",name:"postType",value:"Public",onChange:w,defaultChecked:!0}),(0,i.jsx)("label",{htmlFor:"public",children:"Public (everyone can see it)"})]}),(0,i.jsxs)("div",{className:"private mrb_1",children:[(0,i.jsx)("input",{type:"radio",id:"private",name:"postType",value:"Private",onChange:w}),(0,i.jsx)("label",{htmlFor:"private",children:"Private (only you can see)"})]})]}),(0,i.jsx)("div",{className:"submitBtn",onClick:T,children:P?"Uploading":"Add Code"})]}):(0,i.jsx)("div",{className:"firstloginbtn",children:(0,i.jsx)(o(),{href:"/u/login",children:(0,i.jsx)("a",{children:"Login First"})})})})]})}},9008:function(e,t,r){e.exports=r(3121)}},function(e){e.O(0,[774,888,179],(function(){return t=6748,e(e.s=t);var t}));var t=e.O();_N_E=t}]);