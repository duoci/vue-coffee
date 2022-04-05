<template>
  <div class="Giftcard">
    <Navi title="把幸运送给TA" :fixed="true" />
    <div class="box">
      <div class="bg">
        <img class="auto-img" src="../assets/bg.jpg" alt="" />
      </div>
      <div class="box-conter">
        <div class="box-three">
          <div class="threeImg">
            <img class="auto-img" src="../assets/01.jpg" alt="" />
          </div>
          <div class="threeImg">
            <img class="auto-img" src="../assets/02.jpg" alt="" />
          </div>
          <div class="threeImg">
            <img class="auto-img" src="../assets/03.jpg" alt="" />
          </div>
        </div>
        <div class="hengbox">
          <img class="auto-img" src="../assets/heng.jpg" alt="" />
        </div>
        <div class="text">
          <div>热门礼品卡</div>
        </div>
        <div class="hotbox">
          <div class="item" v-for="(item, index) in hotData" :key="index">
            <img class="auto-img" :src="item.hotimg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navi from '../components/Navi.vue';

  export default {
    name: 'Giftcard',
    data() {
      return {
        hotData: [
          {
            hotimg: require('../assets/001.jpg'),
          },
          {
            hotimg: require('../assets/002.jpg'),
          },
          {
            hotimg: require('../assets/003.jpg'),
          },
          {
            hotimg: require('../assets/004.jpg'),
          },
          {
            hotimg: require('../assets/005.jpg'),
          },
          {
            hotimg: require('../assets/006.jpg'),
          },
          {
            hotimg: require('../assets/007.jpg'),
          },
          {
            hotimg: require('../assets/007.jpg'),
          },
          {
            hotimg: require('../assets/009.jpg'),
          },
          {
            hotimg: require('../assets/010.jpg'),
          },
          {
            hotimg: require('../assets/011.jpg'),
          },
          {
            hotimg: require('../assets/012.jpg'),
          },
          {
            hotimg: require('../assets/013.jpg'),
          },
          {
            hotimg: require('../assets/014.jpg'),
          },
          {
            hotimg: require('../assets/015.jpg'),
          },
          {
            hotimg: require('../assets/016.jpg'),
          },
          {
            hotimg: require('../assets/017.jpg'),
          },
          {
            hotimg: require('../assets/018.jpg'),
          },
          {
            hotimg: require('../assets/019.jpg'),
          },
          {
            hotimg: require('../assets/020.jpg'),
          },
          {
            hotimg: require('../assets/021.jpg'),
          },
        ],
      };
    },
    components: {
      Navi,
    },
  };
</script>

<style lang="less" scoped>
  .Giftcard {
    .box {
      // margin-top: 46px;
      .bg {
        width: 100%;
      }
      .box-conter {
        padding: 10px;
        background-color: rgb(204, 204, 204);
        border-radius: 10px;
        position: absolute;
        top: 4.33333rem;
        .box-three {
          display: flex;
          justify-content: space-between;

          .threeImg {
            width: 80px;
            border-radius: 15px;
            overflow: hidden;
          }
        }
        .hengbox {
          margin-top: 20px;
          border-radius: 10px;
          overflow: hidden;
        }
        .text {
          margin-top: 10px;
          height: 40px;
          line-height: 40px;
          font-weight: bold;
        }
        .hotbox {
          display: flex;
          flex-wrap: wrap;
          .item {
            width: 157px;
            height: 120px;
            padding: 10px;
            border-radius: 1.23333rem;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
