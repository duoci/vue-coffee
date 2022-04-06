<template>
  <div class="account">
    <Navi title="个人资料" :fixed="true" />
    <div class="content">
      <div class="personalDataBox">
        <div class="head-portrait flex">
          <div class="leftText">头像</div>
          <div class="my-bg" :style="{ backgroundImage: `url(${userData.userImg})` }">
            <div class="head-portrait-img">
              <van-uploader :after-read="upload" />
            </div>
          </div>
        </div>
        <div class="username-box flex">
          <div class="leftText">昵称</div>
          <div class="rightText">
            <van-cell is-link @click="showPopup">{{ userData.nickName }}</van-cell>
            <van-popup v-model="nickNameshow" position="center" closeable>
              <div class="changenick-box">
                <div class="text-header">
                  <h2>修改用户名</h2>
                </div>
                <div>
                  <van-field
                    v-model="nickname"
                    label=""
                    placeholder="请输入用户名"
                    name="昵称"
                    right-icon="cross"
                    @click-right-icon="empty"
                    autocomplete="off"
                  />

                  <div class="changenick-btn">
                    <van-button round block color="#0C34BA" @click="changenick(nickname)">提交</van-button>
                  </div>
                </div>
              </div>
            </van-popup>
          </div>
        </div>
        <div class="sexBox flex">
          <div class="leftText">性别</div>
          <div class="rightText">
            <van-cell is-link :title="sex" @click="show = true" />
            <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
          </div>
        </div>
        <div class="phoneBox flex">
          <div class="leftText">手机号</div>
          <div class="rightText">+86 {{ userData.phone }}</div>
        </div>
        <div class="brief flex">
          <div class="leftText">简介</div>
          <div class="rightText">
            <van-cell is-link @click="descShowPopup"> {{ userData.desc }}</van-cell>
            <van-popup v-model="descShow" position="center" closeable>
              <div class="amendDesc-box">
                <div class="text-header">
                  <h2>修改简介</h2>
                </div>
                <div>
                  <van-field v-model="message" rows="2" autosize label="" type="textarea" maxlength="20" placeholder="请输入简介" show-word-limit />
                  <div class="amendDesc-btn">
                    <van-button round block color="#0C34BA" @click="amendDesc(message)">提交</van-button>
                  </div>
                </div>
              </div>
            </van-popup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navi from '../components/Navi.vue';
  export default {
    name: 'Account',
    data() {
      return {
        userData: [],
        nickNameshow: false,
        descShow: false,
        nickname: '',
        message: '',
        show: false,
        sex: '男',
        actions: [{ name: '男' }, { name: '女' }],
      };
    },
    components: {
      Navi,
    },
    created() {
      this.getUserDate();
      if (localStorage.getItem('sex')) {
        this.sex = localStorage.getItem('sex');
      }
    },
    methods: {
      empty() {
        this.nickname = '';
      },
      // 男女选项函数
      onSelect(item) {
        this.show = false;
        this.sex = item.name;
        localStorage.setItem('sex', item.name);
      },
      // 修改简介函数
      async amendDesc(message) {
        const res = await this.post('updateDesc', { desc: message });
        const { result, code } = res;
        // console.log(res);
        this.$toast(res.msg);
        if (res.code === 'D001') {
          if (res.desc === this.userData.desc) {
            this.$toast('新旧简介相同');
            return;
          }
          (this.message = res.desc), (this.userData.desc = res.desc), (this.descShow = false);
        }
      },
      // 修改昵称函数
      async changenick(nickname) {
        console.log(nickname);
        if (nickname === '') return this.$toast('不能为空');
        const res = await this.post('updateNickName', { nickName: nickname });
        // const { result,code } = res;
        this.$toast(res.msg);
        if (res.code === 'C001') {
          if (res.nickName === this.userData.nickName) {
            this.$toast('新旧昵称相同');
            return;
          }
          (this.nickname = res.nickName), (this.userData.nickName = res.nickName), (this.nickNameshow = false);
        }
      },
      showPopup() {
        this.nickNameshow = true;
      },
      descShowPopup() {
        this.descShow = true;
      },
      // 获取个人数据
      async getUserDate() {
        const res = await this.get('findAccountInfo', {});
        const { result, code } = res;
        const [aa] = result;
        this.$toast(res.msg);
        if (code === 'B001') {
          this.userData = aa;
          if (this.userData.desc === '') {
            this.userData.desc = '这家伙很懒，什么也没有留下';
          }
          this.nickname = this.userData.nickName;
        }
      },
      // 更换头像函数
      async upload(file) {
        // console.log('file ==> ', file);
        // eslint-disable-next-line prefer-destructuring
        const imgType = file.file.type.split(/\//)[1];
        const serverBase64Img = file.content.replace(/data:image\/[A-Za-z]+;base64,/, '');
        const res = await this.post('updateAvatar', {
          imgType,
          serverBase64Img,
        });
        // console.log(res.msg);
        this.$toast(res.msg);
        if (res.code === 'H001' && res.result[0] === 1) this.userData.userImg = res.userImg;
      },
    },
  };
</script>

<style lang="less" scoped>
  .account {
    .flex {
      padding: 10px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
    }
    .leftText {
      font-weight: bold;
    }
    .rightText {
      font-size: 14px;
      color: rgb(143, 143, 143);
      /deep/ .van-popup--center {
        border-radius: 10px;
      }
      /deep/ .van-popup__close-icon--top-right {
        color: #000;
      }
      /deep/ .van-cell__value--alone {
        color: rgb(143, 143, 143);
      }
      /deep/ .van-cell--clickable {
        color: rgb(143, 143, 143);
      }
      /deep/ .van-field__right-icon {
        position: absolute;
        top: 28px;
        right: 5px;
      }
      .changenick-box,
      .amendDesc-box {
        width: 300px;
        height: 220px;

        color: #000;
        text-align: center;

        h2 {
          padding: 0;
          margin: 0;
          font-size: 16px;
          color: rgb(34, 34, 34);
          background: #ccc;
        }
        /deep/ .van-field__control {
          background: #ccc;
          height: 40px;
          padding-left: 10px;
          margin-top: 20px;
        }
        .changenick-btn,
        .amendDesc-btn {
          width: 200px;
          margin: 0 auto;
          padding: 20px 0;
        }
      }
      .amendDesc-box {
        height: 245px;
      }
    }
    .content {
      height: 655px;
      background-color: #ccc;
      padding-top: 10px;
      .personalDataBox {
        // height: 500px;
        width: calc(100%-20px);
        margin: 10px 10px;

        margin-top: 46px;
        background-color: #fff;
        border-radius: 10px;
        .my-bg {
          width: 50px;
          height: 50px;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background-color: #e8e8e8;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
        }
        .head-portrait-img {
          border: 1px solid black;

          position: absolute;
          top: 10px;
          right: 10px;
          opacity: 0;
          /deep/ .van-uploader {
            width: 100%;
            height: 100%;
          }
          /deep/ .van-uploader__wrapper {
            width: 100%;
            height: 100%;
          }
          /deep/ .van-uploader__upload {
            margin: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
