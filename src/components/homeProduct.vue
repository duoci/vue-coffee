<template>
  <div class="homeProduct">
    <div class="img-box">
      <img class="auto-img" :src="pro.smallImg" alt="" />
    </div>
    <div class="homeProduct-name one-text">{{ pro.name }}</div>
    <div class="homeProduct-enname one-text">{{ pro.enname }}</div>
    <div class="homeProduct-price">&yen;{{ pro.price }}</div>
  </div>
</template>

<script>
  export default {
    name: 'homeProduct',
    props: {
      pro: {
        type: Object,
        default() {
          return {};
        },
      },
    },
  };
</script>

<style lang="less" scoped>
  .homeProduct {
    padding: 10px;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    .img-box {
      width: 100px;
      margin: 0 auto;
    }
    .homeProduct-name {
      margin-top: 10px;
      font-size: 14px;
    }

    .homeProduct-enname {
      color: #999;
      font-size: 12px;
    }

    .homeProduct-price {
      color: #e4393c;
      font-weight: bold;
      font-size: 14px;
      margin-top: 5px;
    }
  }
</style>
