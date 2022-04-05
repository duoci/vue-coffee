<template>
  <div class="discounts">
    <Navi title="优惠联盟" :fixed="true" />
    <div class="bg"></div>
    <div class="sw">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in youhui" :key="index">
          <img class="auto-img" :src="item.youhuiimg" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-tabs v-model="active" @click="disclick" @change="disclick">
        <van-tab :title="item.title" v-for="(item, index) in list" :key="index">
          <div class="item" v-for="(i, x) in disa" :key="x">
            <div class="itemText">{{ i.title }}</div>
            <div class="itemImg">
              <img class="auto-img" :src="i.youhuiimg" alt="" />
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import Navi from '../components/Navi.vue';

  export default {
    name: 'Discounts',
    components: {
      Navi,
    },
    data() {
      return {
        active: 0,
        disa: [],
        list: [
          {
            title: '金融',
          },
          {
            title: '航空',
          },
          {
            title: '生活',
          },
        ],
        youhui: [
          {
            youhuiimg: require('../assets/y01.jpg'),
          },
          {
            youhuiimg: require('../assets/y02.jpg'),
          },
          {
            youhuiimg: require('../assets/y03.jpg'),
          },
          {
            youhuiimg: require('../assets/y04.jpg'),
          },
          {
            youhuiimg: require('../assets/y05.jpg'),
          },
        ],
        disData: [
          [
            {
              title: '民生银行',
              youhuiimg: require('../assets/y06.jpg'),
            },
            {
              title: '华夏银行',
              youhuiimg: require('../assets/y07.jpg'),
            },
            {
              title: '中国银行',
              youhuiimg: require('../assets/y08.jpg'),
            },
          ],
          [
            {
              title: '厦门航空',
              youhuiimg: require('../assets/y09.jpg'),
            },
          ],
          [
            {
              title: '中国会员联盟',
              youhuiimg: require('../assets/y07.jpg'),
            },
          ],
        ],
      };
    },
    created() {
      this.disd();
    },
    methods: {
      disd() {
        const { disData } = this;
        const [disa] = disData;
        this.disa = disa;
      },
      disclick(index) {
        // console.log(index,name)
        this.disa = this.disData[index];
      },
    },
  };
</script>

<style lang="less" scoped>
  .discounts {
    .bg {
      width: 100%;
      height: 150px;
      background-color: rgb(23, 23, 141);
    }
    .sw {
      padding: 10px;
      border-radius: 15px;
      margin-top: -80px;
    }
    .item {
      padding: 10px;
      margin-bottom: 10px;
      .itemText {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }
</style>
