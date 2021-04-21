<template>
  <div class="vft">
    <div class="vft-top">
      <img :src="imgs" />
    </div>
    <p class="item">这里是sloganXXXXXXXXXXXXXX</p>
    <div class="vft-count">
      <div class="vft-list">
        {{ this.list[0] }}
      </div>
      <div class="vft-list">
        {{ this.list[1] }}
      </div>
      <div class="vft-list">
        {{ this.list[2] }}
      </div>
      <div class="vft-list">
        {{ this.list[3] }}
      </div>
      <input class="inpt" type="text" maxlength="4" @input="inputVal" />
    </div>

    <button @click="add()">{{ Resend }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: require("../assets/liwu.png"),
      eliminate: require("../assets/qinchu.png"),
      Resend: "重新发送",
      code: "",
      list: [],
    };
  },
  mounted() {},
  methods: {
    inputVal(e) {
      // console.log(e.target.value);
      // console.log(e.target.value.split(""));
      let val = e.target.value;
      let res = /^[0-9]*$/;
      if (res.test(val) == true) {
        this.list = e.target.value.split("");
        console.log(this.list);
        if(this.list.length>=4){
          this.arr()
        }
      } else {
        alert("验证码不能输入字母");
      }
    },
    add() {
      let thet = this;
      let nub = 5;
      let countDown = setInterval(function () {
        nub--;
        if (nub != 0) {
          thet.Resend = "(" + nub + "秒" + ")";
        } else {
          clearInterval(countDown);
          let code = "";
          //设置长度这里设置了4
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
          thet.$emit("content", this.code);
          thet.Resend = "重新发送";
        }
      }, 1000);
    },
    arr() {
      // console.log(this.password.join()) 
      // this.list.join()
      if ( this.password.join() == this.list.join()) {
        alert("验证码输入正确");
        this.list=""
        this.$router.push("/my")
      } else {
        alert("验证码错误");
      }
    },
    // },
   
  },
   props: {
      password: {
        type: Array,
        default: function(){
          return[];
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
.vft-count {
  display: flex;
  margin-top: 1.2rem;
  margin-left: 0.58rem;
  position: relative;
}
.inpt {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}
.vft-list {
  width: 1.16rem;
  height: 1.2rem;
  background: #ffffff;
  box-shadow: 0rem 0.2rem 0.4rem 0rem rgba(64, 117, 205, 0.08);
  border-radius: 0.32rem;
  margin-left: 0.34rem;
  font-size: 0.6rem;
  text-align: center;
  line-height: 1.2rem;
}
.vft-list input {
  background-color: transparent;
  outline: none;
  width: 1.16rem;
  height: 1.2rem;
  padding-left: 0.4rem;
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