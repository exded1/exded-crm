window.EXDED_CRM_SW = true;
/*! Sortable 1.15.7 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function i(t,e,n){return(e=function(t){t=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);e=n.call(t,e||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}(t,"string");return"symbol"==typeof t?t:t+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){return(a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)!{}.hasOwnProperty.call(o,n)||(t[n]=o[n])}return t}).apply(null,arguments)}function r(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(t,e){if(null==t)return{};var n,o=function(t,e){if(null==t)return{};var n,o={};for(n in t)if({}.hasOwnProperty.call(t,n)){if(-1!==e.indexOf(n))continue;o[n]=t[n]}return o}(t,e);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(t),r=0;r<i.length;r++)n=i[r],-1===e.indexOf(n)&&{}.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);return o}function e(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n={}.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var y=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),w=t(/Edge/i),c=t(/firefox/i),u=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),d=t(/iP(ad|od|hone)/i),n=t(/chrome/i)&&t(/android/i),h={capture:!1,passive:!1};function f(t,e,n){t.addEventListener(e,n,!y&&h)}function p(t,e,n){t.removeEventListener(e,n,!y&&h)}function g(t,e){if(e&&(">"===e[0]&&(e=e.substring(1)),t))try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return}}function m(t){return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}function P(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"!==e[0]||t.parentNode===n)&&g(t,e)||o&&t===n)return t}while(t!==n&&(t=m(t)))}return null}var v,b=/\s+/g;function k(t,e,n){var o;t&&e&&(t.classList?t.classList[n?"add":"remove"](e):(o=(" "+t.className+" ").replace(b," ").replace(" "+e+" "," "),t.className=(o+(n?" "+e:"")).replace(b," ")))}function R(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];o[e=!(e in o||-1!==e.indexOf("webkit"))?"-webkit-"+e:e]=n+("string"==typeof n?"":"px")}}function D(t,e){var n="";if("string"==typeof t)n=t;else do{var o=R(t,"transform")}while(o&&"none"!==o&&(n=o+" "+n),!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function E(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function O(){var t=document.scrollingElement;return t||document.documentElement}function X(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d=t!==window&&t.parentNode&&t!==O()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth);if((e||n)&&t!==window&&(i=i||t.parentNode,!y))do{if(i&&i.getBoundingClientRect&&("none"!==R(i,"transform")||n&&"static"!==R(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(R(i,"border-top-width")),l-=h.left+parseInt(R(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);return o&&t!==window&&(o=(e=D(i||t))&&e.a,t=e&&e.d,e&&(s=(a/=t)+(u/=t),c=(l/=o)+(d/=o))),{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function Y(t,e,n){for(var o=M(t,!0),i=X(t)[e];o;){var r=X(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===O())break;o=M(o,!1)}return!1}function B(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Ht.ghost&&(o||a[r]!==Ht.dragged)&&P(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function F(t,e){for(var n=t.lastElementChild;n&&(n===Ht.ghost||"none"===R(n,"display")||e&&!g(n,e));)n=n.previousElementSibling;return n||null}function j(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Ht.clone||e&&!g(t,e)||n++;return n}function S(t){var e=0,n=0,o=O();if(t)do{var i=D(t),r=i.a,i=i.d}while(e+=t.scrollLeft*r,n+=t.scrollTop*i,t!==o&&(t=t.parentNode));return[e,n]}function M(t,e){if(!t||!t.getBoundingClientRect)return O();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=R(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return O();if(o||e)return n;o=!0}}}while(n=n.parentNode);return O()}function _(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function C(e,n){return function(){var t;v||(1===(t=arguments).length?e.call(this,t[0]):e.apply(this,t),v=setTimeout(function(){v=void 0},n))}}function H(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function T(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function x(t,e){R(t,"position","absolute"),R(t,"top",e.top),R(t,"left",e.left),R(t,"width",e.width),R(t,"height",e.height)}function A(t){R(t,"position",""),R(t,"top",""),R(t,"left",""),R(t,"width",""),R(t,"height","")}function L(n,o,i){var r={};return Array.from(n.children).forEach(function(t){var e;P(t,o.draggable,n,!1)&&!t.animated&&t!==i&&(e=X(t),r.left=Math.min(null!==(t=r.left)&&void 0!==t?t:1/0,e.left),r.top=Math.min(null!==(t=r.top)&&void 0!==t?t:1/0,e.top),r.right=Math.max(null!==(t=r.right)&&void 0!==t?t:-1/0,e.right),r.bottom=Math.max(null!==(t=r.bottom)&&void 0!==t?t:-1/0,e.bottom))}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var K="Sortable"+(new Date).getTime();function N(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){var e,n;"none"!==R(t,"display")&&t!==Ht.ghost&&(o.push({target:t,rect:X(t)}),e=I({},o[o.length-1].rect),!t.thisAnimationDuration||(n=D(t,!0))&&(e.top-=n.f,e.left-=n.e),t.fromRect=e)})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=X(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=D(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&_(r,i)&&!_(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(t=l,s=r,r=a,a=c.options,e=Math.sqrt(Math.pow(s.top-t.top,2)+Math.pow(s.left-t.left,2))/Math.sqrt(Math.pow(s.top-r.top,2)+Math.pow(s.left-r.left,2))*a.animation),_(i,o)||(n.prevFromRect=o,n.prevToRect=i,e=e||c.options.animation,c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){var i,r;o&&(R(t,"transition",""),R(t,"transform",""),i=(r=D(this.el))&&r.a,r=r&&r.d,i=(e.left-n.left)/(i||1),r=(e.top-n.top)/(r||1),t.animatingX=!!i,t.animatingY=!!r,R(t,"transform","translate3d("+i+"px,"+r+"px,0)"),this.forRepaintDummy=t.offsetWidth,R(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),R(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){R(t,"transition",""),R(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o))}}}var W=[],z={initializeByDefault:!0},G={mount:function(e){for(var t in z)!z.hasOwnProperty(t)||t in e||(e[t]=z[t]);W.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),W.push(e)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";W.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](I({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](I({sortable:n},o)))})},initializePlugins:function(n,o,i,t){for(var e in W.forEach(function(t){var e=t.pluginName;(n.options[e]||t.initializeByDefault)&&((t=new t(n,o,n.options)).sortable=n,t.options=n.options,n[e]=t,a(i,t.defaults))}),n.options){var r;n.options.hasOwnProperty(e)&&(void 0!==(r=this.modifyOption(n,e,n.options[e]))&&(n.options[e]=r))}},getEventProperties:function(e,n){var o={};return W.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return W.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function U(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[K]){var g,m=e.options,t="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||y||w?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var v,b=I(I({},p),G.getEventProperties(o,e));for(v in b)g[v]=b[v];n&&n.dispatchEvent(g),m[t]&&m[t].call(e,g)}}function q(t,e){var n=(o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).evt,o=l(o,V);G.pluginEvent.bind(Ht)(t,e,I({dragEl:$,parentEl:Q,ghostEl:J,rootEl:tt,nextEl:et,lastDownEl:nt,cloneEl:ot,cloneHidden:it,dragStarted:vt,putSortable:ut,activeSortable:Ht.active,originalEvent:n,oldIndex:rt,oldDraggableIndex:lt,newIndex:at,newDraggableIndex:st,hideGhostForTarget:Yt,unhideGhostForTarget:Bt,cloneNowHidden:function(){it=!0},cloneNowShown:function(){it=!1},dispatchSortableEvent:function(t){Z({sortable:e,name:t,originalEvent:n})}},o))}var V=["evt"];function Z(t){U(I({putSortable:ut,cloneEl:ot,targetEl:$,rootEl:tt,oldIndex:rt,oldDraggableIndex:lt,newIndex:at,newDraggableIndex:st},t))}var $,Q,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,mt,vt,bt,yt,wt,Dt,Et=!1,St=!1,_t=[],Ct=!1,Tt=!1,xt=[],Ot=!1,Mt=[],At="undefined"!=typeof document,Nt=d,It=w||y?"cssFloat":"float",Pt=At&&!n&&!d&&"draggable"in document.createElement("div"),kt=function(){if(At){if(y)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Rt=function(t,e){var n=R(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=B(t,0,e),r=B(t,1,e),a=i&&R(i),l=r&&R(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+X(i).width,t=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+X(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){e="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==e?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[It]||r&&"none"===n[It]&&o<s+t)?"vertical":"horizontal"},Xt=function(t){function l(r,a){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==r&&(a||i))return!0;if(null==r||!1===r)return!1;if(a&&"clone"===r)return r;if("function"==typeof r)return l(r(t,e,n,o),a)(t,e,n,o);e=(a?t:e).options.group.name;return!0===r||"string"==typeof r&&r===e||r.join&&-1<r.indexOf(e)}}var e={},n=t.group;n&&"object"==s(n)||(n={name:n}),e.name=n.name,e.checkPull=l(n.pull,!0),e.checkPut=l(n.put),e.revertClone=n.revertClone,t.group=e},Yt=function(){!kt&&J&&R(J,"display","none")},Bt=function(){!kt&&J&&R(J,"display","")};At&&!n&&document.addEventListener("click",function(t){if(St)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),St=!1},!0);function Ft(t){if($){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,_t.some(function(t){var e=t[K].options.emptyInsertThreshold;if(e&&!F(t)){var n=X(t),o=i>=n.left-e&&i<=n.right+e,e=r>=n.top-e&&r<=n.bottom+e;return o&&e?a=t:void 0}}),a);if(e){var n,o={};for(n in t)t.hasOwnProperty(n)&&(o[n]=t[n]);o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[K]._onDragOver(o)}}var i,r,a}function jt(t){$&&$.parentNode[K]._isOutsideThisEl(t.target)}function Ht(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[K]=this;var n,o,i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Rt(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Ht.supportPointer&&"PointerEvent"in window&&(!u||d),emptyInsertThreshold:5};for(n in G.initializePlugins(this,t,i),i)n in e||(e[n]=i[n]);for(o in Xt(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&Pt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?f(t,"pointerdown",this._onTapStart):(f(t,"mousedown",this._onTapStart),f(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(f(t,"dragover",this),f(t,"dragenter",this)),_t.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,N())}function Lt(t,e,n,o,i,r,a,l){var s,c,u=t[K],d=u.options.onMove;return!window.CustomEvent||y||w?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||X(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),c=d?d.call(u,s,a):c}function Kt(t){t.draggable=!1}function Wt(){Ot=!1}function zt(t){return setTimeout(t,0)}function Gt(t){return clearTimeout(t)}Ht.prototype={constructor:Ht,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(bt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,$):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(!function(t){Mt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Mt.push(o)}}(o),!$&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!u||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=P(l,t.draggable,o,!1))&&l.animated||nt===l)){if(rt=j(l),lt=j(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return Z({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),q("filter",n,{evt:e}),void(i&&e.preventDefault())}else if(c=c&&c.split(",").some(function(t){if(t=P(s,t.trim(),o,!1))return Z({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),q("filter",n,{evt:e}),!0}))return void(i&&e.preventDefault());t.handle&&!P(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;n&&!$&&n.parentNode===r&&(o=X(n),tt=r,Q=($=n).parentNode,et=$.nextSibling,nt=n,ct=a.group,dt={target:Ht.dragged=$,clientX:(e||t).clientX,clientY:(e||t).clientY},gt=dt.clientX-o.left,mt=dt.clientY-o.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,$.style["will-change"]="all",o=function(){q("delayEnded",i,{evt:t}),Ht.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!c&&i.nativeDraggable&&($.draggable=!0),i._triggerDragStart(t,e),Z({sortable:i,name:"choose",originalEvent:t}),k($,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){E($,t.trim(),Kt)}),f(l,"dragover",Ft),f(l,"mousemove",Ft),f(l,"touchmove",Ft),a.supportPointer?(f(l,"pointerup",i._onDrop),this.nativeDraggable||f(l,"pointercancel",i._onDrop)):(f(l,"mouseup",i._onDrop),f(l,"touchend",i._onDrop),f(l,"touchcancel",i._onDrop)),c&&this.nativeDraggable&&(this.options.touchStartThreshold=4,$.draggable=!0),q("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(w||y)?o():Ht.eventCanceled?this._onDrop():(a.supportPointer?(f(l,"pointerup",i._disableDelayedDrag),f(l,"pointercancel",i._disableDelayedDrag)):(f(l,"mouseup",i._disableDelayedDrag),f(l,"touchend",i._disableDelayedDrag),f(l,"touchcancel",i._disableDelayedDrag)),f(l,"mousemove",i._delayedDragTouchMoveHandler),f(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&f(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)))},_delayedDragTouchMoveHandler:function(t){t=t.touches?t.touches[0]:t;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){$&&Kt($),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;p(t,"mouseup",this._disableDelayedDrag),p(t,"touchend",this._disableDelayedDrag),p(t,"touchcancel",this._disableDelayedDrag),p(t,"pointerup",this._disableDelayedDrag),p(t,"pointercancel",this._disableDelayedDrag),p(t,"mousemove",this._delayedDragTouchMoveHandler),p(t,"touchmove",this._delayedDragTouchMoveHandler),p(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?f(document,"pointermove",this._onTouchMove):f(document,e?"touchmove":"mousemove",this._onTouchMove):(f($,"dragend",this),f(tt,"dragstart",this._onDragStart));try{document.selection?zt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){var n;Et=!1,tt&&$?(q("dragStarted",this,{evt:e}),this.nativeDraggable&&f(document,"dragover",jt),n=this.options,t||k($,n.dragClass,!1),k($,n.ghostClass,!0),Ht.active=this,t&&this._appendGhost(),Z({sortable:this,name:"start",originalEvent:e})):this._nulling()},_emulateDragOver:function(){if(ht){this._lastX=ht.clientX,this._lastY=ht.clientY,Yt();for(var t=document.elementFromPoint(ht.clientX,ht.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ht.clientX,ht.clientY))!==e;)e=t;if($.parentNode[K]._isOutsideThisEl(t),e)do{if(e[K])if(e[K]._onDragOver({clientX:ht.clientX,clientY:ht.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}while(e=m(t=e));Bt()}},_onTouchMove:function(t){if(dt){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=J&&D(J,!0),a=J&&r&&r.a,l=J&&r&&r.d,e=Nt&&Dt&&S(Dt),a=(i.clientX-dt.clientX+o.x)/(a||1)+(e?e[0]-xt[0]:0)/(a||1),l=(i.clientY-dt.clientY+o.y)/(l||1)+(e?e[1]-xt[1]:0)/(l||1);if(!Ht.active&&!Et){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}J&&(r?(r.e+=a-(ft||0),r.f+=l-(pt||0)):r={a:1,b:0,c:0,d:1,e:a,f:l},r="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")"),R(J,"webkitTransform",r),R(J,"mozTransform",r),R(J,"msTransform",r),R(J,"transform",r),ft=a,pt=l,ht=i),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!J){var t=this.options.fallbackOnBody?document.body:tt,e=X($,!0,Nt,!0,t),n=this.options;if(Nt){for(Dt=t;"static"===R(Dt,"position")&&"none"===R(Dt,"transform")&&Dt!==document;)Dt=Dt.parentNode;Dt!==document.body&&Dt!==document.documentElement?(Dt===document&&(Dt=O()),e.top+=Dt.scrollTop,e.left+=Dt.scrollLeft):Dt=O(),xt=S(Dt)}k(J=$.cloneNode(!0),n.ghostClass,!1),k(J,n.fallbackClass,!0),k(J,n.dragClass,!0),R(J,"transition",""),R(J,"transform",""),R(J,"box-sizing","border-box"),R(J,"margin",0),R(J,"top",e.top),R(J,"left",e.left),R(J,"width",e.width),R(J,"height",e.height),R(J,"opacity","0.8"),R(J,"position",Nt?"absolute":"fixed"),R(J,"zIndex","100000"),R(J,"pointerEvents","none"),Ht.ghost=J,t.appendChild(J),R(J,"transform-origin",gt/parseInt(J.style.width)*100+"% "+mt/parseInt(J.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;q("dragStart",this,{evt:t}),Ht.eventCanceled?this._onDrop():(q("setupClone",this),Ht.eventCanceled||((ot=T($)).removeAttribute("id"),ot.draggable=!1,ot.style["will-change"]="",this._hideClone(),k(ot,this.options.chosenClass,!1),Ht.clone=ot),n.cloneId=zt(function(){q("clone",n),Ht.eventCanceled||(n.options.removeCloneOnHide||tt.insertBefore(ot,$),n._hideClone(),Z({sortable:n,name:"clone"}))}),e||k($,i.dragClass,!0),e?(St=!0,n._loopId=setInterval(n._emulateDragOver,50)):(p(document,"mouseup",n._onDrop),p(document,"touchend",n._onDrop),p(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,$)),f(document,"drop",n),R($,"transform","translateZ(0)")),Et=!0,n._dragStartId=zt(n._dragStarted.bind(n,e,t)),f(document,"selectstart",n),vt=!0,window.getSelection().removeAllRanges(),u&&R(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,t,e,a=this.el,l=n.target,s=this.options,c=s.group,u=Ht.active,d=ct===c,h=s.sort,f=ut||u,p=this,g=!1;if(!Ot){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),l=P(l,s.draggable,a,!0),O("dragOver"),Ht.eventCanceled)return g;if($.contains(n.target)||l.animated&&l.animatingX&&l.animatingY||p._ignoreWhileAnimating===l)return A(!1);if(St=!1,u&&!s.disabled&&(d?h||(i=Q!==tt):ut===this||(this.lastPutMode=ct.checkPull(this,u,$,n))&&c.checkPut(this,u,$,n))){if(r="vertical"===this._getDirection(n,l),o=X($),O("dragOverValid"),Ht.eventCanceled)return g;if(i)return Q=tt,M(),this._hideClone(),O("revert"),Ht.eventCanceled||(et?tt.insertBefore($,et):tt.appendChild($)),A(!0);var m=F(a,s.draggable);if(m&&(S=n,c=r,x=X(F((E=this).el,E.options.draggable)),E=L(E.el,E.options,J),!(c?S.clientX>E.right+10||S.clientY>x.bottom&&S.clientX>x.left:S.clientY>E.bottom+10||S.clientX>x.right&&S.clientY>x.top)||m.animated)){if(m&&(t=n,e=r,C=X(B((_=this).el,0,_.options,!0)),_=L(_.el,_.options,J),e?t.clientX<_.left-10||t.clientY<C.top&&t.clientX<C.right:t.clientY<_.top-10||t.clientY<C.bottom&&t.clientX<C.left)){var v=B(a,0,s,!0);if(v===$)return A(!1);if(D=X(l=v),!1!==Lt(tt,a,$,o,l,D,n,!1))return M(),a.insertBefore($,v),Q=a,N(),A(!0)}else if(l.parentNode===a){var b,y,w,D=X(l),E=$.parentNode!==a,S=(S=$.animated&&$.toRect||o,x=l.animated&&l.toRect||D,_=(e=r)?S.left:S.top,t=e?S.right:S.bottom,C=e?S.width:S.height,v=e?x.left:x.top,S=e?x.right:x.bottom,x=e?x.width:x.height,!(_===v||t===S||_+C/2===v+x/2)),_=r?"top":"left",C=Y(l,"top","top")||Y($,"top","top"),v=C?C.scrollTop:void 0;if(bt!==l&&(y=D[_],Ct=!1,Tt=!S&&s.invertSwap||E),0!==(b=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,t=o?n.top:n.left,o=o?n.bottom:n.right,n=!1;if(!a)if(l&&wt<c*i){if(Ct=!Ct&&(1===yt?t+c*r/2<s:s<o-c*r/2)?!0:Ct)n=!0;else if(1===yt?s<t+wt:o-wt<s)return-yt}else if(t+c*(1-i)/2<s&&s<o-c*(1-i)/2)return function(t){return j($)<j(t)?1:-1}(e);if((n=n||a)&&(s<t+c*r/2||o-c*r/2<s))return t+c/2<s?1:-1;return 0}(n,l,D,r,S?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Tt,bt===l)))for(var T=j($);(w=Q.children[T-=b])&&("none"===R(w,"display")||w===J););if(0===b||w===l)return A(!1);yt=b;var x=(bt=l).nextElementSibling,E=!1,S=Lt(tt,a,$,o,l,D,n,E=1===b);if(!1!==S)return 1!==S&&-1!==S||(E=1===S),Ot=!0,setTimeout(Wt,30),M(),E&&!x?a.appendChild($):l.parentNode.insertBefore($,E?x:l),C&&H(C,0,v-C.scrollTop),Q=$.parentNode,void 0===y||Tt||(wt=Math.abs(y-X(l)[_])),N(),A(!0)}}else{if(m===$)return A(!1);if((l=m&&a===n.target?m:l)&&(D=X(l)),!1!==Lt(tt,a,$,o,l,D,n,!!l))return M(),m&&m.nextSibling?a.insertBefore($,m.nextSibling):a.appendChild($),Q=a,N(),A(!0)}if(a.contains($))return A(!1)}return!1}function O(t,e){q(t,p,I({evt:n,isOwner:d,axis:r?"vertical":"horizontal",revert:i,dragRect:o,targetRect:D,canSort:h,fromSortable:f,target:l,completed:A,onMove:function(t,e){return Lt(tt,a,$,o,t,X(t),n,e)},changed:N},e))}function M(){O("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function A(t){return O("dragOverCompleted",{insertion:t}),t&&(d?u._hideClone():u._showClone(p),p!==f&&(k($,(ut||u).options.ghostClass,!1),k($,s.ghostClass,!0)),ut!==p&&p!==Ht.active?ut=p:p===Ht.active&&ut&&(ut=null),f===p&&(p._ignoreWhileAnimating=l),p.animateAll(function(){O("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(l===$&&!$.animated||l===a&&!l.animated)&&(bt=null),s.dragoverBubble||n.rootEl||l===document||($.parentNode[K]._isOutsideThisEl(n.target),t||Ft(n)),!s.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),g=!0}function N(){at=j($),st=j($,s.draggable),Z({sortable:p,name:"change",toEl:a,newIndex:at,newDraggableIndex:st,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){p(document,"mousemove",this._onTouchMove),p(document,"touchmove",this._onTouchMove),p(document,"pointermove",this._onTouchMove),p(document,"dragover",Ft),p(document,"mousemove",Ft),p(document,"touchmove",Ft)},_offUpEvents:function(){var t=this.el.ownerDocument;p(t,"mouseup",this._onDrop),p(t,"touchend",this._onDrop),p(t,"pointerup",this._onDrop),p(t,"pointercancel",this._onDrop),p(t,"touchcancel",this._onDrop),p(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;at=j($),st=j($,n.draggable),q("drop",this,{evt:t}),Q=$&&$.parentNode,at=j($),st=j($,n.draggable),Ht.eventCanceled||(Ct=Tt=Et=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Gt(this.cloneId),Gt(this._dragStartId),this.nativeDraggable&&(p(document,"drop",this),p(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),u&&R(document.body,"user-select",""),R($,"transform",""),t&&(vt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),J&&J.parentNode&&J.parentNode.removeChild(J),(tt===Q||ut&&"clone"!==ut.lastPutMode)&&ot&&ot.parentNode&&ot.parentNode.removeChild(ot),$&&(this.nativeDraggable&&p($,"dragend",this),Kt($),$.style["will-change"]="",vt&&!Et&&k($,(ut||this).options.ghostClass,!1),k($,this.options.chosenClass,!1),Z({sortable:this,name:"unchoose",toEl:Q,newIndex:null,newDraggableIndex:null,originalEvent:t}),tt!==Q?(0<=at&&(Z({rootEl:Q,name:"add",toEl:Q,fromEl:tt,originalEvent:t}),Z({sortable:this,name:"remove",toEl:Q,originalEvent:t}),Z({rootEl:Q,name:"sort",toEl:Q,fromEl:tt,originalEvent:t}),Z({sortable:this,name:"sort",toEl:Q,originalEvent:t})),ut&&ut.save()):at!==rt&&0<=at&&(Z({sortable:this,name:"update",toEl:Q,originalEvent:t}),Z({sortable:this,name:"sort",toEl:Q,originalEvent:t})),Ht.active&&(null!=at&&-1!==at||(at=rt,st=lt),Z({sortable:this,name:"end",toEl:Q,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){q("nulling",this),tt=$=Q=J=et=ot=nt=it=dt=ht=vt=at=st=rt=lt=bt=yt=ut=ct=Ht.dragged=Ht.ghost=Ht.clone=Ht.active=null;var e=this.el;Mt.forEach(function(t){e.contains(t)&&(t.checked=!0)}),Mt.length=ft=pt=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":$&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)P(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||function(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;for(;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach(function(t,e){e=o.children[e];P(e,this.options.draggable,o,!1)&&(n[t]=e)},this),e&&this.captureAnimationState(),t.forEach(function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return P(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=G.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Xt(n)},destroy:function(){q("destroy",this);var t=this.el;t[K]=null,p(t,"mousedown",this._onTapStart),p(t,"touchstart",this._onTapStart),p(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(p(t,"dragover",this),p(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),_t.splice(_t.indexOf(this.el),1),this.el=t=null},_hideClone:function(){it||(q("hideClone",this),Ht.eventCanceled||(R(ot,"display","none"),this.options.removeCloneOnHide&&ot.parentNode&&ot.parentNode.removeChild(ot),it=!0))},_showClone:function(t){"clone"===t.lastPutMode?it&&(q("showClone",this),Ht.eventCanceled||($.parentNode!=tt||this.options.group.revertClone?et?tt.insertBefore(ot,et):tt.appendChild(ot):tt.insertBefore(ot,$),this.options.group.revertClone&&this.animate($,ot),R(ot,"display",""),it=!1)):this._hideClone()}},At&&f(document,"touchmove",function(t){(Ht.active||Et)&&t.cancelable&&t.preventDefault()}),Ht.utils={on:f,off:p,css:R,find:E,is:function(t,e){return!!P(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:C,closest:P,toggleClass:k,clone:T,index:j,nextTick:zt,cancelNextTick:Gt,detectDirection:Rt,getChild:B,expando:K},Ht.get=function(t){return t[K]},Ht.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];(e=e[0].constructor===Array?e[0]:e).forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Ht.utils=I(I({},Ht.utils),t.utils)),G.mount(t)})},Ht.create=function(t,e){return new Ht(t,e)};var Ut,qt,Vt,Zt,$t,Qt,Jt=[],te=!(Ht.version="1.15.7");function ee(){Jt.forEach(function(t){clearInterval(t.pid)}),Jt=[]}function ne(){clearInterval(Qt)}var oe,ie=C(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=O(),u=!1;qt!==e&&(qt=e,ee(),Ut=t.scroll,i=t.scrollFn,!0===Ut&&(Ut=M(e,!0)));var d=0,h=Ut;do{var f=h,p=X(f),g=p.top,m=p.bottom,v=p.left,b=p.right,y=p.width,w=p.height,D=void 0,E=void 0,S=f.scrollWidth,_=f.scrollHeight,C=R(f),T=f.scrollLeft,p=f.scrollTop,E=f===c?(D=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(D=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY)),T=D&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(v-r)<=l&&!!T),p=E&&(Math.abs(m-a)<=l&&p+w<_)-(Math.abs(g-a)<=l&&!!p);if(!Jt[d])for(var x=0;x<=d;x++)Jt[x]||(Jt[x]={});Jt[d].vx==T&&Jt[d].vy==p&&Jt[d].el===f||(Jt[d].el=f,Jt[d].vx=T,Jt[d].vy=p,clearInterval(Jt[d].pid),0==T&&0==p||(u=!0,Jt[d].pid=setInterval(function(){o&&0===this.layer&&Ht.active._onTouchMove($t);var t=Jt[this.layer].vy?Jt[this.layer].vy*s:0,e=Jt[this.layer].vx?Jt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Ht.dragged.parentNode[K],e,t,n,$t,Jt[this.layer].el)||H(Jt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=M(h,!1)));te=u}},30),n=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,t=t.unhideGhostForTarget;e&&(i=n||i,a(),e=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e=document.elementFromPoint(e.clientX,e.clientY),t(),i&&!i.el.contains(e)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n})))};function re(){}function ae(){}re.prototype={startIndex:null,dragStart:function(t){t=t.oldDraggableIndex;this.startIndex=t},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();t=B(this.sortable.el,this.startIndex,this.options);t?this.sortable.el.insertBefore(e,t):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:n},a(re,{pluginName:"revertOnSpill"}),ae.prototype={onSpill:function(t){var e=t.dragEl,t=t.putSortable||this.sortable;t.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),t.animateAll()},drop:n},a(ae,{pluginName:"removeOnSpill"});var le,se,ce,ue,de,he=[],fe=[],pe=!1,ge=!1,me=!1;function ve(n,o){fe.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)})}function be(){he.forEach(function(t){t!==ce&&t.parentNode&&t.parentNode.removeChild(t)})}return Ht.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){t=t.originalEvent;this.sortable.nativeDraggable?f(document,"dragover",this._handleAutoScroll):this.options.supportPointer?f(document,"pointermove",this._handleFallbackAutoScroll):t.touches?f(document,"touchmove",this._handleFallbackAutoScroll):f(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){t=t.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?p(document,"dragover",this._handleAutoScroll):(p(document,"pointermove",this._handleFallbackAutoScroll),p(document,"touchmove",this._handleFallbackAutoScroll),p(document,"mousemove",this._handleFallbackAutoScroll)),ne(),ee(),clearTimeout(v),v=void 0},nulling:function(){$t=qt=Ut=te=Qt=Vt=Zt=null,Jt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o,i=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(r,a);$t=e,n||this.options.forceAutoScrollFallback||w||y||u?(ie(e,this.options,t,n),o=M(t,!0),!te||Qt&&r===Vt&&a===Zt||(Qt&&ne(),Qt=setInterval(function(){var t=M(document.elementFromPoint(r,a),!0);t!==o&&(o=t,ee()),ie(e,i.options,t,n)},10),Vt=r,Zt=a)):this.options.bubbleScroll&&M(t,!0)!==O()?ie(e,this.options,M(t,!1),!1):ee()}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Ht.mount(ae,re),Ht.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){t=t.dragEl;oe=t},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;i.options.swap&&(t=this.sortable.el,i=this.options,n&&n!==t&&(t=oe,oe=!1!==o(n)?(k(n,i.swapClass,!0),n):null,t&&t!==oe&&k(t,i.swapClass,!1)),r(),e(!0),a())},drop:function(t){var e,n,o=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;oe&&k(oe,l.swapClass,!1),oe&&(l.swap||i&&i.options.swap)&&r!==oe&&(a.captureAnimationState(),a!==o&&o.captureAnimationState(),n=oe,t=(e=r).parentNode,l=n.parentNode,t&&l&&!t.isEqualNode(n)&&!l.isEqualNode(e)&&(i=j(e),r=j(n),t.isEqualNode(l)&&i<r&&r++,t.insertBefore(n,t.children[i]),l.insertBefore(e,l.children[r])),a.animateAll(),a!==o&&o.animateAll())},nulling:function(){oe=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:oe}}})}),Ht.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.avoidImplicitDeselect||(o.options.supportPointer?f(document,"pointerup",this._deselectMultiDrag):(f(document,"mouseup",this._deselectMultiDrag),f(document,"touchend",this._deselectMultiDrag))),f(document,"keydown",this._checkKeyDown),f(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,setData:function(t,e){var n="";he.length&&se===o?he.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){t=t.dragEl;ce=t},delayEnded:function(){this.isMultiDrag=~he.indexOf(ce)},setupClone:function(t){var e=t.sortable,t=t.cancel;if(this.isMultiDrag){for(var n=0;n<he.length;n++)fe.push(T(he[n])),fe[n].sortableIndex=he[n].sortableIndex,fe[n].draggable=!1,fe[n].style["will-change"]="",k(fe[n],this.options.selectedClass,!1),he[n]===ce&&k(fe[n],this.options.chosenClass,!1);e._hideClone(),t()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,t=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||he.length&&se===e&&(ve(!0,n),o("clone"),t()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,t=t.cancel;this.isMultiDrag&&(ve(!1,n),fe.forEach(function(t){R(t,"display","")}),e(),de=!1,t())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),t=t.cancel;this.isMultiDrag&&(fe.forEach(function(t){R(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),de=!0,t())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&se&&se.multiDrag._deselectMultiDrag(),he.forEach(function(t){t.sortableIndex=j(t)}),he=he.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),me=!0},dragStarted:function(t){var e,n=this,t=t.sortable;this.isMultiDrag&&(this.options.sort&&(t.captureAnimationState(),this.options.animation&&(he.forEach(function(t){t!==ce&&R(t,"position","absolute")}),e=X(ce,!1,!0,!0),he.forEach(function(t){t!==ce&&x(t,e)}),pe=ge=!0)),t.animateAll(function(){pe=ge=!1,n.options.animation&&he.forEach(function(t){A(t)}),n.options.sort&&be()}))},dragOver:function(t){var e=t.target,n=t.completed,t=t.cancel;ge&&~he.indexOf(e)&&(n(!1),t())},revert:function(t){var n,o,e=t.fromSortable,i=t.rootEl,r=t.sortable,a=t.dragRect;1<he.length&&(he.forEach(function(t){r.addAnimationState({target:t,rect:ge?X(t):a}),A(t),t.fromRect=a,e.removeAnimationState(t)}),ge=!1,n=!this.options.removeCloneOnHide,o=i,he.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)}))},dragOverCompleted:function(t){var e,n=t.sortable,o=t.isOwner,i=t.insertion,r=t.activeSortable,a=t.parentEl,l=t.putSortable,t=this.options;i&&(o&&r._hideClone(),pe=!1,t.animation&&1<he.length&&(ge||!o&&!r.options.sort&&!l)&&(e=X(ce,!1,!0,!0),he.forEach(function(t){t!==ce&&(x(t,e),a.appendChild(t))}),ge=!0),o||(ge||be(),1<he.length?(o=de,r._showClone(n),r.options.animation&&!de&&o&&fe.forEach(function(t){r.addAnimationState({target:t,rect:ue}),t.fromRect=ue,t.thisAnimationDuration=null})):r._showClone(n)))},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,t=t.activeSortable;he.forEach(function(t){t.thisAnimationDuration=null}),t.options.animation&&!n&&t.multiDrag.isMultiDrag&&(ue=a({},e),e=D(ce,!0),ue.top-=e.f,ue.left-=e.e)},dragOverAnimationComplete:function(){ge&&(ge=!1,be())},drop:function(t){var o,i,r,a,n,e,l,s=t.originalEvent,c=t.rootEl,u=t.parentEl,d=t.sortable,h=t.dispatchSortableEvent,f=t.oldIndex,t=t.putSortable,p=t||this.sortable;s&&(o=this.options,i=u.children,me||(o.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),k(ce,o.selectedClass,!~he.indexOf(ce)),~he.indexOf(ce)?(he.splice(he.indexOf(ce),1),le=null,U({sortable:d,rootEl:c,name:"deselect",targetEl:ce,originalEvent:s})):(he.push(ce),U({sortable:d,rootEl:c,name:"select",targetEl:ce,originalEvent:s}),s.shiftKey&&le&&d.el.contains(le)?(r=j(le),a=j(ce),~r&&~a&&r!==a&&function(){for(var e,t=r<a?(e=r,a):(e=a,r+1),n=o.filter;e<t;e++)~he.indexOf(i[e])||P(i[e],o.draggable,u,!1)&&(n&&("function"==typeof n?n.call(d,s,i[e],d):n.split(",").some(function(t){return P(i[e],t.trim(),u,!1)}))||(k(i[e],o.selectedClass,!0),he.push(i[e]),U({sortable:d,rootEl:c,name:"select",targetEl:i[e],originalEvent:s})))}()):le=ce,se=p)),me&&this.isMultiDrag&&(ge=!1,(u[K].options.sort||u!==c)&&1<he.length&&(n=X(ce),e=j(ce,":not(."+this.options.selectedClass+")"),!pe&&o.animation&&(ce.thisAnimationDuration=null),p.captureAnimationState(),pe||(o.animation&&(ce.fromRect=n,he.forEach(function(t){var e;t.thisAnimationDuration=null,t!==ce&&(e=ge?X(t):n,t.fromRect=e,p.addAnimationState({target:t,rect:e}))})),be(),he.forEach(function(t){i[e]?u.insertBefore(t,i[e]):u.appendChild(t),e++}),f===j(ce)&&(l=!1,he.forEach(function(t){t.sortableIndex!==j(t)&&(l=!0)}),l&&(h("update"),h("sort")))),he.forEach(function(t){A(t)}),p.animateAll()),se=p),(c===u||t&&"clone"!==t.lastPutMode)&&fe.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)}))},nullingGlobal:function(){this.isMultiDrag=me=!1,fe.length=0},destroyGlobal:function(){this._deselectMultiDrag(),p(document,"pointerup",this._deselectMultiDrag),p(document,"mouseup",this._deselectMultiDrag),p(document,"touchend",this._deselectMultiDrag),p(document,"keydown",this._checkKeyDown),p(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==me&&me||se!==this.sortable||t&&P(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;he.length;){var e=he[0];k(e,this.options.selectedClass,!1),he.shift(),U({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvent:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[K];e&&e.options.multiDrag&&!~he.indexOf(t)&&(se&&se!==e&&(se.multiDrag._deselectMultiDrag(),se=e),k(t,e.options.selectedClass,!0),he.push(t))},deselect:function(t){var e=t.parentNode[K],n=he.indexOf(t);e&&e.options.multiDrag&&~n&&(k(t,e.options.selectedClass,!1),he.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return he.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=ge&&t!==ce?-1:ge?j(t,":not(."+n.options.selectedClass+")"):j(t),i.push({multiDragElement:t,index:e})}),{items:e(he),clones:[].concat(fe),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Ht});
;
/* Хранилище Supabase (версия для GitHub Pages). Таблица crm_docs: id, kind, data jsonb. */
window.CrmSupabaseStore = (() => {
  const PAGE = 1000;

  function create(config) {
    if (!window.supabase || !config.supabaseUrl || !config.supabaseKey) return null;
    const sb = window.supabase.createClient(config.supabaseUrl, config.supabaseKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false },
    });
    const map = new Map();
    let channel = null;
    let hooks = null;

    const emit = () => hooks && hooks.onData(Array.from(map.values()));

    async function loadAll() {
      const fresh = new Map();
      for (let from = 0; ; from += PAGE) {
        const { data, error } = await sb.from('crm_docs').select('id,data').eq('kind', 'client').range(from, from + PAGE - 1);
        if (error) throw new Error(error.message);
        for (const row of data) fresh.set(row.id, { ...row.data, id: row.id });
        if (data.length < PAGE) break;
      }
      map.clear();
      for (const [k, v] of fresh) map.set(k, v);
      emit();
    }

    function subscribe() {
      if (channel) sb.removeChannel(channel);
      channel = sb.channel('exded-crm-docs')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'crm_docs' }, (p) => {
          if (p.eventType === 'DELETE') {
            if (p.old && p.old.id) map.delete(p.old.id);
          } else if (p.new && p.new.kind === 'client') {
            map.set(p.new.id, { ...p.new.data, id: p.new.id });
          }
          emit();
        })
        .subscribe((status) => {
          if (!hooks) return;
          if (status === 'SUBSCRIBED') hooks.onStatus('live');
          else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') hooks.onStatus('error', 'Нет живой связи, обновите страницу');
        });
    }

    return {
      kind: 'supabase',
      user: null,
      async session() {
        const { data } = await sb.auth.getSession();
        return data.session ? data.session.user : null;
      },
      async login(email, password) {
        const { data, error } = await sb.auth.signInWithPassword({ email, password });
        if (error) throw new Error(error.message === 'Invalid login credentials' ? 'Неверный email или пароль' : error.message);
        return data.user;
      },
      async logout() { if (channel) sb.removeChannel(channel); channel = null; await sb.auth.signOut(); },
      async allowed() {
        const { data, error } = await sb.rpc('is_team');
        if (error) throw new Error(error.message);
        return Boolean(data);
      },
      async start(h) {
        hooks = h;
        await loadAll();
        subscribe();
      },
      async refresh() { try { await loadAll(); } catch {} },
      async save(doc) {
        const body = { ...doc };
        delete body.id;
        const { error } = await sb.from('crm_docs').upsert({ id: doc.id, kind: 'client', data: body, updated_at: new Date().toISOString() });
        if (error) throw new Error(error.message);
        map.set(doc.id, { ...body, id: doc.id });
      },
      async remove(id) {
        const { error } = await sb.from('crm_docs').delete().eq('id', id);
        if (error) throw new Error(error.message);
        map.delete(id);
      },
      async lock() { return true; },
      async download(filename, data) {
        const url = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
        const a = document.createElement('a');
        a.href = url; a.download = filename;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 10000);
      },
    };
  }

  return { create };
})();

