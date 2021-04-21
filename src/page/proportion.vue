<template>
  <div class="box">
    <top class="top" :style="sty" @completer="srw"></top>
    <count class="count"></count>
    <bottom class="bottom" :list="code"></bottom>
  </div>
</template>

<script>
import top from "../components/proportion-top.vue";
import count from "../components/proportion-count.vue";
import bottom from "../components/bottom.vue";
export default {
  data() {
    return {
      aeebs: false,
      code:1,
      sty:""
    };
  },
  mounted() {},
  methods: {
    aeeds() {
      this.aeebs = true;
    },
    srw(){
     this.sty="z-index: 1"
    }
  },
  components: {
    top,
    count,
    bottom,
  },
};
</script>

<style  scoped>
.box {
  width: 7.5rem;
  height: 16.24rem;
  background: #f4f6fa;
}
.top {
  position: fixed;
  top: 0;
  left: 0;
}
.count {
  position: fixed;
  top: 3rem;
  left: 0.56rem;
  
}
.bottom {
   left: 0;
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px -5px 30px 0px rgba(45, 49, 66, 0.1);
  border-radius: 20px 20px 0px 0px;
  position: fixed;
  bottom: 0;
}
</style>