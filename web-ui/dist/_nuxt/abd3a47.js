(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{398:function(t,e,n){var content=n(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("0bf8222c",content,!0,{sourceMap:!1})},417:function(t,e,n){"use strict";n(398)},418:function(t,e,n){var r=n(44),o=n(254),c=n(419),d=r(!1),l=o(c);d.push([t.i,".ticket-span[data-v-0854cf55]{box-shadow:0 2px 10px rgba(0,0,0,.2)}.custom-shape-divider-bottom-1658788311[data-v-0854cf55]{position:fixed;bottom:0;left:0;width:100%;overflow:hidden;line-height:0;transform:rotate(180deg)}.custom-shape-divider-bottom-1658788311 svg[data-v-0854cf55]{position:relative;display:block;width:calc(118% + 1.3px);height:90px;transform:rotateY(180deg)}.custom-shape-divider-bottom-1658788311 .shape-fill[data-v-0854cf55]{fill:#1b358f}@media (min-width:768px) and (max-width:1023px){.custom-shape-divider-bottom-1658788311 svg[data-v-0854cf55]{width:calc(109% + 1.3px);height:5px}}.custom-shape-divider-top-1658788204[data-v-0854cf55]{position:absolute;top:0;left:0;width:100%;overflow:hidden;line-height:0}.custom-shape-divider-top-1658788204 svg[data-v-0854cf55]{position:relative;display:block;width:calc(118% + 1.3px);height:77px;transform:rotateY(180deg)}.custom-shape-divider-top-1658788204 .shape-fill[data-v-0854cf55]{fill:#1b358f}@media (min-width:768px) and (max-width:1023px){.custom-shape-divider-top-1658788204 svg[data-v-0854cf55]{width:calc(109% + 1.3px);height:5px}}.container[data-v-0854cf55]{display:-ms-flexbox;margin-top:60px;display:flex;align-items:center;justify-content:space-around;padding:4px 16px}#cards-container[data-v-0854cf55]{overflow:hidden;margin:20px}.cards[data-v-0854cf55]{display:flex;width:99999px;height:500px}.card[data-v-0854cf55]{box-shadow:0 4px 8px 0 rgba(0,0,0,.2);background:url("+l+") no-repeat;transition:.3s;width:350px;margin:5px 19px}.card[data-v-0854cf55]:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,.2);cursor:pointer}.card .img[data-v-0854cf55]{max-width:220px;height:220px;display:inline-block}#slide-left-container[data-v-0854cf55],#slide-right-container[data-v-0854cf55]{display:none}#slide-left-container.active[data-v-0854cf55],#slide-right-container.active[data-v-0854cf55]{display:block;cursor:pointer}.slide-left[data-v-0854cf55],.slide-right[data-v-0854cf55]{border-color:#fff;border-style:solid;height:20px;width:20px;margin-top:30%}.slide-left[data-v-0854cf55]{border-width:4px 0 0 4px;transform:rotate(-45deg);margin-left:40%}.slide-right[data-v-0854cf55]{border-width:4px 4px 0 0;transform:rotate(45deg);margin-left:22%}marquee span[data-v-0854cf55]{margin-right:100%}marquee p[data-v-0854cf55]{white-space:nowrap;margin-right:60px}",""]),t.exports=d},419:function(t,e,n){t.exports=n.p+"img/babLogo.cfe37cd.png"},429:function(t,e,n){"use strict";n.r(e);n(92),n(2),n(1);var r=n(425),o={props:{tickets:[]},components:{MarqueeText:n.n(r).a},methods:{getCalledInOffice1:function(){return this.tickets.filter((function(t){return"Caisse N°1"===t.agent.office_name})).sort((function(a,b){return new Date(a.created_at)-new Date(b.created_at)}))},getCalledInOffice2:function(){return this.tickets.filter((function(t){return"Caisse N°2"===t.agent.office_name})).sort((function(a,b){return new Date(a.created_at)-new Date(b.created_at)}))},getCalledInOffice3:function(){return this.tickets.filter((function(t){return"Caisse N°3"===t.agent.office_name})).sort((function(a,b){return new Date(a.created_at)-new Date(b.created_at)}))}}},c=(n(417),n(38)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{attrs:{id:"cards-container"}},[e("div",{staticClass:"cards"},[e("div",{staticClass:"card"},[t._m(1),t._v(" "),e("div",{staticClass:"container"},[e("h3",{staticClass:"h4"},[e("ul",t._l(t.getCalledInOffice1(),(function(n){return e("li",{key:n.id,staticStyle:{"margin-top":"5px",color:"green","font-weight":"bold"}},[t._v("TICKET   "+t._s(n.watcher_nbr))])})),0)])])]),t._v(" "),e("div",{staticClass:"card"},[t._m(2),t._v(" "),e("div",{staticClass:"container"},[e("h3",{staticClass:"h4"},[e("ul",t._l(t.getCalledInOffice2(),(function(n){return e("li",{key:n.id,staticStyle:{"margin-top":"5px",color:"green","font-weight":"bold"},attrs:{ticket:n}},[t._v("TICKET   "+t._s(n.watcher_nbr))])})),0)])])]),t._v(" "),e("div",{staticClass:"card"},[t._m(3),t._v(" "),e("div",{staticClass:"container"},[e("h3",{staticClass:"h4"},[e("ul",t._l(t.getCalledInOffice3(),(function(n){return e("li",{key:n.id,staticStyle:{"margin-top":"5px",color:"green","font-weight":"bold"},attrs:{ticket:n}},[e("span",{staticClass:"ticket-span"},[t._v("TICKET   00"+t._s(n.watcher_nbr))])])})),0)])])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("marquee-text",{attrs:{duration:20}},[e("b",{staticStyle:{color:"black","font-size":"27px"}},[t._v("\n        Bienvenue à Banque Atlantique ! Veuillez vous relaxer et patienter en attendant votre tour à la caisse.\n                 \n        Welcome to Atlantic Bank ! Please have a good seat and wait for your turn at the counter.         \n        "),e("span")])])],1),t._v(" "),e("div",{staticClass:"custom-shape-divider-top-1658788204"},[e("svg",{attrs:{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"}},[e("path",{staticClass:"shape-fill",attrs:{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"}})])]),t._v(" "),e("div",{staticClass:"custom-shape-divider-bottom-1658788311"},[e("svg",{attrs:{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"}},[e("path",{staticClass:"shape-fill",attrs:{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"}})])])])}),[function(){var t=this._self._c;return t("div",{attrs:{id:"slide-left-container"}},[t("div",{staticClass:"slide-left"})])},function(){var t=this._self._c;return t("div",{staticClass:"container",staticStyle:{background:"#05468 !important","margin-top":"100px"}},[t("h5",{staticClass:"h3",staticStyle:{margin:"auto","font-weight":"bold"}},[this._v("\n              CAISSE N°1\n            ")])])},function(){var t=this._self._c;return t("div",{staticClass:"container",staticStyle:{background:"#05468 !important","margin-top":"100px"}},[t("h5",{staticClass:"h3",staticStyle:{margin:"auto","font-weight":"bold"}},[this._v("\n              CAISSE N°2\n            ")])])},function(){var t=this._self._c;return t("div",{staticClass:"container",staticStyle:{background:"#05468 !important","margin-top":"100px"}},[t("h5",{staticClass:"h3",staticStyle:{margin:"auto","font-weight":"bold"}},[this._v("\n              CAISSE N°3\n            ")])])}],!1,null,"0854cf55",null);e.default=component.exports}}]);