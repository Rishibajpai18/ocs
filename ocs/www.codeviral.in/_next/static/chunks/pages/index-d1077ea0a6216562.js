(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1008)}])},2801:function(e,t,n){"use strict";var r=n(5893),o=n(7294),s=(n(7623),n(3247),n(1664)),i=n.n(s),l=n(3747);t.Z=function(e){var t=e.val,n=(0,o.useContext)(l.Z),s=n.user,a=(n.setToast,n.deletePost),c=(n.searching,n.setSearching,n.coptToClipboard),u=(n.router,n.likeThePost),h=n.tempLiked;return(0,r.jsxs)("div",{className:"postcard",children:[(0,r.jsxs)("div",{className:"userDet",children:["\ud83d\ude0e ",t.author]}),(0,r.jsx)(i(),{href:"/codeview/".concat(t.pid),children:(0,r.jsx)("a",{children:(0,r.jsxs)("div",{className:"postTitle",children:["Q. ",t.title]})})}),(0,r.jsxs)("div",{className:"codeTag",children:["#",t.tag]}),(0,r.jsxs)("div",{className:"postdata",children:[(0,r.jsx)("div",{className:"copytoClipH curP",onClick:function(){return c(t.code)},children:(0,r.jsx)("ion-icon",{name:"clipboard-outline"})}),(0,r.jsx)("pre",{children:t.code})]}),(0,r.jsxs)("div",{className:"bottomMenu",children:[(0,r.jsxs)("div",{className:"likePostButton curP ".concat(s&&t.likedBy.includes(s.uid)||h.includes(t.pid)?"likedPost":""),onClick:function(){return e=t.pid,void(h.includes(e)?console.log("already Liked"):u(e));var e},children:[(0,r.jsx)("ion-icon",{name:"code-slash-outline"})," ",h.includes(t.pid)?t.likes+1:t.likes," Viral"]}),(0,r.jsxs)("div",{className:"shareButton curP",onClick:function(){return c("https://www.codeviral.in/codeview/".concat(t.pid))},children:[(0,r.jsx)("ion-icon",{name:"share-social-outline"}),"Share"]})]}),s&&"shivamsaksham2000@gmail.com"===s.email?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"postdel curP",onClick:function(){return a(t.pid)},children:"Delete"})}):(0,r.jsx)(r.Fragment,{})]})}},2136:function(e,t,n){"use strict";var r=n(5893);n(7294);t.Z=function(){return(0,r.jsx)("div",{className:"center",children:(0,r.jsxs)("div",{className:"waviy",style:{},children:[(0,r.jsx)("span",{style:{"--i":1},children:"L"}),(0,r.jsx)("span",{style:{"--i":2},children:"o"}),(0,r.jsx)("span",{style:{"--i":3},children:"a"}),(0,r.jsx)("span",{style:{"--i":4},children:"d"}),(0,r.jsx)("span",{style:{"--i":5},children:"i"}),(0,r.jsx)("span",{style:{"--i":6},children:"n"}),(0,r.jsx)("span",{style:{"--i":7},children:"g"}),(0,r.jsx)("span",{style:{"--i":8},children:"."})]})})}},2425:function(e,t,n){"use strict";var r=n(5893),o=n(7294),s=n(3747);t.Z=function(){var e=(0,o.useContext)(s.Z),t=e.querytext,n=e.setQuery,i=(e.searchQuery,e.setToast),l=e.router,a=e.getqueryResult,c=function(){t.length<4?i("Search should have more than 4 Character","toastF"):(l.push("/search/".concat(t)),a(t))};return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"searchBox",children:[(0,r.jsx)("input",{type:"text",name:"query",value:t,onChange:function(e){return n(e.target.value)},id:"query",placeholder:"Search by Question and language. eg: strong number , c",onKeyDown:function(e){"Enter"===e.key&&c()}}),(0,r.jsx)("div",{className:"search_ic curP",onClick:c,children:(0,r.jsx)("ion-icon",{name:"search-outline"})})]})})}},1008:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(4051),o=n.n(r),s=n(5893),i=n(9008),l=(n(5675),n(4298),n(7623)),a=n(7294),c=function(e,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},c(e,t)};var u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};var h="Pixel",d="Percent",p={unit:d,value:.8};function f(e){return"number"===typeof e?{unit:d,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:h,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:d,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),p):(console.warn("scrollThreshold should be string or number"),p)}var v=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,r){var o,s=!1,i=0;function l(){o&&clearTimeout(o)}function a(){var a=this,c=Date.now()-i,u=arguments;function h(){i=Date.now(),n.apply(a,u)}function d(){o=void 0}s||(r&&!o&&h(),l(),void 0===r&&c>e?h():!0!==t&&(o=setTimeout(r?d:h,void 0===r?e-c:e)))}return"boolean"!==typeof t&&(r=n,n=t,t=void 0),a.cancel=function(){l(),s=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?u(u({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=f(t);return r.unit===h?e.scrollTop<=r.value+n-e.scrollHeight+1:e.scrollTop<=r.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=f(t);return r.unit===h?e.scrollTop+n>=e.scrollHeight-r.value:e.scrollTop+n>=r.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=u({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return a.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(a.Component),m=v,g=n(3247),y=n(2136),x=n(3747),w=n(2425),j=n(1664),T=n.n(j),S=n(2801);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t,n,r,o,s,i){try{var l=e[s](i),a=l.value}catch(c){return void n(c)}l.done?t(a):Promise.resolve(a).then(r,o)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function i(e){E(s,r,o,i,l,"next",e)}function l(e){E(s,r,o,i,l,"throw",e)}i(void 0)}))}}function _(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(){var e=(0,a.useState)([]),t=e[0],n=e[1],r=(0,a.useState)([]),c=r[0],u=r[1],h=(0,a.useState)(!0),d=h[0],p=h[1],f=(0,a.useContext)(x.Z),v=f.user,j=(f.setToast,f.deletePost,f.searching),b=(f.setSearching,f.coptToClipboard,f.router,f.goUp);(0,a.useEffect)((function(){n([]);var e=function(){var e=L(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.PL)((0,g.IO)((0,g.hJ)(l.RZ,"CodePosts"),(0,g.ar)("posttype","==","Public"),(0,g.Xo)("date","desc"),(0,g.b9)(7)));case 2:t=e.sent,n([]),u(t.docs[t.docs.length-1]),t.forEach((function(e){n((function(t){return _(t).concat([e.data()])}))}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var E=function(){var e=L(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.PL)((0,g.IO)((0,g.hJ)(l.RZ,"CodePosts"),(0,g.ar)("posttype","==","Public"),(0,g.Xo)("date","desc"),(0,g.TQ)(c),(0,g.b9)(7)));case 2:if(t=e.sent,u(t.docs[t.docs.length-1]),!t.empty){e.next=7;break}return p(!1),e.abrupt("return");case 7:t.forEach((function(e){n((function(t){return _(t).concat([e.data()])}))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("meta",{name:"description",content:"Save Your Codes easily and share them with the World. Save your code in Public And Private Mode. Hackerrank Solutions. Code Solutions."}),(0,s.jsx)("meta",{name:"keywords",content:"code viral , codeviral , CodeViral, Hackerrank Solution, codes"}),(0,s.jsx)("meta",{name:"author",content:"Shivam Saksham"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("title",{children:"CodeViral"})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{className:"landing",children:[(0,s.jsx)("div",{className:"slogan",children:"<Where Code Lives/>"}),(0,s.jsxs)("div",{className:"sloganHelper",children:["Save Your Code : Share Your Code : Make it Viral.",(0,s.jsx)("br",{}),"Create Account to Save Codes"]}),(0,s.jsx)(T(),{href:v?"u/createPost":"/u/createaccount",children:(0,s.jsx)("a",{className:"buttonEffect",children:"Save Your Code"})})]}),(0,s.jsx)("div",{className:"search",children:(0,s.jsx)(w.Z,{})}),(0,s.jsxs)("div",{className:"allPost flex_c",children:[(0,s.jsx)(m,{dataLength:t.length,next:E,hasMore:d,loader:(0,s.jsx)(y.Z,{}),endMessage:(0,s.jsx)("div",{className:"center",children:'"No More Codes"'}),children:t&&Object.values(t).map((function(e,t){return(0,s.jsx)("div",{children:(0,s.jsx)(S.Z,{val:e})},t)}))}),j?(0,s.jsx)("div",{className:"center",children:(0,s.jsx)(y.Z,{})}):(0,s.jsx)("div",{className:"center",children:(0,s.jsx)(T(),{href:"/u/createPost",children:(0,s.jsx)("a",{className:"addPostForPublicButton",children:"Add Your Code"})})})]})]}),(0,s.jsx)("div",{className:"floatingButtonToGOUp",onClick:function(){b()},children:(0,s.jsx)("ion-icon",{name:"caret-up-outline"})})]})}},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);