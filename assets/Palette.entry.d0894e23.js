import{c as K}from"./entry.7e323ff6.js";import{c as q,ah as n,s as o,e as f,q as g,w as Q,bf as A,bg as G,d as y,g as J,f as M,ai as U,j as _,B as x,k as X,h as Y,bm as B,S as Z,R as S,K as z,Q as oo,M as t,L as k,b4 as ro,F as eo,b3 as to,bj as P}from"./index.96907a09.js";var lo={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"};const no=e=>{const{dividerColor:r,cardColor:a,modalColor:i,popoverColor:s,tableHeaderColor:b,tableColorStriped:c,textColor1:d,textColor2:l,borderRadius:h,fontWeightStrong:p,lineHeight:m,fontSizeSmall:u,fontSizeMedium:v,fontSizeLarge:C}=e;return Object.assign(Object.assign({},lo),{fontSizeSmall:u,fontSizeMedium:v,fontSizeLarge:C,lineHeight:m,borderRadius:h,borderColor:n(a,r),borderColorModal:n(i,r),borderColorPopover:n(s,r),tdColor:a,tdColorModal:i,tdColorPopover:s,tdColorStriped:n(a,c),tdColorStripedModal:n(i,c),tdColorStripedPopover:n(s,c),thColor:n(a,b),thColorModal:n(i,b),thColorPopover:n(s,b),thTextColor:d,tdTextColor:l,thFontWeight:p})},ao={name:"Table",common:q,self:no};var io=ao,so=o([f("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[o("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),g("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),g("single-line",[o("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),o("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),g("single-column",[o("tr",[o("&:not(:last-child)",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),g("striped",[o("tr:nth-of-type(even)",[o("td","background-color: var(--n-td-color-striped)")])]),Q("bottom-bordered",[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),A(f("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o("th",`
 background-color: var(--n-th-color-modal);
 `),o("td",`
 background-color: var(--n-td-color-modal);
 `)])),G(f("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o("th",`
 background-color: var(--n-th-color-popover);
 `),o("td",`
 background-color: var(--n-td-color-popover);
 `)]))]);const co=Object.assign(Object.assign({},M.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}});var bo=y({name:"Table",props:co,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedRtlRef:i}=J(e),s=M("Table","-table",so,io,e,r),b=U("Table",i,r),c=_(()=>{const{size:l}=e,{self:{borderColor:h,tdColor:p,tdColorModal:m,tdColorPopover:u,thColor:v,thColorModal:C,thColorPopover:R,thTextColor:w,tdTextColor:L,borderRadius:T,thFontWeight:$,lineHeight:j,borderColorModal:E,borderColorPopover:V,tdColorStriped:O,tdColorStripedModal:D,tdColorStripedPopover:F,[x("fontSize",l)]:H,[x("tdPadding",l)]:N,[x("thPadding",l)]:W},common:{cubicBezierEaseInOut:I}}=s.value;return{"--n-bezier":I,"--n-td-color":p,"--n-td-color-modal":m,"--n-td-color-popover":u,"--n-td-text-color":L,"--n-border-color":h,"--n-border-color-modal":E,"--n-border-color-popover":V,"--n-border-radius":T,"--n-font-size":H,"--n-th-color":v,"--n-th-color-modal":C,"--n-th-color-popover":R,"--n-th-font-weight":$,"--n-th-text-color":w,"--n-line-height":j,"--n-td-padding":N,"--n-th-padding":W,"--n-td-color-striped":O,"--n-td-color-striped-modal":D,"--n-td-color-striped-popover":F}}),d=a?X("table",_(()=>e.size[0]),c,e):void 0;return{rtlEnabled:b,mergedClsPrefix:r,cssVars:a?void 0:c,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),Y("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});const go=t("thead",null,[t("tr",null,[t("th",null,"Index"),t("th",null,"Color"),t("th",null,"Lighter"),t("th",null,"Darker")])],-1),ho=["data-index"],po={class:"w-[3rem]"},vo=K({component:B,controls:{seed:{type:"text",label:"Seed",initial:Date.now().toString()},saturate:{type:"range",label:"Post: Saturation",min:-5,max:5,initial:0}}}),Co=y({setup(e){return(r,a)=>{const i=bo;return z(),Z(B,null,{default:S(({colors:s})=>[oo(i,null,{default:S(()=>[go,t("tbody",null,[(z(!0),k(eo,null,ro(s,([b,c,d],l)=>(z(),k("tr",{key:l,"data-index":l},[t("td",po,"#"+to(l),1),t("td",{style:P({background:b})},null,4),t("td",{style:P({background:c})},null,4),t("td",{style:P({background:d})},null,4)],8,ho))),128))])]),_:2},1024)]),_:1})}}});export{Co as default,vo as entry};
