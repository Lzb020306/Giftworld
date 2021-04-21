/* eslint-disable vue/valid-v-bind */
<template>
  <div>
    <div class="myTop">
      <img :src="imgs" @click="land"/>
      <div class="myTopCount">
        <h2>游客007</h2>
        <p>
          <i>Lv.1</i>
          <span>注册/登陆</span>
        </p>
      </div>
      <p class="myLogo">
        <img :src="imges" @click="erweima" />
      </p>
      <span class="myImg">
        <img :src="imgrs" @click="shezhi" />
      </span>
    </div>
    <div class="myDalancePanel" :style="setBackground">
      <div class="myDalancePanel-top">
        <p>
          <i>我的余额</i>
          <span>0</span>
        </p>
        <button>提现</button>
      </div>
      <div class="myDalancePanel-bottom">
        <p>
          <i>金币</i>
          <span>0</span>
        </p>
        <p class="Diamonds">
          <i>钻石</i>
          <span>0</span>
        </p>
        <button>兑换现金</button>
      </div>
      <h2>1000金币=1钻石=1元</h2>
    </div>
    <div class="myList">
      <ul>
        <li
          v-for="(item, index) in ranking"
          :key="index"
          @click="navto(item.url)"
        >
          <img :src="item.logo" />
          <span>{{ item.title }}</span>
          <p>
            <img :src="item.Icon" />
          </p>
        </li>
      </ul>
    </div>
    <div class="myWrite" v-if="Vanish">
      <div class="write" @click="cancel">
        <div class="write-box">
          <img :src="write" />
        </div>
        <p>填写邀请码</p>
        <div class="write-enter">
          <img :src="please" />
          <span></span>
          <input type="text" placeholder="请输入邀请码" v-model="list" />
        </div>
        <button @click="aee">确认</button>
        <div class="warning" v-if="appear">{{ warning }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ranking: [],
      list: "",
      Vanish: false,
      warning: "",
      appear: false,
      please: require("../assets/yaoqingma.png"),
      write: require("../assets/yanzhenmatubiao.png"),
      imgs: require("../assets/tou.png"),
      imges: require("../assets/erweima.png"),
      imgrs: require("../assets/shezhi.png"),
      setBackground: {
        backgroundImage: "url(" + require("../assets/yuebeijing.png") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      },
    };
  },
  mounted() {
    this.$axios
      .get("./my.json")
      .then((response) => {
        console.log(response.data);
        this.ranking = response.data;
        this.ranking.forEach((i) => {
          console.log(i);
          i.logo = require("@/assets/" + i.logo);
          i.Icon = require("@/assets/" + i.Icon);
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
    aee() {
      if (this.list == "") {
        this.warning = "输入验证码为空";
        this.appear = true;
      } else if (this.list != "123456") {
        this.warning = "输入验证码错误";
        this.appear = true;
      } else {
        this.warning = "输入验证码正确";
        this.appear = true;
        setTimeout(() => {
          this.Vanish = false;
        }, 3000);
      }
      setTimeout(() => {
        this.appear = false;
      }, 2000);
    },
    navto(e) {
      if (e == "") {
        this.Vanish = true;
      }else{
        this.$router.push(e);
      }
    },
    shezhi() {
      this.$router.push("/setup");
    },
    erweima() {
      this.$router.push("/Invitationcode");
    },
    land(){
      this.$router.push("/verification")
    },
    cancel(){
      this.Vanish = false;
    }

  },
};
</script>

<style  scoped>
.myTop {
  display: flex;
  margin-left: 0.58rem;
  margin-top: 0.64rem;
}
.myTop img {
  width: 1rem;
  height: 1rem;
}
.myImg {
  margin-left: 0.6rem;
  margin-top: 0.26rem;
}
.myLogo {
  margin-left: 1.42rem;
  margin-top: 0.26rem;
}

.myLogo img {
  display: block;
  width: 0.48rem;
  height: 0.48rem;
}
.myImg img {
  display: block;
  width: 0.48rem;
  height: 0.48rem;
}
.myTopCount {
  display: flex;
  flex-direction: column;
  margin-left: 0.32rem;
}
.myTopCount h2 {
  width: 1.62rem;
  height: 0.56rem;
  font-size: 0.4rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.56rem;
  letter-spacing: 0.02rem;
}
.myTopCount p {
  height: 0.36rem;
  display: flex;
  margin-top: 0.12rem;
}
.myTopCount p i {
  display: block;
  width: 0.72rem;
  height: 0.32rem;
  background: #2bb5fe;
  border-radius: 0.08rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.28rem;
  text-align: center;
  font-style: normal;
}
.myTopCount p span {
  display: block;
  width: 1.28rem;
  height: 0.32rem;
  background: #2bb5fe;
  border-radius: 0.08rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.28rem;
  text-align: center;
  margin-left: 0.1rem;
}
.myDalancePanel {
  width: 6.38rem;
  height: 3.4rem;
  margin-left: 0.56rem;
  margin-top: 0.6rem;
}
.myList {
  margin-top: 0.54rem;
}
.myList ul li {
  display: flex;
}
.myList ul li span {
  width: 1.64rem;
  height: 0.44rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 0.44rem;
  margin-top: 0.26rem;
  margin-left: 0.44rem;
}
.myList ul li img {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.28rem;
  margin-left: 0.68rem;
}
.myList ul li p {
display: flex;
  margin-left: 3.26rem;
}
.myList ul li p img {
  margin:  0;
  margin-top: 0.28rem;
  margin-bottom: 0.32rem;
}
.myDalancePanel-top {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.2rem 0.32rem 0 0.4rem;
}
.myDalancePanel-bottom {
  display: flex;
  padding: 0.2rem 0 0 0.4rem;
  outline: none;
}
.myDalancePanel-top p {
  flex: 50%;
  display: flex;
  flex-flow: column;
}
.myDalancePanel-bottom p {
  width: 0.6rem;
}
.myDalancePanel-top p i,
.myDalancePanel-bottom p i {
  display: block;
  width: 0.98rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.34rem;
  font-style: normal;
}
.myDalancePanel-top p span,
.myDalancePanel-bottom p span {
  display: block;
  width: 0.28rem;
  height: 0.72rem;
  font-size: 0.6rem;
  font-family: BarlowCondensed-SemiBold, BarlowCondensed;
  font-weight: 600;
  color: #ffffff;
  line-height: 0.72rem;
}
.myDalancePanel-top button {
  display: block;
  width: 1.52rem;
  height: 0.76rem;
  background-color: #ffffff;
  border-radius: 0.4rem;
  font-weight: 500;
  color: #5d9dc5;
  font-size: 0.28rem;
  border: 0;
  outline: none;
  margin-top: 0.26rem;
}
.myDalancePanel-bottom button {
  background-color: #4982a7;
  display: block;
  width: 1.2rem;
  height: 0.4rem;
  border-radius: 0.4rem 0.4rem 0.4rem 0;
  font-size: 0.24rem;
  /* font-family: PingFangSC-Regular, PingFang SC; */
  font-weight: 400;
  color: #ffffff;
  line-height: 0.34rem;
  margin-left: 0.12rem;
  outline: none;
}
.Diamonds {
  margin-left: 1.5rem;
}
.myDalancePanel h2 {
  width: 2.5rem;
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.34rem;
  margin-top: 0.34rem;
  margin-left: 0.4rem;
}
.myWrite {
  width: 7.5rem;
  height: 16.24rem;
  background: rgba(86, 87, 88, 0.5);
  position: absolute;
  top: 0;
}
.write {
  width: 6.38rem;
  height: 8.2rem;
  background: #2bb5fe;
  border-radius: 0.6rem;
  margin-top: 3.4rem;
  margin-left: 0.56rem;
  position: relative;
}
.write p {
  font-size: 0.6rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.84rem;
  margin-top: 0.2rem;
  margin-left: 1.66rem;
}
.write-box img {
  width: 3.06rem;
  height: 2.9rem;
  margin-top: -0.38rem;
  margin-left: 1.66rem;
}
.write-enter {
  width: 5.58rem;
  height: 1.12rem;
  background: #f4f6fa;
  border-radius: 0.32rem;
  opacity: 0.6981;
  margin-top: 0.4rem;
  margin-left: 0.4rem;
  display: flex;
}
.write-enter img {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.36rem;
  margin-left: 0.4rem;
}
.write-enter span {
  width: 0.02rem;
  height: 0.64rem;
  background-color: #979797;
  margin-left: 0.28rem;
  margin-top: 0.24rem;
}
.write-enter input {
  padding-left: 0.4rem;
  outline: none;
}
.write button {
  width: 4.38rem;
  height: 1.12rem;
  background: #ffffff;
  border-radius: 0.32rem;
  margin-top: 1rem;
  margin-left: 1rem;
  outline: none;
}
.warning {
  width: 4.58rem;
  height: 0.72rem;
  background: rgba(23, 100, 141, 0.5);
  border-radius: 0.36rem;
  position: absolute;
  top: 3.4rem;
  left: 0.9rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.36rem;
  text-align: center;
  line-height: 0.72rem;
}
</style>