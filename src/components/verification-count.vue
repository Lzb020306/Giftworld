<template>
  <div>
    <div class="vft-top">
      <img :src="imgs" />
    </div>
    <p class="item">这里是sloganXXXXXXXXXXXXXX</p>
    <div class="text-box">
      <p>+86</p>
      <input type="text" @keyup.enter="search" @input="search($event)" />
      <button v-if="disjunctor">22</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require("../assets/liwu.png"),
      disjunctor: false,
    };
  },
  mounted() {},
  methods: {
    search: function (event) {
      console.log(event.target.value);
      //方法一：直接通过event.data可以获得文本内容
      if (event.target.value != "") {
        this.disjunctor = true;
      } else {
        this.disjunctor = false;
      }
    },
  },
};
</script>

<style  scoped>
.vft-top {
  width: 2.58rem;
  margin: auto;
  /* margin-top: 2.68rem; */
  padding-top: 2.68rem;
}
.vft-top img {
  width: 2.58rem;
  height: 0.78rem;
}
.item {
  width: 5.34rem;
  height: 0.44rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.44rem;
  letter-spacing: 0.02rem;
  margin-left: 1.12rem;
  margin-top: 0.44rem;
}
.text-box {
  width: 5.66rem;
  height: 1.2rem;
  background: #ffffff;
  box-shadow: 0rem 0.2rem 0.4rem 0rem rgba(64, 117, 205, 0.08);
  border-radius: 0.32rem;
  margin: 1.2rem 0 0 0.92rem;
  display: flex;
}
.text-box p {
  width: 28px;
  height: 21px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 21px;
  padding: 0.4rem 0 0 0.48rem;
}
.text-box input {
  margin-left: 40px;
  width: 97px;
  font-size: 15px;
}
</style>