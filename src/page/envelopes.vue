<template>
  <div class="envelopes-box">
    <div class="envelopes-box-top">
      <img :src="imgs"  @click="ret">
      <p>了解更多</p>
    </div>
    <p>集满全部礼物可获得全球分红</p>
    <span>永久获得平台30%广告收益</span>
    <envelopes class="lopes"></envelopes>
  </div>
</template>

<script>
import envelopes from "../components/introduce.vue";
export default {
  data() {
    return {
      imgs: require("../assets/fanhui.png"),
    };
  },
  mounted() {},
  methods: {
      ret(){
           this.$router.go(-1);
      }
  },
  components: {
    envelopes,
  },
};
</script>

<style  scoped>
.envelopes-box {
  width: 7.5rem;
  height: 3.76rem;
  background: #f5717f;
  box-shadow: 0px 0.4rem 0.4rem 0px rgba(64, 117, 205, 0.08);
}
.envelopes-box p {
  width: 4.68rem;
  height: 0.5rem;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.5rem;
  margin-top: 0.16rem;
  margin-left: 1.42rem;
}
.envelopes-box span{
display: block;
width: 4.06rem;
height: 0.52rem;
background: #FFFFFF;
border-radius: 0.28rem;
font-size: 0.28rem;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #F5717F;
line-height: 0.4rem;
text-align: center;
line-height: 0.52rem;
 margin-top: 0.16rem;
  margin-left: 1.72rem;
}
.lopes {
  position: absolute;
  top: 3.7rem;
  width: 100%;
}
.envelopes-box-top {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  /* padding: 0.3rem 0.56rem 0 0.68rem; */
  width: 7.5rem;
height: 1rem;
padding-top: 0.4rem;
}
.envelopes-box-top img{
width: 0.4rem;
height: 0.4rem;
margin: 0.3rem 0 0.3rem 0.68rem;
}
.envelopes-box-top p {
  width: 1.12rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.4rem;
margin: 0.3rem 0.56rem 0.3rem 0;

}

</style>