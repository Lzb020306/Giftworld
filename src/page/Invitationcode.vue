<template>
  <div style="background: RGBA(244, 246, 250, 1); height: 16.24rem">
    <div class="Invitationcode">
      <img :src="img" @click="back" />
      <p>我的二维码</p>
    </div>
    <div class="Invitationcode-count">
      <img :src="iamg" />
      <p>用户名称</p>
      <div :style="ma"></div>
      <h1>使用浏览器扫描上面的二维码</h1>
      <h2>适合面对面邀请好友</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("../assets/heifanhui.png"),
      iamg: require("../assets/tou.png"),
      ma: {
        backgroundImage: "url(" + require("../assets/ma.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
    };
  },

  mounted() {},
  methods: {
      back(){
          this.$router.go(-1);
      }
  },
};
</script>

<style  scoped>
.Invitationcode {
  display: flex;
}
.Invitationcode img {
  margin-top: 0.3rem;
  margin-left: 0.68rem;
  margin-bottom: 0.3rem;
}
.Invitationcode p {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.5rem;
  margin-left: 1.76rem;
  margin-top: 0.26rem;
}
.Invitationcode-count {
  width: 6.38rem;
  height: 9.6rem;
  background: #ffffff;
  box-shadow: 0rem 20px 20px 0px rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
  margin-top: 0.4rem;
  margin-left: 0.56rem;
}
.Invitationcode-count img {
  width: 1.3rem;
  height: 1.3rem;
  margin-top: 1rem;
  margin-left: 2.54rem;
}
.Invitationcode-count p {
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.44rem;
  margin-left: 2.54rem;
}
.Invitationcode-count div {
  width: 3.7rem;
  height: 3.7rem;
  margin-top: 0.86rem;
  margin-left: 1.34rem;
}
.Invitationcode-count h1 {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 17px;
  margin-top: 0.66rem;
  text-align: center;
}
.Invitationcode-count h2 {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2bb5fe;
  line-height: 17px;
  margin-top: 0.16rem;
  text-align: center;
}
</style>