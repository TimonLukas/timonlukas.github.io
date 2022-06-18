var La=Object.defineProperty,Oa=Object.defineProperties;var Va=Object.getOwnPropertyDescriptors;var d0=Object.getOwnPropertySymbols;var Sa=Object.prototype.hasOwnProperty,Ca=Object.prototype.propertyIsEnumerable;var l0=(n,e,a)=>e in n?La(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,p0=(n,e)=>{for(var a in e||(e={}))Sa.call(e,a)&&l0(n,a,e[a]);if(d0)for(var a of d0(e))Ca.call(e,a)&&l0(n,a,e[a]);return n},u0=(n,e)=>Oa(n,Va(e));import{l as cn,b as on,m as D0,N as L0,r as Vn,e as $a,g as Fa,h as Ma,i as Un,d as O0}from"./BreadcrumbItem.b1652f10.js";import{F as jn}from"./index.a15cce32.js";import{d as me,h as V,n as ne,a9 as za,c as En,k as U,s as Me,q as An,g as M,A as wn,aJ as m0,aM as V0,aF as Ba,o as Z,l as W,p as Qe,r as q,x as X,z as ge,ac as vn,aG as Le,aL as Sn,B as Ze,C as oe,e as S0,f as Xe,N as Ha,a5 as qa,y as rn,w as xe,D as f0,v as Za,aH as Ka,aI as Wa,I as O,J as C,$ as _,bg as In,_ as ln,K as Q,L as J,m as C0,W as _e,X as Bn,b1 as Hn,Q as Pn,a2 as Ua,b7 as Ga,bh as b0,a3 as s,a1 as Ya,a_ as $0,bi as F0,S as ae,F as Qa,b0 as Xa,a0 as Je,a$ as h0,Z as dn,E as Ja,H as es,bj as ns,Y as as,U as qn,R as ss,a6 as ts}from"./index.0a04e717.js";import{D as rs,s as os,e as is,t as cs,C as ds,u as Re,E as ls,h as g0,v as ps,y as us,F as _0,b as ms,V as fs,X as v0,g as bs,B as hs,_ as gs}from"./Slider.ed374a08.js";function M0(n){return typeof n=="string"?`s-${n}`:`n-${n}`}var _s=me({name:"Switcher",render(){return V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},V("path",{d:"M12 8l10 8l-10 8z"}))}});const{cubicBezierEaseInOut:Ne,cubicBezierEaseOut:vs,cubicBezierEaseIn:ys}=za;function y0({overflow:n="hidden",duration:e=".3s",originalTransition:a="",leavingDelay:t="0s",foldPadding:r=!1,enterToProps:o=void 0,leaveToProps:c=void 0,reverse:i=!1}={}){const d=i?"leave":"enter",l=i?"enter":"leave";return[ne(`&.fade-in-height-expand-transition-${l}-from,
 &.fade-in-height-expand-transition-${d}-to`,Object.assign(Object.assign({},o),{opacity:1})),ne(`&.fade-in-height-expand-transition-${l}-to,
 &.fade-in-height-expand-transition-${d}-from`,Object.assign(Object.assign({},c),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:r?"0 !important":void 0,paddingBottom:r?"0 !important":void 0})),ne(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${n};
 transition:
 max-height ${e} ${Ne} ${t},
 opacity ${e} ${vs} ${t},
 margin-top ${e} ${Ne} ${t},
 margin-bottom ${e} ${Ne} ${t},
 padding-top ${e} ${Ne} ${t},
 padding-bottom ${e} ${Ne} ${t}
 ${a?","+a:""}
 `),ne(`&.fade-in-height-expand-transition-${d}-active`,`
 overflow: ${n};
 transition:
 max-height ${e} ${Ne},
 opacity ${e} ${ys},
 margin-top ${e} ${Ne},
 margin-bottom ${e} ${Ne},
 padding-top ${e} ${Ne},
 padding-bottom ${e} ${Ne}
 ${a?","+a:""}
 `)]}const ks=n=>{const{primaryColor:e,baseColor:a}=n;return{color:e,iconColor:a}},js={name:"IconWrapper",common:En,self:ks};var Ts=js,xs=U("icon-wrapper",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`);const Es=Object.assign(Object.assign({},Me.props),{size:{type:Number,default:24},borderRadius:{type:Number,default:6},color:String,iconColor:String}),As=me({name:"IconWrapper",props:Es,setup(n,{slots:e}){const a=Me("IconWrapper","-icon-wrapper",xs,Ts,n),{mergedClsPrefixRef:t,inlineThemeDisabled:r}=An(n),o=M(()=>{const{common:{cubicBezierEaseInOut:i},self:{color:d,iconColor:l}}=a.value;return{"--n-bezier":i,"--n-color":d,"--n-icon-color":l}}),c=r?wn("icon-wrapper",void 0,o,n):void 0;return()=>{const i=m0(n.size);return c==null||c.onRender(),V("div",{class:[`${t.value}-icon-wrapper`,c==null?void 0:c.themeClass.value],style:[o==null?void 0:o.value,{height:i,width:i,borderRadius:m0(n.borderRadius),backgroundColor:n.color,color:n.iconColor}]},e)}}});var ws={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};const Is=n=>{const{primaryColor:e,opacityDisabled:a,borderRadius:t,textColor3:r}=n,o="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},ws),{iconColor:r,textColor:"white",loadingColor:e,opacityDisabled:a,railColor:o,railColorActive:e,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:t,railBorderRadiusMedium:t,railBorderRadiusLarge:t,buttonBorderRadiusSmall:t,buttonBorderRadiusMedium:t,buttonBorderRadiusLarge:t,boxShadowFocus:`0 0 0 2px ${V0(e,{alpha:.2})}`})},Ps={name:"Switch",common:En,self:Is};var Rs=Ps;const Ns=n=>{const{borderRadiusSmall:e,hoverColor:a,pressedColor:t,primaryColor:r,textColor3:o,textColor2:c,textColorDisabled:i,fontSize:d}=n;return{fontSize:d,nodeBorderRadius:e,nodeColorHover:a,nodeColorPressed:t,nodeColorActive:V0(r,{alpha:.1}),arrowColor:o,nodeTextColor:c,nodeTextColorDisabled:i,loadingColor:r,dropMarkColor:r}},Ds=Ba({name:"Tree",common:En,peers:{Checkbox:rs,Scrollbar:os,Empty:is},self:Ns});var Ls=Ds,Os={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};const Vs=n=>{const{primaryColor:e,textColor2:a,borderColor:t,lineHeight:r,fontSize:o,borderRadiusSmall:c,dividerColor:i,fontWeightStrong:d,textColor1:l,textColor3:u,infoColor:f,warningColor:b,errorColor:m,successColor:y,codeColor:A}=n;return Object.assign(Object.assign({},Os),{aTextColor:e,blockquoteTextColor:a,blockquotePrefixColor:t,blockquoteLineHeight:r,blockquoteFontSize:o,codeBorderRadius:c,liTextColor:a,liLineHeight:r,liFontSize:o,hrColor:i,headerFontWeight:d,headerTextColor:l,pTextColor:a,pTextColor1Depth:l,pTextColor2Depth:a,pTextColor3Depth:u,pLineHeight:r,pFontSize:o,headerBarColor:e,headerBarColorPrimary:e,headerBarColorInfo:f,headerBarColorError:m,headerBarColorWarning:b,headerBarColorSuccess:y,textColor:a,textColor1Depth:l,textColor2Depth:a,textColor3Depth:u,textColorPrimary:e,textColorInfo:f,textColorSuccess:y,textColorWarning:b,textColorError:m,codeTextColor:a,codeColor:A,codeBorder:"1px solid #0000"})},Ss={name:"Typography",common:En,self:Vs};var Cs=Ss,$s=U("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[Z("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),Z("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),Z("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),U("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[cn({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),Z("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),Z("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),Z("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),ne("&:focus",[Z("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),W("round",[Z("rail","border-radius: calc(var(--n-rail-height) / 2);",[Z("button","border-radius: calc(var(--n-button-height) / 2);")])]),Qe("disabled",[Qe("icon",[W("rubber-band",[W("pressed",[Z("rail",[Z("button","max-width: var(--n-button-width-pressed);")])]),Z("rail",[ne("&:active",[Z("button","max-width: var(--n-button-width-pressed);")])]),W("active",[W("pressed",[Z("rail",[Z("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),Z("rail",[ne("&:active",[Z("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),W("active",[Z("rail",[Z("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),Z("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[Z("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[cn()]),Z("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),W("active",[Z("rail","background-color: var(--n-rail-color-active);")]),W("loading",[Z("rail",`
 cursor: wait;
 `)]),W("disabled",[Z("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const Fs=Object.assign(Object.assign({},Me.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var z0=me({name:"Switch",props:Fs,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:a}=An(n),t=Me("Switch","-switch",$s,Rs,n,e),r=cs(n),{mergedSizeRef:o,mergedDisabledRef:c}=r,i=q(n.defaultValue),d=X(n,"value"),l=on(d,i),u=M(()=>l.value===n.checkedValue),f=q(!1),b=q(!1),m=M(()=>{const{railStyle:I}=n;if(!!I)return I({focused:b.value,checked:u.value})});function y(I){const{"onUpdate:value":R,onChange:z,onUpdateValue:w}=n,{nTriggerFormInput:F,nTriggerFormChange:H}=r;R&&oe(R,I),w&&oe(w,I),z&&oe(z,I),i.value=I,F(),H()}function A(){const{nTriggerFormFocus:I}=r;I()}function P(){const{nTriggerFormBlur:I}=r;I()}function x(){n.loading||c.value||(l.value!==n.checkedValue?y(n.checkedValue):y(n.uncheckedValue))}function p(){b.value=!0,A()}function h(){b.value=!1,P(),f.value=!1}function v(I){n.loading||c.value||I.code==="Space"&&(l.value!==n.checkedValue?y(n.checkedValue):y(n.uncheckedValue),f.value=!1)}function j(I){n.loading||c.value||I.code==="Space"&&(I.preventDefault(),f.value=!0)}const k=M(()=>{const{value:I}=o,{self:{opacityDisabled:R,railColor:z,railColorActive:w,buttonBoxShadow:F,buttonColor:H,boxShadowFocus:fe,loadingColor:ze,textColor:le,iconColor:ee,[ge("buttonHeight",I)]:K,[ge("buttonWidth",I)]:pe,[ge("buttonWidthPressed",I)]:Ae,[ge("railHeight",I)]:ue,[ge("railWidth",I)]:te,[ge("railBorderRadius",I)]:We,[ge("buttonBorderRadius",I)]:ie},common:{cubicBezierEaseInOut:he}}=t.value,ve=vn((Le(ue)-Le(K))/2),ye=vn(Math.max(Le(ue),Le(K))),we=Le(ue)>Le(K)?te:vn(Le(te)+Le(K)-Le(ue));return{"--n-bezier":he,"--n-button-border-radius":ie,"--n-button-box-shadow":F,"--n-button-color":H,"--n-button-width":pe,"--n-button-width-pressed":Ae,"--n-button-height":K,"--n-height":ye,"--n-offset":ve,"--n-opacity-disabled":R,"--n-rail-border-radius":We,"--n-rail-color":z,"--n-rail-color-active":w,"--n-rail-height":ue,"--n-rail-width":te,"--n-width":we,"--n-box-shadow-focus":fe,"--n-loading-color":ze,"--n-text-color":le,"--n-icon-color":ee}}),E=a?wn("switch",M(()=>o.value[0]),k,n):void 0;return{handleClick:x,handleBlur:h,handleFocus:p,handleKeyup:v,handleKeydown:j,mergedRailStyle:m,pressed:f,mergedClsPrefix:e,mergedValue:l,checked:u,mergedDisabled:c,cssVars:a?void 0:k,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender}},render(){const{mergedClsPrefix:n,mergedDisabled:e,checked:a,mergedRailStyle:t,onRender:r,$slots:o}=this;r==null||r();const{checked:c,unchecked:i,icon:d,"checked-icon":l,"unchecked-icon":u}=o,f=!(Sn(d)&&Sn(l)&&Sn(u));return V("div",{role:"switch","aria-checked":a,class:[`${n}-switch`,this.themeClass,f&&`${n}-switch--icon`,a&&`${n}-switch--active`,e&&`${n}-switch--disabled`,this.round&&`${n}-switch--round`,this.loading&&`${n}-switch--loading`,this.pressed&&`${n}-switch--pressed`,this.rubberBand&&`${n}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},V("div",{class:`${n}-switch__rail`,"aria-hidden":"true",style:t},Ze(c,b=>Ze(i,m=>b||m?V("div",{"aria-hidden":!0,class:`${n}-switch__children-placeholder`},V("div",{class:`${n}-switch__rail-placeholder`},V("div",{class:`${n}-switch__button-placeholder`}),b),V("div",{class:`${n}-switch__rail-placeholder`},V("div",{class:`${n}-switch__button-placeholder`}),m)):null)),V("div",{class:`${n}-switch__button`},Ze(d,b=>Ze(l,m=>Ze(u,y=>V(D0,null,{default:()=>this.loading?V(L0,{key:"loading",clsPrefix:n,strokeWidth:20}):this.checked&&(m||b)?V("div",{class:`${n}-switch__button-icon`,key:m?"checked-icon":"icon"},m||b):!this.checked&&(y||b)?V("div",{class:`${n}-switch__button-icon`,key:y?"unchecked-icon":"icon"},y||b):null})))),Ze(c,b=>b&&V("div",{key:"checked",class:`${n}-switch__checked`},b)),Ze(i,b=>b&&V("div",{key:"unchecked",class:`${n}-switch__unchecked`},b)))))}});const B0=S0("n-tree-select"),pn=S0("n-tree");var Ms=me({name:"NTreeSwitcher",props:{clsPrefix:{type:String,required:!0},expanded:Boolean,hide:Boolean,loading:Boolean,onClick:Function},setup(n){const{renderSwitcherIconRef:e}=Xe(pn,null);return()=>{const{clsPrefix:a}=n;return V("span",{"data-switcher":!0,class:[`${a}-tree-node-switcher`,{[`${a}-tree-node-switcher--expanded`]:n.expanded,[`${a}-tree-node-switcher--hide`]:n.hide}],onClick:n.onClick},V("div",{class:`${a}-tree-node-switcher__icon`},V(D0,null,{default:()=>{if(n.loading)return V(L0,{clsPrefix:a,key:"loading",radius:85,strokeWidth:20});const{value:t}=e;return t?t():V(Ha,{clsPrefix:a,key:"switcher"},{default:()=>V(_s,null)})}})))}}}),zs=me({name:"NTreeNodeCheckbox",props:{clsPrefix:{type:String,required:!0},right:Boolean,focusable:Boolean,disabled:Boolean,checked:Boolean,indeterminate:Boolean,onCheck:Function},setup(n){const e=Xe(pn);function a(r){const{onCheck:o}=n;if(o)return o(r)}function t(r){n.indeterminate?a(!1):a(r)}return{handleUpdateValue:t,mergedTheme:e.mergedThemeRef}},render(){const{clsPrefix:n,mergedTheme:e,checked:a,indeterminate:t,disabled:r,focusable:o,handleUpdateValue:c}=this;return V("span",{class:[`${n}-tree-node-checkbox`,this.right&&`${n}-tree-node-checkbox--right`],"data-checkbox":!0},V(ds,{focusable:o,disabled:r,theme:e.peers.Checkbox,themeOverrides:e.peerOverrides.Checkbox,checked:a,indeterminate:t,onUpdateChecked:c}))}}),Bs=me({name:"TreeNodeContent",props:{clsPrefix:{type:String,required:!0},disabled:Boolean,checked:Boolean,selected:Boolean,onClick:Function,onDragstart:Function,tmNode:{type:Object,required:!0},nodeProps:Object},setup(n){const{renderLabelRef:e,renderPrefixRef:a,renderSuffixRef:t,labelFieldRef:r}=Xe(pn),o=q(null);function c(d){const{onClick:l}=n;l&&l(d)}function i(d){c(d)}return{selfRef:o,renderLabel:e,renderPrefix:a,renderSuffix:t,labelField:r,handleClick:i}},render(){const{clsPrefix:n,labelField:e,nodeProps:a,checked:t=!1,selected:r=!1,renderLabel:o,renderPrefix:c,renderSuffix:i,handleClick:d,onDragstart:l,tmNode:{rawNode:u,rawNode:{prefix:f,suffix:b,[e]:m}}}=this;return V("span",Object.assign({},a,{ref:"selfRef",class:[`${n}-tree-node-content`,a==null?void 0:a.class],onClick:d,draggable:l===void 0?void 0:!0,onDragstart:l}),c||f?V("div",{class:`${n}-tree-node-content__prefix`},c?c({option:u,selected:r,checked:t}):Vn(f)):null,V("div",{class:`${n}-tree-node-content__text`},o?o({option:u,selected:r,checked:t}):Vn(m)),i||b?V("div",{class:`${n}-tree-node-content__suffix`},i?i({option:u,selected:r,checked:t}):Vn(b)):null)}});function k0({position:n,offsetLevel:e,indent:a,el:t}){const r={position:"absolute",boxSizing:"border-box",right:0};if(n==="inside")r.left=0,r.top=0,r.bottom=0,r.borderRadius="inherit",r.boxShadow="inset 0 0 0 2px var(--n-drop-mark-color)";else{const o=n==="before"?"top":"bottom";r[o]=0,r.left=`${t.offsetLeft+6-e*a}px`,r.height="2px",r.backgroundColor="var(--n-drop-mark-color)",r.transformOrigin=o,r.borderRadius="1px",r.transform=n==="before"?"translateY(-4px)":"translateY(4px)"}return V("div",{style:r})}function Hs({dropPosition:n,node:e}){return e.isLeaf===!1||e.children?!0:n!=="inside"}const qs=me({name:"TreeNode",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(n){const e=Xe(pn),{droppingNodeParentRef:a,droppingMouseNodeRef:t,draggingNodeRef:r,droppingPositionRef:o,droppingOffsetLevelRef:c,nodePropsRef:i,indentRef:d,blockLineRef:l,checkboxPlacementRef:u}=e,f=M(()=>e.disabledRef.value||n.tmNode.disabled),b=M(()=>{const{value:w}=i;if(!!w)return w({option:n.tmNode.rawNode})}),m=q(null),y={value:null};qa(()=>{y.value=m.value.$el});function A(){const{tmNode:w}=n;if(!w.isLeaf&&!w.shallowLoaded){e.loadingKeysRef.value.has(w.key)||e.loadingKeysRef.value.add(w.key);const{onLoadRef:{value:F}}=e;F&&F(w.rawNode).then(()=>{e.handleSwitcherClick(w)}).finally(()=>{e.loadingKeysRef.value.delete(w.key)})}else e.handleSwitcherClick(w)}const P=Re(()=>!n.tmNode.disabled&&e.selectableRef.value&&(e.internalTreeSelect?e.mergedCheckStrategyRef.value!=="child"||e.multipleRef.value&&e.cascadeRef.value||n.tmNode.isLeaf:!0));function x(w){!P.value||g0(w,"checkbox")||g0(w,"switcher")||e.handleSelect(n.tmNode)}function p(w){var F,H;l.value||(f.value||x(w),(H=(F=b.value)===null||F===void 0?void 0:F.onClick)===null||H===void 0||H.call(F,w))}function h(w){var F,H;!l.value||(f.value||x(w),(H=(F=b.value)===null||F===void 0?void 0:F.onClick)===null||H===void 0||H.call(F,w))}function v(w){e.handleCheck(n.tmNode,w)}function j(w){e.handleDragStart({event:w,node:n.tmNode})}function k(w){w.currentTarget===w.target&&e.handleDragEnter({event:w,node:n.tmNode})}function E(w){w.preventDefault(),e.handleDragOver({event:w,node:n.tmNode})}function I(w){e.handleDragEnd({event:w,node:n.tmNode})}function R(w){w.currentTarget===w.target&&e.handleDragLeave({event:w,node:n.tmNode})}function z(w){w.preventDefault(),o.value!==null&&e.handleDrop({event:w,node:n.tmNode,dropPosition:o.value})}return{showDropMark:Re(()=>{const{value:w}=r;if(!w)return;const{value:F}=o;if(!F)return;const{value:H}=t;if(!H)return;const{tmNode:fe}=n;return fe.key===H.key}),showDropMarkAsParent:Re(()=>{const{value:w}=a;if(!w)return!1;const{tmNode:F}=n,{value:H}=o;return H==="before"||H==="after"?w.key===F.key:!1}),pending:Re(()=>e.pendingNodeKeyRef.value===n.tmNode.key),loading:Re(()=>e.loadingKeysRef.value.has(n.tmNode.key)),highlight:Re(()=>{var w;return(w=e.highlightKeySetRef.value)===null||w===void 0?void 0:w.has(n.tmNode.key)}),checked:Re(()=>e.displayedCheckedKeysRef.value.includes(n.tmNode.key)),indeterminate:Re(()=>e.displayedIndeterminateKeysRef.value.includes(n.tmNode.key)),selected:Re(()=>e.mergedSelectedKeysRef.value.includes(n.tmNode.key)),expanded:Re(()=>e.mergedExpandedKeysRef.value.includes(n.tmNode.key)),disabled:f,checkable:M(()=>e.checkableRef.value&&(e.cascadeRef.value||e.mergedCheckStrategyRef.value!=="child"||n.tmNode.isLeaf)),checkboxDisabled:M(()=>!!n.tmNode.rawNode.checkboxDisabled),selectable:P,internalScrollable:e.internalScrollableRef,draggable:e.draggableRef,blockLine:l,nodeProps:b,checkboxFocusable:e.internalCheckboxFocusableRef,droppingPosition:o,droppingOffsetLevel:c,indent:d,checkboxPlacement:u,contentInstRef:m,contentElRef:y,handleCheck:v,handleDrop:z,handleDragStart:j,handleDragEnter:k,handleDragOver:E,handleDragEnd:I,handleDragLeave:R,handleLineClick:h,handleContentClick:p,handleSwitcherClick:A}},render(){const{tmNode:n,clsPrefix:e,checkable:a,selectable:t,selected:r,checked:o,highlight:c,draggable:i,blockLine:d,indent:l,disabled:u,pending:f,internalScrollable:b,nodeProps:m,checkboxPlacement:y}=this,A=i&&!u?{onDragenter:this.handleDragEnter,onDragleave:this.handleDragLeave,onDragend:this.handleDragEnd,onDrop:this.handleDrop,onDragover:this.handleDragOver}:void 0,P=b?M0(n.key):void 0,x=y==="right",p=a?V(zs,{right:x,focusable:this.checkboxFocusable,disabled:u||this.checkboxDisabled,clsPrefix:e,checked:this.checked,indeterminate:this.indeterminate,onCheck:this.handleCheck}):null;return V("div",Object.assign({class:`${e}-tree-node-wrapper`},A),V("div",Object.assign({},d?m:void 0,{class:[`${e}-tree-node`,{[`${e}-tree-node--selected`]:r,[`${e}-tree-node--checkable`]:a,[`${e}-tree-node--highlight`]:c,[`${e}-tree-node--pending`]:f,[`${e}-tree-node--disabled`]:u,[`${e}-tree-node--selectable`]:t},m==null?void 0:m.class],"data-key":P,draggable:i&&d,onClick:this.handleLineClick,onDragstart:i&&d&&!u?this.handleDragStart:void 0}),ls(n.level,V("div",{class:`${e}-tree-node-indent`},V("div",{style:{width:`${l}px`}}))),V(Ms,{clsPrefix:e,expanded:this.expanded,loading:this.loading,hide:n.isLeaf,onClick:this.handleSwitcherClick}),x?null:p,V(Bs,{ref:"contentInstRef",clsPrefix:e,checked:o,selected:r,onClick:this.handleContentClick,nodeProps:d?void 0:m,onDragstart:i&&!d&&!u?this.handleDragStart:void 0,tmNode:n}),i?this.showDropMark?k0({el:this.contentElRef.value,position:this.droppingPosition,offsetLevel:this.droppingOffsetLevel,indent:l}):this.showDropMarkAsParent?k0({el:this.contentElRef.value,position:"inside",offsetLevel:this.droppingOffsetLevel,indent:l}):null:null,x?p:null))}});var H0=qs;function q0(n,e,a,t){n==null||n.forEach(r=>{a(r),q0(r[e],e,a,t),t(r)})}function Zs(n,e,a,t,r){const o=new Set,c=new Set,i=[];return q0(n,t,d=>{if(i.push(d),r(e,d)){c.add(d[a]);for(let l=i.length-2;l>=0;--l)if(!o.has(i[l][a]))o.add(i[l][a]);else return}},()=>{i.pop()}),{expandedKeys:Array.from(o),highlightKeySet:c}}if(typeof window!="undefined"&&Image){const n=new Image;n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}function Ks(n,e,a,t,r){const o=new Set,c=new Set,i=new Set,d=[],l=[],u=[];function f(m){m.forEach(y=>{if(u.push(y),e(a,y)){o.add(y[t]),i.add(y[t]);for(let P=u.length-2;P>=0;--P){const x=u[P][t];if(!c.has(x))c.add(x),o.has(x)&&o.delete(x);else break}}const A=y[r];A&&f(A),u.pop()})}f(n);function b(m,y){m.forEach(A=>{const P=A[t],x=o.has(P),p=c.has(P);if(!x&&!p)return;const h=A[r];if(h)if(x)y.push(A);else{d.push(P);const v=Object.assign(Object.assign({},A),{[r]:[]});y.push(v),b(h,v[r])}else y.push(A)})}return b(n,l),{filteredTree:l,highlightKeySet:i,expandedKeys:d}}function Ws({fNodesRef:n,mergedExpandedKeysRef:e,mergedSelectedKeysRef:a,handleSelect:t,handleSwitcherClick:r}){const{value:o}=a,c=Xe(B0,null),i=c?c.pendingNodeKeyRef:q(o.length?o[o.length-1]:null);function d(u){const{value:f}=i;if(f===null){if(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(u.code)&&f===null){const{value:b}=n;let m=0;for(;m<b.length;){if(!b[m].disabled){i.value=b[m].key;break}m+=1}}}else{const{value:b}=n;let m=b.findIndex(y=>y.key===f);if(!~m)return;if(u.code==="Enter"||u.code==="NumpadEnter")t(b[m]);else if(u.code==="ArrowDown")for(m+=1;m<b.length;){if(!b[m].disabled){i.value=b[m].key;break}m+=1}else if(u.code==="ArrowUp")for(m-=1;m>=0;){if(!b[m].disabled){i.value=b[m].key;break}m-=1}else if(u.code==="ArrowLeft"){const y=b[m];if(y.isLeaf||!e.value.includes(f)){const A=y.getParent();A&&(i.value=A.key)}else r(y)}else if(u.code==="ArrowRight"){const y=b[m];if(y.isLeaf)return;if(!e.value.includes(f))r(y);else for(m+=1;m<b.length;){if(!b[m].disabled){i.value=b[m].key;break}m+=1}}}}function l(u){switch(u.code){case"ArrowUp":case"ArrowDown":u.preventDefault()}}return{pendingNodeKeyRef:i,handleKeyup:d,handleKeydown:l}}var Us=me({name:"TreeMotionWrapper",props:{clsPrefix:{type:String,required:!0},height:Number,nodes:{type:Array,required:!0},mode:{type:String,required:!0},onAfterEnter:{type:Function,required:!0}},render(){const{clsPrefix:n}=this;return V(ps,{onAfterEnter:this.onAfterEnter,appear:!0,reverse:this.mode==="collapse"},{default:()=>V("div",{class:[`${n}-tree-motion-wrapper`,`${n}-tree-motion-wrapper--${this.mode}`],style:{height:vn(this.height)}},this.nodes.map(e=>V(H0,{clsPrefix:n,tmNode:e})))})}}),Gs=U("tree",`
 font-size: var(--n-font-size);
 outline: none;
`,[ne("ul, li",`
 margin: 0;
 padding: 0;
 list-style: none;
 `),ne(">",[U("tree-node",[ne("&:first-child",{marginTop:0})])]),U("tree-node-indent",`
 flex-grow: 0;
 flex-shrink: 0;
 height: 0;
 `),U("tree-motion-wrapper",[W("expand",[y0({duration:"0.2s"})]),W("collapse",[y0({duration:"0.2s",reverse:!0})])]),U("tree-node-wrapper",`
 box-sizing: border-box;
 padding: 3px 0;
 `),U("tree-node",`
 position: relative;
 display: flex;
 border-radius: var(--n-node-border-radius);
 transition: background-color .3s var(--n-bezier);
 `,[W("highlight",[U("tree-node-content",[Z("text",{borderBottomColor:"var(--n-node-text-color-disabled)"})])]),W("disabled",[U("tree-node-content",`
 color: var(--n-node-text-color-disabled);
 cursor: not-allowed;
 `)]),Qe("disabled",[W("selectable",[U("tree-node-content",`
 cursor: pointer;
 `)])])]),W("block-node",[U("tree-node-content",`
 flex-grow: 1;
 flex-shrink: 0;
 `)]),Qe("block-line",[U("tree-node",[Qe("disabled",[U("tree-node-content",[ne("&:hover",{backgroundColor:"var(--n-node-color-hover)"})]),W("selectable",[U("tree-node-content",[ne("&:active",{backgroundColor:"var(--n-node-color-pressed)"})])]),W("pending",[U("tree-node-content",`
 background-color: var(--n-node-color-hover);
 `)]),W("selected",[U("tree-node-content",{backgroundColor:"var(--n-node-color-active)"})])])])]),W("block-line",[U("tree-node",[Qe("disabled",[ne("&:hover",{backgroundColor:"var(--n-node-color-hover)"}),W("selectable",[ne("&:active",{backgroundColor:"var(--n-node-color-pressed)"})]),W("pending",`
 background-color: var(--n-node-color-hover);
 `),W("selected",{backgroundColor:"var(--n-node-color-active)"})]),W("disabled",`
 cursor: not-allowed;
 `)])]),U("tree-node-switcher",`
 cursor: pointer;
 display: inline-flex;
 flex-shrink: 0;
 height: 24px;
 width: 24px;
 align-items: center;
 justify-content: center;
 transition: transform .15s var(--n-bezier);
 vertical-align: bottom;
 `,[Z("icon",`
 position: relative;
 height: 14px;
 width: 14px;
 display: flex;
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 font-size: 14px;
 `,[U("icon",[cn()]),U("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[cn()]),U("base-icon",[cn()])]),W("hide",{visibility:"hidden"}),W("expanded",{transform:"rotate(90deg)"})]),U("tree-node-checkbox",`
 display: inline-flex;
 height: 24px;
 width: 16px;
 vertical-align: bottom;
 align-items: center;
 justify-content: center;
 margin-right: 4px;
 `,[W("right","margin-left: 4px;")]),W("checkable",[U("tree-node-content",`
 padding: 0 6px;
 `)]),U("tree-node-content",`
 position: relative;
 display: inline-flex;
 align-items: center;
 min-height: 24px;
 box-sizing: border-box;
 line-height: 1.5;
 vertical-align: bottom;
 padding: 0 6px 0 4px;
 cursor: default;
 border-radius: var(--n-node-border-radius);
 text-decoration-color: #0000;
 text-decoration-line: underline;
 color: var(--n-node-text-color);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ne("&:last-child",{marginBottom:0}),Z("prefix",`
 display: inline-flex;
 margin-right: 8px;
 `),Z("text",`
 border-bottom: 1px solid #0000;
 transition: border-color .3s var(--n-bezier);
 flex-grow:1;
 `),Z("suffix",`
 display: inline-flex;
 `)]),Z("empty","margin: auto;")]),Ys=globalThis&&globalThis.__awaiter||function(n,e,a,t){function r(o){return o instanceof a?o:new a(function(c){c(o)})}return new(a||(a=Promise))(function(o,c){function i(u){try{l(t.next(u))}catch(f){c(f)}}function d(u){try{l(t.throw(u))}catch(f){c(f)}}function l(u){u.done?o(u.value):r(u.value).then(i,d)}l((t=t.apply(n,e||[])).next())})};const bn=30;function Qs(n,e){return{getKey(a){return a[n]},getChildren(a){return a[e]},getDisabled(a){return!!(a.disabled||a.checkboxDisabled)}}}const Xs={allowCheckingNotLoaded:Boolean,filter:Function,defaultExpandAll:Boolean,expandedKeys:Array,keyField:{type:String,default:"key"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},defaultExpandedKeys:{type:Array,default:()=>[]},indeterminateKeys:Array,onUpdateIndeterminateKeys:[Function,Array],"onUpdate:indeterminateKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],"onUpdate:expandedKeys":[Function,Array]},Js=Object.assign(Object.assign(Object.assign(Object.assign({},Me.props),{showIrrelevantNodes:{type:Boolean,default:!0},data:{type:Array,default:()=>[]},expandOnDragenter:{type:Boolean,default:!0},cancelable:{type:Boolean,default:!0},checkable:Boolean,draggable:Boolean,blockNode:Boolean,blockLine:Boolean,disabled:Boolean,checkedKeys:Array,defaultCheckedKeys:{type:Array,default:()=>[]},selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},multiple:Boolean,pattern:{type:String,default:""},onLoad:Function,cascade:Boolean,selectable:{type:Boolean,default:!0},indent:{type:Number,default:16},allowDrop:{type:Function,default:Hs},animated:{type:Boolean,default:!0},checkboxPlacement:{type:String,default:"left"},virtualScroll:Boolean,watchProps:Array,renderLabel:Function,renderPrefix:Function,renderSuffix:Function,renderSwitcherIcon:Function,nodeProps:Function,onDragenter:[Function,Array],onDragleave:[Function,Array],onDragend:[Function,Array],onDragstart:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onUpdateCheckedKeys:[Function,Array],"onUpdate:checkedKeys":[Function,Array],onUpdateSelectedKeys:[Function,Array],"onUpdate:selectedKeys":[Function,Array]}),Xs),{internalTreeSelect:Boolean,internalScrollable:Boolean,internalScrollablePadding:String,internalRenderEmpty:Function,internalHighlightKeySet:Object,internalUnifySelectCheck:Boolean,internalCheckboxFocusable:{type:Boolean,default:!0},internalFocusable:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},leafOnly:Boolean});var et=me({name:"Tree",props:Js,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:a}=An(n),t=Me("Tree","-tree",Gs,Ls,n,e),r=q(null),o=q(null),c=q(null);function i(){var g;return(g=c.value)===null||g===void 0?void 0:g.listElRef}function d(){var g;return(g=c.value)===null||g===void 0?void 0:g.itemsElRef}const l=M(()=>{const{pattern:g}=n;return g?!g.length||!Be.value?{filteredTree:n.data,highlightKeySet:null,expandedKeys:void 0}:Ks(n.data,Be.value,g,n.keyField,n.childrenField):{filteredTree:n.data,highlightKeySet:null,expandedKeys:void 0}}),u=M(()=>us(n.showIrrelevantNodes?n.data:l.value.filteredTree,Qs(n.keyField,n.childrenField))),f=Xe(B0,null),b=n.internalTreeSelect?f.dataTreeMate:u,{watchProps:m}=n,y=q([]);m!=null&&m.includes("defaultCheckedKeys")?rn(()=>{y.value=n.defaultCheckedKeys}):y.value=n.defaultCheckedKeys;const A=X(n,"checkedKeys"),P=on(A,y),x=M(()=>b.value.getCheckedKeys(P.value,{cascade:n.cascade,allowNotLoaded:n.allowCheckingNotLoaded})),p=M(()=>n.leafOnly?"child":n.checkStrategy),h=M(()=>x.value.checkedKeys),v=M(()=>{const{indeterminateKeys:g}=n;return g!==void 0?g:x.value.indeterminateKeys}),j=q([]);m!=null&&m.includes("defaultSelectedKeys")?rn(()=>{j.value=n.defaultSelectedKeys}):j.value=n.defaultSelectedKeys;const k=X(n,"selectedKeys"),E=on(k,j),I=q([]),R=g=>{I.value=n.defaultExpandAll?b.value.getNonLeafKeys():g===void 0?n.defaultExpandedKeys:g};m!=null&&m.includes("defaultExpandedKeys")?rn(()=>R(void 0)):rn(()=>R(n.defaultExpandedKeys));const z=X(n,"expandedKeys"),w=on(z,I),F=M(()=>u.value.getFlattenedNodes(w.value)),{pendingNodeKeyRef:H,handleKeyup:fe,handleKeydown:ze}=Ws({mergedSelectedKeysRef:E,fNodesRef:F,mergedExpandedKeysRef:w,handleSelect:Dn,handleSwitcherClick:a0});let le=null,ee=null;const K=q(new Set),pe=M(()=>n.internalHighlightKeySet||l.value.highlightKeySet),Ae=on(pe,K),ue=q(new Set),te=M(()=>w.value.filter(g=>!ue.value.has(g)));let We=0;const ie=q(null),he=q(null),ve=q(null),ye=q(null),we=q(0),un=M(()=>{const{value:g}=he;return g?g.parent:null}),Be=M(()=>{const{filter:g}=n;if(g)return g;const{labelField:T}=n;return(D,L)=>D.length?L[T].toLowerCase().includes(D.toLowerCase()):!0});xe(X(n,"data"),()=>{ue.value.clear(),H.value=null,an()},{deep:!1});let Ie;xe(X(n,"pattern"),(g,T)=>{if(n.showIrrelevantNodes)if(Ie=void 0,g){const{expandedKeys:D,highlightKeySet:L}=Zs(n.data,n.pattern,n.keyField,n.childrenField,Be.value);K.value=L,Ue(D,ke(D))}else K.value=new Set;else if(!g.length)Ie!==void 0&&Ue(Ie,ke(Ie));else{T.length||(Ie=w.value);const{expandedKeys:D}=l.value;D!==void 0&&Ue(D,ke(D))}});function mn(g){return Ys(this,void 0,void 0,function*(){const{onLoad:T}=n;if(!T)return yield Promise.resolve();const{value:D}=ue;return yield new Promise(L=>{D.has(g.key)||(D.add(g.key),T(g.rawNode).then(()=>{D.delete(g.key),L()}).catch(B=>{console.error(B),sn()}))})})}rn(()=>{var g;const{value:T}=u;if(!T)return;const{getNode:D}=T;(g=w.value)===null||g===void 0||g.forEach(L=>{const B=D(L);B&&!B.shallowLoaded&&mn(B)})});const Pe=q(!1),De=q([]);xe(te,(g,T)=>{if(!n.animated){f0(fn);return}const D=new Set(T);let L=null,B=null;for(const re of g)if(!D.has(re)){if(L!==null)return;L=re}const je=new Set(g);for(const re of T)if(!je.has(re)){if(B!==null)return;B=re}if(L!==null&&B!==null||L===null&&B===null)return;const{virtualScroll:ce}=n,tn=(ce?c.value.listElRef:r.value).offsetHeight,qe=Math.ceil(tn/bn)+1;if(L!==null){Pe.value=!0,De.value=u.value.getFlattenedNodes(T);const re=De.value.findIndex(de=>de.key===L);if(~re){const de=_0(De.value[re].children,g);De.value.splice(re+1,0,{__motion:!0,mode:"expand",height:ce?de.length*bn:void 0,nodes:ce?de.slice(0,qe):de})}}if(B!==null){De.value=u.value.getFlattenedNodes(g);const re=De.value.findIndex(de=>de.key===B);if(~re){const de=De.value[re].children;if(!de)return;Pe.value=!0;const Te=_0(de,g);De.value.splice(re+1,0,{__motion:!0,mode:"collapse",height:ce?Te.length*bn:void 0,nodes:ce?Te.slice(0,qe):Te})}}});const la=M(()=>ms(F.value)),pa=M(()=>Pe.value?De.value:F.value);function fn(){const{value:g}=o;g&&g.sync()}function ua(){Pe.value=!1,n.virtualScroll&&f0(fn)}function ke(g){const{getNode:T}=b.value;return g.map(D=>{var L;return((L=T(D))===null||L===void 0?void 0:L.rawNode)||null})}function Ue(g,T){const{"onUpdate:expandedKeys":D,onUpdateExpandedKeys:L}=n;I.value=g,D&&oe(D,g,T),L&&oe(L,g,T)}function e0(g,T){const{"onUpdate:checkedKeys":D,onUpdateCheckedKeys:L}=n;y.value=g,L&&oe(L,g,T),D&&oe(D,g,T)}function ma(g,T){const{"onUpdate:indeterminateKeys":D,onUpdateIndeterminateKeys:L}=n;D&&oe(D,g,T),L&&oe(L,g,T)}function Nn(g,T){const{"onUpdate:selectedKeys":D,onUpdateSelectedKeys:L}=n;j.value=g,L&&oe(L,g,T),D&&oe(D,g,T)}function fa(g){const{onDragenter:T}=n;T&&oe(T,g)}function ba(g){const{onDragleave:T}=n;T&&oe(T,g)}function ha(g){const{onDragend:T}=n;T&&oe(T,g)}function ga(g){const{onDragstart:T}=n;T&&oe(T,g)}function _a(g){const{onDragover:T}=n;T&&oe(T,g)}function va(g){const{onDrop:T}=n;T&&oe(T,g)}function an(){ya(),He()}function ya(){ie.value=null}function He(){we.value=0,he.value=null,ve.value=null,ye.value=null,sn()}function sn(){le&&(window.clearTimeout(le),le=null),ee=null}function n0(g,T){if(n.disabled||g.disabled)return;if(n.internalUnifySelectCheck&&!n.multiple){Dn(g);return}const{checkedKeys:D,indeterminateKeys:L}=b.value[T?"check":"uncheck"](g.key,h.value,{cascade:n.cascade,checkStrategy:p.value,allowNotLoaded:n.allowCheckingNotLoaded});e0(D,ke(D)),ma(L,ke(L))}function ka(g){if(n.disabled)return;const{value:T}=w,D=T.findIndex(L=>L===g);if(~D){const L=Array.from(T);L.splice(D,1),Ue(L,ke(L))}else{const L=u.value.getNode(g);if(!L||L.isLeaf)return;const B=T.concat(g);Ue(B,ke(B))}}function a0(g){n.disabled||Pe.value||ka(g.key)}function Dn(g){if(!(n.disabled||!n.selectable)){if(H.value=g.key,n.internalUnifySelectCheck){const{value:{checkedKeys:T,indeterminateKeys:D}}=x;n.multiple?n0(g,!(T.includes(g.key)||D.includes(g.key))):e0([g.key],ke([g.key]))}if(n.multiple){const T=Array.from(E.value),D=T.findIndex(L=>L===g.key);~D?n.cancelable&&T.splice(D,1):~D||T.push(g.key),Nn(T,ke(T))}else E.value.includes(g.key)?n.cancelable&&Nn([],[]):Nn([g.key],ke([g.key]))}}function ja(g){if(le&&(window.clearTimeout(le),le=null),g.isLeaf)return;ee=g.key;const T=()=>{if(ee!==g.key)return;const{value:D}=ve;if(D&&D.key===g.key&&!w.value.includes(g.key)){const L=w.value.concat(g.key);Ue(L,ke(L))}le=null,ee=null};g.shallowLoaded?le=window.setTimeout(()=>{T()},1e3):le=window.setTimeout(()=>{mn(g).then(()=>{T()})},1e3)}function Ta({event:g,node:T}){!n.draggable||n.disabled||T.disabled||(s0({event:g,node:T},!1),fa({event:g,node:T.rawNode}))}function xa({event:g,node:T}){!n.draggable||n.disabled||T.disabled||ba({event:g,node:T.rawNode})}function Ea(g){g.target===g.currentTarget&&He()}function Aa({event:g,node:T}){an(),!(!n.draggable||n.disabled||T.disabled)&&ha({event:g,node:T.rawNode})}function wa({event:g,node:T}){!n.draggable||n.disabled||T.disabled||(We=g.clientX,ie.value=T,ga({event:g,node:T.rawNode}))}function s0({event:g,node:T},D=!0){var L;if(!n.draggable||n.disabled||T.disabled)return;const{value:B}=ie;if(!B)return;const{allowDrop:je,indent:ce}=n;D&&_a({event:g,node:T.rawNode});const tn=g.currentTarget,{height:qe,top:re}=tn.getBoundingClientRect(),de=g.clientY-re;let Te;je({node:T.rawNode,dropPosition:"inside",phase:"drag"})?de<=8?Te="before":de>=qe-8?Te="after":Te="inside":de<=qe/2?Te="before":Te="after";const{value:Da}=la;let Y,be;const Ln=Da(T.key);if(Ln===null){He();return}let o0=!1;Te==="inside"?(Y=T,be="inside"):Te==="before"?T.isFirstChild?(Y=T,be="before"):(Y=F.value[Ln-1],be="after"):(Y=T,be="after"),!Y.isLeaf&&w.value.includes(Y.key)&&(o0=!0,be==="after"&&(Y=F.value[Ln+1],Y?be="before":(Y=T,be="inside")));const i0=Y;if(ve.value=i0,!o0&&B.isLastChild&&B.key===Y.key&&(be="after"),be==="after"){let c0=We-g.clientX,On=0;for(;c0>=ce/2&&Y.parent!==null&&Y.isLastChild&&On<1;)c0-=ce,On+=1,Y=Y.parent;we.value=On}else we.value=0;if((B.contains(Y)||be==="inside"&&((L=B.parent)===null||L===void 0?void 0:L.key)===Y.key)&&!(B.key===i0.key&&B.key===Y.key)){He();return}if(!je({node:Y.rawNode,dropPosition:be,phase:"drag"})){He();return}if(B.key===Y.key)sn();else if(ee!==Y.key)if(be==="inside"){if(n.expandOnDragenter){if(ja(Y),!Y.shallowLoaded&&ee!==Y.key){an();return}}else if(!Y.shallowLoaded){an();return}}else sn();else be!=="inside"&&sn();ye.value=be,he.value=Y}function Ia({event:g,node:T,dropPosition:D}){if(!n.draggable||n.disabled||T.disabled)return;const{value:L}=ie,{value:B}=he,{value:je}=ye;if(!(!L||!B||!je)&&!!n.allowDrop({node:B.rawNode,dropPosition:je,phase:"drag"})&&L.key!==B.key){if(je==="before"){const ce=L.getNext({includeDisabled:!0});if(ce&&ce.key===B.key){He();return}}if(je==="after"){const ce=L.getPrev({includeDisabled:!0});if(ce&&ce.key===B.key){He();return}}va({event:g,node:B.rawNode,dragNode:L.rawNode,dropPosition:D}),an()}}function Pa(){fn()}function Ra(){fn()}function Na(g){var T;if(n.virtualScroll||n.internalScrollable){const{value:D}=o;if(!((T=D==null?void 0:D.containerRef)===null||T===void 0)&&T.contains(g.relatedTarget))return;H.value=null}else{const{value:D}=r;if(D!=null&&D.contains(g.relatedTarget))return;H.value=null}}xe(H,g=>{var T,D;if(g!==null){if(n.virtualScroll)(T=c.value)===null||T===void 0||T.scrollTo({key:g});else if(n.internalScrollable){const{value:L}=o;if(L===null)return;const B=(D=L.contentRef)===null||D===void 0?void 0:D.querySelector(`[data-key="${M0(g)}"]`);if(!B)return;L.scrollTo({el:B})}}}),Za(pn,{loadingKeysRef:ue,highlightKeySetRef:Ae,displayedCheckedKeysRef:h,displayedIndeterminateKeysRef:v,mergedSelectedKeysRef:E,mergedExpandedKeysRef:w,mergedThemeRef:t,mergedCheckStrategyRef:p,nodePropsRef:X(n,"nodeProps"),disabledRef:X(n,"disabled"),checkableRef:X(n,"checkable"),selectableRef:X(n,"selectable"),onLoadRef:X(n,"onLoad"),draggableRef:X(n,"draggable"),blockLineRef:X(n,"blockLine"),indentRef:X(n,"indent"),cascadeRef:X(n,"cascade"),checkboxPlacementRef:n.checkboxPlacement,droppingMouseNodeRef:ve,droppingNodeParentRef:un,draggingNodeRef:ie,droppingPositionRef:ye,droppingOffsetLevelRef:we,fNodesRef:F,pendingNodeKeyRef:H,internalScrollableRef:X(n,"internalScrollable"),internalCheckboxFocusableRef:X(n,"internalCheckboxFocusable"),internalTreeSelect:n.internalTreeSelect,renderLabelRef:X(n,"renderLabel"),renderPrefixRef:X(n,"renderPrefix"),renderSuffixRef:X(n,"renderSuffix"),renderSwitcherIconRef:X(n,"renderSwitcherIcon"),labelFieldRef:X(n,"labelField"),multipleRef:X(n,"multiple"),handleSwitcherClick:a0,handleDragEnd:Aa,handleDragEnter:Ta,handleDragLeave:xa,handleDragStart:wa,handleDrop:Ia,handleDragOver:s0,handleSelect:Dn,handleCheck:n0});const t0={handleKeydown:ze,handleKeyup:fe},r0=M(()=>{const{common:{cubicBezierEaseInOut:g},self:{fontSize:T,nodeBorderRadius:D,nodeColorHover:L,nodeColorPressed:B,nodeColorActive:je,arrowColor:ce,loadingColor:tn,nodeTextColor:qe,nodeTextColorDisabled:re,dropMarkColor:de}}=t.value;return{"--n-arrow-color":ce,"--n-loading-color":tn,"--n-bezier":g,"--n-font-size":T,"--n-node-border-radius":D,"--n-node-color-active":je,"--n-node-color-hover":L,"--n-node-color-pressed":B,"--n-node-text-color":qe,"--n-node-text-color-disabled":re,"--n-drop-mark-color":de}}),Ge=a?wn("tree",void 0,r0,n):void 0;return{mergedClsPrefix:e,mergedTheme:t,fNodes:pa,aip:Pe,selfElRef:r,virtualListInstRef:c,scrollbarInstRef:o,handleFocusout:Na,handleDragLeaveTree:Ea,handleScroll:Pa,getScrollContainer:i,getScrollContent:d,handleAfterEnter:ua,handleResize:Ra,handleKeydown:t0.handleKeydown,handleKeyup:t0.handleKeyup,cssVars:a?void 0:r0,themeClass:Ge==null?void 0:Ge.themeClass,onRender:Ge==null?void 0:Ge.onRender}},render(){var n;const{fNodes:e,internalRenderEmpty:a}=this;if(!e.length&&a)return a();const{mergedClsPrefix:t,blockNode:r,blockLine:o,draggable:c,disabled:i,internalFocusable:d,checkable:l,handleKeyup:u,handleKeydown:f,handleFocusout:b}=this,m=d&&!i,y=m?"0":void 0,A=[`${t}-tree`,l&&`${t}-tree--checkable`,(o||r)&&`${t}-tree--block-node`,o&&`${t}-tree--block-line`],P=p=>"__motion"in p?V(Us,{height:p.height,nodes:p.nodes,clsPrefix:t,mode:p.mode,onAfterEnter:this.handleAfterEnter}):V(H0,{key:p.key,tmNode:p,clsPrefix:t});if(this.virtualScroll){const{mergedTheme:p,internalScrollablePadding:h}=this,v=Ka(h||"0");return V(v0,{ref:"scrollbarInstRef",onDragleave:c?this.handleDragLeaveTree:void 0,container:this.getScrollContainer,content:this.getScrollContent,class:A,theme:p.peers.Scrollbar,themeOverrides:p.peerOverrides.Scrollbar,tabindex:y,onKeyup:m?u:void 0,onKeydown:m?f:void 0,onFocusout:m?b:void 0},{default:()=>{var j;return(j=this.onRender)===null||j===void 0||j.call(this),V(fs,{ref:"virtualListInstRef",items:this.fNodes,itemSize:bn,ignoreItemResize:this.aip,paddingTop:v.top,paddingBottom:v.bottom,class:this.themeClass,style:[this.cssVars,{paddingLeft:v.left,paddingRight:v.right}],onScroll:this.handleScroll,onResize:this.handleResize,showScrollbar:!1,itemResizable:!0},{default:({item:k})=>P(k)})}})}const{internalScrollable:x}=this;return A.push(this.themeClass),(n=this.onRender)===null||n===void 0||n.call(this),x?V(v0,{class:A,tabindex:y,onKeyup:m?u:void 0,onKeydown:m?f:void 0,onFocusout:m?b:void 0,style:this.cssVars,contentStyle:{padding:this.internalScrollablePadding}},{default:()=>V("div",{onDragleave:c?this.handleDragLeaveTree:void 0,ref:"selfElRef"},this.fNodes.map(P))}):V("div",{class:A,tabindex:y,ref:"selfElRef",style:this.cssVars,onKeyup:m?u:void 0,onKeydown:m?f:void 0,onFocusout:m?b:void 0,onDragleave:c?this.handleDragLeaveTree:void 0},e.length?e.map(P):Wa(this.$slots.empty,()=>{var p,h,v,j;return[V(bs,{class:`${t}-tree__empty`,theme:(h=(p=this.theme)===null||p===void 0?void 0:p.peers)===null||h===void 0?void 0:h.Empty,themeOverrides:(j=(v=this.themeOverrides)===null||v===void 0?void 0:v.peers)===null||j===void 0?void 0:j.Empty})]}))}}),nt=U("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[ne("&:first-child",{marginTop:0}),W("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[W("align-text",{paddingLeft:0},[ne("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),ne("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),ne("&::before",{backgroundColor:"var(--n-bar-color)"})])]);const at=Object.assign(Object.assign({},Me.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean});var en=n=>me({name:`H${n}`,props:at,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:t}=An(e),r=Me("Typography","-h",nt,Cs,e,a),o=M(()=>{const{type:i}=e,{common:{cubicBezierEaseInOut:d},self:{headerFontWeight:l,headerTextColor:u,[ge("headerPrefixWidth",n)]:f,[ge("headerFontSize",n)]:b,[ge("headerMargin",n)]:m,[ge("headerBarWidth",n)]:y,[ge("headerBarColor",i)]:A}}=r.value;return{"--n-bezier":d,"--n-font-size":b,"--n-margin":m,"--n-bar-color":A,"--n-bar-width":y,"--n-font-weight":l,"--n-text-color":u,"--n-prefix-width":f}}),c=t?wn(`h${n}`,M(()=>e.type[0]),o,e):void 0;return{mergedClsPrefix:a,cssVars:t?void 0:o,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var e;const{prefix:a,alignText:t,mergedClsPrefix:r,cssVars:o,$slots:c}=this;return(e=this.onRender)===null||e===void 0||e.call(this),V(`h${n}`,{class:[`${r}-h`,`${r}-h${n}`,this.themeClass,{[`${r}-h--prefix-bar`]:a,[`${r}-h--align-text`]:t}],style:o},c)}});en("1");const st=en("2");en("3");en("4");en("5");en("6");const Z0=Symbol("Comlink.proxy"),tt=Symbol("Comlink.endpoint"),rt=Symbol("Comlink.releaseProxy"),Zn=Symbol("Comlink.thrown"),K0=n=>typeof n=="object"&&n!==null||typeof n=="function",ot={canHandle:n=>K0(n)&&n[Z0],serialize(n){const{port1:e,port2:a}=new MessageChannel;return U0(n,e),[a,[a]]},deserialize(n){return n.start(),Gn(n)}},it={canHandle:n=>K0(n)&&Zn in n,serialize({value:n}){let e;return n instanceof Error?e={isError:!0,value:{message:n.message,name:n.name,stack:n.stack}}:e={isError:!1,value:n},[e,[]]},deserialize(n){throw n.isError?Object.assign(new Error(n.value.message),n.value):n.value}},W0=new Map([["proxy",ot],["throw",it]]);function U0(n,e=self){e.addEventListener("message",function a(t){if(!t||!t.data)return;const{id:r,type:o,path:c}=Object.assign({path:[]},t.data),i=(t.data.argumentList||[]).map(Ke);let d;try{const l=c.slice(0,-1).reduce((f,b)=>f[b],n),u=c.reduce((f,b)=>f[b],n);switch(o){case"GET":d=u;break;case"SET":l[c.slice(-1)[0]]=Ke(t.data.value),d=!0;break;case"APPLY":d=u.apply(l,i);break;case"CONSTRUCT":{const f=new u(...i);d=pt(f)}break;case"ENDPOINT":{const{port1:f,port2:b}=new MessageChannel;U0(n,b),d=lt(f,[f])}break;case"RELEASE":d=void 0;break;default:return}}catch(l){d={value:l,[Zn]:0}}Promise.resolve(d).catch(l=>({value:l,[Zn]:0})).then(l=>{const[u,f]=Yn(l);e.postMessage(Object.assign(Object.assign({},u),{id:r}),f),o==="RELEASE"&&(e.removeEventListener("message",a),G0(e))})}),e.start&&e.start()}function ct(n){return n.constructor.name==="MessagePort"}function G0(n){ct(n)&&n.close()}function Gn(n,e){return Kn(n,[],e)}function hn(n){if(n)throw new Error("Proxy has been released and is not useable")}function Kn(n,e=[],a=function(){}){let t=!1;const r=new Proxy(a,{get(o,c){if(hn(t),c===rt)return()=>Ye(n,{type:"RELEASE",path:e.map(i=>i.toString())}).then(()=>{G0(n),t=!0});if(c==="then"){if(e.length===0)return{then:()=>r};const i=Ye(n,{type:"GET",path:e.map(d=>d.toString())}).then(Ke);return i.then.bind(i)}return Kn(n,[...e,c])},set(o,c,i){hn(t);const[d,l]=Yn(i);return Ye(n,{type:"SET",path:[...e,c].map(u=>u.toString()),value:d},l).then(Ke)},apply(o,c,i){hn(t);const d=e[e.length-1];if(d===tt)return Ye(n,{type:"ENDPOINT"}).then(Ke);if(d==="bind")return Kn(n,e.slice(0,-1));const[l,u]=j0(i);return Ye(n,{type:"APPLY",path:e.map(f=>f.toString()),argumentList:l},u).then(Ke)},construct(o,c){hn(t);const[i,d]=j0(c);return Ye(n,{type:"CONSTRUCT",path:e.map(l=>l.toString()),argumentList:i},d).then(Ke)}});return r}function dt(n){return Array.prototype.concat.apply([],n)}function j0(n){const e=n.map(Yn);return[e.map(a=>a[0]),dt(e.map(a=>a[1]))]}const Y0=new WeakMap;function lt(n,e){return Y0.set(n,e),n}function pt(n){return Object.assign(n,{[Z0]:!0})}function Yn(n){for(const[e,a]of W0)if(a.canHandle(n)){const[t,r]=a.serialize(n);return[{type:"HANDLER",name:e,value:t},r]}return[{type:"RAW",value:n},Y0.get(n)||[]]}function Ke(n){switch(n.type){case"HANDLER":return W0.get(n.name).deserialize(n.value);case"RAW":return n.value}}function Ye(n,e,a){return new Promise(t=>{const r=ut();n.addEventListener("message",function o(c){!c.data||!c.data.id||c.data.id!==r||(n.removeEventListener("message",o),t(c.data))}),n.start&&n.start(),n.postMessage(Object.assign({id:r},e),a)})}function ut(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const mt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ft=_("path",{fill:"#c5c5c5",d:"M20.414 2H5v28h22V8.586ZM7 28V4h12v6h6v18Z"},null,-1),bt=[ft];function ht(n,e){return O(),C("svg",mt,bt)}var Tn={name:"vscode-icons-default-file",render:ht};const gt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_t=_("rect",{width:"28",height:"28",x:"2",y:"2",fill:"#3178c6",rx:"1.312"},null,-1),vt=_("path",{fill:"#fff","fill-rule":"evenodd",d:"M18.245 23.759v3.068a6.492 6.492 0 0 0 1.764.575a11.56 11.56 0 0 0 2.146.192a9.968 9.968 0 0 0 2.088-.211a5.11 5.11 0 0 0 1.735-.7a3.542 3.542 0 0 0 1.181-1.266a4.469 4.469 0 0 0 .186-3.394a3.409 3.409 0 0 0-.717-1.117a5.236 5.236 0 0 0-1.123-.877a12.027 12.027 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479a2.089 2.089 0 0 1-.516-.518a1.091 1.091 0 0 1-.181-.618a1.039 1.039 0 0 1 .162-.571a1.4 1.4 0 0 1 .459-.436a2.439 2.439 0 0 1 .726-.283a4.211 4.211 0 0 1 .956-.1a5.942 5.942 0 0 1 .808.058a6.292 6.292 0 0 1 .856.177a5.994 5.994 0 0 1 .836.3a4.657 4.657 0 0 1 .751.422V13.9a7.509 7.509 0 0 0-1.525-.4a12.426 12.426 0 0 0-1.9-.129a8.767 8.767 0 0 0-2.064.235a5.239 5.239 0 0 0-1.716.733a3.655 3.655 0 0 0-1.171 1.271a3.731 3.731 0 0 0-.431 1.845a3.588 3.588 0 0 0 .789 2.34a6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.458 6.458 0 0 1 .942.517a2.463 2.463 0 0 1 .626.585a1.2 1.2 0 0 1 .23.719a1.1 1.1 0 0 1-.144.552a1.269 1.269 0 0 1-.435.441a2.381 2.381 0 0 1-.726.292a4.377 4.377 0 0 1-1.018.105a5.773 5.773 0 0 1-1.969-.35a5.874 5.874 0 0 1-1.805-1.045Zm-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z"},null,-1),yt=[_t,vt];function kt(n,e){return O(),C("svg",gt,yt)}var Cn={name:"vscode-icons-file-type-typescript-official",render:kt};const jt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tt=_("path",{fill:"#007acc",d:"M23.827 8.243a4.424 4.424 0 0 1 2.223 1.281a5.853 5.853 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.014 2.014 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.1 3.636 1.817 4.31 2.843a5.158 5.158 0 0 1 .416 4.333a4.764 4.764 0 0 1-3.932 2.815a10.9 10.9 0 0 1-2.708-.028a6.531 6.531 0 0 1-3.616-1.884a6.278 6.278 0 0 1-.926-1.371a2.655 2.655 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.771 4.771 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.4-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.687 4.687 0 0 1-.976-1.777a7.116 7.116 0 0 1-.062-2.268a4.332 4.332 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084Zm-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a13.986 13.986 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z"},null,-1),xt=_("path",{fill:"#99b8c4",d:"m27.075 25.107l.363-.361c1.68.055 1.706 0 1.78-.177l.462-1.124l.034-.107l-.038-.093c-.02-.049-.081-.2-1.13-1.2v-.526c1.211-1.166 1.185-1.226 1.116-1.4l-.46-1.136c-.069-.17-.1-.237-1.763-.191l-.364-.367a8.138 8.138 0 0 0-.057-1.657l-.047-.106l-1.2-.525c-.177-.081-.239-.11-1.372 1.124l-.509-.008c-1.167-1.245-1.222-1.223-1.4-1.152l-1.115.452c-.175.071-.236.1-.169 1.79l-.36.359c-1.68-.055-1.7 0-1.778.177L18.606 20l-.036.108l.038.094c.02.048.078.194 1.13 1.2v.525c-1.211 1.166-1.184 1.226-1.115 1.4l.459 1.137c.07.174.1.236 1.763.192l.363.377a8.169 8.169 0 0 0 .055 1.654l.047.107l1.208.528c.176.073.236.1 1.366-1.13l.509.006c1.168 1.247 1.228 1.223 1.4 1.154l1.113-.45c.176-.075.237-.102.169-1.795Zm-4.788-2.632a2 2 0 1 1 2.618 1.14a2.023 2.023 0 0 1-2.618-1.14Z"},null,-1),Et=[Tt,xt];function At(n,e){return O(),C("svg",jt,Et)}var wt={name:"vscode-icons-file-type-tsconfig",render:At};const It={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pt=_("rect",{width:"28",height:"28",x:"2",y:"2",fill:"#3178c6",rx:"1.312"},null,-1),Rt=_("path",{fill:"#fff",d:"m25.158 25.589l.391-.383c1.809.058 1.837 0 1.917-.188l.5-1.193l.034-.114l-.041-.1c-.021-.052-.087-.212-1.217-1.273v-.558c1.3-1.238 1.276-1.3 1.2-1.486l-.5-1.206c-.075-.18-.108-.252-1.9-.2l-.392-.389a8.482 8.482 0 0 0-.061-1.759l-.051-.113l-1.292-.557c-.19-.086-.257-.117-1.477 1.193l-.548-.008c-1.257-1.322-1.316-1.3-1.508-1.223l-1.2.479c-.188.076-.254.107-.182 1.9l-.387.381c-1.809-.059-1.831 0-1.915.188l-.5 1.19l-.029.112l.041.1c.021.051.084.206 1.217 1.274v.557c-1.3 1.238-1.275 1.3-1.2 1.486l.494 1.207c.076.185.108.251 1.9.2l.391.4a8.522 8.522 0 0 0 .059 1.756l.05.114l1.3.56c.19.078.254.106 1.471-1.2l.548.006c1.258 1.324 1.323 1.3 1.508 1.225l1.2-.478c.187-.074.253-.103.179-1.9ZM20 22.8a2.112 2.112 0 0 1 1.214-2.73l.028-.011a2.164 2.164 0 0 1 2.781 1.225a2.113 2.113 0 0 1-1.2 2.726A2.188 2.188 0 0 1 20 22.8Z"},null,-1),Nt=[Pt,Rt];function Dt(n,e){return O(),C("svg",It,Nt)}var Lt={name:"vscode-icons-file-type-tsconfig-official",render:Dt};const Ot={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vt=_("path",{fill:"#f5de19",d:"M2 2h28v28H2z"},null,-1),St=_("path",{d:"M20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107L25 18.128A1.789 1.789 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z"},null,-1),Ct=[Vt,St];function $t(n,e){return O(),C("svg",Ot,Ct)}var $n={name:"vscode-icons-file-type-js-official",render:$t};const Ft={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Mt=_("path",{fill:"#f1662a",d:"m20.42 21.157l2.211 2.211L30 16l-7.369-7.369l-2.211 2.212L25.58 16Zm-8.84-10.314L9.369 8.631L2 16l7.369 7.369l2.211-2.211L6.42 16Zm5.831-3.166l1.6.437l-4.42 16.209l-1.6-.437Z"},null,-1),zt=_("path",{fill:"#fcba00",d:"M20.332 18.462a3.354 3.354 0 0 1 .975-1.423a4.014 4.014 0 0 1 1.617-.8A9.118 9.118 0 0 1 25.138 16a5.472 5.472 0 0 1 3.681 1.039A3.5 3.5 0 0 1 30 19.808a4.47 4.47 0 0 1-.24 1.491a3.124 3.124 0 0 1-.838 1.239l-1.675 1.6a1.512 1.512 0 0 0-.424.789a5.307 5.307 0 0 0-.1 1.1H23v-.54a6.32 6.32 0 0 1 .207-1.778a2.886 2.886 0 0 1 .78-1.24l1.352-1.289a1.84 1.84 0 0 0 .563-.894a3.682 3.682 0 0 0 .1-.8a1.5 1.5 0 0 0-.252-.9a.9.9 0 0 0-.779-.346a1.255 1.255 0 0 0-.483.086a.724.724 0 0 0-.344.337a2.347 2.347 0 0 0-.217.721a7.614 7.614 0 0 0-.081 1.24H20a6.155 6.155 0 0 1 .332-2.162Zm6.457 8.5V30h-3.853v-3.038Z"},null,-1),Bt=[Mt,zt];function Ht(n,e){return O(),C("svg",Ft,Bt)}var qt={name:"vscode-icons-file-type-xquery",render:Ht};const Zt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Kt=_("path",{fill:"#f5de19",d:"M4.014 14.976a2.51 2.51 0 0 0 1.567-.518a2.377 2.377 0 0 0 .805-1.358a15.261 15.261 0 0 0 .214-2.944q.012-2.085.075-2.747a5.236 5.236 0 0 1 .418-1.686a3.025 3.025 0 0 1 .755-1.018A3.046 3.046 0 0 1 9 4.125A6.762 6.762 0 0 1 10.544 4h.7v1.96h-.387a2.338 2.338 0 0 0-1.723.468a3.4 3.4 0 0 0-.425 2.092a36.054 36.054 0 0 1-.137 4.133a4.734 4.734 0 0 1-.768 2.06A4.567 4.567 0 0 1 6.1 16a3.809 3.809 0 0 1 1.992 1.754a8.861 8.861 0 0 1 .618 3.865q0 2.435.05 2.9a1.755 1.755 0 0 0 .504 1.181a2.639 2.639 0 0 0 1.592.337h.387V28h-.7a5.655 5.655 0 0 1-1.773-.2a2.97 2.97 0 0 1-1.324-.93a3.353 3.353 0 0 1-.681-1.63a24.175 24.175 0 0 1-.165-3.234a16.469 16.469 0 0 0-.214-3.106a2.408 2.408 0 0 0-.805-1.361a2.489 2.489 0 0 0-1.567-.524Zm23.972 2.035a2.489 2.489 0 0 0-1.567.524a2.408 2.408 0 0 0-.805 1.361a16.469 16.469 0 0 0-.212 3.109a24.175 24.175 0 0 1-.169 3.234a3.353 3.353 0 0 1-.681 1.63a2.97 2.97 0 0 1-1.324.93a5.655 5.655 0 0 1-1.773.2h-.7V26.04h.387a2.639 2.639 0 0 0 1.592-.337a1.755 1.755 0 0 0 .506-1.186q.05-.462.05-2.9a8.861 8.861 0 0 1 .618-3.865A3.809 3.809 0 0 1 25.9 16a4.567 4.567 0 0 1-1.7-1.286a4.734 4.734 0 0 1-.768-2.06a36.054 36.054 0 0 1-.137-4.133a3.4 3.4 0 0 0-.425-2.092a2.338 2.338 0 0 0-1.723-.468h-.387V4h.7a6.762 6.762 0 0 1 1.54.125a3.046 3.046 0 0 1 1.149.581a3.025 3.025 0 0 1 .755 1.018a5.236 5.236 0 0 1 .418 1.686q.062.662.075 2.747a15.261 15.261 0 0 0 .212 2.947a2.377 2.377 0 0 0 .805 1.355a2.51 2.51 0 0 0 1.567.518Z"},null,-1),Wt=[Kt];function Ut(n,e){return O(),C("svg",Zt,Wt)}var Gt={name:"vscode-icons-file-type-json",render:Ut};const Yt={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qt=_("path",{fill:"#2188b6",d:"M28.208 24.409a10.493 10.493 0 0 0-3.959 1.822a23.743 23.743 0 0 1-5.835 2.642a1.632 1.632 0 0 1-.983.55a62.228 62.228 0 0 1-6.447.577c-1.163.009-1.876-.3-2.074-.776a1.573 1.573 0 0 1 .866-2.074a3.759 3.759 0 0 1-.514-.379c-.171-.171-.352-.514-.406-.388c-.225.55-.343 1.894-.947 2.5c-.83.839-2.4.559-3.328.072c-1.019-.541.072-1.813.072-1.813a.73.73 0 0 1-.992-.343a4.847 4.847 0 0 1-.667-2.949a5.374 5.374 0 0 1 1.749-2.895a9.334 9.334 0 0 1 .658-4.4a10.445 10.445 0 0 1 3.165-3.661S6.628 10.747 7.35 8.817c.469-1.262.658-1.253.812-1.308a3.633 3.633 0 0 0 1.452-.857a5.265 5.265 0 0 1 4.41-1.7S15.2 1.4 16.277 2.09a18.349 18.349 0 0 1 1.533 2.886s1.281-.748 1.425-.469a11.334 11.334 0 0 1 .523 6.132a14.01 14.01 0 0 1-2.6 5.411c-.135.225 1.551.938 2.615 3.887c.983 2.7.108 4.96.262 5.212c.027.045.036.063.036.063s1.127.09 3.391-1.308a8.5 8.5 0 0 1 4.277-1.604a1.081 1.081 0 0 1 .469 2.11Z"},null,-1),Xt=[Qt];function Jt(n,e){return O(),C("svg",Yt,Xt)}var Q0={name:"vscode-icons-file-type-yarn",render:Jt};const er={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nr=_("path",{fill:"#c2c2c2",d:"M22.038 2H6.375a1.755 1.755 0 0 0-1.75 1.75v24.5A1.755 1.755 0 0 0 6.375 30h19.25a1.755 1.755 0 0 0 1.75-1.75V6.856Zm.525 2.844l1.663 1.531h-1.663ZM6.375 28.25V3.75h14.438v4.375h4.813V28.25Z"},null,-1),ar=_("path",{fill:"#829ec2",d:"M8.125 15.097h13.076v1.75H8.125zm0 9.342h9.762v1.75H8.125zm0-4.676h15.75v1.75H8.125zm0-9.533h15.75v1.75H8.125z"},null,-1),sr=[nr,ar];function tr(n,e){return O(),C("svg",er,sr)}var rr={name:"vscode-icons-file-type-text",render:tr};const or={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ir=_("path",{fill:"none",stroke:"#755838",d:"M2.5 7.955h27v16.091h-27z"},null,-1),cr=_("path",{fill:"#755838",d:"M5.909 20.636v-9.272h2.727l2.728 3.409l2.727-3.409h2.727v9.272h-2.727v-5.318l-2.727 3.409l-2.728-3.409v5.318H5.909zm17.046 0l-4.091-4.5h2.727v-4.772h2.727v4.772h2.727l-4.09 4.5z"},null,-1),dr=[ir,cr];function lr(n,e){return O(),C("svg",or,dr)}var pr={name:"vscode-icons-file-type-markdown",render:lr};const ur={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mr=_("path",{fill:"#f1662a",d:"m20.42 21.157l2.211 2.211L30 16l-7.369-7.369l-2.211 2.212L25.58 16Zm-8.84-10.314L9.369 8.631L2 16l7.369 7.369l2.211-2.211L6.42 16Zm5.831-3.166l1.6.437l-4.42 16.209l-1.6-.437l4.42-16.209Z"},null,-1),fr=[mr];function br(n,e){return O(),C("svg",ur,fr)}var hr={name:"vscode-icons-file-type-xml",render:br};const gr={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_r=_("path",{fill:"#cb3837",d:"M2 10.555h28v9.335H16v1.556H9.778v-1.557H2Zm1.556 7.779h3.111v-4.668h1.555v4.667h1.556v-6.222H3.556Zm7.778-6.223v7.779h3.111v-1.556h3.111v-6.223Zm3.111 1.556H16v3.112h-1.556Zm4.667-1.556v6.223h3.111v-4.668h1.556v4.667h1.556v-4.667h1.556v4.667h1.556v-6.222Z"},null,-1),vr=[_r];function yr(n,e){return O(),C("svg",gr,vr)}var kr={name:"vscode-icons-file-type-npm",render:yr};const jr={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tr={fill:"none"},xr=["fill"],Er=["fill"],Ar=["id"],wr=_("stop",{"stop-color":"#41D1FF"},null,-1),Ir=_("stop",{offset:"1","stop-color":"#BD34FE"},null,-1),Pr=[wr,Ir],Rr=["id"],Nr=_("stop",{"stop-color":"#FFEA83"},null,-1),Dr=_("stop",{offset:".083","stop-color":"#FFDD35"},null,-1),Lr=_("stop",{offset:"1","stop-color":"#FFA800"},null,-1),Or=[Nr,Dr,Lr];function Vr(n,e){return O(),C("svg",jr,[_("g",Tr,[_("path",{fill:"url(#"+n.idMap.svgIDa+")",d:"m29.884 6.146l-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.714.714 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z"},null,8,xr),_("path",{fill:"url(#"+n.idMap.svgIDb+")",d:"M22.264 2.007L12.54 3.912a.357.357 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222l7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45z"},null,8,Er),_("defs",null,[_("linearGradient",{id:n.idMap.svgIDa,x1:"6",x2:"235",y1:"33",y2:"344",gradientTransform:"translate(1.34 1.894) scale(.07142)",gradientUnits:"userSpaceOnUse"},Pr,8,Ar),_("linearGradient",{id:n.idMap.svgIDb,x1:"194.651",x2:"236.076",y1:"8.818",y2:"292.989",gradientTransform:"translate(1.34 1.894) scale(.07142)",gradientUnits:"userSpaceOnUse"},Or,8,Rr)])])])}var X0={name:"vscode-icons-file-type-vite",render:Vr,data(){const n=()=>Math.random().toString(36).substr(2,10);return{idMap:{svgIDa:"uicons-"+n(),svgIDb:"uicons-"+n()}}}};const Sr={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cr=["id"],$r=_("stop",{offset:"0","stop-color":"#58d09e"},null,-1),Fr=_("stop",{offset:"1"},null,-1),Mr=[$r,Fr],zr=["id"],Br=_("stop",{offset:"0","stop-color":"#58d09e"},null,-1),Hr=_("stop",{offset:"1","stop-color":"#d2d2d2"},null,-1),qr=[Br,Hr],Zr=_("path",{d:"M15.5 2.012A14 14 0 1 1 2.017 16.5A14.009 14.009 0 0 1 15.5 2.012Z"},null,-1),Kr=_("path",{fill:"#d2d2d2",d:"m23.5 11.561l-2.635 6.612l-2.651-6.612h-2.17l3.719 9.025l-2.643 6.364l1.9.375l6.536-15.764H23.5Z"},null,-1),Wr=_("path",{fill:"#d2d2d2",d:"M11.924 13.233a2.611 2.611 0 0 1 2.458 1.6l.036.079l1.849-.623l-.04-.094a4.552 4.552 0 0 0-4.3-2.8a4.624 4.624 0 0 0-3.387 1.323a4.441 4.441 0 0 0-1.374 3.302a4.419 4.419 0 0 0 1.371 3.289a4.624 4.624 0 0 0 3.387 1.324a4.554 4.554 0 0 0 4.3-2.8l.04-.094l-1.852-.624l-.035.083a2.563 2.563 0 0 1-2.456 1.595A2.6 2.6 0 0 1 10 18a2.728 2.728 0 0 1-.781-1.978a2.774 2.774 0 0 1 .781-2a2.588 2.588 0 0 1 1.928-.792Z"},null,-1),Ur=["fill"],Gr=_("path",{fill:"#58d09e",d:"M2.905 19.562a13.406 13.406 0 0 1-.484-3.574A13.582 13.582 0 0 1 11.14 3.4l.684 1.755a11.689 11.689 0 0 0-7.5 10.832a11.539 11.539 0 0 0 .416 3.075Z"},null,-1),Yr=_("path",{fill:"#58d09e",d:"M11.049 3.444a13.669 13.669 0 0 1 17.065 6.433l-1.688.858A11.765 11.765 0 0 0 11.74 5.2l-.691-1.753Z"},null,-1),Qr=["fill"];function Xr(n,e){return O(),C("svg",Sr,[_("defs",null,[_("linearGradient",{id:n.idMap.svgIDa,x1:"-232.591",x2:"-232.527",y1:"266.35",y2:"266.35",gradientTransform:"scale(-243.14 243.14) rotate(74.609 58.4 285.758)",gradientUnits:"userSpaceOnUse"},Mr,8,Cr),_("linearGradient",{id:n.idMap.svgIDb,x1:"-232.579",x2:"-232.515",y1:"267.655",y2:"267.655",gradientTransform:"matrix(190.987 150.5 150.5 -190.987 4142.028 86141.279)",gradientUnits:"userSpaceOnUse"},qr,8,zr)]),Zr,Kr,Wr,_("path",{fill:"url(#"+n.idMap.svgIDa+")",d:"M22.251 25.8a11.617 11.617 0 0 0 4.106-15.214l1.682-.869a13.483 13.483 0 0 1-4.768 17.671l-1.02-1.588Z"},null,8,Ur),Gr,Yr,_("path",{fill:"url(#"+n.idMap.svgIDb+")",d:"m17.488 26.06l-.462 1.11a.614.614 0 0 1-.538.378c-.156.007-.314.011-.473.011A11.786 11.786 0 0 1 4.571 18.51l-1.852.415a13.522 13.522 0 0 0 4.73 7.514a13.751 13.751 0 0 0 8.546 3h.028c.182 0 .364 0 .544-.011a2.519 2.519 0 0 0 2.217-1.543l.6-1.45l-1.9-.375Z"},null,8,Qr)])}var Jr={name:"vscode-icons-file-type-cypress",render:Xr,data(){const n=()=>Math.random().toString(36).substr(2,10);return{idMap:{svgIDa:"uicons-"+n(),svgIDb:"uicons-"+n()}}}};const eo={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},no=["id"],ao=_("stop",{offset:"0","stop-color":"#58d09e"},null,-1),so=_("stop",{offset:"1"},null,-1),to=[ao,so],ro=["id"],oo=_("stop",{offset:"0","stop-color":"#58d09e"},null,-1),io=_("stop",{offset:"1","stop-color":"#d2d2d2"},null,-1),co=[oo,io],lo=In('<path fill="#58d09e" d="M6.152 28.65a5.144 5.144 0 0 1-4.046-6.087c.339-1.429.269-1.346 7.644-9.06l6.95-7.269l1.97 1.878l-8.01 8.362l6.7-.144l4.734-4.938l1.962 1.888l-6.956 7.249c-6.385 6.65-7.017 7.278-7.666 7.6a5.2 5.2 0 0 1-3.274.525Zm19.574-16.666c-.183-.11-2.063-1.864-4.178-3.9L17.7 4.385l-.012-.562a1.153 1.153 0 0 1 .259-.9a1.325 1.325 0 0 1 1.387-.495a91.845 91.845 0 0 1 8.38 8.041a1.34 1.34 0 0 1-1.992 1.513Z"></path><path fill="#58d09e" d="M4.085 23.185c-.353 2.28.96 3.828 3.443 3.49c.255-.268 3.214-3.357 9.861-10.328c-3.344.072-3.3-.074-6.649 0c-6.689 6.934-6.822 6.884-6.655 6.838Z"></path><path d="M19.6 9.539A10.04 10.04 0 1 1 9.933 19.93A10.048 10.048 0 0 1 19.6 9.539Z"></path><path fill="#d2d2d2" d="m25.345 16.388l-1.89 4.743l-1.9-4.743H20l2.668 6.474l-1.9 4.566l1.361.268l4.689-11.308h-1.473Z"></path><path fill="#d2d2d2" d="M17.039 17.588a1.874 1.874 0 0 1 1.761 1.146l.026.057l1.327-.447l-.029-.067a3.265 3.265 0 0 0-3.087-2.011a3.315 3.315 0 0 0-2.429.949a3.338 3.338 0 0 0 0 4.732a3.319 3.319 0 0 0 2.429.949a3.265 3.265 0 0 0 3.087-2.01l.029-.068l-1.329-.448l-.025.06a1.839 1.839 0 0 1-1.762 1.143a1.866 1.866 0 0 1-1.383-.566a1.958 1.958 0 0 1-.561-1.42a1.99 1.99 0 0 1 .561-1.432a1.859 1.859 0 0 1 1.383-.569Z"></path>',5),po=["fill"],uo=_("path",{fill:"#58d09e",d:"M10.571 22.128a9.61 9.61 0 0 1-.347-2.564a9.743 9.743 0 0 1 6.254-9.029l.491 1.259a8.385 8.385 0 0 0-5.383 7.77a8.292 8.292 0 0 0 .3 2.206l-1.312.358Z"},null,-1),mo=_("path",{fill:"#58d09e",d:"M16.412 10.566a9.806 9.806 0 0 1 12.242 4.615l-1.211.616a8.447 8.447 0 0 0-10.535-3.974Z"},null,-1),fo=["fill"];function bo(n,e){return O(),C("svg",eo,[_("defs",null,[_("linearGradient",{id:n.idMap.svgIDa,x1:"-232.831",x2:"-232.767",y1:"265.938",y2:"265.938",gradientTransform:"scale(-174.487 174.487) rotate(74.609 57.955 285.7)",gradientUnits:"userSpaceOnUse"},to,8,no),_("linearGradient",{id:n.idMap.svgIDb,x1:"-233.052",x2:"-232.988",y1:"267.716",y2:"267.716",gradientTransform:"scale(174.5 -174.5) rotate(-38.239 -502.812 -202.442)",gradientUnits:"userSpaceOnUse"},co,8,ro)]),lo,_("path",{fill:"url(#"+n.idMap.svgIDa+")",d:"M24.447 26.6a8.331 8.331 0 0 0 2.946-10.913l1.206-.624a9.675 9.675 0 0 1-3.42 12.676l-.732-1.139Z"},null,8,po),uo,mo,_("path",{fill:"url(#"+n.idMap.svgIDb+")",d:"m21.031 26.789l-.331.8a.441.441 0 0 1-.386.271c-.111 0-.224.007-.338.007a8.453 8.453 0 0 1-8.21-6.49l-1.329.3a9.7 9.7 0 0 0 3.393 5.391a9.865 9.865 0 0 0 6.13 2.152h.02c.131 0 .26 0 .39-.008a1.805 1.805 0 0 0 1.589-1.112l.434-1.04l-1.362-.268Z"},null,8,fo)])}var ho={name:"vscode-icons-file-type-cypress-spec",render:bo,data(){const n=()=>Math.random().toString(36).substr(2,10);return{idMap:{svgIDa:"uicons-"+n(),svgIDb:"uicons-"+n()}}}};const go={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_o=In('<path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"></path><path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"></path><path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"></path><path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"></path><path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"></path><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"></path>',6),vo=[_o];function yo(n,e){return O(),C("svg",go,vo)}var ko={name:"vscode-icons-file-type-css",render:yo};const jo={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},To=_("path",{fill:"#cd6799",d:"M16.171 18.7c-.481.221-1.008.509-2.063 1.088c-.4.225-.818.45-1.207.662c-.027-.027-.055-.061-.082-.089c-2.087-2.23-5.947-3.805-5.783-6.8c.061-1.091.436-3.955 7.413-7.433c5.742-2.83 10.311-2.046 11.1-.307c1.134 2.479-2.449 7.092-8.379 7.761a4.469 4.469 0 0 1-3.751-.948c-.314-.341-.361-.361-.477-.293c-.191.1-.068.409 0 .586a3.5 3.5 0 0 0 2.141 1.684a11.4 11.4 0 0 0 6.956-.689c3.594-1.391 6.4-5.258 5.578-8.5c-.825-3.287-6.281-4.371-11.443-2.537a26 26 0 0 0-8.79 5.047c-2.844 2.66-3.294 4.972-3.11 5.94c.662 3.437 5.4 5.674 7.3 7.331c-.1.055-.184.1-.259.143c-.948.471-4.562 2.36-5.463 4.358c-1.023 2.264.164 3.887.948 4.105a5.832 5.832 0 0 0 6.281-2.544a6.3 6.3 0 0 0 .559-5.8a5.03 5.03 0 0 1 .716-.477c.484-.286.945-.568 1.354-.786a10.475 10.475 0 0 1 4.475-.989c3.246.382 3.887 2.407 3.764 3.26a2.157 2.157 0 0 1-1.03 1.459c-.225.143-.3.191-.28.293c.027.15.136.143.327.116a2.535 2.535 0 0 0 1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753 7.753 0 0 0-2.946.587q-.225.093-.437.2Zm-4.825 7.839c-1.078 1.173-2.578 1.616-3.226 1.241c-.7-.4-.423-2.135.9-3.376a17.18 17.18 0 0 1 2.53-1.889c.157-.1.389-.232.668-.4l.075-.041l.164-.1a4.658 4.658 0 0 1-1.111 4.565Z"},null,-1),xo=[To];function Eo(n,e){return O(),C("svg",jo,xo)}var Ao={name:"vscode-icons-file-type-scss",render:Eo};const wo={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Io=_("path",{fill:"#41b883",d:"M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"},null,-1),Po=_("path",{fill:"#41b883",d:"m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"},null,-1),Ro=_("path",{fill:"#35495e",d:"M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"},null,-1),No=[Io,Po,Ro];function Do(n,e){return O(),C("svg",wo,No)}var J0={name:"vscode-icons-file-type-vue",render:Do};const Lo={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Oo=_("path",{fill:"#dd3735",d:"M29.989 15.267c-.009-.359-.028-.728-.047-1.087s-.028-.737-.066-1.106c-.066-.5-.132-1.011-.246-1.5a8.561 8.561 0 0 0-.369-1.181a14.217 14.217 0 0 0-.586-1.352a20.887 20.887 0 0 0-1.3-1.976c-.293-.416-.671-.756-.955-1.181a2.915 2.915 0 0 0-.633-.643c-.378-.3-.775-.577-1.172-.841a10.663 10.663 0 0 0-.926-.586c-.255-.142-.529-.255-.794-.378a4.041 4.041 0 0 0-.936-.378a2.453 2.453 0 0 1-.246-.076c-.217-.076-.425-.161-.643-.227c-.331-.1-.652-.227-.992-.312a9.066 9.066 0 0 0-1.011-.189c-.378-.057-.766-.076-1.144-.113c-.246-.028-.492-.057-.728-.066c-.359-.019-.728-.019-1.087-.028a5.338 5.338 0 0 0-.548-.019a8.068 8.068 0 0 0-.822.076c-.265.028-.529.076-.785.113c-.312.038-.624.057-.936.095c-.293.038-.6.095-.888.142c-.1.019-.208.057-.312.076a5.99 5.99 0 0 0-.69.142c-.406.123-.813.265-1.21.416a11.136 11.136 0 0 0-1.077.5c-.359.2-.7.435-1.04.662c-.321.217-.643.444-.955.69a11.037 11.037 0 0 0-.86.766c-.151.151-.274.331-.416.5c-.236.274-.473.539-.7.822c-.189.236-.359.482-.539.728a12.061 12.061 0 0 0-.851 1.361c-.1.189-.2.378-.293.567c-.142.284-.293.558-.425.851a3.6 3.6 0 0 0-.227.633c-.132.463-.265.936-.388 1.4A5.291 5.291 0 0 0 2 13.84a8.961 8.961 0 0 0 .066 1.125c.009.094-.047.208.066.284c.009 0 0 .038-.01.047a.092.092 0 0 0 .038.124l.019.008a.033.033 0 0 1 .009.019h-.045c-.028.085.066.151.028.246c-.009.019.028.057.047.085a.318.318 0 0 0 0 .094a2.184 2.184 0 0 1 .047.265c0 .066.057.142.076.208a.11.11 0 0 1-.019.094c-.057.066-.047.123.038.161a.109.109 0 0 1 .047.066a1.071 1.071 0 0 1-.028.17c.019.019.028.038.019.057s-.028.057-.019.076a1.248 1.248 0 0 1 .113.491a.362.362 0 0 0 .038.123a.141.141 0 0 1 .057.009l-.057.17a.792.792 0 0 1 .132-.057a2.936 2.936 0 0 0 .095.34a.162.162 0 0 0 .057.057c-.01.019-.01.057-.028.066a2.87 2.87 0 0 0 .123.492c.01 0 .019-.01.028-.01c-.028-.17-.047-.35-.076-.52v-.057a.1.1 0 0 1 .028-.01a.657.657 0 0 1 .028.113c.076 0 .189.047.265.047a.882.882 0 0 1 .028-.085c-.057-.057-.1-.142-.161-.2a.291.291 0 0 1 0 .132c-.038-.019-.085-.038-.132-.057a1.678 1.678 0 0 1 .132-.151c0-.085-.047-.161-.18-.151c.057-.019.114-.047.18-.066a.653.653 0 0 0 .028.076c.076-.132-.038-.236-.038-.369a2.454 2.454 0 0 0-.113-.492c-.047-.265-.038-.662-.066-.926c0-.019-.028-.038-.047-.057c-.01.01-.057.132-.066.142c.028.227.057.454.076.681c-.009 0-.019 0-.019.009c-.038-.2-.076-.406-.123-.633a1.094 1.094 0 0 0-.019.132c-.028-.009-.038-.019-.085-.038c.038.085.076.142.1.208a.309.309 0 0 0-.142-.019v.265a1.28 1.28 0 0 1-.17-.236c-.019-.076-.028-.151-.047-.227l.028-.01a.511.511 0 0 1-.028-.094q-.014-.1-.028-.227c.009-.009.047-.019.066-.038l-.076-.113a1.545 1.545 0 0 0 .17.019c0-.019.009-.028 0-.038c-.095-.085-.028-.161.009-.236c.019-.038.085-.047.1-.085c.076-.142.2-.255.2-.435a2.561 2.561 0 0 1 .038-.265c.019-.161.038-.321.047-.482a4.357 4.357 0 0 1 .056-.61a11.167 11.167 0 0 1 .529-1.692a10.991 10.991 0 0 1 .454-1.087c.255-.51.548-1 .832-1.5c.18-.312.369-.6.567-.907a9.139 9.139 0 0 1 .6-.87a7.667 7.667 0 0 1 1-1.068c.378-.34.737-.69 1.144-1A11.566 11.566 0 0 1 9.7 4.342a12.8 12.8 0 0 1 1.489-.642c.321-.123.671-.179 1-.284a3.981 3.981 0 0 1 1.153-.189c.255-.009.5-.038.756-.066c.227-.019.454-.038.7-.066a.417.417 0 0 0-.047.076c-.1.151-.217.3-.321.454c-.085.123-.18.255-.265.378c-.151.2-.312.4-.454.6c-.217.312-.416.633-.643.945s-.473.586-.709.879c-.312.406-.6.822-.917 1.229c-.284.388-.586.756-.86 1.144c-.246.34-.463.7-.7 1.049c-.35.52-.7 1.03-1.049 1.55c-.274.4-.548.785-.832 1.182a.227.227 0 0 1-.076.057c-.019.019-.057.038-.057.057a1.088 1.088 0 0 1-.047.189c-.076.142-.151.284-.236.416c-.047.076-.113.142-.17.217c-.019-.009-.028-.019-.047-.019c.038-.095.2-.151.123-.293c-.047.076-.095.142-.142.217l-.113.227c.038.028.1.047.038.1c-.028.047-.057.1-.085.151c.01 0 .01.009.019.009c.028-.038.057-.066.085-.1c.009 0 .019.01.028.01a1.385 1.385 0 0 1-.132.265a.761.761 0 0 1-.2.189c.01.009.076.038.085.047c.028-.038.038-.019.066-.057c.019.028.047-.019.057.009a.441.441 0 0 0 .066-.094a.343.343 0 0 1 .189-.208a.37.37 0 0 0 .1-.07c.284-.293.577-.577.832-.888c.4-.482.756-.983 1.134-1.475c.161-.208.35-.416.52-.614c.019.01.038.01.047.019c-.019.2-.038.406-.047.6c-.028.35-.047.7-.076 1.059c-.009.142 0 .284-.009.425c0 .038-.028.066-.028.1c0 .094.028.2.028.293c-.028.35-.066.69-.095 1.04a.561.561 0 0 0 .047.217a.262.262 0 0 0-.047-.038a10.386 10.386 0 0 1 .019 1.626c.038-.01.057-.019.057-.038a1.441 1.441 0 0 0 .028-.2a1.13 1.13 0 0 0 0-.18v-.094a3.188 3.188 0 0 0 .028-.52a1.776 1.776 0 0 1 .019-.548c.019-.076-.009-.17.038-.265v.142a13.228 13.228 0 0 1-.066 1.616c-.009.047.028.132-.076.123c-.01 0-.019.047-.038.076c-.047.094.057.217-.038.312c-.019.019.019.1.028.161c0 .019.01.038 0 .047c-.038.066-.038.066.019.076c.01.208.028.4.038.6h.026a7.062 7.062 0 0 0 .113-1.1a3.744 3.744 0 0 1 .01.463c0 .246-.01.482-.019.728a.733.733 0 0 1-.019.142a2.56 2.56 0 0 1-.085.388a1.063 1.063 0 0 0-.019.35v.357c0 .01.028.038.028.076c.009.085-.038.17-.01.265c.01.019-.009.047-.019.066a.134.134 0 0 0-.009.085l.028.142c0 .009.01.019.019.038a.3.3 0 0 0 .01-.076c.161.019.076.161.151.236c-.038.019-.066.028-.066.038a.424.424 0 0 1 .028.1a2.163 2.163 0 0 1-.019.246c0 .217-.01.435-.01.643c0 .028.01.057.01.085s-.01.038-.01.066v.2h.038a.522.522 0 0 1-.066.085c-.009 0-.038 0-.038-.009V20h-.139a9.966 9.966 0 0 1-.076 1.607a2.426 2.426 0 0 1-.274.028c-.293 0-.586 0-.879.009c-.35 0-.69.01-1.04.01c-.17 0-.35.019-.52.019c-.227 0-.463-.028-.69-.028c-.35 0-.69.028-1.04.038c-.255.009-.51.009-.766.019c-.17.009-.34.019-.51.038a1.541 1.541 0 0 0-.236.066a.8.8 0 0 0-.151 0c-.095.019-.18.076-.274.095c-.142.028-.18.066-.161.208v.094a.283.283 0 0 0-.066-.047a.033.033 0 0 0-.019.009c.009.028.028.047.038.076c.038-.019.085-.066.123-.066h.132c-.019 0-.028.057-.057.1c.076-.028.123-.047.17-.066a.268.268 0 0 1 .009.076a1.238 1.238 0 0 1 .369-.019a7.511 7.511 0 0 0 1.125.17c.246.019.482.028.728.038c.35.019.7.038 1.049.038c.293 0 .577-.028.87-.028c.406 0 .813.019 1.219.028c.085 0 .18-.01.274-.01h.69c.614-.019 1.229-.028 1.843-.047c.35-.009.709-.028 1.059-.038l1.077-.028c.416-.009.832-.009 1.238-.019c.312 0 .614-.009.926-.019c.35-.01.709-.038 1.059-.057c.189-.009.378-.028.567-.047c.227-.019.463-.047.69-.057c.34-.019.69-.028 1.03-.047c.425-.028.851-.066 1.285-.076c.4-.019.8-.009 1.2-.019c.35-.009.7-.028 1.059-.038l.6-.028s.4-.009.6-.028c.34-.019.681-.057 1.021-.066c.217-.009.435 0 .652-.009c.35-.01.709-.028 1.059-.028c.132 0 .274.019.444.028c-.076.066-.123.1-.18.151a.588.588 0 0 1 .113.047c0 .01-.009.019-.009.038c-.047 0-.094.01-.142.01a.6.6 0 0 0-.057.161h.17c-.066 0-.123.085-.189.142c.01.009.019.009.028.019c-.1-.038-.17-.019-.208.085a.209.209 0 0 0 .076.009c-.009.028-.019.057-.028.094a.137.137 0 0 0-.019.066l-.028-.028a.121.121 0 0 0-.009-.057c-.057.057-.142.095-.095.217c-.038.019-.085.038-.132.066a.413.413 0 0 1 .038.066c-.085.009-.17.028-.151.132a.642.642 0 0 1 .1.038c-.047.019-.094.047-.142.066c-.01.019-.019.066-.038.076c-.132.028-.057.076-.019.123a.38.38 0 0 1-.085.047a.153.153 0 0 1 .066.038a.563.563 0 0 1-.066.038a.312.312 0 0 0 .057.028q-.057.042-.142.113a.086.086 0 0 0 .009.047a.827.827 0 0 0-.113.132a1.861 1.861 0 0 1-.1.189a3.488 3.488 0 0 1-.6.643a2.062 2.062 0 0 0-.265.236c-.17.161-.321.34-.5.492c-.236.2-.482.378-.737.558c-.312.217-.624.435-.936.643c-.17.113-.359.2-.539.3s-.35.2-.529.3a2.732 2.732 0 0 1-.34.236c-.312.132-.643.246-.964.369c-.028.009-.047.019-.076.028c-.236.1-.463.217-.7.3a5.4 5.4 0 0 1-.671.18a2.042 2.042 0 0 1-.246.009c-.161.028-.321.066-.482.085c-.416.057-.832.094-1.248.151c-.246.028-.482.076-.728.1c-.17.01-.35-.009-.52-.009a2.524 2.524 0 0 1-.378.009c-.2-.028-.4-.076-.6-.113a.281.281 0 0 0-.151-.009c-.076.038-.142-.019-.217 0c-.047.009-.094-.028-.142-.028a.647.647 0 0 1-.132 0a.868.868 0 0 0-.312-.057a1.225 1.225 0 0 1-.35-.076l-.5-.113a.833.833 0 0 1-.189-.085a.18.18 0 0 1-.085.028a2.61 2.61 0 0 1-.473-.094a.846.846 0 0 0-.4-.094c-.038.009-.066-.01-.1-.01c-.028-.038-.057-.113-.085-.113c-.189.01-.3-.151-.463-.2c-.085-.028-.151-.123-.236-.151c-.208-.085-.378-.265-.614-.293a1.355 1.355 0 0 1-.236-.076a.832.832 0 0 0 .076.095l-.019.019c-.255-.151-.51-.3-.766-.444c-.038-.01-.066-.047-.095-.066l-.255-.17c-.028-.019-.085-.047-.085-.038c-.057.066-.113.01-.151-.009c-.255-.18-.548-.293-.794-.492a1.557 1.557 0 0 1-.3-.246a1.489 1.489 0 0 0-.473-.369c-.142-.076-.274-.161-.406-.246a.251.251 0 0 1-.132-.208c0-.066-.028-.132-.113-.094c-.038-.057-.076-.123-.123-.142a1 1 0 0 1-.274-.208c-.085-.076-.151-.18-.255-.217a1.129 1.129 0 0 1-.416-.369c-.265-.312-.5-.652-.747-.983a.681.681 0 0 0-.085-.076l-.01.01c.047.094.095.18.142.274c-.01.009-.028.019-.038.028c-.057-.066-.123-.132-.18-.2c-.01.01-.019.019-.028.019l.673 1.097c.057.085.1.17.161.255a.128.128 0 0 1-.038.028a.372.372 0 0 1-.246-.18a.351.351 0 0 0-.369-.227a1.635 1.635 0 0 1-.047-.208a.776.776 0 0 1-.132-.009c.132.208.246.388.369.6L5 24.345c.17.18.293.406.51.52c.047.217.293.321.35.529l-.132-.028c-.076-.094-.161-.189-.246-.293a.48.48 0 0 0 .085.17a3.606 3.606 0 0 0 .35.406c.047.047.113.066.113.151a.263.263 0 0 1 .076-.047a.591.591 0 0 0-.038.085c.038 0 .066.009.095.009c.019.057-.01.142.1.123c.01 0 .019.009.028.019c.047.123.123.123.227.076a.073.073 0 0 1 .076.019c.047.1.113.113.2.038c0 .047.009.094.009.132h.047c0-.019-.009-.047-.009-.094c.047.038.076.057.095.076a1.608 1.608 0 0 0 .312.359c.18.151.34.312.51.454a7.216 7.216 0 0 0 1.068.709c.454.255.888.529 1.352.775a7.3 7.3 0 0 0 1.768.633c.227.047.444.094.671.151c.2.057.4.142.6.189c.3.066.614.123.917.18l.208.028v.019c.085 0 .189-.038.208-.01c.047.076.085.038.142.028a.81.81 0 0 1 .217-.019a7.287 7.287 0 0 0 .785.047c.057 0 .142-.047.189.047c.019-.01.028-.019.047-.028c.038-.01.085-.01.123-.019v.021a.438.438 0 0 1-.076.019a.756.756 0 0 1 .1.028a.125.125 0 0 1-.047.028a.414.414 0 0 0-.085.047a2.122 2.122 0 0 0 .945 0v-.057h.038a.135.135 0 0 0 .019.057a3.024 3.024 0 0 0 1.267-.161c.038.047.066.113.123.019c.019-.028.066-.038.1-.047a.52.52 0 0 1 .263-.033c.085.028.113-.047.18-.047a1.765 1.765 0 0 0 .321-.028a1.821 1.821 0 0 0 .18-.057a.035.035 0 0 0-.009-.028a1.563 1.563 0 0 0-.2-.019c.113-.057.217-.1.321-.151c0 .009.01.009.01.019c-.028.009-.047.047-.085.047h.132c-.028 0-.066.085-.113.142l.955-.236v-.022c-.038.009-.066.009-.095.019c-.009-.2.208-.132.284-.246c-.095.028-.189.057-.284.076v-.019c.321-.142.652-.284.974-.425c0 .01.01.01.01.019c-.057.038-.113.066-.2.113a1.189 1.189 0 0 1 .123.019c0 .028 0 .047-.009.057c.161-.01.123-.151.17-.236a.179.179 0 0 0 .095.019a2.451 2.451 0 0 0 .246-.076c.095-.028.189-.057.284-.095c.151-.066.293-.151.444-.227a.456.456 0 0 1 .113 0a.1.1 0 0 0 .066-.038c.038-.028.076-.085.1-.076a.214.214 0 0 0 .264-.148c.01 0 .01-.01.019-.01a1.375 1.375 0 0 1 .142-.1c.208-.113.406-.227.614-.34c.009-.009.028 0 .047 0a.235.235 0 0 0 .085-.009c.123-.057.236-.123.35-.189c-.028-.01 0-.019-.094-.028v-.02a1.161 1.161 0 0 0 .18-.047l-.019-.019c.246-.246.558-.425.794-.633a.546.546 0 0 0 .095.019a.233.233 0 0 0 .01-.076a.876.876 0 0 1 .123-.142c.208-.189.435-.35.624-.548c.274-.274.539-.558.785-.851a7.692 7.692 0 0 0 .643-.822c.265-.406.492-.822.728-1.248c.17-.3.321-.6.492-.907c.019-.028.057-.066.085-.066c.255-.028.51-.047.756-.076a.73.73 0 0 0 .18-.076c-.028-.047-.047-.1-.076-.151s-.094-.1-.132-.161a.908.908 0 0 1-.095-.161c-.028-.047-.057-.085-.085-.132a3.412 3.412 0 0 1-.161-.321a.2.2 0 0 1-.019-.1c.17-.369.236-.766.4-1.134a5.787 5.787 0 0 0 .284-1.21c.066-.388.1-.775.151-1.163c.028-.274.066-.539.076-.813a7.947 7.947 0 0 0 .028-1.248ZM6.226 25.816c-.066-.076-.123-.161-.189-.236l.028-.028c.1.114.208.227.312.35a.455.455 0 0 1-.151-.085Zm.151.085c.028-.009.057-.009.085-.019c.028.047.047.1.076.161c-.132-.009-.2-.066-.161-.143Zm9.83 3.9v-.024l.529-.057v.028a5.025 5.025 0 0 1-.529.057Zm2.382-.246c-.132.028-.274.047-.406.066c-.047.01-.1.057-.123-.028c-.019.009-.038.009-.057.019c.047.142.161.028.255.085c-.208.028-.406.047-.6.076v-.019l.18-.028V29.7a2.84 2.84 0 0 0-.284-.019c-.028 0-.066.038-.094.047a.482.482 0 0 1-.123.019c-.161.009-.321.009-.473.019c-.009 0-.028-.01-.038-.01v-.028l1.89-.255c.009.019.009.038.019.057a.63.63 0 0 0-.142.028Zm.142-.095c.217-.028.416-.047.624-.076c-.435.123-.577.142-.624.076ZM10.5 10.381c.3-.416.614-.832.917-1.257c.094-.123.17-.255.265-.378a.6.6 0 0 1 .113-.095l-.01-.019a.865.865 0 0 0 .094-.123a1.936 1.936 0 0 0 .113-.246a.133.133 0 0 1 .038-.038c.132.066.132-.076.18-.123c.085-.094.17-.2.246-.293a1.957 1.957 0 0 0 .161-.227c.009-.028-.019-.076-.028-.113h-.028c.028-.019.057-.047.085-.066c.01 0 .01 0 .019-.009c.057-.085.113-.17.17-.246a4.067 4.067 0 0 1 .369-.435c-.019.047-.038.095-.057.132c.009 0 .009.01.019.01c.113-.151.236-.293.35-.444c-.01-.009-.019-.019-.028-.019c-.047.047-.085.094-.132.142c-.01-.009-.019-.019-.028-.019c.095-.123.189-.246.284-.388a1.45 1.45 0 0 1 .076.142c.038-.095.076-.161.1-.227c-.028.028-.066.057-.094.085l-.029-.03l.17-.255c.18-.255.359-.52.539-.775c.066-.095.151-.17.208-.265a9.984 9.984 0 0 1 .681-.974a1.546 1.546 0 0 1 .17-.18c.047-.057.085-.038.123.01c.255.321.51.652.766.974c.189.236.378.463.558.709c.217.3.425.6.643.907c.246.35.492.7.728 1.059c.359.529.7 1.059 1.059 1.588c.265.388.529.766.785 1.153h-.482c-.444-.01-.9-.047-1.342-.028c-.6.028-1.219.094-1.824.142c-.766.066-1.541.076-2.306.076c-.274 0-.548.038-.822.057c-.331.019-.652.038-.983.047c-.388.019-.766.028-1.153.038c-.217.01-.444 0-.681 0Zm10.84 4.348v.085c-.009 0-.019.009-.038.009c-.038-.132-.076-.274-.123-.406a3.189 3.189 0 0 0-.369-.794c-.189-.265-.359-.539-.548-.813a1.528 1.528 0 0 0-.17-.18a3.306 3.306 0 0 0-.652-.6a7.738 7.738 0 0 0-1.182-.6a2.743 2.743 0 0 1-.331-.17h.227l1.616-.028c.35-.01.69-.01 1.04-.028a.186.186 0 0 1 .18.1c.085.142.17.283.265.425a.179.179 0 0 1 .028.076c0 .208 0 .425.009.633s.028.425.038.643s-.019.444-.01.671c.01.321.019.652.019.983Zm-10.17-3.167c.444-.019.87-.047 1.3-.066c.34-.019.69-.028 1.03-.047a2.033 2.033 0 0 1 .416 0a3.217 3.217 0 0 0-.435.246c-.17.113-.331.265-.5.388a2.872 2.872 0 0 0-.463.435c-.18.217-.378.406-.567.614a5.933 5.933 0 0 0-.4.454c-.161.208-.3.435-.454.671c.047-.9.1-1.786.066-2.694Zm6.172 9.093a7.7 7.7 0 0 1-.926.2a5.787 5.787 0 0 1-.813.028c-.246 0-.482-.009-.728-.028a2.467 2.467 0 0 1-.813-.18c-.227-.1-.463-.2-.69-.312a1.827 1.827 0 0 1-.624-.454a3.659 3.659 0 0 0-.448-.409a.446.446 0 0 0 .2.274c-.047.057-.113.028-.208-.123a.559.559 0 0 1-.076.038c.028-.066.057-.132.085-.189c-.038-.076-.085-.161-.123-.236a7.303 7.303 0 0 1-.217-.378c-.019-.028-.019-.057-.038-.085a2.061 2.061 0 0 1-.132-.17a3.811 3.811 0 0 0-.236-.35c0 .028.009.057.009.094a.033.033 0 0 0-.019.009l-.2-.482c-.01 0-.01 0-.019.01l.17.624c-.01 0-.019.01-.028.01a.539.539 0 0 1-.076-.123c-.019-.076-.076-.076-.123-.047a.13.13 0 0 0-.038.113c.066.161.142.321.217.482a1.164 1.164 0 0 0 .066.161c.01.019.038.038.038.066a1.581 1.581 0 0 0 .113.217c.085.113.18.227.265.34s.161.236.236.35c.01.019.038.019.047.028c.047.142.208.246.321.189c.028.217.265.293.359.5a3.838 3.838 0 0 1-.274-.123c-.009.01-.009.019-.019.038a3.662 3.662 0 0 1 .331.18a2.719 2.719 0 0 1 .274.18a.866.866 0 0 0 .407.2a.1.1 0 0 0-.019-.038c.265.123.539.255.747.359c-.983.019-2.032.038-3.119.057c0-.18-.009-.35-.009-.529a1.662 1.662 0 0 0 .009-.217c-.028-.435-.028-.87-.085-1.295a9.217 9.217 0 0 1-.047-1.352c.009-.246-.01-.5-.019-.747c0-.331 0-.652.009-.983a.35.35 0 0 1 .038-.132h.028c.009.019 0 .047.019.057c.028.028.076.076.095.066c.057-.038.142-.076.161-.132a.918.918 0 0 0 .066-.35a.34.34 0 0 1 .076-.2a.871.871 0 0 0 .047-.094c-.038-.028-.076-.047-.123-.085c.038-.1.028-.227.17-.284c.019-.01.019-.057.028-.085l.028-.236a.3.3 0 0 0 .047.057a.118.118 0 0 1 .019-.028c0-.038-.009-.113 0-.113c.113-.019.066-.142.123-.2c.009-.009-.01-.038-.01-.057s0-.047.01-.047c.132-.028.113-.17.2-.236c.028-.019.038-.047.076-.094c.076.132-.057.2-.066.293c.161-.095.208-.321.113-.388a.541.541 0 0 0 .1-.1c.1-.113.217-.217.312-.331c.066-.085.1-.189.17-.274a.537.537 0 0 1 .17-.113a1.156 1.156 0 0 0 .435-.359a.518.518 0 0 1 .076-.057c.028-.019.085-.019.094-.047s-.019-.066-.038-.094c.038-.019.076-.057.151-.094c-.028.057-.038.094-.057.132l.047.047c.085-.066.217-.142.3-.2c0-.009-.047-.047-.047-.047c-.057.028-.142.076-.227.113c.019-.028.019-.047.028-.057a3.5 3.5 0 0 1 .406-.236c.331-.151.662-.3.992-.444a.463.463 0 0 1 .2-.009a.21.21 0 0 0 .076-.009c.151-.047.3-.094.454-.132a.786.786 0 0 1 .208-.028c.284.009.567.009.851.028a1.443 1.443 0 0 1 .35.076a3.367 3.367 0 0 1 .425.18a4.675 4.675 0 0 1 .463.284c.274.18.529.378.8.539a2.131 2.131 0 0 1 .643.624a2.9 2.9 0 0 1 .539.917l.142.624a.763.763 0 0 1 .066.359c-.047.236-.085.482-.123.718a.965.965 0 0 0-.028.283a1.761 1.761 0 0 1-.208.813c-.038.085-.095.17-.142.265a.284.284 0 0 0 .076.038l.085-.17c.009 0 .009 0 .019.01c-.047.132-.085.274-.132.406a9.426 9.426 0 0 1-.369.879a4.609 4.609 0 0 1-.3.444c-.095.132-.17.274-.265.4a1.343 1.343 0 0 1-.283.284a7.263 7.263 0 0 1-.794.529a1.987 1.987 0 0 1-.558.208Zm-5.038-.5l-.009.009a.238.238 0 0 1-.066-.038l-.229-.34a.11.11 0 0 1-.019-.095c.1.161.208.312.321.463Zm5.879 1.295a3.825 3.825 0 0 0 1.1-.728a1.012 1.012 0 0 1 .151-.132a3.315 3.315 0 0 0 .955-.964a13.11 13.11 0 0 0 .747-1.389a1.025 1.025 0 0 1 .057-.1a21.422 21.422 0 0 0 .246 3.2l-3.252.113Zm9.585-.283c-.01.019-.028.038-.038.057a.588.588 0 0 1-.019-.085c-.057.151-.18.076-.265.076c-.51.009-1.03.009-1.541.009c-.492 0-.992 0-1.484.01c-.161 0-.331.038-.492.047c-.388.019-.775.028-1.163.038c-.028 0-.057-.047-.1-.085a.625.625 0 0 1-.057.085a.738.738 0 0 0-.047-.066a.654.654 0 0 1-.028.076H22.5a2.735 2.735 0 0 1-.057-.388c0-.284.028-.567.038-.851c.009-.132 0-.255 0-.378l.1.076a.821.821 0 0 1 .057-.095a.162.162 0 0 1-.038-.028c.019-.009.038-.028.038-.038a.386.386 0 0 0 .028-.076a1.015 1.015 0 0 0-.028-.18a.035.035 0 0 0 .028-.009l.057.283h.028c-.038-.066.085-.123-.019-.2c-.009-.009.01-.066.01-.094a1.986 1.986 0 0 1-.076-.189a.227.227 0 0 1 .066-.028a.882.882 0 0 0-.094-.047c.094-.085.094-.132.01-.227c.019-.009.038-.009.038-.019a1.161 1.161 0 0 0-.019-.255c-.019-.094.028-.208-.113-.265a.284.284 0 0 0 .038.076a.267.267 0 0 0-.057.028c-.123-.113-.047-.265-.076-.435a1.554 1.554 0 0 1 .161.057c-.019-.066-.066-.142-.094-.227h-.038v-.62c0 .009.066.009.1.019c0-.009.009-.019.009-.028c-.028-.038-.066-.076-.1-.123l.019-.019a.337.337 0 0 1-.038-.255v-.662c.094.094-.047.217.094.274v-.1h-.009c-.01-.142-.01-.284-.019-.425h-.019c-.009.019-.009.028-.019.047h-.019l.057-2.259a2.92 2.92 0 0 1 .265.359a9.866 9.866 0 0 0 .766 1.1c.227.312.435.652.643.974c.255.388.5.775.756 1.163c.189.293.388.586.586.87c.18.255.369.5.558.747c.161.217.331.435.491.652c.189.265.378.529.567.785c.094.132.2.265.3.4a1.134 1.134 0 0 0 .2.18a.071.071 0 0 1-.038-.01a.906.906 0 0 0 .066.085c.1.057.113.113.057.2Zm.482-2.367v-.066c0 .023.009.051 0 .066Zm.321-4.168a.476.476 0 0 1-.076-.066c-.01.028 0 .057-.019.094c-.009-.028-.076-.019-.076-.047c-.01.132.057.265.047.4c.028-.019.142-.028.17-.057a.071.071 0 0 0 .038.019c-.189.142-.142.284-.057.444c.019.038.076.113.019.189c-.019.019.01.076.019.123h.028v.019l-.085.028c-.019-.028-.132-.085-.132-.132v.482c.094.028.094.161.132.227a.284.284 0 0 0 .038-.076l.01.009a1.1 1.1 0 0 1-.038.17a2.236 2.236 0 0 0-.047.246c0 .009.019.028.019.038a2.831 2.831 0 0 0-.085.747c-.028.18 0 .369-.019.558a4.492 4.492 0 0 1-.094.492c-.009.028-.028.038-.076.057a.76.76 0 0 0-.01-.293c-.009 0-.132-.066-.142-.066a3.178 3.178 0 0 0 .1.463c-.028-.009-.142-.076-.151-.076c-.019.113-.019.265-.028.388c-.01.094-.095.18-.1.284c0 .057.066.094.057.189h.076c0-.189.085-.359.085-.558h.026c.009.019.038.038.028.047a1.259 1.259 0 0 0-.047.321c0 .057.047.113.028.18a.923.923 0 0 0-.038.2a.537.537 0 0 1-.019-.094l-.1-.009c-.009.057.066.113.057.161c-.01.01-.019.01-.038.019l-.312-.454c-.246-.359-.492-.718-.737-1.087a2.256 2.256 0 0 1-.17-.284a13.339 13.339 0 0 0-.974-1.446c-.274-.35-.492-.728-.747-1.1c-.236-.35-.473-.69-.709-1.04c-.085-.113-.189-.217-.265-.34c-.246-.388-.463-.785-.709-1.172c-.208-.321-.435-.633-.652-.945c-.076-.1-.151-.217-.227-.331a.136.136 0 0 1-.019-.066c-.019-.208-.038-.416-.047-.614s.019-.378.019-.577v-.17c0-.047.009-.085.009-.132c.009-.01.019-.028.028-.038c-.274 0-.558-.009-.832 0a.46.46 0 0 1-.4-.2a15.674 15.674 0 0 1-.936-1.3c-.293-.416-.6-.822-.9-1.229c-.246-.331-.491-.652-.737-.983c-.274-.378-.539-.756-.822-1.134c-.34-.454-.69-.907-1.04-1.361c-.161-.208-.34-.406-.52-.624c.123.019.236.038.35.047l.454.028c.34.028.681.047 1.021.095c.284.038.567.095.86.142a12.131 12.131 0 0 1 1.834.473c.35.113.69.265 1.03.406A20.833 20.833 0 0 1 24.138 5.4a2.221 2.221 0 0 1 .529.5c.246.255.492.51.728.775c.274.312.529.633.794.955c.236.284.482.567.718.851a3.029 3.029 0 0 1 .2.284c.151.227.321.444.454.69a3.924 3.924 0 0 1 .217.586c.094.293.189.577.284.87c.066.217.123.444.17.671c.038.151.028.312.076.463c.057.2 0 .416.057.614l.028.066c.038.038.066.076.01.132a.1.1 0 0 0 0 .076a.4.4 0 0 0 .047-.066c0 .019.009.028.009.038a.458.458 0 0 0 0 .113a.2.2 0 0 0 .028.066a.762.762 0 0 1 .076-.057a3.746 3.746 0 0 1 .094.974a2.2 2.2 0 0 1-.076.926c.028-.1-.038-.2-.01-.293Z"},null,-1),Vo=_("path",{fill:"#dd3735",d:"M22.563 18.341a.033.033 0 0 1 .019.01l-.01-.01c0-.009 0-.009-.009 0Zm1.493 9.339a.888.888 0 0 1-.34.17c-.009-.009-.009-.019-.019-.028c.1-.066.217-.132.321-.2c.009.019.028.038.038.057ZM6.333 14.872c.1-.132.208-.265.321-.4c.009.009.085.028.095.038c-.1.132-.246.312-.35.454c-.019-.019-.047-.085-.066-.094ZM3.649 19.5c-.076-.161-.151-.331-.227-.492a.337.337 0 0 1 .085-.038a3.288 3.288 0 0 1 .227.492a.751.751 0 0 1-.085.038Zm2.41-4.537c-.057.085-.113.18-.17.265c-.009-.009-.113.038-.123.028c.057-.085.2-.236.255-.321a.128.128 0 0 0 .038.032Zm16.985 13.1c.01 0 .01-.01.019-.01a1.543 1.543 0 0 0 .217.019c-.123.089-.2.08-.236-.005Zm-16.966-12.7a.39.39 0 0 1 .047-.085a.194.194 0 0 0 .047-.009c.038-.066.038-.113.076-.17c-.009-.009-.019-.009-.028-.019c-.057.038-.113.085-.17.123a.052.052 0 0 1 .019.047c-.076-.009-.1.028-.142.132c-.01.028-.057.038-.1.076c-.009.019-.019.066-.038.113l.01.01a.14.14 0 0 1-.047.028c-.057.057-.123.1-.18.161a.274.274 0 0 0-.019.085c.066-.066.18-.189.265-.265l.009.009c.038-.057.066-.113.1-.17c.009.009.009.019.019.028l-.085.236c-.019.009-.047.028-.047.019c-.038.028-.066.066-.1.095l-.17.113c-.095.085-.189.161-.293.246c-.066.1-.132.2-.208.321c.113-.028.142.019.132.113c.132.019.142-.085.18-.161c.01-.019.019-.057.038-.066c.085-.076.18-.142.274-.217a.127.127 0 0 0 .019-.085c0-.009-.047-.009-.076-.019c.085-.095.208-.255.293-.359c.047-.028.097-.066.097-.093c-.01-.1.057-.132.132-.17a.1.1 0 0 1-.047-.066Z"},null,-1),So=_("path",{fill:"#dd3735",d:"M6.267 15.259c-.038.066-.076.123-.113.189L6.1 15.42a.562.562 0 0 1-.3.444a.158.158 0 0 0 .1.028c.028-.009.047-.057.066-.085l.255-.369l.079-.138l-.038-.038Zm-3.148 4.15c.047 0 .095.01.151.01c0-.038.047-.028.047-.066h.028c0 .047.01.085.01.132h-.2c-.01-.01-.047-.066-.038-.076Zm-.076-.435c-.028-.028-.076-.057-.076-.085a.324.324 0 0 1 .047-.132c.019.066.028.123.047.189c-.01.009-.019.019-.019.028Zm.236-.6c.038.095.076.2.113.293a.284.284 0 0 0-.076.038c-.038-.094-.085-.2-.123-.293a.233.233 0 0 1 .085-.038Zm21.04 9.036a1.574 1.574 0 0 1 .18-.047a2.23 2.23 0 0 0-.208.17c-.01-.01-.019-.019-.028-.019c.019-.038.038-.066.057-.1ZM12.7 7.433c.057-.038.1-.066.161-.1l.019.019c-.057.076-.1.151-.17.246c-.009-.066-.009-.1-.019-.151c-.009 0 0 0 .01-.009Zm2.769 4.783l.274-.123a.714.714 0 0 0-.01.132a.334.334 0 0 0-.095-.019c-.057.009-.161.085-.208.094c-.01 0 .038-.076.038-.085Zm7.089 8.015c.019.094.2.142.019.236c.028.019.057.028.085.047a.072.072 0 0 1-.019.038c-.019.01-.057.028-.076.019a.067.067 0 0 1-.028-.057c0-.085.01-.17.019-.284Z"},null,-1),Co=_("path",{fill:"#99b8c4",d:"m26.67 27.39l.579-.575c2.677.087 2.718-.006 2.836-.282l.735-1.79l.055-.17l-.06-.149c-.032-.078-.129-.312-1.8-1.906v-.838c1.929-1.858 1.887-1.953 1.778-2.225l-.732-1.809c-.11-.271-.152-.377-2.809-.3l-.579-.6a12.964 12.964 0 0 0-.091-2.64l-.075-.169L24.6 13.1c-.282-.129-.381-.175-2.186 1.791l-.811-.012c-1.859-1.984-1.947-1.948-2.225-1.835l-1.778.719c-.278.113-.377.152-.269 2.852l-.574.572c-2.676-.087-2.717.008-2.833.282l-.737 1.791l-.058.172l.06.149c.032.077.125.309 1.8 1.9v.836c-1.929 1.858-1.887 1.953-1.776 2.226l.732 1.811c.112.277.152.375 2.809.306l.579.6a13.014 13.014 0 0 0 .088 2.636l.075.17l1.924.841c.28.117.377.159 2.177-1.8l.811.01c1.861 1.986 1.956 1.948 2.228 1.838l1.774-.717c.275-.108.373-.147.26-2.848Zm-7.623-4.19a3.187 3.187 0 1 1 4.171 1.815a3.223 3.223 0 0 1-4.171-1.815Z"},null,-1),$o=[Oo,Vo,So,Co];function Fo(n,e){return O(),C("svg",Lo,$o)}var Mo={name:"vscode-icons-file-type-postcssconfig",render:Fo};const zo={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bo=_("path",{fill:"#44a8b3",d:"M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"},null,-1),Ho=[Bo];function qo(n,e){return O(),C("svg",zo,Ho)}var Zo={name:"vscode-icons-file-type-tailwind",render:qo};const Ko={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wo=_("path",{fill:"#ffe885",d:"M2 12.218c.755 0 1.51-.008 2.264 0l.053.038l2.761 2.758c.891-.906 1.8-1.794 2.7-2.7c.053-.052.11-.113.192-.1h1.823a1.4 1.4 0 0 1 .353.019c-.7.67-1.377 1.369-2.069 2.05L5.545 18.8c-.331.324-.648.663-.989.975c-.754.022-1.511.007-2.266.007c1.223-1.209 2.431-2.433 3.658-3.637c-1.321-1.304-2.63-2.62-3.948-3.927Zm10.7 0h1.839v7.566c-.611 0-1.222.012-1.832-.008v-4.994c-1.6 1.607-3.209 3.2-4.811 4.8c-.089.08-.166.217-.305.194c-.824-.006-1.649 0-2.474 0Q8.916 16 12.7 12.218Zm2.258.002c.47-.009.939 0 1.409 0c.836.853 1.69 1.689 2.536 2.532q1.268-1.267 2.539-2.532h1.4q-.008 3.784 0 7.567c-.471 0-.943.006-1.414 0q.008-2.387 0-4.773c-.844.843-1.676 1.7-2.526 2.536c-.856-.835-1.687-1.695-2.532-2.541c0 1.594-.006 3.188.006 4.781c-.472 0-.943.005-1.415 0q-.003-3.79-.003-7.57Zm8.301-.003c.472 0 .944-.007 1.416 0q-.007 3.083 0 6.166h3.782c.063.006.144-.012.191.045c.448.454.907.9 1.353 1.354q-3.371.007-6.741 0q.007-3.782-.001-7.565Z"},null,-1),Uo=[Wo];function Go(n,e){return O(),C("svg",Ko,Uo)}var Yo={name:"vscode-icons-file-type-yaml",render:Go};const Qo={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xo=In('<path fill="#56b3b4" d="M21.714 8.571h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#ea5e5e" d="M4.571 26.857h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572Z"></path><path fill="#bf85bf" d="M18.286 17.714h3.429a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-3.429a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#ea5e5e" d="M11.429 17.714H16a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#56b3b4" d="M4.571 17.714h4.572a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572Z"></path><path fill="#bf85bf" d="M4.571 22.286h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 22.857a.571.571 0 0 1 .571-.571Zm0-9.143h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 13.714a.571.571 0 0 1 .571-.571Z"></path><path fill="#f7ba3e" d="M10.286 6.286h11.428a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H10.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#ea5e5e" d="M4.571 6.286H8a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.572H4.571A.571.571 0 0 1 4 6.857a.571.571 0 0 1 .571-.571Z"></path><path fill="#f7ba3e" d="M9.143 24.571h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H9.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#56b3b4" d="M9.143 10.857h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H9.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571ZM4.571 24.571h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572Z"></path><path fill="#f7ba3e" d="M4.571 10.857h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.572H4.571A.571.571 0 0 1 4 11.429a.571.571 0 0 1 .571-.572Z"></path><path fill="#4d616e" d="M19.429 24.571h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm-6.858 0h4.571a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572Zm10.286 0h4.571a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z" opacity=".5"></path><path fill="#56b3b4" d="M13.714 15.429h9.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-9.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#f7ba3e" d="M8 15.429h3.429A.571.571 0 0 1 12 16a.571.571 0 0 1-.571.571H8A.571.571 0 0 1 7.429 16A.571.571 0 0 1 8 15.429Z"></path><path fill="#ea5e5e" d="M4.571 15.429h1.143a.571.571 0 0 1 .572.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 16a.571.571 0 0 1 .571-.571Z"></path><path fill="#bf85bf" d="M14.857 8.571h4.571a.571.571 0 0 1 .572.572a.571.571 0 0 1-.571.571h-4.572a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572Z"></path><path fill="#56b3b4" d="M4.571 8.571h8a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-8A.571.571 0 0 1 4 9.143a.571.571 0 0 1 .571-.572Z"></path><path fill="#f7ba3e" d="M8 20h10.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H8a.571.571 0 0 1-.571-.571A.571.571 0 0 1 8 20Z"></path><path fill="#bf85bf" d="M4.571 20h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 20.571A.571.571 0 0 1 4.571 20Z"></path><path fill="#ea5e5e" d="M18.286 10.857H24a.571.571 0 0 1 .571.571A.571.571 0 0 1 24 12h-5.714a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572Z"></path><path fill="#f7ba3e" d="M18.286 13.143H24a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-5.714a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z"></path><path fill="#56b3b4" d="M4.571 4h13.715a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 4.571A.571.571 0 0 1 4.571 4Z"></path><path fill="#4d616e" d="M20.571 4h6.857a.571.571 0 0 1 .572.571a.571.571 0 0 1-.571.571h-6.858A.571.571 0 0 1 20 4.571A.571.571 0 0 1 20.571 4Zm0 16h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm4.572 0h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571ZM24 17.714h3.429a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H24a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm0-11.428h3.429a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H24a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm1.143 9.143h2.286A.571.571 0 0 1 28 16a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.572-.571a.571.571 0 0 1 .572-.571Zm0-6.858h2.286a.571.571 0 0 1 .571.572a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572Zm1.143 2.286h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm0 2.286h1.143a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm-9.143 9.143h10.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571H17.143a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm-4.572 0h2.286a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm9.143 4.571h5.714a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-5.714a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Zm-9.143 0h6.857a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-6.857a.571.571 0 0 1-.571-.57a.571.571 0 0 1 .571-.572Zm0-16H16a.571.571 0 0 1 .571.571A.571.571 0 0 1 16 12h-3.429a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.572Zm0 2.286H16a.571.571 0 0 1 .571.571a.571.571 0 0 1-.571.571h-3.429a.571.571 0 0 1-.571-.571a.571.571 0 0 1 .571-.571Z" opacity=".5"></path>',23),Jo=[Xo];function ei(n,e){return O(),C("svg",Qo,Jo)}var ni={name:"vscode-icons-file-type-prettier",render:ei};const ai={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},si=_("path",{fill:"#dd4c35",d:"M29.472 14.753L17.247 2.528a1.8 1.8 0 0 0-2.55 0l-2.539 2.539l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172L2.528 14.7a1.8 1.8 0 0 0 0 2.551l12.225 12.221a1.8 1.8 0 0 0 2.55 0L29.472 17.3a1.8 1.8 0 0 0 0-2.551"},null,-1),ti=_("path",{fill:"#fff",d:"m12.158 5.067l3.22 3.22a2.141 2.141 0 0 1 2.712 2.73l3.1 3.1a2.143 2.143 0 1 1-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 1 1-1.764-.062V12.3a2.146 2.146 0 0 1-1.165-2.814l-3.17-3.172"},null,-1),ri=[si,ti];function oi(n,e){return O(),C("svg",ai,ri)}var ii={name:"vscode-icons-file-type-git",render:oi};const ci={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},di=_("path",{fill:"#4b32c3",d:"m29.832 16.7l-6.354 10.717A1.256 1.256 0 0 1 22.36 28H9.647a1.262 1.262 0 0 1-1.118-.59l-6.356-10.7a1.256 1.256 0 0 1 0-1.272L8.527 4.676A1.344 1.344 0 0 1 9.647 4h12.709a1.344 1.344 0 0 1 1.118.678l6.354 10.786a1.2 1.2 0 0 1 0 1.238Zm-5.262 4.2v-9.614L16 6.466l-8.56 4.82V20.9L16 25.719Z"},null,-1),li=_("path",{fill:"#8080f2",d:"m21.802 19.188l-5.747 3.235l-5.742-3.235v-6.47l5.742-3.236l5.747 3.236v6.47z"},null,-1),pi=[di,li];function ui(n,e){return O(),C("svg",ci,pi)}var mi={name:"vscode-icons-file-type-eslint",render:ui};const fi={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bi=_("path",{fill:"#41b883",d:"M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"},null,-1),hi=_("path",{fill:"#41b883",d:"m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"},null,-1),gi=_("path",{fill:"#35495e",d:"M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"},null,-1),_i=_("path",{fill:"#99b8c4",d:"m26.684 27.192l.456-.447c2.112.068 2.144-.005 2.237-.219l.58-1.393L30 25l-.047-.115c-.025-.061-.1-.243-1.42-1.483v-.652c1.521-1.445 1.489-1.519 1.4-1.73l-.577-1.407c-.087-.211-.12-.294-2.216-.237l-.457-.465a10 10 0 0 0-.071-2.053l-.059-.132l-1.508-.65c-.222-.1-.3-.136-1.724 1.393l-.64-.009c-1.466-1.543-1.535-1.515-1.755-1.428l-1.4.559c-.219.088-.3.119-.212 2.219l-.453.445c-2.11-.068-2.142.006-2.234.219l-.581 1.393L16 21l.048.116c.025.06.1.24 1.419 1.481v.65c-1.521 1.445-1.488 1.519-1.4 1.731l.577 1.409c.089.215.12.292 2.216.238l.456.467a9.967 9.967 0 0 0 .07 2.05l.058.133l1.518.654c.221.091.3.124 1.717-1.4l.64.008c1.468 1.545 1.543 1.515 1.757 1.43l1.4-.558c.224-.086.297-.116.208-2.217Zm-6.013-3.262a2.469 2.469 0 0 1 1.449-3.2a2.525 2.525 0 0 1 3.246 1.429a2.467 2.467 0 0 1-1.405 3.184a2.554 2.554 0 0 1-3.29-1.413Z"},null,-1),vi=[bi,hi,gi,_i];function yi(n,e){return O(),C("svg",fi,vi)}var ki={name:"vscode-icons-file-type-vueconfig",render:yi};const ji={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ti=_("path",{fill:"#2dcc9f",d:"M30 5.851v20.298H2V5.851h28"},null,-1),xi=_("path",{fill:"#fff",d:"M24.232 8.541a2.2 2.2 0 1 0 1.127.623a2.212 2.212 0 0 0-1.127-.623M18.111 20.1q-2.724-3.788-5.45-7.575L4.579 23.766h10.9q1.316-1.832 2.634-3.663M22.057 16q-2.793 3.882-5.584 7.765h11.169Q24.851 19.882 22.057 16Z"},null,-1),Ei=[Ti,xi];function Ai(n,e){return O(),C("svg",ji,Ei)}var Fn={name:"vscode-icons-file-type-image",render:Ai};const wi={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ii=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m16 18l6-6l-6-6M8 6l-6 6l6 6"},null,-1),Pi=[Ii];function Ri(n,e){return O(),C("svg",wi,Pi)}var Ni={name:"feather-code",render:Ri};const Di={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Li=_("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},null,-1),Oi=[Li];function Vi(n,e){return O(),C("svg",Di,Oi)}var Si={name:"feather-tool",render:Vi};const Ci={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$i=_("path",{fill:"#c09553",d:"M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"},null,-1),Fi=[$i];function Mi(n,e){return O(),C("svg",Ci,Fi)}var Qn={name:"vscode-icons-default-folder",render:Mi};const zi={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bi=_("path",{fill:"#c09553",d:"M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"},null,-1),Hi=_("path",{fill:"#c09553",d:"M19.735 31.25h-5.924l9.794-21.5h5.985l-9.855 21.5z"},null,-1),qi=_("path",{fill:"#ffeebe",d:"M23.766 10H29.2l-9.625 21H14.2Z"},null,-1),Zi=[Bi,Hi,qi];function Ki(n,e){return O(),C("svg",zi,Zi)}var Wi={name:"vscode-icons-default-root-folder",render:Ki};const Ui={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 500 500",width:"1.2em",height:"1.2em"},Gi=["id"],Yi=_("stop",{offset:"0","stop-color":"#58d09e"},null,-1),Qi=_("stop",{offset:"1"},null,-1),Xi=[Yi,Qi],Ji=["id"],ec=_("stop",{offset:"0","stop-color":"#58d09e"},null,-1),nc=_("stop",{offset:"1","stop-color":"#d2d2d2"},null,-1),ac=[ec,nc],sc=_("path",{fill:"#31ad79",d:"M460.672 85.3H282.547l-32.813 65.625H66.922v262.5h393.75V85.3Zm-32.813 65.625H299.734l17.188-32.812h110.937Z"},null,-1),tc=_("path",{d:"M307.469 156.641c85.984-3.063 158.312 64.3 161.406 150.328a155.9 155.9 0 0 1-150.188 161.39c-85.984 3.062-158.312-64.3-161.406-150.328c-3.094-86.016 64.2-158.344 150.188-161.391Z"},null,-1),rc=_("path",{fill:"#d2d2d2",d:"M396.672 263.031L367.328 336.7l-29.547-73.672h-24.187l41.453 100.563l-29.484 70.922l21.125 4.172l72.828-175.656h-22.844Z"},null,-1),oc=_("path",{fill:"#d2d2d2",d:"M267.656 281.672c12.266 0 22.266 6.484 27.391 17.812l.406.875l20.609-6.938l-.453-1.047c-7.969-19.266-26.344-31.25-47.953-31.25c-15.188 0-27.531 4.844-37.734 14.75c-10.141 9.859-15.266 22.25-15.266 36.844c0 14.484 5.125 26.812 15.266 36.656c10.2 9.922 22.547 14.75 37.734 14.75c21.609 0 39.984-11.984 47.953-31.234l.453-1.047l-20.641-6.953l-.391.922c-4.594 11.125-14.828 17.766-27.375 17.766a28.926 28.926 0 0 1-21.469-8.8a30.385 30.385 0 0 1-8.7-22.047a30.858 30.858 0 0 1 8.7-22.234a28.87 28.87 0 0 1 21.47-8.825Z"},null,-1),ic=["fill"],cc=_("path",{fill:"#58d09e",d:"M167.172 352.188a149.113 149.113 0 0 1-5.391-39.828c0-61.641 39.031-118.016 97.141-140.25l7.625 19.562c-50.016 19.141-83.609 67.641-83.609 120.687a128.164 128.164 0 0 0 4.625 34.266l-20.391 5.563Z"},null,-1),dc=_("path",{fill:"#58d09e",d:"M257.906 172.594a153.234 153.234 0 0 1 39.375-9.484c61.812-6.437 122.422 26.172 150.781 81.172l-18.813 9.562c-24.422-47.344-76.562-75.406-129.766-69.859a131.14 131.14 0 0 0-33.875 8.141l-7.7-19.531Z"},null,-1),lc=["fill"];function pc(n,e){return O(),C("svg",Ui,[_("defs",null,[_("linearGradient",{id:n.idMap.svgIDa,x2:"1",y1:"500.019",y2:"500.019",gradientTransform:"scale(-173.67 173.67) rotate(74.609 325.802 249.083)",gradientUnits:"userSpaceOnUse"},Xi,8,Gi),_("linearGradient",{id:n.idMap.svgIDb,x2:"1",y1:"500.066",y2:"500.066",gradientTransform:"scale(173.685 -173.685) rotate(-38.239 -723.64 247.505)",gradientUnits:"userSpaceOnUse"},ac,8,Ji)]),sc,tc,rc,oc,_("path",{fill:"url(#"+n.idMap.svgIDa+")",d:"M382.734 421.672a129.452 129.452 0 0 0 45.75-169.516l18.734-9.687a150.205 150.205 0 0 1-53.125 196.891l-11.359-17.687Z"},null,8,ic),cc,dc,_("path",{fill:"url(#"+n.idMap.svgIDb+")",d:"m329.656 424.578l-5.141 12.375a6.851 6.851 0 0 1-6 4.2a116.91 116.91 0 0 1-5.266.125c-60.609-.031-114.234-42.422-127.516-100.812l-20.625 4.625a150.566 150.566 0 0 0 52.692 83.721a153.237 153.237 0 0 0 95.234 33.422h.313c2.031 0 4.047-.047 6.063-.125a28.071 28.071 0 0 0 24.687-17.188l6.719-16.172l-21.156-4.172Z"},null,8,lc)])}var uc={name:"vscode-icons-folder-type-cypress",render:pc,data(){const n=()=>Math.random().toString(36).substr(2,10);return{idMap:{svgIDa:"uicons-"+n(),svgIDb:"uicons-"+n()}}}};const mc={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fc=_("path",{fill:"#c15356",d:"M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"},null,-1),bc=_("path",{fill:"#9f4246",d:"M25.742 9.9H13.441v21h17.475V15.15L25.742 9.9z"},null,-1),hc=_("path",{fill:"#fff",d:"M29.577 29.663H14.851V11.138h10.055l4.75 4.749v13.776h-.079z"},null,-1),gc=_("path",{fill:"#9f4246",d:"M18.652 19.945c1.188 0 1.922-1.1 1.922-2.747c0-1.609-.6-2.582-1.8-2.582s-1.929 1.1-1.929 2.747c.001 1.612.603 2.582 1.807 2.582ZM17.72 17.2c0-1.172.322-1.84.99-1.84c.487 0 .784.413.916 1.105l-1.9.982a2.4 2.4 0 0 1-.006-.247Zm1 2c-.478 0-.784-.4-.916-1.073l1.9-.982v.215c-.004 1.174-.317 1.84-.986 1.84Zm7.701.635l.075-.767h-1.238v-4.51l-.882.075v.6l-1.271.132l.017.668L24.376 16v3.069h-1.387v.768l3.432-.002zm-5.888 7.125l.075-.767h-1.237v-4.511l-.883.075v.6l-1.27.132l.016.669l1.254-.033v3.069h-1.386v.768l3.431-.002zm4.082.107c1.188 0 1.922-1.1 1.922-2.747c0-1.609-.6-2.582-1.8-2.582s-1.93 1.1-1.93 2.747c0 1.611.6 2.585 1.808 2.585Zm-.932-2.745c0-1.172.322-1.84.99-1.84c.487 0 .784.412.916 1.105l-1.9.982a2.4 2.4 0 0 1-.006-.247Zm1 2c-.479 0-.784-.4-.916-1.073l1.9-.982v.214c-.004 1.178-.318 1.844-.986 1.844Z"},null,-1),_c=[fc,bc,hc,gc];function vc(n,e){return O(),C("svg",mc,_c)}var yc={name:"vscode-icons-folder-type-binary",render:vc};const kc={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jc=_("path",{fill:"#14622a",d:"M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"},null,-1),Tc=_("path",{fill:"#7bdbab",d:"M10 12.983v18.034h21V12.983Zm20.219 17.253H10.781V15.247h19.438Z"},null,-1),xc=_("path",{fill:"#7bdbab",d:"M19.981 17.138c.352-.022.768-.15 1.071.107c.277.255.264.669.352 1.009a6.92 6.92 0 0 1 1.234.393c.26-.229.486-.564.856-.6c.329-.023.567.235.8.425a3.072 3.072 0 0 1 .685.679c.168.445-.2.822-.422 1.158a7.688 7.688 0 0 1 .55 1.1c.431.027 1.038-.07 1.241.425a5.126 5.126 0 0 1 .142 1.492c-.11.531-.743.551-1.174.646c-.072.393-.235.76-.342 1.143c.117.336.533.5.612.872c.085.405-.275.693-.5.981c-.216.228-.39.56-.727.621c-.438.079-.754-.295-1.109-.479a6.271 6.271 0 0 1-1.1.564c-.031.452.082 1.117-.452 1.316a5.036 5.036 0 0 1-1.518.117c-.525-.168-.494-.8-.612-1.242c-.39-.072-.748-.256-1.134-.329c-.352.249-.639.759-1.141.631a3.557 3.557 0 0 1-.851-.627c-.207-.186-.481-.38-.47-.69c-.021-.412.392-.666.47-1.04c-.14-.338-.352-.643-.486-.988c-.366-.033-.784.065-1.1-.16c-.295-.2-.278-.6-.321-.91a2.958 2.958 0 0 1 .012-.97c.207-.438.759-.416 1.161-.531a6.482 6.482 0 0 1 .352-1.174c-.235-.276-.574-.5-.655-.878c-.046-.345.235-.6.432-.849a2.7 2.7 0 0 1 .7-.7c.44-.146.794.22 1.134.433a5.911 5.911 0 0 1 1.157-.587c.093-.375-.053-.845.269-1.128c.233-.239.585-.19.884-.23Zm.117 3.828a2.144 2.144 0 1 0 1.908.566a2.144 2.144 0 0 0-1.908-.566Z"},null,-1),Ec=[jc,Tc,xc];function Ac(n,e){return O(),C("svg",kc,Ec)}var wc={name:"vscode-icons-folder-type-app",render:Ac};const Ic={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pc=_("path",{fill:"#539dc0",d:"M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"},null,-1),Rc=_("path",{fill:"#2188b6",d:"M30.42 26.27a5.21 5.21 0 0 0-2 .91a11.74 11.74 0 0 1-2.91 1.32a.82.82 0 0 1-.49.28a31.56 31.56 0 0 1-3.22.29c-.58 0-.94-.15-1-.39a.78.78 0 0 1 .41-1a1.57 1.57 0 0 1-.26-.19c-.08-.08-.17-.25-.2-.19c-.11.27-.17.95-.47 1.25a1.51 1.51 0 0 1-1.66 0c-.51-.28 0-.91 0-.91a.36.36 0 0 1-.49-.16a2.48 2.48 0 0 1-.29-1.48a2.68 2.68 0 0 1 .88-1.44a4.59 4.59 0 0 1 .33-2.2a5.17 5.17 0 0 1 1.57-1.84s-1-1.07-.6-2c.23-.63.33-.63.4-.66a1.81 1.81 0 0 0 .73-.43a2.64 2.64 0 0 1 2.2-.85s.58-1.77 1.12-1.43a9.56 9.56 0 0 1 .77 1.45s.63-.38.71-.24a5.83 5.83 0 0 1 .26 3.07a7 7 0 0 1-1.3 2.7A5.77 5.77 0 0 1 26.22 24a5.73 5.73 0 0 1 .13 2.6a3.22 3.22 0 0 0 1.7-.65a4.21 4.21 0 0 1 2.13-.8a.54.54 0 0 1 .23 1.05Z"},null,-1),Nc=[Pc,Rc];function Dc(n,e){return O(),C("svg",Ic,Nc)}var Lc={name:"vscode-icons-folder-type-yarn",render:Dc};const Oc={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vc=_("path",{fill:"#007acc",d:"M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"},null,-1),Sc=_("path",{fill:"#fff",d:"M27.249 17.436a3.558 3.558 0 0 1 1.787 1.03a4.706 4.706 0 0 1 .685.916c.009.036-1.234.871-1.987 1.338c-.027.018-.136-.1-.259-.281a1.62 1.62 0 0 0-1.343-.808c-.866-.059-1.424.395-1.42 1.152a1.048 1.048 0 0 0 .122.535c.191.395.544.631 1.656 1.111c2.046.88 2.922 1.461 3.466 2.286a4.147 4.147 0 0 1 .331 3.484a3.831 3.831 0 0 1-3.162 2.264a8.762 8.762 0 0 1-2.178-.023a5.252 5.252 0 0 1-2.908-1.515a5.049 5.049 0 0 1-.744-1.1a2.135 2.135 0 0 1 .263-.168c.127-.073.608-.349 1.062-.612l.821-.476l.172.254a3.837 3.837 0 0 0 1.087 1.038a2.654 2.654 0 0 0 2.781-.141a1.242 1.242 0 0 0 .159-1.583c-.222-.318-.676-.585-1.964-1.143a7.073 7.073 0 0 1-2.69-1.656a3.769 3.769 0 0 1-.785-1.429a5.723 5.723 0 0 1-.05-1.824a3.483 3.483 0 0 1 2.931-2.713a7.239 7.239 0 0 1 2.167.064Zm-6.71 1.193l.009 1.17h-3.72V30.37H14.2V19.8h-3.72v-1.148a11.247 11.247 0 0 1 .032-1.18c.014-.018 2.277-.027 5.022-.023l4.995.014Z"},null,-1),Cc=_("path",{fill:"#007acc",d:"M26.173 31a8.42 8.42 0 0 1-1.309-.087a5.743 5.743 0 0 1-3.177-1.665c-.49-.543-1.028-1.271-.8-1.661a1.149 1.149 0 0 1 .437-.341c.131-.075.611-.351 1.062-.613l1.205-.7l.422.621a3.448 3.448 0 0 0 .913.885a2.208 2.208 0 0 0 2.239-.073a.583.583 0 0 0 .213-.5a.6.6 0 0 0-.129-.455a4.9 4.9 0 0 0-1.762-.976a7.5 7.5 0 0 1-2.85-1.77a4.255 4.255 0 0 1-.9-1.629a6.13 6.13 0 0 1-.057-2.046a3.982 3.982 0 0 1 3.312-3.09a7.616 7.616 0 0 1 2.372.069a4.063 4.063 0 0 1 2.016 1.162a4.952 4.952 0 0 1 .8 1.128c.09.35.11.433-2.2 1.864l-.158.1l-.193-.033c-.161-.031-.31-.122-.555-.484a1.151 1.151 0 0 0-.981-.6a.962.962 0 0 0-.732.189a.628.628 0 0 0-.178.483a.584.584 0 0 0 .072.324c.117.241.348.424 1.419.888c2.142.922 3.069 1.543 3.675 2.461a4.657 4.657 0 0 1 .379 3.916a4.283 4.283 0 0 1-3.53 2.566a6.681 6.681 0 0 1-1.025.067Zm-4.237-3.007a6.434 6.434 0 0 0 .46.615a4.761 4.761 0 0 0 2.637 1.365a8.512 8.512 0 0 0 2.011.022a3.375 3.375 0 0 0 2.8-1.964a3.684 3.684 0 0 0-.284-3.051c-.489-.74-1.31-1.273-3.256-2.111c-1.114-.482-1.624-.775-1.9-1.343a1.5 1.5 0 0 1-.171-.743a1.558 1.558 0 0 1 .48-1.182a1.883 1.883 0 0 1 1.45-.446a2.08 2.08 0 0 1 1.657.945c.462-.3.952-.623 1.261-.836a6.74 6.74 0 0 0-.4-.474a3.1 3.1 0 0 0-1.554-.892a6.876 6.876 0 0 0-1.964-.058a3.017 3.017 0 0 0-2.553 2.344a5.439 5.439 0 0 0 .044 1.6a3.314 3.314 0 0 0 .674 1.23a6.656 6.656 0 0 0 2.529 1.542c1.393.6 1.879.9 2.166 1.307a1.72 1.72 0 0 1-.227 2.211a3.116 3.116 0 0 1-3.326.21A4.325 4.325 0 0 1 23.3 27.2l-.438.255Zm-4.629 2.855H13.72v-10.57H10v-1.626c0-1.24.007-1.381.175-1.523a.243.243 0 0 1 .041-.033c.21-.129.9-.13 5.314-.121l5.47.012l.032 3.29h-3.726Zm-2.632-.955h1.677v-10.57h3.716l-.013-1.383l-4.524-.013c-2.207 0-3.844 0-4.568.01c0 .182-.007.423-.007.714v.671h3.72Z"},null,-1),$c=[Vc,Sc,Cc];function Fc(n,e){return O(),C("svg",Oc,$c)}var Mc={name:"vscode-icons-folder-type-typescript",render:Fc};const zc={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bc=In('<path fill="#ba5656" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></path><rect width="21" height="21" x="10" y="10" fill="#414141" rx="2.761" ry="2.761"></rect><path fill="#c2c2c2" d="M13.937 11.925h13.125a2.013 2.013 0 0 1 2.013 2.013v13.125a2.012 2.012 0 0 1-2.012 2.012H13.937a2.013 2.013 0 0 1-2.013-2.013V13.938a2.013 2.013 0 0 1 2.013-2.013Z"></path><path fill="#414141" d="M13.937 13.325h13.126a.612.612 0 0 1 .612.612v13.126a.613.613 0 0 1-.613.613H13.938a.613.613 0 0 1-.613-.613V13.937a.612.612 0 0 1 .612-.612Z"></path><path fill="#c2c2c2" d="M25.754 21.2h-1.1a4.183 4.183 0 0 1-.741 1.769l.78.78a.7.7 0 1 1-.99.99l-.786-.786a4.184 4.184 0 0 1-1.761.712v1.129a.7.7 0 0 1-1.4 0v-1.141a4.2 4.2 0 0 1-1.728-.735l-.82.82a.7.7 0 1 1-.99-.99l.826-.826a4.2 4.2 0 0 1-.707-1.723h-1.171a.7.7 0 1 1 0-1.4h1.174a4.2 4.2 0 0 1 .707-1.722l-.826-.826a.7.7 0 1 1 .99-.99l.819.82a4.2 4.2 0 0 1 1.729-.735v-1.14a.7.7 0 0 1 1.4 0v1.129a4.188 4.188 0 0 1 1.762.713l.786-.787a.7.7 0 0 1 .99.99l-.781.781a4.19 4.19 0 0 1 .741 1.768h1.1a.7.7 0 0 1 0 1.4Z"></path><circle cx="20.5" cy="20.5" r="2.822" fill="#414141"></circle><circle cx="20.5" cy="20.5" r="1.121" fill="#c2c2c2"></circle>',7),Hc=[Bc];function qc(n,e){return O(),C("svg",zc,Hc)}var Zc={name:"vscode-icons-folder-type-asset",render:qc};const Kc={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wc=_("path",{fill:"#55bfa0",d:"M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"},null,-1),Uc=_("path",{fill:"#2dcc9f",d:"M31 15.778V31H10V15.777h21"},null,-1),Gc=_("path",{fill:"#fff",d:"M26.674 17.8a1.653 1.653 0 1 0 .845.467a1.659 1.659 0 0 0-.845-.467m-4.591 8.667L18 20.786l-6.062 8.428h8.174q.987-1.374 1.976-2.747m2.955-3.076l-4.188 5.824h8.377q-2.094-2.915-4.189-5.824Z"},null,-1),Yc=[Wc,Uc,Gc];function Qc(n,e){return O(),C("svg",Kc,Yc)}var Xc={name:"vscode-icons-folder-type-images",render:Qc};const Jc={ts:Cn,cts:Cn,mts:Cn,js:$n,cjs:$n,mjs:$n,json:Gt,lock:Q0,LICENSE:rr,md:pr,html:hr,css:ko,sass:Ao,vue:J0,yml:Yo,ico:Fn,png:Fn,jpg:Fn};function ed(n){var e;return typeof n=="undefined"?Tn:(e=Jc[n])!=null?e:Tn}const T0=n=>e=>n.test(e),nd=n=>e=>n===e,$e=n=>e=>e.startsWith(n),ad=n=>e=>e.endsWith(n),sd=[[T0(/tsconfig(\..+)?\.json/m),wt],[nd("package.json"),kr],[$e("vite.config."),X0],[$e("cypress."),Jr],[T0(/.+\.spec\..+/m),ho],[ad(".d.ts"),Lt],[$e("postcss.config."),Mo],[$e("tailwind.config."),Zo],[$e(".prettier"),ni],[$e(".git"),ii],[$e(".eslint"),mi],[$e(".yarn"),Q0]];function td(n){const e=sd.find(([a])=>a(n));return typeof e=="undefined"?null:e[1]}function ea(n){const e=n.split("/").at(-1);if(typeof e=="undefined")return Tn;const a=td(e);if(a!==null)return a;const t=e.split(".").at(-1);return ed(t)}const rd={class:"icon relative"},od=me({props:{baseColor:null,topColor:null,icon:null,backgroundColor:null},setup(n){return(e,a)=>{const t=Qn,r=Pn,o=As;return O(),C("span",rd,[Q(r,C0(e.$attrs,{color:n.baseColor}),{default:J(()=>[Q(t,{class:"folder"})]),_:1},16,["color"]),typeof n.backgroundColor!="undefined"?(O(),_e(o,{key:0,class:"absolute top-3 left-2",size:14,"border-radius":0,color:n.backgroundColor},{default:J(()=>[Q(r,{size:"0.75rem",color:n.topColor},{default:J(()=>[(O(),_e(Bn(n.icon),{class:Hn(["top",{"custom-color":typeof n.topColor!="undefined"}])},null,8,["class"]))]),_:1},8,["color"])]),_:1},8,["color"])):(O(),_e(r,{key:1,class:"absolute top-2 left-2",size:"1rem",color:n.topColor},{default:J(()=>[(O(),_e(Bn(n.icon),{class:Hn(["top",{"custom-color":typeof n.topColor!="undefined"}])},null,8,["class"]))]),_:1},8,["color"]))])}}});var id=ln(od,[["__scopeId","data-v-2576396a"]]);function gn(n,e,a,t){return()=>V(id,{baseColor:n,icon:e,topColor:a,backgroundColor:t})}const Fe=n=>(e,a)=>a===n,Oe=n=>(e,a)=>a.includes(n),cd=[[Fe("/"),Wi],[Oe("cypress"),uc],[Oe("dist"),yc],[Fe("/packages"),wc],[Fe("/.yarn"),Lc],[Oe("types"),Mc],[Oe("assets"),Zc],[Oe("icons"),Xc],[Fe("/packages/about"),Ua],[Fe("/packages/fairytome"),Ga],[Fe("/packages/framework"),Ni],[Fe("/packages/home"),$a],[Fe("/packages/utilities"),Si],[Oe("components"),gn("#14622a",J0)],[Oe("composables"),gn("#14622a",ki)],[Oe("pages"),gn("#14622a",Tn,"white","rgba(0, 0, 0, 0.5)")],[Oe("vite"),gn("#14622a",X0)]];function dd(n){const e=n.split("/").at(-1);if(typeof e=="undefined")return Qn;const a=cd.find(([t])=>t(e,n));return typeof a=="undefined"?null:a[1]}function Rn(n){var e;return(e=dd(n))!=null?e:Qn}const ld={"/.eslintrc-auto-import.json":`{
  "globals": {
    "EffectScope": true,
    "asyncComputed": true,
    "autoResetRef": true,
    "computed": true,
    "computedAsync": true,
    "computedEager": true,
    "computedInject": true,
    "computedWithControl": true,
    "controlledComputed": true,
    "controlledRef": true,
    "createApp": true,
    "createEventHook": true,
    "createGlobalState": true,
    "createInjectionState": true,
    "createReactiveFn": true,
    "createSharedComposable": true,
    "createUnrefFn": true,
    "customRef": true,
    "debouncedRef": true,
    "debouncedWatch": true,
    "defineAsyncComponent": true,
    "defineComponent": true,
    "eagerComputed": true,
    "effectScope": true,
    "extendRef": true,
    "getCurrentInstance": true,
    "getCurrentScope": true,
    "h": true,
    "ignorableWatch": true,
    "inject": true,
    "isDefined": true,
    "isProxy": true,
    "isReactive": true,
    "isReadonly": true,
    "isRef": true,
    "logicAnd": true,
    "logicNot": true,
    "logicOr": true,
    "makeDestructurable": true,
    "markRaw": true,
    "nextTick": true,
    "onActivated": true,
    "onBeforeMount": true,
    "onBeforeUnmount": true,
    "onBeforeUpdate": true,
    "onClickOutside": true,
    "onDeactivated": true,
    "onErrorCaptured": true,
    "onKeyStroke": true,
    "onLongPress": true,
    "onMounted": true,
    "onRenderTracked": true,
    "onRenderTriggered": true,
    "onScopeDispose": true,
    "onServerPrefetch": true,
    "onStartTyping": true,
    "onUnmounted": true,
    "onUpdated": true,
    "pausableWatch": true,
    "provide": true,
    "reactify": true,
    "reactifyObject": true,
    "reactive": true,
    "reactiveComputed": true,
    "reactiveOmit": true,
    "reactivePick": true,
    "readonly": true,
    "ref": true,
    "refAutoReset": true,
    "refDebounced": true,
    "refDefault": true,
    "refThrottled": true,
    "refWithControl": true,
    "resolveComponent": true,
    "shallowReactive": true,
    "shallowReadonly": true,
    "shallowRef": true,
    "syncRef": true,
    "syncRefs": true,
    "templateRef": true,
    "throttledRef": true,
    "throttledWatch": true,
    "toRaw": true,
    "toReactive": true,
    "toRef": true,
    "toRefs": true,
    "triggerRef": true,
    "tryOnBeforeMount": true,
    "tryOnBeforeUnmount": true,
    "tryOnMounted": true,
    "tryOnScopeDispose": true,
    "tryOnUnmounted": true,
    "unref": true,
    "unrefElement": true,
    "until": true,
    "useActiveElement": true,
    "useAsyncQueue": true,
    "useAsyncState": true,
    "useAttrs": true,
    "useBase64": true,
    "useBattery": true,
    "useBreakpoints": true,
    "useBroadcastChannel": true,
    "useBrowserLocation": true,
    "useCached": true,
    "useClamp": true,
    "useClipboard": true,
    "useColorMode": true,
    "useConfirmDialog": true,
    "useCounter": true,
    "useCssModule": true,
    "useCssVar": true,
    "useCssVars": true,
    "useCurrentElement": true,
    "useCycleList": true,
    "useDark": true,
    "useDateFormat": true,
    "useDebounce": true,
    "useDebounceFn": true,
    "useDebouncedRefHistory": true,
    "useDeviceMotion": true,
    "useDeviceOrientation": true,
    "useDevicePixelRatio": true,
    "useDevicesList": true,
    "useDisplayMedia": true,
    "useDocumentVisibility": true,
    "useDraggable": true,
    "useElementBounding": true,
    "useElementByPoint": true,
    "useElementHover": true,
    "useElementSize": true,
    "useElementVisibility": true,
    "useEventBus": true,
    "useEventListener": true,
    "useEventSource": true,
    "useEyeDropper": true,
    "useFavicon": true,
    "useFetch": true,
    "useFileSystemAccess": true,
    "useFocus": true,
    "useFocusWithin": true,
    "useFps": true,
    "useFullscreen": true,
    "useGamepad": true,
    "useGeolocation": true,
    "useIdle": true,
    "useInfiniteScroll": true,
    "useIntersectionObserver": true,
    "useInterval": true,
    "useIntervalFn": true,
    "useKeyModifier": true,
    "useLastChanged": true,
    "useLocalStorage": true,
    "useMagicKeys": true,
    "useManualRefHistory": true,
    "useMediaControls": true,
    "useMediaQuery": true,
    "useMemoize": true,
    "useMemory": true,
    "useMounted": true,
    "useMouse": true,
    "useMouseInElement": true,
    "useMousePressed": true,
    "useMutationObserver": true,
    "useNavigatorLanguage": true,
    "useNetwork": true,
    "useNow": true,
    "useOffsetPagination": true,
    "useOnline": true,
    "usePageLeave": true,
    "useParallax": true,
    "usePermission": true,
    "usePointer": true,
    "usePointerSwipe": true,
    "usePreferredColorScheme": true,
    "usePreferredDark": true,
    "usePreferredLanguages": true,
    "useRafFn": true,
    "useRefHistory": true,
    "useResizeObserver": true,
    "useRoute": true,
    "useRouter": true,
    "useScreenOrientation": true,
    "useScreenSafeArea": true,
    "useScriptTag": true,
    "useScroll": true,
    "useScrollLock": true,
    "useSessionStorage": true,
    "useShare": true,
    "useSlots": true,
    "useSpeechRecognition": true,
    "useSpeechSynthesis": true,
    "useStorage": true,
    "useStorageAsync": true,
    "useStyleTag": true,
    "useSwipe": true,
    "useTemplateRefsList": true,
    "useTextSelection": true,
    "useThrottle": true,
    "useThrottleFn": true,
    "useThrottledRefHistory": true,
    "useTimeAgo": true,
    "useTimeout": true,
    "useTimeoutFn": true,
    "useTimeoutPoll": true,
    "useTimestamp": true,
    "useTitle": true,
    "useToggle": true,
    "useTransition": true,
    "useUrlSearchParams": true,
    "useUserMedia": true,
    "useVModel": true,
    "useVModels": true,
    "useVibrate": true,
    "useVirtualList": true,
    "useWakeLock": true,
    "useWebNotification": true,
    "useWebSocket": true,
    "useWebWorker": true,
    "useWebWorkerFn": true,
    "useWindowFocus": true,
    "useWindowScroll": true,
    "useWindowSize": true,
    "watch": true,
    "watchAtMost": true,
    "watchDebounced": true,
    "watchEffect": true,
    "watchIgnorable": true,
    "watchOnce": true,
    "watchPausable": true,
    "watchPostEffect": true,
    "watchSyncEffect": true,
    "watchThrottled": true,
    "watchWithFilter": true,
    "whenever": true
  }
}`,"/.eslintrc.cjs":`/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    ".eslintrc-auto-import.json",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    {
      files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
    {
      files: ["*.c{js,ts}"],
      env: {
        node: true,
      },
    },
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "vue/multi-word-component-names": "off",
      },
      globals: {
        $ref: "readonly",
        $computed: "readonly",
        $toRef: "readonly",
        $: "readonly",
        $$: "readonly",
      },
    },
  ],
}
`,"/.gitattributes":`.yarn/cache/* linguist-vendored
.pnp.* linguist-generated=true
packages/framework/types/* linguist-generated=true
.eslintrc.js linguist-generated=true
`,"/.gitignore":`# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
.DS_Store
dist
dist-ssr
coverage
*.local

/cypress/videos/
/cypress/screenshots/

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

.eslintcache

.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
`,"/.prettierignore":`packages/framework/types/*
`,"/.prettierrc":`{
  "semi": false,
  "importOrder": ["^@/", "^[./]"],
  "importOrderSortSpecifiers": true,
  "importOrderCaseInsensitive": true,
  "pugSingleQuote": false,
  "pugAttributeSeparator": "none"
}
`,"/.yarnrc.yml":`nodeLinker: node-modules

plugins:
  - path: .yarn/plugins/@yarnpkg/plugin-typescript.cjs
    spec: "@yarnpkg/plugin-typescript"

yarnPath: .yarn/releases/yarn-3.2.0.cjs
`,"/LICENSE":`MIT License

Copyright (c) 2022 Timon Lukas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,"/README.md":`# timonlukas.github.io

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for \`.vue\` Imports in TS

TypeScript cannot handle type information for \`.vue\` imports by default, so we replace the \`tsc\` CLI with \`vue-tsc\` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of \`.vue\` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run \`Extensions: Show Built-in Extensions\` from VSCode's command palette
    2) Find \`TypeScript and JavaScript Language Features\`, right click and select \`Disable (Workspace)\`
2. Reload the VSCode window by running \`Developer: Reload Window\` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

\`\`\`sh
npm install
\`\`\`

### Compile and Hot-Reload for Development

\`\`\`sh
npm run dev
\`\`\`

### Type-Check, Compile and Minify for Production

\`\`\`sh
npm run build
\`\`\`

### Run Unit Tests with [Vitest](https://vitest.dev/)

\`\`\`sh
npm run test:unit
\`\`\`

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

\`\`\`sh
npm run build
npm run test:e2e # or \`npm run test:e2e:ci\` for headless testing
\`\`\`

### Lint with [ESLint](https://eslint.org/)

\`\`\`sh
npm run lint
\`\`\`
`,"/cypress.json":`{
  "baseUrl": "http://localhost:5050"
}
`,"/env.d.ts":`/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="unplugin-icons/types/vue3" />
/// <reference types="vite-plugin-comlink/client" />
/// <reference types="vue/macros" />
/// <reference types="vue/macros-global" />

/// <reference types="./packages/*/types/**" />

declare namespace global {
  const OffscreenCanvas: import("@types/offscreencanvas")
}

declare module "prismjs/components/prism-*" {}
`,"/index.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>timonlukas.github.io</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/packages/framework/main.ts"><\/script>
  </body>
</html>
`,"/package.json":`{
  "name": "timonlukas.github.io",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview --port 5050",
    "test:unit": "vitest --environment jsdom",
    "test:e2e": "start-server-and-test preview http://127.0.0.1:5050/ 'cypress open'",
    "test:e2e:ci": "start-server-and-test preview http://127.0.0.1:5050/ 'cypress run'",
    "typecheck": "vue-tsc --noEmit -p tsconfig.vitest.json --composite false",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --cache --ignore-path .gitignore"
  },
  "dependencies": {
    "@iconify-json/feather": "^1.1.1",
    "@iconify-json/vscode-icons": "^1.1.6",
    "@swan-io/boxed": "^0.9.0",
    "@tailwindcss/forms": "^0.5.1",
    "@tailwindcss/typography": "^0.5.2",
    "@ungap/structured-clone": "^1.0.1",
    "@vue/runtime-core": "^3.2.33",
    "@vue/runtime-dom": "^3.2.33",
    "@vueuse/core": "^8.4.2",
    "@vueuse/router": "^8.5.0",
    "chroma-js": "^2.4.2",
    "comlink": "^4.3.1",
    "dynamics.js": "^1.1.5",
    "glob": "^8.0.3",
    "iwanthue": "^2.0.0",
    "lodash": "^4.17.21",
    "marked": "^4.0.17",
    "naive-ui": "^2.29.0",
    "pinia": "^2.0.13",
    "prismjs": "^1.28.0",
    "pug": "^3.0.2",
    "sass": "^1.51.0",
    "svg-path-parser": "^1.1.0",
    "tailwindcss": "^3.0.24",
    "ts-deepmerge": "^2.0.1",
    "type-fest": "^2.13.0",
    "uuid": "^8.3.2",
    "vue": "^3.2.31",
    "vue-router": "^4.0.14"
  },
  "devDependencies": {
    "@prettier/plugin-pug": "^2.0.0",
    "@rushstack/eslint-patch": "^1.1.0",
    "@trivago/prettier-plugin-sort-imports": "^3.2.0",
    "@types/chroma-js": "^2",
    "@types/glob": "^7.2.0",
    "@types/jsdom": "^16.2.14",
    "@types/lodash": "^4",
    "@types/marked": "^4",
    "@types/node": "^16.11.26",
    "@types/offscreencanvas": "^2019.7.0",
    "@types/prettier": "^2.6.3",
    "@types/prismjs": "^1",
    "@types/svg-path-parser": "^1",
    "@types/ungap__structured-clone": "^0.3.0",
    "@types/uuid": "^8",
    "@types/vue": "^2.0.0",
    "@typescript-eslint/eslint-plugin": "^5.27.1",
    "@typescript-eslint/parser": "^5.27.1",
    "@vitejs/plugin-vue": "^2.3.1",
    "@vue/compiler-sfc": "^3.2.33",
    "@vue/eslint-config-prettier": "^7.0.0",
    "@vue/eslint-config-typescript": "^10.0.0",
    "@vue/test-utils": "^2.0.0-rc.18",
    "@vue/tsconfig": "^0.1.3",
    "autoprefixer": "^10.4.7",
    "cypress": "^9.5.3",
    "eslint": "^8.5.0",
    "eslint-plugin-cypress": "^2.12.1",
    "eslint-plugin-vue": "^8.2.0",
    "jsdom": "^19.0.0",
    "mlly": "^0.5.3",
    "postcss": "^8.4.13",
    "prettier": "^2.5.1",
    "start-server-and-test": "^1.14.0",
    "typescript": "~4.6.3",
    "unplugin-auto-import": "^0.8.7",
    "unplugin-icons": "^0.14.3",
    "unplugin-vue-components": "^0.19.6",
    "vite": "^2.9.1",
    "vite-plugin-comlink": "^3.0.3",
    "vite-plugin-inspect": "^0.5.0",
    "vite-plugin-pages": "^0.23.0",
    "vite-plugin-static-copy": "^0.5.0",
    "vite-tsconfig-paths": "^3.4.1",
    "vitest": "^0.8.1",
    "vue-eslint-parser": "^9.0.2",
    "vue-tsc": "^0.33.9"
  },
  "packageManager": "yarn@3.2.0"
}
`,"/postcss.config.cjs":`module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`,"/tailwind.config.cjs":`module.exports = {
  content: [
    "./pages/**/*.{vue,ts}",
    "./packages/**/*.vue",
    "./node_modules/@hotellistat/robust-ui/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
`,"/tsconfig.app.json":`{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["env.d.ts", "packages/**/*", "pages/**/*"],
  "exclude": ["src/**/__tests__/*"],
  "compilerOptions": {
    "composite": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./packages/*"]
    },
    "lib": ["ESNext", "DOM"],
    "target": "ES2020",
    "types": ["unplugin-icons/types/vue"]
  }
}
`,"/tsconfig.json":`{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.vite-config.json"
    },
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.vitest.json"
    }
  ],
}
`,"/tsconfig.vite-config.json":`{
  "extends": "@vue/tsconfig/tsconfig.node.json",
  "include": ["vite.config.*", "packages/utilities/vite/*.ts"],
  "compilerOptions": {
    "composite": true,
    "types": ["node", "vitest"]
  }
}
`,"/tsconfig.vitest.json":`{
  "extends": "./tsconfig.app.json",
  "exclude": [],
  "compilerOptions": {
    "composite": true,
    "lib": [],
    "types": ["node", "jsdom"]
  }
}
`,"/vite.config.ts":`import vitePluginVue from "@vitejs/plugin-vue"
import unpluginAutoImport from "unplugin-auto-import/vite"
import IconsResolver from "unplugin-icons/resolver"
import unpluginIcons from "unplugin-icons/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import unpluginComponents from "unplugin-vue-components/vite"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import { comlink as vitePluginComlink } from "vite-plugin-comlink"
import vitePluginInspect from "vite-plugin-inspect"
import vitePluginPages from "vite-plugin-pages"
import utils from "./packages/utilities/vite"

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./packages", import.meta.url)),
    },
  },
  plugins: [
    vitePluginInspect(),
    unpluginAutoImport({
      dts: fileURLToPath(
        new URL("./packages/framework/types/auto-import.d.ts", import.meta.url)
      ),
      imports: ["vue", "vue-router", "@vueuse/core"],
      eslintrc: {
        enabled: true,
      },
    }),
    unpluginIcons(),
    vitePluginVue({
      reactivityTransform: true,
    }),
    vitePluginPages({
      dirs: utils.pages.fetchDirs(),
    }),
    unpluginComponents({
      resolvers: [NaiveUiResolver(), IconsResolver()],
      dts: fileURLToPath(
        new URL("./packages/framework/types/components.d.ts", import.meta.url)
      ),
    }),
    vitePluginComlink(),
    utils.plugins.ViteGenerateIndex({
      dirs: ["packages/*/components", "packages/framework/components/**"],
      extension: "ts",
      excludeFiles: [/^.+(\\.entry\\.)/gm],
    }),
  ],
  worker: {
    plugins: [vitePluginComlink()],
  },
})
`,"/yarn.lock":`# This file is generated by running "yarn install" inside your project.
# Manual changes might be lost - proceed with caution!

__metadata:
  version: 6
  cacheKey: 8

"@antfu/install-pkg@npm:^0.1.0":
  version: 0.1.0
  resolution: "@antfu/install-pkg@npm:0.1.0"
  dependencies:
    execa: ^5.1.1
    find-up: ^5.0.0
  checksum: 5ab86edcc90a85ceab7e56ecd3499b05ca93ee9eaa176da582a79d451939c701ad25e847e774b7d3f19e99eac845d06bf27685ffe969f13a475df9a9124806b3
  languageName: node
  linkType: hard

"@antfu/utils@npm:^0.5.0, @antfu/utils@npm:^0.5.1":
  version: 0.5.1
  resolution: "@antfu/utils@npm:0.5.1"
  checksum: 54a64a1a7d451d07be2ead39dee534281f0cca35db2e72b995f4d81baedfe4c8889f428e46ebefe32c7f4444fc2d5389a5a52223fe8cef01cc98415c8ffc9491
  languageName: node
  linkType: hard

"@antfu/utils@npm:^0.5.2":
  version: 0.5.2
  resolution: "@antfu/utils@npm:0.5.2"
  checksum: 9b91446b2dbb823abeeba1cc33d6ebf701a462923408ad4751fbe162da46ae0669c774c2b5435fc77691dc207ce5de5945e693d5163e07d6ef42e376b04c7af4
  languageName: node
  linkType: hard

"@babel/code-frame@npm:^7.12.13, @babel/code-frame@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/code-frame@npm:7.16.7"
  dependencies:
    "@babel/highlight": ^7.16.7
  checksum: db2f7faa31bc2c9cf63197b481b30ea57147a5fc1a6fab60e5d6c02cdfbf6de8e17b5121f99917b3dabb5eeb572da078312e70697415940383efc140d4e0808b
  languageName: node
  linkType: hard

"@babel/compat-data@npm:^7.17.10":
  version: 7.17.10
  resolution: "@babel/compat-data@npm:7.17.10"
  checksum: e85051087cd4690de5061909a2dd2d7f8b6434a3c2e30be6c119758db2027ae1845bcd75a81127423dd568b706ac6994a1a3d7d701069a23bf5cfe900728290b
  languageName: node
  linkType: hard

"@babel/core@npm:7.13.10":
  version: 7.13.10
  resolution: "@babel/core@npm:7.13.10"
  dependencies:
    "@babel/code-frame": ^7.12.13
    "@babel/generator": ^7.13.9
    "@babel/helper-compilation-targets": ^7.13.10
    "@babel/helper-module-transforms": ^7.13.0
    "@babel/helpers": ^7.13.10
    "@babel/parser": ^7.13.10
    "@babel/template": ^7.12.13
    "@babel/traverse": ^7.13.0
    "@babel/types": ^7.13.0
    convert-source-map: ^1.7.0
    debug: ^4.1.0
    gensync: ^1.0.0-beta.2
    json5: ^2.1.2
    lodash: ^4.17.19
    semver: ^6.3.0
    source-map: ^0.5.0
  checksum: 9b3362fd02e6a4f3ad642893312ec3d22713c4eeb2571c994d49c31f38d24893a6a18f4b49abb8d56b510e116278608eaddde2ca72ccb39ab29350efa5af39de
  languageName: node
  linkType: hard

"@babel/generator@npm:7.13.9":
  version: 7.13.9
  resolution: "@babel/generator@npm:7.13.9"
  dependencies:
    "@babel/types": ^7.13.0
    jsesc: ^2.5.1
    source-map: ^0.5.0
  checksum: 1b0e9fa1b5ea6656f0abeeedc99ff7bffa455d7bf118f4d17a75d80c439206b4ba3e1071c104b486b7447689512969286cbde505e6169ab38cf437e13ca54225
  languageName: node
  linkType: hard

"@babel/generator@npm:^7.13.0, @babel/generator@npm:^7.13.9, @babel/generator@npm:^7.17.10":
  version: 7.17.10
  resolution: "@babel/generator@npm:7.17.10"
  dependencies:
    "@babel/types": ^7.17.10
    "@jridgewell/gen-mapping": ^0.1.0
    jsesc: ^2.5.1
  checksum: 9ec596a6ffec7bec239133a4ba79d4f834e6c894019accb1c70a7a5affbec9d0912d3baef200edd9d48e553d4ef72abcbffbc73cfb7d75f327c24186e887f79c
  languageName: node
  linkType: hard

"@babel/helper-compilation-targets@npm:^7.13.10":
  version: 7.17.10
  resolution: "@babel/helper-compilation-targets@npm:7.17.10"
  dependencies:
    "@babel/compat-data": ^7.17.10
    "@babel/helper-validator-option": ^7.16.7
    browserslist: ^4.20.2
    semver: ^6.3.0
  peerDependencies:
    "@babel/core": ^7.0.0
  checksum: 5f547c7ebd372e90fa72c2aaea867e7193166e9f469dec5acde4f0e18a78b80bdca8e02a0f641f3e998be984fb5b802c729a9034faaee8b1a9ef6670cb76f120
  languageName: node
  linkType: hard

"@babel/helper-environment-visitor@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-environment-visitor@npm:7.16.7"
  dependencies:
    "@babel/types": ^7.16.7
  checksum: c03a10105d9ebd1fe632a77356b2e6e2f3c44edba9a93b0dc3591b6a66bd7a2e323dd9502f9ce96fc6401234abff1907aa877b6674f7826b61c953f7c8204bbe
  languageName: node
  linkType: hard

"@babel/helper-function-name@npm:^7.12.13, @babel/helper-function-name@npm:^7.17.9":
  version: 7.17.9
  resolution: "@babel/helper-function-name@npm:7.17.9"
  dependencies:
    "@babel/template": ^7.16.7
    "@babel/types": ^7.17.0
  checksum: a59b2e5af56d8f43b9b0019939a43774754beb7cb01a211809ca8031c71890999d07739e955343135ec566c4d8ff725435f1f60fb0af3bb546837c1f9f84f496
  languageName: node
  linkType: hard

"@babel/helper-hoist-variables@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-hoist-variables@npm:7.16.7"
  dependencies:
    "@babel/types": ^7.16.7
  checksum: 6ae1641f4a751cd9045346e3f61c3d9ec1312fd779ab6d6fecfe2a96e59a481ad5d7e40d2a840894c13b3fd6114345b157f9e3062fc5f1580f284636e722de60
  languageName: node
  linkType: hard

"@babel/helper-module-imports@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-module-imports@npm:7.16.7"
  dependencies:
    "@babel/types": ^7.16.7
  checksum: ddd2c4a600a2e9a4fee192ab92bf35a627c5461dbab4af31b903d9ba4d6b6e59e0ff3499fde4e2e9a0eebe24906f00b636f8b4d9bd72ff24d50e6618215c3212
  languageName: node
  linkType: hard

"@babel/helper-module-transforms@npm:^7.13.0":
  version: 7.17.7
  resolution: "@babel/helper-module-transforms@npm:7.17.7"
  dependencies:
    "@babel/helper-environment-visitor": ^7.16.7
    "@babel/helper-module-imports": ^7.16.7
    "@babel/helper-simple-access": ^7.17.7
    "@babel/helper-split-export-declaration": ^7.16.7
    "@babel/helper-validator-identifier": ^7.16.7
    "@babel/template": ^7.16.7
    "@babel/traverse": ^7.17.3
    "@babel/types": ^7.17.0
  checksum: 0b8f023aa7ff82dc4864349d54c4557865ad8ba54d78f6d78a86b05ca40f65c2d60acb4a54c5c309e7a4356beb9a89b876e54af4b3c4801ad25f62ec3721f0ae
  languageName: node
  linkType: hard

"@babel/helper-simple-access@npm:^7.17.7":
  version: 7.17.7
  resolution: "@babel/helper-simple-access@npm:7.17.7"
  dependencies:
    "@babel/types": ^7.17.0
  checksum: 58a9bfd054720024f6ff47fbb113c96061dc2bd31a5e5285756bd3c2e83918c6926900e00150d0fb175d899494fe7d69bf2a8b278c32ef6f6bea8d032e6a3831
  languageName: node
  linkType: hard

"@babel/helper-split-export-declaration@npm:^7.12.13, @babel/helper-split-export-declaration@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-split-export-declaration@npm:7.16.7"
  dependencies:
    "@babel/types": ^7.16.7
  checksum: e10aaf135465c55114627951b79115f24bc7af72ecbb58d541d66daf1edaee5dde7cae3ec8c3639afaf74526c03ae3ce723444e3b5b3dc77140c456cd84bcaa1
  languageName: node
  linkType: hard

"@babel/helper-validator-identifier@npm:^7.12.11, @babel/helper-validator-identifier@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-validator-identifier@npm:7.16.7"
  checksum: dbb3db9d184343152520a209b5684f5e0ed416109cde82b428ca9c759c29b10c7450657785a8b5c5256aa74acc6da491c1f0cf6b784939f7931ef82982051b69
  languageName: node
  linkType: hard

"@babel/helper-validator-option@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/helper-validator-option@npm:7.16.7"
  checksum: c5ccc451911883cc9f12125d47be69434f28094475c1b9d2ada7c3452e6ac98a1ee8ddd364ca9e3f9855fcdee96cdeafa32543ebd9d17fee7a1062c202e80570
  languageName: node
  linkType: hard

"@babel/helpers@npm:^7.13.10":
  version: 7.17.9
  resolution: "@babel/helpers@npm:7.17.9"
  dependencies:
    "@babel/template": ^7.16.7
    "@babel/traverse": ^7.17.9
    "@babel/types": ^7.17.0
  checksum: 3c6db861e4c82fff2de3efb4ad12e32658c50c29920597cd0979390659b202e5849acd9542e0e2453167a52ccc30156ee4455d64d0e330f020d991d7551566f8
  languageName: node
  linkType: hard

"@babel/highlight@npm:^7.16.7":
  version: 7.17.9
  resolution: "@babel/highlight@npm:7.17.9"
  dependencies:
    "@babel/helper-validator-identifier": ^7.16.7
    chalk: ^2.0.0
    js-tokens: ^4.0.0
  checksum: 7bdf10228f2e4d18f48f114411ed584380d356e7c168d7582c14abd8df9909b2fc09e0a7cd334f47c3eb0bc17e639e0c8d9688c6afd5d09a2bdbf0ac193b11fd
  languageName: node
  linkType: hard

"@babel/parser@npm:7.14.6":
  version: 7.14.6
  resolution: "@babel/parser@npm:7.14.6"
  bin:
    parser: ./bin/babel-parser.js
  checksum: 104482e07971a78a3d68a0c329b1303981a272f55a510d39c93dac3c293f207ec863329046abc5d8bb86db58c49670cc607654793470a87ccd386544c2ccf298
  languageName: node
  linkType: hard

"@babel/parser@npm:^7.13.0, @babel/parser@npm:^7.13.10, @babel/parser@npm:^7.16.4, @babel/parser@npm:^7.16.7, @babel/parser@npm:^7.17.10, @babel/parser@npm:^7.6.0, @babel/parser@npm:^7.9.6":
  version: 7.17.10
  resolution: "@babel/parser@npm:7.17.10"
  bin:
    parser: ./bin/babel-parser.js
  checksum: a9493d9fb8625e0904a178703866c8ee4d3a6003f0954b08df9f772b54dae109c69376812b74732e0c3e1a7f1d5b30915577a1db12e5e16b0abee083539df574
  languageName: node
  linkType: hard

"@babel/template@npm:^7.12.13, @babel/template@npm:^7.16.7":
  version: 7.16.7
  resolution: "@babel/template@npm:7.16.7"
  dependencies:
    "@babel/code-frame": ^7.16.7
    "@babel/parser": ^7.16.7
    "@babel/types": ^7.16.7
  checksum: 10cd112e89276e00f8b11b55a51c8b2f1262c318283a980f4d6cdb0286dc05734b9aaeeb9f3ad3311900b09bc913e02343fcaa9d4a4f413964aaab04eb84ac4a
  languageName: node
  linkType: hard

"@babel/traverse@npm:7.13.0":
  version: 7.13.0
  resolution: "@babel/traverse@npm:7.13.0"
  dependencies:
    "@babel/code-frame": ^7.12.13
    "@babel/generator": ^7.13.0
    "@babel/helper-function-name": ^7.12.13
    "@babel/helper-split-export-declaration": ^7.12.13
    "@babel/parser": ^7.13.0
    "@babel/types": ^7.13.0
    debug: ^4.1.0
    globals: ^11.1.0
    lodash: ^4.17.19
  checksum: 7d584b5541396b02f6973ba8ec8a067f2a6c2fd2e894c663dfae36e86e65a004a6865fbffbfc89ca040c894f9c12134bb971d31f09e7ec32c28e9b18bf737f2a
  languageName: node
  linkType: hard

"@babel/traverse@npm:^7.13.0, @babel/traverse@npm:^7.17.3, @babel/traverse@npm:^7.17.9":
  version: 7.17.10
  resolution: "@babel/traverse@npm:7.17.10"
  dependencies:
    "@babel/code-frame": ^7.16.7
    "@babel/generator": ^7.17.10
    "@babel/helper-environment-visitor": ^7.16.7
    "@babel/helper-function-name": ^7.17.9
    "@babel/helper-hoist-variables": ^7.16.7
    "@babel/helper-split-export-declaration": ^7.16.7
    "@babel/parser": ^7.17.10
    "@babel/types": ^7.17.10
    debug: ^4.1.0
    globals: ^11.1.0
  checksum: 44ec0a59aa274b59464d52b1796eb6e54c67ae0f946de0d608068e28b1ab7065bdf53c0169d9102854cb00aa01944c83e722f08aeab96d9cc6bf56f8aede70fd
  languageName: node
  linkType: hard

"@babel/types@npm:7.13.0":
  version: 7.13.0
  resolution: "@babel/types@npm:7.13.0"
  dependencies:
    "@babel/helper-validator-identifier": ^7.12.11
    lodash: ^4.17.19
    to-fast-properties: ^2.0.0
  checksum: 3dbb08add345325a49e1deebefa8d3774a8ab055c4be675c339a389358f4b3443652ded4bfdb230b342c6af12593a6fd3fb95156564e7ec84081018815896821
  languageName: node
  linkType: hard

"@babel/types@npm:^7.13.0, @babel/types@npm:^7.16.7, @babel/types@npm:^7.17.0, @babel/types@npm:^7.17.10, @babel/types@npm:^7.6.1, @babel/types@npm:^7.8.3, @babel/types@npm:^7.9.6":
  version: 7.17.10
  resolution: "@babel/types@npm:7.17.10"
  dependencies:
    "@babel/helper-validator-identifier": ^7.16.7
    to-fast-properties: ^2.0.0
  checksum: 40cfc3f43a3ab7374df8ee6844793f804c65e7bea0fd1b090886b425106ba26e16e8fa698ae4b2caf2746083fe3e62f03f12997a5982e0d131700f17cbdcfca1
  languageName: node
  linkType: hard

"@colors/colors@npm:1.5.0":
  version: 1.5.0
  resolution: "@colors/colors@npm:1.5.0"
  checksum: d64d5260bed1d5012ae3fc617d38d1afc0329fec05342f4e6b838f46998855ba56e0a73833f4a80fa8378c84810da254f76a8a19c39d038260dc06dc4e007425
  languageName: node
  linkType: hard

"@css-render/plugin-bem@npm:^0.15.10":
  version: 0.15.10
  resolution: "@css-render/plugin-bem@npm:0.15.10"
  peerDependencies:
    css-render: ~0.15.10
  checksum: cbab72a7b5e6cec84041f8ea01b4e5c6d83e44f2a5c8e6cbba3b2a41a8b5ed5faf22390336d70648b5e471d7aab6b13123c0cdaea1bd21c6678d18abd399a203
  languageName: node
  linkType: hard

"@css-render/vue3-ssr@npm:^0.15.10":
  version: 0.15.10
  resolution: "@css-render/vue3-ssr@npm:0.15.10"
  peerDependencies:
    vue: ^3.0.11
  checksum: 7977e0c440d34cd03743809313bea7362e913bf20acb988a1019bbbd8c2aa2c045794344b625fdd6d2bbb1bef9bcf9dccc866978d524b9a358389068c58c81a8
  languageName: node
  linkType: hard

"@cush/relative@npm:^1.0.0":
  version: 1.0.0
  resolution: "@cush/relative@npm:1.0.0"
  checksum: 708681b61986e5f74e44ca5824503c23adb02c088b998429e8ecbbb8e7a4133b9be491cdb6d2b24b39fd9b55fcef109d41ac4f69b74f1f9466268f3c49c020a5
  languageName: node
  linkType: hard

"@cypress/request@npm:^2.88.10":
  version: 2.88.10
  resolution: "@cypress/request@npm:2.88.10"
  dependencies:
    aws-sign2: ~0.7.0
    aws4: ^1.8.0
    caseless: ~0.12.0
    combined-stream: ~1.0.6
    extend: ~3.0.2
    forever-agent: ~0.6.1
    form-data: ~2.3.2
    http-signature: ~1.3.6
    is-typedarray: ~1.0.0
    isstream: ~0.1.2
    json-stringify-safe: ~5.0.1
    mime-types: ~2.1.19
    performance-now: ^2.1.0
    qs: ~6.5.2
    safe-buffer: ^5.1.2
    tough-cookie: ~2.5.0
    tunnel-agent: ^0.6.0
    uuid: ^8.3.2
  checksum: 69c3e3b332e9be4866a900f6bcca5d274d8cea6c99707fbcce061de8dbab11c9b1e39f4c017f6e83e6e682717781d4f6106fd6b7cf9546580fcfac353b6676cf
  languageName: node
  linkType: hard

"@cypress/xvfb@npm:^1.2.4":
  version: 1.2.4
  resolution: "@cypress/xvfb@npm:1.2.4"
  dependencies:
    debug: ^3.1.0
    lodash.once: ^4.1.1
  checksum: 7bdcdaeb1bb692ec9d9bf8ec52538aa0bead6764753f4a067a171a511807a43fab016f7285a56bef6a606c2467ff3f1365e1ad2d2d583b81beed849ee1573fd1
  languageName: node
  linkType: hard

"@emotion/hash@npm:~0.8.0":
  version: 0.8.0
  resolution: "@emotion/hash@npm:0.8.0"
  checksum: 4b35d88a97e67275c1d990c96d3b0450451d089d1508619488fc0acb882cb1ac91e93246d471346ebd1b5402215941ef4162efe5b51534859b39d8b3a0e3ffaa
  languageName: node
  linkType: hard

"@eslint/eslintrc@npm:^1.2.3":
  version: 1.2.3
  resolution: "@eslint/eslintrc@npm:1.2.3"
  dependencies:
    ajv: ^6.12.4
    debug: ^4.3.2
    espree: ^9.3.2
    globals: ^13.9.0
    ignore: ^5.2.0
    import-fresh: ^3.2.1
    js-yaml: ^4.1.0
    minimatch: ^3.1.2
    strip-json-comments: ^3.1.1
  checksum: 48e7b7ac05cd514eee2ebb1d487600f0dd637ac21f63605e353cff6a08c7223275fe4f571d15ee9deae4e78c53edc73369ffcbed15fba4dfc1806179dbf4dc85
  languageName: node
  linkType: hard

"@gar/promisify@npm:^1.1.3":
  version: 1.1.3
  resolution: "@gar/promisify@npm:1.1.3"
  checksum: 4059f790e2d07bf3c3ff3e0fec0daa8144fe35c1f6e0111c9921bd32106adaa97a4ab096ad7dab1e28ee6a9060083c4d1a4ada42a7f5f3f7a96b8812e2b757c1
  languageName: node
  linkType: hard

"@hapi/hoek@npm:^9.0.0":
  version: 9.3.0
  resolution: "@hapi/hoek@npm:9.3.0"
  checksum: 4771c7a776242c3c022b168046af4e324d116a9d2e1d60631ee64f474c6e38d1bb07092d898bf95c7bc5d334c5582798a1456321b2e53ca817d4e7c88bc25b43
  languageName: node
  linkType: hard

"@hapi/topo@npm:^5.0.0":
  version: 5.1.0
  resolution: "@hapi/topo@npm:5.1.0"
  dependencies:
    "@hapi/hoek": ^9.0.0
  checksum: 604dfd5dde76d5c334bd03f9001fce69c7ce529883acf92da96f4fe7e51221bf5e5110e964caca287a6a616ba027c071748ab636ff178ad750547fba611d6014
  languageName: node
  linkType: hard

"@humanwhocodes/config-array@npm:^0.9.2":
  version: 0.9.5
  resolution: "@humanwhocodes/config-array@npm:0.9.5"
  dependencies:
    "@humanwhocodes/object-schema": ^1.2.1
    debug: ^4.1.1
    minimatch: ^3.0.4
  checksum: 8ba6281bc0590f6c6eadeefc14244b5a3e3f5903445aadd1a32099ed80e753037674026ce1b3c945ab93561bea5eb29e3c5bff67060e230c295595ba517a3492
  languageName: node
  linkType: hard

"@humanwhocodes/object-schema@npm:^1.2.1":
  version: 1.2.1
  resolution: "@humanwhocodes/object-schema@npm:1.2.1"
  checksum: a824a1ec31591231e4bad5787641f59e9633827d0a2eaae131a288d33c9ef0290bd16fda8da6f7c0fcb014147865d12118df10db57f27f41e20da92369fcb3f1
  languageName: node
  linkType: hard

"@iconify-json/feather@npm:^1.1.1":
  version: 1.1.1
  resolution: "@iconify-json/feather@npm:1.1.1"
  dependencies:
    "@iconify/types": ^1.0.12
  checksum: 897b45598d9f646ca25d93eae1f584798643cec59058a589cdcd51936eb5e284b962709844d9f5e350fa08f5ffab287c3f6f43104bb0f3e310d474df5980fa43
  languageName: node
  linkType: hard

"@iconify-json/vscode-icons@npm:^1.1.6":
  version: 1.1.6
  resolution: "@iconify-json/vscode-icons@npm:1.1.6"
  dependencies:
    "@iconify/types": ^1.1.0
  checksum: 0d7b1b14ca7660b503a9c243447c414e52a0a4b181567d22838ce441bcc32586286ed9b4ae58015460f6e1974474a21e86f42fc59bc64cb7a6690c1fc5b928f1
  languageName: node
  linkType: hard

"@iconify/types@npm:^1.0.12, @iconify/types@npm:^1.1.0":
  version: 1.1.0
  resolution: "@iconify/types@npm:1.1.0"
  checksum: beffcdbf14e879ff74e79ac29ea0f4f4874f9df632f1994d97395b3f05cbeebaf10f1abc73cf850dc7444924cd57ed92e0e2ca55bacfe3374eff7542d489fbd0
  languageName: node
  linkType: hard

"@iconify/utils@npm:^1.0.32":
  version: 1.0.32
  resolution: "@iconify/utils@npm:1.0.32"
  dependencies:
    "@antfu/install-pkg": ^0.1.0
    "@antfu/utils": ^0.5.0
    "@iconify/types": ^1.1.0
    debug: ^4.3.4
    kolorist: ^1.5.1
    local-pkg: ^0.4.1
  checksum: 914a24beb8dc8adc7064c937979a7ebfa9e577f3024cc92f29934a0dc07430edee44b589acb137a4c234aa8f3a96178c97adf3ca827cf72f6621be042d9eb620
  languageName: node
  linkType: hard

"@jridgewell/gen-mapping@npm:^0.1.0":
  version: 0.1.1
  resolution: "@jridgewell/gen-mapping@npm:0.1.1"
  dependencies:
    "@jridgewell/set-array": ^1.0.0
    "@jridgewell/sourcemap-codec": ^1.4.10
  checksum: 3bcc21fe786de6ffbf35c399a174faab05eb23ce6a03e8769569de28abbf4facc2db36a9ddb0150545ae23a8d35a7cf7237b2aa9e9356a7c626fb4698287d5cc
  languageName: node
  linkType: hard

"@jridgewell/set-array@npm:^1.0.0":
  version: 1.1.1
  resolution: "@jridgewell/set-array@npm:1.1.1"
  checksum: cc5d91e0381c347e3edee4ca90b3c292df9e6e55f29acbe0dd97de8651b4730e9ab761406fd572effa79972a0edc55647b627f8c72315e276d959508853d9bf2
  languageName: node
  linkType: hard

"@jridgewell/sourcemap-codec@npm:^1.4.10":
  version: 1.4.13
  resolution: "@jridgewell/sourcemap-codec@npm:1.4.13"
  checksum: f14449096f60a5f921262322fef65ce0bbbfb778080b3b20212080bcefdeba621c43a58c27065bd536ecb4cc767b18eb9c45f15b6b98a4970139572b60603a1c
  languageName: node
  linkType: hard

"@juggle/resize-observer@npm:^3.3.1":
  version: 3.3.1
  resolution: "@juggle/resize-observer@npm:3.3.1"
  checksum: ddabc4044276a2cb57d469c4917206c7e39f2463aa8e3430e33e4eda554412afe29c22afa40e6708b49dad5d56768dc83acd68a704b1dcd49a0906bb96b991b2
  languageName: node
  linkType: hard

"@nodelib/fs.scandir@npm:2.1.5":
  version: 2.1.5
  resolution: "@nodelib/fs.scandir@npm:2.1.5"
  dependencies:
    "@nodelib/fs.stat": 2.0.5
    run-parallel: ^1.1.9
  checksum: a970d595bd23c66c880e0ef1817791432dbb7acbb8d44b7e7d0e7a22f4521260d4a83f7f9fd61d44fda4610105577f8f58a60718105fb38352baed612fd79e59
  languageName: node
  linkType: hard

"@nodelib/fs.stat@npm:2.0.5, @nodelib/fs.stat@npm:^2.0.2":
  version: 2.0.5
  resolution: "@nodelib/fs.stat@npm:2.0.5"
  checksum: 012480b5ca9d97bff9261571dbbec7bbc6033f69cc92908bc1ecfad0792361a5a1994bc48674b9ef76419d056a03efadfce5a6cf6dbc0a36559571a7a483f6f0
  languageName: node
  linkType: hard

"@nodelib/fs.walk@npm:^1.2.3":
  version: 1.2.8
  resolution: "@nodelib/fs.walk@npm:1.2.8"
  dependencies:
    "@nodelib/fs.scandir": 2.1.5
    fastq: ^1.6.0
  checksum: 190c643f156d8f8f277bf2a6078af1ffde1fd43f498f187c2db24d35b4b4b5785c02c7dc52e356497b9a1b65b13edc996de08de0b961c32844364da02986dc53
  languageName: node
  linkType: hard

"@npmcli/fs@npm:^2.1.0":
  version: 2.1.0
  resolution: "@npmcli/fs@npm:2.1.0"
  dependencies:
    "@gar/promisify": ^1.1.3
    semver: ^7.3.5
  checksum: 6ec6d678af6da49f9dac50cd882d7f661934dd278972ffbaacde40d9eaa2871292d634000a0cca9510f6fc29855fbd4af433e1adbff90a524ec3eaf140f1219b
  languageName: node
  linkType: hard

"@npmcli/move-file@npm:^2.0.0":
  version: 2.0.0
  resolution: "@npmcli/move-file@npm:2.0.0"
  dependencies:
    mkdirp: ^1.0.4
    rimraf: ^3.0.2
  checksum: 1388777b507b0c592d53f41b9d182e1a8de7763bc625fc07999b8edbc22325f074e5b3ec90af79c89d6987fdb2325bc66d59f483258543c14a43661621f841b0
  languageName: node
  linkType: hard

"@polka/url@npm:^1.0.0-next.20":
  version: 1.0.0-next.21
  resolution: "@polka/url@npm:1.0.0-next.21"
  checksum: c7654046d38984257dd639eab3dc770d1b0340916097b2fac03ce5d23506ada684e05574a69b255c32ea6a144a957c8cd84264159b545fca031c772289d88788
  languageName: node
  linkType: hard

"@prettier/plugin-pug@npm:^2.0.0":
  version: 2.0.0
  resolution: "@prettier/plugin-pug@npm:2.0.0"
  dependencies:
    pug-lexer: ^5.0.0
  peerDependencies:
    prettier: ^2.3.0
  checksum: fecb759f5c64dbe2b5b94a0276819cb8862a9f75eee1d6be0825fe202dbd96689fcf16d19edb224bad32ecd6db887fd637e729081d92f71b587dea02bd0ce2dd
  languageName: node
  linkType: hard

"@rollup/pluginutils@npm:^4.2.1":
  version: 4.2.1
  resolution: "@rollup/pluginutils@npm:4.2.1"
  dependencies:
    estree-walker: ^2.0.1
    picomatch: ^2.2.2
  checksum: 6bc41f22b1a0f1efec3043899e4d3b6b1497b3dea4d94292d8f83b4cf07a1073ecbaedd562a22d11913ff7659f459677b01b09e9598a98936e746780ecc93a12
  languageName: node
  linkType: hard

"@rushstack/eslint-patch@npm:^1.1.0":
  version: 1.1.3
  resolution: "@rushstack/eslint-patch@npm:1.1.3"
  checksum: 53752d1e34e45a91b30a016b837c33054fcbd0a295c0312b0812dab78289ea680d7c0c3f19c1f885f49764d416727747133765ff5bfce31a9c4cc93c7a56ebe1
  languageName: node
  linkType: hard

"@sideway/address@npm:^4.1.3":
  version: 4.1.4
  resolution: "@sideway/address@npm:4.1.4"
  dependencies:
    "@hapi/hoek": ^9.0.0
  checksum: b9fca2a93ac2c975ba12e0a6d97853832fb1f4fb02393015e012b47fa916a75ca95102d77214b2a29a2784740df2407951af8c5dde054824c65577fd293c4cdb
  languageName: node
  linkType: hard

"@sideway/formula@npm:^3.0.0":
  version: 3.0.0
  resolution: "@sideway/formula@npm:3.0.0"
  checksum: 8ae26a0ed6bc84f7310be6aae6eb9d81e97f382619fc69025d346871a707eaab0fa38b8c857e3f0c35a19923de129f42d35c50b8010c928d64aab41578580ec4
  languageName: node
  linkType: hard

"@sideway/pinpoint@npm:^2.0.0":
  version: 2.0.0
  resolution: "@sideway/pinpoint@npm:2.0.0"
  checksum: 0f4491e5897fcf5bf02c46f5c359c56a314e90ba243f42f0c100437935daa2488f20482f0f77186bd6bf43345095a95d8143ecf8b1f4d876a7bc0806aba9c3d2
  languageName: node
  linkType: hard

"@swan-io/boxed@npm:^0.9.0":
  version: 0.9.0
  resolution: "@swan-io/boxed@npm:0.9.0"
  checksum: f428fc11aa5bcb80fced718542e98cba18697c450ae929a3fa6e954a13d10d7b2a2004b484a2219e37229c19f2ad8964947d2e8c858353e1102dc26fa3d93418
  languageName: node
  linkType: hard

"@tailwindcss/forms@npm:^0.5.1":
  version: 0.5.1
  resolution: "@tailwindcss/forms@npm:0.5.1"
  dependencies:
    mini-svg-data-uri: ^1.2.3
  peerDependencies:
    tailwindcss: ">=3.0.0 || >= 3.0.0-alpha.1"
  checksum: c9dc0124235692db6205960a16cfc8fa09ffd6491b9989cddaaaaf92bf252b9029de2e766dc1714aed056d56f9c347d5548dbb5b9a95f512b3301e20054fdbc9
  languageName: node
  linkType: hard

"@tailwindcss/typography@npm:^0.5.2":
  version: 0.5.2
  resolution: "@tailwindcss/typography@npm:0.5.2"
  dependencies:
    lodash.castarray: ^4.4.0
    lodash.isplainobject: ^4.0.6
    lodash.merge: ^4.6.2
  peerDependencies:
    tailwindcss: "*"
  checksum: f6c27e32c9b48b0e906561d1e9dd3eec8fd5efc9792fd691269ceaa9d30d35bc715023215ec83ff8e5475c38af69e164d577672d935813b70e04b1c820b2ea8e
  languageName: node
  linkType: hard

"@tootallnate/once@npm:2":
  version: 2.0.0
  resolution: "@tootallnate/once@npm:2.0.0"
  checksum: ad87447820dd3f24825d2d947ebc03072b20a42bfc96cbafec16bff8bbda6c1a81fcb0be56d5b21968560c5359a0af4038a68ba150c3e1694fe4c109a063bed8
  languageName: node
  linkType: hard

"@trivago/prettier-plugin-sort-imports@npm:^3.2.0":
  version: 3.2.0
  resolution: "@trivago/prettier-plugin-sort-imports@npm:3.2.0"
  dependencies:
    "@babel/core": 7.13.10
    "@babel/generator": 7.13.9
    "@babel/parser": 7.14.6
    "@babel/traverse": 7.13.0
    "@babel/types": 7.13.0
    javascript-natural-sort: 0.7.1
    lodash: 4.17.21
  peerDependencies:
    prettier: 2.x
  checksum: 22461433fa0dc82621713cdfb88f8f527c6c41729e9859bb7f0106ef23c35b0da591ee7fed63516be7e8df5604dc8055f0c7e200fed1ef97f44000c9fe25a890
  languageName: node
  linkType: hard

"@types/chai-subset@npm:^1.3.3":
  version: 1.3.3
  resolution: "@types/chai-subset@npm:1.3.3"
  dependencies:
    "@types/chai": "*"
  checksum: 4481da7345022995f5a105e6683744f7203d2c3d19cfe88d8e17274d045722948abf55e0adfd97709e0f043dade37a4d4e98cd4c660e2e8a14f23e6ecf79418f
  languageName: node
  linkType: hard

"@types/chai@npm:*, @types/chai@npm:^4.3.0":
  version: 4.3.1
  resolution: "@types/chai@npm:4.3.1"
  checksum: 2ee246b76c469cd620a7a1876a73bc597074361b67d547b4bd96a0c1adb43597ede2d8589ab626192e14349d83cbb646cc11e2c179eeeb43ff11596de94d82c4
  languageName: node
  linkType: hard

"@types/chroma-js@npm:^2":
  version: 2.1.3
  resolution: "@types/chroma-js@npm:2.1.3"
  checksum: 8c94c421b9613c534471b18912b11cdbb267ab8da380ce6d484115f48fb08583e7ab1f7e26fa0e7811a0d42ac531fe9a9b8475afe7b7b91d86cd08b758ca3add
  languageName: node
  linkType: hard

"@types/debug@npm:^4.1.7":
  version: 4.1.7
  resolution: "@types/debug@npm:4.1.7"
  dependencies:
    "@types/ms": "*"
  checksum: 0a7b89d8ed72526858f0b61c6fd81f477853e8c4415bb97f48b1b5545248d2ae389931680b94b393b993a7cfe893537a200647d93defe6d87159b96812305adc
  languageName: node
  linkType: hard

"@types/glob@npm:^7.2.0":
  version: 7.2.0
  resolution: "@types/glob@npm:7.2.0"
  dependencies:
    "@types/minimatch": "*"
    "@types/node": "*"
  checksum: 6ae717fedfdfdad25f3d5a568323926c64f52ef35897bcac8aca8e19bc50c0bd84630bbd063e5d52078b2137d8e7d3c26eabebd1a2f03ff350fff8a91e79fc19
  languageName: node
  linkType: hard

"@types/jest@npm:^27.0.1":
  version: 27.5.1
  resolution: "@types/jest@npm:27.5.1"
  dependencies:
    jest-matcher-utils: ^27.0.0
    pretty-format: ^27.0.0
  checksum: be20e39f7aaf17179109c0060d0a0489cec2034d4e2e28a631284c7ecd13c5ae52f62697a33a0e89b03b6cfe54e9d5e8c2bd387ab2bd90d6071d68c63b86d1e3
  languageName: node
  linkType: hard

"@types/jsdom@npm:^16.2.14":
  version: 16.2.14
  resolution: "@types/jsdom@npm:16.2.14"
  dependencies:
    "@types/node": "*"
    "@types/parse5": "*"
    "@types/tough-cookie": "*"
  checksum: 12bb926fa74ea07c0ba0bfd5bf185ac0fd771b28666a5e8784b9af4bb96bb0c51fc5f494eff7da1d3cd804e4757f640a23c344c1cd5d188f95ab0ab51770d88b
  languageName: node
  linkType: hard

"@types/json-schema@npm:^7.0.9":
  version: 7.0.11
  resolution: "@types/json-schema@npm:7.0.11"
  checksum: 527bddfe62db9012fccd7627794bd4c71beb77601861055d87e3ee464f2217c85fca7a4b56ae677478367bbd248dbde13553312b7d4dbc702a2f2bbf60c4018d
  languageName: node
  linkType: hard

"@types/json5@npm:^0.0.29":
  version: 0.0.29
  resolution: "@types/json5@npm:0.0.29"
  checksum: e60b153664572116dfea673c5bda7778dbff150498f44f998e34b5886d8afc47f16799280e4b6e241c0472aef1bc36add771c569c68fc5125fc2ae519a3eb9ac
  languageName: node
  linkType: hard

"@types/lodash-es@npm:^4.17.6":
  version: 4.17.6
  resolution: "@types/lodash-es@npm:4.17.6"
  dependencies:
    "@types/lodash": "*"
  checksum: 9bd239dd525086e278821949ce12fbdd4f100a060fed9323fc7ad5661113e1641f28a7ebab617230ed3474680d8f4de705c1928b48252bb684be6ec9eed715db
  languageName: node
  linkType: hard

"@types/lodash@npm:*, @types/lodash@npm:^4, @types/lodash@npm:^4.14.181":
  version: 4.14.182
  resolution: "@types/lodash@npm:4.14.182"
  checksum: 7dd137aa9dbabd632408bd37009d984655164fa1ecc3f2b6eb94afe35bf0a5852cbab6183148d883e9c73a958b7fec9a9bcf7c8e45d41195add6a18c34958209
  languageName: node
  linkType: hard

"@types/marked@npm:^4":
  version: 4.0.3
  resolution: "@types/marked@npm:4.0.3"
  checksum: 2fc409a6291cb770688731a444f54e7eab6257c9b565dea4e9d2f3b6654b606e9dd8ea4a924e306b2d2f581dedcb7a27f10f2ca7aed828b11642ab85955341f1
  languageName: node
  linkType: hard

"@types/minimatch@npm:*":
  version: 3.0.5
  resolution: "@types/minimatch@npm:3.0.5"
  checksum: c41d136f67231c3131cf1d4ca0b06687f4a322918a3a5adddc87ce90ed9dbd175a3610adee36b106ae68c0b92c637c35e02b58c8a56c424f71d30993ea220b92
  languageName: node
  linkType: hard

"@types/ms@npm:*":
  version: 0.7.31
  resolution: "@types/ms@npm:0.7.31"
  checksum: daadd354aedde024cce6f5aa873fefe7b71b22cd0e28632a69e8b677aeb48ae8caa1c60e5919bb781df040d116b01cb4316335167a3fc0ef6a63fa3614c0f6da
  languageName: node
  linkType: hard

"@types/node@npm:*":
  version: 17.0.31
  resolution: "@types/node@npm:17.0.31"
  checksum: 704618350f8420d5c47db0f7778398e821b7724369946f5c441a7e6b9343295553936400eb8309f0b07d5e39c240988ab3456b983712ca86265dabc9aee4ad3d
  languageName: node
  linkType: hard

"@types/node@npm:^14.14.31":
  version: 14.18.16
  resolution: "@types/node@npm:14.18.16"
  checksum: 1999799309dc8620a2adf9a5d5e48416af87321bae4c950b4aa8018fcef2c3b6c1fcf98c39eae06f6492c03a643a5a44e2bb3750cd2574d9cf7eac33bac50e24
  languageName: node
  linkType: hard

"@types/node@npm:^16.11.26":
  version: 16.11.33
  resolution: "@types/node@npm:16.11.33"
  checksum: 5c86d3f1e3b996607b41405d368d2e19d410eee0054595cef73d230368a609a2863926e75ad19f5091f0fd742cd018b667d54c51292018dd8020a202a5b29fa9
  languageName: node
  linkType: hard

"@types/node@npm:~17.0.5":
  version: 17.0.36
  resolution: "@types/node@npm:17.0.36"
  checksum: 11055fde0a1e1421113849b5e32c7022911efc0be670729947bf0162970e79962d804b1eb8a9afb291380cac97cf0e684511415d586ae5fe1560322c940fe188
  languageName: node
  linkType: hard

"@types/offscreencanvas@npm:^2019.7.0":
  version: 2019.7.0
  resolution: "@types/offscreencanvas@npm:2019.7.0"
  checksum: 018cfcd19e0c59c44d14ba61caaca7246f77fbb512839c7881654b7f2b6591dbdd5857362eccbf49f29cdc93724e71a4b37c8b6cf203388f9c04e913a53ea390
  languageName: node
  linkType: hard

"@types/parse5@npm:*":
  version: 6.0.3
  resolution: "@types/parse5@npm:6.0.3"
  checksum: ddb59ee4144af5dfcc508a8dcf32f37879d11e12559561e65788756b95b33e6f03ea027d88e1f5408f9b7bfb656bf630ace31a2169edf44151daaf8dd58df1b7
  languageName: node
  linkType: hard

"@types/prettier@npm:^2.6.3":
  version: 2.6.3
  resolution: "@types/prettier@npm:2.6.3"
  checksum: e1836699ca189fff6d2a73dc22e028b6a6f693ed1180d5998ac29fa197caf8f85aa92cb38db642e4a370e616b451cb5722ad2395dab11c78e025a1455f37d1f0
  languageName: node
  linkType: hard

"@types/prismjs@npm:^1":
  version: 1.26.0
  resolution: "@types/prismjs@npm:1.26.0"
  checksum: cd5e7a6214c1f4213ec512a5fcf6d8fe37a56b813fc57ac95b5ff5ee074742bfdbd2f2730d9fd985205bf4586728e09baa97023f739e5aa1c9735a7c1ecbd11a
  languageName: node
  linkType: hard

"@types/sinonjs__fake-timers@npm:8.1.1":
  version: 8.1.1
  resolution: "@types/sinonjs__fake-timers@npm:8.1.1"
  checksum: ca09d54d47091d87020824a73f026300fa06b17cd9f2f9b9387f28b549364b141ef194ee28db762f6588de71d8febcd17f753163cb7ea116b8387c18e80ebd5c
  languageName: node
  linkType: hard

"@types/sizzle@npm:^2.3.2":
  version: 2.3.3
  resolution: "@types/sizzle@npm:2.3.3"
  checksum: 586a9fb1f6ff3e325e0f2cc1596a460615f0bc8a28f6e276ac9b509401039dd242fa8b34496d3a30c52f5b495873922d09a9e76c50c2ab2bcc70ba3fb9c4e160
  languageName: node
  linkType: hard

"@types/svg-path-parser@npm:^1":
  version: 1.1.3
  resolution: "@types/svg-path-parser@npm:1.1.3"
  checksum: 534e5945c9ef557b066078541b24df27326efd33b5ffdafd3ba46c23e099093c41e85c0c309c378f2bf8ea5e3714f7c016caaba5fa3d9b93ad33a7814940feec
  languageName: node
  linkType: hard

"@types/tough-cookie@npm:*":
  version: 4.0.2
  resolution: "@types/tough-cookie@npm:4.0.2"
  checksum: e055556ffdaa39ad85ede0af192c93f93f986f4bd9e9426efdc2948e3e2632db3a4a584d4937dbf6d7620527419bc99e6182d3daf2b08685e710f2eda5291905
  languageName: node
  linkType: hard

"@types/ungap__structured-clone@npm:^0.3.0":
  version: 0.3.0
  resolution: "@types/ungap__structured-clone@npm:0.3.0"
  checksum: 1502276e64645c2157e7a6d0dc6b572787b99f5a4e64d11711fcc05edb9c5be5d0a7827939d269746a29f24ae96c9581b16f12d00604dacfbfdc6b62ba6025c5
  languageName: node
  linkType: hard

"@types/uuid@npm:^8":
  version: 8.3.4
  resolution: "@types/uuid@npm:8.3.4"
  checksum: 6f11f3ff70f30210edaa8071422d405e9c1d4e53abbe50fdce365150d3c698fe7bbff65c1e71ae080cbfb8fded860dbb5e174da96fdbbdfcaa3fb3daa474d20f
  languageName: node
  linkType: hard

"@types/vue@npm:^2.0.0":
  version: 2.0.0
  resolution: "@types/vue@npm:2.0.0"
  dependencies:
    vue: "*"
  checksum: c5e6f7281d25f951ed7e160c12e88738ec65691b01648987428ee65730e69bc6f7aa50e6218e86ebf662ade8b6ae274a59e54047f83609af805db9c64b858f39
  languageName: node
  linkType: hard

"@types/yauzl@npm:^2.9.1":
  version: 2.10.0
  resolution: "@types/yauzl@npm:2.10.0"
  dependencies:
    "@types/node": "*"
  checksum: 55d27ae5d346ea260e40121675c24e112ef0247649073848e5d4e03182713ae4ec8142b98f61a1c6cbe7d3b72fa99bbadb65d8b01873e5e605cdc30f1ff70ef2
  languageName: node
  linkType: hard

"@typescript-eslint/eslint-plugin@npm:^5.0.0":
  version: 5.22.0
  resolution: "@typescript-eslint/eslint-plugin@npm:5.22.0"
  dependencies:
    "@typescript-eslint/scope-manager": 5.22.0
    "@typescript-eslint/type-utils": 5.22.0
    "@typescript-eslint/utils": 5.22.0
    debug: ^4.3.2
    functional-red-black-tree: ^1.0.1
    ignore: ^5.1.8
    regexpp: ^3.2.0
    semver: ^7.3.5
    tsutils: ^3.21.0
  peerDependencies:
    "@typescript-eslint/parser": ^5.0.0
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 3b083f7003f091c3ef7b3970dca9cfd507ab8c52a9b8a52259c630010adf765e9766f0e6fd9c901fc0e807319a4e8c003e12287b1f12a4b9eb4d7222e8d6db83
  languageName: node
  linkType: hard

"@typescript-eslint/eslint-plugin@npm:^5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/eslint-plugin@npm:5.27.1"
  dependencies:
    "@typescript-eslint/scope-manager": 5.27.1
    "@typescript-eslint/type-utils": 5.27.1
    "@typescript-eslint/utils": 5.27.1
    debug: ^4.3.4
    functional-red-black-tree: ^1.0.1
    ignore: ^5.2.0
    regexpp: ^3.2.0
    semver: ^7.3.7
    tsutils: ^3.21.0
  peerDependencies:
    "@typescript-eslint/parser": ^5.0.0
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: ee00d8d3a7b395e346801b7bf30209e278f06b5c283ad71c03b34db9e2d68a43ca0e292e315fa7e5bf131a8839ff4a24e0ed76c37811d230f97aae7e123d73ea
  languageName: node
  linkType: hard

"@typescript-eslint/parser@npm:^5.0.0":
  version: 5.22.0
  resolution: "@typescript-eslint/parser@npm:5.22.0"
  dependencies:
    "@typescript-eslint/scope-manager": 5.22.0
    "@typescript-eslint/types": 5.22.0
    "@typescript-eslint/typescript-estree": 5.22.0
    debug: ^4.3.2
  peerDependencies:
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 28a7d4b73154fc97336be9a4efd5ffdc659f748232c82479909e86ed87ed8a78d23280b3aaf532ca4e735caaffac43d9576e6af2dfd11865e30a9d70c8a3f275
  languageName: node
  linkType: hard

"@typescript-eslint/parser@npm:^5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/parser@npm:5.27.1"
  dependencies:
    "@typescript-eslint/scope-manager": 5.27.1
    "@typescript-eslint/types": 5.27.1
    "@typescript-eslint/typescript-estree": 5.27.1
    debug: ^4.3.4
  peerDependencies:
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 0f1df76142c9d7a6c6dbfc5d19fdee02bbc0e79def6e6df4b126c7eaae1c3a46a3871ad498d4b1fc7ad5cb58d6eb70f020807f600d99c0b9add98441fc12f23b
  languageName: node
  linkType: hard

"@typescript-eslint/scope-manager@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/scope-manager@npm:5.22.0"
  dependencies:
    "@typescript-eslint/types": 5.22.0
    "@typescript-eslint/visitor-keys": 5.22.0
  checksum: ebf2ad44f4e5a4dfd55225419804f81f68056086c20f1549adbcca4236634eac3aae461e30d6cab6539ce6f42346ed6e1fbbb2710d2cc058a3283ef91a0fe174
  languageName: node
  linkType: hard

"@typescript-eslint/scope-manager@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/scope-manager@npm:5.27.1"
  dependencies:
    "@typescript-eslint/types": 5.27.1
    "@typescript-eslint/visitor-keys": 5.27.1
  checksum: 401bf2b46de08ddb80ec9f36df7d58bf5de7837185a472b190b670d421d685743aad4c9fa8a6893f65ba933b822c5d7060c640e87cf0756d7aa56abdd25689cc
  languageName: node
  linkType: hard

"@typescript-eslint/type-utils@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/type-utils@npm:5.22.0"
  dependencies:
    "@typescript-eslint/utils": 5.22.0
    debug: ^4.3.2
    tsutils: ^3.21.0
  peerDependencies:
    eslint: "*"
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 7128085bfbeca3a9646a795a34730cdfeca110bc00240569f6a7b3dc0854680afa56e015715675a78198b414de869339bd6036cc33cb14903919780a60321a95
  languageName: node
  linkType: hard

"@typescript-eslint/type-utils@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/type-utils@npm:5.27.1"
  dependencies:
    "@typescript-eslint/utils": 5.27.1
    debug: ^4.3.4
    tsutils: ^3.21.0
  peerDependencies:
    eslint: "*"
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 43b7da26ea1bd7d249c45d168ec88f971fb71362bbc21ec4748d73b1ecb43f4ca59f5ed338e8dbc74272ae4ebac1cab87a9b62c0fa616c6f9bd833a212dc8a40
  languageName: node
  linkType: hard

"@typescript-eslint/types@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/types@npm:5.22.0"
  checksum: 74f822c5a3b96bba05229eea4ed370c4bd48b17f475c37f08d6ba708adf65c3aa026bb544f1d0308c96e043b30015e396fd53b1e8e4e9fbb6dc9c92d2ccc0a15
  languageName: node
  linkType: hard

"@typescript-eslint/types@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/types@npm:5.27.1"
  checksum: 81faa50256ba67c23221273744c51676774fe6a1583698c3a542f3e2fd21ab34a4399019527c9cf7ab4e5a1577272f091d5848d3af937232ddb2dbf558a7c39a
  languageName: node
  linkType: hard

"@typescript-eslint/typescript-estree@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/typescript-estree@npm:5.22.0"
  dependencies:
    "@typescript-eslint/types": 5.22.0
    "@typescript-eslint/visitor-keys": 5.22.0
    debug: ^4.3.2
    globby: ^11.0.4
    is-glob: ^4.0.3
    semver: ^7.3.5
    tsutils: ^3.21.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 2797a79d7d32a9a547b7f1de77a353d8e8c8519791f865f5e061bfc4918d12cdaddec51afa015f5aac5d068ef525c92bd65afc83b84dc9e52e697303acf0873a
  languageName: node
  linkType: hard

"@typescript-eslint/typescript-estree@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/typescript-estree@npm:5.27.1"
  dependencies:
    "@typescript-eslint/types": 5.27.1
    "@typescript-eslint/visitor-keys": 5.27.1
    debug: ^4.3.4
    globby: ^11.1.0
    is-glob: ^4.0.3
    semver: ^7.3.7
    tsutils: ^3.21.0
  peerDependenciesMeta:
    typescript:
      optional: true
  checksum: 59d2a0885be7d54bd86472a446d84930cc52d2690ea432d9164075ea437b3b4206dadd49799764ad0fb68f3e4ebb4e36db9717c7a443d0f3c82d5659e41fbd05
  languageName: node
  linkType: hard

"@typescript-eslint/utils@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/utils@npm:5.22.0"
  dependencies:
    "@types/json-schema": ^7.0.9
    "@typescript-eslint/scope-manager": 5.22.0
    "@typescript-eslint/types": 5.22.0
    "@typescript-eslint/typescript-estree": 5.22.0
    eslint-scope: ^5.1.1
    eslint-utils: ^3.0.0
  peerDependencies:
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  checksum: 5019485e76d754a7a60c042545fd884dc666fddf9d4223ff706bbf0c275f19ea25a6b210fb5cf7ed368b019fe538fd854a925e9c6f12007d51b1731a29d95cc1
  languageName: node
  linkType: hard

"@typescript-eslint/utils@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/utils@npm:5.27.1"
  dependencies:
    "@types/json-schema": ^7.0.9
    "@typescript-eslint/scope-manager": 5.27.1
    "@typescript-eslint/types": 5.27.1
    "@typescript-eslint/typescript-estree": 5.27.1
    eslint-scope: ^5.1.1
    eslint-utils: ^3.0.0
  peerDependencies:
    eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
  checksum: 51add038226cddad2b3322225de18d53bc1ed44613f7b3a379eb597114b8830a632990b0f4321e0ddf3502b460d80072d7e789be89135b5e11e8dae167005625
  languageName: node
  linkType: hard

"@typescript-eslint/visitor-keys@npm:5.22.0":
  version: 5.22.0
  resolution: "@typescript-eslint/visitor-keys@npm:5.22.0"
  dependencies:
    "@typescript-eslint/types": 5.22.0
    eslint-visitor-keys: ^3.0.0
  checksum: d30dfa98dcce75da49a6a204a0132d42e63228c35681cb9b3643e47a0a24a633e259832d48d101265bd85b8eb5a9f2b4858f9447646c1d3df6a2ac54258dfe8f
  languageName: node
  linkType: hard

"@typescript-eslint/visitor-keys@npm:5.27.1":
  version: 5.27.1
  resolution: "@typescript-eslint/visitor-keys@npm:5.27.1"
  dependencies:
    "@typescript-eslint/types": 5.27.1
    eslint-visitor-keys: ^3.3.0
  checksum: 8f104eda321cd6c613daf284fbebbd32b149d4213d137b0ce1caec7a1334c9f46c82ed64aff1243b712ac8c13f67ac344c996cd36d21fbb15032c24d9897a64a
  languageName: node
  linkType: hard

"@ungap/structured-clone@npm:^1.0.1":
  version: 1.0.1
  resolution: "@ungap/structured-clone@npm:1.0.1"
  checksum: cd614e038fa63dcd5da0070d9ed5214d74d1f72b04d88e884d5a6563bb77d52a566fdd26b889f09c534fb72ab1d6ad8efe6bb678a56a5ccd3f0d6946234d1113
  languageName: node
  linkType: hard

"@vitejs/plugin-vue@npm:^2.3.1":
  version: 2.3.2
  resolution: "@vitejs/plugin-vue@npm:2.3.2"
  peerDependencies:
    vite: ^2.5.10
    vue: ^3.2.25
  checksum: cfd539b412fee269705a8fd81cbc45529ffc3fe3d1962c6d70b8532994c95d2a54004afc94eef161c64055644a4e7be44b95654fd78d8bd01b61acf6190c34d4
  languageName: node
  linkType: hard

"@volar/code-gen@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/code-gen@npm:0.33.9"
  dependencies:
    "@volar/source-map": 0.33.9
  checksum: 52ebcceec2761cacb2537b6331c991a5d3fe0c2d42534e2ef590c3acfbf863e5b0fe50cf5c15257bdddc4a88dea6b50ef756d054cda1aed4f9f25273e876c368
  languageName: node
  linkType: hard

"@volar/pug-language-service@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/pug-language-service@npm:0.33.9"
  dependencies:
    "@volar/code-gen": 0.33.9
    "@volar/shared": 0.33.9
    "@volar/source-map": 0.33.9
    "@volar/transforms": 0.33.9
    pug-lexer: ^5.0.1
    pug-parser: ^6.0.0
    vscode-languageserver-textdocument: ^1.0.3
    vscode-languageserver-types: ^3.17.0-next.6
  checksum: 23873fa9c226329554d00867c19584484cb518404289714fd891bcee240e342a121694ce18d14506d119d3aaba7e1b0b6753771016b7911ab5b55963bce72f19
  languageName: node
  linkType: hard

"@volar/shared@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/shared@npm:0.33.9"
  dependencies:
    upath: ^2.0.1
    vscode-jsonrpc: ^8.0.0-next.5
    vscode-uri: ^3.0.3
  checksum: cc7bd86413121236ca1c03b73f72e9949ba2a8c81713d659db88bc1c4fdf47060889018ff067aa844cf5888e662a2a6ae340f7ab562b058a25a13398dd21de2d
  languageName: node
  linkType: hard

"@volar/source-map@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/source-map@npm:0.33.9"
  checksum: d5e33d12b07d4584d22bffeaad7bc8d94de008984de766198f48323849789146aed14dc716af3d3b43aa72d27ec139771a7b5bc6c26bb03f25fd0537eaf1d003
  languageName: node
  linkType: hard

"@volar/transforms@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/transforms@npm:0.33.9"
  dependencies:
    "@volar/shared": 0.33.9
    vscode-languageserver-types: ^3.17.0-next.6
  checksum: 33f5e5a940a046e3ebf9ce1792ad5616b61232e0320107aa761667a1acfe39c1b40b28501d6527cceb8f026748c7fcaf7d974664b89e1b67994ede7f73be78ab
  languageName: node
  linkType: hard

"@volar/vue-code-gen@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/vue-code-gen@npm:0.33.9"
  dependencies:
    "@volar/code-gen": 0.33.9
    "@volar/source-map": 0.33.9
    "@vue/compiler-core": ^3.2.27
    "@vue/compiler-dom": ^3.2.27
    "@vue/shared": ^3.2.27
  checksum: 29cbc392b7c0cd095fa862078f0aa8ba8c52dda2eeb7a281343e56ebb0c38fee250304f97d0e2870eef1dce2218e71fe62dbfaee80c842702b09a739809ac0c8
  languageName: node
  linkType: hard

"@volar/vue-typescript@npm:0.33.9":
  version: 0.33.9
  resolution: "@volar/vue-typescript@npm:0.33.9"
  dependencies:
    "@volar/code-gen": 0.33.9
    "@volar/pug-language-service": 0.33.9
    "@volar/source-map": 0.33.9
    "@volar/vue-code-gen": 0.33.9
    "@vue/compiler-sfc": ^3.2.27
    "@vue/reactivity": ^3.2.27
  checksum: f7ee009cc315566f2334cbe8bd38e6f27904e2eeb96d4bff904b8f0a024ae1143f1200407d01f6830f7b7b3cc8c66e6ee1c31e6ed1d42dcc2cd106bf3fac1d3d
  languageName: node
  linkType: hard

"@vue/compiler-core@npm:3.2.33, @vue/compiler-core@npm:^3.2.27":
  version: 3.2.33
  resolution: "@vue/compiler-core@npm:3.2.33"
  dependencies:
    "@babel/parser": ^7.16.4
    "@vue/shared": 3.2.33
    estree-walker: ^2.0.2
    source-map: ^0.6.1
  checksum: bae1a7db26ab208fe8f0b09f443387e0951a1d1b35f80d89cad2285a818dc9dece783b98ccee4dbece59fde57f20a2f17afb183f710fdbc852e568bdf871265e
  languageName: node
  linkType: hard

"@vue/compiler-dom@npm:3.2.33, @vue/compiler-dom@npm:^3.2.27":
  version: 3.2.33
  resolution: "@vue/compiler-dom@npm:3.2.33"
  dependencies:
    "@vue/compiler-core": 3.2.33
    "@vue/shared": 3.2.33
  checksum: 498f313c81d287ab4ee5861508121ab130728f3b643544041acdadfce9840c2ea05b972169437ef1462443d4d0bc9674105db7b6cfa75f6e46ef470f2a098112
  languageName: node
  linkType: hard

"@vue/compiler-sfc@npm:3.2.33, @vue/compiler-sfc@npm:^3.2.27, @vue/compiler-sfc@npm:^3.2.33":
  version: 3.2.33
  resolution: "@vue/compiler-sfc@npm:3.2.33"
  dependencies:
    "@babel/parser": ^7.16.4
    "@vue/compiler-core": 3.2.33
    "@vue/compiler-dom": 3.2.33
    "@vue/compiler-ssr": 3.2.33
    "@vue/reactivity-transform": 3.2.33
    "@vue/shared": 3.2.33
    estree-walker: ^2.0.2
    magic-string: ^0.25.7
    postcss: ^8.1.10
    source-map: ^0.6.1
  checksum: f436c49bdce0d00d4b0c8dd9a9a8e76167898fc10e79578425391d0b0a712e8d8f3aad257066d6e0ecdde3c6c38e6280f93ea741865ea1cab823b71440578a24
  languageName: node
  linkType: hard

"@vue/compiler-ssr@npm:3.2.33":
  version: 3.2.33
  resolution: "@vue/compiler-ssr@npm:3.2.33"
  dependencies:
    "@vue/compiler-dom": 3.2.33
    "@vue/shared": 3.2.33
  checksum: 4107f8e9e8f4553ba12cb915d0f51169b67176fbb50e05accf014ee6786e767ae9ec1218ffae266e807d00fbdeb881781a615d777531385581cce2ea5e1afd58
  languageName: node
  linkType: hard

"@vue/devtools-api@npm:^6.0.0, @vue/devtools-api@npm:^6.1.4":
  version: 6.1.4
  resolution: "@vue/devtools-api@npm:6.1.4"
  checksum: 027bb138b03ec7147dd15e5d0ef28d5b72c822530396cc8a86bc6fdb049dc6850314b9e897e497064e3ed47fad229a18141f56b8b8ca3d41092a576dc5b6538d
  languageName: node
  linkType: hard

"@vue/eslint-config-prettier@npm:^7.0.0":
  version: 7.0.0
  resolution: "@vue/eslint-config-prettier@npm:7.0.0"
  dependencies:
    eslint-config-prettier: ^8.3.0
    eslint-plugin-prettier: ^4.0.0
  peerDependencies:
    eslint: ">= 7.28.0"
    prettier: ">= 2.0.0"
  checksum: febfd7f70369426bc3a481845b26a5d0c2cf26be8bf6b45dd96134529ce63f436e070785084c5c6b9579021cdca5ab26926cc75ea4b08f2cbe6cf9f8857f09e2
  languageName: node
  linkType: hard

"@vue/eslint-config-typescript@npm:^10.0.0":
  version: 10.0.0
  resolution: "@vue/eslint-config-typescript@npm:10.0.0"
  dependencies:
    "@typescript-eslint/eslint-plugin": ^5.0.0
    "@typescript-eslint/parser": ^5.0.0
    vue-eslint-parser: ^8.0.0
  peerDependencies:
    eslint: ^6.2.0 || ^7.0.0 || ^8.0.0
    eslint-plugin-vue: ^8.0.1
  checksum: 8af585db57ea4cd24a00e0ef21db077d911237f8db76c4147a98ba0b975f2b5ebc85d5ce7b9abb0e8a9a32cd2ad5030e62b3d1ddeb9ac47a740a8bc4eae46f97
  languageName: node
  linkType: hard

"@vue/reactivity-transform@npm:3.2.33":
  version: 3.2.33
  resolution: "@vue/reactivity-transform@npm:3.2.33"
  dependencies:
    "@babel/parser": ^7.16.4
    "@vue/compiler-core": 3.2.33
    "@vue/shared": 3.2.33
    estree-walker: ^2.0.2
    magic-string: ^0.25.7
  checksum: 599a68f4bb1b36ac7015ddfc5cbcc97498e9caac5d1b96834185e2d248c22d1f1f4184e33788761112377ce22f9e2e3d79c50b551eec685395368a2480e6385c
  languageName: node
  linkType: hard

"@vue/reactivity@npm:3.2.33, @vue/reactivity@npm:^3.2.27":
  version: 3.2.33
  resolution: "@vue/reactivity@npm:3.2.33"
  dependencies:
    "@vue/shared": 3.2.33
  checksum: fe801ea75fabfe95f414c32a79fee275917ef458b2b2f0f05834ae9bd4f65fefc9d25b62be55d680674ec4ef301b75ec45501f920efda780e70a214b21dfa02c
  languageName: node
  linkType: hard

"@vue/runtime-core@npm:3.2.33, @vue/runtime-core@npm:^3.2.33":
  version: 3.2.33
  resolution: "@vue/runtime-core@npm:3.2.33"
  dependencies:
    "@vue/reactivity": 3.2.33
    "@vue/shared": 3.2.33
  checksum: 8eaba9a5d94461cd8a1adb805a2874f751e08abcc9169ca47a5d4479c20b5cf9c7323adbaa99047e85b6d32240764f4232078c24199a22a2c7044717c12a6984
  languageName: node
  linkType: hard

"@vue/runtime-dom@npm:3.2.33, @vue/runtime-dom@npm:^3.2.33":
  version: 3.2.33
  resolution: "@vue/runtime-dom@npm:3.2.33"
  dependencies:
    "@vue/runtime-core": 3.2.33
    "@vue/shared": 3.2.33
    csstype: ^2.6.8
  checksum: 1fec6328b27c50f8bb73f37324c03c381cad1e48aa134d27539efaa433df57bdcb8f55101972be0f00d093f0310036e569b7211a9ac1c9a75a949141e7112b59
  languageName: node
  linkType: hard

"@vue/server-renderer@npm:3.2.33":
  version: 3.2.33
  resolution: "@vue/server-renderer@npm:3.2.33"
  dependencies:
    "@vue/compiler-ssr": 3.2.33
    "@vue/shared": 3.2.33
  peerDependencies:
    vue: 3.2.33
  checksum: effc448e522f70f7271a6e81f6ca925e9b6a5948a9f947a96c7932e907a6a46fc5ae108cecfc6ec43159171055b1f6549139bb163363970829d81b625b921bbb
  languageName: node
  linkType: hard

"@vue/shared@npm:3.2.33, @vue/shared@npm:^3.2.27":
  version: 3.2.33
  resolution: "@vue/shared@npm:3.2.33"
  checksum: 0083c9555b44f1c230079fac9270764e51af740f851101ae8972758fe6acf52184f76b4ab0c67a3840096d8f5a0988b99cae3046826b0f15af2431db6127ae48
  languageName: node
  linkType: hard

"@vue/test-utils@npm:^2.0.0-rc.18":
  version: 2.0.0-rc.21
  resolution: "@vue/test-utils@npm:2.0.0-rc.21"
  peerDependencies:
    vue: ^3.0.1
  checksum: 4c7998281f45557a7df7193f07a8cafdfa209ad724910d8556b71dbeecbdb8f52186f0e38b89dd8d60f15d22c3b150da948f5afc32b7b2a40ef52026ae7a77c9
  languageName: node
  linkType: hard

"@vue/tsconfig@npm:^0.1.3":
  version: 0.1.3
  resolution: "@vue/tsconfig@npm:0.1.3"
  peerDependencies:
    "@types/node": "*"
  peerDependenciesMeta:
    "@types/node":
      optional: true
  checksum: 8150a24497a5348bc342c27afb38ad989de2ce8e94c349020628065d2a8df6837cb8bb3012f9161eea716487832612ac71b5f910d95bac41539ac6021d6bd88d
  languageName: node
  linkType: hard

"@vueuse/core@npm:^8.4.2":
  version: 8.4.2
  resolution: "@vueuse/core@npm:8.4.2"
  dependencies:
    "@vueuse/metadata": 8.4.2
    "@vueuse/shared": 8.4.2
    vue-demi: "*"
  peerDependencies:
    "@vue/composition-api": ^1.1.0
    vue: ^2.6.0 || ^3.2.0
  peerDependenciesMeta:
    "@vue/composition-api":
      optional: true
    vue:
      optional: true
  checksum: 846c660d3db349e57d43db34c79cdb3c952ff410cc817ee5c82abb6cc92c53aa3d5183ba34060adc8144f9e4ad033fe301d342f628e0d79c0ff7dd8342816c64
  languageName: node
  linkType: hard

"@vueuse/metadata@npm:8.4.2":
  version: 8.4.2
  resolution: "@vueuse/metadata@npm:8.4.2"
  checksum: dc83cb698f8125ec825331829e5e7101e7a9681ba2f96f1c5cb1522d5d90fa514d0fcad83dc15b31828a05ee30460bce9102c8dc4d7873c308a68ea959f99d6a
  languageName: node
  linkType: hard

"@vueuse/router@npm:^8.5.0":
  version: 8.5.0
  resolution: "@vueuse/router@npm:8.5.0"
  dependencies:
    "@vueuse/shared": 8.5.0
    vue-demi: "*"
  peerDependencies:
    vue-router: ">=4.0.0-rc.1"
  checksum: 331a9d174e83f953d724eca5466b4b7211dd4822fdbeedf9a663b174f880e0d06880e117f6c363d1bd96e4a4ac6913ed123945c51826efdec4cfe1518c82a61d
  languageName: node
  linkType: hard

"@vueuse/shared@npm:8.4.2":
  version: 8.4.2
  resolution: "@vueuse/shared@npm:8.4.2"
  dependencies:
    vue-demi: "*"
  peerDependencies:
    "@vue/composition-api": ^1.1.0
    vue: ^2.6.0 || ^3.2.0
  peerDependenciesMeta:
    "@vue/composition-api":
      optional: true
    vue:
      optional: true
  checksum: d8fc22e837997778ee11d2b17579e84fbc0c28667ef4b69932217f5030b79b34f6bacc6cd2158deb92610941db8e4b05bad5504c709af77993192612b0f82199
  languageName: node
  linkType: hard

"@vueuse/shared@npm:8.5.0":
  version: 8.5.0
  resolution: "@vueuse/shared@npm:8.5.0"
  dependencies:
    vue-demi: "*"
  peerDependencies:
    "@vue/composition-api": ^1.1.0
    vue: ^2.6.0 || ^3.2.0
  peerDependenciesMeta:
    "@vue/composition-api":
      optional: true
    vue:
      optional: true
  checksum: 8a99f29accfc45a0c155b7918c76d4dc87f241748cc6df0d47be7b32ce37010f6b190ed22a2bd2acf0fbe97b2b7d0e22623043ede92d3bf201ce4dc0977c4516
  languageName: node
  linkType: hard

"abab@npm:^2.0.5, abab@npm:^2.0.6":
  version: 2.0.6
  resolution: "abab@npm:2.0.6"
  checksum: 6ffc1af4ff315066c62600123990d87551ceb0aafa01e6539da77b0f5987ac7019466780bf480f1787576d4385e3690c81ccc37cfda12819bf510b8ab47e5a3e
  languageName: node
  linkType: hard

"abbrev@npm:1":
  version: 1.1.1
  resolution: "abbrev@npm:1.1.1"
  checksum: a4a97ec07d7ea112c517036882b2ac22f3109b7b19077dc656316d07d308438aac28e4d9746dc4d84bf6b1e75b4a7b0a5f3cb30592419f128ca9a8cee3bcfa17
  languageName: node
  linkType: hard

"acorn-globals@npm:^6.0.0":
  version: 6.0.0
  resolution: "acorn-globals@npm:6.0.0"
  dependencies:
    acorn: ^7.1.1
    acorn-walk: ^7.1.1
  checksum: 72d95e5b5e585f9acd019b993ab8bbba68bb3cbc9d9b5c1ebb3c2f1fe5981f11deababfb4949f48e6262f9c57878837f5958c0cca396f81023814680ca878042
  languageName: node
  linkType: hard

"acorn-jsx@npm:^5.3.2":
  version: 5.3.2
  resolution: "acorn-jsx@npm:5.3.2"
  peerDependencies:
    acorn: ^6.0.0 || ^7.0.0 || ^8.0.0
  checksum: c3d3b2a89c9a056b205b69530a37b972b404ee46ec8e5b341666f9513d3163e2a4f214a71f4dfc7370f5a9c07472d2fd1c11c91c3f03d093e37637d95da98950
  languageName: node
  linkType: hard

"acorn-node@npm:^1.6.1":
  version: 1.8.2
  resolution: "acorn-node@npm:1.8.2"
  dependencies:
    acorn: ^7.0.0
    acorn-walk: ^7.0.0
    xtend: ^4.0.2
  checksum: 02e1564a1ccf8bd1fcefcd01235398af4a9effaf032c5397994ddd275590a72894cb3e26e4b82579ccdda1e48ade7486aef61e771ddae3563ca452b927f443d8
  languageName: node
  linkType: hard

"acorn-walk@npm:^7.0.0, acorn-walk@npm:^7.1.1":
  version: 7.2.0
  resolution: "acorn-walk@npm:7.2.0"
  checksum: 9252158a79b9d92f1bc0dd6acc0fcfb87a67339e84bcc301bb33d6078936d27e35d606b4d35626d2962cd43c256d6f27717e70cbe15c04fff999ab0b2260b21f
  languageName: node
  linkType: hard

"acorn@npm:^7.0.0, acorn@npm:^7.1.1":
  version: 7.4.1
  resolution: "acorn@npm:7.4.1"
  bin:
    acorn: bin/acorn
  checksum: 1860f23c2107c910c6177b7b7be71be350db9e1080d814493fae143ae37605189504152d1ba8743ba3178d0b37269ce1ffc42b101547fdc1827078f82671e407
  languageName: node
  linkType: hard

"acorn@npm:^8.5.0, acorn@npm:^8.7.1":
  version: 8.7.1
  resolution: "acorn@npm:8.7.1"
  bin:
    acorn: bin/acorn
  checksum: aca0aabf98826717920ac2583fdcad0a6fbe4e583fdb6e843af2594e907455aeafe30b1e14f1757cd83ce1776773cf8296ffc3a4acf13f0bd3dfebcf1db6ae80
  languageName: node
  linkType: hard

"agent-base@npm:6, agent-base@npm:^6.0.2":
  version: 6.0.2
  resolution: "agent-base@npm:6.0.2"
  dependencies:
    debug: 4
  checksum: f52b6872cc96fd5f622071b71ef200e01c7c4c454ee68bc9accca90c98cfb39f2810e3e9aa330435835eedc8c23f4f8a15267f67c6e245d2b33757575bdac49d
  languageName: node
  linkType: hard

"agentkeepalive@npm:^4.2.1":
  version: 4.2.1
  resolution: "agentkeepalive@npm:4.2.1"
  dependencies:
    debug: ^4.1.0
    depd: ^1.1.2
    humanize-ms: ^1.2.1
  checksum: 39cb49ed8cf217fd6da058a92828a0a84e0b74c35550f82ee0a10e1ee403c4b78ade7948be2279b188b7a7303f5d396ea2738b134731e464bf28de00a4f72a18
  languageName: node
  linkType: hard

"aggregate-error@npm:^3.0.0":
  version: 3.1.0
  resolution: "aggregate-error@npm:3.1.0"
  dependencies:
    clean-stack: ^2.0.0
    indent-string: ^4.0.0
  checksum: 1101a33f21baa27a2fa8e04b698271e64616b886795fd43c31068c07533c7b3facfcaf4e9e0cab3624bd88f729a592f1c901a1a229c9e490eafce411a8644b79
  languageName: node
  linkType: hard

"ajv@npm:^6.10.0, ajv@npm:^6.12.4":
  version: 6.12.6
  resolution: "ajv@npm:6.12.6"
  dependencies:
    fast-deep-equal: ^3.1.1
    fast-json-stable-stringify: ^2.0.0
    json-schema-traverse: ^0.4.1
    uri-js: ^4.2.2
  checksum: 874972efe5c4202ab0a68379481fbd3d1b5d0a7bd6d3cc21d40d3536ebff3352a2a1fabb632d4fd2cc7fe4cbdcd5ed6782084c9bbf7f32a1536d18f9da5007d4
  languageName: node
  linkType: hard

"ansi-colors@npm:^4.1.1":
  version: 4.1.1
  resolution: "ansi-colors@npm:4.1.1"
  checksum: 138d04a51076cb085da0a7e2d000c5c0bb09f6e772ed5c65c53cb118d37f6c5f1637506d7155fb5f330f0abcf6f12fa2e489ac3f8cdab9da393bf1bb4f9a32b0
  languageName: node
  linkType: hard

"ansi-escapes@npm:^4.3.0":
  version: 4.3.2
  resolution: "ansi-escapes@npm:4.3.2"
  dependencies:
    type-fest: ^0.21.3
  checksum: 93111c42189c0a6bed9cdb4d7f2829548e943827ee8479c74d6e0b22ee127b2a21d3f8b5ca57723b8ef78ce011fbfc2784350eb2bde3ccfccf2f575fa8489815
  languageName: node
  linkType: hard

"ansi-regex@npm:^5.0.1":
  version: 5.0.1
  resolution: "ansi-regex@npm:5.0.1"
  checksum: 2aa4bb54caf2d622f1afdad09441695af2a83aa3fe8b8afa581d205e57ed4261c183c4d3877cee25794443fde5876417d859c108078ab788d6af7e4fe52eb66b
  languageName: node
  linkType: hard

"ansi-styles@npm:^3.2.1":
  version: 3.2.1
  resolution: "ansi-styles@npm:3.2.1"
  dependencies:
    color-convert: ^1.9.0
  checksum: d85ade01c10e5dd77b6c89f34ed7531da5830d2cb5882c645f330079975b716438cd7ebb81d0d6e6b4f9c577f19ae41ab55f07f19786b02f9dfd9e0377395665
  languageName: node
  linkType: hard

"ansi-styles@npm:^4.0.0, ansi-styles@npm:^4.1.0":
  version: 4.3.0
  resolution: "ansi-styles@npm:4.3.0"
  dependencies:
    color-convert: ^2.0.1
  checksum: 513b44c3b2105dd14cc42a19271e80f386466c4be574bccf60b627432f9198571ebf4ab1e4c3ba17347658f4ee1711c163d574248c0c1cdc2d5917a0ad582ec4
  languageName: node
  linkType: hard

"ansi-styles@npm:^5.0.0":
  version: 5.2.0
  resolution: "ansi-styles@npm:5.2.0"
  checksum: d7f4e97ce0623aea6bc0d90dcd28881ee04cba06c570b97fd3391bd7a268eedfd9d5e2dd4fdcbdd82b8105df5faf6f24aaedc08eaf3da898e702db5948f63469
  languageName: node
  linkType: hard

"anymatch@npm:~3.1.2":
  version: 3.1.2
  resolution: "anymatch@npm:3.1.2"
  dependencies:
    normalize-path: ^3.0.0
    picomatch: ^2.0.4
  checksum: 985163db2292fac9e5a1e072bf99f1b5baccf196e4de25a0b0b81865ebddeb3b3eb4480734ef0a2ac8c002845396b91aa89121f5b84f93981a4658164a9ec6e9
  languageName: node
  linkType: hard

"aproba@npm:^1.0.3 || ^2.0.0":
  version: 2.0.0
  resolution: "aproba@npm:2.0.0"
  checksum: 5615cadcfb45289eea63f8afd064ab656006361020e1735112e346593856f87435e02d8dcc7ff0d11928bc7d425f27bc7c2a84f6c0b35ab0ff659c814c138a24
  languageName: node
  linkType: hard

"arch@npm:^2.2.0":
  version: 2.2.0
  resolution: "arch@npm:2.2.0"
  checksum: e21b7635029fe8e9cdd5a026f9a6c659103e63fff423834323cdf836a1bb240a72d0c39ca8c470f84643385cf581bd8eda2cad8bf493e27e54bd9783abe9101f
  languageName: node
  linkType: hard

"are-we-there-yet@npm:^3.0.0":
  version: 3.0.0
  resolution: "are-we-there-yet@npm:3.0.0"
  dependencies:
    delegates: ^1.0.0
    readable-stream: ^3.6.0
  checksum: 348edfdd931b0b50868b55402c01c3f64df1d4c229ab6f063539a5025fd6c5f5bb8a0cab409bbed8d75d34762d22aa91b7c20b4204eb8177063158d9ba792981
  languageName: node
  linkType: hard

"arg@npm:^5.0.1":
  version: 5.0.1
  resolution: "arg@npm:5.0.1"
  checksum: 9aefbcb1204f8dbd541a045bfe99b6515b4dc697c2f704ef2bb5e9fe5464575d97571e91e673a6f23ad72dd1cc24d7d8cf2d1d828e72c08e4d4f6f9237adc761
  languageName: node
  linkType: hard

"argparse@npm:^2.0.1":
  version: 2.0.1
  resolution: "argparse@npm:2.0.1"
  checksum: 83644b56493e89a254bae05702abf3a1101b4fa4d0ca31df1c9985275a5a5bd47b3c27b7fa0b71098d41114d8ca000e6ed90cad764b306f8a503665e4d517ced
  languageName: node
  linkType: hard

"array-union@npm:^2.1.0":
  version: 2.1.0
  resolution: "array-union@npm:2.1.0"
  checksum: 5bee12395cba82da674931df6d0fea23c4aa4660cb3b338ced9f828782a65caa232573e6bf3968f23e0c5eb301764a382cef2f128b170a9dc59de0e36c39f98d
  languageName: node
  linkType: hard

"asap@npm:~2.0.3":
  version: 2.0.6
  resolution: "asap@npm:2.0.6"
  checksum: b296c92c4b969e973260e47523207cd5769abd27c245a68c26dc7a0fe8053c55bb04360237cb51cab1df52be939da77150ace99ad331fb7fb13b3423ed73ff3d
  languageName: node
  linkType: hard

"asn1@npm:~0.2.3":
  version: 0.2.6
  resolution: "asn1@npm:0.2.6"
  dependencies:
    safer-buffer: ~2.1.0
  checksum: 39f2ae343b03c15ad4f238ba561e626602a3de8d94ae536c46a4a93e69578826305366dc09fbb9b56aec39b4982a463682f259c38e59f6fa380cd72cd61e493d
  languageName: node
  linkType: hard

"assert-never@npm:^1.2.1":
  version: 1.2.1
  resolution: "assert-never@npm:1.2.1"
  checksum: ea4f1756d90f55254c4dc7a20d6c5d5bc169160562aefe3d8756b598c10e695daf568f21b6d6b12245d7f3782d3ff83ef6a01ab75d487adfc6909470a813bf8c
  languageName: node
  linkType: hard

"assert-plus@npm:1.0.0, assert-plus@npm:^1.0.0":
  version: 1.0.0
  resolution: "assert-plus@npm:1.0.0"
  checksum: 19b4340cb8f0e6a981c07225eacac0e9d52c2644c080198765d63398f0075f83bbc0c8e95474d54224e297555ad0d631c1dcd058adb1ddc2437b41a6b424ac64
  languageName: node
  linkType: hard

"assertion-error@npm:^1.1.0":
  version: 1.1.0
  resolution: "assertion-error@npm:1.1.0"
  checksum: fd9429d3a3d4fd61782eb3962ae76b6d08aa7383123fca0596020013b3ebd6647891a85b05ce821c47d1471ed1271f00b0545cf6a4326cf2fc91efcc3b0fbecf
  languageName: node
  linkType: hard

"astral-regex@npm:^2.0.0":
  version: 2.0.0
  resolution: "astral-regex@npm:2.0.0"
  checksum: 876231688c66400473ba505731df37ea436e574dd524520294cc3bbc54ea40334865e01fa0d074d74d036ee874ee7e62f486ea38bc421ee8e6a871c06f011766
  languageName: node
  linkType: hard

"async-validator@npm:^4.0.7":
  version: 4.1.1
  resolution: "async-validator@npm:4.1.1"
  checksum: 88590ab8ad1db6e3f6e01136d5313d4e91e269e74b7d4017aa16c64dac5be2697dbd1ff3de18f0e000d12073626475de9f77ba41808af38b0ea23eb0e6e8a361
  languageName: node
  linkType: hard

"async@npm:^3.2.0":
  version: 3.2.3
  resolution: "async@npm:3.2.3"
  checksum: c4bee57ab2249af3dc83ca3ef9acfa8e822c0d5e5aa41bae3eaf7f673648343cd64ecd7d26091ffd357f3f044428b17b5f00098494b6cf8b6b3e9681f0636ca1
  languageName: node
  linkType: hard

"asynckit@npm:^0.4.0":
  version: 0.4.0
  resolution: "asynckit@npm:0.4.0"
  checksum: 7b78c451df768adba04e2d02e63e2d0bf3b07adcd6e42b4cf665cb7ce899bedd344c69a1dcbce355b5f972d597b25aaa1c1742b52cffd9caccb22f348114f6be
  languageName: node
  linkType: hard

"at-least-node@npm:^1.0.0":
  version: 1.0.0
  resolution: "at-least-node@npm:1.0.0"
  checksum: 463e2f8e43384f1afb54bc68485c436d7622acec08b6fad269b421cb1d29cebb5af751426793d0961ed243146fe4dc983402f6d5a51b720b277818dbf6f2e49e
  languageName: node
  linkType: hard

"autoprefixer@npm:^10.4.7":
  version: 10.4.7
  resolution: "autoprefixer@npm:10.4.7"
  dependencies:
    browserslist: ^4.20.3
    caniuse-lite: ^1.0.30001335
    fraction.js: ^4.2.0
    normalize-range: ^0.1.2
    picocolors: ^1.0.0
    postcss-value-parser: ^4.2.0
  peerDependencies:
    postcss: ^8.1.0
  bin:
    autoprefixer: bin/autoprefixer
  checksum: 0e55d0d19806c672ec0c79cc23c27cf77e90edf2600670735266ba33ec5294458f404baaa2f7cd4cfe359cf7a97b3c86f01886bdbdc129a4f2f76ca5977a91af
  languageName: node
  linkType: hard

"available-typed-arrays@npm:^1.0.5":
  version: 1.0.5
  resolution: "available-typed-arrays@npm:1.0.5"
  checksum: 20eb47b3cefd7db027b9bbb993c658abd36d4edd3fe1060e83699a03ee275b0c9b216cc076ff3f2db29073225fb70e7613987af14269ac1fe2a19803ccc97f1a
  languageName: node
  linkType: hard

"aws-sign2@npm:~0.7.0":
  version: 0.7.0
  resolution: "aws-sign2@npm:0.7.0"
  checksum: b148b0bb0778098ad8cf7e5fc619768bcb51236707ca1d3e5b49e41b171166d8be9fdc2ea2ae43d7decf02989d0aaa3a9c4caa6f320af95d684de9b548a71525
  languageName: node
  linkType: hard

"aws4@npm:^1.8.0":
  version: 1.11.0
  resolution: "aws4@npm:1.11.0"
  checksum: 5a00d045fd0385926d20ebebcfba5ec79d4482fe706f63c27b324d489a04c68edb0db99ed991e19eda09cb8c97dc2452059a34d97545cebf591d7a2b5a10999f
  languageName: node
  linkType: hard

"axios@npm:^0.21.1":
  version: 0.21.4
  resolution: "axios@npm:0.21.4"
  dependencies:
    follow-redirects: ^1.14.0
  checksum: 44245f24ac971e7458f3120c92f9d66d1fc695e8b97019139de5b0cc65d9b8104647db01e5f46917728edfc0cfd88eb30fc4c55e6053eef4ace76768ce95ff3c
  languageName: node
  linkType: hard

"babel-walk@npm:3.0.0-canary-5":
  version: 3.0.0-canary-5
  resolution: "babel-walk@npm:3.0.0-canary-5"
  dependencies:
    "@babel/types": ^7.9.6
  checksum: 6fe7ee3889343a6602f665c28ea135956a0767d7f7ca5fc1d72c5243e2f6e9d8a64f51254bf2fd0cce47b79fceeccf7a357f37cfa755a509dfb930a21151837c
  languageName: node
  linkType: hard

"balanced-match@npm:^1.0.0":
  version: 1.0.2
  resolution: "balanced-match@npm:1.0.2"
  checksum: 9706c088a283058a8a99e0bf91b0a2f75497f185980d9ffa8b304de1d9e58ebda7c72c07ebf01dadedaac5b2907b2c6f566f660d62bd336c3468e960403b9d65
  languageName: node
  linkType: hard

"base64-js@npm:^1.3.1":
  version: 1.5.1
  resolution: "base64-js@npm:1.5.1"
  checksum: 669632eb3745404c2f822a18fc3a0122d2f9a7a13f7fb8b5823ee19d1d2ff9ee5b52c53367176ea4ad093c332fd5ab4bd0ebae5a8e27917a4105a4cfc86b1005
  languageName: node
  linkType: hard

"bcrypt-pbkdf@npm:^1.0.0":
  version: 1.0.2
  resolution: "bcrypt-pbkdf@npm:1.0.2"
  dependencies:
    tweetnacl: ^0.14.3
  checksum: 4edfc9fe7d07019609ccf797a2af28351736e9d012c8402a07120c4453a3b789a15f2ee1530dc49eee8f7eb9379331a8dd4b3766042b9e502f74a68e7f662291
  languageName: node
  linkType: hard

"binary-extensions@npm:^2.0.0":
  version: 2.2.0
  resolution: "binary-extensions@npm:2.2.0"
  checksum: ccd267956c58d2315f5d3ea6757cf09863c5fc703e50fbeb13a7dc849b812ef76e3cf9ca8f35a0c48498776a7478d7b4a0418e1e2b8cb9cb9731f2922aaad7f8
  languageName: node
  linkType: hard

"blob-util@npm:^2.0.2":
  version: 2.0.2
  resolution: "blob-util@npm:2.0.2"
  checksum: d543e6b92e4ca715ca33c78e89a07a2290d43e5b2bc897d7ec588c5c7bbf59df93e45225ac0c9258aa6ce4320358990f99c9288f1c48280f8ec5d7a2e088d19b
  languageName: node
  linkType: hard

"bluebird@npm:3.7.2, bluebird@npm:^3.7.2":
  version: 3.7.2
  resolution: "bluebird@npm:3.7.2"
  checksum: 869417503c722e7dc54ca46715f70e15f4d9c602a423a02c825570862d12935be59ed9c7ba34a9b31f186c017c23cac6b54e35446f8353059c101da73eac22ef
  languageName: node
  linkType: hard

"boolbase@npm:^1.0.0":
  version: 1.0.0
  resolution: "boolbase@npm:1.0.0"
  checksum: 3e25c80ef626c3a3487c73dbfc70ac322ec830666c9ad915d11b701142fab25ec1e63eff2c450c74347acfd2de854ccde865cd79ef4db1683f7c7b046ea43bb0
  languageName: node
  linkType: hard

"brace-expansion@npm:^1.1.7":
  version: 1.1.11
  resolution: "brace-expansion@npm:1.1.11"
  dependencies:
    balanced-match: ^1.0.0
    concat-map: 0.0.1
  checksum: faf34a7bb0c3fcf4b59c7808bc5d2a96a40988addf2e7e09dfbb67a2251800e0d14cd2bfc1aa79174f2f5095c54ff27f46fb1289fe2d77dac755b5eb3434cc07
  languageName: node
  linkType: hard

"brace-expansion@npm:^2.0.1":
  version: 2.0.1
  resolution: "brace-expansion@npm:2.0.1"
  dependencies:
    balanced-match: ^1.0.0
  checksum: a61e7cd2e8a8505e9f0036b3b6108ba5e926b4b55089eeb5550cd04a471fe216c96d4fe7e4c7f995c728c554ae20ddfc4244cad10aef255e72b62930afd233d1
  languageName: node
  linkType: hard

"braces@npm:^3.0.2, braces@npm:~3.0.2":
  version: 3.0.2
  resolution: "braces@npm:3.0.2"
  dependencies:
    fill-range: ^7.0.1
  checksum: e2a8e769a863f3d4ee887b5fe21f63193a891c68b612ddb4b68d82d1b5f3ff9073af066c343e9867a393fe4c2555dcb33e89b937195feb9c1613d259edfcd459
  languageName: node
  linkType: hard

"browser-process-hrtime@npm:^1.0.0":
  version: 1.0.0
  resolution: "browser-process-hrtime@npm:1.0.0"
  checksum: e30f868cdb770b1201afb714ad1575dd86366b6e861900884665fb627109b3cc757c40067d3bfee1ff2a29c835257ea30725a8018a9afd02ac1c24b408b1e45f
  languageName: node
  linkType: hard

"browserslist@npm:^4.20.2, browserslist@npm:^4.20.3":
  version: 4.20.3
  resolution: "browserslist@npm:4.20.3"
  dependencies:
    caniuse-lite: ^1.0.30001332
    electron-to-chromium: ^1.4.118
    escalade: ^3.1.1
    node-releases: ^2.0.3
    picocolors: ^1.0.0
  bin:
    browserslist: cli.js
  checksum: 1e4b719ac2ca0fe235218a606e8b8ef16b8809e0973b924158c39fbc435a0b0fe43437ea52dd6ef5ad2efcb83fcb07431244e472270177814217f7c563651f7d
  languageName: node
  linkType: hard

"buffer-crc32@npm:~0.2.3":
  version: 0.2.13
  resolution: "buffer-crc32@npm:0.2.13"
  checksum: 06252347ae6daca3453b94e4b2f1d3754a3b146a111d81c68924c22d91889a40623264e95e67955b1cb4a68cbedf317abeabb5140a9766ed248973096db5ce1c
  languageName: node
  linkType: hard

"buffer@npm:^5.6.0":
  version: 5.7.1
  resolution: "buffer@npm:5.7.1"
  dependencies:
    base64-js: ^1.3.1
    ieee754: ^1.1.13
  checksum: e2cf8429e1c4c7b8cbd30834ac09bd61da46ce35f5c22a78e6c2f04497d6d25541b16881e30a019c6fd3154150650ccee27a308eff3e26229d788bbdeb08ab84
  languageName: node
  linkType: hard

"cacache@npm:^16.0.2":
  version: 16.0.7
  resolution: "cacache@npm:16.0.7"
  dependencies:
    "@npmcli/fs": ^2.1.0
    "@npmcli/move-file": ^2.0.0
    chownr: ^2.0.0
    fs-minipass: ^2.1.0
    glob: ^8.0.1
    infer-owner: ^1.0.4
    lru-cache: ^7.7.1
    minipass: ^3.1.6
    minipass-collect: ^1.0.2
    minipass-flush: ^1.0.5
    minipass-pipeline: ^1.2.4
    mkdirp: ^1.0.4
    p-map: ^4.0.0
    promise-inflight: ^1.0.1
    rimraf: ^3.0.2
    ssri: ^9.0.0
    tar: ^6.1.11
    unique-filename: ^1.1.1
  checksum: 2155b099b7e0f0369fb1155ca4673532ca7efe2ebdbec63acca8743580b8446b5d4fd7184626b1cb059001af77b981cdc67035c7855544d365d4f048eafca2ca
  languageName: node
  linkType: hard

"cachedir@npm:^2.3.0":
  version: 2.3.0
  resolution: "cachedir@npm:2.3.0"
  checksum: ec90cb0f2e6336e266aa748dbadf3da9e0b20e843e43f1591acab7a3f1451337dc2f26cb9dd833ae8cfefeffeeb43ef5b5ff62782a685f4e3c2305dd98482fcb
  languageName: node
  linkType: hard

"call-bind@npm:^1.0.0, call-bind@npm:^1.0.2":
  version: 1.0.2
  resolution: "call-bind@npm:1.0.2"
  dependencies:
    function-bind: ^1.1.1
    get-intrinsic: ^1.0.2
  checksum: f8e31de9d19988a4b80f3e704788c4a2d6b6f3d17cfec4f57dc29ced450c53a49270dc66bf0fbd693329ee948dd33e6c90a329519aef17474a4d961e8d6426b0
  languageName: node
  linkType: hard

"callsites@npm:^3.0.0":
  version: 3.1.0
  resolution: "callsites@npm:3.1.0"
  checksum: 072d17b6abb459c2ba96598918b55868af677154bec7e73d222ef95a8fdb9bbf7dae96a8421085cdad8cd190d86653b5b6dc55a4484f2e5b2e27d5e0c3fc15b3
  languageName: node
  linkType: hard

"camelcase-css@npm:^2.0.1":
  version: 2.0.1
  resolution: "camelcase-css@npm:2.0.1"
  checksum: 1cec2b3b3dcb5026688a470b00299a8db7d904c4802845c353dbd12d9d248d3346949a814d83bfd988d4d2e5b9904c07efe76fecd195a1d4f05b543e7c0b56b1
  languageName: node
  linkType: hard

"caniuse-lite@npm:^1.0.30001332, caniuse-lite@npm:^1.0.30001335":
  version: 1.0.30001338
  resolution: "caniuse-lite@npm:1.0.30001338"
  checksum: 80ac481b20aac13d6168825762e2ad9b9895d36451088b921400c3cd818185e6d113c2d202e82cf3b88f4d2311b3064507f2e3f9fe9f0935fcaf42d9d4f15570
  languageName: node
  linkType: hard

"caseless@npm:~0.12.0":
  version: 0.12.0
  resolution: "caseless@npm:0.12.0"
  checksum: b43bd4c440aa1e8ee6baefee8063b4850fd0d7b378f6aabc796c9ec8cb26d27fb30b46885350777d9bd079c5256c0e1329ad0dc7c2817e0bb466810ebb353751
  languageName: node
  linkType: hard

"chai@npm:^4.3.6":
  version: 4.3.6
  resolution: "chai@npm:4.3.6"
  dependencies:
    assertion-error: ^1.1.0
    check-error: ^1.0.2
    deep-eql: ^3.0.1
    get-func-name: ^2.0.0
    loupe: ^2.3.1
    pathval: ^1.1.1
    type-detect: ^4.0.5
  checksum: acff93fd537f96d4a4d62dd83810285dffcfccb5089e1bf2a1205b28ec82d93dff551368722893cf85004282df10ee68802737c33c90c5493957ed449ed7ce71
  languageName: node
  linkType: hard

"chalk@npm:^2.0.0":
  version: 2.4.2
  resolution: "chalk@npm:2.4.2"
  dependencies:
    ansi-styles: ^3.2.1
    escape-string-regexp: ^1.0.5
    supports-color: ^5.3.0
  checksum: ec3661d38fe77f681200f878edbd9448821924e0f93a9cefc0e26a33b145f1027a2084bf19967160d11e1f03bfe4eaffcabf5493b89098b2782c3fe0b03d80c2
  languageName: node
  linkType: hard

"chalk@npm:^4.0.0, chalk@npm:^4.1.0":
  version: 4.1.2
  resolution: "chalk@npm:4.1.2"
  dependencies:
    ansi-styles: ^4.1.0
    supports-color: ^7.1.0
  checksum: fe75c9d5c76a7a98d45495b91b2172fa3b7a09e0cc9370e5c8feb1c567b85c4288e2b3fded7cfdd7359ac28d6b3844feb8b82b8686842e93d23c827c417e83fc
  languageName: node
  linkType: hard

"character-parser@npm:^2.2.0":
  version: 2.2.0
  resolution: "character-parser@npm:2.2.0"
  dependencies:
    is-regex: ^1.0.3
  checksum: 71826fae509d4dc3ef07c2e824da9c8853f910ba0d8fe699edaab263051fd3b8db77bb96e46ed896bb36ed1d86108e6d6ceedff436bec7786ba7f0b585a0bc93
  languageName: node
  linkType: hard

"check-error@npm:^1.0.2":
  version: 1.0.2
  resolution: "check-error@npm:1.0.2"
  checksum: d9d106504404b8addd1ee3f63f8c0eaa7cd962a1a28eb9c519b1c4a1dc7098be38007fc0060f045ee00f075fbb7a2a4f42abcf61d68323677e11ab98dc16042e
  languageName: node
  linkType: hard

"check-more-types@npm:2.24.0, check-more-types@npm:^2.24.0":
  version: 2.24.0
  resolution: "check-more-types@npm:2.24.0"
  checksum: b09080ec3404d20a4b0ead828994b2e5913236ef44ed3033a27062af0004cf7d2091fbde4b396bf13b7ce02fb018bc9960b48305e6ab2304cd82d73ed7a51ef4
  languageName: node
  linkType: hard

"chokidar@npm:>=3.0.0 <4.0.0, chokidar@npm:^3.5.3":
  version: 3.5.3
  resolution: "chokidar@npm:3.5.3"
  dependencies:
    anymatch: ~3.1.2
    braces: ~3.0.2
    fsevents: ~2.3.2
    glob-parent: ~5.1.2
    is-binary-path: ~2.1.0
    is-glob: ~4.0.1
    normalize-path: ~3.0.0
    readdirp: ~3.6.0
  dependenciesMeta:
    fsevents:
      optional: true
  checksum: b49fcde40176ba007ff361b198a2d35df60d9bb2a5aab228279eb810feae9294a6b4649ab15981304447afe1e6ffbf4788ad5db77235dc770ab777c6e771980c
  languageName: node
  linkType: hard

"chownr@npm:^2.0.0":
  version: 2.0.0
  resolution: "chownr@npm:2.0.0"
  checksum: c57cf9dd0791e2f18a5ee9c1a299ae6e801ff58fee96dc8bfd0dcb4738a6ce58dd252a3605b1c93c6418fe4f9d5093b28ffbf4d66648cb2a9c67eaef9679be2f
  languageName: node
  linkType: hard

"chroma-js@npm:^2.4.2":
  version: 2.4.2
  resolution: "chroma-js@npm:2.4.2"
  checksum: cf9884c02d406286e4370599bcd1afbf089384407df46b3a69edfedcba7bb99e8f959a5cfdbfec750b305c441c06ca40cd1f70ba3a6c2ce739ac09a92520ddae
  languageName: node
  linkType: hard

"ci-info@npm:^3.2.0":
  version: 3.3.0
  resolution: "ci-info@npm:3.3.0"
  checksum: c3d86fe374938ecda5093b1ba39acb535d8309185ba3f23587747c6a057e63f45419b406d880304dbc0e1d72392c9a33e42fe9a1e299209bc0ded5efaa232b66
  languageName: node
  linkType: hard

"clean-stack@npm:^2.0.0":
  version: 2.2.0
  resolution: "clean-stack@npm:2.2.0"
  checksum: 2ac8cd2b2f5ec986a3c743935ec85b07bc174d5421a5efc8017e1f146a1cf5f781ae962618f416352103b32c9cd7e203276e8c28241bbe946160cab16149fb68
  languageName: node
  linkType: hard

"cli-cursor@npm:^3.1.0":
  version: 3.1.0
  resolution: "cli-cursor@npm:3.1.0"
  dependencies:
    restore-cursor: ^3.1.0
  checksum: 2692784c6cd2fd85cfdbd11f53aea73a463a6d64a77c3e098b2b4697a20443f430c220629e1ca3b195ea5ac4a97a74c2ee411f3807abf6df2b66211fec0c0a29
  languageName: node
  linkType: hard

"cli-table3@npm:~0.6.1":
  version: 0.6.2
  resolution: "cli-table3@npm:0.6.2"
  dependencies:
    "@colors/colors": 1.5.0
    string-width: ^4.2.0
  dependenciesMeta:
    "@colors/colors":
      optional: true
  checksum: 2f82391698b8a2a2a5e45d2adcfea5d93e557207f90455a8d4c1aac688e9b18a204d9eb4ba1d322fa123b17d64ea3dc5e11de8b005529f3c3e7dbeb27cb4d9be
  languageName: node
  linkType: hard

"cli-truncate@npm:^2.1.0":
  version: 2.1.0
  resolution: "cli-truncate@npm:2.1.0"
  dependencies:
    slice-ansi: ^3.0.0
    string-width: ^4.2.0
  checksum: bf1e4e6195392dc718bf9cd71f317b6300dc4a9191d052f31046b8773230ece4fa09458813bf0e3455a5e68c0690d2ea2c197d14a8b85a7b5e01c97f4b5feb5d
  languageName: node
  linkType: hard

"color-convert@npm:^1.9.0":
  version: 1.9.3
  resolution: "color-convert@npm:1.9.3"
  dependencies:
    color-name: 1.1.3
  checksum: fd7a64a17cde98fb923b1dd05c5f2e6f7aefda1b60d67e8d449f9328b4e53b228a428fd38bfeaeb2db2ff6b6503a776a996150b80cdf224062af08a5c8a3a203
  languageName: node
  linkType: hard

"color-convert@npm:^2.0.1":
  version: 2.0.1
  resolution: "color-convert@npm:2.0.1"
  dependencies:
    color-name: ~1.1.4
  checksum: 79e6bdb9fd479a205c71d89574fccfb22bd9053bd98c6c4d870d65c132e5e904e6034978e55b43d69fcaa7433af2016ee203ce76eeba9cfa554b373e7f7db336
  languageName: node
  linkType: hard

"color-name@npm:1.1.3":
  version: 1.1.3
  resolution: "color-name@npm:1.1.3"
  checksum: 09c5d3e33d2105850153b14466501f2bfb30324a2f76568a408763a3b7433b0e50e5b4ab1947868e65cb101bb7cb75029553f2c333b6d4b8138a73fcc133d69d
  languageName: node
  linkType: hard

"color-name@npm:^1.1.4, color-name@npm:~1.1.4":
  version: 1.1.4
  resolution: "color-name@npm:1.1.4"
  checksum: b0445859521eb4021cd0fb0cc1a75cecf67fceecae89b63f62b201cca8d345baf8b952c966862a9d9a2632987d4f6581f0ec8d957dfacece86f0a7919316f610
  languageName: node
  linkType: hard

"color-support@npm:^1.1.3":
  version: 1.1.3
  resolution: "color-support@npm:1.1.3"
  bin:
    color-support: bin.js
  checksum: 9b7356817670b9a13a26ca5af1c21615463b500783b739b7634a0c2047c16cef4b2865d7576875c31c3cddf9dd621fa19285e628f20198b233a5cfdda6d0793b
  languageName: node
  linkType: hard

"colorette@npm:^2.0.16":
  version: 2.0.16
  resolution: "colorette@npm:2.0.16"
  checksum: cd55596a3a2d1071c1a28eee7fd8a5387593ff1bd10a3e8d0a6221499311fe34a9f2b9272d77c391e0e003dcdc8934fb2f8d106e7ef1f7516f8060c901d41a27
  languageName: node
  linkType: hard

"combined-stream@npm:^1.0.6, combined-stream@npm:^1.0.8, combined-stream@npm:~1.0.6":
  version: 1.0.8
  resolution: "combined-stream@npm:1.0.8"
  dependencies:
    delayed-stream: ~1.0.0
  checksum: 49fa4aeb4916567e33ea81d088f6584749fc90c7abec76fd516bf1c5aa5c79f3584b5ba3de6b86d26ddd64bae5329c4c7479343250cfe71c75bb366eae53bb7c
  languageName: node
  linkType: hard

"comlink@npm:^4.3.1":
  version: 4.3.1
  resolution: "comlink@npm:4.3.1"
  checksum: 557360a6558708c55aff74a25f834bfb9bfca8a42444682c4d5aead57681534a0206202be2a2760b4de124c3ba6d485b08978b6d5469cb3d26bf1438ee28a4f1
  languageName: node
  linkType: hard

"commander@npm:^5.1.0":
  version: 5.1.0
  resolution: "commander@npm:5.1.0"
  checksum: 0b7fec1712fbcc6230fcb161d8d73b4730fa91a21dc089515489402ad78810547683f058e2a9835929c212fead1d6a6ade70db28bbb03edbc2829a9ab7d69447
  languageName: node
  linkType: hard

"common-tags@npm:^1.8.0":
  version: 1.8.2
  resolution: "common-tags@npm:1.8.2"
  checksum: 767a6255a84bbc47df49a60ab583053bb29a7d9687066a18500a516188a062c4e4cd52de341f22de0b07062e699b1b8fe3cfa1cb55b241cb9301aeb4f45b4dff
  languageName: node
  linkType: hard

"concat-map@npm:0.0.1":
  version: 0.0.1
  resolution: "concat-map@npm:0.0.1"
  checksum: 902a9f5d8967a3e2faf138d5cb784b9979bad2e6db5357c5b21c568df4ebe62bcb15108af1b2253744844eb964fc023fbd9afbbbb6ddd0bcc204c6fb5b7bf3af
  languageName: node
  linkType: hard

"console-control-strings@npm:^1.1.0":
  version: 1.1.0
  resolution: "console-control-strings@npm:1.1.0"
  checksum: 8755d76787f94e6cf79ce4666f0c5519906d7f5b02d4b884cf41e11dcd759ed69c57da0670afd9236d229a46e0f9cf519db0cd829c6dca820bb5a5c3def584ed
  languageName: node
  linkType: hard

"constantinople@npm:^4.0.1":
  version: 4.0.1
  resolution: "constantinople@npm:4.0.1"
  dependencies:
    "@babel/parser": ^7.6.0
    "@babel/types": ^7.6.1
  checksum: 8f70f16ddf97cdc263ca16b398bc52470c25e2ec5ed27bc015f251b849597223ce3a123e6924f43efddeb75422c1f55b7e56e0e2e594e4dd2964bfc9392b9b82
  languageName: node
  linkType: hard

"convert-source-map@npm:^1.7.0":
  version: 1.8.0
  resolution: "convert-source-map@npm:1.8.0"
  dependencies:
    safe-buffer: ~5.1.1
  checksum: 985d974a2d33e1a2543ada51c93e1ba2f73eaed608dc39f229afc78f71dcc4c8b7d7c684aa647e3c6a3a204027444d69e53e169ce94e8d1fa8d7dee80c9c8fed
  languageName: node
  linkType: hard

"core-util-is@npm:1.0.2":
  version: 1.0.2
  resolution: "core-util-is@npm:1.0.2"
  checksum: 7a4c925b497a2c91421e25bf76d6d8190f0b2359a9200dbeed136e63b2931d6294d3b1893eda378883ed363cd950f44a12a401384c609839ea616befb7927dab
  languageName: node
  linkType: hard

"cross-spawn@npm:^7.0.0, cross-spawn@npm:^7.0.2, cross-spawn@npm:^7.0.3":
  version: 7.0.3
  resolution: "cross-spawn@npm:7.0.3"
  dependencies:
    path-key: ^3.1.0
    shebang-command: ^2.0.0
    which: ^2.0.1
  checksum: 671cc7c7288c3a8406f3c69a3ae2fc85555c04169e9d611def9a675635472614f1c0ed0ef80955d5b6d4e724f6ced67f0ad1bb006c2ea643488fcfef994d7f52
  languageName: node
  linkType: hard

"css-render@npm:^0.15.10":
  version: 0.15.10
  resolution: "css-render@npm:0.15.10"
  dependencies:
    "@emotion/hash": ~0.8.0
    "@types/node": ~17.0.5
    csstype: ~3.0.5
  checksum: 051ebb6a56bc8ef1149ef15eecef54b9a08e6ba1aec8866e459c6823988c5307b7e52de4c80fa17ac80d04a81573dbe7811092b2ba85cc586c78fb1f0f7ab918
  languageName: node
  linkType: hard

"cssesc@npm:^3.0.0":
  version: 3.0.0
  resolution: "cssesc@npm:3.0.0"
  bin:
    cssesc: bin/cssesc
  checksum: f8c4ababffbc5e2ddf2fa9957dda1ee4af6048e22aeda1869d0d00843223c1b13ad3f5d88b51caa46c994225eacb636b764eb807a8883e2fb6f99b4f4e8c48b2
  languageName: node
  linkType: hard

"cssom@npm:^0.5.0":
  version: 0.5.0
  resolution: "cssom@npm:0.5.0"
  checksum: 823471aa30091c59e0a305927c30e7768939b6af70405808f8d2ce1ca778cddcb24722717392438329d1691f9a87cb0183b64b8d779b56a961546d54854fde01
  languageName: node
  linkType: hard

"cssom@npm:~0.3.6":
  version: 0.3.8
  resolution: "cssom@npm:0.3.8"
  checksum: 24beb3087c76c0d52dd458be9ee1fbc80ac771478a9baef35dd258cdeb527c68eb43204dd439692bb2b1ae5272fa5f2946d10946edab0d04f1078f85e06bc7f6
  languageName: node
  linkType: hard

"cssstyle@npm:^2.3.0":
  version: 2.3.0
  resolution: "cssstyle@npm:2.3.0"
  dependencies:
    cssom: ~0.3.6
  checksum: 5f05e6fd2e3df0b44695c2f08b9ef38b011862b274e320665176467c0725e44a53e341bc4959a41176e83b66064ab786262e7380fd1cabeae6efee0d255bb4e3
  languageName: node
  linkType: hard

"csstype@npm:^2.6.8":
  version: 2.6.20
  resolution: "csstype@npm:2.6.20"
  checksum: cb5d5ded49c3390909e93b20b285d4a63d0ba5b10294bdfbc4cf911f80e91d6cf367ea671f99f09570762535c14ea7074a2c7fa73f02008203f01328dea8968b
  languageName: node
  linkType: hard

"csstype@npm:~3.0.5":
  version: 3.0.11
  resolution: "csstype@npm:3.0.11"
  checksum: 95e56abfe9ca219ae065acb4e43f61771a03170eed919127f558dfa168240867aba7629c8d98a201a0dd06d9a5ce82686f0570031c928516c61816adbc7c877f
  languageName: node
  linkType: hard

"cypress@npm:^9.5.3":
  version: 9.6.0
  resolution: "cypress@npm:9.6.0"
  dependencies:
    "@cypress/request": ^2.88.10
    "@cypress/xvfb": ^1.2.4
    "@types/node": ^14.14.31
    "@types/sinonjs__fake-timers": 8.1.1
    "@types/sizzle": ^2.3.2
    arch: ^2.2.0
    blob-util: ^2.0.2
    bluebird: ^3.7.2
    buffer: ^5.6.0
    cachedir: ^2.3.0
    chalk: ^4.1.0
    check-more-types: ^2.24.0
    cli-cursor: ^3.1.0
    cli-table3: ~0.6.1
    commander: ^5.1.0
    common-tags: ^1.8.0
    dayjs: ^1.10.4
    debug: ^4.3.2
    enquirer: ^2.3.6
    eventemitter2: ^6.4.3
    execa: 4.1.0
    executable: ^4.1.1
    extract-zip: 2.0.1
    figures: ^3.2.0
    fs-extra: ^9.1.0
    getos: ^3.2.1
    is-ci: ^3.0.0
    is-installed-globally: ~0.4.0
    lazy-ass: ^1.6.0
    listr2: ^3.8.3
    lodash: ^4.17.21
    log-symbols: ^4.0.0
    minimist: ^1.2.6
    ospath: ^1.2.2
    pretty-bytes: ^5.6.0
    proxy-from-env: 1.0.0
    request-progress: ^3.0.0
    semver: ^7.3.2
    supports-color: ^8.1.1
    tmp: ~0.2.1
    untildify: ^4.0.0
    yauzl: ^2.10.0
  bin:
    cypress: bin/cypress
  checksum: 1e5142885a3fb54db6ef7477e3b11b363f1f610ff008982af014e6df3261ac3899f4cad407c598fb690f93029634adb4ad4605929d10776f92175a3eebb471c4
  languageName: node
  linkType: hard

"dashdash@npm:^1.12.0":
  version: 1.14.1
  resolution: "dashdash@npm:1.14.1"
  dependencies:
    assert-plus: ^1.0.0
  checksum: 3634c249570f7f34e3d34f866c93f866c5b417f0dd616275decae08147dcdf8fccfaa5947380ccfb0473998ea3a8057c0b4cd90c875740ee685d0624b2983598
  languageName: node
  linkType: hard

"data-urls@npm:^3.0.1":
  version: 3.0.2
  resolution: "data-urls@npm:3.0.2"
  dependencies:
    abab: ^2.0.6
    whatwg-mimetype: ^3.0.0
    whatwg-url: ^11.0.0
  checksum: 033fc3dd0fba6d24bc9a024ddcf9923691dd24f90a3d26f6545d6a2f71ec6956f93462f2cdf2183cc46f10dc01ed3bcb36731a8208456eb1a08147e571fe2a76
  languageName: node
  linkType: hard

"date-fns-tz@npm:^1.3.3":
  version: 1.3.4
  resolution: "date-fns-tz@npm:1.3.4"
  peerDependencies:
    date-fns: ">=2.0.0"
  checksum: d9b929f2d65b2c4ed96bb09a8bc38f3884b2c44525d58f9329bd374556bb0445bd13308747d209afda513c9b1fac33dfee91d0633b1e9c579d376715a1ac01c5
  languageName: node
  linkType: hard

"date-fns@npm:^2.28.0":
  version: 2.28.0
  resolution: "date-fns@npm:2.28.0"
  checksum: a0516b2e4f99b8bffc6cc5193349f185f195398385bdcaf07f17c2c4a24473c99d933eb0018be4142a86a6d46cb0b06be6440ad874f15e795acbedd6fd727a1f
  languageName: node
  linkType: hard

"dayjs@npm:^1.10.4":
  version: 1.11.2
  resolution: "dayjs@npm:1.11.2"
  checksum: 78f8bd04a9e5f5554aa06eacda65a7d59e162d39f621a46fd34fb3b51367c3662426d86b4e2f4ac535f81e0c4d5af3e8a83b37e672412eb556267d726c61f8f3
  languageName: node
  linkType: hard

"debug@npm:4, debug@npm:^4.1.0, debug@npm:^4.1.1, debug@npm:^4.3.2, debug@npm:^4.3.3, debug@npm:^4.3.4":
  version: 4.3.4
  resolution: "debug@npm:4.3.4"
  dependencies:
    ms: 2.1.2
  peerDependenciesMeta:
    supports-color:
      optional: true
  checksum: 3dbad3f94ea64f34431a9cbf0bafb61853eda57bff2880036153438f50fb5a84f27683ba0d8e5426bf41a8c6ff03879488120cf5b3a761e77953169c0600a708
  languageName: node
  linkType: hard

"debug@npm:4.3.2":
  version: 4.3.2
  resolution: "debug@npm:4.3.2"
  dependencies:
    ms: 2.1.2
  peerDependenciesMeta:
    supports-color:
      optional: true
  checksum: 820ea160e267e23c953c9ed87e7ad93494d8cda2f7349af5e7e3bb236d23707ee3022f477d5a7d2ee86ef2bf7d60aa9ab22d1f58080d7deb9dccd073585e1e43
  languageName: node
  linkType: hard

"debug@npm:^3.1.0":
  version: 3.2.7
  resolution: "debug@npm:3.2.7"
  dependencies:
    ms: ^2.1.1
  checksum: b3d8c5940799914d30314b7c3304a43305fd0715581a919dacb8b3176d024a782062368405b47491516d2091d6462d4d11f2f4974a405048094f8bfebfa3071c
  languageName: node
  linkType: hard

"decimal.js@npm:^10.3.1":
  version: 10.3.1
  resolution: "decimal.js@npm:10.3.1"
  checksum: 0351ac9f05fe050f23227aa6a4573bee2d58fa7378fcf28d969a8c789525032effb488a90320fd3fe86a66e17b4bc507d811b15eada5b7f0e7ec5d2af4c24a59
  languageName: node
  linkType: hard

"deep-eql@npm:^3.0.1":
  version: 3.0.1
  resolution: "deep-eql@npm:3.0.1"
  dependencies:
    type-detect: ^4.0.0
  checksum: 4f4c9fb79eb994fb6e81d4aa8b063adc40c00f831588aa65e20857d5d52f15fb23034a6576ecf886f7ff6222d5ae42e71e9b7d57113e0715b1df7ea1e812b125
  languageName: node
  linkType: hard

"deep-equal@npm:^2.0.5":
  version: 2.0.5
  resolution: "deep-equal@npm:2.0.5"
  dependencies:
    call-bind: ^1.0.0
    es-get-iterator: ^1.1.1
    get-intrinsic: ^1.0.1
    is-arguments: ^1.0.4
    is-date-object: ^1.0.2
    is-regex: ^1.1.1
    isarray: ^2.0.5
    object-is: ^1.1.4
    object-keys: ^1.1.1
    object.assign: ^4.1.2
    regexp.prototype.flags: ^1.3.0
    side-channel: ^1.0.3
    which-boxed-primitive: ^1.0.1
    which-collection: ^1.0.1
    which-typed-array: ^1.1.2
  checksum: 2bb7332badf589b540184d25098acac750e30fe11c8dce4523d03fc5db15f46881a0105e6bf0b64bb0c57213a95ed964029ff0259026ad6f7f9e0019f8200de5
  languageName: node
  linkType: hard

"deep-is@npm:^0.1.3, deep-is@npm:~0.1.3":
  version: 0.1.4
  resolution: "deep-is@npm:0.1.4"
  checksum: edb65dd0d7d1b9c40b2f50219aef30e116cedd6fc79290e740972c132c09106d2e80aa0bc8826673dd5a00222d4179c84b36a790eef63a4c4bca75a37ef90804
  languageName: node
  linkType: hard

"define-properties@npm:^1.1.3, define-properties@npm:^1.1.4":
  version: 1.1.4
  resolution: "define-properties@npm:1.1.4"
  dependencies:
    has-property-descriptors: ^1.0.0
    object-keys: ^1.1.1
  checksum: ce0aef3f9eb193562b5cfb79b2d2c86b6a109dfc9fdcb5f45d680631a1a908c06824ddcdb72b7573b54e26ace07f0a23420aaba0d5c627b34d2c1de8ef527e2b
  languageName: node
  linkType: hard

"defined@npm:^1.0.0":
  version: 1.0.0
  resolution: "defined@npm:1.0.0"
  checksum: 77672997c5001773371c4dbcce98da0b3dc43089d6da2ad87c4b800adb727633cea8723ea3889fe0c2112a2404e2fd07e3bfd0e55f7426aa6441d8992045dbd5
  languageName: node
  linkType: hard

"delayed-stream@npm:~1.0.0":
  version: 1.0.0
  resolution: "delayed-stream@npm:1.0.0"
  checksum: 46fe6e83e2cb1d85ba50bd52803c68be9bd953282fa7096f51fc29edd5d67ff84ff753c51966061e5ba7cb5e47ef6d36a91924eddb7f3f3483b1c560f77a0020
  languageName: node
  linkType: hard

"delegates@npm:^1.0.0":
  version: 1.0.0
  resolution: "delegates@npm:1.0.0"
  checksum: a51744d9b53c164ba9c0492471a1a2ffa0b6727451bdc89e31627fdf4adda9d51277cfcbfb20f0a6f08ccb3c436f341df3e92631a3440226d93a8971724771fd
  languageName: node
  linkType: hard

"depd@npm:^1.1.2":
  version: 1.1.2
  resolution: "depd@npm:1.1.2"
  checksum: 6b406620d269619852885ce15965272b829df6f409724415e0002c8632ab6a8c0a08ec1f0bd2add05dc7bd7507606f7e2cc034fa24224ab829580040b835ecd9
  languageName: node
  linkType: hard

"detective@npm:^5.2.0":
  version: 5.2.0
  resolution: "detective@npm:5.2.0"
  dependencies:
    acorn-node: ^1.6.1
    defined: ^1.0.0
    minimist: ^1.1.1
  bin:
    detective: bin/detective.js
  checksum: 2ab266aecbd695b42e4703cfa560178ceac4308a74baece58185775426e65573d563d84f33e6a3b28ef3a544aa0c039c0730ada939c6458862e6643f66044f32
  languageName: node
  linkType: hard

"didyoumean@npm:^1.2.2":
  version: 1.2.2
  resolution: "didyoumean@npm:1.2.2"
  checksum: d5d98719d58b3c2fa59663c4c42ba9716f1fd01245c31d5fce31915bd3aa26e6aac149788e007358f778ebbd68a2256eb5973e8ca6f221df221ba060115acf2e
  languageName: node
  linkType: hard

"diff-sequences@npm:^27.5.1":
  version: 27.5.1
  resolution: "diff-sequences@npm:27.5.1"
  checksum: a00db5554c9da7da225db2d2638d85f8e41124eccbd56cbaefb3b276dcbb1c1c2ad851c32defe2055a54a4806f030656cbf6638105fd6ce97bb87b90b32a33ca
  languageName: node
  linkType: hard

"dir-glob@npm:^3.0.1":
  version: 3.0.1
  resolution: "dir-glob@npm:3.0.1"
  dependencies:
    path-type: ^4.0.0
  checksum: fa05e18324510d7283f55862f3161c6759a3f2f8dbce491a2fc14c8324c498286c54282c1f0e933cb930da8419b30679389499b919122952a4f8592362ef4615
  languageName: node
  linkType: hard

"dlv@npm:^1.1.3":
  version: 1.1.3
  resolution: "dlv@npm:1.1.3"
  checksum: d7381bca22ed11933a1ccf376db7a94bee2c57aa61e490f680124fa2d1cd27e94eba641d9f45be57caab4f9a6579de0983466f620a2cd6230d7ec93312105ae7
  languageName: node
  linkType: hard

"doctrine@npm:^3.0.0":
  version: 3.0.0
  resolution: "doctrine@npm:3.0.0"
  dependencies:
    esutils: ^2.0.2
  checksum: fd7673ca77fe26cd5cba38d816bc72d641f500f1f9b25b83e8ce28827fe2da7ad583a8da26ab6af85f834138cf8dae9f69b0cd6ab925f52ddab1754db44d99ce
  languageName: node
  linkType: hard

"doctypes@npm:^1.1.0":
  version: 1.1.0
  resolution: "doctypes@npm:1.1.0"
  checksum: 6e6c2d1a80f2072dc4831994c914c44455e341c5ab18c16797368a0afd59d7c22f3335805ba2c1dd2931e9539d1ba8b613b7650dc63f6ab56b77b8d888055de8
  languageName: node
  linkType: hard

"domexception@npm:^4.0.0":
  version: 4.0.0
  resolution: "domexception@npm:4.0.0"
  dependencies:
    webidl-conversions: ^7.0.0
  checksum: ddbc1268edf33a8ba02ccc596735ede80375ee0cf124b30d2f05df5b464ba78ef4f49889b6391df4a04954e63d42d5631c7fcf8b1c4f12bc531252977a5f13d5
  languageName: node
  linkType: hard

"duplexer@npm:~0.1.1":
  version: 0.1.2
  resolution: "duplexer@npm:0.1.2"
  checksum: 62ba61a830c56801db28ff6305c7d289b6dc9f859054e8c982abd8ee0b0a14d2e9a8e7d086ffee12e868d43e2bbe8a964be55ddbd8c8957714c87373c7a4f9b0
  languageName: node
  linkType: hard

"dynamics.js@npm:^1.1.5":
  version: 1.1.5
  resolution: "dynamics.js@npm:1.1.5"
  checksum: 5686a37fa1382beadc455c5a1c551f0ac835559de1cb31a789d77e7f69f195668e929e1c410d89ba600f57831bcb688764feb4b7b2af353ca14096396a9e59b6
  languageName: node
  linkType: hard

"ecc-jsbn@npm:~0.1.1":
  version: 0.1.2
  resolution: "ecc-jsbn@npm:0.1.2"
  dependencies:
    jsbn: ~0.1.0
    safer-buffer: ^2.1.0
  checksum: 22fef4b6203e5f31d425f5b711eb389e4c6c2723402e389af394f8411b76a488fa414d309d866e2b577ce3e8462d344205545c88a8143cc21752a5172818888a
  languageName: node
  linkType: hard

"electron-to-chromium@npm:^1.4.118":
  version: 1.4.137
  resolution: "electron-to-chromium@npm:1.4.137"
  checksum: 639d7b94906efafcf363519c3698eecc44be46755a6a5cdc9088954329978866cc93fbd57e08b97290599b68d5226243d21de9fa50be416b8a5d3fa8fd42c3a0
  languageName: node
  linkType: hard

"emoji-regex@npm:^8.0.0":
  version: 8.0.0
  resolution: "emoji-regex@npm:8.0.0"
  checksum: d4c5c39d5a9868b5fa152f00cada8a936868fd3367f33f71be515ecee4c803132d11b31a6222b2571b1e5f7e13890156a94880345594d0ce7e3c9895f560f192
  languageName: node
  linkType: hard

"encoding@npm:^0.1.13":
  version: 0.1.13
  resolution: "encoding@npm:0.1.13"
  dependencies:
    iconv-lite: ^0.6.2
  checksum: bb98632f8ffa823996e508ce6a58ffcf5856330fde839ae42c9e1f436cc3b5cc651d4aeae72222916545428e54fd0f6aa8862fd8d25bdbcc4589f1e3f3715e7f
  languageName: node
  linkType: hard

"end-of-stream@npm:^1.1.0":
  version: 1.4.4
  resolution: "end-of-stream@npm:1.4.4"
  dependencies:
    once: ^1.4.0
  checksum: 530a5a5a1e517e962854a31693dbb5c0b2fc40b46dad2a56a2deec656ca040631124f4795823acc68238147805f8b021abbe221f4afed5ef3c8e8efc2024908b
  languageName: node
  linkType: hard

"enquirer@npm:^2.3.6":
  version: 2.3.6
  resolution: "enquirer@npm:2.3.6"
  dependencies:
    ansi-colors: ^4.1.1
  checksum: 1c0911e14a6f8d26721c91e01db06092a5f7675159f0261d69c403396a385afd13dd76825e7678f66daffa930cfaa8d45f506fb35f818a2788463d022af1b884
  languageName: node
  linkType: hard

"env-paths@npm:^2.2.0":
  version: 2.2.1
  resolution: "env-paths@npm:2.2.1"
  checksum: 65b5df55a8bab92229ab2b40dad3b387fad24613263d103a97f91c9fe43ceb21965cd3392b1ccb5d77088021e525c4e0481adb309625d0cb94ade1d1fb8dc17e
  languageName: node
  linkType: hard

"err-code@npm:^2.0.2":
  version: 2.0.3
  resolution: "err-code@npm:2.0.3"
  checksum: 8b7b1be20d2de12d2255c0bc2ca638b7af5171142693299416e6a9339bd7d88fc8d7707d913d78e0993176005405a236b066b45666b27b797252c771156ace54
  languageName: node
  linkType: hard

"es-abstract@npm:^1.18.5, es-abstract@npm:^1.19.0, es-abstract@npm:^1.19.5":
  version: 1.20.0
  resolution: "es-abstract@npm:1.20.0"
  dependencies:
    call-bind: ^1.0.2
    es-to-primitive: ^1.2.1
    function-bind: ^1.1.1
    function.prototype.name: ^1.1.5
    get-intrinsic: ^1.1.1
    get-symbol-description: ^1.0.0
    has: ^1.0.3
    has-property-descriptors: ^1.0.0
    has-symbols: ^1.0.3
    internal-slot: ^1.0.3
    is-callable: ^1.2.4
    is-negative-zero: ^2.0.2
    is-regex: ^1.1.4
    is-shared-array-buffer: ^1.0.2
    is-string: ^1.0.7
    is-weakref: ^1.0.2
    object-inspect: ^1.12.0
    object-keys: ^1.1.1
    object.assign: ^4.1.2
    regexp.prototype.flags: ^1.4.1
    string.prototype.trimend: ^1.0.5
    string.prototype.trimstart: ^1.0.5
    unbox-primitive: ^1.0.2
  checksum: c9cc85a7aa0e3cdef740293b4b90892d6954e4e834d0888e3071cc9544bce0ae12923f5026a1970e0ac75a254d311d53e72ba4675647b81e7ca05acb703004e6
  languageName: node
  linkType: hard

"es-get-iterator@npm:^1.1.1":
  version: 1.1.2
  resolution: "es-get-iterator@npm:1.1.2"
  dependencies:
    call-bind: ^1.0.2
    get-intrinsic: ^1.1.0
    has-symbols: ^1.0.1
    is-arguments: ^1.1.0
    is-map: ^2.0.2
    is-set: ^2.0.2
    is-string: ^1.0.5
    isarray: ^2.0.5
  checksum: f75e66acb6a45686fa08b3ade9c9421a70d36a0c43ed4363e67f4d7aab2226cb73dd977cb48abbaf75721b946d3cd810682fcf310c7ad0867802fbf929b17dcf
  languageName: node
  linkType: hard

"es-to-primitive@npm:^1.2.1":
  version: 1.2.1
  resolution: "es-to-primitive@npm:1.2.1"
  dependencies:
    is-callable: ^1.1.4
    is-date-object: ^1.0.1
    is-symbol: ^1.0.2
  checksum: 4ead6671a2c1402619bdd77f3503991232ca15e17e46222b0a41a5d81aebc8740a77822f5b3c965008e631153e9ef0580540007744521e72de8e33599fca2eed
  languageName: node
  linkType: hard

"esbuild-android-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-android-64@npm:0.14.38"
  conditions: os=android & cpu=x64
  languageName: node
  linkType: hard

"esbuild-android-arm64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-android-arm64@npm:0.14.38"
  conditions: os=android & cpu=arm64
  languageName: node
  linkType: hard

"esbuild-darwin-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-darwin-64@npm:0.14.38"
  conditions: os=darwin & cpu=x64
  languageName: node
  linkType: hard

"esbuild-darwin-arm64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-darwin-arm64@npm:0.14.38"
  conditions: os=darwin & cpu=arm64
  languageName: node
  linkType: hard

"esbuild-freebsd-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-freebsd-64@npm:0.14.38"
  conditions: os=freebsd & cpu=x64
  languageName: node
  linkType: hard

"esbuild-freebsd-arm64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-freebsd-arm64@npm:0.14.38"
  conditions: os=freebsd & cpu=arm64
  languageName: node
  linkType: hard

"esbuild-linux-32@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-32@npm:0.14.38"
  conditions: os=linux & cpu=ia32
  languageName: node
  linkType: hard

"esbuild-linux-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-64@npm:0.14.38"
  conditions: os=linux & cpu=x64
  languageName: node
  linkType: hard

"esbuild-linux-arm64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-arm64@npm:0.14.38"
  conditions: os=linux & cpu=arm64
  languageName: node
  linkType: hard

"esbuild-linux-arm@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-arm@npm:0.14.38"
  conditions: os=linux & cpu=arm
  languageName: node
  linkType: hard

"esbuild-linux-mips64le@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-mips64le@npm:0.14.38"
  conditions: os=linux & cpu=mips64el
  languageName: node
  linkType: hard

"esbuild-linux-ppc64le@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-ppc64le@npm:0.14.38"
  conditions: os=linux & cpu=ppc64
  languageName: node
  linkType: hard

"esbuild-linux-riscv64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-riscv64@npm:0.14.38"
  conditions: os=linux & cpu=riscv64
  languageName: node
  linkType: hard

"esbuild-linux-s390x@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-linux-s390x@npm:0.14.38"
  conditions: os=linux & cpu=s390x
  languageName: node
  linkType: hard

"esbuild-netbsd-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-netbsd-64@npm:0.14.38"
  conditions: os=netbsd & cpu=x64
  languageName: node
  linkType: hard

"esbuild-openbsd-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-openbsd-64@npm:0.14.38"
  conditions: os=openbsd & cpu=x64
  languageName: node
  linkType: hard

"esbuild-sunos-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-sunos-64@npm:0.14.38"
  conditions: os=sunos & cpu=x64
  languageName: node
  linkType: hard

"esbuild-windows-32@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-windows-32@npm:0.14.38"
  conditions: os=win32 & cpu=ia32
  languageName: node
  linkType: hard

"esbuild-windows-64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-windows-64@npm:0.14.38"
  conditions: os=win32 & cpu=x64
  languageName: node
  linkType: hard

"esbuild-windows-arm64@npm:0.14.38":
  version: 0.14.38
  resolution: "esbuild-windows-arm64@npm:0.14.38"
  conditions: os=win32 & cpu=arm64
  languageName: node
  linkType: hard

"esbuild@npm:^0.14.27":
  version: 0.14.38
  resolution: "esbuild@npm:0.14.38"
  dependencies:
    esbuild-android-64: 0.14.38
    esbuild-android-arm64: 0.14.38
    esbuild-darwin-64: 0.14.38
    esbuild-darwin-arm64: 0.14.38
    esbuild-freebsd-64: 0.14.38
    esbuild-freebsd-arm64: 0.14.38
    esbuild-linux-32: 0.14.38
    esbuild-linux-64: 0.14.38
    esbuild-linux-arm: 0.14.38
    esbuild-linux-arm64: 0.14.38
    esbuild-linux-mips64le: 0.14.38
    esbuild-linux-ppc64le: 0.14.38
    esbuild-linux-riscv64: 0.14.38
    esbuild-linux-s390x: 0.14.38
    esbuild-netbsd-64: 0.14.38
    esbuild-openbsd-64: 0.14.38
    esbuild-sunos-64: 0.14.38
    esbuild-windows-32: 0.14.38
    esbuild-windows-64: 0.14.38
    esbuild-windows-arm64: 0.14.38
  dependenciesMeta:
    esbuild-android-64:
      optional: true
    esbuild-android-arm64:
      optional: true
    esbuild-darwin-64:
      optional: true
    esbuild-darwin-arm64:
      optional: true
    esbuild-freebsd-64:
      optional: true
    esbuild-freebsd-arm64:
      optional: true
    esbuild-linux-32:
      optional: true
    esbuild-linux-64:
      optional: true
    esbuild-linux-arm:
      optional: true
    esbuild-linux-arm64:
      optional: true
    esbuild-linux-mips64le:
      optional: true
    esbuild-linux-ppc64le:
      optional: true
    esbuild-linux-riscv64:
      optional: true
    esbuild-linux-s390x:
      optional: true
    esbuild-netbsd-64:
      optional: true
    esbuild-openbsd-64:
      optional: true
    esbuild-sunos-64:
      optional: true
    esbuild-windows-32:
      optional: true
    esbuild-windows-64:
      optional: true
    esbuild-windows-arm64:
      optional: true
  bin:
    esbuild: bin/esbuild
  checksum: d7523a36bd28016c010829c527386dbc0c6b9f514920abf5ac8003f346665161aa61026fd6822c5091fc1c1af52fe26c9281a81740fc06f2994cdbb7c2880297
  languageName: node
  linkType: hard

"escalade@npm:^3.1.1":
  version: 3.1.1
  resolution: "escalade@npm:3.1.1"
  checksum: a3e2a99f07acb74b3ad4989c48ca0c3140f69f923e56d0cba0526240ee470b91010f9d39001f2a4a313841d237ede70a729e92125191ba5d21e74b106800b133
  languageName: node
  linkType: hard

"escape-string-regexp@npm:^1.0.5":
  version: 1.0.5
  resolution: "escape-string-regexp@npm:1.0.5"
  checksum: 6092fda75c63b110c706b6a9bfde8a612ad595b628f0bd2147eea1d3406723020810e591effc7db1da91d80a71a737a313567c5abb3813e8d9c71f4aa595b410
  languageName: node
  linkType: hard

"escape-string-regexp@npm:^4.0.0":
  version: 4.0.0
  resolution: "escape-string-regexp@npm:4.0.0"
  checksum: 98b48897d93060f2322108bf29db0feba7dd774be96cd069458d1453347b25ce8682ecc39859d4bca2203cc0ab19c237bcc71755eff49a0f8d90beadeeba5cc5
  languageName: node
  linkType: hard

"escape-string-regexp@npm:^5.0.0":
  version: 5.0.0
  resolution: "escape-string-regexp@npm:5.0.0"
  checksum: 20daabe197f3cb198ec28546deebcf24b3dbb1a5a269184381b3116d12f0532e06007f4bc8da25669d6a7f8efb68db0758df4cd981f57bc5b57f521a3e12c59e
  languageName: node
  linkType: hard

"escodegen@npm:^2.0.0":
  version: 2.0.0
  resolution: "escodegen@npm:2.0.0"
  dependencies:
    esprima: ^4.0.1
    estraverse: ^5.2.0
    esutils: ^2.0.2
    optionator: ^0.8.1
    source-map: ~0.6.1
  dependenciesMeta:
    source-map:
      optional: true
  bin:
    escodegen: bin/escodegen.js
    esgenerate: bin/esgenerate.js
  checksum: 5aa6b2966fafe0545e4e77936300cc94ad57cfe4dc4ebff9950492eaba83eef634503f12d7e3cbd644ecc1bab388ad0e92b06fd32222c9281a75d1cf02ec6cef
  languageName: node
  linkType: hard

"eslint-config-prettier@npm:^8.3.0":
  version: 8.5.0
  resolution: "eslint-config-prettier@npm:8.5.0"
  peerDependencies:
    eslint: ">=7.0.0"
  bin:
    eslint-config-prettier: bin/cli.js
  checksum: 0d0f5c32e7a0ad91249467ce71ca92394ccd343178277d318baf32063b79ea90216f4c81d1065d60f96366fdc60f151d4d68ae7811a58bd37228b84c2083f893
  languageName: node
  linkType: hard

"eslint-plugin-cypress@npm:^2.12.1":
  version: 2.12.1
  resolution: "eslint-plugin-cypress@npm:2.12.1"
  dependencies:
    globals: ^11.12.0
  peerDependencies:
    eslint: ">= 3.2.1"
  checksum: 1f1c36e149304e9a6f58e2292a761abad58274da33b3a48b24ad55ad20cbce3ac7467321f2b6fcb052f9563c89f67004de4766eba2e2bdbcb010a6a0666989cf
  languageName: node
  linkType: hard

"eslint-plugin-prettier@npm:^4.0.0":
  version: 4.0.0
  resolution: "eslint-plugin-prettier@npm:4.0.0"
  dependencies:
    prettier-linter-helpers: ^1.0.0
  peerDependencies:
    eslint: ">=7.28.0"
    prettier: ">=2.0.0"
  peerDependenciesMeta:
    eslint-config-prettier:
      optional: true
  checksum: 03d69177a3c21fa2229c7e427ce604429f0b20ab7f411e2e824912f572a207c7f5a41fd1f0a95b9b8afe121e291c1b1f1dc1d44c7aad4b0837487f9c19f5210d
  languageName: node
  linkType: hard

"eslint-plugin-vue@npm:^8.2.0":
  version: 8.7.1
  resolution: "eslint-plugin-vue@npm:8.7.1"
  dependencies:
    eslint-utils: ^3.0.0
    natural-compare: ^1.4.0
    nth-check: ^2.0.1
    postcss-selector-parser: ^6.0.9
    semver: ^7.3.5
    vue-eslint-parser: ^8.0.1
  peerDependencies:
    eslint: ^6.2.0 || ^7.0.0 || ^8.0.0
  checksum: c3aefb226dea126db32cab4c570f17f4b4047d609f4f5748e8dc410e929fbbfacdc07af1421c0f7773398513e9363de4480694714bc85fa2188ca50d1d19cfbc
  languageName: node
  linkType: hard

"eslint-scope@npm:^5.1.1":
  version: 5.1.1
  resolution: "eslint-scope@npm:5.1.1"
  dependencies:
    esrecurse: ^4.3.0
    estraverse: ^4.1.1
  checksum: 47e4b6a3f0cc29c7feedee6c67b225a2da7e155802c6ea13bbef4ac6b9e10c66cd2dcb987867ef176292bf4e64eccc680a49e35e9e9c669f4a02bac17e86abdb
  languageName: node
  linkType: hard

"eslint-scope@npm:^7.0.0, eslint-scope@npm:^7.1.1":
  version: 7.1.1
  resolution: "eslint-scope@npm:7.1.1"
  dependencies:
    esrecurse: ^4.3.0
    estraverse: ^5.2.0
  checksum: 9f6e974ab2db641ca8ab13508c405b7b859e72afe9f254e8131ff154d2f40c99ad4545ce326fd9fde3212ff29707102562a4834f1c48617b35d98c71a97fbf3e
  languageName: node
  linkType: hard

"eslint-utils@npm:^3.0.0":
  version: 3.0.0
  resolution: "eslint-utils@npm:3.0.0"
  dependencies:
    eslint-visitor-keys: ^2.0.0
  peerDependencies:
    eslint: ">=5"
  checksum: 0668fe02f5adab2e5a367eee5089f4c39033af20499df88fe4e6aba2015c20720404d8c3d6349b6f716b08fdf91b9da4e5d5481f265049278099c4c836ccb619
  languageName: node
  linkType: hard

"eslint-visitor-keys@npm:^2.0.0":
  version: 2.1.0
  resolution: "eslint-visitor-keys@npm:2.1.0"
  checksum: e3081d7dd2611a35f0388bbdc2f5da60b3a3c5b8b6e928daffff7391146b434d691577aa95064c8b7faad0b8a680266bcda0a42439c18c717b80e6718d7e267d
  languageName: node
  linkType: hard

"eslint-visitor-keys@npm:^3.0.0, eslint-visitor-keys@npm:^3.1.0, eslint-visitor-keys@npm:^3.3.0":
  version: 3.3.0
  resolution: "eslint-visitor-keys@npm:3.3.0"
  checksum: d59e68a7c5a6d0146526b0eec16ce87fbf97fe46b8281e0d41384224375c4e52f5ffb9e16d48f4ea50785cde93f766b0c898e31ab89978d88b0e1720fbfb7808
  languageName: node
  linkType: hard

"eslint@npm:^8.5.0":
  version: 8.15.0
  resolution: "eslint@npm:8.15.0"
  dependencies:
    "@eslint/eslintrc": ^1.2.3
    "@humanwhocodes/config-array": ^0.9.2
    ajv: ^6.10.0
    chalk: ^4.0.0
    cross-spawn: ^7.0.2
    debug: ^4.3.2
    doctrine: ^3.0.0
    escape-string-regexp: ^4.0.0
    eslint-scope: ^7.1.1
    eslint-utils: ^3.0.0
    eslint-visitor-keys: ^3.3.0
    espree: ^9.3.2
    esquery: ^1.4.0
    esutils: ^2.0.2
    fast-deep-equal: ^3.1.3
    file-entry-cache: ^6.0.1
    functional-red-black-tree: ^1.0.1
    glob-parent: ^6.0.1
    globals: ^13.6.0
    ignore: ^5.2.0
    import-fresh: ^3.0.0
    imurmurhash: ^0.1.4
    is-glob: ^4.0.0
    js-yaml: ^4.1.0
    json-stable-stringify-without-jsonify: ^1.0.1
    levn: ^0.4.1
    lodash.merge: ^4.6.2
    minimatch: ^3.1.2
    natural-compare: ^1.4.0
    optionator: ^0.9.1
    regexpp: ^3.2.0
    strip-ansi: ^6.0.1
    strip-json-comments: ^3.1.0
    text-table: ^0.2.0
    v8-compile-cache: ^2.0.3
  bin:
    eslint: bin/eslint.js
  checksum: d8896393832e154e1381a21041cfe4d12a73a76fac26ea27cabbc0e5fdac87918ad651f07f804ef6faacd3868572de3c1ec5d96edf5502bc999eff0c423638f7
  languageName: node
  linkType: hard

"espree@npm:^9.0.0, espree@npm:^9.3.1, espree@npm:^9.3.2":
  version: 9.3.2
  resolution: "espree@npm:9.3.2"
  dependencies:
    acorn: ^8.7.1
    acorn-jsx: ^5.3.2
    eslint-visitor-keys: ^3.3.0
  checksum: 9a790d6779847051e87f70d720a0f6981899a722419e80c92ab6dee01e1ab83b8ce52d11b4dc96c2c490182efb5a4c138b8b0d569205bfe1cd4629e658e58c30
  languageName: node
  linkType: hard

"esprima@npm:^4.0.1":
  version: 4.0.1
  resolution: "esprima@npm:4.0.1"
  bin:
    esparse: ./bin/esparse.js
    esvalidate: ./bin/esvalidate.js
  checksum: b45bc805a613dbea2835278c306b91aff6173c8d034223fa81498c77dcbce3b2931bf6006db816f62eacd9fd4ea975dfd85a5b7f3c6402cfd050d4ca3c13a628
  languageName: node
  linkType: hard

"esquery@npm:^1.4.0":
  version: 1.4.0
  resolution: "esquery@npm:1.4.0"
  dependencies:
    estraverse: ^5.1.0
  checksum: a0807e17abd7fbe5fbd4fab673038d6d8a50675cdae6b04fbaa520c34581be0c5fa24582990e8acd8854f671dd291c78bb2efb9e0ed5b62f33bac4f9cf820210
  languageName: node
  linkType: hard

"esrecurse@npm:^4.3.0":
  version: 4.3.0
  resolution: "esrecurse@npm:4.3.0"
  dependencies:
    estraverse: ^5.2.0
  checksum: ebc17b1a33c51cef46fdc28b958994b1dc43cd2e86237515cbc3b4e5d2be6a811b2315d0a1a4d9d340b6d2308b15322f5c8291059521cc5f4802f65e7ec32837
  languageName: node
  linkType: hard

"estraverse@npm:^4.1.1":
  version: 4.3.0
  resolution: "estraverse@npm:4.3.0"
  checksum: a6299491f9940bb246124a8d44b7b7a413a8336f5436f9837aaa9330209bd9ee8af7e91a654a3545aee9c54b3308e78ee360cef1d777d37cfef77d2fa33b5827
  languageName: node
  linkType: hard

"estraverse@npm:^5.1.0, estraverse@npm:^5.2.0":
  version: 5.3.0
  resolution: "estraverse@npm:5.3.0"
  checksum: 072780882dc8416ad144f8fe199628d2b3e7bbc9989d9ed43795d2c90309a2047e6bc5979d7e2322a341163d22cfad9e21f4110597fe487519697389497e4e2b
  languageName: node
  linkType: hard

"estree-walker@npm:^2.0.1, estree-walker@npm:^2.0.2":
  version: 2.0.2
  resolution: "estree-walker@npm:2.0.2"
  checksum: 6151e6f9828abe2259e57f5fd3761335bb0d2ebd76dc1a01048ccee22fabcfef3c0859300f6d83ff0d1927849368775ec5a6d265dde2f6de5a1be1721cd94efc
  languageName: node
  linkType: hard

"esutils@npm:^2.0.2":
  version: 2.0.3
  resolution: "esutils@npm:2.0.3"
  checksum: 22b5b08f74737379a840b8ed2036a5fb35826c709ab000683b092d9054e5c2a82c27818f12604bfc2a9a76b90b6834ef081edbc1c7ae30d1627012e067c6ec87
  languageName: node
  linkType: hard

"event-stream@npm:=3.3.4":
  version: 3.3.4
  resolution: "event-stream@npm:3.3.4"
  dependencies:
    duplexer: ~0.1.1
    from: ~0
    map-stream: ~0.1.0
    pause-stream: 0.0.11
    split: 0.3
    stream-combiner: ~0.0.4
    through: ~2.3.1
  checksum: 80b467820b6daf824d9fb4345d2daf115a056e5c104463f2e98534e92d196a27f2df5ea2aa085624db26f4c45698905499e881d13bc7c01f7a13eac85be72a22
  languageName: node
  linkType: hard

"eventemitter2@npm:^6.4.3":
  version: 6.4.5
  resolution: "eventemitter2@npm:6.4.5"
  checksum: 84504f9cf0cc30205cdd46783fe9df3733435e5097f13070b678023110b5ef07847651808ae280cd94c42cd5976880211c7a40321a8ff8fa56f7c5f9c5c11960
  languageName: node
  linkType: hard

"evtd@npm:^0.2.2, evtd@npm:^0.2.3":
  version: 0.2.3
  resolution: "evtd@npm:0.2.3"
  checksum: 5ddded626355bf97c62e9b0a99aa2187b74e90b50032c06e2e75723250a152ad5b57bbca844fc07d3bd0b9f22f8dfe96ae4c68614efe5f879a4191c3c8070b5a
  languageName: node
  linkType: hard

"execa@npm:4.1.0":
  version: 4.1.0
  resolution: "execa@npm:4.1.0"
  dependencies:
    cross-spawn: ^7.0.0
    get-stream: ^5.0.0
    human-signals: ^1.1.1
    is-stream: ^2.0.0
    merge-stream: ^2.0.0
    npm-run-path: ^4.0.0
    onetime: ^5.1.0
    signal-exit: ^3.0.2
    strip-final-newline: ^2.0.0
  checksum: e30d298934d9c52f90f3847704fd8224e849a081ab2b517bbc02f5f7732c24e56a21f14cb96a08256deffeb2d12b2b7cb7e2b014a12fb36f8d3357e06417ed55
  languageName: node
  linkType: hard

"execa@npm:5.1.1, execa@npm:^5.1.1":
  version: 5.1.1
  resolution: "execa@npm:5.1.1"
  dependencies:
    cross-spawn: ^7.0.3
    get-stream: ^6.0.0
    human-signals: ^2.1.0
    is-stream: ^2.0.0
    merge-stream: ^2.0.0
    npm-run-path: ^4.0.1
    onetime: ^5.1.2
    signal-exit: ^3.0.3
    strip-final-newline: ^2.0.0
  checksum: fba9022c8c8c15ed862847e94c252b3d946036d7547af310e344a527e59021fd8b6bb0723883ea87044dc4f0201f949046993124a42ccb0855cae5bf8c786343
  languageName: node
  linkType: hard

"executable@npm:^4.1.1":
  version: 4.1.1
  resolution: "executable@npm:4.1.1"
  dependencies:
    pify: ^2.2.0
  checksum: f01927ce59bccec804e171bf859a26e362c1f50aa9ebc69f7cafdcce3859d29d4b6267fd47237c18b0a1830614bd3f0ee14b7380d9bad18a4e7af9b5f0b6984f
  languageName: node
  linkType: hard

"extend@npm:~3.0.2":
  version: 3.0.2
  resolution: "extend@npm:3.0.2"
  checksum: a50a8309ca65ea5d426382ff09f33586527882cf532931cb08ca786ea3146c0553310bda688710ff61d7668eba9f96b923fe1420cdf56a2c3eaf30fcab87b515
  languageName: node
  linkType: hard

"extract-zip@npm:2.0.1":
  version: 2.0.1
  resolution: "extract-zip@npm:2.0.1"
  dependencies:
    "@types/yauzl": ^2.9.1
    debug: ^4.1.1
    get-stream: ^5.1.0
    yauzl: ^2.10.0
  dependenciesMeta:
    "@types/yauzl":
      optional: true
  bin:
    extract-zip: cli.js
  checksum: 8cbda9debdd6d6980819cc69734d874ddd71051c9fe5bde1ef307ebcedfe949ba57b004894b585f758b7c9eeeea0e3d87f2dda89b7d25320459c2c9643ebb635
  languageName: node
  linkType: hard

"extsprintf@npm:1.3.0":
  version: 1.3.0
  resolution: "extsprintf@npm:1.3.0"
  checksum: cee7a4a1e34cffeeec18559109de92c27517e5641991ec6bab849aa64e3081022903dd53084f2080d0d2530803aa5ee84f1e9de642c365452f9e67be8f958ce2
  languageName: node
  linkType: hard

"extsprintf@npm:^1.2.0":
  version: 1.4.1
  resolution: "extsprintf@npm:1.4.1"
  checksum: a2f29b241914a8d2bad64363de684821b6b1609d06ae68d5b539e4de6b28659715b5bea94a7265201603713b7027d35399d10b0548f09071c5513e65e8323d33
  languageName: node
  linkType: hard

"fast-deep-equal@npm:^3.1.1, fast-deep-equal@npm:^3.1.3":
  version: 3.1.3
  resolution: "fast-deep-equal@npm:3.1.3"
  checksum: e21a9d8d84f53493b6aa15efc9cfd53dd5b714a1f23f67fb5dc8f574af80df889b3bce25dc081887c6d25457cce704e636395333abad896ccdec03abaf1f3f9d
  languageName: node
  linkType: hard

"fast-diff@npm:^1.1.2":
  version: 1.2.0
  resolution: "fast-diff@npm:1.2.0"
  checksum: 1b5306eaa9e826564d9e5ffcd6ebd881eb5f770b3f977fcbf38f05c824e42172b53c79920e8429c54eb742ce15a0caf268b0fdd5b38f6de52234c4a8368131ae
  languageName: node
  linkType: hard

"fast-glob@npm:^3.2.11, fast-glob@npm:^3.2.9":
  version: 3.2.11
  resolution: "fast-glob@npm:3.2.11"
  dependencies:
    "@nodelib/fs.stat": ^2.0.2
    "@nodelib/fs.walk": ^1.2.3
    glob-parent: ^5.1.2
    merge2: ^1.3.0
    micromatch: ^4.0.4
  checksum: f473105324a7780a20c06de842e15ddbb41d3cb7e71d1e4fe6e8373204f22245d54f5ab9e2061e6a1c613047345954d29b022e0e76f5c28b1df9858179a0e6d7
  languageName: node
  linkType: hard

"fast-json-stable-stringify@npm:^2.0.0":
  version: 2.1.0
  resolution: "fast-json-stable-stringify@npm:2.1.0"
  checksum: b191531e36c607977e5b1c47811158733c34ccb3bfde92c44798929e9b4154884378536d26ad90dfecd32e1ffc09c545d23535ad91b3161a27ddbb8ebe0cbecb
  languageName: node
  linkType: hard

"fast-levenshtein@npm:^2.0.6, fast-levenshtein@npm:~2.0.6":
  version: 2.0.6
  resolution: "fast-levenshtein@npm:2.0.6"
  checksum: 92cfec0a8dfafd9c7a15fba8f2cc29cd0b62b85f056d99ce448bbcd9f708e18ab2764bda4dd5158364f4145a7c72788538994f0d1787b956ef0d1062b0f7c24c
  languageName: node
  linkType: hard

"fastq@npm:^1.6.0":
  version: 1.13.0
  resolution: "fastq@npm:1.13.0"
  dependencies:
    reusify: ^1.0.4
  checksum: 32cf15c29afe622af187d12fc9cd93e160a0cb7c31a3bb6ace86b7dea3b28e7b72acde89c882663f307b2184e14782c6c664fa315973c03626c7d4bff070bb0b
  languageName: node
  linkType: hard

"fd-slicer@npm:~1.1.0":
  version: 1.1.0
  resolution: "fd-slicer@npm:1.1.0"
  dependencies:
    pend: ~1.2.0
  checksum: c8585fd5713f4476eb8261150900d2cb7f6ff2d87f8feb306ccc8a1122efd152f1783bdb2b8dc891395744583436bfd8081d8e63ece0ec8687eeefea394d4ff2
  languageName: node
  linkType: hard

"figures@npm:^3.2.0":
  version: 3.2.0
  resolution: "figures@npm:3.2.0"
  dependencies:
    escape-string-regexp: ^1.0.5
  checksum: 85a6ad29e9aca80b49b817e7c89ecc4716ff14e3779d9835af554db91bac41c0f289c418923519392a1e582b4d10482ad282021330cd045bb7b80c84152f2a2b
  languageName: node
  linkType: hard

"file-entry-cache@npm:^6.0.1":
  version: 6.0.1
  resolution: "file-entry-cache@npm:6.0.1"
  dependencies:
    flat-cache: ^3.0.4
  checksum: f49701feaa6314c8127c3c2f6173cfefff17612f5ed2daaafc6da13b5c91fd43e3b2a58fd0d63f9f94478a501b167615931e7200e31485e320f74a33885a9c74
  languageName: node
  linkType: hard

"fill-range@npm:^7.0.1":
  version: 7.0.1
  resolution: "fill-range@npm:7.0.1"
  dependencies:
    to-regex-range: ^5.0.1
  checksum: cc283f4e65b504259e64fd969bcf4def4eb08d85565e906b7d36516e87819db52029a76b6363d0f02d0d532f0033c9603b9e2d943d56ee3b0d4f7ad3328ff917
  languageName: node
  linkType: hard

"find-up@npm:^5.0.0":
  version: 5.0.0
  resolution: "find-up@npm:5.0.0"
  dependencies:
    locate-path: ^6.0.0
    path-exists: ^4.0.0
  checksum: 07955e357348f34660bde7920783204ff5a26ac2cafcaa28bace494027158a97b9f56faaf2d89a6106211a8174db650dd9f503f9c0d526b1202d5554a00b9095
  languageName: node
  linkType: hard

"flat-cache@npm:^3.0.4":
  version: 3.0.4
  resolution: "flat-cache@npm:3.0.4"
  dependencies:
    flatted: ^3.1.0
    rimraf: ^3.0.2
  checksum: 4fdd10ecbcbf7d520f9040dd1340eb5dfe951e6f0ecf2252edeec03ee68d989ec8b9a20f4434270e71bcfd57800dc09b3344fca3966b2eb8f613072c7d9a2365
  languageName: node
  linkType: hard

"flatted@npm:^3.1.0":
  version: 3.2.5
  resolution: "flatted@npm:3.2.5"
  checksum: 3c436e9695ccca29620b4be5671dd72e5dd0a7500e0856611b7ca9bd8169f177f408c3b9abfa78dfe1493ee2d873e2c119080a8a9bee4e1a186a9e60ca6c89f1
  languageName: node
  linkType: hard

"follow-redirects@npm:^1.14.0":
  version: 1.15.0
  resolution: "follow-redirects@npm:1.15.0"
  peerDependenciesMeta:
    debug:
      optional: true
  checksum: eaec81c3e0ae57aae2422e38ad3539d0e7279b3a63f9681eeea319bb683dea67502c4e097136b8ce9721542b4e236e092b6b49e34e326cdd7733c274f0a3f378
  languageName: node
  linkType: hard

"foreach@npm:^2.0.5":
  version: 2.0.5
  resolution: "foreach@npm:2.0.5"
  checksum: dab4fbfef0b40b69ee5eab81bcb9626b8fa8b3469c8cfa26480f3e5e1ee08c40eae07048c9a967c65aeda26e774511ccc70b3f10a604c01753c6ef24361f0fc8
  languageName: node
  linkType: hard

"forever-agent@npm:~0.6.1":
  version: 0.6.1
  resolution: "forever-agent@npm:0.6.1"
  checksum: 766ae6e220f5fe23676bb4c6a99387cec5b7b62ceb99e10923376e27bfea72f3c3aeec2ba5f45f3f7ba65d6616965aa7c20b15002b6860833bb6e394dea546a8
  languageName: node
  linkType: hard

"form-data@npm:^4.0.0":
  version: 4.0.0
  resolution: "form-data@npm:4.0.0"
  dependencies:
    asynckit: ^0.4.0
    combined-stream: ^1.0.8
    mime-types: ^2.1.12
  checksum: 01135bf8675f9d5c61ff18e2e2932f719ca4de964e3be90ef4c36aacfc7b9cb2fceb5eca0b7e0190e3383fe51c5b37f4cb80b62ca06a99aaabfcfd6ac7c9328c
  languageName: node
  linkType: hard

"form-data@npm:~2.3.2":
  version: 2.3.3
  resolution: "form-data@npm:2.3.3"
  dependencies:
    asynckit: ^0.4.0
    combined-stream: ^1.0.6
    mime-types: ^2.1.12
  checksum: 10c1780fa13dbe1ff3100114c2ce1f9307f8be10b14bf16e103815356ff567b6be39d70fc4a40f8990b9660012dc24b0f5e1dde1b6426166eb23a445ba068ca3
  languageName: node
  linkType: hard

"fraction.js@npm:^4.2.0":
  version: 4.2.0
  resolution: "fraction.js@npm:4.2.0"
  checksum: 8c76a6e21dedea87109d6171a0ac77afa14205794a565d71cb10d2925f629a3922da61bf45ea52dbc30bce4d8636dc0a27213a88cbd600eab047d82f9a3a94c5
  languageName: node
  linkType: hard

"from@npm:~0":
  version: 0.1.7
  resolution: "from@npm:0.1.7"
  checksum: b85125b7890489656eb2e4f208f7654a93ec26e3aefaf3bbbcc0d496fc1941e4405834fcc9fe7333192aa2187905510ace70417bbf9ac6f6f4784a731d986939
  languageName: node
  linkType: hard

"fs-extra@npm:^10.0.1":
  version: 10.1.0
  resolution: "fs-extra@npm:10.1.0"
  dependencies:
    graceful-fs: ^4.2.0
    jsonfile: ^6.0.1
    universalify: ^2.0.0
  checksum: dc94ab37096f813cc3ca12f0f1b5ad6744dfed9ed21e953d72530d103cea193c2f81584a39e9dee1bea36de5ee66805678c0dddc048e8af1427ac19c00fffc50
  languageName: node
  linkType: hard

"fs-extra@npm:^9.1.0":
  version: 9.1.0
  resolution: "fs-extra@npm:9.1.0"
  dependencies:
    at-least-node: ^1.0.0
    graceful-fs: ^4.2.0
    jsonfile: ^6.0.1
    universalify: ^2.0.0
  checksum: ba71ba32e0faa74ab931b7a0031d1523c66a73e225de7426e275e238e312d07313d2da2d33e34a52aa406c8763ade5712eb3ec9ba4d9edce652bcacdc29e6b20
  languageName: node
  linkType: hard

"fs-minipass@npm:^2.0.0, fs-minipass@npm:^2.1.0":
  version: 2.1.0
  resolution: "fs-minipass@npm:2.1.0"
  dependencies:
    minipass: ^3.0.0
  checksum: 1b8d128dae2ac6cc94230cc5ead341ba3e0efaef82dab46a33d171c044caaa6ca001364178d42069b2809c35a1c3c35079a32107c770e9ffab3901b59af8c8b1
  languageName: node
  linkType: hard

"fs.realpath@npm:^1.0.0":
  version: 1.0.0
  resolution: "fs.realpath@npm:1.0.0"
  checksum: 99ddea01a7e75aa276c250a04eedeffe5662bce66c65c07164ad6264f9de18fb21be9433ead460e54cff20e31721c811f4fb5d70591799df5f85dce6d6746fd0
  languageName: node
  linkType: hard

"fsevents@npm:~2.3.2":
  version: 2.3.2
  resolution: "fsevents@npm:2.3.2"
  dependencies:
    node-gyp: latest
  checksum: 97ade64e75091afee5265e6956cb72ba34db7819b4c3e94c431d4be2b19b8bb7a2d4116da417950c3425f17c8fe693d25e20212cac583ac1521ad066b77ae31f
  conditions: os=darwin
  languageName: node
  linkType: hard

"fsevents@patch:fsevents@~2.3.2#~builtin<compat/fsevents>":
  version: 2.3.2
  resolution: "fsevents@patch:fsevents@npm%3A2.3.2#~builtin<compat/fsevents>::version=2.3.2&hash=18f3a7"
  dependencies:
    node-gyp: latest
  conditions: os=darwin
  languageName: node
  linkType: hard

"function-bind@npm:^1.1.1":
  version: 1.1.1
  resolution: "function-bind@npm:1.1.1"
  checksum: b32fbaebb3f8ec4969f033073b43f5c8befbb58f1a79e12f1d7490358150359ebd92f49e72ff0144f65f2c48ea2a605bff2d07965f548f6474fd8efd95bf361a
  languageName: node
  linkType: hard

"function.prototype.name@npm:^1.1.5":
  version: 1.1.5
  resolution: "function.prototype.name@npm:1.1.5"
  dependencies:
    call-bind: ^1.0.2
    define-properties: ^1.1.3
    es-abstract: ^1.19.0
    functions-have-names: ^1.2.2
  checksum: acd21d733a9b649c2c442f067567743214af5fa248dbeee69d8278ce7df3329ea5abac572be9f7470b4ec1cd4d8f1040e3c5caccf98ebf2bf861a0deab735c27
  languageName: node
  linkType: hard

"functional-red-black-tree@npm:^1.0.1":
  version: 1.0.1
  resolution: "functional-red-black-tree@npm:1.0.1"
  checksum: ca6c170f37640e2d94297da8bb4bf27a1d12bea3e00e6a3e007fd7aa32e37e000f5772acf941b4e4f3cf1c95c3752033d0c509af157ad8f526e7f00723b9eb9f
  languageName: node
  linkType: hard

"functions-have-names@npm:^1.2.2":
  version: 1.2.3
  resolution: "functions-have-names@npm:1.2.3"
  checksum: c3f1f5ba20f4e962efb71344ce0a40722163e85bee2101ce25f88214e78182d2d2476aa85ef37950c579eb6cf6ee811c17b3101bb84004bb75655f3e33f3fdb5
  languageName: node
  linkType: hard

"gauge@npm:^4.0.3":
  version: 4.0.4
  resolution: "gauge@npm:4.0.4"
  dependencies:
    aproba: ^1.0.3 || ^2.0.0
    color-support: ^1.1.3
    console-control-strings: ^1.1.0
    has-unicode: ^2.0.1
    signal-exit: ^3.0.7
    string-width: ^4.2.3
    strip-ansi: ^6.0.1
    wide-align: ^1.1.5
  checksum: 788b6bfe52f1dd8e263cda800c26ac0ca2ff6de0b6eee2fe0d9e3abf15e149b651bd27bf5226be10e6e3edb5c4e5d5985a5a1a98137e7a892f75eff76467ad2d
  languageName: node
  linkType: hard

"gensync@npm:^1.0.0-beta.2":
  version: 1.0.0-beta.2
  resolution: "gensync@npm:1.0.0-beta.2"
  checksum: a7437e58c6be12aa6c90f7730eac7fa9833dc78872b4ad2963d2031b00a3367a93f98aec75f9aaac7220848e4026d67a8655e870b24f20a543d103c0d65952ec
  languageName: node
  linkType: hard

"get-func-name@npm:^2.0.0":
  version: 2.0.0
  resolution: "get-func-name@npm:2.0.0"
  checksum: 8d82e69f3e7fab9e27c547945dfe5cc0c57fc0adf08ce135dddb01081d75684a03e7a0487466f478872b341d52ac763ae49e660d01ab83741f74932085f693c3
  languageName: node
  linkType: hard

"get-intrinsic@npm:^1.0.1, get-intrinsic@npm:^1.0.2, get-intrinsic@npm:^1.1.0, get-intrinsic@npm:^1.1.1":
  version: 1.1.1
  resolution: "get-intrinsic@npm:1.1.1"
  dependencies:
    function-bind: ^1.1.1
    has: ^1.0.3
    has-symbols: ^1.0.1
  checksum: a9fe2ca8fa3f07f9b0d30fb202bcd01f3d9b9b6b732452e79c48e79f7d6d8d003af3f9e38514250e3553fdc83c61650851cb6870832ac89deaaceb08e3721a17
  languageName: node
  linkType: hard

"get-stream@npm:^5.0.0, get-stream@npm:^5.1.0":
  version: 5.2.0
  resolution: "get-stream@npm:5.2.0"
  dependencies:
    pump: ^3.0.0
  checksum: 8bc1a23174a06b2b4ce600df38d6c98d2ef6d84e020c1ddad632ad75bac4e092eeb40e4c09e0761c35fc2dbc5e7fff5dab5e763a383582c4a167dd69a905bd12
  languageName: node
  linkType: hard

"get-stream@npm:^6.0.0":
  version: 6.0.1
  resolution: "get-stream@npm:6.0.1"
  checksum: e04ecece32c92eebf5b8c940f51468cd53554dcbb0ea725b2748be583c9523d00128137966afce410b9b051eb2ef16d657cd2b120ca8edafcf5a65e81af63cad
  languageName: node
  linkType: hard

"get-symbol-description@npm:^1.0.0":
  version: 1.0.0
  resolution: "get-symbol-description@npm:1.0.0"
  dependencies:
    call-bind: ^1.0.2
    get-intrinsic: ^1.1.1
  checksum: 9ceff8fe968f9270a37a1f73bf3f1f7bda69ca80f4f80850670e0e7b9444ff99323f7ac52f96567f8b5f5fbe7ac717a0d81d3407c7313e82810c6199446a5247
  languageName: node
  linkType: hard

"getos@npm:^3.2.1":
  version: 3.2.1
  resolution: "getos@npm:3.2.1"
  dependencies:
    async: ^3.2.0
  checksum: 42fd78a66d47cebd3e09de5566cc0044e034b08f4a000a310dbd89a77b02c65d8f4002554bfa495ea5bdc4fa9d515f5ac785a7cc474ba45383cc697f865eeaf1
  languageName: node
  linkType: hard

"getpass@npm:^0.1.1":
  version: 0.1.7
  resolution: "getpass@npm:0.1.7"
  dependencies:
    assert-plus: ^1.0.0
  checksum: ab18d55661db264e3eac6012c2d3daeafaab7a501c035ae0ccb193c3c23e9849c6e29b6ac762b9c2adae460266f925d55a3a2a3a3c8b94be2f222df94d70c046
  languageName: node
  linkType: hard

"glob-parent@npm:^5.1.2, glob-parent@npm:~5.1.2":
  version: 5.1.2
  resolution: "glob-parent@npm:5.1.2"
  dependencies:
    is-glob: ^4.0.1
  checksum: f4f2bfe2425296e8a47e36864e4f42be38a996db40420fe434565e4480e3322f18eb37589617a98640c5dc8fdec1a387007ee18dbb1f3f5553409c34d17f425e
  languageName: node
  linkType: hard

"glob-parent@npm:^6.0.1, glob-parent@npm:^6.0.2":
  version: 6.0.2
  resolution: "glob-parent@npm:6.0.2"
  dependencies:
    is-glob: ^4.0.3
  checksum: c13ee97978bef4f55106b71e66428eb1512e71a7466ba49025fc2aec59a5bfb0954d5abd58fc5ee6c9b076eef4e1f6d3375c2e964b88466ca390da4419a786a8
  languageName: node
  linkType: hard

"glob-regex@npm:^0.3.0":
  version: 0.3.2
  resolution: "glob-regex@npm:0.3.2"
  checksum: 4f7adee18e750cbc3a328acb879631feca56dbfc03016cec53d5a54e50663ddc96e24e244ec8c1a5ee883515126754d89deb825eba529d32b869a0ae46f95e5c
  languageName: node
  linkType: hard

"glob@npm:^7.1.3, glob@npm:^7.1.4":
  version: 7.2.0
  resolution: "glob@npm:7.2.0"
  dependencies:
    fs.realpath: ^1.0.0
    inflight: ^1.0.4
    inherits: 2
    minimatch: ^3.0.4
    once: ^1.3.0
    path-is-absolute: ^1.0.0
  checksum: 78a8ea942331f08ed2e055cb5b9e40fe6f46f579d7fd3d694f3412fe5db23223d29b7fee1575440202e9a7ff9a72ab106a39fee39934c7bedafe5e5f8ae20134
  languageName: node
  linkType: hard

"glob@npm:^8.0.1":
  version: 8.0.1
  resolution: "glob@npm:8.0.1"
  dependencies:
    fs.realpath: ^1.0.0
    inflight: ^1.0.4
    inherits: 2
    minimatch: ^5.0.1
    once: ^1.3.0
    path-is-absolute: ^1.0.0
  checksum: 7ac782f3ef1c08005884447479e68ceb0ad56997eb2003e1e9aefae71bad3cb48eb7c49190d3d6736f2ffcd8af4985d53a46831b3d5e0052cc5756822a38b61a
  languageName: node
  linkType: hard

"glob@npm:^8.0.3":
  version: 8.0.3
  resolution: "glob@npm:8.0.3"
  dependencies:
    fs.realpath: ^1.0.0
    inflight: ^1.0.4
    inherits: 2
    minimatch: ^5.0.1
    once: ^1.3.0
  checksum: 50bcdea19d8e79d8de5f460b1939ffc2b3299eac28deb502093fdca22a78efebc03e66bf54f0abc3d3d07d8134d19a32850288b7440d77e072aa55f9d33b18c5
  languageName: node
  linkType: hard

"global-dirs@npm:^3.0.0":
  version: 3.0.0
  resolution: "global-dirs@npm:3.0.0"
  dependencies:
    ini: 2.0.0
  checksum: 953c17cf14bf6ee0e2100ae82a0d779934eed8a3ec5c94a7a4f37c5b3b592c31ea015fb9a15cf32484de13c79f4a814f3015152f3e1d65976cfbe47c1bfe4a88
  languageName: node
  linkType: hard

"globals@npm:^11.1.0, globals@npm:^11.12.0":
  version: 11.12.0
  resolution: "globals@npm:11.12.0"
  checksum: 67051a45eca3db904aee189dfc7cd53c20c7d881679c93f6146ddd4c9f4ab2268e68a919df740d39c71f4445d2b38ee360fc234428baea1dbdfe68bbcb46979e
  languageName: node
  linkType: hard

"globals@npm:^13.6.0, globals@npm:^13.9.0":
  version: 13.13.0
  resolution: "globals@npm:13.13.0"
  dependencies:
    type-fest: ^0.20.2
  checksum: c55ea8fd3afecb72567bac41605577e19e68476993dfb0ca4c49b86075af5f0ae3f0f5502525f69010f7c5ea5db6a1c540a80a4f80ebdfb2f686d87b0f05d7e9
  languageName: node
  linkType: hard

"globby@npm:^11.0.4, globby@npm:^11.1.0":
  version: 11.1.0
  resolution: "globby@npm:11.1.0"
  dependencies:
    array-union: ^2.1.0
    dir-glob: ^3.0.1
    fast-glob: ^3.2.9
    ignore: ^5.2.0
    merge2: ^1.4.1
    slash: ^3.0.0
  checksum: b4be8885e0cfa018fc783792942d53926c35c50b3aefd3fdcfb9d22c627639dc26bd2327a40a0b74b074100ce95bb7187bfeae2f236856aa3de183af7a02aea6
  languageName: node
  linkType: hard

"globrex@npm:^0.1.2":
  version: 0.1.2
  resolution: "globrex@npm:0.1.2"
  checksum: adca162494a176ce9ecf4dd232f7b802956bb1966b37f60c15e49d2e7d961b66c60826366dc2649093cad5a0d69970cfa8875bd1695b5a1a2f33dcd2aa88da3c
  languageName: node
  linkType: hard

"graceful-fs@npm:^4.1.6, graceful-fs@npm:^4.2.0, graceful-fs@npm:^4.2.6":
  version: 4.2.10
  resolution: "graceful-fs@npm:4.2.10"
  checksum: 3f109d70ae123951905d85032ebeae3c2a5a7a997430df00ea30df0e3a6c60cf6689b109654d6fdacd28810a053348c4d14642da1d075049e6be1ba5216218da
  languageName: node
  linkType: hard

"has-bigints@npm:^1.0.1, has-bigints@npm:^1.0.2":
  version: 1.0.2
  resolution: "has-bigints@npm:1.0.2"
  checksum: 390e31e7be7e5c6fe68b81babb73dfc35d413604d7ee5f56da101417027a4b4ce6a27e46eff97ad040c835b5d228676eae99a9b5c3bc0e23c8e81a49241ff45b
  languageName: node
  linkType: hard

"has-flag@npm:^3.0.0":
  version: 3.0.0
  resolution: "has-flag@npm:3.0.0"
  checksum: 4a15638b454bf086c8148979aae044dd6e39d63904cd452d970374fa6a87623423da485dfb814e7be882e05c096a7ccf1ebd48e7e7501d0208d8384ff4dea73b
  languageName: node
  linkType: hard

"has-flag@npm:^4.0.0":
  version: 4.0.0
  resolution: "has-flag@npm:4.0.0"
  checksum: 261a1357037ead75e338156b1f9452c016a37dcd3283a972a30d9e4a87441ba372c8b81f818cd0fbcd9c0354b4ae7e18b9e1afa1971164aef6d18c2b6095a8ad
  languageName: node
  linkType: hard

"has-property-descriptors@npm:^1.0.0":
  version: 1.0.0
  resolution: "has-property-descriptors@npm:1.0.0"
  dependencies:
    get-intrinsic: ^1.1.1
  checksum: a6d3f0a266d0294d972e354782e872e2fe1b6495b321e6ef678c9b7a06a40408a6891817350c62e752adced73a94ac903c54734fee05bf65b1905ee1368194bb
  languageName: node
  linkType: hard

"has-symbols@npm:^1.0.1, has-symbols@npm:^1.0.2, has-symbols@npm:^1.0.3":
  version: 1.0.3
  resolution: "has-symbols@npm:1.0.3"
  checksum: a054c40c631c0d5741a8285010a0777ea0c068f99ed43e5d6eb12972da223f8af553a455132fdb0801bdcfa0e0f443c0c03a68d8555aa529b3144b446c3f2410
  languageName: node
  linkType: hard

"has-tostringtag@npm:^1.0.0":
  version: 1.0.0
  resolution: "has-tostringtag@npm:1.0.0"
  dependencies:
    has-symbols: ^1.0.2
  checksum: cc12eb28cb6ae22369ebaad3a8ab0799ed61270991be88f208d508076a1e99abe4198c965935ce85ea90b60c94ddda73693b0920b58e7ead048b4a391b502c1c
  languageName: node
  linkType: hard

"has-unicode@npm:^2.0.1":
  version: 2.0.1
  resolution: "has-unicode@npm:2.0.1"
  checksum: 1eab07a7436512db0be40a710b29b5dc21fa04880b7f63c9980b706683127e3c1b57cb80ea96d47991bdae2dfe479604f6a1ba410106ee1046a41d1bd0814400
  languageName: node
  linkType: hard

"has@npm:^1.0.3":
  version: 1.0.3
  resolution: "has@npm:1.0.3"
  dependencies:
    function-bind: ^1.1.1
  checksum: b9ad53d53be4af90ce5d1c38331e712522417d017d5ef1ebd0507e07c2fbad8686fffb8e12ddecd4c39ca9b9b47431afbb975b8abf7f3c3b82c98e9aad052792
  languageName: node
  linkType: hard

"highlight.js@npm:^11.5.0":
  version: 11.5.1
  resolution: "highlight.js@npm:11.5.1"
  checksum: bff556101d7691c6275ad19318e368fc971cd0621ef3d86222f5373df7d8191a2fc1ffd47f118138cbcf85e5fe91cfeefaecd6184f49a3ec18090955efc9edef
  languageName: node
  linkType: hard

"html-encoding-sniffer@npm:^3.0.0":
  version: 3.0.0
  resolution: "html-encoding-sniffer@npm:3.0.0"
  dependencies:
    whatwg-encoding: ^2.0.0
  checksum: 8d806aa00487e279e5ccb573366a951a9f68f65c90298eac9c3a2b440a7ffe46615aff2995a2f61c6746c639234e6179a97e18ca5ccbbf93d3725ef2099a4502
  languageName: node
  linkType: hard

"http-cache-semantics@npm:^4.1.0":
  version: 4.1.0
  resolution: "http-cache-semantics@npm:4.1.0"
  checksum: 974de94a81c5474be07f269f9fd8383e92ebb5a448208223bfb39e172a9dbc26feff250192ecc23b9593b3f92098e010406b0f24bd4d588d631f80214648ed42
  languageName: node
  linkType: hard

"http-proxy-agent@npm:^5.0.0":
  version: 5.0.0
  resolution: "http-proxy-agent@npm:5.0.0"
  dependencies:
    "@tootallnate/once": 2
    agent-base: 6
    debug: 4
  checksum: e2ee1ff1656a131953839b2a19cd1f3a52d97c25ba87bd2559af6ae87114abf60971e498021f9b73f9fd78aea8876d1fb0d4656aac8a03c6caa9fc175f22b786
  languageName: node
  linkType: hard

"http-signature@npm:~1.3.6":
  version: 1.3.6
  resolution: "http-signature@npm:1.3.6"
  dependencies:
    assert-plus: ^1.0.0
    jsprim: ^2.0.2
    sshpk: ^1.14.1
  checksum: 10be2af4764e71fee0281392937050201ee576ac755c543f570d6d87134ce5e858663fe999a7adb3e4e368e1e356d0d7fec6b9542295b875726ff615188e7a0c
  languageName: node
  linkType: hard

"https-proxy-agent@npm:^5.0.0":
  version: 5.0.1
  resolution: "https-proxy-agent@npm:5.0.1"
  dependencies:
    agent-base: 6
    debug: 4
  checksum: 571fccdf38184f05943e12d37d6ce38197becdd69e58d03f43637f7fa1269cf303a7d228aa27e5b27bbd3af8f09fd938e1c91dcfefff2df7ba77c20ed8dfc765
  languageName: node
  linkType: hard

"human-signals@npm:^1.1.1":
  version: 1.1.1
  resolution: "human-signals@npm:1.1.1"
  checksum: d587647c9e8ec24e02821b6be7de5a0fc37f591f6c4e319b3054b43fd4c35a70a94c46fc74d8c1a43c47fde157d23acd7421f375e1c1365b09a16835b8300205
  languageName: node
  linkType: hard

"human-signals@npm:^2.1.0":
  version: 2.1.0
  resolution: "human-signals@npm:2.1.0"
  checksum: b87fd89fce72391625271454e70f67fe405277415b48bcc0117ca73d31fa23a4241787afdc8d67f5a116cf37258c052f59ea82daffa72364d61351423848e3b8
  languageName: node
  linkType: hard

"humanize-ms@npm:^1.2.1":
  version: 1.2.1
  resolution: "humanize-ms@npm:1.2.1"
  dependencies:
    ms: ^2.0.0
  checksum: 9c7a74a2827f9294c009266c82031030eae811ca87b0da3dceb8d6071b9bde22c9f3daef0469c3c533cc67a97d8a167cd9fc0389350e5f415f61a79b171ded16
  languageName: node
  linkType: hard

"iconv-lite@npm:0.6.3, iconv-lite@npm:^0.6.2":
  version: 0.6.3
  resolution: "iconv-lite@npm:0.6.3"
  dependencies:
    safer-buffer: ">= 2.1.2 < 3.0.0"
  checksum: 3f60d47a5c8fc3313317edfd29a00a692cc87a19cac0159e2ce711d0ebc9019064108323b5e493625e25594f11c6236647d8e256fbe7a58f4a3b33b89e6d30bf
  languageName: node
  linkType: hard

"ieee754@npm:^1.1.13":
  version: 1.2.1
  resolution: "ieee754@npm:1.2.1"
  checksum: 5144c0c9815e54ada181d80a0b810221a253562422e7c6c3a60b1901154184f49326ec239d618c416c1c5945a2e197107aee8d986a3dd836b53dffefd99b5e7e
  languageName: node
  linkType: hard

"ignore@npm:^5.1.8, ignore@npm:^5.2.0":
  version: 5.2.0
  resolution: "ignore@npm:5.2.0"
  checksum: 6b1f926792d614f64c6c83da3a1f9c83f6196c2839aa41e1e32dd7b8d174cef2e329d75caabb62cb61ce9dc432f75e67d07d122a037312db7caa73166a1bdb77
  languageName: node
  linkType: hard

"immutable@npm:^4.0.0":
  version: 4.0.0
  resolution: "immutable@npm:4.0.0"
  checksum: 4b5e9181e4d5fa06728a481835ec09c86367e5d03268666c95b522b7644ab891098022e4479a43c4c81a68f2ed82f10751ce5d33e208d7b873b6e7f9dfaf4d87
  languageName: node
  linkType: hard

"import-fresh@npm:^3.0.0, import-fresh@npm:^3.2.1":
  version: 3.3.0
  resolution: "import-fresh@npm:3.3.0"
  dependencies:
    parent-module: ^1.0.0
    resolve-from: ^4.0.0
  checksum: 2cacfad06e652b1edc50be650f7ec3be08c5e5a6f6d12d035c440a42a8cc028e60a5b99ca08a77ab4d6b1346da7d971915828f33cdab730d3d42f08242d09baa
  languageName: node
  linkType: hard

"imurmurhash@npm:^0.1.4":
  version: 0.1.4
  resolution: "imurmurhash@npm:0.1.4"
  checksum: 7cae75c8cd9a50f57dadd77482359f659eaebac0319dd9368bcd1714f55e65badd6929ca58569da2b6494ef13fdd5598cd700b1eba23f8b79c5f19d195a3ecf7
  languageName: node
  linkType: hard

"indent-string@npm:^4.0.0":
  version: 4.0.0
  resolution: "indent-string@npm:4.0.0"
  checksum: 824cfb9929d031dabf059bebfe08cf3137365e112019086ed3dcff6a0a7b698cb80cf67ccccde0e25b9e2d7527aa6cc1fed1ac490c752162496caba3e6699612
  languageName: node
  linkType: hard

"infer-owner@npm:^1.0.4":
  version: 1.0.4
  resolution: "infer-owner@npm:1.0.4"
  checksum: 181e732764e4a0611576466b4b87dac338972b839920b2a8cde43642e4ed6bd54dc1fb0b40874728f2a2df9a1b097b8ff83b56d5f8f8e3927f837fdcb47d8a89
  languageName: node
  linkType: hard

"inflight@npm:^1.0.4":
  version: 1.0.6
  resolution: "inflight@npm:1.0.6"
  dependencies:
    once: ^1.3.0
    wrappy: 1
  checksum: f4f76aa072ce19fae87ce1ef7d221e709afb59d445e05d47fba710e85470923a75de35bfae47da6de1b18afc3ce83d70facf44cfb0aff89f0a3f45c0a0244dfd
  languageName: node
  linkType: hard

"inherits@npm:2, inherits@npm:^2.0.3":
  version: 2.0.4
  resolution: "inherits@npm:2.0.4"
  checksum: 4a48a733847879d6cf6691860a6b1e3f0f4754176e4d71494c41f3475553768b10f84b5ce1d40fbd0e34e6bfbb864ee35858ad4dd2cf31e02fc4a154b724d7f1
  languageName: node
  linkType: hard

"ini@npm:2.0.0":
  version: 2.0.0
  resolution: "ini@npm:2.0.0"
  checksum: e7aadc5fb2e4aefc666d74ee2160c073995a4061556b1b5b4241ecb19ad609243b9cceafe91bae49c219519394bbd31512516cb22a3b1ca6e66d869e0447e84e
  languageName: node
  linkType: hard

"internal-slot@npm:^1.0.3":
  version: 1.0.3
  resolution: "internal-slot@npm:1.0.3"
  dependencies:
    get-intrinsic: ^1.1.0
    has: ^1.0.3
    side-channel: ^1.0.4
  checksum: 1944f92e981e47aebc98a88ff0db579fd90543d937806104d0b96557b10c1f170c51fb777b97740a8b6ddeec585fca8c39ae99fd08a8e058dfc8ab70937238bf
  languageName: node
  linkType: hard

"ip@npm:^1.1.5":
  version: 1.1.5
  resolution: "ip@npm:1.1.5"
  checksum: 30133981f082a060a32644f6a7746e9ba7ac9e2bc07ecc8bbdda3ee8ca9bec1190724c390e45a1ee7695e7edfd2a8f7dda2c104ec5f7ac5068c00648504c7e5a
  languageName: node
  linkType: hard

"is-arguments@npm:^1.0.4, is-arguments@npm:^1.1.0":
  version: 1.1.1
  resolution: "is-arguments@npm:1.1.1"
  dependencies:
    call-bind: ^1.0.2
    has-tostringtag: ^1.0.0
  checksum: 7f02700ec2171b691ef3e4d0e3e6c0ba408e8434368504bb593d0d7c891c0dbfda6d19d30808b904a6cb1929bca648c061ba438c39f296c2a8ca083229c49f27
  languageName: node
  linkType: hard

"is-bigint@npm:^1.0.1":
  version: 1.0.4
  resolution: "is-bigint@npm:1.0.4"
  dependencies:
    has-bigints: ^1.0.1
  checksum: c56edfe09b1154f8668e53ebe8252b6f185ee852a50f9b41e8d921cb2bed425652049fbe438723f6cb48a63ca1aa051e948e7e401e093477c99c84eba244f666
  languageName: node
  linkType: hard

"is-binary-path@npm:~2.1.0":
  version: 2.1.0
  resolution: "is-binary-path@npm:2.1.0"
  dependencies:
    binary-extensions: ^2.0.0
  checksum: 84192eb88cff70d320426f35ecd63c3d6d495da9d805b19bc65b518984b7c0760280e57dbf119b7e9be6b161784a5a673ab2c6abe83abb5198a432232ad5b35c
  languageName: node
  linkType: hard

"is-boolean-object@npm:^1.1.0":
  version: 1.1.2
  resolution: "is-boolean-object@npm:1.1.2"
  dependencies:
    call-bind: ^1.0.2
    has-tostringtag: ^1.0.0
  checksum: c03b23dbaacadc18940defb12c1c0e3aaece7553ef58b162a0f6bba0c2a7e1551b59f365b91e00d2dbac0522392d576ef322628cb1d036a0fe51eb466db67222
  languageName: node
  linkType: hard

"is-callable@npm:^1.1.4, is-callable@npm:^1.2.4":
  version: 1.2.4
  resolution: "is-callable@npm:1.2.4"
  checksum: 1a28d57dc435797dae04b173b65d6d1e77d4f16276e9eff973f994eadcfdc30a017e6a597f092752a083c1103cceb56c91e3dadc6692fedb9898dfaba701575f
  languageName: node
  linkType: hard

"is-ci@npm:^3.0.0":
  version: 3.0.1
  resolution: "is-ci@npm:3.0.1"
  dependencies:
    ci-info: ^3.2.0
  bin:
    is-ci: bin.js
  checksum: 192c66dc7826d58f803ecae624860dccf1899fc1f3ac5505284c0a5cf5f889046ffeb958fa651e5725d5705c5bcb14f055b79150ea5fcad7456a9569de60260e
  languageName: node
  linkType: hard

"is-core-module@npm:^2.8.1":
  version: 2.9.0
  resolution: "is-core-module@npm:2.9.0"
  dependencies:
    has: ^1.0.3
  checksum: b27034318b4b462f1c8f1dfb1b32baecd651d891a4e2d1922135daeff4141dfced2b82b07aef83ef54275c4a3526aa38da859223664d0868ca24182badb784ce
  languageName: node
  linkType: hard

"is-date-object@npm:^1.0.1, is-date-object@npm:^1.0.2":
  version: 1.0.5
  resolution: "is-date-object@npm:1.0.5"
  dependencies:
    has-tostringtag: ^1.0.0
  checksum: baa9077cdf15eb7b58c79398604ca57379b2fc4cf9aa7a9b9e295278648f628c9b201400c01c5e0f7afae56507d741185730307cbe7cad3b9f90a77e5ee342fc
  languageName: node
  linkType: hard

"is-expression@npm:^4.0.0":
  version: 4.0.0
  resolution: "is-expression@npm:4.0.0"
  dependencies:
    acorn: ^7.1.1
    object-assign: ^4.1.1
  checksum: 0f01d0ff53fbbec36abae8fbb7ef056c6d024f7128646856a3e6c500b205788d3e0f337025e72df979d7d7cf4674a00370633d7f8974c668b2d3fdb7e8a83bdb
  languageName: node
  linkType: hard

"is-extglob@npm:^2.1.1":
  version: 2.1.1
  resolution: "is-extglob@npm:2.1.1"
  checksum: df033653d06d0eb567461e58a7a8c9f940bd8c22274b94bf7671ab36df5719791aae15eef6d83bbb5e23283967f2f984b8914559d4449efda578c775c4be6f85
  languageName: node
  linkType: hard

"is-fullwidth-code-point@npm:^3.0.0":
  version: 3.0.0
  resolution: "is-fullwidth-code-point@npm:3.0.0"
  checksum: 44a30c29457c7fb8f00297bce733f0a64cd22eca270f83e58c105e0d015e45c019491a4ab2faef91ab51d4738c670daff901c799f6a700e27f7314029e99e348
  languageName: node
  linkType: hard

"is-glob@npm:^4.0.0, is-glob@npm:^4.0.1, is-glob@npm:^4.0.3, is-glob@npm:~4.0.1":
  version: 4.0.3
  resolution: "is-glob@npm:4.0.3"
  dependencies:
    is-extglob: ^2.1.1
  checksum: d381c1319fcb69d341cc6e6c7cd588e17cd94722d9a32dbd60660b993c4fb7d0f19438674e68dfec686d09b7c73139c9166b47597f846af387450224a8101ab4
  languageName: node
  linkType: hard

"is-installed-globally@npm:~0.4.0":
  version: 0.4.0
  resolution: "is-installed-globally@npm:0.4.0"
  dependencies:
    global-dirs: ^3.0.0
    is-path-inside: ^3.0.2
  checksum: 3359840d5982d22e9b350034237b2cda2a12bac1b48a721912e1ab8e0631dd07d45a2797a120b7b87552759a65ba03e819f1bd63f2d7ab8657ec0b44ee0bf399
  languageName: node
  linkType: hard

"is-lambda@npm:^1.0.1":
  version: 1.0.1
  resolution: "is-lambda@npm:1.0.1"
  checksum: 93a32f01940220532e5948538699ad610d5924ac86093fcee83022252b363eb0cc99ba53ab084a04e4fb62bf7b5731f55496257a4c38adf87af9c4d352c71c35
  languageName: node
  linkType: hard

"is-map@npm:^2.0.1, is-map@npm:^2.0.2":
  version: 2.0.2
  resolution: "is-map@npm:2.0.2"
  checksum: ace3d0ecd667bbdefdb1852de601268f67f2db725624b1958f279316e13fecb8fa7df91fd60f690d7417b4ec180712f5a7ee967008e27c65cfd475cc84337728
  languageName: node
  linkType: hard

"is-negative-zero@npm:^2.0.2":
  version: 2.0.2
  resolution: "is-negative-zero@npm:2.0.2"
  checksum: f3232194c47a549da60c3d509c9a09be442507616b69454716692e37ae9f37c4dea264fb208ad0c9f3efd15a796a46b79df07c7e53c6227c32170608b809149a
  languageName: node
  linkType: hard

"is-number-object@npm:^1.0.4":
  version: 1.0.7
  resolution: "is-number-object@npm:1.0.7"
  dependencies:
    has-tostringtag: ^1.0.0
  checksum: d1e8d01bb0a7134c74649c4e62da0c6118a0bfc6771ea3c560914d52a627873e6920dd0fd0ebc0e12ad2ff4687eac4c308f7e80320b973b2c8a2c8f97a7524f7
  languageName: node
  linkType: hard

"is-number@npm:^7.0.0":
  version: 7.0.0
  resolution: "is-number@npm:7.0.0"
  checksum: 456ac6f8e0f3111ed34668a624e45315201dff921e5ac181f8ec24923b99e9f32ca1a194912dc79d539c97d33dba17dc635202ff0b2cf98326f608323276d27a
  languageName: node
  linkType: hard

"is-path-inside@npm:^3.0.2":
  version: 3.0.3
  resolution: "is-path-inside@npm:3.0.3"
  checksum: abd50f06186a052b349c15e55b182326f1936c89a78bf6c8f2b707412517c097ce04bc49a0ca221787bc44e1049f51f09a2ffb63d22899051988d3a618ba13e9
  languageName: node
  linkType: hard

"is-potential-custom-element-name@npm:^1.0.1":
  version: 1.0.1
  resolution: "is-potential-custom-element-name@npm:1.0.1"
  checksum: ced7bbbb6433a5b684af581872afe0e1767e2d1146b2207ca0068a648fb5cab9d898495d1ac0583524faaf24ca98176a7d9876363097c2d14fee6dd324f3a1ab
  languageName: node
  linkType: hard

"is-promise@npm:^2.0.0":
  version: 2.2.2
  resolution: "is-promise@npm:2.2.2"
  checksum: 18bf7d1c59953e0ad82a1ed963fb3dc0d135c8f299a14f89a17af312fc918373136e56028e8831700e1933519630cc2fd4179a777030330fde20d34e96f40c78
  languageName: node
  linkType: hard

"is-regex@npm:^1.0.3, is-regex@npm:^1.1.1, is-regex@npm:^1.1.4":
  version: 1.1.4
  resolution: "is-regex@npm:1.1.4"
  dependencies:
    call-bind: ^1.0.2
    has-tostringtag: ^1.0.0
  checksum: 362399b33535bc8f386d96c45c9feb04cf7f8b41c182f54174c1a45c9abbbe5e31290bbad09a458583ff6bf3b2048672cdb1881b13289569a7c548370856a652
  languageName: node
  linkType: hard

"is-set@npm:^2.0.1, is-set@npm:^2.0.2":
  version: 2.0.2
  resolution: "is-set@npm:2.0.2"
  checksum: b64343faf45e9387b97a6fd32be632ee7b269bd8183701f3b3f5b71a7cf00d04450ed8669d0bd08753e08b968beda96fca73a10fd0ff56a32603f64deba55a57
  languageName: node
  linkType: hard

"is-shared-array-buffer@npm:^1.0.2":
  version: 1.0.2
  resolution: "is-shared-array-buffer@npm:1.0.2"
  dependencies:
    call-bind: ^1.0.2
  checksum: 9508929cf14fdc1afc9d61d723c6e8d34f5e117f0bffda4d97e7a5d88c3a8681f633a74f8e3ad1fe92d5113f9b921dc5ca44356492079612f9a247efbce7032a
  languageName: node
  linkType: hard

"is-stream@npm:^2.0.0":
  version: 2.0.1
  resolution: "is-stream@npm:2.0.1"
  checksum: b8e05ccdf96ac330ea83c12450304d4a591f9958c11fd17bed240af8d5ffe08aedafa4c0f4cfccd4d28dc9d4d129daca1023633d5c11601a6cbc77521f6fae66
  languageName: node
  linkType: hard

"is-string@npm:^1.0.5, is-string@npm:^1.0.7":
  version: 1.0.7
  resolution: "is-string@npm:1.0.7"
  dependencies:
    has-tostringtag: ^1.0.0
  checksum: 323b3d04622f78d45077cf89aab783b2f49d24dc641aa89b5ad1a72114cfeff2585efc8c12ef42466dff32bde93d839ad321b26884cf75e5a7892a938b089989
  languageName: node
  linkType: hard

"is-symbol@npm:^1.0.2, is-symbol@npm:^1.0.3":
  version: 1.0.4
  resolution: "is-symbol@npm:1.0.4"
  dependencies:
    has-symbols: ^1.0.2
  checksum: 92805812ef590738d9de49d677cd17dfd486794773fb6fa0032d16452af46e9b91bb43ffe82c983570f015b37136f4b53b28b8523bfb10b0ece7a66c31a54510
  languageName: node
  linkType: hard

"is-typed-array@npm:^1.1.7":
  version: 1.1.8
  resolution: "is-typed-array@npm:1.1.8"
  dependencies:
    available-typed-arrays: ^1.0.5
    call-bind: ^1.0.2
    es-abstract: ^1.18.5
    foreach: ^2.0.5
    has-tostringtag: ^1.0.0
  checksum: aa0f9f0716e19e2fb8aef69e69e4205479d25ace778e2339fc910948115cde4b0d9aff9d5d1e8b80f09a5664998278e05e54ad3dc9cb12cefcf86db71084ed00
  languageName: node
  linkType: hard

"is-typedarray@npm:~1.0.0":
  version: 1.0.0
  resolution: "is-typedarray@npm:1.0.0"
  checksum: 3508c6cd0a9ee2e0df2fa2e9baabcdc89e911c7bd5cf64604586697212feec525aa21050e48affb5ffc3df20f0f5d2e2cf79b08caa64e1ccc9578e251763aef7
  languageName: node
  linkType: hard

"is-unicode-supported@npm:^0.1.0":
  version: 0.1.0
  resolution: "is-unicode-supported@npm:0.1.0"
  checksum: a2aab86ee7712f5c2f999180daaba5f361bdad1efadc9610ff5b8ab5495b86e4f627839d085c6530363c6d6d4ecbde340fb8e54bdb83da4ba8e0865ed5513c52
  languageName: node
  linkType: hard

"is-weakmap@npm:^2.0.1":
  version: 2.0.1
  resolution: "is-weakmap@npm:2.0.1"
  checksum: 1222bb7e90c32bdb949226e66d26cb7bce12e1e28e3e1b40bfa6b390ba3e08192a8664a703dff2a00a84825f4e022f9cd58c4599ff9981ab72b1d69479f4f7f6
  languageName: node
  linkType: hard

"is-weakref@npm:^1.0.2":
  version: 1.0.2
  resolution: "is-weakref@npm:1.0.2"
  dependencies:
    call-bind: ^1.0.2
  checksum: 95bd9a57cdcb58c63b1c401c60a474b0f45b94719c30f548c891860f051bc2231575c290a6b420c6bc6e7ed99459d424c652bd5bf9a1d5259505dc35b4bf83de
  languageName: node
  linkType: hard

"is-weakset@npm:^2.0.1":
  version: 2.0.2
  resolution: "is-weakset@npm:2.0.2"
  dependencies:
    call-bind: ^1.0.2
    get-intrinsic: ^1.1.1
  checksum: 5d8698d1fa599a0635d7ca85be9c26d547b317ed8fd83fc75f03efbe75d50001b5eececb1e9971de85fcde84f69ae6f8346bc92d20d55d46201d328e4c74a367
  languageName: node
  linkType: hard

"isarray@npm:^2.0.5":
  version: 2.0.5
  resolution: "isarray@npm:2.0.5"
  checksum: bd5bbe4104438c4196ba58a54650116007fa0262eccef13a4c55b2e09a5b36b59f1e75b9fcc49883dd9d4953892e6fc007eef9e9155648ceea036e184b0f930a
  languageName: node
  linkType: hard

"isexe@npm:^2.0.0":
  version: 2.0.0
  resolution: "isexe@npm:2.0.0"
  checksum: 26bf6c5480dda5161c820c5b5c751ae1e766c587b1f951ea3fcfc973bafb7831ae5b54a31a69bd670220e42e99ec154475025a468eae58ea262f813fdc8d1c62
  languageName: node
  linkType: hard

"isstream@npm:~0.1.2":
  version: 0.1.2
  resolution: "isstream@npm:0.1.2"
  checksum: 1eb2fe63a729f7bdd8a559ab552c69055f4f48eb5c2f03724430587c6f450783c8f1cd936c1c952d0a927925180fcc892ebd5b174236cf1065d4bd5bdb37e963
  languageName: node
  linkType: hard

"iwanthue@npm:^2.0.0":
  version: 2.0.0
  resolution: "iwanthue@npm:2.0.0"
  dependencies:
    obliterator: ^2.0.3
  checksum: 516ff2b6235aefb046a641e9cc3a361cf2d852a4184864ade5da36bfe859d9e743b505b74e56cbcf78e667132366d39d4218676757dadcf1379950115727a62b
  languageName: node
  linkType: hard

"javascript-natural-sort@npm:0.7.1":
  version: 0.7.1
  resolution: "javascript-natural-sort@npm:0.7.1"
  checksum: 161e2c512cc7884bc055a582c6645d9032cab88497a76123d73cb23bfb03d97a04cf7772ecdb8bd3366fc07192c2f996366f479f725c23ef073fffe03d6a586a
  languageName: node
  linkType: hard

"jest-diff@npm:^27.5.1":
  version: 27.5.1
  resolution: "jest-diff@npm:27.5.1"
  dependencies:
    chalk: ^4.0.0
    diff-sequences: ^27.5.1
    jest-get-type: ^27.5.1
    pretty-format: ^27.5.1
  checksum: 8be27c1e1ee57b2bb2bef9c0b233c19621b4c43d53a3c26e2c00a4e805eb4ea11fe1694a06a9fb0e80ffdcfdc0d2b1cb0b85920b3f5c892327ecd1e7bd96b865
  languageName: node
  linkType: hard

"jest-get-type@npm:^27.5.1":
  version: 27.5.1
  resolution: "jest-get-type@npm:27.5.1"
  checksum: 63064ab70195c21007d897c1157bf88ff94a790824a10f8c890392e7d17eda9c3900513cb291ca1c8d5722cad79169764e9a1279f7c8a9c4cd6e9109ff04bbc0
  languageName: node
  linkType: hard

"jest-matcher-utils@npm:^27.0.0":
  version: 27.5.1
  resolution: "jest-matcher-utils@npm:27.5.1"
  dependencies:
    chalk: ^4.0.0
    jest-diff: ^27.5.1
    jest-get-type: ^27.5.1
    pretty-format: ^27.5.1
  checksum: bb2135fc48889ff3fe73888f6cc7168ddab9de28b51b3148f820c89fdfd2effdcad005f18be67d0b9be80eda208ad47290f62f03d0a33f848db2dd0273c8217a
  languageName: node
  linkType: hard

"joi@npm:^17.4.0":
  version: 17.6.0
  resolution: "joi@npm:17.6.0"
  dependencies:
    "@hapi/hoek": ^9.0.0
    "@hapi/topo": ^5.0.0
    "@sideway/address": ^4.1.3
    "@sideway/formula": ^3.0.0
    "@sideway/pinpoint": ^2.0.0
  checksum: eaf62f6c02f2edb1042f1ab04fc23a5918a2cb8f54bec84c6e1033624d8a462c10ae9518af55a3ba84f1793960450d58094eda308e7ef93c17edd4e3c8ef31d5
  languageName: node
  linkType: hard

"js-stringify@npm:^1.0.2":
  version: 1.0.2
  resolution: "js-stringify@npm:1.0.2"
  checksum: f9701d9e535d3ac0f62bbf2624b76c5d0af5b889187232817ae284a41ba21fd7a8b464c2dce3815d8cf52c8bea3480be6b368cfc2c67da799cad458058e8bbf5
  languageName: node
  linkType: hard

"js-tokens@npm:^4.0.0":
  version: 4.0.0
  resolution: "js-tokens@npm:4.0.0"
  checksum: 8a95213a5a77deb6cbe94d86340e8d9ace2b93bc367790b260101d2f36a2eaf4e4e22d9fa9cf459b38af3a32fb4190e638024cf82ec95ef708680e405ea7cc78
  languageName: node
  linkType: hard

"js-yaml@npm:^4.1.0":
  version: 4.1.0
  resolution: "js-yaml@npm:4.1.0"
  dependencies:
    argparse: ^2.0.1
  bin:
    js-yaml: bin/js-yaml.js
  checksum: c7830dfd456c3ef2c6e355cc5a92e6700ceafa1d14bba54497b34a99f0376cecbb3e9ac14d3e5849b426d5a5140709a66237a8c991c675431271c4ce5504151a
  languageName: node
  linkType: hard

"jsbn@npm:~0.1.0":
  version: 0.1.1
  resolution: "jsbn@npm:0.1.1"
  checksum: e5ff29c1b8d965017ef3f9c219dacd6e40ad355c664e277d31246c90545a02e6047018c16c60a00f36d561b3647215c41894f5d869ada6908a2e0ce4200c88f2
  languageName: node
  linkType: hard

"jsdom@npm:^19.0.0":
  version: 19.0.0
  resolution: "jsdom@npm:19.0.0"
  dependencies:
    abab: ^2.0.5
    acorn: ^8.5.0
    acorn-globals: ^6.0.0
    cssom: ^0.5.0
    cssstyle: ^2.3.0
    data-urls: ^3.0.1
    decimal.js: ^10.3.1
    domexception: ^4.0.0
    escodegen: ^2.0.0
    form-data: ^4.0.0
    html-encoding-sniffer: ^3.0.0
    http-proxy-agent: ^5.0.0
    https-proxy-agent: ^5.0.0
    is-potential-custom-element-name: ^1.0.1
    nwsapi: ^2.2.0
    parse5: 6.0.1
    saxes: ^5.0.1
    symbol-tree: ^3.2.4
    tough-cookie: ^4.0.0
    w3c-hr-time: ^1.0.2
    w3c-xmlserializer: ^3.0.0
    webidl-conversions: ^7.0.0
    whatwg-encoding: ^2.0.0
    whatwg-mimetype: ^3.0.0
    whatwg-url: ^10.0.0
    ws: ^8.2.3
    xml-name-validator: ^4.0.0
  peerDependencies:
    canvas: ^2.5.0
  peerDependenciesMeta:
    canvas:
      optional: true
  checksum: 94b693bf4a394097dd96705550bb7b6cd3c8db3c5414e6e9c92a0995ed8b61067597da2f37fca6bed4b5a2f1ef33960ee759522156dccd0b306311988ea87cfb
  languageName: node
  linkType: hard

"jsesc@npm:^2.5.1":
  version: 2.5.2
  resolution: "jsesc@npm:2.5.2"
  bin:
    jsesc: bin/jsesc
  checksum: 4dc190771129e12023f729ce20e1e0bfceac84d73a85bc3119f7f938843fe25a4aeccb54b6494dce26fcf263d815f5f31acdefac7cc9329efb8422a4f4d9fa9d
  languageName: node
  linkType: hard

"json-schema-traverse@npm:^0.4.1":
  version: 0.4.1
  resolution: "json-schema-traverse@npm:0.4.1"
  checksum: 7486074d3ba247769fda17d5181b345c9fb7d12e0da98b22d1d71a5db9698d8b4bd900a3ec1a4ffdd60846fc2556274a5c894d0c48795f14cb03aeae7b55260b
  languageName: node
  linkType: hard

"json-schema@npm:0.4.0":
  version: 0.4.0
  resolution: "json-schema@npm:0.4.0"
  checksum: 66389434c3469e698da0df2e7ac5a3281bcff75e797a5c127db7c5b56270e01ae13d9afa3c03344f76e32e81678337a8c912bdbb75101c62e487dc3778461d72
  languageName: node
  linkType: hard

"json-stable-stringify-without-jsonify@npm:^1.0.1":
  version: 1.0.1
  resolution: "json-stable-stringify-without-jsonify@npm:1.0.1"
  checksum: cff44156ddce9c67c44386ad5cddf91925fe06b1d217f2da9c4910d01f358c6e3989c4d5a02683c7a5667f9727ff05831f7aa8ae66c8ff691c556f0884d49215
  languageName: node
  linkType: hard

"json-stringify-safe@npm:~5.0.1":
  version: 5.0.1
  resolution: "json-stringify-safe@npm:5.0.1"
  checksum: 48ec0adad5280b8a96bb93f4563aa1667fd7a36334f79149abd42446d0989f2ddc58274b479f4819f1f00617957e6344c886c55d05a4e15ebb4ab931e4a6a8ee
  languageName: node
  linkType: hard

"json5@npm:2.2.1, json5@npm:^2.1.2, json5@npm:^2.2.1":
  version: 2.2.1
  resolution: "json5@npm:2.2.1"
  bin:
    json5: lib/cli.js
  checksum: 74b8a23b102a6f2bf2d224797ae553a75488b5adbaee9c9b6e5ab8b510a2fc6e38f876d4c77dea672d4014a44b2399e15f2051ac2b37b87f74c0c7602003543b
  languageName: node
  linkType: hard

"json5@npm:^1.0.1":
  version: 1.0.1
  resolution: "json5@npm:1.0.1"
  dependencies:
    minimist: ^1.2.0
  bin:
    json5: lib/cli.js
  checksum: e76ea23dbb8fc1348c143da628134a98adf4c5a4e8ea2adaa74a80c455fc2cdf0e2e13e6398ef819bfe92306b610ebb2002668ed9fc1af386d593691ef346fc3
  languageName: node
  linkType: hard

"jsonc-parser@npm:^3.0.0":
  version: 3.0.0
  resolution: "jsonc-parser@npm:3.0.0"
  checksum: 1df2326f1f9688de30c70ff19c5b2a83ba3b89a1036160da79821d1361090775e9db502dc57a67c11b56e1186fc1ed70b887f25c5febf9a3ec4f91435836c99d
  languageName: node
  linkType: hard

"jsonfile@npm:^6.0.1":
  version: 6.1.0
  resolution: "jsonfile@npm:6.1.0"
  dependencies:
    graceful-fs: ^4.1.6
    universalify: ^2.0.0
  dependenciesMeta:
    graceful-fs:
      optional: true
  checksum: 7af3b8e1ac8fe7f1eccc6263c6ca14e1966fcbc74b618d3c78a0a2075579487547b94f72b7a1114e844a1e15bb00d440e5d1720bfc4612d790a6f285d5ea8354
  languageName: node
  linkType: hard

"jsprim@npm:^2.0.2":
  version: 2.0.2
  resolution: "jsprim@npm:2.0.2"
  dependencies:
    assert-plus: 1.0.0
    extsprintf: 1.3.0
    json-schema: 0.4.0
    verror: 1.10.0
  checksum: d175f6b1991e160cb0aa39bc857da780e035611986b5492f32395411879fdaf4e513d98677f08f7352dac93a16b66b8361c674b86a3fa406e2e7af6b26321838
  languageName: node
  linkType: hard

"jstransformer@npm:1.0.0":
  version: 1.0.0
  resolution: "jstransformer@npm:1.0.0"
  dependencies:
    is-promise: ^2.0.0
    promise: ^7.0.1
  checksum: 1e019fde17a38766a5b96bccf0738156badc60cfa61e2ba8a8bbd3b855e7d5d7e17492b8a66e4aaabc39483e335d23217343ae32d0f7e5a81af42a95c3e075f9
  languageName: node
  linkType: hard

"kolorist@npm:^1.5.1":
  version: 1.5.1
  resolution: "kolorist@npm:1.5.1"
  checksum: c113be08834fc03a24699612141c79879fceba9ff9765ad500507fb594ee4fa3465a3453ea90bbc9b0dd82f7ba5dbd79814da28e9ebaf8da27266a0088ba2714
  languageName: node
  linkType: hard

"lazy-ass@npm:1.6.0, lazy-ass@npm:^1.6.0":
  version: 1.6.0
  resolution: "lazy-ass@npm:1.6.0"
  checksum: 5a3ebb17915b03452320804466345382a6c25ac782ec4874fecdb2385793896cd459be2f187dc7def8899180c32ee0ab9a1aa7fe52193ac3ff3fe29bb0591729
  languageName: node
  linkType: hard

"levn@npm:^0.4.1":
  version: 0.4.1
  resolution: "levn@npm:0.4.1"
  dependencies:
    prelude-ls: ^1.2.1
    type-check: ~0.4.0
  checksum: 12c5021c859bd0f5248561bf139121f0358285ec545ebf48bb3d346820d5c61a4309535c7f387ed7d84361cf821e124ce346c6b7cef8ee09a67c1473b46d0fc4
  languageName: node
  linkType: hard

"levn@npm:~0.3.0":
  version: 0.3.0
  resolution: "levn@npm:0.3.0"
  dependencies:
    prelude-ls: ~1.1.2
    type-check: ~0.3.2
  checksum: 0d084a524231a8246bb10fec48cdbb35282099f6954838604f3c7fc66f2e16fa66fd9cc2f3f20a541a113c4dafdf181e822c887c8a319c9195444e6c64ac395e
  languageName: node
  linkType: hard

"lilconfig@npm:^2.0.5":
  version: 2.0.5
  resolution: "lilconfig@npm:2.0.5"
  checksum: f7bb9e42656f06930ad04e583026f087508ae408d3526b8b54895e934eb2a966b7aafae569656f2c79a29fe6d779b3ec44ba577e80814734c8655d6f71cdf2d1
  languageName: node
  linkType: hard

"listr2@npm:^3.8.3":
  version: 3.14.0
  resolution: "listr2@npm:3.14.0"
  dependencies:
    cli-truncate: ^2.1.0
    colorette: ^2.0.16
    log-update: ^4.0.0
    p-map: ^4.0.0
    rfdc: ^1.3.0
    rxjs: ^7.5.1
    through: ^2.3.8
    wrap-ansi: ^7.0.0
  peerDependencies:
    enquirer: ">= 2.3.0 < 3"
  peerDependenciesMeta:
    enquirer:
      optional: true
  checksum: fdb8b2d6bdf5df9371ebd5082bee46c6d0ca3d1e5f2b11fbb5a127839855d5f3da9d4968fce94f0a5ec67cac2459766abbb1faeef621065ebb1829b11ef9476d
  languageName: node
  linkType: hard

"local-pkg@npm:^0.4.1":
  version: 0.4.1
  resolution: "local-pkg@npm:0.4.1"
  checksum: 4ab3b4853ffbc3b292a3ae2e22618dbc348418a2ebf60ada55fdcc5a8583f9167c89fc7977194ffa39d0a4c5078f9c421d246afdd252fea7a840f7a8f3b5f96b
  languageName: node
  linkType: hard

"locate-path@npm:^6.0.0":
  version: 6.0.0
  resolution: "locate-path@npm:6.0.0"
  dependencies:
    p-locate: ^5.0.0
  checksum: 72eb661788a0368c099a184c59d2fee760b3831c9c1c33955e8a19ae4a21b4116e53fa736dc086cdeb9fce9f7cc508f2f92d2d3aae516f133e16a2bb59a39f5a
  languageName: node
  linkType: hard

"lodash-es@npm:^4.17.21":
  version: 4.17.21
  resolution: "lodash-es@npm:4.17.21"
  checksum: 05cbffad6e2adbb331a4e16fbd826e7faee403a1a04873b82b42c0f22090f280839f85b95393f487c1303c8a3d2a010048bf06151a6cbe03eee4d388fb0a12d2
  languageName: node
  linkType: hard

"lodash.castarray@npm:^4.4.0":
  version: 4.4.0
  resolution: "lodash.castarray@npm:4.4.0"
  checksum: fca8c7047e0ae2738b0b2503fb00157ae0ff6d8a1b716f87ed715b22560e09de438c75b65e01a7e44ceb41c5b31dce2eb576e46db04beb9c699c498e03cbd00f
  languageName: node
  linkType: hard

"lodash.isplainobject@npm:^4.0.6":
  version: 4.0.6
  resolution: "lodash.isplainobject@npm:4.0.6"
  checksum: 29c6351f281e0d9a1d58f1a4c8f4400924b4c79f18dfc4613624d7d54784df07efaff97c1ff2659f3e085ecf4fff493300adc4837553104cef2634110b0d5337
  languageName: node
  linkType: hard

"lodash.merge@npm:^4.6.2":
  version: 4.6.2
  resolution: "lodash.merge@npm:4.6.2"
  checksum: ad580b4bdbb7ca1f7abf7e1bce63a9a0b98e370cf40194b03380a46b4ed799c9573029599caebc1b14e3f24b111aef72b96674a56cfa105e0f5ac70546cdc005
  languageName: node
  linkType: hard

"lodash.once@npm:^4.1.1":
  version: 4.1.1
  resolution: "lodash.once@npm:4.1.1"
  checksum: d768fa9f9b4e1dc6453be99b753906f58990e0c45e7b2ca5a3b40a33111e5d17f6edf2f768786e2716af90a8e78f8f91431ab8435f761fef00f9b0c256f6d245
  languageName: node
  linkType: hard

"lodash@npm:4.17.21, lodash@npm:^4.17.19, lodash@npm:^4.17.21":
  version: 4.17.21
  resolution: "lodash@npm:4.17.21"
  checksum: eb835a2e51d381e561e508ce932ea50a8e5a68f4ebdd771ea240d3048244a8d13658acbd502cd4829768c56f2e16bdd4340b9ea141297d472517b83868e677f7
  languageName: node
  linkType: hard

"log-symbols@npm:^4.0.0":
  version: 4.1.0
  resolution: "log-symbols@npm:4.1.0"
  dependencies:
    chalk: ^4.1.0
    is-unicode-supported: ^0.1.0
  checksum: fce1497b3135a0198803f9f07464165e9eb83ed02ceb2273930a6f8a508951178d8cf4f0378e9d28300a2ed2bc49050995d2bd5f53ab716bb15ac84d58c6ef74
  languageName: node
  linkType: hard

"log-update@npm:^4.0.0":
  version: 4.0.0
  resolution: "log-update@npm:4.0.0"
  dependencies:
    ansi-escapes: ^4.3.0
    cli-cursor: ^3.1.0
    slice-ansi: ^4.0.0
    wrap-ansi: ^6.2.0
  checksum: ae2f85bbabc1906034154fb7d4c4477c79b3e703d22d78adee8b3862fa913942772e7fa11713e3d96fb46de4e3cabefbf5d0a544344f03b58d3c4bff52aa9eb2
  languageName: node
  linkType: hard

"loupe@npm:^2.3.1":
  version: 2.3.4
  resolution: "loupe@npm:2.3.4"
  dependencies:
    get-func-name: ^2.0.0
  checksum: 5af91db61aa18530f1749a64735ee194ac263e65e9f4d1562bf3036c591f1baa948289c193e0e34c7b5e2c1b75d3c1dc4fce87f5edb3cee10b0c0df46bc9ffb3
  languageName: node
  linkType: hard

"lru-cache@npm:^6.0.0":
  version: 6.0.0
  resolution: "lru-cache@npm:6.0.0"
  dependencies:
    yallist: ^4.0.0
  checksum: f97f499f898f23e4585742138a22f22526254fdba6d75d41a1c2526b3b6cc5747ef59c5612ba7375f42aca4f8461950e925ba08c991ead0651b4918b7c978297
  languageName: node
  linkType: hard

"lru-cache@npm:^7.7.1":
  version: 7.9.0
  resolution: "lru-cache@npm:7.9.0"
  checksum: c91a293a103d11ea4f07de4122ba4f73d8203d0de51852fb612b1764296aebf623a3e11dddef1b3aefdc8d71af97d52b222dad5459dcb967713bbab9a19fed7d
  languageName: node
  linkType: hard

"magic-string@npm:0.26.2, magic-string@npm:^0.26.2":
  version: 0.26.2
  resolution: "magic-string@npm:0.26.2"
  dependencies:
    sourcemap-codec: ^1.4.8
  checksum: b4db4e2b370ac8d9ffc6443a2b591b75364bf1fc9121b5a4068d5b89804abff6709d1fa4a0e0c2d54f2e61e0e44db83efdfe219a5ab0ba6d25ee1f2b51fbed55
  languageName: node
  linkType: hard

"magic-string@npm:^0.25.7":
  version: 0.25.9
  resolution: "magic-string@npm:0.25.9"
  dependencies:
    sourcemap-codec: ^1.4.8
  checksum: 9a0e55a15c7303fc360f9572a71cffba1f61451bc92c5602b1206c9d17f492403bf96f946dfce7483e66822d6b74607262e24392e87b0ac27b786e69a40e9b1a
  languageName: node
  linkType: hard

"magic-string@npm:^0.26.1":
  version: 0.26.1
  resolution: "magic-string@npm:0.26.1"
  dependencies:
    sourcemap-codec: ^1.4.8
  checksum: 23f21f5734346ddfbabd7b9834e3ecda3521e3e1db81166c1513b45b729489bbed1eafa8cd052c7db7fdc7c68ebc5c03bc00dd5a23697edda15dbecaf8c98397
  languageName: node
  linkType: hard

"make-fetch-happen@npm:^10.0.3":
  version: 10.1.2
  resolution: "make-fetch-happen@npm:10.1.2"
  dependencies:
    agentkeepalive: ^4.2.1
    cacache: ^16.0.2
    http-cache-semantics: ^4.1.0
    http-proxy-agent: ^5.0.0
    https-proxy-agent: ^5.0.0
    is-lambda: ^1.0.1
    lru-cache: ^7.7.1
    minipass: ^3.1.6
    minipass-collect: ^1.0.2
    minipass-fetch: ^2.0.3
    minipass-flush: ^1.0.5
    minipass-pipeline: ^1.2.4
    negotiator: ^0.6.3
    promise-retry: ^2.0.1
    socks-proxy-agent: ^6.1.1
    ssri: ^9.0.0
  checksum: 42825d119a7e4f5b1a8e7048a86d328cd36bb1ff875d155ce7079d9a0afdd310c198fb310096af358cfa9ecdf643cecf960380686792457dccb36e17efe89eb0
  languageName: node
  linkType: hard

"map-stream@npm:~0.1.0":
  version: 0.1.0
  resolution: "map-stream@npm:0.1.0"
  checksum: 38abbe4eb883888031e6b2fc0630bc583c99396be16b8ace5794b937b682a8a081f03e8b15bfd4914d1bc88318f0e9ac73ba3512ae65955cd449f63256ddb31d
  languageName: node
  linkType: hard

"marked@npm:^4.0.17":
  version: 4.0.17
  resolution: "marked@npm:4.0.17"
  bin:
    marked: bin/marked.js
  checksum: 33a3c43a20b47bddaf045a59bfc7c3d41cc321931cc663ed231ca3b5b3b195fb2ac2973e687c2afd65b79539c14619baa07d19793f70130160f0af80c06d9b3a
  languageName: node
  linkType: hard

"merge-stream@npm:^2.0.0":
  version: 2.0.0
  resolution: "merge-stream@npm:2.0.0"
  checksum: 6fa4dcc8d86629705cea944a4b88ef4cb0e07656ebf223fa287443256414283dd25d91c1cd84c77987f2aec5927af1a9db6085757cb43d90eb170ebf4b47f4f4
  languageName: node
  linkType: hard

"merge2@npm:^1.3.0, merge2@npm:^1.4.1":
  version: 1.4.1
  resolution: "merge2@npm:1.4.1"
  checksum: 7268db63ed5169466540b6fb947aec313200bcf6d40c5ab722c22e242f651994619bcd85601602972d3c85bd2cc45a358a4c61937e9f11a061919a1da569b0c2
  languageName: node
  linkType: hard

"micromatch@npm:^4.0.4":
  version: 4.0.5
  resolution: "micromatch@npm:4.0.5"
  dependencies:
    braces: ^3.0.2
    picomatch: ^2.3.1
  checksum: 02a17b671c06e8fefeeb6ef996119c1e597c942e632a21ef589154f23898c9c6a9858526246abb14f8bca6e77734aa9dcf65476fca47cedfb80d9577d52843fc
  languageName: node
  linkType: hard

"mime-db@npm:1.52.0":
  version: 1.52.0
  resolution: "mime-db@npm:1.52.0"
  checksum: 0d99a03585f8b39d68182803b12ac601d9c01abfa28ec56204fa330bc9f3d1c5e14beb049bafadb3dbdf646dfb94b87e24d4ec7b31b7279ef906a8ea9b6a513f
  languageName: node
  linkType: hard

"mime-types@npm:^2.1.12, mime-types@npm:~2.1.19":
  version: 2.1.35
  resolution: "mime-types@npm:2.1.35"
  dependencies:
    mime-db: 1.52.0
  checksum: 89a5b7f1def9f3af5dad6496c5ed50191ae4331cc5389d7c521c8ad28d5fdad2d06fd81baf38fed813dc4e46bb55c8145bb0ff406330818c9cf712fb2e9b3836
  languageName: node
  linkType: hard

"mimic-fn@npm:^2.1.0":
  version: 2.1.0
  resolution: "mimic-fn@npm:2.1.0"
  checksum: d2421a3444848ce7f84bd49115ddacff29c15745db73f54041edc906c14b131a38d05298dae3081667627a59b2eb1ca4b436ff2e1b80f69679522410418b478a
  languageName: node
  linkType: hard

"mini-svg-data-uri@npm:^1.2.3":
  version: 1.4.4
  resolution: "mini-svg-data-uri@npm:1.4.4"
  bin:
    mini-svg-data-uri: cli.js
  checksum: 997f1fbd8d59a70f03761e18626d335197a3479cb9d1ff75678e4b64b864d32a0b8fc18115eabde035e5299b8b4a354a78e57dd6ac10f9d604162a6170898d09
  languageName: node
  linkType: hard

"minimatch@npm:^3.0.4, minimatch@npm:^3.1.2":
  version: 3.1.2
  resolution: "minimatch@npm:3.1.2"
  dependencies:
    brace-expansion: ^1.1.7
  checksum: c154e566406683e7bcb746e000b84d74465b3a832c45d59912b9b55cd50dee66e5c4b1e5566dba26154040e51672f9aa450a9aef0c97cfc7336b78b7afb9540a
  languageName: node
  linkType: hard

"minimatch@npm:^5.0.1":
  version: 5.0.1
  resolution: "minimatch@npm:5.0.1"
  dependencies:
    brace-expansion: ^2.0.1
  checksum: b34b98463da4754bc526b244d680c69d4d6089451ebe512edaf6dd9eeed0279399cfa3edb19233513b8f830bf4bfcad911dddcdf125e75074100d52f724774f0
  languageName: node
  linkType: hard

"minimist@npm:^1.1.1, minimist@npm:^1.2.0, minimist@npm:^1.2.5, minimist@npm:^1.2.6":
  version: 1.2.6
  resolution: "minimist@npm:1.2.6"
  checksum: d15428cd1e11eb14e1233bcfb88ae07ed7a147de251441d61158619dfb32c4d7e9061d09cab4825fdee18ecd6fce323228c8c47b5ba7cd20af378ca4048fb3fb
  languageName: node
  linkType: hard

"minipass-collect@npm:^1.0.2":
  version: 1.0.2
  resolution: "minipass-collect@npm:1.0.2"
  dependencies:
    minipass: ^3.0.0
  checksum: 14df761028f3e47293aee72888f2657695ec66bd7d09cae7ad558da30415fdc4752bbfee66287dcc6fd5e6a2fa3466d6c484dc1cbd986525d9393b9523d97f10
  languageName: node
  linkType: hard

"minipass-fetch@npm:^2.0.3":
  version: 2.1.0
  resolution: "minipass-fetch@npm:2.1.0"
  dependencies:
    encoding: ^0.1.13
    minipass: ^3.1.6
    minipass-sized: ^1.0.3
    minizlib: ^2.1.2
  dependenciesMeta:
    encoding:
      optional: true
  checksum: 1334732859a3f7959ed22589bafd9c40384b885aebb5932328071c33f86b3eb181d54c86919675d1825ab5f1c8e4f328878c863873258d113c29d79a4b0c9c9f
  languageName: node
  linkType: hard

"minipass-flush@npm:^1.0.5":
  version: 1.0.5
  resolution: "minipass-flush@npm:1.0.5"
  dependencies:
    minipass: ^3.0.0
  checksum: 56269a0b22bad756a08a94b1ffc36b7c9c5de0735a4dd1ab2b06c066d795cfd1f0ac44a0fcae13eece5589b908ecddc867f04c745c7009be0b566421ea0944cf
  languageName: node
  linkType: hard

"minipass-pipeline@npm:^1.2.4":
  version: 1.2.4
  resolution: "minipass-pipeline@npm:1.2.4"
  dependencies:
    minipass: ^3.0.0
  checksum: b14240dac0d29823c3d5911c286069e36d0b81173d7bdf07a7e4a91ecdef92cdff4baaf31ea3746f1c61e0957f652e641223970870e2353593f382112257971b
  languageName: node
  linkType: hard

"minipass-sized@npm:^1.0.3":
  version: 1.0.3
  resolution: "minipass-sized@npm:1.0.3"
  dependencies:
    minipass: ^3.0.0
  checksum: 79076749fcacf21b5d16dd596d32c3b6bf4d6e62abb43868fac21674078505c8b15eaca4e47ed844985a4514854f917d78f588fcd029693709417d8f98b2bd60
  languageName: node
  linkType: hard

"minipass@npm:^3.0.0, minipass@npm:^3.1.1, minipass@npm:^3.1.6":
  version: 3.1.6
  resolution: "minipass@npm:3.1.6"
  dependencies:
    yallist: ^4.0.0
  checksum: 57a04041413a3531a65062452cb5175f93383ef245d6f4a2961d34386eb9aa8ac11ac7f16f791f5e8bbaf1dfb1ef01596870c88e8822215db57aa591a5bb0a77
  languageName: node
  linkType: hard

"minizlib@npm:^2.1.1, minizlib@npm:^2.1.2":
  version: 2.1.2
  resolution: "minizlib@npm:2.1.2"
  dependencies:
    minipass: ^3.0.0
    yallist: ^4.0.0
  checksum: f1fdeac0b07cf8f30fcf12f4b586795b97be856edea22b5e9072707be51fc95d41487faec3f265b42973a304fe3a64acd91a44a3826a963e37b37bafde0212c3
  languageName: node
  linkType: hard

"mkdirp@npm:^1.0.3, mkdirp@npm:^1.0.4":
  version: 1.0.4
  resolution: "mkdirp@npm:1.0.4"
  bin:
    mkdirp: bin/cmd.js
  checksum: a96865108c6c3b1b8e1d5e9f11843de1e077e57737602de1b82030815f311be11f96f09cce59bd5b903d0b29834733e5313f9301e3ed6d6f6fba2eae0df4298f
  languageName: node
  linkType: hard

"mlly@npm:^0.3.6":
  version: 0.3.19
  resolution: "mlly@npm:0.3.19"
  checksum: 85d646936d5d94b6783e12257adb64ceac9ece32ccaa33d911d44f0c265a91d4f34092beb39641cd108c14a4228f56fc591af60412f65964c72561fbd244ad36
  languageName: node
  linkType: hard

"mlly@npm:^0.5.2":
  version: 0.5.2
  resolution: "mlly@npm:0.5.2"
  dependencies:
    pathe: ^0.2.0
    pkg-types: ^0.3.2
  checksum: 8a369b0b6333e704bff297ab2ac886ebaf67af8ba2c1967a6f55b6771eb7f5a96a2aeaeb6e3329cd7e9360a2fc59226ada41fa2a8aa76c1f4325e92cbc6bc0f3
  languageName: node
  linkType: hard

"mlly@npm:^0.5.3":
  version: 0.5.3
  resolution: "mlly@npm:0.5.3"
  dependencies:
    pathe: ^0.2.0
    pkg-types: ^0.3.2
  checksum: 05b76d2167c9e195ae3952ef116b9a00f81af06772e0f27080b95bf57693916447af7b8313d48911fdeb7185bed6c8e8fc45b311c55599a29a1a451a8f8c103c
  languageName: node
  linkType: hard

"mrmime@npm:^1.0.0":
  version: 1.0.1
  resolution: "mrmime@npm:1.0.1"
  checksum: cc979da44bbbffebaa8eaf7a45117e851f2d4cb46a3ada6ceb78130466a04c15a0de9a9ce1c8b8ba6f6e1b8618866b1352992bf1757d241c0ddca558b9f28a77
  languageName: node
  linkType: hard

"ms@npm:2.1.2":
  version: 2.1.2
  resolution: "ms@npm:2.1.2"
  checksum: 673cdb2c3133eb050c745908d8ce632ed2c02d85640e2edb3ace856a2266a813b30c613569bf3354fdf4ea7d1a1494add3bfa95e2713baa27d0c2c71fc44f58f
  languageName: node
  linkType: hard

"ms@npm:^2.0.0, ms@npm:^2.1.1":
  version: 2.1.3
  resolution: "ms@npm:2.1.3"
  checksum: aa92de608021b242401676e35cfa5aa42dd70cbdc082b916da7fb925c542173e36bce97ea3e804923fe92c0ad991434e4a38327e15a1b5b5f945d66df615ae6d
  languageName: node
  linkType: hard

"naive-ui@npm:^2.29.0":
  version: 2.29.0
  resolution: "naive-ui@npm:2.29.0"
  dependencies:
    "@css-render/plugin-bem": ^0.15.10
    "@css-render/vue3-ssr": ^0.15.10
    "@types/lodash": ^4.14.181
    "@types/lodash-es": ^4.17.6
    async-validator: ^4.0.7
    css-render: ^0.15.10
    date-fns: ^2.28.0
    date-fns-tz: ^1.3.3
    evtd: ^0.2.3
    highlight.js: ^11.5.0
    lodash: ^4.17.21
    lodash-es: ^4.17.21
    seemly: ^0.3.3
    treemate: ^0.3.11
    vdirs: ^0.1.8
    vooks: ^0.2.12
    vueuc: ^0.4.33
  peerDependencies:
    vue: ^3.0.0
  checksum: d3ceb679f55dd4197c8dd7a19c387f8ff8b7c54a01efcb244ddb19efb08ed290540252bea074a1676fc13b98750a4e49cb42bad346c5fb8d892b8278ee70be30
  languageName: node
  linkType: hard

"nanoid@npm:^3.3.3":
  version: 3.3.4
  resolution: "nanoid@npm:3.3.4"
  bin:
    nanoid: bin/nanoid.cjs
  checksum: 2fddd6dee994b7676f008d3ffa4ab16035a754f4bb586c61df5a22cf8c8c94017aadd360368f47d653829e0569a92b129979152ff97af23a558331e47e37cd9c
  languageName: node
  linkType: hard

"natural-compare@npm:^1.4.0":
  version: 1.4.0
  resolution: "natural-compare@npm:1.4.0"
  checksum: 23ad088b08f898fc9b53011d7bb78ec48e79de7627e01ab5518e806033861bef68d5b0cd0e2205c2f36690ac9571ff6bcb05eb777ced2eeda8d4ac5b44592c3d
  languageName: node
  linkType: hard

"negotiator@npm:^0.6.3":
  version: 0.6.3
  resolution: "negotiator@npm:0.6.3"
  checksum: b8ffeb1e262eff7968fc90a2b6767b04cfd9842582a9d0ece0af7049537266e7b2506dfb1d107a32f06dd849ab2aea834d5830f7f4d0e5cb7d36e1ae55d021d9
  languageName: node
  linkType: hard

"node-gyp@npm:latest":
  version: 9.0.0
  resolution: "node-gyp@npm:9.0.0"
  dependencies:
    env-paths: ^2.2.0
    glob: ^7.1.4
    graceful-fs: ^4.2.6
    make-fetch-happen: ^10.0.3
    nopt: ^5.0.0
    npmlog: ^6.0.0
    rimraf: ^3.0.2
    semver: ^7.3.5
    tar: ^6.1.2
    which: ^2.0.2
  bin:
    node-gyp: bin/node-gyp.js
  checksum: 4d8ef8860f7e4f4d86c91db3f519d26ed5cc23b48fe54543e2afd86162b4acbd14f21de42a5db344525efb69a991e021b96a68c70c6e2d5f4a5cb770793da6d3
  languageName: node
  linkType: hard

"node-releases@npm:^2.0.3":
  version: 2.0.4
  resolution: "node-releases@npm:2.0.4"
  checksum: b32d6c2032c7b169ae3938b416fc50f123f5bd577d54a79b2ae201febf27b22846b01c803dd35ac8689afe840f8ba4e5f7154723db629b80f359836b6707b92f
  languageName: node
  linkType: hard

"nopt@npm:^5.0.0":
  version: 5.0.0
  resolution: "nopt@npm:5.0.0"
  dependencies:
    abbrev: 1
  bin:
    nopt: bin/nopt.js
  checksum: d35fdec187269503843924e0114c0c6533fb54bbf1620d0f28b4b60ba01712d6687f62565c55cc20a504eff0fbe5c63e22340c3fad549ad40469ffb611b04f2f
  languageName: node
  linkType: hard

"normalize-path@npm:^3.0.0, normalize-path@npm:~3.0.0":
  version: 3.0.0
  resolution: "normalize-path@npm:3.0.0"
  checksum: 88eeb4da891e10b1318c4b2476b6e2ecbeb5ff97d946815ffea7794c31a89017c70d7f34b3c2ebf23ef4e9fc9fb99f7dffe36da22011b5b5c6ffa34f4873ec20
  languageName: node
  linkType: hard

"normalize-range@npm:^0.1.2":
  version: 0.1.2
  resolution: "normalize-range@npm:0.1.2"
  checksum: 9b2f14f093593f367a7a0834267c24f3cb3e887a2d9809c77d8a7e5fd08738bcd15af46f0ab01cc3a3d660386f015816b5c922cea8bf2ee79777f40874063184
  languageName: node
  linkType: hard

"npm-run-path@npm:^4.0.0, npm-run-path@npm:^4.0.1":
  version: 4.0.1
  resolution: "npm-run-path@npm:4.0.1"
  dependencies:
    path-key: ^3.0.0
  checksum: 5374c0cea4b0bbfdfae62da7bbdf1e1558d338335f4cacf2515c282ff358ff27b2ecb91ffa5330a8b14390ac66a1e146e10700440c1ab868208430f56b5f4d23
  languageName: node
  linkType: hard

"npmlog@npm:^6.0.0":
  version: 6.0.2
  resolution: "npmlog@npm:6.0.2"
  dependencies:
    are-we-there-yet: ^3.0.0
    console-control-strings: ^1.1.0
    gauge: ^4.0.3
    set-blocking: ^2.0.0
  checksum: ae238cd264a1c3f22091cdd9e2b106f684297d3c184f1146984ecbe18aaa86343953f26b9520dedd1b1372bc0316905b736c1932d778dbeb1fcf5a1001390e2a
  languageName: node
  linkType: hard

"nth-check@npm:^2.0.1":
  version: 2.0.1
  resolution: "nth-check@npm:2.0.1"
  dependencies:
    boolbase: ^1.0.0
  checksum: 5386d035c48438ff304fe687704d93886397349d1bed136de97aeae464caba10e8ffac55a04b215b86b3bc8897f33e0a5aa1045a9d8b2f251ae61b2a3ad3e450
  languageName: node
  linkType: hard

"nwsapi@npm:^2.2.0":
  version: 2.2.0
  resolution: "nwsapi@npm:2.2.0"
  checksum: 5ef4a9bc0c1a5b7f2e014aa6a4b359a257503b796618ed1ef0eb852098f77e772305bb0e92856e4bbfa3e6c75da48c0113505c76f144555ff38867229c2400a7
  languageName: node
  linkType: hard

"object-assign@npm:^4.1.1":
  version: 4.1.1
  resolution: "object-assign@npm:4.1.1"
  checksum: fcc6e4ea8c7fe48abfbb552578b1c53e0d194086e2e6bbbf59e0a536381a292f39943c6e9628af05b5528aa5e3318bb30d6b2e53cadaf5b8fe9e12c4b69af23f
  languageName: node
  linkType: hard

"object-hash@npm:^3.0.0":
  version: 3.0.0
  resolution: "object-hash@npm:3.0.0"
  checksum: 80b4904bb3857c52cc1bfd0b52c0352532ca12ed3b8a6ff06a90cd209dfda1b95cee059a7625eb9da29537027f68ac4619363491eedb2f5d3dddbba97494fd6c
  languageName: node
  linkType: hard

"object-inspect@npm:^1.12.0, object-inspect@npm:^1.9.0":
  version: 1.12.0
  resolution: "object-inspect@npm:1.12.0"
  checksum: 2b36d4001a9c921c6b342e2965734519c9c58c355822243c3207fbf0aac271f8d44d30d2d570d450b2cc6f0f00b72bcdba515c37827d2560e5f22b1899a31cf4
  languageName: node
  linkType: hard

"object-is@npm:^1.1.4":
  version: 1.1.5
  resolution: "object-is@npm:1.1.5"
  dependencies:
    call-bind: ^1.0.2
    define-properties: ^1.1.3
  checksum: 989b18c4cba258a6b74dc1d74a41805c1a1425bce29f6cabb50dcb1a6a651ea9104a1b07046739a49a5bb1bc49727bcb00efd5c55f932f6ea04ec8927a7901fe
  languageName: node
  linkType: hard

"object-keys@npm:^1.1.1":
  version: 1.1.1
  resolution: "object-keys@npm:1.1.1"
  checksum: b363c5e7644b1e1b04aa507e88dcb8e3a2f52b6ffd0ea801e4c7a62d5aa559affe21c55a07fd4b1fd55fc03a33c610d73426664b20032405d7b92a1414c34d6a
  languageName: node
  linkType: hard

"object.assign@npm:^4.1.2":
  version: 4.1.2
  resolution: "object.assign@npm:4.1.2"
  dependencies:
    call-bind: ^1.0.0
    define-properties: ^1.1.3
    has-symbols: ^1.0.1
    object-keys: ^1.1.1
  checksum: d621d832ed7b16ac74027adb87196804a500d80d9aca536fccb7ba48d33a7e9306a75f94c1d29cbfa324bc091bfc530bc24789568efdaee6a47fcfa298993814
  languageName: node
  linkType: hard

"obliterator@npm:^2.0.3":
  version: 2.0.4
  resolution: "obliterator@npm:2.0.4"
  checksum: f28ad35b6d812089315f375dc3e6e5f9bebf958ebe4b10ccd471c7115cbcf595e74bdac4783ae758e5b1f47e3096427fdb37cfa7bed566b132df92ff317b9a7c
  languageName: node
  linkType: hard

"once@npm:^1.3.0, once@npm:^1.3.1, once@npm:^1.4.0":
  version: 1.4.0
  resolution: "once@npm:1.4.0"
  dependencies:
    wrappy: 1
  checksum: cd0a88501333edd640d95f0d2700fbde6bff20b3d4d9bdc521bdd31af0656b5706570d6c6afe532045a20bb8dc0849f8332d6f2a416e0ba6d3d3b98806c7db68
  languageName: node
  linkType: hard

"onetime@npm:^5.1.0, onetime@npm:^5.1.2":
  version: 5.1.2
  resolution: "onetime@npm:5.1.2"
  dependencies:
    mimic-fn: ^2.1.0
  checksum: 2478859ef817fc5d4e9c2f9e5728512ddd1dbc9fb7829ad263765bb6d3b91ce699d6e2332eef6b7dff183c2f490bd3349f1666427eaba4469fba0ac38dfd0d34
  languageName: node
  linkType: hard

"optionator@npm:^0.8.1":
  version: 0.8.3
  resolution: "optionator@npm:0.8.3"
  dependencies:
    deep-is: ~0.1.3
    fast-levenshtein: ~2.0.6
    levn: ~0.3.0
    prelude-ls: ~1.1.2
    type-check: ~0.3.2
    word-wrap: ~1.2.3
  checksum: b8695ddf3d593203e25ab0900e265d860038486c943ff8b774f596a310f8ceebdb30c6832407a8198ba3ec9debe1abe1f51d4aad94843612db3b76d690c61d34
  languageName: node
  linkType: hard

"optionator@npm:^0.9.1":
  version: 0.9.1
  resolution: "optionator@npm:0.9.1"
  dependencies:
    deep-is: ^0.1.3
    fast-levenshtein: ^2.0.6
    levn: ^0.4.1
    prelude-ls: ^1.2.1
    type-check: ^0.4.0
    word-wrap: ^1.2.3
  checksum: dbc6fa065604b24ea57d734261914e697bd73b69eff7f18e967e8912aa2a40a19a9f599a507fa805be6c13c24c4eae8c71306c239d517d42d4c041c942f508a0
  languageName: node
  linkType: hard

"ospath@npm:^1.2.2":
  version: 1.2.2
  resolution: "ospath@npm:1.2.2"
  checksum: 505f48a4f4f1c557d6c656ec985707726e3714721680139be037613e903aa8c8fa4ddd8d1342006f9b2dc0065e6e20f8b7bea2ee05354f31257044790367b347
  languageName: node
  linkType: hard

"p-limit@npm:^3.0.2":
  version: 3.1.0
  resolution: "p-limit@npm:3.1.0"
  dependencies:
    yocto-queue: ^0.1.0
  checksum: 7c3690c4dbf62ef625671e20b7bdf1cbc9534e83352a2780f165b0d3ceba21907e77ad63401708145ca4e25bfc51636588d89a8c0aeb715e6c37d1c066430360
  languageName: node
  linkType: hard

"p-locate@npm:^5.0.0":
  version: 5.0.0
  resolution: "p-locate@npm:5.0.0"
  dependencies:
    p-limit: ^3.0.2
  checksum: 1623088f36cf1cbca58e9b61c4e62bf0c60a07af5ae1ca99a720837356b5b6c5ba3eb1b2127e47a06865fee59dd0453cad7cc844cda9d5a62ac1a5a51b7c86d3
  languageName: node
  linkType: hard

"p-map@npm:^4.0.0":
  version: 4.0.0
  resolution: "p-map@npm:4.0.0"
  dependencies:
    aggregate-error: ^3.0.0
  checksum: cb0ab21ec0f32ddffd31dfc250e3afa61e103ef43d957cc45497afe37513634589316de4eb88abdfd969fe6410c22c0b93ab24328833b8eb1ccc087fc0442a1c
  languageName: node
  linkType: hard

"parent-module@npm:^1.0.0":
  version: 1.0.1
  resolution: "parent-module@npm:1.0.1"
  dependencies:
    callsites: ^3.0.0
  checksum: 6ba8b255145cae9470cf5551eb74be2d22281587af787a2626683a6c20fbb464978784661478dd2a3f1dad74d1e802d403e1b03c1a31fab310259eec8ac560ff
  languageName: node
  linkType: hard

"parse5@npm:6.0.1":
  version: 6.0.1
  resolution: "parse5@npm:6.0.1"
  checksum: 7d569a176c5460897f7c8f3377eff640d54132b9be51ae8a8fa4979af940830b2b0c296ce75e5bd8f4041520aadde13170dbdec44889975f906098ea0002f4bd
  languageName: node
  linkType: hard

"path-exists@npm:^4.0.0":
  version: 4.0.0
  resolution: "path-exists@npm:4.0.0"
  checksum: 505807199dfb7c50737b057dd8d351b82c033029ab94cb10a657609e00c1bc53b951cfdbccab8de04c5584d5eff31128ce6afd3db79281874a5ef2adbba55ed1
  languageName: node
  linkType: hard

"path-is-absolute@npm:^1.0.0":
  version: 1.0.1
  resolution: "path-is-absolute@npm:1.0.1"
  checksum: 060840f92cf8effa293bcc1bea81281bd7d363731d214cbe5c227df207c34cd727430f70c6037b5159c8a870b9157cba65e775446b0ab06fd5ecc7e54615a3b8
  languageName: node
  linkType: hard

"path-key@npm:^3.0.0, path-key@npm:^3.1.0":
  version: 3.1.1
  resolution: "path-key@npm:3.1.1"
  checksum: 55cd7a9dd4b343412a8386a743f9c746ef196e57c823d90ca3ab917f90ab9f13dd0ded27252ba49dbdfcab2b091d998bc446f6220cd3cea65db407502a740020
  languageName: node
  linkType: hard

"path-parse@npm:^1.0.7":
  version: 1.0.7
  resolution: "path-parse@npm:1.0.7"
  checksum: 49abf3d81115642938a8700ec580da6e830dde670be21893c62f4e10bd7dd4c3742ddc603fe24f898cba7eb0c6bc1777f8d9ac14185d34540c6d4d80cd9cae8a
  languageName: node
  linkType: hard

"path-type@npm:^4.0.0":
  version: 4.0.0
  resolution: "path-type@npm:4.0.0"
  checksum: 5b1e2daa247062061325b8fdbfd1fb56dde0a448fb1455453276ea18c60685bdad23a445dc148cf87bc216be1573357509b7d4060494a6fd768c7efad833ee45
  languageName: node
  linkType: hard

"pathe@npm:^0.2.0":
  version: 0.2.0
  resolution: "pathe@npm:0.2.0"
  checksum: 9a8149ce152088f30d15b0b03a7c128ba21f16b4dc1f3f90fe38eee9f6d0f1d6da8e4e47bd2a4f9e14aaac7c30ed01cfc86216479011de2bdc598b65e6f19f41
  languageName: node
  linkType: hard

"pathe@npm:^0.3.0":
  version: 0.3.0
  resolution: "pathe@npm:0.3.0"
  checksum: 1da704da2b625b9062be4079b6f8d5609e053add991520fb6a43905b492ee48e5c61cc6fb87f7ae970df39d4b7be1e6840285f683d670f8b430481e46c81c863
  languageName: node
  linkType: hard

"pathval@npm:^1.1.1":
  version: 1.1.1
  resolution: "pathval@npm:1.1.1"
  checksum: 090e3147716647fb7fb5b4b8c8e5b55e5d0a6086d085b6cd23f3d3c01fcf0ff56fd3cc22f2f4a033bd2e46ed55d61ed8379e123b42afe7d531a2a5fc8bb556d6
  languageName: node
  linkType: hard

"pause-stream@npm:0.0.11":
  version: 0.0.11
  resolution: "pause-stream@npm:0.0.11"
  dependencies:
    through: ~2.3
  checksum: 3c4a14052a638b92e0c96eb00c0d7977df7f79ea28395250c525d197f1fc02d34ce1165d5362e2e6ebbb251524b94a76f3f0d4abc39ab8b016d97449fe15583c
  languageName: node
  linkType: hard

"pend@npm:~1.2.0":
  version: 1.2.0
  resolution: "pend@npm:1.2.0"
  checksum: 6c72f5243303d9c60bd98e6446ba7d30ae29e3d56fdb6fae8767e8ba6386f33ee284c97efe3230a0d0217e2b1723b8ab490b1bbf34fcbb2180dbc8a9de47850d
  languageName: node
  linkType: hard

"performance-now@npm:^2.1.0":
  version: 2.1.0
  resolution: "performance-now@npm:2.1.0"
  checksum: 534e641aa8f7cba160f0afec0599b6cecefbb516a2e837b512be0adbe6c1da5550e89c78059c7fabc5c9ffdf6627edabe23eb7c518c4500067a898fa65c2b550
  languageName: node
  linkType: hard

"picocolors@npm:^1.0.0":
  version: 1.0.0
  resolution: "picocolors@npm:1.0.0"
  checksum: a2e8092dd86c8396bdba9f2b5481032848525b3dc295ce9b57896f931e63fc16f79805144321f72976383fc249584672a75cc18d6777c6b757603f372f745981
  languageName: node
  linkType: hard

"picomatch@npm:^2.0.4, picomatch@npm:^2.2.1, picomatch@npm:^2.2.2, picomatch@npm:^2.3.1":
  version: 2.3.1
  resolution: "picomatch@npm:2.3.1"
  checksum: 050c865ce81119c4822c45d3c84f1ced46f93a0126febae20737bd05ca20589c564d6e9226977df859ed5e03dc73f02584a2b0faad36e896936238238b0446cf
  languageName: node
  linkType: hard

"pify@npm:^2.2.0":
  version: 2.3.0
  resolution: "pify@npm:2.3.0"
  checksum: 9503aaeaf4577acc58642ad1d25c45c6d90288596238fb68f82811c08104c800e5a7870398e9f015d82b44ecbcbef3dc3d4251a1cbb582f6e5959fe09884b2ba
  languageName: node
  linkType: hard

"pinia@npm:^2.0.13":
  version: 2.0.14
  resolution: "pinia@npm:2.0.14"
  dependencies:
    "@vue/devtools-api": ^6.1.4
    vue-demi: "*"
  peerDependencies:
    "@vue/composition-api": ^1.4.0
    typescript: ">=4.4.4"
    vue: ^2.6.14 || ^3.2.0
  peerDependenciesMeta:
    "@vue/composition-api":
      optional: true
    typescript:
      optional: true
  checksum: d07ed55b53e92da0971c3fcc0a1bd520b26cd50d266f46c8bab24fed87788461782a2c75088cf97c79810e7a4ceb28381f5d77daf280883ad3340c41962d0934
  languageName: node
  linkType: hard

"pkg-types@npm:^0.3.2":
  version: 0.3.2
  resolution: "pkg-types@npm:0.3.2"
  dependencies:
    jsonc-parser: ^3.0.0
    mlly: ^0.3.6
    pathe: ^0.2.0
  checksum: 55942a816772137fda954ea1ad86cb972e63da42e445a0532cd6bfc31def6ed22f28bf5746fcea39cedd128494079212ee1ab51edcf206280b9e4eb8c3468bd4
  languageName: node
  linkType: hard

"postcss-js@npm:^4.0.0":
  version: 4.0.0
  resolution: "postcss-js@npm:4.0.0"
  dependencies:
    camelcase-css: ^2.0.1
  peerDependencies:
    postcss: ^8.3.3
  checksum: 14be8a58670b4c5d037d40f179240a4f736d53530db727e2635638fa296bc4bff18149ca860928398aace422e55d07c9f5729eeccd395340944985199cdc82a5
  languageName: node
  linkType: hard

"postcss-load-config@npm:^3.1.4":
  version: 3.1.4
  resolution: "postcss-load-config@npm:3.1.4"
  dependencies:
    lilconfig: ^2.0.5
    yaml: ^1.10.2
  peerDependencies:
    postcss: ">=8.0.9"
    ts-node: ">=9.0.0"
  peerDependenciesMeta:
    postcss:
      optional: true
    ts-node:
      optional: true
  checksum: 1c589504c2d90b1568aecae8238ab993c17dba2c44f848a8f13619ba556d26a1c09644d5e6361b5784e721e94af37b604992f9f3dc0483e687a0cc1cc5029a34
  languageName: node
  linkType: hard

"postcss-nested@npm:5.0.6":
  version: 5.0.6
  resolution: "postcss-nested@npm:5.0.6"
  dependencies:
    postcss-selector-parser: ^6.0.6
  peerDependencies:
    postcss: ^8.2.14
  checksum: dbcbfd11e514f485ac0d2b649b32bcbd855665a88a76f697f8be6c5017aa0260954ecccd2475bbd5865a5d248eae9a4e6e10d2d51927621d05430381aa37e43b
  languageName: node
  linkType: hard

"postcss-selector-parser@npm:^6.0.10, postcss-selector-parser@npm:^6.0.6, postcss-selector-parser@npm:^6.0.9":
  version: 6.0.10
  resolution: "postcss-selector-parser@npm:6.0.10"
  dependencies:
    cssesc: ^3.0.0
    util-deprecate: ^1.0.2
  checksum: 46afaa60e3d1998bd7adf6caa374baf857cc58d3ff944e29459c9a9e4680a7fe41597bd5b755fc81d7c388357e9bf67c0251d047c640a09f148e13606b8a8608
  languageName: node
  linkType: hard

"postcss-value-parser@npm:^4.2.0":
  version: 4.2.0
  resolution: "postcss-value-parser@npm:4.2.0"
  checksum: 819ffab0c9d51cf0acbabf8996dffbfafbafa57afc0e4c98db88b67f2094cb44488758f06e5da95d7036f19556a4a732525e84289a425f4f6fd8e412a9d7442f
  languageName: node
  linkType: hard

"postcss@npm:^8.1.10, postcss@npm:^8.4.12, postcss@npm:^8.4.13":
  version: 8.4.13
  resolution: "postcss@npm:8.4.13"
  dependencies:
    nanoid: ^3.3.3
    picocolors: ^1.0.0
    source-map-js: ^1.0.2
  checksum: 514fb3552805a5d039a2d6b4df3e73f657001716ca93c0d57e6067b0473abdea70276d80afc96005c9aaff82ed5d98062bd97724d3f47ca400fba0b5e9e436ed
  languageName: node
  linkType: hard

"prelude-ls@npm:^1.2.1":
  version: 1.2.1
  resolution: "prelude-ls@npm:1.2.1"
  checksum: cd192ec0d0a8e4c6da3bb80e4f62afe336df3f76271ac6deb0e6a36187133b6073a19e9727a1ff108cd8b9982e4768850d413baa71214dd80c7979617dca827a
  languageName: node
  linkType: hard

"prelude-ls@npm:~1.1.2":
  version: 1.1.2
  resolution: "prelude-ls@npm:1.1.2"
  checksum: c4867c87488e4a0c233e158e4d0d5565b609b105d75e4c05dc760840475f06b731332eb93cc8c9cecb840aa8ec323ca3c9a56ad7820ad2e63f0261dadcb154e4
  languageName: node
  linkType: hard

"prettier-linter-helpers@npm:^1.0.0":
  version: 1.0.0
  resolution: "prettier-linter-helpers@npm:1.0.0"
  dependencies:
    fast-diff: ^1.1.2
  checksum: 00ce8011cf6430158d27f9c92cfea0a7699405633f7f1d4a45f07e21bf78e99895911cbcdc3853db3a824201a7c745bd49bfea8abd5fb9883e765a90f74f8392
  languageName: node
  linkType: hard

"prettier@npm:^2.5.1":
  version: 2.6.2
  resolution: "prettier@npm:2.6.2"
  bin:
    prettier: bin-prettier.js
  checksum: 48d08dde8e9fb1f5bccdd205baa7f192e9fc8bc98f86e1b97d919de804e28c806b0e6cc685e4a88211aa7987fa9668f30baae19580d87ced3ed0f2ec6572106f
  languageName: node
  linkType: hard

"pretty-bytes@npm:^5.6.0":
  version: 5.6.0
  resolution: "pretty-bytes@npm:5.6.0"
  checksum: 9c082500d1e93434b5b291bd651662936b8bd6204ec9fa17d563116a192d6d86b98f6d328526b4e8d783c07d5499e2614a807520249692da9ec81564b2f439cd
  languageName: node
  linkType: hard

"pretty-format@npm:^27.0.0, pretty-format@npm:^27.5.1":
  version: 27.5.1
  resolution: "pretty-format@npm:27.5.1"
  dependencies:
    ansi-regex: ^5.0.1
    ansi-styles: ^5.0.0
    react-is: ^17.0.1
  checksum: cf610cffcb793885d16f184a62162f2dd0df31642d9a18edf4ca298e909a8fe80bdbf556d5c9573992c102ce8bf948691da91bf9739bee0ffb6e79c8a8a6e088
  languageName: node
  linkType: hard

"prismjs@npm:^1.28.0":
  version: 1.28.0
  resolution: "prismjs@npm:1.28.0"
  checksum: bde93fb2beb45b7243219fc53855f59ee54b3fa179f315e8f9d66244d756ef984462e10561bbdc6713d3d7e051852472d7c284f5794a8791eeaefea2fb910b16
  languageName: node
  linkType: hard

"promise-inflight@npm:^1.0.1":
  version: 1.0.1
  resolution: "promise-inflight@npm:1.0.1"
  checksum: 22749483091d2c594261517f4f80e05226d4d5ecc1fc917e1886929da56e22b5718b7f2a75f3807e7a7d471bc3be2907fe92e6e8f373ddf5c64bae35b5af3981
  languageName: node
  linkType: hard

"promise-retry@npm:^2.0.1":
  version: 2.0.1
  resolution: "promise-retry@npm:2.0.1"
  dependencies:
    err-code: ^2.0.2
    retry: ^0.12.0
  checksum: f96a3f6d90b92b568a26f71e966cbbc0f63ab85ea6ff6c81284dc869b41510e6cdef99b6b65f9030f0db422bf7c96652a3fff9f2e8fb4a0f069d8f4430359429
  languageName: node
  linkType: hard

"promise@npm:^7.0.1":
  version: 7.3.1
  resolution: "promise@npm:7.3.1"
  dependencies:
    asap: ~2.0.3
  checksum: 475bb069130179fbd27ed2ab45f26d8862376a137a57314cf53310bdd85cc986a826fd585829be97ebc0aaf10e9d8e68be1bfe5a4a0364144b1f9eedfa940cf1
  languageName: node
  linkType: hard

"proxy-from-env@npm:1.0.0":
  version: 1.0.0
  resolution: "proxy-from-env@npm:1.0.0"
  checksum: 292e28d1de0c315958d71d8315eb546dd3cd8c8cbc2dab7c54eeb9f5c17f421771964ad0b5e1f77011bab2305bdae42e1757ce33bdb1ccc3e87732322a8efcf1
  languageName: node
  linkType: hard

"ps-tree@npm:1.2.0":
  version: 1.2.0
  resolution: "ps-tree@npm:1.2.0"
  dependencies:
    event-stream: =3.3.4
  bin:
    ps-tree: ./bin/ps-tree.js
  checksum: e635dd00f53d30d31696cf5f95b3a8dbdf9b1aeb36d4391578ce8e8cd22949b7c5536c73b0dc18c78615ea3ddd4be96101166be59ca2e3e3cb1e2f79ba3c7f98
  languageName: node
  linkType: hard

"psl@npm:^1.1.28, psl@npm:^1.1.33":
  version: 1.8.0
  resolution: "psl@npm:1.8.0"
  checksum: 6150048ed2da3f919478bee8a82f3828303bc0fc730fb015a48f83c9977682c7b28c60ab01425a72d82a2891a1681627aa530a991d50c086b48a3be27744bde7
  languageName: node
  linkType: hard

"pug-attrs@npm:^3.0.0":
  version: 3.0.0
  resolution: "pug-attrs@npm:3.0.0"
  dependencies:
    constantinople: ^4.0.1
    js-stringify: ^1.0.2
    pug-runtime: ^3.0.0
  checksum: 2ca2d34de3065239f01f0fc3c0e104c17f7a7105684d088bb71df623005a45f40a2301e65f49ec4581bb31794c74e691862643d4e34062d1509e92fa56a15aa5
  languageName: node
  linkType: hard

"pug-code-gen@npm:^3.0.2":
  version: 3.0.2
  resolution: "pug-code-gen@npm:3.0.2"
  dependencies:
    constantinople: ^4.0.1
    doctypes: ^1.1.0
    js-stringify: ^1.0.2
    pug-attrs: ^3.0.0
    pug-error: ^2.0.0
    pug-runtime: ^3.0.0
    void-elements: ^3.1.0
    with: ^7.0.0
  checksum: 1644d3a4d673392794248749eb146299704639a8197746454b7d03b240b83ee102f25b76d203381501e283be3927ab01eb3f4563ff51c45a478de1f3435a400d
  languageName: node
  linkType: hard

"pug-error@npm:^2.0.0":
  version: 2.0.0
  resolution: "pug-error@npm:2.0.0"
  checksum: c5372d018c897c1d6a141dd803c50957feecfda1f3d84a6adc6149801315d6c7f8c28b05f3e186d98d774fc9718699d1e1caa675630dd3c4453f8c5ec4e4a986
  languageName: node
  linkType: hard

"pug-filters@npm:^4.0.0":
  version: 4.0.0
  resolution: "pug-filters@npm:4.0.0"
  dependencies:
    constantinople: ^4.0.1
    jstransformer: 1.0.0
    pug-error: ^2.0.0
    pug-walk: ^2.0.0
    resolve: ^1.15.1
  checksum: 44eb3273195e3f42f034ad81109452236377780557eaf5a28db6e478f297675e19b8598cca9de65a0ba9c1d57e2ca2a93e332f0ab4be79dc5dd042375228cdff
  languageName: node
  linkType: hard

"pug-lexer@npm:^5.0.0, pug-lexer@npm:^5.0.1":
  version: 5.0.1
  resolution: "pug-lexer@npm:5.0.1"
  dependencies:
    character-parser: ^2.2.0
    is-expression: ^4.0.0
    pug-error: ^2.0.0
  checksum: afdd2f43f2c3ba96001a7b734c0c3bc745eb5d7dd68c787c2690c606d34573ca46ba807e4b4c7e70db9b4556fb938625dbb9c25b79cdb8857868e6deb2574d3e
  languageName: node
  linkType: hard

"pug-linker@npm:^4.0.0":
  version: 4.0.0
  resolution: "pug-linker@npm:4.0.0"
  dependencies:
    pug-error: ^2.0.0
    pug-walk: ^2.0.0
  checksum: 7433aa65181cd5b7bc631ab5f14baae7496fd8da98608cbd55bbea9bc72fe69a863e72026781a9fe76ab429d7037465b942145455420ee1178e2875ec87a1e12
  languageName: node
  linkType: hard

"pug-load@npm:^3.0.0":
  version: 3.0.0
  resolution: "pug-load@npm:3.0.0"
  dependencies:
    object-assign: ^4.1.1
    pug-walk: ^2.0.0
  checksum: 1800ec51994c92338401bcf79bbfa0d5ef9aa312bc415c2618263d6c04d1d7c5be5ac4a333c47a0eaa823f6231b4ade1a1c40f5784b99eb576d25853597bff2f
  languageName: node
  linkType: hard

"pug-parser@npm:^6.0.0":
  version: 6.0.0
  resolution: "pug-parser@npm:6.0.0"
  dependencies:
    pug-error: ^2.0.0
    token-stream: 1.0.0
  checksum: a6954d1383601233ec9d58e8fb22339f4809cf938272db16c551d8574566f388af3bf5560ec95ad5e23902bc358e6fa857409e840de4ed1ff5120a1dd6892cca
  languageName: node
  linkType: hard

"pug-runtime@npm:^3.0.0, pug-runtime@npm:^3.0.1":
  version: 3.0.1
  resolution: "pug-runtime@npm:3.0.1"
  checksum: 48a71b587caa08a5bccf9c1164206a34067edc1d13c2164bebad2dc562b529317578f889a0c41f0e16ddab3853c599696ff29a085f2d4554b783228f0002c41b
  languageName: node
  linkType: hard

"pug-strip-comments@npm:^2.0.0":
  version: 2.0.0
  resolution: "pug-strip-comments@npm:2.0.0"
  dependencies:
    pug-error: ^2.0.0
  checksum: 2cfcbf506c14bb3e64204a1d93f12ca61658d2540475b0f0911c35531ad28421e8d1e73a646d841d58cfa2c20f8593c52e492dfe5b6bec968e20b614e4dea1e4
  languageName: node
  linkType: hard

"pug-walk@npm:^2.0.0":
  version: 2.0.0
  resolution: "pug-walk@npm:2.0.0"
  checksum: bee64e133b711e1ed58022c0869b59e62f9f3ebb7084293857f074120b3cb588e7b8f74c4566426bf2b26dc1ec176ca6b64a2d1e53782f3fbbe039c5d4816638
  languageName: node
  linkType: hard

"pug@npm:^3.0.2":
  version: 3.0.2
  resolution: "pug@npm:3.0.2"
  dependencies:
    pug-code-gen: ^3.0.2
    pug-filters: ^4.0.0
    pug-lexer: ^5.0.1
    pug-linker: ^4.0.0
    pug-load: ^3.0.0
    pug-parser: ^6.0.0
    pug-runtime: ^3.0.1
    pug-strip-comments: ^2.0.0
  checksum: 3e1a3d48897c0c7dedd4f959ce8afaf6417a63756b149e1b5382bef16de5792ec7c7ae6a7d41641059cb149520f20b0d1ecf57014c0661526e96f0bad88541e5
  languageName: node
  linkType: hard

"pump@npm:^3.0.0":
  version: 3.0.0
  resolution: "pump@npm:3.0.0"
  dependencies:
    end-of-stream: ^1.1.0
    once: ^1.3.1
  checksum: e42e9229fba14732593a718b04cb5e1cfef8254544870997e0ecd9732b189a48e1256e4e5478148ecb47c8511dca2b09eae56b4d0aad8009e6fac8072923cfc9
  languageName: node
  linkType: hard

"punycode@npm:^2.1.0, punycode@npm:^2.1.1":
  version: 2.1.1
  resolution: "punycode@npm:2.1.1"
  checksum: 823bf443c6dd14f669984dea25757b37993f67e8d94698996064035edd43bed8a5a17a9f12e439c2b35df1078c6bec05a6c86e336209eb1061e8025c481168e8
  languageName: node
  linkType: hard

"qs@npm:~6.5.2":
  version: 6.5.3
  resolution: "qs@npm:6.5.3"
  checksum: 6f20bf08cabd90c458e50855559539a28d00b2f2e7dddcb66082b16a43188418cb3cb77cbd09268bcef6022935650f0534357b8af9eeb29bf0f27ccb17655692
  languageName: node
  linkType: hard

"queue-microtask@npm:^1.2.2":
  version: 1.2.3
  resolution: "queue-microtask@npm:1.2.3"
  checksum: b676f8c040cdc5b12723ad2f91414d267605b26419d5c821ff03befa817ddd10e238d22b25d604920340fd73efd8ba795465a0377c4adf45a4a41e4234e42dc4
  languageName: node
  linkType: hard

"quick-lru@npm:^5.1.1":
  version: 5.1.1
  resolution: "quick-lru@npm:5.1.1"
  checksum: a516faa25574be7947969883e6068dbe4aa19e8ef8e8e0fd96cddd6d36485e9106d85c0041a27153286b0770b381328f4072aa40d3b18a19f5f7d2b78b94b5ed
  languageName: node
  linkType: hard

"react-is@npm:^17.0.1":
  version: 17.0.2
  resolution: "react-is@npm:17.0.2"
  checksum: 9d6d111d8990dc98bc5402c1266a808b0459b5d54830bbea24c12d908b536df7883f268a7868cfaedde3dd9d4e0d574db456f84d2e6df9c4526f99bb4b5344d8
  languageName: node
  linkType: hard

"readable-stream@npm:^3.6.0":
  version: 3.6.0
  resolution: "readable-stream@npm:3.6.0"
  dependencies:
    inherits: ^2.0.3
    string_decoder: ^1.1.1
    util-deprecate: ^1.0.1
  checksum: d4ea81502d3799439bb955a3a5d1d808592cf3133350ed352aeaa499647858b27b1c4013984900238b0873ec8d0d8defce72469fb7a83e61d53f5ad61cb80dc8
  languageName: node
  linkType: hard

"readdirp@npm:~3.6.0":
  version: 3.6.0
  resolution: "readdirp@npm:3.6.0"
  dependencies:
    picomatch: ^2.2.1
  checksum: 1ced032e6e45670b6d7352d71d21ce7edf7b9b928494dcaba6f11fba63180d9da6cd7061ebc34175ffda6ff529f481818c962952004d273178acd70f7059b320
  languageName: node
  linkType: hard

"recrawl-sync@npm:^2.0.3":
  version: 2.2.2
  resolution: "recrawl-sync@npm:2.2.2"
  dependencies:
    "@cush/relative": ^1.0.0
    glob-regex: ^0.3.0
    slash: ^3.0.0
    tslib: ^1.9.3
  checksum: ee0a3fdbb6c4fa7124a93ef13b87f69f9a4e7bdd0be157ca98e1951ae8d1a7bbee2ebc25de6946b0b53426f804c712ff32f6c93b916b719e865c90233386a126
  languageName: node
  linkType: hard

"regexp.prototype.flags@npm:^1.3.0, regexp.prototype.flags@npm:^1.4.1":
  version: 1.4.3
  resolution: "regexp.prototype.flags@npm:1.4.3"
  dependencies:
    call-bind: ^1.0.2
    define-properties: ^1.1.3
    functions-have-names: ^1.2.2
  checksum: 51228bae732592adb3ededd5e15426be25f289e9c4ef15212f4da73f4ec3919b6140806374b8894036a86020d054a8d2657d3fee6bb9b4d35d8939c20030b7a6
  languageName: node
  linkType: hard

"regexpp@npm:^3.2.0":
  version: 3.2.0
  resolution: "regexpp@npm:3.2.0"
  checksum: a78dc5c7158ad9ddcfe01aa9144f46e192ddbfa7b263895a70a5c6c73edd9ce85faf7c0430e59ac38839e1734e275b9c3de5c57ee3ab6edc0e0b1bdebefccef8
  languageName: node
  linkType: hard

"request-progress@npm:^3.0.0":
  version: 3.0.0
  resolution: "request-progress@npm:3.0.0"
  dependencies:
    throttleit: ^1.0.0
  checksum: 6ea1761dcc8a8b7b5894afd478c0286aa31bd69438d7050294bd4fd0d0b3e09b5cde417d38deef9c49809039c337d8744e4bb49d8632b0c3e4ffa5e8a687e0fd
  languageName: node
  linkType: hard

"resolve-from@npm:^4.0.0":
  version: 4.0.0
  resolution: "resolve-from@npm:4.0.0"
  checksum: f4ba0b8494846a5066328ad33ef8ac173801a51739eb4d63408c847da9a2e1c1de1e6cbbf72699211f3d13f8fc1325648b169bd15eb7da35688e30a5fb0e4a7f
  languageName: node
  linkType: hard

"resolve@npm:^1.15.1, resolve@npm:^1.22.0":
  version: 1.22.0
  resolution: "resolve@npm:1.22.0"
  dependencies:
    is-core-module: ^2.8.1
    path-parse: ^1.0.7
    supports-preserve-symlinks-flag: ^1.0.0
  bin:
    resolve: bin/resolve
  checksum: a2d14cc437b3a23996f8c7367eee5c7cf8149c586b07ca2ae00e96581ce59455555a1190be9aa92154785cf9f2042646c200d0e00e0bbd2b8a995a93a0ed3e4e
  languageName: node
  linkType: hard

"resolve@patch:resolve@^1.15.1#~builtin<compat/resolve>, resolve@patch:resolve@^1.22.0#~builtin<compat/resolve>":
  version: 1.22.0
  resolution: "resolve@patch:resolve@npm%3A1.22.0#~builtin<compat/resolve>::version=1.22.0&hash=07638b"
  dependencies:
    is-core-module: ^2.8.1
    path-parse: ^1.0.7
    supports-preserve-symlinks-flag: ^1.0.0
  bin:
    resolve: bin/resolve
  checksum: c79ecaea36c872ee4a79e3db0d3d4160b593f2ca16e031d8283735acd01715a203607e9ded3f91f68899c2937fa0d49390cddbe0fb2852629212f3cda283f4a7
  languageName: node
  linkType: hard

"restore-cursor@npm:^3.1.0":
  version: 3.1.0
  resolution: "restore-cursor@npm:3.1.0"
  dependencies:
    onetime: ^5.1.0
    signal-exit: ^3.0.2
  checksum: f877dd8741796b909f2a82454ec111afb84eb45890eb49ac947d87991379406b3b83ff9673a46012fca0d7844bb989f45cc5b788254cf1a39b6b5a9659de0630
  languageName: node
  linkType: hard

"retry@npm:^0.12.0":
  version: 0.12.0
  resolution: "retry@npm:0.12.0"
  checksum: 623bd7d2e5119467ba66202d733ec3c2e2e26568074923bc0585b6b99db14f357e79bdedb63cab56cec47491c4a0da7e6021a7465ca6dc4f481d3898fdd3158c
  languageName: node
  linkType: hard

"reusify@npm:^1.0.4":
  version: 1.0.4
  resolution: "reusify@npm:1.0.4"
  checksum: c3076ebcc22a6bc252cb0b9c77561795256c22b757f40c0d8110b1300723f15ec0fc8685e8d4ea6d7666f36c79ccc793b1939c748bf36f18f542744a4e379fcc
  languageName: node
  linkType: hard

"rfdc@npm:^1.3.0":
  version: 1.3.0
  resolution: "rfdc@npm:1.3.0"
  checksum: fb2ba8512e43519983b4c61bd3fa77c0f410eff6bae68b08614437bc3f35f91362215f7b4a73cbda6f67330b5746ce07db5dd9850ad3edc91271ad6deea0df32
  languageName: node
  linkType: hard

"rimraf@npm:^3.0.0, rimraf@npm:^3.0.2":
  version: 3.0.2
  resolution: "rimraf@npm:3.0.2"
  dependencies:
    glob: ^7.1.3
  bin:
    rimraf: bin.js
  checksum: 87f4164e396f0171b0a3386cc1877a817f572148ee13a7e113b238e48e8a9f2f31d009a92ec38a591ff1567d9662c6b67fd8818a2dbbaed74bc26a87a2a4a9a0
  languageName: node
  linkType: hard

"rollup@npm:^2.59.0":
  version: 2.72.0
  resolution: "rollup@npm:2.72.0"
  dependencies:
    fsevents: ~2.3.2
  dependenciesMeta:
    fsevents:
      optional: true
  bin:
    rollup: dist/bin/rollup
  checksum: d4c213d4250a0455e0ee40664db3339a9e3ca5affa09c348019b4895e7100cdbedeba881a239a7a80c407b4055dca4e97d10a740d99c09b17651efbfedd61a4b
  languageName: node
  linkType: hard

"run-parallel@npm:^1.1.9":
  version: 1.2.0
  resolution: "run-parallel@npm:1.2.0"
  dependencies:
    queue-microtask: ^1.2.2
  checksum: cb4f97ad25a75ebc11a8ef4e33bb962f8af8516bb2001082ceabd8902e15b98f4b84b4f8a9b222e5d57fc3bd1379c483886ed4619367a7680dad65316993021d
  languageName: node
  linkType: hard

"rxjs@npm:^7.1.0, rxjs@npm:^7.5.1":
  version: 7.5.5
  resolution: "rxjs@npm:7.5.5"
  dependencies:
    tslib: ^2.1.0
  checksum: e034f60805210cce756dd2f49664a8108780b117cf5d0e2281506e9e6387f7b4f1532d974a8c8b09314fa7a16dd2f6cff3462072a5789672b5dcb45c4173f3c6
  languageName: node
  linkType: hard

"safe-buffer@npm:^5.0.1, safe-buffer@npm:^5.1.2, safe-buffer@npm:~5.2.0":
  version: 5.2.1
  resolution: "safe-buffer@npm:5.2.1"
  checksum: b99c4b41fdd67a6aaf280fcd05e9ffb0813654894223afb78a31f14a19ad220bba8aba1cb14eddce1fcfb037155fe6de4e861784eb434f7d11ed58d1e70dd491
  languageName: node
  linkType: hard

"safe-buffer@npm:~5.1.1":
  version: 5.1.2
  resolution: "safe-buffer@npm:5.1.2"
  checksum: f2f1f7943ca44a594893a852894055cf619c1fbcb611237fc39e461ae751187e7baf4dc391a72125e0ac4fb2d8c5c0b3c71529622e6a58f46b960211e704903c
  languageName: node
  linkType: hard

"safer-buffer@npm:>= 2.1.2 < 3.0.0, safer-buffer@npm:^2.0.2, safer-buffer@npm:^2.1.0, safer-buffer@npm:~2.1.0":
  version: 2.1.2
  resolution: "safer-buffer@npm:2.1.2"
  checksum: cab8f25ae6f1434abee8d80023d7e72b598cf1327164ddab31003c51215526801e40b66c5e65d658a0af1e9d6478cadcb4c745f4bd6751f97d8644786c0978b0
  languageName: node
  linkType: hard

"sass@npm:^1.51.0":
  version: 1.51.0
  resolution: "sass@npm:1.51.0"
  dependencies:
    chokidar: ">=3.0.0 <4.0.0"
    immutable: ^4.0.0
    source-map-js: ">=0.6.2 <2.0.0"
  bin:
    sass: sass.js
  checksum: d674fd87be863961d5e5233a148e381a72b06ca1749ffd95a08be2c3f4aa8fc77e3e21840347a84d7d4542cbf97cd6f9bfae19ecb1f5eefa6c207a3d8f923dbc
  languageName: node
  linkType: hard

"saxes@npm:^5.0.1":
  version: 5.0.1
  resolution: "saxes@npm:5.0.1"
  dependencies:
    xmlchars: ^2.2.0
  checksum: 5636b55cf15f7cf0baa73f2797bf992bdcf75d1b39d82c0aa4608555c774368f6ac321cb641fd5f3d3ceb87805122cd47540da6a7b5960fe0dbdb8f8c263f000
  languageName: node
  linkType: hard

"scule@npm:^0.2.1":
  version: 0.2.1
  resolution: "scule@npm:0.2.1"
  checksum: d9731b4c3560ce6983d23cc594395b718bc3c08ea3da930a9cd2bd3feb137ad3295521bcbc50baa82dc05d8521a7a41d6b78d2723e5195c053d93359f5808706
  languageName: node
  linkType: hard

"seemly@npm:^0.3.1, seemly@npm:^0.3.3":
  version: 0.3.3
  resolution: "seemly@npm:0.3.3"
  dependencies:
    "@types/jest": ^27.0.1
  checksum: b6445553f8e7b19310a5ea0240c80981aa669a6826e1ddbd62449cb1119236913607f6874759247bb6de8e22f3db966b5a498b5e8ac7682e42035951125fbea4
  languageName: node
  linkType: hard

"semver@npm:^6.3.0":
  version: 6.3.0
  resolution: "semver@npm:6.3.0"
  bin:
    semver: ./bin/semver.js
  checksum: 1b26ecf6db9e8292dd90df4e781d91875c0dcc1b1909e70f5d12959a23c7eebb8f01ea581c00783bbee72ceeaad9505797c381756326073850dc36ed284b21b9
  languageName: node
  linkType: hard

"semver@npm:^7.3.2, semver@npm:^7.3.5, semver@npm:^7.3.6, semver@npm:^7.3.7":
  version: 7.3.7
  resolution: "semver@npm:7.3.7"
  dependencies:
    lru-cache: ^6.0.0
  bin:
    semver: bin/semver.js
  checksum: 2fa3e877568cd6ce769c75c211beaed1f9fce80b28338cadd9d0b6c40f2e2862bafd62c19a6cff42f3d54292b7c623277bcab8816a2b5521cf15210d43e75232
  languageName: node
  linkType: hard

"set-blocking@npm:^2.0.0":
  version: 2.0.0
  resolution: "set-blocking@npm:2.0.0"
  checksum: 6e65a05f7cf7ebdf8b7c75b101e18c0b7e3dff4940d480efed8aad3a36a4005140b660fa1d804cb8bce911cac290441dc728084a30504d3516ac2ff7ad607b02
  languageName: node
  linkType: hard

"shebang-command@npm:^2.0.0":
  version: 2.0.0
  resolution: "shebang-command@npm:2.0.0"
  dependencies:
    shebang-regex: ^3.0.0
  checksum: 6b52fe87271c12968f6a054e60f6bde5f0f3d2db483a1e5c3e12d657c488a15474121a1d55cd958f6df026a54374ec38a4a963988c213b7570e1d51575cea7fa
  languageName: node
  linkType: hard

"shebang-regex@npm:^3.0.0":
  version: 3.0.0
  resolution: "shebang-regex@npm:3.0.0"
  checksum: 1a2bcae50de99034fcd92ad4212d8e01eedf52c7ec7830eedcf886622804fe36884278f2be8be0ea5fde3fd1c23911643a4e0f726c8685b61871c8908af01222
  languageName: node
  linkType: hard

"side-channel@npm:^1.0.3, side-channel@npm:^1.0.4":
  version: 1.0.4
  resolution: "side-channel@npm:1.0.4"
  dependencies:
    call-bind: ^1.0.0
    get-intrinsic: ^1.0.2
    object-inspect: ^1.9.0
  checksum: 351e41b947079c10bd0858364f32bb3a7379514c399edb64ab3dce683933483fc63fb5e4efe0a15a2e8a7e3c436b6a91736ddb8d8c6591b0460a24bb4a1ee245
  languageName: node
  linkType: hard

"signal-exit@npm:^3.0.2, signal-exit@npm:^3.0.3, signal-exit@npm:^3.0.7":
  version: 3.0.7
  resolution: "signal-exit@npm:3.0.7"
  checksum: a2f098f247adc367dffc27845853e9959b9e88b01cb301658cfe4194352d8d2bb32e18467c786a7fe15f1d44b233ea35633d076d5e737870b7139949d1ab6318
  languageName: node
  linkType: hard

"sirv@npm:^2.0.2":
  version: 2.0.2
  resolution: "sirv@npm:2.0.2"
  dependencies:
    "@polka/url": ^1.0.0-next.20
    mrmime: ^1.0.0
    totalist: ^3.0.0
  checksum: 6982f8ecee9392d246d7eeea8144e50334fe1b46a4fa942995a844ea88c2d518b17cce781bb09926c9a5692a7002a207d18dfd67af2aa538a15e733dc2042298
  languageName: node
  linkType: hard

"slash@npm:^3.0.0":
  version: 3.0.0
  resolution: "slash@npm:3.0.0"
  checksum: 94a93fff615f25a999ad4b83c9d5e257a7280c90a32a7cb8b4a87996e4babf322e469c42b7f649fd5796edd8687652f3fb452a86dc97a816f01113183393f11c
  languageName: node
  linkType: hard

"slice-ansi@npm:^3.0.0":
  version: 3.0.0
  resolution: "slice-ansi@npm:3.0.0"
  dependencies:
    ansi-styles: ^4.0.0
    astral-regex: ^2.0.0
    is-fullwidth-code-point: ^3.0.0
  checksum: 5ec6d022d12e016347e9e3e98a7eb2a592213a43a65f1b61b74d2c78288da0aded781f665807a9f3876b9daa9ad94f64f77d7633a0458876c3a4fdc4eb223f24
  languageName: node
  linkType: hard

"slice-ansi@npm:^4.0.0":
  version: 4.0.0
  resolution: "slice-ansi@npm:4.0.0"
  dependencies:
    ansi-styles: ^4.0.0
    astral-regex: ^2.0.0
    is-fullwidth-code-point: ^3.0.0
  checksum: 4a82d7f085b0e1b070e004941ada3c40d3818563ac44766cca4ceadd2080427d337554f9f99a13aaeb3b4a94d9964d9466c807b3d7b7541d1ec37ee32d308756
  languageName: node
  linkType: hard

"smart-buffer@npm:^4.2.0":
  version: 4.2.0
  resolution: "smart-buffer@npm:4.2.0"
  checksum: b5167a7142c1da704c0e3af85c402002b597081dd9575031a90b4f229ca5678e9a36e8a374f1814c8156a725d17008ae3bde63b92f9cfd132526379e580bec8b
  languageName: node
  linkType: hard

"socks-proxy-agent@npm:^6.1.1":
  version: 6.2.0
  resolution: "socks-proxy-agent@npm:6.2.0"
  dependencies:
    agent-base: ^6.0.2
    debug: ^4.3.3
    socks: ^2.6.2
  checksum: 6723fd64fb50334e2b340fd0a80fd8488ffc5bc43d85b7cf1d25612044f814dd7d6ea417fd47602159941236f7f4bd15669fa5d7e1f852598a31288e1a43967b
  languageName: node
  linkType: hard

"socks@npm:^2.6.2":
  version: 2.6.2
  resolution: "socks@npm:2.6.2"
  dependencies:
    ip: ^1.1.5
    smart-buffer: ^4.2.0
  checksum: dd9194293059d737759d5c69273850ad4149f448426249325c4bea0e340d1cf3d266c3b022694b0dcf5d31f759de23657244c481fc1e8322add80b7985c36b5e
  languageName: node
  linkType: hard

"source-map-js@npm:>=0.6.2 <2.0.0, source-map-js@npm:^1.0.2":
  version: 1.0.2
  resolution: "source-map-js@npm:1.0.2"
  checksum: c049a7fc4deb9a7e9b481ae3d424cc793cb4845daa690bc5a05d428bf41bf231ced49b4cf0c9e77f9d42fdb3d20d6187619fc586605f5eabe995a316da8d377c
  languageName: node
  linkType: hard

"source-map@npm:^0.5.0":
  version: 0.5.7
  resolution: "source-map@npm:0.5.7"
  checksum: 5dc2043b93d2f194142c7f38f74a24670cd7a0063acdaf4bf01d2964b402257ae843c2a8fa822ad5b71013b5fcafa55af7421383da919752f22ff488bc553f4d
  languageName: node
  linkType: hard

"source-map@npm:^0.6.1, source-map@npm:~0.6.1":
  version: 0.6.1
  resolution: "source-map@npm:0.6.1"
  checksum: 59ce8640cf3f3124f64ac289012c2b8bd377c238e316fb323ea22fbfe83da07d81e000071d7242cad7a23cd91c7de98e4df8830ec3f133cb6133a5f6e9f67bc2
  languageName: node
  linkType: hard

"sourcemap-codec@npm:^1.4.8":
  version: 1.4.8
  resolution: "sourcemap-codec@npm:1.4.8"
  checksum: b57981c05611afef31605732b598ccf65124a9fcb03b833532659ac4d29ac0f7bfacbc0d6c5a28a03e84c7510e7e556d758d0bb57786e214660016fb94279316
  languageName: node
  linkType: hard

"split@npm:0.3":
  version: 0.3.3
  resolution: "split@npm:0.3.3"
  dependencies:
    through: 2
  checksum: 2e076634c9637cfdc54ab4387b6a243b8c33b360874a25adf6f327a5647f07cb3bf1c755d515248eb3afee4e382278d01f62c62d87263c118f28065b86f74f02
  languageName: node
  linkType: hard

"sshpk@npm:^1.14.1":
  version: 1.17.0
  resolution: "sshpk@npm:1.17.0"
  dependencies:
    asn1: ~0.2.3
    assert-plus: ^1.0.0
    bcrypt-pbkdf: ^1.0.0
    dashdash: ^1.12.0
    ecc-jsbn: ~0.1.1
    getpass: ^0.1.1
    jsbn: ~0.1.0
    safer-buffer: ^2.0.2
    tweetnacl: ~0.14.0
  bin:
    sshpk-conv: bin/sshpk-conv
    sshpk-sign: bin/sshpk-sign
    sshpk-verify: bin/sshpk-verify
  checksum: ba109f65c8e6c35133b8e6ed5576abeff8aa8d614824b7275ec3ca308f081fef483607c28d97780c1e235818b0f93ed8c8b56d0a5968d5a23fd6af57718c7597
  languageName: node
  linkType: hard

"ssri@npm:^9.0.0":
  version: 9.0.0
  resolution: "ssri@npm:9.0.0"
  dependencies:
    minipass: ^3.1.1
  checksum: bf33174232d07cc64e77ab1c51b55d28352273380c503d35642a19627e88a2c5f160039bb0a28608a353485075dda084dbf0390c7070f9f284559eb71d01b84b
  languageName: node
  linkType: hard

"start-server-and-test@npm:^1.14.0":
  version: 1.14.0
  resolution: "start-server-and-test@npm:1.14.0"
  dependencies:
    bluebird: 3.7.2
    check-more-types: 2.24.0
    debug: 4.3.2
    execa: 5.1.1
    lazy-ass: 1.6.0
    ps-tree: 1.2.0
    wait-on: 6.0.0
  bin:
    server-test: src/bin/start.js
    start-server-and-test: src/bin/start.js
    start-test: src/bin/start.js
  checksum: 8437f5fc39bb47dd684b94023bab654703abc4890d08f005c3d86df620b2cdaac03f6e3bb21792a93209f1a70c8bb500d82fe4025a356da45fc060f2a80374e1
  languageName: node
  linkType: hard

"stream-combiner@npm:~0.0.4":
  version: 0.0.4
  resolution: "stream-combiner@npm:0.0.4"
  dependencies:
    duplexer: ~0.1.1
  checksum: 844b622cfe8b9de45a6007404f613b60aaf85200ab9862299066204242f89a7c8033b1c356c998aa6cfc630f6cd9eba119ec1c6dc1f93e245982be4a847aee7d
  languageName: node
  linkType: hard

"string-width@npm:^1.0.2 || 2 || 3 || 4, string-width@npm:^4.1.0, string-width@npm:^4.2.0, string-width@npm:^4.2.3":
  version: 4.2.3
  resolution: "string-width@npm:4.2.3"
  dependencies:
    emoji-regex: ^8.0.0
    is-fullwidth-code-point: ^3.0.0
    strip-ansi: ^6.0.1
  checksum: e52c10dc3fbfcd6c3a15f159f54a90024241d0f149cf8aed2982a2d801d2e64df0bf1dc351cf8e95c3319323f9f220c16e740b06faecd53e2462df1d2b5443fb
  languageName: node
  linkType: hard

"string.prototype.trimend@npm:^1.0.5":
  version: 1.0.5
  resolution: "string.prototype.trimend@npm:1.0.5"
  dependencies:
    call-bind: ^1.0.2
    define-properties: ^1.1.4
    es-abstract: ^1.19.5
  checksum: d44f543833112f57224e79182debadc9f4f3bf9d48a0414d6f0cbd2a86f2b3e8c0ca1f95c3f8e5b32ae83e91554d79d932fc746b411895f03f93d89ed3dfb6bc
  languageName: node
  linkType: hard

"string.prototype.trimstart@npm:^1.0.5":
  version: 1.0.5
  resolution: "string.prototype.trimstart@npm:1.0.5"
  dependencies:
    call-bind: ^1.0.2
    define-properties: ^1.1.4
    es-abstract: ^1.19.5
  checksum: a4857c5399ad709d159a77371eeaa8f9cc284469a0b5e1bfe405de16f1fd4166a8ea6f4180e55032f348d1b679b1599fd4301fbc7a8b72bdb3e795e43f7b1048
  languageName: node
  linkType: hard

"string_decoder@npm:^1.1.1":
  version: 1.3.0
  resolution: "string_decoder@npm:1.3.0"
  dependencies:
    safe-buffer: ~5.2.0
  checksum: 8417646695a66e73aefc4420eb3b84cc9ffd89572861fe004e6aeb13c7bc00e2f616247505d2dbbef24247c372f70268f594af7126f43548565c68c117bdeb56
  languageName: node
  linkType: hard

"strip-ansi@npm:^6.0.0, strip-ansi@npm:^6.0.1":
  version: 6.0.1
  resolution: "strip-ansi@npm:6.0.1"
  dependencies:
    ansi-regex: ^5.0.1
  checksum: f3cd25890aef3ba6e1a74e20896c21a46f482e93df4a06567cebf2b57edabb15133f1f94e57434e0a958d61186087b1008e89c94875d019910a213181a14fc8c
  languageName: node
  linkType: hard

"strip-bom@npm:^3.0.0":
  version: 3.0.0
  resolution: "strip-bom@npm:3.0.0"
  checksum: 8d50ff27b7ebe5ecc78f1fe1e00fcdff7af014e73cf724b46fb81ef889eeb1015fc5184b64e81a2efe002180f3ba431bdd77e300da5c6685d702780fbf0c8d5b
  languageName: node
  linkType: hard

"strip-final-newline@npm:^2.0.0":
  version: 2.0.0
  resolution: "strip-final-newline@npm:2.0.0"
  checksum: 69412b5e25731e1938184b5d489c32e340605bb611d6140344abc3421b7f3c6f9984b21dff296dfcf056681b82caa3bb4cc996a965ce37bcfad663e92eae9c64
  languageName: node
  linkType: hard

"strip-json-comments@npm:^3.1.0, strip-json-comments@npm:^3.1.1":
  version: 3.1.1
  resolution: "strip-json-comments@npm:3.1.1"
  checksum: 492f73e27268f9b1c122733f28ecb0e7e8d8a531a6662efbd08e22cccb3f9475e90a1b82cab06a392f6afae6d2de636f977e231296400d0ec5304ba70f166443
  languageName: node
  linkType: hard

"strip-literal@npm:^0.3.0":
  version: 0.3.0
  resolution: "strip-literal@npm:0.3.0"
  dependencies:
    acorn: ^8.7.1
  checksum: efa3b393275395051003c20471e3df99821e18f547eb92617fb41f3644c299d23658c7bbc7140ad11090ee0f05ba81f54deee5d690bb2dd1fb2f2556696bfb48
  languageName: node
  linkType: hard

"supports-color@npm:^5.3.0":
  version: 5.5.0
  resolution: "supports-color@npm:5.5.0"
  dependencies:
    has-flag: ^3.0.0
  checksum: 95f6f4ba5afdf92f495b5a912d4abee8dcba766ae719b975c56c084f5004845f6f5a5f7769f52d53f40e21952a6d87411bafe34af4a01e65f9926002e38e1dac
  languageName: node
  linkType: hard

"supports-color@npm:^7.1.0":
  version: 7.2.0
  resolution: "supports-color@npm:7.2.0"
  dependencies:
    has-flag: ^4.0.0
  checksum: 3dda818de06ebbe5b9653e07842d9479f3555ebc77e9a0280caf5a14fb877ffee9ed57007c3b78f5a6324b8dbeec648d9e97a24e2ed9fdb81ddc69ea07100f4a
  languageName: node
  linkType: hard

"supports-color@npm:^8.1.1":
  version: 8.1.1
  resolution: "supports-color@npm:8.1.1"
  dependencies:
    has-flag: ^4.0.0
  checksum: c052193a7e43c6cdc741eb7f378df605636e01ad434badf7324f17fb60c69a880d8d8fcdcb562cf94c2350e57b937d7425ab5b8326c67c2adc48f7c87c1db406
  languageName: node
  linkType: hard

"supports-preserve-symlinks-flag@npm:^1.0.0":
  version: 1.0.0
  resolution: "supports-preserve-symlinks-flag@npm:1.0.0"
  checksum: 53b1e247e68e05db7b3808b99b892bd36fb096e6fba213a06da7fab22045e97597db425c724f2bbd6c99a3c295e1e73f3e4de78592289f38431049e1277ca0ae
  languageName: node
  linkType: hard

"svg-path-parser@npm:^1.1.0":
  version: 1.1.0
  resolution: "svg-path-parser@npm:1.1.0"
  checksum: bab42996b17151ee7ec40d199fa980f58492b1d662297a017eea1f5f85a0e3bbb78cdc0620bbd37d4fff7146854ef0c9ddbba7143a2fe58e1bd1e6accf48c613
  languageName: node
  linkType: hard

"symbol-tree@npm:^3.2.4":
  version: 3.2.4
  resolution: "symbol-tree@npm:3.2.4"
  checksum: 6e8fc7e1486b8b54bea91199d9535bb72f10842e40c79e882fc94fb7b14b89866adf2fd79efa5ebb5b658bc07fb459ccce5ac0e99ef3d72f474e74aaf284029d
  languageName: node
  linkType: hard

"tailwindcss@npm:^3.0.24":
  version: 3.0.24
  resolution: "tailwindcss@npm:3.0.24"
  dependencies:
    arg: ^5.0.1
    chokidar: ^3.5.3
    color-name: ^1.1.4
    detective: ^5.2.0
    didyoumean: ^1.2.2
    dlv: ^1.1.3
    fast-glob: ^3.2.11
    glob-parent: ^6.0.2
    is-glob: ^4.0.3
    lilconfig: ^2.0.5
    normalize-path: ^3.0.0
    object-hash: ^3.0.0
    picocolors: ^1.0.0
    postcss: ^8.4.12
    postcss-js: ^4.0.0
    postcss-load-config: ^3.1.4
    postcss-nested: 5.0.6
    postcss-selector-parser: ^6.0.10
    postcss-value-parser: ^4.2.0
    quick-lru: ^5.1.1
    resolve: ^1.22.0
  peerDependencies:
    postcss: ^8.0.9
  bin:
    tailwind: lib/cli.js
    tailwindcss: lib/cli.js
  checksum: 52a21192b70ab90678d6cec24ca6f93b3a396599e2d842f6077b670be14e577b1e3fbae8776e64505d383118746287353ed99d2a047258254f4ce3879b996b58
  languageName: node
  linkType: hard

"tar@npm:^6.1.11, tar@npm:^6.1.2":
  version: 6.1.11
  resolution: "tar@npm:6.1.11"
  dependencies:
    chownr: ^2.0.0
    fs-minipass: ^2.0.0
    minipass: ^3.0.0
    minizlib: ^2.1.1
    mkdirp: ^1.0.3
    yallist: ^4.0.0
  checksum: a04c07bb9e2d8f46776517d4618f2406fb977a74d914ad98b264fc3db0fe8224da5bec11e5f8902c5b9bcb8ace22d95fbe3c7b36b8593b7dfc8391a25898f32f
  languageName: node
  linkType: hard

"text-table@npm:^0.2.0":
  version: 0.2.0
  resolution: "text-table@npm:0.2.0"
  checksum: b6937a38c80c7f84d9c11dd75e49d5c44f71d95e810a3250bd1f1797fc7117c57698204adf676b71497acc205d769d65c16ae8fa10afad832ae1322630aef10a
  languageName: node
  linkType: hard

"throttleit@npm:^1.0.0":
  version: 1.0.0
  resolution: "throttleit@npm:1.0.0"
  checksum: 1b2db4d2454202d589e8236c07a69d2fab838876d370030ebea237c34c0a7d1d9cf11c29f994531ebb00efd31e9728291042b7754f2798a8352ec4463455b659
  languageName: node
  linkType: hard

"through@npm:2, through@npm:^2.3.8, through@npm:~2.3, through@npm:~2.3.1":
  version: 2.3.8
  resolution: "through@npm:2.3.8"
  checksum: a38c3e059853c494af95d50c072b83f8b676a9ba2818dcc5b108ef252230735c54e0185437618596c790bbba8fcdaef5b290405981ffa09dce67b1f1bf190cbd
  languageName: node
  linkType: hard

"timonlukas.github.io@workspace:.":
  version: 0.0.0-use.local
  resolution: "timonlukas.github.io@workspace:."
  dependencies:
    "@iconify-json/feather": ^1.1.1
    "@iconify-json/vscode-icons": ^1.1.6
    "@prettier/plugin-pug": ^2.0.0
    "@rushstack/eslint-patch": ^1.1.0
    "@swan-io/boxed": ^0.9.0
    "@tailwindcss/forms": ^0.5.1
    "@tailwindcss/typography": ^0.5.2
    "@trivago/prettier-plugin-sort-imports": ^3.2.0
    "@types/chroma-js": ^2
    "@types/glob": ^7.2.0
    "@types/jsdom": ^16.2.14
    "@types/lodash": ^4
    "@types/marked": ^4
    "@types/node": ^16.11.26
    "@types/offscreencanvas": ^2019.7.0
    "@types/prettier": ^2.6.3
    "@types/prismjs": ^1
    "@types/svg-path-parser": ^1
    "@types/ungap__structured-clone": ^0.3.0
    "@types/uuid": ^8
    "@types/vue": ^2.0.0
    "@typescript-eslint/eslint-plugin": ^5.27.1
    "@typescript-eslint/parser": ^5.27.1
    "@ungap/structured-clone": ^1.0.1
    "@vitejs/plugin-vue": ^2.3.1
    "@vue/compiler-sfc": ^3.2.33
    "@vue/eslint-config-prettier": ^7.0.0
    "@vue/eslint-config-typescript": ^10.0.0
    "@vue/runtime-core": ^3.2.33
    "@vue/runtime-dom": ^3.2.33
    "@vue/test-utils": ^2.0.0-rc.18
    "@vue/tsconfig": ^0.1.3
    "@vueuse/core": ^8.4.2
    "@vueuse/router": ^8.5.0
    autoprefixer: ^10.4.7
    chroma-js: ^2.4.2
    comlink: ^4.3.1
    cypress: ^9.5.3
    dynamics.js: ^1.1.5
    eslint: ^8.5.0
    eslint-plugin-cypress: ^2.12.1
    eslint-plugin-vue: ^8.2.0
    glob: ^8.0.3
    iwanthue: ^2.0.0
    jsdom: ^19.0.0
    lodash: ^4.17.21
    marked: ^4.0.17
    mlly: ^0.5.3
    naive-ui: ^2.29.0
    pinia: ^2.0.13
    postcss: ^8.4.13
    prettier: ^2.5.1
    prismjs: ^1.28.0
    pug: ^3.0.2
    sass: ^1.51.0
    start-server-and-test: ^1.14.0
    svg-path-parser: ^1.1.0
    tailwindcss: ^3.0.24
    ts-deepmerge: ^2.0.1
    type-fest: ^2.13.0
    typescript: ~4.6.3
    unplugin-auto-import: ^0.8.7
    unplugin-icons: ^0.14.3
    unplugin-vue-components: ^0.19.6
    uuid: ^8.3.2
    vite: ^2.9.1
    vite-plugin-comlink: ^3.0.3
    vite-plugin-inspect: ^0.5.0
    vite-plugin-pages: ^0.23.0
    vite-plugin-static-copy: ^0.5.0
    vite-tsconfig-paths: ^3.4.1
    vitest: ^0.8.1
    vue: ^3.2.31
    vue-eslint-parser: ^9.0.2
    vue-router: ^4.0.14
    vue-tsc: ^0.33.9
  languageName: unknown
  linkType: soft

"tinypool@npm:^0.1.2":
  version: 0.1.3
  resolution: "tinypool@npm:0.1.3"
  checksum: 13ac687a23c03b02c2bf0b9711a3bb191d2c37941775a001b9617aac541c11ba144fb08de74f3f9723ec2649410f5d4fa7f0398fedd462b39fe3b30d19615ad8
  languageName: node
  linkType: hard

"tinyspy@npm:^0.3.0":
  version: 0.3.2
  resolution: "tinyspy@npm:0.3.2"
  checksum: 674d238c9b879a9d7acee3c30cfbc94334016d15a43b9db2f750aa74f107fa7096821d3866603576ea8efda9f2ec0683ffbd960f83de166f250ed583e68f25b3
  languageName: node
  linkType: hard

"tmp@npm:~0.2.1":
  version: 0.2.1
  resolution: "tmp@npm:0.2.1"
  dependencies:
    rimraf: ^3.0.0
  checksum: 8b1214654182575124498c87ca986ac53dc76ff36e8f0e0b67139a8d221eaecfdec108c0e6ec54d76f49f1f72ab9325500b246f562b926f85bcdfca8bf35df9e
  languageName: node
  linkType: hard

"to-fast-properties@npm:^2.0.0":
  version: 2.0.0
  resolution: "to-fast-properties@npm:2.0.0"
  checksum: be2de62fe58ead94e3e592680052683b1ec986c72d589e7b21e5697f8744cdbf48c266fa72f6c15932894c10187b5f54573a3bcf7da0bfd964d5caf23d436168
  languageName: node
  linkType: hard

"to-regex-range@npm:^5.0.1":
  version: 5.0.1
  resolution: "to-regex-range@npm:5.0.1"
  dependencies:
    is-number: ^7.0.0
  checksum: f76fa01b3d5be85db6a2a143e24df9f60dd047d151062d0ba3df62953f2f697b16fe5dad9b0ac6191c7efc7b1d9dcaa4b768174b7b29da89d4428e64bc0a20ed
  languageName: node
  linkType: hard

"token-stream@npm:1.0.0":
  version: 1.0.0
  resolution: "token-stream@npm:1.0.0"
  checksum: e8adb56f31b813b6157130e7fc2fe14eb60e7cbf7b746e70e8293c7e55664d8e7ad5d93d7ae3aa4cad7fcb2b0aaf59dad6f2fd4ee0269204e55af5b05bc369e2
  languageName: node
  linkType: hard

"totalist@npm:^3.0.0":
  version: 3.0.0
  resolution: "totalist@npm:3.0.0"
  checksum: ec499bddfc73d5b6c73f8ff68afd7bed286705797f928a11177fee5d1ee80e9052ffcb434638437702e16864bd5490f437a54f79bfea9564e875d34ed3254bca
  languageName: node
  linkType: hard

"tough-cookie@npm:^4.0.0":
  version: 4.0.0
  resolution: "tough-cookie@npm:4.0.0"
  dependencies:
    psl: ^1.1.33
    punycode: ^2.1.1
    universalify: ^0.1.2
  checksum: 0891b37eb7d17faa3479d47f0dce2e3007f2583094ad272f2670d120fbcc3df3b0b0a631ba96ecad49f9e2297d93ff8995ce0d3292d08dd7eabe162f5b224d69
  languageName: node
  linkType: hard

"tough-cookie@npm:~2.5.0":
  version: 2.5.0
  resolution: "tough-cookie@npm:2.5.0"
  dependencies:
    psl: ^1.1.28
    punycode: ^2.1.1
  checksum: 16a8cd090224dd176eee23837cbe7573ca0fa297d7e468ab5e1c02d49a4e9a97bb05fef11320605eac516f91d54c57838a25864e8680e27b069a5231d8264977
  languageName: node
  linkType: hard

"tr46@npm:^3.0.0":
  version: 3.0.0
  resolution: "tr46@npm:3.0.0"
  dependencies:
    punycode: ^2.1.1
  checksum: 44c3cc6767fb800490e6e9fd64fd49041aa4e49e1f6a012b34a75de739cc9ed3a6405296072c1df8b6389ae139c5e7c6496f659cfe13a04a4bff3a1422981270
  languageName: node
  linkType: hard

"treemate@npm:^0.3.11":
  version: 0.3.11
  resolution: "treemate@npm:0.3.11"
  checksum: 0c6ccbc6c5ce7faf27f5f48669c4734aa93ba4064a77f1324af02779aab6333986f6b32748aafe8de1ba99da8f8d9a027fe9c7c1d5389b4768edb5fc6a77fca2
  languageName: node
  linkType: hard

"ts-deepmerge@npm:^2.0.1":
  version: 2.0.1
  resolution: "ts-deepmerge@npm:2.0.1"
  checksum: 1d41981364192b521ce375740646ac2e00d7e3815c066624159309d3a2e43100449bc05c56d51938a1e5be444b0ca88ad9ce599fc489719805b9a2e9d4153194
  languageName: node
  linkType: hard

"tsconfig-paths@npm:^3.9.0":
  version: 3.14.1
  resolution: "tsconfig-paths@npm:3.14.1"
  dependencies:
    "@types/json5": ^0.0.29
    json5: ^1.0.1
    minimist: ^1.2.6
    strip-bom: ^3.0.0
  checksum: 8afa01c673ebb4782ba53d3a12df97fa837ce524f8ad38ee4e2b2fd57f5ac79abc21c574e9e9eb014d93efe7fe8214001b96233b5c6ea75bd1ea82afe17a4c6d
  languageName: node
  linkType: hard

"tslib@npm:^1.8.1, tslib@npm:^1.9.3":
  version: 1.14.1
  resolution: "tslib@npm:1.14.1"
  checksum: dbe628ef87f66691d5d2959b3e41b9ca0045c3ee3c7c7b906cc1e328b39f199bb1ad9e671c39025bd56122ac57dfbf7385a94843b1cc07c60a4db74795829acd
  languageName: node
  linkType: hard

"tslib@npm:^2.1.0":
  version: 2.4.0
  resolution: "tslib@npm:2.4.0"
  checksum: 8c4aa6a3c5a754bf76aefc38026134180c053b7bd2f81338cb5e5ebf96fefa0f417bff221592bf801077f5bf990562f6264fecbc42cd3309b33872cb6fc3b113
  languageName: node
  linkType: hard

"tsutils@npm:^3.21.0":
  version: 3.21.0
  resolution: "tsutils@npm:3.21.0"
  dependencies:
    tslib: ^1.8.1
  peerDependencies:
    typescript: ">=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta"
  checksum: 1843f4c1b2e0f975e08c4c21caa4af4f7f65a12ac1b81b3b8489366826259323feb3fc7a243123453d2d1a02314205a7634e048d4a8009921da19f99755cdc48
  languageName: node
  linkType: hard

"tunnel-agent@npm:^0.6.0":
  version: 0.6.0
  resolution: "tunnel-agent@npm:0.6.0"
  dependencies:
    safe-buffer: ^5.0.1
  checksum: 05f6510358f8afc62a057b8b692f05d70c1782b70db86d6a1e0d5e28a32389e52fa6e7707b6c5ecccacc031462e4bc35af85ecfe4bbc341767917b7cf6965711
  languageName: node
  linkType: hard

"tweetnacl@npm:^0.14.3, tweetnacl@npm:~0.14.0":
  version: 0.14.5
  resolution: "tweetnacl@npm:0.14.5"
  checksum: 6061daba1724f59473d99a7bb82e13f211cdf6e31315510ae9656fefd4779851cb927adad90f3b488c8ed77c106adc0421ea8055f6f976ff21b27c5c4e918487
  languageName: node
  linkType: hard

"type-check@npm:^0.4.0, type-check@npm:~0.4.0":
  version: 0.4.0
  resolution: "type-check@npm:0.4.0"
  dependencies:
    prelude-ls: ^1.2.1
  checksum: ec688ebfc9c45d0c30412e41ca9c0cdbd704580eb3a9ccf07b9b576094d7b86a012baebc95681999dd38f4f444afd28504cb3a89f2ef16b31d4ab61a0739025a
  languageName: node
  linkType: hard

"type-check@npm:~0.3.2":
  version: 0.3.2
  resolution: "type-check@npm:0.3.2"
  dependencies:
    prelude-ls: ~1.1.2
  checksum: dd3b1495642731bc0e1fc40abe5e977e0263005551ac83342ecb6f4f89551d106b368ec32ad3fb2da19b3bd7b2d1f64330da2ea9176d8ddbfe389fb286eb5124
  languageName: node
  linkType: hard

"type-detect@npm:^4.0.0, type-detect@npm:^4.0.5":
  version: 4.0.8
  resolution: "type-detect@npm:4.0.8"
  checksum: 62b5628bff67c0eb0b66afa371bd73e230399a8d2ad30d852716efcc4656a7516904570cd8631a49a3ce57c10225adf5d0cbdcb47f6b0255fe6557c453925a15
  languageName: node
  linkType: hard

"type-fest@npm:^0.20.2":
  version: 0.20.2
  resolution: "type-fest@npm:0.20.2"
  checksum: 4fb3272df21ad1c552486f8a2f8e115c09a521ad7a8db3d56d53718d0c907b62c6e9141ba5f584af3f6830d0872c521357e512381f24f7c44acae583ad517d73
  languageName: node
  linkType: hard

"type-fest@npm:^0.21.3":
  version: 0.21.3
  resolution: "type-fest@npm:0.21.3"
  checksum: e6b32a3b3877f04339bae01c193b273c62ba7bfc9e325b8703c4ee1b32dc8fe4ef5dfa54bf78265e069f7667d058e360ae0f37be5af9f153b22382cd55a9afe0
  languageName: node
  linkType: hard

"type-fest@npm:^2.13.0":
  version: 2.13.0
  resolution: "type-fest@npm:2.13.0"
  checksum: 3492384f759fdeaec7eaa07e79f70e777bf825cf8892690642fa9350818df4a8c50fd697fd1239ae7026064af4dd94e4d5eca27e781e0952ff302af0708a2e69
  languageName: node
  linkType: hard

"typescript@npm:~4.6.3":
  version: 4.6.4
  resolution: "typescript@npm:4.6.4"
  bin:
    tsc: bin/tsc
    tsserver: bin/tsserver
  checksum: e7bfcc39cd4571a63a54e5ea21f16b8445268b9900bf55aee0e02ad981be576acc140eba24f1af5e3c1457767c96cea6d12861768fb386cf3ffb34013718631a
  languageName: node
  linkType: hard

"typescript@patch:typescript@~4.6.3#~builtin<compat/typescript>":
  version: 4.6.4
  resolution: "typescript@patch:typescript@npm%3A4.6.4#~builtin<compat/typescript>::version=4.6.4&hash=bda367"
  bin:
    tsc: bin/tsc
    tsserver: bin/tsserver
  checksum: 1cb434fbc637d347be90e3a0c6cd05e33c38f941713c8786d3031faf1842c2c148ba91d2fac01e7276b0ae3249b8633f1660e32686cc7a8c6a8fd5361dc52c66
  languageName: node
  linkType: hard

"ufo@npm:^0.8.3":
  version: 0.8.4
  resolution: "ufo@npm:0.8.4"
  checksum: a2ebef6f64b9cc4114fc65405837eeb83eb8975edd6d54c7f37abb6905da6fd1f63524e4a02c8b087e7b0b3db6e6f4f798a3d86a96500410ff590b405f807dc9
  languageName: node
  linkType: hard

"unbox-primitive@npm:^1.0.2":
  version: 1.0.2
  resolution: "unbox-primitive@npm:1.0.2"
  dependencies:
    call-bind: ^1.0.2
    has-bigints: ^1.0.2
    has-symbols: ^1.0.3
    which-boxed-primitive: ^1.0.2
  checksum: b7a1cf5862b5e4b5deb091672ffa579aa274f648410009c81cca63fed3b62b610c4f3b773f912ce545bb4e31edc3138975b5bc777fc6e4817dca51affb6380e9
  languageName: node
  linkType: hard

"unimport@npm:^0.2.5":
  version: 0.2.6
  resolution: "unimport@npm:0.2.6"
  dependencies:
    "@rollup/pluginutils": ^4.2.1
    escape-string-regexp: ^5.0.0
    fast-glob: ^3.2.11
    local-pkg: ^0.4.1
    magic-string: ^0.26.2
    mlly: ^0.5.2
    pathe: ^0.3.0
    scule: ^0.2.1
    strip-literal: ^0.3.0
    unplugin: ^0.6.3
  checksum: 54589515e85f7f2e4c55875a4e09024c07a9e17627faca28bdf970a271bcaeaa6d2592532d37cf349113f8a97a1933e0fb5322dcf58406b0cfd715413c5156a6
  languageName: node
  linkType: hard

"unique-filename@npm:^1.1.1":
  version: 1.1.1
  resolution: "unique-filename@npm:1.1.1"
  dependencies:
    unique-slug: ^2.0.0
  checksum: cf4998c9228cc7647ba7814e255dec51be43673903897b1786eff2ac2d670f54d4d733357eb08dea969aa5e6875d0e1bd391d668fbdb5a179744e7c7551a6f80
  languageName: node
  linkType: hard

"unique-slug@npm:^2.0.0":
  version: 2.0.2
  resolution: "unique-slug@npm:2.0.2"
  dependencies:
    imurmurhash: ^0.1.4
  checksum: 5b6876a645da08d505dedb970d1571f6cebdf87044cb6b740c8dbb24f0d6e1dc8bdbf46825fd09f994d7cf50760e6f6e063cfa197d51c5902c00a861702eb75a
  languageName: node
  linkType: hard

"universalify@npm:^0.1.2":
  version: 0.1.2
  resolution: "universalify@npm:0.1.2"
  checksum: 40cdc60f6e61070fe658ca36016a8f4ec216b29bf04a55dce14e3710cc84c7448538ef4dad3728d0bfe29975ccd7bfb5f414c45e7b78883567fb31b246f02dff
  languageName: node
  linkType: hard

"universalify@npm:^2.0.0":
  version: 2.0.0
  resolution: "universalify@npm:2.0.0"
  checksum: 2406a4edf4a8830aa6813278bab1f953a8e40f2f63a37873ffa9a3bc8f9745d06cc8e88f3572cb899b7e509013f7f6fcc3e37e8a6d914167a5381d8440518c44
  languageName: node
  linkType: hard

"unplugin-auto-import@npm:^0.8.7":
  version: 0.8.7
  resolution: "unplugin-auto-import@npm:0.8.7"
  dependencies:
    "@antfu/utils": ^0.5.2
    "@rollup/pluginutils": ^4.2.1
    local-pkg: ^0.4.1
    magic-string: ^0.26.2
    unimport: ^0.2.5
    unplugin: ^0.6.3
  peerDependencies:
    "@vueuse/core": "*"
  peerDependenciesMeta:
    "@vueuse/core":
      optional: true
  checksum: 575a2344e39bdb4da3380c00e67678fd932852bdbe26865dac260e7180e3d35f7a4e666b710781d5233e183aedfad18ae6fbcc82966ecae62616051f63d337e3
  languageName: node
  linkType: hard

"unplugin-icons@npm:^0.14.3":
  version: 0.14.3
  resolution: "unplugin-icons@npm:0.14.3"
  dependencies:
    "@antfu/install-pkg": ^0.1.0
    "@antfu/utils": ^0.5.1
    "@iconify/utils": ^1.0.32
    debug: ^4.3.4
    kolorist: ^1.5.1
    local-pkg: ^0.4.1
    unplugin: ^0.6.2
  peerDependencies:
    "@svgr/core": ">=5.5.0"
    "@vue/compiler-sfc": ^3.0.2
    vue-template-compiler: ^2.6.12
    vue-template-es2015-compiler: ^1.9.0
  peerDependenciesMeta:
    "@svgr/core":
      optional: true
    "@vue/compiler-sfc":
      optional: true
    vue-template-compiler:
      optional: true
    vue-template-es2015-compiler:
      optional: true
  checksum: fca212fd52ee069af4f32c2164e9f6c742256910094d981324181ea3a743bbbde9974971a6895f23abf3578aeaa5f12d7f3bb18831d98a5ff1d2684877306c63
  languageName: node
  linkType: hard

"unplugin-vue-components@npm:^0.19.6":
  version: 0.19.6
  resolution: "unplugin-vue-components@npm:0.19.6"
  dependencies:
    "@antfu/utils": ^0.5.1
    "@rollup/pluginutils": ^4.2.1
    chokidar: ^3.5.3
    debug: ^4.3.4
    fast-glob: ^3.2.11
    local-pkg: ^0.4.1
    magic-string: ^0.26.1
    minimatch: ^5.0.1
    resolve: ^1.22.0
    unplugin: ^0.6.3
  peerDependencies:
    "@babel/parser": ^7.15.8
    "@babel/traverse": ^7.15.4
    vue: 2 || 3
  peerDependenciesMeta:
    "@babel/parser":
      optional: true
    "@babel/traverse":
      optional: true
  checksum: 05ad70451e85dfdd6777b41be2d58aadf5689a5f32321c187d8741f45084c6945617dc633f6356f61deff398f90ee8e722c2f12f063e18fc6a1a3dfd0071040d
  languageName: node
  linkType: hard

"unplugin@npm:^0.6.2":
  version: 0.6.2
  resolution: "unplugin@npm:0.6.2"
  dependencies:
    chokidar: ^3.5.3
    webpack-sources: ^3.2.3
    webpack-virtual-modules: ^0.4.3
  peerDependencies:
    esbuild: ">=0.13"
    rollup: ^2.50.0
    vite: ^2.3.0
    webpack: 4 || 5
  peerDependenciesMeta:
    esbuild:
      optional: true
    rollup:
      optional: true
    vite:
      optional: true
    webpack:
      optional: true
  checksum: 0ad0b290c00a528196f9af95cb31872d92221f1cd4a3b3ee7c72d6b1cf2130c1c342aca97ccee44e5c911b59cdf996c095c8188802d7ff7a002a98b84eafc4eb
  languageName: node
  linkType: hard

"unplugin@npm:^0.6.3":
  version: 0.6.3
  resolution: "unplugin@npm:0.6.3"
  dependencies:
    chokidar: ^3.5.3
    webpack-sources: ^3.2.3
    webpack-virtual-modules: ^0.4.3
  peerDependencies:
    esbuild: ">=0.13"
    rollup: ^2.50.0
    vite: ^2.3.0
    webpack: 4 || 5
  peerDependenciesMeta:
    esbuild:
      optional: true
    rollup:
      optional: true
    vite:
      optional: true
    webpack:
      optional: true
  checksum: 14e1f9c941e87e97fdda3efc745183e027de7d8b88eed8be5fa0708c2ec5dd114cc10e569c4b9dd2dafc89ba84d8bf90935d01e02cef510b7faedaa8af2b081f
  languageName: node
  linkType: hard

"untildify@npm:^4.0.0":
  version: 4.0.0
  resolution: "untildify@npm:4.0.0"
  checksum: 39ced9c418a74f73f0a56e1ba4634b4d959422dff61f4c72a8e39f60b99380c1b45ed776fbaa0a4101b157e4310d873ad7d114e8534ca02609b4916bb4187fb9
  languageName: node
  linkType: hard

"upath@npm:^2.0.1":
  version: 2.0.1
  resolution: "upath@npm:2.0.1"
  checksum: 2db04f24a03ef72204c7b969d6991abec9e2cb06fb4c13a1fd1c59bc33b46526b16c3325e55930a11ff86a77a8cbbcda8f6399bf914087028c5beae21ecdb33c
  languageName: node
  linkType: hard

"uri-js@npm:^4.2.2":
  version: 4.4.1
  resolution: "uri-js@npm:4.4.1"
  dependencies:
    punycode: ^2.1.0
  checksum: 7167432de6817fe8e9e0c9684f1d2de2bb688c94388f7569f7dbdb1587c9f4ca2a77962f134ec90be0cc4d004c939ff0d05acc9f34a0db39a3c797dada262633
  languageName: node
  linkType: hard

"util-deprecate@npm:^1.0.1, util-deprecate@npm:^1.0.2":
  version: 1.0.2
  resolution: "util-deprecate@npm:1.0.2"
  checksum: 474acf1146cb2701fe3b074892217553dfcf9a031280919ba1b8d651a068c9b15d863b7303cb15bd00a862b498e6cf4ad7b4a08fb134edd5a6f7641681cb54a2
  languageName: node
  linkType: hard

"uuid@npm:^8.3.2":
  version: 8.3.2
  resolution: "uuid@npm:8.3.2"
  bin:
    uuid: dist/bin/uuid
  checksum: 5575a8a75c13120e2f10e6ddc801b2c7ed7d8f3c8ac22c7ed0c7b2ba6383ec0abda88c905085d630e251719e0777045ae3236f04c812184b7c765f63a70e58df
  languageName: node
  linkType: hard

"v8-compile-cache@npm:^2.0.3":
  version: 2.3.0
  resolution: "v8-compile-cache@npm:2.3.0"
  checksum: adb0a271eaa2297f2f4c536acbfee872d0dd26ec2d76f66921aa7fc437319132773483344207bdbeee169225f4739016d8d2dbf0553913a52bb34da6d0334f8e
  languageName: node
  linkType: hard

"vdirs@npm:^0.1.4, vdirs@npm:^0.1.8":
  version: 0.1.8
  resolution: "vdirs@npm:0.1.8"
  dependencies:
    evtd: ^0.2.2
  peerDependencies:
    vue: ^3.0.11
  checksum: a7be8ccad3e72f2891150d53085b8f924cc9d9a9e474cd58827e81417e8feef7f5a8ecbb00efa7631592bf5b3be0a0fa40da41789fcf18dab2cec2bddd01ea47
  languageName: node
  linkType: hard

"verror@npm:1.10.0":
  version: 1.10.0
  resolution: "verror@npm:1.10.0"
  dependencies:
    assert-plus: ^1.0.0
    core-util-is: 1.0.2
    extsprintf: ^1.2.0
  checksum: c431df0bedf2088b227a4e051e0ff4ca54df2c114096b0c01e1cbaadb021c30a04d7dd5b41ab277bcd51246ca135bf931d4c4c796ecae7a4fef6d744ecef36ea
  languageName: node
  linkType: hard

"vite-plugin-comlink@npm:^3.0.3":
  version: 3.0.3
  resolution: "vite-plugin-comlink@npm:3.0.3"
  dependencies:
    json5: 2.2.1
    magic-string: 0.26.2
  peerDependencies:
    comlink: ^4.3.1
    vite: ">=2.9.6"
  checksum: 28a6a08f520247974067bf39f7610c78c034c1df7b474db1bc236bfca214130f496592d82ed7669e3ceb236bdd745d61e747d48654a57032a223be9a95e53803
  languageName: node
  linkType: hard

"vite-plugin-inspect@npm:^0.5.0":
  version: 0.5.0
  resolution: "vite-plugin-inspect@npm:0.5.0"
  dependencies:
    "@rollup/pluginutils": ^4.2.1
    debug: ^4.3.4
    kolorist: ^1.5.1
    sirv: ^2.0.2
    ufo: ^0.8.3
  peerDependencies:
    vite: ^2.9.0
  checksum: 41c0fccb9389e9aac07315b121252aa5037c6a98b2bcc4285cf69e9e973608c023ad180396df42f922b9f1f4e275cb60414e32f4d0f711d8199159df441a0056
  languageName: node
  linkType: hard

"vite-plugin-pages@npm:^0.23.0":
  version: 0.23.0
  resolution: "vite-plugin-pages@npm:0.23.0"
  dependencies:
    "@types/debug": ^4.1.7
    debug: ^4.3.4
    deep-equal: ^2.0.5
    fast-glob: ^3.2.11
    json5: ^2.2.1
    local-pkg: ^0.4.1
    picocolors: ^1.0.0
    yaml: ^2.0.1
  peerDependencies:
    "@vue/compiler-sfc": ^3.0.0
    vite: ^2.0.0
  peerDependenciesMeta:
    "@vue/compiler-sfc":
      optional: true
  checksum: a63b15194895bbdc020af4fcabc1505977a7746f15cc1d595fb4cb1b2140136446c37fee97661b39ffec6fb6b7127a24c39c57959c11ba55d97fa4e432a9769d
  languageName: node
  linkType: hard

"vite-plugin-static-copy@npm:^0.5.0":
  version: 0.5.0
  resolution: "vite-plugin-static-copy@npm:0.5.0"
  dependencies:
    chokidar: ^3.5.3
    fast-glob: ^3.2.11
    fs-extra: ^10.0.1
    picocolors: ^1.0.0
  peerDependencies:
    vite: ^2.6.14
  checksum: d496d82301bb829796bfa56389f7cd843e751747133675996131f303ec4a4fcf2876b8945145b24dcd88bb22d7e9fab5b8ad011b77300aca0ea1165b6528c7f8
  languageName: node
  linkType: hard

"vite-tsconfig-paths@npm:^3.4.1":
  version: 3.4.1
  resolution: "vite-tsconfig-paths@npm:3.4.1"
  dependencies:
    debug: ^4.1.1
    globrex: ^0.1.2
    recrawl-sync: ^2.0.3
    tsconfig-paths: ^3.9.0
  peerDependencies:
    vite: ">2.0.0-0"
  checksum: 76928e00adda8537f7371736d261cea8893c5fb959380704eccb5df08f2fbb2cb8f5b1f3911ef24f0ebc3864845c48bb887916b1ad1560e2e8af82679ac57752
  languageName: node
  linkType: hard

"vite@npm:^2.9.1":
  version: 2.9.8
  resolution: "vite@npm:2.9.8"
  dependencies:
    esbuild: ^0.14.27
    fsevents: ~2.3.2
    postcss: ^8.4.13
    resolve: ^1.22.0
    rollup: ^2.59.0
  peerDependencies:
    less: "*"
    sass: "*"
    stylus: "*"
  dependenciesMeta:
    fsevents:
      optional: true
  peerDependenciesMeta:
    less:
      optional: true
    sass:
      optional: true
    stylus:
      optional: true
  bin:
    vite: bin/vite.js
  checksum: 7de3450bec4caa06f4540d1d252563ef0b7e1bdd167d04abf03db72cfd8c9a93879e18861283bc7d075e1d094b78b71770ca36f9b965bdf28c66665eafdc29dc
  languageName: node
  linkType: hard

"vitest@npm:^0.8.1":
  version: 0.8.5
  resolution: "vitest@npm:0.8.5"
  dependencies:
    "@types/chai": ^4.3.0
    "@types/chai-subset": ^1.3.3
    chai: ^4.3.6
    local-pkg: ^0.4.1
    tinypool: ^0.1.2
    tinyspy: ^0.3.0
    vite: ^2.9.1
  peerDependencies:
    "@vitest/ui": "*"
    c8: "*"
    happy-dom: "*"
    jsdom: "*"
  peerDependenciesMeta:
    "@vitest/ui":
      optional: true
    c8:
      optional: true
    happy-dom:
      optional: true
    jsdom:
      optional: true
  bin:
    vitest: vitest.mjs
  checksum: 28d3d0fb66cb195fcbadd5a05dbc65c55d0e0aaefaf51b2eeabf1b6b6ae5b6b9c26f3d94c72ec2b89a22e2764c2e93c1fd8915da1ca748eb2a5ccedbc9f80da3
  languageName: node
  linkType: hard

"void-elements@npm:^3.1.0":
  version: 3.1.0
  resolution: "void-elements@npm:3.1.0"
  checksum: 0390f818107fa8fce55bb0a5c3f661056001c1d5a2a48c28d582d4d847347c2ab5b7f8272314cac58acf62345126b6b09bea623a185935f6b1c3bbce0dfd7f7f
  languageName: node
  linkType: hard

"vooks@npm:^0.2.12, vooks@npm:^0.2.4":
  version: 0.2.12
  resolution: "vooks@npm:0.2.12"
  dependencies:
    evtd: ^0.2.2
  peerDependencies:
    vue: ^3.0.0
  checksum: e6841ec5b6cb3938ce3ba0822a209fc4fd9cbb18af7e5034a979f3a80a6f6cfcdadc402bf8992ddffe09a5796c746731b7f6c3366c4a2e8309278f657ae8ea18
  languageName: node
  linkType: hard

"vscode-jsonrpc@npm:^8.0.0-next.5":
  version: 8.0.0-next.8
  resolution: "vscode-jsonrpc@npm:8.0.0-next.8"
  checksum: 162458b00971c2470e6b50fc232cc8d1e9a961b2097b33eb8d1be596bcb63e8da343a4c312ea1ce5f632b1e117418a2ac60930ec000b94b06b89f4b3b3d0f9b0
  languageName: node
  linkType: hard

"vscode-languageserver-textdocument@npm:^1.0.3":
  version: 1.0.4
  resolution: "vscode-languageserver-textdocument@npm:1.0.4"
  checksum: d0b63abb9d22c1177c26df15807b028129fb966f0dfd01c9ae1d114f1c2a1262d8588bea3e6f6f2e400ada3836da844553d8bc21c64122242a212502ccf5f702
  languageName: node
  linkType: hard

"vscode-languageserver-types@npm:^3.17.0-next.6":
  version: 3.17.0-next.12
  resolution: "vscode-languageserver-types@npm:3.17.0-next.12"
  checksum: 687f83239469dc3e8be48cacbfaf742c338e4f995e05b65ec43a77c9b9b5705a2f87412b23c7a85035a333fe01c20741abceb31c893d360eff5e54ba117cdbdb
  languageName: node
  linkType: hard

"vscode-uri@npm:^3.0.3":
  version: 3.0.3
  resolution: "vscode-uri@npm:3.0.3"
  checksum: 683bf9de835c3cef0b51c104a4949bf746148ded7c2287ebafcc506d20aa0e90b99385a972dba8132903420dba67fc33a5e146e30212c4a6b3ca5d74d1f95702
  languageName: node
  linkType: hard

"vue-demi@npm:*":
  version: 0.12.5
  resolution: "vue-demi@npm:0.12.5"
  peerDependencies:
    "@vue/composition-api": ^1.0.0-rc.1
    vue: ^3.0.0-0 || ^2.6.0
  peerDependenciesMeta:
    "@vue/composition-api":
      optional: true
  bin:
    vue-demi-fix: bin/vue-demi-fix.js
    vue-demi-switch: bin/vue-demi-switch.js
  checksum: 40a0470caea8312e0d4df2541f141c36c768dfc7f2f7d41f0f28ba29df11d3119e2f09b94c815f13b7c7f3f45dbc247b0e9e0c02a1800e2823e241c1d771e39b
  languageName: node
  linkType: hard

"vue-eslint-parser@npm:^8.0.0, vue-eslint-parser@npm:^8.0.1":
  version: 8.3.0
  resolution: "vue-eslint-parser@npm:8.3.0"
  dependencies:
    debug: ^4.3.2
    eslint-scope: ^7.0.0
    eslint-visitor-keys: ^3.1.0
    espree: ^9.0.0
    esquery: ^1.4.0
    lodash: ^4.17.21
    semver: ^7.3.5
  peerDependencies:
    eslint: ">=6.0.0"
  checksum: 8cc751e9fc2bfba93664ad8945732ab1c97791f9123e703de8669b65670d1e01906d80436bf4932d7ee6fa6174ed4545e8abb059206c88f4bd71957ca6cf7ba8
  languageName: node
  linkType: hard

"vue-eslint-parser@npm:^9.0.2":
  version: 9.0.2
  resolution: "vue-eslint-parser@npm:9.0.2"
  dependencies:
    debug: ^4.3.4
    eslint-scope: ^7.1.1
    eslint-visitor-keys: ^3.3.0
    espree: ^9.3.1
    esquery: ^1.4.0
    lodash: ^4.17.21
    semver: ^7.3.6
  peerDependencies:
    eslint: ">=6.0.0"
  checksum: 0160bb4dc742f3fea410223074d813969eae87825afe536a4b7de7a9d3ca35169cdee2d821494805e1c5dd337aae3178e1485d945a26432a69a281180887fb4d
  languageName: node
  linkType: hard

"vue-router@npm:^4.0.14":
  version: 4.0.15
  resolution: "vue-router@npm:4.0.15"
  dependencies:
    "@vue/devtools-api": ^6.0.0
  peerDependencies:
    vue: ^3.2.0
  checksum: 9fcfcd05db32b565059af8e70499e5f7c9f81d555aa9d95f2e8ef306fba941a288985037874e184e6212e8c49d509ad61d12e6c4bd94f3e4fbf578934293ec51
  languageName: node
  linkType: hard

"vue-tsc@npm:^0.33.9":
  version: 0.33.9
  resolution: "vue-tsc@npm:0.33.9"
  dependencies:
    "@volar/vue-typescript": 0.33.9
  peerDependencies:
    typescript: "*"
  bin:
    vue-tsc: bin/vue-tsc.js
  checksum: b9e9704dbd42146015bb593ca4dd9cecfeb333b6638fa5ef9b600692deaf525d0e8f60f4872731554bca19c439668049a5bddadfdedc7575928a54b17704b61f
  languageName: node
  linkType: hard

"vue@npm:*, vue@npm:^3.2.31":
  version: 3.2.33
  resolution: "vue@npm:3.2.33"
  dependencies:
    "@vue/compiler-dom": 3.2.33
    "@vue/compiler-sfc": 3.2.33
    "@vue/runtime-dom": 3.2.33
    "@vue/server-renderer": 3.2.33
    "@vue/shared": 3.2.33
  checksum: 878a63cc19dc6b2e255929cee3a47ea416668446d44d7c7f61ba785836a112a3814fd014e9472f92183ed05c8113946c4c83c831f2ec142d0c975a84976a2de9
  languageName: node
  linkType: hard

"vueuc@npm:^0.4.33":
  version: 0.4.37
  resolution: "vueuc@npm:0.4.37"
  dependencies:
    "@css-render/vue3-ssr": ^0.15.10
    "@juggle/resize-observer": ^3.3.1
    css-render: ^0.15.10
    evtd: ^0.2.2
    seemly: ^0.3.1
    vdirs: ^0.1.4
    vooks: ^0.2.4
  peerDependencies:
    vue: ^3.0.11
  checksum: cb0859fca93aa8f814b5bbf785931bf9cc59d16eb4f7d8f7350c0bf7378cf1cdc9dcbe2b737344573c3035d29c58043ba4d8686d2ab807518dd9f0e9a65e5979
  languageName: node
  linkType: hard

"w3c-hr-time@npm:^1.0.2":
  version: 1.0.2
  resolution: "w3c-hr-time@npm:1.0.2"
  dependencies:
    browser-process-hrtime: ^1.0.0
  checksum: ec3c2dacbf8050d917bbf89537a101a08c2e333b4c19155f7d3bedde43529d4339db6b3d049d9610789cb915f9515f8be037e0c54c079e9d4735c50b37ed52b9
  languageName: node
  linkType: hard

"w3c-xmlserializer@npm:^3.0.0":
  version: 3.0.0
  resolution: "w3c-xmlserializer@npm:3.0.0"
  dependencies:
    xml-name-validator: ^4.0.0
  checksum: 0af8589942eeb11c9fe29eb31a1a09f3d5dd136aea53a9848dfbabff79ac0dd26fe13eb54d330d5555fe27bb50b28dca0715e09f9cc2bfa7670ccc8b7f919ca2
  languageName: node
  linkType: hard

"wait-on@npm:6.0.0":
  version: 6.0.0
  resolution: "wait-on@npm:6.0.0"
  dependencies:
    axios: ^0.21.1
    joi: ^17.4.0
    lodash: ^4.17.21
    minimist: ^1.2.5
    rxjs: ^7.1.0
  bin:
    wait-on: bin/wait-on
  checksum: 6ae7bd2a933715c3b2f1c49f033d97c576b2c6a0257420d4c83964d2846c3967bfce33bc9af9a1a631ef38dfa6185be03cef57d2867c8c30c523278f964ac9e3
  languageName: node
  linkType: hard

"webidl-conversions@npm:^7.0.0":
  version: 7.0.0
  resolution: "webidl-conversions@npm:7.0.0"
  checksum: f05588567a2a76428515333eff87200fae6c83c3948a7482ebb109562971e77ef6dc49749afa58abb993391227c5697b3ecca52018793e0cb4620a48f10bd21b
  languageName: node
  linkType: hard

"webpack-sources@npm:^3.2.3":
  version: 3.2.3
  resolution: "webpack-sources@npm:3.2.3"
  checksum: 989e401b9fe3536529e2a99dac8c1bdc50e3a0a2c8669cbafad31271eadd994bc9405f88a3039cd2e29db5e6d9d0926ceb7a1a4e7409ece021fe79c37d9c4607
  languageName: node
  linkType: hard

"webpack-virtual-modules@npm:^0.4.3":
  version: 0.4.3
  resolution: "webpack-virtual-modules@npm:0.4.3"
  checksum: 158d30633e0d9be3cfcde10fe959b28df5d5adb1068e0f057fcfb10b0b16ede6c892eba438f6ced089c7c442087748c2fcd1e3f035e4e2dc6760517a8c227714
  languageName: node
  linkType: hard

"whatwg-encoding@npm:^2.0.0":
  version: 2.0.0
  resolution: "whatwg-encoding@npm:2.0.0"
  dependencies:
    iconv-lite: 0.6.3
  checksum: 7087810c410aa9b689cbd6af8773341a53cdc1f3aae2a882c163bd5522ec8ca4cdfc269aef417a5792f411807d5d77d50df4c24e3abb00bb60192858a40cc675
  languageName: node
  linkType: hard

"whatwg-mimetype@npm:^3.0.0":
  version: 3.0.0
  resolution: "whatwg-mimetype@npm:3.0.0"
  checksum: ce08bbb36b6aaf64f3a84da89707e3e6a31e5ab1c1a2379fd68df79ba712a4ab090904f0b50e6693b0dafc8e6343a6157e40bf18fdffd26e513cf95ee2a59824
  languageName: node
  linkType: hard

"whatwg-url@npm:^10.0.0":
  version: 10.0.0
  resolution: "whatwg-url@npm:10.0.0"
  dependencies:
    tr46: ^3.0.0
    webidl-conversions: ^7.0.0
  checksum: a21ec309c5cc743fe9414509408bedf65eaf0fb5c17ac66baa08ef12fce16da4dd30ce90abefbd5a716408301c58a73666dabfd5042cf4242992eb98b954f861
  languageName: node
  linkType: hard

"whatwg-url@npm:^11.0.0":
  version: 11.0.0
  resolution: "whatwg-url@npm:11.0.0"
  dependencies:
    tr46: ^3.0.0
    webidl-conversions: ^7.0.0
  checksum: ed4826aaa57e66bb3488a4b25c9cd476c46ba96052747388b5801f137dd740b73fde91ad207d96baf9f17fbcc80fc1a477ad65181b5eb5fa718d27c69501d7af
  languageName: node
  linkType: hard

"which-boxed-primitive@npm:^1.0.1, which-boxed-primitive@npm:^1.0.2":
  version: 1.0.2
  resolution: "which-boxed-primitive@npm:1.0.2"
  dependencies:
    is-bigint: ^1.0.1
    is-boolean-object: ^1.1.0
    is-number-object: ^1.0.4
    is-string: ^1.0.5
    is-symbol: ^1.0.3
  checksum: 53ce774c7379071729533922adcca47220228405e1895f26673bbd71bdf7fb09bee38c1d6399395927c6289476b5ae0629863427fd151491b71c4b6cb04f3a5e
  languageName: node
  linkType: hard

"which-collection@npm:^1.0.1":
  version: 1.0.1
  resolution: "which-collection@npm:1.0.1"
  dependencies:
    is-map: ^2.0.1
    is-set: ^2.0.1
    is-weakmap: ^2.0.1
    is-weakset: ^2.0.1
  checksum: c815bbd163107ef9cb84f135e6f34453eaf4cca994e7ba85ddb0d27cea724c623fae2a473ceccfd5549c53cc65a5d82692de418166df3f858e1e5dc60818581c
  languageName: node
  linkType: hard

"which-typed-array@npm:^1.1.2":
  version: 1.1.7
  resolution: "which-typed-array@npm:1.1.7"
  dependencies:
    available-typed-arrays: ^1.0.5
    call-bind: ^1.0.2
    es-abstract: ^1.18.5
    foreach: ^2.0.5
    has-tostringtag: ^1.0.0
    is-typed-array: ^1.1.7
  checksum: 147837cf5866e36b6b2e427731709e02f79f1578477cbde68ed773a5307520a6cb6836c73c79c30690a473266ee59010b83b6d9b25d8d677a40ff77fb37a8a84
  languageName: node
  linkType: hard

"which@npm:^2.0.1, which@npm:^2.0.2":
  version: 2.0.2
  resolution: "which@npm:2.0.2"
  dependencies:
    isexe: ^2.0.0
  bin:
    node-which: ./bin/node-which
  checksum: 1a5c563d3c1b52d5f893c8b61afe11abc3bab4afac492e8da5bde69d550de701cf9806235f20a47b5c8fa8a1d6a9135841de2596535e998027a54589000e66d1
  languageName: node
  linkType: hard

"wide-align@npm:^1.1.5":
  version: 1.1.5
  resolution: "wide-align@npm:1.1.5"
  dependencies:
    string-width: ^1.0.2 || 2 || 3 || 4
  checksum: d5fc37cd561f9daee3c80e03b92ed3e84d80dde3365a8767263d03dacfc8fa06b065ffe1df00d8c2a09f731482fcacae745abfbb478d4af36d0a891fad4834d3
  languageName: node
  linkType: hard

"with@npm:^7.0.0":
  version: 7.0.2
  resolution: "with@npm:7.0.2"
  dependencies:
    "@babel/parser": ^7.9.6
    "@babel/types": ^7.9.6
    assert-never: ^1.2.1
    babel-walk: 3.0.0-canary-5
  checksum: a00fe87b736e434bd8b9d3e62ddcd664bde7d3990a011a0f1bdeb499db0d6c28e6d2ef921dcc47650b8d436eee55459bcae8fab4ce1ed89f4926ddda407ab755
  languageName: node
  linkType: hard

"word-wrap@npm:^1.2.3, word-wrap@npm:~1.2.3":
  version: 1.2.3
  resolution: "word-wrap@npm:1.2.3"
  checksum: 30b48f91fcf12106ed3186ae4fa86a6a1842416df425be7b60485de14bec665a54a68e4b5156647dec3a70f25e84d270ca8bc8cd23182ed095f5c7206a938c1f
  languageName: node
  linkType: hard

"wrap-ansi@npm:^6.2.0":
  version: 6.2.0
  resolution: "wrap-ansi@npm:6.2.0"
  dependencies:
    ansi-styles: ^4.0.0
    string-width: ^4.1.0
    strip-ansi: ^6.0.0
  checksum: 6cd96a410161ff617b63581a08376f0cb9162375adeb7956e10c8cd397821f7eb2a6de24eb22a0b28401300bf228c86e50617cd568209b5f6775b93c97d2fe3a
  languageName: node
  linkType: hard

"wrap-ansi@npm:^7.0.0":
  version: 7.0.0
  resolution: "wrap-ansi@npm:7.0.0"
  dependencies:
    ansi-styles: ^4.0.0
    string-width: ^4.1.0
    strip-ansi: ^6.0.0
  checksum: a790b846fd4505de962ba728a21aaeda189b8ee1c7568ca5e817d85930e06ef8d1689d49dbf0e881e8ef84436af3a88bc49115c2e2788d841ff1b8b5b51a608b
  languageName: node
  linkType: hard

"wrappy@npm:1":
  version: 1.0.2
  resolution: "wrappy@npm:1.0.2"
  checksum: 159da4805f7e84a3d003d8841557196034155008f817172d4e986bd591f74aa82aa7db55929a54222309e01079a65a92a9e6414da5a6aa4b01ee44a511ac3ee5
  languageName: node
  linkType: hard

"ws@npm:^8.2.3":
  version: 8.6.0
  resolution: "ws@npm:8.6.0"
  peerDependencies:
    bufferutil: ^4.0.1
    utf-8-validate: ^5.0.2
  peerDependenciesMeta:
    bufferutil:
      optional: true
    utf-8-validate:
      optional: true
  checksum: e2fca82059f1e087d0c78e2f37135e1b8332bc804fce46f83c2db1cb8571685abf9d2c99b964bab3752536ad90b99b46fb8d1428899aed3e560684ab4641bffd
  languageName: node
  linkType: hard

"xml-name-validator@npm:^4.0.0":
  version: 4.0.0
  resolution: "xml-name-validator@npm:4.0.0"
  checksum: af100b79c29804f05fa35aa3683e29a321db9b9685d5e5febda3fa1e40f13f85abc40f45a6b2bf7bee33f68a1dc5e8eaef4cec100a304a9db565e6061d4cb5ad
  languageName: node
  linkType: hard

"xmlchars@npm:^2.2.0":
  version: 2.2.0
  resolution: "xmlchars@npm:2.2.0"
  checksum: 8c70ac94070ccca03f47a81fcce3b271bd1f37a591bf5424e787ae313fcb9c212f5f6786e1fa82076a2c632c0141552babcd85698c437506dfa6ae2d58723062
  languageName: node
  linkType: hard

"xtend@npm:^4.0.2":
  version: 4.0.2
  resolution: "xtend@npm:4.0.2"
  checksum: ac5dfa738b21f6e7f0dd6e65e1b3155036d68104e67e5d5d1bde74892e327d7e5636a076f625599dc394330a731861e87343ff184b0047fef1360a7ec0a5a36a
  languageName: node
  linkType: hard

"yallist@npm:^4.0.0":
  version: 4.0.0
  resolution: "yallist@npm:4.0.0"
  checksum: 343617202af32df2a15a3be36a5a8c0c8545208f3d3dfbc6bb7c3e3b7e8c6f8e7485432e4f3b88da3031a6e20afa7c711eded32ddfb122896ac5d914e75848d5
  languageName: node
  linkType: hard

"yaml@npm:^1.10.2":
  version: 1.10.2
  resolution: "yaml@npm:1.10.2"
  checksum: ce4ada136e8a78a0b08dc10b4b900936912d15de59905b2bf415b4d33c63df1d555d23acb2a41b23cf9fb5da41c256441afca3d6509de7247daa062fd2c5ea5f
  languageName: node
  linkType: hard

"yaml@npm:^2.0.1":
  version: 2.0.1
  resolution: "yaml@npm:2.0.1"
  checksum: 23f95ff0d646c894048ac5072b5b6d393a398af1b2553916f0de276d62dbb3279ae3c969d7fcefe7a213be4efc9b4aa3ae1439c97095d3d3765fc6bc424807ac
  languageName: node
  linkType: hard

"yauzl@npm:^2.10.0":
  version: 2.10.0
  resolution: "yauzl@npm:2.10.0"
  dependencies:
    buffer-crc32: ~0.2.3
    fd-slicer: ~1.1.0
  checksum: 7f21fe0bbad6e2cb130044a5d1d0d5a0e5bf3d8d4f8c4e6ee12163ce798fee3de7388d22a7a0907f563ac5f9d40f8699a223d3d5c1718da90b0156da6904022b
  languageName: node
  linkType: hard

"yocto-queue@npm:^0.1.0":
  version: 0.1.0
  resolution: "yocto-queue@npm:0.1.0"
  checksum: f77b3d8d00310def622123df93d4ee654fc6a0096182af8bd60679ddcdfb3474c56c6c7190817c84a2785648cdee9d721c0154eb45698c62176c322fb46fc700
  languageName: node
  linkType: hard
`,"/cypress/tsconfig.json":`{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["./integration/**/*", "./support/**/*"],
  "compilerOptions": {
    "isolatedModules": false,
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress"]
  }
}
`,"/cypress/fixtures/example.json":`{
  "name": "Using fixtures to represent data",
  "email": "hello@cypress.io",
  "body": "Fixtures are a great way to mock data for responses to routes"
}
`,"/cypress/integration/example.spec.ts":`// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/")
    cy.contains("h1", "You did it!")
  })
})
`,"/cypress/plugins/index.ts":`/* eslint-env node */
// ***********************************************************
// This example plugins/index.ts can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

export default ((on, config) => {
  // \`on\` is used to hook into various events Cypress emits
  // \`config\` is the resolved Cypress config
  return config
}) as Cypress.PluginConfig
`,"/cypress/plugins/tsconfig.json":`{
  "extends": "@vue/tsconfig/tsconfig.node.json",
  "include": ["./**/*"],
  "compilerOptions": {
    "module": "CommonJS",
    "preserveValueImports": false,
    "types": ["node", "cypress/types/cypress"]
  }
}
`,"/cypress/support/commands.ts":`// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
`,"/cypress/support/index.ts":`// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:
import "./commands"

// Alternatively you can use CommonJS syntax:
// require('./commands')
`,"/packages/about/project.ts":`import { NIcon } from "naive-ui"
import { getFileIcon } from "./icons/file"
import { getFolderIcon } from "./icons/folder"

const importGlob = import.meta.glob("/(*|!(dist|.git|.idea|.yarn)/**)", {
  as: "raw",
})
const allProjectFiles = [...Object.keys(importGlob)]

function fetchProjectFiles(): string[] {
  return allProjectFiles
}

export function fetchFileModule(file: string): Promise<any> | null {
  return file in importGlob ? importGlob[file]() : null
}

const sourceWorker = new ComlinkWorker<typeof import("./source.worker")>(
  new URL("./source.worker.ts", import.meta.url)
)
export async function fetchFileSource(file: string): Promise<any> {
  return sourceWorker.fetchSource(file)
}

export function createRenderer(
  kind: "file" | "folder",
  key: string
): () => ReturnType<typeof h> {
  const icon = kind === "file" ? getFileIcon(key) : getFolderIcon(key)
  return () => h(NIcon, { size: "1.25rem" }, { default: () => h(icon) })
}

type TreeFile = {
  key: string
  label: string
  prefix: () => ReturnType<typeof h>
}
type TreeFolder = TreeFile & {
  children: (TreeFile | TreeFolder)[]
}
export type TreeNode = TreeFile | TreeFolder
export type Tree = TreeNode[]

export function fetchProjectTree(): Tree {
  const allFiles = fetchProjectFiles()

  const tree = allFiles.reduce(
    (acc, val) => {
      const parts = val.split("/").slice(1)
      const ancestorParts = parts.slice(0, -1)

      const parent = ancestorParts.reduce((container, name, index) => {
        const key = \`/\${ancestorParts.slice(0, index + 1).join("/")}\`
        const entry = container.find((value) => value.key === key)

        if (typeof entry === "undefined" || !("children" in entry)) {
          const newEntry = {
            key,
            label: \`\${name}/\`,
            children: [],
            prefix: createRenderer("folder", key),
          }
          container.push(newEntry)
          return newEntry.children
        }

        return entry.children
      }, acc)

      const label = parts.at(-1) ?? val
      parent.push({
        key: val,
        label,
        prefix: createRenderer("file", val),
      })

      return acc
    },
    [
      {
        key: "/.yarn",
        label: ".yarn",
        children: [],
        prefix: createRenderer("folder", "/.yarn"),
      },
    ] as Tree
  )
  sortTree(tree)

  return tree
}

function sortTree(tree: Tree): void {
  tree.sort((a, b) => {
    if (isFile(a) && isFolder(b)) {
      return 1
    }

    if (isFolder(a) && isFile(b)) {
      return -1
    }

    return a.label.localeCompare(b.label)
  })

  tree.forEach((node) => {
    if (!isFolder(node)) {
      return
    }

    sortTree(node.children)
  })
}

function flattenTree(tree: Tree): TreeNode[] {
  return tree.flatMap((node) =>
    isFolder(node) ? [...flattenTree(node.children), node] : node
  )
}

export function findSubtreeByKey(key: string, tree: Tree): Tree {
  const parts = key.split("/").slice(1)
  return parts.reduce((acc, val, index) => {
    const currentKey = "/" + parts.slice(0, index + 1).join("/")
    const entry = acc.find((value) => value.key === currentKey)

    if (typeof entry === "undefined" || !("children" in entry)) {
      return acc
    }

    return entry.children
  }, tree)
}

export function isFolder(node: TreeNode): node is TreeFolder {
  return "children" in node
}

export function isFile(node: TreeNode): node is TreeFile {
  return !isFolder(node)
}
`,"/packages/about/source.worker.ts":`const allProjectFiles = import.meta.globEager<string>(
  "/(*|!(dist|.git|.idea|.yarn)/**)",
  {
    as: "raw",
  }
)

export async function fetchSource(filename: string): Promise<string | null> {
  return allProjectFiles[filename] ?? null
}
`,"/packages/fairytome/entries.ts":`import { markRaw, reactive, resolveDynamicComponent } from "vue"
import type { Entry } from "@/fairytome/entry"

const entryFiles = Object.assign(
  {},
  import.meta.glob("/packages/**/*.entry.ts"),
  import.meta.glob("/packages/**/*.entry.vue")
)

type Entries = { entries: Entry[]; entriesByName: Map<string, Entry> }

export function pathToEntryMeta(
  path: string
): Pick<Entry, "name" | "package" | "path"> {
  const parts = path.replace("/packages/", "").split("/")
  const packageName = parts[0]
  const name = parts.at(-1) ?? path
  const rest =
    parts.length > 2 ? parts.slice(1, parts.length - 1).join("/") : ""

  return {
    name: name.includes(".entry.")
      ? name.slice(0, name.indexOf(".entry."))
      : name,
    package: packageName,
    path: rest,
  }
}

export async function fetchEntries(): Promise<Entries> {
  const entries = (
    await Promise.all(
      Object.entries(entryFiles).map(async ([filename, importer]) => {
        const meta = pathToEntryMeta(filename)

        const component = await importer()
        const { entry } = component

        if (typeof entry === "undefined") {
          return null
        }

        return {
          ...entry,
          component: resolveDynamicComponent(
            markRaw(
              "default" in component ? component.default : entry.component
            )
          ),
          ...meta,
        }
      })
    )
  ).filter((value) => value !== null) as Entry[]

  const entriesByName = entries.reduce(
    (acc, val) => acc.set(val.name, val),
    new Map<string, Entry>()
  )

  return {
    entries,
    entriesByName,
  }
}

export function useEntries(): Entries {
  const refs = reactive<Entries>({
    entries: [],
    entriesByName: new Map<string, Entry>(),
  })

  fetchEntries().then(({ entries, entriesByName }) => {
    refs.entries = entries
    refs.entriesByName = entriesByName
  })

  return refs
}
`,"/packages/fairytome/entry.ts":`import type { Component } from "vue"

type BaseOption<InitialType> = {
  type: string
  label: string
  initial: InitialType
  amount?: {
    min: number
    max?: number
  }
}

type OptionTypes = {
  Range: BaseOption<number> & {
    type: "range"
    min: number
    max: number
    step: number
  }
  Text: BaseOption<string> & {
    type: "text"
    length?: {
      min?: number
      max?: number
    }
  }
  Color: BaseOption<string> & {
    type: "color"
  }
  Checkbox: BaseOption<boolean> & {
    type: "checkbox"
  }
}

export type EntryOption = OptionTypes[keyof OptionTypes]

type ComponentProps<C extends Component> = C extends Component<infer Props>
  ? Props
  : never
export type Entry<C extends Component = Component> = {
  name: string
  package: string
  path: string
  component: Component
  controls: Record<keyof ComponentProps<C>, EntryOption>
  overrides?: { [Key in keyof ComponentProps<C>]: ComponentProps<C>[Key] }
  stage?: Component
}

export function createEntry<T extends Component>(
  entry: Omit<Entry<T>, "name" | "package" | "path">
) {
  return entry as Entry<T>
}
`,"/packages/framework/App.vue":`<template lang="pug">
palette(seed="abcdefghi" :offset="paletteOffset + manualPaletteOffset")
  .app.w-screen.h-screen.overflow-hidden(:class="{ loaded }")
    .content.absolute.w-full.h-full(class="z-[5]")
      router-view(v-slot="{ Component }")
        transition(name="fade")
          component(:is="Component")
    background.absolute.top-0.left-0.w-full.h-full.z-0(:blob-amount="0")
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import Background from "@/framework/components/Background.vue"
import Palette from "./components/Palette.vue"

let loaded = $ref(false)
onMounted(() =>
  setTimeout(() => {
    loaded = true
  }, 50)
)

const route = useRoute()
const manualPaletteOffset = ref(0)
const paletteOffset = computed(() => {
  if (route.fullPath.includes("fairytome")) {
    return 1
  }

  if (route.fullPath.includes("about")) {
    return 2
  }

  return 0
})
<\/script>

<style lang="sass" scoped>
.app.loaded
  transition: 1s
  transition-property: var(--theme-colors)

  .content
    > *
      position: absolute
      top: 0
      left: 0

      &.fade
        &-enter-active, &-leave-active
          transition: opacity .5s

        &-enter-from, &-leave-to
          opacity: 0
</style>
`,"/packages/framework/constants.ts":`export const PALETTE_COLOR_COUNT = 8
`,"/packages/framework/main.ts":`import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import routes from "~pages"
import App from "./App.vue"
import "./assets/style.css"

createApp(App)
  .use(createRouter({ history: createWebHistory(), routes }))
  .mount("#app")
`,"/packages/utilities/glob.ts":`const REGEX_GLOB_TO_FILENAME = /\\.\\/(.+)\\.ts/

type FilenameGlob = \`./\${string}.ts\`
type GlobToFilename<GlobString extends FilenameGlob> =
  GlobString extends \`./\${infer Filename}.ts\` ? Filename : never

export function globToFilename<GlobString extends FilenameGlob>(
  glob: GlobString
): GlobToFilename<GlobString> {
  const result = REGEX_GLOB_TO_FILENAME.exec(glob)

  if (result === null) {
    throw new Error(
      \`Input must have format \${REGEX_GLOB_TO_FILENAME.source}, given: \${glob}\`
    )
  }

  return result[1] as GlobToFilename<GlobString>
}
`,"/packages/utilities/math.ts":`export function randomBetween(start = 0, end = 1): number {
  return start + Math.random() * (end - start)
}

export type RandomJitter = number | Readonly<[number, number]>
export function randomAround(center: number, jitter: RandomJitter): number {
  if (Array.isArray(jitter)) {
    return randomBetween(center - jitter[0], center + jitter[1])
  }

  const jitterNumber = jitter as number
  return randomBetween(center - jitterNumber, center + jitterNumber)
}
`,"/packages/about/components/ProjectFileViewer.vue":`<template lang="pug">
.project-file-viewer.flex.items-center.justify-center.min-w-0
  n-card.relative.h-full.w-full.min-w-0(v-if="file !== null" :title="filename")
    template(#cover)
      n-breadcrumb.path
        n-breadcrumb-item
          n-icon(:component="getIconForFolder('/')" class="mr-[.5rem]")
        n-breadcrumb-item(
          v-for="(part, index) in pathParts"
          @click="model = '/' + pathParts.slice(0, index + 1).join('/')"
        )
          n-icon(class="mr-[.5rem]"): component(
            :is="getIconForFolder('/' + pathParts.slice(0, index + 1).join('/'))"
          )
          | {{ part }}
        n-breadcrumb-item
      n-icon.absolute(
        size="24px"
        class="top-[3.2rem] left-[1rem]"
        :component="entry === null ? getIconForFolder(modelValue) : getIcon(entry)"
      )
    .flex.h-full
      .code.relative.flex-1.h-full.line-numbers.match-braces.rainbow-braces(
        v-if="source !== null"
        class="pb-[.25rem] mt-[-.5rem]"
        :class="[\`language-\${language}\`, { 'show-invisible': showInvisible }]"
      )
        n-switch.absolute.right-0(
          class="top-[-2rem]"
          v-model:value="showInvisible"
          v-if="!isImage"
        )
          template(#checked) Show invisibles
          template(#unchecked) Hide invisibles
        fade.h-full
          pre.w-full.h-full(v-if="!isImage" v-show="!isHighlighting")
            code(ref="code") {{ source }}
          .flex.flex-col.h-full.w-full.items-center.justify-center.relative.overflow-hidden(
            v-else
          )
            .controls.absolute.top-4(class="w-1/2 z-[1]")
              n-slider(
                v-model:value="imageZoom"
                :min="-10"
                :max="10"
                :step="0.01"
                :format-tooltip="(value) => \`x\${(1.2 ** value).toFixed(2)}\`"
              )
            img.img-preview.border-solid.border-black.origin-center(
              :src="file"
              :style="{ '--scale': imageScale }"
            )
      fade.h-full.flex-1(v-else)
        suspense(v-if="!isImage")
          .h-full
            project-tree.h-full(v-model="model" :entries="subtree" class="m-l-[-1rem]")
          template(#fallback)
            .absolute.w-full.h-full.top-0.left-0.flex.items-center.justify-center
              n-spin
      .flex-1.ml-4(v-if="structureEntry !== null")
        project-structure-entry(:markdown-source="structureEntry")
  .flex.flex-col.items-center.opacity-50(v-else)
    n-icon(size="4rem"): i-feather-file-text
    n-h2 No file selected
</template>

<script lang="ts" setup>
import { getLanguageFromExtension, usePrism } from "@/about/composables/prism"
import { useSource } from "@/about/composables/source"
import { getIcon, getIconForFolder } from "@/about/icons"
import { fetchEntry } from "@/about/structure-entries"
import { Fade } from "@/framework/components/transitions"
import type { Tree } from "../project"
import ProjectStructureEntry from "./ProjectStructureEntry.vue"

const ProjectTree = defineAsyncComponent(() => import("./ProjectTree.vue"))

const { Prism, loadLanguage } = usePrism()

const props = defineProps<{ modelValue: string | null; subtree: Tree }>()
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void
}>()
const model = useVModel(props, "modelValue", emit)
const source = useSource(model)

const entry = $computed(
  () => props.subtree.find((node) => node.key === model.value) ?? null
)

let showInvisible = $ref(false)

const file = $(model)
const filename = $computed(() => file?.split("/").at(-1))
const extension = $computed(() => filename?.split(".").at(-1))
const pathParts = $computed(() => file?.split("/").slice(1, -1))

let structureEntry = $ref(null)
watch(
  model,
  async (value) => {
    structureEntry = null

    if (value !== null) {
      structureEntry = await fetchEntry(value)
    }
  },
  { immediate: true }
)

const isImage = $computed(
  () =>
    typeof extension !== "undefined" &&
    ["ico", "png", "jpg"].includes(extension)
)
const imageZoom = ref(0)
const debouncedZoom = refDebounced(imageZoom, 100)
const imageScale = $computed(() => 1.2 ** debouncedZoom.value)

const language = $computed((): string =>
  typeof extension === "undefined"
    ? "none"
    : getLanguageFromExtension(extension)
)

let isHighlighting = $ref(false)
const code = ref()
watch(source, async () => {
  if (source.value === null || isImage) {
    return
  }

  isHighlighting = true
  if (typeof extension !== "undefined") {
    await loadLanguage(extension)
  }

  setTimeout(
    () =>
      Prism.highlightElement(code.value, false, () => {
        isHighlighting = false
      }),
    50
  )
})
<\/script>

<style lang="sass" scoped>
.project-file-viewer
  :deep(*)
    min-width: 0
    min-height: 0

  :deep(.n-card-cover)
    overflow: visible

  :deep(.n-card-header__main)
    padding-left: 1.75rem

  .path
    transform: translate(calc(var(--n-padding-left) - 6px), .6rem)
    padding-top: 0.5rem

    :deep(.n-breadcrumb-item:first-child)
      pointer-events: none

  .code
    &:not(.show-invisible)
      :deep(.token)
        &.lf, &.space, &.tab, &.cr, &.crlf
          opacity: 0

    :deep(.token)
      transition: opacity .5s

  .img-preview
    border: 1px solid black
    transform: scale(var(--scale, 1))
    transition: transform .5s
</style>
`,"/packages/about/components/ProjectStructureEntry.vue":`<template lang="pug">
.prose(v-html="rendered")
</template>

<script lang="ts" setup>
import { marked } from "marked"

const props = defineProps<{ markdownSource: string }>()
const rendered = $computed(() => marked(props.markdownSource))
<\/script>

<style lang="sass" scoped>
.prose
  :deep(h2)
    code
      &::before, &::after
        content: ""
</style>
`,"/packages/about/components/ProjectStructureExplorer.vue":`<template lang="pug">
.explorer.flex.h-full.w-full
  .flex-none.border-solid.mr-4(class="border-r-[1px] ml-[-1rem] min-w-[20rem]")
    project-tree(:entries="tree" v-model="selectedKey" root)
  .flex-1.min-w-0.relative
    .spinner.absolute.w-full.h-full.top-0.flex.justify-center.items-center(
      v-if="selectedKey !== null"
    )
      n-spin(size="large")
    fade.h-full(duration="250ms" :transition="{ mode: 'out-in' }")
      project-file-viewer.w-full.h-full(
        v-model="selectedKey"
        :key="selectedKey"
        :subtree="subtree"
      )
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import { Fade } from "@/framework/components/transitions"
import { fetchProjectTree, findSubtreeByKey } from "../project"
import ProjectFileViewer from "./ProjectFileViewer.vue"
import ProjectTree from "./ProjectTree.vue"

const tree = fetchProjectTree()
const selectedKey = useRouteQuery<string | null>("path", null)

onBeforeUnmount(() => {
  selectedKey.value = null
})

const subtree = $computed(() =>
  selectedKey.value === null ? tree : findSubtreeByKey(selectedKey.value, tree)
)
<\/script>

<style lang="sass" scoped>
.explorer
  background: var(--n-color)
  z-index: 1
</style>
`,"/packages/about/components/ProjectTree.vue":`<template lang="pug">
.pb-4.h-full.flex.flex-col
  .controls.pl-7.pr-2.pt-1.mb-2.relative.flex-none(class="z-[1]")
    n-input(placeholder="Search..." clearable @update:value="handleInput")
    fade.absolute.top-3.left-0
      n-spin(:size="20" v-if="isLoading")
    n-switch.absolute.right-6(class="bottom-[-2rem]" v-model:value="showDotEntries")
      template(#checked) Show dots
      template(#unchecked) Hide dots
  .flex-1.overflow-y-scroll.min-h-0
    n-tree.project-tree(
      :class="{ root, 'dot-shown': showDotEntries, empty: entries.length === 0 }"
      :data="tree"
      :node-props="generateProps"
      :show-irrelevant-nodes="true"
      v-model:expanded-keys="currentExpandedKeys.value"
      :pattern="pattern"
      v-model:selected-keys="selectedKeys"
      v-bind="$attrs"
    )
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import { NIcon } from "naive-ui"
import type { Ref } from "vue"
import { getFolderIcon } from "@/about/icons/folder"
import { Fade } from "@/framework/components/transitions/index"
import type { Tree, TreeNode } from "../project"
import { isFolder } from "../project"

const expandedKeys = ref<string[]>(["/"])
let selectedKeys = $ref<string[]>([])
watch(
  () => selectedKeys,
  () => {
    if (selectedKeys.length === 0 || selectedKeys[0] === props.modelValue) {
      return
    }

    model.value = selectedKeys[0]
  }
)

const props = defineProps<{
  entries: Readonly<Tree>
  modelValue: string | null
  root?: boolean
}>()
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void
}>()
const model = useVModel(props, "modelValue", emit)
watch(
  model,
  () => {
    if (model.value === null) {
      selectedKeys = []
      return
    }

    selectedKeys = [model.value]
  },
  { immediate: true }
)

const currentExpandedKeys = $computed(
  (): Ref<string[]> =>
    pattern.value.length > 0
      ? ref(["/", ...subtree.map((node) => node.key)])
      : expandedKeys
)

function filterSubtree(tree: Readonly<Tree>): Tree {
  return tree
    .map((node) =>
      isFolder(node)
        ? {
            ...node,
            children: filterSubtree(node.children),
          }
        : node
    )
    .filter(
      (node) =>
        ((isFolder(node) && node.children.length > 0) ||
          node.key.includes(pattern.value)) &&
        (showDotEntries || !node.label.startsWith("."))
    )
}
const subtree = $computed(() => {
  return filterSubtree(props.entries)
})

const tree = $computed(() => {
  if (props.root && subtree.length > 0) {
    return [
      {
        key: "/",
        label: "/",
        children: subtree,
        prefix: () =>
          h(
            NIcon,
            { size: "1.25rem" },
            { default: () => h(getFolderIcon("/")) }
          ),
      },
    ]
  }

  return subtree
})

watch(
  () => props.entries,
  (entries) => {
    if (props.root) {
      return
    }

    expandedKeys.value = entries.map(({ key }) => key)
  },
  { immediate: true }
)

function generateProps({ option: node }: { option: TreeNode }) {
  const { key, label } = node
  const isDotEntry = label.startsWith(".")

  return {
    class: {
      empty: !isFolder(node) || node.children.length === 0,
      dot: isDotEntry,
      "is-package-root":
        isFolder(node) &&
        key.startsWith("/packages/") &&
        key.split("/").length === 3,
    },
  }
}

let isLoading = $ref(false)
const query = ref("")
const pattern = refDebounced(query, 500)

watch(pattern, () =>
  setTimeout(() => {
    isLoading = false
  }, 50)
)

function handleInput(value: string) {
  query.value = value
  isLoading = true
}
let showDotEntriesQuery = $(useRouteQuery<"true" | "false">("dot", "false"))
let showDotEntries = $computed({
  get(): boolean {
    return showDotEntriesQuery === "true"
  },
  set(value: boolean) {
    showDotEntriesQuery = value ? "true" : "false"
  },
})
<\/script>

<style lang="sass" scoped>
.project-tree
  &.root
    :deep(> .n-tree-node-wrapper)
      &:first-child
        pointer-events: none

        .n-tree-node-switcher
          visibility: hidden

    :deep(.n-tree-node)
      margin-left: -1rem

  :deep(.n-tree-node-wrapper)
    margin-left: 1.5rem
    padding: 0

    &:nth-child(even)
      background: rgba(0, 0, 0, 0.05)
      --n-node-color-hover: rgba(0, 0, 0, 0.075)

    > .n-tree-node
      padding: 3px 0

      &.empty
        > .n-tree-node-switcher
          visibility: hidden
          pointer-events: none

      &.dot .n-tree-node-content__text
        opacity: .75

      &.even.visible
        background: rgba(0, 0, 0, 0.1)

      &.is-package-root .n-tree-node-content__prefix
        opacity: .75

  :deep(.n-empty)
    margin-top: 4rem
</style>
`,"/packages/about/components/index.ts":`export { default as ProjectFileViewer } from "./ProjectFileViewer.vue"
export { default as ProjectStructureEntry } from "./ProjectStructureEntry.vue"
export { default as ProjectStructureExplorer } from "./ProjectStructureExplorer.vue"
export { default as ProjectTree } from "./ProjectTree.vue"
`,"/packages/about/composables/prism.ts":`import Prism from "prismjs"
import "prismjs/plugins/inline-color/prism-inline-color"
import "prismjs/plugins/inline-color/prism-inline-color.css"
import "prismjs/plugins/line-numbers/prism-line-numbers"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/match-braces/prism-match-braces"
import "prismjs/plugins/match-braces/prism-match-braces.css"
import "prismjs/plugins/previewers/prism-previewers"
import "prismjs/plugins/previewers/prism-previewers.css"
import "prismjs/plugins/show-invisibles/prism-show-invisibles"
import "prismjs/plugins/show-invisibles/prism-show-invisibles.css"
import "prismjs/themes/prism.css"

Prism.manual = true

const EXTENSION_TO_LANGUAGE: Record<string, string> = {
  md: "markdown",
  ts: "typescript",
  html: "vue",
  cjs: "js",
  yml: "yaml",
  gitignore: "ignore",
  gitattributes: "ignore",
  prettierignore: "ignore",
}

export function getLanguageFromExtension(extension: string): string {
  return EXTENSION_TO_LANGUAGE[extension] ?? extension
}

const loadedLanguages = new Set()
const languageGlob = import.meta.glob(
  "/node_modules/prismjs/components/prism-*.js"
)
export function usePrism(): {
  Prism: typeof Prism
  loadLanguage(name: string): Promise<void>
} {
  async function loadLanguage(extension: string): Promise<void> {
    const language = getLanguageFromExtension(extension)
    if (loadedLanguages.has(language)) {
      return
    }

    loadedLanguages.add(language)

    if (language === "vue") {
      Prism.languages.vue = Prism.languages.extend("markup", {})
    }

    const key = Object.keys(languageGlob).find((key) => key.includes(language))

    if (typeof key === "undefined") {
      return
    }

    await languageGlob[key]()
  }

  return { Prism, loadLanguage }
}
`,"/packages/about/composables/source.ts":`import type { Ref } from "vue"
import { fetchFileSource } from "../project"

export function useSource(
  file: Ref<string | null>
): Readonly<Ref<string | null>> {
  const source = ref<string | null>(null)

  watch(
    file,
    async () => {
      if (file.value === null) {
        source.value = ""
        return
      }

      source.value = (await fetchFileSource(file.value)) ?? null
    },
    { immediate: true }
  )

  return source
}
`,"/packages/about/icons/CustomFolder.vue":`<template lang="pug">
span.icon.relative
  n-icon(v-bind="$attrs" :color="baseColor")
    i-vscode-icons-default-folder.folder
  n-icon-wrapper.absolute.top-3.left-2(
    :size="14"
    :border-radius="0"
    v-if="typeof backgroundColor !== 'undefined'"
    :color="backgroundColor"
  )
    n-icon(size="0.75rem" :color="topColor")
      component.top(
        :is="icon"
        :class="{ 'custom-color': typeof topColor !== 'undefined' }"
      )
  n-icon.absolute.top-2.left-2(size="1rem" :color="topColor" v-else)
    component.top(
      :is="icon"
      :class="{ 'custom-color': typeof topColor !== 'undefined' }"
    )
</template>

<script lang="ts" setup>
import type { Component } from "vue"

const props = defineProps<{
  baseColor: string
  topColor?: string
  icon: Component
  backgroundColor?: string
}>()
<\/script>

<style lang="sass" scoped>
.icon
  .folder
    :deep(path)
      fill: currentColor

  .top.custom-color
    :deep(path)
      fill: currentColor
</style>
`,"/packages/about/icons/file.ts":`import * as icons from "./imports"
import type { Icon } from "./types"

const fileIconsByExtension: Record<string, Icon> = {
  ts: icons.IconTypescriptOfficial,
  cts: icons.IconTypescriptOfficial,
  mts: icons.IconTypescriptOfficial,
  js: icons.IconJavascriptOfficial,
  cjs: icons.IconJavascriptOfficial,
  mjs: icons.IconJavascriptOfficial,
  json: icons.IconJson,
  lock: icons.IconYarn,
  LICENSE: icons.IconText,
  md: icons.IconMarkdown,
  html: icons.IconXml,
  css: icons.IconCss,
  sass: icons.IconScss,
  vue: icons.IconVue,
  yml: icons.IconYaml,
  ico: icons.IconImage,
  png: icons.IconImage,
  jpg: icons.IconImage,
}

function getFileIconByExtension(extension?: string): Icon {
  if (typeof extension === "undefined") {
    return icons.IconDefaultFile
  }

  return fileIconsByExtension[extension] ?? icons.IconDefaultFile
}

const testRegex = (regex: RegExp) => (filename: string) => regex.test(filename)
const testFilename = (name: string) => (filename: string) => name === filename
const testStartsWith = (prefix: string) => (filename: string) =>
  filename.startsWith(prefix)
const testEndsWith = (suffix: string) => (filename: string) =>
  filename.endsWith(suffix)
const specialFileIcons: [test: (filename: string) => boolean, icon: Icon][] = [
  [testRegex(/tsconfig(\\..+)?\\.json/m), icons.IconTsconfig],
  [testFilename("package.json"), icons.IconNpm],
  [testStartsWith("vite.config."), icons.IconVite],
  [testStartsWith("cypress."), icons.IconCypress],
  [testRegex(/.+\\.spec\\..+/m), icons.IconCypressSpec],
  [testEndsWith(".d.ts"), icons.IconTsconfigOfficial],
  [testStartsWith("postcss.config."), icons.IconPostcssConfig],
  [testStartsWith("tailwind.config."), icons.IconTailwind],
  [testStartsWith(".prettier"), icons.IconPrettier],
  [testStartsWith(".git"), icons.IconGit],
  [testStartsWith(".eslint"), icons.IconEslint],
  [testStartsWith(".yarn"), icons.IconYarn],
]

function getSpecialIcon(filename: string): Icon | null {
  const entry = specialFileIcons.find(([test]) => test(filename))

  if (typeof entry === "undefined") {
    return null
  }

  return entry[1]
}

export function getFileIcon(key: string) {
  const name = key.split("/").at(-1)

  if (typeof name === "undefined") {
    return icons.IconDefaultFile
  }

  const specialIcon = getSpecialIcon(name)
  if (specialIcon !== null) {
    return specialIcon
  }

  const extension = name.split(".").at(-1)
  return getFileIconByExtension(extension)
}
`,"/packages/about/icons/folder.ts":`import CustomFolder from "./CustomFolder.vue"
import * as icons from "./imports"
import { IconDefaultFolder } from "./imports"
import type { Icon } from "./types"

type IconTest = (name: string, key: string) => boolean

function createCustomRenderer(
  baseColor: string,
  icon: Icon,
  topColor?: string,
  backgroundColor?: string
): Icon {
  return () => h(CustomFolder, { baseColor, icon, topColor, backgroundColor })
}

const testIsKey =
  (value: string): IconTest =>
  (_, key) =>
    key === value
const testHasParent =
  (parent: string): IconTest =>
  (_, key) =>
    key.includes(parent)
const specialFolderIcons: [test: IconTest, icon: Icon][] = [
  [testIsKey("/"), icons.IconRootFolder],
  [testHasParent("cypress"), icons.IconFolderCypress],
  [testHasParent("dist"), icons.IconFolderBinary],
  [testIsKey("/packages"), icons.IconFolderApp],
  [testIsKey("/.yarn"), icons.IconFolderYarn],
  [testHasParent("types"), icons.IconFolderTypescript],
  [testHasParent("assets"), icons.IconFolderAsset],
  [testHasParent("icons"), icons.IconFolderImages],
  [testIsKey("/packages/about"), icons.IconFeatherInfo],
  [testIsKey("/packages/fairytome"), icons.IconFeatherBookOpen],
  [testIsKey("/packages/framework"), icons.IconFeatherCode],
  [testIsKey("/packages/home"), icons.IconFeatherHome],
  [testIsKey("/packages/utilities"), icons.IconFeatherTool],
  [testHasParent("components"), createCustomRenderer("#14622a", icons.IconVue)],
  [
    testHasParent("composables"),
    createCustomRenderer("#14622a", icons.IconVueConfig),
  ],
  [
    testHasParent("pages"),
    createCustomRenderer(
      "#14622a",
      icons.IconDefaultFile,
      "white",
      "rgba(0, 0, 0, 0.5)"
    ),
  ],
  [testHasParent("vite"), createCustomRenderer("#14622a", icons.IconVite)],
]

function getSpecialFolderIcon(key: string): Icon | null {
  const name = key.split("/").at(-1)

  if (typeof name === "undefined") {
    return IconDefaultFolder
  }

  const entry = specialFolderIcons.find(([test]) => test(name, key))

  if (typeof entry === "undefined") {
    return null
  }

  return entry[1]
}

export function getFolderIcon(key: string): Icon {
  return getSpecialFolderIcon(key) ?? icons.IconDefaultFolder
}
`,"/packages/about/icons/imports.ts":`export { default as IconDefaultFile } from "~icons/vscode-icons/default-file"
export { default as IconTypescriptOfficial } from "~icons/vscode-icons/file-type-typescript-official"
export { default as IconTsconfig } from "~icons/vscode-icons/file-type-tsconfig"
export { default as IconTsconfigOfficial } from "~icons/vscode-icons/file-type-tsconfig-official"
export { default as IconJavascriptOfficial } from "~icons/vscode-icons/file-type-js-official"
export { default as IconXquery } from "~icons/vscode-icons/file-type-xquery"
export { default as IconJson } from "~icons/vscode-icons/file-type-json"
export { default as IconYarn } from "~icons/vscode-icons/file-type-yarn"
export { default as IconText } from "~icons/vscode-icons/file-type-text"
export { default as IconMarkdown } from "~icons/vscode-icons/file-type-markdown"
export { default as IconXml } from "~icons/vscode-icons/file-type-xml"
export { default as IconNpm } from "~icons/vscode-icons/file-type-npm"
export { default as IconVite } from "~icons/vscode-icons/file-type-vite"
export { default as IconCypress } from "~icons/vscode-icons/file-type-cypress"
export { default as IconCypressSpec } from "~icons/vscode-icons/file-type-cypress-spec"
export { default as IconCss } from "~icons/vscode-icons/file-type-css"
export { default as IconScss } from "~icons/vscode-icons/file-type-scss"
export { default as IconVue } from "~icons/vscode-icons/file-type-vue"
export { default as IconPostcssConfig } from "~icons/vscode-icons/file-type-postcssconfig"
export { default as IconTailwind } from "~icons/vscode-icons/file-type-tailwind"
export { default as IconYaml } from "~icons/vscode-icons/file-type-yaml"
export { default as IconPrettier } from "~icons/vscode-icons/file-type-prettier"
export { default as IconGit } from "~icons/vscode-icons/file-type-git"
export { default as IconEslint } from "~icons/vscode-icons/file-type-eslint"
export { default as IconVueConfig } from "~icons/vscode-icons/file-type-vueconfig"
export { default as IconImage } from "~icons/vscode-icons/file-type-image"

export { default as IconFeatherInfo } from "~icons/feather/info"
export { default as IconFeatherBookOpen } from "~icons/feather/book-open"
export { default as IconFeatherCode } from "~icons/feather/code"
export { default as IconFeatherHome } from "~icons/feather/home"
export { default as IconFeatherTool } from "~icons/feather/tool"

export { default as IconDefaultFolder } from "~icons/vscode-icons/default-folder"
export { default as IconRootFolder } from "~icons/vscode-icons/default-root-folder"
export { default as IconFolderCypress } from "~icons/vscode-icons/folder-type-cypress"
export { default as IconFolderBinary } from "~icons/vscode-icons/folder-type-binary"
export { default as IconFolderApp } from "~icons/vscode-icons/folder-type-app"
export { default as IconFolderYarn } from "~icons/vscode-icons/folder-type-yarn"
export { default as IconFolderTypescript } from "~icons/vscode-icons/folder-type-typescript"
export { default as IconFolderAsset } from "~icons/vscode-icons/folder-type-asset"
export { default as IconFolderImages } from "~icons/vscode-icons/folder-type-images"
`,"/packages/about/icons/index.ts":`import { isFile, isFolder } from "../project"
import type { TreeNode } from "../project"
import { getFileIcon } from "./file"
import { getFolderIcon } from "./folder"
import { IconXquery } from "./imports"
import type { Icon } from "./types"

const ICON_UNKNOWN = IconXquery

export function getIcon(node: TreeNode): Icon {
  const { key } = node

  if (isFile(node)) {
    return getFileIcon(key)
  }

  if (isFolder(node)) {
    return getFolderIcon(key)
  }

  return ICON_UNKNOWN
}

export const getIconForFolder = getFolderIcon
export const getIconForFile = getFileIcon
`,"/packages/about/icons/types.ts":`export type Icon = typeof import("~icons/*").default
`,"/packages/about/pages/index.vue":`<template lang="pug">
.about-index.p-4.flex.w-full.h-full.overflow-hidden
  n-card.flex.flex-1.h-full.overflow-hidden(title="About this page")
    template(#header-extra)
      n-breadcrumb
        breadcrumb-item(href="/")
          template(#icon): i-feather-home
          | Home
        n-breadcrumb-item
          n-icon.mr-1: i-feather-info
          | About
    n-tabs.tabs.h-full.flex.flex-col(
      type="line"
      animated
      v-model:value="activeTab"
    )
      n-tab-pane.h-full(
        tab="General structure"
        name="general-structure"
        @transitionend.self="transitionEndHandler('general-structure', $event)"
      )
        fade.flex.h-full(duration=".5s" :transition="{ mode: 'out-in' }")
          suspense(v-if="explorer !== null")
            component(:is="explorer" :key="activeTab")
        .flex.items-center.justify-center.w-full.h-full.absolute.top-0
          n-spin(size="large")
      n-tab-pane.h-full(
        tab="Vite config"
        name="vite-config"
        @transitionend.self="transitionEndHandler('vite-config', $event)"
      )
      n-tab-pane.h-full(
        tab="Custom plugins"
        name="custom-plugins"
        @transitionend.self="transitionEndHandler('custom-plugins', $event)"
      )
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import type { Component } from "vue"
import { Fade } from "@/framework/components/transitions/index"
import { BreadcrumbItem } from "@/framework/components/ui"

const TABS = {
  "general-structure": "General structure",
  "vite-config": "Vite config",
  "custom-plugins": "Custom plugins",
}
type TabId = keyof typeof TABS

let transitionDone = $ref(true)
const activeTab = useRouteQuery<TabId>("tab", "general-structure")
watch(activeTab, () => {
  transitionDone = false
})

const explorer = shallowRef<Component | null>(null)

watch(
  () => [transitionDone, activeTab],
  () => {
    explorer.value =
      activeTab.value === "general-structure" && transitionDone
        ? defineAsyncComponent(
            () => import("@/about/components/ProjectStructureExplorer.vue")
          )
        : null
  },
  { immediate: true }
)

function transitionEndHandler(name: TabId, event: TransitionEvent): void {
  if (name === activeTab.value) {
    transitionDone = true
  }
}
<\/script>

<style lang="sass" scoped>
.about-index
  > :deep(.n-card > .n-card__content)
    height: calc(100% - 4rem)

  :deep(.tabs > .n-tabs-pane-wrapper)
    height: calc(100% - 3rem)
    overflow: visible
</style>
`,"/packages/about/structure-entries/glob.worker.ts":`const entryImports = import.meta.globEager<string>("./**/*.md", {
  as: "raw",
})

export async function fetchSource(filename: string): Promise<string | null> {
  return entryImports[filename] ?? null
}
`,"/packages/about/structure-entries/index.html.md":`## \`index.html\`

Entry point for all processes:
* dev
* build
* more examples
`,"/packages/about/structure-entries/index.ts":`const entryImports = import.meta.glob("./**/*.md", { as: "raw" })

export function fetchEntryKeys(): string[] {
  return Object.keys(entryImports).map((key) => key.slice(1, -3))
}

const globWorker = new ComlinkWorker<typeof import("./glob.worker")>(
  new URL("./glob.worker.ts", import.meta.url)
)

export function fetchEntry(key: string): Promise<any> | null {
  return globWorker.fetchSource(\`.\${key}.md\`)
}
`,"/packages/about/structure-entries/package.json.md":`## \`package.json\`

Dependency management etc.
`,"/packages/fairytome/components/Control.vue":`<template lang="pug">
.control
  n-form-item(v-if="control.type === 'text'" :label="label")
    n-input(v-model:value="model")
  n-form-item(
    v-if="control.type === 'range'"
    :label="\`\${label}: \${modelValue}\`"
  )
    n-slider.w-full(
      v-model:value="model"
      :min="control.min"
      :max="control.max"
      :step="control.step"
    )
  n-form-item(v-if="control.type === 'color'" :label="label")
    n-color-picker(v-model:value="model")
  n-checkbox(v-if="control.type === 'checkbox'" v-model:checked="model") {{ label }}
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core"
import { computed } from "vue"
import type { EntryOption } from "@/fairytome/entry"

const props = withDefaults(
  defineProps<{
    title: string
    control: EntryOption
    index?: number | null
    modelValue: EntryOption["initial"]
  }>(),
  { index: null }
)
const emit = defineEmits<{
  (event: "update:modelValue", value: EntryOption["initial"]): void
}>()

const model = useVModel(props, "modelValue", emit)

const label = computed(() =>
  props.index !== null
    ? \`\${props.control.label} #\${props.index}\`
    : props.control.label
)
<\/script>
`,"/packages/fairytome/components/ControlBar.vue":`<template lang="pug">
.control-bar
  template(v-for="(control, prop) in entry.controls")
    .flex.flex-row.relative(v-for="(_, index) in model[prop]" :key="index")
      control.flex-1(
        :control="control"
        :title="\`\${prop} #\${index + 1}\`"
        :index="model[prop].length > 1 ? index : null"
        :class="{ 'rounded-br-none': index === model[prop].length - 1, 'rounded-r-none': model[prop].length > 1 }"
        v-model="model[prop][index]"
      )
      template(v-if="'amount' in control")
        n-button.self-end(
          v-if="model[prop].length > 1"
          class="mb-[1.5rem]"
          @click="model[prop].splice(index, 1)"
        )
          i-feather-minus-circle.text-red-500
        n-button.absolute.right-0.bottom-0.add.rounded-t-none(
          v-if="index === model[prop].length - 1"
          @click="addControlPropEntry(prop)"
        )
          i-feather-plus-circle.text-green-600
</template>

<script lang="ts" setup>
import type { Entry } from "@/fairytome/entry"
import Control from "./Control.vue"

const props = defineProps<{
  entry: Entry
  modelValue: Record<string, any[]>
}>()
const emit = defineEmits<{
  (event: "update:modelValue", value: Record<string, unknown>): void
}>()

const model = $(useVModel(props, "modelValue", emit))
watch(
  () => props.entry,
  (current) => {
    const storedKeys = Object.keys(model)
    const currentKeys = Object.keys(current.controls)

    const keys = {
      toBeDeleted: storedKeys.filter((key) => !currentKeys.includes(key)),
      toBeAdded: currentKeys.filter((key) => !storedKeys.includes(key)),
    }

    keys.toBeDeleted.forEach((key) => {
      delete model[key]
    })

    keys.toBeAdded.forEach((key) => {
      model[key] = [current.controls[key].initial]
    })
  },
  { immediate: true }
)

function addControlPropEntry(prop: string) {
  model[prop].push(props.entry.controls[prop].initial)
}
<\/script>

<style lang="sass" scoped>
.control-bar
  button.add
    transform: translateY(.55rem)
</style>
`,"/packages/fairytome/components/Explorer.vue":`<template lang="pug">
n-form
  n-form-item(label="Package")
    n-select(
      v-model:value="currentPackage"
      :options="packages.length > 0 ? packages.map((name) => ({ label: name, value: name })) : [{ label: 'Loading...', disabled: true, value: '' }]"
      :disabled="packages.length === 0"
    )
  n-form-item(label="Entry")
    n-select(
      v-model:value="currentName"
      :options="names.length > 0 ? names.map((name) => ({ label: name, value: name })) : [{ label: 'Loading...', disabled: true, value: '' }]"
      :disabled="names.length === 0"
    )
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import { pathToEntryMeta } from "@/fairytome/entries"
import type { Entry } from "@/fairytome/entry"

const props = defineProps<{ entries: Entry[]; modelValue: Entry | null }>()
const emit = defineEmits<{
  (event: "update:modelValue", value: Entry): void
}>()
let model = $(useVModel(props, "modelValue", emit))

let currentPackage = $ref("")
let currentName = $ref("")
const routeQuery = $(useRouteQuery<string>("entry", ""))

watch(
  () => [currentPackage, currentName],
  () => {
    const newEntry = props.entries.find(
      (entry) => entry.package === currentPackage && entry.name === currentName
    )

    if (typeof newEntry === "undefined") {
      return
    }

    model = newEntry
  }
)

const packages = $computed(() => [
  ...new Set(props.entries.map((entry) => entry.package)),
])
const names = $computed(() =>
  props.entries
    .filter((entry) => entry.package === currentPackage)
    .map((entry) => entry.name)
)

watch(
  () => props.entries,
  () => {
    if (model !== null) {
      currentPackage = model.package
      currentName = model.name
    } else {
      if (props.entries.length > 0) {
        if (routeQuery.length > 0) {
          const meta = pathToEntryMeta(routeQuery)
          currentPackage = meta.package
          currentName = meta.name
        } else {
          currentPackage = props.entries[0].package
          currentName = props.entries[0].name
        }
      }
    }
  },
  { immediate: true }
)
<\/script>
`,"/packages/fairytome/components/index.ts":`export { default as Control } from "./Control.vue"
export { default as ControlBar } from "./ControlBar.vue"
export { default as Explorer } from "./Explorer.vue"
`,"/packages/fairytome/pages/index.vue":`<template lang="pug">
.fairytome-index.flex.p-4.gap-4.text-white.w-full.h-full
  .flex.flex-1.flex-col.gap-4(class="min-w-[20rem]")
    n-card(title="Fairytome")
      template(#header-extra)
        n-breadcrumb
          breadcrumb-item(href="/")
            template(#icon): i-feather-home
            | Home
          breadcrumb-item
            template(#icon): i-feather-book-open
      explorer(:entries="entries" v-model="chosenEntry")
    n-card.flex-1.flex.flex-col.overflow-hidden
      control-bar(
        v-if="chosenEntry !== null"
        :entry="chosenEntry"
        v-model="controlProps.value"
      )
      .placeholder.w-full.h-full.flex.justify-center.align-center(v-else)
        n-spin(size="large")
  n-card.stage.overflow-hidden.flex.flex-col.align-center.justify-center(
    class="flex-[3]"
  )
    component(
      v-if="chosenEntry !== null"
      :is="chosenEntry.component"
      v-bind="controlPropsUnpacked"
    )
    .placeholder.w-full.h-full.flex.justify-center.align-center(v-else)
      n-spin(size="large")
</template>

<script lang="ts" setup>
import { useRouteQuery } from "@vueuse/router"
import { ControlBar, Explorer } from "@/fairytome/components"
import { useEntries } from "@/fairytome/entries"
import type { Entry } from "@/fairytome/entry"
import { BreadcrumbItem } from "@/framework/components/ui"

const { entries } = toRefs(useEntries())
const packages = computed(() => [
  ...new Set(entries.value.map((entry) => entry.package)),
])

const options = computed(() =>
  entries.value.map((entry) => ({ label: entry.name, value: entry.name }))
)

let chosenEntry = $ref<Entry | null>(null)
let entryRouteQuery = $(useRouteQuery<string>("entry", ""))

watch(
  () => chosenEntry,
  () => {
    entryRouteQuery = \`\${chosenEntry?.package}/\${chosenEntry?.path}/\${chosenEntry?.name}\`
  }
)

const controlProps = computed(() =>
  useLocalStorage(
    \`FAIRYTOME_\${chosenEntry?.package}_\${chosenEntry?.path}_\${chosenEntry?.name}\`,
    {} as Record<string, any[]>
  )
)
const controlPropsUnpacked = computed(() =>
  Object.fromEntries([
    ...Object.entries(controlProps.value.value).map(([prop, value]) => {
      if (chosenEntry === null) {
        return [prop, value]
      }

      const control = chosenEntry.controls[prop]

      if (
        typeof control !== "undefined" &&
        "amount" in control &&
        value.length > 1
      ) {
        return [prop, value]
      }

      return [prop, value[0]]
    }),
    ...Object.entries(chosenEntry?.overrides ?? {}),
  ])
)
<\/script>

<style lang="sass" scoped>
.fairytome-index
  .placeholder
    background: rgba(0, 0, 0, 0.3)
    transform: scale(1.5)

  .stage
    > :deep(.p-4)
      height: 100%

    > :deep(.n-card__content)
      max-height: 100%

      > *
        max-height: 100%
</style>
`,"/packages/framework/assets/style.css":`@tailwind base;
@tailwind components;
@tailwind utilities;
`,"/packages/framework/assets/transitions.sass":`.fade
  &-enter-active, &-leave-active
    transition: opacity var(--transition-fade-duration, 1s)

  &-enter-from, &-leave-to
    opacity: 0
`,"/packages/framework/components/Background.entry.ts":`import { createEntry } from "@/fairytome/entry"
import Background from "./Background.vue"

export const entry = createEntry<Background>({
  component: Background,
  controls: {
    blobAmount: {
      label: "Number of blobs",
      type: "range",
      min: 1,
      max: 20,
      initial: 1,
    },
    velocityCoefficient: {
      label: "Velocity coefficient",
      type: "range",
      min: 0,
      max: 10,
      step: 0.01,
      initial: 1,
    },
  },
})
`,"/packages/framework/components/Background.vue":`<template lang="pug">
.background.w-full.h-full.overflow-hidden
  background-blob.blob(
    v-if="blobs.length > 0"
    v-for="({ scaledPosition, outOfFrame }, index) in blobs"
    :class="{ 'out-of-frame': outOfFrame }"
    :color="[palette[index % palette.length][1], palette[index % palette.length][0], palette[index % palette.length][2]]"
    :rotation-speed="1"
    :style="{ '--left': \`\${scaledPosition[0]}\`, '--top': \`\${scaledPosition[1]}\`, '--size': BLOB_SIZE_PERCENTAGE }"
  )
</template>

<script lang="ts" setup>
import { randomAround, randomBetween } from "@/utilities/math"
import BackgroundBlob from "./background/SvgBlob.vue"
import { PALETTE } from "./provide"

const props = withDefaults(
  defineProps<{ blobAmount: number; velocityCoefficient?: number }>(),
  {
    velocityCoefficient: 1,
  }
)
let blobs = $ref<
  {
    position: [x: number, y: number]
    velocity: [x: number, y: number]
    scaledPosition: [x: number, y: number]
  }[]
>([])

const palette = $(inject(PALETTE))

const BLOB_SIZE_PERCENTAGE = 0.2
watch(
  () => props.blobAmount,
  (length) => {
    blobs = Array.from({ length }, (_, i) => ({
      position: [randomBetween(), randomBetween()],
      velocity: [randomAround(-0.01, 0.005), randomAround(-0.012, 0.005)],
      scaledPosition: reactiveComputed(() => [
        (blobs[i]?.position ?? [0, 0])[0] * (1 + BLOB_SIZE_PERCENTAGE * 2.5) -
          BLOB_SIZE_PERCENTAGE * 1.25,
        (blobs[i]?.position ?? [0, 0])[1] * (1 + BLOB_SIZE_PERCENTAGE * 2.5) -
          BLOB_SIZE_PERCENTAGE * 1.25,
      ]),
      outOfFrame: computed(
        () =>
          blobs[i].scaledPosition[0] < -BLOB_SIZE_PERCENTAGE ||
          blobs[i].scaledPosition[0] > 1 ||
          blobs[i].scaledPosition[1] < -BLOB_SIZE_PERCENTAGE ||
          blobs[i].scaledPosition[1] > 1
      ),
    }))
  },
  { immediate: true }
)

const DELTA_COEFFICIENT = 1 / 1e3
let lastTimestamp = 0
function render() {
  const now = Date.now()
  const delta = lastTimestamp === 0 ? 0 : now - lastTimestamp
  lastTimestamp = now

  blobs.forEach((blob) => {
    blob.position[0] +=
      blob.velocity[0] * (delta * DELTA_COEFFICIENT) * props.velocityCoefficient
    if (blob.position[0] < 0) {
      blob.position[0] = 1
    }
    if (blob.position[0] > 1) {
      blob.position[0] = 0
    }

    blob.position[1] +=
      blob.velocity[1] * (delta * DELTA_COEFFICIENT) * props.velocityCoefficient
    if (blob.position[1] < 0) {
      blob.position[1] = 1
    }
    if (blob.position[1] > 1) {
      blob.position[1] = 0
    }
  })
}

useRafFn(render)
<\/script>

<style lang="sass" scoped>
.background
  background: linear-gradient(240deg, var(--theme-color0-lighter), var(--theme-color0), var(--theme-color0-darker))

  .blob
    position: absolute
    top: 0
    left: 0
    width: calc(100% * var(--size))
    height: calc(100% * var(--size))
    transform: translate(calc(var(--left, 0) * 100vw), calc(var(--top, 0) * 100vh))

    &:not(.out-of-frame)
      transition: transform linear 0.1s
</style>
`,"/packages/framework/components/Palette.entry.vue":`<template lang="pug">
palette(v-slot="{ colors }")
  n-table
    thead
      tr
        th Index
        th Color
        th Lighter
        th Darker
    tbody
      tr(
        v-for="([normal, lighter, darker], index) in colors"
        :key="index"
        :data-index="index"
      )
        td(class="w-[3rem]") \\#{{ index }}
        td(:style="{ background: normal }")
        td(:style="{ background: lighter }")
        td(:style="{ background: darker }")
</template>

<script lang="ts" setup>
import Palette from "./Palette.vue"
<\/script>

<script lang="ts">
import { createEntry } from "@/fairytome/entry"
import PaletteComponent from "./Palette.vue"

export const entry = createEntry<PaletteComponent>({
  component: PaletteComponent,
  controls: {
    seed: {
      type: "text",
      label: "Seed",
      initial: Date.now().toString(),
    },
    saturate: {
      type: "range",
      label: "Post: Saturation",
      min: -5,
      max: 5,
      initial: 0,
    },
  },
})
<\/script>
`,"/packages/framework/components/Palette.vue":`<template lang="pug">
slot(:colors="palette")
</template>

<script lang="ts" setup>
import chroma from "chroma-js"
import hue from "iwanthue"
import { PALETTE_COLOR_COUNT } from "@/framework/constants"
import { PALETTE } from "./provide"

const props = withDefaults(
  defineProps<{ seed: string; saturate?: number; offset?: number }>(),
  {
    saturate: 0,
    offset: 0,
  }
)

const totalOffset = $computed(() => props.offset % PALETTE_COLOR_COUNT)

const palette = $computed(() => {
  const colors = hue(PALETTE_COLOR_COUNT, {
    colorSpace: "pimp",
    seed: props.seed,
  }).map((color) => [
    chroma(color).saturate(props.saturate).hex(),
    chroma(color).brighten().saturate(props.saturate).hex(),
    chroma(color).darken().saturate(props.saturate).hex(),
  ])

  return [...colors.slice(totalOffset), ...colors.slice(0, totalOffset)]
})

provide(PALETTE, $$(palette))

onMounted(() => {
  const element = useCurrentElement<HTMLElement>()
  const container = computed(() => {
    if (element.value.nodeType === Node.TEXT_NODE) {
      return element.value.parentElement
    }

    return element.value
  })

  const themeColorsVariable = useCssVar("--theme-colors", container)
  themeColorsVariable.value = Array.from(
    { length: PALETTE_COLOR_COUNT },
    (_, i) => [
      \`--theme-color\${i}\`,
      \`--theme-color\${i}-lighter\`,
      \`--theme-color\${i}-darker\`,
    ]
  )
    .flat()
    .join(", ")

  const styleVariables = Array.from(
    { length: PALETTE_COLOR_COUNT },
    (_, index) => [
      useCssVar(\`--theme-color\${index}\`, container),
      useCssVar(\`--theme-color\${index}-lighter\`, container),
      useCssVar(\`--theme-color\${index}-darker\`, container),
    ]
  )

  watch(
    $$(palette),
    () =>
      palette.forEach(([normal, lighter, darker], index) => {
        styleVariables[index][0].value = normal
        styleVariables[index][1].value = lighter
        styleVariables[index][2].value = darker
      }),
    { immediate: true }
  )
})
<\/script>

<style>
@property --theme-color0-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color0 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color0-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color1-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color1 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color1-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color2-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color2 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color2-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color3-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color3 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color3-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color4-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color4 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color4-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color5-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color5 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color5-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color6-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color6 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color6-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color7-lighter {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color7 {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}

@property --theme-color7-darker {
  syntax: "<color>";
  initial-value: black;
  inherits: true;
}
</style>
`,"/packages/framework/components/index.ts":`export { default as Background } from "./Background.vue"
export { default as Palette } from "./Palette.vue"
export * as provide from "./provide"
`,"/packages/framework/components/provide.ts":`export const PALETTE = Symbol("palette provider")
`,"/packages/framework/composables/background.ts":`import type { MaybeRef } from "@vueuse/core"
import merge from "ts-deepmerge"
import type { PartialDeep } from "type-fest"
import { randomAround } from "@/utilities/math"
import type { RandomJitter } from "@/utilities/math"

type Point = [x: number, y: number]
export type BezierControl = Point
export type BezierControls = [start: BezierControl, end: BezierControl]

export type BezierControlPointsOptions = {
  jitter: {
    offset: RandomJitter
    coefficient: RandomJitter
  }
  amplitude: MaybeRef<number>
  segments: MaybeRef<number>
}

const POINTS_PER_SEGMENT = 2
const BEZIER_OFFSET = 1.157
const bezierControlPointOptions = readonly<BezierControlPointsOptions>({
  jitter: {
    offset: 0.1,
    coefficient: 0.05,
  },
  amplitude: 0.1,
  segments: 4,
})
export function useBezierControlPoints(
  time: MaybeRef<number>,
  options: PartialDeep<BezierControlPointsOptions> = {}
): Readonly<BezierControls[]> {
  const { jitter, amplitude, segments } = merge(
    {},
    bezierControlPointOptions,
    options
  )

  const baseControlPoints: Readonly<[Point, Point][]> = reactiveComputed(() => {
    const angle = (2 * Math.PI) / (unref(segments) * (POINTS_PER_SEGMENT + 1))

    return Array.from(
      { length: unref(segments) },
      (_, i) =>
        Array.from({ length: POINTS_PER_SEGMENT }, (_, j) => [
          Math.cos(angle * (i * (POINTS_PER_SEGMENT + 1) + j + 1)) *
            BEZIER_OFFSET,
          Math.sin(angle * (i * (POINTS_PER_SEGMENT + 1) + j + 1)) *
            BEZIER_OFFSET,
        ]) as [Point, Point]
    )
  })

  const offsets: typeof baseControlPoints = reactiveComputed(() =>
    Array.from({ length: unref(segments) }, (_, index) => {
      const baseValue = (index + 1) / (unref(segments) + 1)
      return [
        [
          randomAround(baseValue - 0.05, jitter.offset),
          randomAround(baseValue - 0.05, jitter.offset),
        ],
        [
          randomAround(baseValue + 0.05, jitter.offset),
          randomAround(baseValue + 0.05, jitter.offset),
        ],
      ]
    })
  )

  const coefficients: typeof baseControlPoints = reactiveComputed(() =>
    Array.from({ length: unref(segments) }, () => [
      [
        randomAround(1, jitter.coefficient),
        randomAround(1, jitter.coefficient),
      ],
      [
        randomAround(1, jitter.coefficient),
        randomAround(1, jitter.coefficient),
      ],
    ])
  )

  return reactiveComputed(() =>
    baseControlPoints
      .map(([start, end], index) => [
        [
          start[0] +
            Math.sin(
              unref(time) * coefficients[index][0][0] + offsets[index][0][0]
            ) *
              unref(amplitude),
          start[1] +
            Math.sin(
              unref(time) * coefficients[index][0][1] + offsets[index][0][1]
            ) *
              unref(amplitude),
        ],
        [
          end[0] +
            Math.sin(
              unref(time) * coefficients[index][1][0] + offsets[index][1][0]
            ) *
              unref(amplitude),
          end[1] +
            Math.sin(
              unref(time) * coefficients[index][1][1] + offsets[index][1][1]
            ) *
              unref(amplitude),
        ],
      ])
      .map(([start, end]) => [
        [(start[0] + 1) / 2, (start[1] + 1) / 2],
        [(end[0] + 1) / 2, (end[1] + 1) / 2],
      ])
  )
}
`,"/packages/framework/types/auto-import.d.ts":`// Generated by 'unplugin-auto-import'
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const asyncComputed: typeof import('@vueuse/core')['asyncComputed']
  const autoResetRef: typeof import('@vueuse/core')['autoResetRef']
  const computed: typeof import('vue')['computed']
  const computedAsync: typeof import('@vueuse/core')['computedAsync']
  const computedEager: typeof import('@vueuse/core')['computedEager']
  const computedInject: typeof import('@vueuse/core')['computedInject']
  const computedWithControl: typeof import('@vueuse/core')['computedWithControl']
  const controlledComputed: typeof import('@vueuse/core')['controlledComputed']
  const controlledRef: typeof import('@vueuse/core')['controlledRef']
  const createApp: typeof import('vue')['createApp']
  const createEventHook: typeof import('@vueuse/core')['createEventHook']
  const createGlobalState: typeof import('@vueuse/core')['createGlobalState']
  const createInjectionState: typeof import('@vueuse/core')['createInjectionState']
  const createReactiveFn: typeof import('@vueuse/core')['createReactiveFn']
  const createSharedComposable: typeof import('@vueuse/core')['createSharedComposable']
  const createUnrefFn: typeof import('@vueuse/core')['createUnrefFn']
  const customRef: typeof import('vue')['customRef']
  const debouncedRef: typeof import('@vueuse/core')['debouncedRef']
  const debouncedWatch: typeof import('@vueuse/core')['debouncedWatch']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const eagerComputed: typeof import('@vueuse/core')['eagerComputed']
  const effectScope: typeof import('vue')['effectScope']
  const extendRef: typeof import('@vueuse/core')['extendRef']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const ignorableWatch: typeof import('@vueuse/core')['ignorableWatch']
  const inject: typeof import('vue')['inject']
  const isDefined: typeof import('@vueuse/core')['isDefined']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const logicAnd: typeof import('@vueuse/core')['logicAnd']
  const logicNot: typeof import('@vueuse/core')['logicNot']
  const logicOr: typeof import('@vueuse/core')['logicOr']
  const makeDestructurable: typeof import('@vueuse/core')['makeDestructurable']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onClickOutside: typeof import('@vueuse/core')['onClickOutside']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onKeyStroke: typeof import('@vueuse/core')['onKeyStroke']
  const onLongPress: typeof import('@vueuse/core')['onLongPress']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onStartTyping: typeof import('@vueuse/core')['onStartTyping']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const pausableWatch: typeof import('@vueuse/core')['pausableWatch']
  const provide: typeof import('vue')['provide']
  const reactify: typeof import('@vueuse/core')['reactify']
  const reactifyObject: typeof import('@vueuse/core')['reactifyObject']
  const reactive: typeof import('vue')['reactive']
  const reactiveComputed: typeof import('@vueuse/core')['reactiveComputed']
  const reactiveOmit: typeof import('@vueuse/core')['reactiveOmit']
  const reactivePick: typeof import('@vueuse/core')['reactivePick']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const refAutoReset: typeof import('@vueuse/core')['refAutoReset']
  const refDebounced: typeof import('@vueuse/core')['refDebounced']
  const refDefault: typeof import('@vueuse/core')['refDefault']
  const refThrottled: typeof import('@vueuse/core')['refThrottled']
  const refWithControl: typeof import('@vueuse/core')['refWithControl']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const syncRef: typeof import('@vueuse/core')['syncRef']
  const syncRefs: typeof import('@vueuse/core')['syncRefs']
  const templateRef: typeof import('@vueuse/core')['templateRef']
  const throttledRef: typeof import('@vueuse/core')['throttledRef']
  const throttledWatch: typeof import('@vueuse/core')['throttledWatch']
  const toRaw: typeof import('vue')['toRaw']
  const toReactive: typeof import('@vueuse/core')['toReactive']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const triggerRef: typeof import('vue')['triggerRef']
  const tryOnBeforeMount: typeof import('@vueuse/core')['tryOnBeforeMount']
  const tryOnBeforeUnmount: typeof import('@vueuse/core')['tryOnBeforeUnmount']
  const tryOnMounted: typeof import('@vueuse/core')['tryOnMounted']
  const tryOnScopeDispose: typeof import('@vueuse/core')['tryOnScopeDispose']
  const tryOnUnmounted: typeof import('@vueuse/core')['tryOnUnmounted']
  const unref: typeof import('vue')['unref']
  const unrefElement: typeof import('@vueuse/core')['unrefElement']
  const until: typeof import('@vueuse/core')['until']
  const useActiveElement: typeof import('@vueuse/core')['useActiveElement']
  const useAsyncQueue: typeof import('@vueuse/core')['useAsyncQueue']
  const useAsyncState: typeof import('@vueuse/core')['useAsyncState']
  const useAttrs: typeof import('vue')['useAttrs']
  const useBase64: typeof import('@vueuse/core')['useBase64']
  const useBattery: typeof import('@vueuse/core')['useBattery']
  const useBreakpoints: typeof import('@vueuse/core')['useBreakpoints']
  const useBroadcastChannel: typeof import('@vueuse/core')['useBroadcastChannel']
  const useBrowserLocation: typeof import('@vueuse/core')['useBrowserLocation']
  const useCached: typeof import('@vueuse/core')['useCached']
  const useClamp: typeof import('@vueuse/core')['useClamp']
  const useClipboard: typeof import('@vueuse/core')['useClipboard']
  const useColorMode: typeof import('@vueuse/core')['useColorMode']
  const useConfirmDialog: typeof import('@vueuse/core')['useConfirmDialog']
  const useCounter: typeof import('@vueuse/core')['useCounter']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVar: typeof import('@vueuse/core')['useCssVar']
  const useCssVars: typeof import('vue')['useCssVars']
  const useCurrentElement: typeof import('@vueuse/core')['useCurrentElement']
  const useCycleList: typeof import('@vueuse/core')['useCycleList']
  const useDark: typeof import('@vueuse/core')['useDark']
  const useDateFormat: typeof import('@vueuse/core')['useDateFormat']
  const useDebounce: typeof import('@vueuse/core')['useDebounce']
  const useDebounceFn: typeof import('@vueuse/core')['useDebounceFn']
  const useDebouncedRefHistory: typeof import('@vueuse/core')['useDebouncedRefHistory']
  const useDeviceMotion: typeof import('@vueuse/core')['useDeviceMotion']
  const useDeviceOrientation: typeof import('@vueuse/core')['useDeviceOrientation']
  const useDevicePixelRatio: typeof import('@vueuse/core')['useDevicePixelRatio']
  const useDevicesList: typeof import('@vueuse/core')['useDevicesList']
  const useDisplayMedia: typeof import('@vueuse/core')['useDisplayMedia']
  const useDocumentVisibility: typeof import('@vueuse/core')['useDocumentVisibility']
  const useDraggable: typeof import('@vueuse/core')['useDraggable']
  const useElementBounding: typeof import('@vueuse/core')['useElementBounding']
  const useElementByPoint: typeof import('@vueuse/core')['useElementByPoint']
  const useElementHover: typeof import('@vueuse/core')['useElementHover']
  const useElementSize: typeof import('@vueuse/core')['useElementSize']
  const useElementVisibility: typeof import('@vueuse/core')['useElementVisibility']
  const useEventBus: typeof import('@vueuse/core')['useEventBus']
  const useEventListener: typeof import('@vueuse/core')['useEventListener']
  const useEventSource: typeof import('@vueuse/core')['useEventSource']
  const useEyeDropper: typeof import('@vueuse/core')['useEyeDropper']
  const useFavicon: typeof import('@vueuse/core')['useFavicon']
  const useFetch: typeof import('@vueuse/core')['useFetch']
  const useFileSystemAccess: typeof import('@vueuse/core')['useFileSystemAccess']
  const useFocus: typeof import('@vueuse/core')['useFocus']
  const useFocusWithin: typeof import('@vueuse/core')['useFocusWithin']
  const useFps: typeof import('@vueuse/core')['useFps']
  const useFullscreen: typeof import('@vueuse/core')['useFullscreen']
  const useGamepad: typeof import('@vueuse/core')['useGamepad']
  const useGeolocation: typeof import('@vueuse/core')['useGeolocation']
  const useIdle: typeof import('@vueuse/core')['useIdle']
  const useInfiniteScroll: typeof import('@vueuse/core')['useInfiniteScroll']
  const useIntersectionObserver: typeof import('@vueuse/core')['useIntersectionObserver']
  const useInterval: typeof import('@vueuse/core')['useInterval']
  const useIntervalFn: typeof import('@vueuse/core')['useIntervalFn']
  const useKeyModifier: typeof import('@vueuse/core')['useKeyModifier']
  const useLastChanged: typeof import('@vueuse/core')['useLastChanged']
  const useLocalStorage: typeof import('@vueuse/core')['useLocalStorage']
  const useMagicKeys: typeof import('@vueuse/core')['useMagicKeys']
  const useManualRefHistory: typeof import('@vueuse/core')['useManualRefHistory']
  const useMediaControls: typeof import('@vueuse/core')['useMediaControls']
  const useMediaQuery: typeof import('@vueuse/core')['useMediaQuery']
  const useMemoize: typeof import('@vueuse/core')['useMemoize']
  const useMemory: typeof import('@vueuse/core')['useMemory']
  const useMounted: typeof import('@vueuse/core')['useMounted']
  const useMouse: typeof import('@vueuse/core')['useMouse']
  const useMouseInElement: typeof import('@vueuse/core')['useMouseInElement']
  const useMousePressed: typeof import('@vueuse/core')['useMousePressed']
  const useMutationObserver: typeof import('@vueuse/core')['useMutationObserver']
  const useNavigatorLanguage: typeof import('@vueuse/core')['useNavigatorLanguage']
  const useNetwork: typeof import('@vueuse/core')['useNetwork']
  const useNow: typeof import('@vueuse/core')['useNow']
  const useOffsetPagination: typeof import('@vueuse/core')['useOffsetPagination']
  const useOnline: typeof import('@vueuse/core')['useOnline']
  const usePageLeave: typeof import('@vueuse/core')['usePageLeave']
  const useParallax: typeof import('@vueuse/core')['useParallax']
  const usePermission: typeof import('@vueuse/core')['usePermission']
  const usePointer: typeof import('@vueuse/core')['usePointer']
  const usePointerSwipe: typeof import('@vueuse/core')['usePointerSwipe']
  const usePreferredColorScheme: typeof import('@vueuse/core')['usePreferredColorScheme']
  const usePreferredDark: typeof import('@vueuse/core')['usePreferredDark']
  const usePreferredLanguages: typeof import('@vueuse/core')['usePreferredLanguages']
  const useRafFn: typeof import('@vueuse/core')['useRafFn']
  const useRefHistory: typeof import('@vueuse/core')['useRefHistory']
  const useResizeObserver: typeof import('@vueuse/core')['useResizeObserver']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useScreenOrientation: typeof import('@vueuse/core')['useScreenOrientation']
  const useScreenSafeArea: typeof import('@vueuse/core')['useScreenSafeArea']
  const useScriptTag: typeof import('@vueuse/core')['useScriptTag']
  const useScroll: typeof import('@vueuse/core')['useScroll']
  const useScrollLock: typeof import('@vueuse/core')['useScrollLock']
  const useSessionStorage: typeof import('@vueuse/core')['useSessionStorage']
  const useShare: typeof import('@vueuse/core')['useShare']
  const useSlots: typeof import('vue')['useSlots']
  const useSpeechRecognition: typeof import('@vueuse/core')['useSpeechRecognition']
  const useSpeechSynthesis: typeof import('@vueuse/core')['useSpeechSynthesis']
  const useStorage: typeof import('@vueuse/core')['useStorage']
  const useStorageAsync: typeof import('@vueuse/core')['useStorageAsync']
  const useStyleTag: typeof import('@vueuse/core')['useStyleTag']
  const useSwipe: typeof import('@vueuse/core')['useSwipe']
  const useTemplateRefsList: typeof import('@vueuse/core')['useTemplateRefsList']
  const useTextSelection: typeof import('@vueuse/core')['useTextSelection']
  const useThrottle: typeof import('@vueuse/core')['useThrottle']
  const useThrottleFn: typeof import('@vueuse/core')['useThrottleFn']
  const useThrottledRefHistory: typeof import('@vueuse/core')['useThrottledRefHistory']
  const useTimeAgo: typeof import('@vueuse/core')['useTimeAgo']
  const useTimeout: typeof import('@vueuse/core')['useTimeout']
  const useTimeoutFn: typeof import('@vueuse/core')['useTimeoutFn']
  const useTimeoutPoll: typeof import('@vueuse/core')['useTimeoutPoll']
  const useTimestamp: typeof import('@vueuse/core')['useTimestamp']
  const useTitle: typeof import('@vueuse/core')['useTitle']
  const useToggle: typeof import('@vueuse/core')['useToggle']
  const useTransition: typeof import('@vueuse/core')['useTransition']
  const useUrlSearchParams: typeof import('@vueuse/core')['useUrlSearchParams']
  const useUserMedia: typeof import('@vueuse/core')['useUserMedia']
  const useVModel: typeof import('@vueuse/core')['useVModel']
  const useVModels: typeof import('@vueuse/core')['useVModels']
  const useVibrate: typeof import('@vueuse/core')['useVibrate']
  const useVirtualList: typeof import('@vueuse/core')['useVirtualList']
  const useWakeLock: typeof import('@vueuse/core')['useWakeLock']
  const useWebNotification: typeof import('@vueuse/core')['useWebNotification']
  const useWebSocket: typeof import('@vueuse/core')['useWebSocket']
  const useWebWorker: typeof import('@vueuse/core')['useWebWorker']
  const useWebWorkerFn: typeof import('@vueuse/core')['useWebWorkerFn']
  const useWindowFocus: typeof import('@vueuse/core')['useWindowFocus']
  const useWindowScroll: typeof import('@vueuse/core')['useWindowScroll']
  const useWindowSize: typeof import('@vueuse/core')['useWindowSize']
  const watch: typeof import('vue')['watch']
  const watchAtMost: typeof import('@vueuse/core')['watchAtMost']
  const watchDebounced: typeof import('@vueuse/core')['watchDebounced']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchIgnorable: typeof import('@vueuse/core')['watchIgnorable']
  const watchOnce: typeof import('@vueuse/core')['watchOnce']
  const watchPausable: typeof import('@vueuse/core')['watchPausable']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
  const watchThrottled: typeof import('@vueuse/core')['watchThrottled']
  const watchWithFilter: typeof import('@vueuse/core')['watchWithFilter']
  const whenever: typeof import('@vueuse/core')['whenever']
}
`,"/packages/framework/types/components.d.ts":`// generated by unplugin-vue-components
// We suggest you to commit this file into source control
// Read more: https://github.com/vuejs/vue-next/pull/3399
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    IFeatherBookOpen: typeof import('~icons/feather/book-open')['default']
    IFeatherFileText: typeof import('~icons/feather/file-text')['default']
    IFeatherHome: typeof import('~icons/feather/home')['default']
    IFeatherInfo: typeof import('~icons/feather/info')['default']
    IFeatherMinusCircle: typeof import('~icons/feather/minus-circle')['default']
    IFeatherPlusCircle: typeof import('~icons/feather/plus-circle')['default']
    IVscodeIconsDefaultFolder: typeof import('~icons/vscode-icons/default-folder')['default']
    NBreadcrumb: typeof import('naive-ui')['NBreadcrumb']
    NBreadcrumbItem: typeof import('naive-ui')['NBreadcrumbItem']
    NButton: typeof import('naive-ui')['NButton']
    NCard: typeof import('naive-ui')['NCard']
    NCheckbox: typeof import('naive-ui')['NCheckbox']
    NColorPicker: typeof import('naive-ui')['NColorPicker']
    NForm: typeof import('naive-ui')['NForm']
    NFormItem: typeof import('naive-ui')['NFormItem']
    NH2: typeof import('naive-ui')['NH2']
    NIcon: typeof import('naive-ui')['NIcon']
    NIconWrapper: typeof import('naive-ui')['NIconWrapper']
    NInput: typeof import('naive-ui')['NInput']
    NSelect: typeof import('naive-ui')['NSelect']
    NSlider: typeof import('naive-ui')['NSlider']
    NSpin: typeof import('naive-ui')['NSpin']
    NSwitch: typeof import('naive-ui')['NSwitch']
    NTable: typeof import('naive-ui')['NTable']
    NTabPane: typeof import('naive-ui')['NTabPane']
    NTabs: typeof import('naive-ui')['NTabs']
    NTree: typeof import('naive-ui')['NTree']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}

export {}
`,"/packages/home/components/AppTile.vue":`<template lang="pug">
router-link.inline-block(:to="href")
  n-card.app-tile.w-min(:title="title" :hoverable="true")
    template(#header-extra v-if="$slots.icon")
      n-icon.ml-4(size="24")
        slot(name="icon")
    slot
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  href: string
}>()
<\/script>

<style lang="sass" scoped>
.app-tile
  min-width: 15rem
</style>
`,"/packages/home/components/index.ts":`export { default as AppTile } from "./AppTile.vue"
`,"/packages/home/pages/index.vue":`<template lang="pug">
.index.p-4.w-full
  .apps
    app-tile(title="Fairytome" href="/fairytome")
      template(#icon): i-feather-book-open
      | Storybook-like component playground
    app-tile(title="About" href="/about")
      template(#icon): i-feather-info
      | Information about this page
</template>

<script lang="ts" setup>
import { AppTile } from "@/home/components"
<\/script>

<style lang="sass" scoped>
.apps
  > *
    margin-right: 1rem
    margin-bottom: 1rem
</style>
`,"/packages/utilities/composables/component.ts":`import { ref, onMounted, onBeforeUnmount, type Ref } from "vue"

export function useIsAlive(): Ref<boolean> {
  const isAlive = ref(false)

  onMounted(() => {
    isAlive.value = true
  })

  onBeforeUnmount(() => {
    isAlive.value = false
  })

  return isAlive
}
`,"/packages/utilities/vite/index.ts":`import * as pages from "./pages"
import * as plugins from "./plugins"

export default { pages, plugins }
`,"/packages/utilities/vite/pages.ts":`import glob from "glob"

export function fetchDirs(basePackage = "home") {
  const pageFolders = glob.sync("packages/*/pages")
  return pageFolders.map((folder: string) => {
    const packageName = folder.split("/")[1]

    return {
      dir: folder,
      baseRoute: packageName === basePackage ? "" : packageName,
    }
  })
}
`,"/packages/framework/assets/public/favicon.ico":"\0\0\0\0  \0\0\0 \0\uFFFD\0\0\0\0\0(\0\0\0 \0\0\0@\0\0\0\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA3\uFFFD\uFFFDA3\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\v\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\v\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAZ\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAZ\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\u0243\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u0243\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAz\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAz\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA.\uFFFD\uFFFDA\u07C3\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u07C3\uFFFDA.\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAH\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAH\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAf\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAf\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA \uFFFD\uFFFDA\u0483\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u0483\uFFFDA \uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD|\uFFFD?\uFFFD|\uFFFD?\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA7\uFFFD\uFFFDA\u60F8A\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDjl9\uFFFDjl9\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u60F8A7\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA	\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDw\uFFFD=\uFFFD_L5\uFFFD_L5\uFFFDw\uFFFD=\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA	\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAR\uFFFD\uFFFDA\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFD@\uFFFDfa8\uFFFD^H5\uFFFD^H5\uFFFDfa8\uFFFD\uFFFD\uFFFD@\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDAR\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\x83\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDr\uFFFD<\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFDr\uFFFD<\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\x83\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDAq\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD}\uFFFD?\uFFFDcW7\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDcW7\uFFFD}\uFFFD?\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAq\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA(\uFFFD\uFFFDA\u0683\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDmv:\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDmv:\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u0683\uFFFDA(\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDy\uFFFD>\uFFFD`P6\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFD`P6\uFFFDy\uFFFD>\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA@\uFFFD\uFFFDA\uC0F8A\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFD@\uFFFDii9\uFFFD]G5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD]G5\uFFFDii9\uFFFD\uFFFD\uFFFD@\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uC0F8A@\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\r\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDu\uFFFD=\uFFFD_K5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_K5\uFFFDu\uFFFD=\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\r\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA]\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\x7F\uFFFD@\uFFFDe]7\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^J5\uFFFD^J5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDe]7\uFFFD\x7F\uFFFD@\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA]\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\x1B\uFFFD\uFFFDA\u0303\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDp\x7F;\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_L5n_L5n^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFDp\x7F;\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u0303\uFFFDA\x1B\uFFFD\uFFFDA\0\0\0\0\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA}\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD|\uFFFD?\uFFFDbT6\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_J5\uFFFDaP6aP6_J5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDbT6\uFFFD|\uFFFD?\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA}\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA\0\uFFFD\uFFFDA/\uFFFD\uFFFDA\u10F8A\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDlq9\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_L5P^H5\0^H5\0_L5P^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDlq9\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u10F8A/\uFFFD\uFFFDA\0\uFFFD\uFFFDA\x07\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFDx\uFFFD=\uFFFD`N6\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_K5\uFFFDbT7\baQ6\0aQ6\0bT7\b_K5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD`N6\uFFFDx\uFFFD=\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\x07\uFFFD\uFFFDAW\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFD@\uFFFDgd8\uFFFD^H5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^J5\uFFFD`M65_K5\0jf9\0jf9\0_K5\0`M65^J5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^H5\uFFFDgd8\uFFFD\uFFFD\uFFFD@\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDAW\uFFFD\uFFFDA\uFFFD\uFFFD\uFFFDA\u0203\uFFFDA\u0183\uFFFDA\u0183\uFFFDA\u0184\uFFFDA\uFFFDv\uFFFD=\uFFFD_K5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_K5uha9bS7\0\0\0\0\0\0\0\0\0bS7\0ha9_K5u^I5\uFFFD^I5\uFFFD^I5\uFFFD^I5\uFFFD_K5\uFFFDv\uFFFD=\u0184\uFFFDA\u0183\uFFFDA\u0183\uFFFDA\u0183\uFFFDA\u0183\uFFFDA\u0203\uFFFDA\uFFFD\uFFFD\uFFFDA\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\rlr:\r\\D4\r^I5\r^I5\r^I5\r^I5\r`M6^H5\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0^H5\0`M6^I5\r^I5\r^I5\r^I5\r\\D4\rlr9\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\r\uFFFD\uFFFDA\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\x7F\uFFFD\uFFFD\uFFFD?\uFFFD\uFFFD\uFFFD?\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\x07\uFFFD\uFFFD\uFFFD\x07\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\0\0\uFFFD\uFFFD\0\0\uFFFD\uFFFD\0\0\x7F\uFFFD\0\0\x7F\uFFFD\0\0?\uFFFD\0\0?\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\x07\uFFFD\0\0\x07\uFFFD\0\0\uFFFD\0\0\uFFFD\uFFFD\0\uFFFD\0\0\uFFFD\0\0\uFFFD\0\0\x07\uFFFD\0\uFFFD\uFFFD\uFFFD\uFFFD","/packages/framework/components/background/SvgBlob.entry.vue":`<template lang="pug">
svg-blob(:color="colors")
</template>

<script lang="ts" setup>
import SvgBlob from "./SvgBlob.vue"

const props = defineProps<{ themeColorIndexOffset: number }>()
const index = $computed(() => props.themeColorIndexOffset % PALETTE_COLOR_COUNT)

const colors = $computed(() => [
  \`var(--theme-color\${index}-lighter\`,
  \`var(--theme-color\${index}\`,
  \`var(--theme-color\${index}-darker\`,
])
<\/script>

<script lang="ts">
import { createEntry } from "@/fairytome/entry"
import { PALETTE_COLOR_COUNT } from "@/framework/constants"
import SvgBlobComponent from "./SvgBlob.vue"

export const entry = createEntry<SvgBlobComponent>({
  component: SvgBlobComponent,
  controls: {
    themeColorIndexOffset: {
      type: "range",
      label: "Theme color index offset",
      min: 0,
      max: PALETTE_COLOR_COUNT,
      step: 1,
      initial: 0,
    },
    speedFactor: {
      type: "range",
      label: "Speed factor",
      min: -5,
      max: 5,
      step: 0.05,
      initial: 1,
    },
    rotationSpeed: {
      type: "range",
      label: "Rotation speed",
      min: 0,
      max: 10,
      step: 0.05,
      initial: 0,
    },
    amplitudeModifier: {
      type: "range",
      label: "Amplitude modifier",
      min: 0,
      max: 10,
      step: 0.05,
      initial: 1,
    },
    segments: {
      type: "range",
      label: "Segments",
      min: 2,
      max: 32,
      step: 1,
      initial: 4,
    },
    showDebug: {
      type: "checkbox",
      label: "Show debug utilities",
      initial: false,
    },
  },
})
<\/script>
`,"/packages/framework/components/background/SvgBlob.vue":`<template lang="pug">
svg.overflow-visible(viewBox="0 0 1 1" :class="{ debug: showDebug }")
  defs(v-if="Array.isArray(color)")
    linearGradient(:id="\`gradient-\${id}\`")
      stop(
        v-for="(stop, index) in color"
        :offset="index / (color.length - 1)"
        :stop-color="stop"
      )
  defs(v-else)
    linearGradient(:id="\`gradient-\${id}\`")
      stop(:stop-color="color")
  g.blob(:transform="\`scale(\${scale}) rotate(\${rotation})\`")
    path(stroke-width="0.05" :d="pathDefinition")
  g(v-if="showDebug" stroke-width="0.0025")
    g(:transform="\`scale(\${scale})\`")
      svg-debugger(:path="pathDefinition")
    foreignObject(width="1" height="1")
      equation-plotter(:points="controlPoints.flat(1)" :scale="scale")
    svg-ruler
</template>

<script lang="ts" setup>
import { useTimestamp } from "@vueuse/core"
import { v4 as uuid } from "uuid"
import { computed, ref, watch } from "vue"
import { useBezierControlPoints } from "@/framework/composables/background"
import {
  EquationPlotter,
  SvgDebugger,
  SvgRuler,
} from "@/utilities/components/svg"
import { useIsAlive } from "@/utilities/composables/component"

const id = uuid()
const isAlive = useIsAlive()
const scale = ref(0.75)

const props = withDefaults(
  defineProps<{
    timestamp?: number
    speedFactor?: number
    rotationSpeed?: number
    amplitudeModifier?: number
    showDebug?: boolean
    segments?: number
    color: string | string[]
  }>(),
  {
    speedFactor: 1,
    rotationSpeed: 0,
    amplitudeModifier: 1,
    segments: 4,
    showDebug: false,
  }
)

const timestamp = computed<number>(() => {
  if (!isAlive.value) {
    return 0
  }

  if (typeof props.timestamp === "number") {
    return props.timestamp
  }

  return useTimestamp().value
})
const progress = ref(0)
const rotation = ref(0)
const controlPoints = useBezierControlPoints(progress, {
  jitter: { offset: Math.PI * 2, coefficient: 0.3 },
  amplitude: computed(() => 0.05 * props.amplitudeModifier),
  segments: toRef(props, "segments"),
})

watch(timestamp, (current, previous) => {
  progress.value +=
    ((current - previous) / 1000) * Math.pow(2, props.speedFactor - 1)
  rotation.value += ((current - previous) / 1000) * props.rotationSpeed ** 2
})

const segmentPoints = $computed(() =>
  controlPoints.map((controls, index) => {
    const previous =
      controlPoints[index === 0 ? controlPoints.length - 1 : index - 1]
    return [
      (controls[0][0] + previous[1][0]) / 2,
      (controls[0][1] + previous[1][1]) / 2,
    ]
  })
)

const start = $computed(() => segmentPoints[0])
const pathDefinition = $computed(() => [
  \`M \${start[0]} \${start[1]}\`,
  ...controlPoints.map(
    (controls, index) =>
      \`C \${controls[0][0]} \${controls[0][1]} \${controls[1][0]} \${
        controls[1][1]
      } \${segmentPoints[(index + 1) % segmentPoints.length][0]} \${
        segmentPoints[(index + 1) % segmentPoints.length][1]
      }\`
  ),
])

const fill = computed(() => \`url(#gradient-\${id})\`)
let angle = $ref(0)
const pos = $computed(() => ({
  sin: Math.sin((angle * Math.PI * 2) / 360) * 1.15,
  cos: Math.cos((angle * Math.PI * 2) / 360) * 1.15,
}))

defineExpose({ angle, pos })
<\/script>

<style lang="sass" scoped>
svg
  filter: blur(var(--blur, 0))

  *
    transform-origin: center center

  &.debug
    border: 1px solid black

    .blob
      &:not(.debug)
        opacity: .25

      &.debug
        fill: none

        .bottom.right
          stroke: red

        .bottom.left
          stroke: blue

        .top.left
          stroke: green

        .top.right
          stroke: yellow

  > .blob
    transition: opacity .5s

    path
      fill: v-bind(fill)
</style>
`,"/packages/framework/components/background/index.ts":`export { default as SvgBlob } from "./SvgBlob.vue"
`,"/packages/framework/components/transitions/Fade.vue":`<template lang="pug">
.transition-fade(
  :style="{ '--transition-fade-duration': duration }"
  v-bind="$attrs"
)
  transition(name="fade" v-bind="transition")
    slot
</template>

<script lang="ts" setup>
import type { BaseTransitionProps } from "vue"

defineProps<{ duration?: string; transition?: BaseTransitionProps }>()
<\/script>

<style lang="sass" scoped>
.transition-fade
  > :deep(.fade-enter-active), :deep(.fade-leave-active)
    transition: opacity var(--transition-fade-duration, 1s)

  > :deep(.fade-enter-from), > :deep(.fade-leave-to)
    opacity: 0
</style>
`,"/packages/framework/components/transitions/index.ts":`export { default as Fade } from "./Fade.vue"
`,"/packages/framework/components/ui/BreadcrumbItem.vue":`<template lang="pug">
n-breadcrumb-item(
  :clickable="typeof href !== 'undefined'"
  @click="$router.push(href)"
)
  n-icon.mr-1: slot(name="icon")
  slot
</template>

<script lang="ts" setup>
defineProps<{ href?: string }>()
<\/script>
`,"/packages/framework/components/ui/index.ts":`export { default as BreadcrumbItem } from "./BreadcrumbItem.vue"
`,"/packages/utilities/components/svg/Debugger.vue":`<template lang="pug">
g
  curve(v-for="curve in curves" v-bind="curve")
</template>

<script lang="ts" setup>
import { parseSVG } from "svg-path-parser"
import { PALETTE } from "@/framework/components/provide"
import { Curve } from "./debug"

const props = defineProps<{ path: string | string[] }>()
const palette = $(inject<[string, string, string][]>(PALETTE))

const commands = $computed(() =>
  parseSVG(Array.isArray(props.path) ? props.path.join(" ") : props.path)
)

const curves = $computed(() =>
  commands.flatMap((command, index) => {
    if (command.command !== "curveto") {
      return []
    }

    const previous = commands[index - 1]

    if (!("x" in previous) || !("y" in previous)) {
      return []
    }

    return [
      {
        start: [previous.x, previous.y],
        end: [command.x, command.y],
        controlPoints: [
          [command.x1, command.y1],
          [command.x2, command.y2],
        ],
        themeColorIndex: index % palette.length,
      },
    ]
  })
)
<\/script>
`,"/packages/utilities/components/svg/EquationPlotter.vue":`<template lang="pug">
canvas.w-full.h-full(ref="canvas" :width="width" :height="height")
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ points: [number, number][]; scale?: number }>(),
  { scale: 1 }
)
const { points, scale } = $(props)
const canvas = ref<HTMLCanvasElement>()

const { width, height } = $(useElementBounding(canvas))
const backup = $computed(() => new OffscreenCanvas(width, height))

let ctx: CanvasRenderingContext2D | null = null
let backupCtx: OffscreenCanvasRenderingContext2D | null = null
function render() {
  if (ctx === null) {
    if (typeof canvas.value === "undefined") {
      return
    }

    ctx = canvas.value.getContext("2d")
    backupCtx = backup.getContext("2d")
  }

  if (
    ctx === null ||
    backupCtx === null ||
    typeof canvas.value === "undefined"
  ) {
    return
  }

  backupCtx.clearRect(0, 0, width, height)
  backupCtx.drawImage(canvas.value, 0, 0)

  ctx.save()
  ctx.clearRect(0, 0, width, height)
  ctx.globalAlpha = 0.975
  ctx.drawImage(backup, 0, 0)

  ctx.translate(width / 2, height / 2)
  ctx.scale(scale, scale)
  ctx.translate(-width / 2, -height / 2)

  ctx.globalAlpha = 1
  ctx.fillStyle = "#000"
  points.forEach(([x, y]) => {
    ctx?.fillRect(x * width, y * height, 1, 1)
  })
  ctx.restore()
}

watch(
  () => points.length,
  () => {
    ctx?.clearRect(0, 0, width, height)
  }
)

useRafFn(render)
<\/script>
`,"/packages/utilities/components/svg/Ruler.vue":`<template lang="pug">
g(stroke-width=".25%" stroke="black" opacity=".5")
  g.top
    g(v-for="index in 9" :transform="\`translate(\${index / 10}, 0)\`")
      line(x1="0" x2="0" y1="0" y2="0.01")
      text(transform="translate(-0.02, 0.04) scale(0.002)") {{ index / 10 }}
  g.bottom
    g(v-for="index in 9" :transform="\`translate(\${index / 10}, 0.99)\`")
      line(x1="0" x2="0" y1="0" y2="0.01")
      text(transform="translate(-0.02, -0.01) scale(0.002)") {{ index / 10 }}
  g.left
    g(v-for="index in 9" :transform="\`translate(0, \${index / 10})\`")
      line(x1="0" x2="0.01" y1="0" y2="0")
      text(transform="translate(0.015, 0.01) scale(0.002)") {{ index / 10 }}
  g.right
    g(v-for="index in 9" :transform="\`translate(0.99, \${index / 10})\`")
      line(x1="0" x2="0.01" y1="0" y2="0")
      text(transform="translate(-0.04, 0.01) scale(0.002)") {{ index / 10 }}
</template>
`,"/packages/utilities/components/svg/index.ts":`export { default as SvgDebugger } from "./Debugger.vue"
export { default as EquationPlotter } from "./EquationPlotter.vue"
export { default as SvgRuler } from "./Ruler.vue"
`,"/packages/utilities/vite/plugins/index.ts":`export { ViteGenerateIndex } from "./vite-generate-index/plugin"
`,"/packages/utilities/components/svg/debug/Curve.vue":`<template lang="pug">
defs
  linearGradient(
    :id="\`gradient-\${id}\`"
    :x1="start[0]"
    :x2="end[0]"
    :y1="start[1]"
    :y2="end[1]"
  )
    stop(offset="0%" :stop-color="colors.lighter")
    stop(offset="50%" :stop-color="colors.base")
    stop(offset="100%" :stop-color="colors.darker")
g(fill="none")
  line(
    :x1="start[0] - POINT_CROSS_LINE_DISTANCE"
    :x2="start[0] + POINT_CROSS_LINE_DISTANCE"
    :y1="start[1] - POINT_CROSS_LINE_DISTANCE"
    :y2="start[1] + POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.darker"
  )
  line(
    :x1="end[0] - POINT_CROSS_LINE_DISTANCE"
    :x2="end[0] + POINT_CROSS_LINE_DISTANCE"
    :y1="end[1] + POINT_CROSS_LINE_DISTANCE"
    :y2="end[1] - POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.lighter"
  )
  path(:d="path" :stroke="\`url(#gradient-\${id})\`")
  path(
    :d="[path, \`L 0.5 0.5\`]"
    :fill="\`url(#gradient-\${id})\`"
    fill-opacity="0.2"
  )
  circle(
    :cx="controlPoints[0][0]"
    :cy="controlPoints[0][1]"
    :r="POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.darker"
  )
  circle(
    :cx="controlPoints[1][0]"
    :cy="controlPoints[1][1]"
    :r="POINT_CROSS_LINE_DISTANCE"
    :stroke="colors.lighter"
  )
  line(
    :x1="start[0]"
    :y1="start[1]"
    :x2="controlPoints[0][0]"
    :y2="controlPoints[0][1]"
    :stroke="colors.darker"
  )
  line(
    :x1="end[0]"
    :y1="end[1]"
    :x2="controlPoints[1][0]"
    :y2="controlPoints[1][1]"
    :stroke="colors.lighter"
  )
</template>

<script lang="ts" setup>
import { v4 as uuid } from "uuid"

const id = uuid()

const props = defineProps<{
  start: [number, number]
  end: [number, number]
  controlPoints: [[number, number], [number, number]]
  themeColorIndex: number
}>()

const POINT_CROSS_LINE_DISTANCE = 0.01

const path = $computed(() => [
  \`M \${props.start[0]} \${props.start[1]}\`,
  \`C \${props.controlPoints[0][0]} \${props.controlPoints[0][1]}\`,
  \`\${props.controlPoints[1][0]} \${props.controlPoints[1][1]}\`,
  \`\${props.end[0]} \${props.end[1]}\`,
])

const colors = $computed(() => ({
  base: \`var(--theme-color\${props.themeColorIndex})\`,
  lighter: \`var(--theme-color\${props.themeColorIndex}-lighter)\`,
  darker: \`var(--theme-color\${props.themeColorIndex}-darker)\`,
}))
<\/script>
`,"/packages/utilities/components/svg/debug/index.ts":`export { default as Curve } from "./Curve.vue"
`,"/packages/utilities/vite/plugins/vite-generate-index/format.ts":`import prettier from "prettier"

const prettierConfig = prettier
  .resolveConfigFile()
  .then((path) => (path === null ? null : prettier.resolveConfig(path)))

export async function format(source: string) {
  const options = await prettierConfig

  if (options === null) {
    throw new Error("Couldn't fetch prettier config")
  }

  return prettier.format(source, { ...options, parser: "typescript" })
}
`,"/packages/utilities/vite/plugins/vite-generate-index/generate.ts":`import camelCase from "lodash/camelCase"
import fs from "node:fs/promises"
import { basename } from "node:path"
import { format } from "./format"
import type { PluginOptions } from "./options"
import {
  fetchFileInformation,
  fetchFilesForDir,
  fetchRelevantDirs,
} from "./scan"
import type { FileInformation } from "./scan"

export async function generateIndexFiles(
  options: PluginOptions
): Promise<void> {
  const dirs = await fetchRelevantDirs(options.dirs)
  dirs.forEach((dir) => generateIndexFile(dir, options))
}

async function generateIndexFile(
  dir: string,
  options: Omit<PluginOptions, "dirs">
): Promise<void> {
  const indexFilename = \`index.\${options.extension}\`

  const files = await fetchFilesForDir(
    dir,
    options.includeGlobPattern,
    options.excludeFiles
  )

  const relevantFiles = files.filter(
    (file) => ![indexFilename].includes(basename(file))
  )

  const filesWithExports = await Promise.all(
    relevantFiles.map((file) => fetchFileInformation(file))
  )

  if (
    filesWithExports.length === 0 ||
    !(await shouldUpdate(
      \`\${dir}/\${indexFilename}\`,
      filesWithExports.map((file) => file.path)
    ))
  ) {
    return
  }

  const source = filesWithExports.map(fileInformationToExport).join("\\n")
  const formattedSource = await format(source)

  await fs.writeFile(\`\${dir}/index.\${options.extension}\`, formattedSource)
}

function fileInformationToExport({ exports, file }: FileInformation): string {
  if (exports.length === 1 && exports[0].type === "default") {
    return \`export { default as \${file.name} } from "./\${file.basename}"\`
  }

  const importPath = file.extension.includes("ts") ? file.name : file.basename

  return \`export * as \${camelCase(file.name)} from "./\${importPath}"\`
}

async function shouldUpdate(
  indexPath: string,
  relevantFiles: string[]
): Promise<boolean> {
  try {
    const indexStat = await fs.stat(indexPath)

    const fileStats = await Promise.all(
      relevantFiles.map((path) => fs.stat(path))
    )

    return fileStats.some((fileStat) => fileStat.mtimeMs > indexStat.mtimeMs)
  } catch {
    return true
  }
}
`,"/packages/utilities/vite/plugins/vite-generate-index/options.ts":`export type PluginOptions = {
  dirs: string[]
  extension: "js" | "ts" | string
  includeGlobPattern: string
  excludeFiles: RegExp[]
}

export const defaults: PluginOptions = {
  dirs: [],
  extension: "ts",
  includeGlobPattern: "*.*",
  excludeFiles: [],
}
`,"/packages/utilities/vite/plugins/vite-generate-index/plugin.ts":`import merge from "ts-deepmerge"
import type { Plugin } from "vite"
import { generateIndexFiles } from "./generate"
import type { PluginOptions } from "./options"
import { defaults } from "./options"

const NAME = "vite-generate-index"

export function ViteGenerateIndex(options?: Partial<PluginOptions>): Plugin {
  const mergedOptions = merge(defaults, options ?? {})

  return {
    name: NAME,
    buildStart() {
      generateIndexFiles(mergedOptions)
    },
    handleHotUpdate(): void {
      generateIndexFiles(mergedOptions)
    },
  }
}
`,"/packages/utilities/vite/plugins/vite-generate-index/scan.ts":`import glob from "glob"
import { findExports } from "mlly"
import type { ESMExport } from "mlly"
import fs from "node:fs/promises"
import { basename } from "node:path"
import { extname } from "path"
import type { PluginOptions } from "./options"

function globAsync(pattern: string): Promise<string[]> {
  return new Promise((resolve, reject) =>
    glob(pattern, (error, files) => {
      if (error !== null) {
        return reject(error)
      }

      return resolve(files)
    })
  )
}

export async function fetchRelevantDirs(
  dirs: PluginOptions["dirs"]
): Promise<string[]> {
  const results = await Promise.all(dirs.map((pattern) => globAsync(pattern)))
  return results.flat()
}

export async function fetchFilesForDir(
  path: string,
  pattern: PluginOptions["includeGlobPattern"],
  exclude: PluginOptions["excludeFiles"]
): Promise<string[]> {
  const globResult = await globAsync(\`\${path}/\${pattern}\`)
  return globResult.filter(
    (result) => !exclude.some((regex) => regex.test(result))
  )
}

function getAdditionalExports(filename: string): ESMExport[] {
  if (extname(filename) === ".vue") {
    return [{ type: "default", code: "", start: -1, end: -1, names: [] }]
  }

  return []
}

export async function scanExports(filepath: string): Promise<ESMExport[]> {
  const code = await fs
    .readFile(filepath)
    .then((buffer) => buffer.toString("utf-8"))
  const exports = findExports(code)

  return [...exports, ...getAdditionalExports(filepath)]
}

export type FileInformation = {
  path: string
  exports: ESMExport[]
  file: {
    basename: string
    name: string
    extension: string
  }
}
export async function fetchFileInformation(
  file: string
): Promise<FileInformation> {
  const exports = await scanExports(file)
  const extension = extname(file)

  return {
    path: file,
    exports,
    file: {
      basename: basename(file),
      name: basename(file, extension),
      extension: extension.slice(1),
    },
  }
}
`},pd=[...Object.keys(ld)];function ud(){return pd}const md=Gn(new Worker("/assets/source.worker.b84d78ee.js"));async function fd(n){return md.fetchSource(n)}function Mn(n,e){const a=n==="file"?ea(e):Rn(e);return()=>V(Pn,{size:"1.25rem"},{default:()=>V(a)})}function bd(){const e=ud().reduce((a,t)=>{var d;const r=t.split("/").slice(1),o=r.slice(0,-1),c=o.reduce((l,u,f)=>{const b=`/${o.slice(0,f+1).join("/")}`,m=l.find(y=>y.key===b);if(typeof m=="undefined"||!("children"in m)){const y={key:b,label:`${u}/`,children:[],prefix:Mn("folder",b)};return l.push(y),y.children}return m.children},a),i=(d=r.at(-1))!=null?d:t;return c.push({key:t,label:i,prefix:Mn("file",t)}),a},[{key:"/.yarn",label:".yarn",children:[],prefix:Mn("folder","/.yarn")}]);return na(e),e}function na(n){n.sort((e,a)=>Wn(e)&&Ve(a)?1:Ve(e)&&Wn(a)?-1:e.label.localeCompare(a.label)),n.forEach(e=>{!Ve(e)||na(e.children)})}function hd(n,e){const a=n.split("/").slice(1);return a.reduce((t,r,o)=>{const c="/"+a.slice(0,o+1).join("/"),i=t.find(d=>d.key===c);return typeof i=="undefined"||!("children"in i)?t:i.children},e)}function Ve(n){return"children"in n}function Wn(n){return!Ve(n)}const gd={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_d=_("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[_("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),_("path",{d:"M14 2v6h6m-4 5H8m8 4H8m2-8H8"})],-1),vd=[_d];function yd(n,e){return O(),C("svg",gd,vd)}var kd={name:"feather-file-text",render:yd},aa={exports:{}};(function(n){var e=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(t){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,c={},i={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function p(h){return h instanceof d?new d(h.type,p(h.content),h.alias):Array.isArray(h)?h.map(p):h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(p){return Object.prototype.toString.call(p).slice(8,-1)},objId:function(p){return p.__id||Object.defineProperty(p,"__id",{value:++o}),p.__id},clone:function p(h,v){v=v||{};var j,k;switch(i.util.type(h)){case"Object":if(k=i.util.objId(h),v[k])return v[k];j={},v[k]=j;for(var E in h)h.hasOwnProperty(E)&&(j[E]=p(h[E],v));return j;case"Array":return k=i.util.objId(h),v[k]?v[k]:(j=[],v[k]=j,h.forEach(function(I,R){j[R]=p(I,v)}),j);default:return h}},getLanguage:function(p){for(;p;){var h=r.exec(p.className);if(h)return h[1].toLowerCase();p=p.parentElement}return"none"},setLanguage:function(p,h){p.className=p.className.replace(RegExp(r,"gi"),""),p.classList.add("language-"+h)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(j){var p=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(j.stack)||[])[1];if(p){var h=document.getElementsByTagName("script");for(var v in h)if(h[v].src==p)return h[v]}return null}},isActive:function(p,h,v){for(var j="no-"+h;p;){var k=p.classList;if(k.contains(h))return!0;if(k.contains(j))return!1;p=p.parentElement}return!!v}},languages:{plain:c,plaintext:c,text:c,txt:c,extend:function(p,h){var v=i.util.clone(i.languages[p]);for(var j in h)v[j]=h[j];return v},insertBefore:function(p,h,v,j){j=j||i.languages;var k=j[p],E={};for(var I in k)if(k.hasOwnProperty(I)){if(I==h)for(var R in v)v.hasOwnProperty(R)&&(E[R]=v[R]);v.hasOwnProperty(I)||(E[I]=k[I])}var z=j[p];return j[p]=E,i.languages.DFS(i.languages,function(w,F){F===z&&w!=p&&(this[w]=E)}),E},DFS:function p(h,v,j,k){k=k||{};var E=i.util.objId;for(var I in h)if(h.hasOwnProperty(I)){v.call(h,I,h[I],j||I);var R=h[I],z=i.util.type(R);z==="Object"&&!k[E(R)]?(k[E(R)]=!0,p(R,v,null,k)):z==="Array"&&!k[E(R)]&&(k[E(R)]=!0,p(R,v,I,k))}}},plugins:{},highlightAll:function(p,h){i.highlightAllUnder(document,p,h)},highlightAllUnder:function(p,h,v){var j={callback:v,container:p,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",j),j.elements=Array.prototype.slice.apply(j.container.querySelectorAll(j.selector)),i.hooks.run("before-all-elements-highlight",j);for(var k=0,E;E=j.elements[k++];)i.highlightElement(E,h===!0,j.callback)},highlightElement:function(p,h,v){var j=i.util.getLanguage(p),k=i.languages[j];i.util.setLanguage(p,j);var E=p.parentElement;E&&E.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(E,j);var I=p.textContent,R={element:p,language:j,grammar:k,code:I};function z(F){R.highlightedCode=F,i.hooks.run("before-insert",R),R.element.innerHTML=R.highlightedCode,i.hooks.run("after-highlight",R),i.hooks.run("complete",R),v&&v.call(R.element)}if(i.hooks.run("before-sanity-check",R),E=R.element.parentElement,E&&E.nodeName.toLowerCase()==="pre"&&!E.hasAttribute("tabindex")&&E.setAttribute("tabindex","0"),!R.code){i.hooks.run("complete",R),v&&v.call(R.element);return}if(i.hooks.run("before-highlight",R),!R.grammar){z(i.util.encode(R.code));return}if(h&&t.Worker){var w=new Worker(i.filename);w.onmessage=function(F){z(F.data)},w.postMessage(JSON.stringify({language:R.language,code:R.code,immediateClose:!0}))}else z(i.highlight(R.code,R.grammar,R.language))},highlight:function(p,h,v){var j={code:p,grammar:h,language:v};if(i.hooks.run("before-tokenize",j),!j.grammar)throw new Error('The language "'+j.language+'" has no grammar.');return j.tokens=i.tokenize(j.code,j.grammar),i.hooks.run("after-tokenize",j),d.stringify(i.util.encode(j.tokens),j.language)},tokenize:function(p,h){var v=h.rest;if(v){for(var j in v)h[j]=v[j];delete h.rest}var k=new f;return b(k,k.head,p),u(p,k,h,k.head,0),y(k)},hooks:{all:{},add:function(p,h){var v=i.hooks.all;v[p]=v[p]||[],v[p].push(h)},run:function(p,h){var v=i.hooks.all[p];if(!(!v||!v.length))for(var j=0,k;k=v[j++];)k(h)}},Token:d};t.Prism=i;function d(p,h,v,j){this.type=p,this.content=h,this.alias=v,this.length=(j||"").length|0}d.stringify=function p(h,v){if(typeof h=="string")return h;if(Array.isArray(h)){var j="";return h.forEach(function(z){j+=p(z,v)}),j}var k={type:h.type,content:p(h.content,v),tag:"span",classes:["token",h.type],attributes:{},language:v},E=h.alias;E&&(Array.isArray(E)?Array.prototype.push.apply(k.classes,E):k.classes.push(E)),i.hooks.run("wrap",k);var I="";for(var R in k.attributes)I+=" "+R+'="'+(k.attributes[R]||"").replace(/"/g,"&quot;")+'"';return"<"+k.tag+' class="'+k.classes.join(" ")+'"'+I+">"+k.content+"</"+k.tag+">"};function l(p,h,v,j){p.lastIndex=h;var k=p.exec(v);if(k&&j&&k[1]){var E=k[1].length;k.index+=E,k[0]=k[0].slice(E)}return k}function u(p,h,v,j,k,E){for(var I in v)if(!(!v.hasOwnProperty(I)||!v[I])){var R=v[I];R=Array.isArray(R)?R:[R];for(var z=0;z<R.length;++z){if(E&&E.cause==I+","+z)return;var w=R[z],F=w.inside,H=!!w.lookbehind,fe=!!w.greedy,ze=w.alias;if(fe&&!w.pattern.global){var le=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,le+"g")}for(var ee=w.pattern||w,K=j.next,pe=k;K!==h.tail&&!(E&&pe>=E.reach);pe+=K.value.length,K=K.next){var Ae=K.value;if(h.length>p.length)return;if(!(Ae instanceof d)){var ue=1,te;if(fe){if(te=l(ee,pe,p,H),!te||te.index>=p.length)break;var ve=te.index,We=te.index+te[0].length,ie=pe;for(ie+=K.value.length;ve>=ie;)K=K.next,ie+=K.value.length;if(ie-=K.value.length,pe=ie,K.value instanceof d)continue;for(var he=K;he!==h.tail&&(ie<We||typeof he.value=="string");he=he.next)ue++,ie+=he.value.length;ue--,Ae=p.slice(pe,ie),te.index-=pe}else if(te=l(ee,0,Ae,H),!te)continue;var ve=te.index,ye=te[0],we=Ae.slice(0,ve),un=Ae.slice(ve+ye.length),Be=pe+Ae.length;E&&Be>E.reach&&(E.reach=Be);var Ie=K.prev;we&&(Ie=b(h,Ie,we),pe+=we.length),m(h,Ie,ue);var mn=new d(I,F?i.tokenize(ye,F):ye,ze,ye);if(K=b(h,Ie,mn),un&&b(h,K,un),ue>1){var Pe={cause:I+","+z,reach:Be};u(p,h,v,K.prev,pe,Pe),E&&Pe.reach>E.reach&&(E.reach=Pe.reach)}}}}}}function f(){var p={value:null,prev:null,next:null},h={value:null,prev:p,next:null};p.next=h,this.head=p,this.tail=h,this.length=0}function b(p,h,v){var j=h.next,k={value:v,prev:h,next:j};return h.next=k,j.prev=k,p.length++,k}function m(p,h,v){for(var j=h.next,k=0;k<v&&j!==p.tail;k++)j=j.next;h.next=j,j.prev=h,p.length-=k}function y(p){for(var h=[],v=p.head.next;v!==p.tail;)h.push(v.value),v=v.next;return h}if(!t.document)return t.addEventListener&&(i.disableWorkerMessageHandler||t.addEventListener("message",function(p){var h=JSON.parse(p.data),v=h.language,j=h.code,k=h.immediateClose;t.postMessage(i.highlight(j,i.languages[v],v)),k&&t.close()},!1)),i;var A=i.util.currentScript();A&&(i.filename=A.src,A.hasAttribute("data-manual")&&(i.manual=!0));function P(){i.manual||i.highlightAll()}if(!i.manual){var x=document.readyState;x==="loading"||x==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",P):window.requestAnimationFrame?window.requestAnimationFrame(P):window.setTimeout(P,16)}return i}(e);n.exports&&(n.exports=a),typeof b0!="undefined"&&(b0.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(r,o){var c={};c["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[o]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};i["language-"+o]={pattern:/[\s\S]+/,inside:a.languages[o]};var d={};d[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",d)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(t,r){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:a.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(t){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var o=t.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading\u2026",r=function(A,P){return"\u2716 Error "+A+" while fetching file: "+P},o="\u2716 Error: File does not exist or is empty",c={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",d="loading",l="loaded",u="failed",f="pre[data-src]:not(["+i+'="'+l+'"]):not(['+i+'="'+d+'"])';function b(A,P,x){var p=new XMLHttpRequest;p.open("GET",A,!0),p.onreadystatechange=function(){p.readyState==4&&(p.status<400&&p.responseText?P(p.responseText):p.status>=400?x(r(p.status,p.statusText)):x(o))},p.send(null)}function m(A){var P=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(P){var x=Number(P[1]),p=P[2],h=P[3];return p?h?[x,Number(h)]:[x,void 0]:[x,x]}}a.hooks.add("before-highlightall",function(A){A.selector+=", "+f}),a.hooks.add("before-sanity-check",function(A){var P=A.element;if(P.matches(f)){A.code="",P.setAttribute(i,d);var x=P.appendChild(document.createElement("CODE"));x.textContent=t;var p=P.getAttribute("data-src"),h=A.language;if(h==="none"){var v=(/\.(\w+)$/.exec(p)||[,"none"])[1];h=c[v]||v}a.util.setLanguage(x,h),a.util.setLanguage(P,h);var j=a.plugins.autoloader;j&&j.loadLanguages(h),b(p,function(k){P.setAttribute(i,l);var E=m(P.getAttribute("data-range"));if(E){var I=k.split(/\r\n?|\n/g),R=E[0],z=E[1]==null?I.length:E[1];R<0&&(R+=I.length),R=Math.max(0,Math.min(R-1,I.length)),z<0&&(z+=I.length),z=Math.max(0,Math.min(z,I.length)),k=I.slice(R,z).join(`
`),P.hasAttribute("data-start")||P.setAttribute("data-start",String(R+1))}x.textContent=k,a.highlightElement(x)},function(k){P.setAttribute(i,u),x.textContent=k})}}),a.plugins.fileHighlight={highlight:function(P){for(var x=(P||document).querySelectorAll(f),p=0,h;h=x[p++];)a.highlightElement(h)}};var y=!1;a.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(aa);var yn=aa.exports;(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;var n=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,e=/^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i;function a(o){var c=e.exec(o);if(!!c){o=c[1];for(var i=o.length>=6?2:1,d=o.length/i,l=i==1?1/15:1/255,u=[],f=0;f<d;f++){var b=parseInt(o.substr(f*i,i),16);u.push(b*l)}d==3&&u.push(1);var m=u.slice(0,3).map(function(A){return String(Math.round(A*255))}).join(","),y=String(Number(u[3].toFixed(3)));return"rgba("+m+","+y+")"}}function t(o){var c=new Option().style;return c.color=o,c.color?o:void 0}var r=[a,t];Prism.hooks.add("wrap",function(o){if(o.type==="color"||o.classes.indexOf("color")>=0){for(var c=o.content,i=c.split(n).join(""),d,l=0,u=r.length;l<u&&!d;l++)d=r[l](i);if(!d)return;var f='<span class="inline-color-wrapper"><span class="inline-color" style="background-color:'+d+';"></span></span>';o.content=f+c}})})();(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;var n="line-numbers",e=/\n(?!$)/g,a=Prism.plugins.lineNumbers={getLine:function(c,i){if(!(c.tagName!=="PRE"||!c.classList.contains(n))){var d=c.querySelector(".line-numbers-rows");if(!!d){var l=parseInt(c.getAttribute("data-start"),10)||1,u=l+(d.children.length-1);i<l&&(i=l),i>u&&(i=u);var f=i-l;return d.children[f]}}},resize:function(c){t([c])},assumeViewportIndependence:!0};function t(c){if(c=c.filter(function(d){var l=r(d),u=l["white-space"];return u==="pre-wrap"||u==="pre-line"}),c.length!=0){var i=c.map(function(d){var l=d.querySelector("code"),u=d.querySelector(".line-numbers-rows");if(!(!l||!u)){var f=d.querySelector(".line-numbers-sizer"),b=l.textContent.split(e);f||(f=document.createElement("span"),f.className="line-numbers-sizer",l.appendChild(f)),f.innerHTML="0",f.style.display="block";var m=f.getBoundingClientRect().height;return f.innerHTML="",{element:d,lines:b,lineHeights:[],oneLinerHeight:m,sizer:f}}}).filter(Boolean);i.forEach(function(d){var l=d.sizer,u=d.lines,f=d.lineHeights,b=d.oneLinerHeight;f[u.length-1]=void 0,u.forEach(function(m,y){if(m&&m.length>1){var A=l.appendChild(document.createElement("span"));A.style.display="block",A.textContent=m}else f[y]=b})}),i.forEach(function(d){for(var l=d.sizer,u=d.lineHeights,f=0,b=0;b<u.length;b++)u[b]===void 0&&(u[b]=l.children[f++].getBoundingClientRect().height)}),i.forEach(function(d){var l=d.sizer,u=d.element.querySelector(".line-numbers-rows");l.style.display="none",l.innerHTML="",d.lineHeights.forEach(function(f,b){u.children[b].style.height=f+"px"})})}}function r(c){return c?window.getComputedStyle?getComputedStyle(c):c.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){a.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,t(Array.prototype.slice.call(document.querySelectorAll("pre."+n))))}),Prism.hooks.add("complete",function(c){if(!!c.code){var i=c.element,d=i.parentNode;if(!(!d||!/pre/i.test(d.nodeName))&&!i.querySelector(".line-numbers-rows")&&!!Prism.util.isActive(i,n)){i.classList.remove(n),d.classList.add(n);var l=c.code.match(e),u=l?l.length+1:1,f,b=new Array(u+1).join("<span></span>");f=document.createElement("span"),f.setAttribute("aria-hidden","true"),f.className="line-numbers-rows",f.innerHTML=b,d.hasAttribute("data-start")&&(d.style.counterReset="linenumber "+(parseInt(d.getAttribute("data-start"),10)-1)),c.element.appendChild(f),t([d]),Prism.hooks.run("line-numbers",c)}}}),Prism.hooks.add("line-numbers",function(c){c.plugins=c.plugins||{},c.plugins.lineNumbers=!0})})();(function(){if(typeof Prism=="undefined"||typeof document=="undefined")return;function n(f){var b=Prism.plugins.customClass;return b?b.apply(f,"none"):f}var e={"(":")","[":"]","{":"}"},a={"(":"brace-round","[":"brace-square","{":"brace-curly"},t={"${":"{"},r=12,o=0,c=/^(pair-\d+-)(close|open)$/;function i(f){var b=c.exec(f.id);return document.querySelector("#"+b[1]+(b[2]=="open"?"close":"open"))}function d(){!Prism.util.isActive(this,"brace-hover",!0)||[this,i(this)].forEach(function(f){f.classList.add(n("brace-hover"))})}function l(){[this,i(this)].forEach(function(f){f.classList.remove(n("brace-hover"))})}function u(){!Prism.util.isActive(this,"brace-select",!0)||[this,i(this)].forEach(function(f){f.classList.add(n("brace-selected"))})}Prism.hooks.add("complete",function(f){var b=f.element,m=b.parentElement;if(!(!m||m.tagName!="PRE")){var y=[];if(Prism.util.isActive(b,"match-braces")&&y.push("(","[","{"),y.length!=0){m.__listenerAdded||(m.addEventListener("mousedown",function(){var h=m.querySelector("code"),v=n("brace-selected");Array.prototype.slice.call(h.querySelectorAll("."+v)).forEach(function(j){j.classList.remove(v)})}),Object.defineProperty(m,"__listenerAdded",{value:!0}));var A=Array.prototype.slice.call(b.querySelectorAll("span."+n("token")+"."+n("punctuation"))),P=[];y.forEach(function(p){for(var h=e[p],v=n(a[p]),j=[],k=[],E=0;E<A.length;E++){var I=A[E];if(I.childElementCount==0){var R=I.textContent;R=t[R]||R,R===p?(P.push({index:E,open:!0,element:I}),I.classList.add(v),I.classList.add(n("brace-open")),k.push(E)):R===h&&(P.push({index:E,open:!1,element:I}),I.classList.add(v),I.classList.add(n("brace-close")),k.length&&j.push([E,k.pop()]))}}j.forEach(function(z){var w="pair-"+o+++"-",F=A[z[0]],H=A[z[1]];F.id=w+"open",H.id=w+"close",[F,H].forEach(function(fe){fe.addEventListener("mouseenter",d),fe.addEventListener("mouseleave",l),fe.addEventListener("click",u)})})});var x=0;P.sort(function(p,h){return p.index-h.index}),P.forEach(function(p){p.open?(p.element.classList.add(n("brace-level-"+(x%r+1))),x++):(x=Math.max(0,x-1),p.element.classList.add(n("brace-level-"+(x%r+1))))})}}})})();(function(){if(!(typeof Prism=="undefined"||typeof document=="undefined"||!Function.prototype.bind)){var n={gradient:{create:function(){var i={},d=function(f,b,m){var y="180deg";return/^(?:-?(?:\d+(?:\.\d+)?|\.\d+)(?:deg|rad)|to\b|top|right|bottom|left)/.test(m[0])&&(y=m.shift(),y.indexOf("to ")<0&&(y.indexOf("top")>=0?y.indexOf("left")>=0?y="to bottom right":y.indexOf("right")>=0?y="to bottom left":y="to bottom":y.indexOf("bottom")>=0?y.indexOf("left")>=0?y="to top right":y.indexOf("right")>=0?y="to top left":y="to top":y.indexOf("left")>=0?y="to right":y.indexOf("right")>=0?y="to left":f&&(y.indexOf("deg")>=0?y=90-parseFloat(y)+"deg":y.indexOf("rad")>=0&&(y=Math.PI/2-parseFloat(y)+"rad")))),b+"("+y+","+m.join(",")+")"},l=function(f,b,m){if(m[0].indexOf("at")<0){var y="center",A="ellipse",P="farthest-corner";if(/\b(?:bottom|center|left|right|top)\b|^\d+/.test(m[0])&&(y=m.shift().replace(/\s*-?\d+(?:deg|rad)\s*/,"")),/\b(?:circle|closest|contain|cover|ellipse|farthest)\b/.test(m[0])){var x=m.shift().split(/\s+/);x[0]&&(x[0]==="circle"||x[0]==="ellipse")&&(A=x.shift()),x[0]&&(P=x.shift()),P==="cover"?P="farthest-corner":P==="contain"&&(P="clothest-side")}return b+"("+A+" "+P+" at "+y+","+m.join(",")+")"}return b+"("+m.join(",")+")"},u=function(f){if(i[f])return i[f];var b=f.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),m=b&&b[1],y=b&&b[2],A=f.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g,"").split(/\s*,\s*/);return y.indexOf("linear")>=0?i[f]=d(m,y,A):y.indexOf("radial")>=0?i[f]=l(m,y,A):i[f]=y+"("+A.join(",")+")"};return function(){new Prism.plugins.Previewer("gradient",function(f){return this.firstChild.style.backgroundImage="",this.firstChild.style.backgroundImage=u(f),!!this.firstChild.style.backgroundImage},"*",function(){this._elt.innerHTML="<div></div>"})}}(),tokens:{gradient:{pattern:/(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:hsl|rgb)a?\(.+?\)|[^\)])+\)/gi,inside:{function:/[\w-]+(?=\()/,punctuation:/[(),]/}}},languages:{css:!0,less:!0,sass:[{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},angle:{create:function(){new Prism.plugins.Previewer("angle",function(i){var d=parseFloat(i),l=i.match(/[a-z]+$/i),u,f;if(!d||!l)return!1;switch(l=l[0],l){case"deg":u=360;break;case"grad":u=400;break;case"rad":u=2*Math.PI;break;case"turn":u=1}return f=100*d/u,f%=100,this[(d<0?"set":"remove")+"Attribute"]("data-negative",""),this.querySelector("circle").style.strokeDasharray=Math.abs(f)+",500",!0},"*",function(){this._elt.innerHTML='<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'})},tokens:{angle:/(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)(?:deg|g?rad|turn)\b/i},languages:{css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]},{lang:"sass",before:"operator",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]}],scss:!0,stylus:[{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"func",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},color:{create:function(){new Prism.plugins.Previewer("color",function(i){return this.style.backgroundColor="",this.style.backgroundColor=i,!!this.style.backgroundColor})},tokens:{color:[Prism.languages.css.hexcode].concat(Prism.languages.css.color)},languages:{css:!1,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",before:"punctuation",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!1,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},easing:{create:function(){new Prism.plugins.Previewer("easing",function(i){i={linear:"0,0,1,1",ease:".25,.1,.25,1","ease-in":".42,0,1,1","ease-out":"0,0,.58,1","ease-in-out":".42,0,.58,1"}[i]||i;var d=i.match(/-?(?:\d+(?:\.\d+)?|\.\d+)/g);if(d.length===4){d=d.map(function(u,f){return(f%2?1-u:u)*100}),this.querySelector("path").setAttribute("d","M0,100 C"+d[0]+","+d[1]+", "+d[2]+","+d[3]+", 100,0");var l=this.querySelectorAll("line");return l[0].setAttribute("x2",d[0]),l[0].setAttribute("y2",d[1]),l[1].setAttribute("x2",d[2]),l[1].setAttribute("y2",d[3]),!0}return!1},"*",function(){this._elt.innerHTML='<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /></svg>'})},tokens:{easing:{pattern:/\bcubic-bezier\((?:-?(?:\d+(?:\.\d+)?|\.\d+),\s*){3}-?(?:\d+(?:\.\d+)?|\.\d+)\)\B|\b(?:ease(?:-in)?(?:-out)?|linear)(?=\s|[;}]|$)/i,inside:{function:/[\w-]+(?=\()/,punctuation:/[(),]/}}},languages:{css:!0,less:!0,sass:[{lang:"sass",inside:"inside",before:"punctuation",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]},{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}},time:{create:function(){new Prism.plugins.Previewer("time",function(i){var d=parseFloat(i),l=i.match(/[a-z]+$/i);return!d||!l?!1:(l=l[0],this.querySelector("circle").style.animationDuration=2*d+l,!0)},"*",function(){this._elt.innerHTML='<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'})},tokens:{time:/(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)m?s\b/i},languages:{css:!0,less:!0,markup:{lang:"markup",before:"punctuation",inside:"inside",root:Prism.languages.markup&&Prism.languages.markup.tag.inside["attr-value"]},sass:[{lang:"sass",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["property-line"]},{lang:"sass",before:"operator",inside:"inside",root:Prism.languages.sass&&Prism.languages.sass["variable-line"]}],scss:!0,stylus:[{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["property-declaration"].inside},{lang:"stylus",before:"hexcode",inside:"rest",root:Prism.languages.stylus&&Prism.languages.stylus["variable-declaration"].inside}]}}},e=function(i){var d=i.getBoundingClientRect(),l=d.left,u=d.top,f=document.documentElement.getBoundingClientRect();return l-=f.left,u-=f.top,{top:u,right:innerWidth-l-d.width,bottom:innerHeight-u-d.height,left:l,width:d.width,height:d.height}},a="token",t="active",r="flipped",o=function(i,d,l,u){this._elt=null,this._type=i,this._token=null,this.updater=d,this._mouseout=this.mouseout.bind(this),this.initializer=u;var f=this;l||(l=["*"]),Array.isArray(l)||(l=[l]),l.forEach(function(b){typeof b!="string"&&(b=b.lang),o.byLanguages[b]||(o.byLanguages[b]=[]),o.byLanguages[b].indexOf(f)<0&&o.byLanguages[b].push(f)}),o.byType[i]=this};o.prototype.init=function(){this._elt||(this._elt=document.createElement("div"),this._elt.className="prism-previewer prism-previewer-"+this._type,document.body.appendChild(this._elt),this.initializer&&this.initializer())},o.prototype.isDisabled=function(i){do if(i.hasAttribute&&i.hasAttribute("data-previewers")){var d=i.getAttribute("data-previewers");return(d||"").split(/\s+/).indexOf(this._type)===-1}while(i=i.parentNode);return!1},o.prototype.check=function(i){if(!(i.classList.contains(a)&&this.isDisabled(i))){do if(i.classList&&i.classList.contains(a)&&i.classList.contains(this._type))break;while(i=i.parentNode);i&&i!==this._token&&(this._token=i,this.show())}},o.prototype.mouseout=function(){this._token.removeEventListener("mouseout",this._mouseout,!1),this._token=null,this.hide()},o.prototype.show=function(){if(this._elt||this.init(),!!this._token)if(this.updater.call(this._elt,this._token.textContent)){this._token.addEventListener("mouseout",this._mouseout,!1);var i=e(this._token);this._elt.classList.add(t),i.top-this._elt.offsetHeight>0?(this._elt.classList.remove(r),this._elt.style.top=i.top+"px",this._elt.style.bottom=""):(this._elt.classList.add(r),this._elt.style.bottom=i.bottom+"px",this._elt.style.top=""),this._elt.style.left=i.left+Math.min(200,i.width/2)+"px"}else this.hide()},o.prototype.hide=function(){this._elt.classList.remove(t)},o.byLanguages={},o.byType={},o.initEvents=function(i,d){var l=[];o.byLanguages[d]&&(l=l.concat(o.byLanguages[d])),o.byLanguages["*"]&&(l=l.concat(o.byLanguages["*"])),i.addEventListener("mouseover",function(u){var f=u.target;l.forEach(function(b){b.check(f)})},!1)},Prism.plugins.Previewer=o,Prism.hooks.add("before-highlight",function(i){for(var d in n){var l=n[d].languages;if(i.language&&l[i.language]&&!l[i.language].initialized){var u=l[i.language];Array.isArray(u)||(u=[u]),u.forEach(function(f){var b,m,y,A;f===!0?(b="important",m=i.language,f=i.language):(b=f.before||"important",m=f.inside||f.lang,y=f.root||Prism.languages,A=f.skip,f=i.language),!A&&Prism.languages[f]&&(Prism.languages.insertBefore(m,b,n[d].tokens,y),i.grammar=Prism.languages[f],l[i.language]={initialized:!0})})}}}),Prism.hooks.add("after-highlight",function(i){(o.byLanguages["*"]||o.byLanguages[i.language])&&o.initEvents(i.element,i.language)});for(var c in n)n[c].create()}})();(function(){if(typeof Prism=="undefined")return;var n={tab:/\t/,crlf:/\r\n/,lf:/\n/,cr:/\r/,space:/ /};function e(t,r){var o=t[r],c=Prism.util.type(o);switch(c){case"RegExp":var l={};t[r]={pattern:o,inside:l},a(l);break;case"Array":for(var i=0,d=o.length;i<d;i++)e(o,i);break;default:var l=o.inside||(o.inside={});a(l);break}}function a(t){if(!(!t||t.tab)){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);for(var r in t)t.hasOwnProperty(r)&&!n[r]&&(r==="rest"?a(t.rest):e(t,r))}}Prism.hooks.add("before-highlight",function(t){a(t.grammar)})})();yn.manual=!0;const jd={md:"markdown",ts:"typescript",html:"vue",cjs:"js",yml:"yaml",gitignore:"ignore",gitattributes:"ignore",prettierignore:"ignore"};function sa(n){var e;return(e=jd[n])!=null?e:n}const x0=new Set,E0={"/node_modules/prismjs/components/prism-abap.js":()=>s(()=>import("./prism-abap.34aea0a7.js"),[]),"/node_modules/prismjs/components/prism-abap.min.js":()=>s(()=>import("./prism-abap.min.dce5a9aa.js"),[]),"/node_modules/prismjs/components/prism-abnf.js":()=>s(()=>import("./prism-abnf.bc54aff8.js"),[]),"/node_modules/prismjs/components/prism-abnf.min.js":()=>s(()=>import("./prism-abnf.min.cf59ce76.js"),[]),"/node_modules/prismjs/components/prism-actionscript.js":()=>s(()=>import("./prism-actionscript.031b0ecb.js"),[]),"/node_modules/prismjs/components/prism-actionscript.min.js":()=>s(()=>import("./prism-actionscript.min.d635e41b.js"),[]),"/node_modules/prismjs/components/prism-ada.js":()=>s(()=>import("./prism-ada.948d6154.js"),[]),"/node_modules/prismjs/components/prism-ada.min.js":()=>s(()=>import("./prism-ada.min.81ee1fe2.js"),[]),"/node_modules/prismjs/components/prism-agda.js":()=>s(()=>import("./prism-agda.594fc344.js"),[]),"/node_modules/prismjs/components/prism-agda.min.js":()=>s(()=>import("./prism-agda.min.5959652d.js"),[]),"/node_modules/prismjs/components/prism-al.js":()=>s(()=>import("./prism-al.fc98c0da.js"),[]),"/node_modules/prismjs/components/prism-al.min.js":()=>s(()=>import("./prism-al.min.b063db28.js"),[]),"/node_modules/prismjs/components/prism-antlr4.js":()=>s(()=>import("./prism-antlr4.cd5d88f4.js"),[]),"/node_modules/prismjs/components/prism-antlr4.min.js":()=>s(()=>import("./prism-antlr4.min.a44583a1.js"),[]),"/node_modules/prismjs/components/prism-apacheconf.js":()=>s(()=>import("./prism-apacheconf.d228ef8a.js"),[]),"/node_modules/prismjs/components/prism-apacheconf.min.js":()=>s(()=>import("./prism-apacheconf.min.da0ebf31.js"),[]),"/node_modules/prismjs/components/prism-apex.js":()=>s(()=>import("./prism-apex.06ef2687.js"),[]),"/node_modules/prismjs/components/prism-apex.min.js":()=>s(()=>import("./prism-apex.min.178445bf.js"),[]),"/node_modules/prismjs/components/prism-apl.js":()=>s(()=>import("./prism-apl.ddce973b.js"),[]),"/node_modules/prismjs/components/prism-apl.min.js":()=>s(()=>import("./prism-apl.min.85edb769.js"),[]),"/node_modules/prismjs/components/prism-applescript.js":()=>s(()=>import("./prism-applescript.32013b23.js"),[]),"/node_modules/prismjs/components/prism-applescript.min.js":()=>s(()=>import("./prism-applescript.min.276b50d7.js"),[]),"/node_modules/prismjs/components/prism-aql.js":()=>s(()=>import("./prism-aql.06740c38.js"),[]),"/node_modules/prismjs/components/prism-aql.min.js":()=>s(()=>import("./prism-aql.min.c4044b00.js"),[]),"/node_modules/prismjs/components/prism-arduino.js":()=>s(()=>import("./prism-arduino.b4232c10.js"),[]),"/node_modules/prismjs/components/prism-arduino.min.js":()=>s(()=>import("./prism-arduino.min.40d18a6c.js"),[]),"/node_modules/prismjs/components/prism-arff.js":()=>s(()=>import("./prism-arff.67522478.js"),[]),"/node_modules/prismjs/components/prism-arff.min.js":()=>s(()=>import("./prism-arff.min.b58e28c5.js"),[]),"/node_modules/prismjs/components/prism-armasm.js":()=>s(()=>import("./prism-armasm.7f19c297.js"),[]),"/node_modules/prismjs/components/prism-armasm.min.js":()=>s(()=>import("./prism-armasm.min.c55e3453.js"),[]),"/node_modules/prismjs/components/prism-arturo.js":()=>s(()=>import("./prism-arturo.428cd425.js"),[]),"/node_modules/prismjs/components/prism-arturo.min.js":()=>s(()=>import("./prism-arturo.min.88819f15.js"),[]),"/node_modules/prismjs/components/prism-asciidoc.js":()=>s(()=>import("./prism-asciidoc.3eb4fdb6.js"),[]),"/node_modules/prismjs/components/prism-asciidoc.min.js":()=>s(()=>import("./prism-asciidoc.min.e955a0d1.js"),[]),"/node_modules/prismjs/components/prism-asm6502.js":()=>s(()=>import("./prism-asm6502.0a2e5b2e.js"),[]),"/node_modules/prismjs/components/prism-asm6502.min.js":()=>s(()=>import("./prism-asm6502.min.1cdeeebc.js"),[]),"/node_modules/prismjs/components/prism-asmatmel.js":()=>s(()=>import("./prism-asmatmel.e6227c2b.js"),[]),"/node_modules/prismjs/components/prism-asmatmel.min.js":()=>s(()=>import("./prism-asmatmel.min.05d8f441.js"),[]),"/node_modules/prismjs/components/prism-aspnet.js":()=>s(()=>import("./prism-aspnet.875ccf42.js"),[]),"/node_modules/prismjs/components/prism-aspnet.min.js":()=>s(()=>import("./prism-aspnet.min.57b9b776.js"),[]),"/node_modules/prismjs/components/prism-autohotkey.js":()=>s(()=>import("./prism-autohotkey.2cf425c6.js"),[]),"/node_modules/prismjs/components/prism-autohotkey.min.js":()=>s(()=>import("./prism-autohotkey.min.98652af7.js"),[]),"/node_modules/prismjs/components/prism-autoit.js":()=>s(()=>import("./prism-autoit.f905602a.js"),[]),"/node_modules/prismjs/components/prism-autoit.min.js":()=>s(()=>import("./prism-autoit.min.d7ee2fdd.js"),[]),"/node_modules/prismjs/components/prism-avisynth.js":()=>s(()=>import("./prism-avisynth.e7fb958a.js"),[]),"/node_modules/prismjs/components/prism-avisynth.min.js":()=>s(()=>import("./prism-avisynth.min.b2fb02d4.js"),[]),"/node_modules/prismjs/components/prism-avro-idl.js":()=>s(()=>import("./prism-avro-idl.b21d2018.js"),[]),"/node_modules/prismjs/components/prism-avro-idl.min.js":()=>s(()=>import("./prism-avro-idl.min.6cfa567b.js"),[]),"/node_modules/prismjs/components/prism-awk.js":()=>s(()=>import("./prism-awk.db6ab052.js"),[]),"/node_modules/prismjs/components/prism-awk.min.js":()=>s(()=>import("./prism-awk.min.94932351.js"),[]),"/node_modules/prismjs/components/prism-bash.js":()=>s(()=>import("./prism-bash.9b440452.js"),[]),"/node_modules/prismjs/components/prism-bash.min.js":()=>s(()=>import("./prism-bash.min.ce7ec60a.js"),[]),"/node_modules/prismjs/components/prism-basic.js":()=>s(()=>import("./prism-basic.d7ab0a9b.js"),[]),"/node_modules/prismjs/components/prism-basic.min.js":()=>s(()=>import("./prism-basic.min.004d2773.js"),[]),"/node_modules/prismjs/components/prism-batch.js":()=>s(()=>import("./prism-batch.bfcd166b.js"),[]),"/node_modules/prismjs/components/prism-batch.min.js":()=>s(()=>import("./prism-batch.min.e232a78b.js"),[]),"/node_modules/prismjs/components/prism-bbcode.js":()=>s(()=>import("./prism-bbcode.12178622.js"),[]),"/node_modules/prismjs/components/prism-bbcode.min.js":()=>s(()=>import("./prism-bbcode.min.22128d3e.js"),[]),"/node_modules/prismjs/components/prism-bicep.js":()=>s(()=>import("./prism-bicep.f719ef61.js"),[]),"/node_modules/prismjs/components/prism-bicep.min.js":()=>s(()=>import("./prism-bicep.min.0454d7a9.js"),[]),"/node_modules/prismjs/components/prism-birb.js":()=>s(()=>import("./prism-birb.eb139e6c.js"),[]),"/node_modules/prismjs/components/prism-birb.min.js":()=>s(()=>import("./prism-birb.min.be6b53a4.js"),[]),"/node_modules/prismjs/components/prism-bison.js":()=>s(()=>import("./prism-bison.b350a6cc.js"),[]),"/node_modules/prismjs/components/prism-bison.min.js":()=>s(()=>import("./prism-bison.min.632d812b.js"),[]),"/node_modules/prismjs/components/prism-bnf.js":()=>s(()=>import("./prism-bnf.259283c4.js"),[]),"/node_modules/prismjs/components/prism-bnf.min.js":()=>s(()=>import("./prism-bnf.min.2592bce3.js"),[]),"/node_modules/prismjs/components/prism-brainfuck.js":()=>s(()=>import("./prism-brainfuck.5128c75d.js"),[]),"/node_modules/prismjs/components/prism-brainfuck.min.js":()=>s(()=>import("./prism-brainfuck.min.03ee7ded.js"),[]),"/node_modules/prismjs/components/prism-brightscript.js":()=>s(()=>import("./prism-brightscript.8cc0e23b.js"),[]),"/node_modules/prismjs/components/prism-brightscript.min.js":()=>s(()=>import("./prism-brightscript.min.50c4c4d9.js"),[]),"/node_modules/prismjs/components/prism-bro.js":()=>s(()=>import("./prism-bro.a37e08bb.js"),[]),"/node_modules/prismjs/components/prism-bro.min.js":()=>s(()=>import("./prism-bro.min.c7c09a21.js"),[]),"/node_modules/prismjs/components/prism-bsl.js":()=>s(()=>import("./prism-bsl.d79f2f89.js"),[]),"/node_modules/prismjs/components/prism-bsl.min.js":()=>s(()=>import("./prism-bsl.min.c051dad5.js"),[]),"/node_modules/prismjs/components/prism-c.js":()=>s(()=>import("./prism-c.b82040fb.js"),[]),"/node_modules/prismjs/components/prism-c.min.js":()=>s(()=>import("./prism-c.min.0402d72b.js"),[]),"/node_modules/prismjs/components/prism-cfscript.js":()=>s(()=>import("./prism-cfscript.53bcfb73.js"),[]),"/node_modules/prismjs/components/prism-cfscript.min.js":()=>s(()=>import("./prism-cfscript.min.cdf52f06.js"),[]),"/node_modules/prismjs/components/prism-chaiscript.js":()=>s(()=>import("./prism-chaiscript.2bfcc8a1.js"),[]),"/node_modules/prismjs/components/prism-chaiscript.min.js":()=>s(()=>import("./prism-chaiscript.min.1d11bcfc.js"),[]),"/node_modules/prismjs/components/prism-cil.js":()=>s(()=>import("./prism-cil.fdc9ebf0.js"),[]),"/node_modules/prismjs/components/prism-cil.min.js":()=>s(()=>import("./prism-cil.min.242e6cfc.js"),[]),"/node_modules/prismjs/components/prism-clike.js":()=>s(()=>import("./prism-clike.7d57b6b9.js"),[]),"/node_modules/prismjs/components/prism-clike.min.js":()=>s(()=>import("./prism-clike.min.abbcbc0f.js"),[]),"/node_modules/prismjs/components/prism-clojure.js":()=>s(()=>import("./prism-clojure.6b1ba28e.js"),[]),"/node_modules/prismjs/components/prism-clojure.min.js":()=>s(()=>import("./prism-clojure.min.ea41cb1d.js"),[]),"/node_modules/prismjs/components/prism-cmake.js":()=>s(()=>import("./prism-cmake.b09f3447.js"),[]),"/node_modules/prismjs/components/prism-cmake.min.js":()=>s(()=>import("./prism-cmake.min.b2262eef.js"),[]),"/node_modules/prismjs/components/prism-cobol.js":()=>s(()=>import("./prism-cobol.f8304051.js"),[]),"/node_modules/prismjs/components/prism-cobol.min.js":()=>s(()=>import("./prism-cobol.min.4980c379.js"),[]),"/node_modules/prismjs/components/prism-coffeescript.js":()=>s(()=>import("./prism-coffeescript.94b4b140.js"),[]),"/node_modules/prismjs/components/prism-coffeescript.min.js":()=>s(()=>import("./prism-coffeescript.min.5003336e.js"),[]),"/node_modules/prismjs/components/prism-concurnas.js":()=>s(()=>import("./prism-concurnas.5c0f3b64.js"),[]),"/node_modules/prismjs/components/prism-concurnas.min.js":()=>s(()=>import("./prism-concurnas.min.95e1e66c.js"),[]),"/node_modules/prismjs/components/prism-cooklang.js":()=>s(()=>import("./prism-cooklang.bba16a97.js"),[]),"/node_modules/prismjs/components/prism-cooklang.min.js":()=>s(()=>import("./prism-cooklang.min.810d05ff.js"),[]),"/node_modules/prismjs/components/prism-coq.js":()=>s(()=>import("./prism-coq.a625b59c.js"),[]),"/node_modules/prismjs/components/prism-coq.min.js":()=>s(()=>import("./prism-coq.min.96316df4.js"),[]),"/node_modules/prismjs/components/prism-core.js":()=>s(()=>import("./prism-core.17a5756d.js").then(function(n){return n.p}),["assets/prism-core.17a5756d.js","assets/index.0a04e717.js","assets/index.3708844d.css"]),"/node_modules/prismjs/components/prism-core.min.js":()=>s(()=>import("./prism-core.min.bb49abeb.js").then(function(n){return n.p}),["assets/prism-core.min.bb49abeb.js","assets/index.0a04e717.js","assets/index.3708844d.css"]),"/node_modules/prismjs/components/prism-cpp.js":()=>s(()=>import("./prism-cpp.5a4a1b3d.js"),[]),"/node_modules/prismjs/components/prism-cpp.min.js":()=>s(()=>import("./prism-cpp.min.34aaab80.js"),[]),"/node_modules/prismjs/components/prism-crystal.js":()=>s(()=>import("./prism-crystal.abeebb94.js"),[]),"/node_modules/prismjs/components/prism-crystal.min.js":()=>s(()=>import("./prism-crystal.min.a0114d2c.js"),[]),"/node_modules/prismjs/components/prism-csharp.js":()=>s(()=>import("./prism-csharp.609116a7.js"),[]),"/node_modules/prismjs/components/prism-csharp.min.js":()=>s(()=>import("./prism-csharp.min.dde07676.js"),[]),"/node_modules/prismjs/components/prism-cshtml.js":()=>s(()=>import("./prism-cshtml.8e1f49ab.js"),[]),"/node_modules/prismjs/components/prism-cshtml.min.js":()=>s(()=>import("./prism-cshtml.min.9d590b5c.js"),[]),"/node_modules/prismjs/components/prism-csp.js":()=>s(()=>import("./prism-csp.f6ef9c9a.js"),[]),"/node_modules/prismjs/components/prism-csp.min.js":()=>s(()=>import("./prism-csp.min.9e0e040c.js"),[]),"/node_modules/prismjs/components/prism-css-extras.js":()=>s(()=>import("./prism-css-extras.b0319a3d.js"),[]),"/node_modules/prismjs/components/prism-css-extras.min.js":()=>s(()=>import("./prism-css-extras.min.b6c7cd18.js"),[]),"/node_modules/prismjs/components/prism-css.js":()=>s(()=>import("./prism-css.22e88ced.js"),[]),"/node_modules/prismjs/components/prism-css.min.js":()=>s(()=>import("./prism-css.min.dab504a1.js"),[]),"/node_modules/prismjs/components/prism-csv.js":()=>s(()=>import("./prism-csv.b98f8a35.js"),[]),"/node_modules/prismjs/components/prism-csv.min.js":()=>s(()=>import("./prism-csv.min.e6590379.js"),[]),"/node_modules/prismjs/components/prism-cue.js":()=>s(()=>import("./prism-cue.79af2723.js"),[]),"/node_modules/prismjs/components/prism-cue.min.js":()=>s(()=>import("./prism-cue.min.b113e905.js"),[]),"/node_modules/prismjs/components/prism-cypher.js":()=>s(()=>import("./prism-cypher.056344fe.js"),[]),"/node_modules/prismjs/components/prism-cypher.min.js":()=>s(()=>import("./prism-cypher.min.9771a5d7.js"),[]),"/node_modules/prismjs/components/prism-d.js":()=>s(()=>import("./prism-d.b8459d0d.js"),[]),"/node_modules/prismjs/components/prism-d.min.js":()=>s(()=>import("./prism-d.min.84d9962a.js"),[]),"/node_modules/prismjs/components/prism-dart.js":()=>s(()=>import("./prism-dart.df8f8cc4.js"),[]),"/node_modules/prismjs/components/prism-dart.min.js":()=>s(()=>import("./prism-dart.min.98d7620f.js"),[]),"/node_modules/prismjs/components/prism-dataweave.js":()=>s(()=>import("./prism-dataweave.17846951.js"),[]),"/node_modules/prismjs/components/prism-dataweave.min.js":()=>s(()=>import("./prism-dataweave.min.ec655282.js"),[]),"/node_modules/prismjs/components/prism-dax.js":()=>s(()=>import("./prism-dax.9319a139.js"),[]),"/node_modules/prismjs/components/prism-dax.min.js":()=>s(()=>import("./prism-dax.min.7d2c0015.js"),[]),"/node_modules/prismjs/components/prism-dhall.js":()=>s(()=>import("./prism-dhall.e237a6bb.js"),[]),"/node_modules/prismjs/components/prism-dhall.min.js":()=>s(()=>import("./prism-dhall.min.15ce2943.js"),[]),"/node_modules/prismjs/components/prism-diff.js":()=>s(()=>import("./prism-diff.91932fcc.js"),[]),"/node_modules/prismjs/components/prism-diff.min.js":()=>s(()=>import("./prism-diff.min.49960dff.js"),[]),"/node_modules/prismjs/components/prism-django.js":()=>s(()=>import("./prism-django.363f3648.js"),[]),"/node_modules/prismjs/components/prism-django.min.js":()=>s(()=>import("./prism-django.min.388c66a5.js"),[]),"/node_modules/prismjs/components/prism-dns-zone-file.js":()=>s(()=>import("./prism-dns-zone-file.1dd3fea6.js"),[]),"/node_modules/prismjs/components/prism-dns-zone-file.min.js":()=>s(()=>import("./prism-dns-zone-file.min.a93d63b2.js"),[]),"/node_modules/prismjs/components/prism-docker.js":()=>s(()=>import("./prism-docker.33bd684d.js"),[]),"/node_modules/prismjs/components/prism-docker.min.js":()=>s(()=>import("./prism-docker.min.9bbbe679.js"),[]),"/node_modules/prismjs/components/prism-dot.js":()=>s(()=>import("./prism-dot.f36085c2.js"),[]),"/node_modules/prismjs/components/prism-dot.min.js":()=>s(()=>import("./prism-dot.min.a3f9fb18.js"),[]),"/node_modules/prismjs/components/prism-ebnf.js":()=>s(()=>import("./prism-ebnf.acf467ef.js"),[]),"/node_modules/prismjs/components/prism-ebnf.min.js":()=>s(()=>import("./prism-ebnf.min.57b9cfb5.js"),[]),"/node_modules/prismjs/components/prism-editorconfig.js":()=>s(()=>import("./prism-editorconfig.3fc1c442.js"),[]),"/node_modules/prismjs/components/prism-editorconfig.min.js":()=>s(()=>import("./prism-editorconfig.min.1d3cfe34.js"),[]),"/node_modules/prismjs/components/prism-eiffel.js":()=>s(()=>import("./prism-eiffel.df89f666.js"),[]),"/node_modules/prismjs/components/prism-eiffel.min.js":()=>s(()=>import("./prism-eiffel.min.5987b8fc.js"),[]),"/node_modules/prismjs/components/prism-ejs.js":()=>s(()=>import("./prism-ejs.8d966288.js"),[]),"/node_modules/prismjs/components/prism-ejs.min.js":()=>s(()=>import("./prism-ejs.min.4eb8f021.js"),[]),"/node_modules/prismjs/components/prism-elixir.js":()=>s(()=>import("./prism-elixir.d8b8c282.js"),[]),"/node_modules/prismjs/components/prism-elixir.min.js":()=>s(()=>import("./prism-elixir.min.41668258.js"),[]),"/node_modules/prismjs/components/prism-elm.js":()=>s(()=>import("./prism-elm.e05329fb.js"),[]),"/node_modules/prismjs/components/prism-elm.min.js":()=>s(()=>import("./prism-elm.min.d16b2ff7.js"),[]),"/node_modules/prismjs/components/prism-erb.js":()=>s(()=>import("./prism-erb.34ba3ab2.js"),[]),"/node_modules/prismjs/components/prism-erb.min.js":()=>s(()=>import("./prism-erb.min.9761701c.js"),[]),"/node_modules/prismjs/components/prism-erlang.js":()=>s(()=>import("./prism-erlang.53d163f4.js"),[]),"/node_modules/prismjs/components/prism-erlang.min.js":()=>s(()=>import("./prism-erlang.min.f8614259.js"),[]),"/node_modules/prismjs/components/prism-etlua.js":()=>s(()=>import("./prism-etlua.f2a03d4f.js"),[]),"/node_modules/prismjs/components/prism-etlua.min.js":()=>s(()=>import("./prism-etlua.min.c7d31ff8.js"),[]),"/node_modules/prismjs/components/prism-excel-formula.js":()=>s(()=>import("./prism-excel-formula.368253d2.js"),[]),"/node_modules/prismjs/components/prism-excel-formula.min.js":()=>s(()=>import("./prism-excel-formula.min.ea52b508.js"),[]),"/node_modules/prismjs/components/prism-factor.js":()=>s(()=>import("./prism-factor.da7d2ec1.js"),[]),"/node_modules/prismjs/components/prism-factor.min.js":()=>s(()=>import("./prism-factor.min.e15fa04d.js"),[]),"/node_modules/prismjs/components/prism-false.js":()=>s(()=>import("./prism-false.28f435f4.js"),[]),"/node_modules/prismjs/components/prism-false.min.js":()=>s(()=>import("./prism-false.min.d4c14211.js"),[]),"/node_modules/prismjs/components/prism-firestore-security-rules.js":()=>s(()=>import("./prism-firestore-security-rules.2ddfdd82.js"),[]),"/node_modules/prismjs/components/prism-firestore-security-rules.min.js":()=>s(()=>import("./prism-firestore-security-rules.min.94ba4f04.js"),[]),"/node_modules/prismjs/components/prism-flow.js":()=>s(()=>import("./prism-flow.e5dd3151.js"),[]),"/node_modules/prismjs/components/prism-flow.min.js":()=>s(()=>import("./prism-flow.min.f2bf6db0.js"),[]),"/node_modules/prismjs/components/prism-fortran.js":()=>s(()=>import("./prism-fortran.f9dd2d9b.js"),[]),"/node_modules/prismjs/components/prism-fortran.min.js":()=>s(()=>import("./prism-fortran.min.e1654148.js"),[]),"/node_modules/prismjs/components/prism-fsharp.js":()=>s(()=>import("./prism-fsharp.350f1ca7.js"),[]),"/node_modules/prismjs/components/prism-fsharp.min.js":()=>s(()=>import("./prism-fsharp.min.0d89229f.js"),[]),"/node_modules/prismjs/components/prism-ftl.js":()=>s(()=>import("./prism-ftl.4be9f630.js"),[]),"/node_modules/prismjs/components/prism-ftl.min.js":()=>s(()=>import("./prism-ftl.min.48e2834c.js"),[]),"/node_modules/prismjs/components/prism-gap.js":()=>s(()=>import("./prism-gap.0297113a.js"),[]),"/node_modules/prismjs/components/prism-gap.min.js":()=>s(()=>import("./prism-gap.min.3edc51bb.js"),[]),"/node_modules/prismjs/components/prism-gcode.js":()=>s(()=>import("./prism-gcode.7e41be13.js"),[]),"/node_modules/prismjs/components/prism-gcode.min.js":()=>s(()=>import("./prism-gcode.min.a5abc03a.js"),[]),"/node_modules/prismjs/components/prism-gdscript.js":()=>s(()=>import("./prism-gdscript.67984978.js"),[]),"/node_modules/prismjs/components/prism-gdscript.min.js":()=>s(()=>import("./prism-gdscript.min.f1d11004.js"),[]),"/node_modules/prismjs/components/prism-gedcom.js":()=>s(()=>import("./prism-gedcom.eff84e51.js"),[]),"/node_modules/prismjs/components/prism-gedcom.min.js":()=>s(()=>import("./prism-gedcom.min.94aad70d.js"),[]),"/node_modules/prismjs/components/prism-gettext.js":()=>s(()=>import("./prism-gettext.bbe72515.js"),[]),"/node_modules/prismjs/components/prism-gettext.min.js":()=>s(()=>import("./prism-gettext.min.398506b7.js"),[]),"/node_modules/prismjs/components/prism-gherkin.js":()=>s(()=>import("./prism-gherkin.cc2f8123.js"),[]),"/node_modules/prismjs/components/prism-gherkin.min.js":()=>s(()=>import("./prism-gherkin.min.4f60df89.js"),[]),"/node_modules/prismjs/components/prism-git.js":()=>s(()=>import("./prism-git.4fa3693a.js"),[]),"/node_modules/prismjs/components/prism-git.min.js":()=>s(()=>import("./prism-git.min.36c6cc79.js"),[]),"/node_modules/prismjs/components/prism-glsl.js":()=>s(()=>import("./prism-glsl.3209fb95.js"),[]),"/node_modules/prismjs/components/prism-glsl.min.js":()=>s(()=>import("./prism-glsl.min.5168895a.js"),[]),"/node_modules/prismjs/components/prism-gml.js":()=>s(()=>import("./prism-gml.00ef1f5b.js"),[]),"/node_modules/prismjs/components/prism-gml.min.js":()=>s(()=>import("./prism-gml.min.fb846a0d.js"),[]),"/node_modules/prismjs/components/prism-gn.js":()=>s(()=>import("./prism-gn.4ba8dd03.js"),[]),"/node_modules/prismjs/components/prism-gn.min.js":()=>s(()=>import("./prism-gn.min.95f9f3f2.js"),[]),"/node_modules/prismjs/components/prism-go-module.js":()=>s(()=>import("./prism-go-module.92a7e409.js"),[]),"/node_modules/prismjs/components/prism-go-module.min.js":()=>s(()=>import("./prism-go-module.min.cf748afd.js"),[]),"/node_modules/prismjs/components/prism-go.js":()=>s(()=>import("./prism-go.62561c56.js"),[]),"/node_modules/prismjs/components/prism-go.min.js":()=>s(()=>import("./prism-go.min.b316f5d4.js"),[]),"/node_modules/prismjs/components/prism-graphql.js":()=>s(()=>import("./prism-graphql.ee471c33.js"),[]),"/node_modules/prismjs/components/prism-graphql.min.js":()=>s(()=>import("./prism-graphql.min.95bad8d8.js"),[]),"/node_modules/prismjs/components/prism-groovy.js":()=>s(()=>import("./prism-groovy.16f9818e.js"),[]),"/node_modules/prismjs/components/prism-groovy.min.js":()=>s(()=>import("./prism-groovy.min.d3214f02.js"),[]),"/node_modules/prismjs/components/prism-haml.js":()=>s(()=>import("./prism-haml.5e1987ad.js"),[]),"/node_modules/prismjs/components/prism-haml.min.js":()=>s(()=>import("./prism-haml.min.bd2953c4.js"),[]),"/node_modules/prismjs/components/prism-handlebars.js":()=>s(()=>import("./prism-handlebars.476a0191.js"),[]),"/node_modules/prismjs/components/prism-handlebars.min.js":()=>s(()=>import("./prism-handlebars.min.673226c2.js"),[]),"/node_modules/prismjs/components/prism-haskell.js":()=>s(()=>import("./prism-haskell.a63e5821.js"),[]),"/node_modules/prismjs/components/prism-haskell.min.js":()=>s(()=>import("./prism-haskell.min.b6e07f49.js"),[]),"/node_modules/prismjs/components/prism-haxe.js":()=>s(()=>import("./prism-haxe.bd6039c4.js"),[]),"/node_modules/prismjs/components/prism-haxe.min.js":()=>s(()=>import("./prism-haxe.min.7637e768.js"),[]),"/node_modules/prismjs/components/prism-hcl.js":()=>s(()=>import("./prism-hcl.7164eac4.js"),[]),"/node_modules/prismjs/components/prism-hcl.min.js":()=>s(()=>import("./prism-hcl.min.394a66f9.js"),[]),"/node_modules/prismjs/components/prism-hlsl.js":()=>s(()=>import("./prism-hlsl.426aad93.js"),[]),"/node_modules/prismjs/components/prism-hlsl.min.js":()=>s(()=>import("./prism-hlsl.min.4f7931cb.js"),[]),"/node_modules/prismjs/components/prism-hoon.js":()=>s(()=>import("./prism-hoon.fa7030d5.js"),[]),"/node_modules/prismjs/components/prism-hoon.min.js":()=>s(()=>import("./prism-hoon.min.92f5c3e7.js"),[]),"/node_modules/prismjs/components/prism-hpkp.js":()=>s(()=>import("./prism-hpkp.6a24d199.js"),[]),"/node_modules/prismjs/components/prism-hpkp.min.js":()=>s(()=>import("./prism-hpkp.min.1ca3462c.js"),[]),"/node_modules/prismjs/components/prism-hsts.js":()=>s(()=>import("./prism-hsts.678142cf.js"),[]),"/node_modules/prismjs/components/prism-hsts.min.js":()=>s(()=>import("./prism-hsts.min.52a5fff7.js"),[]),"/node_modules/prismjs/components/prism-http.js":()=>s(()=>import("./prism-http.d4ddd9e7.js"),[]),"/node_modules/prismjs/components/prism-http.min.js":()=>s(()=>import("./prism-http.min.b3fc82d8.js"),[]),"/node_modules/prismjs/components/prism-ichigojam.js":()=>s(()=>import("./prism-ichigojam.f548bf94.js"),[]),"/node_modules/prismjs/components/prism-ichigojam.min.js":()=>s(()=>import("./prism-ichigojam.min.092217f4.js"),[]),"/node_modules/prismjs/components/prism-icon.js":()=>s(()=>import("./prism-icon.4622fe0c.js"),[]),"/node_modules/prismjs/components/prism-icon.min.js":()=>s(()=>import("./prism-icon.min.9c18bae3.js"),[]),"/node_modules/prismjs/components/prism-icu-message-format.js":()=>s(()=>import("./prism-icu-message-format.d32df461.js"),[]),"/node_modules/prismjs/components/prism-icu-message-format.min.js":()=>s(()=>import("./prism-icu-message-format.min.2802d7a2.js"),[]),"/node_modules/prismjs/components/prism-idris.js":()=>s(()=>import("./prism-idris.b5254dc5.js"),[]),"/node_modules/prismjs/components/prism-idris.min.js":()=>s(()=>import("./prism-idris.min.c16b57ee.js"),[]),"/node_modules/prismjs/components/prism-iecst.js":()=>s(()=>import("./prism-iecst.cd630a30.js"),[]),"/node_modules/prismjs/components/prism-iecst.min.js":()=>s(()=>import("./prism-iecst.min.33681309.js"),[]),"/node_modules/prismjs/components/prism-ignore.js":()=>s(()=>import("./prism-ignore.a068bae3.js"),[]),"/node_modules/prismjs/components/prism-ignore.min.js":()=>s(()=>import("./prism-ignore.min.f7d1a022.js"),[]),"/node_modules/prismjs/components/prism-inform7.js":()=>s(()=>import("./prism-inform7.c07bb88d.js"),[]),"/node_modules/prismjs/components/prism-inform7.min.js":()=>s(()=>import("./prism-inform7.min.090685f2.js"),[]),"/node_modules/prismjs/components/prism-ini.js":()=>s(()=>import("./prism-ini.cca4993b.js"),[]),"/node_modules/prismjs/components/prism-ini.min.js":()=>s(()=>import("./prism-ini.min.065eaf9a.js"),[]),"/node_modules/prismjs/components/prism-io.js":()=>s(()=>import("./prism-io.226a7ce6.js"),[]),"/node_modules/prismjs/components/prism-io.min.js":()=>s(()=>import("./prism-io.min.2ee5f37e.js"),[]),"/node_modules/prismjs/components/prism-j.js":()=>s(()=>import("./prism-j.19ad9075.js"),[]),"/node_modules/prismjs/components/prism-j.min.js":()=>s(()=>import("./prism-j.min.0a593c47.js"),[]),"/node_modules/prismjs/components/prism-java.js":()=>s(()=>import("./prism-java.c590a5fc.js"),[]),"/node_modules/prismjs/components/prism-java.min.js":()=>s(()=>import("./prism-java.min.86482a98.js"),[]),"/node_modules/prismjs/components/prism-javadoc.js":()=>s(()=>import("./prism-javadoc.e380761c.js"),[]),"/node_modules/prismjs/components/prism-javadoc.min.js":()=>s(()=>import("./prism-javadoc.min.51241024.js"),[]),"/node_modules/prismjs/components/prism-javadoclike.js":()=>s(()=>import("./prism-javadoclike.13c0424f.js"),[]),"/node_modules/prismjs/components/prism-javadoclike.min.js":()=>s(()=>import("./prism-javadoclike.min.028161a4.js"),[]),"/node_modules/prismjs/components/prism-javascript.js":()=>s(()=>import("./prism-javascript.7fb920e9.js"),[]),"/node_modules/prismjs/components/prism-javascript.min.js":()=>s(()=>import("./prism-javascript.min.d2e1e9f0.js"),[]),"/node_modules/prismjs/components/prism-javastacktrace.js":()=>s(()=>import("./prism-javastacktrace.0fddc2b2.js"),[]),"/node_modules/prismjs/components/prism-javastacktrace.min.js":()=>s(()=>import("./prism-javastacktrace.min.8edcd487.js"),[]),"/node_modules/prismjs/components/prism-jexl.js":()=>s(()=>import("./prism-jexl.b46c6ff7.js"),[]),"/node_modules/prismjs/components/prism-jexl.min.js":()=>s(()=>import("./prism-jexl.min.f6181c78.js"),[]),"/node_modules/prismjs/components/prism-jolie.js":()=>s(()=>import("./prism-jolie.5b37db49.js"),[]),"/node_modules/prismjs/components/prism-jolie.min.js":()=>s(()=>import("./prism-jolie.min.03af0b04.js"),[]),"/node_modules/prismjs/components/prism-jq.js":()=>s(()=>import("./prism-jq.78d44986.js"),[]),"/node_modules/prismjs/components/prism-jq.min.js":()=>s(()=>import("./prism-jq.min.1e13b67f.js"),[]),"/node_modules/prismjs/components/prism-js-extras.js":()=>s(()=>import("./prism-js-extras.d0544b65.js"),[]),"/node_modules/prismjs/components/prism-js-extras.min.js":()=>s(()=>import("./prism-js-extras.min.782a6037.js"),[]),"/node_modules/prismjs/components/prism-js-templates.js":()=>s(()=>import("./prism-js-templates.5116f9a3.js"),[]),"/node_modules/prismjs/components/prism-js-templates.min.js":()=>s(()=>import("./prism-js-templates.min.41faee79.js"),[]),"/node_modules/prismjs/components/prism-jsdoc.js":()=>s(()=>import("./prism-jsdoc.89fca65f.js"),[]),"/node_modules/prismjs/components/prism-jsdoc.min.js":()=>s(()=>import("./prism-jsdoc.min.d8da4a30.js"),[]),"/node_modules/prismjs/components/prism-json.js":()=>s(()=>import("./prism-json.882830cd.js"),[]),"/node_modules/prismjs/components/prism-json.min.js":()=>s(()=>import("./prism-json.min.639cdaaf.js"),[]),"/node_modules/prismjs/components/prism-json5.js":()=>s(()=>import("./prism-json5.d0ff9a20.js"),[]),"/node_modules/prismjs/components/prism-json5.min.js":()=>s(()=>import("./prism-json5.min.f42a046c.js"),[]),"/node_modules/prismjs/components/prism-jsonp.js":()=>s(()=>import("./prism-jsonp.755fdb82.js"),[]),"/node_modules/prismjs/components/prism-jsonp.min.js":()=>s(()=>import("./prism-jsonp.min.40d6adff.js"),[]),"/node_modules/prismjs/components/prism-jsstacktrace.js":()=>s(()=>import("./prism-jsstacktrace.01a2d264.js"),[]),"/node_modules/prismjs/components/prism-jsstacktrace.min.js":()=>s(()=>import("./prism-jsstacktrace.min.6ba5b30f.js"),[]),"/node_modules/prismjs/components/prism-jsx.js":()=>s(()=>import("./prism-jsx.4cc368b1.js"),[]),"/node_modules/prismjs/components/prism-jsx.min.js":()=>s(()=>import("./prism-jsx.min.7f3e28f0.js"),[]),"/node_modules/prismjs/components/prism-julia.js":()=>s(()=>import("./prism-julia.de3bee5e.js"),[]),"/node_modules/prismjs/components/prism-julia.min.js":()=>s(()=>import("./prism-julia.min.a7b85689.js"),[]),"/node_modules/prismjs/components/prism-keepalived.js":()=>s(()=>import("./prism-keepalived.72a7dc1b.js"),[]),"/node_modules/prismjs/components/prism-keepalived.min.js":()=>s(()=>import("./prism-keepalived.min.c1a8e1a4.js"),[]),"/node_modules/prismjs/components/prism-keyman.js":()=>s(()=>import("./prism-keyman.1c126a6d.js"),[]),"/node_modules/prismjs/components/prism-keyman.min.js":()=>s(()=>import("./prism-keyman.min.326b32ec.js"),[]),"/node_modules/prismjs/components/prism-kotlin.js":()=>s(()=>import("./prism-kotlin.4ef611ec.js"),[]),"/node_modules/prismjs/components/prism-kotlin.min.js":()=>s(()=>import("./prism-kotlin.min.55c21aaf.js"),[]),"/node_modules/prismjs/components/prism-kumir.js":()=>s(()=>import("./prism-kumir.c8a588cd.js"),[]),"/node_modules/prismjs/components/prism-kumir.min.js":()=>s(()=>import("./prism-kumir.min.6fcb63d3.js"),[]),"/node_modules/prismjs/components/prism-kusto.js":()=>s(()=>import("./prism-kusto.0ddc9b52.js"),[]),"/node_modules/prismjs/components/prism-kusto.min.js":()=>s(()=>import("./prism-kusto.min.ee8a04be.js"),[]),"/node_modules/prismjs/components/prism-latex.js":()=>s(()=>import("./prism-latex.3c5f58d7.js"),[]),"/node_modules/prismjs/components/prism-latex.min.js":()=>s(()=>import("./prism-latex.min.45010322.js"),[]),"/node_modules/prismjs/components/prism-latte.js":()=>s(()=>import("./prism-latte.e9bdb98d.js"),[]),"/node_modules/prismjs/components/prism-latte.min.js":()=>s(()=>import("./prism-latte.min.2d084446.js"),[]),"/node_modules/prismjs/components/prism-less.js":()=>s(()=>import("./prism-less.2acf0488.js"),[]),"/node_modules/prismjs/components/prism-less.min.js":()=>s(()=>import("./prism-less.min.3f20d4e7.js"),[]),"/node_modules/prismjs/components/prism-lilypond.js":()=>s(()=>import("./prism-lilypond.62e1ec70.js"),[]),"/node_modules/prismjs/components/prism-lilypond.min.js":()=>s(()=>import("./prism-lilypond.min.402e735e.js"),[]),"/node_modules/prismjs/components/prism-linker-script.js":()=>s(()=>import("./prism-linker-script.1c7cd8b0.js"),[]),"/node_modules/prismjs/components/prism-linker-script.min.js":()=>s(()=>import("./prism-linker-script.min.5efca333.js"),[]),"/node_modules/prismjs/components/prism-liquid.js":()=>s(()=>import("./prism-liquid.1777bc13.js"),[]),"/node_modules/prismjs/components/prism-liquid.min.js":()=>s(()=>import("./prism-liquid.min.2625d378.js"),[]),"/node_modules/prismjs/components/prism-lisp.js":()=>s(()=>import("./prism-lisp.21168a9a.js"),[]),"/node_modules/prismjs/components/prism-lisp.min.js":()=>s(()=>import("./prism-lisp.min.3d11b620.js"),[]),"/node_modules/prismjs/components/prism-livescript.js":()=>s(()=>import("./prism-livescript.6ab27fa3.js"),[]),"/node_modules/prismjs/components/prism-livescript.min.js":()=>s(()=>import("./prism-livescript.min.3ddf3c2a.js"),[]),"/node_modules/prismjs/components/prism-llvm.js":()=>s(()=>import("./prism-llvm.67cc05eb.js"),[]),"/node_modules/prismjs/components/prism-llvm.min.js":()=>s(()=>import("./prism-llvm.min.e49e8c65.js"),[]),"/node_modules/prismjs/components/prism-log.js":()=>s(()=>import("./prism-log.dd325530.js"),[]),"/node_modules/prismjs/components/prism-log.min.js":()=>s(()=>import("./prism-log.min.443f661e.js"),[]),"/node_modules/prismjs/components/prism-lolcode.js":()=>s(()=>import("./prism-lolcode.dbba0aa7.js"),[]),"/node_modules/prismjs/components/prism-lolcode.min.js":()=>s(()=>import("./prism-lolcode.min.2288660d.js"),[]),"/node_modules/prismjs/components/prism-lua.js":()=>s(()=>import("./prism-lua.158a8e16.js"),[]),"/node_modules/prismjs/components/prism-lua.min.js":()=>s(()=>import("./prism-lua.min.446e7bce.js"),[]),"/node_modules/prismjs/components/prism-magma.js":()=>s(()=>import("./prism-magma.64293476.js"),[]),"/node_modules/prismjs/components/prism-magma.min.js":()=>s(()=>import("./prism-magma.min.efdd555e.js"),[]),"/node_modules/prismjs/components/prism-makefile.js":()=>s(()=>import("./prism-makefile.750467a4.js"),[]),"/node_modules/prismjs/components/prism-makefile.min.js":()=>s(()=>import("./prism-makefile.min.635a996e.js"),[]),"/node_modules/prismjs/components/prism-markdown.js":()=>s(()=>import("./prism-markdown.3c13ba5d.js"),[]),"/node_modules/prismjs/components/prism-markdown.min.js":()=>s(()=>import("./prism-markdown.min.d70eb587.js"),[]),"/node_modules/prismjs/components/prism-markup-templating.js":()=>s(()=>import("./prism-markup-templating.a810bb18.js"),[]),"/node_modules/prismjs/components/prism-markup-templating.min.js":()=>s(()=>import("./prism-markup-templating.min.d93240ce.js"),[]),"/node_modules/prismjs/components/prism-markup.js":()=>s(()=>import("./prism-markup.4088276a.js"),[]),"/node_modules/prismjs/components/prism-markup.min.js":()=>s(()=>import("./prism-markup.min.8ba6fd87.js"),[]),"/node_modules/prismjs/components/prism-mata.js":()=>s(()=>import("./prism-mata.0acf7680.js"),[]),"/node_modules/prismjs/components/prism-mata.min.js":()=>s(()=>import("./prism-mata.min.c3a8903a.js"),[]),"/node_modules/prismjs/components/prism-matlab.js":()=>s(()=>import("./prism-matlab.71e9a30a.js"),[]),"/node_modules/prismjs/components/prism-matlab.min.js":()=>s(()=>import("./prism-matlab.min.b636f194.js"),[]),"/node_modules/prismjs/components/prism-maxscript.js":()=>s(()=>import("./prism-maxscript.d8ade83b.js"),[]),"/node_modules/prismjs/components/prism-maxscript.min.js":()=>s(()=>import("./prism-maxscript.min.73c1c1cf.js"),[]),"/node_modules/prismjs/components/prism-mel.js":()=>s(()=>import("./prism-mel.f0a9b8c3.js"),[]),"/node_modules/prismjs/components/prism-mel.min.js":()=>s(()=>import("./prism-mel.min.d45a43d5.js"),[]),"/node_modules/prismjs/components/prism-mermaid.js":()=>s(()=>import("./prism-mermaid.1ac9971a.js"),[]),"/node_modules/prismjs/components/prism-mermaid.min.js":()=>s(()=>import("./prism-mermaid.min.dbf805f1.js"),[]),"/node_modules/prismjs/components/prism-mizar.js":()=>s(()=>import("./prism-mizar.2a2666b5.js"),[]),"/node_modules/prismjs/components/prism-mizar.min.js":()=>s(()=>import("./prism-mizar.min.2e54f942.js"),[]),"/node_modules/prismjs/components/prism-mongodb.js":()=>s(()=>import("./prism-mongodb.5972181c.js"),[]),"/node_modules/prismjs/components/prism-mongodb.min.js":()=>s(()=>import("./prism-mongodb.min.8d478e85.js"),[]),"/node_modules/prismjs/components/prism-monkey.js":()=>s(()=>import("./prism-monkey.97ddfa33.js"),[]),"/node_modules/prismjs/components/prism-monkey.min.js":()=>s(()=>import("./prism-monkey.min.2f0935f8.js"),[]),"/node_modules/prismjs/components/prism-moonscript.js":()=>s(()=>import("./prism-moonscript.c69ba42b.js"),[]),"/node_modules/prismjs/components/prism-moonscript.min.js":()=>s(()=>import("./prism-moonscript.min.48383f47.js"),[]),"/node_modules/prismjs/components/prism-n1ql.js":()=>s(()=>import("./prism-n1ql.30e13698.js"),[]),"/node_modules/prismjs/components/prism-n1ql.min.js":()=>s(()=>import("./prism-n1ql.min.93712a1f.js"),[]),"/node_modules/prismjs/components/prism-n4js.js":()=>s(()=>import("./prism-n4js.89e55519.js"),[]),"/node_modules/prismjs/components/prism-n4js.min.js":()=>s(()=>import("./prism-n4js.min.0d44549c.js"),[]),"/node_modules/prismjs/components/prism-nand2tetris-hdl.js":()=>s(()=>import("./prism-nand2tetris-hdl.cd0cce23.js"),[]),"/node_modules/prismjs/components/prism-nand2tetris-hdl.min.js":()=>s(()=>import("./prism-nand2tetris-hdl.min.12d295f1.js"),[]),"/node_modules/prismjs/components/prism-naniscript.js":()=>s(()=>import("./prism-naniscript.66295899.js"),[]),"/node_modules/prismjs/components/prism-naniscript.min.js":()=>s(()=>import("./prism-naniscript.min.282a9467.js"),[]),"/node_modules/prismjs/components/prism-nasm.js":()=>s(()=>import("./prism-nasm.c94fe83d.js"),[]),"/node_modules/prismjs/components/prism-nasm.min.js":()=>s(()=>import("./prism-nasm.min.00174b7b.js"),[]),"/node_modules/prismjs/components/prism-neon.js":()=>s(()=>import("./prism-neon.009a4326.js"),[]),"/node_modules/prismjs/components/prism-neon.min.js":()=>s(()=>import("./prism-neon.min.36eb98dd.js"),[]),"/node_modules/prismjs/components/prism-nevod.js":()=>s(()=>import("./prism-nevod.8e2e8478.js"),[]),"/node_modules/prismjs/components/prism-nevod.min.js":()=>s(()=>import("./prism-nevod.min.38e5b6b7.js"),[]),"/node_modules/prismjs/components/prism-nginx.js":()=>s(()=>import("./prism-nginx.8de9baaf.js"),[]),"/node_modules/prismjs/components/prism-nginx.min.js":()=>s(()=>import("./prism-nginx.min.be07e7cd.js"),[]),"/node_modules/prismjs/components/prism-nim.js":()=>s(()=>import("./prism-nim.211d311a.js"),[]),"/node_modules/prismjs/components/prism-nim.min.js":()=>s(()=>import("./prism-nim.min.bcbc63df.js"),[]),"/node_modules/prismjs/components/prism-nix.js":()=>s(()=>import("./prism-nix.b79d5618.js"),[]),"/node_modules/prismjs/components/prism-nix.min.js":()=>s(()=>import("./prism-nix.min.eb708a78.js"),[]),"/node_modules/prismjs/components/prism-nsis.js":()=>s(()=>import("./prism-nsis.8751262c.js"),[]),"/node_modules/prismjs/components/prism-nsis.min.js":()=>s(()=>import("./prism-nsis.min.cecbd168.js"),[]),"/node_modules/prismjs/components/prism-objectivec.js":()=>s(()=>import("./prism-objectivec.4042564e.js"),[]),"/node_modules/prismjs/components/prism-objectivec.min.js":()=>s(()=>import("./prism-objectivec.min.43a28d9c.js"),[]),"/node_modules/prismjs/components/prism-ocaml.js":()=>s(()=>import("./prism-ocaml.e8428fcd.js"),[]),"/node_modules/prismjs/components/prism-ocaml.min.js":()=>s(()=>import("./prism-ocaml.min.87bd686b.js"),[]),"/node_modules/prismjs/components/prism-odin.js":()=>s(()=>import("./prism-odin.17c6a569.js"),[]),"/node_modules/prismjs/components/prism-odin.min.js":()=>s(()=>import("./prism-odin.min.cdd2bff3.js"),[]),"/node_modules/prismjs/components/prism-opencl.js":()=>s(()=>import("./prism-opencl.91f2b9d0.js"),[]),"/node_modules/prismjs/components/prism-opencl.min.js":()=>s(()=>import("./prism-opencl.min.f0fad682.js"),[]),"/node_modules/prismjs/components/prism-openqasm.js":()=>s(()=>import("./prism-openqasm.98aed337.js"),[]),"/node_modules/prismjs/components/prism-openqasm.min.js":()=>s(()=>import("./prism-openqasm.min.5849d6a4.js"),[]),"/node_modules/prismjs/components/prism-oz.js":()=>s(()=>import("./prism-oz.b014f7b8.js"),[]),"/node_modules/prismjs/components/prism-oz.min.js":()=>s(()=>import("./prism-oz.min.d9b5fdda.js"),[]),"/node_modules/prismjs/components/prism-parigp.js":()=>s(()=>import("./prism-parigp.d2f5c756.js"),[]),"/node_modules/prismjs/components/prism-parigp.min.js":()=>s(()=>import("./prism-parigp.min.3b667926.js"),[]),"/node_modules/prismjs/components/prism-parser.js":()=>s(()=>import("./prism-parser.a31a9bc7.js"),[]),"/node_modules/prismjs/components/prism-parser.min.js":()=>s(()=>import("./prism-parser.min.d8e2f3c8.js"),[]),"/node_modules/prismjs/components/prism-pascal.js":()=>s(()=>import("./prism-pascal.73921fe3.js"),[]),"/node_modules/prismjs/components/prism-pascal.min.js":()=>s(()=>import("./prism-pascal.min.1ec03568.js"),[]),"/node_modules/prismjs/components/prism-pascaligo.js":()=>s(()=>import("./prism-pascaligo.4c35e2bf.js"),[]),"/node_modules/prismjs/components/prism-pascaligo.min.js":()=>s(()=>import("./prism-pascaligo.min.9d2011fe.js"),[]),"/node_modules/prismjs/components/prism-pcaxis.js":()=>s(()=>import("./prism-pcaxis.b0c81bbc.js"),[]),"/node_modules/prismjs/components/prism-pcaxis.min.js":()=>s(()=>import("./prism-pcaxis.min.9e24ba96.js"),[]),"/node_modules/prismjs/components/prism-peoplecode.js":()=>s(()=>import("./prism-peoplecode.0424e250.js"),[]),"/node_modules/prismjs/components/prism-peoplecode.min.js":()=>s(()=>import("./prism-peoplecode.min.c18fa04d.js"),[]),"/node_modules/prismjs/components/prism-perl.js":()=>s(()=>import("./prism-perl.50858d17.js"),[]),"/node_modules/prismjs/components/prism-perl.min.js":()=>s(()=>import("./prism-perl.min.716b3723.js"),[]),"/node_modules/prismjs/components/prism-php-extras.js":()=>s(()=>import("./prism-php-extras.a66ec6b3.js"),[]),"/node_modules/prismjs/components/prism-php-extras.min.js":()=>s(()=>import("./prism-php-extras.min.e635ff73.js"),[]),"/node_modules/prismjs/components/prism-php.js":()=>s(()=>import("./prism-php.b03b1223.js"),[]),"/node_modules/prismjs/components/prism-php.min.js":()=>s(()=>import("./prism-php.min.94bb7cf7.js"),[]),"/node_modules/prismjs/components/prism-phpdoc.js":()=>s(()=>import("./prism-phpdoc.bd5446da.js"),[]),"/node_modules/prismjs/components/prism-phpdoc.min.js":()=>s(()=>import("./prism-phpdoc.min.42dc9c70.js"),[]),"/node_modules/prismjs/components/prism-plant-uml.js":()=>s(()=>import("./prism-plant-uml.d2eb7f82.js"),[]),"/node_modules/prismjs/components/prism-plant-uml.min.js":()=>s(()=>import("./prism-plant-uml.min.fe990993.js"),[]),"/node_modules/prismjs/components/prism-plsql.js":()=>s(()=>import("./prism-plsql.efd973f9.js"),[]),"/node_modules/prismjs/components/prism-plsql.min.js":()=>s(()=>import("./prism-plsql.min.8061daf0.js"),[]),"/node_modules/prismjs/components/prism-powerquery.js":()=>s(()=>import("./prism-powerquery.c77f2690.js"),[]),"/node_modules/prismjs/components/prism-powerquery.min.js":()=>s(()=>import("./prism-powerquery.min.e5bda5ec.js"),[]),"/node_modules/prismjs/components/prism-powershell.js":()=>s(()=>import("./prism-powershell.626fa3ba.js"),[]),"/node_modules/prismjs/components/prism-powershell.min.js":()=>s(()=>import("./prism-powershell.min.284fbdaf.js"),[]),"/node_modules/prismjs/components/prism-processing.js":()=>s(()=>import("./prism-processing.2139d019.js"),[]),"/node_modules/prismjs/components/prism-processing.min.js":()=>s(()=>import("./prism-processing.min.6a261cf5.js"),[]),"/node_modules/prismjs/components/prism-prolog.js":()=>s(()=>import("./prism-prolog.75639c36.js"),[]),"/node_modules/prismjs/components/prism-prolog.min.js":()=>s(()=>import("./prism-prolog.min.c39582fc.js"),[]),"/node_modules/prismjs/components/prism-promql.js":()=>s(()=>import("./prism-promql.54627f64.js"),[]),"/node_modules/prismjs/components/prism-promql.min.js":()=>s(()=>import("./prism-promql.min.96e4412a.js"),[]),"/node_modules/prismjs/components/prism-properties.js":()=>s(()=>import("./prism-properties.25c59d44.js"),[]),"/node_modules/prismjs/components/prism-properties.min.js":()=>s(()=>import("./prism-properties.min.985c135b.js"),[]),"/node_modules/prismjs/components/prism-protobuf.js":()=>s(()=>import("./prism-protobuf.b828a653.js"),[]),"/node_modules/prismjs/components/prism-protobuf.min.js":()=>s(()=>import("./prism-protobuf.min.be8b9fc2.js"),[]),"/node_modules/prismjs/components/prism-psl.js":()=>s(()=>import("./prism-psl.5c3b4654.js"),[]),"/node_modules/prismjs/components/prism-psl.min.js":()=>s(()=>import("./prism-psl.min.b8716695.js"),[]),"/node_modules/prismjs/components/prism-pug.js":()=>s(()=>import("./prism-pug.dfb92dd7.js"),[]),"/node_modules/prismjs/components/prism-pug.min.js":()=>s(()=>import("./prism-pug.min.8fe04a8d.js"),[]),"/node_modules/prismjs/components/prism-puppet.js":()=>s(()=>import("./prism-puppet.460b4515.js"),[]),"/node_modules/prismjs/components/prism-puppet.min.js":()=>s(()=>import("./prism-puppet.min.f892f93d.js"),[]),"/node_modules/prismjs/components/prism-pure.js":()=>s(()=>import("./prism-pure.4d898970.js"),[]),"/node_modules/prismjs/components/prism-pure.min.js":()=>s(()=>import("./prism-pure.min.930c4a61.js"),[]),"/node_modules/prismjs/components/prism-purebasic.js":()=>s(()=>import("./prism-purebasic.282a21af.js"),[]),"/node_modules/prismjs/components/prism-purebasic.min.js":()=>s(()=>import("./prism-purebasic.min.90641b54.js"),[]),"/node_modules/prismjs/components/prism-purescript.js":()=>s(()=>import("./prism-purescript.2c17bcaf.js"),[]),"/node_modules/prismjs/components/prism-purescript.min.js":()=>s(()=>import("./prism-purescript.min.92a1d243.js"),[]),"/node_modules/prismjs/components/prism-python.js":()=>s(()=>import("./prism-python.97b4fd77.js"),[]),"/node_modules/prismjs/components/prism-python.min.js":()=>s(()=>import("./prism-python.min.e9edcb03.js"),[]),"/node_modules/prismjs/components/prism-q.js":()=>s(()=>import("./prism-q.c1ba2d3e.js"),[]),"/node_modules/prismjs/components/prism-q.min.js":()=>s(()=>import("./prism-q.min.aed76b4a.js"),[]),"/node_modules/prismjs/components/prism-qml.js":()=>s(()=>import("./prism-qml.53613b29.js"),[]),"/node_modules/prismjs/components/prism-qml.min.js":()=>s(()=>import("./prism-qml.min.00c66892.js"),[]),"/node_modules/prismjs/components/prism-qore.js":()=>s(()=>import("./prism-qore.ce1b206d.js"),[]),"/node_modules/prismjs/components/prism-qore.min.js":()=>s(()=>import("./prism-qore.min.c2749b31.js"),[]),"/node_modules/prismjs/components/prism-qsharp.js":()=>s(()=>import("./prism-qsharp.12cdcc23.js"),[]),"/node_modules/prismjs/components/prism-qsharp.min.js":()=>s(()=>import("./prism-qsharp.min.c092ed66.js"),[]),"/node_modules/prismjs/components/prism-r.js":()=>s(()=>import("./prism-r.69548744.js"),[]),"/node_modules/prismjs/components/prism-r.min.js":()=>s(()=>import("./prism-r.min.6a3ed0e2.js"),[]),"/node_modules/prismjs/components/prism-racket.js":()=>s(()=>import("./prism-racket.d79164cf.js"),[]),"/node_modules/prismjs/components/prism-racket.min.js":()=>s(()=>import("./prism-racket.min.0a401ba2.js"),[]),"/node_modules/prismjs/components/prism-reason.js":()=>s(()=>import("./prism-reason.43668039.js"),[]),"/node_modules/prismjs/components/prism-reason.min.js":()=>s(()=>import("./prism-reason.min.371664d3.js"),[]),"/node_modules/prismjs/components/prism-regex.js":()=>s(()=>import("./prism-regex.21f0b99a.js"),[]),"/node_modules/prismjs/components/prism-regex.min.js":()=>s(()=>import("./prism-regex.min.ad6b4b0d.js"),[]),"/node_modules/prismjs/components/prism-rego.js":()=>s(()=>import("./prism-rego.5e2f3303.js"),[]),"/node_modules/prismjs/components/prism-rego.min.js":()=>s(()=>import("./prism-rego.min.95194c0f.js"),[]),"/node_modules/prismjs/components/prism-renpy.js":()=>s(()=>import("./prism-renpy.87b0f44b.js"),[]),"/node_modules/prismjs/components/prism-renpy.min.js":()=>s(()=>import("./prism-renpy.min.280089d2.js"),[]),"/node_modules/prismjs/components/prism-rescript.js":()=>s(()=>import("./prism-rescript.4484b6da.js"),[]),"/node_modules/prismjs/components/prism-rescript.min.js":()=>s(()=>import("./prism-rescript.min.596ce75d.js"),[]),"/node_modules/prismjs/components/prism-rest.js":()=>s(()=>import("./prism-rest.66974469.js"),[]),"/node_modules/prismjs/components/prism-rest.min.js":()=>s(()=>import("./prism-rest.min.98842b99.js"),[]),"/node_modules/prismjs/components/prism-rip.js":()=>s(()=>import("./prism-rip.89b5e2b5.js"),[]),"/node_modules/prismjs/components/prism-rip.min.js":()=>s(()=>import("./prism-rip.min.771c35b9.js"),[]),"/node_modules/prismjs/components/prism-roboconf.js":()=>s(()=>import("./prism-roboconf.98ca1975.js"),[]),"/node_modules/prismjs/components/prism-roboconf.min.js":()=>s(()=>import("./prism-roboconf.min.01fd740d.js"),[]),"/node_modules/prismjs/components/prism-robotframework.js":()=>s(()=>import("./prism-robotframework.03c44bf4.js"),[]),"/node_modules/prismjs/components/prism-robotframework.min.js":()=>s(()=>import("./prism-robotframework.min.4f6e1c38.js"),[]),"/node_modules/prismjs/components/prism-ruby.js":()=>s(()=>import("./prism-ruby.d01b091c.js"),[]),"/node_modules/prismjs/components/prism-ruby.min.js":()=>s(()=>import("./prism-ruby.min.6f187c06.js"),[]),"/node_modules/prismjs/components/prism-rust.js":()=>s(()=>import("./prism-rust.565b489f.js"),[]),"/node_modules/prismjs/components/prism-rust.min.js":()=>s(()=>import("./prism-rust.min.62ccb0f8.js"),[]),"/node_modules/prismjs/components/prism-sas.js":()=>s(()=>import("./prism-sas.146f3318.js"),[]),"/node_modules/prismjs/components/prism-sas.min.js":()=>s(()=>import("./prism-sas.min.958c95f6.js"),[]),"/node_modules/prismjs/components/prism-sass.js":()=>s(()=>import("./prism-sass.e0bd9757.js"),[]),"/node_modules/prismjs/components/prism-sass.min.js":()=>s(()=>import("./prism-sass.min.43e96c9e.js"),[]),"/node_modules/prismjs/components/prism-scala.js":()=>s(()=>import("./prism-scala.ab6d0d25.js"),[]),"/node_modules/prismjs/components/prism-scala.min.js":()=>s(()=>import("./prism-scala.min.73701912.js"),[]),"/node_modules/prismjs/components/prism-scheme.js":()=>s(()=>import("./prism-scheme.e1e5969b.js"),[]),"/node_modules/prismjs/components/prism-scheme.min.js":()=>s(()=>import("./prism-scheme.min.ba462de6.js"),[]),"/node_modules/prismjs/components/prism-scss.js":()=>s(()=>import("./prism-scss.5de8d7f1.js"),[]),"/node_modules/prismjs/components/prism-scss.min.js":()=>s(()=>import("./prism-scss.min.9ef8e17f.js"),[]),"/node_modules/prismjs/components/prism-shell-session.js":()=>s(()=>import("./prism-shell-session.123c73f8.js"),[]),"/node_modules/prismjs/components/prism-shell-session.min.js":()=>s(()=>import("./prism-shell-session.min.c95314fd.js"),[]),"/node_modules/prismjs/components/prism-smali.js":()=>s(()=>import("./prism-smali.8400a545.js"),[]),"/node_modules/prismjs/components/prism-smali.min.js":()=>s(()=>import("./prism-smali.min.71ae2e50.js"),[]),"/node_modules/prismjs/components/prism-smalltalk.js":()=>s(()=>import("./prism-smalltalk.d2480728.js"),[]),"/node_modules/prismjs/components/prism-smalltalk.min.js":()=>s(()=>import("./prism-smalltalk.min.e8ef31b2.js"),[]),"/node_modules/prismjs/components/prism-smarty.js":()=>s(()=>import("./prism-smarty.32e46ab4.js"),[]),"/node_modules/prismjs/components/prism-smarty.min.js":()=>s(()=>import("./prism-smarty.min.cbcb04f3.js"),[]),"/node_modules/prismjs/components/prism-sml.js":()=>s(()=>import("./prism-sml.4925b769.js"),[]),"/node_modules/prismjs/components/prism-sml.min.js":()=>s(()=>import("./prism-sml.min.885980a4.js"),[]),"/node_modules/prismjs/components/prism-solidity.js":()=>s(()=>import("./prism-solidity.b12aa391.js"),[]),"/node_modules/prismjs/components/prism-solidity.min.js":()=>s(()=>import("./prism-solidity.min.03b7bc16.js"),[]),"/node_modules/prismjs/components/prism-solution-file.js":()=>s(()=>import("./prism-solution-file.7e3ff092.js"),[]),"/node_modules/prismjs/components/prism-solution-file.min.js":()=>s(()=>import("./prism-solution-file.min.9c37ed82.js"),[]),"/node_modules/prismjs/components/prism-soy.js":()=>s(()=>import("./prism-soy.c61e1b02.js"),[]),"/node_modules/prismjs/components/prism-soy.min.js":()=>s(()=>import("./prism-soy.min.de8e328d.js"),[]),"/node_modules/prismjs/components/prism-sparql.js":()=>s(()=>import("./prism-sparql.bf3e4ad8.js"),[]),"/node_modules/prismjs/components/prism-sparql.min.js":()=>s(()=>import("./prism-sparql.min.af2a1acc.js"),[]),"/node_modules/prismjs/components/prism-splunk-spl.js":()=>s(()=>import("./prism-splunk-spl.8c7ab96a.js"),[]),"/node_modules/prismjs/components/prism-splunk-spl.min.js":()=>s(()=>import("./prism-splunk-spl.min.ea507787.js"),[]),"/node_modules/prismjs/components/prism-sqf.js":()=>s(()=>import("./prism-sqf.bb94e776.js"),[]),"/node_modules/prismjs/components/prism-sqf.min.js":()=>s(()=>import("./prism-sqf.min.27693b7c.js"),[]),"/node_modules/prismjs/components/prism-sql.js":()=>s(()=>import("./prism-sql.fec6201e.js"),[]),"/node_modules/prismjs/components/prism-sql.min.js":()=>s(()=>import("./prism-sql.min.c4c2aa66.js"),[]),"/node_modules/prismjs/components/prism-squirrel.js":()=>s(()=>import("./prism-squirrel.dcd4b4b4.js"),[]),"/node_modules/prismjs/components/prism-squirrel.min.js":()=>s(()=>import("./prism-squirrel.min.beecd8d7.js"),[]),"/node_modules/prismjs/components/prism-stan.js":()=>s(()=>import("./prism-stan.ad7b8e04.js"),[]),"/node_modules/prismjs/components/prism-stan.min.js":()=>s(()=>import("./prism-stan.min.544c1bc5.js"),[]),"/node_modules/prismjs/components/prism-stata.js":()=>s(()=>import("./prism-stata.63e4af52.js"),[]),"/node_modules/prismjs/components/prism-stata.min.js":()=>s(()=>import("./prism-stata.min.9940ef13.js"),[]),"/node_modules/prismjs/components/prism-stylus.js":()=>s(()=>import("./prism-stylus.21828aa5.js"),[]),"/node_modules/prismjs/components/prism-stylus.min.js":()=>s(()=>import("./prism-stylus.min.721e4c93.js"),[]),"/node_modules/prismjs/components/prism-supercollider.js":()=>s(()=>import("./prism-supercollider.a9ce3679.js"),[]),"/node_modules/prismjs/components/prism-supercollider.min.js":()=>s(()=>import("./prism-supercollider.min.3ef88d42.js"),[]),"/node_modules/prismjs/components/prism-swift.js":()=>s(()=>import("./prism-swift.9c4c74c8.js"),[]),"/node_modules/prismjs/components/prism-swift.min.js":()=>s(()=>import("./prism-swift.min.a38781e8.js"),[]),"/node_modules/prismjs/components/prism-systemd.js":()=>s(()=>import("./prism-systemd.a8b6ff79.js"),[]),"/node_modules/prismjs/components/prism-systemd.min.js":()=>s(()=>import("./prism-systemd.min.9515f45d.js"),[]),"/node_modules/prismjs/components/prism-t4-cs.js":()=>s(()=>import("./prism-t4-cs.e5613506.js"),[]),"/node_modules/prismjs/components/prism-t4-cs.min.js":()=>s(()=>import("./prism-t4-cs.min.df915e35.js"),[]),"/node_modules/prismjs/components/prism-t4-templating.js":()=>s(()=>import("./prism-t4-templating.0244d627.js"),[]),"/node_modules/prismjs/components/prism-t4-templating.min.js":()=>s(()=>import("./prism-t4-templating.min.4e3b5074.js"),[]),"/node_modules/prismjs/components/prism-t4-vb.js":()=>s(()=>import("./prism-t4-vb.ccf3dfa1.js"),[]),"/node_modules/prismjs/components/prism-t4-vb.min.js":()=>s(()=>import("./prism-t4-vb.min.a99acdf4.js"),[]),"/node_modules/prismjs/components/prism-tap.js":()=>s(()=>import("./prism-tap.113cb378.js"),[]),"/node_modules/prismjs/components/prism-tap.min.js":()=>s(()=>import("./prism-tap.min.46f99b8b.js"),[]),"/node_modules/prismjs/components/prism-tcl.js":()=>s(()=>import("./prism-tcl.ca8d725e.js"),[]),"/node_modules/prismjs/components/prism-tcl.min.js":()=>s(()=>import("./prism-tcl.min.6e12c490.js"),[]),"/node_modules/prismjs/components/prism-textile.js":()=>s(()=>import("./prism-textile.796aba44.js"),[]),"/node_modules/prismjs/components/prism-textile.min.js":()=>s(()=>import("./prism-textile.min.3f3dd46a.js"),[]),"/node_modules/prismjs/components/prism-toml.js":()=>s(()=>import("./prism-toml.285b049c.js"),[]),"/node_modules/prismjs/components/prism-toml.min.js":()=>s(()=>import("./prism-toml.min.2e6171f4.js"),[]),"/node_modules/prismjs/components/prism-tremor.js":()=>s(()=>import("./prism-tremor.92234a4b.js"),[]),"/node_modules/prismjs/components/prism-tremor.min.js":()=>s(()=>import("./prism-tremor.min.86b3b551.js"),[]),"/node_modules/prismjs/components/prism-tsx.js":()=>s(()=>import("./prism-tsx.ddc9edfb.js"),[]),"/node_modules/prismjs/components/prism-tsx.min.js":()=>s(()=>import("./prism-tsx.min.24ddbc4e.js"),[]),"/node_modules/prismjs/components/prism-tt2.js":()=>s(()=>import("./prism-tt2.72578f70.js"),[]),"/node_modules/prismjs/components/prism-tt2.min.js":()=>s(()=>import("./prism-tt2.min.ac0b0647.js"),[]),"/node_modules/prismjs/components/prism-turtle.js":()=>s(()=>import("./prism-turtle.f5b7dddd.js"),[]),"/node_modules/prismjs/components/prism-turtle.min.js":()=>s(()=>import("./prism-turtle.min.249d6d60.js"),[]),"/node_modules/prismjs/components/prism-twig.js":()=>s(()=>import("./prism-twig.e5058912.js"),[]),"/node_modules/prismjs/components/prism-twig.min.js":()=>s(()=>import("./prism-twig.min.8014ca32.js"),[]),"/node_modules/prismjs/components/prism-typescript.js":()=>s(()=>import("./prism-typescript.c3bad3eb.js"),[]),"/node_modules/prismjs/components/prism-typescript.min.js":()=>s(()=>import("./prism-typescript.min.fcc2cbad.js"),[]),"/node_modules/prismjs/components/prism-typoscript.js":()=>s(()=>import("./prism-typoscript.442e5345.js"),[]),"/node_modules/prismjs/components/prism-typoscript.min.js":()=>s(()=>import("./prism-typoscript.min.a218ff96.js"),[]),"/node_modules/prismjs/components/prism-unrealscript.js":()=>s(()=>import("./prism-unrealscript.e56bddba.js"),[]),"/node_modules/prismjs/components/prism-unrealscript.min.js":()=>s(()=>import("./prism-unrealscript.min.097f05f4.js"),[]),"/node_modules/prismjs/components/prism-uorazor.js":()=>s(()=>import("./prism-uorazor.1bddbbd2.js"),[]),"/node_modules/prismjs/components/prism-uorazor.min.js":()=>s(()=>import("./prism-uorazor.min.253e2c17.js"),[]),"/node_modules/prismjs/components/prism-uri.js":()=>s(()=>import("./prism-uri.04042f7f.js"),[]),"/node_modules/prismjs/components/prism-uri.min.js":()=>s(()=>import("./prism-uri.min.0c8b9350.js"),[]),"/node_modules/prismjs/components/prism-v.js":()=>s(()=>import("./prism-v.9e60995f.js"),[]),"/node_modules/prismjs/components/prism-v.min.js":()=>s(()=>import("./prism-v.min.4cf8ac90.js"),[]),"/node_modules/prismjs/components/prism-vala.js":()=>s(()=>import("./prism-vala.fba58812.js"),[]),"/node_modules/prismjs/components/prism-vala.min.js":()=>s(()=>import("./prism-vala.min.796f29ce.js"),[]),"/node_modules/prismjs/components/prism-vbnet.js":()=>s(()=>import("./prism-vbnet.7363ff30.js"),[]),"/node_modules/prismjs/components/prism-vbnet.min.js":()=>s(()=>import("./prism-vbnet.min.429a9948.js"),[]),"/node_modules/prismjs/components/prism-velocity.js":()=>s(()=>import("./prism-velocity.4bd82752.js"),[]),"/node_modules/prismjs/components/prism-velocity.min.js":()=>s(()=>import("./prism-velocity.min.8da4e5c3.js"),[]),"/node_modules/prismjs/components/prism-verilog.js":()=>s(()=>import("./prism-verilog.7b6f4264.js"),[]),"/node_modules/prismjs/components/prism-verilog.min.js":()=>s(()=>import("./prism-verilog.min.0d50d6f0.js"),[]),"/node_modules/prismjs/components/prism-vhdl.js":()=>s(()=>import("./prism-vhdl.97526e33.js"),[]),"/node_modules/prismjs/components/prism-vhdl.min.js":()=>s(()=>import("./prism-vhdl.min.7b5d1ff4.js"),[]),"/node_modules/prismjs/components/prism-vim.js":()=>s(()=>import("./prism-vim.b18f4eb8.js"),[]),"/node_modules/prismjs/components/prism-vim.min.js":()=>s(()=>import("./prism-vim.min.3b73f4cb.js"),[]),"/node_modules/prismjs/components/prism-visual-basic.js":()=>s(()=>import("./prism-visual-basic.f64e2233.js"),[]),"/node_modules/prismjs/components/prism-visual-basic.min.js":()=>s(()=>import("./prism-visual-basic.min.e9216537.js"),[]),"/node_modules/prismjs/components/prism-warpscript.js":()=>s(()=>import("./prism-warpscript.d8210713.js"),[]),"/node_modules/prismjs/components/prism-warpscript.min.js":()=>s(()=>import("./prism-warpscript.min.d303f59d.js"),[]),"/node_modules/prismjs/components/prism-wasm.js":()=>s(()=>import("./prism-wasm.1eb9e34a.js"),[]),"/node_modules/prismjs/components/prism-wasm.min.js":()=>s(()=>import("./prism-wasm.min.9aceff79.js"),[]),"/node_modules/prismjs/components/prism-web-idl.js":()=>s(()=>import("./prism-web-idl.6295686f.js"),[]),"/node_modules/prismjs/components/prism-web-idl.min.js":()=>s(()=>import("./prism-web-idl.min.2b8d1680.js"),[]),"/node_modules/prismjs/components/prism-wiki.js":()=>s(()=>import("./prism-wiki.c436580c.js"),[]),"/node_modules/prismjs/components/prism-wiki.min.js":()=>s(()=>import("./prism-wiki.min.1d91e683.js"),[]),"/node_modules/prismjs/components/prism-wolfram.js":()=>s(()=>import("./prism-wolfram.be95f770.js"),[]),"/node_modules/prismjs/components/prism-wolfram.min.js":()=>s(()=>import("./prism-wolfram.min.6929652d.js"),[]),"/node_modules/prismjs/components/prism-wren.js":()=>s(()=>import("./prism-wren.1d678fc9.js"),[]),"/node_modules/prismjs/components/prism-wren.min.js":()=>s(()=>import("./prism-wren.min.6037d393.js"),[]),"/node_modules/prismjs/components/prism-xeora.js":()=>s(()=>import("./prism-xeora.7771edf8.js"),[]),"/node_modules/prismjs/components/prism-xeora.min.js":()=>s(()=>import("./prism-xeora.min.6cf9c11c.js"),[]),"/node_modules/prismjs/components/prism-xml-doc.js":()=>s(()=>import("./prism-xml-doc.6e2a5000.js"),[]),"/node_modules/prismjs/components/prism-xml-doc.min.js":()=>s(()=>import("./prism-xml-doc.min.11925a8a.js"),[]),"/node_modules/prismjs/components/prism-xojo.js":()=>s(()=>import("./prism-xojo.ba3d13b3.js"),[]),"/node_modules/prismjs/components/prism-xojo.min.js":()=>s(()=>import("./prism-xojo.min.8e4af1dc.js"),[]),"/node_modules/prismjs/components/prism-xquery.js":()=>s(()=>import("./prism-xquery.47fb08f8.js"),[]),"/node_modules/prismjs/components/prism-xquery.min.js":()=>s(()=>import("./prism-xquery.min.8e803e3c.js"),[]),"/node_modules/prismjs/components/prism-yaml.js":()=>s(()=>import("./prism-yaml.5bdcc54f.js"),[]),"/node_modules/prismjs/components/prism-yaml.min.js":()=>s(()=>import("./prism-yaml.min.5169d63a.js"),[]),"/node_modules/prismjs/components/prism-yang.js":()=>s(()=>import("./prism-yang.3170b964.js"),[]),"/node_modules/prismjs/components/prism-yang.min.js":()=>s(()=>import("./prism-yang.min.cd6c1dcd.js"),[]),"/node_modules/prismjs/components/prism-zig.js":()=>s(()=>import("./prism-zig.1d6fd9f8.js"),[]),"/node_modules/prismjs/components/prism-zig.min.js":()=>s(()=>import("./prism-zig.min.9860e885.js"),[])};function Td(){async function n(e){const a=sa(e);if(x0.has(a))return;x0.add(a),a==="vue"&&(yn.languages.vue=yn.languages.extend("markup",{}));const t=Object.keys(E0).find(r=>r.includes(a));typeof t!="undefined"&&await E0[t]()}return{Prism:yn,loadLanguage:n}}function xd(n){const e=q(null);return xe(n,async()=>{var a;if(n.value===null){e.value="";return}e.value=(a=await fd(n.value))!=null?a:null},{immediate:!0}),e}const Ed=qt;function Ad(n){const{key:e}=n;return Wn(n)?ea(e):Ve(n)?Rn(e):Ed}const zn=Rn,wd=Gn(new Worker("/assets/glob.worker.da6c0b5c.js"));function Id(n){return wd.fetchSource(`.${n}.md`)}function ta(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let nn=ta();function Pd(n){nn=n}const Rd=/[&<>"']/,Nd=/[&<>"']/g,Dd=/[<>"']|&(?!#?\w+;)/,Ld=/[<>"']|&(?!#?\w+;)/g,Od={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},A0=n=>Od[n];function se(n,e){if(e){if(Rd.test(n))return n.replace(Nd,A0)}else if(Dd.test(n))return n.replace(Ld,A0);return n}const Vd=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ra(n){return n.replace(Vd,(e,a)=>(a=a.toLowerCase(),a==="colon"?":":a.charAt(0)==="#"?a.charAt(1)==="x"?String.fromCharCode(parseInt(a.substring(2),16)):String.fromCharCode(+a.substring(1)):""))}const Sd=/(^|[^\[])\^/g;function G(n,e){n=typeof n=="string"?n:n.source,e=e||"";const a={replace:(t,r)=>(r=r.source||r,r=r.replace(Sd,"$1"),n=n.replace(t,r),a),getRegex:()=>new RegExp(n,e)};return a}const Cd=/[^\w:]/g,$d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function w0(n,e,a){if(n){let t;try{t=decodeURIComponent(ra(a)).replace(Cd,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}e&&!$d.test(a)&&(a=Bd(e,a));try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const _n={},Fd=/^[^:]+:\/*[^/]*$/,Md=/^([^:]+:)[\s\S]*$/,zd=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Bd(n,e){_n[" "+n]||(Fd.test(n)?_n[" "+n]=n+"/":_n[" "+n]=kn(n,"/",!0)),n=_n[" "+n];const a=n.indexOf(":")===-1;return e.substring(0,2)==="//"?a?e:n.replace(Md,"$1")+e:e.charAt(0)==="/"?a?e:n.replace(zd,"$1")+e:n+e}const xn={exec:function(){}};function Ee(n){let e=1,a,t;for(;e<arguments.length;e++){a=arguments[e];for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n}function I0(n,e){const a=n.replace(/\|/g,(o,c,i)=>{let d=!1,l=c;for(;--l>=0&&i[l]==="\\";)d=!d;return d?"|":" |"}),t=a.split(/ \|/);let r=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;r<t.length;r++)t[r]=t[r].trim().replace(/\\\|/g,"|");return t}function kn(n,e,a){const t=n.length;if(t===0)return"";let r=0;for(;r<t;){const o=n.charAt(t-r-1);if(o===e&&!a)r++;else if(o!==e&&a)r++;else break}return n.slice(0,t-r)}function Hd(n,e){if(n.indexOf(e[1])===-1)return-1;const a=n.length;let t=0,r=0;for(;r<a;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return-1}function oa(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function P0(n,e){if(e<1)return"";let a="";for(;e>1;)e&1&&(a+=n),e>>=1,n+=n;return a+n}function R0(n,e,a,t){const r=e.href,o=e.title?se(e.title):null,c=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){t.state.inLink=!0;const i={type:"link",raw:a,href:r,title:o,text:c,tokens:t.inlineTokens(c,[])};return t.state.inLink=!1,i}return{type:"image",raw:a,href:r,title:o,text:se(c)}}function qd(n,e){const a=n.match(/^(\s+)(?:```)/);if(a===null)return e;const t=a[1];return e.split(`
`).map(r=>{const o=r.match(/^\s+/);if(o===null)return r;const[c]=o;return c.length>=t.length?r.slice(t.length):r}).join(`
`)}class Xn{constructor(e){this.options=e||nn}space(e){const a=this.rules.block.newline.exec(e);if(a&&a[0].length>0)return{type:"space",raw:a[0]}}code(e){const a=this.rules.block.code.exec(e);if(a){const t=a[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:a[0],codeBlockStyle:"indented",text:this.options.pedantic?t:kn(t,`
`)}}}fences(e){const a=this.rules.block.fences.exec(e);if(a){const t=a[0],r=qd(t,a[3]||"");return{type:"code",raw:t,lang:a[2]?a[2].trim():a[2],text:r}}}heading(e){const a=this.rules.block.heading.exec(e);if(a){let t=a[2].trim();if(/#$/.test(t)){const o=kn(t,"#");(this.options.pedantic||!o||/ $/.test(o))&&(t=o.trim())}const r={type:"heading",raw:a[0],depth:a[1].length,text:t,tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}hr(e){const a=this.rules.block.hr.exec(e);if(a)return{type:"hr",raw:a[0]}}blockquote(e){const a=this.rules.block.blockquote.exec(e);if(a){const t=a[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:a[0],tokens:this.lexer.blockTokens(t,[]),text:t}}}list(e){let a=this.rules.block.list.exec(e);if(a){let t,r,o,c,i,d,l,u,f,b,m,y,A=a[1].trim();const P=A.length>1,x={type:"list",raw:"",ordered:P,start:P?+A.slice(0,-1):"",loose:!1,items:[]};A=P?`\\d{1,9}\\${A.slice(-1)}`:`\\${A}`,this.options.pedantic&&(A=P?A:"[*+-]");const p=new RegExp(`^( {0,3}${A})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(y=!1,!(!(a=p.exec(e))||this.rules.block.hr.test(e)));){if(t=a[0],e=e.substring(t.length),u=a[2].split(`
`,1)[0],f=e.split(`
`,1)[0],this.options.pedantic?(c=2,m=u.trimLeft()):(c=a[2].search(/[^ ]/),c=c>4?1:c,m=u.slice(c),c+=a[1].length),d=!1,!u&&/^ *$/.test(f)&&(t+=f+`
`,e=e.substring(f.length+1),y=!0),!y){const v=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),j=new RegExp(`^ {0,${Math.min(3,c-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),k=new RegExp(`^( {0,${Math.min(3,c-1)}})(\`\`\`|~~~)`);for(;e&&(b=e.split(`
`,1)[0],u=b,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(k.test(u)||this.rules.block.heading.test(u)||v.test(u)||j.test(e)));){if(u.search(/[^ ]/)>=c||!u.trim())m+=`
`+u.slice(c);else if(!d)m+=`
`+u;else break;!d&&!u.trim()&&(d=!0),t+=b+`
`,e=e.substring(b.length+1)}}x.loose||(l?x.loose=!0:/\n *\n *$/.test(t)&&(l=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(m),r&&(o=r[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),x.items.push({type:"list_item",raw:t,task:!!r,checked:o,loose:!1,text:m}),x.raw+=t}x.items[x.items.length-1].raw=t.trimRight(),x.items[x.items.length-1].text=m.trimRight(),x.raw=x.raw.trimRight();const h=x.items.length;for(i=0;i<h;i++){this.lexer.state.top=!1,x.items[i].tokens=this.lexer.blockTokens(x.items[i].text,[]);const v=x.items[i].tokens.filter(k=>k.type==="space"),j=v.every(k=>{const E=k.raw.split("");let I=0;for(const R of E)if(R===`
`&&(I+=1),I>1)return!0;return!1});!x.loose&&v.length&&j&&(x.loose=!0,x.items[i].loose=!0)}return x}}html(e){const a=this.rules.block.html.exec(e);if(a){const t={type:"html",raw:a[0],pre:!this.options.sanitizer&&(a[1]==="pre"||a[1]==="script"||a[1]==="style"),text:a[0]};return this.options.sanitize&&(t.type="paragraph",t.text=this.options.sanitizer?this.options.sanitizer(a[0]):se(a[0]),t.tokens=[],this.lexer.inline(t.text,t.tokens)),t}}def(e){const a=this.rules.block.def.exec(e);if(a){a[3]&&(a[3]=a[3].substring(1,a[3].length-1));const t=a[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:t,raw:a[0],href:a[2],title:a[3]}}}table(e){const a=this.rules.block.table.exec(e);if(a){const t={type:"table",header:I0(a[1]).map(r=>({text:r})),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:a[3]&&a[3].trim()?a[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){t.raw=a[0];let r=t.align.length,o,c,i,d;for(o=0;o<r;o++)/^ *-+: *$/.test(t.align[o])?t.align[o]="right":/^ *:-+: *$/.test(t.align[o])?t.align[o]="center":/^ *:-+ *$/.test(t.align[o])?t.align[o]="left":t.align[o]=null;for(r=t.rows.length,o=0;o<r;o++)t.rows[o]=I0(t.rows[o],t.header.length).map(l=>({text:l}));for(r=t.header.length,c=0;c<r;c++)t.header[c].tokens=[],this.lexer.inline(t.header[c].text,t.header[c].tokens);for(r=t.rows.length,c=0;c<r;c++)for(d=t.rows[c],i=0;i<d.length;i++)d[i].tokens=[],this.lexer.inline(d[i].text,d[i].tokens);return t}}}lheading(e){const a=this.rules.block.lheading.exec(e);if(a){const t={type:"heading",raw:a[0],depth:a[2].charAt(0)==="="?1:2,text:a[1],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}paragraph(e){const a=this.rules.block.paragraph.exec(e);if(a){const t={type:"paragraph",raw:a[0],text:a[1].charAt(a[1].length-1)===`
`?a[1].slice(0,-1):a[1],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}text(e){const a=this.rules.block.text.exec(e);if(a){const t={type:"text",raw:a[0],text:a[0],tokens:[]};return this.lexer.inline(t.text,t.tokens),t}}escape(e){const a=this.rules.inline.escape.exec(e);if(a)return{type:"escape",raw:a[0],text:se(a[1])}}tag(e){const a=this.rules.inline.tag.exec(e);if(a)return!this.lexer.state.inLink&&/^<a /i.test(a[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(a[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:a[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):se(a[0]):a[0]}}link(e){const a=this.rules.inline.link.exec(e);if(a){const t=a[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const c=kn(t.slice(0,-1),"\\");if((t.length-c.length)%2===0)return}else{const c=Hd(a[2],"()");if(c>-1){const d=(a[0].indexOf("!")===0?5:4)+a[1].length+c;a[2]=a[2].substring(0,c),a[0]=a[0].substring(0,d).trim(),a[3]=""}}let r=a[2],o="";if(this.options.pedantic){const c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);c&&(r=c[1],o=c[3])}else o=a[3]?a[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(t)?r=r.slice(1):r=r.slice(1,-1)),R0(a,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},a[0],this.lexer)}}reflink(e,a){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let r=(t[2]||t[1]).replace(/\s+/g," ");if(r=a[r.toLowerCase()],!r||!r.href){const o=t[0].charAt(0);return{type:"text",raw:o,text:o}}return R0(t,r,t[0],this.lexer)}}emStrong(e,a,t=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&t.match(/[\p{L}\p{N}]/u))return;const o=r[1]||r[2]||"";if(!o||o&&(t===""||this.rules.inline.punctuation.exec(t))){const c=r[0].length-1;let i,d,l=c,u=0;const f=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,a=a.slice(-1*e.length+c);(r=f.exec(a))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(d=i.length,r[3]||r[4]){l+=d;continue}else if((r[5]||r[6])&&c%3&&!((c+d)%3)){u+=d;continue}if(l-=d,l>0)continue;if(d=Math.min(d,d+l+u),Math.min(c,d)%2){const m=e.slice(1,c+r.index+d);return{type:"em",raw:e.slice(0,c+r.index+d+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}const b=e.slice(2,c+r.index+d-1);return{type:"strong",raw:e.slice(0,c+r.index+d+1),text:b,tokens:this.lexer.inlineTokens(b,[])}}}}codespan(e){const a=this.rules.inline.code.exec(e);if(a){let t=a[2].replace(/\n/g," ");const r=/[^ ]/.test(t),o=/^ /.test(t)&&/ $/.test(t);return r&&o&&(t=t.substring(1,t.length-1)),t=se(t,!0),{type:"codespan",raw:a[0],text:t}}}br(e){const a=this.rules.inline.br.exec(e);if(a)return{type:"br",raw:a[0]}}del(e){const a=this.rules.inline.del.exec(e);if(a)return{type:"del",raw:a[0],text:a[2],tokens:this.lexer.inlineTokens(a[2],[])}}autolink(e,a){const t=this.rules.inline.autolink.exec(e);if(t){let r,o;return t[2]==="@"?(r=se(this.options.mangle?a(t[1]):t[1]),o="mailto:"+r):(r=se(t[1]),o=r),{type:"link",raw:t[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(e,a){let t;if(t=this.rules.inline.url.exec(e)){let r,o;if(t[2]==="@")r=se(this.options.mangle?a(t[0]):t[0]),o="mailto:"+r;else{let c;do c=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(c!==t[0]);r=se(t[0]),t[1]==="www."?o="http://"+r:o=r}return{type:"link",raw:t[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e,a){const t=this.rules.inline.text.exec(e);if(t){let r;return this.lexer.state.inRawBlock?r=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):se(t[0]):t[0]:r=se(this.options.smartypants?a(t[0]):t[0]),{type:"text",raw:t[0],text:r}}}}const S={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:xn,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};S._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;S._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;S.def=G(S.def).replace("label",S._label).replace("title",S._title).getRegex();S.bullet=/(?:[*+-]|\d{1,9}[.)])/;S.listItemStart=G(/^( *)(bull) */).replace("bull",S.bullet).getRegex();S.list=G(S.list).replace(/bull/g,S.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+S.def.source+")").getRegex();S._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";S._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;S.html=G(S.html,"i").replace("comment",S._comment).replace("tag",S._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();S.paragraph=G(S._paragraph).replace("hr",S.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S._tag).getRegex();S.blockquote=G(S.blockquote).replace("paragraph",S.paragraph).getRegex();S.normal=Ee({},S);S.gfm=Ee({},S.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});S.gfm.table=G(S.gfm.table).replace("hr",S.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S._tag).getRegex();S.gfm.paragraph=G(S._paragraph).replace("hr",S.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",S.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",S._tag).getRegex();S.pedantic=Ee({},S.normal,{html:G(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",S._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:xn,paragraph:G(S.normal._paragraph).replace("hr",S.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",S.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const N={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:xn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:xn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};N._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";N.punctuation=G(N.punctuation).replace(/punctuation/g,N._punctuation).getRegex();N.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;N.escapedEmSt=/\\\*|\\_/g;N._comment=G(S._comment).replace("(?:-->|$)","-->").getRegex();N.emStrong.lDelim=G(N.emStrong.lDelim).replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimAst=G(N.emStrong.rDelimAst,"g").replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimUnd=G(N.emStrong.rDelimUnd,"g").replace(/punct/g,N._punctuation).getRegex();N._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;N._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;N._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;N.autolink=G(N.autolink).replace("scheme",N._scheme).replace("email",N._email).getRegex();N._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;N.tag=G(N.tag).replace("comment",N._comment).replace("attribute",N._attribute).getRegex();N._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;N._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;N._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;N.link=G(N.link).replace("label",N._label).replace("href",N._href).replace("title",N._title).getRegex();N.reflink=G(N.reflink).replace("label",N._label).replace("ref",S._label).getRegex();N.nolink=G(N.nolink).replace("ref",S._label).getRegex();N.reflinkSearch=G(N.reflinkSearch,"g").replace("reflink",N.reflink).replace("nolink",N.nolink).getRegex();N.normal=Ee({},N);N.pedantic=Ee({},N.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",N._label).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N._label).getRegex()});N.gfm=Ee({},N.normal,{escape:G(N.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});N.gfm.url=G(N.gfm.url,"i").replace("email",N.gfm._extended_email).getRegex();N.breaks=Ee({},N.gfm,{br:G(N.br).replace("{2,}","*").getRegex(),text:G(N.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Zd(n){return n.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function N0(n){let e="",a,t;const r=n.length;for(a=0;a<r;a++)t=n.charCodeAt(a),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}class Se{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nn,this.options.tokenizer=this.options.tokenizer||new Xn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const a={block:S.normal,inline:N.normal};this.options.pedantic?(a.block=S.pedantic,a.inline=N.pedantic):this.options.gfm&&(a.block=S.gfm,this.options.breaks?a.inline=N.breaks:a.inline=N.gfm),this.tokenizer.rules=a}static get rules(){return{block:S,inline:N}}static lex(e,a){return new Se(a).lex(e)}static lexInline(e,a){return new Se(a).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let a;for(;a=this.inlineQueue.shift();)this.inlineTokens(a.src,a.tokens);return this.tokens}blockTokens(e,a=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(i,d,l)=>d+"    ".repeat(l.length));let t,r,o,c;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(i=>(t=i.call({lexer:this},e,a))?(e=e.substring(t.raw.length),a.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&a.length>0?a[a.length-1].raw+=`
`:a.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),r=a[a.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+t.raw,r.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):a.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),r=a[a.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+t.raw,r.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),a.push(t);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let i=1/0;const d=e.slice(1);let l;this.options.extensions.startBlock.forEach(function(u){l=u.call({lexer:this},d),typeof l=="number"&&l>=0&&(i=Math.min(i,l))}),i<1/0&&i>=0&&(o=e.substring(0,i+1))}if(this.state.top&&(t=this.tokenizer.paragraph(o))){r=a[a.length-1],c&&r.type==="paragraph"?(r.raw+=`
`+t.raw,r.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):a.push(t),c=o.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),r=a[a.length-1],r&&r.type==="text"?(r.raw+=`
`+t.raw,r.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):a.push(t);continue}if(e){const i="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(i);break}else throw new Error(i)}}return this.state.top=!0,a}inline(e,a){this.inlineQueue.push({src:e,tokens:a})}inlineTokens(e,a=[]){let t,r,o,c=e,i,d,l;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)u.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,i.index)+"["+P0("a",i[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,i.index)+"["+P0("a",i[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(i=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,i.index)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(d||(l=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(t=u.call({lexer:this},e,a))?(e=e.substring(t.raw.length),a.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),r=a[a.length-1],r&&t.type==="text"&&r.type==="text"?(r.raw+=t.raw,r.text+=t.text):a.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),r=a[a.length-1],r&&t.type==="text"&&r.type==="text"?(r.raw+=t.raw,r.text+=t.text):a.push(t);continue}if(t=this.tokenizer.emStrong(e,c,l)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),a.push(t);continue}if(t=this.tokenizer.autolink(e,N0)){e=e.substring(t.raw.length),a.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e,N0))){e=e.substring(t.raw.length),a.push(t);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let b;this.options.extensions.startInline.forEach(function(m){b=m.call({lexer:this},f),typeof b=="number"&&b>=0&&(u=Math.min(u,b))}),u<1/0&&u>=0&&(o=e.substring(0,u+1))}if(t=this.tokenizer.inlineText(o,Zd)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(l=t.raw.slice(-1)),d=!0,r=a[a.length-1],r&&r.type==="text"?(r.raw+=t.raw,r.text+=t.text):a.push(t);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return a}}class Jn{constructor(e){this.options=e||nn}code(e,a,t){const r=(a||"").match(/\S*/)[0];if(this.options.highlight){const o=this.options.highlight(e,r);o!=null&&o!==e&&(t=!0,e=o)}return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+se(r,!0)+'">'+(t?e:se(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:se(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,a,t,r){if(this.options.headerIds){const o=this.options.headerPrefix+r.slug(t);return`<h${a} id="${o}">${e}</h${a}>
`}return`<h${a}>${e}</h${a}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,a,t){const r=a?"ol":"ul",o=a&&t!==1?' start="'+t+'"':"";return"<"+r+o+`>
`+e+"</"+r+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,a){return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+a+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,a){const t=a.header?"th":"td";return(a.align?`<${t} align="${a.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,a,t){if(e=w0(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let r='<a href="'+se(e)+'"';return a&&(r+=' title="'+a+'"'),r+=">"+t+"</a>",r}image(e,a,t){if(e=w0(this.options.sanitize,this.options.baseUrl,e),e===null)return t;let r=`<img src="${e}" alt="${t}"`;return a&&(r+=` title="${a}"`),r+=this.options.xhtml?"/>":">",r}text(e){return e}}class ia{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,a,t){return""+t}image(e,a,t){return""+t}br(){return""}}class ca{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,a){let t=e,r=0;if(this.seen.hasOwnProperty(t)){r=this.seen[e];do r++,t=e+"-"+r;while(this.seen.hasOwnProperty(t))}return a||(this.seen[e]=r,this.seen[t]=0),t}slug(e,a={}){const t=this.serialize(e);return this.getNextSafeSlug(t,a.dryrun)}}class Ce{constructor(e){this.options=e||nn,this.options.renderer=this.options.renderer||new Jn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ia,this.slugger=new ca}static parse(e,a){return new Ce(a).parse(e)}static parseInline(e,a){return new Ce(a).parseInline(e)}parse(e,a=!0){let t="",r,o,c,i,d,l,u,f,b,m,y,A,P,x,p,h,v,j,k;const E=e.length;for(r=0;r<E;r++){if(m=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]&&(k=this.options.extensions.renderers[m.type].call({parser:this},m),k!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type))){t+=k||"";continue}switch(m.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{t+=this.renderer.heading(this.parseInline(m.tokens),m.depth,ra(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue}case"code":{t+=this.renderer.code(m.text,m.lang,m.escaped);continue}case"table":{for(f="",u="",i=m.header.length,o=0;o<i;o++)u+=this.renderer.tablecell(this.parseInline(m.header[o].tokens),{header:!0,align:m.align[o]});for(f+=this.renderer.tablerow(u),b="",i=m.rows.length,o=0;o<i;o++){for(l=m.rows[o],u="",d=l.length,c=0;c<d;c++)u+=this.renderer.tablecell(this.parseInline(l[c].tokens),{header:!1,align:m.align[c]});b+=this.renderer.tablerow(u)}t+=this.renderer.table(f,b);continue}case"blockquote":{b=this.parse(m.tokens),t+=this.renderer.blockquote(b);continue}case"list":{for(y=m.ordered,A=m.start,P=m.loose,i=m.items.length,b="",o=0;o<i;o++)p=m.items[o],h=p.checked,v=p.task,x="",p.task&&(j=this.renderer.checkbox(h),P?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=j+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=j+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:j}):x+=j),x+=this.parse(p.tokens,P),b+=this.renderer.listitem(x,v,h);t+=this.renderer.list(b,y,A);continue}case"html":{t+=this.renderer.html(m.text);continue}case"paragraph":{t+=this.renderer.paragraph(this.parseInline(m.tokens));continue}case"text":{for(b=m.tokens?this.parseInline(m.tokens):m.text;r+1<E&&e[r+1].type==="text";)m=e[++r],b+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);t+=a?this.renderer.paragraph(b):b;continue}default:{const I='Token with "'+m.type+'" type was not found.';if(this.options.silent){console.error(I);return}else throw new Error(I)}}}return t}parseInline(e,a){a=a||this.renderer;let t="",r,o,c;const i=e.length;for(r=0;r<i;r++){if(o=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(c=this.options.extensions.renderers[o.type].call({parser:this},o),c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type))){t+=c||"";continue}switch(o.type){case"escape":{t+=a.text(o.text);break}case"html":{t+=a.html(o.text);break}case"link":{t+=a.link(o.href,o.title,this.parseInline(o.tokens,a));break}case"image":{t+=a.image(o.href,o.title,o.text);break}case"strong":{t+=a.strong(this.parseInline(o.tokens,a));break}case"em":{t+=a.em(this.parseInline(o.tokens,a));break}case"codespan":{t+=a.codespan(o.text);break}case"br":{t+=a.br();break}case"del":{t+=a.del(this.parseInline(o.tokens,a));break}case"text":{t+=a.text(o.text);break}default:{const d='Token with "'+o.type+'" type was not found.';if(this.options.silent){console.error(d);return}else throw new Error(d)}}}return t}}function $(n,e,a){if(typeof n=="undefined"||n===null)throw new Error("marked(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");if(typeof e=="function"&&(a=e,e=null),e=Ee({},$.defaults,e||{}),oa(e),a){const t=e.highlight;let r;try{r=Se.lex(n,e)}catch(i){return a(i)}const o=function(i){let d;if(!i)try{e.walkTokens&&$.walkTokens(r,e.walkTokens),d=Ce.parse(r,e)}catch(l){i=l}return e.highlight=t,i?a(i):a(null,d)};if(!t||t.length<3||(delete e.highlight,!r.length))return o();let c=0;$.walkTokens(r,function(i){i.type==="code"&&(c++,setTimeout(()=>{t(i.text,i.lang,function(d,l){if(d)return o(d);l!=null&&l!==i.text&&(i.text=l,i.escaped=!0),c--,c===0&&o()})},0))}),c===0&&o();return}try{const t=Se.lex(n,e);return e.walkTokens&&$.walkTokens(t,e.walkTokens),Ce.parse(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+se(t.message+"",!0)+"</pre>";throw t}}$.options=$.setOptions=function(n){return Ee($.defaults,n),Pd($.defaults),$};$.getDefaults=ta;$.defaults=nn;$.use=function(...n){const e=Ee({},...n),a=$.defaults.extensions||{renderers:{},childTokens:{}};let t;n.forEach(r=>{if(r.extensions&&(t=!0,r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const c=a.renderers?a.renderers[o.name]:null;c?a.renderers[o.name]=function(...i){let d=o.renderer.apply(this,i);return d===!1&&(d=c.apply(this,i)),d}:a.renderers[o.name]=o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");a[o.level]?a[o.level].unshift(o.tokenizer):a[o.level]=[o.tokenizer],o.start&&(o.level==="block"?a.startBlock?a.startBlock.push(o.start):a.startBlock=[o.start]:o.level==="inline"&&(a.startInline?a.startInline.push(o.start):a.startInline=[o.start]))}o.childTokens&&(a.childTokens[o.name]=o.childTokens)})),r.renderer){const o=$.defaults.renderer||new Jn;for(const c in r.renderer){const i=o[c];o[c]=(...d)=>{let l=r.renderer[c].apply(o,d);return l===!1&&(l=i.apply(o,d)),l}}e.renderer=o}if(r.tokenizer){const o=$.defaults.tokenizer||new Xn;for(const c in r.tokenizer){const i=o[c];o[c]=(...d)=>{let l=r.tokenizer[c].apply(o,d);return l===!1&&(l=i.apply(o,d)),l}}e.tokenizer=o}if(r.walkTokens){const o=$.defaults.walkTokens;e.walkTokens=function(c){r.walkTokens.call(this,c),o&&o.call(this,c)}}t&&(e.extensions=a),$.setOptions(e)})};$.walkTokens=function(n,e){for(const a of n)switch(e.call($,a),a.type){case"table":{for(const t of a.header)$.walkTokens(t.tokens,e);for(const t of a.rows)for(const r of t)$.walkTokens(r.tokens,e);break}case"list":{$.walkTokens(a.items,e);break}default:$.defaults.extensions&&$.defaults.extensions.childTokens&&$.defaults.extensions.childTokens[a.type]?$.defaults.extensions.childTokens[a.type].forEach(function(t){$.walkTokens(a[t],e)}):a.tokens&&$.walkTokens(a.tokens,e)}};$.parseInline=function(n,e){if(typeof n=="undefined"||n===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");e=Ee({},$.defaults,e||{}),oa(e);try{const a=Se.lexInline(n,e);return e.walkTokens&&$.walkTokens(a,e.walkTokens),Ce.parseInline(a,e)}catch(a){if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+se(a.message+"",!0)+"</pre>";throw a}};$.Parser=Ce;$.parser=Ce.parse;$.Renderer=Jn;$.TextRenderer=ia;$.Lexer=Se;$.lexer=Se.lex;$.Tokenizer=Xn;$.Slugger=ca;$.parse=$;Ce.parse;Se.lex;const Kd=["innerHTML"],Wd=me({props:{markdownSource:null},setup(n){const e=n,a=M(()=>$(e.markdownSource));return(t,r)=>(O(),C("div",{class:"prose",innerHTML:a.value},null,8,Kd))}});var Ud=ln(Wd,[["__scopeId","data-v-bfa235b8"]]);const Gd={class:"project-file-viewer flex items-center justify-center min-w-0"},Yd={class:"flex h-full"},Qd=Je("Show invisibles"),Xd=Je("Hide invisibles"),Jd={key:0,class:"w-full h-full"},e1={key:1,class:"flex flex-col h-full w-full items-center justify-center relative overflow-hidden"},n1={class:"controls absolute top-4 w-1/2 z-[1]"},a1=["src"],s1={class:"h-full"},t1={class:"absolute w-full h-full top-0 left-0 flex items-center justify-center"},r1={key:2,class:"flex-1 ml-4"},o1={key:1,class:"flex flex-col items-center opacity-50"},i1=Je("No file selected"),c1=me({props:{modelValue:null,subtree:null},emits:["update:modelValue"],setup(n,{emit:e}){const a=n,t=Ya(()=>s(()=>Promise.resolve().then(function(){return h1}),void 0)),{Prism:r,loadLanguage:o}=Td(),c=$0(a,"modelValue",e),i=xd(c),d=M(()=>{var k;return(k=a.subtree.find(E=>E.key===c.value))!=null?k:null});let l=q(!1);const u=c,f=M(()=>{var k;return(k=u.value)==null?void 0:k.split("/").at(-1)}),b=M(()=>{var k;return(k=f.value)==null?void 0:k.split(".").at(-1)}),m=M(()=>{var k;return(k=u.value)==null?void 0:k.split("/").slice(1,-1)});let y=q(null);xe(c,async k=>{y.value=null,k!==null&&(y.value=await Id(k))},{immediate:!0});const A=M(()=>typeof b.value!="undefined"&&["ico","png","jpg"].includes(b.value)),P=q(0),x=F0(P,100),p=M(()=>1.2**x.value),h=M(()=>typeof b.value=="undefined"?"none":sa(b.value));let v=q(!1);const j=q();return xe(i,async()=>{i.value===null||A.value||(v.value=!0,typeof b.value!="undefined"&&await o(b.value),setTimeout(()=>r.highlightElement(j.value,!1,()=>{v.value=!1}),50))}),(k,E)=>{const I=Pn,R=Fa,z=Ma,w=z0,F=hs,H=Un,fe=ss,ze=kd,le=st;return O(),C("div",Gd,[u.value!==null?(O(),_e(fe,{key:0,class:"relative h-full w-full min-w-0",title:f.value},{cover:J(()=>[Q(z,{class:"path"},{default:J(()=>[Q(R,null,{default:J(()=>[Q(I,{class:"mr-[.5rem]",component:ae(zn)("/")},null,8,["component"])]),_:1}),(O(!0),C(Qa,null,Xa(m.value,(ee,K)=>(O(),_e(R,{onClick:pe=>c.value="/"+m.value.slice(0,K+1).join("/")},{default:J(()=>[Q(I,{class:"mr-[.5rem]"},{default:J(()=>[(O(),_e(Bn(ae(zn)("/"+m.value.slice(0,K+1).join("/")))))]),_:2},1024),Je(h0(ee),1)]),_:2},1032,["onClick"]))),256)),Q(R)]),_:1}),Q(I,{class:"absolute top-[3.2rem] left-[1rem]",size:"24px",component:d.value===null?ae(zn)(n.modelValue):ae(Ad)(d.value)},null,8,["component"])]),default:J(()=>[_("div",Yd,[ae(i)!==null?(O(),C("div",{key:0,class:Hn(["code relative flex-1 h-full line-numbers match-braces rainbow-braces pb-[.25rem] mt-[-.5rem]",[`language-${h.value}`,{"show-invisible":l.value}]])},[A.value?dn("",!0):(O(),_e(w,{key:0,class:"absolute right-0 top-[-2rem]",value:l.value,"onUpdate:value":E[0]||(E[0]=ee=>l.value=ee)},{checked:J(()=>[Qd]),unchecked:J(()=>[Xd]),_:1},8,["value"])),Q(ae(jn),{class:"h-full"},{default:J(()=>[A.value?(O(),C("div",e1,[_("div",n1,[Q(F,{value:P.value,"onUpdate:value":E[1]||(E[1]=ee=>P.value=ee),min:-10,max:10,step:.01,"format-tooltip":ee=>`x${(1.2**ee).toFixed(2)}`},null,8,["value","step","format-tooltip"])]),_("img",{class:"img-preview border-solid border-black origin-center",src:u.value,style:ns({"--scale":p.value})},null,12,a1)])):Ja((O(),C("pre",Jd,[_("code",{ref_key:"code",ref:j},h0(ae(i)),513)],512)),[[es,!v.value]])]),_:1})],2)):(O(),_e(ae(jn),{key:1,class:"h-full flex-1"},{default:J(()=>[A.value?dn("",!0):(O(),_e(as,{key:0},{fallback:J(()=>[_("div",t1,[Q(H)])]),default:J(()=>[_("div",s1,[Q(ae(t),{class:"h-full m-l-[-1rem]",modelValue:ae(c),"onUpdate:modelValue":E[2]||(E[2]=ee=>qn(c)?c.value=ee:null),entries:n.subtree},null,8,["modelValue","entries"])])]),_:1}))]),_:1})),y.value!==null?(O(),C("div",r1,[Q(Ud,{"markdown-source":y.value},null,8,["markdown-source"])])):dn("",!0)])]),_:1},8,["title"])):(O(),C("div",o1,[Q(I,{size:"4rem"},{default:J(()=>[Q(ze)]),_:1}),Q(le,null,{default:J(()=>[i1]),_:1})]))])}}});var d1=ln(c1,[["__scopeId","data-v-e96a7548"]]);const l1={class:"pb-4 h-full flex flex-col"},p1={class:"controls pl-7 pr-2 pt-1 mb-2 relative flex-none z-[1]"},u1=Je("Show dots"),m1=Je("Hide dots"),f1={class:"flex-1 overflow-y-scroll min-h-0"},b1=me({props:{entries:null,modelValue:null,root:{type:Boolean}},emits:["update:modelValue"],setup(n,{emit:e}){const a=n,t=q(["/"]);let r=q([]);xe(()=>r.value,()=>{r.value.length===0||r.value[0]===a.modelValue||(o.value=r.value[0])});const o=$0(a,"modelValue",e);xe(o,()=>{if(o.value===null){r.value=[];return}r.value=[o.value]},{immediate:!0});const c=M(()=>m.value.length>0?q(["/",...d.value.map(x=>x.key)]):t);function i(x){return x.map(p=>Ve(p)?u0(p0({},p),{children:i(p.children)}):p).filter(p=>(Ve(p)&&p.children.length>0||p.key.includes(m.value))&&(P.value||!p.label.startsWith(".")))}const d=M(()=>i(a.entries)),l=M(()=>a.root&&d.value.length>0?[{key:"/",label:"/",children:d.value,prefix:()=>V(Pn,{size:"1.25rem"},{default:()=>V(Rn("/"))})}]:d.value);xe(()=>a.entries,x=>{a.root||(t.value=x.map(({key:p})=>p))},{immediate:!0});function u({option:x}){const{key:p,label:h}=x,v=h.startsWith(".");return{class:{empty:!Ve(x)||x.children.length===0,dot:v,"is-package-root":Ve(x)&&p.startsWith("/packages/")&&p.split("/").length===3}}}let f=q(!1);const b=q(""),m=F0(b,500);xe(m,()=>setTimeout(()=>{f.value=!1},50));function y(x){b.value=x,f.value=!0}let A=O0("dot","false"),P=M({get(){return A.value==="true"},set(x){A.value=x?"true":"false"}});return(x,p)=>{const h=gs,v=Un,j=z0,k=et;return O(),C("div",l1,[_("div",p1,[Q(h,{placeholder:"Search...",clearable:"","onUpdate:value":y}),Q(ae(jn),{class:"absolute top-3 left-0"},{default:J(()=>[f.value?(O(),_e(v,{key:0,size:20})):dn("",!0)]),_:1}),Q(j,{class:"absolute right-6 bottom-[-2rem]",value:P.value,"onUpdate:value":p[0]||(p[0]=E=>P.value=E)},{checked:J(()=>[u1]),unchecked:J(()=>[m1]),_:1},8,["value"])]),_("div",f1,[Q(k,C0({class:["project-tree",{root:n.root,"dot-shown":P.value,empty:n.entries.length===0}],data:l.value,"node-props":u,"show-irrelevant-nodes":!0,"expanded-keys":c.value.value,"onUpdate:expanded-keys":p[1]||(p[1]=E=>c.value.value=E),pattern:ae(m),"selected-keys":r.value,"onUpdate:selected-keys":p[2]||(p[2]=E=>r.value=E)},x.$attrs),null,16,["class","data","expanded-keys","pattern","selected-keys"])])])}}});var da=ln(b1,[["__scopeId","data-v-7069c454"]]),h1=Object.freeze(Object.defineProperty({__proto__:null,default:da},Symbol.toStringTag,{value:"Module"}));const g1={class:"explorer flex h-full w-full"},_1={class:"flex-none border-solid mr-4 border-r-[1px] ml-[-1rem] min-w-[20rem]"},v1={class:"flex-1 min-w-0 relative"},y1={key:0,class:"spinner absolute w-full h-full top-0 flex justify-center items-center"},k1=me({setup(n){const e=bd(),a=O0("path",null);ts(()=>{a.value=null});const t=M(()=>a.value===null?e:hd(a.value,e));return(r,o)=>{const c=Un;return O(),C("div",g1,[_("div",_1,[Q(da,{entries:ae(e),modelValue:ae(a),"onUpdate:modelValue":o[0]||(o[0]=i=>qn(a)?a.value=i:null),root:""},null,8,["entries","modelValue"])]),_("div",v1,[ae(a)!==null?(O(),C("div",y1,[Q(c,{size:"large"})])):dn("",!0),Q(ae(jn),{class:"h-full",duration:"250ms",transition:{mode:"out-in"}},{default:J(()=>[(O(),_e(d1,{class:"w-full h-full",modelValue:ae(a),"onUpdate:modelValue":o[1]||(o[1]=i=>qn(a)?a.value=i:null),key:ae(a),subtree:t.value},null,8,["modelValue","subtree"]))]),_:1})])])}}});var I1=ln(k1,[["__scopeId","data-v-7b54c8ac"]]);export{I1 as default};
