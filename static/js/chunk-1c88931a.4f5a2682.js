(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c88931a"],{"159b":function(t,e,a){var r=a("da84"),n=a("fdbc"),i=a("785a"),s=a("17c2"),o=a("9112"),c=function(t){if(t&&t.forEach!==s)try{o(t,"forEach",s)}catch(e){t.forEach=s}};for(var d in n)n[d]&&c(r[d]&&r[d].prototype);c(i)},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,n=a("a640"),i=n("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"20e8":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shopbag-item"},[a("div",{staticClass:"shopbag-item-img"},[a("img",{staticClass:"auto-img",attrs:{src:t.pro.small_img,alt:""}})]),a("div",{staticClass:"shopbag-item-content"},[a("div",{staticClass:"shopbag-name"},[a("div",{staticClass:"zhname-box"},[a("div",{staticClass:"zhname one-text"},[t._v(t._s(t.pro.name))]),a("div",{staticClass:"rule one-text"},[t._v(t._s(t.pro.rule))])]),a("div",{staticClass:"enname one-text"},[t._v(t._s(t.pro.enname))])]),a("div",{staticClass:"price-count"},[a("div",{staticClass:"price"},[t._v("¥"+t._s(t.pro.price))]),a("div",{staticClass:"count"},[t._v("x"+t._s(t.pro.count))])])])])},n=[],i={name:"OrderPro",props:{pro:{type:Object,default:function(){return{}}}}},s=i,o=(a("8fbf"),a("2877")),c=Object(o["a"])(s,r,n,!1,null,"deb88d52",null);e["a"]=c.exports},"5fd5":function(t,e,a){},"7b4a":function(t,e,a){},"8fbf":function(t,e,a){"use strict";a("5fd5")},a434:function(t,e,a){"use strict";var r=a("23e7"),n=a("da84"),i=a("23cb"),s=a("5926"),o=a("07fa"),c=a("7b0b"),d=a("65f0"),u=a("8418"),l=a("1dde"),f=l("splice"),v=n.TypeError,p=Math.max,h=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var a,r,n,l,f,b,C=c(this),_=o(C),w=i(t,_),x=arguments.length;if(0===x?a=r=0:1===x?(a=0,r=_-w):(a=x-2,r=h(p(s(e),0),_-w)),_+a-r>m)throw v(g);for(n=d(C,r),l=0;l<r;l++)f=w+l,f in C&&u(n,l,C[f]);if(n.length=r,a<r){for(l=w;l<_-r;l++)f=l+r,b=l+a,f in C?C[b]=C[f]:delete C[b];for(l=_;l>_-r+a;l--)delete C[l-1]}else if(a>r)for(l=_-r;l>w;l--)f=l+r-1,b=l+a-1,f in C?C[b]=C[f]:delete C[b];for(l=0;l<a;l++)C[l+w]=arguments[l+2];return C.length=_-r+a,n}})},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){return 1},1)}))}},cca62:function(t,e,a){"use strict";a("7b4a")},cf2a:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("Navi",{attrs:{title:"我的订单",fixed:!0}}),a("div",[a("Bg",[a("van-tabs",{attrs:{color:"#0C34BA","line-height":"2",animated:"",swipeable:""},on:{change:t.toggleTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabsData,(function(e,r){return a("van-tab",{key:r,attrs:{title:e.title}},[a("div",{staticClass:"tab-content"},[t._l(t.orderData,(function(e,r){return a("div",{key:r,staticClass:"order-product"},[a("div",{staticClass:"order-info"},[t._v("订单信息")]),a("div",{staticClass:"order-no"},[a("div",{staticClass:"no"},[t._v("订单编号："+t._s(e.oid))]),a("div",{staticClass:"order-op"},[1===e.status?a("div",{on:{click:function(a){return t.confirm(e,r)}}},[t._v("确认收货")]):a("div",{staticClass:"op"},[a("div",{staticClass:"finished"},[t._v("已完成")]),a("div",{staticClass:"remove",on:{click:function(a){return t.removeOrder(e.oid,r)}}},[a("van-icon",{attrs:{name:"delete-o"}})],1)])])]),a("div",{staticClass:"order-pro"},t._l(e.product,(function(t,e){return a("div",{key:e,staticClass:"order-pro-item"},[a("OrderPro",{attrs:{pro:t}})],1)})),0),a("div",{staticClass:"order-total"},[a("div",{staticClass:"order-date"},[t._v(t._s(t._f("formatDate")(e.date,"yyyy-MM-dd hh:mm:ss")))]),a("div",{staticClass:"order-count"},[t._v("共计 "+t._s(e.count)+" 件商品")]),a("div",{staticClass:"order-money"},[t._v("订单金额：¥"+t._s(e.total))]),a("div",{staticClass:"left-circle circle"}),a("div",{staticClass:"right-circle circle"})])])})),a("van-empty",{directives:[{name:"show",rawName:"v-show",value:0===t.orderData.length,expression:"orderData.length === 0"}],attrs:{description:"没有订单数据！"}})],2)])})),1)],1)],1)],1)},n=[],i=a("1da1"),s=(a("96cf"),a("d3b7"),a("159b"),a("a434"),a("1a0d")),o=a("30c7"),c=a("20e8"),d={name:"Order",components:{Navi:s["a"],Bg:o["a"],OrderPro:c["a"]},data:function(){return{active:0,count:0,total:0,tabsData:[{title:"全部"},{title:"进行中"},{title:"已完成"}],orderData:[]}},created:function(){this.getOrderData()},methods:{getOrderData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get("findOrder",{status:t.active});case 2:a=e.sent,r=a.result,n=a.code,7e4===n&&(i=[],r.forEach((function(t){t.small_img=t.smallImg,-1===i.indexOf(t.oid)&&i.push(t.oid)})),s=[],i.forEach((function(t){var e={oid:t,product:[],count:0,total:0};r.forEach((function(a){t===a.oid&&(void 0===e.status&&(e.status=a.status,e.date=a.createdAt),e.product.push(a),e.count+=a.count,e.total+=a.count*a.price)})),s.push(e)})),console.log("orderData ==> ",s),t.orderData=s);case 5:case"end":return e.stop()}}),e)})))()},toggleTab:function(){console.log("this.active ==> ",this.active),this.getOrderData()},confirm:function(t,e){var a=this;this.$dialog.confirm({message:"是否确定收货？"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,a.post("receive",{oid:t.oid});case 2:n=r.sent,8e4===n.code&&(0===a.active?(t.status=2,huabng):1===t.status&&a.orderData.splice(e,1));case 4:case"end":return r.stop()}}),r)})))).catch((function(t){console.log("err ==> ",t)}))},removeOrder:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a.$dialog.confirm({message:"是否确定删除该订单？"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,a.post("removeOrder",{oid:t});case 2:n=r.sent,9e4===n.code&&a.orderData.splice(e,1);case 4:case"end":return r.stop()}}),r)})))).catch((function(t){console.log("err ==> ",t)}));case 1:case"end":return r.stop()}}),r)})))()}}},u=d,l=(a("cca62"),a("2877")),f=Object(l["a"])(u,r,n,!1,null,"7071a464",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-1c88931a.4f5a2682.js.map