"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[637],{9637:function(n,e,t){t.r(e),t.d(e,{default:function(){return wn}});var r,a,i,s,o,c,d,l,u,h,p,g,m,f,x,b,Z,j,w,v,y,C=t(168),k=t(6088),z=t(8550),S=k.Z.table(r||(r=(0,C.Z)(["\n  padding: ",";\n  padding-top: ",";\n"])),z.r.spacing(5),z.r.spacing(2)),I=t(9439),A=t(2791),_=t(4164),L=k.Z.div(a||(a=(0,C.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background: ",";\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"])),z.r.colors.modalWrapper),E=k.Z.div(i||(i=(0,C.Z)(["\n  padding: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  box-shadow: ",";\n"])),z.r.spacing(7),z.r.colors.greyDark,z.r.spacing(1),z.r.shadows.small),F=t(3853),N=k.Z.div(s||(s=(0,C.Z)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),M=k.Z.h2(o||(o=(0,C.Z)(["\n  font-weight: ",";\n"])),z.r.fontWeight.medium),q=k.Z.form(c||(c=(0,C.Z)(["\n  width: ",";\n  padding: ",";\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: ",";\n  margin-bottom: ",";\n"])),z.r.spacing(88),z.r.spacing(5),z.r.spacing(7),z.r.spacing(6)),D=k.Z.label(d||(d=(0,C.Z)(["\n  display: block;\n  font-size: ",";\n"])),z.r.fontSizes.medium),T=k.Z.input(l||(l=(0,C.Z)(["\n  margin-top: ",";\n  height: ",";\n  width: ",";\n"])),z.r.spacing(2),z.r.spacing(7),z.r.spacing(60)),P=k.Z.button(u||(u=(0,C.Z)(["\n  width: ",";\n  height: ",";\n"])),z.r.spacing(44),z.r.spacing(9)),B=t(9434),W=t(8097),$=t(184),G=function(n){var e=n.onClose,t=(n.id,n.nameIt),r=n.numberIt,a=(0,A.useState)(""),i=(0,I.Z)(a,2),s=i[0],o=i[1],c=(0,A.useState)(""),d=(0,I.Z)(c,2),l=d[0],u=d[1],h=(0,B.I0)();(0,A.useEffect)((function(){o(t),u(r)}),[t,r]);var p=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":o(r);break;case"number":u(r);break;default:return}},g=function(){o(""),u("")};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(N,{children:(0,$.jsx)(F.$Rx,{size:30,color:"#424442",onClick:e})}),(0,$.jsx)(M,{children:"Change contact details"}),(0,$.jsxs)(q,{onSubmit:function(n){n.preventDefault(),h((0,W.Tk)({name:s,number:l})),g()},children:[(0,$.jsxs)(D,{children:[" ","Name",(0,$.jsx)(T,{type:"text",name:"name",value:s,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,$.jsxs)(D,{children:[" ","Number",(0,$.jsx)(T,{type:"tel",name:"number",value:l,onChange:p,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,$.jsx)(P,{type:"submit",children:"Update contact"})]})]})},J="Modal_modalBg__Tu9dM",K=document.querySelector("#modal"),U=function(n){var e=n.id,t=n.open,r=n.onClose,a=n.nameIt,i=n.numberIt,s=(0,A.useMemo)((function(){return document.createElement("div")}),[]);(0,A.useEffect)((function(){if(t)return K.appendChild(s),window.addEventListener("keydown",o),function(){K.removeChild(s),window.removeEventListener("keydown",o)}}));var o=function(n){"Escape"===n.code&&r()};return t?(0,_.createPortal)((0,$.jsx)(L,{onClick:function(n){n.target===n.currentTarget&&r()},children:(0,$.jsx)(E,{className:J,children:(0,$.jsx)(G,{onClose:r,id:e,nameIt:a,numberIt:i})})}),s):null},H=k.Z.tr(h||(h=(0,C.Z)(["\n  font-size: ",";\n  align-items: baseline;\n"])),z.r.fontSizes.large),R=k.Z.td(p||(p=(0,C.Z)(["\n  height: ",";\n  width: ",";\n"])),z.r.spacing(10),z.r.spacing(10)),O=k.Z.td(g||(g=(0,C.Z)(["\n  height: ",";\n  width: ",";\n"])),z.r.spacing(10),z.r.spacing(55)),Q=k.Z.td(m||(m=(0,C.Z)(["\n  height: ",";\n  width: ",";\n  display: flex;\n  gap: ",";\n"])),z.r.spacing(10),z.r.spacing(63),z.r.spacing(7)),V=k.Z.button(f||(f=(0,C.Z)(["\n  width: ",";\n  height: ",";\n  font-size: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  background-color: inherit;\n  box-shadow: ",";\n  transition: box-shadow 150ms linear;\n\n  &:hover,\n  :focus {\n    box-shadow: ",";\n  }\n"])),z.r.spacing(25),z.r.spacing(7),z.r.fontSizes.small,z.r.colors.greenDark,z.r.spacing(1),z.r.shadows.small,z.r.shadows.inHover),X=t(8820),Y=function(n){var e=n.id,t=n.name,r=n.number,a=(0,A.useState)(!1),i=(0,I.Z)(a,2),s=i[0],o=i[1],c=(0,B.I0)();return(0,$.jsxs)(H,{children:[(0,$.jsx)(R,{children:(0,$.jsx)(X.GxM,{})}),(0,$.jsx)(O,{children:(0,$.jsxs)("p",{children:[t,":"]})}),(0,$.jsx)(O,{children:(0,$.jsx)("p",{children:r})}),(0,$.jsxs)(Q,{children:[(0,$.jsx)(V,{onClick:function(){return function(n){c((0,W.GK)(n))}(e)},children:"Delete"}),(0,$.jsx)(V,{onClick:function(){return o(!0)},children:"Update"}),(0,$.jsx)(U,{id:e,nameIt:t,numberIt:r,open:s,onClose:function(){return o(!1)}})]})]},e)},nn=t(6916),en=function(n){return n.contactsList.contacts.items},tn=function(n){return n.contactsList.contacts.isLoading},rn=function(n){return n.contactsList.contacts.error},an=function(n){return n.filter.filter},sn=(0,nn.P1)([en,an],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),on=t(7340),cn=function(){var n=(0,B.I0)(),e=(0,B.v9)(tn),t=(0,B.v9)(rn),r=(0,B.v9)(sn);return(0,A.useEffect)((function(){n((0,W.yF)())}),[n]),(0,$.jsxs)($.Fragment,{children:[e&&(0,$.jsx)(on.a,{}),r.length>0&&(0,$.jsx)(S,{children:r.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,$.jsx)(Y,{name:t,number:r,id:e},e)}))}),t&&alert("Sorry, something is wrong!")]})},dn=k.Z.form(x||(x=(0,C.Z)(["\n  width: ",";\n  padding: ",";\n  padding-top: 0;\n  display: flex;\n  gap: ",";\n  align-items: last baseline;\n  margin-bottom: ",";\n"])),z.r.spacing(88),z.r.spacing(5),z.r.spacing(7),z.r.spacing(6)),ln=k.Z.label(b||(b=(0,C.Z)(["\n  display: block;\n  font-size: ",";\n"])),z.r.fontSizes.medium),un=k.Z.input(Z||(Z=(0,C.Z)(["\n  margin-top: ",";\n  height: ",";\n  width: ",";\n"])),z.r.spacing(2),z.r.spacing(7),z.r.spacing(55)),hn=k.Z.button(j||(j=(0,C.Z)(["\n  min-width: ",";\n  height: ",";\n"])),z.r.spacing(38),z.r.spacing(9)),pn=t(5984),gn=function(){var n=(0,A.useState)(""),e=(0,I.Z)(n,2),t=e[0],r=e[1],a=(0,A.useState)(""),i=(0,I.Z)(a,2),s=i[0],o=i[1],c=(0,B.I0)(),d=(0,B.v9)(en),l=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":o(a);break;default:return}},u=function(){r(""),o("")};return(0,$.jsxs)(dn,{onSubmit:function(n){n.preventDefault();var e={id:(0,pn.x0)(),name:t,number:s};d.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts")):(c((0,W.uK)(e)),u())},children:[(0,$.jsxs)(ln,{children:[" ","Name",(0,$.jsx)(un,{type:"text",name:"name",value:t,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,$.jsxs)(ln,{children:[" ","Number",(0,$.jsx)(un,{type:"tel",name:"number",value:s,onChange:l,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,$.jsx)(hn,{type:"submit",children:"Add contact"})]})},mn=k.Z.label(w||(w=(0,C.Z)(["\n  display: block;\n  margin-bottom: ",";\n  margin-left: ",";\n"])),z.r.spacing(8),z.r.spacing(6)),fn=k.Z.input(v||(v=(0,C.Z)(["\n  height: ",";\n  width: ",";\n  margin-top: ",";\n"])),z.r.spacing(7),z.r.spacing(55),z.r.spacing(2)),xn=t(4808),bn=function(){var n=(0,B.v9)(an),e=(0,B.I0)();return(0,$.jsxs)(mn,{children:["Find contact by name",(0,$.jsx)(fn,{type:"text",value:n,onChange:function(n){e((0,xn.T)(n.currentTarget.value))}})]})},Zn=k.Z.h1(y||(y=(0,C.Z)(["\n  font-weight: ",";\n  margin-bottom: ",";\n  font-size: ",";\n"])),z.r.fontWeight.bold,z.r.spacing(5),z.r.fontSizes.xxxl),jn=function(n){var e=n.title,t=n.children;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Zn,{children:e}),t]})},wn=function(){return(0,$.jsxs)("div",{children:[(0,$.jsx)(jn,{title:"Add new contact"}),(0,$.jsx)(gn,{}),(0,$.jsx)(jn,{title:"Contacts"}),(0,$.jsx)(bn,{}),(0,$.jsx)(cn,{})]})}}}]);
//# sourceMappingURL=637.74143e65.chunk.js.map