import{H as e,I as t,J as a,N as i,O as m,S as l,T as d,Y as E,Z as g,da as x,j as p,m as S,n as s,v as o}from"./chunk-2XTSZH5N.js";var c=class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=S({type:n,selectors:[["app-register-page"]],decls:81,vars:18,consts:[[1,"row"],[1,"col"],["autocomplete","off"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","placeholder","Nombre del usuario",1,"form-control"],[1,"form-text","text-danger"],["type","email","placeholder","Email del usuario",1,"form-control"],["type","text","placeholder","Nombre c\xF3digo del usuario",1,"form-control"],["type","password","placeholder","Password de su cuenta",1,"form-control"],["type","password","placeholder","Confirmar la contrase\xF1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"]],template:function(r,y){r&1&&(e(0,"h2"),i(1,"Validaciones Reactivas"),t(),a(2,"hr"),e(3,"div",0)(4,"div",1)(5,"form",2)(6,"div",3)(7,"label",4),i(8,"Nombre"),t(),e(9,"div",5),a(10,"input",6),e(11,"span",7),i(12," Debe de ser en formato de nombre y apellido "),t()()(),e(13,"div",3)(14,"label",4),i(15,"Email"),t(),e(16,"div",5),a(17,"input",8),e(18,"span",7),i(19," mensaje de error del email "),t()()(),e(20,"div",3)(21,"label",4),i(22,"Username"),t(),e(23,"div",5),a(24,"input",9),e(25,"span",7),i(26," El username no puede ser Strider "),t()()(),e(27,"div",3)(28,"label",4),i(29,"Password"),t(),e(30,"div",5),a(31,"input",10),e(32,"span",7),i(33," La contrase\xF1a debe de ser mayor de 6 caracteres. "),t()()(),e(34,"div",3)(35,"label",4),i(36,"Confirmar"),t(),e(37,"div",5),a(38,"input",11),e(39,"span",7),i(40," Las contrase\xF1as deben de ser iguales "),t()()(),e(41,"div",0)(42,"div",1)(43,"button",12),i(44,"Crear"),t()()()()()(),e(45,"h2"),i(46,"Form Valid:"),t(),e(47,"h2"),i(48,"Form Status:"),t(),e(49,"h2"),i(50,"Form Pending:"),t(),e(51,"h2"),i(52,"Form errors"),t(),e(53,"pre"),i(54),l(55,"json"),t(),e(56,"h5"),i(57,"Nombre"),t(),e(58,"pre"),i(59),l(60,"json"),t(),e(61,"h5"),i(62,"Email"),t(),e(63,"pre"),i(64),l(65,"json"),t(),e(66,"h5"),i(67,"Username"),t(),e(68,"pre"),i(69),l(70,"json"),t(),e(71,"h5"),i(72,"Password"),t(),e(73,"pre"),i(74),l(75,"json"),t(),e(76,"h5"),i(77,"Confirmar"),t(),e(78,"pre"),i(79),l(80,"json"),t()),r&2&&(o(54),m(d(55,6,"formulario")),o(5),m(d(60,8,"formulario")),o(5),m(d(65,10,"formulario")),o(5),m(d(70,12,"formulario")),o(5),m(d(75,14,"formulario")),o(5),m(d(80,16,"formulario")))},dependencies:[E]})};var b=[{path:"",children:[{path:"sign-up",component:c},{path:"**",redirectTo:"sign-up"}]}],u=class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=s({type:n});static \u0275inj=p({imports:[x.forChild(b),x]})};var h=class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=s({type:n});static \u0275inj=p({imports:[g,u]})};export{h as AuthModule};