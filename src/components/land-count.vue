<template>
  <div class="vft">
    <div class="vft-top">
      <img :src="imgs" />
    </div>
    <p class="item">这里是sloganXXXXXXXXXXXXXX</p>
    <ul class="text-box">
      <li class="text-box-count">
        <input type="text"  v-model="password_one">
      </li>
      <li class="text-box-count">
        <input type="text"  v-model="password_two"/>
      </li>
      <li class="text-box-count">
        <input type="text"  v-model="password_three"/>
      </li>
      <li class="text-box-count">
        <input type="text"  v-model="password_four"/>
      </li>
    </ul>
    <button @click="add()">22</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require("../assets/liwu.png"),
      eliminate: require("../assets/qinchu.png"),
      password_one:"",
      password_two:"",
      password_three:"",
      password_four:"",
    };
  },
  mounted() {},
  methods: {
    add(){
      console.log(this.password_one)
      console.log(this.password_two)
      console.log(this.password_three)
      console.log(this.password_four)
      // console.log(this.password)
    }
  },
  props: {
    password: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style  scoped>
.vft-top {
  width: 2.58rem;
  margin: auto;
  /* margin-top: 2.68rem; */
  padding-top: 2.68rem;
}
.vft-top img {
  width: 2.58rem;
  height: 0.78rem;
}
.item {
  width: 5.34rem;
  height: 0.44rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.44rem;
  letter-spacing: 0.02rem;
  margin-left: 1.12rem;
  margin-top: 0.44rem;
}
.text-box {
  width: 5.66rem;
  height: 1.2rem;
  margin: 1.2rem 0 0 0.58rem;
  display: flex;
}
.text-box-count {
  width: 1.16rem;
  height: 1.2rem;
  background: #ffffff;
  box-shadow: 0px 0.2rem 0.4rem 0rem rgba(64, 117, 205, 0.08);
  border-radius: 0.32rem;
  margin-left: 0.34rem;
}
.text-box-count input {
  width: 0.36rem;
  height: 1.2rem;
  border-radius: 0.32rem;
  outline: none;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  color: aqua;
}
</style>