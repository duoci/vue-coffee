import Vue from 'vue';
import App from './App.vue';
import router from './router';

import axios, { get, post } from '@/common/request';
import { formatDate } from '@/common/utils';
import VueAxios from 'vue-axios';

// export default request
Vue.prototype.get = get;
Vue.prototype.post = post;
// 导入flexible.js设置rem的基准值
import 'lib-flexible/flexible';

import {
  Tabbar,
  TabbarItem,
  Search,
  Sidebar,
  SidebarItem,
  Toast,
  Tag,
  NavBar,
  Stepper,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Form,
  Field,
  Button,
  Popup,
  Checkbox,
  SwipeCell,
  SubmitBar,
  Empty,
  Icon,
  AddressList,
  AddressEdit,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Dialog,
  Cell,
  Uploader,
  ActionSheet,
  Notify,
} from 'vant';

// 注册组件
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Search)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Toast)
  .use(Tag)
  .use(NavBar)
  .use(Stepper)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Form)
  .use(Field)
  .use(Button)
  .use(Popup)
  .use(Checkbox)
  .use(SwipeCell)
  .use(SubmitBar)
  .use(Empty)
  .use(Icon)
  .use(AddressList)
  .use(AddressEdit)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(Dialog)
  .use(Cell)
  .use(Uploader)
  .use(ActionSheet)
  .use(Notify);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
// 定义格式化时间过滤器
Vue.filter('formatDate', formatDate);
new Vue({
  router,
  render: h => {
    return h(App);
  },
}).$mount('#app');
