<template>
  <div class="product">
    <div class="img-box">
      <img class="auto-img" :src="pro.smallImg" alt="" />
    </div>
    <div class="productInfo">
      <div class="product-name one-text">{{ pro.name }}</div>
      <div class="product-enname one-text">{{ pro.enname }}</div>
      <div class="product-tiao">
        <div class="product-price">&yen;{{ pro.price }}</div>
        <div class="pro-remove" v-if="isRemove" @click.stop="remove">
          <van-icon name="delete-o" />
        </div>
        <div class="product-add" v-if="!isRemove">+</div>
      </div>
    </div>

    <!-- <div class="badge-box" v-if="pro.isHot === 1">
      <van-tag mark color="#e4393c" >热卖</van-tag>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: {
      pro: {
        type: Object,
        default() {
          return {};
        },
      },
      isRemove: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      // 删除
      remove() {
        this.$emit('remove');
      },
    },
  };
</script>

<style lang="less" scoped>
  .product {
    display: flex;
    width: 100%;
    .img-box {
      width: 80px;
      border-radius: 50%;
      overflow: hidden;
    }
    .productInfo {
      width: 170px;
      padding: 0 8px;
      .product-tiao {
        display: flex;
        justify-content: space-between;
        line-height: 20px;

        .product-add {
          width: 15px;
          height: 15px;
          line-height: 15px;
          font-size: 15px;
          text-align: center;
          border-radius: 50%;
          background: #0c34ba;
          color: #fff;
          margin-top: 5px;
          margin-right: 10px;
        }
      }
      .badge-box {
        position: absolute;
        right: 0;
        top: 0;
      }
      .product-name {
        margin-top: 10px;
        font-size: 15px;
        font-weight: 600;
      }

      .product-enname {
        color: #999;
        font-size: 12px;
      }

      .product-price {
        color: #e4393c;
        font-weight: bold;
        font-size: 14px;
        margin-top: 5px;
      }
      .pro-remove {
        width: 20px;
        height: 20px;
        font-size: 20px;
        color: #999;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
</style>
