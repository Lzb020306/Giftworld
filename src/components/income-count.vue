<template>
  <div>
    <div class="income-Statistics">
      <div class="income-Statistics-top">
        <p>好友人数:11</p>
        <img :src="imgs" />
        <button :style="setBackground"></button>
      </div>
      <button class="income-Statistics-invitation">邀请好友</button>
    </div>
    <div class="income-Cumulative">
      <h2>好友累积给我赚钱</h2>
      <div class="income-Cumulative-count">
        <div class="income-Cumulative-total">
          <p>1500.00 <span>元</span></p>
          <h1>当前阶段总收入<img :src="remind" /></h1>
        </div>
        <div class="income-Cumulative-people">
          <p>20<span>人</span></p>
          <h1>第一阶段x1.0倍加速<img :src="remind" /></h1>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      imgs: require("../assets/gougou.png"),
      setBackground: {
        backgroundImage: "url(" + require("../assets/jinru.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
      remind: require("../assets/wen.png"),
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.income-Statistics {
  width: 339px;
  height: 137px;
  background: #ffffff;
  box-shadow: 0px 20px 20px 0px rgba(64, 117, 205, 0.08);
  border-radius: 20px;
}
.income-Statistics-invitation {
  width: 4.38rem;
  height: 1.12rem;
  background: #2bb5fe;
  border-radius: 0.32rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  margin-left: 1.2rem;
  margin-top: 0.34rem;
}
.income-Statistics-top {
  display: flex;

  border-bottom: 1px dashed #000;
}
.income-Statistics-top p {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
  margin-left: 20px;
  margin-top: 20px;
}
.income-Statistics-top img {
  width: 0.64rem;
  height: 0.64rem;
  margin-top: 0.3rem;
  margin-left: 2.86rem;
  margin-bottom: 0.04rem;
}
.income-Statistics-top button {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 0.2rem;
  margin-top: 0.42rem;
}
.income-Cumulative {
  width: 6.78rem;
  height: 3.9rem;
  background: #ffffff;
  box-shadow: 0px 0.4rem 0.4rem 0px rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
  margin-top: 0.2rem;
}
.income-Cumulative-count {
  display: flex;
}
.income-Cumulative h2 {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.44rem;
  padding: 0.4rem;
}
.income-Cumulative-total {
  width: 2.82rem;
  margin-left: 0.56rem;
  border-right: 1px solid #f5f5f5;
}
.income-Cumulative-total p {
  width: 2rem;
  height: 0.62rem;
  font-size: 0.52rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  color: #ff1212;
  line-height: 0.62rem;
  position: relative;
}
.income-Cumulative-total p span {
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ff1212;
  line-height: 0.36rem;
  position: absolute;
  top: 12px;
  left: 106px;
}
.income-Cumulative-total h1 {
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 0.36rem;
  margin-top: 0.18rem;
  margin-left: 0.14rem;
}
.income-Cumulative-total h1 img {
  width: 0.26rem;
  height: 0.26rem;
  padding-left: 0.04rem;
  margin-top: 0.06rem;
}
.income-Cumulative-people {
  width: 2.82rem;
  margin-left: 0.26rem;
}
.income-Cumulative-people p {
  width: 2rem;
  height: 0.62rem;
  font-size: 0.52rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  margin-left: 0.44rem;
  color: #000;
  line-height: 0.62rem;
  text-align: center;
  position: relative;
}
.income-Cumulative-people p span {
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000;
  line-height: 0.36rem;
  position: absolute;
  top: 0.24rem;
  left: 1.34rem;
}
.income-Cumulative-people h1 {
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 0.36rem;
  margin-top: 0.18rem;
  margin-left: 0.14rem;
}
.income-Cumulative-people h1 img {
  width: 0.26rem;
  height: 0.26rem;
  padding-left: 0.04rem;
  margin-top: 0.06rem;
}
</style>