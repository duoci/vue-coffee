<template>
  <div class="like">
    <Navi title="我的收藏" :fixed="true" />
    <Bg>
      <div class="product-box">
        <div class="pro-item" v-for="(item, index) in productData" :key="index" @click="viewProductDetail(item.pid)">
          <Product :pro="item" :is-remove="true" @remove="removeProduct(item.pid, index)" />
        </div>
      </div>
    </Bg>
  </div>
</template>

<script>
  import Navi from '../components/Navi.vue';
  import Bg from '../components/Bg.vue';
  import Product from '../components/Product.vue';
  export default {
    name: 'Like',
    components: {
      Navi,
      Bg,
      Product,
    },

    data() {
      return {
        productData: [],
      };
    },

    created() {
      this.getLikeData();
    },

    methods: {
      // 获取用户所有收藏商品
      async getLikeData() {
        const res = await this.get('findAllLike', {});
        const { result, code } = res;
        if (code === 2000) this.productData = result;
      },

      // 查看商品详情
      viewProductDetail(pid) {
        this.$router.push({ name: 'Detail', params: { pid } });
      },

      // 删除商品
      async removeProduct(pid, index) {
        console.log('删除收藏商品');
        console.log(pid, index);
        const res = await this.post('notlike', { pid });
        if (res.code === 900 && res.result === 1) {
          this.$toast('删除成功');
          this.productData.splice(index, 1);
        } else {
          this.$toast('删除失败');
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  .like {
    padding-top: 46px;
    .product-box {
      display: flex;
      background-color: #fff;
      padding: 10px;
      flex-wrap: wrap;
    }
    .pro-item {
      width: 100%;
      margin-bottom: 10px;
      margin-right: 10px;
      position: relative;
      &:nth-child(2n) {
        margin-right: 0;
      }
      /deep/.productInfo {
        width: 250px;
      }
    }
  }
</style>
