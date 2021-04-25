<template>
  <div>
    <div class="serup">
      <img :src="msg" @click="back" />
      <p>设置</p>
    </div>
    <div class="serup-top">
      <p>头像</p>
      <img :src="imgs" />
    </div>
    <div class="serup-count">
      <p>昵称</p>
      <img :src="imasg" />
    </div>
    <div class="serup-count">
      <p>手机号</p>
      <img :src="imasg" />
    </div>
    <div class="serup-count" @click="communication">
      <p>填写社交信息</p>
      <img :src="imasg" />
    </div>
    <div class="start-up">
      <p>开启音效</p>
      <div class="frame" :style="color">
        <div class="circular" :style="aee" @click="arr"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: {
        background: "#fff",
      },
      msg: require("../assets/heifanhui.png"),
      imgs: require("../assets/gougou.png"),
      imasg: require("../assets/daohang.png"),
      see: 1,
      aee: {
        left: "0",
        transition: "1s",
      },
    };
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    arr() {
      if (this.see == 1) {
        this.aee = {
            background: "#fff",
          transition: "1s",
          left: "20px",
        };
        this.see = 2;
        this.color = {
          background: "#000",
          transition: "1s",
        };
      } else {
        this.aee = {
          left: "0",
          transition: "1s",
        };
        this.see = 1;
         this.color = {
          background: "#fff",
          transition: "1s",
        };
      }
    },
    communication(){
      this.$router.push("/communication")
    }
  },
};
</script>

<style  scoped>
.serup {
  display: flex;
}
.serup img {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.3rem;
  margin-left: 0.68rem;
}
.serup p {
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.5rem;
  margin-left: 2.32rem;
  margin-top: 0.26rem;
}
.serup-top {
  display: flex;
  margin-top: 0.4rem;
}
.serup-top img {
  width: 1rem;
  height: 1rem;
  margin-left: 4.48rem;
}
.serup-top p {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.44rem;
  margin-top: 0.26rem;
  margin-left: 0.68rem;
}
.serup-count {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.2rem;
}
.serup-count img {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.28rem;
  margin-right: 0.68rem;
  border: 0.02rem dashed #000;
  margin-bottom: 0.32rem;
}
.serup-count p {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.44rem;
  margin-top: 0.26rem;
  margin-left: 0.68rem;
}
.start-up {
  margin-top: 0.42rem;
  display: flex;
}
.start-up p {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.44rem;
  margin-left: 0.68rem;
}
.frame {
  margin-left: 3.96rem;
  width: 0.88rem;
  height: 0.48rem;
  background: #ffffff;
  border-radius: 0.3rem;
  border: 0.02rem solid #2d3142;
  position: relative;
}
.circular {
  position: absolute;
  width: 0.44rem;
  height: 0.44rem;
  margin: 0.02rem;
  background: #2d3142;
  border-radius: 0.4rem;
  transform: 1s;
}
</style>
