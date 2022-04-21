<template>
  <div class="Secure">
    <Navi title="安全中心" :fixed="true" />
    <div class="SecureBox">
      <Bg>
        <div class="Secure-list">
          <div class="Secure-item">
            <van-cell is-link @click="pswPopup">修改密码</van-cell>
            <van-popup v-model="pwsshow" position="bottom" :style="{ height: '40%' }" closeable>
              <div class="pwsBox">
                <div class="pwsBox-text">修改密码</div>
                <van-field
                  v-model="oldPassword"
                  :type="!isOldGaiPasssword ? 'password' : 'text'"
                  name="旧密码"
                  label="旧密码"
                  placeholder="请输入旧密码"
                  :right-icon="!isOldGaiPasssword ? 'closed-eye' : 'eye-o'"
                  autocomplete="off"
                  @click-right-icon="OldGaiPasssword"
                />
                <van-field
                  v-model="newPassword"
                  :type="!isOpenRegister ? 'password' : 'text'"
                  name="新密码"
                  label="新密码"
                  placeholder="请输入新密码"
                  :right-icon="!isOpenRegister ? 'closed-eye' : 'eye-o'"
                  autocomplete="off"
                  @click-right-icon="XiuGaiPasssword"
                />
                <div class="psw-btn">
                  <van-button round block color="#0C34BA" @click="xiugaipsw(oldPassword, newPassword)">修改密码</van-button>
                </div>
              </div>
            </van-popup>
          </div>
          <div class="Secure-item">
            <van-cell is-link @click="closeAccount">注销账号</van-cell>
          </div>
        </div>
        <div class="Secure-btn">
          <van-button round block color="#0C34BA" @click="logout()">退出登陆</van-button>
        </div>
      </Bg>
    </div>
  </div>
</template>

<script>
  import Navi from '../components/Navi.vue';
  import Bg from '../components/Bg.vue';
  export default {
    name: 'Secure',
    data() {
      return {
        pwsshow: false,
        isOpenRegister: false,
        isOldGaiPasssword: false,
        newPassword: '',
        oldPassword: '',
      };
    },
    components: {
      Navi,
      Bg,
    },
    methods: {
      // 退出登陆
      async logout() {
        const res = await this.post('logout', {});
        if (res.code === 'F001') {
          setTimeout(() => {
            this.$router.push({ name: 'Home' });
          }, 1000);
        }
      },
      // 注销账号
      closeAccount() {
        this.$dialog
          .confirm({
            title: '注销账号',
            message: '是否确认注销账号，一旦注销无法恢复',
          })
          .then(async () => {
            const res = await this.post('destroyAccount', {});
            if (res.code === 'G001') this.$router.push({ name: 'Login' });
          })
          .catch(err => {});
      },
      pswPopup() {
        this.pwsshow = true;
      },

      XiuGaiPasssword() {
        this.isOpenRegister = !this.isOpenRegister;
      },
      OldGaiPasssword() {
        this.isOldGaiPasssword = !this.isOldGaiPasssword;
      },
      async xiugaipsw(oldPassword, newPassword) {
        if (oldPassword === newPassword) {
          this.$toast('新旧密码不能相同');
          return;
        }

        const res = await this.post('updatePassword', { password: newPassword, oldPassword });
        if (res.code === 'E001') {
          this.pwsshow = false;
          this.oldPassword = '';
          this.newPassword = '';
          this.$router.push({ name: 'Login' });
          this.$notify({
            type: 'primary',
            message: '密码成功修改,请重新登陆',
            background: '#0C34BA',
            color: '#fff',
          });
        }
        if (res.code === 'E003') {
          this.$toast(res.msg);
          this.pwsshow = false;
          this.oldPassword = '';
          this.newPassword = '';
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  .SecureBox {
    margin-top: 46px;
    background: #fff;
    .Secure-list {
      background: #fff;
      padding: 10px;
      .Secure-item {
        font-size: 15px;
        display: flex;
        // padding: 10px;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        &:nth-child(2n) {
          border-bottom: 0;
        }
        .pwsBox {
          .pwsBox-text {
            font-size: 15px;
            padding: 18px 5px;
          }
          /deep/.van-cell {
            margin-top: 20px;
          }
          .psw-btn {
            margin-top: 20px;
          }
        }
      }
    }
    .Secure-btn {
      margin-top: 100px;
    }
  }
</style>
