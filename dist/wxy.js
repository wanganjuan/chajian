!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={props:["msg"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default={install:function(e,t){e.component("wxy-msg",r.a),e.prototype.$msg=r.a}}},function(e,t,n){"use strict";var r=n(0),o=n(4),s=n(3),i=s(r.a,o.a,!1,null,null,null);t.a=i.exports},function(e,t){e.exports=function(e,t,n,r,o,s){var i,u=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,u=e.default);var a="function"==typeof u?u.options:u;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o);var f;if(s?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=f):r&&(f=r),f){var l=a.functional,d=l?a.render:a.beforeCreate;l?(a._injectStyles=f,a.render=function(e,t){return f.call(t),d(e,t)}):a.beforeCreate=d?[].concat(d,f):[f]}return{esModule:i,exports:u,options:a}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.msg))])])},o=[],s={render:r,staticRenderFns:o};t.a=s}]);
//# sourceMappingURL=wxy.js.map