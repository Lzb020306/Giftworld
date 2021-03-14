<template>
  <div class="history">
    <div class="history-top">
      <img :src="retreat" />
      <p>发布历史</p>
    </div>
    <ul class="history-column">
      <li v-for="(item, index) in Navigation" :key="index">
        <p>{{ item }}</p>
      </li>
    </ul>
    <div class="history-conter" v-for="(item ,index) in ranking" :key="index">
      <div class="history-conter-top">
        <h2>{{item.name}}</h2>
        <p>{{item.state}}</p>
      </div>
      <div class="history-conter-middle">
        <img :src="item.picture" />
        <p>
          <span>下架倒计时:{{item.hour}}</span>
          <i>售价：{{item.Price}}</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      retreat: require("../assets/heifanhui.png"),
      Navigation: ["全部", "待审核", "发布成功", "交易成功"],
      ranking:[]
    };
  },
  mounted() {
       this.$axios
      .get("./history.json")
      .then((response) => {
        console.log(response.data);
        this.ranking = response.data;
        this.ranking.forEach((i) => {
            i.picture = require("@/assets/" + i.picture);
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
.history {
    height: 19.76rem;
  background-color: #e9eef7;
}
.history-top {
  display: flex;
  padding-top: 0.24rem;
  background-color: #fff;
}
.history-top img {
  margin-top: 0.3rem;
  margin-left: 0.68rem;
}
.history-top p {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #333333;
  line-height: 0.5rem;
  margin-top: 0.26rem;
  margin-left: 1.94rem;
  margin-bottom: 0.24rem;
}
.history-column {
  display: flex;
  height: 0.8rem;
  background-color: #fff;
}
.history-column li {
  margin-left: 23px;
}
.history-column li p {
  width: 1.26rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2bb5fe;
  line-height: 0.4rem;
  text-align: center;
}
.history-conter {
  width: 6.38rem;
  height: 2.42rem;
  background: #ffffff;
  box-shadow: 0px 0.4rem 0.4rem 0rem rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
  overflow: hidden;
  margin-left: 0.56rem;
  margin-top: 0.4rem;
}
.history-conter-top {
  width: 5.82rem;
  display: flex;
  margin-left: 0.28rem;
  border-bottom: 1px solid #f5f5f5;
}
.history-conter-top h2 {
  width: 169px;
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.44rem;
  margin-top: 0.28rem;
  margin-bottom: 6px;
}
.history-conter-top p {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2bb5fe;
  line-height: 0.34rem;
  margin-top: 0.34rem;
  margin-left: 1.7rem;
}
.history-conter-middle {
  margin-top: 0.28rem;
  display: flex;
}
.history-conter-middle img {
  width: 1rem;
  height: 1rem;
  margin-left: 0.28rem;
}
.history-conter-middle p span {
  width: 2.97rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.34rem;
  display: block;
  margin-top: 0.04rem;
  margin-left: 0.2rem;
}
.history-conter-middle p i {
    display: block;
  width: 1.5rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.34rem;
  font-style: inherit;
  margin-top: 0.16rem;
  margin-left: 0.2rem;
}
</style>
