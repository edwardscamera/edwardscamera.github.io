var SC=typeof SC=="object"?SC:{};SC.Widget=function(E){var f={};function c(o){if(f[o])return f[o].exports;var a=f[o]={i:o,l:!1,exports:{}};return E[o].call(a.exports,a,a.exports,c),a.l=!0,a.exports}return c.m=E,c.c=f,c.d=function(o,a,p){c.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:p})},c.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},c.t=function(o,a){if(1&a&&(o=c(o)),8&a||4&a&&typeof o=="object"&&o&&o.__esModule)return o;var p=Object.create(null);if(c.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:o}),2&a&&typeof o!="string")for(var _ in o)c.d(p,_,(function(v){return o[v]}).bind(null,_));return p},c.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return c.d(a,"a",a),a},c.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},c.p="",c(c.s=0)}([function(E,f,c){var o,a,p,_=c(1),v=c(2),C=c(3),d=_.api,g=_.bridge,A=[],m=[],Y=/^http(?:s?)/;function R(n){var t,r;for(t=0,r=m.length;t<r&&n(m[t])!==!1;t++);}function y(n){return n.contentWindow?n.contentWindow:n.contentDocument&&"parentWindow"in n.contentDocument?n.contentDocument.parentWindow:null}function P(n){var t,r=[];for(t in n)n.hasOwnProperty(t)&&r.push(n[t]);return r}function O(n,t,r){r.callbacks[n]=r.callbacks[n]||[],r.callbacks[n].push(t)}function D(n,t){var r=!0;return t.callbacks[n]=[],R(function(e){if((e.callbacks[n]||[]).length)return r=!1,!1}),r}function b(n,t,r){var e,i,u=y(r);if(!u.postMessage)return!1;e=r.getAttribute("src").split("?")[0],i=JSON.stringify({method:n,value:t}),e.substr(0,2)==="//"&&(e=window.location.protocol+e),e=e.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),u.postMessage(i,e)}function S(n){var t;return R(function(r){if(r.instance===n)return t=r,!1}),t}function N(n){var t;return R(function(r){if(y(r.element)===n)return t=r,!1}),t}function G(n,t){return function(r){var e,i=!!((e=r)&&e.constructor&&e.call&&e.apply),u=S(this),l=!i&&t?r:null,s=i&&!t?r:null;return s&&O(n,s,u),b(n,l,u.element),this}}function T(n,t,r){var e,i,u;for(e=0,i=t.length;e<i;e++)n[u=t[e]]=G(u,r)}function L(n,t,r){return n+"?url="+t+"&"+function(e){var i,u,l=[];for(i in e)e.hasOwnProperty(i)&&(u=e[i],l.push(i+"="+(i==="start_track"?parseInt(u,10):u?"true":"false")));return l.join("&")}(r)}function w(n,t,r){var e,i,u=n.callbacks[t]||[];for(e=0,i=u.length;e<i;e++)u[e].apply(n.instance,r);(function(l){var s,h=!1;for(s in v)if(v.hasOwnProperty(s)&&v[s]===l){h=!0;break}return h}(t)||t===d.READY)&&(n.callbacks[t]=[])}function I(n){var t,r,e,i,u;try{r=JSON.parse(n.data)}catch{return!1}return t=N(n.source),e=r.method,i=r.value,(!t||k(n.origin)===k(t.domain))&&(t?(e===d.READY&&(t.isReady=!0,w(t,"__LATE_BINDING__"),D("__LATE_BINDING__",t)),e!==d.PLAY||t.playEventFired||(t.playEventFired=!0),e!==d.PLAY_PROGRESS||t.playEventFired||(t.playEventFired=!0,w(t,d.PLAY,[i])),u=[],i!==void 0&&u.push(i),void w(t,e,u)):(e===d.READY&&A.push(n.source),!1))}function k(n){return n.replace(Y,"")}window.addEventListener?window.addEventListener("message",I,!1):window.attachEvent("onmessage",I),E.exports=p=function(n,t,r){var e;if(((e=n)===""||e&&e.charCodeAt&&e.substr)&&(n=document.getElementById(n)),!function(s){return!(!s||s.nodeType!==1||s.nodeName.toUpperCase()!=="IFRAME")}(n))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(r=r||{},n.src=L("http://wt.soundcloud.test:9200/",t,r));var i,u,l=N(y(n));return l&&l.instance?l.instance:(i=A.indexOf(y(n))>-1,u=new o(n),m.push(new a(u,n,i)),u)},p.Events=d,window.SC=window.SC||{},window.SC.Widget=p,a=function(n,t,r){this.instance=n,this.element=t,this.domain=function(e){var i,u,l,s="";for(e.substr(0,2)==="//"&&(e=window.location.protocol+e),l=e.split("/"),i=0,u=l.length;i<u&&i<3;i++)s+=l[i],i<2&&(s+="/");return s}(t.getAttribute("src")),this.isReady=!!r,this.callbacks={}},(o=function(){}).prototype={constructor:o,load:function(n,t){if(n){t=t||{};var r=this,e=S(this),i=e.element,u=i.src,l=u.substr(0,u.indexOf("?"));e.isReady=!1,e.playEventFired=!1,i.onload=function(){r.bind(d.READY,function(){var s,h=e.callbacks;for(s in h)h.hasOwnProperty(s)&&s!==d.READY&&b(g.ADD_LISTENER,s,e.element);t.callback&&t.callback()})},i.src=L(l,n,t)}},bind:function(n,t){var r=this,e=S(this);return e&&e.element&&(n===d.READY&&e.isReady?setTimeout(t,1):e.isReady?(O(n,t,e),b(g.ADD_LISTENER,n,e.element)):O("__LATE_BINDING__",function(){r.bind(n,t)},e)),this},unbind:function(n){var t,r=S(this);r&&r.element&&(t=D(n,r),n!==d.READY&&t&&b(g.REMOVE_LISTENER,n,r.element))}},T(o.prototype,P(v)),T(o.prototype,P(C),!0)},function(E,f){f.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},f.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(E,f){E.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(E,f){E.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}]);