(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function m(){}function N(e){return e()}function E(){return Object.create(null)}function p(e){e.forEach(N)}function A(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function S(e){return Object.keys(e).length===0}function J(e,t){e.appendChild(t)}function Q(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function R(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function U(){return C(" ")}function V(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function M(e){return Array.from(e.childNodes)}let $;function d(e){$=e}const a=[],k=[];let l=[];const v=[],q=Promise.resolve();let g=!1;function B(){g||(g=!0,q.then(L))}function y(e){l.push(e)}const _=new Set;let u=0;function L(){if(u!==0)return;const e=$;do{try{for(;u<a.length;){const t=a[u];u++,d(t),F(t.$$)}}catch(t){throw a.length=0,u=0,t}for(d(null),a.length=0,u=0;k.length;)k.pop()();for(let t=0;t<l.length;t+=1){const n=l[t];_.has(n)||(_.add(n),n())}l.length=0}while(a.length);for(;v.length;)v.pop()();g=!1,_.clear(),d(e)}function F(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}function I(e){const t=[],n=[];l.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),l=t}const K=new Set;function T(e,t){e&&e.i&&(K.delete(e),e.i(t))}function z(e,t,n,o){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),o||y(()=>{const i=e.$$.on_mount.map(N).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...i):p(i),e.$$.on_mount=[]}),c.forEach(y)}function D(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){e.$$.dirty[0]===-1&&(a.push(e),B(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(e,t,n,o,r,c,i,P=[-1]){const h=$;d(e);const s=e.$$={fragment:null,ctx:[],props:c,update:m,not_equal:r,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:E(),dirty:P,skip_bound:!1,root:t.target||h.$$.root};i&&i(s.root);let b=!1;if(s.ctx=n?n(e,t.props||{},(f,x,...w)=>{const O=w.length?w[0]:x;return s.ctx&&r(s.ctx[f],s.ctx[f]=O)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](O),b&&G(e,f)),x}):[],s.update(),b=!0,p(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const f=M(t.target);s.fragment&&s.fragment.l(f),f.forEach(j)}else s.fragment&&s.fragment.c();t.intro&&T(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),L()}d(h)}class X{$destroy(){D(this,1),this.$destroy=m}$on(t,n){if(!A(n))return m;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!S(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{X as S,V as a,Q as b,U as c,j as d,R as e,J as f,W as i,m as n,H as s};