;
'use strict';

(() => {
  /* ===================================================================
     Константы
     =================================================================== */
  const TZ = 'Europe/Berlin';
  const STATUSES = [
    { key: 'work', title: 'В работе' },
    { key: 'wait', title: 'Ждём' },
    { key: 'client', title: 'Клиенты' },
    { key: 'lost', title: 'Минус' },
  ];
  const STATUS_KEYS = STATUSES.map((s) => s.key);
  const TITLE = Object.fromEntries(STATUSES.map((s) => [s.key, s.title]));
  const LOST_REASONS = ['Дорого', 'Купили у другого', 'Нет бюджета', 'Не отвечает', 'Передумали', 'Нет в наличии', 'Долгий срок поставки'];
  const CHANNELS = [
    { key: 'phone', label: 'Звонок' },
    { key: 'whatsapp', label: 'WhatsApp' },
    { key: 'telegram', label: 'Telegram' },
    { key: 'email', label: 'Email' },
  ];
  const DAY_START = 8 * 60;
  const DAY_END = 20 * 60;
  const RETURN_MONTHS = 3;
  const CFG_KEY = 'exded-crm-config';
  const TAB_KEY = 'exded-crm-tab';
  const MQ_PHONE = window.matchMedia('(max-width: 699px)');
  const MQ_TABLET = window.matchMedia('(min-width: 700px) and (max-width: 1023px)');

  const ICON = {
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.3l2.63 5.33 5.88.85-4.25 4.15 1 5.86L12 16.72l-5.26 2.77 1-5.86-4.25-4.15 5.88-.85z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3.5l1.8 4.4-2.2 1.5a11 11 0 0 0 6 6l1.5-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z"/></svg>',
    meet: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19.5c.6-3 2.8-4.8 5.5-4.8s4.9 1.8 5.5 4.8M16 5.2a3 3 0 0 1 0 5.7M17.6 14.9c1.6.6 2.6 2.2 2.9 4.6"/></svg>',
    cal: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
    trash: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1.3-4A8 8 0 1 1 8.2 19z"/><path d="M9 9.5c.3 2.3 2.2 4.2 4.5 4.6l1.2-1.2 1.8.8c-.2 1.3-1.2 2-2.5 1.9A6.3 6.3 0 0 1 8.2 10c-.1-1.3.6-2.3 1.9-2.5l.8 1.8z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/></svg>',
  };

  /* ===================================================================
     Утилиты
     =================================================================== */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const pad = (n) => String(n).padStart(2, '0');
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const nowIso = () => new Date().toISOString();
  const uid = () => (crypto.randomUUID ? crypto.randomUUID()
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (ch) => {
      const r = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
      return (ch === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }));
  const digits = (s) => String(s || '').replace(/\D/g, '');

  const tzFmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  });
  function tzParts(date) {
    const p = {};
    for (const part of tzFmt.formatToParts(date)) p[part.type] = part.value;
    return { y: +p.year, m: +p.month, d: +p.day, h: +p.hour, mi: +p.minute };
  }
  // Время по Германии -> Date, правильно при любом поясе устройства и переходе часов
  function berlinDate(y, m, d, h = 0, mi = 0) {
    const target = Date.UTC(y, m - 1, d, h, mi);
    let ts = target;
    for (let i = 0; i < 3; i++) {
      const p = tzParts(new Date(ts));
      const diff = target - Date.UTC(p.y, p.m - 1, p.d, p.h, p.mi);
      if (diff === 0) break;
      ts += diff;
    }
    return new Date(ts);
  }
  const dayKey = (date) => { const p = tzParts(date); return `${p.y}-${pad(p.m)}-${pad(p.d)}`; };
  const timeStr = (date) => { const p = tzParts(date); return `${pad(p.h)}:${pad(p.mi)}`; };
  const minutesOfDay = (date) => { const p = tzParts(date); return p.h * 60 + p.mi; };
  function addDaysKey(key, n) {
    const [y, m, d] = key.split('-').map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d + n));
    return `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}-${pad(dt.getUTCDate())}`;
  }
  const dateFromKeyTime = (key, time) => {
    const [y, m, d] = key.split('-').map(Number);
    const [hh, mm] = time.split(':').map(Number);
    return berlinDate(y, m, d, hh, mm);
  };
  const shortDateFmt = new Intl.DateTimeFormat('ru-RU', { timeZone: TZ, day: 'numeric', month: 'short' });
  const longDateFmt = new Intl.DateTimeFormat('ru-RU', { timeZone: TZ, day: 'numeric', month: 'long', year: 'numeric' });
  const shortDate = (d) => shortDateFmt.format(d).replace('.', '');
  function fmtDateTime(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    const today = dayKey(new Date());
    const k = dayKey(d);
    if (k === today) return `сегодня ${timeStr(d)}`;
    if (k === addDaysKey(today, -1)) return `вчера ${timeStr(d)}`;
    const sameYear = tzParts(d).y === tzParts(new Date()).y;
    return `${sameYear ? shortDate(d) : longDateFmt.format(d)} ${timeStr(d)}`;
  }
  const fmtLongDate = (iso) => (iso ? longDateFmt.format(new Date(iso)) : '');

  const moneyFmt = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
  const moneyFmt2 = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const fmtMoney = (n) => (Number.isFinite(n) ? (Number.isInteger(n) ? moneyFmt : moneyFmt2).format(n) : '');
  function parseAmount(str) {
    let s = String(str || '').replace(/[\s\u00a0\u202f€]/g, '').replace(/eur/i, '');
    if (!s) return null;
    if (s.includes('.') && s.includes(',')) s = s.replace(/\./g, '').replace(',', '.');
    else if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
    else s = s.replace(',', '.');
    const n = Number(s);
    return Number.isFinite(n) ? Math.round(n * 100) / 100 : null;
  }
  const amountInput = (n) => (Number.isFinite(n) ? (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ',')) : '');
  function plural(n, one, few, many) {
    const m10 = n % 10;
    const m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  }
  function daysSince(iso) {
    if (!iso) return '';
    const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
    if (days <= 0) return 'с сегодняшнего дня';
    return `${days} ${plural(days, 'день', 'дня', 'дней')}`;
  }
  function addMonths(iso, n) {
    const d = new Date(iso);
    d.setMonth(d.getMonth() + n);
    return d;
  }
  const telHref = (p) => String(p || '').replace(/[^\d+]/g, '');
  function waDigits(p) {
    let d = digits(p);
    if (!d) return '';
    if (String(p).trim().startsWith('+')) return d;
    if (d.startsWith('00')) return d.slice(2);
    if (d.startsWith('0')) return '49' + d.slice(1);
    return d;
  }
  function timeOptions(selected) {
    let html = '';
    for (let m = DAY_START; m <= DAY_END; m += 15) {
      const t = `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
      html += `<option value="${t}"${t === selected ? ' selected' : ''}>${t}</option>`;
    }
    return html;
  }
  // ближайшее удобное время звонка для выбранного дня
  function defaultSlot(days) {
    const today = dayKey(new Date());
    if (days > 0) return { date: addDaysKey(today, days), time: '10:00' };
    let m = Math.ceil((minutesOfDay(new Date()) + 30) / 15) * 15;
    if (m < DAY_START) m = DAY_START;
    if (m > DAY_END) return { date: addDaysKey(today, 1), time: '10:00' };
    return { date: today, time: `${pad(Math.floor(m / 60))}:${pad(m % 60)}` };
  }

  let toastTimer = null;
  function toast(text, type = '', action = null) {
    const el = $('#toast');
    el.textContent = text;
    if (action) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = action.label;
      b.addEventListener('click', () => { el.className = 'toast'; action.fn(); });
      el.appendChild(b);
    }
    el.className = `toast show ${type}`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.className = 'toast'; }, type === 'err' ? 6000 : action ? 5000 : 2600);
  }

  /* ===================================================================
     Данные
     =================================================================== */
  const state = {
    clients: new Map(),
    search: '',
    tab: 'work',
    openId: null,
  };
  let store = null;
  const dirty = new Map();       // id -> Set полей, ещё не отправленных
  const inflight = new Map();    // id -> updated_at отправляемой версии
  const creating = new Set();
  const deleting = new Set();
  const saveTimers = new Map();
  let appStarted = false;

  function normalize(d) {
    const c = {
      company: '', product: '', invoice_no: '', amount: null, agreed: '',
      status: 'work', vip: false, lost_reason: '', lost_at: null, returned_at: null, status_at: null,
      contacts: [], log: [], next: null, created_at: null, updated_at: null, last_contact_at: null,
      ...d,
    };
    if (!STATUS_KEYS.includes(c.status)) c.status = 'work';
    if (!Array.isArray(c.contacts)) c.contacts = [];
    if (!Array.isArray(c.log)) c.log = [];
    c.contacts = c.contacts.filter(Boolean).map((ct) => ({ id: ct.id || uid(), name: '', role: '', phone: '', email: '', dm: false, main: false, channels: [], ...ct, channels: Array.isArray(ct.channels) ? ct.channels : [] }));
    c.log = c.log.filter((e) => e && e.text !== undefined).map((e) => ({ id: e.id || uid(), at: e.at || c.created_at || nowIso(), text: String(e.text) }));
    if (c.next && (!c.next.at || c.next.done)) c.next = null;
    c.amount = typeof c.amount === 'number' && Number.isFinite(c.amount) ? c.amount : parseAmount(c.amount);
    c.vip = Boolean(c.vip);
    return c;
  }

  function newClient(fields = {}) {
    const t = nowIso();
    return normalize({ id: uid(), created_at: t, updated_at: t, status_at: t, last_contact_at: t, ...fields });
  }

  // первая версия CRM (таблицы companies/contacts/notes/events) -> клиенты
  function legacyToClients({ companies = [], contacts = [], notes = [], events = [] }) {
    const statusMap = { active: 'client', work: 'work', lost: 'lost' };
    return companies.map((co) => {
      const cts = contacts.filter((x) => x.company_id === co.id)
        .sort((a, b) => (a.position || 0) - (b.position || 0))
        .map((x) => ({ id: x.id, name: x.name || '', role: x.role || '', phone: x.phone || '', email: x.email || '', dm: Boolean(x.is_dm), main: Boolean(x.is_primary), channels: Array.isArray(x.channels) ? x.channels : [] }));
      const log = notes.filter((n) => n.company_id === co.id)
        .sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
        .map((n) => ({ id: n.id, at: n.created_at, text: n.body || '' }));
      const ev = events.filter((e) => e.company_id === co.id && !e.done && e.starts_at)
        .sort((a, b) => (a.starts_at < b.starts_at ? -1 : 1))[0];
      return normalize({
        id: co.id,
        company: co.company || '',
        product: co.product || '',
        status: statusMap[co.status] || 'work',
        vip: Boolean(co.vip),
        lost_at: co.lost_at || null,
        returned_at: co.returned_at || null,
        created_at: co.created_at || nowIso(),
        updated_at: co.updated_at || nowIso(),
        status_at: co.updated_at || co.created_at || nowIso(),
        contacts: cts,
        log,
        next: ev ? { at: ev.starts_at, kind: ev.kind === 'meeting' ? 'meeting' : 'call' } : null,
      });
    });
  }

  function onData(docs) {
    const incoming = new Map();
    for (const d of docs) if (d && d.id) incoming.set(d.id, normalize(d));
    for (const [id, d] of incoming) {
      if (deleting.has(id)) continue;
      const local = state.clients.get(id);
      if (local && dirty.has(id)) continue;
      if (!local || (d.updated_at || '') >= (local.updated_at || '')) state.clients.set(id, d);
    }
    for (const id of Array.from(state.clients.keys())) {
      if (!incoming.has(id) && !dirty.has(id) && !inflight.has(id) && !creating.has(id)) state.clients.delete(id);
    }
    scheduleRender();
    syncOpenCard();
  }

  function onStatus(mode, message) {
    const el = $('#sync');
    if (!el) return;
    el.className = `sync ${mode}`;
    el.title = mode === 'live' ? 'Синхронизация включена' : message || 'Нет связи';
  }

  function patch(id, changes, { now = false } = {}) {
    const c = state.clients.get(id);
    if (!c) return;
    Object.assign(c, changes);
    c.updated_at = nowIso();
    const keys = dirty.get(id) || new Set();
    Object.keys(changes).forEach((k) => keys.add(k));
    dirty.set(id, keys);
    scheduleRender();
    scheduleSave(id, now ? 0 : 500);
  }

  function scheduleSave(id, delay) {
    clearTimeout(saveTimers.get(id));
    saveTimers.set(id, setTimeout(() => flush(id), delay));
  }

  async function flush(id) {
    clearTimeout(saveTimers.get(id));
    saveTimers.delete(id);
    const c = state.clients.get(id);
    const keys = dirty.get(id);
    if (!c || !keys) return;
    dirty.delete(id);
    const snap = clone(c);
    inflight.set(id, snap.updated_at);
    const isNew = creating.has(id);
    try {
      await store.save(snap, isNew ? null : Array.from(keys));
      creating.delete(id);
    } catch (err) {
      const again = dirty.get(id) || new Set();
      keys.forEach((k) => again.add(k));
      dirty.set(id, again);
      toast('Не сохранилось: ' + err.message + '. Повторю через несколько секунд.', 'err');
      scheduleSave(id, 5000);
    } finally {
      if (inflight.get(id) === snap.updated_at) inflight.delete(id);
    }
  }

  const flushAll = () => Array.from(dirty.keys()).forEach((id) => flush(id));

  async function createClient(fields) {
    const c = newClient(fields);
    state.clients.set(c.id, c);
    creating.add(c.id);
    dirty.set(c.id, new Set(Object.keys(c)));
    scheduleRender();
    await flush(c.id);
    return c;
  }

  async function deleteClient(id) {
    const c = state.clients.get(id);
    if (!c) return;
    deleting.add(id);
    state.clients.delete(id);
    dirty.delete(id);
    clearTimeout(saveTimers.get(id));
    scheduleRender();
    try {
      await store.remove(id);
      toast(`«${c.company || 'Клиент'}» удалён`);
    } catch (err) {
      state.clients.set(id, c);
      scheduleRender();
      toast('Не удалилось: ' + err.message, 'err');
    } finally {
      setTimeout(() => deleting.delete(id), 4000);
    }
  }

  function setStatus(id, status, extra = {}) {
    const c = state.clients.get(id);
    if (!c || (c.status === status && !Object.keys(extra).length)) { scheduleRender(); return; }
    const changes = { status, status_at: nowIso(), ...extra };
    if (c.status === 'lost' && status !== 'lost') {
      changes.lost_at = null;
      changes.log = [{ id: uid(), at: nowIso(), text: `Вернули из минуса в «${TITLE[status]}».` }, ...c.log];
    }
    patch(id, changes, { now: true });
  }

  function markLost(id, reason) {
    const c = state.clients.get(id);
    if (!c) return;
    patch(id, {
      status: 'lost', status_at: nowIso(), lost_at: nowIso(), lost_reason: reason, next: null,
      log: [{ id: uid(), at: nowIso(), text: `Минус. Причина: ${reason || 'не указана'}` }, ...c.log],
    }, { now: true });
    toast(`«${c.company || 'Клиент'}» в минусе. Вернётся в работу через 3 месяца.`);
  }

  async function checkReturns() {
    const due = Array.from(state.clients.values())
      .filter((c) => c.status === 'lost' && c.lost_at && addMonths(c.lost_at, RETURN_MONTHS).getTime() <= Date.now());
    if (!due.length || !(await store.lock('return-lost'))) return;
    for (const c of due) {
      const fresh = state.clients.get(c.id);
      if (!fresh || fresh.status !== 'lost') continue;
      patch(c.id, {
        status: 'work', status_at: nowIso(), returned_at: nowIso(), lost_at: null,
        log: [{ id: uid(), at: nowIso(), text: `Прошло 3 месяца после минуса${fresh.lost_reason ? ` (причина: ${fresh.lost_reason})` : ''}. Вернули в работу, пробуем ещё раз.` }, ...fresh.log],
      }, { now: true });
    }
    toast(`Вернулись в работу через 3 месяца: ${due.length}`);
  }

  /* ===================================================================
     Поиск и сортировка
     =================================================================== */
  const mainContact = (c) => c.contacts.find((x) => x.main) || c.contacts[0] || null;
  const nextTs = (c) => (c.next && c.next.at ? Date.parse(c.next.at) : Infinity);
  const cmp = (a, b) => (a === b ? 0 : a < b ? -1 : 1);

  function sortFor(status) {
    const byNext = (a, b) => { const d = nextTs(a) - nextTs(b); return Number.isNaN(d) ? 0 : d; };
    if (status === 'lost') return (a, b) => cmp(b.lost_at || b.status_at || '', a.lost_at || a.status_at || '');
    if (status === 'client') return (a, b) => (b.vip - a.vip) || cmp(b.updated_at || '', a.updated_at || '');
    if (status === 'wait') return (a, b) => (b.vip - a.vip) || byNext(a, b) || cmp(a.status_at || '', b.status_at || '');
    return (a, b) => (b.vip - a.vip) || byNext(a, b) || cmp(b.updated_at || '', a.updated_at || '');
  }

  function matches(c, q) {
    const qd = digits(q);
    if (qd.length >= 3 && c.contacts.some((x) => digits(x.phone).includes(qd))) return true;
    const hay = [c.company, c.product, c.invoice_no, c.agreed, c.lost_reason,
      ...c.contacts.flatMap((x) => [x.name, x.role, x.email, x.phone]),
      ...c.log.map((e) => e.text)].join(' ').toLowerCase();
    return q.toLowerCase().split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
  }

  /* ===================================================================
     Доска
     =================================================================== */
  let renderQueued = false;
  function scheduleRender() {
    if (renderQueued) return;
    renderQueued = true;
    requestAnimationFrame(() => {
      renderQueued = false;
      if (document.body.classList.contains('dragging')) { setTimeout(scheduleRender, 300); return; }
      renderBoard();
      renderAgenda();
    });
  }

  function dueInfo(next) {
    const d = new Date(next.at);
    const today = dayKey(new Date());
    const k = dayKey(d);
    const t = timeStr(d);
    if (d.getTime() < Date.now()) return { cls: 'is-overdue', label: k === today ? `Просрочен ${t}` : `Просрочен ${shortDate(d)}` };
    if (k === today) return { cls: 'is-today', label: `Сегодня ${t}` };
    if (k === addDaysKey(today, 1)) return { cls: '', label: `Завтра ${t}` };
    return { cls: '', label: `${shortDate(d)} ${t}` };
  }

  function cardHTML(c) {
    const main = mainContact(c);
    const due = c.next ? dueInfo(c.next) : null;
    const title = c.company || (main && main.name) || (main && main.phone) || 'Без названия';
    const recentReturn = c.returned_at && c.status === 'work' && Date.now() - Date.parse(c.returned_at) < 14 * 86400000;
    return `<article class="card${c.vip ? ' is-vip' : ''}" data-id="${esc(c.id)}" tabindex="0">
  <div class="card-top">
    <button type="button" class="vip${c.vip ? ' on' : ''}" data-act="vip" aria-pressed="${c.vip}" aria-label="VIP клиент">${ICON.star}</button>
    <h3 class="card-co">${esc(title)}</h3>
    ${Number.isFinite(c.amount) ? `<span class="card-sum">${esc(fmtMoney(c.amount))}</span>` : ''}
  </div>
  ${c.product ? `<p class="card-product">${esc(c.product)}</p>` : ''}
  ${c.agreed ? `<p class="card-agreed">${esc(c.agreed)}</p>` : ''}
  <div class="card-foot">
    ${due ? `<span class="due ${due.cls}">${c.next.kind === 'meeting' ? ICON.meet : ICON.phone}${esc(due.label)}</span>` : ''}
    ${c.status === 'wait' ? `<span class="waiting">Ждём ${esc(daysSince(c.status_at))}</span>` : ''}
    ${recentReturn ? '<span class="badge-back">Вернулся из минуса</span>' : ''}
    ${c.invoice_no ? `<span class="num">Счёт ${esc(c.invoice_no)}</span>` : ''}
    ${main && main.name && main.name !== title ? `<span class="card-person">${esc(main.name)}</span>` : ''}
    ${main && main.phone ? `<a class="call-link" href="tel:${esc(telHref(main.phone))}" data-act="call" aria-label="Позвонить">${ICON.phone}</a>` : ''}
  </div>
</article>`;
  }

  function lostRowHTML(c) {
    return `<article class="lost-row" data-id="${esc(c.id)}" tabindex="0">
  <b>${esc(c.company || (mainContact(c) || {}).name || 'Без названия')}</b>
  <time>${c.lost_at ? esc(shortDate(new Date(c.lost_at))) : ''}</time>
  <span>${esc(c.lost_reason || 'Причина не указана')}</span>
</article>`;
  }

  function renderBoard() {
    const q = state.search.trim();
    const groups = { work: [], wait: [], client: [], lost: [] };
    for (const c of state.clients.values()) {
      if (q && !matches(c, q)) continue;
      groups[c.status].push(c);
    }
    for (const s of STATUS_KEYS) {
      groups[s].sort(sortFor(s));
      const list = $(`.col-list[data-status="${s}"]`);
      list.innerHTML = groups[s].map(s === 'lost' ? lostRowHTML : cardHTML).join('');
      list.dataset.empty = q ? 'Ничего не найдено' : list.dataset.emptyDefault;
      $$(`[data-count="${s}"]`).forEach((el) => { el.textContent = groups[s].length; });
      const sumEl = $(`[data-sum="${s}"]`);
      if (sumEl) {
        const sum = groups[s].reduce((acc, c) => acc + (Number.isFinite(c.amount) ? c.amount : 0), 0);
        sumEl.textContent = sum ? fmtMoney(Math.round(sum)) : '';
      }
    }
    if (q && MQ_PHONE.matches && !groups[state.tab].length) {
      const first = STATUS_KEYS.find((s) => groups[s].length);
      if (first) setTab(first, false);
    }
  }

  function renderAgenda() {
    const el = $('#agenda');
    const now = Date.now();
    const today = dayKey(new Date());
    const tomorrow = addDaysKey(today, 1);
    const items = Array.from(state.clients.values())
      .filter((c) => c.next && c.status !== 'lost')
      .map((c) => ({ c, at: new Date(c.next.at) }))
      .sort((a, b) => a.at - b.at);
    const overdue = items.filter((x) => x.at.getTime() < now);
    const todays = items.filter((x) => x.at.getTime() >= now && dayKey(x.at) === today);
    const tomorrows = items.filter((x) => dayKey(x.at) === tomorrow);
    if (!overdue.length && !todays.length && !tomorrows.length) { el.innerHTML = ''; return; }
    const chip = (x, cls, label) => `<button type="button" class="task ${cls}" data-open="${esc(x.c.id)}"><i class="dot"></i><time>${esc(label)}</time><span>${esc(x.c.company || (mainContact(x.c) || {}).name || 'Без названия')}</span></button>`;
    let html = '<span class="agenda-title">Перезвонить</span>';
    html += overdue.map((x) => chip(x, 'is-overdue', dayKey(x.at) === today ? timeStr(x.at) : `${shortDate(x.at)} ${timeStr(x.at)}`)).join('');
    html += todays.map((x) => chip(x, 'is-today', timeStr(x.at))).join('');
    if (tomorrows.length) html += '<span class="agenda-sep">Завтра</span>' + tomorrows.map((x) => chip(x, '', timeStr(x.at))).join('');
    el.innerHTML = html;
  }

  function setTab(tab, remember = true) {
    state.tab = tab;
    $('#board').dataset.tab = tab;
    const pair = MQ_TABLET.matches ? (tab === 'work' || tab === 'wait' ? ['work', 'wait'] : ['client', 'lost']) : [tab];
    $$('#tabs button').forEach((b) => b.classList.toggle('on', pair.includes(b.dataset.tab)));
    if (remember) { try { localStorage.setItem(TAB_KEY, tab); } catch {} }
  }

  let justDragged = 0;
  function bindBoard() {
    const board = $('#board');
    $$('.col-list').forEach((el) => { el.dataset.emptyDefault = el.dataset.empty; });

    board.addEventListener('click', (e) => {
      if (Date.now() - justDragged < 350) return;
      const act = e.target.closest('[data-act]');
      const item = e.target.closest('[data-id]');
      if (!item) return;
      const id = item.dataset.id;
      if (act && act.dataset.act === 'call') return;
      if (act && act.dataset.act === 'vip') {
        const c = state.clients.get(id);
        if (c) patch(id, { vip: !c.vip }, { now: true });
        return;
      }
      openCard(id);
    });
    board.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter' || !e.target.matches('[data-id]')) return;
      e.preventDefault();
      openCard(e.target.dataset.id);
    });

    $('#agenda').addEventListener('click', (e) => {
      const b = e.target.closest('[data-open]');
      if (b) openCard(b.dataset.open);
    });

    $$('#tabs button').forEach((b) => b.addEventListener('click', () => setTab(b.dataset.tab)));
    let saved = 'work';
    try { saved = localStorage.getItem(TAB_KEY) || 'work'; } catch {}
    setTab(STATUS_KEYS.includes(saved) ? saved : 'work', false);
    const retab = () => setTab(state.tab, false);
    MQ_TABLET.addEventListener('change', retab);
    MQ_PHONE.addEventListener('change', () => { retab(); setupDrag(); });

    // свайп по доске на телефоне переключает колонки
    let sx = 0; let sy = 0; let st = 0;
    board.addEventListener('touchstart', (e) => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; st = Date.now(); }, { passive: true });
    board.addEventListener('touchend', (e) => {
      if (!MQ_PHONE.matches && !MQ_TABLET.matches) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - sx; const dy = t.clientY - sy;
      if (Date.now() - st > 600 || Math.abs(dx) < 70 || Math.abs(dy) > 45) return;
      const order = MQ_TABLET.matches ? ['work', 'client'] : STATUS_KEYS;
      const cur = MQ_TABLET.matches ? (state.tab === 'work' || state.tab === 'wait' ? 0 : 1) : order.indexOf(state.tab);
      const next = Math.min(order.length - 1, Math.max(0, cur + (dx < 0 ? 1 : -1)));
      if (next !== cur) setTab(order[next]);
    }, { passive: true });

    $('#q').addEventListener('input', (e) => { state.search = e.target.value; scheduleRender(); });
    setupDrag();
  }

  let sortables = [];
  function setupDrag() {
    sortables.forEach((s) => s.destroy());
    sortables = [];
    if (!window.Sortable || MQ_PHONE.matches) return;
    sortables = $$('.col-list').map((list) => window.Sortable.create(list, {
      group: 'exded-crm',
      draggable: '.card, .lost-row',
      filter: 'a, button',
      preventOnFilter: false,
      animation: 150,
      delay: 180,
      delayOnTouchOnly: true,
      touchStartThreshold: 5,
      ghostClass: 'card-ghost',
      chosenClass: 'card-chosen',
      scrollSensitivity: 70,
      onStart: () => document.body.classList.add('dragging'),
      onEnd: (evt) => {
        document.body.classList.remove('dragging');
        justDragged = Date.now();
        const id = evt.item.dataset.id;
        const to = evt.to.dataset.status;
        if (evt.from === evt.to) { scheduleRender(); return; }
        if (to === 'lost') { openLost(id, () => scheduleRender()); scheduleRender(); return; }
        setStatus(id, to);
        const c = state.clients.get(id);
        if (c) toast(`«${c.company || 'Клиент'}» в «${TITLE[to]}»`);
      },
    }));
  }

  /* ===================================================================
     Новый звонок
     =================================================================== */
  const newState = { days: '', status: 'work', matchId: null, dismissed: new Set() };

  function openNew() {
    const dlg = $('#dlg-new');
    const f = $('#form-new');
    f.reset();
    newState.days = '';
    newState.status = 'work';
    newState.matchId = null;
    newState.dismissed.clear();
    $$('#new-when button').forEach((b) => b.classList.toggle('on', b.dataset.days === ''));
    $('#new-when-detail').hidden = true;
    f.elements.time.innerHTML = timeOptions('10:00');
    $$('#new-status button').forEach((b) => b.classList.toggle('on', b.dataset.status === 'work'));
    $('#new-match').hidden = true;
    $('#new-save').textContent = 'Сохранить';
    $('#new-title').textContent = 'Новый звонок';
    dlg.showModal();
    setTimeout(() => f.elements.phone.focus(), 30);
  }

  function findMatch(phone, company) {
    const pd = digits(phone);
    const cq = company.trim().toLowerCase();
    for (const c of state.clients.values()) {
      if (newState.dismissed.has(c.id)) continue;
      if (pd.length >= 6 && c.contacts.some((x) => { const xd = digits(x.phone); return xd && (xd.endsWith(pd.slice(-8)) || pd.endsWith(xd.slice(-8))); })) return c;
    }
    if (cq.length >= 3) {
      for (const c of state.clients.values()) {
        if (newState.dismissed.has(c.id)) continue;
        if ((c.company || '').toLowerCase().startsWith(cq)) return c;
      }
    }
    return null;
  }

  function renderMatch() {
    const f = $('#form-new');
    const box = $('#new-match');
    if (newState.matchId) {
      const c = state.clients.get(newState.matchId);
      box.hidden = false;
      box.innerHTML = `<span>Запишу разговор к клиенту <b>${esc(c ? c.company || 'без названия' : '')}</b></span><button type="button" class="btn ghost" data-match="cancel">Это другой клиент</button>`;
      $('#new-save').textContent = 'Записать к клиенту';
      $('#new-title').textContent = 'Звонок клиента';
      return;
    }
    const c = findMatch(f.elements.phone.value, f.elements.company.value);
    $('#new-save').textContent = 'Сохранить';
    $('#new-title').textContent = 'Новый звонок';
    if (!c) { box.hidden = true; box.innerHTML = ''; return; }
    box.hidden = false;
    box.innerHTML = `<span>Уже есть: <b>${esc(c.company || (mainContact(c) || {}).name || 'без названия')}</b> в колонке «${esc(TITLE[c.status])}»</span><button type="button" class="btn" data-match="use" data-id="${esc(c.id)}">Записать к нему</button><button type="button" class="btn ghost" data-match="no" data-id="${esc(c.id)}">Нет, новый</button>`;
  }

  function bindNew() {
    const dlg = $('#dlg-new');
    const f = $('#form-new');
    $('#btn-new').addEventListener('click', openNew);
    $('#fab').addEventListener('click', openNew);

    f.elements.phone.addEventListener('input', renderMatch);
    f.elements.company.addEventListener('input', renderMatch);

    $('#new-match').addEventListener('click', (e) => {
      const b = e.target.closest('[data-match]');
      if (!b) return;
      if (b.dataset.match === 'use') {
        newState.matchId = b.dataset.id;
        const c = state.clients.get(b.dataset.id);
        if (c) {
          if (!f.elements.company.value) f.elements.company.value = c.company;
          const st = c.status === 'lost' ? 'work' : c.status;
          newState.status = st;
          $$('#new-status button').forEach((x) => x.classList.toggle('on', x.dataset.status === st));
        }
      } else if (b.dataset.match === 'no') {
        newState.dismissed.add(b.dataset.id);
      } else {
        if (newState.matchId) newState.dismissed.add(newState.matchId);
        newState.matchId = null;
      }
      renderMatch();
    });

    $('#new-when').addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      newState.days = b.dataset.days;
      $$('#new-when button').forEach((x) => x.classList.toggle('on', x === b));
      const detail = $('#new-when-detail');
      detail.hidden = b.dataset.days === '';
      if (!detail.hidden) {
        const slot = defaultSlot(Number(b.dataset.days));
        f.elements.date.value = slot.date;
        f.elements.time.innerHTML = timeOptions(slot.time);
      }
    });

    $('#new-status').addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      newState.status = b.dataset.status;
      $$('#new-status button').forEach((x) => x.classList.toggle('on', x === b));
    });

    const filled = () => ['phone', 'company', 'name', 'product', 'talk', 'agreed'].some((n) => f.elements[n].value.trim());
    dlg.addEventListener('click', (e) => { if (e.target === dlg && !filled()) dlg.close(); });
    dlg.addEventListener('cancel', (e) => { if (filled() && !window.confirm('Закрыть без сохранения?')) e.preventDefault(); });
    f.addEventListener('keydown', (e) => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); f.requestSubmit(); } });

    f.addEventListener('submit', async (e) => {
      e.preventDefault();
      const v = (n) => f.elements[n].value.trim();
      const phone = v('phone'); const company = v('company'); const name = v('name');
      const product = v('product'); const talk = v('talk'); const agreed = v('agreed');
      if (!phone && !company && !name && !newState.matchId) { toast('Впишите телефон, компанию или имя', 'err'); f.elements.phone.focus(); return; }

      let next = null;
      if (newState.days !== '') {
        const at = dateFromKeyTime(f.elements.date.value, f.elements.time.value);
        if (Number.isNaN(at.getTime())) { toast('Выберите дату звонка', 'err'); return; }
        if (at.getTime() < Date.now() - 60000) { toast('Это время уже прошло', 'err'); return; }
        next = { at: at.toISOString(), kind: f.elements.kind.value === 'meeting' ? 'meeting' : 'call' };
      }
      const logEntry = talk ? [{ id: uid(), at: nowIso(), text: talk }] : [];

      let savedId;
      if (newState.matchId && state.clients.get(newState.matchId)) {
        const c = state.clients.get(newState.matchId);
        const contacts = clone(c.contacts);
        const pd = digits(phone);
        const known = contacts.find((x) => (pd && digits(x.phone).endsWith(pd.slice(-8))) || (name && x.name.toLowerCase() === name.toLowerCase()));
        if (known) {
          if (name && !known.name) known.name = name;
          if (phone && !known.phone) known.phone = phone;
        } else if (phone || name) {
          contacts.push({ id: uid(), name, role: '', phone, email: '', dm: false, main: !contacts.length, channels: phone ? ['phone'] : [] });
        }
        const changes = { contacts, log: [...logEntry, ...c.log], last_contact_at: nowIso() };
        if (company && !c.company) changes.company = company;
        if (product) changes.product = product;
        if (agreed) changes.agreed = agreed;
        if (next) changes.next = next;
        if (newState.status !== c.status) {
          changes.status = newState.status;
          changes.status_at = nowIso();
          if (c.status === 'lost') changes.lost_at = null;
        }
        patch(c.id, changes, { now: true });
        savedId = c.id;
      } else {
        const created = await createClient({
          company, product, agreed, next, status: newState.status, log: logEntry,
          contacts: phone || name ? [{ id: uid(), name, role: '', phone, email: '', dm: false, main: true, channels: phone ? ['phone'] : [] }] : [],
        });
        savedId = created.id;
      }
      dlg.close();
      setTab(state.clients.get(savedId).status);
      toast('Сохранено', '', { label: 'Открыть', fn: () => openCard(savedId) });
    });
  }

  /* ===================================================================
     Карточка клиента
     =================================================================== */
  let cardRenderedJSON = '';

  function openCard(id) {
    if (!state.clients.has(id)) return;
    state.openId = id;
    renderCard();
    const dlg = $('#dlg-card');
    if (!dlg.open) dlg.showModal();
    const scroller = $('.cs-scroll');
    if (scroller) scroller.scrollTop = 0;
  }

  function gcalUrl(c) {
    const main = mainContact(c);
    const start = new Date(c.next.at);
    const end = new Date(start.getTime() + (c.next.kind === 'meeting' ? 60 : 15) * 60000);
    const stamp = (d) => { const p = tzParts(d); return `${p.y}${pad(p.m)}${pad(p.d)}T${pad(p.h)}${pad(p.mi)}00`; };
    const details = [
      c.product ? `Товар: ${c.product}` : '',
      c.agreed ? `Договорились: ${c.agreed}` : '',
      main && main.name ? `Контакт: ${main.name}` : '',
      main && main.phone ? `Телефон: ${main.phone}` : '',
    ].filter(Boolean).join('\n');
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `${c.next.kind === 'meeting' ? 'Встреча' : 'Позвонить'}: ${c.company || (main && main.name) || 'клиент'}`,
      dates: `${stamp(start)}/${stamp(end)}`,
      ctz: TZ,
      details,
    });
    return `https://calendar.google.com/calendar/render?${params}`;
  }

  function nextHTML(c) {
    if (!c.next) {
      return `<div class="cs-sec-head"><h3>Перезвонить</h3></div>
<div class="chips">
  <button type="button" data-act="next-set" data-days="0">Сегодня</button>
  <button type="button" data-act="next-set" data-days="1">Завтра</button>
  <button type="button" data-act="next-set" data-days="3">Через 3 дня</button>
  <button type="button" data-act="next-set" data-days="7">Через неделю</button>
</div>`;
    }
    const d = new Date(c.next.at);
    const due = dueInfo(c.next);
    return `<div class="cs-sec-head"><h3>Перезвонить</h3><span class="due ${due.cls}">${esc(due.label)}</span></div>
<div class="next">
  <div class="next-row">
    <input type="date" data-next="date" value="${esc(dayKey(d))}" aria-label="Дата">
    <select data-next="time" aria-label="Время">${timeOptions(timeStr(d))}</select>
    <select data-next="kind" aria-label="Что"><option value="call"${c.next.kind !== 'meeting' ? ' selected' : ''}>Звонок</option><option value="meeting"${c.next.kind === 'meeting' ? ' selected' : ''}>Встреча</option></select>
  </div>
  <div class="next-actions">
    <button type="button" class="btn" data-act="next-done">${ICON.check}Сделано</button>
    <a class="btn" href="${esc(gcalUrl(c))}" target="_blank" rel="noopener noreferrer">${ICON.cal}В Google Календарь</a>
    <button type="button" class="btn ghost" data-act="next-clear">Не нужно</button>
  </div>
</div>`;
  }

  function contactsHTML(c) {
    const rows = c.contacts.map((x) => {
      const wa = x.channels.includes('whatsapp') && waDigits(x.phone);
      return `<div class="contact" data-contact="${esc(x.id)}">
  <button type="button" class="main-star${x.main ? ' on' : ''}" data-act="c-main" aria-pressed="${x.main}" aria-label="С ним ведём общение" title="С ним ведём общение">${ICON.star}</button>
  <div class="contact-fields">
    <input data-cbind="name" value="${esc(x.name)}" placeholder="Имя" aria-label="Имя">
    <input data-cbind="role" value="${esc(x.role)}" placeholder="Должность" aria-label="Должность">
    <input data-cbind="phone" value="${esc(x.phone)}" type="tel" inputmode="tel" placeholder="Телефон" aria-label="Телефон">
    <input data-cbind="email" value="${esc(x.email)}" type="email" inputmode="email" placeholder="Email" aria-label="Email">
  </div>
  <div class="contact-tools"><button type="button" class="icon-btn" data-act="c-del" aria-label="Удалить контакт">${ICON.trash}</button></div>
  <div class="contact-opts">
    <button type="button" class="pill dm${x.dm ? ' on' : ''}" data-act="c-dm" aria-pressed="${x.dm}">ЛПР</button>
    ${CHANNELS.map((ch) => `<button type="button" class="pill${x.channels.includes(ch.key) ? ' on' : ''}" data-act="c-ch" data-ch="${ch.key}" aria-pressed="${x.channels.includes(ch.key)}">${ch.label}</button>`).join('')}
    <span class="contact-go">
      ${x.phone ? `<a class="icon-btn" href="tel:${esc(telHref(x.phone))}" aria-label="Позвонить">${ICON.phone}</a>` : ''}
      ${wa ? `<a class="icon-btn" href="https://wa.me/${esc(wa)}" target="_blank" rel="noopener noreferrer" aria-label="Написать в WhatsApp">${ICON.wa}</a>` : ''}
      ${x.email ? `<a class="icon-btn" href="mailto:${esc(x.email)}" aria-label="Написать письмо">${ICON.mail}</a>` : ''}
    </span>
  </div>
</div>`;
    }).join('');
    return `<div class="cs-sec-head"><h3>Контакты</h3></div>${rows}<button type="button" class="link-btn" data-act="c-add">+ Добавить контакт</button>`;
  }

  function logHTML(c) {
    const items = c.log.map((e) => `<li data-log="${esc(e.id)}"><time>${esc(fmtDateTime(e.at))}</time><p>${esc(e.text)}</p><button type="button" class="icon-btn" data-act="log-del" aria-label="Удалить запись">${ICON.trash}</button></li>`).join('');
    return `<div class="cs-sec-head"><h3>История разговоров</h3></div>${items ? `<ul class="log">${items}</ul>` : '<p class="hint">Пока нет записей.</p>'}`;
  }

  function lostHTML(c) {
    const back = c.lost_at ? fmtLongDate(addMonths(c.lost_at, RETURN_MONTHS).toISOString()) : '';
    return `<section class="cs-sec cs-lost">
  <div class="cs-sec-head"><h3>Почему минус</h3></div>
  <div class="chips">${LOST_REASONS.map((r) => `<button type="button" data-act="lost-reason" data-reason="${esc(r)}"${c.lost_reason === r ? ' class="on"' : ''}>${esc(r)}</button>`).join('')}</div>
  <textarea data-bind="lost_reason" rows="2" placeholder="Своими словами" aria-label="Причина">${esc(c.lost_reason)}</textarea>
  ${back ? `<p class="hint">Вернётся в «В работе» ${esc(back)}</p>` : ''}
</section>`;
  }

  function renderCard() {
    const c = state.clients.get(state.openId);
    const body = $('#card-body');
    if (!c) { $('#dlg-card').close(); return; }
    const scroller = $('.cs-scroll', body);
    const top = scroller ? scroller.scrollTop : 0;
    body.innerHTML = `
<div class="cs-head">
  <button type="button" class="vip${c.vip ? ' on' : ''}" data-act="vip" aria-pressed="${c.vip}" aria-label="VIP клиент">${ICON.star}</button>
  <input class="cs-company" data-bind="company" value="${esc(c.company)}" placeholder="Название компании" aria-label="Компания">
  <button type="button" class="icon-btn" data-close aria-label="Закрыть">${ICON.close}</button>
</div>
<div class="cs-status"><div class="seg">${STATUSES.map((s) => `<button type="button" data-act="status" data-status="${s.key}"${c.status === s.key ? ' class="on"' : ''}>${s.title}</button>`).join('')}</div></div>
<div class="cs-scroll">
  ${c.status === 'lost' ? lostHTML(c) : ''}
  <section class="cs-sec">
    <label class="f"><span>О чём говорили сейчас</span><textarea data-talk rows="3" placeholder="Коротко, что сказал клиент"></textarea></label>
    <div class="log-add"><button type="button" class="btn primary" data-act="log-add">Записать в историю</button></div>
  </section>
  <section class="cs-sec">
    <label class="f"><span>О чём договорились</span><textarea data-bind="agreed" rows="3" placeholder="Например: отправить КП до пятницы">${esc(c.agreed)}</textarea></label>
  </section>
  <section class="cs-sec" data-part="next">${nextHTML(c)}</section>
  <section class="cs-sec">
    <label class="f"><span>Что хочет купить</span><textarea data-bind="product" rows="2">${esc(c.product)}</textarea></label>
    <div class="cs-grid">
      <label class="f"><span>Счёт №</span><input data-bind="invoice_no" value="${esc(c.invoice_no)}"></label>
      <label class="f money"><span>Сумма, €</span><input data-bind="amount" inputmode="decimal" value="${esc(amountInput(c.amount))}"></label>
    </div>
  </section>
  <section class="cs-sec" data-part="contacts">${contactsHTML(c)}</section>
  <section class="cs-sec" data-part="log">${logHTML(c)}</section>
</div>
<div class="cs-foot">
  <span>Создан ${esc(fmtLongDate(c.created_at))}</span>
  <span class="grow"></span>
  <button type="button" class="btn ghost danger" data-act="delete">Удалить клиента</button>
</div>`;
    const newScroller = $('.cs-scroll', body);
    if (newScroller) newScroller.scrollTop = top;
    cardRenderedJSON = JSON.stringify(c);
  }

  // пришли изменения с другого устройства, пока карточка открыта
  function syncOpenCard() {
    if (!state.openId || !$('#dlg-card').open) return;
    const c = state.clients.get(state.openId);
    if (!c) { $('#dlg-card').close(); toast('Карточку удалили на другом устройстве'); return; }
    const json = JSON.stringify(c);
    if (json === cardRenderedJSON || dirty.has(c.id)) return;
    const active = document.activeElement;
    const typing = active && $('#card-body').contains(active) && active.matches('input, textarea, select');
    if (!typing) { renderCard(); return; }
    $$('[data-bind]', $('#card-body')).forEach((el) => {
      if (el === active) return;
      const key = el.dataset.bind;
      const val = key === 'amount' ? amountInput(c.amount) : (c[key] || '');
      if (el.value !== val) el.value = val;
    });
    cardRenderedJSON = json;
  }

  function updateContact(c, contactId, fn) {
    const contacts = clone(c.contacts);
    const x = contacts.find((k) => k.id === contactId);
    if (!x) return null;
    fn(x, contacts);
    return contacts;
  }

  function bindCard() {
    const dlg = $('#dlg-card');
    const body = $('#card-body');

    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => {
      const id = state.openId;
      const talk = $('[data-talk]', body);
      if (id && talk && talk.value.trim()) {
        const c = state.clients.get(id);
        if (c) {
          patch(id, { log: [{ id: uid(), at: nowIso(), text: talk.value.trim() }, ...c.log], last_contact_at: nowIso() });
          toast('Разговор записан в историю');
        }
      }
      if (id) flush(id);
      state.openId = null;
    });

    body.addEventListener('input', (e) => {
      const c = state.clients.get(state.openId);
      if (!c) return;
      const el = e.target;
      if (el.dataset.bind) {
        const key = el.dataset.bind;
        const value = key === 'amount' ? parseAmount(el.value) : el.value;
        patch(c.id, { [key]: value });
        cardRenderedJSON = JSON.stringify(c);
        if (key === 'lost_reason') $$('[data-act="lost-reason"]', body).forEach((b) => b.classList.toggle('on', b.dataset.reason === el.value));
      } else if (el.dataset.cbind) {
        const contactId = el.closest('[data-contact]').dataset.contact;
        const contacts = updateContact(c, contactId, (x) => { x[el.dataset.cbind] = el.value; });
        if (contacts) { patch(c.id, { contacts }); cardRenderedJSON = JSON.stringify(c); }
      }
    });

    body.addEventListener('change', (e) => {
      const c = state.clients.get(state.openId);
      const el = e.target;
      if (!c || !el.dataset.next || !c.next) return;
      const d = new Date(c.next.at);
      const date = el.dataset.next === 'date' ? el.value : dayKey(d);
      const time = el.dataset.next === 'time' ? el.value : timeStr(d);
      const kind = el.dataset.next === 'kind' ? el.value : c.next.kind;
      const at = date ? dateFromKeyTime(date, time) : null;
      if (!at || Number.isNaN(at.getTime())) { renderCard(); return; }
      patch(c.id, { next: { at: at.toISOString(), kind } }, { now: true });
      $('[data-part="next"]', body).innerHTML = nextHTML(state.clients.get(c.id));
      cardRenderedJSON = JSON.stringify(state.clients.get(c.id));
    });

    body.addEventListener('keydown', (e) => {
      if (e.target.matches('[data-talk]') && e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        $('[data-act="log-add"]', body).click();
      }
    });

    body.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) { dlg.close(); return; }
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      const c = state.clients.get(state.openId);
      if (!c) return;
      const act = btn.dataset.act;

      if (act === 'vip') { patch(c.id, { vip: !c.vip }, { now: true }); renderCard(); return; }

      if (act === 'status') {
        const s = btn.dataset.status;
        if (s === c.status) return;
        if (s === 'lost') { openLost(c.id, () => renderCard()); return; }
        setStatus(c.id, s);
        renderCard();
        toast(`Перенесено в «${TITLE[s]}»`);
        return;
      }

      if (act === 'lost-reason') {
        patch(c.id, { lost_reason: btn.dataset.reason });
        renderCard();
        return;
      }

      if (act === 'log-add') {
        const talk = $('[data-talk]', body);
        const text = talk.value.trim();
        if (!text) { talk.focus(); return; }
        talk.value = '';
        patch(c.id, { log: [{ id: uid(), at: nowIso(), text }, ...c.log], last_contact_at: nowIso() }, { now: true });
        renderCard();
        toast('Записано');
        return;
      }

      if (act === 'log-del') {
        const li = btn.closest('[data-log]');
        if (btn.dataset.confirm !== '1') { btn.dataset.confirm = '1'; btn.style.color = 'var(--red)'; btn.setAttribute('aria-label', 'Нажмите ещё раз, чтобы удалить'); return; }
        patch(c.id, { log: c.log.filter((x) => x.id !== li.dataset.log) }, { now: true });
        renderCard();
        return;
      }

      if (act === 'next-set') {
        const slot = defaultSlot(Number(btn.dataset.days));
        patch(c.id, { next: { at: dateFromKeyTime(slot.date, slot.time).toISOString(), kind: 'call' } }, { now: true });
        renderCard();
        return;
      }
      if (act === 'next-done') {
        patch(c.id, { next: null, last_contact_at: nowIso() }, { now: true });
        renderCard();
        const talk = $('[data-talk]', body);
        talk.focus();
        toast('Отмечено. Запишите, о чём говорили.');
        return;
      }
      if (act === 'next-clear') { patch(c.id, { next: null }, { now: true }); renderCard(); return; }

      if (act === 'c-add') {
        const contacts = [...clone(c.contacts), { id: uid(), name: '', role: '', phone: '', email: '', dm: false, main: !c.contacts.length, channels: ['phone'] }];
        patch(c.id, { contacts }, { now: true });
        renderCard();
        const inputs = $$('[data-cbind="name"]', body);
        if (inputs.length) inputs[inputs.length - 1].focus();
        return;
      }
      const row = btn.closest('[data-contact]');
      if (row) {
        const contactId = row.dataset.contact;
        let contacts = null;
        if (act === 'c-main') contacts = updateContact(c, contactId, (x, all) => { const on = !x.main; all.forEach((k) => { k.main = false; }); x.main = on; });
        if (act === 'c-dm') contacts = updateContact(c, contactId, (x) => { x.dm = !x.dm; });
        if (act === 'c-ch') contacts = updateContact(c, contactId, (x) => { const k = btn.dataset.ch; x.channels = x.channels.includes(k) ? x.channels.filter((y) => y !== k) : [...x.channels, k]; });
        if (act === 'c-del') {
          if (btn.dataset.confirm !== '1') { btn.dataset.confirm = '1'; btn.style.color = 'var(--red)'; btn.setAttribute('aria-label', 'Нажмите ещё раз, чтобы удалить'); return; }
          contacts = clone(c.contacts).filter((k) => k.id !== contactId);
        }
        if (contacts) { patch(c.id, { contacts }, { now: true }); renderCard(); }
        return;
      }

      if (act === 'delete') {
        if (btn.dataset.confirm !== '1') { btn.dataset.confirm = '1'; btn.textContent = 'Точно удалить навсегда?'; return; }
        const id = c.id;
        state.openId = null;
        dlg.close();
        deleteClient(id);
      }
    });
  }

  /* ===================================================================
     Минус
     =================================================================== */
  let lostCtx = null;
  function openLost(id, onCancel) {
    const c = state.clients.get(id);
    if (!c) return;
    lostCtx = { id, onCancel, done: false, reason: '' };
    const f = $('#form-lost');
    f.reset();
    $('#lost-company').textContent = c.company || (mainContact(c) || {}).name || '';
    $('#lost-reasons').innerHTML = LOST_REASONS.map((r) => `<button type="button" data-reason="${esc(r)}">${esc(r)}</button>`).join('');
    $('#dlg-lost').showModal();
  }
  function bindLost() {
    const dlg = $('#dlg-lost');
    const f = $('#form-lost');
    $('#lost-reasons').addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b || !lostCtx) return;
      lostCtx.reason = lostCtx.reason === b.dataset.reason ? '' : b.dataset.reason;
      $$('#lost-reasons button').forEach((x) => x.classList.toggle('on', x.dataset.reason === lostCtx.reason));
    });
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => {
      if (lostCtx && !lostCtx.done && lostCtx.onCancel) lostCtx.onCancel();
      lostCtx = null;
    });
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!lostCtx) return;
      const extra = f.elements.reason.value.trim();
      const reason = [lostCtx.reason, extra].filter(Boolean).join(': ');
      if (!reason) { toast('Выберите или напишите причину', 'err'); return; }
      lostCtx.done = true;
      const id = lostCtx.id;
      markLost(id, reason);
      dlg.close();
      if (state.openId === id) renderCard();
    });
  }

  /* ===================================================================
     Настройки, копия
     =================================================================== */
  function bindSettings() {
    const dlg = $('#dlg-settings');
    $('#btn-settings').addEventListener('click', () => {
      $('#set-where').textContent = store.kind === 'claude'
        ? 'Клиенты хранятся в вашем аккаунте Claude и синхронизируются на всех устройствах, где вы вошли. Видите их только вы и те, кому вы дадите право редактирования.'
        : `Вы вошли как ${store.user && store.user.email ? store.user.email : ''}. Клиенты хранятся в вашей базе Supabase.`;
      $('#btn-logout').hidden = store.kind !== 'supabase';
      dlg.showModal();
    });
    dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });

    $('#btn-export').addEventListener('click', async () => {
      flushAll();
      const data = JSON.stringify({ app: 'exded-crm', version: 2, exported_at: nowIso(), clients: Array.from(state.clients.values()) }, null, 2);
      const d = new Date();
      try {
        await store.download(`exded-crm-${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}.json`, data);
      } catch (err) {
        if (err && !['cancelled', 'declined'].includes(err.code)) toast(err.message || 'Не скачалось', 'err');
      }
    });

    $('#btn-import').addEventListener('click', () => $('#import-file').click());
    $('#import-file').addEventListener('change', async (e) => {
      const file = e.target.files && e.target.files[0];
      e.target.value = '';
      if (!file) return;
      let data;
      try { data = JSON.parse(await file.text()); } catch { toast('Это не файл резервной копии', 'err'); return; }
      if (!data || data.app !== 'exded-crm') { toast('Это не резервная копия EXDED CRM', 'err'); return; }
      const list = Array.isArray(data.clients) ? data.clients.map(normalize) : legacyToClients(data);
      let added = 0;
      let failed = 0;
      dlg.close();
      toast('Загружаю…');
      for (const raw of list) {
        if (!raw.id || state.clients.has(raw.id)) continue;
        const c = normalize(raw);
        state.clients.set(c.id, c);
        creating.add(c.id);
        try {
          await store.save(clone(c), null);
          creating.delete(c.id);
          added += 1;
        } catch {
          state.clients.delete(c.id);
          creating.delete(c.id);
          failed += 1;
        }
      }
      scheduleRender();
      toast(failed ? `Добавлено ${added}, не удалось ${failed}` : `Добавлено клиентов: ${added}`, failed ? 'err' : '');
    });

    $('#btn-logout').addEventListener('click', async () => {
      dlg.close();
      flushAll();
      await store.logout();
      location.reload();
    });
  }

  function bindShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (document.querySelector('dialog[open]')) return;
      if (e.target.matches('input, textarea, select')) {
        if (e.key === 'Escape' && e.target.id === 'q') { e.target.value = ''; state.search = ''; scheduleRender(); e.target.blur(); }
        return;
      }
      if (e.code === 'KeyN') { e.preventDefault(); openNew(); }
      if (e.key === '/' || e.code === 'Slash') { e.preventDefault(); $('#q').focus(); }
    });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flushAll();
      else { store.refresh(); scheduleRender(); }
    });
    window.addEventListener('pagehide', flushAll);
  }

  /* ===================================================================
     Запуск
     =================================================================== */
  function gate(message, form = null) {
    $('#app').hidden = true;
    $('#gate').hidden = false;
    $('#gate-msg').textContent = message;
    $('#form-login').hidden = form !== 'login';
    $('#form-setup').hidden = form !== 'setup';
  }

  function readConfig() {
    const preset = window.EXDED_CRM_CONFIG || {};
    if (preset.supabaseUrl && preset.supabaseKey) return { supabaseUrl: String(preset.supabaseUrl).trim().replace(/\/+$/, ''), supabaseKey: String(preset.supabaseKey).trim() };
    try {
      const saved = JSON.parse(localStorage.getItem(CFG_KEY) || '{}');
      if (saved.supabaseUrl && saved.supabaseKey) return saved;
    } catch {}
    return null;
  }

  function startApp() {
    $('#gate').hidden = true;
    $('#app').hidden = false;
    if (!appStarted) {
      appStarted = true;
      bindBoard();
      bindNew();
      bindCard();
      bindLost();
      bindSettings();
      bindShortcuts();
      setInterval(() => { scheduleRender(); if (state.openId) { const part = $('[data-part="next"] .due'); if (part && state.clients.get(state.openId)?.next) part.textContent = dueInfo(state.clients.get(state.openId).next).label; } }, 60000);
      setInterval(checkReturns, 60 * 60 * 1000);
    }
    renderBoard();
    renderAgenda();
    setTimeout(checkReturns, 1500);
  }

  async function afterLogin(user) {
    gate('Проверяю доступ…');
    let ok = false;
    try { ok = await store.allowed(); } catch (err) { showLogin('Нет связи с базой: ' + err.message); return; }
    if (!ok) { await store.logout(); showLogin('У этого аккаунта нет доступа к CRM. Запустите файл базы в Supabase ещё раз.'); return; }
    store.user = user;
    gate('Загружаю клиентов…');
    try { await store.start({ onData, onStatus }); } catch (err) { showLogin('Клиенты не загрузились: ' + err.message); return; }
    startApp();
  }

  function showLogin(message = '') {
    gate('Вход в CRM', 'login');
    $('#login-error').textContent = message;
    const f = $('#form-login');
    f.onsubmit = async (e) => {
      e.preventDefault();
      const btn = f.querySelector('button[type=submit]');
      btn.disabled = true;
      $('#login-error').textContent = '';
      try {
        const user = await store.login(f.elements.email.value.trim(), f.elements.password.value);
        f.elements.password.value = '';
        await afterLogin(user);
      } catch (err) {
        $('#login-error').textContent = err.message;
      } finally {
        btn.disabled = false;
      }
    };
  }

  function showSetup() {
    gate('Подключение к базе', 'setup');
    const f = $('#form-setup');
    f.onsubmit = (e) => {
      e.preventDefault();
      try {
        localStorage.setItem(CFG_KEY, JSON.stringify({ supabaseUrl: f.elements.url.value.trim().replace(/\/+$/, ''), supabaseKey: f.elements.key.value.trim() }));
      } catch {}
      location.reload();
    };
  }

  async function boot() {
    if (window.claude && typeof window.claude.use === 'function' && window.CrmClaudeStore) {
      gate('Загружаю клиентов…');
      const s = await window.CrmClaudeStore.open({ onData, onStatus, legacyToClients });
      if (s) { store = s; startApp(); return; }
      if (!window.CrmSupabaseStore) { gate('База не подключилась. Откройте CRM по её ссылке на claude.ai и обновите страницу.'); return; }
    }
    if (!window.CrmSupabaseStore || !window.supabase) { gate('Не загрузились файлы приложения. Обновите страницу.'); return; }
    const cfg = readConfig();
    if (!cfg) { showSetup(); return; }
    store = window.CrmSupabaseStore.create(cfg);
    if (!store) { showSetup(); return; }
    let user = null;
    try { user = await store.session(); } catch {}
    if (!user) { showLogin(); return; }
    afterLogin(user);
  }

  function registerSW() {
    if (!window.EXDED_CRM_SW || !('serviceWorker' in navigator)) return;
    if (location.protocol === 'https:' || location.hostname === 'localhost') navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  function init() { registerSW(); boot(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
