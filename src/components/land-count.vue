<template>
  <div class="vft">
    <div class="vft-top">
      <img :src="imgs" />
    </div>
    <p class="item">这里是sloganXXXXXXXXXXXXXX</p>
    <ul class="text-box">
      <li class="text-box-count">
        <input type="text" v-model="password_one" />
      </li>
      <li class="text-box-count">
        <input type="text" v-model="password_two" />
      </li>
      <li class="text-box-count">
        <input type="text" v-model="password_three" />
      </li>
      <li class="text-box-count">
        <input type="text" v-model="password_four" />
      </li>
    </ul>
    <button @click="add()">{{ Resend }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require("../assets/liwu.png"),
      eliminate: require("../assets/qinchu.png"),
      password_one: "",
      password_two: "",
      password_three: "",
      password_four: "",
      Resend: "重新发送",
      code:''
    };
  },
  mounted() {},
  methods: {
    add() {
      let thet = this;
      let nub = 5;
      let countDown = setInterval(function () {
        nub--;
        if (nub != 0) {
       thet.Resend ='('+nub+"秒"+')'
        } else {
          clearInterval(countDown); 
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
          thet.$emit("content",this.code)
          thet.Resend="重新发送"
        }
      }, 1000);
    },
    arr() {
      let array = [
        this.password_one,
        this.password_two,
        this.password_three,
        this.password_four,
      ];
      console.log(array);
      if (array == this.password) {
        alert("验证码输入正确");
      } else {
        alert("验证码错误");
        this.password_one = "";
        this.password_two = "";
        this.password_three = "";
        this.password_four = "";
      }
    },
  },
  props: {
    password: {
      type: Array,
    },
  },
  watch: {
    password_four(val, oldVal) {
      if (val != "") {
        this.arr();
      }
      console.log(oldVal);
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
  margin: 1.2rem 0 0 0.58rem;
  display: flex;
}
.text-box-count {
  width: 1.16rem;
  height: 1.2rem;
  background: #ffffff;
  box-shadow: 0px 0.2rem 0.4rem 0rem rgba(64, 117, 205, 0.08);
  border-radius: 0.32rem;
  margin-left: 0.34rem;
}
.text-box-count input {
  width: 0.36rem;
  height: 1.2rem;
  border-radius: 0.32rem;
  outline: none;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  color: aqua;
}
.vft button {
  margin-left: 3rem;
  color: #9c9eb9;
  line-height: 20px;
  font-weight: 400;
  font-size: 14px;
  outline: none;
}
</style>