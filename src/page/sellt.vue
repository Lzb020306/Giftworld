<template>
  <div>
    <div class="sellt-top">
      <img :src="retreat" @click="back" />
      <button>发布</button>
    </div>
    <div class="sellt-count">
      <img :src="imgs" />
      <p>名称：X级XXX礼物</p>
    </div>
    <div class="sellt-Price">
      <div class="price-left">
        <img :src="imgas" />
        <p>价格</p>
      </div>
      <div class="price-right" @click="Selling">
        <p>{{ ate }}</p>
        <img :src="icon" />
      </div>
    </div>
    <div class="sellt-time">
      <div class="time-left">
        <img :src="iamge" />
        <p>下架时间</p>
      </div>
      <div class="time-right">
        <p>发布成功7日后自动下架</p>
      </div>
    </div>
    <div class="cover" v-if="cover">
      <div class="cover-top">
        <p>官方指导价：</p>
        <h2>30</h2>
        <img :src="iconn" />
      </div>
      <div class="Press">
        <p>价格</p>
        <img :src="iconn" />
        <h6></h6>
        <span>{{ price }}</span>
      </div>
      <div class="keyboard">
        <ul>
          <li v-for="(item, index) in list" :key="index" @click="write(index)">
            {{ item }}
          </li>
          <li @click="jianpan">
            <img src="../assets/jianpan.png" />
          </li>
        </ul>
        <div class="delete" @click="delet">
          <img src="../assets/shanchu.png" />
        </div>
        <button @click="sure">确认</button>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cover: false,
      price: "0.00",
      lisr: [],
      ate: "请输入出售价格",
      retreat: require("../assets/heifanhui.png"),
      imgs: require("../assets/gougou.png"),
      imgas: require("../assets/jiage.png"),
      iamge: require("../assets/shijian.png"),
      icon: require("../assets/daohang.png"),
      iconn: require("../assets/zuanshi.png"),
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0],
    };
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    write(e) {
      if (e == 10) {
        e = -1;
        let src = e + 1;
        this.lisr.push(src);
        this.price = this.lisr.join("");
      } else {
        let src = e + 1;
        this.lisr.push(src);
        this.price = this.lisr.join("");
      }
    },
    delet() {
      this.lisr.pop();
      this.price = this.lisr.join("");
    },
    sure() {
      (this.cover = false), (this.ate = this.price + `元`);
    },
    jianpan() {
      this.cover = false;
    },
    Selling() {
      this.cover = true;
    },
  },
};
</script>

<style  scoped>
.sellt-top {
  display: flex;
}
.sellt-top img {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 0.68rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.sellt-top button {
  width: 1.4rem;
  height: 0.6rem;
  background: #2bb5fe;
  border-radius: 0.32rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.44rem;
  margin-left: 4.46rem;
  margin-top: 0.2rem;
  outline: none;
}
.sellt-count {
  display: flex;
  margin-top: 0.4rem;
}
.sellt-count img {
  height: 2.6rem;
  width: 2.6rem;
  margin-left: 0.56rem;
}
.sellt-count p {
  font-size: 0.32rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.44rem;
  margin-left: 0.2rem;
  margin-top: 0.08rem;
}
.sellt-Price {
  width: 6.62rem;
  display: flex;
  margin-left: 0.56rem;
  margin-top: 1rem;
  border-bottom: 0.02rem solid #ddd;
  position: relative;
}
.sellt-time {
  width: 6.62rem;
  display: flex;
  margin-left: 0.56rem;
  margin-top: 0.44rem;
}
.price-left,
.price-right {
  display: flex;
}
.time-left,
.time-right {
  display: flex;
}
.time-left img {
  width: 0.4rem;
  height: 0.4rem;
}
.time-left p {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.4rem;
  margin-left: 0.2rem;
}
.time-right {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9c9eb9;
  line-height: 0.4rem;
  margin-left: 1.64rem;
}
.price-right {
  margin-left: 2.52rem;
}
.price-right img {
  position: absolute;
  right: 0.56rem;
  width: 0.4rem;
  height: 0.4rem;
  border: 1px dashed #000;
}
.price-left img {
  width: 0.4rem;
  height: 0.4rem;
  margin-bottom: 0.44rem;
}
.price-left p {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.4rem;
  margin-left: 0.2rem;
}
.price-right p {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9c9eb9;
  line-height: 0.4rem;
}
.cover {
  width: 7.5rem;
  height: 16.24rem;
  background-color: RGBA(127, 127, 127, 0.5);
  position: absolute;
  top: 0;
  left: 0;
}
.cover-top {
  width: 7.5rem;
  height: 1rem;
  background: #d7edfa;
  border-radius: 0.4rem 0.4rem 0px 0px;
  display: flex;
  margin-top: 9.12rem;
}
.cover-top p {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.4rem;
  margin-top: 0.36rem;
  margin-left: 0.56rem;
}
.cover-top h2 {
  font-size: 0.48rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.58rem;
  margin-left: 3.88rem;
  margin-top: 0.18rem;
}
.cover-top img {
  width: 0.28rem;
  height: 0.28rem;
  margin-left: 0.06rem;
  margin-top: 0.42rem;
}
.Press {
  width: 7.5rem;
  height: 1.2rem;
  background: #ffffff;
  display: flex;
}
.Press p {
  font-size: 0.32rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.44rem;
  margin-top: 0.38rem;
  margin-left: 0.56rem;
}
.Press img {
  width: 0.48rem;
  height: 0.48rem;
  margin-left: 0.5rem;
  margin-top: 0.38rem;
}
.Press h6 {
  width: 0.04rem;
  height: 0.44rem;
  background: #2bb5fe;
  border-radius: 0.02rem;
  margin-left: 0.16rem;
  margin-top: 0.38rem;
}
.Press span {
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #9c9eb9;
  line-height: 0.44rem;
  margin-left: 0.04rem;
  margin-top: 0.38rem;
}
.keyboard ul {
  width: 5.82rem;
  display: flex;
  flex-wrap: wrap;
}
.keyboard ul li {
  width: 1.9rem;
  height: 1.06rem;
  background: #ffffff;
  border: 0.02rem solid #f1f0f1;
  list-style-type: none;
  font-size: 0.4rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2d3142;
  text-align: center;
  line-height: 1.06rem;
}
.keyboard ul li img {
  width: 0.6rem;
  height: 0.6rem;
  margin-top: 0.22rem;
}
.keyboard {
  position: relative;
  height: 4.92rem;
  background-color: #ffffff;
}
.delete {
  width: 1.64rem;
  height: 2.12rem;
  background: #ffffff;
  border: 0.02rem solid #f1f0f1;
  position: absolute;
  top: 0;
  left: 5.82rem;
}

.delete img {
  width: 0.6rem;
  height: 0.6rem;
  margin-top: 0.76rem;
  margin-left: 0.6rem;
  position: absolute;
}
.keyboard button {
  position: absolute;
  width: 1.7rem;
  height: 2.24rem;
  background: #2bb5fe;
  border: 0.02rem solid #f1f0f1;
  left: 5.82rem;
  top: 2.16rem;
  font-size: 0.4rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.56rem;
}
</style>