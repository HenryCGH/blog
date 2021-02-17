(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(t,s,a){},195:function(t,s,a){"use strict";var e=a(175);a.n(e).a},227:function(t,s,a){"use strict";a.r(s);var e={name:"Footer",components:{CardAuthor:()=>Promise.resolve().then(a.bind(null,46)),Newsletter:()=>Promise.all([a.e(0),a.e(1)]).then(a.bind(null,221)),LazyLoad:()=>Promise.all([a.e(0),a.e(6)]).then(a.bind(null,220))},computed:{getAuthor(){return this.$authors.filter(t=>t.frontmatter.lang===this.$localeConfig.lang)}}},o=(a(195),a(0)),l=Object(o.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer-box1"},[a("svg",{staticClass:"footer-box__shape",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1366 161"}},[a("path",{attrs:{d:"M-11.925-4809v-154.746c40.454,19.75,273.683,130.936,420.544,142.612,161.25,12.821,339.978-42.709,521.543-86.3,169.82-40.769,395.43,29.2,423.912,38.429v60Z",transform:"translate(11.926 4970)"}})])]),t._v(" "),a("div",{staticClass:"footer-box2"},[a("svg",{staticClass:"footer-box__shape",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1366 246"}},[a("path",{attrs:{d:"M-1505.5-4725.5v-238.1c8.149-3.133,18.138-5.059,29.672-5.9h30.954c201.21,11.667,696.6,224.535,855.572,236.458,205.129,15.385,287.179-164.1,432.047-175.625a42.381,42.381,0,0,1,16.756,1.857V-4725.5Z",transform:"translate(1506 4971)"}})]),t._v(" "),a("ul",{staticClass:"footer-social__list"},t._l(t.$themeLocaleConfig.social,(function(s,e){return a("li",{key:s.name+"-"+e,staticClass:"footer-social__item"},[a("a",{attrs:{href:s.link,target:"_blank",rel:"noopener external",title:"联系我"}},[a("span",{staticClass:"icon footer-social__icon"},[t._v(t._s(s.name))])])])})),0),t._v(" "),a("div",{staticClass:"footer-newsletter"},[t.$themeLocaleConfig.newsletter.action?a("newsletter"):t._e()],1)]),t._v(" "),a("section",{staticClass:"footer-box3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column sm-50 footer-card"},[t.getAuthor.length?a("lazy-load",[a("card-author",{staticClass:"footer__card-author",attrs:{shadow:!1,author:t.getAuthor[0]}}),t._v(" "),a("div",{staticClass:"watermark-logo"})],1):t._e()],1),t._v(" "),a("div",{staticClass:"column sm-50 footer-nav"},[a("div",{staticClass:"row justify-right"},[t.$themeLocaleConfig.footer.nav1.items.length?a("div",{staticClass:"column xs-50 sm-40 md-33 footer-nav__box footer-nav__box--1"},[a("h2",{staticClass:"meta-text title"},[t._v(t._s(t.$themeLocaleConfig.footer.nav1.title))]),t._v(" "),a("nav",{staticClass:"footer-nav1"},[a("ul",t._l(t.$themeLocaleConfig.footer.nav1.items,(function(s,e){return a("li",{key:s.label+"-"+e,staticClass:"footer-nav1__item"},[s.path?a("router-link",{attrs:{to:s.path}},[t._v(t._s(s.label))]):t._e(),t._v(" "),s.link?a("a",{attrs:{href:s.link,rel:"noopener nofollow",target:"_blank"}},[t._v(t._s(s.label))]):t._e()],1)})),0)])]):t._e(),t._v(" "),t.$themeLocaleConfig.footer.nav2.items.length?a("div",{staticClass:"column xs-50 sm-40 md-33 footer-nav__box footer-nav__box--2"},[a("h2",{staticClass:"meta-text title"},[t._v(t._s(t.$themeLocaleConfig.footer.nav2.title))]),t._v(" "),a("nav",{staticClass:"footer-nav2"},[a("ul",t._l(t.$themeLocaleConfig.footer.nav2.items,(function(s,e){return a("li",{key:s.label+"-"+e,staticClass:"footer-nav2__item"},[s.path?a("router-link",{attrs:{to:s.path}},[t._v(t._s(s.label))]):t._e(),t._v(" "),s.link?a("a",{attrs:{href:s.link,rel:"noopener nofollow",target:"_blank"}},[t._v(t._s(s.label))]):t._e()],1)})),0)])]):t._e()])]),t._v(" "),a("div",{staticClass:"column sm-100 footer-copy",domProps:{innerHTML:t._s(t.$themeLocaleConfig.copy)}})]),t._v(" "),a("span",{staticClass:"shapes shapes--circle",staticStyle:{left:"3%",top:"-20%"}}),t._v(" "),a("span",{staticClass:"shapes shapes--primary shapes--color3",staticStyle:{left:"30%",top:"-15%"}}),t._v(" "),a("span",{staticClass:"shapes shapes--primary",staticStyle:{left:"13%",top:"-80%",transform:"rotate(45deg)"}}),t._v(" "),a("span",{staticClass:"shapes shapes--circle shapes--color4",staticStyle:{left:"40%",top:"200px"}}),t._v(" "),a("span",{staticClass:"shapes shapes--primary",staticStyle:{left:"15%",bottom:"10%",transform:"rotate(75deg)"}}),t._v(" "),a("span",{staticClass:"shapes shapes--circle shapes--color3",staticStyle:{right:"50%",top:"30%"}}),t._v(" "),a("span",{staticClass:"shapes shapes--primary",staticStyle:{right:"20%",top:"-100%"}}),t._v(" "),a("span",{staticClass:"shapes shapes--circle",staticStyle:{right:"10%",top:"-20%"}}),t._v(" "),a("span",{staticClass:"shapes shapes--color4",staticStyle:{right:"35%",top:"-20%",transform:"rotate(45deg)"}}),t._v(" "),a("span",{staticClass:"shapes shapes--circle",staticStyle:{left:"40%",top:"-50%"}}),t._v(" "),a("span",{staticClass:"shapes shapes--color3",staticStyle:{right:"30%",top:"20%"}}),t._v(" "),a("span",{staticClass:"shapes shapes--circle shapes--primary",staticStyle:{right:"30%",bottom:"20%"}})])])}),[],!1,null,null,null);s.default=l.exports}}]);