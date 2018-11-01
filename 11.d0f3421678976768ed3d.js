(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+hFT":function(l,n){l.exports='<form clrForm>\n  <clr-textarea-container>\n    <label>Description</label>\n    <textarea clrTextarea [(ngModel)]="description" name="description" required></textarea>\n  </clr-textarea-container>\n</form>'},"9KFU":function(l,n){l.exports='<form clrForm>\n  <textarea clrTextarea [(ngModel)]="description" name="description" required></textarea>\n</form>'},GwaA:function(l,n){l.exports='<form class="clr-form">\n  <div class="clr-control-container">\n    <textarea placeholder="Describe something" class="clr-textarea"></textarea>\n  </div>\n</form>'},Th1k:function(l,n){l.exports='<form class="clr-form">\n  <div class="clr-form-control">\n    <label for="textarea-basic-error" class="clr-control-label">Basic textarea, error</label>\n    <div class="clr-control-container clr-error">\n      <div class="clr-textarea-wrapper">\n        <textarea id="textarea-basic-error" placeholder="Enter value here" class="clr-textarea"></textarea>\n        <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>\n      </div>\n      <span class="clr-subtext">Error message</span>\n    </div>\n  </div>\n</form>'},mQlp:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=function(){},r=u("zl1X"),t=u("pMnS"),o=u("+Xo0"),i=u("0G9f"),d=u("ZYCi"),c=u("Ip0R"),s=u("xLE1"),b=u("gIcY"),p=u("QkwE"),g=u("vAyd"),m=u("mrSG"),h=u("N+3j"),T=u("GwaA"),f=u("ypQ+"),v=u("Th1k"),x=u("9KFU"),C=u("+hFT"),y=u("r/57"),S=function(l){function n(){var n=l.call(this,"textarea")||this;return n.exampleOne="",n.exampleTwo="",n.exampleThree="",n.uiBasic=T,n.uiFull=f,n.uiError=v,n.ngBasic=x,n.ngLabel=C,n.ngHelpers=y,n}return Object(m.c)(n,l),n}(h.a),w=a.Ra({encapsulation:2,styles:[],data:{}});function A(l){return a.nb(0,[(l()(),a.Ta(0,0,null,null,233,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,o.b,o.a)),a.Sa(1,49152,null,0,i.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),a.Ta(2,0,null,0,231,"article",[],null,null,null,null,null)),(l()(),a.Ta(3,0,null,null,5,"h5",[["class","component-summary"],["id","summary"]],null,null,null,null,null)),(l()(),a.lb(-1,null,[" Textareas are a popular form control for long form text input, and Clarity supports both a CSS only and Angular component. You may wish to review the general "])),(l()(),a.Ta(5,0,null,null,2,"a",[["routerLink","forms"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.db(l,6).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),a.Sa(6,671744,null,0,d.n,[d.l,d.a,c.k],{routerLink:[0,"routerLink"]},null),(l()(),a.lb(-1,null,["forms"])),(l()(),a.lb(-1,null,[" documentation about form controls. "])),(l()(),a.Ta(9,0,null,null,1,"h2",[["id","forms-code-samples"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["Angular Textarea Component"])),(l()(),a.Ta(11,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["If you are using Angular, the recommended approach is to always use the "])),(l()(),a.Ta(13,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["ClrTextarea"])),(l()(),a.lb(-1,null,[" directive on your textareas to help manage the form control. By using "])),(l()(),a.Ta(16,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["ClrTextarea"])),(l()(),a.lb(-1,null,[", you'll automatically be able to leverage built in validation, helper text, and layout features in forms."])),(l()(),a.Ta(19,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["Basic textarea"])),(l()(),a.Ta(21,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["This is the most basic way to create a textarea inside of a form. This is only if you don't have a need for a label or validation. You need to add "])),(l()(),a.Ta(23,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["clrTextarea"])),(l()(),a.lb(-1,null,[" to your textarea to wire up the directive. Notice, it is not necessary to add "])),(l()(),a.Ta(26,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,['type="text"'])),(l()(),a.lb(-1,null,[" as it is handled automatically. It will only work if you have the control wired up with either a template driven form or reactive form."])),(l()(),a.Ta(29,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(30,0,null,null,14,"form",[["clrForm",""],["novalidate",""]],[[2,"clr-form",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==a.db(l,34).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.db(l,34).onReset()&&e),e},null,null)),a.ib(4608,null,s.Rd,s.Rd,[]),a.Sa(32,16384,null,0,s.Z,[],null,null),a.Sa(33,16384,null,0,b.A,[],null,null),a.Sa(34,4210688,null,0,b.q,[[8,null],[8,null]],null,null),a.ib(2048,null,b.c,null,[b.q]),a.Sa(36,16384,null,0,b.p,[[4,b.c]],null,null),a.ib(256,null,s.Ud,!0,[]),(l()(),a.Ta(38,16777216,null,null,6,"textarea",[["clrTextarea",""],["name","description"]],[[2,"clr-textarea",null],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==a.db(l,39)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.db(l,39).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.db(l,39)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.db(l,39)._compositionEnd(u.target.value)&&e),"blur"===n&&(e=!1!==a.db(l,43).onBlur()&&e),"ngModelChange"===n&&(e=!1!==(r.exampleOne=u)&&e),e},null,null)),a.Sa(39,16384,null,0,b.d,[a.H,a.l,[2,b.a]],null,null),a.ib(1024,null,b.m,function(l){return[l]},[b.d]),a.Sa(41,671744,null,0,b.r,[[2,b.c],[8,null],[8,null],[6,b.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.ib(2048,null,b.n,null,[b.r]),a.Sa(43,81920,null,0,s.Cb,[a.T,[2,s.Td],[2,s.Sd],[2,b.n],[2,s.pc],a.H,a.l],null,null),a.Sa(44,16384,null,0,b.o,[[4,b.n]],null,null),(l()(),a.Ta(45,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(46,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),a.Sa(47,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),a.Ta(48,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["Labels"])),(l()(),a.Ta(50,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["For anything beyond a standalone textarea field, you'll need to wrap it with the "])),(l()(),a.Ta(52,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["ClrTextareaContainer"])),(l()(),a.lb(-1,null,[" component. This is required to contain all of the logic and validation details for the individual textarea control."])),(l()(),a.Ta(55,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["Then you can add a "])),(l()(),a.Ta(57,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["label"])),(l()(),a.lb(-1,null,[" element and it will automatically get laid out correctly in the form."])),(l()(),a.Ta(60,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(61,0,null,null,24,"form",[["clrForm",""],["novalidate",""]],[[2,"clr-form",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==a.db(l,64).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.db(l,64).onReset()&&e),e},null,null)),a.Sa(62,16384,null,0,s.Z,[],null,null),a.Sa(63,16384,null,0,b.A,[],null,null),a.Sa(64,4210688,null,0,b.q,[[8,null],[8,null]],null,null),a.ib(2048,null,b.c,null,[b.q]),a.Sa(66,16384,null,0,b.p,[[4,b.c]],null,null),a.ib(256,null,s.Ud,!0,[]),a.ib(512,null,s.Rd,s.Rd,[]),(l()(),a.Ta(69,0,null,null,16,"clr-textarea-container",[],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,r.ub,r.U)),a.ib(512,null,s.Td,s.Td,[]),a.ib(131584,null,s.Sd,s.Sd,[s.Td]),a.ib(512,null,s.pc,s.pc,[]),a.Sa(73,180224,null,1,s.Db,[s.Sd,[2,s.Rd],s.pc,s.Td],null,null),a.jb(335544320,1,{label:0}),a.ib(512,null,s.Qd,s.Qd,[]),(l()(),a.Ta(76,0,null,0,2,"label",[],[[1,"for",0]],null,null,null,null)),a.Sa(77,212992,[[1,4]],0,s.Ma,[[2,s.Qd],[2,s.Rd],a.H,a.l],null,null),(l()(),a.lb(-1,null,["Description"])),(l()(),a.Ta(79,16777216,null,1,6,"textarea",[["clrTextarea",""],["name","description"]],[[2,"clr-textarea",null],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==a.db(l,80)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.db(l,80).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.db(l,80)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.db(l,80)._compositionEnd(u.target.value)&&e),"blur"===n&&(e=!1!==a.db(l,84).onBlur()&&e),"ngModelChange"===n&&(e=!1!==(r.exampleTwo=u)&&e),e},null,null)),a.Sa(80,16384,null,0,b.d,[a.H,a.l,[2,b.a]],null,null),a.ib(1024,null,b.m,function(l){return[l]},[b.d]),a.Sa(82,671744,null,0,b.r,[[2,b.c],[8,null],[8,null],[6,b.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.ib(2048,null,b.n,null,[b.r]),a.Sa(84,81920,null,0,s.Cb,[a.T,[2,s.Td],[2,s.Sd],[2,b.n],[2,s.pc],a.H,a.l],null,null),a.Sa(85,16384,null,0,b.o,[[4,b.n]],null,null),(l()(),a.Ta(86,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(87,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),a.Sa(88,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),a.Ta(89,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["Helper and error messages"])),(l()(),a.Ta(91,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["The textarea form control wires up with the validations placed on it, such as "])),(l()(),a.Ta(93,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["required"])),(l()(),a.lb(-1,null,[" or even custom built validators in Angular. Under the hood, it looks at the "])),(l()(),a.Ta(96,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["NgControl"])),(l()(),a.lb(-1,null,[" values to determine the control validitity, and display the helper text or error message accordingly."])),(l()(),a.Ta(99,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["Note: the validation only displays an error after the user has left focus on a control. This is for better UX where the user doesn't see an error while they are still typing."])),(l()(),a.Ta(101,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(102,0,null,null,32,"form",[["clrForm",""],["novalidate",""]],[[2,"clr-form",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==a.db(l,105).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.db(l,105).onReset()&&e),e},null,null)),a.Sa(103,16384,null,0,s.Z,[],null,null),a.Sa(104,16384,null,0,b.A,[],null,null),a.Sa(105,4210688,null,0,b.q,[[8,null],[8,null]],null,null),a.ib(2048,null,b.c,null,[b.q]),a.Sa(107,16384,null,0,b.p,[[4,b.c]],null,null),a.ib(256,null,s.Ud,!0,[]),a.ib(512,null,s.Rd,s.Rd,[]),(l()(),a.Ta(110,0,null,null,24,"clr-textarea-container",[],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,r.ub,r.U)),a.ib(512,null,s.Td,s.Td,[]),a.ib(131584,null,s.Sd,s.Sd,[s.Td]),a.ib(512,null,s.pc,s.pc,[]),a.Sa(114,180224,null,1,s.Db,[s.Sd,[2,s.Rd],s.pc,s.Td],null,null),a.jb(335544320,2,{label:0}),a.ib(512,null,s.Qd,s.Qd,[]),(l()(),a.Ta(117,0,null,0,2,"label",[],[[1,"for",0]],null,null,null,null)),a.Sa(118,212992,[[2,4]],0,s.Ma,[[2,s.Qd],[2,s.Rd],a.H,a.l],null,null),(l()(),a.lb(-1,null,["Label"])),(l()(),a.Ta(120,16777216,null,1,8,"textarea",[["clrTextarea",""],["name","description"],["required",""]],[[1,"required",0],[2,"clr-textarea",null],[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==a.db(l,123)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.db(l,123).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.db(l,123)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.db(l,123)._compositionEnd(u.target.value)&&e),"blur"===n&&(e=!1!==a.db(l,127).onBlur()&&e),"ngModelChange"===n&&(e=!1!==(r.exampleThree=u)&&e),e},null,null)),a.Sa(121,16384,null,0,b.v,[],{required:[0,"required"]},null),a.ib(1024,null,b.l,function(l){return[l]},[b.v]),a.Sa(123,16384,null,0,b.d,[a.H,a.l,[2,b.a]],null,null),a.ib(1024,null,b.m,function(l){return[l]},[b.d]),a.Sa(125,671744,null,0,b.r,[[2,b.c],[6,b.l],[8,null],[6,b.m]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.ib(2048,null,b.n,null,[b.r]),a.Sa(127,81920,null,0,s.Cb,[a.T,[2,s.Td],[2,s.Sd],[2,b.n],[2,s.pc],a.H,a.l],null,null),a.Sa(128,16384,null,0,b.o,[[4,b.n]],null,null),(l()(),a.Ta(129,0,null,2,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,r.Pa,r.p)),a.Sa(130,49152,null,0,s.t,[],null,null),(l()(),a.lb(-1,0,["Helper text"])),(l()(),a.Ta(132,0,null,3,2,"clr-control-error",[],[[2,"clr-subtext",null]],null,null,r.Oa,r.o)),a.Sa(133,49152,null,0,s.s,[],null,null),(l()(),a.lb(-1,0,["You must provide a description!"])),(l()(),a.Ta(135,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(136,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),a.Sa(137,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),a.Ta(138,0,null,null,1,"h2",[["id","css-component"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["CSS Input Component"])),(l()(),a.Ta(140,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["Inputs can be used without Angular, but without some of the automatic interactivity. If you intend to create your own components, here are the basic features you'll need to build out."])),(l()(),a.Ta(142,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["Basic input"])),(l()(),a.Ta(144,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["It is possible to display the input by simply having the input as a standalone element not inside of a form. This may be useful in simple cases where you don't need a full form and just an inline input."])),(l()(),a.Ta(146,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(147,0,null,null,6,"form",[["class","clr-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==a.db(l,149).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.db(l,149).onReset()&&e),e},null,null)),a.Sa(148,16384,null,0,b.A,[],null,null),a.Sa(149,4210688,null,0,b.q,[[8,null],[8,null]],null,null),a.ib(2048,null,b.c,null,[b.q]),a.Sa(151,16384,null,0,b.p,[[4,b.c]],null,null),(l()(),a.Ta(152,0,null,null,1,"div",[["class","clr-control-container"]],null,null,null,null,null)),(l()(),a.Ta(153,0,null,null,0,"textarea",[["class","clr-textarea"],["placeholder","Describe something"]],null,null,null,null,null)),(l()(),a.Ta(154,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(155,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),a.Sa(156,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),a.Ta(157,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["Full input display"])),(l()(),a.Ta(159,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["Each form control has a "])),(l()(),a.Ta(161,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,[".clr-form-control"])),(l()(),a.lb(-1,null,[" wrapper, as well as a specific DOM structure necessary to layout the form control as desired. This works with all layout options as well without needing to change the DOM structure in any way."])),(l()(),a.Ta(164,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(165,0,null,null,15,"form",[["class","clr-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==a.db(l,167).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.db(l,167).onReset()&&e),e},null,null)),a.Sa(166,16384,null,0,b.A,[],null,null),a.Sa(167,4210688,null,0,b.q,[[8,null],[8,null]],null,null),a.ib(2048,null,b.c,null,[b.q]),a.Sa(169,16384,null,0,b.p,[[4,b.c]],null,null),(l()(),a.Ta(170,0,null,null,10,"div",[["class","clr-form-control"]],null,null,null,null,null)),(l()(),a.Ta(171,0,null,null,2,"label",[["class","clr-control-label"],["for","textarea-basic"]],[[1,"for",0]],null,null,null,null)),a.Sa(172,212992,null,0,s.Ma,[[2,s.Qd],[2,s.Rd],a.H,a.l],{forAttr:[0,"forAttr"]},null),(l()(),a.lb(-1,null,["Basic textarea"])),(l()(),a.Ta(174,0,null,null,6,"div",[["class","clr-control-container"]],null,null,null,null,null)),(l()(),a.Ta(175,0,null,null,3,"div",[["class","clr-textarea-wrapper"]],null,null,null,null,null)),(l()(),a.Ta(176,0,null,null,0,"textarea",[["class","clr-textarea"],["id","textarea-basic"],["placeholder","Enter value here"]],null,null,null,null,null)),(l()(),a.Ta(177,0,null,null,1,"clr-icon",[["class","clr-validate-icon"],["shape","exclamation-circle"]],null,null,null,null,null)),a.Sa(178,16384,null,0,s.Da,[],null,null),(l()(),a.Ta(179,0,null,null,1,"span",[["class","clr-subtext"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["Helper Text"])),(l()(),a.Ta(181,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(182,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),a.Sa(183,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),a.Ta(184,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["Error state"])),(l()(),a.Ta(186,0,null,null,16,"p",[],null,null,null,null,null)),(l()(),a.lb(-1,null,["To signify an error state, you need to add the "])),(l()(),a.Ta(188,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,[".clr-error"])),(l()(),a.lb(-1,null,[" class to the "])),(l()(),a.Ta(191,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,[".clr-control-container"])),(l()(),a.lb(-1,null,[" element. This will show the "])),(l()(),a.Ta(194,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,[".clr-validate-icon"])),(l()(),a.lb(-1,null,[" and turn the "])),(l()(),a.Ta(197,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,[".clr-subtext"])),(l()(),a.lb(-1,null,[" message to red. If you have helper text that needs to change to error content, you'll have to handle the hiding and showing of that content inside of the "])),(l()(),a.Ta(200,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.lb(-1,null,[".clr-subtext"])),(l()(),a.lb(-1,null,[" element."])),(l()(),a.Ta(203,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(204,0,null,null,15,"form",[["class","clr-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==a.db(l,206).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.db(l,206).onReset()&&e),e},null,null)),a.Sa(205,16384,null,0,b.A,[],null,null),a.Sa(206,4210688,null,0,b.q,[[8,null],[8,null]],null,null),a.ib(2048,null,b.c,null,[b.q]),a.Sa(208,16384,null,0,b.p,[[4,b.c]],null,null),(l()(),a.Ta(209,0,null,null,10,"div",[["class","clr-form-control"]],null,null,null,null,null)),(l()(),a.Ta(210,0,null,null,2,"label",[["class","clr-control-label"],["for","textarea-basic-error"]],[[1,"for",0]],null,null,null,null)),a.Sa(211,212992,null,0,s.Ma,[[2,s.Qd],[2,s.Rd],a.H,a.l],{forAttr:[0,"forAttr"]},null),(l()(),a.lb(-1,null,["Basic textarea, error"])),(l()(),a.Ta(213,0,null,null,6,"div",[["class","clr-control-container clr-error"]],null,null,null,null,null)),(l()(),a.Ta(214,0,null,null,3,"div",[["class","clr-textarea-wrapper"]],null,null,null,null,null)),(l()(),a.Ta(215,0,null,null,0,"textarea",[["class","clr-textarea"],["id","textarea-basic-error"],["placeholder","Enter value here"]],null,null,null,null,null)),(l()(),a.Ta(216,0,null,null,1,"clr-icon",[["class","clr-validate-icon"],["shape","exclamation-circle"]],null,null,null,null,null)),a.Sa(217,16384,null,0,s.Da,[],null,null),(l()(),a.Ta(218,0,null,null,1,"span",[["class","clr-subtext"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["Helper Text"])),(l()(),a.Ta(220,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Ta(221,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),a.Sa(222,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),a.Ta(223,0,null,null,10,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),a.Ta(224,0,null,null,1,"h3",[["id","guidelines"]],null,null,null,null,null)),(l()(),a.lb(-1,null,["Design Guidelines"])),(l()(),a.Ta(226,0,null,null,7,"div",[["class","alert alert-info"]],null,null,null,null,null)),(l()(),a.Ta(227,0,null,null,6,"div",[["class","alert-items"]],null,null,null,null,null)),(l()(),a.Ta(228,0,null,null,5,"div",[["class","alert-item static"]],null,null,null,null,null)),(l()(),a.Ta(229,0,null,null,2,"div",[["class","alert-icon-wrapper"]],null,null,null,null,null)),(l()(),a.Ta(230,0,null,null,1,"clr-icon",[["class","alert-icon"],["shape","info-circle"]],null,null,null,null,null)),a.Sa(231,16384,null,0,s.Da,[],null,null),(l()(),a.Ta(232,0,null,null,1,"span",[["class","alert-text"]],null,null,null,null,null)),(l()(),a.lb(-1,null,[" The UX design guidelines documentation is currently a work in progress, and will be updated when they are ready. "]))],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,6,0,"forms"),l(n,41,0,"description",u.exampleOne),l(n,43,0),l(n,47,0,u.ngBasic),l(n,77,0),l(n,82,0,"description",u.exampleTwo),l(n,84,0),l(n,88,0,u.ngLabel),l(n,118,0),l(n,121,0,""),l(n,125,0,"description",u.exampleThree),l(n,127,0),l(n,137,0,u.ngHelpers),l(n,156,0,u.uiBasic),l(n,172,0,"textarea-basic"),l(n,183,0,u.uiFull),l(n,211,0,"textarea-basic-error"),l(n,222,0,u.uiError)},function(l,n){l(n,0,0,!0),l(n,5,0,a.db(n,6).target,a.db(n,6).href),l(n,30,0,!0,a.db(n,36).ngClassUntouched,a.db(n,36).ngClassTouched,a.db(n,36).ngClassPristine,a.db(n,36).ngClassDirty,a.db(n,36).ngClassValid,a.db(n,36).ngClassInvalid,a.db(n,36).ngClassPending),l(n,38,0,!0,a.db(n,43).id,a.db(n,44).ngClassUntouched,a.db(n,44).ngClassTouched,a.db(n,44).ngClassPristine,a.db(n,44).ngClassDirty,a.db(n,44).ngClassValid,a.db(n,44).ngClassInvalid,a.db(n,44).ngClassPending),l(n,61,0,!0,a.db(n,66).ngClassUntouched,a.db(n,66).ngClassTouched,a.db(n,66).ngClassPristine,a.db(n,66).ngClassDirty,a.db(n,66).ngClassValid,a.db(n,66).ngClassInvalid,a.db(n,66).ngClassPending),l(n,69,0,!0,null==a.db(n,73).control?null:a.db(n,73).control.disabled,a.db(n,73).addGrid()),l(n,76,0,a.db(n,77).forAttr),l(n,79,0,!0,a.db(n,84).id,a.db(n,85).ngClassUntouched,a.db(n,85).ngClassTouched,a.db(n,85).ngClassPristine,a.db(n,85).ngClassDirty,a.db(n,85).ngClassValid,a.db(n,85).ngClassInvalid,a.db(n,85).ngClassPending),l(n,102,0,!0,a.db(n,107).ngClassUntouched,a.db(n,107).ngClassTouched,a.db(n,107).ngClassPristine,a.db(n,107).ngClassDirty,a.db(n,107).ngClassValid,a.db(n,107).ngClassInvalid,a.db(n,107).ngClassPending),l(n,110,0,!0,null==a.db(n,114).control?null:a.db(n,114).control.disabled,a.db(n,114).addGrid()),l(n,117,0,a.db(n,118).forAttr),l(n,120,0,a.db(n,121).required?"":null,!0,a.db(n,127).id,a.db(n,128).ngClassUntouched,a.db(n,128).ngClassTouched,a.db(n,128).ngClassPristine,a.db(n,128).ngClassDirty,a.db(n,128).ngClassValid,a.db(n,128).ngClassInvalid,a.db(n,128).ngClassPending),l(n,129,0,!0),l(n,132,0,!0),l(n,147,0,a.db(n,151).ngClassUntouched,a.db(n,151).ngClassTouched,a.db(n,151).ngClassPristine,a.db(n,151).ngClassDirty,a.db(n,151).ngClassValid,a.db(n,151).ngClassInvalid,a.db(n,151).ngClassPending),l(n,165,0,a.db(n,169).ngClassUntouched,a.db(n,169).ngClassTouched,a.db(n,169).ngClassPristine,a.db(n,169).ngClassDirty,a.db(n,169).ngClassValid,a.db(n,169).ngClassInvalid,a.db(n,169).ngClassPending),l(n,171,0,a.db(n,172).forAttr),l(n,204,0,a.db(n,208).ngClassUntouched,a.db(n,208).ngClassTouched,a.db(n,208).ngClassPristine,a.db(n,208).ngClassDirty,a.db(n,208).ngClassValid,a.db(n,208).ngClassInvalid,a.db(n,208).ngClassPending),l(n,210,0,a.db(n,211).forAttr)})}var q=a.Pa("clr-textarea-demo",S,function(l){return a.nb(0,[(l()(),a.Ta(0,0,null,null,1,"clr-textarea-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,A,w)),a.Sa(1,49152,null,0,S,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),R=u("XPsC"),k=u("JsA7");u.d(n,"TextareaDemoModuleNgFactory",function(){return D});var D=a.Qa(e,[],function(l){return a.ab([a.bb(512,a.k,a.Ga,[[8,[r.Mb,r.a,r.b,r.d,r.e,r.f,r.g,r.h,r.Ib,r.Jb,r.Kb,r.Lb,r.c,t.a,q]],[3,a.k],a.z]),a.bb(4608,c.p,c.o,[a.w,[2,c.H]]),a.bb(4608,b.B,b.B,[]),a.bb(1073742336,c.b,c.b,[]),a.bb(1073742336,s.Ea,s.Ea,[]),a.bb(1073742336,s.kc,s.kc,[]),a.bb(1073742336,s.Kd,s.Kd,[]),a.bb(1073742336,s.W,s.W,[]),a.bb(1073742336,s.d,s.d,[]),a.bb(1073742336,s.Y,s.Y,[]),a.bb(1073742336,s.q,s.q,[]),a.bb(1073742336,s.Vd,s.Vd,[]),a.bb(1073742336,s.p,s.p,[]),a.bb(1073742336,s.Xd,s.Xd,[]),a.bb(1073742336,s.N,s.N,[]),a.bb(1073742336,b.y,b.y,[]),a.bb(1073742336,b.j,b.j,[]),a.bb(1073742336,s.La,s.La,[]),a.bb(1073742336,s.cb,s.cb,[]),a.bb(1073742336,s.gb,s.gb,[]),a.bb(1073742336,s.kb,s.kb,[]),a.bb(1073742336,s.Eb,s.Eb,[]),a.bb(1073742336,s.Ba,s.Ba,[]),a.bb(1073742336,s.Ra,s.Ra,[]),a.bb(1073742336,s.vc,s.vc,[]),a.bb(1073742336,s.hd,s.hd,[]),a.bb(1073742336,s.F,s.F,[]),a.bb(1073742336,s.vb,s.vb,[]),a.bb(1073742336,s.n,s.n,[]),a.bb(1073742336,s.Aa,s.Aa,[]),a.bb(1073742336,s.Kb,s.Kb,[]),a.bb(1073742336,s.u,s.u,[]),a.bb(1073742336,s.Wa,s.Wa,[]),a.bb(1073742336,s.Qa,s.Qa,[]),a.bb(1073742336,s.i,s.i,[]),a.bb(1073742336,s.j,s.j,[]),a.bb(1073742336,s.Ua,s.Ua,[]),a.bb(1073742336,s.Za,s.Za,[]),a.bb(1073742336,s.pd,s.pd,[]),a.bb(1073742336,s.Bb,s.Bb,[]),a.bb(1073742336,s.Qb,s.Qb,[]),a.bb(1073742336,s.Na,s.Na,[]),a.bb(1073742336,s.nb,s.nb,[]),a.bb(1073742336,s.Hb,s.Hb,[]),a.bb(1073742336,s.db,s.db,[]),a.bb(1073742336,s.Vb,s.Vb,[]),a.bb(1073742336,s.R,s.R,[]),a.bb(1073742336,s.a,s.a,[]),a.bb(1073742336,d.o,d.o,[[2,d.u],[2,d.l]]),a.bb(1073742336,R.a,R.a,[]),a.bb(1073742336,k.a,k.a,[]),a.bb(1073742336,e,e,[]),a.bb(1024,d.j,function(){return[[{path:"",component:S}]]},[])])})},"r/57":function(l,n){l.exports='<form clrForm>\n  <clr-textarea-container>\n    <label>Label</label>\n    <textarea clrTextarea [(ngModel)]="description" name="description" required></textarea>\n    <clr-control-helper>Helper text</clr-control-helper>\n    <clr-control-error>You must provide a description!</clr-control-error>\n  </clr-textarea-container>\n</form>'},"ypQ+":function(l,n){l.exports='<form class="clr-form">\n  <div class="clr-form-control">\n    <label for="vertical-textarea-basic" class="clr-control-label">Basic textarea</label>\n    <div class="clr-control-container">\n      <div class="clr-textarea-wrapper">\n        <textarea id="vertical-textarea-basic" placeholder="Enter value here" class="clr-textarea"></textarea>\n        <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>\n      </div>\n      <span class="clr-subtext">Helper Text</span>\n    </div>\n  </div>\n</form>'}}]);