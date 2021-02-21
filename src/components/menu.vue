<template>
  <div class="menu">
    <h2>今日任务</h2>
    <div class="menu-box" v-for="(item, index) in this.msg" :key="index">
      <div class="menu-box-right">
        <p>
          <img :src="item.Image" />
          <span style="color: #ffffff"
            >{{ item.page }}<i>{{ item.describe }}</i></span
          >
        </p>
      </div>
      <div class="menu-box-left">
        <p>
          <span>
            {{ item.number }}
          </span>
          <img :src="imgs" />
        </p>
        <button :style="{ background: item.color }">{{ item.but }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: [
        {
          Image: require("../assets/qiandao.png"),
          page: "登陆奖励",
          number: "+100",
          but: "立即领取",
          color: " linear-gradient(90deg, #ff855b 0%, #fe6563 100%)",
        },
        {
          Image: require("../assets/hecheng.png"),
          page: "收获3个礼物",
          number: "+300",
          but: "已完成",
          color: " #C9C9C9",
        },
        {
          Image: require("../assets/shiping.png"),
          page: "观看激励视频",
          describe: "(1/10)",
          number: "+500",
          but: "去完成",
          color: "linear-gradient(90deg, #32C5FF 0%, #2BB5FE 100%)",
        },
        {
          Image: require("../assets/shiwan.png"),
          page: "当日试玩",
          describe: "(1/3)",
          but: "去完成",
          color: "linear-gradient(90deg, #32C5FF 0%, #2BB5FE 100%)",
          
        },
        {
          Image: require("../assets/weixing.png"),
          page: "绑定微信",
          number: "+500",
          but: "去完成",
          color: "linear-gradient(90deg, #32C5FF 0%, #2BB5FE 100%)",
        },
      ],
      imgs: require("../assets/jinbi.png"),
    };
  },
  methods: {},
};
</script>

<style  scoped>
.menu {
  width: 6.78rem;
  height: 7.8rem;
  background: #000000;
  border-radius: 0.4rem;
}
.menu-box {
  display: flex;
}
.menu h2 {
  color: #fff;
  padding-top: 0.36rem;
  padding-left: 0.32rem;
  width: 1.14rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 0.4rem;
  margin-bottom: -0.12rem;
}
.menu-box-right p {
  height: 1rem;
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
}
.menu-box-right p img {
  width: 0.84rem;
  height: 0.84rem;
  margin-left: 0.32rem;
}
.menu-box-right p span {
  width: 3.28rem;
  height: 0.44rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.44rem;
  margin-left: 0.24rem;
}
.menu-box-right p i {
  font-style: initial;
  width: 1.16rem;
  height: 0.44rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.44rem;
}
.menu-box-left {
  margin-left: 0.6rem;
}
.menu-box-left p {
  height: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.4rem;
}
.menu-box-left span {
  width: 0.56rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ec5942;
  line-height: 0.34rem;
}
.menu-box-left img {
  margin-left: 0.04rem;
  width: 0.4rem;
  height: 0.4rem;
}
.menu-box-left button {
  width: 1.44rem;
  height: 0.52rem;
  border-radius: 0.26rem;
  color: #fff;
}
</style>