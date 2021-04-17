<template>
  <div class="box">
    <!-- <menyy></menyy> -->
    <button class="but"><img :src="this.butt" @click="ret" /></button>
    <img :src="this.imgs" class="logo" />
    <Rankin class="Rankin"></Rankin>
    <div class="bottom">
      <button class="invitation">邀请好友</button>
    </div>
  </div>
</template>


<script>
// import menyy from "../components/menu.vue";
import Rankin from "../components/RankingList.vue";
export default {
  data() {
    return {
      imgs: require("../assets/shijie.png"),
      butt: require("../assets/fanhui.png"),
    };
  },
  methods: {
    ret() {
      this.$router.go(-1);
    },
  },
  components: {
    // menyy
    Rankin,
  },
};
</script>

<style scoped>
.box {
  width: 375px;
  height: 812px;
  background: #2bb5fe;
}
.logo {
  width: 3.62rem;
  height: 0.8rem;
  position: absolute;
  top: 1.08rem;
  left: 2.08rem;
}
.Rankin {
  position: fixed;
  top: 2.64rem;
}
.but {
  width: 0.4rem;
  height: 0.4rem;
  background-color: transparent;
  position: absolute;
  top: 1.18rem;
  left: 0.68rem;
  border: 0;
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 7.5rem;
  height: 1.98rem;
  background: #f4f6fa;
  border-radius: 0.6rem 0.6rem 0rem 0rem;
}
.invitation {
  width: 5rem;
  height: 1.12rem;
  background: #2bb5fe;
  border-radius: 0.32rem;
  color:#ffffff;
  font-size: 0.32rem;
  margin-left: 1.26rem;
  outline: none;
}
</style>
