var ut=Object.defineProperty;var ft=(t,e,n)=>e in t?ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ke=(t,e,n)=>(ft(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function L(){}const Ee=t=>t;function Je(t,e){for(const n in e)t[n]=e[n];return t}function We(t){return t()}function Oe(){return Object.create(null)}function z(t){t.forEach(We)}function ue(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null){for(const s of e)s(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function re(t){return t??""}const Qe=typeof window<"u";let Ue=Qe?()=>window.performance.now():()=>Date.now(),Se=Qe?t=>requestAnimationFrame(t):L;const ie=new Set;function Ye(t){ie.forEach(e=>{e.c(t)||(ie.delete(e),e.f())}),ie.size!==0&&Se(Ye)}function Ve(t){let e;return ie.size===0&&Se(Ye),{promise:new Promise(n=>{ie.add(e={c:t,f:n})}),abort(){ie.delete(e)}}}function d(t,e){t.appendChild(e)}function Xe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=y("style");return e.textContent="/* empty */",mt(Xe(t),e),e.sheet}function mt(t,e){return d(t.head||t,e),e.sheet}function A(t,e,n){t.insertBefore(e,n||null)}function P(t){t.parentNode&&t.parentNode.removeChild(t)}function Ke(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function Ne(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function I(){return J(" ")}function Ce(){return J("")}function K(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function gt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t){return Array.from(t.childNodes)}function ee(t,e){t.value=e??""}function Ze(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}function de(t,e){return new t(e)}const he=new Map;let pe=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function bt(t,e){const n={stylesheet:pt(e),rules:{}};return he.set(t,n),n}function et(t,e,n,s,o,i,u,l=0){const r=16.666/s;let a=`{
`;for(let j=0;j<=1;j+=r){const k=e+(n-e)*i(j);a+=j*100+`%{${u(k,1-k)}}
`}const p=a+`100% {${u(n,1-n)}}
}`,f=`__svelte_${vt(p)}_${l}`,_=Xe(t),{stylesheet:m,rules:v}=he.get(_)||bt(_,t);v[f]||(v[f]=!0,m.insertRule(`@keyframes ${f} ${p}`,m.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${s}ms linear ${o}ms 1 both`,pe+=1,f}function $e(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),o=n.length-s.length;o&&(t.style.animation=s.join(", "),pe-=o,pe||wt())}function wt(){Se(()=>{pe||(he.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&P(e)}),he.clear())})}let ce;function ae(t){ce=t}function Ie(){if(!ce)throw new Error("Function called outside component initialization");return ce}function yt(t){Ie().$$.after_update.push(t)}function kt(t){Ie().$$.on_destroy.push(t)}function jt(){const t=Ie();return(e,n,{cancelable:s=!1}={})=>{const o=t.$$.callbacks[e];if(o){const i=Ze(e,n,{cancelable:s});return o.slice().forEach(u=>{u.call(t,i)}),!i.defaultPrevented}return!0}}function Me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const se=[],Re=[];let le=[];const qe=[],tt=Promise.resolve();let xe=!1;function nt(){xe||(xe=!0,tt.then(st))}function $t(){return nt(),tt}function F(t){le.push(t)}const je=new Set;let te=0;function st(){if(te!==0)return;const t=ce;do{try{for(;te<se.length;){const e=se[te];te++,ae(e),xt(e.$$)}}catch(e){throw se.length=0,te=0,e}for(ae(null),se.length=0,te=0;Re.length;)Re.pop()();for(let e=0;e<le.length;e+=1){const n=le[e];je.has(n)||(je.add(n),n())}le.length=0}while(se.length);for(;qe.length;)qe.pop()();xe=!1,je.clear(),ae(t)}function xt(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}function Et(t){const e=[],n=[];le.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),le=e}let oe;function it(){return oe||(oe=Promise.resolve(),oe.then(()=>{oe=null})),oe}function me(t,e,n){t.dispatchEvent(Ze(`${e?"intro":"outro"}${n}`))}const fe=new Set;let H;function Le(){H={r:0,c:[],p:H}}function Pe(){H.r||z(H.c),H=H.p}function q(t,e){t&&t.i&&(fe.delete(t),t.i(e))}function D(t,e,n,s){if(t&&t.o){if(fe.has(t))return;fe.add(t),H.c.push(()=>{fe.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const lt={duration:0};function be(t,e,n){const s={direction:"in"};let o=e(t,n,s),i=!1,u,l,r=0;function a(){u&&$e(t,u)}function p(){const{delay:_=0,duration:m=300,easing:v=Ee,tick:g=L,css:j}=o||lt;j&&(u=et(t,0,1,m,_,v,j,r++)),g(0,1);const k=Ue()+_,x=k+m;l&&l.abort(),i=!0,F(()=>me(t,!0,"start")),l=Ve(E=>{if(i){if(E>=x)return g(1,0),me(t,!0,"end"),a(),i=!1;if(E>=k){const w=v((E-k)/m);g(w,1-w)}}return i})}let f=!1;return{start(){f||(f=!0,$e(t),ue(o)?(o=o(s),it().then(p)):p())},invalidate(){f=!1},end(){i&&(a(),i=!1)}}}function we(t,e,n){const s={direction:"out"};let o=e(t,n,s),i=!0,u;const l=H;l.r+=1;let r;function a(){const{delay:p=0,duration:f=300,easing:_=Ee,tick:m=L,css:v}=o||lt;v&&(u=et(t,1,0,f,p,_,v));const g=Ue()+p,j=g+f;F(()=>me(t,!1,"start")),"inert"in t&&(r=t.inert,t.inert=!0),Ve(k=>{if(i){if(k>=j)return m(0,1),me(t,!1,"end"),--l.r||z(l.c),!1;if(k>=g){const x=_((k-g)/f);m(1-x,x)}}return i})}return ue(o)?it().then(()=>{o=o(s),a()}):a(),{end(p){p&&"inert"in t&&(t.inert=r),p&&o.tick&&o.tick(1,0),i&&(u&&$e(t,u),i=!1)}}}function ge(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function _e(t,e){const n={},s={},o={$$scope:1};let i=t.length;for(;i--;){const u=t[i],l=e[i];if(l){for(const r in u)r in l||(s[r]=1);for(const r in l)o[r]||(n[r]=l[r],o[r]=1);t[i]=l}else for(const r in u)o[r]=1}for(const u in s)u in n||(n[u]=void 0);return n}function ve(t){return typeof t=="object"&&t!==null?t:{}}function Z(t){t&&t.c()}function W(t,e,n){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),F(()=>{const i=t.$$.on_mount.map(We).filter(ue);t.$$.on_destroy?t.$$.on_destroy.push(...i):z(i),t.$$.on_mount=[]}),o.forEach(F)}function Q(t,e){const n=t.$$;n.fragment!==null&&(Et(n.after_update),z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function St(t,e){t.$$.dirty[0]===-1&&(se.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,s,o,i,u=null,l=[-1]){const r=ce;ae(t);const a=t.$$={fragment:null,ctx:[],props:i,update:L,not_equal:o,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:Oe(),dirty:l,skip_bound:!1,root:e.target||r.$$.root};u&&u(a.root);let p=!1;if(a.ctx=n?n(t,e.props||{},(f,_,...m)=>{const v=m.length?m[0]:_;return a.ctx&&o(a.ctx[f],a.ctx[f]=v)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](v),p&&St(t,f)),_}):[],a.update(),p=!0,z(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const f=_t(e.target);a.fragment&&a.fragment.l(f),f.forEach(P)}else a.fragment&&a.fragment.c();e.intro&&q(t.$$.fragment),W(t,e.target,e.anchor),st()}ae(r)}class V{constructor(){ke(this,"$$");ke(this,"$$set")}$destroy(){Q(this,1),this.$destroy=L}$on(e,n){if(!ue(n))return L;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ct);const ne=[];function ot(t,e){return{subscribe:rt(t,e).subscribe}}function rt(t,e=L){let n;const s=new Set;function o(l){if(B(t,l)&&(t=l,n)){const r=!ne.length;for(const a of s)a[1](),ne.push(a,t);if(r){for(let a=0;a<ne.length;a+=2)ne[a][0](ne[a+1]);ne.length=0}}}function i(l){o(l(t))}function u(l,r=L){const a=[l,r];return s.add(a),s.size===1&&(n=e(o,i)||L),l(t),()=>{s.delete(a),s.size===0&&n&&(n(),n=null)}}return{set:o,update:i,subscribe:u}}function at(t,e,n){const s=!Array.isArray(t),o=s?[t]:t;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return ot(n,(u,l)=>{let r=!1;const a=[];let p=0,f=L;const _=()=>{if(p)return;f();const v=e(s?a[0]:a,u,l);i?u(v):f=ue(v)?v:L},m=o.map((v,g)=>ht(v,j=>{a[g]=j,p&=~(1<<g),r&&_()},()=>{p|=1<<g}));return r=!0,_(),function(){z(m),f(),r=!1}})}function It(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,o,i,u=[],l="",r=t.split("/");for(r[0]||r.shift();o=r.shift();)n=o[0],n==="*"?(u.push("wild"),l+="/(.*)"):n===":"?(s=o.indexOf("?",1),i=o.indexOf(".",1),u.push(o.substring(1,~s?s:~i?i:o.length)),l+=~s&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(l+=(~s?"?":"")+"\\"+o.substring(i))):l+="/"+o;return{keys:u,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}function Lt(t){let e,n,s;const o=[t[2]];var i=t[0];function u(l,r){let a={};if(r!==void 0&&r&4)a=_e(o,[ve(l[2])]);else for(let p=0;p<o.length;p+=1)a=Je(a,o[p]);return{props:a}}return i&&(e=de(i,u(t)),e.$on("routeEvent",t[7])),{c(){e&&Z(e.$$.fragment),n=Ce()},m(l,r){e&&W(e,l,r),A(l,n,r),s=!0},p(l,r){if(r&1&&i!==(i=l[0])){if(e){Le();const a=e;D(a.$$.fragment,1,0,()=>{Q(a,1)}),Pe()}i?(e=de(i,u(l,r)),e.$on("routeEvent",l[7]),Z(e.$$.fragment),q(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else if(i){const a=r&4?_e(o,[ve(l[2])]):{};e.$set(a)}},i(l){s||(e&&q(e.$$.fragment,l),s=!0)},o(l){e&&D(e.$$.fragment,l),s=!1},d(l){l&&P(n),e&&Q(e,l)}}}function Pt(t){let e,n,s;const o=[{params:t[1]},t[2]];var i=t[0];function u(l,r){let a={};if(r!==void 0&&r&6)a=_e(o,[r&2&&{params:l[1]},r&4&&ve(l[2])]);else for(let p=0;p<o.length;p+=1)a=Je(a,o[p]);return{props:a}}return i&&(e=de(i,u(t)),e.$on("routeEvent",t[6])),{c(){e&&Z(e.$$.fragment),n=Ce()},m(l,r){e&&W(e,l,r),A(l,n,r),s=!0},p(l,r){if(r&1&&i!==(i=l[0])){if(e){Le();const a=e;D(a.$$.fragment,1,0,()=>{Q(a,1)}),Pe()}i?(e=de(i,u(l,r)),e.$on("routeEvent",l[6]),Z(e.$$.fragment),q(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}else if(i){const a=r&6?_e(o,[r&2&&{params:l[1]},r&4&&ve(l[2])]):{};e.$set(a)}},i(l){s||(e&&q(e.$$.fragment,l),s=!0)},o(l){e&&D(e.$$.fragment,l),s=!1},d(l){l&&P(n),e&&Q(e,l)}}}function At(t){let e,n,s,o;const i=[Pt,Lt],u=[];function l(r,a){return r[1]?0:1}return e=l(t),n=u[e]=i[e](t),{c(){n.c(),s=Ce()},m(r,a){u[e].m(r,a),A(r,s,a),o=!0},p(r,[a]){let p=e;e=l(r),e===p?u[e].p(r,a):(Le(),D(u[p],1,1,()=>{u[p]=null}),Pe(),n=u[e],n?n.p(r,a):(n=u[e]=i[e](r),n.c()),q(n,1),n.m(s.parentNode,s))},i(r){o||(q(n),o=!0)},o(r){D(n),o=!1},d(r){r&&P(s),u[e].d(r)}}}function De(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const Ae=ot(null,function(e){e(De());const n=()=>{e(De())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});at(Ae,t=>t.location);at(Ae,t=>t.querystring);const Fe=rt(void 0);function Tt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Ot(t,e,n){let{routes:s={}}=e,{prefix:o=""}=e,{restoreScrollState:i=!1}=e;class u{constructor(h,b){if(!b||typeof b!="function"&&(typeof b!="object"||b._sveltesparouter!==!0))throw Error("Invalid component object");if(!h||typeof h=="string"&&(h.length<1||h.charAt(0)!="/"&&h.charAt(0)!="*")||typeof h=="object"&&!(h instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:S,keys:C}=It(h);this.path=h,typeof b=="object"&&b._sveltesparouter===!0?(this.component=b.component,this.conditions=b.conditions||[],this.userData=b.userData,this.props=b.props||{}):(this.component=()=>Promise.resolve(b),this.conditions=[],this.props={}),this._pattern=S,this._keys=C}match(h){if(o){if(typeof o=="string")if(h.startsWith(o))h=h.substr(o.length)||"/";else return null;else if(o instanceof RegExp){const O=h.match(o);if(O&&O[0])h=h.substr(O[0].length)||"/";else return null}}const b=this._pattern.exec(h);if(b===null)return null;if(this._keys===!1)return b;const S={};let C=0;for(;C<this._keys.length;){try{S[this._keys[C]]=decodeURIComponent(b[C+1]||"")||null}catch{S[this._keys[C]]=null}C++}return S}async checkConditions(h){for(let b=0;b<this.conditions.length;b++)if(!await this.conditions[b](h))return!1;return!0}}const l=[];s instanceof Map?s.forEach((w,h)=>{l.push(new u(h,w))}):Object.keys(s).forEach(w=>{l.push(new u(w,s[w]))});let r=null,a=null,p={};const f=jt();async function _(w,h){await $t(),f(w,h)}let m=null,v=null;i&&(v=w=>{w.state&&(w.state.__svelte_spa_router_scrollY||w.state.__svelte_spa_router_scrollX)?m=w.state:m=null},window.addEventListener("popstate",v),yt(()=>{Tt(m)}));let g=null,j=null;const k=Ae.subscribe(async w=>{g=w;let h=0;for(;h<l.length;){const b=l[h].match(w.location);if(!b){h++;continue}const S={route:l[h].path,location:w.location,querystring:w.querystring,userData:l[h].userData,params:b&&typeof b=="object"&&Object.keys(b).length?b:null};if(!await l[h].checkConditions(S)){n(0,r=null),j=null,_("conditionsFailed",S);return}_("routeLoading",Object.assign({},S));const C=l[h].component;if(j!=C){C.loading?(n(0,r=C.loading),j=C,n(1,a=C.loadingParams),n(2,p={}),_("routeLoaded",Object.assign({},S,{component:r,name:r.name,params:a}))):(n(0,r=null),j=null);const O=await C();if(w!=g)return;n(0,r=O&&O.default||O),j=C}b&&typeof b=="object"&&Object.keys(b).length?n(1,a=b):n(1,a=null),n(2,p=l[h].props),_("routeLoaded",Object.assign({},S,{component:r,name:r.name,params:a})).then(()=>{Fe.set(a)});return}n(0,r=null),j=null,Fe.set(void 0)});kt(()=>{k(),v&&window.removeEventListener("popstate",v)});function x(w){Me.call(this,t,w)}function E(w){Me.call(this,t,w)}return t.$$set=w=>{"routes"in w&&n(3,s=w.routes),"prefix"in w&&n(4,o=w.prefix),"restoreScrollState"in w&&n(5,i=w.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=i?"manual":"auto")},[r,a,p,s,o,i,x,E]}class Nt extends V{constructor(e){super(),Y(this,e,Ot,At,B,{routes:3,prefix:4,restoreScrollState:5})}}function U(t,{delay:e=0,duration:n=400,easing:s=Ee}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:i=>`opacity: ${i*o}`}}function Mt(t){let e,n,s,o;return{c(){e=y("main"),e.innerHTML=`<article class="svelte-whaok1"><h1 id="title-name" class="svelte-whaok1">I&#39;m <span id="title-name-colored" class="svelte-whaok1">Sajjad Tahmouresi</span></h1> <p>As a full-stack developer based in Iran, I dedicate my days to transforming lines of code into
      immersive web experiences. Specializing in JavaScript and Golang, I can seamlessly work with
      any new technology, embracing a versatile approach to bring ideas to life.</p> <p>My journey in technology is rooted in self-teaching, evolving from a passionate enthusiast to
      a proficient coder. I thrive on continuous learning, unafraid to explore new technologies and
      always open to trying new things.</p> <p>Beyond the screen, I find inspiration in simplicity and order, applying a minimalistic touch
      to my work. My commitment to creating elegant solutions extends to my love for
      problem-solving. Let&#39;s connect and embark on a journey to craft exceptional digital
      experiences together.</p> <a href="#/about" id="about-me-link" class="svelte-whaok1">More About me <div id="about-me-link-icon" class="svelte-whaok1"></div></a></article> <h1 class="subtle-background-title">CW.</h1>`,c(e,"class","w-100 h-100 container d-flex align-items-center justify-content-center flex-column svelte-whaok1")},m(i,u){A(i,e,u),o=!0},p:L,i(i){o||(i&&F(()=>{o&&(s&&s.end(1),n=be(e,U,{delay:500}),n.start())}),o=!0)},o(i){n&&n.invalidate(),i&&(s=we(e,U,{})),o=!1},d(i){i&&P(e),i&&s&&s.end()}}}class Rt extends V{constructor(e){super(),Y(this,e,null,Mt,B,{})}}function qt(t){let e,n,s,o,i,u,l,r,a,p,f,_,m,v,g,j,k,x,E,w,h,b,S,C,O,X,N,M,$,T,ye,Te;return{c(){e=y("header"),n=y("nav"),s=y("a"),s.innerHTML='<div id="navbar-icon" class="svelte-pa2ois"></div>',o=I(),i=y("div"),u=y("input"),l=I(),r=y("span"),a=I(),p=y("span"),f=I(),_=y("span"),v=I(),g=y("ul"),j=y("li"),k=y("a"),x=J("About"),w=I(),h=y("li"),b=y("a"),S=J("Projects"),O=I(),X=y("li"),N=y("a"),M=J("Contact"),c(s,"href","/#"),c(s,"class","not-link svelte-pa2ois"),c(u,"id","menuToggleCheckBox"),c(u,"type","checkbox"),c(u,"class","svelte-pa2ois"),c(r,"class","svelte-pa2ois"),c(p,"class","svelte-pa2ois"),c(_,"class","svelte-pa2ois"),c(i,"id","menuToggle"),c(i,"class",m=re(`d-flex flex-column align-items-end justify-content-center ${t[0]?"fixed-menuToggle":""}`)+" svelte-pa2ois"),c(k,"href","#/about"),c(k,"id",E=t[1]==="about"?"active-link":""),c(k,"class","svelte-pa2ois"),c(j,"class","link svelte-pa2ois"),c(b,"href","#/projects"),c(b,"id",C=t[1]==="projects"?"active-link":""),c(b,"class","svelte-pa2ois"),c(h,"class","link svelte-pa2ois"),c(N,"href","#/contact"),c(N,"id",$=t[1]==="contact"?"active-link":""),c(N,"class","svelte-pa2ois"),c(X,"class","link svelte-pa2ois"),c(g,"class",T=re(`w-100 d-flex flex-row align-items-center justify-content-end ${t[0]?"checked":""}`)+" svelte-pa2ois"),c(n,"class","w-100 d-flex flex-row align-items-center justify-content-start"),c(e,"class","container svelte-pa2ois")},m(R,G){A(R,e,G),d(e,n),d(n,s),d(n,o),d(n,i),d(i,u),u.checked=t[0],d(i,l),d(i,r),d(i,a),d(i,p),d(i,f),d(i,_),d(n,v),d(n,g),d(g,j),d(j,k),d(k,x),d(g,w),d(g,h),d(h,b),d(b,S),d(g,O),d(g,X),d(X,N),d(N,M),ye||(Te=[K(u,"change",t[2]),K(u,"click",t[3])],ye=!0)},p(R,[G]){G&1&&(u.checked=R[0]),G&1&&m!==(m=re(`d-flex flex-column align-items-end justify-content-center ${R[0]?"fixed-menuToggle":""}`)+" svelte-pa2ois")&&c(i,"class",m),G&2&&E!==(E=R[1]==="about"?"active-link":"")&&c(k,"id",E),G&2&&C!==(C=R[1]==="projects"?"active-link":"")&&c(b,"id",C),G&2&&$!==($=R[1]==="contact"?"active-link":"")&&c(N,"id",$),G&1&&T!==(T=re(`w-100 d-flex flex-row align-items-center justify-content-end ${R[0]?"checked":""}`)+" svelte-pa2ois")&&c(g,"class",T)},i:L,o:L,d(R){R&&P(e),ye=!1,z(Te)}}}function Dt(t,e,n){let s=!1,o=window.location.hash.slice(2,window.location.hash.length).toLowerCase();const i=()=>{s&&n(0,s=!1),n(1,o=window.location.hash.slice(2,window.location.hash.length).toLowerCase())};window.addEventListener("hashchange",i);function u(){s=this.checked,n(0,s)}return[s,o,u,()=>n(0,s=!s)]}class Ft extends V{constructor(e){super(),Y(this,e,Dt,qt,B,{})}}function zt(t){let e;return{c(){e=y("footer"),e.innerHTML='<a class="not-link social-link svelte-12a06px" id="github" href="https://github.com/sajjadth" target="_blank"></a> <a class="not-link social-link svelte-12a06px" id="linkedin" href="https://linkedin.com/in/sajjadth" target="_blank"></a> <a class="not-link social-link svelte-12a06px" id="twitter" href="https://twitter.com/sajjaadth" target="_blank"></a> <a class="not-link social-link svelte-12a06px" id="twitch" href="https://twitch.com/SonTheWitch" target="_blank"></a> <a class="not-link social-link svelte-12a06px" id="bmc" href="https://www.buymeacoffee.com/sajjadth" target="_blank"></a>',c(e,"class","container d-flex flex-row align-items-center justify-content-start svelte-12a06px")},m(n,s){A(n,e,s)},p:L,i:L,o:L,d(n){n&&P(e)}}}class Bt extends V{constructor(e){super(),Y(this,e,null,zt,B,{})}}function Gt(t){let e,n,s,o;return{c(){e=y("main"),e.innerHTML=`<article class="svelte-1mm5ljm"><h1 id="title" class="svelte-1mm5ljm">About Me</h1> <p>Greetings! I&#39;m Sajjad, a passionate and self-taught full-stack developer nestled in the
      vibrant tech landscape of Iran. My journey into the world of coding was sparked by a deep
      fascination for constructing solutions from scratch and an unyielding curiosity about how
      technology shapes our digital world.</p> <ul class="svelte-1mm5ljm"><li class="svelte-1mm5ljm"><h4>Tech Enthusiast and Alchemist</h4> <p>I thrive in the realms of JavaScript and GoLang, sculpting seamless experiences on the
          frontend and architecting robust systems on the backend. Proficient in TypeScript and
          Python, I continually expand my skill set to stay adaptable in the ever-evolving tech
          ecosystem.</p></li> <li class="svelte-1mm5ljm"><h4>Full-Stack Artisan</h4> <p>As a full-stack developer, I&#39;ve honed my expertise in both frontend and backend realms.
          Navigating through various libraries and frameworks, I transform ideas into pixel-perfect
          interfaces. From vanilla JS to cutting-edge technologies, I relish the challenge of
          bringing designs to vibrant life.</p></li> <li class="svelte-1mm5ljm"><h4>Backend Wizardry</h4> <p>n the backend realm, I wield the power of Golang, seamlessly orchestrating server-side
          functionalities with finesse. My expertise spans both traditional SQL databases and the
          dynamic world of NoSQL databases. Crafting efficient and scalable solutions isn&#39;t just a
          job for me; it&#39;s a passion.</p></li> <li class="svelte-1mm5ljm"><h4>Design Thinker</h4> <p>Recognizing the pivotal role of user-centric design, I&#39;m well-versed in Figma, ensuring a
          holistic approach to development that seamlessly blends aesthetics with functionality.</p></li> <li class="svelte-1mm5ljm"><h4>Lifelong Learning Advocate</h4> <p>Fueled by an unquenchable thirst for knowledge, I revel in navigating new technologies and
          methodologies. Whether adopting the latest frontend framework or delving into the
          intricacies of a novel programming language, I embrace the continuous learning journey
          that defines the ever-evolving tech landscape.</p></li> <li class="svelte-1mm5ljm"><h4>Problem Solver &amp; Avid Reader</h4> <p>I thrive on challenges, finding joy in dissecting problems and crafting elegant solutions.
          When not immersed in code, you&#39;ll likely find me engrossed in a good book, as reading is
          another avenue through which I fuel my passion for growth.</p></li> <li class="svelte-1mm5ljm"><h4>Let&#39;s Craft the Future Together</h4> <p>If you share the same enthusiasm for technology and development, let&#39;s collaborate! I&#39;m
          always open to exciting opportunities that involve creating impactful and innovative
          solutions. Explore my portfolio to discover projects reflecting my dedication to the art
          of coding.</p></li></ul> <p>Feel free to <a class="link" href="#/contact">get in touch</a>and let&#39;s discuss how we can
      bring your ideas to life.</p></article> <h1 class="subtle-background-title subtle-background-title-lg">About Me.</h1>`,c(e,"class","w-100 h-100 container d-flex align-items-center justify-content-start flex-column svelte-1mm5ljm")},m(i,u){A(i,e,u),o=!0},p:L,i(i){o||(i&&F(()=>{o&&(s&&s.end(1),n=be(e,U,{delay:500}),n.start())}),o=!0)},o(i){n&&n.invalidate(),i&&(s=we(e,U,{})),o=!1},d(i){i&&P(e),i&&s&&s.end()}}}class Ht extends V{constructor(e){super(),Y(this,e,null,Gt,B,{})}}function Jt(t){let e;return{c(){e=J("Send Message")},m(n,s){A(n,e,s)},d(n){n&&P(e)}}}function Wt(t){let e,n;return{c(){e=Ne("svg"),n=Ne("circle"),c(n,"class","path svelte-ueom6w"),c(n,"fill","none"),c(n,"stroke-width","6"),c(n,"stroke-linecap","round"),c(n,"cx","33"),c(n,"cy","33"),c(n,"r","30"),c(e,"class","spinner svelte-ueom6w"),c(e,"width","65px"),c(e,"height","65px"),c(e,"viewBox","0 0 66 66"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(s,o){A(s,e,o),d(e,n)},d(s){s&&P(e)}}}function Qt(t){let e;return{c(){e=J("Done")},m(n,s){A(n,e,s)},d(n){n&&P(e)}}}function Ut(t){let e,n,s,o,i,u,l,r,a,p,f,_,m,v,g,j,k,x,E,w,h,b,S,C,O;function X($,T){return $[1]?Qt:$[0]?Wt:Jt}let N=X(t),M=N(t);return{c(){e=y("main"),n=y("article"),s=y("h1"),s.textContent="Contact.",o=I(),i=y("p"),i.innerHTML=`Get in touch or shoot me an email directly on
      <a href="mailto:sajjaadth@pm.me" class="link">sajjaadth@pm.me</a>`,u=I(),l=y("form"),r=y("input"),p=I(),f=y("input"),m=I(),v=y("textarea"),j=I(),k=y("button"),M.c(),E=I(),w=y("h1"),w.textContent="Contact.",c(s,"id","title"),c(s,"class","svelte-ueom6w"),c(i,"class","text-break svelte-ueom6w"),r.disabled=a=t[0]||t[1],c(r,"type","text"),c(r,"name","name"),c(r,"placeholder","Name"),r.required=!0,c(r,"class","svelte-ueom6w"),f.disabled=_=t[0]||t[1],c(f,"type","email"),c(f,"name","email"),c(f,"placeholder","Email"),f.required=!0,c(f,"class","svelte-ueom6w"),v.disabled=g=t[0]||t[1],c(v,"name","message"),c(v,"placeholder","Message"),c(v,"cols","1"),c(v,"rows","10"),c(v,"maxlength","512"),v.required=!0,c(v,"class","svelte-ueom6w"),k.disabled=x=t[0]||t[1],c(k,"type","submit"),c(k,"class","svelte-ueom6w"),c(l,"class","d-flex flex-column align-items-start justifu-content center svelte-ueom6w"),c(n,"class","svelte-ueom6w"),c(w,"class","subtle-background-title subtle-background-title-lg"),c(e,"class","w-100 h-100 container d-flex align-items-center justify-content-start flex-column svelte-ueom6w")},m($,T){A($,e,T),d(e,n),d(n,s),d(n,o),d(n,i),d(n,u),d(n,l),d(l,r),ee(r,t[3]),d(l,p),d(l,f),ee(f,t[2]),d(l,m),d(l,v),ee(v,t[4]),d(l,j),d(l,k),M.m(k,null),d(e,E),d(e,w),S=!0,C||(O=[K(r,"input",t[6]),K(f,"input",t[7]),K(v,"input",t[8]),K(l,"submit",gt(t[5]))],C=!0)},p($,[T]){(!S||T&3&&a!==(a=$[0]||$[1]))&&(r.disabled=a),T&8&&r.value!==$[3]&&ee(r,$[3]),(!S||T&3&&_!==(_=$[0]||$[1]))&&(f.disabled=_),T&4&&f.value!==$[2]&&ee(f,$[2]),(!S||T&3&&g!==(g=$[0]||$[1]))&&(v.disabled=g),T&16&&ee(v,$[4]),N!==(N=X($))&&(M.d(1),M=N($),M&&(M.c(),M.m(k,null))),(!S||T&3&&x!==(x=$[0]||$[1]))&&(k.disabled=x)},i($){S||($&&F(()=>{S&&(b&&b.end(1),h=be(e,U,{delay:500}),h.start())}),S=!0)},o($){h&&h.invalidate(),$&&(b=we(e,U,{})),S=!1},d($){$&&P(e),M.d(),$&&b&&b.end(),C=!1,z(O)}}}function Yt(t,e,n){let s=!1,o=!1,i="",u="",l="";function r(){n(0,s=!0),fetch(`https://pro-dev-portfolio.sajjadth.workers.dev/?name=${u}&email=${i}&message=${l}`,{method:"GET"}).then(_=>_.json()).then(_=>{_.success?(n(1,o=!0),console.log("done")):console.log("not done")}).catch(_=>console.log("Error:",_)).finally(()=>n(0,s=!1))}function a(){u=this.value,n(3,u)}function p(){i=this.value,n(2,i)}function f(){l=this.value,n(4,l)}return[s,o,i,u,l,r,a,p,f]}class Vt extends V{constructor(e){super(),Y(this,e,Yt,Ut,B,{})}}function ze(t,e,n){const s=t.slice();return s[2]=e[n].title,s[3]=e[n].description,s[4]=e[n].technologies,s[5]=e[n].github,s[6]=e[n].site,s}function Be(t,e,n){const s=t.slice();return s[9]=e[n],s}function Ge(t){let e,n=t[9]+"",s;return{c(){e=y("div"),s=J(n),c(e,"class",re(`chip ${t[9].toLowerCase()}`)+" svelte-605u6d")},m(o,i){A(o,e,i),d(e,s)},p:L,d(o){o&&P(e)}}}function He(t){let e,n,s,o,i,u,l,r,a,p,f,_,m,v,g,j,k=ge(t[4]),x=[];for(let E=0;E<k.length;E+=1)x[E]=Ge(Be(t,k,E));return{c(){e=y("div"),n=y("div"),s=y("h2"),s.textContent=`${t[2]}`,o=I(),i=y("div"),u=y("p"),u.textContent=`${t[3]}`,l=I(),r=y("div");for(let E=0;E<x.length;E+=1)x[E].c();a=I(),p=y("div"),f=y("a"),_=I(),m=y("a"),v=I(),c(s,"class","text-break"),c(n,"class","card-title d-flex flex-column align-items-start justify-content-center svelte-605u6d"),c(u,"class","svelte-605u6d"),c(i,"class","card-text svelte-605u6d"),c(r,"class","card-interactions d-flex align-items-center justify-content-start svelte-605u6d"),c(f,"class","github not-link svelte-605u6d"),c(f,"href",t[5]),c(f,"target","_blank"),c(f,"aria-label","GitHub"),c(m,"class","external-link not-link svelte-605u6d"),c(m,"href",t[6]),c(m,"target","_blank"),c(m,"aria-label","Site"),c(p,"class","card-external-links w-100 d-flex flex-row align-items-center justify-content-end svelte-605u6d"),c(e,"class","card d-flex flex-column align-items-center justify-content-between svelte-605u6d")},m(E,w){A(E,e,w),d(e,n),d(n,s),d(e,o),d(e,i),d(i,u),d(e,l),d(e,r);for(let h=0;h<x.length;h+=1)x[h]&&x[h].m(r,null);d(e,a),d(e,p),d(p,f),d(p,_),d(p,m),d(e,v),g||(j=K(r,"wheel",t[1]),g=!0)},p(E,w){if(w&1){k=ge(E[4]);let h;for(h=0;h<k.length;h+=1){const b=Be(E,k,h);x[h]?x[h].p(b,w):(x[h]=Ge(b),x[h].c(),x[h].m(r,null))}for(;h<x.length;h+=1)x[h].d(1);x.length=k.length}},d(E){E&&P(e),Ke(x,E),g=!1,j()}}}function Xt(t){let e,n,s,o,i,u,l,r,a,p,f=ge(t[0]),_=[];for(let m=0;m<f.length;m+=1)_[m]=He(ze(t,f,m));return{c(){e=y("main"),n=y("article"),s=y("h1"),s.textContent="Projects.",o=I(),i=y("div");for(let m=0;m<_.length;m+=1)_[m].c();u=I(),l=y("h1"),l.textContent="Projects.",c(s,"id","title"),c(s,"class","svelte-605u6d"),c(i,"id","projects"),c(i,"class","h-100 svelte-605u6d"),c(n,"class","svelte-605u6d"),c(l,"class","subtle-background-title subtle-background-title-lg"),c(e,"class","w-100 h-100 container d-flex align-items-center justify-content-start flex-column svelte-605u6d")},m(m,v){A(m,e,v),d(e,n),d(n,s),d(n,o),d(n,i);for(let g=0;g<_.length;g+=1)_[g]&&_[g].m(i,null);d(e,u),d(e,l),p=!0},p(m,[v]){if(v&1){f=ge(m[0]);let g;for(g=0;g<f.length;g+=1){const j=ze(m,f,g);_[g]?_[g].p(j,v):(_[g]=He(j),_[g].c(),_[g].m(i,null))}for(;g<_.length;g+=1)_[g].d(1);_.length=f.length}},i(m){p||(m&&F(()=>{p&&(a&&a.end(1),r=be(e,U,{delay:500}),r.start())}),p=!0)},o(m){r&&r.invalidate(),m&&(a=we(e,U,{})),p=!1},d(m){m&&P(e),Ke(_,m),m&&a&&a.end()}}}function Kt(t){t.preventDefault(),t.currentTarget.scrollLeft+=t.deltaY}function Zt(t){return[[{title:"Trivia Quest",description:"Trivia Quest is a full-stack app offering a diverse range of trivia categories, real-time multiplayer challenges, and a responsive design. Test your knowledge, compete globally, and track your progress on leaderboards.",technologies:["JavaScript","Go","TypeScript","Nuxt","Vue","Sass"],github:"https://github.com/sajjadth/trivia-quest",site:"https://sajjadth.github.io/trivia-quest"},{title:"Persian Calendar",description:"Persian Calendar, the simple and stylish widget that will help you keep track of your days. With this widget, you can see a beautiful and intuitive calendar in your notion pages.",technologies:["JavaScript","React","Redux","Sass"],github:"https://github.com/sajjadth/persian-calendar",site:"https://sajjadth.github.io/persian-calendar"},{title:"Persian Calendar API",description:"The Persian Calendar API is a Node.js-based API that provides a Persian (Jalali) calendar with holiday events. Easily retrieve calendars for specific years and months, and access holiday data for cultural inclusivity in your applications. The API is user-friendly, easy to set up, and open for community contributions.",technologies:["JavaScript","Nodejs"],github:"https://github.com/sajjadth/persian-calendar-api",site:"https://persian-calendar-api.sajjadth.workers.dev"},{title:"Smell Solutions",description:"Smell Solutions is a discreet and thoughtful tool designed to address personal hygiene concerns by facilitating the sending of friendly and anonymous emails. This platform ensures that users can communicate sensitive matters in a confidential and non-confrontational manner.",technologies:["JavaScript","React","Sass"],github:"https://github.com/sajjadth/smell-solutions",site:"https://sajjadth.github.io/smell-solutions"}],s=>Kt(s)]}class en extends V{constructor(e){super(),Y(this,e,Zt,Xt,B,{})}}function tn(t){let e,n,s,o,i,u;return e=new Ft({}),s=new Nt({props:{routes:t[0]}}),i=new Bt({}),{c(){Z(e.$$.fragment),n=I(),Z(s.$$.fragment),o=I(),Z(i.$$.fragment)},m(l,r){W(e,l,r),A(l,n,r),W(s,l,r),A(l,o,r),W(i,l,r),u=!0},p:L,i(l){u||(q(e.$$.fragment,l),q(s.$$.fragment,l),q(i.$$.fragment,l),u=!0)},o(l){D(e.$$.fragment,l),D(s.$$.fragment,l),D(i.$$.fragment,l),u=!1},d(l){l&&(P(n),P(o)),Q(e,l),Q(s,l),Q(i,l)}}}function nn(t){return[{"/":Rt,"/about":Ht,"/contact":Vt,"/projects":en}]}class sn extends V{constructor(e){super(),Y(this,e,nn,tn,B,{})}}const ct=document.getElementById("app");if(!ct)throw new Error("Could not find the target element with id 'app'");new sn({target:ct});
