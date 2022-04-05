<template>
  <div class="menu">
    <van-search v-model="value" show-action label="" placeholder="请输入搜索关键词" @search="searchProduct">
      <template #action>
        <div @click="searchProduct(value)">搜索</div>
      </template>
    </van-search>
    <div class="menu-box">
      <div class="menu-left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item :title="item.typeDesc" v-for="(item, index) in menuType" :key="index" @click="getProductByType(item.type)" />
        </van-sidebar>
      </div>
      <div class="menu-right">
        <!-- 商品 -->
        <div class="product-box">
          <div class="product-item" v-for="(item, index) in productData" :key="index" @click="viewDetail(item.pid)">
            <Product :pro="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Product from '../components/Product.vue';
  export default {
    name: 'Menu',
    data() {
      return {
        // 激活的菜单类型下标
        activeKey: 0,
        value: '',
        // 菜单类型数据
        menuType: [],

        // 商品数据
        productData: [],
      };
    },
    components: {
      Product,
    },

    created() {
      this.getProductType();
    },

    methods: {
      searchProduct(value) {
        console.log(value);
        this.$router.push({ name: 'Search', params: { value } });
      },
      // 获取商品类型
      async getProductType() {
        const res = await this.get('type', {});
        const { result, code } = res;
        if (code === 400) {
          this.menuType = result;
          const { type } = result[this.activeKey];
          this.getProductByType(type);
        }
      },

      // 根据商品类型获取商品数据
      async getProductByType(type) {
        // console.log("type ==> ", type);
        const res = await this.get('typeProducts', { key: 'type', value: type });
        const { result, code } = res;
        if (code === 500) this.productData = result;
      },
      // 查看商品详情
      viewDetail(pid) {
        this.$router.push({ name: 'Detail', params: { pid } });
      },
    },
  };
</script>

<style lang="less" scoped>
  .menu {
    position: fixed;
    top: 0;
    bottom: 50px;
    right: 0;
    left: 0;
    .product-box {
      display: flex;
      flex-wrap: wrap;
      .product-item {
        // width: calc(50% - 5px);
        // margin-right: 10px;
        margin-bottom: 10px;
        // &:nth-child(2n){
        //   margin-right: 0;
        // }
      }
    }
    .menu-box {
      display: flex;
      height: calc(100% - 50px);
      .menu-left {
        width: 100px;
        height: 100%;
        background-color: #f7f8fa;
        overflow-y: auto;
        /deep/ .van-sidebar {
          width: 100%;
        }
        /deep/ .van-sidebar-item--select::before {
          width: 2px;
          height: 60%;
          background-color: #0c34ba;
        }
      }
      .menu-right {
        width: calc(100% - 110px);
        height: 100%;
        overflow-y: auto;
        padding-left: 10px;
        padding-right: 10px;
        background-color: #fff;
      }
    }
  }
</style>
