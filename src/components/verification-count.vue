<template>
  <div>
    <div class="vft-top">
      <img :src="imgs" />
    </div>
    <p class="item">这里是sloganXXXXXXXXXXXXXX</p>
    <div class="text-box">
      <p>+86</p>
      <input
        type="text"
        @keyup.enter="search"
        @input="search($event)"
        v-model="content"
      />
      <button v-if="disjunctor" @click="empty()">
        <img :src="eliminate" />
      </button>
    </div>
    <button class="verification" @click="verification()">{{ lite }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require("../assets/liwu.png"),
      eliminate: require("../assets/qinchu.png"),
      disjunctor: false,
      content: "",
      lite: "发送验证码",
    };
  },
  mounted() {},
  methods: {
    search: function (event) {
      console.log(event.target.value);
      //方法一：直接通过event.data可以获得文本内容
      if (event.target.value != "") {
        this.disjunctor = true;
        this.content = event.target.value;
      } else {
        this.disjunctor = false;
      }
    },
    empty() {
      this.content = "";
    },
    verification() {
      
      let thet=this
      let nub = 10;
      let add=setInterval(function () {
        nub--;
        console.log(nub)
        if (nub != 0) {
          console.log(this)
          thet.lite = nub+"秒";
        } else {
          clearInterval(add)
          thet.lite = "发送成功";
        }
      },1000);
      
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
  background: #ffffff;
  box-shadow: 0rem 0.2rem 0.4rem 0rem rgba(64, 117, 205, 0.08);
  border-radius: 0.32rem;
  margin: 1.2rem 0 0 0.92rem;
  display: flex;
}
.text-box p {
  width: 28px;
  height: 21px;
  font-size: 15px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 21px;
  padding: 0.4rem 0 0 0.48rem;
}
.text-box input {
  margin-left: 40px;
  width: 97px;
  font-size: 15px;
  outline: none;
}
.text-box button {
  width: 0.4rem;
  height: 0.4rem;
  background-color: transparent;
  margin-top: 0.42rem;
  margin-left: 1rem;
  outline: none;
}
.verification {
  width: 5rem;
  height: 1.12rem;
  background: #2bb5fe;
  border-radius: 0.32rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.44rem;
  margin-left: 1.26rem;
  margin-top: 1.4rem;
  outline: none;
}
</style>