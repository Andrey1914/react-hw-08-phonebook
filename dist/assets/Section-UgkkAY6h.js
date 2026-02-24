import{a3 as R,b as c,r as S,_ as T,j as d,c as y,d as x,O as $,e as j,W as G,g as M,u as P,s as m,v as w,T as z,E as g}from"./index-CVGGWYjb.js";const L=R(),N=["className","component","disableGutters","fixed","maxWidth","classes"],_=G(),E=L("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:i}=e;return[s.root,s[`maxWidth${x(String(i.maxWidth))}`],i.fixed&&s.fixed,i.disableGutters&&s.disableGutters]}}),U=e=>$({props:e,name:"MuiContainer",defaultTheme:_}),q=(e,s)=>{const i=n=>M(s,n),{classes:u,fixed:l,disableGutters:b,maxWidth:t}=e,a={root:["root",t&&`maxWidth${x(String(t))}`,l&&"fixed",b&&"disableGutters"]};return j(a,i,u)};function O(e={}){const{createStyledComponent:s=E,useThemeProps:i=U,componentName:u="MuiContainer"}=e,l=s(({theme:t,ownerState:a})=>c({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:a})=>a.fixed&&Object.keys(t.breakpoints.values).reduce((n,o)=>{const p=o,r=t.breakpoints.values[p];return r!==0&&(n[t.breakpoints.up(p)]={maxWidth:`${r}${t.breakpoints.unit}`}),n},{}),({theme:t,ownerState:a})=>c({},a.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[t.breakpoints.up(a.maxWidth)]:{maxWidth:`${t.breakpoints.values[a.maxWidth]}${t.breakpoints.unit}`}}));return S.forwardRef(function(a,n){const o=i(a),{className:p,component:r="div",disableGutters:h=!1,fixed:C=!1,maxWidth:W="lg"}=o,k=T(o,N),f=c({},o,{component:r,disableGutters:h,fixed:C,maxWidth:W}),v=q(f,u);return d.jsx(l,c({as:r,ownerState:f,className:y(v.root,p),ref:n},k))})}const B=O({createStyledComponent:m("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:i}=e;return[s.root,s[`maxWidth${x(String(i.maxWidth))}`],i.fixed&&s.fixed,i.disableGutters&&s.disableGutters]}}),useThemeProps:e=>P({props:e,name:"MuiContainer"})});function D({children:e}){return d.jsx(B,{maxWidth:"xs",children:e})}const H=m(w)`
  padding: 80px 0 10px;
  background: transparent;

  @media all and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: 120px 0 20px;
  }
`,A=m(z)`
  font-family: 'Montserrat';
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--text);
  text-align: center;
  padding: 0 0 1rem;

  @media all and (min-width: ${({theme:e})=>e.breakpoints.md}) {
    font-size: 2rem;
    padding: 0 0 2rem;
  }
`;function F({title:e,children:s}){return d.jsx(H,{component:"section",children:d.jsxs(D,{children:[d.jsx(A,{variant:"h1",children:e}),s]})})}F.propTypes={title:g.string.isRequired,isHidden:g.bool.isRequired};export{B as C,F as S,L as s};
