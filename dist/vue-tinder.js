!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTinder=e():t.VueTinder=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=5)}([function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("102c0398",i,!0,{})},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(3).default)("4b55729f",i,!0,{})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var n=[],i={},s=0;s<e.length;s++){var r=e[s],o=r[0],a=r[1],u=r[2],c=r[3],l={id:t+":"+s,css:a,media:u,sourceMap:c};i[o]?i[o].parts.push(l):n.push(i[o]={id:o,parts:[l]})}return n}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return v});var i=n(2),s=n.n(i),r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=r&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,l=!1,p=function(){},d=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,i){l=n,d=i||{};var r=s()(t,e);return y(r),function(e){for(var n=[],i=0;i<r.length;i++){var a=r[i];(u=o[a.id]).refs--,n.push(u)}e?y(r=s()(t,e)):r=[];for(i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id]}}}}function y(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(g(n.parts[s]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(s=0;s<n.parts.length;s++)r.push(g(n.parts[s]));o[n.id]={id:n.id,refs:1,parts:r}}}}function m(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,i=document.querySelector("style["+h+'~="'+t.id+'"]');if(i){if(l)return p;i.parentNode.removeChild(i)}if(f){var s=c++;i=u||(u=m()),e=x.bind(null,i,s,!1),n=x.bind(null,i,s,!0)}else i=m(),e=function(t,e){var n=e.css,i=e.media,s=e.sourceMap;i&&t.setAttribute("media",i);d.ssrId&&t.setAttribute(h,e.id);s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var b,w=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,n,i){var s=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var s=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([s]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(i[r]=!0)}for(s=0;s<t.length;s++){var o=t[s];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){"use strict";n.r(e);var i={name:"tinder-card"};n(9);function s(t,e,n,i,s,r,o,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):s&&(u=a?function(){s.call(this,this.$root.$options.shadowRoot)}:s),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}var r=void 0,o={name:"tinder",components:{TinderCard:s(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tinder-card"},[this._t("default"),this._v(" "),this._t("nope"),this._v(" "),this._t("like"),this._v(" "),this._t("super")],2)},[],!1,null,"3e967f68",null).exports},props:{allowSuper:{type:Boolean,default:!0},queue:{type:Array,default:function(){return[]}},keyName:{type:String,default:"key"},pointerThreshold:{type:Number,default:.5},superThreshold:{type:Number,default:.5}},data:function(){return{status:0,size:{top:0,width:0,height:0},state:{touchId:null,start:{},move:{},startPoint:1,ratio:0,result:null}}},computed:{nowKey:function(){return 2===this.status?null:this.queue[0]&&this.queue[0][this.keyName]},pointerOpacity:function(){return this.state.ratio/this.pointerThreshold},likeOpacity:function(){return this.superOpacity?0:this.pointerOpacity},nopeOpacity:function(){return-this.likeOpacity},superOpacity:function(){if(!this.allowSuper)return 0;var t=(this.state.move.y-this.state.start.y)/(-this.superThreshold*this.size.height);return t>Math.abs(this.pointerOpacity)?t:0}},mounted:function(){this.$el.offsetWidth&&this.$el.offsetHeight||console.warn("请设置vue-tinder的宽高"),this.size={top:this.$el.offsetTop,width:this.$el.offsetWidth,height:this.$el.offsetHeight},window.onresize=this.getSize},destroyed:function(){window.removeEventListener("onresize",this.getSize)},methods:{getSize:function(){var t=this;clearInterval(r),r=setTimeout(function(){t.size={top:t.$el.offsetTop,width:t.$el.offsetWidth,height:t.$el.offsetHeight}},300)},isCur:function(t){return 0===t&&this.queue[t][this.keyName]===this.nowKey},start:function(t){if(null===this.state.touchId&&2!==this.status){var e=void 0,n=void 0;"touchstart"===t.type?(e=t.changedTouches[0].pageX,n=t.changedTouches[0].pageY):(e=t.clientX,n=t.clientY);var i=n>this.size.top+this.size.height/2?-1:1;this.status=1,this.state={touchId:"touchstart"===t.type?t.changedTouches[0].identifier:"mouse",start:{x:e,y:n},move:Object.create(null),startPoint:i,ratio:0,result:null}}},move:function(t){t.preventDefault();var e=this.state;if(null!==e.touchId&&2!==this.status&&("touchmove"!==t.type||e.touchId===t.changedTouches[0].identifier)){var n=void 0,i=void 0;"touchmove"===t.type?(n=t.changedTouches[0].pageX,i=t.changedTouches[0].pageY):(n=t.clientX,i=t.clientY),e.move={x:n,y:i}}},end:function(t){if(("touchstart"!==t.type||this.state.touchId===t.changedTouches[0].identifier)&&2!==this.status)if(Math.abs(this.pointerOpacity)>=1||this.superOpacity>=1){var e=this.superOpacity>=1?"super":this.pointerOpacity>0?"like":"nope";this.shiftCard(e)}else this.gone()},shiftCard:function(t){this.status=2,this.state.result=t;var e=this.queue.shift();this.$emit("update:queue",this.queue),this.submitDecide(t,e)},mainCardStyle:function(){var t={zIndex:10};if(0===this.status)t.transform="scale(1) translate3d(0,0,0) rotate(0deg)",t.transition="all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)";else if(1===this.status){var e=this.state,n=e.start,i=e.move,s=e.startPoint,r=i.x-n.x||0,o=i.y-n.y||0,a=r/(.5*this.size.width);e.ratio=a;var u=10*a*s;t.transform="translate3d("+r+"px,"+o+"px,0) rotate("+u+"deg)",t.transition="none"}return t},benchCardStyle:function(t){if(1===t&&2===this.status||t>1)return{zIndex:-1,opacity:0};var e={zIndex:9};if(0===this.status)e.transform="scale3d(0.95,0.95,1)",e.transition="all 500ms ease";else if(1===this.status){var n=this.state.ratio;n>1?n=1:n<-1&&(n=-1),e.transform="scale3d("+(.05*Math.abs(n)+.95)+","+(.05*Math.abs(n)+.95)+",1)",e.transition="none"}else 2===this.status&&(e.transform="scale3d(1,1,1)",e.transition="all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)");return e},leave:function(t,e){var n=this.state,i=n.start,s=n.move,r=n.startPoint,o=s.x-i.x||0,a=s.y-i.y||0;"super"===n.result?a-=this.size.width:a*=(o+=this.size.width*(o<0?-.5:.5))/(s.x-i.x);var u=o/(.5*this.size.width)/1.6*15*r,c=null===n.touchId||"super"===n.result?800:300;t.className+=" "+n.result,t.style.opacity=0,t.style.transform="translate3d("+o+"px,"+a+"px,0) rotate("+u+"deg)",t.style.transition="all "+c+"ms ease",setTimeout(e,c)},gone:function(){this.status=0,this.state={touchId:null,start:{},move:{},startPoint:1,ratio:0,result:null}},decide:function(t){!this.state.touchId&&0===this.status&&this.nowKey&&(this.state.start={x:0,y:0},this.state.move={x:"super"===t?0:"like"===t?1:-1,y:"super"===t?-1:0},this.state.startPoint=1,this.shiftCard(t))},submitDecide:function(t,e){this.$emit("submit",{type:t,key:e.key,item:e})}}},a=(n(7),s(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-tinder",on:{touchstart:t.start,touchmove:t.move,touchend:t.end,touchcancel:t.end,mousedown:t.start,mousemove:t.move,mouseup:t.end,mouseout:t.end}},[n("transition-group",{on:{leave:t.leave,afterLeave:t.gone}},t._l(t.queue,function(e,i){return i<2?n("TinderCard",{key:e[t.keyName],style:t.isCur(i)?t.mainCardStyle():t.benchCardStyle(i)},[t._t("default",null,{data:e,index:i}),t._v(" "),t.isCur(i)?[n("span",{staticClass:"pointer-wrap nope-pointer-wrap",style:{opacity:t.nopeOpacity},attrs:{slot:"nope"},slot:"nope"},[t._t("nope",null,{opacity:t.nopeOpacity})],2),t._v(" "),n("span",{staticClass:"pointer-wrap like-pointer-wrap",style:{opacity:t.likeOpacity},attrs:{slot:"like"},slot:"like"},[t._t("like",null,{opacity:t.likeOpacity})],2),t._v(" "),t.allowSuper?n("span",{staticClass:"pointer-wrap super-pointer-wrap",style:{opacity:t.superOpacity},attrs:{slot:"super"},slot:"super"},[t._t("super",null,{opacity:t.superOpacity})],2):t._e()]:t._e()],2):t._e()}))],1)},[],!1,null,"76e36ce6",null).exports);e.default=a;"undefined"!=typeof window&&window.Vue&&window.Vue.component("tinder",a)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".vue-tinder[data-v-76e36ce6]{position:relative;-webkit-tap-highlight-color:transparent}.v-move[data-v-76e36ce6]{transition:none!important}.pointer-wrap[data-v-76e36ce6]{pointer-events:none;transition:opacity .2s ease}.tinder-card.like .like-pointer-wrap[data-v-76e36ce6],.tinder-card.nope .nope-pointer-wrap[data-v-76e36ce6],.tinder-card.super .super-pointer-wrap[data-v-76e36ce6]{opacity:1!important}",""])},function(t,e,n){"use strict";var i=n(0);n.n(i).a},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".tinder-card[data-v-3e967f68]{position:absolute;width:100%;height:100%;overflow:hidden;background:#fefefe;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.15)}",""])},function(t,e,n){"use strict";var i=n(1);n.n(i).a}])});