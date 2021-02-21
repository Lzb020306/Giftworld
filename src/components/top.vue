<template>
  <div class="top-box">
    <div class="Statistics">
      <p class="Statistics-title">{{ title }}</p>
      <p class="Statistics-number">{{ number }}</p>
    </div>
    <ul class="top-count">
			<li v-for="(item , index) in this.msg" :key='index'>
				<img :src="item.Image" />
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: `今日人均分红`,
      number: `￥322.22`,
      msg: [
        {
          Image: require("../assets/hongbao.png"),
        },
        {
          Image: require("../assets/paihangbang.png"),
        },
        {
          Image: require("../assets/wanfa.png"),
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.top-box{
  width: 5.46rem;
  display: flex;
}
.top-count{
  display: flex;
  margin-left: 1.02rem;
}
.top-count li{
  margin: 0 0 0 0.26rem;
}
.top-count li img{
width: 0.84rem;
height: 0.84rem;
}
.Statistics {
  width: 1.92rem;
  height: 0.84rem;
  background: #f25f4e;
  border-radius: 0.42rem;
}
.Statistics-title {
  width: 1.92rem;
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.28rem;
  text-align: center;
  padding-top: 0.06rem;
}
.Statistics-number {
  width: 1.92rem;
  height: 0.28rem;
  font-size: 0.3rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.28rem;
  text-align: center;
  padding-top: 0.06rem;
}
</style>