<template>
  <div>
    <div class="record-top">
      <img :src="imgs" />
      <p>邀请记录</p>
    </div>
    <ul :style="setBackground" class="record-option">
      <li>徒弟·12</li>
      <li>徒孙·10</li>
      <li>未激活</li>
    </ul>
    <div class="record-information" v-for="(item, index) in ranking" :key="index">
      <img :src="item.headPortrait" />
      <div class="personal">
        <h2>
          {{ item.name }} <span>{{ item.RealName }}</span>
        </h2>
        <p>
          {{ item.month }} <span>{{ item.time }}</span>
        </p>
      </div>
      <p class="level">{{ item.Grade }}</p>
      <div class="state"><img :src="item.state" /></div>
    </div>
    <div class="remind">
      <h1>*实名认证的</h1>
      <p>有效用户</p>
      <span>才能为您提供收入</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require("../assets/heifanhui.png"),
      setBackground: {
        backgroundImage: "url(" + require("../assets/juxin.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
      image: require("../assets/gougou.png"),
      state: require("../assets/zaixian.png"),
      ranking: [],
    };
  },
  mounted() {
    this.$axios
      .get("./apprentice.json")
      .then((response) => {
        console.log(response.data);
        this.ranking = response.data;
        this.ranking.forEach((i) => {
          console.log(i);
          i.headPortrait = require("@/assets/" + i.headPortrait);
          i.state = require("@/assets/" + i.state);
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
.record-top {
  display: flex;
}
.record-top img {
  margin-top: 0.3rem;
  margin-left: 0.68rem;
}
.record-top p {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.5rem;
  margin-top: 0.26rem;
  margin-left: 1.94rem;
  margin-bottom: 0.24rem;
}
.record-option {
  width: 6.38rem;
  height: 0.8rem;
  margin-left: 0.54rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* padding-left: 22px;
  padding-right: 22px; */
  margin-top: 0.2rem;
  margin-bottom: 0.4rem;
}
.record-option li {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #4c5980;
  line-height: 20px;
}
.record-information {
  position: relative;
  margin-top: 0.2rem;
  width: 6.38rem;
  height: 1.8rem;
  background: #ffffff;
  box-shadow: 0rem 10px 20px 0px rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
  margin-left: 0.56rem;
  display: flex;
}
.record-information img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
  margin-bottom: 0.3rem;
}
.personal {
  margin-top: 0.44rem;
  margin-left: 0.2rem;
}
.level {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
  margin-top: 0.44rem;
  margin-left: 1.44rem;
}
.personal h2 {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
}
.personal h2 span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 17px;
}
.personal p {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 0.34rem;
  margin-top: 0.16rem;
}
.personal p span {
  margin-left: 0.2rem;
}
.state {
  margin: 0;
  width: 0.32rem;
  height: 0.32rem;
  position: absolute;
  top: 0.4rem;
  left: 1.18rem;
}
.state img {
  margin: 0;
  width: 0.32rem;
  height: 0.32rem;
}
.remind {
  display: flex;
  position: fixed;
  bottom: 74px;
  left: 78px;
}
.remind h1 {
  font-size: 0.24rem;
  font-family: PingFangTC-Light, PingFangTC;
  font-weight: 300;
  color: #4c5980;
  line-height: 0.34rem;
}
.remind p {
  font-size: 0.24rem;
  font-family: PingFangTC-Light, PingFangTC;
  font-weight: 300;
  color: #ff1212;
  line-height: 0.34rem;
  margin-left: 0.04rem;
  margin-right: 0.04rem;
}
.remind span {
  font-size: 0.24rem;
  font-family: PingFangTC-Light, PingFangTC;
  font-weight: 300;
  color: #4c5980;
  line-height: 0.34rem;
}
</style>