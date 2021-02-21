<template>
  <div class="warehouse">
    <div class="warehouse-left">
      <ul>
        <li v-for="(item, index) in sort" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="warehouse-box">
      <h3>三级礼物（10/20）</h3>
      <ul>
        <li v-for="(item, index) in ranking" :key="index">
          <img :src="item.chart" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: ["一级", "二级", "三级", "四级", "五级", "六级", "七级", "八级"],
      ranking: [],
    };
  },
  mounted() {
    this.$axios
      .get("./Warehouse.json")
      .then((response) => {
        console.log(response.data);
        this.ranking = response.data;
        this.ranking.forEach((i) => {
          console.log(i);
          i.chart = require("@/assets/" + i.chart);
        });
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods: {},
};
</script>

<style scoped>
.warehouse {
  display: flex;
}
.warehouse-left{
  border-right: 0.02rem solid #ddd;
  margin-left: 0.56rem;
}
.warehouse-left ul {
  width: 1.44rem;
  height: 8.92rem;
}
.warehouse-left ul li {
  width: 0.54rem;
  height: 0.36rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9c9eb9;
  line-height: 0.36rem;
  padding-top: 0.6rem;
  margin-left: 0.36rem;
}
.warehouse-box ul li img {
  width: 1.32rem;
  height: 1.32rem;
  border: 1px dashed #000;
}
.warehouse-box ul li p {
  width: 0.8rem;
  height: 0.36rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.36rem;
  text-align: center;
  margin-top: 0.16rem;
}
.warehouse-box ul {
  display: flex;
  width: 4.94rem;
  flex-wrap: wrap;
  padding-left: 5px;

}
.warehouse-box ul li {
  /* flex: 33%; */
  margin-left: 0.24rem;
  width: 1.32rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 0.4rem;
}
.warehouse-box h3 {
  width: 3rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #2d3142;
  line-height: 0.4rem;
  margin-left: 0.32rem;
}
</style>