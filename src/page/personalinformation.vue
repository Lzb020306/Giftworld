<template>
  <div>
    <count @Destruction="change" @into="ruin" @loading="appear"></count>
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
    <div class="Popup" v-if="teacher">
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
          <p class="setting" @click="Jump">
            我也要设置社交信息 <img :src="enter" />
          </p>
        </div>
      </div>
    </div>
    <div class="Popup" v-if="explain">
      <div :style="setBackground" class="Popup-box">
        <h2>当前阶段总收入说明</h2>
        <div class="Popup-explain">
          <h3>1、阶段目标达成后，资金将划入钱包中的余额，可提现。</h3>
          <p style="margin-top: 30px">
            2、所处的阶段越高，额外获得收益越多，单签收益=好友活跃收益*阶段倍率。
          </p>
        </div>
        <button @click="shut" style="margin-top: 83px">确认</button>
      </div>
    </div>
    <div class="Popup" v-if="my">
      <div class="Popup_box" :style="setBackgrounde">
        <div class="Popup_resume">
          <h1>我的邀请码：22334455</h1>
          <div class="resume_box">
            <img :src="imgs" class="head" />
            <div class="box_count">
              <p>Hi 我是xxx</p>
              <h2>一起来和我玩礼物世界吧</h2>
            </div>
            <img :src="Scan" class="Scan" />
          </div>
        </div>
      </div>
      <div class="bottom-box">
        <ul>
          <li v-for="(itrm, index) in lisi" :key="index">
            <img :src="itrm.imge" />
            <p>{{ itrm.name }}</p>
          </li>
        </ul>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import count from "../components/list";
export default {
  data() {
    return {
      starter: false,
      teacher: false,
      explain: false,
      my: false,
      imgs: require("../assets/gougou.png"),
      image: require("../assets/bolang.png"),
      icon: require("../assets/qq.png"),
      Icon: require("../assets/wx.png"),
      enter: require("../assets/daohang.png"),
      Scan: require("../assets/erweima.png"),
      setBackground: {
        backgroundImage: "url(" + require("../assets/bianzu.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
      setBackgrounde: {
        backgroundImage: "url(" + require("../assets/haoyou.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
      lisi: [
        {
          imge: require("../assets/dawx.png"),
          name: "微信",
        },
        {
          imge: require("../assets/dapyq.png"),
          name: "朋友圈",
        },
        {
          imge: require("../assets/daqq.png"),
          name: "QQ",
        },
      ],
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
    ruin() {
      console.log(1);
      this.teacher = true;
    },
    Jump() {
      this.teacher = false;
      this.explain = true;
    },
    shut() {
      this.explain = false;
    },
    appear() {
      this.my = true;
    },
    cancel() {
      this.my = false;
    },
  },
  components: {
    count,
  },
};
</script>
<style  scoped>
.Popup {
  width: 7.5rem;
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
  line-height: 0.4rem;
  display: flex;
}
.setting img {
  width: 0.4rem;
  height: 0.4rem;
}
.Popup_box {
  width: 5.3rem;
  height: 8rem;
  border-radius: 0.4rem;
  margin-top: 2.68rem;
  margin-left: 1.1rem;
  overflow: hidden;
}
.Popup_resume {
  width: 4.9rem;
  height: 1.64rem;
  background-color: #6fa9e0;
  overflow: hidden;
  margin-top: 6.2rem;
  margin-left: 0.2rem;
  border-radius: 0.4rem;
}
.Popup_resume h1 {
  font-size: 0.22rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.32rem;
  margin-top: 0.1rem;
  margin-left: 0.12rem;
}
.resume_box {
  margin-top: 0.28rem;
  display: flex;
}
.head {
  width: 0.76rem;
  height: 0.76rem;
  margin-left: 0.3rem;
}
.Scan {
  margin-left: 0.1rem;
  width: 0.79rem;
  height: 0.79rem;
}
.box_count {
  margin-left: 0.1rem;
}
.box_count p {
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.4rem;
}
.box_count h2 {
  font-size: 0.22rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.32rem;
  margin-top: 0.06rem;
}
.bottom-box {
  border-radius: 0;
  width: 7.5rem;
  height: 2.6rem;
  background: #f2f2f2;
  margin-top: 1.96rem;
}
.bottom-box ul {
  display: flex;
}
.bottom-box ul li img {
  width: 1.04rem;
  height: 1.04rem;
}
.bottom-box ul li {
  flex: 33%;
  margin-top: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center; /*由于flex-direction: column，因此align-items代表的是水平方向*/
  justify-content: center;
}
.bottom-box button {
  width: 7.5rem;
  height: 0.96rem;
  background: #ffffff;
  font-size: 0.3rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.42rem;
  outline: none;
}
</style>