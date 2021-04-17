<template>
  <div>
    <div class="content">
      <div class="content-top">
        <div class="top-left" @click="cle">
          <h2>今日人均分红</h2>
          <p>￥322.22</p>
        </div>
        <ul>
          <li v-for="(item, index) in list" :key="index" @click="back(item.url)">
            <img :src="item.img" />
          </li>
        </ul>
      </div>
      <div class="content-count">
        <img
          v-for="(item, index) in img"
          :key="index"
          :src="item.icon"
          :style="item.sty"
        />
      </div>
      <div class="content-box">
        <div class="box-left" @click="clac">
          <img src="../assets/tujian.png" />
          <p>图鉴</p>
        </div>
        <div class="box-count">
          <img src="../assets/anniu.png" style="width: 3rem; height: 1rem" />
          <img
            src="../assets/guangyun.png"
            style="width: 0.92rem; height: 0.92rem"
            class="guang"
          />
          <img
            src="../assets/shouzhi.png"
            style="width: 1.04rem; height: 1.04rem"
            class="shou"
          />
        </div>
        <div class="box-right" @click="liwu">
          <img src="../assets/li.png" />
          <p>礼物</p>
        </div>
      </div>
      <div class="menu">
        <h2>今日任务</h2>
        <div class="menu-box" v-for="(item, index) in this.msg" :key="index">
          <div class="menu-box-right">
            <p>
              <img :src="item.Image" />
              <span
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require("../assets/jinbi.png"),
      list: [
        {
          img: require("../assets/hongbaoyu.png"),
        },
        {
          img: require("../assets/paihang.png"),
          url:"/Ranking"
        },
        {
          img: require("../assets/wanwan.png"),
          
        },
      ],
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
      img: [
        {
          icon: require("../assets/reqiqiu.png"),
          sty: {
            marginLeft: "1.62rem",
            marginTop: "0.62rem",
            width: "3.34rem",
            height: "4.46rem",
          },
        },
        {
          icon: require("../assets/fengshan1.png"),
          sty: {
            position: "absolute",
            top: "4.72rem",
            left: "1.24rem",
            width: "0.82rem",
            height: "0.82rem",
          },
        },
        {
          icon: require("../assets/mugun2.png"),
          sty: {
            position: "absolute",
            top: "5.38rem",
            left: "1.58rem",
            width: "0.14rem",
            height: "0.56rem",
          },
        },
        {
          icon: require("../assets/fengshan3.png"),
          sty: {
            position: "absolute",
            top: "4.26rem",
            left: "5.9rem",
            width: "0.68rem",
            height: "0.66rem",
          },
        },
        {
          icon: require("../assets/mugun1.png"),
          sty: {
            position: "absolute",
            top: "4.8rem",
            left: "6.18rem",
            width: "0.12rem",
            height: "0.46rem",
          },
        },
        {
          icon: require("../assets/fengshan2.png"),
          sty: {
            position: "absolute",
            top: "4.36rem",
            left: "6.52rem",
            width: "0.38rem",
            height: "0.38rem",
          },
        },
        {
          icon: require("../assets/mugun3.png"),
          sty: {
            position: "absolute",
            top: "4.7rem",
            left: "6.68rem",
            width: "0.08rem",
            height: "0.34rem",
          },
        },
      ],
    };
  },
  mounted() {},
  methods: {
    back(e){
      this.$router.push(e)
    },
    clac(){
       this.$router.push("/illustrated")
    },
    liwu(){
      this.$router.push("/Warehouse")
     
    },
    cle(){
      this.$router.push("/envelopes")
      
    }

  },
};
</script>
<style scoped>
.content {
  margin: 0;
  padding: 0;
  width: 7.5rem;
  background-image: url(../assets/beijing.png);
  background-size: cover;
  overflow: hidden;
}
.menu {
  margin-top: 0.4rem;
  width: 6.78rem;
  height: 7.8rem;
  background: #fff;
  border-radius: 0.4rem;
  margin-left: 0.36rem;
  margin-bottom: 1.2rem;
}
.menu-box {
  display: flex;
  height: 0.94rem;
  margin-top: 20px;
}
.menu h2 {
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
  margin-left: 0.3rem;
}
.menu-box-left p {
  height: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: block;
  width: 1.44rem;
  height: 0.52rem;
  border-radius: 0.26rem;
  color: #fff;
  outline: none;
}
/* .. */
.top-left {
  overflow: hidden;
  width: 1.92rem;
  height: 0.84rem;
  background: #f25f4e;
  border-radius: 0.42rem;
  margin-left: 0.56rem;
}
.top-left h2 {
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.28rem;
  text-align: center;
  margin-top: 0.06rem;
}
.top-left p {
  font-size: 0.3rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.42rem;
  text-align: center;
}
.content-top {
  display: flex;
  margin-top: 1rem;
}
.content-top ul {
  display: flex;
  margin-left: 1rem;
}
.content-top ul li {
  margin-left: 0.28rem;
  list-style-type: none;
}
.content-top ul li img {
  width: 0.9rem;
  height: 1.06rem;
}
.content-count {
  height: 6.5rem;

  margin-top: 1.04rem;
  position: relative;
}
.content-box {
  width: 6.78rem;
  height: 0.96rem;
  background: rgba(255, 255, 255, 0.84);
  border-radius: 0.4rem;
  margin-left: 0.36rem;
}
.content-box {
  display: flex;
}
.box-left {
  display: flex;
}
.box-left img {
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.08rem;
  margin-left: 0.22rem;
}
.box-left p {
  font-size: 0.28rem;
  font-family: Resource-Han-Rounded-CN-Medium, Resource-Han-Rounded-CN;
  font-weight: 500;
  color: #4c5980;
  line-height: 0.4rem;
  margin-top: 0.28rem;
}
.box-count {
  margin-left: 0.3rem;
  position: relative;
}
.guang {
  position: absolute;
  top: 0.36rem;
  left: 1.88rem;
}
.shou {
  position: absolute;
  top: 0.56rem;
  left: 2.2rem;
}
.box-right {
  display: flex;
  margin-left: 0.2rem;
}
.box-right img {
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.08rem;
}
.box-right p {
  font-size: 0.28rem;
  font-family: Resource-Han-Rounded-CN-Medium, Resource-Han-Rounded-CN;
  font-weight: 500;
  color: #4c5980;
  line-height: 0.4rem;
  margin-top: 0.28rem;
}
</style>