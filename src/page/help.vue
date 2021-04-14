<template>
  <div>
    <div class="detailed">
      <img :src="img" @click="back" />
      <p>帮助中心</p>
      <button :style="ma"></button>
    </div>
    <div class="help">
      <div class="helpbox">
        <img :src="imag" />
        <p>常见问题</p>
      </div>
      <p class="help-list"></p>
      <ul>
        <li>
          <p>提现多久到账？</p>
          <img :src="iamg" />
        </li>
        <li style="margin-top: 0.68rem;">
          <p>如何绑定微信？</p>
          <img :src="iamg" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("../assets/heifanhui.png"),
      imag: require("../assets/bangmang.png"),
      iamg: require("../assets/jinru.png"),
      ma: {
        backgroundImage: "url(" + require("../assets/kefu.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
    };
  },

  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style  scoped>
.detailed {
  display: flex;
}
.detailed img {
  margin-top: 0.3rem;
  margin-left: 0.68rem;
  margin-bottom: 0.3rem;
}
.detailed p {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.5rem;
  margin-left: 1.94rem;
  margin-top: 0.26rem;
}
.detailed button {
  width: 0.4rem;
  height: 0.4rem;
  background-color: #fff;
  margin-top: 0.3rem;
  margin-left: 1.84rem;
}
.helpbox img {
  width: 0.72rem;
  height: 0.72rem;
  margin-top: 0.26rem;
  margin-left: 0.88rem;
}
.helpbox p {
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.4rem;
  margin-top: -0.1rem;
  margin-left: 0.68rem;
}
.help {
  display: flex;
  margin-top: 0.62rem;
}
.help-list {
  width: 1px;
  height: 90px;
  background-color: #ddd;
  margin-left: 0.36rem;
}
.help ul li {
    display: flex;
    margin-top: 0.16rem;
    margin-left: 0.32rem;
}
.help ul li p{
font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #2D3142;
line-height: 20px;
}
.help ul li img{
    width: 0.4rem;
    height: 0.4rem;
    margin-left: 1.9rem;
    border: 1px dashed #000;
}
</style>