<template>
  <div>
    <div class="illustrated">
      <img :src="imgd" @click="back"/>
      <p>分红图鉴</p>
    </div>
    <count class="count"></count>
  </div>
</template>

<script>
import count from "../components/Illustrated-count";
export default {
  name: "Illustrated",
  data() {
    return {
      imgd: require("../assets/heifanhui.png"),
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

<style  scoped>
.illustrated {
  display: flex;
}
.illustrated img {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 0.68rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.illustrated p {
  width: 1.48rem;
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.5rem;
  margin-left: 1.94rem;
  margin-top: 0.26rem;
}
.count{
    margin-top: 0.4rem;
}
</style>