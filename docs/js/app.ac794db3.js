(function(e){function t(t){for(var n,o,i=t[0],s=t[1],l=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==c[s]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},c={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/producting/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"02aa":function(e,t,r){},"034f":function(e,t,r){"use strict";var n=r("8a23"),c=r.n(n);c.a},"075c":function(e,t,r){"use strict";var n=r("7897"),c=r.n(n);c.a},"141a":function(e,t,r){"use strict";var n=r("02aa"),c=r.n(n);c.a},"43f7":function(e,t,r){},"4ecc":function(e,t,r){e.exports=r.p+"img/sign.1da817ef.jpeg"},"54c0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{staticStyle:{background:"transparent",border:"none",color:"transparent"},attrs:{app:"",height:"125px",flat:""},on:{click:function(t){return e.clickLogo()}}}),r("v-content",{staticClass:"ground"},[r("div",{staticClass:"my__container"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)]),r("v-bottom-navigation",{staticClass:"footer__css",attrs:{height:"125px","background-color":"#fbb3c7",color:"white",shift:"",value:e.activeBtn}},[r("v-btn",[r("span",{staticClass:"footer-text"},[e._v("유형 선택")]),r("v-icon",{staticClass:"footer-icon",attrs:{size:"60"}},[e._v("mdi-account")])],1),r("v-icon",{staticClass:"footer__arrow",attrs:{size:"40"}},[e._v("mdi-arrow-right")]),r("v-btn",[r("span",{staticClass:"footer-text"},[e._v("씨앗 선택")]),r("v-icon",{staticClass:"footer-icon",attrs:{size:"60"}},[e._v("mdi-seed")])],1),r("v-icon",{staticClass:"footer__arrow",attrs:{size:"40"}},[e._v("mdi-arrow-right")]),r("v-btn",[r("span",{staticClass:"footer-text"},[e._v("자리 선택")]),r("v-icon",{staticClass:"footer-icon",attrs:{size:"60"}},[e._v("mdi-square")])],1),r("v-icon",{staticClass:"footer__arrow",attrs:{size:"40"}},[e._v("mdi-arrow-right")]),r("v-btn",[r("span",{staticClass:"footer-text"},[e._v("구매")]),r("v-icon",{staticClass:"footer-icon",attrs:{size:"60"}},[e._v("mdi-coin")])],1)],1)],1)},a=[],o=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),i=r("2f62");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={name:"App",data:function(){return{}},computed:l({},Object(i["b"])({activeBtn:"activeBtn"})),methods:l({},Object(i["c"])({changeActiveBtn:"changeActiveBtn"}),{clickLogo:function(){this.$router.push("/"),this.changeActiveBtn(0)}})},p=u,f=(r("034f"),r("2877")),b=r("6544"),d=r.n(b),g=r("7496"),h=r("40dc"),v=r("b81c"),m=r("8336"),O=r("a75b"),y=r("132d"),_=Object(f["a"])(p,c,a,!1,null,null,null),j=_.exports;d()(_,{VApp:g["a"],VAppBar:h["a"],VBottomNavigation:v["a"],VBtn:m["a"],VContent:O["a"],VIcon:y["a"]});var A=r("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"main_page"}},[r("v-btn",{staticClass:"main_btn",attrs:{height:"400px"},on:{click:function(t){return e.clickButton(0)}}},[e._v("씨알 구매")]),r("v-btn",{staticClass:"main_btn right",attrs:{height:"400px"},on:{click:function(t){return e.clickButton(1)}}},[e._v("텃밭 관리")])],1)},P=[];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S={name:"MainPage",methods:k({},Object(i["c"])({changeActiveBtn:"changeActiveBtn"}),{clickButton:function(e){e?(this.$router.push("/manage"),this.changeActiveBtn(1)):(this.$router.push("selectCR"),this.changeActiveBtn(1))}})},B=S,x=(r("87d6"),Object(f["a"])(B,w,P,!1,null,"f3ce7e6e",null)),E=x.exports;d()(x,{VBtn:m["a"]});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("div",{staticStyle:{"padding-top":"50px"}},[e._l(e.seeds,(function(t,r){return n("v-card",{key:r,staticClass:"white--text align-end flower__card",attrs:{shaped:"",raised:""},on:{click:function(t){return e.select(r)}}},[n("v-img",{staticClass:"align-end flower__img",attrs:{src:t.flowerImgSrc,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[n("v-card-title",{staticClass:"title__zone"},[n("div",{staticClass:"title__text"},[e._v(" "+e._s(t.name)+" ")])])],1)],1)})),n("v-card",{staticClass:"white--text align-end flower__card",attrs:{shaped:"",raised:""}},[n("v-img",{attrs:{src:r("d600")}})],1)],2)])])},$=[];function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={name:"SelectCR",data:function(){return{}},methods:V({},Object(i["c"])(["selectingSeed"]),{select:function(e){this.selectingSeed(e),this.$router.push("/FlowerInfo")},goBack:function(){this.$router.go(-1)}}),computed:V({},Object(i["d"])({seeds:"seeds"}),{},Object(i["b"])({selected:"selected"}))},F=z,T=(r("8e07"),r("b0af")),J=r("99d9"),L=r("adda"),M=Object(f["a"])(F,D,$,!1,null,"7d7b1220",null),R=M.exports;d()(M,{VCard:T["a"],VCardTitle:J["a"],VImg:L["a"]});var G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"img__container"},[r("img",{staticClass:"flower__img",attrs:{src:e.selected.flowerImgSrc,alt:"꽃사진"}})]),r("div",{staticClass:"info_container"},[r("div",{staticClass:"inform"}),r("div",{staticClass:"move"},[e._v(" 이름 : "+e._s(e.selected.name)),r("br"),e._v(" 꽃말 : "+e._s(e.selected.floriography)),r("br"),e._v(" 정보 : "+e._s(e.selected.info)),r("br"),e._v(" 가격 : "+e._s(e.selected.price)),r("br"),r("div",{staticClass:"controller"},[r("v-btn",{staticClass:"buy",attrs:{height:"70px"},on:{click:function(t){return e.goBack()}}},[e._v("취소")]),r("v-btn",{staticClass:"buy",attrs:{height:"70px",color:"success"},on:{click:function(t){return e.clickBuy()}}},[e._v("자리 선택")])],1)])])])},N=[];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U={name:"FlowerInfo",computed:H({},Object(i["b"])(["selected"])),methods:H({},Object(i["c"])({changeActiveBtn:"changeActiveBtn"}),{goBack:function(){this.$router.go(-1)},clickBuy:function(){this.$router.push("/SelectSector"),this.changeActiveBtn(2)}})},Z=U,q=(r("dd87"),Object(f["a"])(Z,G,N,!1,null,"576ec2f0",null)),K=q.exports;d()(q,{VBtn:m["a"]});var Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"title-text"},[e._v("원하는 자리를 선택해주세요!")]),r("div",{staticClass:"container"},[r("div",{staticClass:"select__zone"},[r("br"),r("br"),r("br"),r("div",{staticClass:"fill"},e._l(e.getArea[e.page],(function(t,n){return r("div",{key:n,staticClass:"column"},e._l(t,(function(t,c){return r("div",{key:c},[0===t?r("v-btn",{staticClass:"box",attrs:{width:"150px",color:"rgba(190,95,20,0.9)",height:"150px"},on:{click:function(t){return e.clickBox(e.page,n,c)}}},[e._v(" "+e._s(Number(n)+1)+" - "+e._s(Number(c)+1)+" ")]):r("v-btn",{staticClass:"box disable",attrs:{disabled:"",width:"150px",height:"150px"},on:{click:function(t){return e.clickBox(e.page,n,c)}}},[e._v(" "+e._s(t)+" ")])],1)})),0)})),0),r("div",{staticClass:"select__area"},[e._v(" "+e._s(0===Number(e.page)?"A":2===Number(e.page)?"C":"B")+"구역 "),e.is_sector?r("span",[e._v(e._s(e.y+1)+"행 "+e._s(e.x+1)+"열")]):e._e()])])]),r("div",{staticClass:"controller"},[r("v-btn",{staticClass:"buy",attrs:{height:"70px"},on:{click:function(t){return e.goBack()}}},[e._v("취소")]),r("v-btn",{staticClass:"buy",attrs:{height:"70px",color:"success"},on:{click:function(t){return e.clickBuy()}}},[e._v("구매하기")])],1)])},Y=[];function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te={name:"SelectArea",data:function(){return{is_click:0,is_sector:0,page:0,y:0,x:0}},computed:ee({},Object(i["b"])({getArea:"getArea",getSector:"getSector"})),methods:ee({},Object(i["c"])({selectArea:"selectArea",setArea:"setArea",changeActiveBtn:"changeActiveBtn"}),{clickBuy:function(){this.is_click=0,this.$router.push("Payment"),this.changeActiveBtn(3)},clickPage:function(e){this.page=e,this.is_sector=0},goBack:function(){this.$router.go(-1)},clickBox:function(e,t,r){var n=[];n.push(e),n.push(t),n.push(r),this.selectArea(n),this.y=t,this.x=r,this.is_click=1,this.is_sector=1}}),created:function(){this.setArea(),this.page=this.getSector}},re=te,ne=(r("141a"),Object(f["a"])(re,Q,Y,!1,null,"96cbea1c",null)),ce=ne.exports;d()(ne,{VBtn:m["a"]});var ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"font-size":"40px","font-weight":"bold"}},[n("div",[e._v(" 자리 : "+e._s(0===e.selectedArea[0]?"A":2===e.selectedArea[0]?"C":"B")+"구역 "+e._s(e.selectedArea[1]+1)+"-"+e._s(e.selectedArea[2]+1)+" "),e.is_checked?n("div",[e._v("가격 : "+e._s(Number(e.selected.price)+500)+"원")]):n("div",[e._v("가격 : "+e._s(e.selected.price)+"원")]),n("img",{attrs:{src:r("4ecc"),width:"500px",alt:""}}),n("v-checkbox",{attrs:{label:"팻말 구매하실건가요?"},model:{value:e.is_checked,callback:function(t){e.is_checked=t},expression:"is_checked"}}),e.is_checked?n("div",[n("v-text-field",{staticStyle:{width:"250px"},attrs:{label:"이름을 입력해주세요"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1):e._e()],1),n("div",{staticClass:"controller"},[n("v-btn",{staticClass:"buy",on:{click:function(t){return e.goBack()}}},[e._v("취소")]),n("v-btn",{staticClass:"buy",on:{click:function(t){return e.clickBuy()}}},[e._v("결제하기")])],1)])},oe=[];function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var le={name:"Payment",data:function(){return{is_checked:0,name:null}},computed:se({},Object(i["b"])(["selected","selectedArea"])),methods:se({},Object(i["c"])({changeActiveBtn:"changeActiveBtn"}),{clickBuy:function(){this.$router.push("PaymentLoading")},goBack:function(){this.$router.go(-1),this.changeActiveBtn(2)}}),created:function(){console.log(this.selectedArea)}},ue=le,pe=r("ac7c"),fe=r("8654"),be=Object(f["a"])(ue,ae,oe,!1,null,"30630e76",null),de=be.exports;d()(be,{VBtn:m["a"],VCheckbox:pe["a"],VTextField:fe["a"]});var ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v(" 결제화면이예용 돈을 넣었는지 확인중입니다..... ")])},he=[],ve={name:"PaymentLoading",created:function(){var e=this;setTimeout((function(){console.log(this)}),1e3),setTimeout((function(){console.log(e),e.$router.push("/finish")}),3e3)}},me=ve,Oe=Object(f["a"])(me,ge,he,!1,null,"cd410910",null),ye=Oe.exports,_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v(" 결제완료~! "),r("v-btn",{on:{click:function(t){return e.goHome()}}},[e._v("홈 화면으로")])],1)},je=[];function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Pe={name:"finish",methods:we({},Object(i["c"])({changeActiveBtn:"changeActiveBtn"}),{goHome:function(){this.$router.push("/"),this.changeActiveBtn(0)}})},Ce=Pe,ke=Object(f["a"])(Ce,_e,je,!1,null,"6d48bb36",null),Se=ke.exports;d()(ke,{VBtn:m["a"]});var Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title-text"},[e._v("구역을 선택해주세요!")]),e._v(" "),n("br"),n("img",{staticClass:"sector__img",attrs:{src:r("ba04")}}),n("br"),n("button",{staticClass:"btn-a",on:{click:function(t){return e.choose(0)}}},[e._v("구역 A")]),n("button",{staticClass:"btn-b btn-a",on:{click:function(t){return e.choose(1)}}},[e._v("구역 B")]),n("button",{staticClass:"btn-a btn-c",on:{click:function(t){return e.choose(2)}}},[e._v("구역 C")])])},xe=[];function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function De(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $e={name:"SelectSector",methods:De({},Object(i["c"])({selectSector:"selectSector"}),{choose:function(e){this.$router.push("/selectArea"),this.selectSector(e)}})},Ie=$e,Ve=(r("075c"),Object(f["a"])(Ie,Be,xe,!1,null,"0e1e7030",null)),ze=Ve.exports;n["a"].use(A["a"]);var Fe=[{path:"/",name:"MainPage",component:E},{path:"/selectCR",name:"Cselecting",component:R},{path:"/FlowerInfo",name:"flowerInfo",component:K},{path:"/SelectArea",name:"selectArea",component:ce},{path:"/Payment",name:"payment",component:de},{path:"/PaymentLoading",name:"paymentLoading",component:ye},{path:"/Finish",name:"finish",component:Se},{path:"/SelectSector",name:"selectsector",component:ze}],Te=new A["a"]({mode:"history",base:"/producting/",routes:Fe}),Je=Te;n["a"].use(i["a"]);var Le=new i["a"].Store({state:{selectedSeed:null,waiting:0,activeBtn:0,seeds:[{name:"라벤더",price:"300 ",info:"라벤더는 꿀풀과의 상록 여러해살이풀로, 지중해 연안이 원산지다. 허브차, 아로마테라피, 관상용으로 이용된다. 봄에 보라색이나 흰색 또는 분홍색의 꽃을 핀다 ",floriography:'꽃말은 "침묵"으로, 흥분을 가라 앉히는 진정제 효과가 있는데서 이러한 꽃말이 생겼다 ',flowerImgSrc:"http://www.womansense.org/imgdata/jb_breaknews_com/201406/2014062119295558.jpg",seedImgSrc:"http://ogok.co.kr/data/editor/goods/1/2017/08/4724_15031299882800.jpg "},{name:"채송화 ",price:"300 ",info:"양지바른 곳이면 어디서나 잘 자란다. 또 꽃은 7~10월에 피고 맑은날 낮에 피며 오후 2시경에 시든다 . 꽃 한송이의 수명은 짧으나 다른 꽃이 계속 피므로 오랫동안 꽃을 보고 즐길 수가 있다. ",floriography:"천진난만, 순진함, 가련",flowerImgSrc:"https://mblogthumb-phinf.pstatic.net/20160607_201/kdy3748_14653045015114WAvl_JPEG/086.JPG?type=w800 ",seedImgSrc:"https://mblogthumb-phinf.pstatic.net/20160601_155/syjeong29_1464728360860x9Qet_JPEG/%25EC%25B1%2584%25EC%2586%25A1%25ED%2599%2594_%25EA%25BD%2583%25EC%2594%25A8.jpg?type=w800 "},{name:"안개꽃 ",price:"300 ",info:"5~6월에 활동. 보기와 다르게 튼튼하다. 추위에 강하고 보기와 달리 튼튼하다. 관상용, 꽃꼿이용, 드라이플라워로 인기가 많다. ",floriography:"기쁨의 순간, 사랑의 성공, 죽도록 사랑해 ",flowerImgSrc:"https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4OTZ/image/Led1ZTgWU8dfdYEc5tW-61CWRlU ",seedImgSrc:"http://cfile232.uf.daum.net/image/1437384E5062AAED29C421"},{name:"국화 ",price:"300 ",info:"국화는 관상용으로 널리 쓰이며, 많은 원예 품종이 있다. 기온이 낮은 가을에 피는 특성으로 동양에서는 절개를 지키는 군자의 상징으로 삼았다. ",floriography:"진실, 짝사랑, 성실",flowerImgSrc:"http://dn.joongdo.co.kr/mnt/images/file/2018y/10m/19d/2018101901001756600076011.jpg ",seedImgSrc:"http://holyabba.com/wp/wp-content/uploads/2019/05/cornflower-seed-collecting-20190521-9.jpeg "},{name:"봉숭아",price:"300",info:"봉숭아는 여름에 꽃을 피우는 대표적 관상초다. 4-5월 즈음에 심는 것이 좋으며, 진한 색감으로 물들이는데 쓰인다.",floriography:"소녀의 순정 ",flowerImgSrc:"https://t1.daumcdn.net/cfile/tistory/99C203345B2CF80208 ",seedImgSrc:"http://thumbnail.egloos.net/600x0/http://pds14.egloos.com/pds/200902/19/84/a0113084_499c96ca1ed05.jpg "},{name:"로단테",price:"500",info:"꽃은 3∼4월에 피고 몇 개로 갈라진 줄기 끝에 두상화(頭狀花:꽃대 끝에 꽃자루가 없는 많은 작은 꽃이 모여 피어 머리 모양을 이룬 꽃)를 이루며 달린다.",floriography:"영원한 사랑",flowerImgSrc:"http://m1.daumcdn.net/cfile236/R400x0/2169944C570F252D0798F8",seedImgSrc:"https://www.researchgate.net/profile/Salza_Palpurina/publication/281857979/figure/fig5/AS:614259100758036@1523462190586/Detail-of-E-roseum-seed-plant-collected-in-the-Czech-Republic-photo-DB-Dittrichova.png"},{name:"페퍼민트",price:"300 ",info:"정신안정, 진통효과, 소화촉진, 천식, 결핵, 기관지염 완화, 항균, 체질개선, 시력유지 등의 효과가 있습니다.온도가 여름처럼 덥지도 않고 습도도 높지 않고 바람과 해가 적당한 그런 5월에 잘 자랍니다.",floriography:"다시한번 사랑하고 싶습니다. ",flowerImgSrc:"http://mblogthumb1.phinf.naver.net/20150715_256/ufo5405_1436916826773FKMuy_JPEG/DSC01269.JPG?type=w2",seedImgSrc:"http://mblogthumb3.phinf.naver.net/20160619_70/shakebobby99_1466314740608Pid8y_JPEG/-%B9%CC%B4%CF%C7%E3%BA%EA%C0%E7%B9%E8%BC%C2%C6%AE_%2818%29.jpg?type=w800"}],sector:null,allArea:Array(Array(Array(),Array(),Array()),Array(Array(),Array(),Array()),Array(Array(),Array(),Array())),selectedArea:Array()},getters:{selected:function(e){return e.selectedSeed},waiting:function(e){return e.waiting},getArea:function(e){return e.allArea},getSector:function(e){return e.sector},activeBtn:function(e){return e.activeBtn},selectedArea:function(e){return e.selectedArea}},mutations:{setArea:function(e){for(var t=0;t<3;t++)for(var r=0;r<3;r++)for(var n=0;n<10;n++)e.allArea[t][r][n]||(e.allArea[t][r][n]=0);e.allArea[0][1][2]="최원빈",e.allArea[0][1][3]="최원빈",e.allArea[0][2][7]="최원빈",e.allArea[0][0][0]="권예찬",e.allArea[0][0][2]="권예찬",e.allArea[0][0][1]="권예찬",e.allArea[0][0][5]="박종선",e.allArea[0][0][6]="박종선",e.allArea[0][0][7]="박종선",e.allArea[0][2][0]="배수빈",e.allArea[0][2][1]="배수빈",e.allArea[0][2][2]="배수빈",e.allArea[0][0][9]="고다혜",e.allArea[0][1][9]="고다혜",e.allArea[0][2][9]="고다혜",e.allArea[1][0][1]="박종선",e.allArea[1][0][2]="박종선",e.allArea[1][2][0]="배수빈",e.allArea[1][2][1]="배수빈",e.allArea[1][1][9]="권예찬",e.allArea[1][1][8]="권예찬",e.allArea[1][0][4]="고다혜",e.allArea[1][0][5]="고다혜",e.allArea[1][2][5]="최원빈",e.allArea[1][2][6]="최원빈",e.allArea[2][2][1]="박종선",e.allArea[2][2][2]="박종선",e.allArea[2][1][0]="배수빈",e.allArea[2][1][1]="배수빈",e.allArea[2][0][9]="권예찬",e.allArea[2][0][8]="권예찬",e.allArea[2][2][4]="고다혜",e.allArea[2][2][5]="고다혜",e.allArea[2][1][5]="최원빈",e.allArea[2][1][6]="최원빈"},selectingSeed:function(e,t){return e.selectedSeed=e.seeds[t]},wait:function(e){return e.waiting+=1},selectArea:function(e,t){e.selectedArea[0]=t[0],e.selectedArea[1]=t[1],e.selectedArea[2]=t[2]},selectSector:function(e,t){e.sector=t},changeActiveBtn:function(e,t){e.activeBtn=t}},actions:{},modules:{}}),Me=r("f309");n["a"].use(Me["a"]);var Re=new Me["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Je,store:Le,vuetify:Re,render:function(e){return e(j)}}).$mount("#app")},7897:function(e,t,r){},"87d6":function(e,t,r){"use strict";var n=r("d433"),c=r.n(n);c.a},"8a23":function(e,t,r){},"8e07":function(e,t,r){"use strict";var n=r("43f7"),c=r.n(n);c.a},ba04:function(e,t,r){e.exports=r.p+"img/area.ffe8aa70.png"},d433:function(e,t,r){},d600:function(e,t,r){e.exports=r.p+"img/adding_data.8695bad0.png"},dd87:function(e,t,r){"use strict";var n=r("54c0"),c=r.n(n);c.a}});
//# sourceMappingURL=app.ac794db3.js.map