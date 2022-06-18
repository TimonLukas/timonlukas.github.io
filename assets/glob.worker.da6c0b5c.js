(function(){"use strict";const w=Symbol("Comlink.proxy"),L=Symbol("Comlink.endpoint"),M=Symbol("Comlink.releaseProxy"),p=Symbol("Comlink.thrown"),S=e=>typeof e=="object"&&e!==null||typeof e=="function",R={canHandle:e=>S(e)&&e[w],serialize(e){const{port1:t,port2:s}=new MessageChannel;return h(e,t),[s,[s]]},deserialize(e){return e.start(),C(e)}},T={canHandle:e=>S(e)&&p in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},k=new Map([["proxy",R],["throw",T]]);function h(e,t=self){t.addEventListener("message",function s(a){if(!a||!a.data)return;const{id:u,type:f,path:n}=Object.assign({path:[]},a.data),c=(a.data.argumentList||[]).map(m);let r;try{const o=n.slice(0,-1).reduce((i,g)=>i[g],e),l=n.reduce((i,g)=>i[g],e);switch(f){case"GET":r=l;break;case"SET":o[n.slice(-1)[0]]=m(a.data.value),r=!0;break;case"APPLY":r=l.apply(o,c);break;case"CONSTRUCT":{const i=new l(...c);r=j(i)}break;case"ENDPOINT":{const{port1:i,port2:g}=new MessageChannel;h(e,g),r=N(i,[i])}break;case"RELEASE":r=void 0;break;default:return}}catch(o){r={value:o,[p]:0}}Promise.resolve(r).catch(o=>({value:o,[p]:0})).then(o=>{const[l,i]=b(o);t.postMessage(Object.assign(Object.assign({},l),{id:u}),i),f==="RELEASE"&&(t.removeEventListener("message",s),P(t))})}),t.start&&t.start()}function O(e){return e.constructor.name==="MessagePort"}function P(e){O(e)&&e.close()}function C(e,t){return E(e,[],t)}function y(e){if(e)throw new Error("Proxy has been released and is not useable")}function E(e,t=[],s=function(){}){let a=!1;const u=new Proxy(s,{get(f,n){if(y(a),n===M)return()=>d(e,{type:"RELEASE",path:t.map(c=>c.toString())}).then(()=>{P(e),a=!0});if(n==="then"){if(t.length===0)return{then:()=>u};const c=d(e,{type:"GET",path:t.map(r=>r.toString())}).then(m);return c.then.bind(c)}return E(e,[...t,n])},set(f,n,c){y(a);const[r,o]=b(c);return d(e,{type:"SET",path:[...t,n].map(l=>l.toString()),value:r},o).then(m)},apply(f,n,c){y(a);const r=t[t.length-1];if(r===L)return d(e,{type:"ENDPOINT"}).then(m);if(r==="bind")return E(e,t.slice(0,-1));const[o,l]=x(c);return d(e,{type:"APPLY",path:t.map(i=>i.toString()),argumentList:o},l).then(m)},construct(f,n){y(a);const[c,r]=x(n);return d(e,{type:"CONSTRUCT",path:t.map(o=>o.toString()),argumentList:c},r).then(m)}});return u}function _(e){return Array.prototype.concat.apply([],e)}function x(e){const t=e.map(b);return[t.map(s=>s[0]),_(t.map(s=>s[1]))]}const A=new WeakMap;function N(e,t){return A.set(e,t),e}function j(e){return Object.assign(e,{[w]:!0})}function b(e){for(const[t,s]of k)if(s.canHandle(e)){const[a,u]=s.serialize(e);return[{type:"HANDLER",name:t,value:a},u]}return[{type:"RAW",value:e},A.get(e)||[]]}function m(e){switch(e.type){case"HANDLER":return k.get(e.name).deserialize(e.value);case"RAW":return e.value}}function d(e,t,s){return new Promise(a=>{const u=H();e.addEventListener("message",function f(n){!n.data||!n.data.id||n.data.id!==u||(e.removeEventListener("message",f),a(n.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:u},t),s)})}function H(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const z={"./index.html.md":`## \`index.html\`

Entry point for all processes:
* dev
* build
* more examples
`,"./package.json.md":`## \`package.json\`

Dependency management etc.
`};async function D(e){var t;return(t=z[e])!=null?t:null}var I=Object.freeze({__proto__:null,fetchSource:D});h(I)})();
