<template>
  <div :style="setBackground" class="top-box">
    <div class="top-count">
      <img :src="imgs" />
      <div class="top-count-box">
        <span>今日汇率</span>
        <p>1000金币=1钻石=1元</p>
      </div>
      
    </div>
    <div class="top-count-list">
        <ul class="top-count-list-box">
          <li>全部</li>
          <li>购买</li>
          <li>出售</li>
        </ul>
        <p>
            筛选
            <img :src="logo">
        </p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require("../assets/huilv.png"),
      logo: require("../assets/xuanze.png"),
      setBackground: {
        backgroundImage: "url(" + require("../assets/beimian.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.top-box {
  height: 3.68rem;
  width: 7.5rem;
}
.top-count {
  display: flex;
  padding: 54px 0 0 31px;
}
.top-count img {
  width: 0.64rem;
  height: 0.64rem;
}
.top-count-box {
  margin-left: 0.24rem;
}
.top-count-box span {
  display: block;
  font-weight: 500;
  color: #ffffff;
  /* line-height: 22px; */
  font-size: 0.32rem;
}
.top-count-box p {
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  /* line-height: 17px; */
  font-size: 0.24rem;
}
.top-count-list{
    margin-left: 0.08rem;
    display: flex;
    margin-top: 0.2rem;
}
.top-count-list p{
font-size: 0.28rem;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;
line-height: 0.4rem;
display: flex;
margin-left: 1.7rem;
margin-top: 0.2rem;
}
.top-count-list-box{
    display: flex;
}
.top-count-list-box li{
width: 45px;
height: 20px;
font-size: 0.28rem;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #FFFFFF;
line-height: 0.4rem;
margin-left: 0.44rem;
margin-top: 0.2rem;
}
</style>