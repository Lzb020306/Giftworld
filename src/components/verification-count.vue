<template>
  <div class="vft">
    <div class="vft-top">
      <img :src="imgs" />
    </div>
    <p class="item">这里是sloganXXXXXXXXXXXXXX</p>
    <div class="text-box">
      <p>+86</p>
      <input type="text" @keyup.enter="search" @input="search($event)" v-model="content"
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
      code: "",
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
      if (/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.content)) {
        let thet = this;
        let nub = 10;
        let add = setInterval(function () {
          nub--;
          console.log(nub);
          if (nub != 0) {
            console.log(this);
            thet.lite = nub + "秒";
          } else {
            clearInterval(add);
            thet.lite = "发送成功";
            let code = "";
            //设置长度，这里看需求，我这里设置了4
            let codeLength = 4;
            //设置随机字符
            let random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
            //循环codeLength 我设置的4就是循环4次
            for (let i = 0; i < codeLength; i++) {
              //设置随机数范围,这设置为0 ~ 36
              var index = Math.floor(Math.random() * 9);
              //字符串拼接 将每次随机的字符 进行拼接
              code += random[index];
            }
            //将拼接好的字符串赋值给展示的code
            this.code = code;
            alert("验证码为" + this.code);
            // thet.$router.push('/land')
            thet.$router.push(`/land?place=${this.code}`)
          }
        }, 1000);
      } else {
        alert("请输入正确电话号码");
      }
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
  width: 0.56rem;
  height: 0.42rem;
  font-size: 0.3rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d3142;
  line-height: 0.42rem;
  padding: 0.4rem 0 0 0.48rem;
}
.text-box input {
  margin-left: 0.8rem;
  width: 1.94rem;
  font-size: 0.3rem;
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