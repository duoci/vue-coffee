<template>
  <div class="coffee-wallet">
    <Navi title="咖啡钱包" :fixed="true" />
    <div class="wallet-conter">
      <div class="wallet-item" v-for="(item, index) in quanData" :key="index">
        <div class="item-left">
          <div class="price"><span class="price-i">￥</span>{{ item.price }}</div>
        </div>
        <div class="item-right">
          <div class="right-text">全国通用券<van-icon name="info-o" @click="guize" /></div>
          <div>
            <van-stepper v-model="item.count" theme="round" button-size="22" disable-input min="0" @change="countChange(item)" />
          </div>
        </div>
      </div>
      <div class="give" v-if="conpouData.length">
        <div class="wallet-item" v-for="(v, i) in conpouData" :key="i">
          <div class="item-left" style="background-color: #0122a8; color: #fff">
            <div class="price"><span class="price-i">￥</span>{{ v.price }}</div>
          </div>
          <div class="item-right">
            <div class="right-text">全国通用券<van-icon name="info-o" /></div>
            <div>x{{ v.count }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="wellet-bo">
      <van-submit-bar :price="total" button-text="去结算" @submit="pay">
        <template #tip>
          {{ text }}
        </template>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
  import Navi from '../components/Navi.vue';
  export default {
    name: 'Coffeewallet',
    components: {
      Navi,
    },
    data() {
      return {
        zong: 0,
        value: '',
        price: 0,
        isEait: false,
        isprice: '',
        isnum: 0,
        quanData: [
          {
            price: 35,
            count: 0,
          },
          {
            price: 32,
            count: 0,
          },
          {
            price: 29,
            count: 0,
          },
        ],
        conpou: [],
        conpouData: [],
      };
    },
    computed: {
      // 计算订单总价
      total() {
        let total = 0;
        this.quanData.forEach(item => {
          total += item.price * item.count;
          this.price = total;
        });

        return total * 100;
      },
      text() {
        const { zong } = this;
        if (zong < 4) {
          const daoZong = 4 - zong;
          return `在充${daoZong}张享充4赠3`;
        }

        if (zong >= 4 && 10 >= zong) {
          const daoZong = 10 - zong;
          return `${'已享充4赠3' + '  在充 '}${daoZong} 张享充10赠8,更划算`;
        }
        if (zong >= 10 && 14 >= zong) {
          const daoZong = 14 - zong;
          return `${'已享充10赠8' + '  在充 '}${daoZong} 张享充14赠11,更划算`;
        }
        return '购买以上商品券享充4送3,不同商品券可组合购买';
      },
    },
    methods: {
      guize() {
        this.$dialog
          .alert({
            title: '使用规则',
            message:
              '1、本饮品券为咖啡钱包优惠活动中提前充购所得。\n2、饮品券分为三档，对应三档饮品面价，结算时，饮品券可抵扣相应面价的商品费用，但不包含风味糖浆、奶油及配送费,不设找零,超额需补差价，一次可使用多张饮品券。\n3、咖啡钱包饮品券有效期三年。(超出有效期无效)\n4、饮品券不与其他优惠卷、优惠活动共享(特别声明，可同享的除外)\n5、为丰富用户权益，充购所得的饮品券课同事在瑞幸中国旗下瑞幸咖啡和小鹿茶中使用',
          })
          .then(() => {
            // on close
          });
      },
      pay() {
        if (this.price > 0) {
          this.$toast('结算成功');
          setTimeout(() => {
            this.$router.push({ name: 'Home' });
          }, 1000);
        } else {
          this.$toast('您没有选择券');
        }
      },
      countChange(item) {
        let zong = 0;
        this.quanData.forEach(v => {
          zong += v.count;
          console.log(this.quanData, v.count, 'count');
          this.zong = zong;
        });
        const conpouIndex = this.quanData.findIndex(v => {
          return v.price === item.price;
        });
        const obj = JSON.parse(JSON.stringify(this.quanData[conpouIndex]));
        obj.count = 1;
        this.conpou.push(obj);
        const conpou = JSON.parse(JSON.stringify(this.conpou));
        console.log(this.zong, zong);
        if (this.zong === 4 || this.zong === 10) {
          this.conpouData = [];
          const forNum = this.zong < 10 ? 3 : 8;
          for (let i = 0; i < forNum; i += 1) {
            if (i === forNum) return;
            const num = Math.abs(Math.round(Math.random() * conpou.length - 1));
            if (this.conpouData.indexOf(conpou[num]) > -1) {
              const index = this.conpouData.findIndex(v => {
                return v === conpou[num];
              });
              this.conpouData[index].count += 1;
            } else this.conpouData.push(conpou[num]);
          }
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  .coffee-wallet {
    .wallet-conter {
      margin-top: 46px;
      padding: 10px 10px 80px 10px;
      min-height: calc(100vh - 46px);
      box-sizing: border-box;
      .wallet-item {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
        /deep/.van-icon {
          margin-left: 5px;
        }
        .item-left {
          width: 30%;
          height: 100%;
          line-height: 80px;
          text-align: center;
          font-size: 30px;
          background-color: #dfbfac;
          position: relative;
          font-weight: bold;
          color: #815d2f;
          .price-i {
            font-size: 15px;
            position: absolute;
            top: -7px;
            left: 24px;
          }
        }
        .item-right {
          flex: 1;
          width: calc(70% -20px);
          padding: 0 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .right-text {
            line-height: 80px;
            font-size: 18px;
          }
        }
      }
    }
    .wellet-bo {
      /deep/.van-submit-bar__text {
        text-align: left;
      }
    }
  }
</style>
