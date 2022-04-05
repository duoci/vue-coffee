<template>
  <div class="login">
    <van-nav-bar>
      <template #left>
        <div class="left-box">
          <div class="logo">
            <img class="auto-img" src="../assets/home_active.png" alt="" />
          </div>
          <div class="logo-text">Luckin Coffee</div>
        </div>
      </template>
      <template #right>
        <div class="home-text" @click="viewMenu">菜单</div>
      </template>
    </van-nav-bar>
    <div class="login-box">
      <div class="welcome-title">欢迎回来！</div>
      <div class="welcome-subtitle">Please login to your accounts</div>

      <div class="form-box">
        <van-form>
          <van-field v-model="loginUserInfo.phone" name="手机号" label="手机号" placeholder="手机号" autocomplete="off" />
          <van-field
            v-model="loginUserInfo.password"
            :type="!isOpenLogin ? 'password' : 'text'"
            name="密码"
            label="密码"
            placeholder="密码"
            :right-icon="!isOpenLogin ? 'closed-eye' : 'eye-o'"
            autocomplete="off"
            @click-right-icon="toggleLoginPasssword"
          />
          <div class="forgot">
            <van-cell is-link @click="wjshowPopup">忘记密码？</van-cell>
            <van-popup v-model="wjshow" closeable>
              <div class="retrieve-password">
                <div class="retrieve-text">找回密码</div>
                <van-field v-model="phone" name="手机号" label="手机号" placeholder="请输入手机号" autocomplete="off" />
                <van-field
                  v-model="newPassword"
                  :type="!zh ? 'password' : 'text'"
                  name="新密码"
                  label="新密码"
                  placeholder="请输入新密码"
                  :right-icon="!zh ? 'closed-eye' : 'eye-o'"
                  autocomplete="off"
                  @click-right-icon="XiuGaiPasssword"
                />
                <div class="tj-btn" @click="wj">提交</div>
              </div>
            </van-popup>
          </div>
          <div class="login-btn">
            <van-button round block color="#0C34BA" @click="login">登录</van-button>
          </div>
          <div class="login-btn">
            <van-button round block type="default" @click="showPopup">注册</van-button>
          </div>
        </van-form>
      </div>
    </div>

    <!-- 注册 -->
    <van-popup v-model="show" position="bottom" closeable>
      <div class="register-box">
        <div class="register-title">注册</div>
        <van-form @submit="register">
          <van-field v-model="registerUserInfo.phone" name="手机号" label="手机号" placeholder="手机号" autocomplete="off" />
          <van-field
            v-model="registerUserInfo.password"
            :type="!isOpenRegister ? 'password' : 'text'"
            name="密码"
            label="密码"
            placeholder="密码"
            :right-icon="!isOpenRegister ? 'closed-eye' : 'eye-o'"
            autocomplete="off"
            @click-right-icon="toggleResgiterPasssword"
          />
          <van-field v-model="registerUserInfo.nickName" type="text" name="昵称" label="昵称" placeholder="昵称" autocomplete="off" />

          <div class="login-btn">
            <van-button round block color="#0C34BA" native-type="submit">注册</van-button>
          </div>
        </van-form>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        zh: false,
        newPassword: '',
        phone: '',
        wjshow: false,
        // 是否显示注册弹窗
        show: false,
        loginUserInfo: {
          phone: '',
          password: '',
        },
        registerUserInfo: {
          phone: '',
          password: '',
          nickName: '',
        },

        // 查看注册密码
        isOpenRegister: false,

        // 查看登录密码
        isOpenLogin: false,
      };
    },

    methods: {
      async wj() {
        const res = await this.post('retrievePassword', { phone: this.phone, password: this.newPassword });
        if (res.code === 'L001') {
          this.wjshow = false;
          (this.phone = ''), (this.newPassword = '');
        }
      },
      XiuGaiPasssword() {
        this.zh = !this.zh;
      },
      wjshowPopup() {
        this.wjshow = !this.wjshow;
      },
      showPopup() {
        this.show = !this.show;
      },

      // 查看菜单
      viewMenu() {
        this.$router.push({ name: 'Menu' });
      },

      // 切换注册密码可见状态
      toggleResgiterPasssword() {
        this.isOpenRegister = !this.isOpenRegister;
      },

      // 切换登录密码可见状态
      toggleLoginPasssword() {
        this.isOpenLogin = !this.isOpenLogin;
      },

      // 注册
      async register() {
        const res = await this.post('register', { ...this.registerUserInfo });
        if (res.code === 100) {
          this.show = false;
          // 清除用户注册信息
          for (const key in this.registerUserInfo) {
            this.registerUserInfo[key] = '';
          }
        }
      },

      // 登录
      async login() {
        const res = await this.post('login', { ...this.loginUserInfo });
        // console.log(res);
        if (res.code === 200) {
          localStorage.setItem('token', res.token);
          setTimeout(() => {
            this.$router.push({ name: 'Home' });
          }, 1000);
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  .login {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    /deep/.van-cell--clickable {
      width: 120px;
      margin-left: auto;
    }
    .register-title {
      font-size: 24px;
      margin-bottom: 20px;
    }
    .register-box {
      padding: 10px;
    }
    .forgot {
      margin-top: 20px;
      display: flex;
      /deep/.van-cell__right-icon {
        display: none;
      }
      /deep/.van-cell__value--alone {
        text-align: right;
        font-size: 14px;
        color: #666;
      }
      .retrieve-password {
        width: 300px;
        height: 250px;
        // height: 300px;
        .retrieve-text {
          font-size: 16px;
          padding: 15px 10px;
        }
        .tj-btn {
          text-align: center;
          background-color: #0c34ba;
          width: 200px;
          line-height: 40px;
          border-radius: 30px;
          color: #fff;
          margin: 0 auto;
          margin-top: 20px;
        }
      }
    }
    .login-btn {
      margin-top: 50px;
    }
    .form-box {
      margin-top: 50px;
    }
    .welcome-title {
      font-size: 30px;
    }
    .welcome-subtitle {
      font-size: 18px;
      margin-top: 20px;
      color: #999;
    }
    .login-box {
      margin-top: 80px;
      padding: 10px;
    }
    .home-text {
      color: #0c34ba;
      font-weight: bold;
      font-size: 14px;
    }
    .left-box {
      display: flex;
      align-items: center;
    }
    .logo {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;
    }
    .logo-text {
      margin-left: 10px;
      font-weight: bold;
      font-size: 14px;
    }
  }
</style>
