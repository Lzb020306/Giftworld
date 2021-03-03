<template>
  <div>
    <div class="gift-top">
      <img :src="revert" />
      <p>选择礼物</p>
    </div>
    <div class="gift-count">
      <ul class="gift-left">
        <li v-for="(item, index) in Grade" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      revert: require("../assets/heifanhui.png"),
      Grade: ["一级", "二级", "三级", "四级", "五级", "六级", "七级", "八级"],
      Level3:[],
      Level4:[],
      ranking:[]
    };
  },
  mounted() {
      this.$axios
      .get("./gift.json")
      .then((response) => {
        console.log(response.data);
        this.ranking = response.data;
        // this.ranking.forEach((i) => {
        // //   console.log(i.id);
        // });
        //   this.ranking.forEach((j) => {
        //   console.logy(j);
        //   j.portrait = require("@/assets/" + j.portrait);
        // });
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods: {},
};
</script>

<style  scoped>
.gift-top {
  display: flex;
  width: 6.36rem;
  margin-left: 0.58rem;
  padding-bottom: 0.3rem;
  border-bottom: 0.04rem solid #2d3142;
}
.gift-top img {
  margin-top: 0.3rem;
  margin-left: 0.1rem;
}
.gift-top p {
  margin: 0.26rem 0 0 1.94rem;
  width: 1.48rem;
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.5rem;
}
.gift-count {
  height: 89.5vh;
  margin-left: 28px;
}
.gift-left {
    height: 100%;
  width: 1.44rem;
  margin-top: 18px;
  border-right: 1px solid #0000000a;
}
.gift-left li {
  margin-top: 0.6rem;
  display: block;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9c9eb9;
  line-height: 0.36rem;
}
</style>