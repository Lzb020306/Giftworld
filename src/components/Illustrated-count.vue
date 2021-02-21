<template>
  <div>
    <div class="illustrated">
      <div class="illustrated-left">
        <img :src="imgs" />
        <p>全球分红礼物</p>
      </div>
      <div class="illustrated-right">
        <h6>每天获得平台广告收益分红30%</h6>
        <p>获得途径：</p>
        <span>①集满1-15级全部勋章必定获得 
          ②个人持续努力必定获得 : x %  X %为用户目前的进度
          </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Illustrated-count",
  data() {
    return {
      imgs: require("../assets/jixiangwu.png"),
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.illustrated {
  margin-left: 0.56rem;
  width: 6.38rem;
  height: 3.2rem;
  background: #ffffff;
  box-shadow: 0px 0.2rem 0.6rem 0rem rgba(112, 136, 210, 0.1);
  border-radius: 0.4rem;
  display: flex;
}
.illustrated-right {
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-top: 0.48rem;
}
.illustrated-left img {
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 0.4rem;
  margin-left: 0.4rem;
  border: 1px dashed #000;
}
.illustrated-left p {
  width: 1.68rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.4rem;
  margin-left: 0.46rem;
}
.illustrated-right h6 {
  width: 3.66rem;
  height: 17px;
  font-size: 0.24rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ff1212;
  line-height: 0.34rem;
}
.illustrated-right p {
  width: 3.66rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 0.34rem;
  margin-top: 0.16rem;
}
.illustrated-right span {
  width: 3.66rem;
  height: 1.02rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.34rem;
  margin-top: 0.12rem;
}
</style>