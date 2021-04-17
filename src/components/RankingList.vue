<template>
  <div>
    <div class="rankingBox">
      <ul>
        <li
          v-for="(individual, index) in msg"
          :key="index"
          @click="list(index)"
          :style="{
            color: individual.active ? 'rgba(43, 181, 254, 1)' : '#4C5980',
            borderbottom: individual.active ? '#2BB5FE' : 'transparent',
          }"
        >
          {{ individual.name }}
          <span v-if="individual.active"></span>
        </li>
      </ul>
      <div v-for="(item, index) in ranking" :key="index" class="ranking-box">
        <span :style="{ 'background-image': 'url(' + item.back + ')' }">{{
          item.id
        }}</span>
        <img :src="item.portrait" />
        <i>{{ item.name }}</i>
        <span class="ranking-box-company">{{ item.income }}</span>
        <p>{{ item.Company }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ranking: [],
      msg: [
        {
          name: "分红排行",
          active: true,
        },
        { name: "收益排行", active: false },
        { name: "金币排行", active: false },
      ],
    };
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.$axios
      .get("./chart.json")
      .then((response) => {
        console.log(response.data);
        this.ranking = response.data;
        this.ranking.forEach((i) => {
          console.log(i);
          if (i.back == undefined) {
            i.portrait = require("@/assets/" + i.portrait);
          } else {
            i.portrait = require("@/assets/" + i.portrait);
            i.back = require("@/assets/" + i.back);
          }
        });
        //   this.ranking.forEach((j) => {
        //   console.logy(j);
        //   j.portrait = require("@/assets/" + j.portrait);
        // });
      })
      .catch((error) => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods: {
    list(e) {
      this.msg.map((item) => {
        item.active = false;
      });
      this.msg[e].active = true;
      
    },
  },
};
</script>

<style  scoped>
.ranking-box {
  margin-left: 0.56rem;
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
}

.ranking-box img {
  width: 0.64rem;
  height: 0.64rem;
  margin-left: 0.4rem;
}
.ranking-box span {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  background-size: cover;
  font-weight: 600;
  font-size: 0.32rem;
  line-height: 0.8rem;
  text-align: center;
  color: #000;
}
.ranking-box i {
  width: 1.12rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000;
  font-style: normal;
  line-height: 0.4rem;
  margin-left: 0.2rem;
}
.rankingBox {
  width: 7.5rem;

  background: #fff;
  box-shadow: 0px 0.2rem 0.6rem 0rem rgba(112, 136, 210, 0.1);
  border-radius: 0.6rem 0.6rem 0rem 0rem;
}
.rankingBox ul {
  width: 100%;
  display: flex;
  margin-left: -19px;
}
.rankingBox ul li {
  height: 100%;
  display: inline;
  text-align: center;
  width: 1.5rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  /* color: #2bb5fe; */
  line-height: 0.4rem;
  margin: 0.4rem 0 0 0.94rem;
  padding-bottom: 10px;
  /* border-bottom: 2px solid rgba(43, 181, 254, 1); */
}

.rankingBox ul li span {
  display: block;
  margin-left: 0.42rem;
  width: 0.66rem;
  height: 0.06rem;
  background: #2bb5fe;
  border-radius: 0.06rem;
  margin-top: 0.14rem;
}
.ranking-box-company {
  width: 1.44rem;
  display: flex;
  margin-left: 1.66rem;
}
.ranking-box p {
  width: 0.28rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.4rem;
  margin-left: 0.5rem;
}
</style>
