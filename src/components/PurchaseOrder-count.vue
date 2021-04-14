<template>
  <div style="background-color: #9c9eb9">
    <div class="sales-top" :style="setBackground">
      <img :src="retreat" />
      <p>确认出售订单</p>
    </div>
    <div class="sales-count">
      <div class="sales-commodity">
        <img :src="sample" />
        <h2>名称：X级XXX礼物</h2>
        <p>金币7000</p>
      </div>
      <div class="sales-information">
        <h3>订单信息</h3>
        <ul>
          <li v-for="(item, index) in details"  :key="index">
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </li>
        </ul>
      </div>
      <p class="sales-count-Tips">
        温馨提示：礼物一旦交易成功，不支持任何形式退还
      </p>
      <button @click="use">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sample: require("../assets/fenzhen.png"),
      retreat: require("../assets/fanhui.png"),
      setBackground: {
        backgroundImage: "url(" + require("../assets/beimian.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
      details: [
        { title: "我的账号:", content: "xxx" },
        { title: "会员等级:", content: "Lv.3" },
        { title: "交易类型:", content: "出售" },
        { title: "预计支出:", content: "6钻石=6元" },
        { title: "今日汇率:", content: "1000金币=1钻石=1元" },
        { title: "交易手续费:", content: "40%" },
      ],
    };
  },
  mounted() {},
  methods: {
    use(){
     this.$emit("transmission");
    },
  },
};
</script>

<style  scoped>
.sales-top {
  height: 2.96rem;
  width: 7.5rem;
  display: flex;
}
.sales-top img {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 0.68rem;
  margin-top: 1.18rem;
}
.sales-top p {
  width: 2.2rem;
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.5rem;
  margin-left: 1.58rem;
  margin-top: 1.14rem;
}
.sales-count {
  position: absolute;
  left: 0.56rem;
  top: 2.28rem;
}
.sales-count button {
  width: 5rem;
  height: 1.12rem;
  background: #2bb5fe;
  border-radius: 0.32rem;
  color: #fff;
  margin-left: 0.7rem;
  margin-top: 3.2rem;
  outline: none;
}
.sales-count-Tips {
  width: 5.6rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9c9eb9;
  line-height: 0.34rem;
  margin-left: 0.4rem;
  margin-top: 0.6rem;
}
.sales-commodity {
  width: 6.38rem;
  height: 2.4rem;
  background: #ffffff;
  box-shadow: 0.4rem 0.4rem 0.4rem 0.4rem rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.sales-commodity img {
  width: 2rem;
  height: 2rem;
  margin: 0.2rem 0 0 0.2rem;
}
.sales-commodity h2 {
  width: 3.38rem;
  height: 0.44rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.44rem;
  margin: 0.2rem 0 0 0.2rem;
}
.sales-commodity p {
  position: absolute;
  font-size: 0.24rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
  margin-left: 4.46rem;
  margin-top: 1.84rem;
}

.sales-information {
  width: 6.38rem;
  height: 4.94rem;
  background: #ffffff;
  box-shadow: 0.4rem 0.4rem 0.4rem 0.4rem rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
  margin-top: 0.2rem;
  overflow: hidden;
  position: relative;
}
.sales-information h3 {
  width: 1.4rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.4rem;
  border-left: 0.04rem solid #2bb5fe;
  margin-top: 0.4rem;
  margin-left: 0.24rem;
  text-align: center;
}
.sales-information ul {
  margin-left: 0.36rem;
  overflow: hidden;
}
.sales-information ul li {
  margin-top: 0.3rem;
}
.sales-information ul li h2 {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 0.34rem;
}
.sales-information ul li p {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  position: absolute;
  left: 2.1rem;
  line-height: 0.34rem;
}
</style>