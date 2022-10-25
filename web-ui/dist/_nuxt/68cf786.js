(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{385:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("bc5610a0",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));n(10),n(19),n(1),n(39),n(173);var r=function(t,e){var n=new SpeechSynthesisUtterance;n.text=t,n.volume=10,n.rate=.9,n.pitch=1,n.lang=e,window.speechSynthesis.speak(n)};var o=function(t){return(e=t,n=null,e||(e=new Date),"string"==typeof e&&e.match(/((\+|-)\d{2}:\d{2}|Z)$/gm)?n=new Date(e.substring(0,10)+"T00:00:00Z"):(e instanceof Date||(e=new Date(e)),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))),{toISOString:function(){return n.toISOString()},getUTCDate:function(){return n.getUTCDate()},getUTCDay:function(){return n.getUTCDay()},getUTCFullYear:function(){return n.getUTCFullYear()},getUTCMonth:function(){return n.getUTCMonth()},setUTCDate:function(t){return n.setUTCDate(t)},setUTCFullYear:function(t){return n.setUTCFullYear(t)},setUTCMonth:function(t){return n.setUTCMonth(t)},addDays:function(t){n.setUTCDate(n.getUTCDate+t)},toString:function(){return n.toString()},toLocaleDateString:function(t,e){return(e=e||{}).timeZone="UTC",t=t||"en-EN",n.toLocaleDateString(t,e)}}).toLocaleDateString();var e,n}},387:function(t,e,n){"use strict";n(385)},388:function(t,e,n){var r=n(44)(!1);r.push([t.i,"img{max-width:100%}.card{box-shadow:0 2px 10px rgba(0,0,0,.2);border-radius:10px;overflow:hidden;width:300px;padding-bottom:15px}@media (max-width:1024px){.card{box-shadow:0 2px 10px rgba(0,0,0,.2);border-radius:10px;overflow:hidden;margin-top:20px;width:338px}}.card-header img{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.card-content{background-color:#fff;padding:30px}.card-title{height:20px;margin:0}.card-excerpt{color:#777;margin:10px 0 20px}.author{display:flex}.profile-img{border-radius:50%;overflow:hidden;height:40px;width:40px}.author-info{display:flex;flex-direction:column;justify-content:space-around;margin-left:10px;width:160px}.author-info small{color:#aaa;margin-top:5px}.animated-bg{background-image:linear-gradient(90deg,#f6f7f8 0,#edeef1 10%,#f6f7f8 20%,#f6f7f8);background-size:200% 100%;-webkit-animation:bgPos 1s linear infinite;animation:bgPos 1s linear infinite}.animated-bg-text{border-radius:50px;display:inline-block;margin:0;height:10px;width:100%}@-webkit-keyframes bgPos{0%{background-position:50% 0}to{background-position:-150% 0}}@keyframes bgPos{0%{background-position:50% 0}to{background-position:-150% 0}}",""]),t.exports=r},389:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(20),c=(n(52),n(10),n(19),n(5),n(4),n(2),n(1),n(6),n(3),n(7),n(113)),l=n.n(c),d=n(391),f=n(91),h=n(114),m=n(386);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k,C,_={name:"Card",props:{ticket:Object,user:Object},data:function(){return{wsConnection:null}},created:function(){this.wsConnection=Object(d.a)(f.c.ticketSocketUrl)},methods:{call:(C=Object(o.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$emit("ticketCall",e),Object(m.b)("Ticket ".concat(e.counter_call_nbr),"fr-FR"),Object(m.b)("".concat(this.user.office_name),"fr-FR"),Object(m.b)("Ticket ".concat(e.counter_call_nbr),"en-US"),Object(m.b)("".concat(this.user.office_name.replace("Caisse N°","Counter number")),"en-US"),l.a.fire(x({title:"Ticket appelé",icon:"success",toast:!0,timer:2500,position:"bottom-right"},h.a.swalAnimation)),data={id:e.id,agent_id:this.user.id},this.wsConnection.emit("receive-one",data);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return C.apply(this,arguments)}),markServed:(k=Object(o.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$emit("ticketServed",e),l.a.fire(x({title:"Ticket servi",icon:"success",toast:!0,timer:2500,position:"bottom-right"},h.a.swalAnimation)),data={id:e.id,agent_id:this.user.id},this.wsConnection.emit("finish-one",data);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return k.apply(this,arguments)})}},w=_,y=(n(387),n(38)),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-3 col-12 py-4"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-content"},[e("h3",{staticClass:"card-title text-center",attrs:{id:"title"}},[t._v("QMASYS | TICKET CLIENT")]),t._v(" "),e("p",{staticClass:"card-excerpt",attrs:{id:"excerpt"}}),t._v(" "),e("div",{staticClass:"author"},[t._m(1),t._v(" "),e("div",{staticClass:"author-info"},[e("strong",{attrs:{id:"name"}},[t._v(t._s(t.ticket.order_nber))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mt-2"},[e("small",{attrs:{id:"event-btn"}},["WAITING"===t.ticket.status?e("button",{staticClass:"btn btn-success",attrs:{id:"btn1"},on:{click:function(e){return t.call(t.ticket)}}},[t._v("Appeler")]):t._e(),t._v(" "),"transferred"===t.ticket.status?e("button",{staticClass:"btn btn-info",attrs:{id:"btn2"},on:{click:function(e){return t.call(t.ticket)}}},[t._v("Reprendre")]):t._e()])]),t._v(" "),e("div",{staticClass:"col-md-12 mt-2"},[e("small",{staticClass:"animated-bg animated-bg-text",attrs:{id:"date"}},["RECEIVE"===t.ticket.status?e("button",{staticClass:"btn btn-success",attrs:{id:"btn2"},on:{click:function(e){return t.markServed(t.ticket)}}},[t._v("Marquer traité")]):t._e()])])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header animated-bg",attrs:{id:"header"}},[t("h1",{staticClass:"text-center",staticStyle:{"font-weight":"bold"}},[this._v("QMASYS TICKET")])])},function(){var t=this._self._c;return t("div",{staticClass:"profile-img animated-bg",attrs:{id:"profile_img"}},[t("img",{attrs:{src:"/assets/images/ticket.png"}})])}],!1,null,null,null);e.default=component.exports},395:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("76900cee",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";n(395)},410:function(t,e,n){var r=n(44)(!1);r.push([t.i,".pagination{display:flex;padding:0;border-radius:6px;margin:20px auto 0}.pagination>li>a,.pagination>li>span{position:relative;padding:0;margin:5px;line-height:1.42857143;color:#5a6f7c;text-decoration:none;background-color:#fff;border-radius:50px;width:37px;height:37px;text-align:center;line-height:37px;border:1px solid #eaeff5;box-shadow:0 2px 10px 0 #d8dde6}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover,.pagination>li>a:focus,.pagination>li>a:hover{z-index:2;color:#fff;cursor:pointer;background-color:#281e30;border-color:#281e30}.pagination li:first-child a{background:#281e30;border:1px solid #281e30;border-radius:50px;color:#fff}.pagination li:last-child a{background:#281e30;border:1px solid #281e30;border-radius:60px;color:#fff}.pagination-container{display:flex;flex-direction:row;align-content:center}.pageItem:first-child .page-link{border-bottom-left-radius:.25rem!important}.pageItem:last-child .page-link{border-bottom-right-radius:.25rem!important}",""]),t.exports=r},422:function(t,e,n){"use strict";n.r(e);n(174),n(15),n(139),n(56),n(68),n(16);var r={props:{tickets:[],user:Object},data:function(){return{selectedPage:1}},methods:{reactToClick:function(t){this.tickets.splice(this.tickets.indexOf(t),1)},pageNumbers:function(){return Array(Math.ceil(this.tickets.length/8)).fill(0).map((function(t,i){return i+1}))},changePage:function(t){this.pageNumbers().includes(t)&&(this.selectedPage=t)},tickets_list:function(){var t=8*(this.selectedPage-1);return this.tickets?this.tickets.slice(t,t+8):[]}}},o=(n(409),n(38)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row",staticStyle:{"padding-bottom":"40px","margin-top":"20px"}},t._l(t.tickets_list(),(function(n){return e("Ticket",{key:n.id,attrs:{user:t.user,ticket:n},on:{ticketServed:function(e){return t.reactToClick(n)}}})})),1),t._v(" "),0!==t.tickets.length?e("div",{staticClass:"pagination-container",staticStyle:{"padding-bottom":"80px","margin-top":"80px"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"pageItem"},[e("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:function(e){return t.changePage(t.selectedPage-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._v(" "),t._l(t.pageNumbers(),(function(n){return e("li",{key:n,class:n===t.selectedPage?"active":"page-item"},[e("a",{staticClass:"page-link",on:{click:function(e){return t.changePage(n)}}},[t._v(t._s(n))])])})),t._v(" "),e("li",{staticClass:"pageItem"},[e("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:function(e){return t.changePage(t.selectedPage+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Ticket:n(389).default})}}]);