<template>
  <div :style="setBackground" class="top-box">
    <div class="top-count">
      <img :src="imgs" />
      <div class="top-count-box">
        <span>今日汇率</span>
        <p>1000金币=1钻石=1元</p>
      </div>
    </div>
    <div class="top-count-list">
      <ul class="top-count-list-box">
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="changeColor(index)"
        >
          <h1 :style="{ fontWeight: item.active ? '600' : '500' }">
            {{ item.txt }}
          </h1>
          <p :style="{ background: item.active ? 'white' : 'transparent' }"></p>
        </li>
      </ul>
      <p @click="complet">
        筛选
        <img :src="logo" style="height: 0.4rem; width: 0.4rem" />
      </p>
    </div>
    <div v-if="complete" class="scren">
      <div class="screen">
        <div class="screen-top">
          <h2>礼物等级</h2>
          <ul>
            <li
              v-for="(item, index) in liste"
              :key="index"
              @click="screen(index)"
            >
              <p
                :style="{
                  color: item.active ? 'white' : 'black',
                  background: item.active ? 'black' : '#F4F6FA',
                }"
              >
                {{ item.txt }}
              </p>
            </li>
          </ul>
        </div>
        <div class="screen-count">
          <h2>礼物序号</h2>
          <ul>
            <li
              v-for="(item, index) in listr"
              :key="index"
              @click="count(index)"
            >
              <p
                :style="{
                  color: item.active ? 'white' : 'black',
                  background: item.active ? 'black' : '#F4F6FA',
                }"
              >
                {{ item.txt }}
              </p>
            </li>
          </ul>
        </div>
        <div class="screen-bot">
          <button class="bot" @click="Reset">重置</button>
          <button class="butt" @click="completer">完成</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      complete: false,
      imgs: require("../assets/huilv.png"),
      logo: require("../assets/xuanze.png"),
      setBackground: {
        backgroundImage: "url(" + require("../assets/beimian.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
      list: [
        {
          txt: "全部",
          active: true,
        },
        {
          txt: "购买",
          active: false,
        },
        {
          txt: "出售",
          active: false,
        },
      ],
      liste: [
        {
          txt: "一",
          active: false,
        },
        {
          txt: "二",
          active: false,
        },
        {
          txt: "三",
          active: false,
        },
        {
          txt: "四",
          active: false,
        },
        {
          txt: "五",
          active: false,
        },
        {
          txt: "六",
          active: false,
        },
        {
          txt: "七",
          active: false,
        },
        {
          txt: "八",
          active: false,
        },
        {
          txt: "九",
          active: false,
        },
        {
          txt: "十",
          active: false,
        },
        {
          txt: "十一",
          active: false,
        },
        {
          txt: "十二",
          active: false,
        },
        {
          txt: "十三",
          active: false,
        },
        {
          txt: "十四",
          active: false,
        },
        {
          txt: "十五",
          active: false,
        },
      ],
      listr: [
        {
          txt: "普通（1-15）",
          active: false,
        },
        {
          txt: "珍惜（1-15）",
          active: false,
        },
        {
          txt: "稀缺（1-15）",
          active: false,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    changeColor(i) {
      this.list.map((item) => {
        item.active = false;
      });
      this.list[i].active = true;
    },
    screen(e) {
      this.liste.map((item) => {
        item.active = false;
      });
      this.liste[e].active = true;
    },
    count(w) {
      this.listr.map((item) => {
        item.active = false;
      });
      this.listr[w].active = true;
    },
    Reset() {
      this.list.map((item) => {
        item.active = false;
      });
      this.liste.map((item) => {
        item.active = false;
      });
      this.listr.map((item) => {
        item.active = false;
      });
    },
    completer() {
      this.complete = false;
     this.$emit("comple" ,true)
    },
    complet() {
      this.complete = true;
       this.$emit("completer" ,true)
    },
  },
};
</script>

<style scoped>
.top-box {
  height: 3.68rem;
  width: 7.5rem;
}
.top-count {
  display: flex;
  padding: 54px 0 0 31px;
}
.top-count img {
  width: 0.64rem;
  height: 0.64rem;
}
.top-count-box {
  margin-left: 0.24rem;
}
.top-count-box span {
  display: block;
  font-weight: 500;
  color: #ffffff;
  /* line-height: 22px; */
  font-size: 0.32rem;
}
.top-count-box p {
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  /* line-height: 17px; */
  font-size: 0.24rem;
}
.top-count-list {
  margin-left: 0.08rem;
  display: flex;
  margin-top: 0.2rem;
}
.top-count-list p {
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.4rem;
  display: flex;
  margin-left: 1.7rem;
  margin-top: 0.2rem;
}
.top-count-list-box {
  display: flex;
}
.top-count-list-box li {
  display: flex;
  flex-wrap: wrap;
  width: 0.9rem;
  height: 0.6rem;
  margin-left: 0.44rem;
  margin-top: 0.2rem;
list-style-type: none;

}
.top-count-list-box li h1 {
  flex: 100%;
  text-align: center;
  font-size: 0.28rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.4rem;
}
.top-count-list-box li p {
  width: 0.66rem;
  height: 0.06rem;
  background: #ffffff;
  border-radius: 0.06rem;
  margin: 0;
  margin-left: 6px;
  margin-top: 0.14rem;
}
.screen {
  width: 7.5rem;
  height: 7.72rem;
  background: #ffffff;
  margin-top: 10px;
}
.screen-top {
  overflow: hidden;
}
.screen-top h2 {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9c9eb9;
  line-height: 0.34rem;
  margin-top: 0.4rem;
  margin-left: 0.4rem;
}
.screen-top ul li {
  flex: 20%;
  margin-top: 0.28rem;
    list-style-type: none;

}
.screen-top ul li p {
  width: 1.24rem;
  height: 0.68rem;
  background: #f4f6fa;
  border-radius: 0.2rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.68rem;
  text-align: center;
}
.screen-top ul {
  width: 6.68rem;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.28rem;
}
.screen-count h2 {
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9c9eb9;
  line-height: 0.34rem;
  margin-top: 0.6rem;
  margin-left: 0.4rem;
}
.screen-count ul {
  display: flex;
  margin-left: 0.24rem;
  margin-top: 0.32rem;
}
.screen-count ul li {
  margin-left: 0.16rem;
    list-style-type: none;

}
.screen-count ul li p {
  width: 2.12rem;
  height: 0.68rem;
  background: #f4f6fa;
  border-radius: 0.2rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #4c5980;
  line-height: 0.68rem;
  text-align: center;
}
.screen-bot {
  display: flex;
  margin-top: 1rem;
}
.butt {
  width: 3.76rem;
  height: 1.12rem;
  background: #2bb5fe;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.44rem;
  outline: none;
}
.bot {
  width: 3.76rem;
  height: 1.12rem;
  border: 0.02rem solid #9c9eb9;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #9c9eb9;
  line-height: 0.44rem;
  outline: none;
}
.scren {
  height: 13.24rem;
  width: 7.5rem;
  background-color: rgba(85, 86, 87, 0.5);
}
</style>