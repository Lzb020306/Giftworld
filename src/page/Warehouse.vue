<template>
  <div>
    <div class="warehous">
      <img :src="imgs" @click="back" />
      <h4>我的礼物</h4>
      <p>
        已收集
        <span>32/300</span>
      </p>
    </div>
    <count class="count"></count>
  </div>
</template>

<script>
import count from "../components/Warehouse-count";
export default {
  data() {
    return {
      imgs: require("../assets/heifanhui.png"),
    };
  },
  mounted() {},
  methods: { 
    back(){
      this.$router.go(-1)
    }
  },
  components: {
    count,
  },
};
</script>

<style scoped>
.warehous {
    height: 1rem;
    width: 6.36rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-bottom: 0.04rem solid #000;
  margin-left: 0.58rem;
}
.warehous img {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.3rem;
}
.warehous h4 {
  width: 1.48rem;
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.5rem;
  margin-top: 0.26rem;
}
.warehous p {
  width: 1.6rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9c9eb9;
  line-height: 0.34rem;
  margin-top: 0.34rem;
}
.warehous p span {
  width: 0.84rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2bb5fe;
  line-height: 0.34rem;
}
.count{
    margin-top: 0.4rem;
}
</style>