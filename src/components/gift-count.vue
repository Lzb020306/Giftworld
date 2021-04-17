<template>
  <div>
    <div class="gift-top">
      <img :src="revert" />
      <p>选择礼物</p>
    </div>
    <div class="gift-count">
      <ul class="gift-left">
        <li v-for="(item, index) in Grade" :key="index">
          {{ item }}
        </li>
      </ul>
      <div class="gift-right">
        <h2>三级礼物</h2>
        <ul class="gift-third">
          <li v-for="(item, index) in Level3" :key="index">
            <img :src="item.Icon" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
        <h2 class="four">四级礼物</h2>
        <ul class="gift-fourth">
          <li v-for="(item, index) in Level4" :key="index">
            <img :src="item.Icon" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      revert: require("../assets/heifanhui.png"),
      Grade: ["一级", "二级", "三级", "四级", "五级", "六级", "七级", "八级"],
      Level3: [],
      Level4: [],
      ranking: [],
    };
  },
  mounted() {
    this.$axios
      .get("./gift.json")
      .then((response) => {
        // console.log(response.data);
        this.ranking = response.data;
        this.ranking.forEach((i) => {
          if (i.id == 3) {
            i.Icon = require("@/assets/" + i.Icon);
            this.Level3.push(i);

            console.log(this.Level3);
          } else {
            i.Icon = require("@/assets/" + i.Icon);
            this.Level4.push(i);
            console.log(this.Level4);
          }
        });
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods: {},
};
</script >

<style  scoped>
.gift-top {
  display: flex;
  width: 6.36rem;
  margin-left: 0.58rem;
  padding-bottom: 0.3rem;
  border-bottom: 0.04rem solid #2d3142;
}
.gift-top img {
  margin-top: 0.3rem;
  margin-left: 0.1rem;
}
.gift-top p {
  margin: 0.26rem 0 0 1.94rem;
  width: 1.48rem;
  height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.5rem;
}
.gift-count {
  height: 89.5vh;
  margin-left: 0.56rem;
  display: flex;
}
.gift-left {
  height: 100%;
  width: 1.44rem;
  margin-top: 0.36rem;
  border-right: 0.02rem solid #0000000a;
}
.gift-left li {
  margin-top: 0.6rem;
  display: block;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9c9eb9;
  line-height: 0.36rem;
}
.gift-right {
  margin-top: 0.32rem;
  margin-left: 0.18rem;
}
.gift-right h2 {
  width: 1.14rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.4rem;
}

.gift-third {
  width: 222px;
  display: flex;
  flex-wrap: wrap;
}
.gift-third img {
  width: 1.32rem;
  height: 1.32rem;
}
.gift-third p{
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.36rem;
  margin-top: 0.16rem;
}
.gift-third li {
  display: flex;
  flex-direction: column;
  width: 1.32rem;
  margin-top: 0.3rem;
  margin-left: 0.16rem;
  
}
.gift-fourth {
  width: 4.44rem;
  display: flex;
  flex-wrap: wrap;
}
.gift-fourth img {
  width: 1.32rem;
  height: 1.32rem;
}
.gift-fourth p{
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.36rem;
  margin-top: 0.16rem;
}
.gift-fourth li {
  display: flex;
  flex-direction: column;
  width: 1.32rem;
  margin-top: 0.3rem;
  margin-left: 0.16rem;
}
.four {
  margin-top: 1rem;
}
</style>