<template>
  <div class="bottonbox">
    <ul>
      <li
        v-for="(item, index) in this.msg"
        :key="index"
        :class="colorList[index]"
        @click="Jump(item.url, index)"
      >
        <img :src="list==index?item.Image:item.spare" />
        <span>{{ item.page }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: [
        {
         spare : require("../assets/shouye.png"),
          page: "首页",
          url: "/#",
          active: false,
          Image: require("../assets/xuabzhongshouye.png"),
        },
        {
          spare: require("../assets/jiaoyi.png"),
          page: "交易",
          url: "/proportion",
          active: false,
          Image: require("../assets/xuanzhongjiaoyi.png"),
        },
        {
          spare: require("../assets/tianjia.png"),
          url: "/history",
           Image:  require("../assets/tianjia.png"),
        },
        {
          spare: require("../assets/fenhong.png"),
          page: "分红",
          url: "/income",
          active: false,
          Image: require("../assets/xuanzhongfenghong.png"),
        },
        {
          spare: require("../assets/wode.png"),
          page: "我的",
          url: "/my",
          active: false,
          Image: require("../assets/xuanzhongwode.png"),
        },
      ],
      colorList: ["color1", "color2", "color3", "color4", "color5"],
    };
  },
  methods: {
    Jump(e, ) {
      this.$router.push(e);
    },
  },
  props:{
    list:{
        type: Number,
        default:0
    }
  }
};
</script>

<style scoped>
.bottonbox ul {
  display: flex;
  margin: 0;
  padding: 0;
  height: 100%;
}

.bottonbox ul li {
  margin-top: 0.12rem;
  flex: 15%;
  height: 0.84rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.22rem;
}

.bottonbox ul li span {
  margin-top: 0.12rem;
  width: 0.6rem;
  height: 0.32rem;
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 0.32rem;
  text-align: center;
}

.color1,
.color2,
.color4,
.color5,
img {
  width: 0.4rem;
  height: 0.4rem;
}

.color3 img {
  width: 2.36rem;
  height: 2.36rem;
}

.color1,
.color2,
.color5 {
  margin-left: 3.03px;
}

.color4 {
  margin-left: 3.03px;
}

.color3 {
  margin-left: 0.28rem;
}
</style>
