(function(t){function e(e){for(var o,a,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},r={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"03a2f794","chunk-024e0cc0":"338c1a40","chunk-03d948cd":"5a33d9d7","chunk-648bb94d":"c1294661","chunk-686e2b28":"6a7f0034","chunk-9fa5f6b4":"154b4374"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-024e0cc0":1,"chunk-03d948cd":1,"chunk-648bb94d":1,"chunk-686e2b28":1,"chunk-9fa5f6b4":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-024e0cc0":"d44f6826","chunk-03d948cd":"1354f619","chunk-648bb94d":"efa02c2d","chunk-686e2b28":"878ed617","chunk-9fa5f6b4":"fae1c0ac"}[t]+".css",r=c.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===o||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[t],p.parentNode.removeChild(p),n(s)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",f.name="ChunkLoadError",f.type=o,f.request=a,n[1](f)}r[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"025e":function(t,e,n){"use strict";n("fb6a"),n("d3b7"),n("25f0");function o(){var t=new bootstrap.Modal(document.getElementById("notificationModal"),{keyboard:!1});t.show()}function a(){return Math.random().toString(16).slice(2)}e["a"]={showNotificationModal:o,uuid:a}},"034f":function(t,e,n){"use strict";n("85ec")},"314b":function(t,e,n){"use strict";n("99af");var o=n("bc3a"),a=n.n(o),r=a.a.create({baseURL:"http://localhost:3000",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":"*"},timeout:1e4}),s=a.a.create({baseURL:"http://localhost:3000",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"multipart/form-data","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":"*"},timeout:1e4});e["a"]={getAllPosts:function(){return r.get("/api/post")},createNewPost:function(t){return s.post("/api/post",t)},getPostByID:function(t,e){return r.post("/api/post/".concat(t),e)},updatePost:function(t,e){return r.put("/api/post/".concat(t),e)},deletePost:function(t){return r.delete("/api/post/".concat(t))},createComment:function(t,e){return r.post("/api/post/".concat(t,"/comment"),e)},getOneComment:function(t,e){return r.get("/api/post/".concat(t,"/comment/").concat(e,"/edit"))},updateComment:function(t,e,n){return r.post("/api/post/".concat(t,"/comment/").concat(e),n)},deleteComment:function(t,e){return r.delete("/api/post/".concat(t,"/comment/").concat(e))},createReact:function(t,e){return r.post("/api/post/".concat(t,"/react"),e)},updateReact:function(t,e,n){return r.post("/api/post/".concat(t,"/react/").concat(e),n)},deleteReact:function(t,e){return r.delete("/api/post/".concat(t,"/react/").concat(e))},isLoggedIn:function(){return r.post("/isloggedin")},register:function(t){return r.post("/register",t)},logIn:function(t){return r.post("/login",t)},logOut:function(){return r.get("/logout")},changePassword:function(t){return r.post("/change-password",t)},resetPassword:function(t){return r.post("/reset-password",t)}}},"36f9":function(t,e,n){"use strict";n("a9bc")},"3cbe":function(t,e,n){},4360:function(t,e,n){"use strict";var o={};n.r(o),n.d(o,"namespaced",(function(){return c})),n.d(o,"state",(function(){return u})),n.d(o,"mutations",(function(){return l})),n.d(o,"actions",(function(){return f})),n.d(o,"getters",(function(){return p}));var a={};n.r(a),n.d(a,"namespaced",(function(){return v})),n.d(a,"state",(function(){return h})),n.d(a,"mutations",(function(){return m})),n.d(a,"actions",(function(){return g}));var r=n("2b0e"),s=n("2f62"),i=(n("7db0"),n("a434"),n("314b")),c=!0,u={posts:[],post:{},user:void 0},l={SET_POSTS:function(t,e){t.posts=e},SET_POST:function(t,e){t.post=e},SET_USER:function(t,e){t.user=e}},f={getAllPosts:function(t){var e=t.commit;return i["a"].getAllPosts().then((function(t){e("SET_POSTS",t.data[0]),e("SET_USER",t.data[1])})).catch((function(t){console.log(t)}))},addNewPost:function(t,e){var n=t.commit,o=t.state;n("SET_POSTS",[e,o.posts])},updatePosts:function(t,e){var n=t.state,o=e.post,a=e.index;n.posts.splice(a,1,o)},deletePostsReact:function(t,e){var n=t.state,o=e.postIndex,a=e.reactIndex;delete n.posts[o].reacts[a]},getPostByID:function(t,e){var n=t.commit;return i["a"].getPostByID(e).then((function(t){n("SET_POST",t.data[0]),n("SET_USER",t.data[1])})).catch((function(t){console.log(t)}))},saveUser:function(t,e){var n=t.commit;n("SET_USER",e)},forgetUser:function(t){var e=t.commit;e("SET_USER",void 0)}},p={getProductById:function(t){return function(e){return t.products.find((function(t){return t.id===e}))}}},d=n("025e"),v=!0,h={notification:{}},m={SET_NOTIFICATION:function(t,e){t.notification=e}},g={showNotification:function(t,e){var n=t.commit;n("SET_NOTIFICATION",e),d["a"].showNotificationModal()}};r["a"].use(s["a"]);e["a"]=new s["a"].Store({state:{},mutations:{},actions:{},modules:{postStore:o,notificationStore:a}})},"56d7":function(t,e,n){"use strict";n.r(e);n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("2b27"),r=n.n(a),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Base-Navbar"),n("div",{staticClass:"container",staticStyle:{padding:"0"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col",staticStyle:{padding:"0"}},[n("div",{staticClass:"wrapper"},[n("router-view",{key:t.$route.fullPath})],1)])])]),n("Base-Notification-Modal")],1)},i=[],c=(n("96cf"),n("1da1")),u=(n("025e"),n("323e")),l=n.n(u),f=n("314b"),p={data:function(){return{}},methods:{checkLoginStatus:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.callServices();case 2:case"end":return e.stop()}}),e)})))()},callServices:function(){var t=this;return l.a.start(),f["a"].isLoggedIn().then((function(e){l.a.done(),t.$store.dispatch("postStore/saveUser",e.data[0])})).catch((function(e){t.$store.dispatch("notificationStore/showNotification",{catagory:"error",title:"Connection Problem",message:"You are offline."}),l.a.done()}))}},mounted:function(){this.checkLoginStatus(),document.querySelector(".wrapper").style.marginTop="".concat(document.querySelector("nav").scrollHeight,"px")},components:{}},d=p,v=(n("034f"),n("2877")),h=Object(v["a"])(d,s,i,!1,null,null,null),m=h.exports,g=n("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var b=n("8c4f"),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},w=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),t._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[t._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],y={name:"HelloWorld",props:{msg:String}},S=y,E=(n("775d"),Object(v["a"])(S,k,C,!1,null,"6351c8a7",null)),j=E.exports,O={name:"Home",components:{HelloWorld:j}},P=O,N=Object(v["a"])(P,_,w,!1,null,null,null),T=N.exports;o["a"].use(b["a"]);var x=[{path:"/newsfeed",name:"Newsfeed",component:function(){return n.e("chunk-9fa5f6b4").then(n.bind(null,"e2cb"))},props:!0},{path:"/createnewpost",name:"CreateNewPost",component:function(){return n.e("chunk-686e2b28").then(n.bind(null,"218c"))},props:!0},{path:"/",name:"Home",component:T,props:!0},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},props:!0},{path:"/login",name:"Login",component:function(){return n.e("chunk-648bb94d").then(n.bind(null,"9ddf"))},props:!0},{path:"/signup",name:"Signup",component:function(){return n.e("chunk-024e0cc0").then(n.bind(null,"5c9c"))},props:!0},{path:"/404",name:"404",component:function(){return n.e("chunk-03d948cd").then(n.bind(null,"8cdb"))},props:!0},{path:"*",redirect:{name:"404"}}],A=new b["a"]({mode:"history",base:"/",routes:x}),L=A,I=n("4360"),$=(n("a5d8"),n("1dce")),M=n.n($),B=n("8103"),D=n.n(B),U=n("bba4"),R=n.n(U);o["a"].use(r.a),o["a"].use(M.a),o["a"].config.productionTip=!1;var F=n("ef13");F.keys().forEach((function(t){var e=F(t),n=D()(R()(t.split("/").pop().replace(/\.\w+$/,"")));o["a"].component(n,e.default||e)})),new o["a"]({router:L,store:I["a"],render:function(t){return t(m)}}).$mount("#app")},"5c95":function(t,e,n){},"775d":function(t,e,n){"use strict";n("3cbe")},"85ec":function(t,e,n){},a9bc:function(t,e,n){},bc1e:function(t,e,n){"use strict";n("5c95")},c377:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"modal fade",attrs:{id:"notificationModal",tabindex:"-1","aria-labelledby":"notificationModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"notificationModalLabel"}},["error"===this.catagory.toLowerCase()?n("span",[n("i",{staticClass:"fas fa-exclamation-triangle fa-fw"})]):t._e(),n("span",[t._v(" "+t._s(this.title)+" ")])])]),n("div",{staticClass:"modal-body"},[n("span",[t._v(" "+t._s(this.message)+" ")])]),t._m(0)])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Close")])])}],r=n("5530"),s=n("2f62"),i={name:"Base-Notification-Modal",props:{},data:function(){return{nullNotification:{catagory:"null",title:"warning: Title is empty",message:"warning: Message is empty"}}},methods:{getDataFromProps:function(t){return void 0!==this.notification[t]&&0!==this.notification[t].length?this.notification[t]:this.nullNotification[t]}},computed:Object(r["a"])({catagory:function(){return this.getDataFromProps("catagory")},title:function(){return this.getDataFromProps("title")},message:function(){return this.getDataFromProps("message")}},Object(s["b"])("notificationStore",["notification"]))},c=i,u=(n("36f9"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,"13f87300",null);e["default"]=l.exports},c8ce:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg fixed-top bg-dark navbar-dark"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[n("i",{staticClass:"fab fa-asymmetrik fa-fw fa-2x"}),n("span",[t._v(" Meme Verse ")])]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[n("div",{staticClass:"navbar-nav"},[n("router-link",{staticClass:"nav-item",attrs:{to:{name:"Newsfeed"}}},[n("span",{staticClass:"nav-link"},[t._v(" Newsfeed ")])]),t.user?t._e():[n("router-link",{staticClass:"nav-item",attrs:{to:{name:"Login"}}},[n("span",{staticClass:"nav-link"},[t._v(" Log in ")])]),n("router-link",{staticClass:"nav-item",attrs:{to:{name:"Signup"}}},[n("span",{staticClass:"nav-link"},[t._v(" Sign Up ")])])],t.user?[n("router-link",{staticClass:"nav-item",attrs:{to:{name:"CreateNewPost"}}},[n("span",{staticClass:"nav-link"},[t._v(" Create Post ")])]),n("a",{staticClass:"nav-item",attrs:{href:""},on:{click:function(e){return t.logout()}}},[n("span",{staticClass:"nav-link"},[t._v(" Log out ")])])]:t._e(),t._m(1)],2)])],1)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form-inline d-flex"},[n("input",{staticClass:"form-control mr-sm-2 col-4",attrs:{type:"search",placeholder:"Image, People, Groups","aria-label":"Search"}})])}],r=n("5530"),s=n("2f62"),i=n("314b"),c={name:"Base-Navbar",props:{},data:function(){return{}},methods:{logout:function(){var t=this;return i["a"].logOut().then((function(e){t.$store.dispatch("postStore/forgetUser"),t.$store.dispatch("notificationStore/showNotification",e.data[1])})).catch((function(t){return console.log(t)}))}},computed:Object(r["a"])({},Object(s["b"])("postStore",["user"]))},u=c,l=(n("bc1e"),n("2877")),f=Object(l["a"])(u,o,a,!1,null,"11ac08a8",null);e["default"]=f.exports},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},ef13:function(t,e,n){var o={"./BaseNavbar.vue":"c8ce","./BaseNotificationModal.vue":"c377"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="ef13"}});
//# sourceMappingURL=app.eb9f4ca2.js.map