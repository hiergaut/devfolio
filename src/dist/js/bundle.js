!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1);var r=document.documentElement,o=u(".modal"),c=u(".modal-trigger"),i=u(".modal-card-head .delete, .modal-card-foot .button");function u(e){return Array.prototype.slice.call(document.querySelectorAll(e),0)}c.length>0&&c.forEach(function(e){e.addEventListener("click",function(){!function(e){var t=document.getElementById(e);r.classList.add("is-clipped"),t.classList.add("is-active")}(e.dataset.target)})}),i.length>0&&i.forEach(function(e){e.addEventListener("click",function(){r.classList.remove("is-clipped"),o.forEach(function(e){e.classList.remove("is-active")})})})},function(e,t,n){}]);