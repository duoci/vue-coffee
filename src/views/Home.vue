<template>
  <div class="home-page">
    <div class="bannner-box">
      <div class="bannner-boxding">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="260px">
          <van-swipe-item v-for="(item, index) in bannerData" :key="index">
            <div @click="viewDetail(item.pid)">
              <img class="bannerImg" :src="item.bannerImg" :alt="item.name" />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="itemBox itemBox1">
        <div class="d">
          <div class="itemBox-head">
            <div class="CallText">Luck you~ 跟幸运打个招呼</div>
            <div class="logText" @click="goLogin">{{ name }}</div>
          </div>
        </div>
        <div class="bg">
          <div class="threeBox">
            <div class="item-three" v-for="(item, index) in three" :key="index" @click="tFClick(item)">
              <img class="threeImg" :src="item.threeImg" alt="" />
              <div class="threeText">{{ item.threeText }}</div>
              <div class="threejie">{{ item.threejie }}</div>
            </div>
          </div>
          <div class="fourBox">
            <div class="item-four" v-for="(item, index) in four" :key="index" @click="tFClick(item)">
              <img class="fourImg" :src="item.fourImg" alt="" />
              <div class="fourText">{{ item.fourText }}</div>
              <div class="fourjie">{{ item.fourjie }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="itemBox bannner-box2" @click="goMenu">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="260px">
          <van-swipe-item>
            <img class="hengImg" src="../assets/xinren.png" alt="" />
          </van-swipe-item>
          <van-swipe-item>
            <img class="hengImg" src="../assets/bing.png" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="productTab">
        <van-tabs v-model="active" swipeable @click="onClick" @change="hua" @rendered="initialize">
          <van-tab :title="item.typeDesc" v-for="(item, index) in productType" :key="index">
            <div class="product-box">
              <div class="product-item" v-for="(item, index) in productData" :key="index" @click="viewDetail(item.pid)">
                <homeProduct :pro="item" />
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import homeProduct from '../components/homeProduct.vue';
  export default {
    name: 'Home',
    data() {
      return {
        bannerData: [],
        left: 0,
        x0: 0,
        active: 0,
        loginState: true,
        nickName: '',
        name: '登录/注册',

        productType: [],
        productData: [],
        three: [
          {
            threeImg: require('../assets/daodianqu.png'),
            threeText: '到店送',
            threejie: '提前下单自取',
            go: 'Menu',
          },
          {
            threeImg: require('../assets/kuaison.png'),
            threeText: '幸运送',
            threejie: '无接触及时送',
            go: 'Menu',
          },
          {
            threeImg: require('../assets/maichaoping.png'),
            threeText: '买潮品',
            threejie: '瑞幸颜值周边',
            go: '',
          },
        ],
        four: [
          {
            fourImg: require('../assets/34.png'),
            fourText: '充3赠4',
            fourjie: '咖啡钱包',
            go: 'Coffeewallet',
          },
          {
            fourImg: require('../assets/lipingka.png'),
            fourText: '礼品卡',
            fourjie: '传情达意',
            go: 'Giftcard',
          },
          {
            fourImg: require('../assets/juan.png'),
            fourText: '优惠联盟',
            fourjie: '超级权益',
            go: 'Discounts',
          },
          {
            fourImg: require('../assets/liwu.png'),
            fourText: '福利中心',
            fourjie: '天天得福利',
            go: '',
          },
        ],
      };
    },
    components: {
      homeProduct,
    },
    async created() {
      this.getBannerData();
      this.getProductType();
      this.initialize();
      this.login();
    },
    methods: {
      tFClick(item) {
        const { loginState } = this;
        if (!loginState) return this.$router.push({ name: 'Login' });
        if (item.go !== '') return this.$router.push({ name: item.go });
        this.$toast('抱歉!该功能正在维护中');
      },
      goLogin() {
        const { loginState } = this;
        this.$router.push({ name: loginState ? 'My' : 'Login' });
      },
      goMenu() {
        const { loginState } = this;
        this.$router.push({ name: loginState ? 'Menu' : 'Login' });
      },
      async login() {
        const res = await this.get('findMy', {}, () => {
          this.loginState = false;
        });
        const { result, code } = res;
        if (code !== 700) {
          this.name = res.result[0].nickName;
          this.$toast(`${result[0].nickName}   欢迎回来`);
        }
      },
      async initialize() {
        const res = await this.get('typeProducts', {
          key: 'type',
          value: 'latte',
        });
        const { result, code } = res;
        if (code === 500) this.productData = result;
      },
      hua(name, title) {
        this.onClick(name, title);
      },
      async onClick(index, title) {
        const res = await this.get('typeProducts', {
          key: 'type',
          value: this.productType[index].type,
        });
        const { result, code } = res;
        if (code === 500) this.productData = result;
      },
      async getBannerData() {
        const res = await this.get('banner', {});
        const { result, code } = res;
        if (code === 300) this.bannerData = result;
      },
      async getProductType() {
        const res = await this.get('type', {});
        const { result, code } = res;
        if (code === 400) this.productType = result;
      },

      viewDetail(pid) {
        this.$router.push({ name: 'Detail', params: { pid } });
      },
    },
  };
</script>

<style lang="less" scoped>
  .home-page {
    background: #ccc;

    .bannner-box {
      // height: 1000px;
      overflow-y: auto;
      .bannner-boxding {
        position: relative;
        .saoBox {
          width: 30px;
          height: 30px;
          background: rgba(197, 197, 197, 0.2);
          border-radius: 50%;
          position: fixed;
          top: 15px;
          right: 15px;
          z-index: 99999;
          .saoImg {
            width: 100%;
            display: block;
          }
        }
      }

      .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        text-align: center;
        z-index: 1;
        .bannerImg {
          width: 100%;
          display: block;
        }
      }
      .van-swipe__indicators {
        bottom: 1.32rem;
      }
      .itemBox {
        width: 335px;
        margin: 0 auto;
        position: relative;
        .d {
          position: absolute;
          top: -40px;
          z-index: 99;
        }
        .itemBox-head {
          display: flex;
          width: 335px;
          justify-content: space-between;
          height: 40px;
          line-height: 40px;

          color: #a99767;
          background-color: #232730;
          border-radius: 10px 10px 0 0;
          .CallText {
            margin-left: 10px;
          }
          .logText {
            // width: 60px;
            height: 30px;
            border-radius: 10px;
            color: #000;
            text-align: center;
            line-height: 30px;
            background-color: #eed39d;
            margin-right: 5px;
            margin-top: 5px;
            padding: 0 10px;
          }
        }
        .bg {
          background: #fff;
          padding: 10px;
          .threeBox {
            display: flex;
            .item-three {
              flex: 33%;
              text-align: center;
              .threeImg {
                padding: 5px;
                width: 50px;
              }
              .threeText {
                font-weight: 700;
                font-size: 16px;
              }
            }
          }
          .fourBox {
            display: flex;
            margin: 10px 0;
            .item-four {
              flex: 0.25%;
              text-align: center;
              .fourImg {
                // padding: 5px;
                width: 40px;
              }
              .fourText {
                font-weight: 550;
                font-size: 14px;
              }
            }
          }
        }
      }
      .bannner-box2 {
        width: 335px;
        margin: 10px auto;
        margin-top: 10px;
        .my-swipe .van-swipe-item {
          color: #fff;
          font-size: 20px;
          text-align: center;
          z-index: 1;
          .hengImg {
            width: 100%;
            display: block;
          }
        }
      }

      .productTab {
        padding-bottom: 100px;
        .product-box {
          display: flex;
          flex-wrap: wrap;
          padding: 10px;
          .product-item {
            width: calc(50% - 5px);
            margin-right: 10px;
            margin-bottom: 10px;
            &:nth-child(2n) {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>
