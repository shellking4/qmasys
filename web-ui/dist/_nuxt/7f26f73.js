(window.webpackJsonp=window.webpackJsonp||[]).push([[16,7],{392:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(20),c=r(25),o=r(26),l=(r(13),r(52),r(91)),f=function(){function t(){Object(c.a)(this,t),this.requestConfigs=Object(l.a)()}var e,r,f;return Object(o.a)(t,[{key:"getAll",value:(f=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(l.c.usersUrl),t.prev=1,t.next=4,l.d.get(r,this.requestConfigs);case 4:return n=t.sent,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(t){return f.apply(this,arguments)})},{key:"create",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(data){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(l.c.usersUrl),t.prev=1,t.next=4,l.d.post(e,data,this.requestConfigs);case 4:return r=t.sent,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(t){return r.apply(this,arguments)})},{key:"delete",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(l.c.usersUrl,"/delete/").concat(e.id),t.prev=1,t.next=4,l.d.delete(r,this.requestConfigs);case 4:return n=t.sent,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,this,[[1,8]])}))),function(t){return e.apply(this,arguments)})}]),t}(),d=new f},402:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(0),c=r(20),o=(r(174),r(52),r(113)),l=r.n(o),f=r(114),d=r(392);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m,w,O={props:{users:[]},methods:{onRegisterBtnClick:(w=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$router.push({path:"/admin/register-agent"});case 1:case"end":return t.stop()}}),t,this)}))),function(){return w.apply(this,arguments)}),deleteAgent:(m=Object(c.a)(regeneratorRuntime.mark((function t(e){var r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.fire(h({title:"Êtes vous sûr ?",text:"Voulez-vous vraiment procéder à la suppression de cette donnée",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Non",confirmButtonText:"Oui"},f.a.swalAnimation)).then(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.isConfirmed){t.next=12;break}return t.prev=1,t.next=4,d.a.delete(e);case 4:r.users.splice(r.users.indexOf(e),1),l.a.fire(h({title:"Suppression effectuée",icon:"success",toast:!0,timer:2500,position:"bottom-right"},f.a.swalAnimation)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),l.a.fire(h({title:"Erreur pendant l'opération",icon:"error",toast:!0,timer:2500,position:"bottom-right"},f.a.swalAnimation)),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),function(t){return m.apply(this,arguments)})}},_=O,y=r(38),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",staticStyle:{"padding-bottom":"120px"}},[e("div",{staticClass:"row",staticStyle:{"margin-top":"50px"}},[e("div",{staticClass:"col-md-12"},[e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",t._l(t.users,(function(r,n){return e("tr",{key:r.id,attrs:{user:r}},[e("th",{attrs:{scope:"row"}},[t._v(t._s(n+1))]),t._v(" "),e("td",[t._v(t._s(r.office_name))]),t._v(" "),e("td",[t._v(t._s(r.email))]),t._v(" "),e("td",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 offset-md-3"},[e("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteAgent(r)}}},[e("span",{staticClass:"fas fa-trash"}),t._v("  Supprimer\n                  ")])])])])])})),0)])]),t._v(" "),e("div",{staticClass:"col-md-12 mt-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"}),t._v(" "),e("div",{staticClass:"col-md-4"}),t._v(" "),e("div",{staticClass:"col-md-4"},[e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.onRegisterBtnClick()}}},[t._v("\n            Enregistrer un agent de réception\n          ")])])])])])])}),[function(){var t=this,e=t._self._c;return e("thead",{staticStyle:{"background-color":"#281e30",color:"white"}},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("ID")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Caisse")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Nom d'utilisateur")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"},attrs:{scope:"col"}},[t._v("Actions")])])])}],!1,null,null,null);e.default=component.exports},440:function(t,e,r){"use strict";r.r(e);var n=r(20),c=(r(52),r(2),r(1),r(56),r(68),r(392)),o={name:"AdminLandingPage",layout:"admin-dashboard",middleware:["authenticated","onlyadmin"],data:function(){return{users:[]}},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.prev=1,t.next=4,c.a.getAll();case 4:e=t.sent.data.filter((function(t){return!t.roles.includes("ADMIN")})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:return t.abrupt("return",{users:e});case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))()}},l=r(38),component=Object(l.a)(o,(function(){return(0,this._self._c)("AgentsAccounts",{attrs:{users:this.users}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AgentsAccounts:r(402).default})}}]);