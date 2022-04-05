<template>
  <div class="searchBox">
    <Navi title="搜索中心" :fixed="true" />
    <div class="search">
      <van-search v-model="value" show-action label="" placeholder="请输入搜索关键词" @search="onSearch(value)">
        <template #action>
          <div @click="onSearch(value)">搜索</div>
        </template>
      </van-search>
    </div>

    <div class="Search-box" v-show="!isEait">
      <div class="Search-list">
        <div class="Search-item" v-for="(item, index) in productData" :key="index" @click="viewDetail(item.pid)">
          <div class="img-box">
            <img class="auto-img" :src="item.smallImg" alt="" />
          </div>
          <div class="product-name one-text">{{ item.name }}</div>
          <div class="product-enname one-text">{{ item.enname }}</div>
          <div class="pro-info">
            <div class="product-price">&yen;{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isEait">
      <van-empty class="custom-image" image="https://img01.yzcdn.cn/vant/custom-empty-image.png" description="描述文字" />
    </div>
  </div>
</template>

<script>
  import Navi from '../components/Navi.vue';
  export default {
    name: 'Search',
    data() {
      return {
        value: '',
        productData: [],
        isEait: false,
      };
    },
    components: {
      Navi,
    },
    created() {
      this.value = this.$route.params.value;
      this.onSearch(this.value);
    },
    methods: {
      viewDetail(pid) {
        // console.log("pid ==> ", pid);
        this.$router.push({ name: 'Detail', params: { pid } });
      },
      async onSearch(value) {
        const res = await this.get('search', { name: value });
        // console.log(res)
        const { result, code } = res;
        if (code === 'Q001') {
          this.$toast(res.msg);
          this.productData = result;
          if (this.productData.length === 0) {
            this.isEait = true;
          } else {
            this.isEait = false;
          }
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  .searchBox {
    .search {
      margin-top: 46px;
    }
    .Search-box {
      .Search-list {
        display: flex;
        flex-wrap: wrap;
        height: 547px;
        padding: 10px;
        // height: 567px;
        overflow-y: auto;
        .Search-item {
          padding: 10px;
          //    flex: 50%;
          width: 155px;
          // height: calc(100%-20px);
          .product-name {
            margin-top: 10px;
            font-size: 16px;
          }
          .img-box {
            width: 160px;
          }
          .product-enname {
            color: #999;
            font-size: 12px;
          }

          .pro-info {
            margin-top: 5px;
            display: flex;
            align-items: center;
          }

          .product-price {
            color: #e4393c;
            font-weight: bold;
            font-size: 14px;
            margin-right: auto;
          }
          .pro-remove {
            width: 20px;
            height: 20px;
            font-size: 20px;
            color: #999;
          }
        }
      }
    }
  }
</style>
