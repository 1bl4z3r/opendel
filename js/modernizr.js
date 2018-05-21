window.Modernizr=function(Z,Y,X){function F(b){Q.cssText=b}function E(d,c){return F(prefixes.join(d+";")+(c||""))}function D(d,c){return typeof d===c}function C(d,c){return !!~(""+d).indexOf(c)}function B(g,c,j){for(var i in g){var h=c[g[i]];if(h!==X){return j===!1?g[i]:D(h,"function")?h.bind(j||c):h}}return !1}var W="2.8.3",V={},U=!0,T=Y.documentElement,S="modernizr",R=Y.createElement(S),Q=R.style,P,O={}.toString,N={},M={},L={},K=[],J=K.slice,I,H={}.hasOwnProperty,G;!D(H,"undefined")&&!D(H.call,"undefined")?G=function(d,c){return H.call(d,c)}:G=function(d,c){return c in d&&D(d.constructor.prototype[c],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(a){var h=this;if(typeof h!="function"){throw new TypeError}var g=J.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};b.prototype=h.prototype;var d=new b,c=h.apply(d,g.concat(J.call(arguments)));return Object(c)===c?c:d}return h.apply(a,g.concat(J.call(arguments)))};return f});for(var A in N){G(N,A)&&(I=A.toLowerCase(),V[I]=N[A](),K.push((V[I]?"":"no-")+I))}return V.addTest=function(e,c){if(typeof e=="object"){for(var f in e){G(e,f)&&V.addTest(f,e[f])}}else{e=e.toLowerCase();if(V[e]!==X){return V}c=typeof c=="function"?c():c,typeof U!="undefined"&&U&&(T.className+=" "+(c?"":"no-")+e),V[e]=c}return V},F(""),R=P=null,function(al,ak){function aa(f,e){var h=f.createElement("p"),g=f.getElementsByTagName("head")[0]||f.documentElement;return h.innerHTML="x<style>"+e+"</style>",g.insertBefore(h.lastChild,g.firstChild)}function z(){var b=t.elements;return typeof b=="string"?b.split(" "):b}function y(d){var c=ac[d[ae]];return c||(c={},ad++,d[ae]=ad,ac[ad]=c),c}function x(b,h,f){h||(h=ak);if(ab){return h.createElement(b)}f||(f=y(h));var e;return f.cache[b]?e=f.cache[b].cloneNode():ag.test(b)?e=(f.cache[b]=f.createElem(b)).cloneNode():e=f.createElem(b),e.canHaveChildren&&!ah.test(b)&&!e.tagUrn?f.frag.appendChild(e):e}function w(b,l){b||(b=ak);if(ab){return b.createDocumentFragment()}l=l||y(b);var k=l.frag.cloneNode(),j=0,i=z(),h=i.length;for(;j<h;j++){k.createElement(i[j])}return k}function v(d,c){c.cache||(c.cache={},c.createElem=d.createElement,c.createFrag=d.createDocumentFragment,c.frag=c.createFrag()),d.createElement=function(a){return t.shivMethods?x(a,d,c):c.createElem(a)},d.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+z().join().replace(/[\w\-]+/g,function(b){return c.createElem(b),c.frag.createElement(b),'c("'+b+'")'})+");return n}")(t,c.frag)}function u(b){b||(b=ak);var d=y(b);return t.shivCSS&&!af&&!d.hasCSS&&(d.hasCSS=!!aa(b,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),ab||v(b,d),b}var aj="3.7.0",ai=al.html5||{},ah=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,ag=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,af,ae="_html5shiv",ad=0,ac={},ab;(function(){try{var b=ak.createElement("a");b.innerHTML="<xyz></xyz>",af="hidden" in b,ab=b.childNodes.length==1||function(){ak.createElement("a");var c=ak.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()}catch(d){af=!0,ab=!0}})();var t={elements:ai.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:aj,shivCSS:ai.shivCSS!==!1,supportsUnknownElements:ab,shivMethods:ai.shivMethods!==!1,type:"default",shivDocument:u,createElement:x,createDocumentFragment:w};al.html5=t,u(ak)}(this,Y),V._version=W,T.className=T.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(U?" js "+K.join(" "):""),V}(this,this.document),function(ad,ac,ab){function aa(b){return"[object Function]"==P.call(b)}function Z(b){return"string"==typeof b}function Y(){}function X(b){return !b||"loaded"==b||"complete"==b||"uninitialized"==b}function W(){var b=O.shift();M=1,b?b.t?R(function(){("c"==b.t?L.injectCss:L.injectJs)(b.s,0,b.a,b.x,b.e,1)},0):(b(),W()):M=0}function V(w,v,t,s,q,p,n){function m(a){if(!g&&X(h.readyState)&&(x.r=g=1,!M&&W(),h.onload=h.onreadystatechange=null,a)){"img"!=w&&R(function(){I.removeChild(h)},50);for(var c in D[v]){D[v].hasOwnProperty(c)&&D[v][c].onload()}}}var n=n||L.errorTimeout,h=ac.createElement(w),g=0,b=0,x={t:t,s:v,e:q,a:p,x:n};1===D[v]&&(b=1,D[v]=[]),"object"==w?h.data=v:(h.src=v,h.type=w),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){m.call(this,b)},O.splice(s,0,x),"img"!=w&&(b||2===D[v]?(I.insertBefore(h,J?null:Q),R(m,n)):D[v].push(h))}function U(g,e,j,i,h){return M=0,e=e||"j",Z(g)?V("c"==e?G:H,g,e,this.i++,j,i,h):(O.splice(this.i++,0,g),1==O.length&&W()),this}function T(){var b=L;return b.loader={load:U,i:0},b}var S=ac.documentElement,R=ad.setTimeout,Q=ac.getElementsByTagName("script")[0],P={}.toString,O=[],M=0,K="MozAppearance" in S.style,J=K&&!!ac.createRange().compareNode,I=J?S:Q.parentNode,S=ad.opera&&"[object Opera]"==P.call(ad.opera),S=!!ac.attachEvent&&!S,H=K?"object":S?"script":"img",G=S?"script":H,F=Array.isArray||function(b){return"[object Array]"==P.call(b)},E=[],D={},C={timeout:function(d,c){return c.length&&(d.timeout=c[0]),d}},N,L;L=function(e){function c(i){var i=i.split("!"),h=E.length,q=i.pop(),p=i.length,q={url:q,origUrl:q,prefixes:i},o,l,j;for(l=0;l<p;l++){j=i[l].split("="),(o=C[j.shift()])&&(q=o(q,j))}for(l=0;l<h;l++){q=E[l](q)}return q}function n(b,s,r,q,p){var o=c(b),l=o.autoCallback;o.url.split(".").pop().split("?").shift(),o.bypass||(s&&(s=aa(s)?s:s[b]||s[q]||s[b.split("/").pop().split("?")[0]]),o.instead?o.instead(b,s,r,q,p):(D[o.url]?o.noexec=!0:D[o.url]=1,r.load(o.url,o.forceCSS||!o.forceJS&&"css"==o.url.split(".").pop().split("?").shift()?"c":ab,o.noexec,o.attrs,o.timeout),(aa(s)||aa(l))&&r.load(function(){T(),s&&s(o.origUrl,p,q),l&&l(o.origUrl,p,q),D[o.url]=2})))}function m(w,v){function u(b,h){if(b){if(Z(b)){h||(r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}),n(b,r,v,0,t)}else{if(Object(b)===b){for(g in o=function(){var a=0,i;for(i in b){b.hasOwnProperty(i)&&a++}return a}(),b){b.hasOwnProperty(g)&&(!h&&!--o&&(aa(r)?r=function(){var i=[].slice.call(arguments);q.apply(this,i),p()}:r[g]=function(i){return function(){var a=[].slice.call(arguments);i&&i.apply(this,a),p()}}(q[g])),n(b[g],r,v,g,t))}}}}else{!h&&p()}}var t=!!w.test,s=w.load||w.both,r=w.callback||Y,q=r,p=w.complete||Y,o,g;u(t?w.yep:w.nope,!!s),s&&u(s)}var k,f,d=this.yepnope.loader;if(Z(e)){n(e,0,d,0)}else{if(F(e)){for(k=0;k<e.length;k++){f=e[k],Z(f)?n(f,0,d,0):F(f)?L(f):Object(f)===f&&m(f,d)}}else{Object(e)===e&&m(e,d)}}},L.addPrefix=function(d,c){C[d]=c},L.addFilter=function(b){E.push(b)},L.errorTimeout=10000,null==ac.readyState&&ac.addEventListener&&(ac.readyState="loading",ac.addEventListener("DOMContentLoaded",N=function(){ac.removeEventListener("DOMContentLoaded",N,0),ac.readyState="complete"},0)),ad.yepnope=T(),ad.yepnope.executeStack=W,ad.yepnope.injectJs=function(r,q,p,n,m,h){var g=ac.createElement("script"),f,b,n=n||L.errorTimeout;g.src=r;for(b in p){g.setAttribute(b,p[b])}q=h?W:q||Y,g.onreadystatechange=g.onload=function(){!f&&X(g.readyState)&&(f=1,q(),g.onload=g.onreadystatechange=null)},R(function(){f||(f=1,q(1))},n),m?g.onload():Q.parentNode.insertBefore(g,Q)},ad.yepnope.injectCss=function(b,n,m,l,k,h){var l=ac.createElement("link"),f,n=h?W:n||Y;l.href=b,l.rel="stylesheet",l.type="text/css";for(f in m){l.setAttribute(f,m[f])}k||(Q.parentNode.insertBefore(l,Q),R(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
