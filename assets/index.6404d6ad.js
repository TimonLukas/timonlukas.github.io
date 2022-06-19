import{d as I,r as z,u as it,h as b,i as st,a as K,b as lt,c as dt,e as ct,f as ye,t as bt,g as X,m as ne,F as ut,N as ft,j as pt,k as _,l as w,n as $,o as E,p as vt,q as gt,s as Ce,w as re,v as mt,x as M,y as ht,z as j,A as xt,B as be,C as U,D as _t,E as yt,T as Ct,G as wt,H as St,_ as we,I as Y,J as Se,K as P,L,M as Tt,O as Rt,P as Pt,Q as $t,R as zt,S as N,U as Lt,V as Q,W as ue,X as Bt,Y as At,Z as Wt,$ as kt,a0 as Te,a1 as Et,a2 as jt,a3 as Ot}from"./index.23d3cad9.js";import{c as Ft,a as fe,r as Mt,u as pe,f as Z,b as It,o as Dt,V as ve,d as Nt,_ as Ht,e as Vt,g as Gt,h as Ut,i as Xt}from"./BreadcrumbItem.e63c58e6.js";function Yt(e,t=[],a){const o={};return Object.getOwnPropertyNames(e).forEach(l=>{t.includes(l)||(o[l]=e[l])}),Object.assign(o,a)}const Kt=fe(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[fe("&::-webkit-scrollbar",{width:0,height:0})]);var qt=I({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=z(null);function t(i){!(i.currentTarget.offsetWidth<i.currentTarget.scrollWidth)||i.deltaY===0||(i.currentTarget.scrollLeft+=i.deltaY+i.deltaX,i.preventDefault())}const a=it();return Kt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Ft,ssr:a}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...i){var l;(l=e.value)===null||l===void 0||l.scrollTo(...i)}})},render(){return b("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),Jt=/\s/;function Qt(e){for(var t=e.length;t--&&Jt.test(e.charAt(t)););return t}var Zt=/^\s+/;function ea(e){return e&&e.slice(0,Qt(e)+1).replace(Zt,"")}var ge=0/0,ta=/^[-+]0x[0-9a-f]+$/i,aa=/^0b[01]+$/i,na=/^0o[0-7]+$/i,ra=parseInt;function me(e){if(typeof e=="number")return e;if(st(e))return ge;if(K(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=K(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ea(e);var a=aa.test(e);return a||na.test(e)?ra(e.slice(2),a?2:8):ta.test(e)?ge:+e}var oa=function(){return lt.Date.now()},ee=oa,ia="Expected a function",sa=Math.max,la=Math.min;function da(e,t,a){var o,i,l,s,d,g,m=0,h=!1,u=!1,f=!0;if(typeof e!="function")throw new TypeError(ia);t=me(t)||0,K(a)&&(h=!!a.leading,u="maxWait"in a,l=u?sa(me(a.maxWait)||0,t):l,f="trailing"in a?!!a.trailing:f);function v(y){var A=o,W=i;return o=i=void 0,m=y,s=e.apply(W,A),s}function C(y){return m=y,d=setTimeout(T,t),h?v(y):s}function S(y){var A=y-g,W=y-m,O=t-A;return u?la(O,l-W):O}function c(y){var A=y-g,W=y-m;return g===void 0||A>=t||A<0||u&&W>=l}function T(){var y=ee();if(c(y))return R(y);d=setTimeout(T,S(y))}function R(y){return d=void 0,f&&o?v(y):(o=i=void 0,s)}function B(){d!==void 0&&clearTimeout(d),m=0,o=g=i=d=void 0}function V(){return d===void 0?s:R(ee())}function H(){var y=ee(),A=c(y);if(o=arguments,i=this,g=y,A){if(d===void 0)return C(g);if(u)return clearTimeout(d),d=setTimeout(T,t),v(g)}return d===void 0&&(d=setTimeout(T,t)),s}return H.cancel=B,H.flush=V,H}var ca="Expected a function";function te(e,t,a){var o=!0,i=!0;if(typeof e!="function")throw new TypeError(ca);return K(a)&&(o="leading"in a?!!a.leading:o,i="trailing"in a?!!a.trailing:i),da(e,t,{leading:o,maxWait:t,trailing:i})}var ba=I({name:"Add",render(){return b("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ua={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0"};const fa=e=>{const{textColor2:t,primaryColor:a,textColorDisabled:o,closeColor:i,closeColorHover:l,closeColorPressed:s,tabColor:d,baseColor:g,dividerColor:m,fontWeight:h,textColor1:u,borderRadius:f,fontSize:v,fontWeightStrong:C}=e;return Object.assign(Object.assign({},ua),{colorSegment:d,tabFontSizeCard:v,tabTextColorLine:u,tabTextColorActiveLine:a,tabTextColorHoverLine:a,tabTextColorDisabledLine:o,tabTextColorSegment:u,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:o,tabTextColorBar:u,tabTextColorActiveBar:a,tabTextColorHoverBar:a,tabTextColorDisabledBar:o,tabTextColorCard:u,tabTextColorHoverCard:u,tabTextColorActiveCard:a,tabTextColorDisabledCard:o,barColor:a,closeColor:i,closeColorHover:l,closeColorPressed:s,tabColor:d,tabColorSegment:g,tabBorderColor:m,tabFontWeightActive:h,tabFontWeight:h,tabBorderRadius:f,paneTextColor:t,fontWeightStrong:C})},pa={name:"Tabs",common:dt,self:fa};var va=pa;const ie=ct("n-tabs"),Re={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var ga=I({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Re,setup(e){const t=ye(ie,null);return t||bt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return b("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const ma=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Yt(Re,["displayDirective"]));var oe=I({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ma,setup(e){const{mergedClsPrefixRef:t,valueRef:a,typeRef:o,closableRef:i,tabStyleRef:l,tabChangeIdRef:s,onBeforeLeaveRef:d,triggerRef:g,handleAdd:m,activateTab:h,handleClose:u}=ye(ie);return{trigger:g,mergedClosable:X(()=>{if(e.internalAddable)return!1;const{closable:f}=e;return f===void 0?i.value:f}),style:l,clsPrefix:t,value:a,type:o,handleClose(f){f.stopPropagation(),!e.disabled&&u(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}const{name:f}=e,v=++s.id;if(f!==a.value){const{value:C}=d;C?Promise.resolve(C(e.name,a.value)).then(S=>{S&&s.id===v&&h(f)}):h(f)}}}},render(){const{internalAddable:e,clsPrefix:t,name:a,disabled:o,label:i,tab:l,value:s,mergedClosable:d,style:g,trigger:m,$slots:{default:h}}=this,u=i!=null?i:l;return b("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?b("div",{class:`${t}-tabs-tab-pad`}):null,b("div",Object.assign({key:a,"data-name":a,"data-disabled":o?!0:void 0},ne({class:[`${t}-tabs-tab`,s===a&&`${t}-tabs-tab--active`,o&&`${t}-tabs-tab--disabled`,d&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?void 0:g},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),b("span",{class:`${t}-tabs-tab__label`},e?b(ut,null,b("div",{class:`${t}-tabs-tab__height-placeholder`},"\xA0"),b(ft,{clsPrefix:t},{default:()=>b(ba,null)})):h?h():typeof u=="object"?u:Mt(u!=null?u:a)),d&&this.type==="card"?b(pt,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),ha=_("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[_("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[_("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[_("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[w("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),$("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),w("flex",[_("tabs-nav",{width:"100%"},[_("tabs-wrapper",{width:"100%"},[_("tabs-tab",{marginRight:0})])])]),_("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[E("prefix, suffix",`
 display: flex;
 align-items: center;
 `),E("prefix","padding-right: 16px;"),E("suffix","padding-left: 16px;")]),_("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[w("shadow-before",[$("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),w("shadow-after",[$("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),$("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),$("&::before",`
 left: 0;
 `),$("&::after",`
 right: 0;
 `)]),_("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),_("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),_("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),_("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w("disabled",{cursor:"not-allowed"}),E("close",`
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 `),E("label",`
 display: flex;
 align-items: center;
 `)]),_("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w("transition-disabled",`
 transition: none;
 `),w("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),_("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),_("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[$("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),$("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),$("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),$("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),$("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),_("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),w("line-type, bar-type",[_("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[$("&:hover",{color:"var(--n-tab-text-color-hover)"}),w("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),w("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),_("tabs-nav",[w("line-type",[E("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),_("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),_("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),w("card-type",[E("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),_("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),_("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),_("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[w("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[E("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),vt("disabled",[$("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),w("closable","padding-right: 6px;"),w("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),w("disabled","color: var(--n-tab-text-color-disabled);")]),_("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const xa=Object.assign(Object.assign({},Ce.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var _a=I({name:"Tabs",props:xa,setup(e,{slots:t}){var a,o,i,l;const{mergedClsPrefixRef:s,inlineThemeDisabled:d}=gt(e),g=Ce("Tabs","-tabs",ha,va,e,s),m=z(null),h=z(null),u=z(null),f=z(null),v=z(null),C=z(!0),S=z(!0),c=pe(e,["labelSize","size"]),T=pe(e,["activeName","value"]),R=z((o=(a=T.value)!==null&&a!==void 0?a:e.defaultValue)!==null&&o!==void 0?o:t.default?(l=(i=Z(t.default())[0])===null||i===void 0?void 0:i.props)===null||l===void 0?void 0:l.name:null),B=It(T,R),V={id:0},H=X(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});re(B,()=>{V.id=0,W()});function y(){var n;const{value:r}=B;return r===null?null:(n=m.value)===null||n===void 0?void 0:n.querySelector(`[data-name="${r}"]`)}function A(n){if(e.type==="card")return;const{value:r}=h;if(!!r&&n){const p=`${s.value}-tabs-bar--disabled`,{barWidth:x}=e;if(n.dataset.disabled==="true"?r.classList.add(p):r.classList.remove(p),x&&n.offsetWidth>=x){const k=Math.floor((n.offsetWidth-x)/2)+n.offsetLeft;r.style.left=`${k}px`,r.style.maxWidth=`${x}px`}else r.style.left=`${n.offsetLeft}px`,r.style.maxWidth=`${n.offsetWidth}px`;r.style.width="8192px"}}function W(){if(e.type==="card")return;const n=y();n&&A(n)}const O=z(null);let q=0;function Pe(){const n=O.value;if(n){q=n.getBoundingClientRect().height;const r=`${q}px`;n.style.height=r,n.style.maxHeight=r}}function $e(n){const r=O.value;if(r){const p=n.getBoundingClientRect().height;r.style.maxHeight=`${p}px`,r.style.height=`${Math.max(q,p)}px`}}function ze(){const n=O.value;n&&(n.style.maxHeight="",n.style.height="")}const se={value:[]},le=z("next");function Le(n){const r=B.value;let p="next";for(const x of se.value){if(x===r)break;if(x===n){p="prev";break}}le.value=p,Be(n)}function Be(n){const{onActiveNameChange:r,onUpdateValue:p,"onUpdate:value":x}=e;r&&U(r,n),p&&U(p,n),x&&U(x,n),R.value=n}function Ae(n){const{onClose:r}=e;r&&U(r,n)}let We=!0,de=0;const ke=te(function(r){var p;if(r.contentRect.width===0&&r.contentRect.height===0||de===r.contentRect.width)return;de=r.contentRect.width;const{type:x}=e;if((x==="line"||x==="bar")&&We){const{value:k}=h;if(!k)return;const F=`${s.value}-tabs-bar--transition-disabled`;k.classList.add(F),W(),k.classList.remove(F)}x!=="segment"&&J((p=v.value)===null||p===void 0?void 0:p.$el)},64),G=z(!1);function Ee(n){var r;const{target:p,contentRect:{width:x}}=n,k=p.parentElement.offsetWidth;if(!G.value)k<x&&(G.value=!0);else{const{value:F}=f;if(!F)return;k-x>F.$el.offsetWidth&&(G.value=!1)}J((r=v.value)===null||r===void 0?void 0:r.$el)}const je=te(Ee,64);function Oe(){const{onAdd:n}=e;n&&n(),_t(()=>{const r=y(),{value:p}=v;!r||!p||p.scrollTo({left:r.offsetLeft,top:0,behavior:"smooth"})})}function J(n){if(!n)return;const{scrollLeft:r,scrollWidth:p,offsetWidth:x}=n;C.value=r<=0,S.value=r+x>=p}const Fe=te(n=>{J(n.target)},64);mt(ie,{triggerRef:M(e,"trigger"),tabStyleRef:M(e,"tabStyle"),paneClassRef:M(e,"paneClass"),paneStyleRef:M(e,"paneStyle"),mergedClsPrefixRef:s,typeRef:M(e,"type"),closableRef:M(e,"closable"),valueRef:B,tabChangeIdRef:V,onBeforeLeaveRef:M(e,"onBeforeLeave"),activateTab:Le,handleClose:Ae,handleAdd:Oe}),Dt(()=>{W()}),ht(()=>{const{value:n}=u;if(!n)return;const{value:r}=s,p=`${r}-tabs-nav-scroll-wrapper--shadow-before`,x=`${r}-tabs-nav-scroll-wrapper--shadow-after`;C.value?n.classList.remove(p):n.classList.add(p),S.value?n.classList.remove(x):n.classList.add(x)});const Me={syncBarPosition:()=>{W()}},ce=X(()=>{const{value:n}=c,{type:r}=e,p={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[r],x=`${n}${p}`,{self:{barColor:k,closeColor:F,closeColorHover:Ie,closeColorPressed:De,tabColor:Ne,tabBorderColor:He,paneTextColor:Ve,tabFontWeight:Ge,tabBorderRadius:Ue,tabFontWeightActive:Xe,colorSegment:Ye,fontWeightStrong:Ke,tabColorSegment:qe,[j("panePadding",n)]:Je,[j("tabPadding",x)]:Qe,[j("tabGap",x)]:Ze,[j("tabTextColor",r)]:et,[j("tabTextColorActive",r)]:tt,[j("tabTextColorHover",r)]:at,[j("tabTextColorDisabled",r)]:nt,[j("tabFontSize",n)]:rt},common:{cubicBezierEaseInOut:ot}}=g.value;return{"--n-bezier":ot,"--n-color-segment":Ye,"--n-bar-color":k,"--n-tab-font-size":rt,"--n-tab-text-color":et,"--n-tab-text-color-active":tt,"--n-tab-text-color-disabled":nt,"--n-tab-text-color-hover":at,"--n-pane-text-color":Ve,"--n-tab-border-color":He,"--n-tab-border-radius":Ue,"--n-close-color":F,"--n-close-color-hover":Ie,"--n-close-color-pressed":De,"--n-tab-color":Ne,"--n-tab-font-weight":Ge,"--n-tab-font-weight-active":Xe,"--n-tab-padding":Qe,"--n-tab-gap":Ze,"--n-pane-padding":Je,"--n-font-weight-strong":Ke,"--n-tab-color-segment":qe}}),D=d?xt("tabs",X(()=>`${c.value[0]}${e.type[0]}`),ce,e):void 0;return Object.assign({mergedClsPrefix:s,mergedValue:B,renderedNames:new Set,tabsPaneWrapperRef:O,tabsElRef:m,barElRef:h,addTabInstRef:f,xScrollInstRef:v,scrollWrapperElRef:u,addTabFixed:G,tabWrapperStyle:H,handleNavResize:ke,mergedSize:c,handleScroll:Fe,handleTabsResize:je,cssVars:d?void 0:ce,themeClass:D==null?void 0:D.themeClass,animationDirection:le,renderNameListRef:se,onAnimationBeforeLeave:Pe,onAnimationEnter:$e,onAnimationAfterEnter:ze,onRender:D==null?void 0:D.onRender},Me)},render(){const{mergedClsPrefix:e,type:t,addTabFixed:a,addable:o,mergedSize:i,renderNameListRef:l,onRender:s,$slots:{default:d,prefix:g,suffix:m}}=this;s==null||s();const h=d?Z(d()).filter(c=>c.type.__TAB_PANE__===!0):[],u=d?Z(d()).filter(c=>c.type.__TAB__===!0):[],f=!u.length,v=t==="card",C=t==="segment",S=!v&&!C&&this.justifyContent;return l.value=[],b("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${i}-size`,S&&`${e}-tabs--flex`],style:this.cssVars},b("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav`]},be(g,c=>c&&b("div",{class:`${e}-tabs-nav__prefix`},c)),C?b("div",{class:`${e}-tabs-rail`},f?h.map((c,T)=>(l.value.push(c.props.name),b(oe,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0}),c.children?{default:c.children.tab}:void 0))):u.map((c,T)=>(l.value.push(c.props.name),T===0?c:_e(c)))):b(ve,{onResize:this.handleNavResize},{default:()=>b("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},b(qt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const c=b("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},S?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),f?h.map((R,B)=>(l.value.push(R.props.name),ae(b(oe,Object.assign({},R.props,{internalCreatedByPane:!0,internalLeftPadded:B!==0&&!S}),R.children?{default:R.children.tab}:void 0)))):u.map((R,B)=>(l.value.push(R.props.name),ae(B!==0&&!S?_e(R):R))),!a&&o&&v?xe(o,(f?h.length:u.length)!==0):null,S?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let T=c;return v&&o&&(T=b(ve,{onResize:this.handleTabsResize},{default:()=>c})),b("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},T,v?b("div",{class:`${e}-tabs-pad`}):null,v?null:b("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),a&&o&&v?xe(o,!0):null,be(m,c=>c&&b("div",{class:`${e}-tabs-nav__suffix`},c))),f&&(this.animated?b("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},he(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):he(h,this.mergedValue,this.renderedNames)))}});function he(e,t,a,o,i,l,s){const d=[];return e.forEach(g=>{const{name:m,displayDirective:h,"display-directive":u}=g.props,f=C=>h===C||u===C,v=t===m;if(g.key!==void 0&&(g.key=m),v||f("show")||f("show:lazy")&&a.has(m)){a.has(m)||a.add(m);const C=!f("if");d.push(C?yt(g,[[St,v]]):g)}}),s?b(Ct,{name:`${s}-transition`,onBeforeLeave:o,onEnter:i,onAfterEnter:l},{default:()=>d}):d}function xe(e,t){return b(oe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function _e(e){const t=wt(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function ae(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const ya=I({props:{duration:null,transition:null},setup(e){return(t,a)=>(Y(),Se("div",ne({class:"transition-fade",style:{"--transition-fade-duration":e.duration}},t.$attrs),[P(Rt,ne({name:"fade"},e.transition),{default:L(()=>[Tt(t.$slots,"default",{},void 0,!0)]),_:3},16)],16))}});var Ca=we(ya,[["__scopeId","data-v-671ef8b2"]]);const wa={class:"about-index p-4 flex w-full h-full overflow-hidden"},Sa=Te("Home"),Ta=Te("About"),Ra={class:"flex items-center justify-center w-full h-full absolute top-0"},Pa=I({setup(e){let t=z(!0);const a=Nt("tab","general-structure");re(a,()=>{t.value=!1});const o=Pt(null);re(()=>[t.value,a],()=>{o.value=a.value==="general-structure"&&t.value?Et(()=>Ot(()=>import("./ProjectStructureExplorer.3c054756.js"),["assets/ProjectStructureExplorer.3c054756.js","assets/ProjectStructureExplorer.59251d87.css","assets/BreadcrumbItem.e63c58e6.js","assets/index.23d3cad9.js","assets/index.3708844d.css","assets/Slider.9bbc2c05.js"])):null},{immediate:!0});function i(l,s){l===a.value&&(t.value=!0)}return(l,s)=>{const d=Vt,g=jt,m=$t,h=Gt,u=Ut,f=Xt,v=ga,C=_a,S=zt;return Y(),Se("div",wa,[P(S,{class:"flex flex-1 h-full overflow-hidden",title:"About this page"},{"header-extra":L(()=>[P(u,null,{default:L(()=>[P(N(Ht),{href:"/"},{icon:L(()=>[P(d)]),default:L(()=>[Sa]),_:1}),P(h,null,{default:L(()=>[P(m,{class:"mr-1"},{default:L(()=>[P(g)]),_:1}),Ta]),_:1})]),_:1})]),default:L(()=>[P(C,{class:"tabs h-full flex flex-col",type:"line",animated:"",value:N(a),"onUpdate:value":s[3]||(s[3]=c=>Lt(a)?a.value=c:null)},{default:L(()=>[P(v,{class:"h-full",tab:"General structure",name:"general-structure",onTransitionend:s[0]||(s[0]=Q(c=>i("general-structure"),["self"]))},{default:L(()=>[P(N(Ca),{class:"flex h-full",duration:".5s",transition:{mode:"out-in"}},{default:L(()=>[N(o)!==null?(Y(),ue(At,{key:0},{default:L(()=>[(Y(),ue(Bt(N(o)),{key:N(a)}))]),_:1})):Wt("",!0)]),_:1}),kt("div",Ra,[P(f,{size:"large"})])]),_:1}),P(v,{class:"h-full",tab:"Vite config",name:"vite-config",onTransitionend:s[1]||(s[1]=Q(c=>i("vite-config"),["self"]))}),P(v,{class:"h-full",tab:"Custom plugins",name:"custom-plugins",onTransitionend:s[2]||(s[2]=Q(c=>i("custom-plugins"),["self"]))})]),_:1},8,["value"])]),_:1})])}}});var $a=we(Pa,[["__scopeId","data-v-3f51f1ec"]]),Ba=Object.freeze(Object.defineProperty({__proto__:null,default:$a},Symbol.toStringTag,{value:"Module"}));export{Ca as F,Ba as i};
