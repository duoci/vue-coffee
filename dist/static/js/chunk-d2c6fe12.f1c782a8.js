(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2c6fe12"],{"04d2":function(e,t,a){"use strict";a("f818")},1735:function(e,t,a){"use strict";a("c0c6")},"1a0d":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navi"},[a("van-nav-bar",{attrs:{title:e.title,"left-text":"返回","right-text":e.rightText,fixed:e.fixed,"left-arrow":""},on:{"click-left":e.back,"click-right":e.clickRight}})],1)},n=[],c={name:"Navi",data:function(){return{}},props:{title:{type:String,default:""},rightText:{type:String,default:""},fixed:{type:Boolean,default:!1}},methods:{back:function(){this.$router.go(-1)},clickRight:function(){this.$emit("click-right")}}},i=c,r=(a("04d2"),a("2877")),o=Object(r["a"])(i,s,n,!1,null,"17aaf7fc",null);t["a"]=o.exports},"77be":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"account"},[a("Navi",{attrs:{title:"个人资料",fixed:!0}}),a("div",{staticClass:"content"},[a("div",{staticClass:"personalDataBox"},[a("div",{staticClass:"head-portrait flex"},[a("div",{staticClass:"leftText"},[e._v("头像")]),a("div",{staticClass:"my-bg",style:{backgroundImage:"url("+e.userData.userImg+")"}},[a("div",{staticClass:"head-portrait-img"},[a("van-uploader",{attrs:{"after-read":e.upload}})],1)])]),a("div",{staticClass:"username-box flex"},[a("div",{staticClass:"leftText"},[e._v("昵称")]),a("div",{staticClass:"rightText"},[a("van-cell",{attrs:{"is-link":""},on:{click:e.showPopup}},[e._v(e._s(e.userData.nickName))]),a("van-popup",{attrs:{position:"center",closeable:""},model:{value:e.nickNameshow,callback:function(t){e.nickNameshow=t},expression:"nickNameshow"}},[a("div",{staticClass:"changenick-box"},[a("div",{staticClass:"text-header"},[a("h2",[e._v("修改用户名")])]),a("div",[a("van-field",{attrs:{label:"",placeholder:"请输入用户名",name:"昵称","right-icon":"cross",autocomplete:"off"},on:{"click-right-icon":e.empty},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}}),a("div",{staticClass:"changenick-btn"},[a("van-button",{attrs:{round:"",block:"",color:"#0C34BA"},on:{click:function(t){return e.changenick(e.nickname)}}},[e._v("提交")])],1)],1)])])],1)]),a("div",{staticClass:"sexBox flex"},[a("div",{staticClass:"leftText"},[e._v("性别")]),a("div",{staticClass:"rightText"},[a("van-cell",{attrs:{"is-link":"",title:e.sex},on:{click:function(t){e.show=!0}}}),a("van-action-sheet",{attrs:{actions:e.actions},on:{select:e.onSelect},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)]),a("div",{staticClass:"phoneBox flex"},[a("div",{staticClass:"leftText"},[e._v("手机号")]),a("div",{staticClass:"rightText"},[e._v("+86 "+e._s(e.userData.phone))])]),a("div",{staticClass:"brief flex"},[a("div",{staticClass:"leftText"},[e._v("简介")]),a("div",{staticClass:"rightText"},[a("van-cell",{attrs:{"is-link":""},on:{click:e.descShowPopup}},[e._v(" "+e._s(e.userData.desc))]),a("van-popup",{attrs:{position:"center",closeable:""},model:{value:e.descShow,callback:function(t){e.descShow=t},expression:"descShow"}},[a("div",{staticClass:"amendDesc-box"},[a("div",{staticClass:"text-header"},[a("h2",[e._v("修改简介")])]),a("div",[a("van-field",{attrs:{rows:"2",autosize:"",label:"",type:"textarea",maxlength:"20",placeholder:"请输入简介","show-word-limit":""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),a("div",{staticClass:"amendDesc-btn"},[a("van-button",{attrs:{round:"",block:"",color:"#0C34BA"},on:{click:function(t){return e.amendDesc(e.message)}}},[e._v("提交")])],1)],1)])])],1)])])])],1)},n=[],c=a("3835"),i=a("1da1"),r=(a("96cf"),a("b0c0"),a("ac1f"),a("1276"),a("5319"),a("1a0d")),o={name:"Account",data:function(){return{userData:[],nickNameshow:!1,descShow:!1,nickname:"",message:"",show:!1,sex:"男",actions:[{name:"男"},{name:"女"}]}},components:{Navi:r["a"]},created:function(){this.getUserDate(),localStorage.getItem("sex")&&(this.sex=localStorage.getItem("sex"))},methods:{empty:function(){this.nickname=""},onSelect:function(e){this.show=!1,this.sex=e.name,localStorage.setItem("sex",e.name)},amendDesc:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.post("updateDesc",{desc:e});case 2:if(s=a.sent,s.result,s.code,t.$toast(s.msg),"D001"!==s.code){a.next=10;break}if(s.desc!==t.userData.desc){a.next=9;break}return t.$toast("新旧简介相同"),a.abrupt("return");case 9:t.message=s.desc,t.userData.desc=s.desc,t.descShow=!1;case 10:case"end":return a.stop()}}),a)})))()},changenick:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(""!==e){a.next=2;break}return a.abrupt("return",t.$toast("不能为空"));case 2:return a.next=4,t.post("updateNickName",{nickName:e});case 4:if(s=a.sent,t.$toast(s.msg),"C001"!==s.code){a.next=11;break}if(s.nickName!==t.userData.nickName){a.next=10;break}return t.$toast("新旧昵称相同"),a.abrupt("return");case 10:t.nickname=s.nickName,t.userData.nickName=s.nickName,t.nickNameshow=!1;case 11:case"end":return a.stop()}}),a)})))()},showPopup:function(){this.nickNameshow=!0},descShowPopup:function(){this.descShow=!0},getUserDate:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,s,n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.get("findAccountInfo",{});case 2:a=t.sent,s=a.result,n=a.code,i=Object(c["a"])(s,1),r=i[0],e.$toast(a.msg),"B001"===n&&(e.userData=r,""===e.userData.desc&&(e.userData.desc="这家伙很懒，什么也没有留下"),e.nickname=e.userData.nickName);case 7:case"end":return t.stop()}}),t)})))()},upload:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,n,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.file.type.split(/\//)[1],n=e.content.replace(/data:image\/[A-Za-z]+;base64,/,""),a.next=4,t.post("updateAvatar",{imgType:s,serverBase64Img:n});case 4:c=a.sent,t.$toast(c.msg),"H001"===c.code&&1===c.result[0]&&(t.userData.userImg=c.userImg);case 7:case"end":return a.stop()}}),a)})))()}}},l=o,u=(a("1735"),a("2877")),d=Object(u["a"])(l,s,n,!1,null,"3138c0d6",null);t["default"]=d.exports},c0c6:function(e,t,a){},f818:function(e,t,a){}}]);
//# sourceMappingURL=chunk-d2c6fe12.f1c782a8.js.map