<template>
  <div>
    <div class="serup">
      <img :src="msg" @click="back" />
      <p>填写社交信息</p>
    </div>
    <div class="serup-wx">
      <img :src="imasg" />
      <p></p>
      <input type="text" :placeholder="wx" v-model="WeChat" />
    </div>
    <div class="serup-qq">
      <img :src="imgs" />
      <p></p>
      <input type="text" :placeholder="qq" v-model="Qicq" />
    </div>
    <button class="preservation" @click="preservation">保存</button>
    <div class="Tips">
      <h2>温馨提示：</h2>
      <p>提交后，你的徒弟可以看到你的信息</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      QICQ: "",
      WeChat: "",
      qq: "请输入你的QQ号",
      wx: "请输入你的微信号",
      color: {
        background: "#fff",
      },
      msg: require("../assets/heifanhui.png"),
      imgs: require("../assets/qq.png"),
      imasg: require("../assets/wx.png"),
    };
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    preservation(){
        this.qq=this.QICQ
        this.wx=this.WeChat
    }
  },
};
</script>

<style  scoped>
.serup {
  display: flex;
}
.serup img {
  margin-top: 0.3rem;
  margin-left: 0.68rem;
}
.serup p {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.5rem;
  margin-left: 1.58rem;
  margin-top: 0.26rem;
}
.serup-wx {
  margin-top: 2rem;
  margin-left: 0.56rem;
  width: 6.38rem;
  height: 1.12rem;
  background: #f4f6fa;
  border-radius: 0.32rem;
  display: flex;
}
.serup-qq {
  margin-top: 0.6rem;
  margin-left: 0.56rem;
  width: 6.38rem;
  height: 1.12rem;
  background: #f4f6fa;
  border-radius: 0.32rem;
  display: flex;
}
.serup-wx img {
  width: 0.48rem;
  height: 0.48rem;
  margin-left: 0.38rem;
  margin-top: 0.32rem;
}
.serup-qq img {
  width: 0.48rem;
  height: 0.48rem;
  margin-left: 0.38rem;
  margin-top: 0.32rem;
}
.serup-wx p {
  width: 0.02rem;
  height: 0.64rem;
  background-color: rgba(151, 151, 151, 1);
  margin-left: 0.4rem;
  margin-top: 0.24rem;
}
.serup-qq p {
  width: 0.02rem;
  height: 0.64rem;
  background-color: rgba(151, 151, 151, 1);
  margin-left: 0.4rem;
  margin-top: 0.24rem;
}
.serup-wx input {
  background-color: transparent;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.36rem;
  padding-left: 0.4rem;
  outline: none;
}
.serup-qq input {
  background-color: transparent;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.36rem;
  padding-left: 0.4rem;
  outline: none;
}
.preservation {
    outline: none;
  width: 5rem;
  height: 1.12rem;
  background: #2d3142;
  border-radius: 0.32rem;
  margin-top: 1.6rem;
  margin-left: 1.26rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.44rem;
}
.Tips{
    margin-top: 0.6rem;
}
.Tips p{
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.34rem;
  text-align: center;
}
.Tips h2 {
    text-align: center;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.34rem;
}
</style>