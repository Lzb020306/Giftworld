<template>
  <div class="envelopes">
    <div class="title">
      <img :src="this.imgs" />
      <p>恭喜XXX在5月10日 10:00获得XX分红礼物</p>
    </div>
    <div class="Statistics">
      <div class="StatisticsTop">
        <p>我的分红礼物</p>
        <span>0个</span>
      </div>
      <ul>
        <li v-for="(item, index) in Cumulative" :key="index">
          <p>{{ item.name }}</p>
          <span>{{ item.money }}</span>
        </li>
      </ul>
    </div>
    <div class="introduce">
      <h2>分红礼物是什么</h2>
      <p>分红礼物是什么?</p>
      <span
        >分红礼物每天均分平台30%的广告收入，限量10万只，先到先得。分红礼物需集齐一到15级的全部礼物(每级包含20款礼物，共计300款），通过个人努力，持续玩游戏即可获得。</span
      >
    </div>
    <div class="progress">
      <div class="progressTop">
        <p>个人努力必得分红</p>
        <img :src="imges" />
        <span>去加速</span>
      </div>
      <div class="middle">
        <div class="front"><div class="after"></div></div>
        <p>已完成10%。由个人活跃和好友活跃两个维度综合计算</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require("../assets/laba.png"),
      content: `恭喜XXX在5月10日 10:00获得XX分红礼物`,
      Cumulative: [
        {
          name: `今日分红`,
          money: `0.00`,
        },
        {
          name: `今日分红`,
          money: `0.00`,
        },
      ],
      imges: require("../assets/huojian.png"),
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.envelopes {
  background: #f4f6fa;
  padding-bottom: 0.02rem;
}
.title {
  display: flex;
  padding-top: 0.28rem;
  margin-left: 0.56rem;
}
.title p {
  height: 0.4rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #f5717f;
  line-height: 0.36rem;
  font-weight: 400;
  margin-left: 0.08rem;
}
.title img {
  width: 0.4rem;
  height: 0.4rem;
}
.Statistics {
  width: 6.78rem;
  height: 3.02rem;
  background: #ffffff;
  box-shadow: 0rem 0.2rem 0.6rem 0rem rgba(112, 136, 210, 0.1);
  border-radius: 0.32rem;
  margin-left: 0.36rem;
  margin-top: 0.22rem;
}
.StatisticsTop {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.4rem 0.4rem 0 0.4rem;
  margin-bottom: -0.18rem;
}
.StatisticsTop p {
  width: 1.92rem;
  height: 0.44rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
}
.StatisticsTop span {
  font-size: 0.32rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.38rem;
}
.Statistics ul li {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.58rem 0.4rem 0 0.4rem;
}
.Statistics ul li p {
  width: 1.92rem;
  height: 0.44rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.44rem;
}
.Statistics ul li span {
  font-size: 0.32rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.38rem;
}
.introduce {
  width: 6.78rem;
  height: 4.04rem;
  background: #ffffff;
  box-shadow: 0rem 0.2rem 0.6rem 0rem rgba(112, 136, 210, 0.1);
  border-radius: 0.32rem;
  margin-top: 0.2rem;
  margin-left: 0.36rem;
}
.introduce h2 {
  font-size: 0.32rem;
  font-weight: 500;
  padding: 0.4rem 0 0 0.4rem;
}
.introduce p {
  font-size: 0.26rem;
  padding-top: 0.32rem;
  padding-left: 0.4rem;
  line-height: 24px;
}
.introduce span {
  width: 5.98rem;
  height: 2.4rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 0.48rem;
  display: block;
  margin-left: 0.4rem;
}
.progress {
  width: 6.78rem;
  height: 2.64rem;
  background: #ffffff;
  box-shadow: 0px 0.2rem 0.6rem 0px rgba(112, 136, 210, 0.1);
  border-radius: 0.32rem;
  margin: 0.2rem 0 0 0.36rem;
  margin-bottom: 1.6rem;
}
.progressTop {
  display: flex;
  padding-top: 0.4rem;
  padding-left: 0.4rem;
}
.progressTop img {
  margin-left: 2.14rem;
  width: 0.4rem;
  height: 0.4rem;
}
.progressTop p {
  width: 2.56rem;
  height: 0.44rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
}
.progressTop span {
  width: 0.84rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.4rem;
}
.front {
  width: 5.98rem;
  height: 0.2rem;
  background: #f4f4f4;
  border-radius: 0.12rem;
  margin-top: 0.52rem;
  margin-left: 0.4rem;
}
.after {
  width: 0.6rem;
  height: 0.2rem;
  background: #2bb5fe;
  border-radius: 0.12rem;
}
.middle p{
width: 5.98rem;
height: 0.48rem;
font-size: 0.22rem;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #999999;
line-height: 0.48rem;
margin-top: 0.2rem;
margin-left: 0.4rem;
}
</style>