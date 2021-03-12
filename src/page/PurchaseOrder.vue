<template>
  <div>
    <count @transmission="effect"></count>
    <div class="cover" v-if="open">
      <div class="remind">
        <img :src="remind" class="remind-logo" />
        <img :src="close" class="remind-close" @click="Destruction" />
        <p>是否确认出售</p>
        <button @click="destroy">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
import count from "../components/PurchaseOrder-count";
export default {
  data() {
    return {
      open: false,
      remind: require("../assets/goumai.png"),
      close: require("../assets/guanbi.png"),
    };
  },
  mounted() {},
  methods: {
    effect() {
      this.open = true;
    },
    destroy() {
      this.open = false;
      this.getTime();
    },
      Destruction() {
      this.open = false;
    },
    getTime() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      //以下代码依次是获取当前时间的年月日时分秒
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var minute = date.getMinutes();
      var hour = date.getHours();
      var second = date.getSeconds();
      //固定时间格式
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
      }
      if (minute >= 0 && minute <= 9) {
        minute = "0" + minute;
      }
      if (second >= 0 && second <= 9) {
        second = "0" + second;
      }
      var currentdate =
        year +
        seperator1 +
        month +
        seperator1 +
        strDate +
        " " +
        hour +
        seperator2 +
        minute +
        seperator2 +
        second;
      // console.log(currentdate);
      this.$router.push(`/OrderDetails?place=${currentdate}`)
    },
  },
  components: {
    count,
  },
};
</script>

<style  scoped>
.cover {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.remind {
  width: 6.38rem;
  height: 6.38rem;
  background: #2bb5fe;
  border-radius: 0.6rem;
  position: absolute;
  top: 3.4rem;
  left: 0.56rem;
}
.remind-logo {
  width: 3.56rem;
  height: 2.96rem;

  margin-left: 1.42rem;
  margin-top: -0.44rem;
}
.remind-close {
  position: absolute;
  left: 5.38rem;
  top: 0.52rem;
}
.remind p {
  width: 3.66rem;
  height: 0.84rem;
  font-size: 0.6rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.84rem;
  margin-top: 0.24rem;
  margin-left: 1.36rem;
}
.remind button {
  width: 4.38rem;
  height: 1.12rem;
  background: #ffffff;
  border-radius: 0.32rem;
  margin-top: 0.66rem;
  margin-left: 1rem;
  color: #2bb5fe;
  outline: none;
}
</style>