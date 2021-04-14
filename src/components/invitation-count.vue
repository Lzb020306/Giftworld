<template>
  <div class="count">
    <div class="invitation-top">
      <img :src="imgs" @click="back" />
      <p>我的邀请码</p>
      <button @click="pupil">我的师傅</button>
    </div>
    <p class="code" @click="Press">783166</p>
    <button class="invitation-but" @click="disappear">邀请好友</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require("../assets/heifanhui.png"),
    };
  },
  mounted() {},
  methods: {
    Press() {
      this.$emit("Destruction", `关闭弹窗`);
    },
    pupil() {
      console.log(1);
      this.$emit("into", `关闭`);
    },
    disappear() {
      this.$emit("loading", `关闭`);
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style  scoped>
.count {
  width: 7.5rem;
  height: 16.2rem;
}
.invitation-top {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.invitation-top img {
  width: 0.6rem;
  height: 0.6rem;
  margin-top: 0.3rem;
}
.invitation-top p {
  font-size: 0.4rem;
  font-weight: 600;
  margin-top: 0.3rem;
}
.invitation-top button {
  background: #ffff;
  margin-top: 0.2rem;
  outline: none;
}
.code {
  font-weight: 600;
  text-align: center;
  margin-top: 0.4rem;
}
.invitation-but {
  width: 6.4rem;
  height: 1.12rem;
  border-radius: 0.52rem;
  background-color: #2bb5fe;
  color: #fff;
  font-size: 0.3rem;
  position: absolute;
  left: 0.56rem;
  bottom: 0.6rem;
  outline: none;
}
</style>