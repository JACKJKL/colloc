!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=11)}([function(t,n,r){var e=r(1);t.exports=!e(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports={}},function(t,n,r){(function(n){var r="object",e=function(t){return t&&t.Math==Math&&t};t.exports=e(typeof globalThis==r&&globalThis)||e(typeof window==r&&window)||e(typeof self==r&&self)||e(typeof n==r&&n)||Function("return this")()}).call(this,r(17))},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(0),o=r(1),u=r(24);t.exports=!e&&!o(function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){t.exports=r(13)},function(t,n,r){t.exports=r(31)},function(t,n,r){t.exports=r(12)},function(t,n,r){"use strict";r.r(n);var e=r(9),o=r.n(e),u=r(10),i=r.n(u);wx.onMessage(function(t){var n=t.type,r=t.data;"upload"===n&&(e=r,wx.setUserCloudStorage({KVDataList:[{key:"chart",value:i()({wxgame:{score:e,update_time:o()()}})}]}));var e})},function(t,n,r){t.exports=r(14)},function(t,n,r){r(15);var e=r(3);t.exports=e.Date.now},function(t,n,r){r(16)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},function(t,n,r){"use strict";var e=r(4),o=r(18).f,u=r(25),i=r(3),c=r(26),f=r(28),a=r(7),p=function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var r,s,l,y,v,b,x,d,g=t.target,w=t.global,h=t.stat,m=t.proto,O=w?e:h?e[g]:(e[g]||{}).prototype,j=w?i:i[g]||(i[g]={}),S=j.prototype;for(l in n)r=!u(w?l:g+(h?".":"#")+l,t.forced)&&O&&a(O,l),v=j[l],r&&(b=t.noTargetGet?(d=o(O,l))&&d.value:O[l]),y=r&&b?b:n[l],r&&typeof v==typeof y||(x=t.bind&&r?c(y,e):t.wrap&&r?p(y):m&&"function"==typeof y?c(Function.call,y):y,(t.sham||y&&y.sham||v&&v.sham)&&f(x,"sham",!0),j[l]=x,m&&(a(i,s=g+"Prototype")||f(i,s,{}),i[s][l]=y,t.real&&S&&!S[l]&&f(S,l,y)))}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(19),u=r(5),i=r(20),c=r(6),f=r(7),a=r(8),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=i(t),n=c(n,!0),a)try{return p(t,n)}catch(t){}if(f(t,n))return u(!o.f.call(t,n),t[n])}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!e.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(21),o=r(23);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(1),o=r(22),u="".split;t.exports=e(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(4),o=r(2),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},function(t,n,r){var e=r(1),o=/#|\.prototype\./,u=function(t,n){var r=c[i(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},function(t,n,r){var e=r(27);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(0),o=r(29),u=r(5);t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(0),o=r(8),u=r(30),i=r(6),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(u(t),n=i(n,!0),u(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(2);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){t.exports=r(32)},function(t,n,r){var e=r(3),o=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}}]);