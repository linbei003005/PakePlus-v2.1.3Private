import{aa as X,by as K,a as g,F as z,a2 as ee,P as re,d as V,a3 as oe,bz as G,j as B,bA as te,y as q,bj as M,ae as ne,ag as se,X as I,O as le,G as O,bB as ie,ad as ae,aq as de,ar as ue,bC as L,x as d,p as T,s as D,V as ce,bD as fe,bE as pe,z as Q,bF as ve,A as be,D as j,E as he}from"./index-B1uIqKzf.js";function me(e){if(typeof e=="number")return{"":e.toString()};const r={};return e.split(/ +/).forEach(n=>{if(n==="")return;const[t,o]=n.split(":");o===void 0?r[""]=t:r[t]=o}),r}function $(e,r){var n;if(e==null)return;const t=me(e);if(r===void 0)return t[""];if(typeof r=="string")return(n=t[r])!==null&&n!==void 0?n:t[""];if(Array.isArray(r)){for(let o=r.length-1;o>=0;--o){const l=r[o];if(l in t)return t[l]}return t[""]}else{let o,l=-1;return Object.keys(t).forEach(i=>{const s=Number(i);!Number.isNaN(s)&&r>=s&&s>=l&&(l=s,o=t[i])}),o}}function ge(e){var r;const n=(r=e.dirs)===null||r===void 0?void 0:r.find(({dir:t})=>t===X);return!!(n&&n.value===!1)}const Se={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function Re(e){return`(min-width: ${e}px)`}const N={};function xe(e=Se){if(!K)return g(()=>[]);if(typeof window.matchMedia!="function")return g(()=>[]);const r=z({}),n=Object.keys(e),t=(o,l)=>{o.matches?r.value[l]=!0:r.value[l]=!1};return n.forEach(o=>{const l=e[o];let i,s;N[l]===void 0?(i=window.matchMedia(Re(l)),i.addEventListener?i.addEventListener("change",c=>{s.forEach(u=>{u(c,o)})}):i.addListener&&i.addListener(c=>{s.forEach(u=>{u(c,o)})}),s=new Set,N[l]={mql:i,cbs:s}):(i=N[l].mql,s=N[l].cbs),s.add(t),i.matches&&s.forEach(c=>{c(i,o)})}),ee(()=>{n.forEach(o=>{const{cbs:l}=N[e[o]];l.has(t)&&l.delete(t)})}),g(()=>{const{value:o}=r;return n.filter(l=>o[l])})}const F=1,H=re("n-grid"),U=1,ye={span:{type:[Number,String],default:U},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},Be=V({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:ye,setup(){const{isSsrRef:e,xGapRef:r,itemStyleRef:n,overflowRef:t,layoutShiftDisabledRef:o}=oe(H),l=te();return{overflow:t,itemStyle:n,layoutShiftDisabled:o,mergedXGap:g(()=>G(r.value||0)),deriveStyle:()=>{e.value;const{privateSpan:i=U,privateShow:s=!0,privateColStart:c=void 0,privateOffset:u=0}=l.vnode.props,{value:w}=r,S=G(w||0);return{display:s?"":"none",gridColumn:`${c??`span ${i}`} / span ${i}`,marginLeft:u?`calc((100% - (${i} - 1) * ${S}) / ${i} * ${u} + ${S} * ${u})`:""}}}},render(){var e,r;if(this.layoutShiftDisabled){const{span:n,offset:t,mergedXGap:o}=this;return B("div",{style:{gridColumn:`span ${n} / span ${n}`,marginLeft:t?`calc((100% - (${n} - 1) * ${o}) / ${n} * ${t} + ${o} * ${t})`:""}},this.$slots)}return B("div",{style:[this.itemStyle,this.deriveStyle()]},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e,{overflow:this.overflow}))}}),Ce={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},W=24,A="__ssr__",we={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:W},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Ee=V({name:"Grid",inheritAttrs:!1,props:we,setup(e){const{mergedClsPrefixRef:r,mergedBreakpointsRef:n}=q(e),t=/^\d+$/,o=z(void 0),l=xe((n==null?void 0:n.value)||Ce),i=M(()=>!!(e.itemResponsive||!t.test(e.cols.toString())||!t.test(e.xGap.toString())||!t.test(e.yGap.toString()))),s=g(()=>{if(i.value)return e.responsive==="self"?o.value:l.value}),c=M(()=>{var f;return(f=Number($(e.cols.toString(),s.value)))!==null&&f!==void 0?f:W}),u=M(()=>$(e.xGap.toString(),s.value)),w=M(()=>$(e.yGap.toString(),s.value)),S=f=>{o.value=f.contentRect.width},b=f=>{ae(S,f)},R=z(!1),x=g(()=>{if(e.responsive==="self")return b}),p=z(!1),h=z();return ne(()=>{const{value:f}=h;f&&f.hasAttribute(A)&&(f.removeAttribute(A),p.value=!0)}),se(H,{layoutShiftDisabledRef:I(e,"layoutShiftDisabled"),isSsrRef:p,itemStyleRef:I(e,"itemStyle"),xGapRef:u,overflowRef:R}),{isSsr:!le,contentEl:h,mergedClsPrefix:r,style:g(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:G(e.xGap),rowGap:G(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${c.value}, minmax(0, 1fr))`,columnGap:G(u.value),rowGap:G(w.value)}),isResponsive:i,responsiveQuery:s,responsiveCols:c,handleResize:x,overflow:R}},render(){if(this.layoutShiftDisabled)return B("div",O({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var r,n,t,o,l,i,s;this.overflow=!1;const c=de(ue(this)),u=[],{collapsed:w,collapsedRows:S,responsiveCols:b,responsiveQuery:R}=this;c.forEach(a=>{var _,m,v,y,E;if(((_=a==null?void 0:a.type)===null||_===void 0?void 0:_.__GRID_ITEM__)!==!0)return;if(ge(a)){const C=L(a);C.props?C.props.privateShow=!1:C.props={privateShow:!1},u.push({child:C,rawChildSpan:0});return}a.dirs=((m=a.dirs)===null||m===void 0?void 0:m.filter(({dir:C})=>C!==X))||null,((v=a.dirs)===null||v===void 0?void 0:v.length)===0&&(a.dirs=null);const k=L(a),P=Number((E=$((y=k.props)===null||y===void 0?void 0:y.span,R))!==null&&E!==void 0?E:F);P!==0&&u.push({child:k,rawChildSpan:P})});let x=0;const p=(r=u[u.length-1])===null||r===void 0?void 0:r.child;if(p!=null&&p.props){const a=(n=p.props)===null||n===void 0?void 0:n.suffix;a!==void 0&&a!==!1&&(x=Number((o=$((t=p.props)===null||t===void 0?void 0:t.span,R))!==null&&o!==void 0?o:F),p.props.privateSpan=x,p.props.privateColStart=b+1-x,p.props.privateShow=(l=p.props.privateShow)!==null&&l!==void 0?l:!0)}let h=0,f=!1;for(const{child:a,rawChildSpan:_}of u){if(f&&(this.overflow=!0),!f){const m=Number((s=$((i=a.props)===null||i===void 0?void 0:i.offset,R))!==null&&s!==void 0?s:0),v=Math.min(_+m,b);if(a.props?(a.props.privateSpan=v,a.props.privateOffset=m):a.props={privateSpan:v,privateOffset:m},w){const y=h%b;v+y>b&&(h+=b-y),v+h+x>S*b?f=!0:h+=v}}f&&(a.props?a.props.privateShow!==!0&&(a.props.privateShow=!1):a.props={privateShow:!1})}return B("div",O({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[A]:this.isSsr||void 0},this.$attrs),u.map(({child:a})=>a))};return this.isResponsive&&this.responsive==="self"?B(ie,{onResize:this.handleResize},{default:e}):e()}}),_e=d([T("table",`
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
 `,[d("th",`
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
 `,[d("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),d("td",`
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
 `,[d("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),D("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[d("tr",[d("&:last-child",[d("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),D("single-line",[d("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),d("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),D("single-column",[d("tr",[d("&:not(:last-child)",[d("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),D("striped",[d("tr:nth-of-type(even)",[d("td","background-color: var(--n-td-color-striped)")])]),ce("bottom-bordered",[d("tr",[d("&:last-child",[d("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),fe(T("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[d("th",`
 background-color: var(--n-th-color-modal);
 `),d("td",`
 background-color: var(--n-td-color-modal);
 `)])),pe(T("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[d("th",`
 background-color: var(--n-th-color-popover);
 `),d("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),$e=Object.assign(Object.assign({},Q.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),Ne=V({name:"Table",props:$e,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:t}=q(e),o=Q("Table","-table",_e,ve,e,r),l=be("Table",t,r),i=g(()=>{const{size:c}=e,{self:{borderColor:u,tdColor:w,tdColorModal:S,tdColorPopover:b,thColor:R,thColorModal:x,thColorPopover:p,thTextColor:h,tdTextColor:f,borderRadius:a,thFontWeight:_,lineHeight:m,borderColorModal:v,borderColorPopover:y,tdColorStriped:E,tdColorStripedModal:k,tdColorStripedPopover:P,[j("fontSize",c)]:C,[j("tdPadding",c)]:Y,[j("thPadding",c)]:J},common:{cubicBezierEaseInOut:Z}}=o.value;return{"--n-bezier":Z,"--n-td-color":w,"--n-td-color-modal":S,"--n-td-color-popover":b,"--n-td-text-color":f,"--n-border-color":u,"--n-border-color-modal":v,"--n-border-color-popover":y,"--n-border-radius":a,"--n-font-size":C,"--n-th-color":R,"--n-th-color-modal":x,"--n-th-color-popover":p,"--n-th-font-weight":_,"--n-th-text-color":h,"--n-line-height":m,"--n-td-padding":Y,"--n-th-padding":J,"--n-td-color-striped":E,"--n-td-color-striped-modal":k,"--n-td-color-striped-popover":P}}),s=n?he("table",g(()=>e.size[0]),i,e):void 0;return{rtlEnabled:l,mergedClsPrefix:r,cssVars:n?void 0:i,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),B("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});export{Be as _,Ee as a,Ne as b};
