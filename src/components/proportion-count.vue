<template>
  <div>
    <div class="count-box" v-for="(item, index) in ranking" :key="index">
      <img :src="item.Icon" class="icon" />
      <img :src="item.my" class="my" />
      <div class="count-box-bottom">
        <h2>{{ item.title }}</h2>
        <div class="count-box-bottom-contentr">
          <img :src="item.currency" />
          <p>{{ item.number }}</p>
          <button>{{ item.state }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ranking: [],
      imgs: require("../assets/fenzhen.png"),
      imga: require("../assets/huobi.png"),
    };
  },
  mounted() {
    this.$axios
      .get("./checking.json")
      .then((response) => {
        console.log(response.data);
        this.ranking = response.data;
        this.ranking.forEach((i) => {
          console.log(i);
          if (i.my == undefined) {
            i.Icon = require("@/assets/" + i.Icon);
            i.currency = require("@/assets/" + i.currency);
          } else {
            i.Icon = require("@/assets/" + i.Icon);
            i.currency = require("@/assets/" + i.currency);
            i.my = require("@/assets/" + i.my);
          }
        });
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
.count-box {
  margin-top: 0.16rem;
  width: 6.38rem;
  height: 2rem;
  background: #ffffff;
  box-shadow: 0px 0.4rem 0.4rem 0px rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
  display: flex;
  position: relative;
}
.icon {
  height: 1.6rem;
  width: 1.6rem;
  margin: 0.2rem;
}
.my{
    width: 0.84rem;
    height: 0.42rem;
    position: absolute;
    top: 0.12rem;
}
.count-box h2 {
  flex: 100%;
  width: 2.74rem;
  height: 0.44rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.44rem;
  margin-left: 0.08rem;
  margin-top: 0.2rem;
}
.count-box-bottom {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.count-box-bottom-contentr {
  display: flex;
}
.count-box-bottom-contentr img {
  width: 0.48rem;
  height: 0.48rem;
  margin: 0.64rem 0 0 0.08rem;
}
.count-box-bottom-contentr p {
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #4c5980;
  line-height: 0.44rem;
  margin: 33px 0 0 0.16rem;
}
.count-box-bottom-contentr button {
  width: 1.2rem;
  height: 0.56rem;
  background-color: #fda9b2;
  border-radius: 0.16rem;
  /* opacity: 0.2; */
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #f15867;
  line-height: 0.36rem;
  margin-left: 1.48rem;
  margin-top: 0.6rem;
}
</style>