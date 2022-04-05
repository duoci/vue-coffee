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
            <van-stepper v-model="item.count" theme="round" button-size="22" disable-input min="0" @change="countChange(item.price, item.count)" />
          </div>
        </div>
      </div>
      <div class="give" v-if="isEait">
        <div class="wallet-item">
          <div class="item-left" style="background-color: #0122a8; color: #fff">
            <div class="price"><span class="price-i">￥</span>{{ isprice }}</div>
          </div>
          <div class="item-right">
            <div class="right-text">全国通用券<van-icon name="info-o" /></div>
            <div>x{{ isnum }}</div>
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
        value: '',
        price: 0,
        text: '购买以上商品券享充4送3,不同商品券可组合购买',
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
      countChange(item, count) {
        let zong = 0;
        const arr = [];
        let j = 0;
        this.quanData.forEach(v => {
          zong += v.count;
          arr.push(v.count);
        });
        const max = Math.max.apply(null, arr);

        console.log(max);
        if (zong <= 4) {
          const daoZong = 4 - zong;
          this.text = `在充${daoZong}张享充4赠3`;
        }

        if (zong >= 4 && 10 >= zong) {
          const daoZong = 10 - zong;
          this.text = `${'已享充4赠3' + '  在充 '}${daoZong} 张享充10赠8,更划算`;
        }
        if (zong >= 10 && 14 >= zong) {
          const daoZong = 14 - zong;
          this.text = `${'已享充10赠8' + '  在充 '}${daoZong} 张享充14赠11,更划算`;
        }
        console.log(arr);
        for (let i = 0; i < arr.length; i += 1) {
          console.log(i);
          if (arr[i] === max) {
            j = i;
            if (zong === 4) {
              console.log('进来了');
              this.isEait = true;
              this.isnum = 3;
              this.isprice = this.quanData[j].price;
            }

            return;
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
      width: calc(100%-20px);
      padding: 10px;
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
