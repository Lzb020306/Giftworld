<template>
  <div>
    <div class="wallet-top">
      <img :src="imgs" />
      <p>我的钱包</p>
    </div>
    <div class="wallet-choice">
      <p :style="gold" @click="golde">金币</p>
      <p :style="Diamonds" @click="Diamondse">钻石</p>
    </div>
    <div class="wallet-count">
      <div class="wallet-box">
        <div class="wallet-list" :style="lewf">
          <p>金币余额</p>
          <h1>1000</h1>
          <div class="wallet-inventory">
            <div class="inventory-left">
              <p>今日金币</p>
              <span>50</span>
            </div>
            <div class="inventory-right">
              <p>累积金币（截至昨日）</p>
              <span>950</span>
            </div>
          </div>
          <h3>1000金币=1钻石=1元</h3>
        </div>
        <div class="wallet-lists"></div>
      </div>
    </div>
    <div class="wallet-detailed">
      <div class="detailed-top">
        <div class="detailed-left"></div>
        <p>金币明细</p>
        <div class="detailed-right"></div>
      </div>
      <div class="detailed-list">
        <div class="list-top">
          <img :src="qiu" />
          <p>今日</p>
        </div>
        <ul>
          <li>
            <span>19:52:24</span>
            <p>开启签到提醒奖励</p>
            <h1><i>+50</i>金币</h1>
          </li>
           <li>
            <span>19:52:24</span>
            <p>开启签到提醒奖励</p>
            <h1><i>+50</i>金币</h1>
          </li>
           <li>
            <span>19:52:24</span>
            <p>开启签到提醒奖励</p>
            <h1><i>+50</i>金币</h1>
          </li>
           <li>
            <span>19:52:24</span>
            <p>开启签到提醒奖励</p>
            <h1><i>+50</i>金币</h1>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qiu: require("../assets/qiu.png"),
      imgs: require("../assets/heifanhui.png"),
      gold: {
        background: "#2BB5FE",
        color: "#fff",
      },
      Diamonds: "",
      lewf: {
        margin: "0",
      },
    };
  },
  mounted() {},
  methods: {
    golde() {
      if (this.gold == "") {
        this.gold = {
          background: "#2BB5FE",
          color: "#fff",
          transition: "1s",
        };
        this.Diamonds = "";
        this.lewf = {
          margin: "0 ",
          transition: "1s",
        };
      } else {
        this.gold = {
          background: "#2BB5FE",
          color: "#fff",
          transition: "1s",
        };
      }
    },
    Diamondse() {
      if (this.Diamonds == "") {
        this.Diamonds = {
          background: "#2BB5FE",
          color: "#fff",
          transition: "1s",
        };
        this.gold = "";
        this.lewf = {
          margin: "0 0 0 -340px",
          transition: "1s",
        };
      } else {
        this.Diamonds = {
          background: "#2BB5FE",
          color: "#fff",
          transition: "1s",
        };
      }
    },
  },
};
</script>

<style  scoped>
.wallet-top {
  display: flex;
}
.wallet-top img {
  margin: 0.3rem 0 0.3rem 0.68rem;
}
.wallet-top p {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.5rem;
  margin-top: 0.26rem;
  margin-left: 1.94rem;
}
.wallet-choice {
  width: 6.38rem;
  height: 0.8rem;
  background-color: #d7edfa;
  border-radius: 0.4rem;
  margin-left: 0.56rem;
  margin-top: 0.2rem;
  display: flex;
}
.wallet-choice p {
  flex: 50%;
  font-size: 0.28rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
}
.wallet-count {
  margin-top: 0.4rem;
  margin-left: 0.56rem;
}
.wallet-box {
  width: 1000px;
  display: flex;
}
.wallet-list {
  width: 6.38rem;
  height: 3.6rem;
  background: #ffffff;
  box-shadow: 0rem 10px 20px 0px rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
}
.wallet-lists {
  margin-left: 0.4rem;
  width: 6.38rem;
  height: 3.6rem;
  background: #ffffff;
  box-shadow: 0rem 10px 20px 0px rgba(64, 117, 205, 0.08);
  border-radius: 0.4rem;
}
.wallet-list p {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.34rem;
  margin-top: 0.2rem;
  margin-left: 0.4rem;
}
.wallet-list h1 {
  font-size: 0.6rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.72rem;
  margin-left: 0.36rem;
}
.wallet-inventory {
  width: 5.58rem;
  display: flex;
  margin-top: 0.6rem;
  margin-left: 0.4rem;
  border-bottom: 0.02rem solid #f5f5f5;
}
.wallet-inventory p {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.34rem;
  margin: 0;
}
.wallet-inventory span {
  font-size: 0.36rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.44rem;
  margin-bottom: 0.16rem;
}
.inventory-left,
.inventory-right {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
}
.inventory-right {
  margin-left: 1.02rem;
}
.wallet-list h3 {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 0.34rem;
  margin-left: 0.4rem;
  margin-top: 0.16rem;
}
.detailed-top p {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.44rem;
  margin-left: 0.14rem;
  margin-right: 0.14rem;
}
.wallet-detailed {
  margin-top: 0.8rem;
}
.detailed-top {
  display: flex;
}
.detailed-top .detailed-left,
.detailed-right {
  background-color: #b0b7c9;
  width: 0.34rem;
  height: 0.04rem;
  margin-top: 0.2rem;
}
.detailed-left {
  margin-left: 2.62rem;
}
.list-top p {
  font-size: 0.3rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.42rem;
  margin-left: 0.24rem;
}
.list-top img {
  width: 0.26rem;
  height: 0.26rem;
  margin-top: 0.06rem;
  margin-left: 0.56rem;
}
.list-top {
  display: flex;
  margin-top: 0.46rem;
}
.detailed-list ul li {
  display: flex;
}
.detailed-list ul li p {
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.36rem;
  margin-left: 0.4rem;
}
.detailed-list ul li span {
  font-size: 0.26rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #4c5980;
  line-height: 0.36rem;
  margin-left: 0.36rem;
}
.detailed-list ul li h1 {
  font-size: 0.26rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.36rem;
  margin-left: 1.28rem;
}
.detailed-list ul li h1 i {
  font-style: normal;
  font-size: 0.26rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fa6400;
  line-height: 0.36rem;
  margin-right: 0.08rem;
}
.detailed-list ul{
    margin-left: 0.68rem;
    border-left: 1px solid #ddd;
    overflow: hidden;
}
.detailed-list ul li{
    margin-top: 0.46rem;
}
</style>


