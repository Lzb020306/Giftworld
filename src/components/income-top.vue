<template>
  <div>
    <div :style="setBackground" class="income">
      <div class="income-top">
        <p>好友获得礼物越多</p>
        <button>玩法介绍</button>
      </div>
      <p class="income-sign">我的收入越高</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
.income {
  width: 7.5rem;
  height: 3.6rem;
  overflow: hidden;
}
.income-top {
  margin-top: 1.04rem;
  display: flex;
}
.income-top P {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.5rem;
  margin-left: 0.56rem;
}
.income-top button {
  width: 1.8rem;
  height: 0.56rem;
  border-radius: 0.16rem;
  background-color: rgba(88, 87, 86, 0.3);
  color: #fff;
  margin-left: 2.3rem;
  outline: none;
}
.income-sign {
  font-size: 0.52rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.74rem;
  margin-top: 0.04rem;
  margin-left: 0.56rem;
}
</style>