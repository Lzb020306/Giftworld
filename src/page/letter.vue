<template>
  <div>
    <div class="detailed">
      <img :src="img" @click="back" />
      <p>消息</p>
    </div>
    <div class="letter">
      <h2>标题标题标题</h2>
      <h5>这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容</h5>
      <p>2020-05-09 <span>15:07</span></p>
    </div>
     <div class="letter" style="margin-top: 0.6rem;">
      <h2>标题标题标题</h2>
      <h5>这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容</h5>
      <p>2020-05-09 <span>15:07</span></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require("../assets/heifanhui.png"),
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
  margin-left: 2.32rem;
  margin-top: 0.26rem;
}
.letter{
    width: 6.38rem;
    margin-left: 0.56rem;
    margin-top: 0.44rem;
    border-bottom: 1px solid #ddd;
}
.letter h2 {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
}
.letter h5 {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.4rem;
  margin-top: 0.28rem;
}
.letter p{
    font-size: 0.24rem;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
line-height: 0.34rem;
margin-top: 0.4rem;
margin-bottom: 0.2rem;
}
.letter p span{
    font-size: 0.24rem;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
line-height: 0.34rem;
margin-left: 0.2rem;
}
</style>