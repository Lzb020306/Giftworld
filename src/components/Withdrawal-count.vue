<template>
  <div class="Withdrawal">
    <div class="Withdrawal-top">
      <img :src="imgs" />
      <p>提现</p>
      <button>明细</button>
    </div>
    <div class="Withdrawal-balance">
      <p>我的余额</p>
      <div class="balance-count">
        <img :src="money" />
        <h1>50.56</h1>
      </div>
    </div>
    <div class="Withdrawal-box">
      <div class="box-top">
        <h1>提现方式</h1>
        <div class="mode">
          <img :src="WeChat" />
          <p>微信</p>
        </div>
        <div class="call">
          <img :src="Photo" />
          <p>用户昵称</p>
          <h2>已绑定 <img :src="turn" /></h2>
        </div>
      </div>
      <div class="box-price">
        <div class="price-top">
          <h1>提现金额</h1>
          <p>提现手续费3%</p>
        </div>
        <ul>
          <li
            @click="Touch(index)"
            v-for="(item, index) in UnitPrice"
            :key="index"
            :style="{
              color: item.active ? '#fff' : '#000',
              background: item.active ? '#3ACC65' : '#F4F4F4',
            }"
          >
            <h3>{{ item.Price }}</h3>
            <p>{{ item.Company }}</p>
          </li>
        </ul>
      </div>
      <div class="box-careful">
        <h2>注意事项</h2>
        <p>
          1、提现将在2个工作日内审核到账，节假日时间不处理审批
          2、提现手续费为提现金额的3%，最低0.1元；首次提现免费
        </p>
      </div>
      <button>立刻提现</button>
    </div>
    <div class="cover">
      
    </div>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      imgs: require("../assets/fanhui.png"),
      money: require("../assets/rmb.png"),
      WeChat: require("../assets/weixin.png"),
      Photo: require("../assets/gougou.png"),
      turn: require("../assets/daohang.png"),
      UnitPrice: [
        {
          Price: "20",
          Company: "元",
          active: true,
        },
        {
          Price: "50",
          Company: "元",
          active: false,
        },
        {
          Price: "100",
          Company: "元",
          active: false,
        },
        {
          Price: "200",
          Company: "元",
          active: false,
        },
        {
          Price: "300",
          Company: "元",
          active: false,
        },
        {
          Price: "500",
          Company: "元",
          active: false,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    Touch(e) {
      this.UnitPrice.map((item) => {
        item.active = false;
      });
      this.UnitPrice[e].active = true;
    },
  },
  components: {},
};
</script>

<style >
.Withdrawal {
  width: 375px;
  height: 812px;
  background: #2bb5fe;
}
.Withdrawal-top {
  display: flex;
}
.Withdrawal-top img {
  width: 20px;
  height: 20px;
  margin-top: 0.3rem;
  margin-left: 0.68rem;
}
.Withdrawal-top p {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.5rem;
  margin-top: 0.26rem;
  margin-left: 2.32rem;
}
.Withdrawal-top button {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.4rem;
  outline: none;
  background-color: transparent;
  margin-top: 0.3rem;
  margin-left: 2.24rem;
}
.Withdrawal-balance {
  margin-top: 0.46rem;
}
.Withdrawal-balance p {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.34rem;
  margin-left: 3.3rem;
}
.balance-count {
  display: flex;
}
.balance-count img {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 2.48rem;
  margin-top: 0.4rem;
}
.balance-count h1 {
  font-size: 0.8rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  color: #ffffff;
  line-height: 0.96rem;
}
.Withdrawal-box {
  overflow: hidden;
  width: 7.5rem;
  height: 13.36rem;
  background: #ffffff;
  box-shadow: 0rem 10px 30px 0px rgba(112, 136, 210, 0.1);
  border-radius: 0.6rem 30px 0px 0px;
  margin-top: 0.36rem;
}
.mode {
  width: 2rem;
  height: 0.88rem;
  background: #3acc65;
  border-radius: 0.2rem;
  display: flex;
  margin-left: 0.56rem;
  margin-top: 0.24rem;
}
.box-top {
  margin-top: 0.68rem;
}
.box-top h1 {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.5rem;
  margin-left: 0.56rem;
}
.mode img {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.24rem;
  margin-left: 0.42rem;
}
.mode p {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.4rem;
  margin-top: 0.24rem;
  margin-left: 0.18rem;
}
.call {
  display: flex;
  margin-left: 0.56rem;
  margin-top: 0.24rem;
}
.call img {
  width: 30px;
  height: 30px;
}
.call p {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 0.34rem;
  margin-top: 0.14rem;
  margin-left: 0.16rem;
}
.call h2 {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 0.6rem;
  display: flex;
  margin-left: 3.54rem;
}
.box-price {
  margin-top: 0.6rem;
}
.price-top {
  display: flex;
}
.price-top h1 {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.5rem;
  margin-left: 0.56rem;
}
.price-top p {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 0.34rem;
  margin-left: 3.36rem;
  margin-top: 0.12rem;
}
.box-price ul {
  width: 6.4rem;
  margin-left: 0.56rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.box-price ul li {
  width: 1.98rem;
  margin-top: 0.24rem;
  height: 1.06rem;
  border-radius: 0.2rem;
  background: #f4f4f4;
  color: #000;
}
.box-price ul li h3 {
  font-size: 0.48rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  /* color: #ffffff; */
  line-height: 0.58rem;
  margin-left: 0.5rem;
}
.box-price ul li p {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  /* color: #ffffff; */
  margin-left: 0.08rem;
  margin-top: 0.16rem;
}
.box-careful h2 {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  line-height: 0.5rem;
  margin-top: 0.6rem;
  margin-left: 0.56rem;
}
.box-careful p {
  width: 6.38rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.48rem;
  margin-top: 0.16rem;
  margin-left: 0.56rem;
}
.Withdrawal-box button {
  width: 5rem;
  height: 1.12rem;
  background: #2bb5fe;
  border-radius: 0.32rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.44rem;
  margin-top: 1.34rem;
  margin-left: 1.26rem;
  outline: none;
}
</style>