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
      <div class="income-Cumulative-progressBar">
        <div></div>
      </div>
      <p class="income-Cumulative-introduce">
        已解锁10%，解锁后XX元现金自动存入钱包x1.0倍加速
      </p>
    </div>
    <div class="income-total">
      <h2>今日好友给我赚钱</h2>
      <ul>
        <li v-for="(item, index) in Price" :key="index">
          <p :style="item.color">{{ item.number }}</p>
          <span>{{ item.content }}</span>
        </li>
      </ul>
      <button><img :src="logo" /> 1.0倍加速</button>
    </div>
    <div class="income-people">
      <div class="income-people-top">
        <h2>邀请我的人</h2>
        <p>联系他 <img :src="image"></p>
      </div>
      <div class="income-people-count">
         <img :src="imgs">
      <div>
        <h1>他邀请了13人</h1>
        <p>累计收益99.54元</p>
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
      logo: require("../assets/huo.png"),
      image:require("../assets/jinru.png"),
      setBackground: {
        backgroundImage: "url(" + require("../assets/jinru.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
      remind: require("../assets/wen.png"),
      Price: [
        {
          number: "1500.00",
          content: "合计",
          color: {
            color: "#FF1212",
          },
        },
        {
          number: "800.00",
          content: "徒弟贡献",
          color: {
            color: "#2D3142",
          },
        },
        {
          number: "700.00",
          content: "徒孙贡献",
          color: {
            color: "#2D3142",
          },
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.income-Statistics {
  width: 6.78rem;
  height: 2.74rem;
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
  margin-left: 0.4rem;
  margin-top: 0.4rem;
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
  top: 0.24rem;
  left: 2.12rem;
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
.income-Cumulative-progressBar {
  width: 5.98rem;
  height: 0.2rem;
  background: #f4f4f4;
  border-radius: 0.12rem;
  margin-top: 0.48rem;
  margin-left: 0.4rem;
}
.income-Cumulative-progressBar div {
  width: 0.6rem;
  height: 0.2rem;
  background: #2bb5fe;
  border-radius: 0.12rem;
}
.income-Cumulative-introduce {
  width: 5.9rem;
  height: 0.32rem;
  font-size: 0.225em;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 0.32rem;
  margin-left: 0.48rem;
  margin-top: 0.2rem;
}
.income-total {
  width: 6.78rem;
  height: 2.88rem;
  background: #ffffff;
  box-shadow: 0px 0.4rem 0.4rem 0px rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
  margin-top: 0.2rem;
  overflow: hidden;
  position: relative;
}
.income-total h2 {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
  margin: 0.4rem;
}
.income-total ul {
  display: flex;
  margin-left: 0.36rem;
  margin-top: 0.6rem;
}
.income-total ul li {
  width: 2rem;
  margin-left: 0.04rem;
  display: flex;
  flex-direction: column;
  align-items: center; /*由于flex-direction: column，因此align-items代表的是水平方向*/
  justify-content: center;
}
.income-total ul li p {
  width: 100%;
  font-size: 0.4rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  line-height: 0.62rem;
  text-align: center;
}
.income-total ul li span {
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 0.36rem;
}
.income-total button {
  background-color: #2bb5fe;
  display: block;
  width: 1.62rem;
  height: 0.44rem;
  border-radius: 0.4rem 0.4rem 0.4rem 0;
  font-size: 0.22rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.34rem;
  outline: none;
  position: absolute;
  top: 1.04rem;
  left: 1.36rem;
}
.income-total button img {
  width: 0.2rem;
  height: 0.2rem;
  /* margin: 5px 5px 5px 8px; */
}
.income-people {
  width: 6.78rem;
  height: 2.6rem;
  background: #ffffff;
  box-shadow: 0px 0.4rem 0.4rem 0px rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
  margin-top: 0.2rem;
  overflow: hidden;
}
.income-people-top {
  display: flex;
  margin-top: 0.48rem;
  margin-left: 0.4rem;
}
.income-people-top h2 {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
}
.income-people-top p{
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 0.34rem;
  margin-top: 0.06rem;
  margin-left: 3.26rem;
  display: flex;
}
.income-people-top p img{
  width: 0.4rem;
  height: 0.4rem;
}
.income-people-count{
  display: flex;
  margin-left: 0.4rem;
  margin-top: 0.36rem;
}
.income-people-count img{
  width: 0.76rem;
  margin-top: 0.04rem;
  height: 0.76rem;
}
.income-people-count div{
  margin-left: 0.2rem;
}
.income-people-count div p,h1{
  font-size: 0.26rem;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #2D3142;
line-height: 0.4rem;
}
</style>