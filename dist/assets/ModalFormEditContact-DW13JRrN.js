import{p as C,j as e,s as r,v as d,I as w,T as j,a4 as k,z as E,F as M,a5 as S,r as m,C as n,a6 as z,w as L,a7 as A,E as s}from"./index-CVGGWYjb.js";import{u,I as h}from"./InputStyled-Bu9nfjQh.js";import{P as B}from"./PersonAdd-NAwIdnj9.js";const D=C(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),F=r(d)`
  padding: 0 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--overlay-light), var(--overlay-dark));

  z-index: 2000;
`,T=r(d)`
  padding: 40px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;

  background-color: var(--bg);

  border-color: var(--border);
  border-radius: 4px;

  @media all and (min-width: ${({theme:t})=>t.breakpoints.md}) {
    padding: 30px 60px 60px;
  }
`,q=r(j)`
  margin-bottom: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
  text-align: center;
  font-size: 1.2rem;
  color: var(--text);

  @media all and (min-width: ${({theme:t})=>t.breakpoints.md}) {
    font-size: 1.5rem;
  }
`,I=r(w)`
  position: absolute;
  top: -20px;
  right: -20px;
  color: var(--icon);
  border: 2px solid var(--icon);
  background: var(--bg);
`;function P({openedContact:t}){const[x,{isLoading:g}]=k(),{state:l,handleChange:b}=u(t.name),{state:c,handleChange:f}=u(t.number),a=E(),p=M(S),v=o=>{o.preventDefault();const i={name:l,number:c};x({id:t.id,contact:i}).then(()=>a(n())).then(()=>a(A()))},y=m.useCallback(o=>{o.target===o.currentTarget&&a(n())},[a]);return m.useEffect(()=>{const o=i=>{i.code==="Escape"&&a(n())};return p&&(window.addEventListener("keydown",o),document.body.classList.add("modal-is-open")),()=>{window.removeEventListener("keydown",o),document.body.classList.remove("modal-is-open")}},[a,p]),z.createPortal(e.jsx(F,{onClick:y,children:e.jsxs(T,{children:[e.jsx(I,{"aria-label":"close modal button",onClick:()=>a(n()),children:e.jsx(D,{})}),e.jsx(q,{variant:"h1",children:"Edit your contact:"}),e.jsxs(d,{component:"form",onSubmit:v,sx:{display:"flex",flexDirection:"column",gap:2,width:"100%"},children:[e.jsx(h,{type:"text",label:"name",value:l,onChange:b,maxLength:30,pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),e.jsx(h,{type:"tel",label:"number",value:c,maxLength:17,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits, contain spaces, dashes, parentheses and start with +",required:!0}),e.jsxs(L,{type:"submit",variant:"contained",sx:{gap:1,p:2,fontFamily:"Montserrat",color:"var(--text)",backgroundColor:"var(--btn-bg)",fontWeight:"700"},children:[g?"Saving...":"Save contact",e.jsx(B,{})]})]})]})}),document.body)}P.propTypes={openedContact:s.shape({id:s.string.isRequired,name:s.string.isRequired,number:s.string.isRequired})};export{P as default};
