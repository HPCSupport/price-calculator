(function(t){function e(e){for(var a,u,c=e[0],o=e[1],l=e[2],p=0,d=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);s&&s(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},i=[];function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"3cb6":function(t,e,n){"use strict";var a=n("43cc"),r=n.n(a);r.a},"3dfd":function(t,e,n){},"43cc":function(t,e,n){},"5ed6":function(t,e,n){},9480:function(t,e,n){"use strict";var a=n("5ed6"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("fd85"),n("15db"),n("c026"),n("4031");var a=n("e832"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.config?n("Configuration",{attrs:{id:"app"}}):n("Calculator",{attrs:{id:"app",price:t.price}})},i=[],u=(n("32ec"),n("5f99"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4",attrs:{"data-calculator":""}},[n("div",{staticClass:"flex flex-row pb-5 w-full"},[n("p",{staticClass:"text-3xl text-gray-600"},[t._v("Price is estimated to be")]),n("p",{staticClass:"text-3xl text-gray-800 pl-4"},[t._v(t._s(t.total))])]),n("div",{staticClass:"flex flex-row flex-wrap"},t._l(t.price,(function(e,a){return n("div",{key:a,staticClass:"input-area"},[n("p",{staticClass:"input-header"},[t._v(t._s(e.name.title.value))]),n("PairData",{attrs:{h1:e.name.qty.value,h2:e.name.multiplier.value,price:e.price.base.value,d1:e.price.qty.value,v1:t.is_positive_integer,d2:e.price.multiplier.value,v2:t.is_positive_integer},on:{"update:d1":function(n){return t.$set(e.price.qty,"value",n)},"update:d2":function(n){return t.$set(e.price.multiplier,"value",n)}}})],1)})),0)])}),c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col",attrs:{"data-pair-data":""}},[n("div",{staticClass:"flex-input"},[n("p",{staticClass:"pr-4 my-1 my-auto"},[t._v(t._s(t.h1)+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data1,expression:"data1"}],class:[t.valid_d1,"input"],domProps:{value:t.data1},on:{input:function(e){e.target.composing||(t.data1=e.target.value)}}})]),n("div",{staticClass:"flex-input"},[n("p",{staticClass:"pr-4 my-1 my-auto"},[t._v(t._s(t.h2)+":")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data2,expression:"data2"}],class:[t.valid_d2,"input"],domProps:{value:t.data2},on:{input:function(e){e.target.composing||(t.data2=e.target.value)}}})]),n("div",{staticClass:"flex-input"},[n("p",{staticClass:"pr-4 my-1"},[t._v("Subtotal:")]),n("p",[t._v(t._s(t.subtotal))])])])},l=[],s=(n("7e9e"),n("8460")),p=n("68d6"),d=(n("f2b6"),n("581e"),n("241c"),n("f542"),n("cbcf"),n("5832")),f=function(t){var e=Object(p["a"])(t,2),n=e[0],a=e[1],r=n.toString(),i=r.lastIndexOf(".");if(i>-1){var u=r.slice(2).length;return[Math.floor(n*Math.pow(10,u)),a-u]}var c=r.length-r.replace(/0*$/,"").length;return[n/Math.pow(10,c),a+c]},v=function(t){return"number"===typeof t?f([t,0]):t},b=function(t){return"number"===typeof t?t:t[0]*Math.pow(10,t[1])},m=function(t,e){var n=f(v(t)),a=Object(p["a"])(n,2),r=a[0],i=a[1],u=f(v(e)),c=Object(p["a"])(u,2),o=c[0],l=c[1],s=i-l;if(0===s)return{a:[r,i],b:[o,l]};if(s>0)return{a:[r*Math.pow(10,s),i-s],b:[o,l]};var d=Math.abs(s);return{a:[r,i],b:[o*Math.pow(10,d),l-d]}},h=Object(d["curry"])((function(t,e,n){return Object(d["compose"])(f,t,m)(e,n)})),g=(h((function(t){var e=Object(p["a"])(t.a,2),n=e[0],a=e[1],r=Object(p["a"])(t.b,1),i=r[0];return[n+i,a]})),h((function(t){var e=Object(p["a"])(t.a,2),n=e[0],a=e[1],r=Object(p["a"])(t.b,2),i=r[0],u=r[1];return[n/i,a-u]})),h((function(t){var e=Object(p["a"])(t.a,2),n=e[0],a=e[1],r=Object(p["a"])(t.b,2),i=r[0],u=r[1];return[n*i,a+u]}))),O=(h((function(t){var e=Object(p["a"])(t.a,2),n=e[0],a=e[1],r=Object(p["a"])(t.b,2),i=r[0],u=r[1];return[Math.pow(n*Math.pow(10,a),i*Math.pow(10,u)),0]})),h((function(t){var e=Object(p["a"])(t.a,2),n=e[0],a=e[1],r=Object(p["a"])(t.b,1),i=r[0];return[n-i,a]})),n("862d"),n("7bea"),function(t){var e=Math.round(100*t);return[Math.floor(t),e%100]}),y=function t(e){return e.length>3?"".concat(t(e.slice(0,e.length-3)),",").concat(e.slice(e.length-3)):e},j=function(t){var e=Object(p["a"])(t,2),n=e[0],a=e[1];return"".concat(y(n.toString()),".").concat(a.toString().padStart(2,"0"))},x=function(t){return"$".concat(Object(d["compose"])(j,O)(t))},_=Object(s["c"])({props:{h1:{type:String,required:!0},h2:{type:String,required:!0},d1:{type:Number,required:!0},d2:{type:Number,required:!0},price:{type:Number,required:!0},v1:{required:!0},v2:{required:!0}},setup:function(t,e){var n=Object(s["d"])(""),a=Object(s["d"])(""),r=Object(s["a"])({get:function(){return t.d1},set:function(a){var r=t.v1(a);n.value=null===r?"error":"",null!==r&&e.emit("update:d1",r)}}),i=Object(s["a"])({get:function(){return t.d2},set:function(n){var r=t.v2(n);a.value=null===r?"error":"",null!==r&&e.emit("update:d2",r)}}),u=Object(s["a"])((function(){return Object(d["compose"])(x,b,g(t.d2),g(t.d1))(t.price)}));return{data1:r,data2:i,subtotal:u,valid_d1:n,valid_d2:a}}}),w=_,C=w,q=(n("f9de"),n("a6c2")),M=Object(q["a"])(C,o,l,!1,null,null,null),P=M.exports,$=n("38df"),S=n.n($),k=n("fec7"),N=n.n(k),D=n("cbc1"),E=n.n(D);function T(t){if(!isFinite(+t))return null;var e=Math.round(+t);return e<0?null:e}var A=Object(s["c"])({components:{PairData:P},props:{price:{}},setup:function(t){var e=function(){return E()(x,N.a,S()(b),S()((function(t){var e=t.price,n=e.qty,a=e.multiplier,r=e.base;return E()(g(n.value),g(a.value))(r.value)})))(t.price)},n=Object(s["a"])(e);return{total:n,is_positive_integer:T}}}),F=A,I=F,J=(n("3cb6"),Object(q["a"])(I,u,c,!1,null,"9b51ca48",null)),W=J.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4",attrs:{"data-calculator":""}},[n("Draggable",{on:{end:t.update_indexes}},[n("transition-group",{ref:"items",staticClass:"flex flex-wrap"},t._l(t.price,(function(e){return n("div",{key:e.id,staticClass:"input-area dist-flex input-box",attrs:{id:e.id}},[n("div",{staticClass:"inputs dist-flex h-full py-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"d.title"}],staticClass:"title",attrs:{placeholder:"Title of component (eg. Work Cost)"},domProps:{value:e.title},on:{input:function(n){n.target.composing||t.$set(e,"title",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.qty,expression:"d.qty"}],staticClass:"item",attrs:{placeholder:"Item name (eg. Work)"},domProps:{value:e.qty},on:{input:function(n){n.target.composing||t.$set(e,"qty",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.multiplier,expression:"d.multiplier"}],staticClass:"units",attrs:{placeholder:"Units (eg. Hours)"},domProps:{value:e.multiplier},on:{input:function(n){n.target.composing||t.$set(e,"multiplier",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.base,expression:"d.base"}],staticClass:"cost",class:[t.valid[e.id]],attrs:{placeholder:"Cost per unit (eg. 0.5)"},domProps:{value:e.base},on:{input:function(n){n.target.composing||t.$set(e,"base",n.target.value)}}})]),n("button",{staticClass:"btn rem w-full",on:{click:function(){return t.remove(e.id)}}},[t._v("Remove")])])})),0)],1),n("button",{staticClass:"btn add input-box",on:{click:t.insert}},[t._v("Add")]),n("button",{staticClass:"btn go input-box",on:{click:t.go}},[t._v("Go")])],1)},H=[],Q=(n("9588"),n("2252"),n("46d4"),n("966c"),n("c770"),n("dddc"),n("755f")),R=n("e82c"),U=n("c2d1"),z=n.n(U),B=n("43a1"),K=n.n(B),L=n("4328"),V=n.n(L);function X(t){return isFinite(+t)?t:null}var Y=Object(s["c"])({components:{PairData:P,Draggable:K.a},setup:function(){var t=Object(s["d"])([]),e=function(){t.value=[].concat(Object(R["a"])(t.value),[{id:"".concat(t.value.reduce((function(t,e){return Math.max(t,+e.id+1)}),0)),title:"",multiplier:"",qty:"",base:""}])},n=function(e){t.value=t.value.filter((function(t){var n=t.id;return n!==e}))},a=Object(s["d"])(null),r=function(){var e=[];a.value.$el.childNodes.forEach((function(n){t.value.find((function(t){return t.id===n.id}))&&e.push(n.id)})),t.value=S()((function(e){return t.value.find((function(t){return t.id===e}))}),e)},i=Object(s["a"])((function(){return E()(z.a,S()((function(t){var e=t.id,n=t.base;return[e,null===X(n)?"error":""]})))(t.value)})),u=function(){window.location.search=V.a.stringify(t.value.map((function(t){t.id;var e=Object(Q["a"])(t,["id"]);return e})))};return{price:t,insert:e,remove:n,valid:i,update_indexes:r,items:a,go:u}}}),Z=Y,tt=Z,et=(n("9480"),Object(q["a"])(tt,G,H,!1,null,"a0c33048",null)),nt=et.exports,at=(n("0ffc"),n("862b")),rt=function t(e,n){var a=this;Object(at["a"])(this,t),this.base=n.ref(+e.base),this.qty=n.ref(0),this.multiplier=n.ref(0),this.total=n.computed((function(){return a.qty.value*a.multiplier.value*a.base.value}))},it=function t(e,n){Object(at["a"])(this,t),this.title=n.ref(e.title),this.qty=n.ref(e.qty),this.multiplier=n.ref(e.multiplier)},ut=function t(e,n){Object(at["a"])(this,t),this.name=new it(e,n),this.price=new rt(e,n)};function ct(t){return S()((function(t){return new ut(t,{ref:s["d"],computed:s["a"]})}),V.a.parse(t,{ignoreQueryPrefix:!0}))}var ot=a["a"].extend({name:"App",components:{Calculator:W,Configuration:nt},data:function(){return{price:[],config:!1}},beforeMount:function(){window.location.search?this.price=ct(window.location.search):this.config=!0}}),lt=ot,st=Object(q["a"])(lt,r,i,!1,null,null,null),pt=st.exports;n("db43");a["a"].config.productionTip=!1,a["a"].use(s["b"]),new a["a"]({render:function(t){return t(pt)}}).$mount("#app")},db43:function(t,e,n){},f9de:function(t,e,n){"use strict";var a=n("3dfd"),r=n.n(a);r.a}});
//# sourceMappingURL=app.248709a0.js.map