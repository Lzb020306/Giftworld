<template>
  <div>
    <div class="detailed">
      <img :src="img" @click="back" />
      <p>余额明细</p>
    </div>
    <div class="detailed-list">
      <div class="list-left">
        <h2>提现至微信[提现成功]</h2>
        <p>2020-05-09 <span>15:07</span></p>
      </div>
      <div class="list-right">-0.30</div>
    </div>
    <div class="detailed-count">
      <div class="count-left">
        <h2>限时分红犬收益</h2>
        <p>2020-05-09 <span>15:07</span></p>
      </div>
      <div class="count-right">+1.55</div>
    </div>
    <div class="detailed-count">
      <div class="count-left">
        <h2>限时分红犬收益</h2>
        <p>2020-05-09 <span>15:07</span></p>
      </div>
      <div class="count-right">+1.55</div>
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
  margin-left: 1.76rem;
  margin-top: 0.26rem;
}
.detailed-list {
  display: flex;
  margin-left: 0.68rem;
  margin-top: 0.4rem;
  border-bottom: 1px solid RGBA(245, 245, 245, 1);
}
.detailed-count {
  display: flex;
  margin-left: 0.68rem;
  margin-top: 0.16rem;
  border-bottom: 1px solid RGBA(245, 245, 245, 1);
}
.list-left h2 {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.44rem;
  margin-top: 0.26rem;
}
.count-left h2 {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.44rem;
  margin-top: 0.26rem;
}
.list-left p {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 0.34rem;
  margin-top: 0.12rem;
  margin-bottom: 0.24rem;
}
.count-left p {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 0.34rem;
  margin-top: 0.12rem;
  margin-bottom: 0.24rem;
}
.list-left p span {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 0.34rem;
  margin-left: 0.2rem;
}
.count-left p span {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 0.34rem;
  margin-left: 0.2rem;
}
.list-right {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
  margin-left: 2.1rem;
  margin-top: 0.48rem;
}
.count-right {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fa6400;
  line-height: 0.44rem;
  margin-left: 3.04rem;
  margin-top: 0.48rem;
}
</style>