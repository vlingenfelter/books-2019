import{S as t,i as r,s as n,e,a as o,t as a,c as s,b as c,f as i,g as l,d as u,h as f,k as h,l as p,y as d,n as g,z as m,v,o as C,p as $,q as w,w as A,x as j,E,F as I,G as T,H as x,I as D,J as b}from"./index.d2da6a35.js";function k(t){let r,n,m,v,C,$,w,A,j,E,I,T,x,D=t[0].title+"",b=t[0].author+"";return{c(){r=e("div"),n=e("div"),m=e("div"),v=e("img"),w=o(),A=e("div"),j=e("h1"),E=a(D),I=o(),T=e("p"),x=a(b),this.h()},l(t){r=s(t,"DIV",{class:!0});var e=c(r);n=s(e,"DIV",{class:!0});var o=c(n);m=s(o,"DIV",{class:!0});var a=c(m);v=s(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(i),w=l(o),A=s(o,"DIV",{class:!0});var f=c(A);j=s(f,"H1",{});var h=c(j);E=u(h,D),h.forEach(i),I=l(f),T=s(f,"P",{});var p=c(T);x=u(p,b),p.forEach(i),f.forEach(i),o.forEach(i),e.forEach(i),this.h()},h(){v.src!==(C=t[0].img)&&f(v,"src",C),f(v,"alt",$=t[0].title),f(v,"class","svelte-qwio69"),f(m,"class","flip-card-front svelte-qwio69"),f(A,"class","flip-card-back svelte-qwio69"),f(n,"class","flip-card-inner svelte-qwio69"),f(r,"class","flip-card svelte-qwio69")},m(t,e){h(t,r,e),p(r,n),p(n,m),p(m,v),p(n,w),p(n,A),p(A,j),p(j,E),p(A,I),p(A,T),p(T,x)},p(t,[r]){1&r&&v.src!==(C=t[0].img)&&f(v,"src",C),1&r&&$!==($=t[0].title)&&f(v,"alt",$),1&r&&D!==(D=t[0].title+"")&&d(E,D),1&r&&b!==(b=t[0].author+"")&&d(x,b)},i:g,o:g,d(t){t&&i(r)}}}function y(t,r,n){let{props:e={img:"books/alittlelife.jpg",title:"A Little Life",author:"Hanya Yanagihara",age:"4",year:"2016"}}=r;return t.$set=(t=>{"props"in t&&n(0,e=t.props)}),[e]}class U extends t{constructor(t){super(),r(this,t,y,k,n,{props:0})}}var V={},q={},H=34,M=10,N=13;function O(t){return new Function("d","return {"+t.map(function(t,r){return JSON.stringify(t)+": d["+r+'] || ""'}).join(",")+"}")}function R(t){var r=Object.create(null),n=[];return t.forEach(function(t){for(var e in t)e in r||n.push(r[e]=e)}),n}function z(t,r){var n=t+"",e=n.length;return e<r?new Array(r-e+1).join(0)+n:n}function F(t){var r,n=t.getUTCHours(),e=t.getUTCMinutes(),o=t.getUTCSeconds(),a=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((r=t.getUTCFullYear())<0?"-"+z(-r,6):r>9999?"+"+z(r,6):z(r,4))+"-"+z(t.getUTCMonth()+1,2)+"-"+z(t.getUTCDate(),2)+(a?"T"+z(n,2)+":"+z(e,2)+":"+z(o,2)+"."+z(a,3)+"Z":o?"T"+z(n,2)+":"+z(e,2)+":"+z(o,2)+"Z":e||n?"T"+z(n,2)+":"+z(e,2)+"Z":"")}var S=function(t){var r=new RegExp('["'+t+"\n\r]"),n=t.charCodeAt(0);function e(t,r){var e,o=[],a=t.length,s=0,c=0,i=a<=0,l=!1;function u(){if(i)return q;if(l)return l=!1,V;var r,e,o=s;if(t.charCodeAt(o)===H){for(;s++<a&&t.charCodeAt(s)!==H||t.charCodeAt(++s)===H;);return(r=s)>=a?i=!0:(e=t.charCodeAt(s++))===M?l=!0:e===N&&(l=!0,t.charCodeAt(s)===M&&++s),t.slice(o+1,r-1).replace(/""/g,'"')}for(;s<a;){if((e=t.charCodeAt(r=s++))===M)l=!0;else if(e===N)l=!0,t.charCodeAt(s)===M&&++s;else if(e!==n)continue;return t.slice(o,r)}return i=!0,t.slice(o,a)}for(t.charCodeAt(a-1)===M&&--a,t.charCodeAt(a-1)===N&&--a;(e=u())!==q;){for(var f=[];e!==V&&e!==q;)f.push(e),e=u();r&&null==(f=r(f,c++))||o.push(f)}return o}function o(r,n){return r.map(function(r){return n.map(function(t){return s(r[t])}).join(t)})}function a(r){return r.map(s).join(t)}function s(t){return null==t?"":t instanceof Date?F(t):r.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,r){var n,o,a=e(t,function(t,e){if(n)return n(t,e-1);o=t,n=r?function(t,r){var n=O(t);return function(e,o){return r(n(e),o,t)}}(t,r):O(t)});return a.columns=o||[],a},parseRows:e,format:function(r,n){return null==n&&(n=R(r)),[n.map(s).join(t)].concat(o(r,n)).join("\n")},formatBody:function(t,r){return null==r&&(r=R(t)),o(t,r).join("\n")},formatRows:function(t){return t.map(a).join("\n")},formatRow:a,formatValue:s}}(",").parse;function Z(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}var B,G=(B=S,function(t,r,n){return 2===arguments.length&&"function"==typeof r&&(n=r,r=void 0),function(t,r){return fetch(t,r).then(Z)}(t,r).then(function(t){return B(t,n)})});function J(t,r,n){const e=t.slice();return e[4]=r[n],e}function L(t){let r,n,e=t[1],o=[];for(let r=0;r<e.length;r+=1)o[r]=Y(J(t,e,r));const a=t=>A(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();r=m()},l(t){for(let r=0;r<o.length;r+=1)o[r].l(t);r=m()},m(t,e){for(let r=0;r<o.length;r+=1)o[r].m(t,e);h(t,r,e),n=!0},p(t,n){if(2&n){let s;for(e=t[1],s=0;s<e.length;s+=1){const a=J(t,e,s);o[s]?(o[s].p(a,n),v(o[s],1)):(o[s]=Y(a),o[s].c(),v(o[s],1),o[s].m(r.parentNode,r))}for(E(),s=e.length;s<o.length;s+=1)a(s);I()}},i(t){if(!n){for(let t=0;t<e.length;t+=1)v(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)A(o[t]);n=!1},d(t){T(o,t),t&&i(r)}}}function Y(t){let r,n,a;const u=new U({props:{props:t[4]}});return{c(){r=e("div"),C(u.$$.fragment),n=o(),this.h()},l(t){r=s(t,"DIV",{class:!0});var e=c(r);$(u.$$.fragment,e),n=l(e),e.forEach(i),this.h()},h(){f(r,"class","card-container svelte-tzjrkc")},m(t,e){h(t,r,e),w(u,r,null),p(r,n),a=!0},p(t,r){const n={};2&r&&(n.props=t[4]),u.$set(n)},i(t){a||(v(u.$$.fragment,t),a=!0)},o(t){A(u.$$.fragment,t),a=!1},d(t){t&&i(r),j(u)}}}function P(t){let r,n,o,a=t[2]&&L(t);return{c(){r=e("div"),a&&a.c(),this.h()},l(t){r=s(t,"DIV",{class:!0});var n=c(r);a&&a.l(n),n.forEach(i),this.h()},h(){f(r,"class","wrapper svelte-tzjrkc"),x(()=>t[3].call(r))},m(e,s){h(e,r,s),a&&a.m(r,null),n=D(r,t[3].bind(r)),o=!0},p(t,[n]){t[2]?a?(a.p(t,n),v(a,1)):((a=L(t)).c(),v(a,1),a.m(r,null)):a&&(E(),A(a,1,1,()=>{a=null}),I())},i(t){o||(v(a),o=!0)},o(t){A(a),o=!1},d(t){t&&i(r),a&&a.d(),n.cancel()}}}function W(t,r,n){let e,o=[],a=!1;return b(()=>{G("books.csv").then(t=>{console.log(t),n(1,o=t.sort((t,r)=>parseInt(t["Color Order"])-parseInt(r["Color Order"])).map(t=>({img:`books/${t.Image}`,title:t.Title,author:t.Author}))),console.log(o)}),console.log(e),n(2,a=!0)}),[e,o,a,function(){e=this.clientWidth,n(0,e)}]}class K extends t{constructor(t){super(),r(this,t,W,P,n,{})}}function Q(t){let r,n;const e=new K({});return{c(){r=o(),C(e.$$.fragment),this.h()},l(t){r=l(t),$(e.$$.fragment,t),this.h()},h(){document.title="About"},m(t,o){h(t,r,o),w(e,t,o),n=!0},p:g,i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){t&&i(r),j(e,t)}}}export default class extends t{constructor(t){super(),r(this,t,null,Q,n,{})}}
