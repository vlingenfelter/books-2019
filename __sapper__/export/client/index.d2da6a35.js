function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function s(t,n,e,o){return t[2]&&o?n.dirty|t[2](o(e)):n.dirty}function f(t){return null==t?"":t}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function b(){return g("")}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function v(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):m(n)}function _(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return g(n)}function w(t){return _(t," ")}function E(t,n){n=""+n,t.data!==n&&(t.data=n)}function A(t,n){"static"===getComputedStyle(t).position&&(t.style.position="relative");const e=document.createElement("object");let o;return e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.type="text/html",e.tabIndex=-1,e.onload=(()=>{(o=e.contentDocument.defaultView).addEventListener("resize",n)}),/Trident/.test(navigator.userAgent)?(t.appendChild(e),e.data="about:blank"):(e.data="about:blank",t.appendChild(e)),{cancel:()=>{o&&o.removeEventListener&&o.removeEventListener("resize",n),t.removeChild(e)}}}let k;function C(t){k=t}function j(){if(!k)throw new Error("Function called outside component initialization");return k}function z(t){j().$$.on_mount.push(t)}function N(t,n){j().$$.context.set(t,n)}const S=[],L=[],T=[],q=[],B=Promise.resolve();let D=!1;function F(t){T.push(t)}function I(){const t=new Set;do{for(;S.length;){const t=S.shift();C(t),O(t.$$)}for(;L.length;)L.pop()();for(let n=0;n<T.length;n+=1){const e=T[n];t.has(e)||(e(),t.add(e))}T.length=0}while(S.length);for(;q.length;)q.pop()();D=!1}function O(t){null!==t.fragment&&(t.update(),r(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(F))}const G=new Set;let H;function J(){H={r:0,c:[],p:H}}function M(){H.r||r(H.c),H=H.p}function P(t,n){t&&t.i&&(G.delete(t),t.i(n))}function V(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),H.c.push(()=>{G.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function K(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const a=t[i],c=n[i];if(c){for(const t in a)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[i]=c}else for(const t in a)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function Q(t){return"object"==typeof t&&null!==t?t:{}}function R(t){t&&t.c()}function U(t,n){t&&t.l(n)}function W(t,n,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:s}=t.$$;a&&a.m(n,o),F(()=>{const n=c.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]}),s.forEach(F)}function X(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Y(t,n){-1===t.$$.dirty[0]&&(S.push(t),D||(D=!0,B.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Z(n,e,i,a,c,u,s=[-1]){const f=k;C(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:s};let p=!1;d.ctx=i?i(n,l,(t,e,o=e)=>(d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&Y(n,t)),e)):[],d.update(),p=!0,r(d.before_update),d.fragment=!!a&&a(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(x(e.target)):d.fragment&&d.fragment.c(),e.intro&&P(n.$$.fragment),W(n,e.target,e.anchor),I()),C(f)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{n as A,K as B,Q as C,N as D,J as E,M as F,h as G,F as H,A as I,z as J,tt as S,$ as a,x as b,v as c,_ as d,m as e,p as f,w as g,y as h,Z as i,f as j,d as k,l,c as m,t as n,R as o,U as p,W as q,u as r,a as s,g as t,s as u,P as v,V as w,X as x,E as y,b as z};
