(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b8a129c"],{"0235":function(t,e,r){t.exports=r.p+"static/img/bing.551cd274.png"},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7");function n(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,s,"next",t)}function s(t){n(a,i,o,c,s,"throw",t)}c(void 0)}))}}},"1f22":function(t,e,r){"use strict";r("4fac")},"25d3":function(t,e,r){t.exports=r.p+"static/img/kuaison.5948ad13.png"},"41da":function(t,e,r){"use strict";r("ad12")},"4fac":function(t,e,r){},"67d6":function(t,e,r){t.exports=r.p+"static/img/daodianqu.9348a214.png"},"6a4d":function(t,e,r){t.exports=r.p+"static/img/liwu.8a6ff926.png"},7491:function(t,e,r){t.exports=r.p+"static/img/xinren.2f6171e2.png"},9379:function(t,e,r){t.exports=r.p+"static/img/maichaoping.0446984f.png"},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(D){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new O(n||[]);return o._invoke=L(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",g="completed",d={};function v(){}function m(){}function y(){}var w={};s(w,o,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(I([])));b&&b!==r&&n.call(b,o)&&(w=b);var k=y.prototype=v.prototype=Object.create(w);function C(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function L(t,e,r){var n=f;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===g){if("throw"===i)throw o;return P()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?g:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=g,r.method="throw",r.arg=s.arg)}}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=y,s(k,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},C(_.prototype),s(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new _(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(k),s(k,c,"Generator"),s(k,o,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;E(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a5a0:function(t,e,r){t.exports=r.p+"static/img/lipingka.2135f937.png"},ad12:function(t,e,r){},b0c0:function(t,e,r){var n=r("83ab"),i=r("5e77").EXISTS,o=r("e330"),a=r("9bf2").f,c=Function.prototype,s=o(c.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),f="name";n&&!i&&a(c,f,{configurable:!0,get:function(){try{return l(u,s(this))[1]}catch(t){return""}}})},b60d:function(t,e,r){t.exports=r.p+"static/img/34.0c3ee6d1.png"},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("div",{staticClass:"bannner-box"},[n("div",{staticClass:"bannner-boxding"},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white",height:"260px"}},t._l(t.bannerData,(function(e,r){return n("van-swipe-item",{key:r},[n("div",{on:{click:function(r){return t.viewDetail(e.pid)}}},[n("img",{staticClass:"bannerImg",attrs:{src:e.bannerImg,alt:e.name}})])])})),1)],1),n("div",{staticClass:"itemBox itemBox1"},[n("div",{staticClass:"d"},[n("div",{staticClass:"itemBox-head"},[n("div",{staticClass:"CallText"},[t._v("Luck you~ 跟幸运打个招呼")]),n("div",{staticClass:"logText",on:{click:t.goLogin}},[t._v(t._s(t.name))])])]),n("div",{staticClass:"bg"},[n("div",{staticClass:"threeBox"},t._l(t.three,(function(e,r){return n("div",{key:r,staticClass:"item-three",on:{click:function(r){return t.tFClick(e)}}},[n("img",{staticClass:"threeImg",attrs:{src:e.threeImg,alt:""}}),n("div",{staticClass:"threeText"},[t._v(t._s(e.threeText))]),n("div",{staticClass:"threejie"},[t._v(t._s(e.threejie))])])})),0),n("div",{staticClass:"fourBox"},t._l(t.four,(function(e,r){return n("div",{key:r,staticClass:"item-four",on:{click:function(r){return t.tFClick(e)}}},[n("img",{staticClass:"fourImg",attrs:{src:e.fourImg,alt:""}}),n("div",{staticClass:"fourText"},[t._v(t._s(e.fourText))]),n("div",{staticClass:"fourjie"},[t._v(t._s(e.fourjie))])])})),0)])]),n("div",{staticClass:"itemBox bannner-box2",on:{click:t.goMenu}},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white",height:"260px"}},[n("van-swipe-item",[n("img",{staticClass:"hengImg",attrs:{src:r("7491"),alt:""}})]),n("van-swipe-item",[n("img",{staticClass:"hengImg",attrs:{src:r("0235"),alt:""}})])],1)],1),n("div",{staticClass:"productTab"},[n("van-tabs",{attrs:{swipeable:""},on:{click:t.onClick,change:t.hua,rendered:t.initialize},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.productType,(function(e,r){return n("van-tab",{key:r,attrs:{title:e.typeDesc}},[n("div",{staticClass:"product-box"},t._l(t.productData,(function(e,r){return n("div",{key:r,staticClass:"product-item",on:{click:function(r){return t.viewDetail(e.pid)}}},[n("homeProduct",{attrs:{pro:e}})],1)})),0)])})),1)],1)])])},i=[],o=r("1da1"),a=(r("b0c0"),r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"homeProduct"},[r("div",{staticClass:"img-box"},[r("img",{staticClass:"auto-img",attrs:{src:t.pro.smallImg,alt:""}})]),r("div",{staticClass:"homeProduct-name one-text"},[t._v(t._s(t.pro.name))]),r("div",{staticClass:"homeProduct-enname one-text"},[t._v(t._s(t.pro.enname))]),r("div",{staticClass:"homeProduct-price"},[t._v("¥"+t._s(t.pro.price))])])}),c=[],s={name:"homeProduct",props:{pro:{type:Object,default:function(){return{}}}}},u=s,l=(r("41da"),r("2877")),f=Object(l["a"])(u,a,c,!1,null,"70105b36",null),h=f.exports,p={name:"Home",data:function(){return{bannerData:[],left:0,x0:0,active:0,loginState:!0,nickName:"",name:"登录/注册",productType:[],productData:[],three:[{threeImg:r("67d6"),threeText:"到店送",threejie:"提前下单自取",go:"Menu"},{threeImg:r("25d3"),threeText:"幸运送",threejie:"无接触及时送",go:"Menu"},{threeImg:r("9379"),threeText:"买潮品",threejie:"瑞幸颜值周边",go:""}],four:[{fourImg:r("b60d"),fourText:"充3赠4",fourjie:"咖啡钱包",go:"Coffeewallet"},{fourImg:r("a5a0"),fourText:"礼品卡",fourjie:"传情达意",go:"Giftcard"},{fourImg:r("f44c"),fourText:"优惠联盟",fourjie:"超级权益",go:"Discounts"},{fourImg:r("6a4d"),fourText:"福利中心",fourjie:"天天得福利",go:""}]}},components:{homeProduct:h},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getBannerData(),t.getProductType(),t.initialize(),t.login();case 4:case"end":return e.stop()}}),e)})))()},methods:{tFClick:function(t){var e=this.loginState;return e?""!==t.go?this.$router.push({name:t.go}):void this.$toast("抱歉!该功能正在维护中"):this.$router.push({name:"Login"})},goLogin:function(){var t=this.loginState;this.$router.push({name:t?"My":"Login"})},goMenu:function(){var t=this.loginState;this.$router.push({name:t?"Menu":"Login"})},login:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get("findMy",{},(function(){t.loginState=!1}));case 2:r=e.sent,n=r.result,i=r.code,700!==i&&(t.name=r.result[0].nickName,t.$toast("".concat(n[0].nickName,"   欢迎回来")));case 5:case"end":return e.stop()}}),e)})))()},initialize:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get("typeProducts",{key:"type",value:"latte"});case 2:r=e.sent,n=r.result,i=r.code,500===i&&(t.productData=n);case 5:case"end":return e.stop()}}),e)})))()},hua:function(t,e){this.onClick(t,e)},onClick:function(t,e){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.get("typeProducts",{key:"type",value:r.productType[t].type});case 2:n=e.sent,i=n.result,o=n.code,500===o&&(r.productData=i);case 5:case"end":return e.stop()}}),e)})))()},getBannerData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get("banner",{});case 2:r=e.sent,n=r.result,i=r.code,300===i&&(t.bannerData=n);case 5:case"end":return e.stop()}}),e)})))()},getProductType:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get("type",{});case 2:r=e.sent,n=r.result,i=r.code,400===i&&(t.productType=n);case 5:case"end":return e.stop()}}),e)})))()},viewDetail:function(t){this.$router.push({name:"Detail",params:{pid:t}})}}},g=p,d=(r("1f22"),Object(l["a"])(g,n,i,!1,null,"b97bb9f2",null));e["default"]=d.exports},f44c:function(t,e,r){t.exports=r.p+"static/img/juan.0cc3498a.png"}}]);
//# sourceMappingURL=chunk-1b8a129c.37100519.js.map