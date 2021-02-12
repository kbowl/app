var Lucia=function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function t(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{u(n.next(e))}catch(e){o(e)}}function l(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,l)}u((n=n.apply(e,t||[])).next())}))}function r(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function n(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function o(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e}var a,l="l-";!function(e){e["@"]="on",e[":"]="bind"}(a||(a={}));var u=function(e){return new RegExp("\\b"+e+"\\b","gim")};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e){return e.replace(/\s+/gim," ").trim()},f=function(e,t){return e[t]},v=function(e,t,r){return e[t]=r},d=function(e){return o(new Set(e))},p=function(e,t,r){var n="with($state){"+(null==r||r?"return "+e:e)+"}";return function(o,a){try{var l=i([Object.keys(o),Object.values(o)],2),u=l[0],c=l[1],s=e.replace(/(\[\d+\])|(\$state\.)|(\(\))|;*/gim,""),f=r?u.indexOf(s):-1;if(-1!==f)return function(e,t,r){var n=t[r],i=/\[(\d+)\]/gim.exec(e);return i&&i[1]&&n instanceof Array&&!isNaN(i[1])?n[Number(i[1])]:e.endsWith("()")?n():n}(e,c,f);return new Function("$state","$el","$emit","$event",n)(o,t,(function(e,r,n){void 0===n&&(n=!0);var i=new CustomEvent(e,r);(n?document:t||document).dispatchEvent(i)}),a)}catch(r){console.warn('Lucia Error: "'+r+'"\n\nExpression: "'+e+'"\nElement:',t)}}},y=function(e){return e.hasAttribute("l-for")},h=function(e,t){var r=i(m(e,t),2),n=r[0],o=r[1],a=Object.keys(n).length>0,l=Object.values(n).some((function(e){var r=e.value;return Object.keys(t).some((function(e){return u(e).test(r)}))}));return a?{el:e,deps:o,directives:n,type:l?1:0}:null},m=function(e,t){var r,i;void 0===t&&(t={});var c={},s=[],y=function(r,n){var i="l-state"===r,y=r.startsWith(l),h=Object.keys(a).some((function(e){return r.startsWith(e)}));if(i||!y&&!h)return"continue";var m=[],b=Object.keys(t),_=!0,g=b.filter((function(e){var r=u(e).test(String(n));if("function"==typeof t[e]&&r){var i=b.filter((function(r){return u(r).test(String(t[e]))}));m.push.apply(m,o(i))}return r}));/on|@/gim.test(r)&&(_=!1),r.includes("for")&&void 0===f(e,"__l_for_template")&&(v(e,"__l_for_template",String(e.innerHTML).trim()),_=!1);var w=d(o(g,m));s.push.apply(s,o(w));var x={compute:p(n,e,_),deps:w,value:n},E=y?r.slice(l.length):a[r[0]]+":"+r.slice(1);c[E]=x};try{for(var h=n(e.attributes),m=h.next();!m.done;m=h.next()){var b=m.value;y(b.name,b.value)}}catch(e){r={error:e}}finally{try{m&&!m.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}return[c,d(s)]},b=function e(t,r,i){var a,l;void 0===r&&(r=!1),void 0===i&&(i=!1);var u,c=[],s=y(t),f=!!(u=t).parentElement&&u.parentElement.hasAttribute("l-for");if(!r&&(s||f))return c;if(i||r&&s||c.push(t),r||!s&&!f)try{for(var v=n(t.childNodes),d=v.next();!d.done;d=v.next()){var p=d.value;if(p.nodeType===Node.ELEMENT_NODE)if(!r&&y(p))c.push(p);else{if(p.hasAttribute("l-state"))continue;c.push.apply(c,o(e(p,r)))}}}catch(e){a={error:e}}finally{try{d&&!d.done&&(l=v.return)&&l.call(v)}finally{if(a)throw a.error}}return c},_=function(e,t,r){var i,o;if(void 0===t&&(t={}),void 0===r&&(r=!1),!e)throw new Error("Please provide a HTMLElement");var l=[],u=void 0!==f(e,"__l")&&y(e),c=b(e,u,r);try{for(var s=n(c),v=s.next();!v.done;v=s.next()){var d=v.value;if(new RegExp("(l-|"+Object.keys(a).join("|")+")\\w+","gim").test(d.outerHTML)){var p=h(d,t);p&&l.push(p)}}}catch(e){i={error:e}}finally{try{v&&!v.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}return l},g=function(e,t,r,o){var a,l;void 0===r&&(r={}),void 0===o&&(o=[]);for(var u=[],c=Object.keys(t),s=function(a){var l,s,f=e[a],v=0===f.type;if(v&&u.push(a),!o.some((function(e){return f.deps.includes(e)}))&&!v)return"continue";var d=function(e,n){var i=e.split(/:|\./)[0];if(!c.includes(i.toUpperCase()))return"continue";var a=o.some((function(e){return n.deps.includes(e)})),l=0===Object.keys(n.deps).length;if(a||v||l){var u={el:f.el,name:e,data:n,node:f,state:r};E(u,t),l&&delete f.directives[e]}};try{for(var p=(l=void 0,n(Object.entries(f.directives))),y=p.next();!y.done;y=p.next()){var h=i(y.value,2);d(h[0],h[1])}}catch(e){l={error:e}}finally{try{y&&!y.done&&(s=p.return)&&s.call(p)}finally{if(l)throw l.error}}},f=0;f<e.length;f++)s(f);try{for(var v=n(u),d=v.next();!d.done;d=v.next()){f=d.value;e.splice(f,1)}}catch(e){a={error:e}}finally{try{d&&!d.done&&(l=v.return)&&l.call(v)}finally{if(a)throw a.error}}},w=function(e,t,r,i){var a,l,u=[];try{for(var c=n(e),s=c.next();!s.done;s=c.next()){var f=s.value;u.push.apply(u,o(f.deps))}}catch(e){a={error:e}}finally{try{s&&!s.done&&(l=c.return)&&l.call(c)}finally{if(a)throw a.error}}var v=d(o(t,u));r.deps=v,r.directives[i].deps=v},x={BIND:function(e){var t=e.el,r=e.name,n=e.data,i=e.state;switch(r.split(":")[1]){case"class":var o=n.compute(i);if("string"==typeof o)return t.setAttribute("class",s(t.className+" "+o));if(o instanceof Array)return t.setAttribute("class",s(t.className+" "+o.join(" ")));var a=[];for(var l in o)o[l]&&a.push(l);var u=new RegExp("\\b"+Object.keys(o).join("|")+"\\b","gim"),f=t.className.replace(u,"");return a.length>0?t.setAttribute("class",s(f+" "+a.join(" "))):s(t.className).length>0?t.setAttribute("class",s(f)):t.removeAttribute("class");case"style":var v=n.compute(i);for(var l in t.removeAttribute("style"),v)t.style[l]=v[l];break;default:var d=n.compute(i);if("object"===c(d)&&null!==d)for(var l in d)d[l]?t.setAttribute(l,d[l]):t.removeAttribute(l);else d?t.setAttribute(r.split(":")[1],d):t.removeAttribute(r.split(":")[1])}},HTML:function(e){var t,r=e.el,n=e.data,i=e.state,o=e.node;o=o;var a=f(r,"__l");r.innerHTML=null!==(t=n.compute(i))&&void 0!==t?t:n.value;var l=_(r,i,!0);a||w(l,n.deps,o,"html"),g(l,x,i,n.deps),v(r,"__l",!0)},IF:function(e){var t,r,n=e.el,i=e.data,o=e.state,a=e.node;a=a;var l=!!i.compute(o);if(!f(a.el,"__l_if_template")){var u=document.createElement("template");v(u,"__l_if_template",!0),u.content.appendChild(n.cloneNode(!0)),u.setAttribute("l-if",i.value),n.replaceWith(u),a.el=u}var c=f(a.el,"__l_has_inserted");if(!l&&c)null===(t=a.el.nextElementSibling)||void 0===t||t.remove(),v(a.el,"__l_has_inserted",!1);else if(l){if(!c){var s=a.el.content.cloneNode(!0);null===(r=a.el.parentElement)||void 0===r||r.insertBefore(s,a.el.nextElementSibling),v(a.el,"__l_has_inserted",!0)}var d=a.el.nextElementSibling;d.removeAttribute("l-if");var p=_(d,o);f(d,"__l")||w(p,i.deps,a,"if"),v(d,"__l",!0),g(p,x,o,a.deps)}},MODEL:function(e){var t=e.el,r=e.name,n=e.data,i=e.state,o=t,a=i[n.value],l="checkbox"===o.type?"checked":"value";if(o[l]!==String(a)&&(o[l]=a),!f(o,"__l_model_registered")){var u=r.split(".")[1];o.addEventListener("debounce"===u?"change":"input",(function(){return function(e,t,r,n){"checkbox"===e.type&&(e.value=String(e.checked));var i,o="number"==typeof t&&!isNaN(e.value),a="boolean"==typeof t&&("true"===e.value||"false"===e.value),l=null==t&&("null"===e.value||"undefined"===e.value);return i=o?parseFloat(e.value):a?"true"===e.value:l?"null"===e.value?null:void 0:String(e.value),n[r.value]=i,i}(o,a,n,i)})),v(o,"__l_model_registered",!0)}},ON:function(e){var t=e.el,r=e.name,n=e.data,o=e.state,a={};if(!f(t,"__l_on_registered")){var l=i(r.split("."),2),u=l[0],c=l[1],s=u.split(":")[1],d=c||null,p=["outside","global"].includes(String(d))?document:t;a.once="once"===d,a.passive="passive"===d,p.addEventListener(s,(function(e){if("prevent"===d&&e.preventDefault(),"stop"===d&&e.stopPropagation(),"outside"===d){if(t.contains(e.target))return;if(t.offsetWidth<1&&t.offsetHeight<1)return}n.compute(o,e)}),a),v(p,"__l_on_registered",!0)}},TEXT:function(e){var t,r=e.el,n=e.data,i=e.state;r.textContent=null!==(t=n.compute(i))&&void 0!==t?t:n.value},FOR:function(e){var t=e.el,r=e.data,n=e.state,o=e.node;o=o;var a=f(t,"__l");v(t,"__l",!0);var l=i(r.value.split(/\s+(?:in|of)\s+/gim),2),c=l[0],s=l[1],d=i(null==c?void 0:c.trim().replace(/\(|\)/gim,"").split(","),2),p=d[0],y=d[1],h=n[null==s?void 0:s.trim()],m=_(t,n),b=f(t,"__l_for_template");t.innerHTML.trim()===b&&(t.innerHTML="");var E=(null==h?void 0:h.length)-t.children.length;if(0===(null==h?void 0:h.length))t.innerHTML="";else if(0!==E)for(var j=Math.abs(E);j>0;j--)if(E<0)t.removeChild(t.lastChild);else{var O=b.startsWith("<th")?"thead":b.startsWith("<td")||b.startsWith("<tr")?"tbody":"div",S=document.createElement(O),k=b;p&&(k=k.replace(u("this\\."+p.trim()),s+"["+(h.length-j)+"]")),y&&(k=k.replace(u("this\\."+y.trim()),String(h.length-j))),S.innerHTML=k,t.appendChild(S.firstElementChild)}a||w(m,r.deps,o,"for"),g(a?m:_(t,n),x,n,o.deps)}},E=function(e,t){t[e.name.split(/:|\./gim)[0].toUpperCase()](e)},j=function(e,t){var r={get:function(e,t){return"object"===c(e[t])&&null!==e[t]?new Proxy(e[t],r):e[t]},set:function(r,n,i){if("function"==typeof e[n])return!1;var o=!isNaN(Number(n))||"length"===n,a=[];return a=r instanceof Array&&o?Object.keys(e).filter((function(t){return n=e[t],i=r,n instanceof Array&&i instanceof Array&&n.length===i.length&&n.every((function(e,t){return e===i[t]}));var n,i})):Object.keys(e).some((function(e){return void 0===r[e]}))?Object.keys(e).filter((function(t){return"object"===c(e[t])})):[n],r[n]=i,t(a),!0}};return Proxy.revocable(Object.seal(e),r)},O=function(){function t(e){void 0===e&&(e={}),this.state=e,this.directives={}}return t.prototype.mount=function(t){var r="string"==typeof t?document.querySelector(t):t;return this.ast=_(r,this.state),this.state=j(this.state,this.render.bind(this)).proxy,this.directives=e(e({},this.directives),x),this.render(),v(r,"__l",this),this.state},t.prototype.directive=function(e,t){this.directives[e.toUpperCase()]=t},t.prototype.render=function(e){void 0===e&&(e=Object.keys(this.state)),g(this.ast,x,this.state,e)},t}(),S=function(e){return new O(e)},k=function(e){var t,r,i,a;void 0===e&&(e=document);var l="l-state",u="l-mask",c=e.querySelectorAll("[l-state]"),s=e.querySelectorAll("[l-mask]"),v=o(c).filter((function(e){return void 0===f(e,"__l")}));try{for(var d=n(v),y=d.next();!y.done;y=d.next()){var h=(x=y.value).getAttribute(l),m=x.getAttribute("l-init"),b=p(""+(h||"{}"),x,!0)({});S(b).mount(x);var _=m?p(""+m,x,!0):void 0;_&&_(b)}}catch(e){t={error:e}}finally{try{y&&!y.done&&(r=d.return)&&r.call(d)}finally{if(t)throw t.error}}try{for(var g=n(s),w=g.next();!w.done;w=g.next()){var x;(x=w.value).removeAttribute(u)}}catch(e){i={error:e}}finally{try{w&&!w.done&&(a=g.return)&&a.call(g)}finally{if(i)throw i.error}}},A=Object.freeze({__proto__:null,component:S,compile:_,render:g,reactive:j,directives:x,computeExpression:p,init:k}),N=function(){return k()},L=function(){return t(void 0,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}))];case 1:return e.sent(),N(),document.addEventListener("turbolinks:load",N),document.addEventListener("turbo:load",N),[2]}}))}))};return window.__l?window.__l((function(){return L()})):L(),A}();