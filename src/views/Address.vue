<template>
  <div class="address">
    <Navi :fixed="true" :title="aid ? '编辑地址' : '新增地址'" />
    <div>
      <van-address-edit
        :area-list="areaList"
        :show-postal="showPostal"
        :show-delete="!!aid"
        show-set-default
        :area-columns-placeholder="['选择省', '选择市', '选择区/县']"
        :address-info="addressInfo"
        @save="save"
        @delete="deleteAddress"
      />
    </div>
  </div>
</template>

<script>
  import Navi from '../components/Navi.vue';
  import { areaList } from '@vant/area-data';
  export default {
    name: 'Address',
    components: {
      Navi,
    },
    data() {
      return {
        areaList,
        showPostal: true,

        // 地址的aid, 编辑地址需要使用
        aid: '',

        // 地址数据
        addressInfo: {},
      };
    },

    created() {
      // 获取查询参数aid

      this.aid = this.$route.query.aid;
      if (this.aid) {
        this.getAddressByAid();
      }
    },

    methods: {
      // 新增地址
      async addAddress(content) {
        const addressInfo = { ...content };
        addressInfo.isDefault = Number(addressInfo.isDefault);
        delete addressInfo.country;
        const res = await this.post('addAddress', addressInfo);
        if (res.code === 9000) {
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        }
      },

      // 编辑地址
      async editAddress(content) {
        const addressInfo = {
          ...content,
          aid: this.aid,
        };

        delete addressInfo.country;

        // 检测用户是否修改的地址数据
        let isModify = false;
        for (const key in addressInfo) {
          if (addressInfo[key] !== this.addressInfo[key]) {
            isModify = true;
          }
        }

        if (!isModify) {
          this.$toast('尚未修改地址');
          return;
        }

        addressInfo.isDefault = Number(addressInfo.isDefault);
        const res = await this.post('editAddress', addressInfo);
        if (res.code === 30000) {
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        }
      },

      // 保存地址
      save(content) {
        if (this.aid) {
          // 编辑地址
          this.editAddress(content);
        } else {
          // 新增地址
          this.addAddress(content);
        }
      },

      // 根据aid获取地址数据
      async getAddressByAid() {
        const res = await this.get('findAddressByAid', { aid: this.aid });
        const { result } = res;
        const [data] = result;
        if (res.code === 40000) {
          data.isDefault = Boolean(data.isDefault);
          this.addressInfo = data;
        }
      },

      // 删除地址
      async deleteAddress() {
        const res = await this.post('deleteAddress', { aid: this.aid });
        if (res.code === 10000) {
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  .address {
    padding-top: 46px;

    /deep/ .van-switch--on {
      background-color: #0c34ba;
    }

    /deep/ .van-button--danger {
      background-color: #0c34ba;
      border-color: #0c34ba;
    }
    /deep/ .van-address-edit__buttons .van-button {
      background-color: #0c34ba;
      color: #fff;
    }
  }
</style>
