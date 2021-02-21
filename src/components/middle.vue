<template>
  <div class="box">
    <p v-for="(item, index) in this.msg" :key="index" :class="colorList[index]">
      <img :src="item.Image" />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: [
        {
          Image: require("../assets/reqiqiu.png"),
        },
        {
          Image: require("../assets/fengshan1.png"),
        },
        {
          Image: require("../assets/fengshan2.png"),
        },
        {
          Image: require("../assets/fengshan3.png"),
        },
        {
          Image: require("../assets/mugun2.png"),
        },
        {
          Image: require("../assets/mugun1.png"),
        },
        {
          Image: require("../assets/mugun3.png"),
        },
        {
          Image: require("../assets/yun1.png"),
        },
        {
          Image: require("../assets/yun2.png"),
        },
        {
          Image: require("../assets/yun3.png"),
        },
      ],
      colorList: [
        "colo1",
        "colo2",
        "colo3",
        "colo4",
        "colo5",
        "colo6",
        "colo7",
        "colo8",
        "colo9",
        "colo10",
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.colo1 img{
    width: 3.34rem;
    height: 223px;
}
.colo1{
    position: absolute;
    top: 3.66rem;
    left: 1.62rem;
}
.colo2 img{
    width: 0.82rem;
    height: 0.82rem;
}
.colo2{
    position: absolute;
    top: 7.76rem;
    left: 1.24rem;
}
.colo3 img{
    width: 0.68rem;
    height: 0.68rem;
}
.colo3{
    position: absolute;
    top: 7.3rem;
    left: 5.9rem;
}
.colo4 img{
    width: 0.38rem;
    height: 0.38rem;
}
.colo4{
    position: absolute;
    top: 7.4rem;
    left: 6.52rem;
}
.colo5 img{
    width: 0.14rem;
    height: 0.56rem;
}
.colo5{
    position: absolute;
    top: 8.36rem;
    left: 1.6rem;
}
.colo6 img{
    width: 0.12rem;
    height: 0.46rem;
}
.colo6{
    position: absolute;
    top: 7.78rem;
    left: 6.18rem;
}
.colo7 img{
    width: 0.08rem;
    height: 0.34rem;
}
.colo7{
    position: absolute;
    top: 7.7rem;
    left: 6.66rem;
}
.colo8 img{
    width: 1.12rem;
    height: 0.74rem;
}
.colo8{
    position: absolute;
    top: 4.18rem;
    left: 4.62rem;
}
.colo9 img{
    width: 1.1rem;
    height: 0.7rem;
}
.colo9{
    position: absolute;
    top: 4.64rem;
    left: 0.54rem;
}
.colo10 img{
    width: 1.3rem;
    height: 0.82rem;
}
.colo10{
    position: absolute;
    top: 3.04rem;
    left: 5.94rem;
}
</style>