(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2eaf7ade"],{"04d2":function(t,e,s){"use strict";s("f818")},"159b":function(t,e,s){var r=s("da84"),a=s("fdbc"),n=s("785a"),i=s("17c2"),c=s("9112"),o=function(t){if(t&&t.forEach!==i)try{c(t,"forEach",i)}catch(e){t.forEach=i}};for(var d in a)a[d]&&o(r[d]&&r[d].prototype);o(n)},"17c2":function(t,e,s){"use strict";var r=s("b727").forEach,a=s("a640"),n=a("forEach");t.exports=n?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1a0d":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navi"},[s("van-nav-bar",{attrs:{title:t.title,"left-text":"返回","right-text":t.rightText,fixed:t.fixed,"left-arrow":""},on:{"click-left":t.back,"click-right":t.clickRight}})],1)},a=[],n={name:"Navi",data:function(){return{}},props:{title:{type:String,default:""},rightText:{type:String,default:""},fixed:{type:Boolean,default:!1}},methods:{back:function(){this.$router.go(-1)},clickRight:function(){this.$emit("click-right")}}},i=n,c=(s("04d2"),s("2877")),o=Object(c["a"])(i,r,a,!1,null,"17aaf7fc",null);e["a"]=o.exports},"20e8":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shopbag-item"},[s("div",{staticClass:"shopbag-item-img"},[s("img",{staticClass:"auto-img",attrs:{src:t.pro.small_img,alt:""}})]),s("div",{staticClass:"shopbag-item-content"},[s("div",{staticClass:"shopbag-name"},[s("div",{staticClass:"zhname-box"},[s("div",{staticClass:"zhname one-text"},[t._v(t._s(t.pro.name))]),s("div",{staticClass:"rule one-text"},[t._v(t._s(t.pro.rule))])]),s("div",{staticClass:"enname one-text"},[t._v(t._s(t.pro.enname))])]),s("div",{staticClass:"price-count"},[s("div",{staticClass:"price"},[t._v("¥"+t._s(t.pro.price))]),s("div",{staticClass:"count"},[t._v("x"+t._s(t.pro.count))])])])])},a=[],n={name:"OrderPro",props:{pro:{type:Object,default:function(){return{}}}}},i=n,c=(s("8fbf"),s("2877")),o=Object(c["a"])(i,r,a,!1,null,"deb88d52",null);e["a"]=o.exports},"4dae":function(t,e,s){var r=s("da84"),a=s("23cb"),n=s("07fa"),i=s("8418"),c=r.Array,o=Math.max;t.exports=function(t,e,s){for(var r=n(t),d=a(e,r),u=a(void 0===s?r:s,r),l=c(o(u-d,0)),f=0;d<u;d++,f++)i(l,f,t[d]);return l.length=f,l}},"5e0b":function(t,e,s){},"5fd5":function(t,e,s){},8130:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-buy"},[s("Navi",{attrs:{fixed:!0,title:"订单结算"}}),s("div",{staticClass:"order-buy-box"},[s("div",{staticClass:"order-address"},[s("div",{staticClass:"select-address"},[s("div",{staticClass:"select-address-title",on:{click:t.selectAddress}},[t._v("选择地址")]),s("div",{staticClass:"arrow"},[s("van-icon",{attrs:{name:"arrow"}})],1)]),s("div",{staticClass:"userinfo-box"},[s("div",{staticClass:"userinfo"},[s("div",{staticClass:"username"},[t._v(t._s(t.userSelectAddress.name))]),s("div",{staticClass:"phone"},[t._v(t._s(t.userSelectAddress.tel))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.userSelectAddress.isDefault,expression:"userSelectAddress.isDefault"}]},[s("van-tag",{attrs:{round:"",color:"#0C34BA"}},[t._v("默认")])],1)]),s("div",{staticClass:"detail-address"},[t._v(t._s(t.userSelectAddress.address))])])]),s("div",{staticClass:"order-product"},[s("div",{staticClass:"order-info"},[t._v("订单信息")]),s("div",{staticClass:"order-pro"},t._l(t.buyShopbagProduct,(function(t,e){return s("div",{key:e,staticClass:"order-pro-item"},[s("OrderPro",{attrs:{pro:t}})],1)})),0),s("div",{staticClass:"order-total"},[s("div",{staticClass:"order-count"},[t._v("共计 "+t._s(t.count)+" 件商品")]),s("div",{staticClass:"order-money"},[t._v("订单金额：¥"+t._s(t.total))]),s("div",{staticClass:"left-circle circle"}),s("div",{staticClass:"right-circle circle"})])])]),s("van-popup",{attrs:{position:"bottom",closeable:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("div",{staticClass:"sel-address"},[s("div",{staticClass:"sel-address-title"},[t._v("选择地址")]),s("div",[s("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{add:t.addAddress,select:t.select},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)])]),s("div",{staticClass:"buy-now"},[s("van-button",{attrs:{round:"",block:"",color:"#0C34BA"},on:{click:t.pay}},[t._v("立即结算")])],1)],1)},a=[],n=s("1da1"),i=(s("96cf"),s("ac1f"),s("1276"),s("d3b7"),s("159b"),s("99af"),s("e9c4"),s("b0c0"),s("1a0d")),c=s("20e8"),o={name:"OrderBuy",components:{Navi:i["a"],OrderPro:c["a"]},data:function(){return{show:!1,chosenAddressId:"",list:[],userSelectAddress:{tel:"",name:"",isDefault:!1,address:""},sids:[],buyShopbagProduct:[],count:0,total:0}},created:function(){this.sids=this.$route.query.sids.split(/-/),this.getAddressData(),this.getBuyShopbagProduct()},methods:{addAddress:function(){this.$router.push({name:"Address"})},selectAddress:function(){this.show=!0},select:function(t){for(var e in this.userSelectAddress)this.userSelectAddress[e]=t[e];this.show=!1},getAddressData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get("findAddress",{});case 2:s=e.sent,r=s.result,a=s.code,2e4===a&&(r.forEach((function(e){if(e.isDefault=Boolean(e.isDefault),e.address="".concat(e.province).concat(e.city).concat(e.county).concat(e.addressDetail),e.isDefault)for(var s in t.chosenAddressId=e.id,t.userSelectAddress)t.userSelectAddress[s]=e[s]})),t.list=r);case 5:case"end":return e.stop()}}),e)})))()},getBuyShopbagProduct:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,r,a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get("commitShopcart",{sids:JSON.stringify(t.sids)});case 2:if(s=e.sent,r=s.result,a=s.code,5e4!==a){e.next=14;break}if(0!==r.length){e.next=8;break}return t.$router.push({name:"Shopbag"}),e.abrupt("return");case 8:n=0,i=0,r.forEach((function(t){n+=t.count,i+=t.count*t.price})),t.buyShopbagProduct=r,t.count=n,t.total=i;case 14:case"end":return e.stop()}}),e)})))()},pay:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.chosenAddressId){e.next=3;break}return t.$toast("请选择地址"),e.abrupt("return");case 3:return e.next=5,t.post("pay",{sids:JSON.stringify(t.sids),phone:t.userSelectAddress.tel,address:t.userSelectAddress.address,receiver:t.userSelectAddress.name});case 5:s=e.sent,6e4===s.code&&setTimeout((function(){t.$router.push({name:"Order"})}),1e3);case 7:case"end":return e.stop()}}),e)})))()}}},d=o,u=(s("a455"),s("2877")),l=Object(u["a"])(d,r,a,!1,null,"571c832c",null);e["default"]=l.exports},"8fbf":function(t,e,s){"use strict";s("5fd5")},a455:function(t,e,s){"use strict";s("5e0b")},a640:function(t,e,s){"use strict";var r=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&r((function(){s.call(null,e||function(){return 1},1)}))}},b0c0:function(t,e,s){var r=s("83ab"),a=s("5e77").EXISTS,n=s("e330"),i=s("9bf2").f,c=Function.prototype,o=n(c.toString),d=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=n(d.exec),l="name";r&&!a&&i(c,l,{configurable:!0,get:function(){try{return u(d,o(this))[1]}catch(t){return""}}})},e9c4:function(t,e,s){var r=s("23e7"),a=s("da84"),n=s("d066"),i=s("2ba4"),c=s("e330"),o=s("d039"),d=a.Array,u=n("JSON","stringify"),l=c(/./.exec),f=c("".charAt),v=c("".charCodeAt),h=c("".replace),p=c(1..toString),b=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,m=/^[\uDC00-\uDFFF]$/,C=function(t,e,s){var r=f(s,e-1),a=f(s,e+1);return l(g,t)&&!l(m,a)||l(m,t)&&!l(g,r)?"\\u"+p(v(t,0),16):t},x=o((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&r({target:"JSON",stat:!0,forced:x},{stringify:function(t,e,s){for(var r=0,a=arguments.length,n=d(a);r<a;r++)n[r]=arguments[r];var c=i(u,null,n);return"string"==typeof c?h(c,b,C):c}})},f818:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2eaf7ade.37bbe40a.js.map