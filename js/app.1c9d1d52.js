(function(t){function e(e){for(var n,u,i=e[0],s=e[1],c=e[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c1e2fc8e"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/til/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"44fa":function(t,e,r){"use strict";var n=r("b714"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[r("p",{staticClass:"router-ptag"},[t._v("justtheory")]),t._v(" "),r("p",{staticClass:"router-ptag router-name"},[t._v("Pruthvi Raj")])])],1),r("router-view")],1)},a=[],u=(r("034f"),r("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),c=s.exports,l=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Navbar",{style:t.aboutMe}),r("p",[t._v(" "+t._s(t.tils[0].til)+" ")]),r("p",[t._v(t._s(t.customers[0].id))])],1)},p=[],d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Row",{staticClass:"parent",attrs:{id:"Container"}},[r("Col",{attrs:{span:"24"}})],1)],1)},v=[],m={props:{msg:String,color:String},mounted(){},computed:{propertyColor(){return this.color}}},b=m,h=(r("44fa"),Object(u["a"])(b,d,v,!1,null,"32e27066",null)),y=h.exports,g=r("2f62"),_={name:"Home",components:{Navbar:y},data:function(){return{aboutMe:{backgroundColor:"#000aaa"}}},computed:{...Object(g["b"])(["tils","customers"])}},w=_,j=Object(u["a"])(w,f,p,!1,null,"798c7156",null),O=j.exports,C=r("f825"),P=r.n(C),x=r("3250"),S=r.n(x);n["default"].use(l["a"]),n["default"].use(P.a,{locale:S.a});const k=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],E=new l["a"]({routes:k});var M=E;n["default"].use(g["a"]);var T=new g["a"].Store({state:{tils:[{til:"i tried to finish the story"}],customers:[{id:"1",name:"user 1"}]},mutations:{},actions:{},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:M,store:T,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,r){},b714:function(t,e,r){}});
//# sourceMappingURL=app.1c9d1d52.js.map