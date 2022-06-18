import{a0 as V,F as Ie,a4 as De,a5 as j,a6 as Le,w as Ae,g as b,r as ve,a7 as He,a8 as Ve,d as x,M as N,h as a,O as pe,n as u,a9 as ge,k as h,o as f,aa as Ne,x as be,c as me,q as ye,s as P,v as We,A as we,e as je,ab as Fe,f as Xe,l as G,ac as qe,z as Ke,I as xe,J as Ue,$ as L,ad as Ye,ae as Ge,D as Je,S as Qe,W as Ze,L as J,K as et,Q as tt}from"./index.0a04e717.js";function Q(e,t=!0,r=[]){return e.forEach(n=>{if(n!==null){if(typeof n!="object"){(typeof n=="string"||typeof n=="number")&&r.push(V(String(n)));return}if(Array.isArray(n)){Q(n,t,r);return}if(n.type===Ie){if(n.children===null)return;Array.isArray(n.children)&&Q(n.children,t,r)}else n.type!==De&&r.push(n)}}),r}const lr=(e,...t)=>typeof e=="function"?e(...t):typeof e=="string"?V(e):typeof e=="number"?V(String(e)):null,rt=typeof window!="undefined",nt=typeof window!="undefined";let z,R;const it=()=>{var e,t;z=nt?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,R=!1,z!==void 0?z.then(()=>{R=!0}):R=!0};it();function cr(e){if(R)return;let t=!1;j(()=>{R||z==null||z.then(()=>{t||e()})}),Le(()=>{t=!0})}function dr(e,t){return Ae(e,r=>{r!==void 0&&(t.value=r)}),b(()=>e.value===void 0?t.value:e.value)}function ot(){const e=ve(!1);return j(()=>{e.value=!0}),He(e)}function st(e,t){return b(()=>{for(const r of t)if(e[r]!==void 0)return e[r];return e[t[t.length-1]]})}function Z(e,t){console.error(`[vueuc/${e}]: ${t}`)}const{c:ur}=Ve(),fr="vueuc-style";var y=[],at=function(){return y.some(function(e){return e.activeTargets.length>0})},lt=function(){return y.some(function(e){return e.skippedTargets.length>0})},ee="ResizeObserver loop completed with undelivered notifications.",ct=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:ee}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=ee),window.dispatchEvent(e)},O;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(O||(O={}));var w=function(e){return Object.freeze(e)},dt=function(){function e(t,r){this.inlineSize=t,this.blockSize=r,w(this)}return e}(),ze=function(){function e(t,r,n,o){return this.x=t,this.y=r,this.width=n,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,w(this)}return e.prototype.toJSON=function(){var t=this,r=t.x,n=t.y,o=t.top,i=t.right,s=t.bottom,l=t.left,c=t.width,d=t.height;return{x:r,y:n,top:o,right:i,bottom:s,left:l,width:c,height:d}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),F=function(e){return e instanceof SVGElement&&"getBBox"in e},_e=function(e){if(F(e)){var t=e.getBBox(),r=t.width,n=t.height;return!r&&!n}var o=e,i=o.offsetWidth,s=o.offsetHeight;return!(i||s||e.getClientRects().length)},te=function(e){var t,r;if(e instanceof Element)return!0;var n=(r=(t=e)===null||t===void 0?void 0:t.ownerDocument)===null||r===void 0?void 0:r.defaultView;return!!(n&&e instanceof n.Element)},ut=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},k=typeof window!="undefined"?window:{},T=new WeakMap,re=/auto|scroll/,ft=/^tb|vertical/,ht=/msie|trident/i.test(k.navigator&&k.navigator.userAgent),p=function(e){return parseFloat(e||"0")},_=function(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=!1),new dt((r?t:e)||0,(r?e:t)||0)},ne=w({devicePixelContentBoxSize:_(),borderBoxSize:_(),contentBoxSize:_(),contentRect:new ze(0,0,0,0)}),Re=function(e,t){if(t===void 0&&(t=!1),T.has(e)&&!t)return T.get(e);if(_e(e))return T.set(e,ne),ne;var r=getComputedStyle(e),n=F(e)&&e.ownerSVGElement&&e.getBBox(),o=!ht&&r.boxSizing==="border-box",i=ft.test(r.writingMode||""),s=!n&&re.test(r.overflowY||""),l=!n&&re.test(r.overflowX||""),c=n?0:p(r.paddingTop),d=n?0:p(r.paddingRight),g=n?0:p(r.paddingBottom),v=n?0:p(r.paddingLeft),m=n?0:p(r.borderTopWidth),M=n?0:p(r.borderRightWidth),Te=n?0:p(r.borderBottomWidth),Ee=n?0:p(r.borderLeftWidth),X=v+d,q=c+g,I=Ee+M,D=m+Te,K=l?e.offsetHeight-D-e.clientHeight:0,U=s?e.offsetWidth-I-e.clientWidth:0,Ce=o?X+I:0,$e=o?q+D:0,S=n?n.width:p(r.width)-Ce-U,B=n?n.height:p(r.height)-$e-K,Pe=S+X+U+I,Me=B+q+K+D,Y=w({devicePixelContentBoxSize:_(Math.round(S*devicePixelRatio),Math.round(B*devicePixelRatio),i),borderBoxSize:_(Pe,Me,i),contentBoxSize:_(S,B,i),contentRect:new ze(v,c,S,B)});return T.set(e,Y),Y},ke=function(e,t,r){var n=Re(e,r),o=n.borderBoxSize,i=n.contentBoxSize,s=n.devicePixelContentBoxSize;switch(t){case O.DEVICE_PIXEL_CONTENT_BOX:return s;case O.BORDER_BOX:return o;default:return i}},vt=function(){function e(t){var r=Re(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=w([r.borderBoxSize]),this.contentBoxSize=w([r.contentBoxSize]),this.devicePixelContentBoxSize=w([r.devicePixelContentBoxSize])}return e}(),Oe=function(e){if(_e(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},pt=function(){var e=1/0,t=[];y.forEach(function(s){if(s.activeTargets.length!==0){var l=[];s.activeTargets.forEach(function(d){var g=new vt(d.target),v=Oe(d.target);l.push(g),d.lastReportedSize=ke(d.target,d.observedBox),v<e&&(e=v)}),t.push(function(){s.callback.call(s.observer,l,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var r=0,n=t;r<n.length;r++){var o=n[r];o()}return e},ie=function(e){y.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(o){o.isActive()&&(Oe(o.target)>e?r.activeTargets.push(o):r.skippedTargets.push(o))})})},gt=function(){var e=0;for(ie(e);at();)e=pt(),ie(e);return lt()&&ct(),e>0},A,Se=[],bt=function(){return Se.splice(0).forEach(function(e){return e()})},mt=function(e){if(!A){var t=0,r=document.createTextNode(""),n={characterData:!0};new MutationObserver(function(){return bt()}).observe(r,n),A=function(){r.textContent=""+(t?t--:t++)}}Se.push(e),A()},yt=function(e){mt(function(){requestAnimationFrame(e)})},$=0,wt=function(){return!!$},xt=250,zt={attributes:!0,characterData:!0,childList:!0,subtree:!0},oe=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],se=function(e){return e===void 0&&(e=0),Date.now()+e},H=!1,_t=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var r=this;if(t===void 0&&(t=xt),!H){H=!0;var n=se(t);yt(function(){var o=!1;try{o=gt()}finally{if(H=!1,t=n-se(),!wt())return;o?r.run(1e3):t>0?r.run(t):r.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,r=function(){return t.observer&&t.observer.observe(document.body,zt)};document.body?r():k.addEventListener("DOMContentLoaded",r)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),oe.forEach(function(r){return k.addEventListener(r,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),oe.forEach(function(r){return k.removeEventListener(r,t.listener,!0)}),this.stopped=!0)},e}(),W=new _t,ae=function(e){!$&&e>0&&W.start(),$+=e,!$&&W.stop()},Rt=function(e){return!F(e)&&!ut(e)&&getComputedStyle(e).display==="inline"},kt=function(){function e(t,r){this.target=t,this.observedBox=r||O.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=ke(this.target,this.observedBox,!0);return Rt(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Ot=function(){function e(t,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=r}return e}(),E=new WeakMap,le=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},C=function(){function e(){}return e.connect=function(t,r){var n=new Ot(t,r);E.set(t,n)},e.observe=function(t,r,n){var o=E.get(t),i=o.observationTargets.length===0;le(o.observationTargets,r)<0&&(i&&y.push(o),o.observationTargets.push(new kt(r,n&&n.box)),ae(1),W.schedule())},e.unobserve=function(t,r){var n=E.get(t),o=le(n.observationTargets,r),i=n.observationTargets.length===1;o>=0&&(i&&y.splice(y.indexOf(n),1),n.observationTargets.splice(o,1),ae(-1))},e.disconnect=function(t){var r=this,n=E.get(t);n.observationTargets.slice().forEach(function(o){return r.unobserve(t,o.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),St=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");C.connect(this,t)}return e.prototype.observe=function(t,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!te(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");C.observe(this,t,r)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!te(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");C.unobserve(this,t)},e.prototype.disconnect=function(){C.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Bt{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new St(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const r of t){const n=this.elHandlersMap.get(r.target);n!==void 0&&n(r)}}registerHandler(t,r){this.elHandlersMap.set(t,r),this.observer.observe(t)}unregisterHandler(t){!this.elHandlersMap.has(t)||(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}var ce=new Bt,hr=x({name:"ResizeObserver",props:{onResize:Function},setup(e){return{registered:!1,handleResize(t){const{onResize:r}=e;r!==void 0&&r(t)}}},mounted(){const e=this.$el;if(e===void 0){Z("resize-observer","$el does not exist.");return}if(e.nextElementSibling!==e.nextSibling&&e.nodeType===3&&e.nodeValue!==""){Z("resize-observer","$el can not be observed (it may be a text node).");return}e.nextElementSibling!==null&&(ce.registerHandler(e.nextElementSibling,this.handleResize),this.registered=!0)},beforeUnmount(){this.registered&&ce.unregisterHandler(this.$el.nextElementSibling)},render(){return N(this.$slots,"default")}}),Tt=x({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const r=ot();return()=>a(pe,{name:"icon-switch-transition",appear:r.value},t)}});const{cubicBezierEaseInOut:Et}=ge;function de({originalTransform:e="",left:t=0,top:r=0,transition:n=`all .3s ${Et} !important`}={}){return[u("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:r,opacity:0}),u("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:r,opacity:1}),u("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:r,transition:n})]}var Ct=u([u("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),u("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),u("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),u("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),h("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[f("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[de()]),f("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[f("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),f("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[f("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[f("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),f("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[f("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),f("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[f("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),f("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[de({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),$t=x({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(e){Ne("-base-loading",Ct,be(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:r,stroke:n,scale:o}=this,i=t/o;return a("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},a(Tt,null,{default:()=>this.show?a("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},a("div",{class:`${e}-base-loading__container`},a("div",{class:`${e}-base-loading__container-layer`},a("div",{class:`${e}-base-loading__container-layer-left`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:i,cy:i,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),a("div",{class:`${e}-base-loading__container-layer-patch`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:i,cy:i,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),a("div",{class:`${e}-base-loading__container-layer-right`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:i,cy:i,r:t-r/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):a("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});const{cubicBezierEaseInOut:ue}=ge;function Pt({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:r="0.2s",enterCubicBezier:n=ue,leaveCubicBezier:o=ue}={}){return[u(`&.${e}-transition-enter-active`,{transition:`all ${t} ${n}!important`}),u(`&.${e}-transition-leave-active`,{transition:`all ${r} ${o}!important`}),u(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),u(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}var Mt={fontWeightActive:"400"};const It=e=>{const{fontSize:t,textColor3:r,primaryColorHover:n,primaryColorPressed:o,textColor2:i}=e;return Object.assign(Object.assign({},Mt),{fontSize:t,itemTextColor:r,itemTextColorHover:n,itemTextColorPressed:o,itemTextColorActive:i,separatorColor:r})},Dt={name:"Breadcrumb",common:me,self:It};var Lt=Dt,At=h("breadcrumb",`
 white-space: nowrap;
`,[u("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),u("a",`
 color: inherit;
 text-decoration: inherit;
 `),h("breadcrumb-item",{fontSize:"var(--n-font-size)",transition:"color .3s var(--n-bezier)",display:"inline-block"},[h("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),f("link",{cursor:"pointer",transition:"color .3s var(--n-bezier)",color:"var(--n-item-text-color)"}),f("separator",{margin:"0 8px",color:"var(--n-separator-color)",transition:"color .3s var(--n-bezier)"}),u("&:hover",[h("icon",{color:"var(--n-item-text-color-hover)"}),f("link",{color:"var(--n-item-text-color-hover)"})]),u("&:active",[h("icon",{color:"var(--n-item-text-color-pressed)"}),f("link",{color:"var(--n-item-text-color-pressed)"})]),u("&:last-child",[f("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `),h("icon",{color:"var(--n-item-text-color-active)"}),f("separator",{display:"none"})])])]);const Be=je("n-breadcrumb"),Ht=Object.assign(Object.assign({},P.props),{separator:{type:String,default:"/"}});var vr=x({name:"Breadcrumb",props:Ht,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=ye(e),n=P("Breadcrumb","-breadcrumb",At,Lt,e,t);We(Be,{separatorRef:be(e,"separator"),mergedClsPrefixRef:t});const o=b(()=>{const{common:{cubicBezierEaseInOut:s},self:{separatorColor:l,itemTextColor:c,itemTextColorHover:d,itemTextColorPressed:g,itemTextColorActive:v,fontSize:m,fontWeightActive:M}}=n.value;return{"--n-font-size":m,"--n-bezier":s,"--n-item-text-color":c,"--n-item-text-color-hover":d,"--n-item-text-color-pressed":g,"--n-item-text-color-active":v,"--n-separator-color":l,"--n-font-weight-active":M}}),i=r?we("breadcrumb",void 0,o,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},a("ul",null,this.$slots))}});const Vt=rt?window:null,Nt=(e=Vt)=>{const t=()=>{const{hash:o,host:i,hostname:s,href:l,origin:c,pathname:d,port:g,protocol:v,search:m}=(e==null?void 0:e.location)||{};return{hash:o,host:i,hostname:s,href:l,origin:c,pathname:d,port:g,protocol:v,search:m}},r=()=>{n.value=t()},n=ve(t());return j(()=>{e&&(e.addEventListener("popstate",r),e.addEventListener("hashchange",r))}),Fe(()=>{e&&(e.removeEventListener("popstate",r),e.removeEventListener("hashchange",r))}),n},Wt={separator:String,href:String};var jt=x({name:"BreadcrumbItem",props:Wt,setup(e,{slots:t}){const r=Xe(Be,null);if(!r)return()=>null;const{separatorRef:n,mergedClsPrefixRef:o}=r,i=Nt(),s=b(()=>e.href?"a":"span"),l=b(()=>i.value.href===e.href?"location":null);return()=>{var c;const{value:d}=o;return a("li",{class:`${d}-breadcrumb-item`},a(s.value,{class:`${d}-breadcrumb-item__link`,"aria-current":l.value,href:e.href},t),a("span",{class:`${d}-breadcrumb-item__separator`,"aria-hidden":"true"},t.separator?t.separator():(c=e.separator)!==null&&c!==void 0?c:n.value))}}});const Ft=e=>{const{opacityDisabled:t,heightTiny:r,heightSmall:n,heightMedium:o,heightLarge:i,heightHuge:s,primaryColor:l,fontSize:c}=e;return{fontSize:c,textColor:l,sizeTiny:r,sizeSmall:n,sizeMedium:o,sizeLarge:i,sizeHuge:s,color:l,opacitySpinning:t}},Xt={name:"Spin",common:me,self:Ft};var qt=Xt,Kt=u([u("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),h("spin-container",{position:"relative"},[h("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Pt()])]),h("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),h("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[G("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),h("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),h("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[G("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);const Ut={small:20,medium:18,large:16},Yt=Object.assign(Object.assign({},P.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var pr=x({name:"Spin",props:Yt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=ye(e),n=P("Spin","-spin",Kt,qt,e,t),o=b(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:l},self:c}=n.value,{opacitySpinning:d,color:g,textColor:v}=c,m=typeof s=="number"?qe(s):c[Ke("size",s)];return{"--n-bezier":l,"--n-opacity-spinning":d,"--n-size":m,"--n-color":g,"--n-text-color":v}}),i=r?we("spin",b(()=>{const{size:s}=e;return typeof s=="number"?String(s):s[0]}),o,e):void 0;return{mergedClsPrefix:t,compitableShow:st(e,["spinning","show"]),mergedStrokeWidth:b(()=>{const{strokeWidth:s}=e;if(s!==void 0)return s;const{size:l}=e;return Ut[typeof l=="number"?"medium":l]}),cssVars:r?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,t;const{$slots:r,mergedClsPrefix:n,description:o}=this,i=r.icon&&this.rotate,s=(o||r.description)&&a("div",{class:`${n}-spin-description`},o||((e=r.description)===null||e===void 0?void 0:e.call(r))),l=r.icon?a("div",{class:[`${n}-spin-body`,this.themeClass]},a("div",{class:[`${n}-spin`,i&&`${n}-spin--rotate`],style:r.default?"":this.cssVars},r.icon()),s):a("div",{class:[`${n}-spin-body`,this.themeClass]},a($t,{clsPrefix:n,style:r.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${n}-spin`}),s);return(t=this.onRender)===null||t===void 0||t.call(this),r.default?a("div",{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},a("div",{class:[`${n}-spin-content`,this.compitableShow&&`${n}-spin-content--spinning`]},r),a(pe,{name:"fade-in-transition"},{default:()=>this.compitableShow?l:null})):l}});const Gt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Jt=L("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[L("path",{d:"m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),L("path",{d:"M9 22V12h6v10"})],-1),Qt=[Jt];function Zt(e,t){return xe(),Ue("svg",Gt,Qt)}var gr={name:"feather-home",render:Zt},er=Object.defineProperty,tr=Object.defineProperties,rr=Object.getOwnPropertyDescriptors,fe=Object.getOwnPropertySymbols,nr=Object.prototype.hasOwnProperty,ir=Object.prototype.propertyIsEnumerable,he=(e,t,r)=>t in e?er(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,or=(e,t)=>{for(var r in t||(t={}))nr.call(t,r)&&he(e,r,t[r]);if(fe)for(var r of fe(t))ir.call(t,r)&&he(e,r,t[r]);return e},sr=(e,t)=>tr(e,rr(t));function br(e,t,{mode:r="replace",route:n=Ye(),router:o=Ge()}={}){return b({get(){const i=n.query[e];return i==null?t!=null?t:null:Array.isArray(i)?i.filter(Boolean):i},set(i){Je(()=>{o[Qe(r)]({query:sr(or({},n.query),{[e]:i===t||i===null?void 0:i})})})}})}const mr=x({props:{href:null},setup(e){return(t,r)=>{const n=tt,o=jt;return xe(),Ze(o,{clickable:typeof e.href!="undefined",onClick:r[0]||(r[0]=i=>t.$router.push(e.href))},{default:J(()=>[et(n,{class:"mr-1"},{default:J(()=>[N(t.$slots,"icon")]),_:3}),N(t.$slots,"default")]),_:3},8,["clickable"])}}});export{$t as N,hr as V,mr as _,ur as a,dr as b,fr as c,br as d,gr as e,Q as f,jt as g,vr as h,pr as i,ce as j,ot as k,de as l,Tt as m,Pt as n,cr as o,lr as r,st as u};
