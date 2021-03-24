<template>
  <div>
    <count @Destruction="change"></count>
    <div class="Popup" v-if="starter">
      <div :style="setBackground" class="Popup-box">
        <h2>当前阶段总收入说明</h2>
        <div class="Popup-explain">
          <h3>
            1、邀请总收入来源于好友活跃收益。好友活跃根据徒弟，徒孙的活跃市场，获得礼物，看视频贡献比例，邀请人数等因素综合计算。
          </h3>
          <p>2、徒弟，徒孙越多，每天坐享收益越高： 1个徒弟=2个徒孙</p>
        </div>
        <button @click="load">确认</button>
      </div>
    </div>
    <div class="Popup">
      <div class="PopupBox">
        <div class="PopupTop">
          <img :src="imgs" />
          <div>
            <p>师傅昵称</p>
            <h1>Lv:3</h1>
          </div>
        </div>
        <img :src="image" class="PopupImg" />
        <div class="PopupCount">
          <h1>我的邀请人</h1>
          <div class="contact">
            <div class="mark">
              <img :src="Icon" />
              <p></p>
              <span>123456789</span>
            </div>
            <button>复制</button>
          </div>
          <div class="contact">
            <div class="mark">
              <img :src="icon" />
              <p></p>
              <span>123456789</span>
            </div>
            <button>复制</button>
          </div>
          <p class="setting">我也要设置社交信息 <img :src="enter" /></p>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import count from "../components/invitation-count";
export default {
  data() {
    return {
      starter: false,
      imgs: require("../assets/gougou.png"),
      image: require("../assets/bolang.png"),
      icon: require("../assets/qq.png"),
      Icon: require("../assets/wx.png"),
      enter: require("../assets/daohang.png"),
      setBackground: {
        backgroundImage: "url(" + require("../assets/bianzu.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
    };
  },
  mounted() {},
  methods: {
    load() {
      this.starter = false;
    },
    change() {
      console.log(1);
      this.starter = true;
    },
  },
  components: {
    count,
  },
};
</script>
<style  scoped>
.Popup {
  width: 375px;
  height: 16.2rem;
  background-color: rgba(88, 87, 86, 0.6);
  position: absolute;
  top: 0;
}
.Popup-box {
  width: 7.5rem;
  height: 9rem;
  margin-top: 3.4rem;
  overflow: hidden;
}
.Popup-box h2 {
  font-size: 0.4rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.56rem;
  margin-left: 1.96rem;
  margin-top: 0.4rem;
}
.Popup-explain {
  margin-top: 1.06rem;
  margin-left: 1.12rem;
  width: 5.26rem;
}
.Popup-explain h3,
p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 24px;
}
.Popup-explain p {
  margin-top: 15px;
}
.Popup-box button {
  width: 219px;
  height: 56px;
  background: #2bb5fe;
  border-radius: 16px;
  color: #fff;
  font-size: 0.32rem;
  margin-left: 1.56rem;
  margin-top: 0.7rem;
  outline: none;
}
.PopupBox {
  margin-top: 3.4rem;
  width: 6.36rem;
  margin-left: 0.58rem;
  position: relative;
}
.PopupTop {
  display: flex;
  height: 2.46rem;
  background-color: #89c5f7;
  border-radius: 0.4rem 20px 0 0;
}
.PopupTop img {
  height: 1.2rem;
  width: 1.2rem;
  margin-top: 0.72rem;
  margin-left: 0.54rem;
}
.PopupTop div {
  margin-top: 0.76rem;
  margin-left: 0.28rem;
  width: 2rem;
  height: 0.56rem;
}
.PopupTop div p {
  font-size: 0.4rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.56rem;
}
.PopupTop div h1 {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.5rem;
  margin-top: 0.06rem;
}
.PopupImg {
  width: 6.36rem;
  height: 0.74rem;
  z-index: 999;
  position: absolute;
  top: 2.2rem;
}
.PopupCount {
  height: 5rem;
  background-color: #fff;
  margin-top: 0.4rem;
  border-radius: 0 0 0.4rem 0.4rem;
}
.PopupCount h1 {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.5rem;
  margin-left: 0.54rem;
}
.mark {
  width: 3.4rem;
  height: 0.8rem;
  background: #f4f6fa;
  border-radius: 0.24rem;
  display: flex;
}
.mark img {
  width: 0.36rem;
  height: 0.36rem;
  margin: 0.22rem 0.24rem 0.22rem 0.24rem;
}
.mark p {
  width: 0.02rem;
  height: 0.4rem;
  background-color: #979797;
  margin-top: 0.2rem;
}
.mark span {
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.36rem;
  margin-left: 0.22rem;
  margin-top: 0.22rem;
}
.contact {
  display: flex;
  margin-left: 0.54rem;
  margin-top: 0.44rem;
}
.contact button {
  margin-left: 0.16rem;
  width: 1.7rem;
  height: 0.8rem;
  background: #d7edfa;
  border-radius: 0.24rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2bb5fe;
  line-height: 0.44rem;
  outline: none;
}
.setting {
  margin-top: 1.26rem;
  margin-left: 1.82rem;
  display: flex;
}
</style>