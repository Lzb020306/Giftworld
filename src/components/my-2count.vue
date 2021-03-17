/* eslint-disable vue/valid-v-bind */
<template>
  <div>
    <div class="myTop">
      <img :src="imgs" />
      <div class="myTopCount">
        <h2>游客007</h2>
        <p>
          <i>Lv.1</i>
          <span>注册/登陆</span>
        </p>
      </div>
      <p class="myLogo">
        <img :src="imges" />
      </p>
      <span class="myImg">
        <img :src="imgrs" />
      </span>
    </div>
    <div class="myDalancePanel" :style="setBackground">
      <div class="myDalancePanel-top">
        <p>
          <i>我的余额</i>
          <span>0</span>
        </p>
        <button>提现</button>
      </div>
      <div class="myDalancePanel-bottom">
        <p>
          <i>金币</i>
          <span>0</span>
        </p>
        <p class="Diamonds">
          <i>钻石</i>
          <span>0</span>
        </p>
        <button>兑换现金</button>
      </div>
      <h2>1000金币=1钻石=1元</h2>
    </div>
    <div class="myList">
      <ul>
        <li v-for="(item, index) in ranking" :key="index">
          <img :src="item.logo" />
          <span>{{ item.title }}</span>
          <p>
            <img :src="item.Icon" />
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ranking: [],
      imgs: require("../assets/tou.png"),
      imges: require("../assets/erweima.png"),
      imgrs: require("../assets/shezhi.png"),
      setBackground: {
        backgroundImage: "url(" + require("../assets/yuebeijing.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
    };
  },
  mounted() {
    this.$axios
      .get("./my.json")
      .then((response) => {
        console.log(response.data);
        this.ranking = response.data;
        this.ranking.forEach((i) => {
          console.log(i);
          i.logo = require("@/assets/" + i.logo);
          i.Icon = require("@/assets/" + i.Icon);
        });
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
.myTop {
  display: flex;
  margin-left: 0.58rem;
  margin-top: 0.64rem;
}
.myTop img {
  width: 1rem;
  height: 1rem;
}
.myImg {
  margin-left: 0.6rem;
  margin-top: 0.26rem;
}
.myLogo {
  margin-left: 1.42rem;
  margin-top: 0.26rem;
}

.myLogo img {
  display: block;
  width: 0.48rem;
  height: 0.48rem;
}
.myImg img {
  display: block;
  width: 0.48rem;
  height: 0.48rem;
}
.myTopCount {
  display: flex;
  flex-direction: column;
  margin-left: 0.32rem;
}
.myTopCount h2 {
  width: 1.62rem;
  height: 0.56rem;
  font-size: 0.4rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.56rem;
  letter-spacing: 0.02rem;
}
.myTopCount p {
  height: 0.36rem;
  display: flex;
  margin-top: 0.12rem;
}
.myTopCount p i {
  display: block;
  width: 0.72rem;
  height: 0.32rem;
  background: #2bb5fe;
  border-radius: 4px;
  font-size: 0.2rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.28rem;
  text-align: center;
  font-style: normal;
}
.myTopCount p span {
  display: block;
  width: 1.28rem;
  height: 0.32rem;
  background: #2bb5fe;
  border-radius: 0.08rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.28rem;
  text-align: center;
  margin-left: 0.1rem;
}
.myDalancePanel {
  width: 6.38rem;
  height: 3.4rem;
  margin-left: 0.56rem;
  margin-top: 0.6rem;
}
.myList {
  margin-top: 0.54rem;
}
.myList ul li span {
  width: 1.64rem;
  height: 0.44rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.44rem;
  margin-top: 0.26rem;
  margin-left: 0.44rem;
}
.myList ul li img {
  margin-top: 0.28rem;
  margin-left: 0.68rem;
}
.myList ul li p {
  margin-left: 3.26rem;
}
.myList ul li p img {
  margin: 0;
}
.myDalancePanel-top {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 10px 16px 0 20px;
}
.myDalancePanel-bottom {
  display: flex;
  padding: 10px 0 0 20px;
  outline: none;
}
.myDalancePanel-top p {
  flex: 50%;
  display: flex;
  flex-flow: column;
}
.myDalancePanel-bottom p {
  width: 30px;
}
.myDalancePanel-top p i,
.myDalancePanel-bottom p i {
  display: block;
  width: 0.98rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.34rem;
  font-style: normal;
}
.myDalancePanel-top p span,
.myDalancePanel-bottom p span {
  display: block;
  width: 0.28rem;
  height: 0.72rem;
  font-size: 0.6rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  color: #ffffff;
  line-height: 0.72rem;
}
.myDalancePanel-top button {
  display: block;
  width: 1.52rem;
  height: 0.76rem;
  background-color: #ffffff;
  border-radius: 0.4rem;
  font-weight: 500;
  color: #5d9dc5;
  font-size: 0.28rem;
  border: 0;
  outline: none;
  margin-top: 0.26rem;
}
.myDalancePanel-bottom button {
  background-color: #4982a7;
  display: block;
  width: 1.2rem;
  height: 0.4rem;
  border-radius: 0.4rem 0.4rem 0.4rem 0;
  font-size: 0.24rem;
  /* font-family: PingFangSC-Regular, PingFang SC; */
  font-weight: 400;
  color: #ffffff;
  line-height: 0.34rem;
  margin-left: 0.12rem;
  outline: none;
}
.Diamonds {
  margin-left: 1.5rem;
}
.myDalancePanel h2 {
  width: 2.5rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.34rem;
  margin-top: 0.34rem;
  margin-left: 0.4rem;
}
</style>