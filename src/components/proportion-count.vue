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
  margin-top: 8px;
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
    width: 42px;
    height: 21px;
    position: absolute;
    top: 6px;
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
  width: 24px;
  height: 24px;
  margin: 32px 0 0 4px;
}
.count-box-bottom-contentr p {
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #4c5980;
  line-height: 22px;
  margin: 33px 0 0 8px;
}
.count-box-bottom-contentr button {
  width: 60px;
  height: 28px;
  background-color: #fda9b2;
  border-radius: 8px;
  /* opacity: 0.2; */
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #f15867;
  line-height: 18px;
  margin-left: 74px;
  margin-top: 30px;
}
</style>